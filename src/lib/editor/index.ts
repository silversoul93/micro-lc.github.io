import type { Config } from '@micro-lc/interfaces/schemas/v2'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ReplaySubject, startWith, BehaviorSubject, filter, fromEvent, NEVER, Subscription, tap } from 'rxjs'

import type { Render } from '../iframe'

import { defaultConfiguration } from './default'
import type { CancellationToken, Editor, Uri, UriComponents } from './monaco'
import * as monaco from './monaco'
import { createFileNameFromSchemaKey, JSON_EXTENSION, YAML_EXTENSION } from './schemas'
import type { ModelType, ValidationError } from './translations'
import { dump, translate } from './translations'

const INIT_MODEL_DELAY = 500

const globalMonacoOptions: Editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true,
  insertSpaces: true,
  minimap: { autohide: true },
  model: null,
  renderWhitespace: 'boundary',
  scrollBeyondLastLine: false,
  tabSize: 2,
}

const noop = (..._: unknown[]) => { /* no-op */ }

const openExternal = (
  _href: string,
  _ctx: { preferredOpenerId?: string; sourceUri: UriComponents },
  _token: CancellationToken
): Promise<boolean> => {
  // TODO: understand how to handle external links
  return Promise.resolve(true)
}

const overrideOpenExternal = (editor: Editor.IStandaloneCodeEditor): void => {
  const linkDetector = editor.getContribution('editor.linkDetector')
  if (linkDetector) {
    // SAFETY: it refers to the following contribution:
    //   ==> https://github.com/microsoft/vscode/blob/bd32dd5c8fae9c19cc7cd2455d32ccf41cb74b45/src/vs/editor/contrib/links/browser/links.ts
    //   ==> https://github.com/microsoft/vscode/blob/bd32dd5c8fae9c19cc7cd2455d32ccf41cb74b45/src/vs/platform/opener/common/opener.ts#L74
    //   ==> https://github.com/microsoft/vscode/blob/bd32dd5c8fae9c19cc7cd2455d32ccf41cb74b45/src/vs/platform/opener/common/opener.ts#L61
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    linkDetector.openerService._defaultExternalOpener.openExternal = openExternal
  }
}

const addCtrlEnterSupport = (triggerer: Element | null, editor: Editor.IStandaloneCodeEditor): void => {
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
    triggerer?.dispatchEvent(new KeyboardEvent('keypress', { ctrlKey: true, key: 'Enter' }))
  })
}

const addCtrlSpaceSupport = (triggerer: Element | null, editor: Editor.IStandaloneCodeEditor): void => {
  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Space, () => {
    triggerer?.ownerDocument.defaultView?.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: ' ' }))
  })
}

export function getJsonValue(currentEditor: Editor.IStandaloneCodeEditor, { lintErrorIsError }: {lintErrorIsError?: boolean} = {}): ValidationError | undefined {
  const currentModel = currentEditor.getModel()
  if (currentModel === null) {
    return
  }

  const { uri: resource } = currentModel
  const { editor: me, MarkerSeverity } = monaco
  const { ok, warnings, errors } = me.getModelMarkers({ resource })
    .reduce<{errors: string[]; ok: boolean; warnings: string[]}>((markers, { severity, message }) => {
      if (severity === MarkerSeverity.Error) {
        markers.ok = false
        markers.errors.push(message)
      } else if (severity === MarkerSeverity.Warning) {
        if (lintErrorIsError) {
          markers.ok = false
        }
        markers.warnings.push(message)
      }

      return markers
    }, { errors: [], ok: true, warnings: [] })

  const lang = currentModel.getLanguageId()
  if (!(lang === 'json' || lang === 'yaml')) {
    return {
      error: true,
      messages: ['No available language'],
      value: undefined,
    }
  }

  if (!ok) {
    return { error: true, messages: [...errors, ...(lintErrorIsError ? warnings : [])], value: undefined }
  }

  const translated = translate(currentEditor.getValue()).from(lang).to('json')
  return {
    ...translated,
    messages: [
      ...warnings,
      ...translated.messages,
    ],
  }
}

