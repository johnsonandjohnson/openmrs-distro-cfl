"use strict";(globalThis.webpackChunk_openmrs_esm_patient_conditions_app=globalThis.webpackChunk_openmrs_esm_patient_conditions_app||[]).push([[526],{4548:(e,t,n)=>{n.d(t,{B6:()=>y,CL:()=>d,l4:()=>c,r4:()=>f,sA:()=>u});var r=n(3255),o=n(2870);function i(e,t,n,r,o,i,l){try{var a=e[i](l),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var l=e.apply(t,n);function a(e){i(l,r,o,a,c,"next",e)}function c(e){i(l,r,o,a,c,"throw",e)}a(void 0)}))}}function a(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function c(e){var t,n,i="".concat(o.fhirBaseUrl,"/Condition?patient=").concat(e,"&_count=100"),l=(0,r.ZP)(e?i:null,o.openmrsFetch),a=l.data,c=l.error,u=l.isLoading,d=l.isValidating,p=l.mutate,f=(null==a||null===(t=a.data)||void 0===t?void 0:t.total)>0?null==a||null===(n=a.data)||void 0===n?void 0:n.entry.map((function(e){var t;return null!==(t=e.resource)&&void 0!==t?t:[]})).map(s).sort((function(e,t){return t.onsetDateTime>e.onsetDateTime?1:-1})):null;return{conditions:a?f:null,isError:c,isLoading:u,isValidating:d,mutate:p}}function u(e){var t,n,i=(0,o.useConfig)(),l=null==i?void 0:i.conditionConceptClassUuid,a="/ws/rest/v1/conceptsearch?conceptClasses=".concat(l,"&q=").concat(e),c=(0,r.ZP)(e?a:null,o.openmrsFetch),u=c.data,s=c.error,d=c.isLoading;return{searchResults:null!==(n=null==u||null===(t=u.data)||void 0===t?void 0:t.results)&&void 0!==n?n:[],error:s,isSearching:d}}function s(e){var t,n,r,o,i,l,a=null==e||null===(n=e.clinicalStatus)||void 0===n||null===(t=n.coding[0])||void 0===t?void 0:t.code;return{clinicalStatus:a?a.charAt(0).toUpperCase()+a.slice(1).toLowerCase():"",conceptId:null==e||null===(o=e.code)||void 0===o||null===(r=o.coding[0])||void 0===r?void 0:r.code,display:null==e||null===(l=e.code)||void 0===l||null===(i=l.coding[0])||void 0===i?void 0:i.display,onsetDateTime:null==e?void 0:e.onsetDateTime,recordedDate:null==e?void 0:e.recordedDate,id:null==e?void 0:e.id}}function d(e){return p.apply(this,arguments)}function p(){return(p=l((function(e){var t,n,r;return a(this,(function(i){switch(i.label){case 0:return t=new AbortController,n="".concat(o.fhirBaseUrl,"/Condition"),r={clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-clinical",code:e.clinicalStatus}]},code:{coding:[{code:e.conceptId,display:e.display}]},endDate:e.endDate,onsetDateTime:e.onsetDateTime,recorder:{reference:"Practitioner/".concat(e.userId)},recordedDate:(new Date).toISOString(),resourceType:"Condition",subject:{reference:"Patient/".concat(e.patientId)}},[4,(0,o.openmrsFetch)(n,{headers:{"Content-Type":"application/json"},method:"POST",body:r,signal:t.signal})];case 1:return[2,i.sent()]}}))}))).apply(this,arguments)}function f(e,t){return h.apply(this,arguments)}function h(){return(h=l((function(e,t){var n,r,i;return a(this,(function(l){switch(l.label){case 0:return n=new AbortController,r="".concat(o.fhirBaseUrl,"/Condition/").concat(e),i={clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-clinical",code:t.clinicalStatus}]},code:{coding:[{code:t.conceptId,display:t.display}]},endDate:t.endDate,id:e,onsetDateTime:t.onsetDateTime,recorder:{reference:"Practitioner/".concat(t.userId)},recordedDate:(new Date).toISOString(),resourceType:"Condition",subject:{reference:"Patient/".concat(t.patientId)}},[4,(0,o.openmrsFetch)(r,{headers:{"Content-Type":"application/json"},method:"PUT",body:i,signal:n.signal})];case 1:return[2,l.sent()]}}))}))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=l((function(e){var t,n;return a(this,(function(r){switch(r.label){case 0:return t=new AbortController,n="".concat(o.fhirBaseUrl,"/Condition/").concat(e),[4,(0,o.openmrsFetch)(n,{method:"DELETE",signal:t.signal})];case 1:return[2,r.sent()]}}))}))).apply(this,arguments)}},9526:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(268),o=n.n(r),i=n(4924),l=n(1872),a=n(2870),c=n(4548);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n,r,o,i,l){try{var a=e[i](l),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){s(i,r,o,l,a,"next",e)}function a(e){s(i,r,o,l,a,"throw",e)}l(void 0)}))}}const p=function(e){var t,n,s=e.closeDeleteModal,p=e.conditionId,f=e.patientUuid,h=(0,i.useTranslation)().t,y=(0,c.l4)(f).mutate,v=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=v[0],b=v[1],g=(0,r.useCallback)(d((function(){var e;return function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(t){switch(t.label){case 0:b(!0),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,(0,c.B6)(p)];case 2:return 200===t.sent().status&&(y(),s(),(0,a.showToast)({critical:!0,kind:"success",description:h("conditionDeletedSuccessfully","Condition deleted successfully"),title:h("conditionDeleted","Condition Deleted")})),[3,4];case 3:return e=t.sent(),console.error("Error deleting condition: ",e),(0,a.showNotification)({title:h("errorDeletingCondition","Error deleting condition"),kind:"error",critical:!0,description:null==e?void 0:e.message}),[3,4];case 4:return[2]}}))})),[s,p,y,h]);return o().createElement("div",null,o().createElement(l.xBx,{closeModal:s,title:h("deleteCondition","Delete condition")}),o().createElement(l.fef,null,o().createElement("p",null,h("deleteModalConfirmationText","Are you sure you want to delete this condition?"))),o().createElement(l.mzw,null,o().createElement(l.zxk,{kind:"secondary",onClick:s},h("cancel","Cancel")),o().createElement(l.zxk,{kind:"danger",onClick:g,disabled:m},m?o().createElement(l.lSo,{description:h("deleting","Deleting")+"..."}):o().createElement("span",null,h("delete","Delete")))))}}}]);