"use strict";(globalThis.webpackChunk_openmrs_esm_patient_attachments_app=globalThis.webpackChunk_openmrs_esm_patient_attachments_app||[]).push([[621],{8481:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var r=n(7900),a=n.n(r),l=n(4924),o=n(8533),i=n(2870);const c=n.p+"045a09b368217ba3.svg";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const u=function(t){var e,n,u=t.initialState,m=t.onCapturePhoto,p=(0,l.useTranslation)().t,f=(e=(0,r.useState)(null),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(l.push(r.value),!e||l.length!==e);o=!0);}catch(t){i=!0,a=t}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=f[0],h=f[1],y=(0,r.useCallback)((function(){var t=(0,i.showModal)("capture-photo-modal",{saveFile:function(e){h(e),m(e,(0,i.toOmrsIsoString)(new Date)),t()},collectDescription:!1,closeModal:function(){t()},cameraOnly:!0})}),[m]);return a().createElement("div",{style:{display:"flex",alignItems:"center"}},a().createElement("div",{style:{maxWidth:"64px"}},a().createElement("img",{src:d||u||c,alt:"Preview",style:{width:"100%"}})),a().createElement(o.zxk,{kind:"ghost",onClick:y,style:{flex:1}},u?p("changeImage","Change image"):p("addImage","Add image +")))}}}]);