const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dpp6pla88nsl8pcz.js","assets/lklglvrzltpv3f05.js","assets/fn5bn67vlrtkutmt.js","assets/dr5q0mnwgdiuy1ac.js","assets/root-fllmzfn1.css","assets/conversation-small-bez2bigx.css","assets/lmjfgdickjuj9qsu.js","assets/ja29iaaaom5gcvc8.js","assets/oz3uzvtgxqgxag0v.js","assets/jlhyv26p39vu5ufj.js","assets/pazn8rkwcoqz0ouv.js","assets/cuav3gl4u7ecbt92.js","assets/gvzs5psd5zlducxo.js"])))=>i.map(i=>d[i]);
import{aV as b,aW as S,b2 as m,ay as g,a9 as y,aw as C,bg as j,en as I,o as N,d5 as _,ao as E}from"./dr5q0mnwgdiuy1ac.js";import{j as e,c as O,r as l}from"./lklglvrzltpv3f05.js";import{J as w,N as A,K as F,U as d,L as P,M as k,O as T,P as u,Q as z,R as M}from"./fn5bn67vlrtkutmt.js";import{SnorlaxSidebarList as L}from"./eepk5d1bamwc6eg6.js";import{N as G}from"./gvzs5psd5zlducxo.js";const R=b(()=>S(()=>import("./dpp6pla88nsl8pcz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(a=>a.FannyPackAction)),U=b(()=>S(()=>import("./jlhyv26p39vu5ufj.js"),__vite__mapDeps([9,1,2,3,4,5,10,11,12])).then(a=>a.GizmoSidebarList));function V({clientThreadId:a}){const s=I(a),n=N(),{isUnauthenticated:r}=m(),t=_(a),i=E(),x=T(),[c,f]=l.useState(!1),h=l.useCallback(o=>o===u.Snorlax?c:!1,[c]),p=l.useCallback((o,v)=>{o===u.Snorlax&&f(v)},[]);return e.jsx(z,{value:{isSidebarFlyoutOpen:h,onSidebarFlyoutOpenChange:p},children:e.jsxs("div",{className:"group/sidebar",children:[n?.canInteractWithGizmos()?e.jsx(U,{currentGizmoId:t}):null,!1,null,x&&e.jsx("div",{className:"pl-2 text-sm screen-arch:pl-1",children:e.jsx(L,{currentGizmoId:t})}),!r&&e.jsx(M,{activeId:i?void 0:s})]})})}function J({clientThreadId:a}){const{isUnauthenticated:s}=m();return s?null:e.jsx(V,{clientThreadId:a})}function K({className:a,onNewThread:s}){const n=O(),r=g(),t=y(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:i}=w();return e.jsxs("div",{className:C("flex",t?.visible&&t.getTitlebarAreaRect().left>0?"justify-end":"justify-between",a),children:[e.jsx(j,{sideOffset:4,label:n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(A,{className:"no-draggable","aria-label":n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{F(r)?d.toggleNavSidebar():d.togglePopoverNavSidebar()},icon:P,mobileIcon:k,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[i&&e.jsx(R,{}),e.jsx(G,{onClick:s,testId:"create-new-chat-button"})]})]})}export{J as C,K as S};
//# sourceMappingURL=fz06oo2t1lk07zuj.js.map
