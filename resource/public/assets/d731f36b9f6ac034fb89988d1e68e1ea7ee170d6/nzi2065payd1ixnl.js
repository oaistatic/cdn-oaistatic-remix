import{a2 as m,X as d,r as a,j as o,e as c,M as r}from"./lklglvrzltpv3f05.js";import{C as g}from"./baul3gxtizoqhck4.js";import{G as p}from"./btkoqt4hbdc97fvt.js";import{qt as u,aS as f,b1 as h}from"./mc2tj3xhtcshtn61.js";import{G as z}from"./ia3bxqi6sme14xzy.js";import{G as l}from"./m696hw25rik7ksec.js";import{G as x}from"./g4x8rasqyp2tikt9.js";import{o as G,dm as y,dn as j}from"./i7de8yvdg4jlu6h0.js";function M(e){const t=u(e.gizmo.display.name);return t==null?[]:[{title:t},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:t},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function b(){const e=m(),{gizmoId:t}=d();switch(e.kind){case"anon_gizmo":return o.jsx(p,{gizmo:e.gizmo},t);case"chat_page":return a.createElement(_,{...e,key:t,gizmoId:t})}}function _(e){const{data:t,error:i}=f(e.gizmoId),s=G()?.canInteractWithGizmos(),n=c();return a.useEffect(()=>{t==null&&i!=null&&n(y(j.GIZMO_NOT_FOUND))},[n,t,i]),i!=null&&s?o.jsx(E,{}):s===!1?o.jsx(v,{gizmo:t}):a.createElement(g,{...e,key:e.gizmoId})}function E(){return o.jsx(l,{children:o.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[o.jsx("div",{className:"font-bold",children:o.jsx(r,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),o.jsx(r,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:e}){const t=c();return o.jsx(l,{children:o.jsx(z,{gizmo:e,children:o.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[o.jsx(x,{onClick:()=>h(t,"Gizmo page upsell button"),children:o.jsx(r,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),o.jsx("div",{className:"text-sm text-token-text-tertiary",children:o.jsx(r,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const F=({data:e,matches:t})=>e?.kind==="anon_gizmo"?M(e.gizmo):t.flatMap(i=>i.meta??[]);export{b as G,_ as a,F as m};
//# sourceMappingURL=nzi2065payd1ixnl.js.map