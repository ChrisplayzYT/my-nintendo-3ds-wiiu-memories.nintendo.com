var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*! For license information please see 3.8ef9c5ca.chunk.js.LICENSE.txt */
(this["webpackJsonpdecade-in-review-frontend"]=this["webpackJsonpdecade-in-review-frontend"]||[]).push([[3],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return p})),n.d(t,"getFCP",(function(){return S})),n.d(t,"getFID",(function(){return F})),n.d(t,"getLCP",(function(){return k})),n.d(t,"getTTFB",(function(){return C}));var i,a,r,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},f=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},d="function"==typeof WeakSet?new WeakSet:new Set,m=function(e,t,n){var i;return function(){t.value>=0&&(n||d.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},p=function(e,t){var n,i=u("CLS",0),a=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},r=c("layout-shift",a);r&&(n=m(e,i,t),f((function(){r.takeRecords().map(a),n()})),s((function(){i=u("CLS",0),n=m(e,i,t)})))},v=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){f((function(e){var t=e.timeStamp;v=t}),!0)},g=function(){return v<0&&(v=l(),h(),s((function(){setTimeout((function(){v=l(),h()}),0)}))),{get timeStamp(){return v}}},S=function(e,t){var n,i=g(),a=u("FCP"),r=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.timeStamp&&(a.value=e.startTime,a.entries.push(e),d.add(a),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",r);(o||f)&&(n=m(e,a,t),o&&r(o),s((function(i){a=u("FCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))})))},y={passive:!0,capture:!0},w=new Date,E=function(e,t){i||(i=t,a=e,r=new Date,b(removeEventListener),L())},L=function(){if(a>=0&&a<r-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(t){t(e)})),o=[]}},T=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){E(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",i,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",i,y)}(t,e):E(t,e)}},b=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,T,y)}))},F=function(e,t){var n,r=g(),p=u("FID"),v=function(e){e.startTime<r.timeStamp&&(p.value=e.processingStart-e.startTime,p.entries.push(e),d.add(p),n())},l=c("first-input",v);n=m(e,p,t),l&&f((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&s((function(){var r;p=u("FID"),n=m(e,p,t),o=[],a=-1,i=null,b(addEventListener),r=v,o.push(r),L()}))},k=function(e,t){var n,i=g(),a=u("LCP"),r=function(e){var t=e.startTime;t<i.timeStamp&&(a.value=t,a.entries.push(e)),n()},o=c("largest-contentful-paint",r);if(o){n=m(e,a,t);var p=function(){d.has(a)||(o.takeRecords().map(r),o.disconnect(),d.add(a),n())};["keydown","click"].forEach((function(e){addEventListener(e,p,{once:!0,capture:!0})})),f(p,!0),s((function(i){a=u("LCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))}))}},C=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}}]);

}
/*
     FILE ARCHIVED ON 16:40:39 Mar 28, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:10:18 Apr 18, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.051
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 44.928
  LoadShardBlock: 141.387 (3)
  PetaboxLoader3.datanode: 118.983 (5)
  PetaboxLoader3.resolve: 1596.598 (3)
  load_resource: 1580.678 (2)
*/