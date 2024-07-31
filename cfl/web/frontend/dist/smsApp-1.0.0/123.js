/*! For license information please see 123.js.LICENSE.txt */
"use strict";(globalThis.webpackChunksmsApp=globalThis.webpackChunksmsApp||[]).push([[123],{4026:(e,n,t)=>{var r=t(380),i="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},s=r.useState,a=r.useEffect,u=r.useLayoutEffect,d=r.useDebugValue;function o(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=s({inst:{value:t,getSnapshot:n}}),i=r[0].inst,c=r[1];return u((function(){i.value=t,i.getSnapshot=n,o(i)&&c({inst:i})}),[e,t,n]),a((function(){return o(i)&&c({inst:i}),e((function(){o(i)&&c({inst:i})}))}),[e]),d(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},8139:(e,n,t)=>{e.exports=t(4026)},1123:(e,n,t)=>{t.d(n,{Ay:()=>d});var r=t(380),i=t(8139),s=t(5434);const a=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((n=>{e.status="fulfilled",e.value=n}),(n=>{e.status="rejected",e.reason=n})),e)}),u={dedupe:!0},d=(s.OBJECT.defineProperty(s.SWRConfig,"defaultValue",{value:s.defaultConfig}),(0,s.withArgs)(((e,n,t)=>{const{cache:d,compare:o,suspense:c,fallbackData:l,revalidateOnMount:f,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:v,refreshWhenOffline:h,keepPreviousData:p}=t,[R,S,U,T]=s.SWRGlobalState.get(d),[V,b]=(0,s.serialize)(e),m=(0,r.useRef)(!1),y=(0,r.useRef)(!1),C=(0,r.useRef)(V),w=(0,r.useRef)(n),L=(0,r.useRef)(t),O=()=>L.current,I=()=>O().isVisible()&&O().isOnline(),[_,k,A,D]=(0,s.createCacheHelper)(d,V),N=(0,r.useRef)({}).current,F=(0,s.isUndefined)(l)?t.fallback[V]:l,P=(e,n)=>{for(const t in N){const r=t;if("data"===r){if(!o(e[r],n[r])){if(!(0,s.isUndefined)(e[r]))return!1;if(!o(z,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},j=(0,r.useMemo)((()=>{const e=!!V&&!!n&&((0,s.isUndefined)(f)?!O().isPaused()&&!c&&(!!(0,s.isUndefined)(E)||E):f),t=n=>{const t=(0,s.mergeObjects)(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t},r=_(),i=D(),a=t(r),u=r===i?a:t(i);let d=a;return[()=>{const e=t(_());return P(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>u]}),[d,V]),x=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>A(V,((n,t)=>{P(t,n)||e()}))),[d,V]),j[0],j[1]),M=!m.current,W=R[V]&&R[V].length>0,G=x.data,H=(0,s.isUndefined)(G)?F:G,Y=x.error,q=(0,r.useRef)(H),z=p?(0,s.isUndefined)(G)?q.current:G:H,B=!(W&&!(0,s.isUndefined)(Y))&&(M&&!(0,s.isUndefined)(f)?f:!O().isPaused()&&(c?!(0,s.isUndefined)(H)&&E:(0,s.isUndefined)(H)||E)),J=!!(V&&n&&M&&B),K=(0,s.isUndefined)(x.isValidating)?J:x.isValidating,Q=(0,s.isUndefined)(x.isLoading)?J:x.isLoading,X=(0,r.useCallback)((async e=>{const n=w.current;if(!V||!n||y.current||O().isPaused())return!1;let r,i,a=!0;const u=e||{},d=!U[V]||!u.dedupe,c=()=>s.IS_REACT_LEGACY?!y.current&&V===C.current&&m.current:V===C.current,l={isValidating:!1,isLoading:!1},f=()=>{k(l)},E=()=>{const e=U[V];e&&e[1]===i&&delete U[V]},g={isValidating:!0};(0,s.isUndefined)(_().data)&&(g.isLoading=!0);try{if(d&&(k(g),t.loadingTimeout&&(0,s.isUndefined)(_().data)&&setTimeout((()=>{a&&c()&&O().onLoadingSlow(V,t)}),t.loadingTimeout),U[V]=[n(b),(0,s.getTimestamp)()]),[r,i]=U[V],r=await r,d&&setTimeout(E,t.dedupingInterval),!U[V]||U[V][1]!==i)return d&&c()&&O().onDiscarded(V),!1;l.error=s.UNDEFINED;const e=S[V];if(!(0,s.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),d&&c()&&O().onDiscarded(V),!1;const u=_().data;l.data=o(u,r)?u:r,d&&c()&&O().onSuccess(r,V,t)}catch(e){E();const n=O(),{shouldRetryOnError:t}=n;n.isPaused()||(l.error=e,d&&c()&&(n.onError(e,V,n),(!0===t||(0,s.isFunction)(t)&&t(e))&&(O().revalidateOnFocus&&O().revalidateOnReconnect&&!I()||n.onErrorRetry(e,V,n,(e=>{const n=R[V];n&&n[0]&&n[0](s.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0}))))}return a=!1,f(),!0}),[V,d]),Z=(0,r.useCallback)(((...e)=>(0,s.internalMutate)(d,C.current,...e)),[]);if((0,s.useIsomorphicLayoutEffect)((()=>{w.current=n,L.current=t,(0,s.isUndefined)(G)||(q.current=G)})),(0,s.useIsomorphicLayoutEffect)((()=>{if(!V)return;const e=X.bind(s.UNDEFINED,u);let n=0;const t=(0,s.subscribeCallback)(V,R,((t,r={})=>{if(t==s.revalidateEvents.FOCUS_EVENT){const t=Date.now();O().revalidateOnFocus&&t>n&&I()&&(n=t+O().focusThrottleInterval,e())}else if(t==s.revalidateEvents.RECONNECT_EVENT)O().revalidateOnReconnect&&I()&&e();else{if(t==s.revalidateEvents.MUTATE_EVENT)return X();if(t==s.revalidateEvents.ERROR_REVALIDATE_EVENT)return X(r)}}));return y.current=!1,C.current=V,m.current=!0,k({_k:b}),B&&((0,s.isUndefined)(H)||s.IS_SERVER?e():(0,s.rAF)(e)),()=>{y.current=!0,t()}}),[V]),(0,s.useIsomorphicLayoutEffect)((()=>{let e;function n(){const n=(0,s.isFunction)(g)?g(_().data):g;n&&-1!==e&&(e=setTimeout(t,n))}function t(){_().error||!v&&!O().isVisible()||!h&&!O().isOnline()?n():X(u).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[g,v,h,V]),(0,r.useDebugValue)(z),c&&(0,s.isUndefined)(H)&&V){if(!s.IS_REACT_LEGACY&&s.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");w.current=n,L.current=t,y.current=!1;const e=T[V];if(!(0,s.isUndefined)(e)){const n=Z(e);a(n)}if(!(0,s.isUndefined)(Y))throw Y;{const e=X(u);(0,s.isUndefined)(z)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:Z,get data(){return N.data=!0,z},get error(){return N.error=!0,Y},get isValidating(){return N.isValidating=!0,K},get isLoading(){return N.isLoading=!0,Q}}})))}}]);