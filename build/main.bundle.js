!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){for(var n="",r=t.resultIndex;r<t.results.length;++r)n+=t.results[r][0].transcript;e.value=n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stopSpeechText=t.startSpeechText=void 0;var r=i(n(3)),o=i(n(2)),u=i(n(1)),c=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}t.startSpeechText=function(e){var t=new webkitSpeechRecognition;t.continuous=!1,t.interimResults=!0,t.onstart=(0,r.default)(e),t.onerror=(0,u.default)(e),t.onresult=(0,o.default)(e),t.onend=(0,c.default)(e),t.lang="en-GB",t.start()},t.stopSpeechText=function(e){e.stop()}},function(e,t,n){"use strict";var r=n(4);window.onload=function(){if(void 0===window.webgazer)throw new Error("webgazer not found!");webgazer.begin();var e=document.querySelectorAll("input[type='text'], textarea");console.log(e);for(var t=function(t){var n=e[t];console.log(n),n.onfocus=function(){var e=(0,r.startSpeechText)(n);n.onblur=function(){return(0,r.stopSpeechText)(e)}}},n=0;n<e.length;n++)t(n)}}]);
//# sourceMappingURL=main.bundle.js.map