import{F as a}from"./js41jyetsc1vb43t.js";import{u as l,F as r,a as e}from"./jyaupvbot5bn9tgt.js";import{a5 as y,bi as f,r as o,v as u}from"./dfm2yceao9m2ilo9.js";function m(){const t=y(),s=l(n=>n.isActive),{value:c}=f("1422501431");return o.useEffect(()=>{t&&(c?a.setCurrentAccountV2(t):a.setCurrentAccount(t),a.init())},[t,c]),o.useEffect(()=>{const n=i=>{i.metaKey&&i.key==="k"&&(s?e.logClose("shortcut"):(e.setSessionId(u()),e.logOpen("shortcut")),r.setIsActive(!s))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]),{openSearch:o.useCallback(()=>{r.setIsActive(!0),e.setSessionId(u()),e.logOpen("button")},[])}}export{m as u};
//# sourceMappingURL=lal9iru3wpb60yfl.js.map