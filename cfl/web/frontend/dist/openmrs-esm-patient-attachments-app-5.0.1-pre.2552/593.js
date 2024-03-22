/*! For license information please see 593.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_patient_attachments_app=globalThis.webpackChunk_openmrs_esm_patient_attachments_app||[]).push([[593],{2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},272:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}return[t].join("\n")}},1354:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},7378:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},4154:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5993:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},1583:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},8141:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},452:(e,t,n)=>{var r=n(7900),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,i=r.useEffect,s=r.useLayoutEffect,c=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return s((function(){o.value=n,o.getSnapshot=t,u(o)&&l({inst:o})}),[e,n,t]),i((function(){return u(o)&&l({inst:o}),e((function(){u(o)&&l({inst:o})}))}),[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},3100:(e,t,n)=>{e.exports=n(452)},4729:(e,t,n)=>{n.d(t,{$l:()=>i,BN:()=>M,DY:()=>p,J$:()=>$,JN:()=>E,LI:()=>C,PM:()=>u,W6:()=>O,i_:()=>a,ko:()=>z,kw:()=>L,mf:()=>c,o8:()=>s,qC:()=>N,s6:()=>Z,sj:()=>D,u3:()=>I,u_:()=>U,w6:()=>S,xD:()=>G});var r=n(7900);const o=()=>{},a=o(),i=Object,s=e=>e===a,c=e=>"function"==typeof e,u=(e,t)=>({...e,...t}),l=new WeakMap;let d=0;const f=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,a;if(i(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=l.get(e),o)return o;if(o=++d+"~",l.set(e,o),n==Array){for(o="@",a=0;a<e.length;a++)o+=f(e[a])+",";l.set(e,o)}if(n==i){o="#";const t=i.keys(e).sort();for(;!s(a=t.pop());)s(e[a])||(o+=a+":"+f(e[a])+",");l.set(e,o)}}return o},p=new WeakMap,v={},h={},g="undefined",m=typeof window!=g,y=typeof document!=g,E=(e,t)=>{const n=p.get(e);return[()=>!s(t)&&e.get(t)||v,r=>{if(!s(t)){const o=e.get(t);t in h||(h[t]=o),n[5](t,u(o,r),o||v)}},n[6],()=>!s(t)&&t in h?h[t]:!s(t)&&e.get(t)||v]};let w=!0;const[_,b]=m&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[o,o],R={isOnline:()=>w,isVisible:()=>{const e=y&&document.visibilityState;return s(e)||"hidden"!==e}},T={initFocus:e=>(y&&document.addEventListener("visibilitychange",e),_("focus",e),()=>{y&&document.removeEventListener("visibilitychange",e),b("focus",e)}),initReconnect:e=>{const t=()=>{w=!0,e()},n=()=>{w=!1};return _("online",t),_("offline",n),()=>{b("online",t),b("offline",n)}}},S=!r.useId,O=!m||"Deno"in window,L=e=>m&&typeof window.requestAnimationFrame!=g?window.requestAnimationFrame(e):setTimeout(e,1),C=O?r.useEffect:r.useLayoutEffect,V="undefined"!=typeof navigator&&navigator.connection,k=!O&&V&&(["slow-2g","2g"].includes(V.effectiveType)||V.saveData),N=e=>{if(c(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?f(e):"",t]};let x=0;const I=()=>++x;var D={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function M(...e){const[t,n,r,o]=e,i=u({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{});let l=i.populateCache;const d=i.rollbackOnError;let f=i.optimisticData;const v=!1!==i.revalidate,h=i.throwOnError;if(c(n)){const e=n,r=[],o=t.keys();for(const n of o)!/^\$(inf|sub)\$/.test(n)&&e(t.get(n)._k)&&r.push(n);return Promise.all(r.map(g))}return g(n);async function g(n){const[o]=N(n);if(!o)return;const[i,u]=E(t,o),[g,m,y,w]=p.get(t),_=()=>{const e=g[o];return v&&(delete y[o],delete w[o],e&&e[0])?e[0](2).then((()=>i().data)):i().data};if(e.length<3)return _();let b,R=r;const T=I();m[o]=[T,0];const S=!s(f),O=i(),L=O.data,C=O._c,V=s(C)?L:C;if(S&&(f=c(f)?f(V,L):f,u({data:f,_c:V})),c(R))try{R=R(V)}catch(e){b=e}if(R&&c(R.then)){if(R=await R.catch((e=>{b=e})),T!==m[o][0]){if(b)throw b;return R}b&&S&&(e=>"function"==typeof d?d(e):!1!==d)(b)&&(l=!0,u({data:V,_c:a}))}if(l&&!b)if(c(l)){const e=l(R,V);u({data:e,error:a,_c:a})}else u({data:R,error:a,_c:a});if(m[o][1]=I(),Promise.resolve(_()).then((()=>{u({_c:a})})),!b)return R;if(h)throw b}}const A=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},j=(e,t)=>{if(!p.has(e)){const n=u(T,t),r={},i=M.bind(a,e);let s=o;const c={},l=(e,t)=>{const n=c[e]||[];return c[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},d=(t,n,r)=>{e.set(t,n);const o=c[t];if(o)for(const e of o)e(n,r)},f=()=>{if(!p.has(e)&&(p.set(e,[r,{},{},{},i,d,l]),!O)){const t=n.initFocus(setTimeout.bind(a,A.bind(a,r,0))),o=n.initReconnect(setTimeout.bind(a,A.bind(a,r,1)));s=()=>{t&&t(),o&&o(),p.delete(e)}}};return f(),[e,i,f,s]}return[e,p.get(e)[4]]},[P,F]=j(new Map),U=u({onLoadingSlow:o,onSuccess:o,onError:o,onErrorRetry:(e,t,n,r,o)=>{const a=n.errorRetryCount,i=o.retryCount,c=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!s(a)&&i>a||setTimeout(r,c,o)},onDiscarded:o,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:k?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:k?5e3:3e3,compare:(e,t)=>f(e)==f(t),isPaused:()=>!1,cache:P,mutate:F,fallback:{}},R),W=(e,t)=>{const n=u(e,t);if(t){const{use:r,fallback:o}=e,{use:a,fallback:i}=t;r&&a&&(n.use=r.concat(a)),o&&i&&(n.fallback=u(o,i))}return n},J=(0,r.createContext)({}),$=e=>{const{value:t}=e,n=(0,r.useContext)(J),o=c(t),i=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),s=(0,r.useMemo)((()=>o?i:W(n,i)),[o,n,i]),l=i&&i.provider,d=(0,r.useRef)(a);l&&!d.current&&(d.current=j(l(s.cache||P),i));const f=d.current;return f&&(s.cache=f[0],s.mutate=f[1]),C((()=>{if(f)return f[2]&&f[2](),f[3]}),[]),(0,r.createElement)(J.Provider,u(e,{value:s}))},q=m&&window.__SWR_DEVTOOLS_USE__,H=q?window.__SWR_DEVTOOLS_USE__:[],B=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Y=H.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const[r]=N(t),[,,,o]=p.get(P);if(r.startsWith("$inf$"))return n(...e);const a=o[r];return s(a)?n(...e):(delete o[r],a)}),r))),Z=e=>function(...t){const n=u(U,(0,r.useContext)(J)),[o,a,i]=B(t),s=W(n,i);let c=e;const{use:l}=s,d=(l||[]).concat(Y);for(let e=d.length;e--;)c=d[e](c);return c(o,a||s.fetcher||null,s)},z=(e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},G=(e,t)=>(...n)=>{const[r,o,a]=B(n),i=(a.use||[]).concat(t);return e(r,o,{...a,use:i})};q&&(window.__SWR_DEVTOOLS_REACT__=r)},3255:(e,t,n)=>{n.d(t,{ZP:()=>c});var r=n(7900),o=n(3100),a=n(4729);const i=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),s={dedupe:!0},c=(a.$l.defineProperty(a.J$,"defaultValue",{value:a.u_}),(0,a.s6)(((e,t,n)=>{const{cache:c,compare:u,suspense:l,fallbackData:d,revalidateOnMount:f,revalidateIfStale:p,refreshInterval:v,refreshWhenHidden:h,refreshWhenOffline:g,keepPreviousData:m}=n,[y,E,w,_]=a.DY.get(c),[b,R]=(0,a.qC)(e),T=(0,r.useRef)(!1),S=(0,r.useRef)(!1),O=(0,r.useRef)(b),L=(0,r.useRef)(t),C=(0,r.useRef)(n),V=()=>C.current,k=()=>V().isVisible()&&V().isOnline(),[N,x,I,D]=(0,a.JN)(c,b),M=(0,r.useRef)({}).current,A=(0,a.o8)(d)?n.fallback[b]:d,j=(e,t)=>{for(const n in M){const r=n;if("data"===r){if(!u(e[r],t[r])){if(!(0,a.o8)(e[r]))return!1;if(!u(B,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},P=(0,r.useMemo)((()=>{const e=!!b&&!!t&&((0,a.o8)(f)?!V().isPaused()&&!l&&(!!(0,a.o8)(p)||p):f),n=t=>{const n=(0,a.PM)(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=N(),o=D(),i=n(r),s=r===o?i:n(o);let c=i;return[()=>{const e=n(N());return j(e,c)?(c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},()=>s]}),[c,b]),F=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>I(b,((t,n)=>{j(n,t)||e()}))),[c,b]),P[0],P[1]),U=!T.current,W=y[b]&&y[b].length>0,J=F.data,$=(0,a.o8)(J)?A:J,q=F.error,H=(0,r.useRef)($),B=m?(0,a.o8)(J)?H.current:J:$,Y=!(W&&!(0,a.o8)(q))&&(U&&!(0,a.o8)(f)?f:!V().isPaused()&&(l?!(0,a.o8)($)&&p:(0,a.o8)($)||p)),Z=!!(b&&t&&U&&Y),z=(0,a.o8)(F.isValidating)?Z:F.isValidating,G=(0,a.o8)(F.isLoading)?Z:F.isLoading,K=(0,r.useCallback)((async e=>{const t=L.current;if(!b||!t||S.current||V().isPaused())return!1;let r,o,i=!0;const s=e||{},c=!w[b]||!s.dedupe,l=()=>a.w6?!S.current&&b===O.current&&T.current:b===O.current,d={isValidating:!1,isLoading:!1},f=()=>{x(d)},p=()=>{const e=w[b];e&&e[1]===o&&delete w[b]},v={isValidating:!0};(0,a.o8)(N().data)&&(v.isLoading=!0);try{if(c&&(x(v),n.loadingTimeout&&(0,a.o8)(N().data)&&setTimeout((()=>{i&&l()&&V().onLoadingSlow(b,n)}),n.loadingTimeout),w[b]=[t(R),(0,a.u3)()]),[r,o]=w[b],r=await r,c&&setTimeout(p,n.dedupingInterval),!w[b]||w[b][1]!==o)return c&&l()&&V().onDiscarded(b),!1;d.error=a.i_;const e=E[b];if(!(0,a.o8)(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return f(),c&&l()&&V().onDiscarded(b),!1;const s=N().data;d.data=u(s,r)?s:r,c&&l()&&V().onSuccess(r,b,n)}catch(e){p();const t=V(),{shouldRetryOnError:n}=t;t.isPaused()||(d.error=e,c&&l()&&(t.onError(e,b,t),(!0===n||(0,a.mf)(n)&&n(e))&&k()&&t.onErrorRetry(e,b,t,(e=>{const t=y[b];t&&t[0]&&t[0](a.sj.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return i=!1,f(),!0}),[b,c]),Q=(0,r.useCallback)(((...e)=>(0,a.BN)(c,O.current,...e)),[]);if((0,a.LI)((()=>{L.current=t,C.current=n,(0,a.o8)(J)||(H.current=J)})),(0,a.LI)((()=>{if(!b)return;const e=K.bind(a.i_,s);let t=0;const n=(0,a.ko)(b,y,((n,r={})=>{if(n==a.sj.FOCUS_EVENT){const n=Date.now();V().revalidateOnFocus&&n>t&&k()&&(t=n+V().focusThrottleInterval,e())}else if(n==a.sj.RECONNECT_EVENT)V().revalidateOnReconnect&&k()&&e();else{if(n==a.sj.MUTATE_EVENT)return K();if(n==a.sj.ERROR_REVALIDATE_EVENT)return K(r)}}));return S.current=!1,O.current=b,T.current=!0,x({_k:R}),Y&&((0,a.o8)($)||a.W6?e():(0,a.kw)(e)),()=>{S.current=!0,n()}}),[b]),(0,a.LI)((()=>{let e;function t(){const t=(0,a.mf)(v)?v(N().data):v;t&&-1!==e&&(e=setTimeout(n,t))}function n(){N().error||!h&&!V().isVisible()||!g&&!V().isOnline()?t():K(s).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[v,h,g,b]),(0,r.useDebugValue)(B),l&&(0,a.o8)($)&&b){if(!a.w6&&a.W6)throw new Error("Fallback data is required when using suspense in SSR.");L.current=t,C.current=n,S.current=!1;const e=_[b];if(!(0,a.o8)(e)){const t=Q(e);i(t)}if(!(0,a.o8)(q))throw q;{const e=K(s);(0,a.o8)(B)||(e.status="fulfilled",e.value=!0),i(e)}}return{mutate:Q,get data(){return M.data=!0,B},get error(){return M.error=!0,q},get isValidating(){return M.isValidating=!0,z},get isLoading(){return M.isLoading=!0,G}}})))}}]);