import{F as a}from"./bb879dawx0xebm64.js";import{u as p,F as i,a as t}from"./llwp8h6qvrwx9cn5.js";import{a5 as f,b$ as d}from"./eh26o1l35t2fnjj4.js";import{ch as y}from"./jg63sxiyqeyvfv9f.js";import{r as o,v as c}from"./i8w88cc8b3gds516.js";function m(e){return(y()?e.metaKey:e.ctrlKey)&&e.key==="k"}function w(){const e=f(),s=p(n=>n.isActive),{value:r}=d("1422501431");return o.useEffect(()=>{e&&(r?a.setCurrentAccountV2(e):a.setCurrentAccount(e),a.init())},[e,r]),o.useEffect(()=>{const n=u=>{m(u)&&(s?t.logClose("shortcut"):(t.setSessionId(c()),t.logOpen("shortcut")),i.setIsActive(!s))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]),{openSearch:o.useCallback(()=>{i.setIsActive(!0),t.setSessionId(c()),t.logOpen("button")},[])}}export{w as u};
//# sourceMappingURL=ktx1rwus81sbm9r6.js.map
