"use strict";(globalThis.webpackChunk_openmrs_esm_patient_list_management_app=globalThis.webpackChunk_openmrs_esm_patient_list_management_app||[]).push([[635,382],{6635:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f,infinite:()=>d,unstable_serialize:()=>o});var r=n(268),a=n(3255),i=n(3325),s=n(3100);const l="$inf$",u=Promise.resolve(),c=e=>(0,i.serialize)(e?e(0,null):null)[0],o=e=>l+c(e),d=e=>(t,n,a)=>{const o=(0,r.useRef)(!1),d=(0,r.useRef)(),{cache:f,initialSize:_=1,revalidateAll:p=!1,persistSize:m=!1,revalidateFirstPage:g=!0,revalidateOnMount:h=!1}=a;let b;try{b=c(t),b&&(b=l+b)}catch(e){}const[k,v,C]=(0,i.createCacheHelper)(f,b),U=(0,r.useCallback)((()=>(0,i.isUndefined)(k()._l)?_:k()._l),[f,b,_]);(0,s.useSyncExternalStore)((0,r.useCallback)((e=>b?C(b,(()=>{e()})):()=>{}),[f,b]),U,U);const y=(0,r.useCallback)((()=>{const e=k()._l;return(0,i.isUndefined)(e)?_:e}),[b,_]),z=(0,r.useRef)(y());(0,i.useIsomorphicLayoutEffect)((()=>{o.current?b&&v({_l:m?z.current:_}):o.current=!0}),[b,f]);const E=h&&!o.current,w=e(b,(async()=>{const[e,r]=k()._i||[],s=[],l=y();let u=null;for(let c=0;c<l;++c){const[l,o]=(0,i.serialize)(t(c,u));if(!l)break;const[_,m]=(0,i.createCacheHelper)(f,l);let h=_().data;const b=p||e||(0,i.isUndefined)(h)||g&&!c&&!(0,i.isUndefined)(d.current)||E||r&&!(0,i.isUndefined)(r[c])&&!a.compare(r[c],h);n&&b&&(h=await n(o),m({data:h,_k:o})),s.push(h),u=h}return v({_i:i.UNDEFINED}),s}),a);(0,i.useIsomorphicLayoutEffect)((()=>{d.current=w.data}),[w.data]);const S=(0,r.useCallback)((function(e,t){const n="boolean"==typeof t?{revalidate:t}:t||{},r=!1!==n.revalidate;if(!b)return u;if(r)if((0,i.isUndefined)(e))v({_i:[!0]});else{const e=d.current;v({_i:[!1,e]})}return arguments.length?w.mutate(e,{...n,revalidate:r}):w.mutate()}),[b,f]),D=(0,r.useCallback)((e=>{if(!b)return u;let n;return(0,i.isFunction)(e)?n=e(y()):"number"==typeof e&&(n=e),"number"!=typeof n?u:(v({_l:n}),z.current=n,S((e=>{const n=[];let r=null;for(let s=0;s<e;++s){var a;const[e]=(0,i.serialize)(t(s,r)),l=e?null==(a=f.get(e))?void 0:a.data:i.UNDEFINED;if((0,i.isUndefined)(l))return d.current;n.push(l),r=l}return n})(n)))}),[b,y,S,f]);return{size:y(),setSize:D,mutate:S,get data(){return w.data},get error(){return w.error},get isValidating(){return w.isValidating},get isLoading(){return w.isLoading}}};var f=(0,i.withMiddleware)(a.ZP,d)}}]);