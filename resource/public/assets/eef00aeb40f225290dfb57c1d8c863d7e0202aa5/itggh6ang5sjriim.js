const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/fgfc2zorlwjhmg9x.js","assets/gfs0keudzvcg5rgq.js","assets/iqnriohw8g1d2uyi.js","assets/root-f6p3uecq.css","assets/b6arjgg215unn3v3.js","assets/conversation-small-lkohtmkm.css","assets/crwfgejr613xngsk.js","assets/gjk1gh0zrzzfky45.js","assets/bm9jzv0ktitut2pk.js","assets/gzpcbgy5uaxvfy30.js","assets/kfqzi8h3ie5n60ji.js","assets/o7amlkgkeatodl16.js","assets/gyqgqt7py9lqpp7m.js","assets/eq1nad9lwlbxs0ds.js"])))=>i.map(i=>d[i]);
import{u as b,m as e,r as g,aC as r,eW as S,by as f,aT as p,aI as m,aJ as h,L as x,aH as v,af as j,aK as w,es as I,a3 as k,b0 as y,d3 as N,au as C}from"./gfs0keudzvcg5rgq.js";import{c5 as d,c6 as c,c7 as T,c8 as A,c9 as G,ca as M,cb as P,cc as z,cd as L,ce as _,cf as E,aQ as D,bP as O,cg as B,U as u,ay as F,az as U}from"./b6arjgg215unn3v3.js";import{P as H,N as R,aN as V,aE as W}from"./iqnriohw8g1d2uyi.js";import{m as K}from"./o7amlkgkeatodl16.js";import{N as X}from"./gyqgqt7py9lqpp7m.js";function q(){const s=d(c.SonicSidebar),[a,t]=g.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(K.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(Q,{children:e.jsx(T,{href:"/search",target:"_blank",icon:e.jsx("div",{className:r("gizmo-shadow-stroke mr-[0.5] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(A,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Y,{isOpen:a,setIsOpen:t,onDismiss:()=>s.markAsViewed()}),e.jsx(H,{className:r("icon-md text-token-text-tertiary",!a&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function J(){const s=M(),a=d(c.hasSeenSncSidebarTooltip),t=P(),n=z(),{activeModals:i}=L(),o=_();return!a.isLoading&&a.eligible&&!t&&i.size===0&&!s&&!n&&!o}function Q({children:s}){const a=J(),t=d(c.hasSeenSncSidebarTooltip);return a?e.jsx(G,{announcementKey:c.hasSeenSncSidebarTooltip,side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:t.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function Y({isOpen:s,setIsOpen:a,onDismiss:t}){return e.jsx(S,{open:s,onOpenChange:a,triggerButton:e.jsx("button",{className:r("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:n=>{n.preventDefault()},children:e.jsx(R,{className:"icon-md"})}),children:e.jsx(f.Item,{onClick:n=>{n.preventDefault(),t()},children:e.jsx(p,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function Z(){const s=b("114024");return!s.value||s.isLoading?null:e.jsx(q,{})}const $=m(()=>h(()=>import("./fgfc2zorlwjhmg9x.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(s=>s.FannyPackAction)),ee=m(()=>h(()=>import("./gzpcbgy5uaxvfy30.js"),__vite__mapDeps([9,1,2,3,10,4,5,11,12,13])).then(s=>s.GizmoSidebarList));function re({clientThreadId:s,onNewThread:a}){const t=I(s),n=k(),{isUnauthenticated:i}=y(),o=N(s),l=C();return i?null:e.jsxs(e.Fragment,{children:[e.jsx(F,{onNewThread:a}),n?.canInteractWithGizmos()?e.jsx(ee,{currentGizmoId:o}):e.jsx(Z,{}),!1,!i&&e.jsx(U,{activeId:l?void 0:t})]})}function ce({className:s,onNewThread:a}){const t=x(),n=v(),i=E(),o=j(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:l}=D();return e.jsxs("div",{className:r("flex",o?.visible&&o.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(w,{sideOffset:4,label:t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(O,{className:"no-draggable","aria-label":t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{B(n)?u.toggleNavSidebar():u.togglePopoverNavSidebar()},icon:V,mobileIcon:W,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[l&&e.jsx($,{}),!i&&e.jsx(X,{onClick:a,testId:"create-new-chat-button"})]})]})}export{re as C,ce as S,Z as a};
//# sourceMappingURL=itggh6ang5sjriim.js.map
