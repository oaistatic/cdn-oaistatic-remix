import{F as a}from"./c7j661nh9hmy9uyu.js";import{u as l,F as i,a as e}from"./e2eu9xocd5pok326.js";import{Z as y,aR as f,r as o,v as u}from"./g92hdia1euilhv3m.js";function m(){const t=y(),s=l(n=>n.isActive),{value:c}=f("1422501431");return o.useEffect(()=>{t&&(c?a.setCurrentAccountV2(t):a.setCurrentAccount(t),a.init())},[t,c]),o.useEffect(()=>{const n=r=>{r.metaKey&&r.key==="k"&&(s?e.logClose("shortcut"):(e.setSessionId(u()),e.logOpen("shortcut")),i.setIsActive(!s))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]),{openSearch:o.useCallback(()=>{i.setIsActive(!0),e.setSessionId(u()),e.logOpen("button")},[])}}export{m as u};
//# sourceMappingURL=ilksrjuq6sj9ex7c.js.map