const format = async (editor: Editor.IStandaloneCodeEditor, modelType: ModelType, value: string) =>
  monaco.getWorker(modelType)
    .then(
      (worker) => {
        let resolveWorker: ((worker: Worker | void) => void) | undefined
        const promise = new Promise<Worker | void>((resolve) => { resolveWorker = resolve })
        const dispose = editor.onDidChangeModelContent(() => {
          dispose.dispose()
          resolveWorker?.(worker)
        })
        editor.setValue(value)
        return promise
      },
      () => editor.setValue(value),
    )
    .then((worker) => {
      if (!worker) {
        return Promise.reject(new TypeError(`Could not react worker for model ${modelType}`))
      }

      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          editor.getAction('editor.action.formatDocument')?.run()
            .then(() => editor.getAction('editor.foldAll')?.run())
            .then(() => editor.getAction('editor.unfold')?.run())
            .then(resolve)
            .catch(reject)
            .finally(() => clearTimeout(timeout))
        }, INIT_MODEL_DELAY)
      })
    })
    .catch(noop)

const setValue = (
  editor: Editor.IStandaloneCodeEditor,
  models: Record<ModelType, Uri | undefined>,
  modelType: ModelType,
  value: string
) => {
  const uri = models[modelType]
  const { editor: me } = monaco
  const currentModel = editor.getModel()
  const model = (uri && (me.getModel(uri) || me.createModel(value, modelType, uri))) ?? null

  // changing model
  let done: Promise<unknown> = Promise.resolve()
  if (currentModel !== model) {
    const onModelChangeDispose = editor.onDidChangeModel(() => {
      done = format(editor, modelType, value)
      onModelChangeDispose.dispose()
    })

    editor.setModel(model)
    // keeping the same model
  } else {
    done = format(editor, modelType, value)
  }

  return done
}

const MLC_SESSION_CONTENT_KEY = '@microlc:_content'

const getStoredContent = (self: Window): string => self.localStorage.getItem(MLC_SESSION_CONTENT_KEY) ?? JSON.stringify(defaultConfiguration)

const setStoredContent = (self: Window, content: string): void => self.localStorage.setItem(MLC_SESSION_CONTENT_KEY, content)

const getJsonValueCallback = (currentEditor: Editor.IStandaloneCodeEditor): ValidationError | undefined =>
  getJsonValue(currentEditor)

