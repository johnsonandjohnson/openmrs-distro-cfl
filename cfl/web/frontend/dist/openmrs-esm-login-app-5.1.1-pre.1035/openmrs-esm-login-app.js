var _openmrs_esm_login_app;(()=>{"use strict";var e,r,t,n,o,a,i,l,s,u,p,f,d,h,c,m={2918:(e,r,t)=>{var n={"./start":()=>t.e(337).then((()=>()=>t(8337)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},v={};function g(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return m[e](t,t.exports,g),t.loaded=!0,t.exports}g.m=m,g.c=v,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+".js",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@openmrs/esm-login-app:",g.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var p=s[u];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+o){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{g.S={};var e={},r={};g.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var a=g.S[t],i="@openmrs/esm-login-app",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@openmrs/esm-framework","5.1.1-pre.1035",(()=>Promise.all([g.e(776),g.e(889)]).then((()=>()=>g(4889))))),l("react-dom","18.2.0",(()=>Promise.all([g.e(788),g.e(776)]).then((()=>()=>g(2788))))),l("react-i18next","11.18.6",(()=>Promise.all([g.e(263),g.e(776)]).then((()=>()=>g(8263))))),l("react-router-dom","6.4.2",(()=>Promise.all([g.e(63),g.e(776)]).then((()=>()=>g(7063))))),l("react","18.2.0",(()=>g.e(735).then((()=>()=>g(2735))))),l("swr/_internal","2.2.2",(()=>Promise.all([g.e(56),g.e(776)]).then((()=>()=>g(56))))),l("swr/infinite","2.2.2",(()=>Promise.all([g.e(126),g.e(776),g.e(698),g.e(111)]).then((()=>()=>g(9111)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var r=g.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():o(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,s=!0;;l++,i++){var u,p,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(p=(typeof(u=r[i]))[0]))return!s||("u"==f?l>n&&!o:""==f!=o);if("u"==p){if(!s||"u"!=f)return!1}else if(s)if(f==p)if(l<=n){if(u!=e[l])return!1}else{if(o?u>e[l]:u<e[l])return!1;u!=e[l]&&(s=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;s=!1,l--}else{if(l<=n||p<f!=o)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,l--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var c=e[i];d.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||u(l(e,t,o,n)),p(e[t][o])},u=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,n,o){var a=g.I(r);return a&&a.then?a.then(e.bind(e,r,g.S[r],t,n,o)):e(0,g.S[r],t,n,o)})(((e,r,t,n,o)=>r&&g.o(r,t)?s(r,0,t,n):o())),d={},h={5776:()=>f("default","react",[1,18],(()=>g.e(735).then((()=>()=>g(2735))))),3698:()=>f("default","swr/_internal",[7,5,1,1,,"pre",1035],(()=>g.e(56).then((()=>()=>g(56))))),4610:()=>f("default","@openmrs/esm-framework",[0],(()=>Promise.all([g.e(776),g.e(889)]).then((()=>()=>g(4889))))),2680:()=>f("default","react-i18next",[1,11],(()=>g.e(263).then((()=>()=>g(8263))))),1763:()=>f("default","react-router-dom",[1,6],(()=>g.e(63).then((()=>()=>g(7063))))),8340:()=>f("default","swr/infinite",[7,5,1,1,,"pre",1035],(()=>Promise.all([g.e(126),g.e(698),g.e(173)]).then((()=>()=>g(9111)))))},c={337:[4610],342:[1763,8340],680:[2680],698:[3698],776:[5776]},g.f.consumes=(e,r)=>{g.o(c,e)&&c[e].forEach((e=>{if(g.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},n=r=>{delete d[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var o=h[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={356:0};g.f.j=(r,t)=>{var n=g.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(680|698|776)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=g.p+g.u(r),i=new Error;g.l(a,(t=>{if(g.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)g.o(i,n)&&(g.m[n]=i[n]);l&&l(g)}for(r&&r(t);s<a.length;s++)o=a[s],g.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunk_openmrs_esm_login_app=globalThis.webpackChunk_openmrs_esm_login_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),g.nc=void 0;var b=g(2918);_openmrs_esm_login_app=b})();