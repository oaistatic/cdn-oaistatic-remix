import{r as d,m,aE as f,g3 as u,bq as h,gb as I,t as p,D as g}from"./dfm2yceao9m2ilo9.js";import{A as c}from"./nq6unafdket6v2d4.js";import{b5 as l}from"./o7wih49jz3zkdcav.js";function T({className:s,onLoad:t,fadeIn:r=!0,...a}){const[e,o]=d.useState(!1);function n(i){o(!0),t?.(i)}return m.jsx("img",{...a,alt:a.alt,onLoad:i=>n(i),className:f(s,"w-fit",r&&"transition-opacity duration-300",e?"opacity-100":"opacity-0")})}function A(s,t){const r=d.useContext(u),{isUnauthenticated:a}=h(),e=r?.serverSharedThreadId;return I({queries:s.map(o=>c.makeQueryOptions({asset:o,sharedThreadId:e,gizmoId:t,isUnauthenticated:a}))})}function v(s,t){const r=d.useContext(u),{isUnauthenticated:a}=h(),e=r?.serverSharedThreadId;return p(c.makeQueryOptions({asset:s,sharedThreadId:e,gizmoId:t,isUnauthenticated:a}))}async function w(s,t,r,a){return await Promise.all(t.map(e=>c.fetch(s,{asset:e,sharedThreadId:r,gizmoId:a}))).catch(e=>{const o=t.map(n=>l(n.asset_pointer));throw g.addError(new Error(`Could not fetch files with IDs ${o} from file service`,{cause:e})),e})}export{T as I,v as a,w as f,A as u};
//# sourceMappingURL=irdsidzglcs4nfrj.js.map
