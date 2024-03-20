"use strict";(globalThis.webpackChunk_openmrs_esm_service_queues_app=globalThis.webpackChunk_openmrs_esm_service_queues_app||[]).push([[328],{7615:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(272),a=n.n(i),o=n(2609),l=n.n(o)()(a());l.push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.-esm-service-queues__change-status-dialog__radioButtonGroup___Jd32q{display:flex;flex-direction:column;align-items:flex-start;margin-top:.5rem;min-height:4rem;width:100%;font-size:var(--cds-body-compact-01-font-size, 0.875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, 0.16px)}.-esm-service-queues__change-status-dialog__radioButton___Bup2g{padding:.25rem .25rem;margin:.5rem 0}section{margin:.5rem}.-esm-service-queues__change-status-dialog__sectionTitle___O_pM_{font-size:var(--cds-heading-compact-02-font-size, 1rem);font-weight:var(--cds-heading-compact-02-font-weight, 600);line-height:var(--cds-heading-compact-02-line-height, 1.375);letter-spacing:var(--cds-heading-compact-02-letter-spacing, 0);color:#525252;margin-bottom:.75rem}.-esm-service-queues__change-status-dialog__modalBody___QBTTb{padding-bottom:1rem}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/active-visits/change-status-dialog.scss","webpack://./../../node_modules/@carbon/layout/scss/generated/_spacing.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CCnDF,qEACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,gBCaW,CDZX,eC+CW,CD9CX,UAAA,CEw1BE,wDAAA,CAAA,uDAAA,CAAA,2DAAA,CAAA,gEAAA,CFp1BJ,gEACE,qBAAA,CACA,cAAA,CAGF,QACE,YCCW,CDEb,iEE20BI,uDAAA,CAAA,0DAAA,CAAA,4DAAA,CAAA,8DAAA,CFz0BF,aDpBQ,CCqBR,oBAAA,CAGF,8DACE,mBCCW",sourceRoot:""}]),l.locals={radioButtonGroup:"-esm-service-queues__change-status-dialog__radioButtonGroup___Jd32q",radioButton:"-esm-service-queues__change-status-dialog__radioButton___Bup2g",sectionTitle:"-esm-service-queues__change-status-dialog__sectionTitle___O_pM_",modalBody:"-esm-service-queues__change-status-dialog__modalBody___QBTTb"};const r=l},328:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var i=n(5206),a=n.n(i),o=n(3028),l=n(4924),r=n(2870),u=n(8053),s=n(1995),c=n(1354),d=n.n(c),m=n(1583),v=n.n(m),A=n(7378),p=n.n(A),g=n(5993),_=n.n(g),y=n(4154),h=n.n(y),f=n(8141),C=n.n(f),E=n(7615),b={};b.styleTagTransform=C(),b.setAttributes=_(),b.insert=p().bind(null,"head"),b.domAPI=v(),b.insertStyleElement=h(),d()(E.Z,b);const q=E.Z&&E.Z.locals?E.Z.locals:void 0;function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,a,o=[],l=!0,r=!1;try{for(n=n.call(e);!(l=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);l=!0);}catch(e){r=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(r)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const x=function(e){var t,n,c=e.queueEntry,d=e.closeModal,m=(0,l.useTranslation)().t,v=S((0,i.useState)(null==c?void 0:c.priorityUuid),2),A=v[0],p=v[1],g=S((0,i.useState)(""),2),_=g[0],y=g[1],h=(0,u.W_)().priorities,f=(0,r.useConfig)(),C=S((0,i.useState)(null==c?void 0:c.queueLocation),2),E=C[0],b=C[1],B=(0,u.Su)(E).services,x=(0,s.J)().queueLocations,T=S((0,i.useState)(!1),2),w=T[0],k=T[1],U=(0,u.P4)("",E).mutate,D=(0,u.$z)().statuses,N=S((0,i.useState)(null==c?void 0:c.statusUuid),2),F=N[0],Q=N[1],P=(0,i.useCallback)((function(e){var t;e.preventDefault();var n=f.concepts.defaultPriorityConceptUuid;k(!1);var i=""===A?n:A,a=f.concepts.emergencyPriorityConceptUuid,o=A===a?1:0,l=new Date;(0,u.zI)(null==c?void 0:c.visitUuid,null==c?void 0:c.queueUuid,null===(t=null==e?void 0:e.target.service)||void 0===t?void 0:t.value,null==c?void 0:c.queueEntryUuid,null==c?void 0:c.patientUuid,i,F,l,o).then((function(e){201===e.status&&((0,r.showToast)({critical:!0,title:m("updateEntry","Update entry"),kind:"success",description:m("queueEntryUpdateSuccessfully","Queue Entry Updated Successfully")}),d(),U(),(0,r.navigate)({to:"".concat(window.spaBase,"/home/service-queues")}))}),(function(e){(0,r.showNotification)({title:m("queueEntryStatusUpdateFailed","Error updating queue entry status"),kind:"error",critical:!0,description:null==e?void 0:e.message})}))}),[f.concepts.defaultPriorityConceptUuid,f.concepts.emergencyPriorityConceptUuid,A,null==c?void 0:c.visitUuid,null==c?void 0:c.queueUuid,null==c?void 0:c.queueEntryUuid,null==c?void 0:c.patientUuid,F,m,d,U]);return 0===(null===(t=Object.keys(c))||void 0===t?void 0:t.length)?a().createElement(o.xBx,{closeModal:d,title:m("patientNotInQueue","The patient is not in the queue")}):(null===(n=Object.keys(c))||void 0===n?void 0:n.length)>0?a().createElement("div",null,a().createElement(o.l09,{onSubmit:P},a().createElement(o.xBx,{closeModal:d,title:m("movePatientToNextService","Move patient to the next service?")}),a().createElement(o.fef,null,a().createElement("div",{className:q.modalBody},a().createElement("h5",null,c.name,"   ·  ",c.patientSex,"   ·  ",c.patientAge," ",m("years","Years"))),a().createElement("section",null,a().createElement(o.PhF,{labelText:m("selectQueueLocation","Select a queue location"),id:"location",invalidText:"Required",value:E,onChange:function(e){b(e.target.value),k(!0)}},E?null:a().createElement(o.QlF,{text:m("selectOption","Select an option"),value:""}),(null==x?void 0:x.length)>0&&x.map((function(e){return a().createElement(o.QlF,{key:e.id,text:e.name,value:e.id},e.name)})))),a().createElement("section",{className:q.section},a().createElement("div",{className:q.sectionTitle},m("queueService","Queue service")),a().createElement(o.PhF,{labelText:m("selectService","Select a service"),id:"service",invalidText:"Required",value:_,onChange:function(e){return y(e.target.value)}},_||!0!==w?null:a().createElement(o.QlF,{text:m("selectService","Select a service"),value:""}),c.queueUuid?null:a().createElement(o.QlF,{text:m("selectService","Select a service"),value:""}),(null==B?void 0:B.length)>0&&B.map((function(e){return a().createElement(o.QlF,{key:e.uuid,text:e.display,value:e.uuid},e.display)})))),a().createElement("section",{className:q.section},a().createElement("div",{className:q.sectionTitle},m("queueStatus","Queue status")),(null==D?void 0:D.length)?a().createElement(o.SYO,{className:q.radioButtonWrapper,name:"status",defaultSelected:F,onChange:function(e){Q(e)}},(null==D?void 0:D.length)>0&&D.map((function(e){var t=e.uuid,n=e.display;return a().createElement(o.EUY,{key:t,labelText:n,value:t})}))):a().createElement(o.K0D,{className:q.inlineNotification,kind:"error",lowContrast:!0,subtitle:m("configureStatus","Please configure status to continue."),title:m("noStatusConfigured","No status configured")})),a().createElement("section",{className:q.section},a().createElement("div",{className:q.sectionTitle},m("queuePriority","Queue priority")),a().createElement(o.GHR,{size:"sm",selectedIndex:1,onChange:function(e){p(e.name)}},(null==h?void 0:h.length)>0?h.map((function(e){var t=e.uuid,n=e.display;return a().createElement(o.rsf,{name:t,text:n,key:t,value:t})})):a().createElement(o.rsf,{name:m("noPriorityFound","No priority found"),text:m("noPriorityFound","No priority found"),value:null})))),a().createElement(o.mzw,null,a().createElement(o.zxk,{kind:"secondary",onClick:d},m("cancel","Cancel")),a().createElement(o.zxk,{type:"submit"},m("moveToNextService","Move to next service"))))):void 0}}}]);