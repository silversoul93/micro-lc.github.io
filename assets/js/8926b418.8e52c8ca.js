"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7998],{68582:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var r,o=n(76687),i=n(13166),a=n(31103),s=n(98613),c=n(45025),l=new URL("https://unpkg.com/@micro-lc/preview@~0.4/website/index.html"),u=function(e,t,n){return function(e){var r=new a.w0,o=e.currentTarget,i=o.contentWindow;if(function(e){var t=function(t){var n=t.data;if(null!==n&&"object"==typeof n&&"type"in n&&"string"==typeof n.type&&["mousedown","mousemove"].includes(n.type)&&"content"in n){var r=n.type,o=n.content;switch(r){case"mousemove":case"mousedown":var i=e.getBoundingClientRect(),a=o;e.dispatchEvent(new MouseEvent(r,Object.assign({},a,{clientX:a.clientX+i.left,clientY:a.clientY+i.right})))}}};window.addEventListener("message",t)}(o),null!==i){var u=function(e){var n;i.postMessage("new-configuration"!==(n=e).type?n:Object.assign({},n,{content:Object.assign({},n.content,{configuration:{content:{attributes:{style:"display: flex; flex-direction: column; height: 100%; width: 100%; gap: 0.5px"},content:[{attributes:{matcher:l.origin,origin:"https://my-domain",style:"\n                  position: sticky;\n                  top: 0;\n                  padding: 10px;\n                  background-color: #de1f9210;\n                  border-bottom: 1px solid #de1f92;\n                "},tag:"mlc-url"},{attributes:{style:"width: 100%; height: 100%; position: relative; overflow: hidden;"},content:{attributes:{"primary-color":"#de1f92",style:"width: 100%; height: 100%;"},content:{attributes:{style:"width: 100%; height: 100%; overflow: auto;"},properties:{config:n.content.configuration},tag:"micro-lc"},tag:"mlc-loading-animation"},tag:"div"}],tag:"div"},sources:["https://cdn.jsdelivr.net/npm/@micro-lc/layout@~2.0/dist/mlc-iconic.js","https://cdn.jsdelivr.net/npm/@micro-lc/layout@~2.0/dist/mlc-url.js","https://cdn.jsdelivr.net/npm/@micro-lc/layout@~2.0/dist/mlc-loading-animation.js","https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@~2.0/dist/micro-lc.production.js"]}})}),t)};u({content:{disableOverlay:!0,redirectTo:"/"},type:"options"});var d=n.pipe((0,s.q)(1)),f=n.pipe((0,c.T)(1));r.add(d.subscribe((function(e){u({content:e,type:"new-configuration"})}))),r.add(f.subscribe((function(){r.unsubscribe(),function(e){e.src=String(e.src)}(o)})))}}},d=n(48792),f=n(91219),m=n(39767),g=n(89721),p=n(44591),h=n(71108),v=n(76865),y=n(93672),w=n(50493),b=n(65250),E=n(91397),C=n(86261),x=n(39893),M=n(33625),k=n(7063),j=n(81595),S=n(82696),Z={applications:{about:{config:{content:{attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px"},content:[{content:"About \ud83d\udcef",tag:"span"},{attributes:{href:"https://mia-platform.eu/",target:"_blank"},content:"Check out what we do at Mia-Platform!",tag:"a"}],tag:"div"}},integrationMode:"compose",route:"/about"},home:{config:{content:{attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px"},content:[{content:"Welcome to the micro-lc playground! \ud83d\udc4b",tag:"span"},{attributes:{href:"https://micro-lc.io/",target:"_blank"},content:"Get started with the official documentation!",tag:"a"}],tag:"div"}},integrationMode:"compose",route:"/home"}},layout:{content:[{properties:{logo:{url:"https://avatars.githubusercontent.com/u/92730708?s=200&v=4"},menuItems:[{icon:{library:"@ant-design/icons-svg",selector:"HomeOutlined"},id:"home",label:"Home",type:"application"},{icon:{library:"@ant-design/icons-svg",selector:"ContactsOutlined"},id:"about",label:"About",type:"application"}],mode:"fixedSideBar"},tag:"mlc-layout"}],sources:"https://cdn.jsdelivr.net/npm/@micro-lc/layout@~2.0/dist/mlc-layout.js"},settings:{defaultUrl:"/home"},version:2},L=n(96077),O=n(30546),R=(n(1880),n(71507),n(3314),n(58476),n(47014),n(85717),n(16703),n(19614),n(180),n(65401),n(95493),n(73984),n(28001),n(1761),n(56095),n(48809),n(81682),n(68504),n(56362),n(24821),n(13807),n(18705),n(16624),n(20804),n(14322),n(74054),n(98330),n(75225),n(87570),n(87935),n(77902),n(92693),n(9909),n(38256),n(85071),n(56852),n(28787),n(69501),n(48101),n(14571),n(28856),n(95653),n(50595),n(75268),n(43749),n(23488),n(5353),n(20441),n(481),n(82116),n(49853),n(80350),n(11479),n(16022),n(2937),n(18869),n(35674),n(13598),n(54300),n(42386),n(16995),n(81668),n(64606),n(35848),"json"),N="yaml",P={"*.config":{uri:"https://raw.githubusercontent.com/micro-lc/micro-lc/main/packages/interfaces/schemas/v2/config.schema.json#"}},A=function(e,t,n){return""+new URL(window.location.pathname.replace(/\/$/,""),window.location.href).href+t.replace("*",null!=e?e:"")+"."+n},H=Object.entries(P).reduce((function(e,t){var n,r=t[0],o=t[1];return e[r]=Object.assign({},o,{fileMatch:(n=r,["**/"+n+"."+R,"**/"+n+"."+N])}),e}),{});r={default:function(){return new Worker(new URL(n.p+n.u(406),n.b))},json:function(){return new Worker(new URL(n.p+n.u(7111),n.b))},yaml:function(){return new Worker(new URL(n.p+n.u(944),n.b))}},window.MonacoEnvironment={getWorker:function(e,t){return(0,E.Z)((0,b.Z)().mark((function e(){return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("json"!==t&&"yaml"!==t){e.next=2;break}return e.abrupt("return",Promise.resolve(r[t]()));case 2:return e.abrupt("return",Promise.resolve(r.default()));case 3:case"end":return e.stop()}}),e)})))()}},L.languages.json.jsonDefaults.setDiagnosticsOptions({allowComments:!0,enableSchemaRequest:!0,schemas:[H["*.config"]],validate:!0}),(0,O.iV)({enableSchemaRequest:!0,schemas:[H["*.config"]]});var I=function(){var e=(0,E.Z)((0,b.Z)().mark((function e(t){var n,r;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(n=window.MonacoEnvironment)||!n.getWorker){e.next=4;break}return"then"in(r=window.MonacoEnvironment.getWorker("",t))||(r=Promise.resolve(r)),e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=n(48532),J=n(68476);function D(e){var t=this;return{to:function(n){if(e===n)return{error:!1,messages:[],value:"json"===n?(0,J.Z)(t,{whitespace:!1}).trim():t};var r,o,i;try{if("jsonyaml"===""+e+n)i=t,r=W.ZP.dump(JSON.parse((0,J.Z)(i,{whitespace:!1}).trim()),{schema:W.ZP.JSON_SCHEMA});else o=t,r=JSON.stringify(W.ZP.load(o,{json:!0,schema:W.ZP.JSON_SCHEMA}));return{error:!1,messages:[],value:r}}catch(a){return{error:!0,messages:a instanceof Error?[a.message]:[],value:void 0}}}}}var K=function(e){return{from:D.bind(e)}},F={automaticLayout:!0,insertSpaces:!0,minimap:{autohide:!0},model:null,renderWhitespace:"boundary",scrollBeyondLastLine:!1,tabSize:2},U=function(){},V=function(e,t,n){return Promise.resolve(!0)};var z=function(){var e=(0,E.Z)((0,b.Z)().mark((function e(t,n,r){return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(n).then((function(e){var n,o=new Promise((function(e){n=e})),i=t.onDidChangeModelContent((function(){i.dispose(),null==n||n(e)}));return t.setValue(r),o}),(function(){return t.setValue(r)})).then((function(e){return e?new Promise((function(e,n){var r=setTimeout((function(){var o;null==(o=t.getAction("editor.action.formatDocument"))||o.run().then((function(){var e;return null==(e=t.getAction("editor.foldAll"))?void 0:e.run()})).then((function(){var e;return null==(e=t.getAction("editor.unfold"))?void 0:e.run()})).then(e).catch(n).finally((function(){return clearTimeout(r)}))}),500)})):Promise.reject(new TypeError("Could not react worker for model "+n))})).catch(U));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),_=function(e,t,n,r){var o,i=t[n],a=L.editor,s=e.getModel(),c=null!=(o=i&&(a.getModel(i)||a.createModel(r,n,i)))?o:null,l=Promise.resolve();if(s!==c){var u=e.onDidChangeModel((function(){l=z(e,n,r),u.dispose()}));e.setModel(c)}else l=z(e,n,r);return l},T="@microlc:_content",X=function(e){return function(e,t){var n=(void 0===t?{}:t).lintErrorIsError,r=e.getModel();if(null!==r){var o=r.uri,i=L.editor,a=L.MarkerSeverity,s=i.getModelMarkers({resource:o}).reduce((function(e,t){var r=t.severity,o=t.message;return r===a.Error?(e.ok=!1,e.errors.push(o)):r===a.Warning&&(n&&(e.ok=!1),e.warnings.push(o)),e}),{errors:[],ok:!0,warnings:[]}),c=s.ok,l=s.warnings,u=s.errors,d=r.getLanguageId();if("json"!==d&&"yaml"!==d)return{error:!0,messages:["No available language"],value:void 0};if(!c)return{error:!0,messages:[].concat(u,n?l:[]),value:void 0};var f=K(e.getValue()).from(d).to("json");return Object.assign({},f,{messages:[].concat(l,f.messages)})}}(e)};function B(e,t,n){var r=(0,o.useRef)(),s=(0,o.useMemo)((function(){return new C.X(!0)}),[]),c=(0,o.useCallback)((function(){return s.next(!0)}),[s]),l=(0,o.useCallback)((function(){return s.next(!1)}),[s]);(0,o.useEffect)((function(){var e=s.subscribe((function(e){return n.loading(e)}));return function(){return e.unsubscribe()}}),[s,n]);var u=(0,o.useMemo)((function(){return{json:L.Uri.parse(A(void 0,"*.config",R)),yaml:L.Uri.parse(A(void 0,"*.config",N))}}),[]),d=(0,o.useState)(),f=d[0],m=d[1];(0,o.useEffect)((function(){var e=r.current;if(e){var t,n=L.editor.create(e,F);if(null!==e.parentElement){var o=0;e.parentElement.childNodes.forEach((function(t){t!==e&&"clientHeight"in t&&"number"==typeof t.clientHeight&&(o+=t.clientHeight)})),n.layout({height:e.parentElement.clientHeight-o,width:e.parentElement.clientWidth});var i=e.parentElement,a=new ResizeObserver((function(t){var r=t[0].contentRect,o=0;i.childNodes.forEach((function(t){t!==e&&"clientHeight"in t&&"number"==typeof t.clientHeight&&(o+=t.clientHeight)})),n.layout({height:r.height-o,width:r.width})}));a.observe(i),t=function(){return a.disconnect()}}return function(e,t){t.addCommand(L.KeyMod.CtrlCmd|L.KeyCode.Enter,(function(){null==e||e.dispatchEvent(new KeyboardEvent("keypress",{ctrlKey:!0,key:"Enter"}))}))}(e.parentElement,n),function(e,t){t.addCommand(L.KeyMod.CtrlCmd|L.KeyCode.Space,(function(){var t;null==e||null==(t=e.ownerDocument.defaultView)||t.dispatchEvent(new KeyboardEvent("keydown",{ctrlKey:!0,key:" "}))}))}(e.parentElement,n),function(e){var t=e.getContribution("editor.linkDetector");t&&(t.openerService._defaultExternalOpener.openExternal=V)}(n),m(n),function(){return null==t?void 0:t()}}}),[r]);var g=(0,o.useState)(U),p=g[0],h=g[1],v=(0,o.useState)(U),y=v[0],w=v[1];(0,o.useEffect)((function(){var o=r.current;if(f&&o){var s=new a.w0,d=new i.t(1);d.pipe((0,x.O)(function(e){var t;return null!=(t=e.localStorage.getItem(T))?t:JSON.stringify(Z)}(window))).subscribe((function(r){c();var o=Z;try{o=JSON.parse(r)}catch(s){console.error("local storage was corrupted")}var i,a=(i=o,{to:function(e){try{return{error:!1,messages:[],value:"yaml"===e?W.ZP.dump(i,{schema:W.ZP.JSON_SCHEMA}):JSON.stringify(i)}}catch(t){return{error:!0,messages:t instanceof Error?[t.message]:[],value:void 0}}}}).to(t);if(a.error)return n.errorMessage(a),l();_(f,u,t,a.value).finally((function(){e.next({configuration:JSON.parse(r),contexts:new Map,tags:[]}),l()}))}));var m=o.parentElement?(0,M.R)(o.parentElement,"keypress"):k.C,g=function(t){var r;if(void 0!==t)d.next(t),r={error:!1,messages:[],value:t};else if(r=X(f),console.log("res",r),!r||r.error)return void(r&&n.errorMessage(Object.assign({},r,{messages:["components.editor.error"]})));!function(e,t){e.localStorage.setItem(T,t)}(window,r.value),e.next({configuration:JSON.parse(r.value),contexts:new Map,tags:[]}),n.errorMessage(0===r.messages.length?"":Object.assign({},r,{messages:["components.editor.warning"]}))};return s.add(m.pipe((0,j.h)((function(e){return"Enter"===e.key&&e.ctrlKey})),(0,S.b)((function(e){e.stopPropagation()}))).subscribe((function(){return g()}))),h((function(){return function(){return g()}})),w((function(){return function(){return g(JSON.stringify(Z))}})),function(){var e,t;null==(e=(t={dispose:void 0}).dispose)||e.call(t),s.unsubscribe()}}}),[r,f,c,l,n,e]);var b=(0,o.useCallback)((function(e){if(c(),!f)return l(),!1;var t=X(f);if(!t)return l(),!1;var r=t.error,o=t.value;if(r)return n.errorMessage({error:!0,messages:["components.editor.error.conversion"],value:void 0}),l(),!1;var i=K(o).from("json").to(e),a=i.error,s=i.value,d=i.messages;return a?(n.errorMessage({error:a,messages:["components.editor.error.conversion"],value:s}),l(),!1):(_(f,u,e,s).finally((function(){n.errorMessage(0===d.length?"":{error:a,messages:["components.editor.warning"],value:s}),l()})),!0)}),[f,c,l,n]);return{dispatchReset:y,dispatchSubmit:p,editorRef:r,handleChangeModel:b}}var G=["id","onClick"],Y={errorFilled:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.42646 8.38289C9.13416 8.18039 8.73002 8.20932 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L10.9395 12L8.46967 14.4697L8.38289 14.5735C8.18039 14.8658 8.20932 15.27 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L12 13.0605L14.4697 15.5303L14.5735 15.6171C14.8658 15.8196 15.27 15.7907 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L13.0605 12L15.5303 9.53033L15.6171 9.42646C15.8196 9.13416 15.7907 8.73002 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L12 10.9395L9.53033 8.46967L9.42646 8.38289Z",successFilled:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM17.0668 8.5088C16.7955 8.19579 16.3218 8.16195 16.0088 8.43323L9.576 14.007L7.99092 12.6348L7.88109 12.5557C7.57501 12.3747 7.17399 12.4325 6.93299 12.7109C6.66186 13.024 6.69593 13.4977 7.00908 13.7688L9.08601 15.567L9.19759 15.6471C9.47038 15.8072 9.82155 15.7805 10.0681 15.5668L16.9912 9.56677L17.0852 9.46934C17.308 9.19221 17.3079 8.78704 17.0668 8.5088Z",warningFilled:"M21.997 12.2337C21.997 17.7552 17.5209 22.2312 11.9995 22.2312C6.47799 22.2312 2.00195 17.7552 2.00195 12.2337C2.00195 6.71224 6.47799 2.23621 11.9995 2.23621C17.5209 2.23621 21.997 6.71224 21.997 12.2337ZM11.9995 16.9116C12.5173 16.9116 12.937 16.4918 12.937 15.9741C12.937 15.4563 12.5173 15.0366 11.9995 15.0366C11.4817 15.0366 11.062 15.4563 11.062 15.9741C11.062 16.4918 11.4817 16.9116 11.9995 16.9116ZM11.7495 7.55597C11.4734 7.55597 11.2495 7.77983 11.2495 8.05597V12.5552C11.2495 12.8313 11.4734 13.0552 11.7495 13.0552H12.2495C12.5257 13.0552 12.7495 12.8313 12.7495 12.5552V8.05597C12.7495 7.77983 12.5257 7.55597 12.2495 7.55597H11.7495Z"};function q(e){var t=e.id,n=e.onClick,r=(0,f.Z)(e,G);return o.createElement("svg",(0,d.Z)({onClick:n,role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r),o.createElement("path",{d:Y[t],fill:"currentColor",fillRule:"evenodd"}))}var $=["style","render"],Q=m.Z,ee="@microlc:editorFormat",te={"components.editor.error":"Error while applying changes","components.editor.error.conversion":"Error while converting the model","components.editor.warning":"Configuration does not comply"},ne=(0,g.Z)({palette:{primary:{dark:"#c81c83",light:"#e3349d",main:"#de1f92"}}});const re=function(e){var t=e.style,n=e.render,r=(0,f.Z)(e,$),i=(0,o.useMemo)((function(){return function(e){var t,n=e.sessionStorage.getItem(ee);return"string"==typeof(t=n)&&["json","yaml"].includes(t)?n:"json"}(window)}),[]),a=(0,o.useState)(i),s=a[0],c=a[1],l=(0,o.useState)(!0),u=l[0],m=l[1],g=(0,o.useState)(""),b=g[0],E=g[1],C=B(n,i,(0,o.useMemo)((function(){return{errorMessage:E,loading:m}}),[])),x=C.editorRef,M=C.dispatchSubmit,k=C.dispatchReset,j=C.handleChangeModel;return o.createElement("div",(0,d.Z)({},r,{style:Object.assign({display:"flex",flexDirection:"column"},t)}),o.createElement(p.Z,{theme:ne},o.createElement(h.Z,{alignItems:"center",display:u?"flex":"none",flexDirection:"column",flexGrow:"1",justifyContent:"center",width:"100%"},o.createElement(v.Z,null)),o.createElement("div",{ref:function(e){x.current=e},style:{boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",display:u?"none":"flex",height:"100%",width:"100%"}}),o.createElement("div",{style:{alignItems:"baseline",display:"flex",gap:"16px",padding:"16px 24px",textAlign:"center"}},o.createElement(Q,{onChange:function(e){var t=e.target.value;j(t)&&(!function(e,t){e.sessionStorage.setItem(ee,t)}(window,t),c(t))},size:"small",value:s},o.createElement(y.Z,{value:"json"},"JSON"),o.createElement(y.Z,{value:"yaml"},"YAML")),o.createElement("div",{style:{flexGrow:1}}),o.createElement("div",{style:{alignItems:"center",display:"flex",gap:"10px"}},function(e){if(e)return"string"==typeof e?e:e.error?o.createElement(o.Fragment,null,o.createElement(q,{color:"var(--playground-color-red)",height:12,id:"errorFilled",width:12}),o.createElement("span",null,te[e.messages.join("\n")])):0!==e.messages.length?o.createElement(o.Fragment,null,o.createElement(q,{color:"var(--playground-color-orange)",height:12,id:"warningFilled",width:12}),o.createElement("span",null,te[e.messages.join("\n")])):void 0}(b)),o.createElement(w.Z,{onClick:M,variant:"contained"},"Apply"),o.createElement(w.Z,{onClick:k,variant:"contained"},"Reset"))))};var oe=["children","tag","border","borderStyle"];function ie(e){var t=e.clientX-this.x;this.left.style.width=this.width+t+"px"}function ae(e){var t=this.parent.ownerDocument.defaultView;if(t){var n=this.parent.getBoundingClientRect().x,r=t.getComputedStyle(this.left),o=t.getComputedStyle(this.right),i=parseInt(r.borderRightWidth,10)+parseInt(o.borderLeftWidth,10);this.x=e.clientX,this.width=parseInt(r.width,10);var a=Math.abs(e.clientX-n-this.width),s=ie.bind(this);a<i&&(t.addEventListener("mousemove",s),t.addEventListener("mouseup",(function(){t.removeEventListener("mousemove",s)})))}}var se=function(e,t){var n=ae.bind(t);return e.addEventListener("mousedown",n),function(){e.removeEventListener("mousedown",n)}};const ce=function(e){var t=e.children,n=e.tag,r=e.border,i=void 0===r?"both":r,a=e.borderStyle,s=(0,f.Z)(e,oe),c=(0,o.useRef)(null);return(0,o.useEffect)((function(){if(c.current){var e=Array.from(c.current.childNodes).filter((function(e){return"style"in e})),t=e[0],n=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach((function(e){e.style.resize="horizontal",e.style.flexDirection="column"}))}(t,n),"right"!==i&&function(e,t){e.style.borderRight=null!=t?t:"6px solid rgba(0, 0, 0, 0.05)",e.style.cursor="col-resize",e.childNodes.forEach((function(e){return"style"in e&&(e.style.cursor="default")}))}(t,a),"left"!==i&&function(e,t){e.style.borderLeft=null!=t?t:"6px solid rgba(0, 0, 0, 0.05)",e.style.cursor="col-resize",e.childNodes.forEach((function(e){return"style"in e&&(e.style.cursor="default")}))}(n,a),se(c.current,{left:t,parent:c.current,right:n,width:parseInt(t.style.width,10),x:0})}}),[i,a,c]),(0,o.createElement)(null!=n?n:"div",Object.assign({ref:function(e){e&&(c.current=e)}},s),t)};const le=function(){var e=(0,o.useMemo)((function(){return new i.t(1)}),[]),t=(0,o.useMemo)((function(){return u(window,l.origin,e.asObservable())}),[e]);return o.createElement(ce,{border:"left",borderStyle:"12px solid var(--playground-color-grey)",className:"playground grow-first",tag:"main"},o.createElement(re,{render:e,style:{minWidth:"400px",width:"40%"}}),o.createElement("div",{style:{display:"flex",flexGrow:1}},o.createElement("iframe",{onLoad:t,src:l.href,style:{border:"none",height:"100%",width:"100%"},title:"preview"},o.createElement("p",null,"Your browser does not support iframes"))))}},55952:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(98080),o=n(90359),i=n(76687);function a(){return i.createElement(o.Z,{title:"Playground",wrapperClassName:"playground container"},i.createElement(r.Z,null,(function(){var e=n(68582).default;return i.createElement(e,null)})))}}}]);