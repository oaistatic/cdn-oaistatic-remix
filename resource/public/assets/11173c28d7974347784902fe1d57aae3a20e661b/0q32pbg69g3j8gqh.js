import{r as d,j as h,ao as f,u as I}from"./nqo5y2f0dorhrqsr.js";import{as as p,fo as u,a$ as m,D as l}from"./dh0yl0m9q337gmci.js";import{A as c}from"./c6ttvc5iok520ou8.js";import{b4 as g}from"./ktiwgucld5a8s55m.js";function A({className:s,onLoad:t,fadeIn:r=!0,...a}){const[e,o]=d.useState(!1);function n(i){o(!0),t?.(i)}return h.jsx("img",{...a,alt:a.alt,onLoad:i=>n(i),className:p(s,"w-fit",r&&"transition-opacity duration-300",e?"opacity-100":"opacity-0")})}function v(s,t){const r=d.useContext(u),{isUnauthenticated:a}=m(),e=r?.serverSharedThreadId;return f({queries:s.map(o=>c.makeQueryOptions({asset:o,sharedThreadId:e,gizmoId:t,isUnauthenticated:a}))})}function w(s,t){const r=d.useContext(u),{isUnauthenticated:a}=m(),e=r?.serverSharedThreadId;return I(c.makeQueryOptions({asset:s,sharedThreadId:e,gizmoId:t,isUnauthenticated:a}))}async function L(s,t,r,a){return await Promise.all(t.map(e=>c.fetch(s,{asset:e,sharedThreadId:r,gizmoId:a}))).catch(e=>{const o=t.map(n=>g(n.asset_pointer));throw l.addError(new Error(`Could not fetch files with IDs ${o}from file service`,{cause:e})),e})}export{A as I,w as a,L as f,v as u};