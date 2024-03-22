(globalThis.webpackChunk_openmrs_esm_patient_vitals_app=globalThis.webpackChunk_openmrs_esm_patient_vitals_app||[]).push([[812],{1812:(A,e,t)=>{"use strict";t.r(e),t.d(e,{importTranslation:()=>s,startupApp:()=>p,vitalsAndBiometricsForm:()=>c,vitalsHeader:()=>d,vitalsMain:()=>l,vitalsSummary:()=>u});var n=t(2870);const i={bmiUnit:{_type:n.Type.String,_default:"kg / m²"}};var a={concepts:{systolicBloodPressureUuid:{_type:n.Type.ConceptUuid,_default:"5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},diastolicBloodPressureUuid:{_type:n.Type.ConceptUuid,_default:"5086AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},pulseUuid:{_type:n.Type.ConceptUuid,_default:"5087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},temperatureUuid:{_type:n.Type.ConceptUuid,_default:"5088AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},oxygenSaturationUuid:{_type:n.Type.ConceptUuid,_default:"5092AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},heightUuid:{_type:n.Type.ConceptUuid,_default:"5090AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},weightUuid:{_type:n.Type.ConceptUuid,_default:"5089AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},respiratoryRateUuid:{_type:n.Type.ConceptUuid,_default:"5242AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},generalPatientNoteUuid:{_type:n.Type.ConceptUuid,_default:"165095AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},midUpperArmCircumferenceUuid:{_type:n.Type.ConceptUuid,_default:"1343AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}},vitals:{useFormEngine:{_type:n.Type.Boolean,_default:!1,_description:"Whether to use an Ampath form as the vitals and biometrics form. If set to true, encounterUuid and formUuid must be set as well."},encounterTypeUuid:{_type:n.Type.UUID,_default:"67a71486-1a54-468f-ac3e-7091a9a79584"},logo:{src:{_type:n.Type.String,_default:null,_description:"A path or URL to an image. Defaults to the OpenMRS SVG sprite."},alt:{_type:n.Type.String,_default:"Logo",_description:"Alt text, shown on hover"},name:{_type:n.Type.String,_default:null,_description:"The organization name displayed when image is absent"}},showPrintButton:{_type:n.Type.Boolean,_default:!1,_description:"Determines whether or not to display the Print button in the vitals datatable header. If set to true, a Print button gets shown as the right-most item in the table header. When clicked, this button enables the user to print out the contents of the table"},formUuid:{_type:n.Type.UUID,_default:"9f26aad4-244a-46ca-be49-1196df1a8c9a"},formName:{_type:n.Type.String,_default:"Vitals"},useMuacColors:{_type:n.Type.Boolean,_default:!1,_description:"Whether to show/use MUAC color codes. If set to true, the input will show status colors."}},biometrics:i},o="@openmrs/esm-patient-vitals-app",r={featureName:"patient-vitals",moduleName:o},s=t(3979);function p(){(0,n.messageOmrsServiceWorker)({type:"registerDynamicRoute",pattern:"".concat(n.fhirBaseUrl,"/Observation.+")}),(0,n.defineConfigSchema)(o,a)}var u=(0,n.getAsyncLifecycle)((function(){return Promise.all([t.e(537),t.e(93),t.e(843),t.e(268),t.e(877),t.e(560),t.e(638)]).then(t.bind(t,638))}),r),l=(0,n.getAsyncLifecycle)((function(){return Promise.all([t.e(537),t.e(93),t.e(843),t.e(268),t.e(877),t.e(560),t.e(630)]).then(t.bind(t,5630))}),r),d=(0,n.getAsyncLifecycle)((function(){return Promise.all([t.e(537),t.e(93),t.e(843),t.e(532),t.e(268),t.e(877),t.e(560),t.e(981)]).then(t.bind(t,5981))}),r),c=(0,n.getAsyncLifecycle)((function(){return Promise.all([t.e(537),t.e(649),t.e(268),t.e(877),t.e(313)]).then(t.bind(t,7313))}),r)},3979:(A,e,t)=>{var n={"./am.json":[8788,788],"./en.json":[3574,574],"./es.json":[8319,319],"./fr.json":[2757,757],"./he.json":[5833,833],"./km.json":[7807,807]};function i(A){if(!t.o(n,A))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[A],i=e[0];return t.e(e[1]).then((()=>t(i)))}i.keys=()=>Object.keys(n),i.id=3979,A.exports=i}}]);