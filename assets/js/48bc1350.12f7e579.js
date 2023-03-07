"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7365],{55858:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(76687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76080:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(76687),r=t(64923);const i={tabItem:"tabItem_EvUg"};function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:t},n)}},74404:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(1943),r=t(76687),i=t(64923),l=t(74840),o=t(18775),s=t(87233),p=t(78550),u=t(20242);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:c(t);return function(e){var n=(0,p.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function k(e){var n,t,a,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,p=e.groupId,c=d(e),k=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),g=k[0],h=k[1],v=f({queryString:s,groupId:p}),N=v[0],b=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),w=y[0],C=y[1],x=function(){var e=null!=N?N:w;return m({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){x&&h(x)}),[x]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);h(e),b(e),C(e)}),[b,C,c]),tabValues:c}}var g=t(8643);const h={tabList:"tabList_zrX3",tabItem:"tabItem_td0b"};function v(e){var n=e.className,t=e.block,o=e.selectedValue,s=e.selectValue,p=e.tabValues,u=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=u.indexOf(n),a=p[t].value;a!==o&&(c(n),s(a))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;t=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var i,l=u.indexOf(e.currentTarget)-1;t=null!=(i=u[l])?i:u[u.length-1]}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},p.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===n})}),null!=t?t:n)})))}function N(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function b(e){var n=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(N,(0,a.Z)({},e,n)))}function y(e){var n=(0,g.Z)();return r.createElement(b,(0,a.Z)({key:String(n)},e))}},39620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=t(1943),r=t(21576),i=(t(76687),t(55858)),l=t(74404),o=t(76080),s=["components"],p={title:"\ud83d\udee0 Middleware",description:"Configurations service station",sidebar_label:"\ud83d\udee0 Middleware",sidebar_position:10},u=void 0,c={unversionedId:"add-ons/backend/middleware",id:"add-ons/backend/middleware",title:"\ud83d\udee0 Middleware",description:"Configurations service station",source:"@site/docs/add-ons/backend/middleware.md",sourceDirName:"add-ons/backend",slug:"/add-ons/backend/middleware",permalink:"/add-ons/backend/middleware",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/add-ons/backend/middleware.md",tags:[],version:"current",lastUpdatedBy:"Edoardo Pessina",sidebarPosition:10,frontMatter:{title:"\ud83d\udee0 Middleware",description:"Configurations service station",sidebar_label:"\ud83d\udee0 Middleware",sidebar_position:10},sidebar:"add-ons",previous:{title:"Backend solutions",permalink:"/add-ons/backend/"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Environment variables",id:"environment-variables",level:3},{value:"Service configuration",id:"service-configuration",level:2},{value:"Content Type",id:"content-type",level:3},{value:"Headers",id:"headers",level:3},{value:"Serving from file system",id:"serving-from-file-system",level:2},{value:"Static files manipulation",id:"static-files-manipulation",level:3},{value:"Nonce injection",id:"nonce-injection",level:4},{value:"Configuration files manipulation",id:"configuration-files-manipulation",level:3},{value:"ACL application",id:"acl-application",level:4},{value:"Example",id:"example",level:5},{value:"References resolution",id:"references-resolution",level:4},{value:"Example",id:"example-1",level:5},{value:"SDK",id:"sdk",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Methods",id:"methods",level:3},{value:"<code>evaluateAcl(json, userGroups, userPermissions)</code>",id:"evaluateacljson-usergroups-userpermissions",level:4},{value:"<code>resolveReferences(json)</code>",id:"resolvereferencesjson",level:4}],f={toc:m},k="wrapper";function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)(k,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The following documentation refers to ",(0,i.kt)("strong",{parentName:"p"},"version 3.x.x")," of the service.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Middleware")," is a backend service responsible for ",(0,i.kt)("a",{parentName:"p",href:"#serving-from-file-system"},"serving")," ",(0,i.kt)("micro-lc",null)," static and\nconfiguration files, while applying some useful manipulation logic before returning their content. This logic is also\ndistributed through an ",(0,i.kt)("a",{parentName:"p",href:"#sdk"},"SDK")," to ease the process of building custom configurations servers."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Middleware is available as a Docker image on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/microlc/middleware"},"Dockerhub"),"."),(0,i.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"Middleware it built using Mia-Platform's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/custom-plugin-lib"},"custom-plugin-lib"),", hence it\nneeds the environment variables outlined in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/custom-plugin-lib#environment-variables-configuration"},"library documentation"),"."),(0,i.kt)("p",null,"On top of those, Middleware accepts the following environment variables:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"PUBLIC_DIRECTORY_PATH")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"/usr/static/configurations")),(0,i.kt)("td",{parentName:"tr",align:null},"Absolute path of the ",(0,i.kt)("a",{parentName:"td",href:"#serving-from-file-system"},"directory")," containing static files to be served")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"RESOURCES_DIRECTORY_PATH")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"/usr/static/public")),(0,i.kt)("td",{parentName:"tr",align:null},"Absolute path of the ",(0,i.kt)("a",{parentName:"td",href:"#serving-from-file-system"},"directory")," containing configuration resources to be served")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"SERVICE_CONFIG_PATH")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"/usr/src/app/config/config.json")),(0,i.kt)("td",{parentName:"tr",align:null},"Absolute path of the ",(0,i.kt)("a",{parentName:"td",href:"#service-configuration"},"service configuration")," file")))),(0,i.kt)("h2",{id:"service-configuration"},"Service configuration"),(0,i.kt)("p",null,"The service accepts a JSON configuration file containing information on the ",(0,i.kt)("a",{parentName:"p",href:"#content-type"},"content types"),"\nand on the ",(0,i.kt)("a",{parentName:"p",href:"#headers"},"headers")," to apply to file responses."),(0,i.kt)("p",null,"The service will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVICE_CONFIG_PATH")," ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable")," to locate the configuration\nfile, which should contain an object with the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Config {\n  contentTypeMap?: Record<string, string | string[]>\n  publicHeadersMap?: Record<string, Record<string, string | (string | string[])[]>>\n}\n")),(0,i.kt)("h3",{id:"content-type"},"Content Type"),(0,i.kt)("p",null,"By default, Middleware returns a file with the following content types (depending on the file extension)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Extension"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Content-Type header"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".cjs"),(0,i.kt)("td",{parentName:"tr",align:"center"},"application/javascript")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".css"),(0,i.kt)("td",{parentName:"tr",align:"center"},"text/css")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".html"),(0,i.kt)("td",{parentName:"tr",align:"center"},"text/html")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".js"),(0,i.kt)("td",{parentName:"tr",align:"center"},"application/javascript")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".json"),(0,i.kt)("td",{parentName:"tr",align:"center"},"application/json")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".mjs"),(0,i.kt)("td",{parentName:"tr",align:"center"},"application/javascript")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".yaml"),(0,i.kt)("td",{parentName:"tr",align:"center"},"text/yaml")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},".yml"),(0,i.kt)("td",{parentName:"tr",align:"center"},"text/yam")))),(0,i.kt)("p",null,"Any extension not listed will trigger a default ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"text/plain"),"."),(0,i.kt)("p",null,"These settings can be overridden using with the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentTypeMap")," property of the service configuration, which should be\na map linking extensions to Content-Type header signatures. Keys must be either a single extension or a comma separated\nlist of extensions while values must be strings or array of strings which will be joint with a semicolon as separator."),(0,i.kt)("p",null,"For example, the following ",(0,i.kt)("inlineCode",{parentName:"p"},"contentTypeMap")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ".mjs,.js": ["text/javascript", "charset=utf8"],\n  ".xml": "application/xml"\n}\n')),(0,i.kt)("p",null,"which will force Middleware to return on ",(0,i.kt)("inlineCode",{parentName:"p"},".mjs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," the equivalent ",(0,i.kt)("inlineCode",{parentName:"p"},"text/javascript; charset=utf8")," Content-Type header and\n",(0,i.kt)("inlineCode",{parentName:"p"},"application/xml")," on XML files."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Any extension listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTENT_TYPE_MAP")," will override its previous default value allowing even to change\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," for JSON and YAML files which might create problems on ",(0,i.kt)("micro-lc",null)," web component configuration dump.")),(0,i.kt)("h3",{id:"headers"},"Headers"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"publicHeadersMap")," property of the configuration allows you to specify additional headers to include in\n",(0,i.kt)("a",{parentName:"p",href:"#serving-from-file-system"},"static files")," responses (i.e., files exposed under ",(0,i.kt)("inlineCode",{parentName:"p"},"/public"),")."),(0,i.kt)("p",null,"The property should be a map linking file pathnames to headers definitions. Keys must be valid pathname strings\n(e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"/public/index.html"),"), while values must be maps linking ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"},"HTTP header"),"\nnames to valid values. Values can be directly a ",(0,i.kt)("em",{parentName:"p"},"string"),", an ",(0,i.kt)("em",{parentName:"p"},"array of string")," (which will be joined with a comma), or\nan ",(0,i.kt)("em",{parentName:"p"},"array of arrays of string")," (which will be joined with a semicolon at inner lever and with a comma at external level)."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," headers specified here will win over the ones defined in\n",(0,i.kt)("a",{parentName:"p",href:"#content-type"},(0,i.kt)("inlineCode",{parentName:"a"},"contentTypeMap"))," configuration.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Middleware applies ",(0,i.kt)("a",{parentName:"p",href:"#nonce-injection"},"nonce injection")," on additional headers.")),(0,i.kt)("p",null,"For example, the following ",(0,i.kt)("inlineCode",{parentName:"p"},"publicHeadersMap")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "/public/index.html": {\n    "content-security-policy": [\n      [\n        "script-src \'nonce-**CSP_NONCE**\'",\n        "style-src \'self\'"\n      ]\n    ],\n    "link": "</micro-lc-configurations/config.json>; rel=preload; as=fetch"\n  }\n}\n')),(0,i.kt)("p",null,"causes a request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/public/index.html")," to have the following headers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"content-security-policy: script-src 'nonce-KMxEW8oQKCm12+XocTYib9u6++'; style-src 'self'\nlink: </micro-lc-configurations/config.json>; rel=preload; as=fetch\n")),(0,i.kt)("h2",{id:"serving-from-file-system"},"Serving from file system"),(0,i.kt)("p",null,"Configuration files and regular files served by Middleware are loaded from file system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Static files")," are sourced from the directory specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"PUBLIC_DIRECTORY_PATH"),"\n",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable")," and are exposed under ",(0,i.kt)("inlineCode",{parentName:"p"},"/public")," prefix. ",(0,i.kt)("strong",{parentName:"p"},"Configuration files")," are\nsearched in the directory specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"RESOURCES_DIRECTORY_PATH")," ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable"),"\nand are exposed under ",(0,i.kt)("inlineCode",{parentName:"p"},"/configurations")," prefix."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"/public"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/public/")," or a non-existing file under public (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"/public/unknown-file.js"),") will result in\nMiddleware responding with the root ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file, if existing.")),(0,i.kt)("p",null,"For example, given a file system with the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 public\n|   \u2514\u2500\u2500 index.html\n|   \u2514\u2500\u2500 assets\n|       \u2514\u2500\u2500 style.css\n|\n\u251c\u2500\u2500 configurations\n    \u2514\u2500\u2500 config.json\n    \u2514\u2500\u2500 lib\n        \u2514\u2500\u2500 index.js\n")),(0,i.kt)("p",null,"Middleware will expose the following routes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"GET - /public (redirecting to /public/index.html)\nGET - /public/ (redirecting to /public/index.html)\nGET - /public/index.html\nGET - /public/assets/style.css\n\nGET - /configurations/config.json\nGET - /configurations/lib/index.js\n")),(0,i.kt)("h3",{id:"static-files-manipulation"},"Static files manipulation"),(0,i.kt)("p",null,"If a required ",(0,i.kt)("strong",{parentName:"p"},"static")," file is an HTML resource (i.e., a file exposed under ",(0,i.kt)("inlineCode",{parentName:"p"},"/public")," ending with ",(0,i.kt)("inlineCode",{parentName:"p"},".html"),"), before\nreturning the file, Middleware applies some parsing logics to its content."),(0,i.kt)("h4",{id:"nonce-injection"},"Nonce injection"),(0,i.kt)("p",null,"Middleware allows you to inject a server-generated ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce"},"nonce"),"\nin HTML files. In particular, it will find any occurrence of the of the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"**CSP_NONCE**")," and replace it with\nthe actual value."),(0,i.kt)("p",null,"For example, the following HTML file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <link \n    rel="stylesheet"\n    nonce="**CSP_NONCE**"\n    href="./assets/style.css" />\n</head>\n\n</html>\n')),(0,i.kt)("p",null,"will be serve as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <link \n    rel="stylesheet"\n    nonce="KMxEW8oQKCm12+XocTYib9u6++"\n    href="./assets/style.css" />\n</head>\n\n</html>\n')),(0,i.kt)("h3",{id:"configuration-files-manipulation"},"Configuration files manipulation"),(0,i.kt)("p",null,"If a required ",(0,i.kt)("strong",{parentName:"p"},"configuration")," file is a JSON or YAML resource (i.e., a file exposed under ",(0,i.kt)("inlineCode",{parentName:"p"},"/configurations")," ending with\n",(0,i.kt)("inlineCode",{parentName:"p"},".json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".yml"),"), before returning the file, Middleware applies some parsing logics to its content."),(0,i.kt)("h4",{id:"acl-application"},"ACL application"),(0,i.kt)("p",null,"Middleware allows you to implement ",(0,i.kt)("strong",{parentName:"p"},"access control limit")," on served files, removing sections of configurations based on\ncertain properties of the caller. Namely, Middleware considers caller's ",(0,i.kt)("strong",{parentName:"p"},"groups")," and ",(0,i.kt)("strong",{parentName:"p"},"permissions"),"."),(0,i.kt)("p",null,"Caller's ",(0,i.kt)("strong",{parentName:"p"},"groups")," are extracted from request headers, particularly from the header the key of which is specified through\n",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPS_HEADER_KEY")," ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable"),". The value of the header should be a comma-separated\nlist of groups (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},'"admin,user"'),")."),(0,i.kt)("p",null,"Caller's ",(0,i.kt)("strong",{parentName:"p"},"permissions")," are extracted from request headers too. Middleware takes the header the key of which is specified\nthrough ",(0,i.kt)("inlineCode",{parentName:"p"},"USER_PROPERTIES_HEADER_KEY")," ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable")," and expects a stringified JSON\nobject containing a comma-separated list of permissions under the key ",(0,i.kt)("inlineCode",{parentName:"p"},"permissions")," (e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},'"{\\"permissions\\":"api.users.get,api.users.post"}"'),")."),(0,i.kt)("p",null,"ACL expressions can be specified anywhere in configuration using the special key ",(0,i.kt)("inlineCode",{parentName:"p"},"aclExpression")," having as value a\n",(0,i.kt)("strong",{parentName:"p"},"stringified boolean expression")," based on caller's groups and permissions (e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},"groups.admin || permissions.api.users.get"),")."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use any combination of groups, permissions and JavaScript operators in you ACL expressions."),(0,i.kt)("p",{parentName:"admonition"},"For example, the following expressions are all valid:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"groups.admin && permissions.api.users.get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!groups.developer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"permissions.api.users.get || permissions.api.users.post")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(groups.admin && !permissions.api.users.post) || permissions.api.users.count.get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(groups.admin === true && permissions.api.users.post === true)")))),(0,i.kt)("p",null,"Middleware evaluates each ACL expression against caller's properties and, if the expression results in a ",(0,i.kt)("inlineCode",{parentName:"p"},"falsy value"),", it\nremoves from the configuration the ",(0,i.kt)("strong",{parentName:"p"},"whole object")," which the expression is a property of. It then proceeds to remove\nany ",(0,i.kt)("inlineCode",{parentName:"p"},"aclExpression")," key left over to not leak server-side logic into the client."),(0,i.kt)("h5",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's consider the following configuration file served under ",(0,i.kt)("inlineCode",{parentName:"p"},"GET - /middleware/config.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "tag": "div",\n    "properties": {\n      // highlight-next-line\n      "aclExpression": "groups.admin",\n      "adminName": "John Doe"\n    },\n    "content": [\n      {\n        // highlight-next-line\n        "aclExpression": "groups.superadmin || permissions.api.users.get",\n        "tag": "button"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"The response of the following request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'https://*********/middleware/config.json' \\\n  -H 'user-groups: user' \\\n  -H 'user-properties: { \"permissions\": \"api.users.get\" }'\n")),(0,i.kt)("p",null,"will be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "tag": "div",\n    "content": [\n      {\n        "tag": "button"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h4",{id:"references-resolution"},"References resolution"),(0,i.kt)("p",null,"In order to avoid writing repeating values multiple times in your configurations, Middleware supports references resolutions\nfollowing ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/structuring.html#ref"},"JSON schema specification"),". In\nparticular, if you need to repeat the same value in various places of your configuration, you can ",(0,i.kt)("strong",{parentName:"p"},"define it once")," in\nthe dedicated top-level key ",(0,i.kt)("inlineCode",{parentName:"p"},"definitions"),", and then ",(0,i.kt)("strong",{parentName:"p"},"references it")," wherever you like using the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"$ref")," (e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},'{ "dataSchema": { "$ref": "#/definitions/dataSchema" }}'),")."),(0,i.kt)("p",null,"Middleware will resolve references in files and will remove the key ",(0,i.kt)("inlineCode",{parentName:"p"},"definitions")," (if any) before serving them. Keep in mind\nthat Middleware ",(0,i.kt)("strong",{parentName:"p"},"will throw")," if some references cannot be resolved."),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Let's consider the following configuration file served under ",(0,i.kt)("inlineCode",{parentName:"p"},"GET - /middleware/config.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "definitions": {\n    "clientKey": "some-client-key"\n  },\n  "content": {\n    "tag": "div",\n    "properties": {\n      "clientKey": {\n        // highlight-next-line\n        "$ref": "#/definitions/clientKey"\n      }\n    },\n    "content": [\n      {\n        "tag": "button",\n        "properties": {\n          "clientKey": {\n            // highlight-next-line\n            "$ref": "#/definitions/clientKey"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"The response of the following request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'https://*********/middleware/config.json'\n")),(0,i.kt)("p",null,"will be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "definitions": {\n    "clientKey": "some-client-key"\n  },\n  "content": {\n    "tag": "div",\n    "properties": {\n      // highlight-next-line\n      "clientKey": "some-client-key"\n    },\n    "content": [\n      {\n        "tag": "button",\n        "properties": {\n          // highlight-next-line\n          "clientKey": "some-client-key"\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"sdk"},"SDK"),(0,i.kt)("p",null,"The logic under ",(0,i.kt)("a",{parentName:"p",href:"#acl-application"},"ACL application")," and ",(0,i.kt)("a",{parentName:"p",href:"#references-resolution"},"references resolution")," is conveniently\nshipped in a standalone SDK to ease the implementation of alternative backend solutions."),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,"You can install the SDK from NPM"),(0,i.kt)(l.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @micro-lc/middleware/sdk\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @micro-lc/middleware/sdk\n")))),(0,i.kt)("p",null,"and import it in your files"),(0,i.kt)(l.Z,{groupId:"module",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"common-js",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const middlewareSdk = require('@micro-lc/middleware/sdk')\n"))),(0,i.kt)(o.Z,{value:"modules",label:"ECMAScript modules",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as middlewareSdk from '@micro-lc/middleware/sdk'\n")))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("h4",{id:"evaluateacljson-usergroups-userpermissions"},(0,i.kt)("inlineCode",{parentName:"h4"},"evaluateAcl(json, userGroups, userPermissions)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = resolveReferences(json, userGroups, userPermissions)\n")),(0,i.kt)("p",null,"This method ",(0,i.kt)("a",{parentName:"p",href:"#acl-application"},"evaluates")," ",(0,i.kt)("inlineCode",{parentName:"p"},"aclExpression")," keys in input JSON. It does not modify the input object."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json: string | number | boolean | object | unknown[] | null"),(0,i.kt)("br",null),"Input JSON with ACL rules to be evaluated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userGroups: string[]"),(0,i.kt)("br",null),"List of caller's groups."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userPermissions: string[]"),(0,i.kt)("br",null),"List of caller's permissions.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise<string | number | boolean | object | unknown[] | null>"),(0,i.kt)("br",null),"JSON with ACL rules evaluated.")),(0,i.kt)("h4",{id:"resolvereferencesjson"},(0,i.kt)("inlineCode",{parentName:"h4"},"resolveReferences(json)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await resolveReferences(json)\n")),(0,i.kt)("p",null,"This method ",(0,i.kt)("a",{parentName:"p",href:"#references-resolution"},"resolves")," the references in a JSON object. It does not modify the input object."),(0,i.kt)("p",null,"The method ",(0,i.kt)("strong",{parentName:"p"},"throws")," if a reference cannot be found."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json: string | number | boolean | object | unknown[] | null"),(0,i.kt)("br",null),"Input JSON with references to be resolved.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise<string | number | boolean | object | unknown[] | null>"),(0,i.kt)("br",null),"JSON with references resolved.")))}g.isMDXComponent=!0}}]);