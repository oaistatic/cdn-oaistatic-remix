import{r as d,j as h,am as f,u as p}from"./lklglvrzltpv3f05.js";import{aw as I,fp as u,b2 as m,D as l}from"./muemwvh3ybsggbb1.js";import{A as c}from"./fjuwhhig9g0xhokn.js";import{ba as g}from"./cp734xu9t8fnlezn.js";function w({className:s,onLoad:t,fadeIn:r=!0,...a}){const[e,o]=d.useState(!1);function n(i){o(!0),t?.(i)}return h.jsx("img",{...a,alt:a.alt,onLoad:i=>n(i),className:I(s,"w-fit",r&&"transition-opacity duration-300",e?"opacity-100":"opacity-0")})}function A(s,t){const r=d.useContext(u),{isUnauthenticated:a}=m(),e=r?.serverSharedThreadId;return f({queries:s.map(o=>c.makeQueryOptions({asset:o,sharedThreadId:e,gizmoId:t,isUnauthenticated:a}))})}function v(s,t){const r=d.useContext(u),{isUnauthenticated:a}=m(),e=r?.serverSharedThreadId;return p(c.makeQueryOptions({asset:s,sharedThreadId:e,gizmoId:t,isUnauthenticated:a}))}async function L(s,t,r,a){return await Promise.all(t.map(e=>c.fetch(s,{asset:e,sharedThreadId:r,gizmoId:a}))).catch(e=>{const o=t.map(n=>g(n.asset_pointer));throw l.addError(new Error(`Could not fetch files with IDs ${o} from file service`,{cause:e})),e})}export{w as I,v as a,L as f,A as u};
//# sourceMappingURL=knmpwptd3ukv8lhn.js.map
