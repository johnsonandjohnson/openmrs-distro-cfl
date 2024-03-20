"use strict";(globalThis.webpackChunk_openmrs_esm_patient_programs_app=globalThis.webpackChunk_openmrs_esm_patient_programs_app||[]).push([[411],{6760:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(272),o=t.n(n),a=t(2609),l=t.n(a)()(o());l.push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.-esm-patient-programs__programs-form__loading___pVOFs{margin-left:1rem;width:2rem;min-height:2.5rem}.-esm-patient-programs__programs-form__button___eRXFg{height:4rem;display:flex;align-content:flex-start;align-items:baseline;min-width:50%}.-esm-patient-programs__programs-form__tablet___d5Lkl{padding:1.5rem 1rem;background-color:#fff}.-esm-patient-programs__programs-form__desktop___SSrz2{padding:0rem}.-esm-patient-programs__programs-form__formContainer___D93YE{margin:1rem}.-esm-patient-programs__programs-form__form___aSYHz{display:flex;flex-direction:column;justify-content:space-between;height:calc(100vh - 6rem)}.-esm-patient-programs__programs-form__errorMessage___R_11w{font-size:var(--cds-label-02-font-size, 0.875rem);font-weight:var(--cds-label-02-font-weight, 400);line-height:var(--cds-label-02-line-height, 1.28572);letter-spacing:var(--cds-label-02-letter-spacing, 0.16px);margin-top:.5rem;color:#da1e28}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/programs/programs-form.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss","webpack://./../../node_modules/@carbon/layout/scss/generated/_spacing.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CCnDF,uDACE,gBAAA,CACA,UAAA,CACA,iBAAA,CAGF,sDACE,WAAA,CACA,YAAA,CACA,wBAAA,CACA,oBAAA,CACA,aAAA,CAGF,sDACE,mBAAA,CACA,qBDnBM,CCsBR,uDACE,YAAA,CAGF,6DACE,WAAA,CAGF,oDACE,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,yBAAA,CAGF,4DCoyBI,iDAAA,CAAA,gDAAA,CAAA,oDAAA,CAAA,yDAAA,CDlyBF,gBEnBW,CFoBX,aDrBO",sourceRoot:""}]),l.locals={loading:"-esm-patient-programs__programs-form__loading___pVOFs",button:"-esm-patient-programs__programs-form__button___eRXFg",tablet:"-esm-patient-programs__programs-form__tablet___d5Lkl",desktop:"-esm-patient-programs__programs-form__desktop___SSrz2",formContainer:"-esm-patient-programs__programs-form__formContainer___D93YE",form:"-esm-patient-programs__programs-form__form___aSYHz",errorMessage:"-esm-patient-programs__programs-form__errorMessage___R_11w"};const i=l},3411:(e,r,t)=>{t.r(r),t.d(r,{default:()=>I});var n=t(268),o=t.n(n),a=t(4924),l=t(3565),i=t.n(l),s=t(9626),m=t(3139),u=t(6772),c=t(1279),d=t(2870),p=t(4076),g=t(1354),f=t.n(g),A=t(1583),v=t.n(A),_=t(7378),b=t.n(_),y=t(5993),C=t.n(y),h=t(4154),E=t.n(h),w=t(8141),D=t.n(w),P=t(6760),O={};O.styleTagTransform=D(),O.setAttributes=C(),O.insert=b().bind(null,"head"),O.domAPI=v(),O.insertStyleElement=E(),f()(P.Z,O);const k=P.Z&&P.Z.locals?P.Z.locals:void 0;var S=t(195),j=t(3955),x=t(8883);function T(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function F(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function B(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(e){if("string"==typeof e)return T(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=S.z.object({selectedProgram:S.z.string().refine((function(e){return""!=e}),"Please select a valid program"),enrollmentDate:S.z.date(),completionDate:S.z.date().nullable(),enrollmentLocation:S.z.string()});const I=function(e){var r,t,n,l,g,f=e.closeWorkspace,A=e.patientUuid,v=e.programEnrollmentId,_=(0,a.useTranslation)().t,b="tablet"===(0,d.useLayoutType)(),y=(0,d.useSession)(),C=(0,d.useLocations)(),h=(0,p.oI)().data,E=(0,p.Bw)(A),w=E.data,D=E.mutateEnrollments,P=v&&w.filter((function(e){return e.uuid==v}))[0],O=P?function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){F(e,r,t[r])}))}return e}({display:P.program.name},P.program):null,S=O?[O]:(0,s.Z)(h,(function(e){return!(0,m.Z)((0,u.Z)(w,"program.uuid"),e.uuid)})),T=(0,j.cI)({mode:"all",resolver:(0,x.F)(L),defaultValues:{selectedProgram:null!==(r=null==P?void 0:P.program.uuid)&&void 0!==r?r:"",enrollmentDate:(null==P?void 0:P.dateEnrolled)?(0,d.parseDate)(P.dateEnrolled):new Date,completionDate:(null==P?void 0:P.dateCompleted)?(0,d.parseDate)(P.dateCompleted):null,enrollmentLocation:null!==(t=!(null==P?void 0:P.location.uuid)&&(null==y||null===(n=y.sessionLocation)||void 0===n?void 0:n.uuid)?null==y||null===(l=y.sessionLocation)||void 0===l?void 0:l.uuid:null!==(g=null==P?void 0:P.location.uuid)&&void 0!==g?g:null)&&void 0!==t?t:""}}),I=T.control,Z=T.handleSubmit,z=T.watch,N=o().useCallback((function(e){var r=e.selectedProgram,t=e.enrollmentDate,n=e.completionDate,o=e.enrollmentLocation,a={patient:A,program:r,dateEnrolled:t?i()(t).format():null,dateCompleted:n?i()(n).format():null,location:o},l=new AbortController,s=P?(0,p.YX)(P.uuid,a,l).subscribe((function(e){200===e.status&&(D(),f(),(0,d.showToast)({critical:!0,kind:"success",description:_("enrollmentUpdatesNowVisible","Changes to the program are now visible in the Programs table"),title:_("enrollmentUpdated","Program enrollment updated")}))}),(function(e){(0,d.createErrorHandler)(),(0,d.showNotification)({title:_("programEnrollmentSaveError","Error saving program enrollment"),kind:"error",critical:!0,description:null==e?void 0:e.message})})):(0,p.df)(a,l).subscribe((function(e){201===e.status&&(D(),f(),(0,d.showToast)({critical:!0,kind:"success",description:_("enrollmentNowVisible","It is now visible in the Programs table"),title:_("enrollmentSaved","Program enrollment saved")}))}),(function(e){(0,d.createErrorHandler)(),(0,d.showNotification)({title:_("programEnrollmentSaveError","Error saving program enrollment"),kind:"error",critical:!0,description:null==e?void 0:e.message})}));return function(){s.unsubscribe()}}),[A,P,D,f,_]),Y=o().createElement(j.Qr,{name:"selectedProgram",control:I,render:function(e){var r,t=e.fieldState,n=e.field,a=n.onChange,l=n.value;return o().createElement(o().Fragment,null,o().createElement(c.PhF,{id:"program",invalidText:_("required","Required"),labelText:"",onChange:function(e){return a(e.target.value)},value:l},o().createElement(c.QlF,{text:_("chooseProgram","Choose a program"),value:""}),(null==S?void 0:S.length)>0&&S.map((function(e){return o().createElement(c.QlF,{key:e.uuid,text:e.display,value:e.uuid},e.display)}))),o().createElement("p",{className:k.errorMessage},null==t||null===(r=t.error)||void 0===r?void 0:r.message))}}),V=o().createElement(j.Qr,{name:"enrollmentDate",control:I,render:function(e){var r=e.field,t=r.onChange,n=r.value;return o().createElement(c.Mtg,{id:"enrollmentDate",datePickerType:"single",dateFormat:"d/m/Y",maxDate:(new Date).toISOString(),placeholder:"dd/mm/yyyy",onChange:function(e){var r=B(e,1)[0];return t(r)},value:n},o().createElement(c.aj6,{id:"enrollmentDateInput",labelText:""}))}}),M=o().createElement(j.Qr,{name:"completionDate",control:I,render:function(e){var r=e.field,t=r.onChange,n=r.value;return o().createElement(c.Mtg,{id:"completionDate",datePickerType:"single",dateFormat:"d/m/Y",minDate:new Date(z("enrollmentDate")).toISOString(),maxDate:(new Date).toISOString(),placeholder:"dd/mm/yyyy",onChange:function(e){var r=B(e,1)[0];return t(r)},value:n},o().createElement(c.aj6,{id:"completionDateInput",labelText:""}))}}),R=o().createElement(j.Qr,{name:"enrollmentLocation",control:I,render:function(e){var r=e.field,t=r.onChange,n=r.value;return o().createElement(c.PhF,{id:"location",invalidText:"Required",labelText:"",onChange:function(e){return t(e.target.value)},value:n},(null==C?void 0:C.length)>0&&C.map((function(e){return o().createElement(c.QlF,{key:e.uuid,text:e.display,value:e.uuid},e.display)})))}}),W=[{style:{maxWidth:"50%"},legendText:_("programName","Program name"),value:Y},{style:{maxWidth:"50%"},legendText:_("dateEnrolled","Date enrolled"),value:V},{style:{width:"50%"},legendText:_("dateCompleted","Date completed"),value:M},{style:{width:"50%"},legendText:_("enrollmentLocation","Enrollment location"),value:R}];return o().createElement(c.l09,{className:k.form,onSubmit:Z(N)},o().createElement(c.Kqy,{className:k.formContainer,gap:7},!S.length&&o().createElement(c.K0D,{style:{minWidth:"100%",margin:"0rem",padding:"0rem"},kind:"error",lowContrast:!0,subtitle:_("configurePrograms","Please configure programs to continue."),title:_("noProgramsConfigured","No programs configured")}),W.map((function(e,r){return o().createElement(c.cwH,{style:e.style,legendText:e.legendText,key:r},o().createElement("div",{className:k.selectContainer},b?o().createElement(c.mh4,null,e.value):e.value))}))),o().createElement(c.uVA,{className:b?k.tablet:k.desktop},o().createElement(c.zxk,{className:k.button,kind:"secondary",onClick:function(){return f()}},_("cancel","Cancel")),o().createElement(c.zxk,{className:k.button,kind:"primary",type:"submit"},_("saveAndClose","Save and close"))))}},4076:(e,r,t)=>{t.d(r,{Bw:()=>u,YX:()=>p,b$:()=>g,df:()=>d,oI:()=>c});var n=t(3255),o=t(2870),a=t(4221),l=t(9626),i=t(3139),s=t(6772);function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){var r,t="/ws/rest/v1/programenrollment?patient=".concat(e,"&v=").concat("custom:(uuid,display,program,dateEnrolled,dateCompleted,location:(uuid,display))"),l=(0,n.ZP)(e?t:null,o.openmrsFetch),i=l.data,s=l.error,m=l.isLoading,u=l.isValidating,c=l.mutate,d=(null==i||null===(r=i.data)||void 0===r?void 0:r.results.length)>0?null==i?void 0:i.data.results.sort((function(e,r){return r.dateEnrolled>e.dateEnrolled?1:-1})):null,p=null==d?void 0:d.filter((function(e){return!e.dateCompleted}));return{data:i?(0,a.Z)(d,(function(e){var r;return null==e||null===(r=e.program)||void 0===r?void 0:r.uuid})):null,isError:s,isLoading:m,isValidating:u,activeEnrollments:p,mutateEnrollments:c}}function c(e){var r,t,a=(0,n.ZP)("/ws/rest/v1/program?v=custom:(uuid,display,allWorkflows,concept:(uuid,display))",o.openmrsFetch),m=a.data,u=a.error,c=a.isLoading,d=null!==(t=null==m||null===(r=m.data)||void 0===r?void 0:r.results)&&void 0!==t?t:null;return{data:d,isError:u,isLoading:c,eligiblePrograms:(0,l.Z)(d,(function(r){return!(0,i.Z)((0,s.Z)(e,"program.uuid"),r.uuid)}))}}function d(e,r){if(!e)return null;var t=e.program,n=e.patient,a=e.dateEnrolled,l=e.dateCompleted,i=e.location;return(0,o.openmrsObservableFetch)("/ws/rest/v1/programenrollment",{method:"POST",headers:{"Content-Type":"application/json"},body:{program:t,patient:n,dateEnrolled:a,dateCompleted:l,location:i},signal:r.signal})}function p(e,r,t){if(!r&&!r.program)return null;r.program;var n=r.dateEnrolled,a=r.dateCompleted,l=r.location;return(0,o.openmrsObservableFetch)("/ws/rest/v1/programenrollment/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:{dateEnrolled:n,dateCompleted:a,location:l},signal:t.signal})}var g=function(e){var r,t,a=(0,o.useConfig)().customUrl,l=u(e),i=l.data,s=l.isError,d=l.isLoading,p=l.isValidating,g=l.activeEnrollments,f=c(i),A=f.data,v=f.eligiblePrograms,_=function(e){var r,t=(0,o.useConfig)().customUrl,a=(0,n.ZP)(t?"".concat(t).concat(e):null,o.openmrsFetch),l=a.data,i=a.error,s=a.isLoading;return{configurablePrograms:null!==(r=null==l?void 0:l.data)&&void 0!==r?r:[],isLoading:s,error:i}}(e),b=_.configurablePrograms,y=_.isLoading,C=_.error;return r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){m(e,r,t[r])}))}return e}({enrollments:i},a?{isLoading:y,isError:C}:{isLoading:d,isError:s}),t=null!=(t={isValidating:p,activeEnrollments:g,availablePrograms:A,eligiblePrograms:v,configurablePrograms:b})?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t}(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})),r}}}]);