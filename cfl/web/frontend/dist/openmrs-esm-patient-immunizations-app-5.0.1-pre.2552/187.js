"use strict";(globalThis.webpackChunk_openmrs_esm_patient_immunizations_app=globalThis.webpackChunk_openmrs_esm_patient_immunizations_app||[]).push([[187],{2563:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(272),r=t.n(i),o=t(2609),a=t.n(o)()(r());a.push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.-esm-patient-immunizations__immunizations-detailed-summary__widgetCard___jvNCG{border:1px solid #e0e0e0}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/immunizations/immunizations-detailed-summary.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CCrDF,gFACE,wBAAA",sourceRoot:""}]),a.locals={widgetCard:"-esm-patient-immunizations__immunizations-detailed-summary__widgetCard___jvNCG"};const c=a},1756:(e,n,t)=>{t.d(n,{V:()=>m,j:()=>p});var i=t(2870),r=t(5961),o=t(772),a=t(8128),c=t(4402),u=t(3012),s=t(3211),l=function(e){var n,t,r=null==e?void 0:e.resource,o=null==r?void 0:r.id,a=null==r||null===(n=r.manufacturer)||void 0===n?void 0:n.display,c=null==r?void 0:r.lotNumber,u=(null==r||null===(t=r.protocolApplied)||void 0===t?void 0:t.length)>0&&(null==r?void 0:r.protocolApplied[0]);return{immunizationObsUuid:o,manufacturer:a,lotNumber:c,sequenceLabel:null==u?void 0:u.series,sequenceNumber:null==u?void 0:u.doseNumberPositiveInt,occurrenceDateTime:(0,i.formatDate)(new Date(null==r?void 0:r.occurrenceDateTime)),expirationDate:(0,i.formatDate)(new Date(null==r?void 0:r.expirationDate))}},d=function(e){var n;return(0,r.Z)(null==e||null===(n=e.vaccineCode)||void 0===n?void 0:n.coding,(function(e){return(0,c.Z)(e.system)}))},m=function(e){var n=(0,a.Z)(e.entry,(function(e){var n;return null===(n=d(e.resource))||void 0===n?void 0:n.code}));return(0,u.Z)(n,(function(e){var n,t=(0,u.Z)(e,l),i=d(null===(n=e[0])||void 0===n?void 0:n.resource);return{vaccineName:null==i?void 0:i.display,vaccineUuid:null==i?void 0:i.code,existingDoses:(0,s.Z)(t,[function(e){return(0,o.Z)(e,"occurrenceDateTime")}],["desc"])}}))};function v(e,n){return{type:e,reference:"".concat(e,"/").concat(n)}}var p=function(e,n,t,r){return{resourceType:"Immunization",status:"completed",id:e.immunizationObsUuid,vaccineCode:{coding:[{code:e.vaccineUuid,display:e.vaccineName}]},patient:v("Patient",e.patientUuid),encounter:v("Encounter",n),occurrenceDateTime:(0,i.parseDate)(e.vaccinationDate),expirationDate:(0,i.parseDate)(e.expirationDate),location:v("Location",t),performer:[{actor:v("Practitioner",r)}],manufacturer:{display:e.manufacturer},lotNumber:e.lotNumber,protocolApplied:[{doseNumberPositiveInt:e.currentDose.sequenceNumber,series:e.currentDose.sequenceLabel}]}}},2458:(e,n,t)=>{t.d(n,{s:()=>i});var i=new(t(2444).BehaviorSubject)(null)},5187:(e,n,t)=>{t.r(n),t.d(n,{default:()=>G});var i=t(268),r=t.n(i),o=t(772);const a=function(e){return e&&e.length?e[0]:void 0};var c=t(5986),u=t(2263),s=t(4405),l=t(7885),d=t(3282),m=t(2143),v=t(5441),p=t(921),f=Object.prototype.hasOwnProperty;const g=function(e){if(null==e)return!0;if((0,d.Z)(e)&&((0,l.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,m.Z)(e)||(0,p.Z)(e)||(0,s.Z)(e)))return!e.length;var n=(0,u.Z)(e);if("[object Map]"==n||"[object Set]"==n)return!e.size;if((0,v.Z)(e))return!(0,c.Z)(e).length;for(var t in e)if(f.call(e,t))return!1;return!0};var b=t(3211),y=t(4924),D=t(4538),h=t(6759),A=t(4556),C=t(2870),w=t(8108),Z=t(3012),_=t(5961),z=function(e,n){return new Date(n.occurrenceDateTime).getTime()-new Date(e.occurrenceDateTime).getTime()},T=t(2458),x=t(1354),S=t.n(x),N=t(1583),P=t.n(N),O=t(7378),U=t.n(O),k=t(5993),q=t.n(k),j=t(4154),E=t.n(j),L=t(8141),I=t.n(L),V=t(2563),B={};B.styleTagTransform=I(),B.setAttributes=q(),B.insert=U().bind(null,"head"),B.domAPI=P(),B.insertStyleElement=E(),S()(V.Z,B);const F=V.Z&&V.Z.locals?V.Z.locals:void 0;function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const G=function(e){var n,t,c,u,s,l=e.patientUuid,d=(e.basePath,(0,y.useTranslation)()),m=d.t,v=d.i18n,p=(0,C.useConfig)().immunizationsConfig,f=null==p?void 0:p.sequenceDefinitions,x=m("immunizations","immunizations"),S=m("immunizations","Immunizations"),N=v.language.replace("_","-"),P=(window.spaBase,m("goToSummary","Go to Summary"),(0,w.iX)().data),O=(0,w.dv)(l),U=O.data,k=O.isError,q=O.isLoading,j=O.isValidating,E=(n=f,c=null==(t=P)?void 0:t.setMembers,u=(0,Z.Z)(c,(function(e){var t={vaccineName:e.display,vaccineUuid:e.uuid,existingDoses:[]},i=(0,_.Z)(n,(function(n){return n.vaccineConceptUuid===e.uuid}));return t.sequences=null==i?void 0:i.sequences,t})),s=U||[],(0,Z.Z)(u,(function(e){var n=(0,_.Z)(s,(function(n){return n.vaccineUuid===e.vaccineUuid}));return n&&(e.existingDoses=n.existingDoses),e}))),L=(0,b.Z)(E,[function(e){return(0,o.Z)(e,"existingDoses.length",0)}],["desc"]),I=r().useCallback((function(){return(0,A.launchPatientWorkspace)("immunization-form-workspace")}),[]),V=((0,i.useMemo)((function(){return[{key:"vaccine",header:m("vaccine","Vaccine")},{key:"recentVaccination",header:m("recentVaccination","Recent Vaccination")},{key:"add",header:""}]}),[m]),(0,i.useMemo)((function(){return null==L?void 0:L.map((function(e){var n,t,i,o=g(e.sequences)&&!g(e.existingDoses)?"".concat(m("singleDoseOn","Single Dose on")," ").concat(new Date(null===(n=a(e.existingDoses.sort(z)))||void 0===n?void 0:n.occurrenceDateTime).toLocaleDateString(N,{dateStyle:"medium"})):g(e.existingDoses)?"":"".concat(null===(t=a(null==e?void 0:e.sequences))||void 0===t?void 0:t.sequenceLabel," on ").concat(new Date(null===(i=a(e.existingDoses.sort(z)))||void 0===i?void 0:i.occurrenceDateTime).toLocaleDateString(N,{dateStyle:"medium"})," ");return{id:e.vaccineUuid,vaccine:e.vaccineName,recentVaccination:o,add:r().createElement(D.zxk,{kind:"ghost",renderIcon:function(e){return r().createElement(h.mm,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){M(e,n,t[n])}))}return e}({size:16},e))},iconDescription:"Add",onClick:function(){T.s.next({vaccineName:e.vaccineName,vaccineUuid:e.vaccineUuid,sequences:null==e?void 0:e.sequences,existingDoses:null==e?void 0:e.existingDoses,immunizationObsUuid:null==e?void 0:e.immunizationObsUuid,manufacturer:e.manufacturer,lotNumber:e.lotNumber,expirationDate:e.expirationDate,currentDose:{sequenceLabel:e.sequenceLabel,sequenceNumber:e.sequenceNumber},vaccinationDate:e.occurrenceDateTime,formChanged:e.formChanged}),I()}})}}))}),[L,m,N,I])),B=(0,C.usePagination)(V,10),G=B.results;return B.currentPage,B.goTo,q||!L?r().createElement(D.gqd,{role:"progressbar"}):k?r().createElement(A.ErrorState,{error:k,headerTitle:S}):((null==L?void 0:L.length)&&(F.widgetCard,A.CardHeader,j&&D.lSo,D.zxk,m("add","Add"),D.wQF,A.PatientChartPagination,null==V||V.length,null==G||G.length),r().createElement(A.EmptyState,{displayText:x,headerTitle:S,launchForm:I}))}},8108:(e,n,t)=>{t.d(n,{dv:()=>s,eu:()=>l,iX:()=>u});var i=t(3255),r=t(2870),o=t(4185),a=t(1756);function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function u(){var e,n,t,a=(0,r.useConfig)().immunizationsConfig,u=null==a?void 0:a.vaccinesConceptSet,s=(n=u.split(":"),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,r,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(o.push(i.value),!n||o.length!==n);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw r}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=s[0],d=s[1],m="/ws/rest/v1/concept?source=".concat(l,"&code=").concat(d,"&v=full"),v="/ws/rest/v1/concept/".concat(u,"?v=full"),p=(0,i.ZP)((e=u,(0,o.Z)(e,":")?m:v),r.openmrsFetch),f=p.data,g=p.error,b=p.isLoading;return{data:f?f.data.results[0]:null,isError:g,isLoading:b}}function s(e){var n="".concat(r.fhirBaseUrl,"/Immunization?patient=").concat(e),t=(0,i.ZP)(n,r.openmrsFetch),o=t.data,c=t.error,u=t.isLoading,s=t.isValidating,l=o?(0,a.V)(o.data):null;return{data:o?l:null,isError:c,isLoading:u,isValidating:s}}function l(e,n,t,i){var o="".concat(r.fhirBaseUrl,"/Immunization");return t&&(o="".concat(o,"/").concat(t)),(0,r.openmrsFetch)(o,{headers:{"Content-Type":"application/json"},method:"POST",body:e,signal:i.signal})}}}]);