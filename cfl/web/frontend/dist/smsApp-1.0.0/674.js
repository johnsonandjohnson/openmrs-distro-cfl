"use strict";(globalThis.webpackChunksmsApp=globalThis.webpackChunksmsApp||[]).push([[674],{2025:(e,n,t)=>{t.d(n,{Ki:()=>f,ql:()=>c,yD:()=>d,yh:()=>y});var r=t(1083);function o(e,n,t,r,o,i,a){try{var l=e[i](a),u=l.value}catch(e){return void t(e)}l.done?n(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function l(e){o(a,r,i,l,u,"next",e)}function u(e){o(a,r,i,l,u,"throw",e)}l(void 0)}))}}function a(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}function l(e){return u.apply(this,arguments)}function u(){return u=i((function(e){var n,t,o=arguments;return a(this,(function(i){switch(i.label){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},t=o.length>2&&void 0!==o[2]?o[2]:new AbortController,[4,(0,r.openmrsFetch)(e,{signal:t.signal,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:return[2,i.sent().data]}}))})),u.apply(this,arguments)}function c(e){return s.apply(this,arguments)}function s(){return(s=i((function(e){return a(this,(function(n){switch(n.label){case 0:return[4,l("/ws/sms/configs",{configs:e})];case 1:return[2,n.sent()]}}))}))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=i((function(e){var n,t;return a(this,(function(o){switch(o.label){case 0:return n=new AbortController,(t=new FormData).append("file",e),[4,(0,r.openmrsFetch)("/ws/sms/templates/import",{signal:n.signal,method:"POST",headers:{},body:t})];case 1:return[2,o.sent()]}}))}))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=i((function(e){return a(this,(function(n){switch(n.label){case 0:return[4,l("/ws/sms/send",e)];case 1:return[2,n.sent()]}}))}))).apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return(b=i((function(e){return a(this,(function(n){switch(n.label){case 0:return[4,l("/ws/sms/configs",e)];case 1:return[2,n.sent()]}}))}))).apply(this,arguments)}},8004:(e,n,t)=>{t.d(n,{U:()=>l});var r=t(1083),o=t(1123),i=t(380);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){var e,n,t,l=(0,o.Ay)("/ws/sms/configs",r.openmrsFetch),u=l.data,c=l.isLoading,s=l.error,f=l.mutate,p=l.isValidating,d=(0,i.useMemo)((function(){return c&&p?[]:u.data.configs.map((function(e){return n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},e),t=null!=(t={isDefaultConfig:u.data.defaultConfigName===e.name})?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t}(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})),n;var n,t}))}),[null==u||null===(e=u.data)||void 0===e?void 0:e.configs,null==u||null===(n=u.data)||void 0===n?void 0:n.defaultConfigName,c,p]);return{providerConfigurations:d,defaultConfig:null==u||null===(t=u.data)||void 0===t?void 0:t.defaultConfigName,isLoadingConfigs:c,isValidatingConfigs:p,mutateConfigs:f,error:s}}},3674:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var r=t(380),o=t.n(r),i=t(3150),a=t(7131),l=t(1083),u=t(8004),c=t(2025);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n,t,r,o,i,a){try{var l=e[i](a),u=l.value}catch(e){return void t(e)}l.done?n(u):Promise.resolve(u).then(r,o)}function p(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){f(i,r,o,a,l,"next",e)}function l(e){f(i,r,o,a,l,"throw",e)}a(void 0)}))}}const d=function(e){var n,t,f=e.closeDeleteModal,d=e.configName,h=(0,i.useTranslation)().t,y=(0,u.U)(),b=y.mutateConfigs,m=y.providerConfigurations,g=(n=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(n,t)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=g[0],w=g[1],O=(0,r.useCallback)(p((function(){var e;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(n){switch(n.label){case 0:return e=m.filter((function(e){return e.name!==d})),w(!0),[4,(0,c.ql)(e).then((function(){b(),f(),(0,l.showSnackbar)({isLowContrast:!0,kind:"success",title:h("configRemoved","Configuration removed")})})).catch((function(e){(0,l.showSnackbar)({isLowContrast:!1,kind:"error",title:h("errorDeletingConfig","Error deleting configuration"),subtitle:null==e?void 0:e.message})}))];case 1:return n.sent(),[2]}}))})),[f,d,b,m,h]);return o().createElement("div",null,o().createElement(a.rQ0,{closeModal:f,title:h("removeConfiguration","Remove configuration")}),o().createElement(a.cwr,null,o().createElement("p",null,h("deleteModalConfirmationText","Are you sure you want to delete this configuration?"))),o().createElement(a.jlY,null,o().createElement(a.$nd,{kind:"secondary",onClick:f},h("cancel","Cancel")),o().createElement(a.$nd,{kind:"danger",onClick:O,disabled:v},v?o().createElement(a.OuH,{description:h("removing","Removing")+"..."}):o().createElement("span",null,h("remove","Remove")))))}}}]);