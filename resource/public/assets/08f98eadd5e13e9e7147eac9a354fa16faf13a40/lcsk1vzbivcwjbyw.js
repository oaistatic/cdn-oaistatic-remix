import{r as a,cp as E,bs as m,j as i,fe as h,C as v,aH as w,ff as C,eU as y}from"./lj2b9v3ilohzzubf.js";import{Y as S,di as g,dj as j,Z as P,dk as W,dl as A,b0 as L,bR as N,dm as M}from"./m2xe8hrs3fe8d0zo.js";import{C as T}from"./bhbrwbqgjt2pxoro.js";import{T as k}from"./h2vwtx24g9nva0dp.js";function f(e){return e instanceof HTMLLinkElement&&e.rel==="stylesheet"||e instanceof HTMLStyleElement}function b(e,t){e.head.querySelectorAll("link, style").forEach(r=>{f(r)&&t.head.appendChild(r.cloneNode(!0))});const s=new WeakMap,o=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&(n.addedNodes.forEach(c=>{if(f(c)){const u=t.head.appendChild(c.cloneNode(!0));if(s.set(c,u),c instanceof HTMLStyleElement&&c.dataset.emotion){const{sheet:d}=c,{sheet:l}=u;if(d&&l)for(const x of d.cssRules)l.insertRule(x.cssText)}}}),n.removedNodes.forEach(c=>{const u=s.get(c);u&&t.head.removeChild(u)}))})});return o.observe(e.head,{childList:!0}),()=>{o.disconnect()}}function p(e,t){for(const o of e.attributes)t.setAttribute(o.name,o.value);const s=new MutationObserver(o=>{o.forEach(r=>{if(r.type==="attributes"&&r.attributeName!=null){const n=e.getAttribute(r.attributeName);n==null?t.removeAttribute(r.attributeName):t.setAttribute(r.attributeName,n)}})});return s.observe(e,{attributes:!0}),()=>{s.disconnect()}}const H=e=>{const t=a.useRef(!1);a.useEffect(()=>{t.current||(e(),t.current=!0)},[e])};function U({children:e,target:t="_blank",features:s}){const[o,r]=a.useState(null);return a.useEffect(()=>{const n=window.open("about:blank",t,s);if(!n){E.error("Unable to create child window");return}b(document,n.document),p(document.documentElement,n.document.documentElement),r(n);function c(){n?.close()}return window.addEventListener("unload",c),()=>{window.removeEventListener("unload",c),n.close()}},[]),o&&m.createPortal(i.jsx(h,{window:o,children:e}),o.document.body)}function q({children:e}){const[t,s]=a.useState(null);return H(()=>{let o=!1,r=null;return async function(){const n=await window.documentPictureInPicture?.requestWindow({width:400,height:600});if(n){if(o){n.close();return}r=()=>n.close(),b(document,n.document),p(document.documentElement,n.document.documentElement),s(n)}}(),()=>{o=!0,r?.()}}),t&&m.createPortal(i.jsx(h,{window:t,children:e}),t.document.body)}function R({clientThreadId:e}){const t=y.useStore(),s=w();W({clientThreadId:e}),A({resetThreadAction:()=>t.newThread(!0),clientThreadId:e,focusPromptTextareaAction:()=>s.document.getElementById("prompt-textarea")?.focus()});const o=L(),r=a.useCallback(n=>{t.setThreadId(n,!0)},[t]);return i.jsxs(i.Fragment,{children:[o?i.jsx(N,{clientThreadId:e,setClientThreadId:r,children:i.jsx(T,{hideHeader:!0})}):i.jsx(k,{clientThreadId:e,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},e),i.jsx(M,{clientThreadId:e})]})}function K({clientThreadId:e}){S(e,{kind:v.PrimaryAssistant});const t=w();return a.useEffect(()=>{const s=()=>{t.document.getElementById("prompt-textarea")?.focus()};return t.addEventListener("focus",s),()=>{t.removeEventListener("focus",s)}},[t]),i.jsx(C,{children:i.jsx(g,{children:i.jsx(j,{clientThreadId:e,children:i.jsx(P,{clientThreadId:e,children:i.jsx(R,{clientThreadId:e})})})})})}export{K as C,q as D,U as a};
//# sourceMappingURL=lcsk1vzbivcwjbyw.js.map
