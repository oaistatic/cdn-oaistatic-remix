const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/krc8v8olyhcnrlx4.js","assets/813n9w6xsthevnqe.js","assets/h2ot8b85cve7rfg1.js","assets/root-bkpln5bd.css","assets/cvslyloecw0ll845.js","assets/conversation-small-ile61fj8.css","assets/v8sa4prvq8rs37i1.js","assets/caxmmqd3ij6o16o6.js","assets/mvynlitses0om5nb.js","assets/m0cd5cyg0c80xi9w.js","assets/isv5syr1ckkke1uq.js","assets/do3noacblfokxtip.js","assets/kkpy24kni3zeqpn6.js","assets/mh8pkesoon2si38m.js"])))=>i.map(i=>d[i]);
import{u as h,m as e,r as g,aD as r,eR as S,br as p,aS as x,aH as m,aI as b,G as f,aZ as v,aa as j,aJ as w,en as I,Z as k,b0 as N,d2 as C,ap as T}from"./813n9w6xsthevnqe.js";import{bM as l,bN as d,bO as y,bP as A,bQ as G,bR as M,bS as P,bT as z,bU as L,bV as _,bW as D,aF as O,bu as E,bX as B,U as u,an as F,ao as U}from"./cvslyloecw0ll845.js";import{N as R,L as H,aK as V,aA as W}from"./h2ot8b85cve7rfg1.js";import{m as X}from"./do3noacblfokxtip.js";import{N as K}from"./kkpy24kni3zeqpn6.js";function Z(){const s=l(d.SonicSidebar),[a,t]=g.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(X.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(J,{children:e.jsx(y,{href:"/search",target:"_blank",icon:e.jsx("div",{className:r("gizmo-shadow-stroke mr-[0.5] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(A,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Q,{isOpen:a,setIsOpen:t,onDismiss:()=>s.markAsViewed()}),e.jsx(R,{className:r("icon-md text-token-text-tertiary",!a&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function q(){const s=M(),a=l(d.hasSeenSncSidebarTooltip),t=P(),n=z(),{activeModals:i}=L(),o=_();return!a.isLoading&&a.eligible&&!t&&i.size===0&&!s&&!n&&!o}function J({children:s}){const a=q(),t=l(d.hasSeenSncSidebarTooltip);return a?e.jsx(G,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:t.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function Q({isOpen:s,setIsOpen:a,onDismiss:t}){return e.jsx(S,{open:s,onOpenChange:a,triggerButton:e.jsx("button",{className:r("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:n=>{n.preventDefault()},children:e.jsx(H,{className:"icon-md"})}),children:e.jsx(p.Item,{onClick:n=>{n.preventDefault(),t()},children:e.jsx(x,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function Y(){const s=h("114024");return!s.value||s.isLoading?null:e.jsx(Z,{})}const $=m(()=>b(()=>import("./krc8v8olyhcnrlx4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(s=>s.FannyPackAction)),ee=m(()=>b(()=>import("./m0cd5cyg0c80xi9w.js"),__vite__mapDeps([9,1,2,3,10,4,5,11,12,13])).then(s=>s.GizmoSidebarList));function re({clientThreadId:s,onNewThread:a}){const t=I(s),n=k(),{isUnauthenticated:i}=N(),o=C(s),c=T();return i?null:e.jsxs(e.Fragment,{children:[e.jsx(F,{onNewThread:a}),n?.canInteractWithGizmos()?e.jsx(ee,{currentGizmoId:o}):e.jsx(Y,{}),!1,!i&&e.jsx(U,{activeId:c?void 0:t})]})}function ce({className:s,onNewThread:a}){const t=f(),n=v(),i=D(),o=j(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:c}=O();return e.jsxs("div",{className:r("flex",o?.visible&&o.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(w,{sideOffset:4,label:t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(E,{className:"no-draggable","aria-label":t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{B(n)?u.toggleNavSidebar():u.togglePopoverNavSidebar()},icon:V,mobileIcon:W,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[c&&e.jsx($,{}),!i&&e.jsx(K,{onClick:a,testId:"create-new-chat-button"})]})]})}export{re as C,ce as S,Y as a};
//# sourceMappingURL=bhbjv50omvtqhsu2.js.map
