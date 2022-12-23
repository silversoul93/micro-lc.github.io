(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[494],{5858:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3152:(e,t,n)=>{"use strict";n.d(t,{Z:()=>J});var r=n(4689),o=n(1986),a=n(6687),c=n(3634),l=n(4923),s=n(2927),i=n(9824);function u(){var e=(0,i.L)().prism,t=(0,s.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var p=n(3949),d=n(3917),m=n(6313),f=n.n(m),v=(0,d.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),y=(0,d.Z)(/\{([\d,-]+)\}/,{range:1}),g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function b(e,t){var n=e.map((function(e){var n=g[e],r=n.start,o=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function h(e,t){var n=e.replace(/\n$/,""),r=t.language,o=t.magicComments,a=t.metastring;if(a&&y.test(a)){var c=a.match(y).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=o[0].className,s=f()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);default:return b(Object.keys(g),t)}}(r,o),u=n.split("\n"),p=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),m=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),v=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),h=0;h<u.length;){var k=u[h].match(i);if(k){var E=k.slice(1).find((function(e){return void 0!==e}));d[E]?p[d[E]].range+=h+",":m[E]?p[m[E]].start=h:v[E]&&(p[v[E]].range+=p[v[E]].start+"-"+(h-1)+","),u.splice(h,1)}else h+=1}n=u.join("\n");var N={};return Object.entries(p).forEach((function(e){var t=e[0],n=e[1].range;f()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}const k="codeBlockContainer_whmj";var E=["as"];function N(e){var t=e.as,n=(0,o.Z)(e,E),c=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(u());return a.createElement(t,(0,r.Z)({},n,{style:c,className:(0,l.Z)(n.className,k,p.k.common.codeBlock)}))}const w={codeBlockContent:"codeBlockContent_eHmu",codeBlockTitle:"codeBlockTitle_uMvH",codeBlock:"codeBlock_NGoy",codeBlockStandalone:"codeBlockStandalone_efF4",codeBlockLines:"codeBlockLines_Tm5V",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_j2ZY",buttonGroup:"buttonGroup_gMXq"};function B(e){var t=e.children,n=e.className;return a.createElement(N,{as:"pre",tabIndex:0,className:(0,l.Z)(w.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:w.codeBlockLines},t))}var j=n(6017),C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function O(e,t){var n=(0,a.useState)(),r=n[0],o=n[1],c=(0,a.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=C);var r=(0,j.zX)(t),o=(0,j.Ql)(n);(0,a.useEffect)((function(){var t=new MutationObserver(r);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,r,o])}(r,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var L={Prism:n(9151).Z,theme:T};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var Z=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},_=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=P({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=P({},n,{backgroundColor:null}),o};function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const A=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),x(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?_(e.theme,e.language):void 0;return t.themeDict=n})),x(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=P({},D(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?P({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),x(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),x(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=P({},D(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?P({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),x(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],s=[l];c>-1;){for(;(a=r[c]++)<o[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=S(u,p.type),p.alias&&(u=S(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(Z),m=d.length;l.push({types:u,content:d[0]});for(var f=1;f<m;f++)I(l),s.push(l=[]),l.push({types:u,content:d[f]})}else c++,t.push(u),n.push(i),r.push(0),o.push(i.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return I(l),s}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),z="codeLine_MvI4",V="codeLineNumber_ECBP",H="codeLineContent_BFsy";function M(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,c=e.getLineProps,s=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=c({line:t,className:(0,l.Z)(n,o&&z)}),u=t.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))}));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:V}),a.createElement("span",{className:H},u)):u,a.createElement("br",null))}var R=n(9586);const W={copyButtonCopied:"copyButtonCopied_JdBb",copyButtonIcons:"copyButtonIcons_C5fQ",copyButtonIcon:"copyButtonIcon_bxJP",copyButtonSuccessIcon:"copyButtonSuccessIcon_uCIU"};function F(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],c=r[1],s=(0,a.useRef)(void 0),i=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(i){}o.remove(),l&&(c.removeAllRanges(),c.addRange(l)),a&&a.focus()}(t),c(!0),s.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(s.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,R.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,R.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,R.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,W.copyButton,o&&W.copyButtonCopied),onClick:i},a.createElement("span",{className:W.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:W.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:W.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const q="wordWrapButtonIcon_lwVD",G="wordWrapButtonEnabled_bi8v";function U(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,R.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,r&&G),"aria-label":o,title:o},a.createElement("svg",{className:q,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function $(e){var t,n,o,c,s,p,d,m,f,y,g,b=e.children,k=e.className,E=void 0===k?"":k,B=e.metastring,j=e.title,C=e.showLineNumbers,T=e.language,x=(0,i.L)().prism,P=x.defaultLanguage,Z=x.magicComments,I=null!=(t=null!=T?T:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:P,S=u(),_=(o=(0,a.useState)(!1),c=o[0],s=o[1],p=(0,a.useState)(!1),d=p[0],m=p[1],f=(0,a.useRef)(null),y=(0,a.useCallback)((function(){var e=f.current.querySelector("code");c?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),s((function(e){return!e}))}),[f,c]),g=(0,a.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),O(f,g),(0,a.useEffect)((function(){g()}),[c,g]),(0,a.useEffect)((function(){return window.addEventListener("resize",g,{passive:!0}),function(){window.removeEventListener("resize",g)}}),[g]),{codeBlockRef:f,isEnabled:c,isCodeScrollable:d,toggle:y}),D=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(v))?void 0:n.groups.title)?t:""}(B)||j,z=h(b,{metastring:B,language:I,magicComments:Z}),V=z.lineClassNames,H=z.code,R=null!=C?C:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(B);return a.createElement(N,{as:"div",className:(0,l.Z)(E,I&&!E.includes("language-"+I)&&"language-"+I)},D&&a.createElement("div",{className:w.codeBlockTitle},D),a.createElement("div",{className:w.codeBlockContent},a.createElement(A,(0,r.Z)({},L,{theme:S,code:H,language:null!=I?I:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,l.Z)(t,w.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,l.Z)(w.codeBlockLines,R&&w.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(M,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:V[t],showLineNumbers:R})}))))})),a.createElement("div",{className:w.buttonGroup},(_.isEnabled||_.isCodeScrollable)&&a.createElement(U,{className:w.codeButton,onClick:function(){return _.toggle()},isEnabled:_.isEnabled}),a.createElement(F,{className:w.codeButton,code:H}))))}var X=["children"];function J(e){var t=e.children,n=(0,o.Z)(e,X),l=(0,c.Z)(),s=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof s?$:B;return a.createElement(i,(0,r.Z)({key:String(l)},n),s)}},9397:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(6687),o=n(4923);const a="tabItem_EP2U";function c(e){var t=e.children,n=e.hidden,c=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,c),hidden:n},t)}},9185:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(4689),o=n(6687),a=n(4923),c=n(3634),l=n(6844),s=n(3667),i=n(3107);const u="tabList_jxcF",p="tabItem_Lqs7";function d(e){var t,n,c=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,y=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,s.U)(),N=E.tabGroupChoices,w=E.setTabGroupChoices,B=(0,o.useState)(k),j=B[0],C=B[1],O=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var L=N[v];null!=L&&L!==j&&b.some((function(e){return e.value===L}))&&C(L)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==j&&(T(t),C(r),null!=v&&w(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":var r,o=O.indexOf(e.currentTarget)+1;n=null!=(r=O[o])?r:O[0];break;case"ArrowLeft":var a,c=O.indexOf(e.currentTarget)-1;n=null!=(a=O[c])?a:O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},y)},b.map((function(e){var t=e.value,n=e.label,c=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onClick:x},c,{className:(0,a.Z)("tabs__item",p,null==c?void 0:c.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,c.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},6313:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);