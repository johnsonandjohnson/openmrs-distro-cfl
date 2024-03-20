"use strict";(globalThis.webpackChunk_openmrs_esm_fast_data_entry_app=globalThis.webpackChunk_openmrs_esm_fast_data_entry_app||[]).push([[92],{8808:(e,t,r)=>{r.d(t,{ZN:()=>u});var s,a,n=r(7750),i=r(1672),o=r.n(i),l=["children","size"],u=o().forwardRef((function(e,t){var r=e.children,i=e.size,u=void 0===i?16:i,c=(0,n._)(e,l);return o().createElement(n.I,(0,n.a)({width:u,height:u,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},c),s||(s=o().createElement("path",{d:"M12 12H14V24H12zM18 12H20V24H18z"})),a||(a=o().createElement("path",{d:"M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"})),r)}))},7486:(e,t,r)=>{r.d(t,{Z:()=>k});const s=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},a="object"==typeof global&&global&&global.Object===Object&&global;var n="object"==typeof self&&self&&self.Object===Object&&self;const i=a||n||Function("return this")(),o=function(){return i.Date.now()};var l=/\s/;var u=/^\s+/;const c=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&l.test(e.charAt(t)););return t}(e)+1).replace(u,""):e},f=i.Symbol;var d=Object.prototype,m=d.hasOwnProperty,y=d.toString,h=f?f.toStringTag:void 0;var g=Object.prototype.toString;var v=f?f.toStringTag:void 0;const b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":v&&v in Object(e)?function(e){var t=m.call(e,h),r=e[h];try{e[h]=void 0;var s=!0}catch(e){}var a=y.call(e);return s&&(t?e[h]=r:delete e[h]),a}(e):function(e){return g.call(e)}(e)};var p=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,V=/^0o[0-7]+$/i,w=parseInt;const A=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==b(e)}(e))return NaN;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=c(e);var r=_.test(e);return r||V.test(e)?w(e.slice(2),r?2:8):p.test(e)?NaN:+e};var S=Math.max,F=Math.min;const k=function(e,t,r){var a,n,i,l,u,c,f=0,d=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=a,s=n;return a=n=void 0,f=t,l=e.apply(s,r)}function g(e){return f=e,u=setTimeout(b,t),d?h(e):l}function v(e){var r=e-c;return void 0===c||r>=t||r<0||m&&e-f>=i}function b(){var e=o();if(v(e))return p(e);u=setTimeout(b,function(e){var r=t-(e-c);return m?F(r,i-(e-f)):r}(e))}function p(e){return u=void 0,y&&a?h(e):(a=n=void 0,l)}function _(){var e=o(),r=v(e);if(a=arguments,n=this,c=e,r){if(void 0===u)return g(c);if(m)return clearTimeout(u),u=setTimeout(b,t),h(c)}return void 0===u&&(u=setTimeout(b,t)),l}return t=A(t)||0,s(r)&&(d=!!r.leading,i=(m="maxWait"in r)?S(A(r.maxWait)||0,t):i,y="trailing"in r?!!r.trailing:y),_.cancel=function(){void 0!==u&&clearTimeout(u),f=0,a=c=n=u=void 0},_.flush=function(){return void 0===u?l:p(o())},_}},7536:(e,t,r)=>{r.d(t,{Gc:()=>V,Qr:()=>T,RV:()=>w,cI:()=>_e});var s=r(1672),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"==typeof e;var l=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),u=e=>l(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>Array.isArray(e)?e.filter(Boolean):[],d=e=>void 0===e,m=(e,t,r)=>{if(!t||!l(e))return r;const s=f(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return d(s)||s===e?d(e[t])?r:e[t]:s};const y="blur",h="onChange",g="onSubmit",v="all",b="pattern",p="required",_=s.createContext(null),V=()=>s.useContext(_),w=e=>{const{children:t,...r}=e;return s.createElement(_.Provider,{value:r},t)};var A=(e,t,r,s=!0)=>{const a={};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t[a]!==v&&(t[a]=!s||v),r&&(r[a]=!0),e[a]}});return a},S=e=>l(e)&&!Object.keys(e).length,F=(e,t,r)=>{const{name:s,...a}=e;return S(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||v)))},k=e=>Array.isArray(e)?e:[e],x=(e,t,r)=>r&&t?e===t:!e||!t||e===t||k(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function D(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var C=e=>"string"==typeof e,j=(e,t,r,s)=>{const a=Array.isArray(e);return C(e)?(s&&t.watch.add(e),m(r,e)):a?e.map((e=>(s&&t.watch.add(e),m(r,e)))):(s&&(t.watchAll=!0),r)},O=e=>"function"==typeof e,E=e=>{for(const t in e)if(O(e[t]))return!0;return!1};const T=e=>e.render(function(e){const t=V(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=function(e){const t=V(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},u=s.useRef(a);u.current=a;const c=s.useCallback((e=>{if(x(u.current,e.name,o)){const t=j(u.current,r._names,e.values||r._formValues);m(d(u.current)||l(t)&&!E(t)?{...t}:Array.isArray(t)?[...t]:d(t)?n:t)}}),[r,o,n]);D({disabled:i,subject:r._subjects.watch,callback:c});const[f,m]=s.useState(d(n)?r._getWatch(a):n);return s.useEffect((()=>{r._removeUnmounted()})),f}({control:a,name:r,defaultValue:m(a._formValues,r,m(a._defaultValues,r,e.defaultValue)),exact:!0}),f=function(e){const t=V(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,l]=s.useState(r._formState),u=s.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=s.useRef(n),f=s.useRef(!0);return c.current=n,D({disabled:a,callback:s.useCallback((e=>f.current&&x(c.current,e.name,i)&&F(e,u.current)&&l({...r._formState,...e})),[r,i]),subject:r._subjects.state}),s.useEffect((()=>(f.current=!0,()=>{f.current=!1})),[]),A(o,r._proxyFormState,u.current,!1)}({control:a,name:r}),h=s.useRef(a.register(r,{...e.rules,value:o}));return s.useEffect((()=>{const e=(e,t)=>{const r=m(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;(i?t&&!a._stateFlags.action:t)?a.unregister(r):e(r,!1)}}),[r,a,i,n]),{field:{name:r,value:o,onChange:s.useCallback((e=>{h.current.onChange({target:{value:u(e),name:r},type:"change"})}),[r]),onBlur:s.useCallback((()=>{h.current.onBlur({target:{value:m(a._formValues,r),name:r},type:y})}),[r,a]),ref:s.useCallback((e=>{const t=m(a._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}),[r,a._fields])},formState:f,fieldState:Object.defineProperties({},{invalid:{get:()=>!!m(f.errors,r)},isDirty:{get:()=>!!m(f.dirtyFields,r)},isTouched:{get:()=>!!m(f.touchedFields,r)},error:{get:()=>m(f.errors,r)}})}}(e));var N=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},M=e=>/^\w*$/.test(e),U=e=>f(e.replace(/["|']|\]/g,"").split(/\.|\[/));function L(e,t,r){let s=-1;const a=M(t)?[t]:U(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=l(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const B=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=m(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus&&d(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else l(s)&&B(s,t)}}};var H=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),R=(e,t,r)=>{const s=f(m(e,r));return L(s,"root",t[r]),L(e,r,s),e},z=e=>"boolean"==typeof e,q=e=>"file"===e.type,P=e=>C(e)||s.isValidElement(e),$=e=>"radio"===e.type,I=e=>e instanceof RegExp;const W={value:!1,isValid:!1},J={value:!0,isValid:!0};var Z=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!d(e[0].attributes.value)?d(e[0].value)||""===e[0].value?J:{value:e[0].value,isValid:!0}:J:W}return W};const G={isValid:!1,value:null};var Q=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),G):G;function K(e,t,r="validate"){if(P(e)||Array.isArray(e)&&e.every(P)||z(e)&&!e)return{type:r,message:P(e)?e:"",ref:t}}var X=e=>l(e)&&!I(e)?e:{value:e,message:""},Y=async(e,t,r,s,n)=>{const{ref:o,refs:u,required:c,maxLength:f,minLength:d,min:m,max:y,pattern:h,validate:g,name:v,valueAsNumber:_,mount:V,disabled:w}=e._f;if(!V||w)return{};const A=u?u[0]:o,F=e=>{s&&A.reportValidity&&(A.setCustomValidity(z(e)?"":e||" "),A.reportValidity())},k={},x=$(o),D=a(o),j=x||D,E=(_||q(o))&&!o.value||""===t||Array.isArray(t)&&!t.length,T=N.bind(null,v,r,k),M=(e,t,r,s="maxLength",a="minLength")=>{const n=e?t:r;k[v]={type:e?s:a,message:n,ref:o,...T(e?s:a,n)}};if(n?!Array.isArray(t)||!t.length:c&&(!j&&(E||i(t))||z(t)&&!t||D&&!Z(u).isValid||x&&!Q(u).isValid)){const{value:e,message:t}=P(c)?{value:!!c,message:c}:X(c);if(e&&(k[v]={type:p,message:t,ref:A,...T(p,t)},!r))return F(t),k}if(!(E||i(m)&&i(y))){let e,s;const a=X(y),n=X(m);if(i(t)||isNaN(t)){const r=o.valueAsDate||new Date(t);C(a.value)&&(e=r>new Date(a.value)),C(n.value)&&(s=r<new Date(n.value))}else{const r=o.valueAsNumber||+t;i(a.value)||(e=r>a.value),i(n.value)||(s=r<n.value)}if((e||s)&&(M(!!e,a.message,n.message,"max","min"),!r))return F(k[v].message),k}if((f||d)&&!E&&(C(t)||n&&Array.isArray(t))){const e=X(f),s=X(d),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(M(a,e.message,s.message),!r))return F(k[v].message),k}if(h&&!E&&C(t)){const{value:e,message:s}=X(h);if(I(e)&&!t.match(e)&&(k[v]={type:b,message:s,ref:o,...T(b,s)},!r))return F(s),k}if(g)if(O(g)){const e=K(await g(t),A);if(e&&(k[v]={...e,...T("validate",e.message)},!r))return F(e.message),k}else if(l(g)){let e={};for(const s in g){if(!S(e)&&!r)break;const a=K(await g[s](t),A,s);a&&(e={...a,...T(s,a.message)},F(a.message),r&&(k[v]=e))}if(!S(e)&&(k[v]={ref:A,...e},!r))return k}return F(!0),k},ee="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function te(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(ee&&(e instanceof Blob||e instanceof FileList)||!r&&!l(e))return e;t=r?[]:{};for(const r in e){if(O(e[r])){t=e;break}t[r]=te(e[r])}}return t}var re=e=>({isOnSubmit:!e||e===g,isOnBlur:"onBlur"===e,isOnChange:e===h,isOnAll:e===v,isOnTouch:"onTouched"===e});function se(e){for(const t in e)if(!d(e[t]))return!1;return!0}function ae(e,t){const r=M(t)?[t]:U(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=d(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let t=0;t<r.slice(0,-1).length;t++){let s,a=-1;const i=r.slice(0,-(t+1)),o=i.length-1;for(t>0&&(n=e);++a<i.length;){const t=i[a];s=s?s[t]:e[t],o===a&&(l(s)&&S(s)||Array.isArray(s)&&se(s))&&(n?delete n[t]:delete e[t]),n=s}}return e}function ne(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ie=e=>i(e)||!o(e);function oe(e,t){if(ie(e)||ie(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!oe(r,e):r!==e)return!1}}return!0}var le=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ue=e=>"select-multiple"===e.type,ce=e=>le(e)&&e.isConnected;function fe(e,t={}){const r=Array.isArray(e);if(l(e)||r)for(const r in e)Array.isArray(e[r])||l(e[r])&&!E(e[r])?(t[r]=Array.isArray(e[r])?[]:{},fe(e[r],t[r])):i(e[r])||(t[r]=!0);return t}function de(e,t,r){const s=Array.isArray(e);if(l(e)||s)for(const s in e)Array.isArray(e[s])||l(e[s])&&!E(e[s])?d(t)||ie(r[s])?r[s]=Array.isArray(e[s])?fe(e[s],[]):{...fe(e[s])}:de(e[s],i(t)?{}:t[s],r[s]):r[s]=!oe(e[s],t[s]);return r}var me=(e,t)=>de(e,t,fe(t)),ye=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>d(e)?e:t?""===e||i(e)?NaN:+e:r&&C(e)?new Date(e):s?s(e):e;function he(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return q(t)?t.files:$(t)?Q(e.refs).value:ue(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?Z(e.refs).value:ye(d(t.value)?e.ref.value:t.value,e)}var ge=e=>d(e)?void 0:I(e)?e.source:l(e)?I(e.value)?e.value.source:e.value:e;function ve(e,t,r){const s=m(e,r);if(s||M(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=m(t,s),i=m(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}const be={mode:g,reValidateMode:h,shouldFocusError:!0};function pe(e={}){let t,r={...be,...e},s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},l=te(r.defaultValues)||{},h=r.shouldUnregister?{}:te(l),g={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,_={};const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},w={watch:ne(),array:ne(),state:ne()},A=re(r.mode),F=re(r.reValidateMode),x=r.criteriaMode===v,D=async e=>{let t=!1;return V.isValid&&(t=r.resolver?S((await N()).errors):await M(o,!0),e||t===s.isValid||(s.isValid=t,w.state.next({isValid:t}))),t},E=(e,t,r,s)=>{const a=m(o,e);if(a){const n=m(h,e,d(r)?m(l,e):r);d(n)||s&&s.defaultChecked||t?L(h,e,t?n:he(a._f)):I(e,n),g.mount&&D()}},T=(e,t,r,a,n)=>{let i=!1;const o={name:e},u=m(s.touchedFields,e);if(V.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=U(),i=e!==o.isDirty}if(V.dirtyFields&&(!r||a)){const r=m(s.dirtyFields,e);oe(m(l,e),t)?ae(s.dirtyFields,e):L(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,i=i||r!==m(s.dirtyFields,e)}return r&&!u&&(L(s.touchedFields,e,r),o.touchedFields=s.touchedFields,i=i||V.touchedFields&&u!==r),i&&n&&w.state.next(o),i?o:{}},N=async e=>r.resolver?await r.resolver({...h},r.context,((e,t,r,s)=>{const a={};for(const r of e){const e=m(t,r);e&&L(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||b.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},M=async(e,t,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const{_f:e,...n}=i;if(e){const n=b.array.has(e.name),o=await Y(i,m(h,e.name),x,r.shouldUseNativeValidation,n);if(o[e.name]&&(a.valid=!1,t))break;!t&&(m(o,e.name)?n?R(s.errors,o,e.name):L(s.errors,e.name,o[e.name]):ae(s.errors,e.name))}n&&await M(n,t,a)}}return a.valid},U=(e,t)=>(e&&t&&L(h,e,t),!oe(Q(),l)),P=(e,t,r)=>{const s={...g.mount?h:d(t)?l:C(e)?{[e]:t}:t};return j(e,b,s,r)},I=(e,t,r={})=>{const s=m(o,e);let n=t;if(s){const r=s._f;r&&(!r.disabled&&L(h,e,ye(t,r)),n=ee&&le(r.ref)&&i(t)?"":t,ue(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>!e.disabled&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach((e=>e.checked=e.value===n)):q(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||w.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&T(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&G(e)},W=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,l=m(o,i);!b.array.has(e)&&ie(a)&&(!l||l._f)||n(a)?I(i,a,r):W(i,a,r)}},J=(e,t,r={})=>{const a=m(o,e),n=b.array.has(e),u=te(t);L(h,e,u),n?(w.array.next({name:e,values:h}),(V.isDirty||V.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=me(l,h),w.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:U(e,u)}))):!a||a._f||i(u)?I(e,u,r):W(e,u,r),H(e,b)&&w.state.next({}),w.watch.next({name:e})},Z=async a=>{const n=a.target;let i=n.name;const l=m(o,i);if(l){let f,d;const g=n.type?he(l._f):u(a),v=a.type===y||"focusout"===a.type,k=!((c=l._f).mount&&(c.required||c.min||c.max||c.maxLength||c.minLength||c.pattern||c.validate)||r.resolver||m(s.errors,i)||l._f.deps)||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(v,m(s.touchedFields,i),s.isSubmitted,F,A),C=H(i,b,v);L(h,i,g),v?(l._f.onBlur&&l._f.onBlur(a),t&&t(0)):l._f.onChange&&l._f.onChange(a);const j=T(i,g,v,!1),O=!S(j)||C;if(!v&&w.watch.next({name:i,type:a.type}),k)return O&&w.state.next({name:i,...C?{}:j});if(!v&&C&&w.state.next({}),_[i]=(_[i],1),w.state.next({isValidating:!0}),r.resolver){const{errors:e}=await N([i]),t=ve(s.errors,o,i),r=ve(e,o,t.name||i);f=r.error,i=r.name,d=S(e)}else f=(await Y(l,m(h,i),x,r.shouldUseNativeValidation))[i],d=await D(!0);l._f.deps&&G(l._f.deps),(async(r,a,n,i)=>{const o=m(s.errors,r),l=V.isValid&&s.isValid!==a;var u;if(e.delayError&&n?(u=()=>((e,t)=>{L(s.errors,e,t),w.state.next({errors:s.errors})})(r,n),t=e=>{clearTimeout(p),p=window.setTimeout(u,e)},t(e.delayError)):(clearTimeout(p),t=null,n?L(s.errors,r,n):ae(s.errors,r)),(n?!oe(o,n):o)||!S(i)||l){const e={...i,...l?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},w.state.next(e)}_[r]--,V.isValidating&&!Object.values(_).some((e=>e))&&(w.state.next({isValidating:!1}),_={})})(i,d,f,j)}var c},G=async(e,t={})=>{let a,n;const i=k(e);if(w.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await N();if(e)for(const r of e){const e=m(t,r);e?L(s.errors,r,e):ae(s.errors,r)}else s.errors=t;return t})(d(e)?e:i);a=S(t),n=e?!i.some((e=>m(t,e))):a}else e?(n=(await Promise.all(i.map((async e=>{const t=m(o,e);return await M(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||s.isValid)&&D()):n=a=await M(o);return w.state.next({...!C(e)||V.isValid&&a!==s.isValid?{}:{name:e},...r.resolver?{isValid:a}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!n&&B(o,(e=>m(s.errors,e)),e?i:b.mount),n},Q=e=>{const t={...l,...g.mount?h:{}};return d(e)?t:C(e)?m(t,e):e.map((e=>m(t,e)))},K=(e,t)=>({invalid:!!m((t||s).errors,e),isDirty:!!m((t||s).dirtyFields,e),isTouched:!!m((t||s).touchedFields,e),error:m((t||s).errors,e)}),X=(e,t={})=>{for(const a of e?k(e):b.mount)b.mount.delete(a),b.array.delete(a),m(o,a)&&(t.keepValue||(ae(o,a),ae(h,a)),!t.keepError&&ae(s.errors,a),!t.keepDirty&&ae(s.dirtyFields,a),!t.keepTouched&&ae(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&ae(l,a));w.watch.next({}),w.state.next({...s,...t.keepDirty?{isDirty:U()}:{}}),!t.keepIsValid&&D()},se=(e,t={})=>{let s=m(o,e);const n=z(t.disabled);return L(o,e,{_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),b.mount.add(e),s?n&&L(h,e,t.disabled?void 0:m(h,e,he(s._f))):E(e,!0,t.value),{...n?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:ge(t.min),max:ge(t.max),minLength:ge(t.minLength),maxLength:ge(t.maxLength),pattern:ge(t.pattern)}:{},name:e,onChange:Z,onBlur:Z,ref:n=>{if(n){se(e,t),s=m(o,e);const r=d(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,i=(e=>$(e)||a(e))(r),u=s._f.refs||[];if(i?u.find((e=>e===r)):r===s._f.ref)return;L(o,e,{_f:{...s._f,...i?{refs:[...u.filter(ce),r,...Array.isArray(m(l,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),E(e,!1,void 0,r)}else s=m(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(b.array,e)||!g.action)&&b.unMount.add(e)}}};return{control:{register:se,unregister:X,getFieldState:K,_executeSchema:N,_getWatch:P,_getDirty:U,_updateValid:D,_removeUnmounted:()=>{for(const e of b.unMount){const t=m(o,e);t&&(t._f.refs?t._f.refs.every((e=>!ce(e))):!ce(t._f.ref))&&X(e)}b.unMount=new Set},_updateFieldArray:(e,t=[],r,a,n=!0,i=!0)=>{if(a&&r){if(g.action=!0,i&&Array.isArray(m(o,e))){const t=r(m(o,e),a.argA,a.argB);n&&L(o,e,t)}if(V.errors&&i&&Array.isArray(m(s.errors,e))){const t=r(m(s.errors,e),a.argA,a.argB);n&&L(s.errors,e,t),((e,t)=>{!f(m(e,t)).length&&ae(e,t)})(s.errors,e)}if(V.touchedFields&&i&&Array.isArray(m(s.touchedFields,e))){const t=r(m(s.touchedFields,e),a.argA,a.argB);n&&L(s.touchedFields,e,t)}V.dirtyFields&&(s.dirtyFields=me(l,h)),w.state.next({isDirty:U(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else L(h,e,t)},_getFieldArray:t=>f(m(g.mount?h:l,t,e.shouldUnregister?m(l,t,[]):[])),_subjects:w,_proxyFormState:V,get _fields(){return o},get _formValues(){return h},get _stateFlags(){return g},set _stateFlags(e){g=e},get _defaultValues(){return l},get _names(){return b},set _names(e){b=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:G,register:se,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let n=!0,i=te(h);w.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await N();s.errors=e,i=t}else await M(o);S(s.errors)?(w.state.next({errors:{},isSubmitting:!0}),await e(i,a)):(t&&await t({...s.errors},a),r.shouldFocusError&&B(o,(e=>m(s.errors,e)),b.mount))}catch(e){throw n=!1,e}finally{s.isSubmitted=!0,w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:S(s.errors)&&n,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>O(e)?w.watch.subscribe({next:r=>e(P(void 0,t),r)}):P(e,t,!0),setValue:J,getValues:Q,reset:(t,r={})=>{const a=t||l,n=te(a),i=t&&!S(t)?n:l;if(r.keepDefaultValues||(l=a),!r.keepValues){if(r.keepDirtyValues)for(const e of b.mount)m(s.dirtyFields,e)?L(i,e,m(h,e)):J(e,m(i,e));else{if(ee&&d(t))for(const e of b.mount){const t=m(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{if(le(e)){e.closest("form").reset();break}}catch(e){}}}o={}}h=e.shouldUnregister?r.keepDefaultValues?te(l):{}:n,w.array.next({values:i}),w.watch.next({values:i})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!V.isValid||!!r.keepIsValid,g.watch=!!e.shouldUnregister,w.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?s.isDirty:!(!r.keepDefaultValues||oe(t,l)),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?s.dirtyFields:r.keepDefaultValues&&t?me(l,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{m(o,e)&&(d(t.defaultValue)?J(e,m(l,e)):(J(e,t.defaultValue),L(l,e,t.defaultValue)),t.keepTouched||ae(s.touchedFields,e),t.keepDirty||(ae(s.dirtyFields,e),s.isDirty=t.defaultValue?U(e,m(l,e)):U()),t.keepError||(ae(s.errors,e),V.isValid&&D()),w.state.next({...s}))},clearErrors:e=>{e?k(e).forEach((e=>ae(s.errors,e))):s.errors={},w.state.next({errors:s.errors})},unregister:X,setError:(e,t,r)=>{const a=(m(o,e,{_f:{}})._f||{}).ref;L(s.errors,e,{...t,ref:a}),w.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=m(o,e)._f,s=r.refs?r.refs[0]:r.ref;s.focus(),t.shouldSelect&&s.select()},getFieldState:K}}function _e(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current={...pe(e),formState:r};const n=t.current.control,i=s.useCallback((e=>{F(e,n._proxyFormState,!0)&&(n._formState={...n._formState,...e},a({...n._formState}))}),[n]);return D({subject:n._subjects.state,callback:i}),s.useEffect((()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),t.current.formState=A(r,n._proxyFormState),t.current}},4593:(e,t,r)=>{r.d(t,{ZP:()=>l});var s=r(1672),a=r(5591),n=r(1753),i=r(1688);const o=Promise.resolve(),l=(0,n.xD)(a.ZP,(e=>(t,r,a)=>{const l=(0,s.useRef)(!1),{cache:u,initialSize:c=1,revalidateAll:f=!1,persistSize:d=!1,revalidateFirstPage:m=!0,revalidateOnMount:y=!1,parallel:h=!1}=a;let g;try{g=(e=>(0,n.qC)(e?e(0,null):null)[0])(t),g&&(g="$inf$"+g)}catch(e){}const[v,b,p]=(0,n.JN)(u,g),_=(0,s.useCallback)((()=>(0,n.o8)(v()._l)?c:v()._l),[u,g,c]);(0,i.useSyncExternalStore)((0,s.useCallback)((e=>g?p(g,(()=>{e()})):()=>{}),[u,g]),_,_);const V=(0,s.useCallback)((()=>{const e=v()._l;return(0,n.o8)(e)?c:e}),[g,c]),w=(0,s.useRef)(V());(0,n.LI)((()=>{l.current?g&&b({_l:d?w.current:V()}):l.current=!0}),[g,u]);const A=y&&!l.current,S=e(g,(async e=>{const s=v()._i,i=[],o=V(),[l]=(0,n.JN)(u,e),c=l().data,d=[];let y=null;for(let e=0;e<o;++e){const[o,l]=(0,n.qC)(t(e,h?null:y));if(!o)break;const[g,v]=(0,n.JN)(u,o);let b=g().data;const p=f||s||(0,n.o8)(b)||m&&!e&&!(0,n.o8)(c)||A||c&&!(0,n.o8)(c[e])&&!a.compare(c[e],b);if(r&&p){const t=async()=>{b=await r(l),v({data:b,_k:l}),i[e]=b};h?d.push(t):await t()}else i[e]=b;h||(y=b)}return h&&await Promise.all(d.map((e=>e()))),b({_i:n.i_}),i}),a),F=(0,s.useCallback)((function(e,t){const r="boolean"==typeof t?{revalidate:t}:t||{},s=!1!==r.revalidate;return g?(s&&((0,n.o8)(e)?b({_i:!0}):b({_i:!1})),arguments.length?S.mutate(e,{...r,revalidate:s}):S.mutate()):o}),[g,u]),k=(0,s.useCallback)((e=>{if(!g)return o;const[,r]=(0,n.JN)(u,g);let s;if((0,n.mf)(e)?s=e(V()):"number"==typeof e&&(s=e),"number"!=typeof s)return o;r({_l:s}),w.current=s;const a=[],[i]=(0,n.JN)(u,g);let l=null;for(let e=0;e<s;++e){const[r]=(0,n.qC)(t(e,l)),[s]=(0,n.JN)(u,r),o=r?s().data:n.i_;if((0,n.o8)(o))return F(i().data);a.push(o),l=o}return F(a)}),[g,u,F,V]);return{size:V(),setSize:k,mutate:F,get data(){return S.data},get error(){return S.error},get isValidating(){return S.isValidating},get isLoading(){return S.isLoading}}}))}}]);