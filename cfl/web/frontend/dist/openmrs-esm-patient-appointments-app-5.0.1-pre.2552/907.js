"use strict";(globalThis.webpackChunk_openmrs_esm_patient_appointments_app=globalThis.webpackChunk_openmrs_esm_patient_appointments_app||[]).push([[907],{6804:(t,n,r)=>{var e;r.d(n,{Z:()=>f});var o=new Uint8Array(16);function i(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}const u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(t){return"string"==typeof t&&u.test(t)};for(var s=[],c=0;c<256;++c)s.push((c+256).toString(16).substr(1));const f=function(t,n,r){var e=(t=t||{}).random||(t.rng||i)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,n){r=r||0;for(var o=0;o<16;++o)n[r+o]=e[o];return n}return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(s[t[n+0]]+s[t[n+1]]+s[t[n+2]]+s[t[n+3]]+"-"+s[t[n+4]]+s[t[n+5]]+"-"+s[t[n+6]]+s[t[n+7]]+"-"+s[t[n+8]]+s[t[n+9]]+"-"+s[t[n+10]]+s[t[n+11]]+s[t[n+12]]+s[t[n+13]]+s[t[n+14]]+s[t[n+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r}(e)}},2228:(t,n,r)=>{r.d(n,{Z:()=>e});const e=function(t){var n=null==t?0:t.length;return n?t[n-1]:void 0}},600:(t,n,r)=>{r.d(n,{Z:()=>Rt});const e=function(t,n){return t===n||t!=t&&n!=n},o=function(t,n){for(var r=t.length;r--;)if(e(t[r][0],n))return r;return-1};var i=Array.prototype.splice;function u(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}u.prototype.clear=function(){this.__data__=[],this.size=0},u.prototype.delete=function(t){var n=this.__data__,r=o(n,t);return!(r<0||(r==n.length-1?n.pop():i.call(n,r,1),--this.size,0))},u.prototype.get=function(t){var n=this.__data__,r=o(n,t);return r<0?void 0:n[r][1]},u.prototype.has=function(t){return o(this.__data__,t)>-1},u.prototype.set=function(t,n){var r=this.__data__,e=o(r,t);return e<0?(++this.size,r.push([t,n])):r[e][1]=n,this};const a=u;var s=r(8896);const c=(0,r(2411).Z)(Object,"create");var f=Object.prototype.hasOwnProperty;var l=Object.prototype.hasOwnProperty;function h(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}h.prototype.clear=function(){this.__data__=c?c(null):{},this.size=0},h.prototype.delete=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},h.prototype.get=function(t){var n=this.__data__;if(c){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return f.call(n,t)?n[t]:void 0},h.prototype.has=function(t){var n=this.__data__;return c?void 0!==n[t]:l.call(n,t)},h.prototype.set=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=c&&void 0===n?"__lodash_hash_undefined__":n,this};const p=h,v=function(t,n){var r,e,o=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof n?"string":"hash"]:o.map};function _(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}_.prototype.clear=function(){this.size=0,this.__data__={hash:new p,map:new(s.Z||a),string:new p}},_.prototype.delete=function(t){var n=v(this,t).delete(t);return this.size-=n?1:0,n},_.prototype.get=function(t){return v(this,t).get(t)},_.prototype.has=function(t){return v(this,t).has(t)},_.prototype.set=function(t,n){var r=v(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this};const d=_;function y(t){var n=this.__data__=new a(t);this.size=n.size}y.prototype.clear=function(){this.__data__=new a,this.size=0},y.prototype.delete=function(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r},y.prototype.get=function(t){return this.__data__.get(t)},y.prototype.has=function(t){return this.__data__.has(t)},y.prototype.set=function(t,n){var r=this.__data__;if(r instanceof a){var e=r.__data__;if(!s.Z||e.length<199)return e.push([t,n]),this.size=++r.size,this;r=this.__data__=new d(e)}return r.set(t,n),this.size=r.size,this};const g=y;function b(t){var n=-1,r=null==t?0:t.length;for(this.__data__=new d;++n<r;)this.add(t[n])}b.prototype.add=b.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},b.prototype.has=function(t){return this.__data__.has(t)};const Z=b,w=function(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return!0;return!1},m=function(t,n){return t.has(n)},j=function(t,n,r,e,o,i){var u=1&r,a=t.length,s=n.length;if(a!=s&&!(u&&s>a))return!1;var c=i.get(t),f=i.get(n);if(c&&f)return c==n&&f==t;var l=-1,h=!0,p=2&r?new Z:void 0;for(i.set(t,n),i.set(n,t);++l<a;){var v=t[l],_=n[l];if(e)var d=u?e(_,v,l,n,t,i):e(v,_,l,t,n,i);if(void 0!==d){if(d)continue;h=!1;break}if(p){if(!w(n,(function(t,n){if(!m(p,n)&&(v===t||o(v,t,r,e,i)))return p.push(n)}))){h=!1;break}}else if(v!==_&&!o(v,_,r,e,i)){h=!1;break}}return i.delete(t),i.delete(n),h};var O=r(187);const z=r(3221).Z.Uint8Array,A=function(t){var n=-1,r=Array(t.size);return t.forEach((function(t,e){r[++n]=[e,t]})),r},S=function(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=t})),r};var C=O.Z?O.Z.prototype:void 0,k=C?C.valueOf:void 0;var E=r(7885);var P=Object.prototype.propertyIsEnumerable,R=Object.getOwnPropertySymbols;const L=R?function(t){return null==t?[]:(t=Object(t),function(t,n){for(var r=-1,e=null==t?0:t.length,o=0,i=[];++r<e;){var u=t[r];n(u,r,t)&&(i[o++]=u)}return i}(R(t),(function(n){return P.call(t,n)})))}:function(){return[]};var V=r(4405),$=r(2143),D=/^(?:0|[1-9]\d*)$/;const T=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&D.test(t))&&t>-1&&t%1==0&&t<n};var U=r(2663),x=Object.prototype.hasOwnProperty;const I=function(t,n){var r=(0,E.Z)(t),e=!r&&(0,V.Z)(t),o=!r&&!e&&(0,$.Z)(t),i=!r&&!e&&!o&&(0,U.Z)(t),u=r||e||o||i,a=u?function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}(t.length,String):[],s=a.length;for(var c in t)!n&&!x.call(t,c)||u&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||T(c,s))||a.push(c);return a};var B=r(5986),F=r(3282);const M=function(t){return(0,F.Z)(t)?I(t):(0,B.Z)(t)},N=function(t){return function(t,n,r){var e=n(t);return(0,E.Z)(t)?e:function(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t}(e,r(t))}(t,M,L)};var q=Object.prototype.hasOwnProperty;var G=r(2263),H="[object Arguments]",J="[object Array]",K="[object Object]",Q=Object.prototype.hasOwnProperty;const W=function(t,n,r,o,i,u){var a=(0,E.Z)(t),s=(0,E.Z)(n),c=a?J:(0,G.Z)(t),f=s?J:(0,G.Z)(n),l=(c=c==H?K:c)==K,h=(f=f==H?K:f)==K,p=c==f;if(p&&(0,$.Z)(t)){if(!(0,$.Z)(n))return!1;a=!0,l=!1}if(p&&!l)return u||(u=new g),a||(0,U.Z)(t)?j(t,n,r,o,i,u):function(t,n,r,o,i,u,a){switch(r){case"[object DataView]":if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=n.byteLength||!u(new z(t),new z(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return e(+t,+n);case"[object Error]":return t.name==n.name&&t.message==n.message;case"[object RegExp]":case"[object String]":return t==n+"";case"[object Map]":var s=A;case"[object Set]":var c=1&o;if(s||(s=S),t.size!=n.size&&!c)return!1;var f=a.get(t);if(f)return f==n;o|=2,a.set(t,n);var l=j(s(t),s(n),o,i,u,a);return a.delete(t),l;case"[object Symbol]":if(k)return k.call(t)==k.call(n)}return!1}(t,n,c,r,o,i,u);if(!(1&r)){var v=l&&Q.call(t,"__wrapped__"),_=h&&Q.call(n,"__wrapped__");if(v||_){var d=v?t.value():t,y=_?n.value():n;return u||(u=new g),i(d,y,r,o,u)}}return!!p&&(u||(u=new g),function(t,n,r,e,o,i){var u=1&r,a=N(t),s=a.length;if(s!=N(n).length&&!u)return!1;for(var c=s;c--;){var f=a[c];if(!(u?f in n:q.call(n,f)))return!1}var l=i.get(t),h=i.get(n);if(l&&h)return l==n&&h==t;var p=!0;i.set(t,n),i.set(n,t);for(var v=u;++c<s;){var _=t[f=a[c]],d=n[f];if(e)var y=u?e(d,_,f,n,t,i):e(_,d,f,t,n,i);if(!(void 0===y?_===d||o(_,d,r,e,i):y)){p=!1;break}v||(v="constructor"==f)}if(p&&!v){var g=t.constructor,b=n.constructor;g==b||!("constructor"in t)||!("constructor"in n)||"function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b||(p=!1)}return i.delete(t),i.delete(n),p}(t,n,r,o,i,u))};var X=r(3391);const Y=function t(n,r,e,o,i){return n===r||(null==n||null==r||!(0,X.Z)(n)&&!(0,X.Z)(r)?n!=n&&r!=r:W(n,r,e,o,t,i))};var tt=r(3122);const nt=function(t){return t==t&&!(0,tt.Z)(t)},rt=function(t,n){return function(r){return null!=r&&r[t]===n&&(void 0!==n||t in Object(r))}},et=function(t){var n=function(t){for(var n=M(t),r=n.length;r--;){var e=n[r],o=t[e];n[r]=[e,o,nt(o)]}return n}(t);return 1==n.length&&n[0][2]?rt(n[0][0],n[0][1]):function(r){return r===t||function(t,n,r,e){var o=r.length,i=o,u=!e;if(null==t)return!i;for(t=Object(t);o--;){var a=r[o];if(u&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<i;){var s=(a=r[o])[0],c=t[s],f=a[1];if(u&&a[2]){if(void 0===c&&!(s in t))return!1}else{var l=new g;if(e)var h=e(c,f,s,t,n,l);if(!(void 0===h?Y(f,c,3,e,l):h))return!1}}return!0}(r,t,n)}};var ot=r(8147);const it=function(t){return"symbol"==typeof t||(0,X.Z)(t)&&"[object Symbol]"==(0,ot.Z)(t)};var ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,at=/^\w*$/;const st=function(t,n){if((0,E.Z)(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!it(t))||at.test(t)||!ut.test(t)||null!=n&&t in Object(n)};function ct(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u)||i,u};return r.cache=new(ct.Cache||d),r}ct.Cache=d;var ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lt=/\\(\\)?/g;const ht=(pt=ct((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(ft,(function(t,r,e,o){n.push(e?o.replace(lt,"$1"):r||t)})),n}),(function(t){return 500===vt.size&&vt.clear(),t})),vt=pt.cache,pt);var pt,vt;var _t=O.Z?O.Z.prototype:void 0,dt=_t?_t.toString:void 0;const yt=function t(n){if("string"==typeof n)return n;if((0,E.Z)(n))return function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}(n,t)+"";if(it(n))return dt?dt.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r},gt=function(t,n){return(0,E.Z)(t)?t:st(t,n)?[t]:ht(function(t){return null==t?"":yt(t)}(t))},bt=function(t){if("string"==typeof t||it(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Zt=function(t,n){for(var r=0,e=(n=gt(n,t)).length;null!=t&&r<e;)t=t[bt(n[r++])];return r&&r==e?t:void 0},wt=function(t,n){return null!=t&&n in Object(t)};var mt=r(1164);const jt=function(t,n){return null!=t&&function(t,n,r){for(var e=-1,o=(n=gt(n,t)).length,i=!1;++e<o;){var u=bt(n[e]);if(!(i=null!=t&&r(t,u)))break;t=t[u]}return i||++e!=o?i:!!(o=null==t?0:t.length)&&(0,mt.Z)(o)&&T(u,o)&&((0,E.Z)(t)||(0,V.Z)(t))}(t,n,wt)},Ot=function(t,n){return st(t)&&nt(n)?rt(bt(t),n):function(r){var e=function(t,n,r){var e=null==t?void 0:Zt(t,n);return void 0===e?r:e}(r,t);return void 0===e&&e===n?jt(r,t):Y(n,e,3)}},zt=function(t){return t},At=function(t){return st(t)?(n=bt(t),function(t){return null==t?void 0:t[n]}):function(t){return function(n){return Zt(n,t)}}(t);var n},St=function(t){return t!=t},Ct=function(t,n){return!(null==t||!t.length)&&function(t,n,r){return n==n?function(t,n,r){for(var e=r-1,o=t.length;++e<o;)if(t[e]===n)return e;return-1}(t,n,r):function(t,n,r,e){for(var o=t.length,i=r+(e?1:-1);e?i--:++i<o;)if(n(t[i],i,t))return i;return-1}(t,St,r)}(t,n,0)>-1},kt=function(t,n,r){for(var e=-1,o=null==t?0:t.length;++e<o;)if(r(n,t[e]))return!0;return!1};var Et=r(7459);const Pt=Et.Z&&1/S(new Et.Z([,-0]))[1]==1/0?function(t){return new Et.Z(t)}:function(){},Rt=function(t,n){return t&&t.length?function(t,n,r){var e=-1,o=Ct,i=t.length,u=!0,a=[],s=a;if(r)u=!1,o=kt;else if(i>=200){var c=n?null:Pt(t);if(c)return S(c);u=!1,o=m,s=new Z}else s=n?[]:a;t:for(;++e<i;){var f=t[e],l=n?n(f):f;if(f=r||0!==f?f:0,u&&l==l){for(var h=s.length;h--;)if(s[h]===l)continue t;n&&s.push(l),a.push(f)}else o(s,l,r)||(s!==a&&s.push(l),a.push(f))}return a}(t,"function"==typeof(r=n)?r:null==r?zt:"object"==typeof r?(0,E.Z)(r)?Ot(r[0],r[1]):et(r):At(r)):[];var r}},2303:(t,n,r)=>{r.d(n,{Z:()=>o});var e=r(3255);const o=(0,r(4729).xD)(e.ZP,(t=>(n,r,e)=>(e.revalidateOnFocus=!1,e.revalidateIfStale=!1,e.revalidateOnReconnect=!1,t(n,r,e))))}}]);