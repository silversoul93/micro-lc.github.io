"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2836],{5858:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(6687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6080:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(6687),r=t(4923);const o="tabItem_EvUg";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},4404:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(7375),r=t(6687),o=t(4923),i=t(4840),l=t(8775),p=t(7233),s=t(8550),c=t(242);function u(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function m(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:u(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,l.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,p._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function y(e){var n,t,a,o,i=e.defaultValue,l=e.queryString,p=void 0!==l&&l,s=e.groupId,u=m(e),y=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:u})})),b=y[0],g=y[1],k=f({queryString:p,groupId:s}),h=k[0],v=k[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,c.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),C=N[0],w=N[1],T=function(){var e=null!=h?h:C;return d({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);g(e),v(e),w(e)}),[v,w,u]),tabValues:u}}var b=t(8643);const g="tabList_zrX3",k="tabItem_td0b";function h(e){var n=e.className,t=e.block,l=e.selectedValue,p=e.selectValue,s=e.tabValues,c=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==l&&(u(n),p(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;t=null!=(o=c[i])?o:c[c.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function N(e){var n=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function C(e){var n=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(n)},e))}},3974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(7375),r=t(8374),o=(t(6687),t(5858)),i=t(4404),l=t(6080),p=["components"],s={title:"Compose",description:"Composition of HTML tags",sidebar_label:"Compose",sidebar_position:20},c=void 0,u={unversionedId:"docs/guides/applications/compose",id:"docs/guides/applications/compose",title:"Compose",description:"Composition of HTML tags",source:"@site/docs/docs/guides/applications/compose.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/compose",permalink:"/docs/guides/applications/compose",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/compose.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:20,frontMatter:{title:"Compose",description:"Composition of HTML tags",sidebar_label:"Compose",sidebar_position:20},sidebar:"docs",previous:{title:"iFrames",permalink:"/docs/guides/applications/iframes"},next:{title:"Parcels",permalink:"/docs/guides/applications/parcels"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Plugin configuration",id:"plugin-configuration",level:2},{value:"Content definition",id:"content-definition",level:2},{value:"Component representation",id:"component-representation",level:2},{value:"Properties injection",id:"properties-injection",level:2},{value:"User-supplied properties",id:"user-supplied-properties",level:3},{value:"Interpolated properties",id:"interpolated-properties",level:3},{value:"<code>microlcApi</code>",id:"microlcapi",level:4},{value:"<code>composerApi</code>",id:"composerapi",level:4},{value:"<code>eventBus</code>",id:"eventbus",level:4},{value:"<code>currentUser</code>",id:"currentuser",level:4},{value:"Shared properties",id:"shared-properties",level:4}],f={toc:d};function y(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"composable")," application is a pseudo-HTML document enhanced with JavaScript properties\ndynamically injected by the ",(0,o.kt)("a",{parentName:"p",href:"/api/composer-api"},"composer application"),". "),(0,o.kt)("p",null,"The resulting DOM tree is constructed on the basis of a specific configuration, which can be directly provided, or sourced\nfrom an external JSON or YAML file."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Declare an application with integration mode ",(0,o.kt)("inlineCode",{parentName:"p"},"compose")," in ",(0,o.kt)("micro-lc",null)," configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ComposableApplication {\n  integrationMode: "compose"\n  config: PluginConfiguration | string // See explanation below\n  route: string // Path on which the composable application will be rendered\n}\n')),(0,o.kt)("p",null,"The application configuration has to be supplied with the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," key, which may be either a full\n",(0,o.kt)("a",{parentName:"p",href:"#plugin-configuration"},"configuration object")," or a URL string from which a configuration with the same structure can\nbe downloaded."),(0,o.kt)("h2",{id:"plugin-configuration"},"Plugin configuration"),(0,o.kt)("p",null,"The configuration of a composable application is the blueprint used by ",(0,o.kt)("micro-lc",null)," composer (being it the\ndefault one or a ",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#composeruri"},"custom implementation"),") to dynamically construct\nthe page at runtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PluginConfiguration {\n  $schema: string\n  sources?:\n    | string\n    | string[]\n    | {\n        uris: string | string[]\n        importmap?: ImportMap\n      }\n  content: Content\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Key ",(0,o.kt)("inlineCode",{parentName:"p"},"$schema")," can be used to reference ",(0,o.kt)("micro-lc",null)," plugin configuration\n",(0,o.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/@micro-lc/interfaces@latest/schemas/v2/plugin.schema.json"},"JSON schema")," to greatly ease\nthe writing process by constantly validating the JSON or YAML content against it.")),(0,o.kt)("p",null,"The actual page structure is provided in ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," key, and building blocks are HTML5 elements or custom web components.\nIn the letter case, sources have to be provided for custom components, and one can do so with the ",(0,o.kt)("inlineCode",{parentName:"p"},"sources")," key."),(0,o.kt)("p",null,"By polymorphism, ",(0,o.kt)("inlineCode",{parentName:"p"},"sources")," can be a string or an array of strings if just JavaScript asset entries have to be provided.\nIf an ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/reuse-third-party-libraries"},"importmap")," is needed, ",(0,o.kt)("inlineCode",{parentName:"p"},"sources")," can become an object housing JavaScript asset\nentry URIs (key ",(0,o.kt)("inlineCode",{parentName:"p"},"uris"),") and importmap definition (key ",(0,o.kt)("inlineCode",{parentName:"p"},"importmap"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.conf.yaml"',title:'"micro-lc.conf.yaml"'},"applications:\n\n  # Single JavaScript asset entry URI\n  app-1:\n    sources: https://my-static-server/my-web-component.js\n    content: ...\n\n  # Multiple JavaScript asset entry URIs\n  app-2:\n    sources: \n      - https://my-static-server/my-web-component-1.js\n      - https://my-static-server/my-web-component-2.js\n    content: ...\n\n  # Importmap\n  app-3:\n    sources:\n      uris: https://my-static-server/my-web-component.js\n      importmap:\n        imports: ...\n        scopes: ...\n    content: ...\n")),(0,o.kt)("h2",{id:"content-definition"},"Content definition"),(0,o.kt)("p",null,"A composable application content is a representation of a pseudo-DOM tree written in a markup language (namely JSON\nor YAML) that undergoes a ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"series of processes")," to be transformed into a valid, appendable\nDOM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Content = string | number | Component | (Component | number | string)[]\n")),(0,o.kt)("p",null,"A valid content can assume different shapes, as long as it is a valid HTML element or a convertible representation of\none. It may be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a primitive (",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),")",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'content: "A string is a valid HTML element!"\n'))),(0,o.kt)("li",{parentName:"ul"},"a stringified DOM tree#stringified-dom-tree, particularly powerful when used in YAML files, since it can benefit\nfrom ",(0,o.kt)("a",{parentName:"li",href:"https://yaml-multiline.info/"},"YAML block scalars")," to greatly enhance readability",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'content: |\n  <div .classname=${"my-class"} .microlcApi=${microlcApi}>\n    <p style="color: red;">\n      This is written as a single string\n    </p>\n  </div>\n'))),(0,o.kt)("li",{parentName:"ul"},"a single ",(0,o.kt)("a",{parentName:"li",href:"#component-representation"},"component representation"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'content:\n  tag: div\n  attributes:\n    style: "color: red;"\n  properties:\n    classname: my-class\n  content: This structure is transformed into a valid HTML element\n'))),(0,o.kt)("li",{parentName:"ul"},"a list of the above",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'content:\n  - "String element"\n  - 12\n  - tag: div\n')))),(0,o.kt)("h2",{id:"component-representation"},"Component representation"),(0,o.kt)("p",null,"A component corresponds to an HTML node, being it an HTML5 element or a custom web component. Practically speaking,\na component is an object with the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Component {\n  /** HTML node tag name */\n  tag: string\n  \n  /** HTML5 attribute applied using setAttribute API */\n  attributes?: Record<string, string>\n  \n  /** HTML5 boolean attribute applied using setAttribute API */\n  booleanAttributes?: string | string[]\n  \n  /** DOM element property applied as object property after creating an element */\n  properties?: Record<string, unknown>\n\n  /** Node children */\n  content?: Content\n}\n")),(0,o.kt)("p",null,"The type is recursive as ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," is a ",(0,o.kt)("a",{parentName:"p",href:"#content-definition"},"content definition")," which may itself take the form of a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Component"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'content:\n  tag: button\n  attributes:\n    style: "color: red;"\n  booleanAttributes: disabled\n  content: Click me!\n\n# Output: <button disabled style="color: red;">Click me!</button>\n\n---\n\ncontent:\n  tag: my-component\n  attributes:\n    class: my-class\n    my-numeric-attribute: 2\n  properties:\n    myCustomProperty: some-value\n  content:\n    tag: span\n    content: Hello World!\n\n# Output: \ud83d\udc47\n#   <my-component class="my-class" my-numeric-attribute="2">\n#     <span>Hello World!</span>\n#   </my-component>\n#\n#   document.querySelector("my-component").myCustomProperty \ud83d\udc49 "some-value"\n')),(0,o.kt)("h2",{id:"properties-injection"},"Properties injection"),(0,o.kt)("p",null,"When composing a content, the constructed nodes can receive two types of properties: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"user-supplied properties ",(0,o.kt)("strong",{parentName:"li"},"explicitly declared")," in configuration, and"),(0,o.kt)("li",{parentName:"ul"},"a set of ",(0,o.kt)("strong",{parentName:"li"},"special properties")," interpolated and injected directly by ",(0,o.kt)("micro-lc",null)," composer.")),(0,o.kt)("h3",{id:"user-supplied-properties"},"User-supplied properties"),(0,o.kt)("p",null,"User-supplied properties can be declared using the ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," property of\n",(0,o.kt)("a",{parentName:"p",href:"#component-representation"},"component interface"),", or through a special ",(0,o.kt)("em",{parentName:"p"},"dotted notation"),"\n(",(0,o.kt)("inlineCode",{parentName:"p"},".property_name=${property_value}"),") if relying on the stringified DOM tree representation. Either case, any\n",(0,o.kt)("strong",{parentName:"p"},"valid JSON value")," is acceptable as property and injected into components context as is."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"0",label:"Objective representation",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'content:\n  tag: my-component\n  properties:\n    stringProp: foo\n    numberProp: 3\n    arrayProp:\n      - foo\n      - bar\n    objectProp:\n      foo: bar\n\n# myComponent.stringProp \ud83d\udc49 Output: "foo"\n# myComponent.numberProp \ud83d\udc49 Output: 3\n# myComponent.arrayProp  \ud83d\udc49 Output: ["foo", "bar"]\n# myComponent.objectProp \ud83d\udc49 Output: {foo: "bar"}\n'))),(0,o.kt)(l.Z,{value:"1",label:"Stringified representation",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'layout:\n  content: |\n    <div\n      .stringProp=${"foo"}\n      .numberProp=${4}\n      .arrayProp=${["foo", "bar"]}\n      .objectProp=${{"foo": "bar"}}\n    ></div>\n\n# myComponent.stringProp \ud83d\udc49 Output: "foo"\n# myComponent.numberProp \ud83d\udc49 Output: 3\n# myComponent.arrayProp  \ud83d\udc49 Output: ["foo", "bar"]\n# myComponent.objectProp \ud83d\udc49 Output: {foo: "bar"}\n')))),(0,o.kt)("h3",{id:"interpolated-properties"},"Interpolated properties"),(0,o.kt)("p",null,(0,o.kt)("micro-lc",null)," injects a series of special properties into each DOM node it creates. These properties are\nautomatically interpolated, and therefore they need to be marked by ",(0,o.kt)("strong",{parentName:"p"},"reserved keywords")," for ",(0,o.kt)("micro-lc",null)," to\nrecognize them and assign them the correct value (always in a secure manner without ",(0,o.kt)("inlineCode",{parentName:"p"},"eval")," or similar structures)."),(0,o.kt)("p",null,"When using ",(0,o.kt)("em",{parentName:"p"},"object component representation"),", interpolated properties ",(0,o.kt)("strong",{parentName:"p"},"do not need to be explicitly declared"),". However,\nif they are, the key used must match the reserved one, and the value must be equal to the key. On the other hand, when\nusing ",(0,o.kt)("em",{parentName:"p"},"stringified DOM tree representation"),", properties you want to be injected need to be ",(0,o.kt)("strong",{parentName:"p"},"explicitly declared")," with\nthe correct key and value."),(0,o.kt)("p",null,"For example, let's consider the special property ",(0,o.kt)("inlineCode",{parentName:"p"},"microlcApi")," and different scenarios."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"0",label:"Objective representation",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"content:\n  tag: my-component\n\n# myComponent.microlcApi is defined and correctly set\n\n---\n\ncontent:\n  tag: my-component\n  properties:\n    stringProp: foo\n\n# myComponent.microlcApi is defined and correctly set\n\n---\n\ncontent:\n  tag: my-component\n  properties:\n    microlcApi: microlcApi\n    \n# myComponent.microlcApi is defined and correctly set\n\n---\n\ncontent:\n  tag: my-component\n  properties:\n    microlcApi: foo\n\n# myComponent.microlcApi is undefined\n"))),(0,o.kt)(l.Z,{value:"1",label:"Stringified representation",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"layout:\n  content: |\n    <my-component></my-component>\n\n# myComponent.microlcApi is undefined\n\n---\n\nlayout:\n  content: |\n    <my-component .microlcApi=${microlcApi}></my-component>\n\n# myComponent.microlcApi is defined and correctly set\n\n---\n\nlayout:\n  content: |\n    <my-component .microlcApi=${foo}></my-component>\n\n# myComponent.microlcApi is undefined\n")))),(0,o.kt)("p",null,"The special properties injected by ",(0,o.kt)("micro-lc",null)," are the following."),(0,o.kt)("h4",{id:"microlcapi"},(0,o.kt)("inlineCode",{parentName:"h4"},"microlcApi")),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object"))),(0,o.kt)("p",null,"Common ",(0,o.kt)("a",{parentName:"p",href:"../../../api/micro-lc-api"},"API")," offered by ",(0,o.kt)("micro-lc",null)," as\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/communication#micro-lc-api"},"mean of communication"),".")),(0,o.kt)("h4",{id:"composerapi"},(0,o.kt)("inlineCode",{parentName:"h4"},"composerApi")),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object"))),(0,o.kt)("p",null,"Common ",(0,o.kt)("a",{parentName:"p",href:"/api/composer-api"},"API")," offered by ",(0,o.kt)("micro-lc",null)," composer to achieve\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"composition"),".")),(0,o.kt)("h4",{id:"eventbus"},(0,o.kt)("inlineCode",{parentName:"h4"},"eventBus")),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Composed ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/layout#build-a-layout"},"layouts")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/layout#mount-point"},"mount points")," ",(0,o.kt)("strong",{parentName:"p"},"do not have access")," to\nthis property.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EventBus<T = unknown> extends rxjs.ReplaySubject<T> {\n  [index: number]: rxjs.ReplaySubject<T>\n  pool: Record<string, rxjs.ReplaySubject<T>>\n}\n")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rxjs.dev/api/index/class/ReplaySubject"},"RxJS ReplaySubject")," useful to establish a reactive communication\nbetween components of the same application."),(0,o.kt)("p",null,"The property gives component the ability to spawn multiple ReplaySubjects, allowing multichannel communication.\n",(0,o.kt)("inlineCode",{parentName:"p"},"eventBus")," itself is a ReplaySubject, but calling ",(0,o.kt)("inlineCode",{parentName:"p"},"eventBus[0]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"eventBus.pool.foo")," will create two other \u2013\ncompletely different \u2013 ReplaySubject entities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},"content:\n  tag: my-component\n  \n# myComponent.eventBus !== myComponent.eventBus[0] !== myComponent.eventBus.pool.foo\n"))),(0,o.kt)("h4",{id:"currentuser"},(0,o.kt)("inlineCode",{parentName:"h4"},"currentUser")),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("admonition",{title:"Deprecation notice",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This property will be removed in future versions. Use ",(0,o.kt)("micro-lc",null)," API\n",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-api/reactive-communication#subscribe"},"subscribe method")," instead.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"rxjs.Observable"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rxjs.dev/guide/observable"},"RxJS Observable")," taken from ",(0,o.kt)("micro-lc",null)," API\n",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-api/reactive-communication#subscribe"},"Pub/Sub channel")," containing information on the current\napplication user.")),(0,o.kt)("h4",{id:"shared-properties"},"Shared properties"),(0,o.kt)("div",{style:{paddingLeft:"1em"}},(0,o.kt)("p",null,"Content of ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," key of configuration key ",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#shared"},(0,o.kt)("inlineCode",{parentName:"a"},"shared")),". ",(0,o.kt)("inlineCode",{parentName:"p"},"properties"),"\nkey is spread and each of its property is injected independently."),(0,o.kt)("p",null,"Example:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"0",label:"Objective representation",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'shared:\n  properties:\n    foo: bar\n\nlayout:\n  content:\n    tag: my-component\n\n# myComponent.foo \ud83d\udc49 Output: "bar"\n'))),(0,o.kt)(l.Z,{value:"1",label:"Stringified representation",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'shared:\n  properties:\n    foo: bar\n\nlayout:\n  content: |\n    <div id="my-div" .foo=${foo}></div>\n\n# myComponent.foo \ud83d\udc49 Output: "bar"\n'))))))}y.isMDXComponent=!0}}]);