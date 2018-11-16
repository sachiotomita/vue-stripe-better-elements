!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-stripe-better-elements",[],t):"object"==typeof exports?exports["vue-stripe-better-elements"]=t():e["vue-stripe-better-elements"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){var n=l.get(e,t)||{instance:null,type:e,key:t,elements:null,element:null};return"object"===(void 0===t?"undefined":s(t))&&"function"==typeof t.elements&&(n.instance=t),void 0===window.Stripe&&null===n.instance?console.error("Stripe V3 library not loaded!"):null===n.instance&&(n.instance=window.Stripe(t)),n.instance.elements||console.error("Stripe V3 library not loaded!"),n}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o(e,t),u=i.instance.elements(r);return r.style=Object.assign(f,r.style||{}),i=Object.assign({},i,{elements:u,element:u.create(e,n),createToken:function(e){return i.instance.createToken(i.element,e)},createSource:function(e){return i.instance.createSource(i.element,e)},retrieveSource:function(e){return i.instance.retrieveSource(e)}}),l.components.push(i),i}function u(e,t){var n=l.components.findIndex(function(n){return n.type===e&&n.key===t});n>-1&&(l.components=[].concat(r(l.components.slice(0,n)),r(l.components.slice(n+1))))}function c(){l.components={}}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.create=i,t.destroy=u,t.destroyAll=c;var l=t.Stripe={components:[],get:function(e,t){return this.components.find(function(n){return n.type===e&&n.key===t})}},f=t.baseStyle={base:{color:"#32325d",lineHeight:"24px",fontFamily:"Roboto",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},function(e,t,n){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n}),e.exports=Object.assign},function(e,t,n){var r=n(6)(n(3),n(7),null,null);r.options.__file="d:\\Dev\\oss\\vue-stripe-better-elements\\src\\StripeElement.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] StripeElement.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(0);t.default={props:o.default,beforeMount:function(){var e=this;this.elements=(0,i.create)(this.type,this.stripe,this.options),this.element=this.elements.element,this.element.on("blur",function(){return e.$emit("blur")}),this.element.on("focus",function(){return e.$emit("focus")}),this.element.on("change",function(t){return e.$emit("change",t)})},beforeDestroy:function(){this.element.unmount(),this.element.destroy(),(0,i.destroy)(this.type,this.stripe)},mounted:function(){var e=document.createElement("div");this.element.mount(e),this.$el.prepend(e)},methods:{blur:function(){this.element.blur()},clear:function(){this.element.clear()},focus:function(){this.element.focus()},update:function(e){this.element.update(e)}}}},function(e,t,n){"use strict";n(1);var r=n(0),o=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(o);e.exports={StripeElement:i.default,baseStyle:r.baseStyle,get Stripe(){return r.Stripe},get instance(){return r.Stripe.instance},get components(){return r.Stripe.components},get get(){return r.Stripe.get}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={type:{type:String,required:!0,validator:function(e){return["card","iban","postalCode","cardNumber","cardExpiry","cardCvc"].map(function(e){return e.toLowerCase()}).indexOf(e.toLowerCase())>-1}},stripe:{type:[String,Object],required:!0},value:{type:String,required:!1},options:{type:Object,required:!1,default:function(){return{}}},stripeOptions:{type:Object,required:!1,default:function(){return{}}}}},function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,i=e.default);var c="function"==typeof i?i.options:i;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),r){var s=c.computed||(c.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:o,exports:i,options:c}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._t("default",null,{element:e.element,elements:e.elements})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0}])});