import{fE as m,m as x,bi as E,r as f,D as a,ch as h,g6 as p}from"./dfm2yceao9m2ilo9.js";import{w as b}from"./o7wih49jz3zkdcav.js";const u=async e=>{await h.signOut({callbackUrl:e}),p()},l=(e,o)=>{u(e).then(()=>a.addTiming(o?"chatgpt.web.logout.shouldClearIndexedDB":"chatgpt.web.logout.default")).catch(n=>{a.addError(new Error("Failed to logout",{cause:n}))})};function B({federatedLogoutUri:e}){const{value:o}=E("4017530922"),{isFannyPackInitializerEnabled:n}=b();return f.useEffect(()=>{const s=e??window.location.origin;window&&window.indexedDB&&o&&n&&typeof window.indexedDB.databases=="function"?(a.addAction("chatgpt.web.logout.clearIndexedDB"),(async()=>{const w=(await window.indexedDB.databases()).map(t=>new Promise((r,g)=>{if(t.name){const d=window.indexedDB.deleteDatabase(t.name);d.onsuccess=()=>r(),d.onerror=D=>{a.addError(new Error(`Delete IndexedDB failed for database ${t.name}, ${D}`)),g()},d.onblocked=()=>{a.addError(new Error(`Delete IndexedDB blocked for database ${t.name}`)),r()}}else a.addError(new Error(`Invalid database name ${t.name}`)),r()}));await Promise.all(w)})().then(()=>{a.addTiming("chatgpt.web.logout.clearedIndexedDB"),l(s,o)}).catch(i=>{a.addError(new Error("Failed to clear IndexedDB",{cause:i})),l(s,o)})):u(e??window.location.origin).catch(c=>a.addError(new Error("Failed to logout",{cause:c})))},[n,o,e]),null}function y(){const e=m();return x.jsx(B,{...e})}export{y as default};
//# sourceMappingURL=fnb2swuyxk7c27gm.js.map
