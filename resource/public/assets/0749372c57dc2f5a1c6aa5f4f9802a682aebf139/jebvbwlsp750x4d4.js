const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/oktfl79a2mx6lqf9.js","assets/lklglvrzltpv3f05.js","assets/ntw4l0fkgqdiln85.js","assets/ltrr4mhf6s4m7a72.js","assets/root-bh5spu2n.css","assets/conversation-small-iybhw0ps.css","assets/hzpananrr846548p.js","assets/k2lb722xh4lhsrhu.js","assets/jkn3f4gmwmxymccj.js","assets/imgy42ez58v2u94y.js","assets/c84k0nbcah46qpzd.js","assets/p8eg3euad9gvin3k.js","assets/hzzlkn5ny7a6v61q.js"])))=>i.map(i=>d[i]);
import{aN as S,aO as m,aX as x,dY as v,a1 as y,fH as C,fI as j,ao as I,ba as O,ea as _,ew as N,L as E,d3 as w,ag as A}from"./ltrr4mhf6s4m7a72.js";import{j as e,c as F,r as d}from"./lklglvrzltpv3f05.js";import{H as L,N as M,U as u,I as P,J as k,K as T,L as b,M as z,O as G}from"./ntw4l0fkgqdiln85.js";import{SnorlaxSidebarList as U}from"./m9aklkujr89s52e5.js";import{N as H}from"./hzzlkn5ny7a6v61q.js";const R=S(()=>m(()=>import("./oktfl79a2mx6lqf9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(a=>a.FannyPackAction)),V=S(()=>m(()=>import("./imgy42ez58v2u94y.js"),__vite__mapDeps([9,10,1,2,3,4,5,11,12])).then(a=>a.GizmoSidebarList));function W({clientThreadId:a}){const s=N(a),n=E(),{isUnauthenticated:i}=x(),t=w(a),o=A(),l=T(),[r,f]=d.useState(!1),h=d.useCallback(c=>c===b.Snorlax?r:!1,[r]),p=d.useCallback((c,g)=>{c===b.Snorlax&&f(g)},[]);return e.jsx(z,{value:{isSidebarFlyoutOpen:h,onSidebarFlyoutOpenChange:p},children:e.jsxs("div",{className:"group/sidebar",children:[n?.canInteractWithGizmos()?e.jsx(V,{currentGizmoId:t}):null,null,l&&e.jsx("div",{className:"pl-2 text-sm screen-arch:pl-1",children:e.jsx(U,{currentGizmoId:t})}),!i&&e.jsx(G,{activeId:o?void 0:s})]})})}function Y({clientThreadId:a}){const{isUnauthenticated:s}=x();return s?null:e.jsx(W,{clientThreadId:a})}function q({className:a,onNewThread:s}){const n=F(),i=v(),t=y(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:o}=L(),l=C(),r=j("include_legacy_sidebar_contents");return e.jsxs("div",{className:I("flex",t?.visible&&t.getTitlebarAreaRect().left>0?"justify-end":"justify-between",a),children:[e.jsx(O,{sideOffset:4,label:n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(M,{className:"no-draggable","aria-label":n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{_(i)?u.toggleNavSidebar():u.togglePopoverNavSidebar()},icon:P,mobileIcon:k,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[o&&e.jsx(R,{}),r()&&l?null:e.jsx(H,{onClick:s,testId:"create-new-chat-button"})]})]})}export{Y as C,q as S};
//# sourceMappingURL=jebvbwlsp750x4d4.js.map
