import{a2 as c,X as d,r as a,j as o,e as l,M as r}from"./i8w88cc8b3gds516.js";import{C as g}from"./hpxbzla0waowfzey.js";import{G as u}from"./ks978xypam3896ia.js";import{G as p}from"./gwp5e6wxf55yxdnx.js";import{r2 as f,bk as h,bt as z}from"./jg63sxiyqeyvfv9f.js";import{G as x}from"./hlm6hsp0qis3d7zg.js";import{G as m}from"./i4747znwwuhacfc2.js";import{a5 as G,dJ as y,dK as j}from"./eh26o1l35t2fnjj4.js";function M(e){const t=f(e.gizmo.display.name);return t==null?[]:[{title:t},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:t},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function w(){const e=c(),{gizmoId:t}=d();switch(e.kind){case"anon_gizmo":return o.jsx(p,{gizmo:e.gizmo},t);case"chat_page":return a.createElement(_,{...e,key:t,gizmoId:t})}}function _(e){const{data:t,error:i}=h(e.gizmoId),n=G(),s=l();return a.useEffect(()=>{t==null&&i!=null&&s(y(j.GIZMO_NOT_FOUND))},[s,t,i]),i!=null&&n!=null?o.jsx(E,{}):n==null?o.jsx(v,{gizmo:t}):a.createElement(g,{...e,key:e.gizmoId})}function E(){return o.jsx(m,{children:o.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[o.jsx("div",{className:"font-bold",children:o.jsx(r,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),o.jsx(r,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}const S=({data:e,matches:t})=>e?.kind==="anon_gizmo"?M(e.gizmo):t.flatMap(i=>i.meta??[]);function v({gizmo:e}){const t=l();return o.jsx(m,{children:o.jsx(x,{gizmo:e,children:o.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[o.jsx(u,{onClick:()=>z(t,"Gizmo page upsell button"),children:o.jsx(r,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),o.jsx("div",{className:"text-sm text-token-text-tertiary",children:o.jsx(r,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}export{w as G,_ as a,S as m};
//# sourceMappingURL=f6jt9rl2afk5wswh.js.map
