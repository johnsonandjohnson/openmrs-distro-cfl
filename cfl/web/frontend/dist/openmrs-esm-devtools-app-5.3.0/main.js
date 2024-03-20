(()=>{"use strict";var e,r,t={988:(e,r,t)=>{(0,t(610).getAsyncLifecycle)((function(){return Promise.all([t.e(776),t.e(68)]).then(t.bind(t,68))}),{featureName:"devtools",moduleName:"@openmrs/esm-devtools-app"})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={id:e,loaded:!1,exports:{}};return t[e](a,a.exports,n),a.loaded=!0,a.exports}n.m=t,n.c=o,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@openmrs/esm-devtools-app:",n.l=(t,o,a,i)=>{if(e[t])e[t].push(o);else{var l,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var f=s[p];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){l=f;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",r+a),l.src=t),e[t]=[o];var d=(r,o)=>{l.onerror=l.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),r)return r(o)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),u&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{n.S={};var e={},r={};n.I=(t,o)=>{o||(o=[]);var a=r[t];if(a||(a=r[t]={}),!(o.indexOf(a)>=0)){if(o.push(a),e[t])return e[t];n.o(n.S,t)||(n.S[t]={});var i=n.S[t],l="@openmrs/esm-devtools-app",u=(e,r,t,o)=>{var n=i[e]=i[e]||{},a=n[r];(!a||!a.loaded&&(!o!=!a.eager?o:l>a.from))&&(n[r]={get:t,from:l,eager:!!o})},s=[];return"default"===t&&(u("@openmrs/esm-framework","5.3.0",(()=>Promise.all([n.e(776),n.e(889)]).then((()=>()=>n(889))))),u("react","18.2.0",(()=>n.e(735).then((()=>()=>n(735)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},r=e=>{var t=e[0],o="";if(1===e.length)return"*";if(t+.5){o+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,o+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return o}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():r(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,o)=>{if(0 in r){o=e(o);var n=r[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,p,f=l<r.length?(typeof r[l])[0]:"";if(i>=o.length||"o"==(p=(typeof(s=o[i]))[0]))return!u||("u"==f?l>n&&!a:""==f!=a);if("u"==p){if(!u||"u"!=f)return!1}else if(u)if(f==p)if(l<=n){if(s!=r[l])return!1}else{if(a?s>r[l]:s<r[l])return!1;s!=r[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||p<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var d=[],c=d.pop.bind(d);for(i=1;i<r.length;i++){var h=r[i];d.push(1==h?c()|c():2==h?c()&c():h?t(h,o):!c())}return!!c()},o=(r,t)=>{var o=r[t];return Object.keys(o).reduce(((r,t)=>!r||!o[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var o=0;;){if(o>=r.length)return o<t.length&&"u"!=(typeof t[o])[0];var n=r[o],a=(typeof n)[0];if(o>=t.length)return"u"==a;var i=t[o],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}})(r,t)?t:r),0)},a=(e,n,a,u)=>{var s=o(e,a);return t(u,s)||i(((e,t,o,n)=>"Unsatisfied version "+o+" from "+(o&&e[t][o].from)+" of shared singleton module "+t+" (required "+r(n)+")")(e,a,s,u)),l(e[a][s])},i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},l=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,o,a){var i=n.I(r);return i&&i.then?i.then(e.bind(e,r,n.S[r],t,o,a)):e(r,n.S[r],t,o,a)})(((e,r,t,o,i)=>r&&n.o(r,t)?a(r,0,t,o):i())),s={},p={776:()=>u("default","react",[1,18],(()=>n.e(735).then((()=>()=>n(735))))),610:()=>u("default","@openmrs/esm-framework",[0],(()=>Promise.all([n.e(776),n.e(889)]).then((()=>()=>n(889)))))};[610].forEach((e=>{n.m[e]=r=>{s[e]=0,delete n.c[e];var t=p[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var f={776:[776]};n.f.consumes=(e,r)=>{n.o(f,e)&&f[e].forEach((e=>{if(n.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,n.m[e]=t=>{delete n.c[e],t.exports=r()}},o=r=>{delete s[e],n.m[e]=t=>{throw delete n.c[e],r}};try{var a=p[e]();a.then?r.push(s[e]=a.then(t).catch(o)):t(a)}catch(e){o(e)}}))}})(),(()=>{var e={179:0,988:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(776!=r){var a=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=a);var i=n.p+n.u(r),l=new Error;n.l(i,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var o,a,[i,l,u]=t,s=0;if(i.some((r=>0!==e[r]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);u&&u(n)}for(r&&r(t);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=globalThis.webpackChunk_openmrs_esm_devtools_app=globalThis.webpackChunk_openmrs_esm_devtools_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.nc=void 0,n(988)})();