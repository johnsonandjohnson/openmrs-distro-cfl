"use strict";(globalThis.webpackChunk_openmrs_esm_fast_data_entry_app=globalThis.webpackChunk_openmrs_esm_fast_data_entry_app||[]).push([[959],{5665:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7537),r=n.n(a),o=n(3645),i=n.n(o)()(r());i.push([e.id,".-esm-fast-data-entry__styles__cardContainer___lDpJq{padding:1rem;display:flex;cursor:pointer}.-esm-fast-data-entry__styles__skeletonText___ffjkW{max-width:8rem}.-esm-fast-data-entry__styles__identifier___RkGs4{font-weight:300;font-size:.8rem;line-height:.9rem}.-esm-fast-data-entry__styles__displayName___Ol4ha{font-weight:bold}.-esm-fast-data-entry__styles__activeDisplayName___TSAgm{color:#4589ff}.-esm-fast-data-entry__styles__inactiveCard___j1a8H:hover{background-color:#c6c6c6}.-esm-fast-data-entry__styles__patientInfo___KY6Vw{flex-grow:1}.-esm-fast-data-entry__styles__statusSuccess____2BPe{fill:#198038}.-esm-fast-data-entry__styles__statusWarning___FNaQa{fill:#d2a106}","",{version:3,sources:["webpack://./src/patient-card/styles.scss","webpack://./node_modules/@carbon/layout/scss/generated/_spacing.scss","webpack://./node_modules/@carbon/colors/index.scss"],names:[],mappings:"AAKA,qDACE,YCyBW,CDxBX,YAAA,CACA,cAAA,CAGF,oDACE,cAAA,CAGF,kDACE,eAAA,CACA,eAAA,CACA,iBAAA,CAGF,mDACE,gBAAA,CAGF,yDACE,aEVQ,CFcR,0DACE,wBEaM,CFTV,mDACE,WAAA,CAGF,qDACE,YEiBS,CFdX,qDACE,YEkFU",sourceRoot:""}]),i.locals={cardContainer:"-esm-fast-data-entry__styles__cardContainer___lDpJq",skeletonText:"-esm-fast-data-entry__styles__skeletonText___ffjkW",identifier:"-esm-fast-data-entry__styles__identifier___RkGs4",displayName:"-esm-fast-data-entry__styles__displayName___Ol4ha",activeDisplayName:"-esm-fast-data-entry__styles__activeDisplayName___TSAgm",inactiveCard:"-esm-fast-data-entry__styles__inactiveCard___j1a8H",patientInfo:"-esm-fast-data-entry__styles__patientInfo___KY6Vw",statusSuccess:"-esm-fast-data-entry__styles__statusSuccess____2BPe",statusWarning:"-esm-fast-data-entry__styles__statusWarning___FNaQa"};const s=i},6254:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(4422),r=n(1672),o=n.n(r),i=n(3397);function s(e,t,n,a,r,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(a,r)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){s(o,a,r,i,l,"next",e)}function l(e){s(o,a,r,i,l,"throw",e)}i(void 0)}))}}var c=function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};const u=function(e){var t,n=e.open,r=e.setOpen,s=e.context,u=(0,i.useTranslation)().t,d=(t=l((function(){return c(this,(function(e){switch(e.label){case 0:return[4,s.destroySession()];case 1:return e.sent(),[2]}}))})),function(){return t.apply(this,arguments)}),f=function(){var e=l((function(){return c(this,(function(e){switch(e.label){case 0:return[4,s.closeSession()];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();return o().createElement(a.ComposedModal,{open:n},o().createElement(a.ModalHeader,null,u("areYouSure","Are you sure?")),o().createElement(a.ModalBody,null,u("cancelExplanation","You will lose any unsaved changes on the current form. Do you want to discard the current session?")),o().createElement(a.ModalFooter,null,o().createElement(a.Button,{kind:"secondary",onClick:function(){return r(!1)}},u("cancel","Cancel")),o().createElement(a.Button,{kind:"danger",onClick:d},u("discard","Discard")),o().createElement(a.Button,{kind:"primary",onClick:f},u("saveSession","Save Session"))))}},4775:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(4422),r=n(1672),o=n.n(r),i=n(3397);const s=function(e){var t=e.open,n=e.setOpen,r=e.context,s=e.validateFirst,l=void 0!==s&&s,c=(0,i.useTranslation)().t;return o().createElement(a.ComposedModal,{open:t},o().createElement(a.ModalHeader,null,c("areYouSure","Are you sure?")),o().createElement(a.ModalBody,null,c("saveExplanation","Do you want to save the current form and exit the workflow?")),o().createElement(a.ModalFooter,null,o().createElement(a.Button,{kind:"secondary",onClick:function(){return n(!1)}},c("cancel","Cancel")),o().createElement(a.Button,{kind:"primary",onClick:function(){l?r.validateForComplete():r.submitForComplete(),n(!1)}},c("complete","Complete"))))}},6552:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(1672),r=n.n(a),o=n(1132),i=n(8529);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const l=function(e){var t=e.formUuid,n=e.patientUuid,l=e.visitUuid,c=e.visitTypeUuid,u=e.encounterUuid,d=e.handlePostResponse,f=e.handleEncounterCreate,_=e.handleOnValidate,m=(0,i.Z)(n);(0,a.useEffect)((function(){return function(){return(0,o.detach)("form-widget-slot","form-widget-slot")}}));var y,p,v=(y=(0,a.useState)(!0),p=2,function(e){if(Array.isArray(e))return e}(y)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return o}}(y,p)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(y,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=v[0],A=v[1];return(0,a.useEffect)((function(){n&&t&&m&&(A(!1),setTimeout((function(){A(!0)})))}),[n,t,m]),r().createElement("div",null,h&&t&&n&&m&&r().createElement(o.ExtensionSlot,{name:"form-widget-slot",state:{view:"form",formUuid:t,visitUuid:null!=l?l:"",visitTypeUuid:null!=c?c:"",patientUuid:n,patient:m,encounterUuid:null!=u?u:"",closeWorkspace:function(){},handlePostResponse:d,handleEncounterCreate:f,handleOnValidate:_,showDiscardSubmitButtons:!1}}))}},5278:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(1672),r=n(3397),o=n(1132);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const l=function(e){var t=e.showSuccessNotification,n=void 0===t||t,i=e.showErrorNotification,l=void 0===i||i,c=(0,r.useTranslation)().t,u=s((0,a.useState)(!1),2),d=u[0],f=u[1],_=s((0,a.useState)(null),2),m=_[0],y=_[1],p=s((0,a.useState)(null),2),v=p[0],h=p[1],A=(0,a.useCallback)((function(e){var t,a;f(!1),h(!1),y(e),n&&(0,o.showToast)({critical:!0,kind:"success",description:c("visitStartedSuccessfully","".concat(null==e||null===(t=e.data)||void 0===t||null===(a=t.visitType)||void 0===a?void 0:a.display," started successfully")),title:c("visitStarted","Visit started")})}),[c,n]),C=(0,a.useCallback)((function(e){f(!1),y(!1),h(e),l&&(0,o.showNotification)({title:c("startVisitError","Error starting visit"),kind:"error",critical:!0,description:null==e?void 0:e.message})}),[c,l]);return{saveVisit:(0,a.useCallback)((function(e){var t={patient:e.patientUuid,startDatetime:e.startDatetime,stopDatetime:e.stopDatetime,visitType:e.visitType,location:e.location};(0,o.openmrsFetch)("/ws/rest/v1/visit",{method:"POST",body:t,headers:{"Content-Type":"application/json"}}).then(A).catch(C)}),[C,A]),updateEncounter:(0,a.useCallback)((function(e){(0,o.openmrsFetch)("/ws/rest/v1/encounter/"+e.uuid,{method:"POST",body:{visit:e.visit},headers:{"Content-Type":"application/json"}})}),[]),success:m,error:v,isSubmitting:d}}},5587:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(3133),r=n(1409),o=n(4422),i=n(1672),s=n.n(i),l=n(8529),c=n(7410),u=n.n(c),d=n(4766),f=n.n(d),_=n(1991),m=n.n(_),y=n(3702),p=n.n(y),v=n(2434),h=n.n(v),A=n(1422),C=n.n(A),b=n(5665),E={};E.styleTagTransform=C(),E.setAttributes=p(),E.insert=m().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=h(),u()(b.Z,E);const w=b.Z&&b.Z.locals?b.Z.locals:void 0;var k=function(e){var t=e.onClick,n=void 0===t?function(){}:t,a=e.active,r=e.children;return s().createElement("div",{onClick:n,className:"".concat(w.cardContainer," ").concat(!a&&w.inactiveCard),role:"button",tabIndex:0},r)};const g=function(e){var t,n,i,c,u,d,f,_=e.patientUuid,m=e.activePatientUuid,y=e.editEncounter,p=e.encounters,v=(0,l.Z)(_),h=null==v||null===(t=v.name)||void 0===t||null===(n=t[0])||void 0===n||null===(i=n.given)||void 0===i?void 0:i[0],A=null==v||null===(c=v.name)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.family,C=null==v||null===(d=v.identifier)||void 0===d||null===(f=d[0])||void 0===f?void 0:f.value;if(!v)return s().createElement(k,{active:!0},s().createElement(o.SkeletonText,{className:w.skeletonText}));var b=m===_;return s().createElement(k,{onClick:b?function(){}:function(){return y(_)},active:b},s().createElement("div",{className:w.patientInfo},s().createElement("div",{className:w.identifier},C),s().createElement("div",{className:"".concat(w.displayName," ").concat(b&&w.activeDisplayName)},h," ",A)),s().createElement("div",null,_ in p?s().createElement(a.Wz,{size:16,className:w.statusSuccess}):s().createElement(r.lw,{size:16,className:w.statusWarning})))}}}]);