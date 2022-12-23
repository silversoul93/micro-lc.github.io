"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9626],{5858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(4689),a=n(1986),o=(n(6687),n(5858)),i=["components"],c={id:"analytics",title:"Analytics",sidebar_label:"Analytics"},s=void 0,l={unversionedId:"docs/analytics",id:"version-1.0.0/docs/analytics",title:"Analytics",description:"Analytics are available through Google Analytics, but are not activated by default.",source:"@site/versioned_docs/version-1.0.0/docs/analytics.md",sourceDirName:"docs",slug:"/docs/analytics",permalink:"/1.0.0/docs/analytics",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/analytics.md",tags:[],version:"1.0.0",lastUpdatedBy:"Umberto Toniolo",frontMatter:{id:"analytics",title:"Analytics",sidebar_label:"Analytics"},sidebar:"docs",previous:{title:"Authentication",permalink:"/1.0.0/docs/authentication"},next:{title:"Back-end",permalink:"/1.0.0/docs/backend"}},p={},u=[],d={toc:u};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Analytics are available through ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com/"},"Google Analytics"),", but ",(0,o.kt)("strong",{parentName:"p"},"are not activated by default"),".\nIf ",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_configuration#analytics"},"analytics are configured"),", they are not enabled in the page until the user accept the\n",(0,o.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_configuration#disclaimer"},"cookie utilization disclaimer")," for the first time."),(0,o.kt)("p",null,"The analytics authorization process can be summarized using the following schema:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Authorization process for analytics",src:n(715).Z,width:"1334",height:"2366"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The analytics authorization request is made only one time for each browser instance,\nbecause the answer is saved inside the browsers ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/Window/localStorage"},(0,o.kt)("inlineCode",{parentName:"a"},"localStorage")),".")))}m.isMDXComponent=!0},715:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/microlc_analytics_authorization_process-7e0c260acb2dc3ee6a6fed9ac374b912.png"}}]);