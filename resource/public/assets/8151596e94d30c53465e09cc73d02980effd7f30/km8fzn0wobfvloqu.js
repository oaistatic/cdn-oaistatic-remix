import{r as d,m,aC as f,g3 as u,b0 as h,bi as I,t as l,D as p}from"./g92hdia1euilhv3m.js";import{aU as c,aV as g}from"./l912w0bwi7cbhgoi.js";function y({className:s,onLoad:t,fadeIn:r=!0,...a}){const[e,o]=d.useState(!1);function n(i){o(!0),t?.(i)}return m.jsx("img",{...a,alt:a.alt,onLoad:i=>n(i),className:f(s,"w-fit",r&&"transition-opacity duration-300",e?"opacity-100":"opacity-0")})}function T(s,t){const r=d.useContext(u),{isUnauthenticated:a}=h(),e=r?.serverSharedThreadId;return I({queries:s.map(o=>c.makeQueryOptions({asset:o,sharedThreadId:e,gizmoId:t,isUnauthenticated:a}))})}function v(s,t){const r=d.useContext(u),{isUnauthenticated:a}=h(),e=r?.serverSharedThreadId;return l(c.makeQueryOptions({asset:s,sharedThreadId:e,gizmoId:t,isUnauthenticated:a}))}async function w(s,t,r,a){return await Promise.all(t.map(e=>c.fetch(s,{asset:e,sharedThreadId:r,gizmoId:a}))).catch(e=>{const o=t.map(n=>g(n.asset_pointer));throw p.addError(new Error(`Could not fetch files with IDs ${o} from file service`,{cause:e})),e})}export{y as I,v as a,w as f,T as u};
//# sourceMappingURL=km8fzn0wobfvloqu.js.map
