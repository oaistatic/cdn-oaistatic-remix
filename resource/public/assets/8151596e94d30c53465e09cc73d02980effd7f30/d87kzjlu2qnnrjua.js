const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/k6rgpufjg7esjcz6.js","assets/g92hdia1euilhv3m.js","assets/j9bb93dkfix5hp9e.js","assets/root-f2s4xiqy.css","assets/l912w0bwi7cbhgoi.js","assets/conversation-small-lkohtmkm.css","assets/ilksrjuq6sj9ex7c.js","assets/c7j661nh9hmy9uyu.js","assets/e2eu9xocd5pok326.js","assets/d1un4qesf7wcrjye.js","assets/j7th0khx4sotuh84.js","assets/bz2yxwsv6hrttawy.js","assets/ckccvvf5yal7qfyi.js","assets/dmaf5le5xejig3y4.js"])))=>i.map(i=>d[i]);
import{u as b,m as e,r as g,aC as r,eW as p,by as S,aS as f,aH as m,aI as h,G as x,aZ as v,aa as j,aJ as w,es as I,Z as k,b0 as y,d3 as C,ap as N}from"./g92hdia1euilhv3m.js";import{c5 as l,c6 as d,c7 as M,c8 as T,c9 as G,ca as A,cb as P,cc as z,cd as _,ce as D,cf as L,aQ as O,bP as E,cg as B,U as u,ay as F,az as U}from"./l912w0bwi7cbhgoi.js";import{O as H,M as R,aM as V,aD as W}from"./j9bb93dkfix5hp9e.js";import{m as X}from"./bz2yxwsv6hrttawy.js";import{N as Z}from"./ckccvvf5yal7qfyi.js";function q(){const s=l(d.SonicSidebar),[a,t]=g.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(X.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(K,{children:e.jsx(M,{href:"/search",target:"_blank",icon:e.jsx("div",{className:r("gizmo-shadow-stroke mr-[0.5] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(T,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Q,{isOpen:a,setIsOpen:t,onDismiss:()=>s.markAsViewed()}),e.jsx(H,{className:r("icon-md text-token-text-tertiary",!a&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function J(){const s=A(),a=l(d.hasSeenSncSidebarTooltip),t=P(),n=z(),{activeModals:i}=_(),o=D();return!a.isLoading&&a.eligible&&!t&&i.size===0&&!s&&!n&&!o}function K({children:s}){const a=J(),t=l(d.hasSeenSncSidebarTooltip);return a?e.jsx(G,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:t.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function Q({isOpen:s,setIsOpen:a,onDismiss:t}){return e.jsx(p,{open:s,onOpenChange:a,triggerButton:e.jsx("button",{className:r("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:n=>{n.preventDefault()},children:e.jsx(R,{className:"icon-md"})}),children:e.jsx(S.Item,{onClick:n=>{n.preventDefault(),t()},children:e.jsx(f,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function Y(){const s=b("114024");return!s.value||s.isLoading?null:e.jsx(q,{})}const $=m(()=>h(()=>import("./k6rgpufjg7esjcz6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(s=>s.FannyPackAction)),ee=m(()=>h(()=>import("./d1un4qesf7wcrjye.js"),__vite__mapDeps([9,1,2,3,10,4,5,11,12,13])).then(s=>s.GizmoSidebarList));function re({clientThreadId:s,onNewThread:a}){const t=I(s),n=k(),{isUnauthenticated:i}=y(),o=C(s),c=N();return i?null:e.jsxs(e.Fragment,{children:[e.jsx(F,{onNewThread:a}),n?.canInteractWithGizmos()?e.jsx(ee,{currentGizmoId:o}):e.jsx(Y,{}),!1,!i&&e.jsx(U,{activeId:c?void 0:t})]})}function ce({className:s,onNewThread:a}){const t=x(),n=v(),i=L(),o=j(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:c}=O();return e.jsxs("div",{className:r("flex",o?.visible&&o.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(w,{sideOffset:4,label:t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(E,{className:"no-draggable","aria-label":t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{B(n)?u.toggleNavSidebar():u.togglePopoverNavSidebar()},icon:V,mobileIcon:W,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[c&&e.jsx($,{}),!i&&e.jsx(Z,{onClick:a,testId:"create-new-chat-button"})]})]})}export{re as C,ce as S,Y as a};
//# sourceMappingURL=d87kzjlu2qnnrjua.js.map