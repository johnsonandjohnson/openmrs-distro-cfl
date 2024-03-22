"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[5169],{5169:(e,n,a)=>{a.r(n),a.d(n,{default:()=>u});var t=a(268),s=a.n(t),i=a(4350),o=a(4924),r=a(414),d=a(7089);const u=function(e){var n=e.patientUuid,a=(0,o.useTranslation)().t,u=(0,t.useCallback)((function(){return(0,r.launchPatientWorkspace)("mark-patient-deceased-workspace-form")}),[]),c=(0,d.mk)(n),l=c.isDead;return!c.isLoading&&!l&&s().createElement(i.OverflowMenuItem,{itemText:a("markDeceased","Mark deceased"),onClick:u,style:{maxWidth:"100vw"}})}},7089:(e,n,a)=>{a.d(n,{FA:()=>r,ZY:()=>c,mk:()=>d,sy:()=>l});var t=a(268),s=a(3255),i=a(2870);function o(e,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n}function r(){var e,n,a,r,d=(e=(0,s.ZP)("/ws/rest/v1/systemsetting/concept.causeOfDeath",i.openmrsFetch,{shouldRetryOnError:function(e){return o(e,Response)&&404!==e.status}}),n=e.data,e.error,a=e.isLoading,r=e.isValidating,(0,t.useMemo)((function(){var e,t;return{value:null!==(t=null==n||null===(e=n.data)||void 0===e?void 0:e.value)&&void 0!==t?t:void 0,isCauseOfDeathLoading:a,isCauseOfDeathValidating:r}}),[n,a,r])),u=d.isCauseOfDeathLoading,c=d.isCauseOfDeathValidating,l=function(e){var n,a,t=(0,s.ZP)("/ws/rest/v1/concept/".concat(e),(function(n){return e?(0,i.openmrsFetch)(n):void 0}),{shouldRetryOnError:function(e){return o(e,Response)&&404!==e.status}}),r=t.data,d=t.error,u=t.isLoading,c=t.isValidating;return{conceptAnswers:null!==(a=null==r||null===(n=r.data)||void 0===n?void 0:n.answers)&&void 0!==a?a:[],isConceptLoading:u,conceptError:d,isConceptAnswerValidating:c}}(d.value),p=l.isConceptLoading,h=l.isConceptAnswerValidating;return{conceptAnswers:l.conceptAnswers,isLoading:u||p,isValidating:h||c}}function d(e){var n,a=(0,i.usePatient)(e),t=a.isLoading,s=a.patient;return t?{deathDate:void 0,isDead:void 0,isLoading:t}:{deathDate:s.deceasedDateTime,isDead:null!==(n=s.deceasedBoolean)&&void 0!==n?n:Boolean(s.deceasedDateTime),isLoading:t}}var u=function(e,n,a){return(0,i.openmrsFetch)("/ws/rest/v1/person/".concat(e),{headers:{"Content-type":"application/json"},method:"POST",body:n,signal:a.signal})};function c(e,n,a,t){var s={causeOfDeath:a,dead:!0};return s.deathDate=e?new Date(e.getFullYear(),e.getMonth(),e.getDay()):null,u(n,s,t)}function l(e,n){return u(e,{deathDate:null,causeOfDeath:null,dead:!1},n)}}}]);