function useEditor(
  render: ReplaySubject<Render>,
  initialModelType: ModelType,
  dispatchers: {errorMessage: (value: ValidationError | string | undefined) => void; loading: (value: boolean) => void}
) {
  const editorRef = useRef<HTMLDivElement | null>()

  // loading
  const queue = useMemo(() => new BehaviorSubject<boolean>(true), [])
  const lock = useCallback(() => queue.next(true), [queue])
  const release = useCallback(() => queue.next(false), [queue])
  useEffect(() => {
    const subscription = queue.subscribe((loading) => dispatchers.loading(loading))
    return () => subscription.unsubscribe()
  }, [queue, dispatchers])

  const models = useMemo<Record<ModelType, Uri | undefined>>(() => {
    return {
      json: monaco.Uri.parse(createFileNameFromSchemaKey(undefined, '*.config', JSON_EXTENSION)),
      yaml: monaco.Uri.parse(createFileNameFromSchemaKey(undefined, '*.config', YAML_EXTENSION)),
    }
  }, [])

  //
  // initialize editor
  //
  const [editor, setEditor] = useState<Editor.IStandaloneCodeEditor>()
  useEffect(() => {
    // skip when no reference is available
    const { current: ref } = editorRef
    if (!ref) {
      return
    }

    const { editor: me } = monaco
    const currentEditor = me.create(ref, globalMonacoOptions)

    let observerCleanup: (() => void) | undefined
    if (ref.parentElement !== null) {
      // initial height
      let initialTotal = 0
      ref.parentElement.childNodes.forEach((item) => {
        if (item !== ref && 'clientHeight' in item && typeof item.clientHeight === 'number') {
          initialTotal += item.clientHeight
        }
      })
      currentEditor.layout({ height: ref.parentElement.clientHeight - initialTotal, width: ref.parentElement.clientWidth })
      // listen to resize
      const { parentElement } = ref
      const observer = new ResizeObserver(([{ contentRect }]) => {
        let total = 0
        parentElement.childNodes.forEach((item) => {
          if (item !== ref && 'clientHeight' in item && typeof item.clientHeight === 'number') {
            total += item.clientHeight
          }
        })

        currentEditor.layout({ height: contentRect.height - total, width: contentRect.width })
      })

      observer.observe(parentElement)
      observerCleanup = () => observer.disconnect()
    }

    addCtrlEnterSupport(ref.parentElement, currentEditor)
    addCtrlSpaceSupport(ref.parentElement, currentEditor)

    overrideOpenExternal(currentEditor)

    setEditor(currentEditor)

    return () => observerCleanup?.()
  }, [editorRef])

  const [dispatchSubmit, setDispatchSubmit] = useState<() => void>(noop)
  const [dispatchReset, setDispatchReset] = useState<() => void>(noop)
  useEffect(() => {
    const { current } = editorRef
    if (!(editor && current)) {
      return
    }

    const subscription = new Subscription()
    const reset = new ReplaySubject<string>(1)

    let editCleanup: (() => void) | undefined
    const getEditCleanup = () => ({ dispose: editCleanup })

    // read one of
    reset
      .pipe(
        startWith(getStoredContent(window))
      )
      .subscribe((config) => {
        lock()

        let content = defaultConfiguration
        try {
          content = JSON.parse(config) as Config
        } catch {
          console.error('local storage was corrupted')
        }

        const result = dump(content).to(initialModelType)
        if (result.error) {
        // an error here means that either backend is corrupted or
        // for some reason the config was stored but it is not compliant
          dispatchers.errorMessage(result)
          return release()
        }

        setValue(editor, models, initialModelType, result.value)
          .finally(() => {
            render.next({ configuration: JSON.parse(config) as Config, contexts: new Map(), tags: [] })
            release()
          })
      })

    // writing
    const ctrlEnter$ = current.parentElement ? fromEvent<KeyboardEvent>(current.parentElement, 'keypress') : NEVER
    const submitValidConfig = (override?: string): Config | undefined => {
      let result: ValidationError | undefined
      if (override !== undefined) {
        reset.next(override)
        result = {
          error: false,
          messages: [],
          value: override,
        }
      } else {
        result = getJsonValueCallback(editor)
        console.log('res', result)
        if (!result || result.error) {
          result && dispatchers.errorMessage({ ...result, messages: ['components.editor.error'] })
          return
        }
      }

      setStoredContent(window, result.value)
      render.next({ configuration: JSON.parse(result.value) as Config, contexts: new Map(), tags: [] })
      dispatchers.errorMessage(result.messages.length === 0 ? '' : { ...result, messages: ['components.editor.warning'] })
    }

    // should submit on each:
    // - Ctrl + Enter
    // - call to dispatchSubmit function
    subscription.add(ctrlEnter$
      .pipe(
        filter((event) => event.key === 'Enter' && event.ctrlKey),
        tap((event) => { event.stopPropagation() })
      )
      .subscribe(() => submitValidConfig())
    )

    setDispatchSubmit(() => () => submitValidConfig())
    setDispatchReset(() => () => submitValidConfig(JSON.stringify(defaultConfiguration)))

    return () => {
      getEditCleanup().dispose?.()
      subscription.unsubscribe()
    }
  }, [editorRef, editor, lock, release, dispatchers, render])


  const handleChangeModel = useCallback((nextModel: ModelType): boolean => {
    lock()

    if (!(editor)) {
      release()
      return false
    }

    const jsonTextResults = getJsonValueCallback(editor)
    if (!jsonTextResults) {
      release()
      return false
    }

    const { error: conversionToJsonError, value: jsonText } = jsonTextResults
    if (conversionToJsonError) {
      dispatchers.errorMessage({ error: true, messages: ['components.editor.error.conversion'], value: undefined })
      release()
      return false
    }

    const { error, value, messages } = translate(jsonText).from('json').to(nextModel)
    if (error) {
      dispatchers.errorMessage({ error, messages: ['components.editor.error.conversion'], value })
      release()
      return false
    }

    setValue(editor, models, nextModel, value).finally(() => {
      dispatchers.errorMessage(messages.length === 0 ? '' : { error, messages: ['components.editor.warning'], value })
      release()
    })
    return true
  }, [editor, lock, release, dispatchers])

  return { dispatchReset, dispatchSubmit, editorRef, handleChangeModel }
}

export {
  createFileNameFromSchemaKey,
  JSON_EXTENSION,
} from './schemas'
export * from './default'
export { isModelType } from './translations'
export {
  globalMonacoOptions,
  useEditor,
}
export type { Editor }
export type { ValidationError }
export type { ModelType }
