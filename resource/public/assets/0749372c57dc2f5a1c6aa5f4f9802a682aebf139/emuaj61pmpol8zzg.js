import{r as k,j as e,ad as P,ac as z,R as u}from"./lklglvrzltpv3f05.js";import{ao as f,aX as A,dT as O,dU as o,as as h}from"./ltrr4mhf6s4m7a72.js";import{cG as X,cH as D,n as H,Q as I,U as M}from"./ntw4l0fkgqdiln85.js";import{b as F,U as B,c as G}from"./gruuolgwd1up46vp.js";function Q({isExpanded:a,children:t}){const s=k.useRef(null);return e.jsx(P,{children:e.jsx(z.div,{className:"z-[1] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:s,initial:!1,animate:{width:a?"400px":0,transition:{type:"spring",bounce:.12,duration:.3}},onAnimationStart:()=>{s.current&&(s.current.style.visibility="visible")},onAnimationComplete:()=>{s.current&&(a||(s.current.style.visibility="hidden"))},children:e.jsx("div",{className:f("absolute h-full w-[400px]",!a&&"pointer-events-none"),children:e.jsx("div",{className:"flex h-full flex-col",children:t})})})})}function S({children:a,hideNavigation:t=!1,mobileHeaderContent:s,mobileHeaderLeftContent:b,mobileHeaderRightContent:m,mobileHeaderBottomContent:x,sidebar:l,threadFlyout:p,forceOpenDesktopSidebar:v=!1}){const{isUnauthenticated:i}=A(),[j,w]=X(r=>[r.activeStageSidebar,r.activeSidebar]),g=O(),N=o("searchSources"),U=o("summarizer"),C=o("retrievalResults"),y=D(),d=[];let c=null;u.Children.forEach(a,r=>{u.isValidElement(r)&&(r.type===S.Sidebars?c=r:d.push(r))});const n=!i&&!t&&l!=null,R=!t&&(n||i),E=H()&&!!U,T=g&&(!!N||E||!!C);return e.jsxs("div",{className:f("relative flex h-full w-full overflow-hidden transition-colors",w!=="popover-nav"&&"z-0"),children:[n&&e.jsx(F,{isExpanded:v||!y,isPopoverOnDesktop:j,children:i?e.jsx(B,{}):l}),e.jsxs("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[R&&e.jsxs(h,{children:[e.jsx(I,{}),e.jsx(G,{onClickOpenSidebar:()=>M.togglePopoverNavSidebar(),showNavSidebar:n,leftContent:b,rightContent:m,bottomContent:x,children:s})]}),e.jsx("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:d})]}),e.jsx(h,{children:e.jsx(Q,{isExpanded:T,children:p})}),c]})}function V({children:a}){return e.jsx(e.Fragment,{children:a})}S.Sidebars=V;export{S};
//# sourceMappingURL=emuaj61pmpol8zzg.js.map
