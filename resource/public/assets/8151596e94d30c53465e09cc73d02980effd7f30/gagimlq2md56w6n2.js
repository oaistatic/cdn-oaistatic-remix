import{fA as D,m as x,aR as p,r as E,D as a,c1 as f,g6 as h}from"./g92hdia1euilhv3m.js";import{aQ as b}from"./l912w0bwi7cbhgoi.js";import"./j9bb93dkfix5hp9e.js";const u=async e=>{await f.signOut({callbackUrl:e}),h()},l=(e,o)=>{u(e).then(()=>a.addTiming(o?"chatgpt.web.logout.shouldClearIndexedDB":"chatgpt.web.logout.default")).catch(n=>{a.addError(new Error("Failed to logout",{cause:n}))})};function B({federatedLogoutUri:e}){const{value:o}=p("4017530922"),{isFannyPackInitializerEnabled:n}=b();return E.useEffect(()=>{const s=e??window.location.origin;window&&window.indexedDB&&o&&n&&typeof window.indexedDB.databases=="function"?(a.addAction("chatgpt.web.logout.clearIndexedDB"),(async()=>{const w=(await window.indexedDB.databases()).map(t=>new Promise((r,g)=>{if(t.name){const d=window.indexedDB.deleteDatabase(t.name);d.onsuccess=()=>r(),d.onerror=m=>{a.addError(new Error(`Delete IndexedDB failed for database ${t.name}, ${m}`)),g()},d.onblocked=()=>{a.addError(new Error(`Delete IndexedDB blocked for database ${t.name}`)),r()}}else a.addError(new Error(`Invalid database name ${t.name}`)),r()}));await Promise.all(w)})().then(()=>{a.addTiming("chatgpt.web.logout.clearedIndexedDB"),l(s,o)}).catch(i=>{a.addError(new Error("Failed to clear IndexedDB",{cause:i})),l(s,o)})):u(e??window.location.origin).catch(c=>a.addError(new Error("Failed to logout",{cause:c})))},[n,o,e]),null}function F(){const e=D();return x.jsx(B,{...e})}export{F as default};
//# sourceMappingURL=gagimlq2md56w6n2.js.map
