import{F as u}from"./fgf2dg6l6im1fsb5.js";import{u as f,F as c,a as e}from"./k8qlw5luyf42jeyi.js";import{ab as d,W as m,r as a,v as r}from"./bzvcy3tl84gc3bl9.js";import{i as l}from"./o5egk1m8ftkmbhvq.js";function g(){return(l()?"⌘":"Ctrl")+" K"}function A(){const s=d(),n=f(t=>t.isActive),i=m();return a.useEffect(()=>{s&&u.setCurrentAccount(s)},[s]),a.useEffect(()=>{const t=o=>{o.metaKey&&o.key==="k"&&(n?e.logClose("shortcut"):(e.setSessionId(r()),e.logOpen("shortcut")),c.setIsActive(!n))};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[n]),{openSearch:a.useCallback(()=>{c.setIsActive(!0),e.setSessionId(r()),e.logOpen("button")},[]),searchMsg:i.formatMessage({id:"jmd8WH",defaultMessage:"Search chats"}),shortcutMsg:g()}}export{A as u};
//# sourceMappingURL=gbx5c1elxtqjqkfg.js.map