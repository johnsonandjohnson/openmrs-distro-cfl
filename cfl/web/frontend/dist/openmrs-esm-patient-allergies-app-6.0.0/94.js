"use strict";(globalThis.webpackChunk_openmrs_esm_patient_allergies_app=globalThis.webpackChunk_openmrs_esm_patient_allergies_app||[]).push([[94],{6804:(t,r,e)=>{var n;e.d(r,{Z:()=>f});var o=new Uint8Array(16);function u(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=[],c=0;c<256;++c)a.push((c+256).toString(16).substr(1));const s=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(a[t[r+0]]+a[t[r+1]]+a[t[r+2]]+a[t[r+3]]+"-"+a[t[r+4]]+a[t[r+5]]+"-"+a[t[r+6]]+a[t[r+7]]+"-"+a[t[r+8]]+a[t[r+9]]+"-"+a[t[r+10]]+a[t[r+11]]+a[t[r+12]]+a[t[r+13]]+a[t[r+14]]+a[t[r+15]]).toLowerCase();if(!function(t){return"string"==typeof t&&i.test(t)}(e))throw TypeError("Stringified UUID is invalid");return e},f=function(t,r,e){var n=(t=t||{}).random||(t.rng||u)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var o=0;o<16;++o)r[e+o]=n[o];return r}return s(n)}},2228:(t,r,e)=>{e.d(r,{Z:()=>n});const n=function(t){var r=null==t?0:t.length;return r?t[r-1]:void 0}},2317:(t,r,e)=>{e.d(r,{Z:()=>mr});const n=function(t,r){return t===r||t!=t&&r!=r},o=function(t,r){for(var e=t.length;e--;)if(n(t[e][0],r))return e;return-1};var u=Array.prototype.splice;function i(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}i.prototype.clear=function(){this.__data__=[],this.size=0},i.prototype.delete=function(t){var r=this.__data__,e=o(r,t);return!(e<0||(e==r.length-1?r.pop():u.call(r,e,1),--this.size,0))},i.prototype.get=function(t){var r=this.__data__,e=o(r,t);return e<0?void 0:r[e][1]},i.prototype.has=function(t){return o(this.__data__,t)>-1},i.prototype.set=function(t,r){var e=this.__data__,n=o(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};const a=i;var c=e(8147);const s=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},f=function(t){if(!s(t))return!1;var r=(0,c.Z)(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r};var l=e(3221);const p=l.Z["__core-js_shared__"];var h,v=(h=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||""))?"Symbol(src)_1."+h:"";var _=Function.prototype.toString;const y=function(t){if(null!=t){try{return _.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var b=/^\[object .+?Constructor\]$/,d=Function.prototype,g=Object.prototype,j=d.toString,w=g.hasOwnProperty,m=RegExp("^"+j.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const O=function(t){return!(!s(t)||(r=t,v&&v in r))&&(f(t)?m:b).test(y(t));var r},Z=function(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return O(e)?e:void 0},A=Z(l.Z,"Map"),z=Z(Object,"create");var x=Object.prototype.hasOwnProperty;var k=Object.prototype.hasOwnProperty;function S(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}S.prototype.clear=function(){this.__data__=z?z(null):{},this.size=0},S.prototype.delete=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},S.prototype.get=function(t){var r=this.__data__;if(z){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return x.call(r,t)?r[t]:void 0},S.prototype.has=function(t){var r=this.__data__;return z?void 0!==r[t]:k.call(r,t)},S.prototype.set=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=z&&void 0===r?"__lodash_hash_undefined__":r,this};const E=S,P=function(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map};function C(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}C.prototype.clear=function(){this.size=0,this.__data__={hash:new E,map:new(A||a),string:new E}},C.prototype.delete=function(t){var r=P(this,t).delete(t);return this.size-=r?1:0,r},C.prototype.get=function(t){return P(this,t).get(t)},C.prototype.has=function(t){return P(this,t).has(t)},C.prototype.set=function(t,r){var e=P(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};const $=C;function T(t){var r=this.__data__=new a(t);this.size=r.size}T.prototype.clear=function(){this.__data__=new a,this.size=0},T.prototype.delete=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e},T.prototype.get=function(t){return this.__data__.get(t)},T.prototype.has=function(t){return this.__data__.has(t)},T.prototype.set=function(t,r){var e=this.__data__;if(e instanceof a){var n=e.__data__;if(!A||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new $(n)}return e.set(t,r),this.size=e.size,this};const R=T;function V(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new $;++r<e;)this.add(t[r])}V.prototype.add=V.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},V.prototype.has=function(t){return this.__data__.has(t)};const F=V,U=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1},B=function(t,r){return t.has(r)},D=function(t,r,e,n,o,u){var i=1&e,a=t.length,c=r.length;if(a!=c&&!(i&&c>a))return!1;var s=u.get(t),f=u.get(r);if(s&&f)return s==r&&f==t;var l=-1,p=!0,h=2&e?new F:void 0;for(u.set(t,r),u.set(r,t);++l<a;){var v=t[l],_=r[l];if(n)var y=i?n(_,v,l,r,t,u):n(v,_,l,t,r,u);if(void 0!==y){if(y)continue;p=!1;break}if(h){if(!U(r,(function(t,r){if(!B(h,r)&&(v===t||o(v,t,e,n,u)))return h.push(r)}))){p=!1;break}}else if(v!==_&&!o(v,_,e,n,u)){p=!1;break}}return u.delete(t),u.delete(r),p};var I=e(187);const M=l.Z.Uint8Array,L=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e},W=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e};var q=I.Z?I.Z.prototype:void 0,N=q?q.valueOf:void 0;var G=e(7885);var H=Object.prototype.propertyIsEnumerable,J=Object.getOwnPropertySymbols;const K=J?function(t){return null==t?[]:(t=Object(t),function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,u=[];++e<n;){var i=t[e];r(i,e,t)&&(u[o++]=i)}return u}(J(t),(function(r){return H.call(t,r)})))}:function(){return[]};var Q=e(3391);const X=function(t){return(0,Q.Z)(t)&&"[object Arguments]"==(0,c.Z)(t)};var Y=Object.prototype,tt=Y.hasOwnProperty,rt=Y.propertyIsEnumerable;const et=X(function(){return arguments}())?X:function(t){return(0,Q.Z)(t)&&tt.call(t,"callee")&&!rt.call(t,"callee")};var nt="object"==typeof exports&&exports&&!exports.nodeType&&exports,ot=nt&&"object"==typeof module&&module&&!module.nodeType&&module,ut=ot&&ot.exports===nt?l.Z.Buffer:void 0;const it=(ut?ut.isBuffer:void 0)||function(){return!1};var at=/^(?:0|[1-9]\d*)$/;const ct=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&at.test(t))&&t>-1&&t%1==0&&t<r},st=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var ft={};ft["[object Float32Array]"]=ft["[object Float64Array]"]=ft["[object Int8Array]"]=ft["[object Int16Array]"]=ft["[object Int32Array]"]=ft["[object Uint8Array]"]=ft["[object Uint8ClampedArray]"]=ft["[object Uint16Array]"]=ft["[object Uint32Array]"]=!0,ft["[object Arguments]"]=ft["[object Array]"]=ft["[object ArrayBuffer]"]=ft["[object Boolean]"]=ft["[object DataView]"]=ft["[object Date]"]=ft["[object Error]"]=ft["[object Function]"]=ft["[object Map]"]=ft["[object Number]"]=ft["[object Object]"]=ft["[object RegExp]"]=ft["[object Set]"]=ft["[object String]"]=ft["[object WeakMap]"]=!1;var lt=e(2168),pt="object"==typeof exports&&exports&&!exports.nodeType&&exports,ht=pt&&"object"==typeof module&&module&&!module.nodeType&&module,vt=ht&&ht.exports===pt&&lt.Z.process,_t=function(){try{return ht&&ht.require&&ht.require("util").types||vt&&vt.binding&&vt.binding("util")}catch(t){}}(),yt=_t&&_t.isTypedArray;const bt=yt?(dt=yt,function(t){return dt(t)}):function(t){return(0,Q.Z)(t)&&st(t.length)&&!!ft[(0,c.Z)(t)]};var dt,gt=Object.prototype.hasOwnProperty;const jt=function(t,r){var e=(0,G.Z)(t),n=!e&&et(t),o=!e&&!n&&it(t),u=!e&&!n&&!o&&bt(t),i=e||n||o||u,a=i?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],c=a.length;for(var s in t)!r&&!gt.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||u&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||ct(s,c))||a.push(s);return a};var wt=Object.prototype;const mt=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object);var Ot=Object.prototype.hasOwnProperty;const Zt=function(t){if(e=(r=t)&&r.constructor,r!==("function"==typeof e&&e.prototype||wt))return mt(t);var r,e,n=[];for(var o in Object(t))Ot.call(t,o)&&"constructor"!=o&&n.push(o);return n},At=function(t){return null!=(r=t)&&st(r.length)&&!f(r)?jt(t):Zt(t);var r},zt=function(t){return function(t,r,e){var n=r(t);return(0,G.Z)(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,At,K)};var xt=Object.prototype.hasOwnProperty;const kt=Z(l.Z,"DataView"),St=Z(l.Z,"Promise"),Et=Z(l.Z,"Set"),Pt=Z(l.Z,"WeakMap");var Ct="[object Map]",$t="[object Promise]",Tt="[object Set]",Rt="[object WeakMap]",Vt="[object DataView]",Ft=y(kt),Ut=y(A),Bt=y(St),Dt=y(Et),It=y(Pt),Mt=c.Z;(kt&&Mt(new kt(new ArrayBuffer(1)))!=Vt||A&&Mt(new A)!=Ct||St&&Mt(St.resolve())!=$t||Et&&Mt(new Et)!=Tt||Pt&&Mt(new Pt)!=Rt)&&(Mt=function(t){var r=(0,c.Z)(t),e="[object Object]"==r?t.constructor:void 0,n=e?y(e):"";if(n)switch(n){case Ft:return Vt;case Ut:return Ct;case Bt:return $t;case Dt:return Tt;case It:return Rt}return r});const Lt=Mt;var Wt="[object Arguments]",qt="[object Array]",Nt="[object Object]",Gt=Object.prototype.hasOwnProperty;const Ht=function(t,r,e,o,u,i){var a=(0,G.Z)(t),c=(0,G.Z)(r),s=a?qt:Lt(t),f=c?qt:Lt(r),l=(s=s==Wt?Nt:s)==Nt,p=(f=f==Wt?Nt:f)==Nt,h=s==f;if(h&&it(t)){if(!it(r))return!1;a=!0,l=!1}if(h&&!l)return i||(i=new R),a||bt(t)?D(t,r,e,o,u,i):function(t,r,e,o,u,i,a){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!i(new M(t),new M(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return n(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var c=L;case"[object Set]":var s=1&o;if(c||(c=W),t.size!=r.size&&!s)return!1;var f=a.get(t);if(f)return f==r;o|=2,a.set(t,r);var l=D(c(t),c(r),o,u,i,a);return a.delete(t),l;case"[object Symbol]":if(N)return N.call(t)==N.call(r)}return!1}(t,r,s,e,o,u,i);if(!(1&e)){var v=l&&Gt.call(t,"__wrapped__"),_=p&&Gt.call(r,"__wrapped__");if(v||_){var y=v?t.value():t,b=_?r.value():r;return i||(i=new R),u(y,b,e,o,i)}}return!!h&&(i||(i=new R),function(t,r,e,n,o,u){var i=1&e,a=zt(t),c=a.length;if(c!=zt(r).length&&!i)return!1;for(var s=c;s--;){var f=a[s];if(!(i?f in r:xt.call(r,f)))return!1}var l=u.get(t),p=u.get(r);if(l&&p)return l==r&&p==t;var h=!0;u.set(t,r),u.set(r,t);for(var v=i;++s<c;){var _=t[f=a[s]],y=r[f];if(n)var b=i?n(y,_,f,r,t,u):n(_,y,f,t,r,u);if(!(void 0===b?_===y||o(_,y,e,n,u):b)){h=!1;break}v||(v="constructor"==f)}if(h&&!v){var d=t.constructor,g=r.constructor;d==g||!("constructor"in t)||!("constructor"in r)||"function"==typeof d&&d instanceof d&&"function"==typeof g&&g instanceof g||(h=!1)}return u.delete(t),u.delete(r),h}(t,r,e,o,u,i))},Jt=function t(r,e,n,o,u){return r===e||(null==r||null==e||!(0,Q.Z)(r)&&!(0,Q.Z)(e)?r!=r&&e!=e:Ht(r,e,n,o,t,u))},Kt=function(t){return t==t&&!s(t)},Qt=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},Xt=function(t){var r=function(t){for(var r=At(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,Kt(o)]}return r}(t);return 1==r.length&&r[0][2]?Qt(r[0][0],r[0][1]):function(e){return e===t||function(t,r,e,n){var o=e.length,u=o,i=!n;if(null==t)return!u;for(t=Object(t);o--;){var a=e[o];if(i&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<u;){var c=(a=e[o])[0],s=t[c],f=a[1];if(i&&a[2]){if(void 0===s&&!(c in t))return!1}else{var l=new R;if(n)var p=n(s,f,c,t,r,l);if(!(void 0===p?Jt(f,s,3,n,l):p))return!1}}return!0}(e,t,r)}};var Yt=e(2758),tr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rr=/^\w*$/;const er=function(t,r){if((0,G.Z)(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!(0,Yt.Z)(t))||rr.test(t)||!tr.test(t)||null!=r&&t in Object(r)};function nr(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],u=e.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return e.cache=u.set(o,i)||u,i};return e.cache=new(nr.Cache||$),e}nr.Cache=$;var or=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ur=/\\(\\)?/g;const ir=(ar=nr((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(or,(function(t,e,n,o){r.push(n?o.replace(ur,"$1"):e||t)})),r}),(function(t){return 500===cr.size&&cr.clear(),t})),cr=ar.cache,ar);var ar,cr,sr=e(4020);const fr=function(t,r){return(0,G.Z)(t)?t:er(t,r)?[t]:ir((0,sr.Z)(t))},lr=function(t){if("string"==typeof t||(0,Yt.Z)(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},pr=function(t,r){for(var e=0,n=(r=fr(r,t)).length;null!=t&&e<n;)t=t[lr(r[e++])];return e&&e==n?t:void 0},hr=function(t,r){return null!=t&&r in Object(t)},vr=function(t,r){return null!=t&&function(t,r,e){for(var n=-1,o=(r=fr(r,t)).length,u=!1;++n<o;){var i=lr(r[n]);if(!(u=null!=t&&e(t,i)))break;t=t[i]}return u||++n!=o?u:!!(o=null==t?0:t.length)&&st(o)&&ct(i,o)&&((0,G.Z)(t)||et(t))}(t,r,hr)},_r=function(t,r){return er(t)&&Kt(r)?Qt(lr(t),r):function(e){var n=function(t,r,e){var n=null==t?void 0:pr(t,r);return void 0===n?e:n}(e,t);return void 0===n&&n===r?vr(e,t):Jt(r,n,3)}},yr=function(t){return t},br=function(t){return er(t)?(r=lr(t),function(t){return null==t?void 0:t[r]}):function(t){return function(r){return pr(r,t)}}(t);var r},dr=function(t){return t!=t},gr=function(t,r){return!(null==t||!t.length)&&function(t,r,e){return r==r?function(t,r,e){for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}(t,r,e):function(t,r,e,n){for(var o=t.length,u=e+(n?1:-1);n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,dr,e)}(t,r,0)>-1},jr=function(t,r,e){for(var n=-1,o=null==t?0:t.length;++n<o;)if(e(r,t[n]))return!0;return!1},wr=Et&&1/W(new Et([,-0]))[1]==1/0?function(t){return new Et(t)}:function(){},mr=function(t,r){return t&&t.length?function(t,r,e){var n=-1,o=gr,u=t.length,i=!0,a=[],c=a;if(e)i=!1,o=jr;else if(u>=200){var s=r?null:wr(t);if(s)return W(s);i=!1,o=B,c=new F}else c=r?[]:a;t:for(;++n<u;){var f=t[n],l=r?r(f):f;if(f=e||0!==f?f:0,i&&l==l){for(var p=c.length;p--;)if(c[p]===l)continue t;r&&c.push(l),a.push(f)}else o(c,l,e)||(c!==a&&c.push(l),a.push(f))}return a}(t,"function"==typeof(e=r)?e:null==e?yr:"object"==typeof e?(0,G.Z)(e)?_r(e[0],e[1]):Xt(e):br(e)):[];var e}}}]);