const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mtdm9ycqzuiourtm.js","assets/dfm2yceao9m2ilo9.js","assets/root-mg58v26q.css","assets/o7wih49jz3zkdcav.js","assets/conversation-small-ile61fj8.css","assets/lal9iru3wpb60yfl.js","assets/js41jyetsc1vb43t.js","assets/jyaupvbot5bn9tgt.js","assets/jqyex93a9k2lhm63.js","assets/ccrdffu4uq6bo5k0.js","assets/bmhrvosaxgmn6s0i.js","assets/oj002yr1cv5905d0.js","assets/ni648vdhvct9krhm.js"])))=>i.map(i=>d[i]);
import{b3 as S,b4 as x,bq as m,m as e,L as y,aG as g,ag as I,aE as j,ba as N,eI as w,a5 as E,dl as _,aw as A,r as c}from"./dfm2yceao9m2ilo9.js";import{v as O,w as z,N as F,x as k,U as u,S as P,y as T,z as G,A as b,E as U,H as L,I as M}from"./o7wih49jz3zkdcav.js";import{SnorlaxSidebarList as B}from"./lj4uge2p3o5wghmc.js";import{N as R}from"./oj002yr1cv5905d0.js";const W=S(()=>x(()=>import("./mtdm9ycqzuiourtm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(a=>a.FannyPackAction)),H=S(()=>x(()=>import("./jqyex93a9k2lhm63.js"),__vite__mapDeps([8,1,2,3,4,9,10,11,12])).then(a=>a.GizmoSidebarList));function V({clientThreadId:a,onNewThread:t}){const s=w(a),r=E(),{isUnauthenticated:i}=m(),n=_(a),o=A(),h=G(),[d,f]=c.useState(!1),C=c.useCallback(l=>l===b.Snorlax?d:!1,[d]),v=c.useCallback((l,p)=>{l===b.Snorlax&&f(p)},[]);return e.jsxs(U,{value:{isSidebarFlyoutOpen:C,onSidebarFlyoutOpenChange:v},children:[e.jsx(L,{onNewThread:t}),r?.canInteractWithGizmos()?e.jsx(H,{currentGizmoId:n}):null,!1,null,h&&r?.canInteractWithGizmos()&&e.jsx("div",{className:"pl-2 text-sm screen-arch:pl-1",children:e.jsx(B,{currentGizmoId:n})}),!i&&e.jsx(M,{activeId:o?void 0:s})]})}function K({clientThreadId:a,onNewThread:t}){const{isUnauthenticated:s}=m();return s?null:e.jsx(V,{clientThreadId:a,onNewThread:t})}function Q({className:a,onNewThread:t}){const s=y(),r=g(),i=O(),n=I(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:o}=z();return e.jsxs("div",{className:j("flex",n?.visible&&n.getTitlebarAreaRect().left>0?"justify-end":"justify-between",a),children:[e.jsx(N,{sideOffset:4,label:s.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(F,{className:"no-draggable","aria-label":s.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{k(r)?u.toggleNavSidebar():u.togglePopoverNavSidebar()},icon:P,mobileIcon:T,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[o&&e.jsx(W,{}),!i&&e.jsx(R,{onClick:t,testId:"create-new-chat-button"})]})]})}export{K as C,Q as S};
//# sourceMappingURL=kmzrilqog8unlktu.js.map
