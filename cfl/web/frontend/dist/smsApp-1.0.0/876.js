/*! For license information please see 876.js.LICENSE.txt */
"use strict";(globalThis.webpackChunksmsApp=globalThis.webpackChunksmsApp||[]).push([[876,495],{4026:(e,t,n)=>{var r=n(380),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,a=r.useEffect,u=r.useLayoutEffect,d=r.useDebugValue;function o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return u((function(){i.value=n,i.getSnapshot=t,o(i)&&c({inst:i})}),[e,n,t]),a((function(){return o(i)&&c({inst:i}),e((function(){o(i)&&c({inst:i})}))}),[e]),d(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},8139:(e,t,n)=>{e.exports=n(4026)},9876:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c,immutable:()=>o});var r=n(380),i=n(8139),s=n(5434);const a=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),u={dedupe:!0};s.OBJECT.defineProperty(s.SWRConfig,"defaultValue",{value:s.defaultConfig});const d=(0,s.withArgs)(((e,t,n)=>{const{cache:d,compare:o,suspense:c,fallbackData:l,revalidateOnMount:f,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:v,refreshWhenOffline:h,keepPreviousData:R}=n,[p,S,U,b]=s.SWRGlobalState.get(d),[T,V]=(0,s.serialize)(e),m=(0,r.useRef)(!1),w=(0,r.useRef)(!1),C=(0,r.useRef)(T),O=(0,r.useRef)(t),y=(0,r.useRef)(n),L=()=>y.current,I=()=>L().isVisible()&&L().isOnline(),[_,k,A,D]=(0,s.createCacheHelper)(d,T),N=(0,r.useRef)({}).current,F=(0,s.isUndefined)(l)?n.fallback[T]:l,P=(e,t)=>{for(const n in N){const r=n;if("data"===r){if(!o(e[r],t[r])){if(!(0,s.isUndefined)(e[r]))return!1;if(!o(z,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},j=(0,r.useMemo)((()=>{const e=!!T&&!!t&&((0,s.isUndefined)(f)?!L().isPaused()&&!c&&(!!(0,s.isUndefined)(E)||E):f),n=t=>{const n=(0,s.mergeObjects)(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=_(),i=D(),a=n(r),u=r===i?a:n(i);let d=a;return[()=>{const e=n(_());return P(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>u]}),[d,T]),x=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>A(T,((t,n)=>{P(n,t)||e()}))),[d,T]),j[0],j[1]),M=!m.current,W=p[T]&&p[T].length>0,G=x.data,H=(0,s.isUndefined)(G)?F:G,Y=x.error,q=(0,r.useRef)(H),z=R?(0,s.isUndefined)(G)?q.current:G:H,B=!(W&&!(0,s.isUndefined)(Y))&&(M&&!(0,s.isUndefined)(f)?f:!L().isPaused()&&(c?!(0,s.isUndefined)(H)&&E:(0,s.isUndefined)(H)||E)),J=!!(T&&t&&M&&B),K=(0,s.isUndefined)(x.isValidating)?J:x.isValidating,Q=(0,s.isUndefined)(x.isLoading)?J:x.isLoading,X=(0,r.useCallback)((async e=>{const t=O.current;if(!T||!t||w.current||L().isPaused())return!1;let r,i,a=!0;const u=e||{},d=!U[T]||!u.dedupe,c=()=>s.IS_REACT_LEGACY?!w.current&&T===C.current&&m.current:T===C.current,l={isValidating:!1,isLoading:!1},f=()=>{k(l)},E=()=>{const e=U[T];e&&e[1]===i&&delete U[T]},g={isValidating:!0};(0,s.isUndefined)(_().data)&&(g.isLoading=!0);try{if(d&&(k(g),n.loadingTimeout&&(0,s.isUndefined)(_().data)&&setTimeout((()=>{a&&c()&&L().onLoadingSlow(T,n)}),n.loadingTimeout),U[T]=[t(V),(0,s.getTimestamp)()]),[r,i]=U[T],r=await r,d&&setTimeout(E,n.dedupingInterval),!U[T]||U[T][1]!==i)return d&&c()&&L().onDiscarded(T),!1;l.error=s.UNDEFINED;const e=S[T];if(!(0,s.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),d&&c()&&L().onDiscarded(T),!1;const u=_().data;l.data=o(u,r)?u:r,d&&c()&&L().onSuccess(r,T,n)}catch(e){E();const t=L(),{shouldRetryOnError:n}=t;t.isPaused()||(l.error=e,d&&c()&&(t.onError(e,T,t),(!0===n||(0,s.isFunction)(n)&&n(e))&&(L().revalidateOnFocus&&L().revalidateOnReconnect&&!I()||t.onErrorRetry(e,T,t,(e=>{const t=p[T];t&&t[0]&&t[0](s.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0}))))}return a=!1,f(),!0}),[T,d]),Z=(0,r.useCallback)(((...e)=>(0,s.internalMutate)(d,C.current,...e)),[]);if((0,s.useIsomorphicLayoutEffect)((()=>{O.current=t,y.current=n,(0,s.isUndefined)(G)||(q.current=G)})),(0,s.useIsomorphicLayoutEffect)((()=>{if(!T)return;const e=X.bind(s.UNDEFINED,u);let t=0;const n=(0,s.subscribeCallback)(T,p,((n,r={})=>{if(n==s.revalidateEvents.FOCUS_EVENT){const n=Date.now();L().revalidateOnFocus&&n>t&&I()&&(t=n+L().focusThrottleInterval,e())}else if(n==s.revalidateEvents.RECONNECT_EVENT)L().revalidateOnReconnect&&I()&&e();else{if(n==s.revalidateEvents.MUTATE_EVENT)return X();if(n==s.revalidateEvents.ERROR_REVALIDATE_EVENT)return X(r)}}));return w.current=!1,C.current=T,m.current=!0,k({_k:V}),B&&((0,s.isUndefined)(H)||s.IS_SERVER?e():(0,s.rAF)(e)),()=>{w.current=!0,n()}}),[T]),(0,s.useIsomorphicLayoutEffect)((()=>{let e;function t(){const t=(0,s.isFunction)(g)?g(_().data):g;t&&-1!==e&&(e=setTimeout(n,t))}function n(){_().error||!v&&!L().isVisible()||!h&&!L().isOnline()?t():X(u).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[g,v,h,T]),(0,r.useDebugValue)(z),c&&(0,s.isUndefined)(H)&&T){if(!s.IS_REACT_LEGACY&&s.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");O.current=t,y.current=n,w.current=!1;const e=b[T];if(!(0,s.isUndefined)(e)){const t=Z(e);a(t)}if(!(0,s.isUndefined)(Y))throw Y;{const e=X(u);(0,s.isUndefined)(z)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:Z,get data(){return N.data=!0,z},get error(){return N.error=!0,Y},get isValidating(){return N.isValidating=!0,K},get isLoading(){return N.isLoading=!0,Q}}})),o=e=>(t,n,r)=>(r.revalidateOnFocus=!1,r.revalidateIfStale=!1,r.revalidateOnReconnect=!1,e(t,n,r)),c=(0,s.withMiddleware)(d,o)}}]);