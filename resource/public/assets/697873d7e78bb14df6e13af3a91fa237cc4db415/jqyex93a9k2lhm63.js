import{w as c,a9 as m,ee as d,L as u,a5 as h,m as e,aE as x,cO as f,cP as g,ba as p}from"./dfm2yceao9m2ilo9.js";import{du as S,dv as b,cS as v,dw as z,dx as j,dy as N,z as w,dz as A,dA as C}from"./o7wih49jz3zkdcav.js";import{m as G}from"./ccrdffu4uq6bo5k0.js";import{a as I}from"./bmhrvosaxgmn6s0i.js";import"./oj002yr1cv5905d0.js";import"./ni648vdhvct9krhm.js";function L({isNewConversation:i}){const r=c(),s=m(),a=d(),t=u(),o=h();let n;return o==null?null:(o.canInteractWithGizmos()?n=N:n=t.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"}),e.jsx("div",{className:x(a?"":"bg-token-sidebar-surface-primary","pt-0"),children:e.jsx(e.Fragment,{children:e.jsx(G.div,{whileTap:{scale:.98},children:e.jsx(S,{loggingGizmoId:"primary",href:"/",onClick:l=>{f(g(r))&&!i&&(l.preventDefault(),b(s))},icon:e.jsx(v,{isFirstParty:!0,className:"h-6 w-6"}),isMenuOpen:!1,label:n,hoverRightIcon:e.jsx("div",{className:"flex gap-2",children:e.jsx(p,{side:"right",label:t.formatMessage(z.newChat),className:"flex items-center",children:e.jsx("button",{className:"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:e.jsx(j,{className:"icon-md"})})})})})})})}))}function D({currentGizmoId:i}){const r=w(),{data:{gizmos:s}={}}=A();let a=s;return r&&(a=s?.filter(t=>!C(t.resource))),e.jsxs(e.Fragment,{children:[e.jsx(L,{isNewConversation:!0}),e.jsx(I,{gizmo:a??[],currentGizmoId:i,maxToShowOnLoad:7})]})}export{L as DefaultGPTSidebarListItem,D as GizmoSidebarList,I as GizmoSidebarListContent};
//# sourceMappingURL=jqyex93a9k2lhm63.js.map
