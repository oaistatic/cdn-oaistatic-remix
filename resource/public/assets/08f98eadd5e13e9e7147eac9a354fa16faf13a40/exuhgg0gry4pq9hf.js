import{eq as m,j as x,aA as p,r as E,D as a,bp as b,eT as f}from"./lj2b9v3ilohzzubf.js";import{bk as h}from"./m2xe8hrs3fe8d0zo.js";import"./np8fo7dxv82gt6zv.js";const u=async e=>{await b.signOut({callbackUrl:e}),f()},l=(e,o)=>{u(e).then(()=>a.addTiming(o?"chatgpt.web.logout.shouldClearIndexedDB":"chatgpt.web.logout.default")).catch(n=>{a.addError(new Error("Failed to logout",{cause:n}))})};function B({federatedLogoutUri:e}){const{value:o}=p("4017530922"),{isFannyPackInitializerEnabled:n}=h();return E.useEffect(()=>{const s=e??window.location.origin;window&&window.indexedDB&&o&&n&&typeof window.indexedDB.databases=="function"?(a.addAction("chatgpt.web.logout.clearIndexedDB"),(async()=>{const w=(await window.indexedDB.databases()).map(t=>new Promise((r,g)=>{if(t.name){const d=window.indexedDB.deleteDatabase(t.name);d.onsuccess=()=>r(),d.onerror=D=>{a.addError(new Error(`Delete IndexedDB failed for database ${t.name}, ${D}`)),g()},d.onblocked=()=>{a.addError(new Error(`Delete IndexedDB blocked for database ${t.name}`)),r()}}else a.addError(new Error(`Invalid database name ${t.name}`)),r()}));await Promise.all(w)})().then(()=>{a.addTiming("chatgpt.web.logout.clearedIndexedDB"),l(s,o)}).catch(i=>{a.addError(new Error("Failed to clear IndexedDB",{cause:i})),l(s,o)})):u(e??window.location.origin).catch(c=>a.addError(new Error("Failed to logout",{cause:c})))},[n,o,e]),null}function F(){const e=m();return x.jsx(B,{...e})}export{F as default};
//# sourceMappingURL=exuhgg0gry4pq9hf.js.map
