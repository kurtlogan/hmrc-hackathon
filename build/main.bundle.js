!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setBodyListener=t.stopSpeechText=t.startSpeechText=void 0;var o=a(n(7)),r=a(n(6)),i=a(n(4)),u=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var d=void 0,c=function(e,t,n){return d&&s(),(d=new webkitSpeechRecognition).continuous=t,d.interimResults=n,d.onstart=(0,o.default)(e),d.onerror=(0,i.default)(e),d.onresult=(0,r.default)(e),d.onend=(0,u.default)(e),d.lang="en-GB",d.start(),d},s=function(){d.stop()};t.startSpeechText=c,t.stopSpeechText=s,t.setBodyListener=function(){c(document.body,!0,!0)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={enableSpeechNavigation:!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=void 0,r=void 0,i=!1,u=function(){return r?parseInt(r.style.top):0},a=function(){return r?parseInt(r.style.left):0},d=0,c="right",s=function(){i=!1,d=0,document.body.removeChild(o),document.body.removeChild(r),o=void 0,r=void 0};t.default=function(e){return function(){i||(i=!0,o||((o=document.createElement("div")).innerText="Stare at the red dot, follow it with you eyes until it turns green",o.style.position="fixed",o.style.top="50%",o.style.left="50%",document.body.appendChild(o)),r||((r=document.createElement("div")).style.width="20px",r.style.height="20px",r.style.position="fixed",r.style.left="10px",r.style.top="10px",r.style.backgroundColor="red",r.style.borderRadius="50%",document.body.appendChild(r)),function e(t){return function(){if(d>=4)return r.style.backgroundColor="green",void setTimeout(s,2500);if(r){switch(a()>=window.innerWidth-50&&"right"==c?(c="down",d++):u()>=window.innerHeight-50&&"down"==c?(c="left",d++):a()<=10&&"left"==c?(c="up",d++):u()<=10&&"up"==c&&(c="right",d++),c){case"right":r.style.left=a()+15+"px";break;case"down":r.style.top=u()+15+"px";break;case"left":r.style.left=a()-15+"px";break;case"up":r.style.top=u()-15+"px"}t.recordScreenPosition(a(),u())}setTimeout(e(t),75)}}(e)())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return function(){console.log("ending listener",e),e!=document.body&&(console.log("setup body listener"),(0,o.setBodyListener)())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t=t||{};var n,o,r=e.ownerDocument||e,i=[],u=[],a=function(e){var t=[];return function(n){if(n===e.documentElement)return!1;var o=e.defaultView.getComputedStyle(n);return!!function n(o,r){if(o===e.documentElement)return!1;for(var i=0,u=t.length;i<u;i++)if(t[i][0]===o)return t[i][1];r=r||e.defaultView.getComputedStyle(o);var a=!1;"none"===r.display?a=!0:o.parentNode&&(a=n(o.parentNode));t.push([o,a]);return a}(n,o)||"hidden"===o.visibility}}(r),d=["input","select","a[href]","textarea","button","[tabindex]"],c=e.querySelectorAll(d.join(","));if(t.includeContainer){var s=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;d.some(function(t){return s.call(e,t)})&&(c=Array.prototype.slice.apply(c)).unshift(e)}for(var l=0,f=c.length;l<f;l++)n=c[l],(o=parseInt(n.getAttribute("tabindex"),10)||n.tabIndex)<0||"INPUT"===n.tagName&&"hidden"===n.type||n.disabled||a(n,r)||(0===o?i.push(n):u.push({index:l,tabIndex:o,node:n}));var p=u.sort(function(e,t){return e.tabIndex===t.tabIndex?e.index-t.index:e.tabIndex-t.tabIndex}).map(function(e){return e.node});return Array.prototype.push.apply(p,i),p}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(5),i=(o=r)&&o.__esModule?o:{default:o},u=n(0);var a=-1,d="";t.default=function(e){return function(t){for(var n="",o=t.resultIndex;o<t.results.length;++o)n+=t.results[o][0].transcript;if(e==document.body){var r=n;n=n.replace(d,""),d=r;var i=c.find(function(e){return n.indexOf(e.key)>-1});i&&(console.log(i.key),i.action())}else e.value=n}};var c=[{key:"next",action:function(){var e=(0,i.default)(document.body),t=++a;t>e.length-1&&(a=t=0),e[t].focus()}},{key:"previous",action:function(){var e=(0,i.default)(document.body),t=--a;t<0&&(a=t=e.length-1),e[t].focus()}},{key:"up",action:function(){window.scrollBy(0,-200)}},{key:"down",action:function(){window.scrollBy(0,200)}},{key:"click",action:function(){var e=(0,i.default)(document.body)[a];e&&e.click()}},{key:"edit",action:function(){var e=(0,i.default)(document.body)[a];e&&(e.focus(),e.style.border="1px solid yellow",(0,u.startSpeechText)(e,!1,!0))}},{key:"back",action:function(){return window.history.back()}}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.store_points_var=!1,e.xPast50=new Array(50),e.yPast50=new Array(50),e.store_points_variable=function(){store_points_var=!0},e.stop_storing_points_variable=function(){store_points_var=!1},e.store_points=function(e,t,n){xPast50[n]=e,yPast50[n]=t},e.get_points=function(){var e=new Array(2);return e[0]=xPast50,e[1]=yPast50,e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(8),i=(o=r)&&o.__esModule?o:{default:o};t.default=function(e,t){(0,i.default)(e);var n=document.getElementById("plotting_canvas");if(n){t.setRegression("ridge").setTracker("clmtrackr").setGazeListener(function(e,t){}).begin().removeMouseEventListeners().showPredictionPoints(!0);var o=320,r=240,u=function(){var i=document.getElementById("webgazerVideoFeed");i.style.display="block",i.style.position="fixed",i.style.top="0px",i.style.left="0px",i.width=o,i.height=r,i.style.margin="0px",i.style.background="#222222",t.params.imgWidth=o,t.params.imgHeight=r;var u=document.createElement("canvas");u.id="overlay",u.style.position="fixed",u.width=o,u.height=r,u.style.top="0px",u.style.left="0px",u.style.margin="0px";var a=document.createElement("face_overlay");a.id="faceOverlay",a.style.position="fixed",a.style.top="59px",a.style.left="107px",a.style.border="solid",document.body.appendChild(u),document.body.appendChild(a),n.width=e.innerWidth,n.height=e.innerHeight,n.style.position="fixed";var d=t.getTracker().clm;!function e(){requestAnimFrame(e),u.getContext("2d").clearRect(0,0,o,r),d.getCurrentPosition()&&d.draw(u)}()};setTimeout(function e(){t.isReady()?u():setTimeout(e,100)},100)}}},function(e,t,n){"use strict";var o=a(n(9)),r=n(0),i=a(n(2)),u=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}window.onload=function(){u.default.enableSpeechNavigation?d():c()};var d=function(){(0,r.setBodyListener)()},c=function(){if(void 0===window.webgazer)throw new Error("webgazer not found!");(0,o.default)(window,window.webgazer),document.querySelector("#calibrate")&&document.addEventListener("click",(0,i.default)(window.webgazer));for(var e=document.querySelectorAll("input[type='text'], textarea"),t=function(t){var n=e[t];n.onfocus=function(){(0,r.startSpeechText)(n,!1,!0),n.onblur=function(){return(0,r.stopSpeechText)()}}},n=0;n<e.length;n++)t(n)}}]);
//# sourceMappingURL=main.bundle.js.map