(globalThis.webpackChunk_openmrs_esm_dispensing_app=globalThis.webpackChunk_openmrs_esm_dispensing_app||[]).push([[153],{9153:(e,t,n)=>{"use strict";n.r(t),n.d(t,{dispensing:()=>l,dispensingDashboard:()=>u,dispensingLink:()=>p,importTranslation:()=>a,startupApp:()=>c});var o=n(1132),i={appName:{_type:o.Type.String,_default:"Pharmacy"},actionButtons:{pauseButton:{enabled:{_type:o.Type.Boolean,_description:"Enabled/Disable including a Pause button in the button action bar",_default:!0}},closeButton:{enabled:{_type:o.Type.Boolean,_description:"Enabled/Disable including a Close button in the button action bar",_default:!0}}},dispenseBehavior:{allowModifyingPrescription:{_type:o.Type.Boolean,_description:"Enable/Disable editing the prescription. If Disabled, Quantity will be he only editable field on prescription form",_default:!0},restrictTotalQuantityDispensed:{_type:o.Type.Boolean,_description:"Enable/Disable restricting dispensing quantity greater than total quantity ordered. Marks prescription as complete when total quantity dispensed. If true, allowModifyingPrescription *must* be false, as this functionality relies solely on numeric quantity and assumes no change in formulation, dosage, unit, etc",_default:!1}},medicationRequestExpirationPeriodInDays:{_type:o.Type.Number,_description:"Medication Requests older that this will be considered expired",_default:90},locationBehavior:{locationColumn:{enabled:{_type:o.Type.Boolean,_description:"Enabled/Disable including a Location column in the main prescriptions table showing ordering location",_default:!1}},locationFilter:{enabled:{_type:o.Type.Boolean,_description:"Enable/Disable Location filter on main prescriptions page",_default:!1},tag:{_type:o.Type.String,_description:"Name of the location tag to use when fetching locations to populate filter",_default:"Login Location"}}},refreshInterval:{_type:o.Type.Number,_description:"The interval, in milliseconds, to query the backend for new/changed data",_default:6e4},valueSets:{reasonForPause:{uuid:{_type:o.Type.UUID,_description:"UUID for the Value Set of valid answers to the 'Reason for Pause' question. Defaults to CIEL value set: https://app.openconceptlab.org/#/orgs/CIEL/sources/CIEL/concepts/168099/",_default:"2dd3e5c0-3d3f-4f3d-9860-19b3f9ab26ff"}},reasonForClose:{uuid:{_type:o.Type.UUID,_description:"UUID for the Value Set of valid answers to the 'Reason for Close' question. Defaults to CIEL value set: https://app.openconceptlab.org/#/orgs/CIEL/sources/CIEL/concepts/168099/",_default:"bd6c1fc2-7cfc-4562-94a0-e4765e5e977e"}},substitutionReason:{uuid:{_type:o.Type.UUID,_description:"UUID for the Value Set of valid answers to the 'Reason for Substitution' question. Defaults to CIEL value set: https://app.openconceptlab.org/#/orgs/CIEL/sources/CIEL/concepts/167862/",_default:"de8671b8-ed2e-4f7e-a9f8-dcd00878f2eb"}},substitutionType:{uuid:{_type:o.Type.UUID,_description:"UUID for the Value Set of valid answers to the 'Type of Substitution' question. Defaults to CIEL value set: https://app.openconceptlab.org/#/orgs/CIEL/sources/CIEL/concepts/167859/",_default:"b9c5bca0-d026-4245-a4d2-e4c0a8999082"}}}},a=n(3979),s="@openmrs/esm-dispensing-app",r={featureName:"dispensing",moduleName:s},l=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(672),n.e(49)]).then(n.bind(n,1049))}),r),p=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(672),n.e(397),n.e(641)]).then(n.bind(n,9641))}),r),u=(0,o.getAsyncLifecycle)((function(){return Promise.all([n.e(361),n.e(672),n.e(397),n.e(771)]).then(n.bind(n,2291))}),r);function c(){(0,o.defineConfigSchema)(s,i)}},3979:(e,t,n)=>{var o={"./en.json":[3574,574],"./fr.json":[2757,757]};function i(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return n.e(t[1]).then((()=>n(i)))}i.keys=()=>Object.keys(o),i.id=3979,e.exports=i}}]);