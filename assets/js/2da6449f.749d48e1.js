"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1e3],{55858:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},s),{},{components:n})):i.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=n(48792),r=n(91219),a=(n(76687),n(55858)),o=["components"],l={title:"Application state",description:"Consume content state",sidebar_label:"Application state",sidebar_position:10},c=void 0,p={unversionedId:"api/micro-lc-api/application-state",id:"api/micro-lc-api/application-state",title:"Application state",description:"Consume content state",source:"@site/docs/api/micro-lc-api/application-state.md",sourceDirName:"api/micro-lc-api",slug:"/api/micro-lc-api/application-state",permalink:"/api/micro-lc-api/application-state",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/api/micro-lc-api/application-state.md",tags:[],version:"current",lastUpdatedBy:"Omar El Malak",sidebarPosition:10,frontMatter:{title:"Application state",description:"Consume content state",sidebar_label:"Application state",sidebar_position:10},sidebar:"api",previous:{title:"micro-lc API",permalink:"/api/micro-lc-api/"},next:{title:"Reactive communication",permalink:"/api/micro-lc-api/reactive-communication"}},s={},u=[{value:"<code>currentApplication$</code>",id:"currentapplication",level:2},{value:"<code>getCurrentApplication</code>",id:"getcurrentapplication",level:2},{value:"<code>getCurrentConfig</code>",id:"getcurrentconfig",level:2},{value:"<code>setCurrentConfig</code>",id:"setcurrentconfig",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," API provides a subset of methods and properties to read the current state of the content part\nof the application, and which sub-application is running in it."),(0,a.kt)("p",null,"It provides both an imperative and an event-driven interface from which any subscriber can choose whether to read static\nthe state or react to any change."),(0,a.kt)("h2",{id:"currentapplication"},(0,a.kt)("inlineCode",{parentName:"h2"},"currentApplication$")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Observable, Subscription } from 'rxjs'\nimport { BehaviorSubject } from 'rxjs'\n\nexport interface MicrolcApi {\n  // highlight-next-line\n  readonly currentApplication$: Observable<string | undefined>\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"currentApplication$")," is a ",(0,a.kt)("a",{parentName:"p",href:"https://rxjs.dev/api/index/class/Observable"},"RxJS Observable")," which emits anytime the content\napplication changes."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If no application is found, it emits ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),".")),(0,a.kt)("p",null,"Since ",(0,a.kt)("micro-lc",null)," applications are configured as a key-value pair, where the key is the unique identifier of\nthe application, currentApplication$` return such id as a string."),(0,a.kt)("h2",{id:"getcurrentapplication"},(0,a.kt)("inlineCode",{parentName:"h2"},"getCurrentApplication")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export interface MicrolcApi {\n  // highlight-next-line\n  readonly getCurrentApplication: () => Readonly<Partial<{handlers: Handlers | undefined; id: string}>>\n  // ...rest of the API\n}\n\ntype Handlers = {\n  mount(): Promise<null>\n  unmount(): Promise<null>\n  update?(customProps: Record<string, unknown>): Promise<any>\n  getStatus():\n    | "NOT_LOADED"\n    | "LOADING_SOURCE_CODE"\n    | "NOT_BOOTSTRAPPED"\n    | "BOOTSTRAPPING"\n    | "NOT_MOUNTED"\n    | "MOUNTING"\n    | "MOUNTED"\n    | "UPDATING"\n    | "UNMOUNTING"\n    | "UNLOADING"\n    | "SKIP_BECAUSE_BROKEN"\n    | "LOAD_ERROR"\n  loadPromise: Promise<null>\n  bootstrapPromise: Promise<null>\n  mountPromise: Promise<null>\n  unmountPromise: Promise<null>\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getCurrentApplication")," provides, statically, the handlers and the unique identifier of the application that is currently\nrunning as content."),(0,a.kt)("p",null,"It can be helpful to update or unmount manually the application."),(0,a.kt)("h2",{id:"getcurrentconfig"},(0,a.kt)("inlineCode",{parentName:"h2"},"getCurrentConfig")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi {\n  // highlight-next-line\n  readonly getCurrentConfig: () => Readonly<CompleteConfig>\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getCurrentConfig")," provides, statically, ",(0,a.kt)("micro-lc",null),' complete configuration, where "complete" means the user\ndefined configuration merged with default on key not specified while configuring.'),(0,a.kt)("h2",{id:"setcurrentconfig"},(0,a.kt)("inlineCode",{parentName:"h2"},"setCurrentConfig")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This method is still work in progress. Usage will trigger complete refresh of the application coursing a loss of the\nlayout.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi {\n  // highlight-next-line\n  readonly setCurrentConfig: (newConfig: CompleteConfig) => void\n  // ...rest of the API\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setCurrentConfig")," provides a handler to replace ",(0,a.kt)("micro-lc",null)," configuration at runtime."),(0,a.kt)("p",null,"No configuration diffing is scheduled, hence the full configuration is replace and ",(0,a.kt)("micro-lc",null)," bootstraps from\nscratch."))}f.isMDXComponent=!0}}]);