import{r as a,cj as x,bE as f,a6 as i,e_ as h,I as v,aM as w,e$ as y,eE as C}from"./l3hptpare9m1mqfv.js";import{X as S,cm as j,dh as P,Y as W,di as g,b7 as A,dj as L}from"./c7sgref9mfwezh7s.js";import{C as N}from"./41u5zi6mjeqe26vw.js";import{T as M}from"./he20qiwgsftwhtr2.js";import{c as T}from"./dpmpp4vjdzk6xdj4.js";function m(e){return e instanceof HTMLLinkElement&&e.rel==="stylesheet"||e instanceof HTMLStyleElement}function b(e,t){e.head.querySelectorAll("link, style").forEach(o=>{m(o)&&t.head.appendChild(o.cloneNode(!0))});const s=new WeakMap,r=new MutationObserver(o=>{o.forEach(n=>{n.type==="childList"&&(n.addedNodes.forEach(c=>{if(m(c)){const u=t.head.appendChild(c.cloneNode(!0));if(s.set(c,u),c instanceof HTMLStyleElement&&c.dataset.emotion){const{sheet:d}=c,{sheet:l}=u;if(d&&l)for(const E of d.cssRules)l.insertRule(E.cssText)}}}),n.removedNodes.forEach(c=>{const u=s.get(c);u&&t.head.removeChild(u)}))})});return r.observe(e.head,{childList:!0}),()=>{r.disconnect()}}function p(e,t){for(const r of e.attributes)t.setAttribute(r.name,r.value);const s=new MutationObserver(r=>{r.forEach(o=>{if(o.type==="attributes"&&o.attributeName!=null){const n=e.getAttribute(o.attributeName);n==null?t.removeAttribute(o.attributeName):t.setAttribute(o.attributeName,n)}})});return s.observe(e,{attributes:!0}),()=>{s.disconnect()}}const k=e=>{const t=a.useRef(!1);a.useEffect(()=>{t.current||(e(),t.current=!0)},[e])};function q({children:e,target:t="_blank",features:s}){const[r,o]=a.useState(null);return a.useEffect(()=>{const n=window.open("about:blank",t,s);if(!n){x.error("Unable to create child window");return}b(document,n.document),p(document.documentElement,n.document.documentElement),o(n);function c(){n?.close()}return window.addEventListener("unload",c),()=>{window.removeEventListener("unload",c),n.close()}},[]),r&&f.createPortal(i.jsx(h,{window:r,children:e}),r.document.body)}function K({children:e}){const[t,s]=a.useState(null);return k(()=>{let r=!1,o=null;return async function(){const n=await window.documentPictureInPicture?.requestWindow({width:400,height:600});if(n){if(r){n.close();return}o=()=>n.close(),b(document,n.document),p(document.documentElement,n.document.documentElement),s(n)}}(),()=>{r=!0,o?.()}}),t&&f.createPortal(i.jsx(h,{window:t,children:e}),t.document.body)}function H({clientThreadId:e}){const t=C.useStore(),s=w();g({resetThreadAction:()=>t.newThread(!0),clientThreadId:e,focusPromptTextareaAction:()=>s.document.getElementById("prompt-textarea")?.focus()});const r=A();return i.jsxs(i.Fragment,{children:[r?i.jsx(T,{clientThreadId:e,children:i.jsx(N,{hideHeader:!0})}):i.jsx(M,{clientThreadId:e,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},e),i.jsx(L,{clientThreadId:e})]})}function U({clientThreadId:e}){S(e,{kind:v.PrimaryAssistant});const t=w();return a.useEffect(()=>{const s=()=>{t.document.getElementById("prompt-textarea")?.focus()};return t.addEventListener("focus",s),()=>{t.removeEventListener("focus",s)}},[t]),i.jsx(y,{children:i.jsx(j,{children:i.jsx(P,{clientThreadId:e,children:i.jsx(W,{clientThreadId:e,children:i.jsx(H,{clientThreadId:e})})})})})}export{U as C,K as D,q as a};
//# sourceMappingURL=patij4wc2cykm11j.js.map
