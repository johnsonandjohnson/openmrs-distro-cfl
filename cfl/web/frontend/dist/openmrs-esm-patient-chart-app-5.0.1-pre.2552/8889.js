"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[8889],{8889:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var i=a(268),n=a.n(i),l=a(4350),s=a(414),r=a(2870),c=a(4924),m=a(5968);const o=a(8377).Z;var d=a(5044),u=a(237);const v=function(e){var t,a=e.patientUuid,i=(0,c.useTranslation)().t,v=(0,m.Tn)(a),E=v.visits,p=v.isError,b=v.isLoading,h=v.mutateVisits,T=(0,r.useConfig)().showAllEncountersTab,g=null==E||null===(t=E.filter((function(e){return e.encounters.length})))||void 0===t?void 0:t.flatMap((function(e){return(0,m.Up)(e)}));return n().createElement("div",{className:u.Z.tabs},n().createElement(l.Tabs,null,n().createElement(l.TabList,{"aria-label":"Visit detail tabs",contained:!0},n().createElement(l.Tab,{className:u.Z.tab,id:"visit-summaries-tab"},i("visitSummaries","Visit summaries")),T?n().createElement(l.Tab,{className:u.Z.tab,id:"all-encounters-tab"},i("allEncounters","All encounters")):n().createElement(n().Fragment,null)),n().createElement(l.TabPanels,null,n().createElement(l.TabPanel,null,b?n().createElement(l.InlineLoading,{description:"".concat(i("loading","Loading")," ..."),role:"progressbar"}):p?n().createElement(s.ErrorState,{headerTitle:i("visits","visits"),error:p}):(null==E?void 0:E.length)?E.map((function(e,t){var l;return n().createElement("div",{className:u.Z.container,key:t},n().createElement("div",{className:u.Z.header},n().createElement("div",{className:u.Z.visitInfo},n().createElement("div",null,n().createElement("h4",{className:u.Z.visitType},null==e||null===(l=e.visitType)||void 0===l?void 0:l.display),n().createElement("div",{className:u.Z.displayFlex},n().createElement("h6",{className:u.Z.dateLabel},i("start","Start"),":"),n().createElement("span",{className:u.Z.date},(0,r.formatDatetime)((0,r.parseDate)(null==e?void 0:e.startDatetime))),(null==e?void 0:e.stopDatetime)?n().createElement(n().Fragment,null,n().createElement("h6",{className:u.Z.dateLabel},i("end","End"),":"),n().createElement("span",{className:u.Z.date},(0,r.formatDatetime)((0,r.parseDate)(null==e?void 0:e.stopDatetime)))):null)),n().createElement("div",null,n().createElement(r.ExtensionSlot,{name:"visit-detail-overview-actions",state:{patientUuid:a,visit:e}})))),n().createElement(d.Z,{visit:e,patientUuid:a}))})):n().createElement(s.EmptyState,{headerTitle:i("visits","visits"),displayText:i("Visits","Visits")})),T&&n().createElement(l.TabPanel,null,b?n().createElement(l.InlineLoading,{description:"".concat(i("loading","Loading")," ..."),role:"progressbar"}):p?n().createElement(s.ErrorState,{headerTitle:i("visits","visits"),error:p}):(null==E?void 0:E.length)?n().createElement(o,{mutateVisits:h,visits:g,showAllEncounters:!0,patientUuid:a}):n().createElement(s.EmptyState,{headerTitle:i("visits","visits"),displayText:i("Visits","Visits")})))))}}}]);