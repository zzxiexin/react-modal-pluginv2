/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={788:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,u){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==u&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=u),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},327:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),u="/*# ".concat(o," */"),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([u]).join("\n")}return[t].join("\n")}},488:(e,t)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function A(){}function _(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==n(e)&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},A.prototype=b.prototype;var g=_.prototype=new A;g.constructor=_,v(g,b.prototype),g.isPureReactComponent=!0;var S=Array.isArray,x=Object.prototype.hasOwnProperty,E={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,u={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,o)&&!C.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:a,ref:c,props:u,_owner:E.current}}function R(e){return"object"===n(e)&&null!==e&&e.$$typeof===r}var j=/\/+/g;function k(e,t){return"object"===n(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,u,a,c){var i=n(e);"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case o:s=!0}}if(s)return c=c(s=e),e=""===a?"."+k(s,0):a,S(c)?(u="",null!=e&&(u=e.replace(j,"$&/")+"/"),$(c,t,u,"",(function(e){return e}))):null!=c&&(R(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,u+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(j,"$&/")+"/")+e)),t.push(c)),1;if(s=0,a=""===a?".":a+":",S(e))for(var l=0;l<e.length;l++){var f=a+k(i=e[l],l);s+=$(i,t,u,f,c)}else if(f=function(e){return null===e||"object"!==n(e)?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(i=e.next()).done;)s+=$(i=i.value,t,u,f=a+k(i,l++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null},M={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:T,ReactCurrentOwner:E};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=u,t.Profiler=c,t.PureComponent=_,t.StrictMode=a,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=v({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=E.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)x.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:u,ref:a,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},684:(e,t,n)=>{e.exports=n(488)},631:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(327),o=n.n(r),u=n(788),a=n.n(u)()(o());a.push([e.id,".card {\n  border: 1px solid #eee;\n  border-radius: 4px;\n  padding: 20px 20px;\n}\n.card .title {\n  min-height: 100px;\n  border-bottom: 1px solid #eee;\n  font-size: 20px;\n  font-weight: bold;\n}\n.card .content {\n  min-height: 100px;\n  font-size: 16px;\n  padding: 10px 0;\n}\n","",{version:3,sources:["webpack://./src/components/MessageCard/index.less"],names:[],mappings:"AAAA;EACI,sBAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AAJA;EAKQ,gBAAA;EACA,6BAAA;EACA,eAAA;EACA,iBAAA;AAER;AAVA;EAWQ,iBAAA;EACA,eAAA;EACA,eAAA;AAER",sourcesContent:[".card {\n    border: 1px solid #eee;\n    border-radius: 4px;\n    padding: 20px 20px;\n    .title {\n        min-height: 50px;\n        border-bottom: 1px solid #eee;\n        font-size: 20px;\n        font-weight: bold;\n    }\n    .content {\n        min-height: 100px;\n        font-size: 16px;\n        padding: 10px 0;\n    }\n}\n"],sourceRoot:""}]);const c=a},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var u={},a=[],c=0;c<e.length;c++){var i=e[c],s=r.base?i[0]+r.base:i[0],l=u[s]||0,f="".concat(s," ").concat(l);u[s]=l+1;var p=n(f),d={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var y=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:y,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var u=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<u.length;a++){var c=n(u[a]);t[c].references--}for(var i=r(e,o),s=0;s<u.length;s++){var l=n(u[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}u=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var u=n.sourceMap;u&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={id:r,exports:{}};return e[r](u,u.exports,n),u.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};(()=>{n.r(r),n.d(r,{default:()=>h});var e=n(684),t=n(379),o=n.n(t),u=n(795),a=n.n(u),c=n(569),i=n.n(c),s=n(565),l=n.n(s),f=n(216),p=n.n(f),d=n(589),y=n.n(d),m=n(631),v={};v.styleTagTransform=y(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p();o()(m.Z,v);m.Z&&m.Z.locals&&m.Z.locals;const h=function(t){var n=t.title,r=t.content;return e.createElement("div",{className:"card"},e.createElement("div",{className:"title"},n),e.createElement("div",{className:"content"},r))}})(),module.exports=r})();
//# sourceMappingURL=index.js.map