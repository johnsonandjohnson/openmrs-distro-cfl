"use strict";(globalThis.webpackChunk_openmrs_esm_patient_banner_app=globalThis.webpackChunk_openmrs_esm_patient_banner_app||[]).push([[147],{3093:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(272),a=i.n(n),s=i(2609),l=i.n(s)()(a());l.push([t.id,".-esm-patient-banner__visit-tag__tooltipBox___nDNJr{padding:.25rem}.-esm-patient-banner__visit-tag__tooltipSmallText___j8IkG{font-size:80%}.-esm-patient-banner__visit-tag__heading___qb9Oa{margin-bottom:.5rem}.-esm-patient-banner__visit-tag__definitionToolTip___ojXaY>button{border-bottom:none}","",{version:3,sources:["webpack://./src/banner-tags/visit-tag.scss"],names:[],mappings:"AAAA,oDACE,cAAA,CAGF,0DACE,aAAA,CAGF,iDACE,mBAAA,CAIA,kEACE,kBAAA",sourceRoot:""}]),l.locals={tooltipBox:"-esm-patient-banner__visit-tag__tooltipBox___nDNJr",tooltipSmallText:"-esm-patient-banner__visit-tag__tooltipSmallText___j8IkG",heading:"-esm-patient-banner__visit-tag__heading___qb9Oa",definitionToolTip:"-esm-patient-banner__visit-tag__definitionToolTip___ojXaY"};const o=l},1147:(t,e,i)=>{i.r(e),i.d(e,{default:()=>C});var n=i(268),a=i.n(n),s=i(4924),l=i(4422),o=i(2870),_=i(4556),r=i(1354),m=i.n(r),p=i(1583),c=i.n(p),d=i(7378),v=i.n(d),A=i(5993),b=i.n(A),u=i(4154),g=i.n(u),T=i(8141),E=i.n(T),h=i(3093),f={};f.styleTagTransform=E(),f.setAttributes=b(),f.insert=v().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=g(),m()(h.Z,f);const V=h.Z&&h.Z.locals?h.Z.locals:void 0;var k=function(t){var e,i=t.activeVisit,n=(0,s.useTranslation)().t;return a().createElement(l.PTL,{align:"bottom"},a().createElement(l.WBZ,{label:n("activeVisit","Active Visit")},a().createElement(l.Vp9,{type:"blue"},n("activeVisit","Active Visit"))),a().createElement(l.Uwv,null,a().createElement("div",{role:"tooltip"},a().createElement("h6",{className:V.heading},null==i||null===(e=i.visitType)||void 0===e?void 0:e.display),a().createElement("span",null,a().createElement("span",{className:V.tooltipSmallText},n("started","Started"),": "),a().createElement("span",null,(0,o.formatDatetime)((0,o.parseDate)(null==i?void 0:i.startDatetime),{mode:"wide"}))))))};const C=function(t){var e=t.patientUuid,i=t.patient,n=(0,_.useVisitOrOfflineVisit)(e).activeVisit,s=!i.deceasedDateTime;return n&&s?a().createElement(k,{activeVisit:n}):null}}}]);