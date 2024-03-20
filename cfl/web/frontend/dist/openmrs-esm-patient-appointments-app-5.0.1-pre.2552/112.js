(globalThis.webpackChunk_openmrs_esm_patient_appointments_app=globalThis.webpackChunk_openmrs_esm_patient_appointments_app||[]).push([[112],{2258:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var a=n(272),i=n.n(a),o=n(2609),r=n.n(o)()(i());r.push([t.id,':root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79}.-esm-patient-appointments__upcoming-appointments-card__container___IsFLz{margin:1rem}.-esm-patient-appointments__upcoming-appointments-card__container___IsFLz section{margin:1rem 0}.-esm-patient-appointments__upcoming-appointments-card__sectionTitle___Kl7Jw{font-size:var(--cds-heading-compact-02-font-size, 1rem);font-weight:var(--cds-heading-compact-02-font-weight, 600);line-height:var(--cds-heading-compact-02-line-height, 1.375);letter-spacing:var(--cds-heading-compact-02-letter-spacing, 0);color:#525252;margin:0 0 .5rem 0}.-esm-patient-appointments__upcoming-appointments-card__checkbox___vDzus:not(:first-child){margin:0rem 0rem}.-esm-patient-appointments__upcoming-appointments-card__input___wBHUI{margin:0rem 1rem 1rem}.-esm-patient-appointments__upcoming-appointments-card__headerLabel___UUCT_{font-size:var(--cds-label-01-font-size, 0.75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, 0.32px);color:#525252}.-esm-patient-appointments__upcoming-appointments-card__checkboxContainer___g7G3W{display:grid;grid-template-columns:1fr 1fr}.-esm-patient-appointments__upcoming-appointments-card__structuredList___pOjTt{padding:.5rem .5rem .5rem}.-esm-patient-appointments__upcoming-appointments-card__inlineNotification___J4geb{width:100%;max-width:unset;padding:"0rem"}',"",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/appointments/upcoming-appointments-card.scss","webpack://./../../node_modules/@carbon/layout/scss/generated/_spacing.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CCnDF,0EACE,WC0BW,CDxBX,kFACE,aAAA,CAIJ,6EE8zBI,uDAAA,CAAA,0DAAA,CAAA,4DAAA,CAAA,8DAAA,CF5zBF,aDTQ,CCUR,kBAAA,CAGE,2FACE,gBAAA,CAIJ,sEACE,qBAAA,CAGF,4EE+yBE,gDAAA,CAAA,gDAAA,CAAA,oDAAA,CAAA,yDAAA,CF7yBA,aDxBM,CC2BR,kFACE,YAAA,CACA,6BAAA,CAGF,+EACE,yBAAA,CAIF,mFACE,UAAA,CACA,eAAA,CACA,cAAA",sourceRoot:""}]),r.locals={container:"-esm-patient-appointments__upcoming-appointments-card__container___IsFLz",sectionTitle:"-esm-patient-appointments__upcoming-appointments-card__sectionTitle___Kl7Jw",checkbox:"-esm-patient-appointments__upcoming-appointments-card__checkbox___vDzus",input:"-esm-patient-appointments__upcoming-appointments-card__input___wBHUI",headerLabel:"-esm-patient-appointments__upcoming-appointments-card__headerLabel___UUCT_",checkboxContainer:"-esm-patient-appointments__upcoming-appointments-card__checkboxContainer___g7G3W",structuredList:"-esm-patient-appointments__upcoming-appointments-card__structuredList___pOjTt",inlineNotification:"-esm-patient-appointments__upcoming-appointments-card__inlineNotification___J4geb"};const s=r},6824:function(t){t.exports=function(){"use strict";return function(t,e,n){e.prototype.isToday=function(){var t="YYYY-MM-DD",e=n();return this.format(t)===e.format(t)}}}()},9318:(t,e,n)=>{"use strict";n.d(e,{Ae:()=>_,GB:()=>d,l9:()=>u,v1:()=>f,zt:()=>m});var a=n(3565),i=n.n(a),o=n(3255),r=n(2870),s=n(6824),p=n.n(s);function c(t,e,n,a,i,o,r){try{var s=t[o](r),p=s.value}catch(t){return void n(t)}s.done?e(p):Promise.resolve(p).then(a,i)}i().extend(p());var l="/ws/rest/v1/appointments/search";function m(t,e,n){var a,s,p,c,m,u,d,_=(0,o.ZP)(l,(function(){return(0,r.openmrsFetch)(l,{method:"POST",signal:n.signal,headers:{"Content-Type":"application/json"},body:{patientUuid:t,startDate:e}})})),A=_.data,g=_.error,f=_.isLoading,h=_.isValidating,v=_.mutate,b=(null==A||null===(a=A.data)||void 0===a?void 0:a.length)?A.data:null,C=null==b||null===(p=b.sort((function(t,e){return e.startDateTime>t.startDateTime?1:-1})))||void 0===p||null===(s=p.filter((function(t){return"Cancelled"!==t.status})))||void 0===s?void 0:s.filter((function(t){var e=t.startDateTime;return i()(new Date(e).toISOString()).isBefore((new Date).setHours(0,0,0,0))})),y=null==b||null===(m=b.sort((function(t,e){return t.startDateTime>e.startDateTime?1:-1})))||void 0===m||null===(c=m.filter((function(t){return"Cancelled"!==t.status})))||void 0===c?void 0:c.filter((function(t){var e=t.startDateTime;return i()(new Date(e).toISOString()).isAfter(new Date)})),D=null==b||null===(d=b.sort((function(t,e){return t.startDateTime>e.startDateTime?1:-1})))||void 0===d||null===(u=d.filter((function(t){return"Cancelled"!==t.status})))||void 0===u?void 0:u.filter((function(t){var e=t.startDateTime;return i()(new Date(e).toISOString()).isToday()}));return{data:A?{pastAppointments:C,upcomingAppointments:y,todaysAppointments:D}:null,isError:g,isLoading:f,isValidating:h,mutate:v}}function u(){var t=(0,o.ZP)("/ws/rest/v1/appointmentService/all/full",r.openmrsFetch),e=t.data,n=t.error,a=t.isLoading;return{data:e?e.data:null,isError:n,isLoading:a}}function d(t,e){return(0,r.openmrsFetch)("/ws/rest/v1/appointment",{method:"POST",signal:e.signal,headers:{"Content-Type":"application/json"},body:t})}function _(t,e){return(0,r.openmrsFetch)("/ws/rest/v1/recurring-appointments",{method:"POST",signal:e.signal,headers:{"Content-Type":"application/json"},body:t})}var A,g,f=(A=function(t,e,n){var a,o,s;return function(t,e){var n,a,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((i=(i=r.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],a=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(n){switch(n.label){case 0:return a=Intl.DateTimeFormat().resolvedOptions().timeZone,o=i()(new Date).format("YYYY-MM-DDTHH:mm:ss.SSSZZ"),s="/ws/rest/v1/appointments/".concat(e,"/status-change"),[4,(0,r.openmrsFetch)(s,{body:{toStatus:t,onDate:o,timeZone:a},method:"POST",headers:{"Content-Type":"application/json"}})];case 1:return[2,n.sent()]}}))},g=function(){var t=this,e=arguments;return new Promise((function(n,a){var i=A.apply(t,e);function o(t){c(i,n,a,o,r,"next",t)}function r(t){c(i,n,a,o,r,"throw",t)}o(void 0)}))},function(t,e,n){return g.apply(this,arguments)})},8112:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>z});var a=n(7900),i=n.n(a),o=n(4924),r=n(5986),s=n(2263),p=n(4405),c=n(7885),l=n(3282),m=n(2143),u=n(5441),d=n(2663),_=Object.prototype.hasOwnProperty;var A=n(2892),g=n(2870),f=n(9318),h=n(4556),v=n(1354),b=n.n(v),C=n(1583),y=n.n(C),D=n(7378),w=n.n(D),T=n(5993),E=n.n(T),S=n(4154),F=n.n(S),k=n(8141),x=n.n(k),B=n(2258),Z={};Z.styleTagTransform=x(),Z.setAttributes=E(),Z.insert=w().bind(null,"head"),Z.domAPI=y(),Z.insertStyleElement=F(),b()(B.Z,Z);const I=B.Z&&B.Z.locals?B.Z.locals:void 0;var L=n(3565),O=n.n(L);const z=function(t){var e,n,v=t.patientUuid,b=t.setUpcomingAppointment,C=(0,o.useTranslation)().t,y=O()((new Date).toISOString()).subtract(6,"month").toISOString(),D=C("upcomingAppointments","Upcoming appointments"),w=(0,a.useMemo)((function(){return new AbortController}),[]);(0,a.useEffect)((function(){return function(){return w.abort()}}),[w]);var T=(0,f.zt)(v,y,w),E=T.data,S=T.isError,F=T.isLoading,k=(null==E||null===(e=E.todaysAppointments)||void 0===e?void 0:e.length)?null==E?void 0:E.todaysAppointments:[],x=(null==E||null===(n=E.upcomingAppointments)||void 0===n?void 0:n.length)?null==E?void 0:E.upcomingAppointments:[],B=k.concat(x),Z=function(t){if(null==t)return!0;if((0,l.Z)(t)&&((0,c.Z)(t)||"string"==typeof t||"function"==typeof t.splice||(0,m.Z)(t)||(0,d.Z)(t)||(0,p.Z)(t)))return!t.length;var e=(0,s.Z)(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if((0,u.Z)(t))return!(0,r.Z)(t).length;for(var n in t)if(_.call(t,n))return!1;return!0}(B)?[]:null==B?void 0:B.filter((function(t){return null===t.dateHonored}));return S?i().createElement(h.ErrorState,{headerTitle:D,error:S}):(F&&A.lSo,(null==Z?void 0:Z.length)?i().createElement("div",null,i().createElement("div",null,i().createElement("p",{className:I.sectionTitle},D),i().createElement("span",{className:I.headerLabel},C("appointmentToFulfill","Select appointment(s) to fulfill"))," "),i().createElement(A.x4x,null,i().createElement(A.SmK,null,i().createElement(A.s1N,{head:!0},i().createElement(A.agF,{head:!0},C("date","Date")),i().createElement(A.agF,{head:!0},C("appointmentType","Appointment type")),i().createElement(A.agF,{head:!0},C("action","Action")))),i().createElement(A.FxI,null,Z.map((function(t,e){return i().createElement(A.s1N,{label:!0,key:"row-".concat(e),className:I.structuredList},i().createElement(A.agF,null,(0,g.formatDate)((0,g.parseDate)(t.startDateTime),{mode:"wide"})),i().createElement(A.agF,null,t.service?t.service.name:"——"),i().createElement(A.agF,null,i().createElement(A.XZJ,{className:I.checkbox,key:e,labelText:"",defaultChecked:O()(new Date(t.startDateTime).toISOString()).isToday(),id:t.uuid,onChange:function(e){return e.target.checked?b(t):""}})))}))))):i().createElement(A.K0D,{kind:"info",lowContrast:!0,className:I.inlineNotification,title:C("upcomingAppointments","Upcoming appointments"),subtitle:C("noUpcomingAppointments","No upcoming appointments found")}))}}}]);