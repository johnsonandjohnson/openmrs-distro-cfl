(globalThis.webpackChunk_openmrs_esm_cohort_builder_app=globalThis.webpackChunk_openmrs_esm_cohort_builder_app||[]).push([[922],{1739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},1922:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function i(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t),n.d(t,{I18nContext:()=>J,I18nextProvider:()=>ge,Trans:()=>te,TransWithoutContext:()=>W,Translation:()=>de,composeInitialProps:()=>G,date:()=>ve,getDefaults:()=>R,getI18n:()=>L,getInitialProps:()=>Q,initReactI18next:()=>$,number:()=>je,plural:()=>Pe,select:()=>we,selectOrdinal:()=>Se,setDefaults:()=>T,setI18n:()=>A,time:()=>Oe,useSSR:()=>ye,useTranslation:()=>ce,withSSR:()=>he,withTranslation:()=>pe});var c=n(1672),s=n(1739),u=n.n(s),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function p(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(u()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(l),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),t.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var f=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,g=Object.create(null);function y(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(y,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var b={parse:function(e,t){t||(t={}),t.components||(t.components=g);var n,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(f,(function(c,s){if(a){if(c!=="</"+n.name+">")return;a=!1}var u,l="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),g=s+c.length,y=e.charAt(g);if(f){var b=p(c);return i<0?(r.push(b),r):((u=o[i]).children.push(b),r)}if(l&&(i++,"tag"===(n=p(c)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!y||"<"===y||n.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===i&&r.push(n),(u=o[i-1])&&u.children.push(n),o[i]=n),(!l||n.voidElement)&&(i>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(i--,n=-1===i?r:o[i]),!a&&"<"!==y&&y)){u=-1===i?r:o[i].children;var m=e.indexOf("<",g),h=e.slice(g,-1===m?void 0:m);d.test(h)&&(h=" "),(m>-1&&i+u.length>=0||" "!==h)&&u.push({type:"text",content:h})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+y("",t)}),"")}};const m=b;function h(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var v={};function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&v[t[0]]||("string"==typeof t[0]&&(v[t[0]]=new Date),h.apply(void 0,t))}function j(e,t,n){e.loadNamespaces(t,(function(){e.isInitialized?n():e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}))}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)||!t.hasResourceBundle(r,e)&&t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return O("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):w(e,t,n)}function S(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var x=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,E={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},k=function(e){return E[e]};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D,C={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(x,k)}};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C=I(I({},C),e)}function R(){return C}function A(e){D=e}function L(){return D}var U=["format"],z=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function F(e){return e?e.props?e.props.children:e.children:[]}function H(e){return Array.isArray(e)?e:[e]}function V(e,t){if(!e)return"";var n="",o=H(e),i=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return o.forEach((function(e,o){if("string"==typeof e)n+="".concat(e);else if((0,c.isValidElement)(e)){var s=Object.keys(e.props).length,u=i.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)n+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(o,"></").concat(o,">");else if(u&&1===s&&"string"==typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=V(l,t);n+="<".concat(o,">").concat(p,"</").concat(o,">")}else n+="<".concat(o,"></").concat(o,">")}else if(null===e)h("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===r(e)){var f=e.format,d=a(e,U),g=Object.keys(d);if(1===g.length){var y=f?"".concat(g[0],", ").concat(f):g[0];n+="{{".concat(y,"}}")}else h("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else h("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function W(e){var t=e.children,n=e.count,o=e.parent,i=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,y=e.i18n,b=e.t,h=e.shouldUnescape,v=a(e,z),j=y||L();if(!j)return O("You will need to pass in an i18next instance by using i18nextReactModule"),t;var w=b||j.t.bind(j)||function(e){return e};s&&(l.context=s);var P=K(K({},R()),j.options&&j.options.react),S=g||w.ns||j.options&&j.options.defaultNS;S="string"==typeof S?[S]:S||["translation"];var x=f||V(t,P)||P.transEmptyNodeValue||i,E=P.hashTransKey,k=i||(E?E(x):x),N=p?l.interpolation:{interpolation:K(K({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},I=K(K(K(K({},l),{},{count:n},p),N),{},{defaultValue:x,ns:S}),D=function(e,t,n,o,i,a){if(""===t)return[];var s=o.transKeepBasicHtmlNodesFor||[],u=t&&new RegExp(s.join("|")).test(t);if(!e&&!u)return[t];var l={};!function e(t){H(t).forEach((function(t){"string"!=typeof t&&(_(t)?e(F(t)):"object"!==r(t)||(0,c.isValidElement)(t)||Object.assign(l,t))}))}(e);var p=m.parse("<0>".concat(t,"</0>")),f=K(K({},l),i);function d(e,t,n){var r=F(e),o=y(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,c.isValidElement)(e)}))}(r)&&0===o.length?r:o}function g(e,t,n,r,o){e.dummy&&(e.children=t),n.push((0,c.cloneElement)(e,K(K({},e.props),{},{key:r}),o?void 0:t))}function y(t,i,l){var p=H(t);return H(i).reduce((function(t,i,b){var m,h,v,O=i.children&&i.children[0]&&i.children[0].content&&n.services.interpolator.interpolate(i.children[0].content,f,n.language);if("tag"===i.type){var j=p[parseInt(i.name,10)];!j&&1===l.length&&l[0][i.name]&&(j=l[0][i.name]),j||(j={});var w=0!==Object.keys(i.attrs).length?(m={props:i.attrs},(v=K({},h=j)).props=Object.assign(m.props,h.props),v):j,P=(0,c.isValidElement)(w),S=P&&_(i,!0)&&!i.voidElement,x=u&&"object"===r(w)&&w.dummy&&!P,E="object"===r(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof w){var k=n.services.interpolator.interpolate(w,f,n.language);t.push(k)}else if(_(w)||S)g(w,d(w,i,l),t,b);else if(x){var N=y(p,i.children,l);t.push((0,c.cloneElement)(w,K(K({},w.props),{},{key:b}),N))}else if(Number.isNaN(parseFloat(i.name)))if(E)g(w,d(w,i,l),t,b,i.voidElement);else if(o.transSupportBasicHtmlNodes&&s.indexOf(i.name)>-1)if(i.voidElement)t.push((0,c.createElement)(i.name,{key:"".concat(i.name,"-").concat(b)}));else{var I=y(p,i.children,l);t.push((0,c.createElement)(i.name,{key:"".concat(i.name,"-").concat(b)},I))}else if(i.voidElement)t.push("<".concat(i.name," />"));else{var D=y(p,i.children,l);t.push("<".concat(i.name,">").concat(D,"</").concat(i.name,">"))}else if("object"!==r(w)||P)1===i.children.length&&O?t.push((0,c.cloneElement)(w,K(K({},w.props),{},{key:b}),O)):t.push((0,c.cloneElement)(w,K(K({},w.props),{},{key:b})));else{var C=i.children[0]?O:null;C&&t.push(C)}}else if("text"===i.type){var T=o.transWrapTextNodes,R=a?o.unescape(n.services.interpolator.interpolate(i.content,f,n.language)):n.services.interpolator.interpolate(i.content,f,n.language);T?t.push((0,c.createElement)(T,{key:"".concat(i.name,"-").concat(b)},R)):t.push(R)}return t}),[])}return F(y([{dummy:!0,children:e||[]}],p,H(e||[]))[0])}(d||t,k?w(k,I):x,j,P,I,h),C=void 0!==o?o:P.defaultTransParent;return C?(0,c.createElement)(C,v,D):D}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}var $={type:"3rdParty",init:function(e){T(e.options.react),A(e)}};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=(0,c.createContext)(),Z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var t,n;return t=e,(n=[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e){return function(t){return new Promise((function(n){var r=Q();e.getInitialProps?e.getInitialProps(t).then((function(e){n(Y(Y({},e),r))})):n(r)}))}}function Q(){var e=L(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}var X=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,y=e.i18n,b=e.t,m=e.shouldUnescape,h=a(e,X),v=(0,c.useContext)(J)||{},O=v.i18n,j=v.defaultNS,w=y||O||L(),P=b||w&&w.t.bind(w);return W(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:t,count:n,parent:r,i18nKey:o,context:s,tOptions:l,values:p,defaults:f,components:d,ns:g||P&&P.ns||j||w&&w.options&&w.options.defaultNS,i18n:w,t:b,shouldUnescape:m},h))}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e,t){var n=(0,c.useRef)();return(0,c.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,c.useContext)(J)||{},o=r.i18n,i=r.defaultNS,a=n||o||L();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new Z),!a){O("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}a.options.react&&void 0!==a.options.react.wait&&O("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=ie(ie(ie({},R()),a.options.react),t),p=l.useSuspense,f=l.keyPrefix,d=e||i||a.options&&a.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(d);var g=(a.isInitialized||a.initializedStoreOnce)&&d.every((function(e){return P(e,a,l)}));function y(){return a.getFixedT(null,"fallback"===l.nsMode?d:d[0],f)}var b=(0,c.useState)(y),m=re(b,2),h=m[0],v=m[1],w=d.join(),S=ae(w),x=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){x.current&&v(y)}return x.current=!0,g||p||j(a,d,(function(){x.current&&v(y)})),g&&S&&S!==w&&x.current&&v(y),e&&a&&a.on(e,n),t&&a&&a.store.on(t,n),function(){x.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,n)})),t&&a&&t.split(" ").forEach((function(e){return a.store.off(e,n)}))}}),[a,w]);var E=(0,c.useRef)(!0);(0,c.useEffect)((function(){x.current&&!E.current&&v(y),E.current=!1}),[a,f]);var k=[h,a,g];if(k.t=h,k.i18n=a,k.ready=g,g)return k;if(!g&&!p)return k;throw new Promise((function(e){j(a,d,(function(){e()}))}))}var se=["forwardedRef"];function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var o=r.forwardedRef,i=a(r,se),s=re(ce(e,le(le({},i),{},{keyPrefix:t.keyPrefix})),3),u=s[0],l=s[1],p=s[2],f=le(le({},i),{},{t:u,i18n:l,tReady:p});return t.withRef&&o?f.ref=o:!t.withRef&&o&&(f.forwardedRef=o),(0,c.createElement)(n,f)}return r.displayName="withI18nextTranslation(".concat(S(n),")"),r.WrappedComponent=n,t.withRef?(0,c.forwardRef)((function(e,t){return(0,c.createElement)(r,Object.assign({},e,{forwardedRef:t}))})):r}}var fe=["ns","children"];function de(e){var t=e.ns,n=e.children,r=re(ce(t,a(e,fe)),3),o=r[0],i=r[1],c=r[2];return n(o,{i18n:i,lng:i.language},c)}function ge(e){var t=e.i18n,n=e.defaultNS,r=e.children,o=(0,c.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,c.createElement)(J.Provider,{value:o},r)}function ye(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.i18n,o=(0,c.useContext)(J)||{},i=o.i18n,a=r||i||L();a.options&&a.options.isClone||(e&&!a.initializedStoreOnce&&(a.services.resourceStore.data=e,a.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),a.options.ns),a.initializedStoreOnce=!0,a.isInitialized=!0),t&&!a.initializedLanguageOnce&&(a.changeLanguage(t),a.initializedLanguageOnce=!0))}var be=["initialI18nStore","initialLanguage"];function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(){return function(e){function t(t){var n=t.initialI18nStore,r=t.initialLanguage,o=a(t,be);return ye(n,r),(0,c.createElement)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o))}return t.getInitialProps=G(e),t.displayName="withI18nextSSR(".concat(S(e),")"),t.WrappedComponent=e,t}}var ve=function(){return""},Oe=function(){return""},je=function(){return""},we=function(){return""},Pe=function(){return""},Se=function(){return""}}}]);