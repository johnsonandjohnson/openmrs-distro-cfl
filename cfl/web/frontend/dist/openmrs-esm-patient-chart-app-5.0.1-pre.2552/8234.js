"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[8234],{9361:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(272),a=i.n(r),n=i(2609),s=i.n(n)()(a());s.push([e.id,".-esm-patient-chart__current-visit-summary__container___vxypG{background-color:#fff}.-esm-patient-chart__current-visit-summary__visitSummaryCard___wrjsG{margin:0 1rem}","",{version:3,sources:["webpack://./src/visit/visits-widget/current-visit-summary.scss","webpack://./../../node_modules/@carbon/colors/index.scss"],names:[],mappings:"AAIA,8DACI,qBCqHM,CDlHV,qEACI,aAAA",sourceRoot:""}]),s.locals={container:"-esm-patient-chart__current-visit-summary__container___vxypG",visitSummaryCard:"-esm-patient-chart__current-visit-summary__visitSummaryCard___wrjsG"};const c=s},8234:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var r=i(268),a=i.n(r),n=i(2870),s=i(4924),c=i(4350),o=i(414),l=i(5044),m=i(1354),u=i.n(m),d=i(1583),_=i.n(d),p=i(7378),v=i.n(p),g=i(5993),h=i.n(g),y=i(4154),C=i.n(y),E=i(8141),A=i.n(E),V=i(9361),b={};b.styleTagTransform=A(),b.setAttributes=h(),b.insert=v().bind(null,"head"),b.domAPI=_(),b.insertStyleElement=C(),u()(V.Z,b);const f=V.Z&&V.Z.locals?V.Z.locals:void 0,k=function(e){var t=e.patientUuid,i=(0,s.useTranslation)().t,r=(0,n.useVisit)(t),m=r.isLoading,u=r.currentVisit,d=r.error,_=r.isValidating;return m?a().createElement(c.InlineLoading,{status:"active",iconDescription:i("loading","Loading"),description:i("loadingVisit","Loading current visit...")}):d?a().createElement(n.ErrorState,{headerTitle:i("failedToLoadCurrentVisit","Failed loading current visit"),error:d}):u?a().createElement("div",{className:f.container},a().createElement(o.CardHeader,{title:i("currentVisit","Current Visit")},a().createElement("span",null,_?a().createElement(c.InlineLoading,null):null)),a().createElement("div",{className:f.visitSummaryCard},a().createElement(l.Z,{visit:u,patientUuid:t}))):a().createElement(o.EmptyState,{headerTitle:i("currentVisit","currentVisit"),displayText:i("noActiveVisitMessage","active visit"),launchForm:function(){return(0,o.launchPatientWorkspace)("start-visit-workspace-form")}})}}}]);