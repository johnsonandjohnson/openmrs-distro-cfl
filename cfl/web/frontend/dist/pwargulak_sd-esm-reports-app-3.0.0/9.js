"use strict";(globalThis.webpackChunk_pwargulak_sd_esm_reports_app=globalThis.webpackChunk_pwargulak_sd_esm_reports_app||[]).push([[9],{2009:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(1672),l=r.n(n),o=r(2246),c=r(3397),u=r(1595),a=r(1132),i=r(9734);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r,n,l,o,c){try{var u=e[o](c),a=u.value}catch(e){return void r(e)}u.done?t(a):Promise.resolve(a).then(n,l)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,l){var o=e.apply(t,r);function c(e){d(o,n,l,c,u,"next",e)}function u(e){d(o,n,l,c,u,"throw",e)}c(void 0)}))}}const f=function(e){var t,r,d=e.closeModal,f=e.reportRequestUuid,h=e.modalType,y=(0,c.useTranslation)().t,g=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{c||null==r.return||r.return()}finally{if(u)throw l}}return o}}(t,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=g[0],b=g[1],m=(0,n.useCallback)(p((function(){return function(e,t){var r,n,l,o,c={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(l=2&o[0]?n.return:o[0]?n.throw||((l=n.return)&&l.call(n),0):n.next)&&!(l=l.call(n,o[1])).done)return l;switch(n=0,l&&(o=[2&o[0],l.value]),o[0]){case 0:case 1:l=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((l=(l=c.trys).length>0&&l[l.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){c.label=o[1];break}if(6===o[0]&&c.label<l[1]){c.label=l[1],l=o;break}if(l&&c.label<l[2]){c.label=l[2],c.ops.push(o);break}l[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],n=0}finally{r=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,(function(e){return b(!0),(0,u.TN)(f).then((function(){w(h),d(),(0,a.showToast)({critical:!0,kind:"success",title:k(h),description:E(h)})})).catch((function(e){(0,a.showToast)({critical:!0,kind:"error",title:k(h),description:S(h)})})),[2]}))})),[d]),w=function(e){var t="/ws/rest/v1/reportingrest/reportRequest?statusesGroup=";"delete"===e?(0,i.JG)(t+"ran"):"cancel"===e?((0,i.JG)(t+"ran"),(0,i.JG)(t+"processing")):"schedule"===e&&(0,i.JG)(t+"scheduled&sortBy=name")},k=function(e){return"delete"===e?y("deleteReport","Delete report"):"cancel"===e?y("cancelReport","Cancel report"):"schedule"===e?y("scheduleReport","Schedule report"):void 0},E=function(e){return"delete"===e?y("reportDeletedSuccessfully","Report deleted successfully"):"cancel"===e?y("reportCancelledSuccessfully","Report cancelled successfully"):"schedule"===e?y("reportScheduleDeletedSuccessfully","Report schedule deleted successfully"):void 0},S=function(e){return"delete"===e?y("reportDeletingErrorMsg","Error during report deleting"):"cancel"===e?y("reportCancelingErrorMsg","Error during report canceling"):"schedule"===e?y("reportScheduleDeletingErrorMsg","Error during report schedule deleting"):void 0};return l().createElement("div",null,l().createElement(o.xBx,{closeModal:d,title:k(h)}),l().createElement(o.fef,null,l().createElement("p",null,function(e){return"delete"===e?y("deleteReportModalText","Are you sure you want to delete this report?"):"cancel"===e?y("cancelReportModalText","Are you sure you want to cancel this report?"):"schedule"===e?y("deleteReportScheduleModalText","Are you sure you want to delete this schedule?"):void 0}(h))),l().createElement(o.mzw,null,l().createElement(o.zxk,{kind:"secondary",onClick:d},y("no","No")),l().createElement(o.zxk,{kind:"danger",onClick:m,disabled:v},v?l().createElement(o.lSo,{description:function(e){return"delete"===e||"schedule"===e?y("deleting","Deleting"):"cancel"===e?y("canceling","Canceling"):void 0}(h)+"..."}):l().createElement("span",null,y("yes","Yes")))))}}}]);