import{a4 as D,j as x,r as E,k as f}from"./nqo5y2f0dorhrqsr.js";import{E as p}from"./ktiwgucld5a8s55m.js";import{bl as b,D as a,fr as h}from"./dh0yl0m9q337gmci.js";const u=async e=>{await f.signOut({callbackUrl:e}),h()},l=(e,o)=>{u(e).then(()=>a.addTiming(o?"chatgpt.web.logout.shouldClearIndexedDB":"chatgpt.web.logout.default")).catch(n=>{a.addError(new Error("Failed to logout",{cause:n}))})};function B({federatedLogoutUri:e}){const{value:o}=b("4017530922"),{isFannyPackInitializerEnabled:n}=p();return E.useEffect(()=>{const s=e??window.location.origin;window&&window.indexedDB&&o&&n&&typeof window.indexedDB.databases=="function"?(a.addAction("chatgpt.web.logout.clearIndexedDB"),(async()=>{const w=(await window.indexedDB.databases()).map(t=>new Promise((r,g)=>{if(t.name){const d=window.indexedDB.deleteDatabase(t.name);d.onsuccess=()=>r(),d.onerror=m=>{a.addError(new Error(`Delete IndexedDB failed for database ${t.name}, ${m}`)),g()},d.onblocked=()=>{a.addError(new Error(`Delete IndexedDB blocked for database ${t.name}`)),r()}}else a.addError(new Error(`Invalid database name ${t.name}`)),r()}));await Promise.all(w)})().then(()=>{a.addTiming("chatgpt.web.logout.clearedIndexedDB"),l(s,o)}).catch(i=>{a.addError(new Error("Failed to clear IndexedDB",{cause:i})),l(s,o)})):u(e??window.location.origin).catch(c=>a.addError(new Error("Failed to logout",{cause:c})))},[n,o,e]),null}function F(){const e=D();return x.jsx(B,{...e})}export{F as default};
//# sourceMappingURL=g1dn1aw3mazux1fe.js.map
