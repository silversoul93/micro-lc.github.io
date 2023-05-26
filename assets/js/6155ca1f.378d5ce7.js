"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2385],{55858:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(76687);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=c,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59738:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(76687),c=r(64923),o=r(2367),a=r(32058),i=r(45149),s=r(54086);const l={cardContainer:"cardContainer_ofzN",cardTitle:"cardTitle_E7At",cardDescription:"cardDescription_idr0"};function p(e){var t=e.href,r=e.children;return n.createElement(a.Z,{href:t,className:(0,c.Z)("card padding--lg",l.cardContainer)},r)}function m(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:o},r," ",o),a&&n.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:a},a))}function u(e){var t,r=e.item,c=(0,o.Wl)(r);return c?n.createElement(m,{href:c,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function d(e){var t,r,c=e.item,a=(0,i.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.xz)(null!=(t=c.docId)?t:void 0);return n.createElement(m,{href:c.href,icon:a,title:c.label,description:null!=(r=c.description)?r:null==s?void 0:s.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,r=(0,o.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(y,e);var a=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},a.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}},52223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(48792),c=r(91219),o=(r(76687),r(55858)),a=r(59738),i=["components"],s={title:"Concepts",description:"Learn more about the most important micro-lc concepts"},l=void 0,p={unversionedId:"docs/concepts/index",id:"docs/concepts/index",title:"Concepts",description:"Learn more about the most important micro-lc concepts",source:"@site/docs/docs/concepts/index.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/",permalink:"/docs/concepts/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/concepts/index.md",tags:[],version:"current",lastUpdatedBy:"Omar El Malak",frontMatter:{title:"Concepts",description:"Learn more about the most important micro-lc concepts"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Separation of concerns",permalink:"/docs/concepts/separation-of-concerns"}},m={},u=[],d={toc:u},f="wrapper";function y(e){var t=e.components,r=(0,c.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Learn more about the most important ",(0,o.kt)("micro-lc",null)," concepts!"),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);