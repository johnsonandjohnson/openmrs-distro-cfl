"use strict";(globalThis.webpackChunk_openmrs_esm_patient_search_app=globalThis.webpackChunk_openmrs_esm_patient_search_app||[]).push([[982],{9884:(e,t,r)=>{r.d(t,{TZ:()=>h,W:()=>s});var n,i,o,c,a=r(3394),l=r(5206),u=r.n(l),f=["children","size"],v=["children","size"],s=u().forwardRef((function(e,t){var r=e.children,o=e.size,c=void 0===o?16:o,l=(0,a._)(e,f);return"glyph"===c||"glyph"===c||"glyphpx"===c?u().createElement(a.I,(0,a.a)({width:c,height:c,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 5 8",fill:"currentColor"},l),n||(n=u().createElement("path",{d:"M5 8L0 4 5 0z"})),r):u().createElement(a.I,(0,a.a)({width:c,height:c,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},l),i||(i=u().createElement("path",{d:"M20 24L10 16 20 8z"})),r)})),h=u().forwardRef((function(e,t){var r=e.children,n=e.size,i=void 0===n?16:n,l=(0,a._)(e,v);return"glyph"===i||"glyph"===i||"glyphpx"===i?u().createElement(a.I,(0,a.a)({width:i,height:i,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 5 8",fill:"currentColor"},l),o||(o=u().createElement("path",{d:"M0 0L5 4 0 8z"})),r):u().createElement(a.I,(0,a.a)({width:i,height:i,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},l),c||(c=u().createElement("path",{d:"M12 8L22 16 12 24z"})),r)}))},8043:(e,t,r)=>{r.d(t,{r4:()=>f});var n,i,o,c=r(3394),a=r(5206),l=r.n(a),u=["children","size"],f=l().forwardRef((function(e,t){var r=e.children,a=e.size,f=void 0===a?16:a,v=(0,c._)(e,u);return l().createElement(c.I,(0,c.a)({width:f,height:f,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},v),n||(n=l().createElement("circle",{cx:"16",cy:"8",r:"2"})),i||(i=l().createElement("circle",{cx:"16",cy:"16",r:"2"})),o||(o=l().createElement("circle",{cx:"16",cy:"24",r:"2"})),r)}))},7951:(e,t,r)=>{r.d(t,{Z:()=>T});const n=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i="object"==typeof global&&global&&global.Object===Object&&global;var o="object"==typeof self&&self&&self.Object===Object&&self;const c=i||o||Function("return this")(),a=function(){return c.Date.now()};var l=/\s/;var u=/^\s+/;const f=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&l.test(e.charAt(t)););return t}(e)+1).replace(u,""):e},v=c.Symbol;var s=Object.prototype,h=s.hasOwnProperty,p=s.toString,d=v?v.toStringTag:void 0;var w=Object.prototype.toString;var g=v?v.toStringTag:void 0;const m=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?function(e){var t=h.call(e,d),r=e[d];try{e[d]=void 0;var n=!0}catch(e){}var i=p.call(e);return n&&(t?e[d]=r:delete e[d]),i}(e):function(e){return w.call(e)}(e)};var b=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,x=/^0o[0-7]+$/i,j=parseInt;const E=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==m(e)}(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=f(e);var r=y.test(e);return r||x.test(e)?j(e.slice(2),r?2:8):b.test(e)?NaN:+e};var _=Math.max,O=Math.min;const T=function(e,t,r){var i,o,c,l,u,f,v=0,s=!1,h=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=i,n=o;return i=o=void 0,v=t,l=e.apply(n,r)}function w(e){var r=e-f;return void 0===f||r>=t||r<0||h&&e-v>=c}function g(){var e=a();if(w(e))return m(e);u=setTimeout(g,function(e){var r=t-(e-f);return h?O(r,c-(e-v)):r}(e))}function m(e){return u=void 0,p&&i?d(e):(i=o=void 0,l)}function b(){var e=a(),r=w(e);if(i=arguments,o=this,f=e,r){if(void 0===u)return function(e){return v=e,u=setTimeout(g,t),s?d(e):l}(f);if(h)return clearTimeout(u),u=setTimeout(g,t),d(f)}return void 0===u&&(u=setTimeout(g,t)),l}return t=E(t)||0,n(r)&&(s=!!r.leading,c=(h="maxWait"in r)?_(E(r.maxWait)||0,t):c,p="trailing"in r?!!r.trailing:p),b.cancel=function(){void 0!==u&&clearTimeout(u),v=0,i=f=o=u=void 0},b.flush=function(){return void 0===u?l:m(a())},b}},2303:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(3255),i=(0,r(4729).xD)(n.ZP,(e=>(t,r,n)=>(n.revalidateOnFocus=!1,n.revalidateIfStale=!1,n.revalidateOnReconnect=!1,e(t,r,n))))}}]);