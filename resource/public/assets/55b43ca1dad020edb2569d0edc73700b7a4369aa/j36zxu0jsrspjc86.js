import{bR as s,bS as a}from"./jg63sxiyqeyvfv9f.js";import{B as u}from"./eh26o1l35t2fnjj4.js";function c(r){const i="=".repeat((4-r.length%4)%4),o=(r+i).replace(/-/g,"+").replace(/_/g,"/"),e=window.atob(o),t=new Uint8Array(e.length);for(let n=0;n<e.length;++n)t[n]=e.charCodeAt(n);return t}async function p(){if(typeof window>"u"||typeof navigator>"u")throw new Error("Push registration not supported in SSR");if(!("serviceWorker"in navigator&&"PushManager"in window))throw new Error("Push registration not supported");return await(await navigator.serviceWorker.register("/service-worker/events.js")).pushManager.getSubscription()}async function g(){if(typeof window>"u")return!1;const r="serviceWorker"in navigator,i="Notification"in window;return r&&i}async function f(){try{if(await p())return!0}catch{}return!1}async function h(){if(typeof window>"u"||typeof navigator>"u")throw new Error("Push registration not supported in SSR");if(!("serviceWorker"in navigator&&"PushManager"in window))throw new Error("Push registration not supported");const r=u("BElP4rBIs6aV_3Ic7Fl2rBw_a27isvPyMl_W4WwtlqsiehOYFYnwE21byf9bvFGEwWL8-k-zjZfGCG8HHKGW7OQ"),i=c(r),t=(await(await navigator.serviceWorker.register("/service-worker/events.js")).pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:i})).toJSON();if(t.keys===void 0)throw new Error("Subscription keys are undefined");if(t.endpoint===void 0)throw new Error("Subscription endpoint is undefined");return s.logSystemSuccess(),s.logRegistration(),a.getOrCreateSubscription({endpoint:t.endpoint,p256dh:t.keys.p256dh,auth:t.keys.auth})}export{f as a,h as c,g};
//# sourceMappingURL=j36zxu0jsrspjc86.js.map