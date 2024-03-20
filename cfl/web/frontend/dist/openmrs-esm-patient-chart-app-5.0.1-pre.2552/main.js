(()=>{var e,t,r={8179:(e,t,r)=>{"use strict";r.d(t,{Fd:()=>s,JB:()=>i,S_:()=>n,Yh:()=>o,e1:()=>l,sb:()=>a});var n=window.getOpenmrsSpaBase(),a="/patient/:patientUuid/chart",o="".concat(a,"/:view/*"),i="".concat(window.spaBase).concat(a),l="@openmrs/esm-patient-chart-app",s="patient-chart-workspace-header-slot"},1730:(e,t,r)=>{"use strict";var n=r(2870),a=r(414),o=(n.Type.ConceptUuid,n.Type.Array,n.Type.UUID,n.Type.Boolean,n.Type.String,n.Type.Boolean,n.Type.Boolean,n.Type.Array,n.Type.UUID,n.Type.Boolean,n.Type.Boolean,n.Type.Boolean,n.Type.ConceptUuid,n.Type.String,n.Type.Boolean,n.Type.String,n.Type.String,n.Type.String,n.Type.Array,n.Type.ConceptUuid,n.Type.UUID,r(8179));function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r(9130),r(8733),r(3979),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(7631),r.e(4583),r.e(4760),r.e(4924),r.e(4350),r.e(8918)]).then(r.bind(r,11))}),{featureName:"patient-chart",moduleName:o.e1}),(0,n.getSyncLifecycle)((0,a.createDashboardLink)(s(l({},{slot:"patient-chart-summary-dashboard-slot",columns:4,path:"Patient Summary",title:"Patient Summary"}),{moduleName:o.e1})),{featureName:"summary-dashboard",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(1522)]).then(r.bind(r,1522))}),{featureName:"patient-actions-slot",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(9469)]).then(r.bind(r,9469))}),{featureName:"patient-actions-slot",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(4924),r.e(4350),r.e(443)]).then(r.bind(r,443))}),{featureName:"patient-actions-slot",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(9469)]).then(r.bind(r,9469))}),{featureName:"patient-actions-slot",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(7244)]).then(r.bind(r,7244))}),{featureName:"patient-actions-slot",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(4924),r.e(4350),r.e(5169)]).then(r.bind(r,5169))}),{featureName:"patient-actions-slot-deceased-button",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(7244)]).then(r.bind(r,7244))}),{featureName:"patient-actions-slot-cancel-visit-button",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(5485)]).then(r.bind(r,5485))}),{featureName:"patient-actions-slot-add-past-visit-button",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(5485)]).then(r.bind(r,5485))}),{featureName:"patient-search-actions-slot-add-past-visit-button",moduleName:o.e1}),(0,n.getSyncLifecycle)((0,a.createDashboardLink)(s(l({},{slot:"patient-chart-encounters-dashboard-slot",columns:1,path:"Visits",title:"Visits"}),{moduleName:o.e1})),{featureName:"encounter",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(7631),r.e(9692),r.e(2990),r.e(4924),r.e(4350),r.e(5044),r.e(8889)]).then(r.bind(r,8889))}),{featureName:"visits-detail-slot",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(7631),r.e(4924),r.e(4350),r.e(5137)]).then(r.bind(r,5137))}),{featureName:"past-visits-overview",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(9692),r.e(9457),r.e(3781),r.e(4924),r.e(4350),r.e(3565),r.e(4714)]).then(r.bind(r,4714))}),{featureName:"start-visit-form",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(9692),r.e(781),r.e(338),r.e(4924),r.e(4350),r.e(3565),r.e(7046)]).then(r.bind(r,7046))}),{featureName:"mark-patient-deceased-form",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return r.e(4843).then(r.bind(r,4843))}),{featureName:"patient-details-tile",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.resolve().then(r.bind(r,8733))}),{featureName:"Nav group",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.resolve().then(r.bind(r,9130))}),{featureName:"Dashboard",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(4924),r.e(4350),r.e(6721)]).then(r.bind(r,6721))}),{featureName:"cancel visit",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(4350),r.e(948)]).then(r.bind(r,948))}),{featureName:"start visit",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(9457),r.e(4924),r.e(4350),r.e(6642)]).then(r.bind(r,6642))}),{featureName:"end visit",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(4350),r.e(6579)]).then(r.bind(r,6579))}),{featureName:"confirm death",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(4924),r.e(4350),r.e(4202)]).then(r.bind(r,4202))}),{featureName:"confirm alive",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(4350),r.e(6002)]).then(r.bind(r,6002))}),{featureName:"start-visit-button-patient-search",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4350),r.e(686)]).then(r.bind(r,686))}),{featureName:"visit-attribute-tags",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(4924),r.e(4350),r.e(8512)]).then(r.bind(r,8512))}),{featureName:"delete-encounter-modal",moduleName:o.e1}),(0,n.getAsyncLifecycle)((function(){return Promise.all([r.e(3255),r.e(7631),r.e(9692),r.e(2990),r.e(4924),r.e(4350),r.e(5044),r.e(8234)]).then(r.bind(r,8234))}),{featureName:"current-visit-summary",moduleName:o.e1})},9130:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,genericDashboardConfigSchema:()=>s});var n=r(268),a=r.n(n),o=r(2870),i=r(8744),l=r(414),s={title:{_description:"The display string for this dashboard",_default:"",_type:o.Type.String},path:{_description:"The URL fragment this link points to",_default:"",_type:o.Type.String},slot:{_description:"The slot that this dashboard config renders",_default:"",_type:o.Type.String},columns:{_default:1,_type:o.Type.Number,_description:"The number of columns that widgets in the dashboard can use to display themselves in. Note that '2' will not necessarily result in a two-column layout—rather that widgets will be able to occupy either one or both of those columns."}};function c(e){var t=e.basePath,r=(0,o.useConfig)();return a().createElement(i.BrowserRouter,null,a().createElement(l.DashboardExtension,{path:r.path,title:r.title,basePath:t,moduleName:"@openmrs/esm-patient-chart-app"}))}},8733:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,genericNavGroupConfigSchema:()=>l});var n=r(268),a=r.n(n),o=r(2870),i=r(414),l={title:{_type:o.Type.String,_description:"The title of the nav group.",_default:"My Group"},slotName:{_type:o.Type.String,_description:"The name of the slot to create, which links can be added to.",_default:"my-group-nav-slot"}};function s(e){var t=e.basePath,r=(0,o.useConfig)();return a().createElement(i.DashboardGroupExtension,{title:r.title,slotName:r.slotName,basePath:t})}},3979:(e,t,r)=>{var n={"./am.json":[8788,8788],"./en.json":[3574,3574],"./es.json":[8319,8319],"./fr.json":[2757,2757],"./he.json":[5833,5833],"./km.json":[7807,7807]};function a(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((()=>r(a)))}a.keys=()=>Object.keys(n),a.id=3979,e.exports=a}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=r,a.c=n,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@openmrs/esm-patient-chart-app:",a.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==t+o){l=m;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[n];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(d);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{a.S={};var e={},t={};a.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];a.o(a.S,r)||(a.S[r]={});var i=a.S[r],l="@openmrs/esm-patient-chart-app",s=(e,t,r,n)=>{var a=i[e]=i[e]||{},o=a[t];(!o||!o.loaded&&(!n!=!o.eager?n:l>o.from))&&(a[t]={get:r,from:l,eager:!!n})},c=[];return"default"===r&&(s("@carbon/react","1.17.0",(()=>Promise.all([a.e(7631),a.e(4583),a.e(781),a.e(766),a.e(268)]).then((()=>()=>a(766))))),s("@openmrs/esm-framework","5.1.1-pre.944",(()=>Promise.all([a.e(130),a.e(268)]).then((()=>()=>a(130))))),s("@openmrs/esm-patient-common-lib","5.0.1-pre.2552",(()=>Promise.all([a.e(3255),a.e(9692),a.e(4713),a.e(4924),a.e(4350),a.e(268),a.e(3945),a.e(8744),a.e(4566)]).then((()=>()=>a(3945))))),s("dayjs","1.11.10",(()=>a.e(8879).then((()=>()=>a(8879))))),s("react-i18next","11.18.6",(()=>Promise.all([a.e(610),a.e(268)]).then((()=>()=>a(610))))),s("react-router-dom","6.16.0",(()=>Promise.all([a.e(4330),a.e(268)]).then((()=>()=>a(4330))))),s("react","18.2.0",(()=>a.e(2784).then((()=>()=>a(2784))))),s("single-spa-react","5.0.2",(()=>a.e(6630).then((()=>()=>a(6630))))),s("single-spa","5.9.4",(()=>a.e(309).then((()=>()=>a(309)))))),e[r]=c.length?Promise.all(c).then((()=>e[r]=1)):1}}})(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,n+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return n}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():t(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,l=1,s=!0;;l++,i++){var c,u,m=l<t.length?(typeof t[l])[0]:"";if(i>=n.length||"o"==(u=(typeof(c=n[i]))[0]))return!s||("u"==m?l>a&&!o:""==m!=o);if("u"==u){if(!s||"u"!=m)return!1}else if(s)if(m==u)if(l<=a){if(c!=t[l])return!1}else{if(o?c>t[l]:c<t[l])return!1;c!=t[l]&&(s=!1)}else if("s"!=m&&"n"!=m){if(o||l<=a)return!1;s=!1,l--}else{if(l<=a||u<m!=o)return!1;s=!1}else"s"!=m&&"n"!=m&&(s=!1,l--)}}var f=[],d=f.pop.bind(f);for(i=1;i<t.length;i++){var p=t[i];f.push(1==p?d()|d():2==p?d()&d():p?r(p,n):!d())}return!!d()},n=(t,r)=>{var n=t[r];return Object.keys(n).reduce(((t,r)=>!t||!n[t].loaded&&((t,r)=>{t=e(t),r=e(r);for(var n=0;;){if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=t[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,r)?r:t),0)},o=(e,a,o,s)=>{var c=n(e,o);return r(s,c)||i(((e,r,n,a)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(a)+")")(e,o,c,s)),l(e[o][c])},i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},l=e=>(e.loaded=1,e.get()),s=e=>function(t,r,n,o){var i=a.I(t);return i&&i.then?i.then(e.bind(e,t,a.S[t],r,n,o)):e(t,a.S[t],r,n,o)},c=s(((e,t,r,o)=>t&&a.o(t,r)?((e,t,r,a)=>{var o=n(e,r);return l(e[r][o])})(t,0,r):o())),u=s(((e,t,r,n,i)=>t&&a.o(t,r)?o(t,0,r,n):i())),m={},f={4924:()=>u("default","react-i18next",[1,11],(()=>a.e(610).then((()=>()=>a(610))))),4350:()=>u("default","@carbon/react",[1,1],(()=>Promise.all([a.e(7631),a.e(4583),a.e(781),a.e(766)]).then((()=>()=>a(766))))),3023:()=>u("default","single-spa",[1,5],(()=>a.e(309).then((()=>()=>a(309))))),7537:()=>u("default","single-spa-react",[1,5],(()=>a.e(6630).then((()=>()=>a(6630))))),3565:()=>u("default","dayjs",[1,1],(()=>a.e(8879).then((()=>()=>a(8879))))),6081:()=>c("default","@openmrs/esm-framework/src/internal",(()=>a.e(130).then((()=>()=>a(130))))),268:()=>u("default","react",[1,18],(()=>a.e(2784).then((()=>()=>a(2784))))),8744:()=>u("default","react-router-dom",[1,6],(()=>a.e(4330).then((()=>()=>a(4330))))),414:()=>u("default","@openmrs/esm-patient-common-lib",[0],(()=>Promise.all([a.e(3255),a.e(9692),a.e(4713),a.e(4924),a.e(4350),a.e(3945)]).then((()=>()=>a(3945))))),2870:()=>u("default","@openmrs/esm-framework",[1,5],(()=>a.e(130).then((()=>()=>a(130)))))};[2870,414,268,8744].forEach((e=>{a.m[e]=t=>{m[e]=0,delete a.c[e];var r=f[e]();if("function"!=typeof r)throw new Error("Shared module is not available for eager consumption: "+e);t.exports=r()}}));var d={268:[268],3565:[3565],3945:[6081],4350:[4350],4566:[414,2870],4924:[4924],8744:[8744],8918:[3023,7537]};a.f.consumes=(e,t)=>{a.o(d,e)&&d[e].forEach((e=>{if(a.o(m,e))return t.push(m[e]);var r=t=>{m[e]=0,a.m[e]=r=>{delete a.c[e],r.exports=t()}},n=t=>{delete m[e],a.m[e]=r=>{throw delete a.c[e],t}};try{var o=f[e]();o.then?t.push(m[e]=o.then(r).catch(n)):r(o)}catch(e){n(e)}}))}})(),(()=>{var e={179:0,4566:0,268:0,1730:0,8744:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(4(350|566|924)|268|3565|8744)$/.test(t))e[t]=0;else{var o=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=o);var i=a.p+a.u(t),l=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,l,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);s&&s(a)}for(t&&t(r);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0,a(1730)})();