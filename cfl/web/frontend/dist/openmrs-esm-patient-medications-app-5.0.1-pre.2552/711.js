"use strict";(globalThis.webpackChunk_openmrs_esm_patient_medications_app=globalThis.webpackChunk_openmrs_esm_patient_medications_app||[]).push([[711],{2711:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(268),n=r.n(a),i=r(4924),o=r(370),l=r(2870),s=r(4556),c=r(7408),d=r(8867),u=r(1393);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function m(e){var t,r,m,h,y=e.patientUuid,f=(0,i.useTranslation)().t,v=(0,d.S)("add-drug-order"),g=(0,c.Xm)(y,"any"),T=g.data,E=g.error,b=g.isLoading,w=g.isValidating,M=(m=(0,a.useMemo)((function(){var e=new Date,t=[],r=[];if(T)for(var a=0;a<T.length;a++){var n=T[a];n.autoExpireDate&&(0,l.parseDate)(n.autoExpireDate)<e||n.dateStopped&&(0,l.parseDate)(n.dateStopped)<e?t.push(n):r.push(n)}return[t,r]}),[T]),h=2,function(e){if(Array.isArray(e))return e}(m)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}}(m,h)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(m,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),S=M[0],_=M[1];return n().createElement(n().Fragment,null,n().createElement("div",{style:{marginBottom:"1.5rem"}},(t=f("activeMedicationsDisplayText","Active medications"),r=f("activeMedicationsHeaderTitle","active medications"),b?n().createElement(o.gqd,{role:"progressbar"}):E?n().createElement(s.ErrorState,{error:E,headerTitle:r}):(null==_?void 0:_.length)?n().createElement(u.Z,{isValidating:w,title:f("activeMedicationsTableTitle","Active Medications"),medications:_,showDiscontinueButton:!0,showModifyButton:!0,showReorderButton:!1,patientUuid:y}):n().createElement(s.EmptyState,{displayText:t,headerTitle:r,launchForm:v}))),n().createElement("div",{style:{marginTop:"1.5rem"}},function(){var e=f("pastMedicationsDisplayText","Past medications"),t=f("pastMedicationsHeaderTitle","past medications");return b?n().createElement(o.gqd,{role:"progressbar"}):E?n().createElement(s.ErrorState,{error:E,headerTitle:t}):(null==S?void 0:S.length)?n().createElement(u.Z,{isValidating:w,title:f("pastMedicationsTableTitle","Past Medications"),medications:S,showDiscontinueButton:!1,showModifyButton:!1,showReorderButton:!0,patientUuid:y}):n().createElement(s.EmptyState,{displayText:e,headerTitle:t})}()))}}}]);