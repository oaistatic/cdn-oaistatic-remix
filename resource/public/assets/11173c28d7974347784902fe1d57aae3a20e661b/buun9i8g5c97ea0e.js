const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/cnv95wiq9am77uyo.js","assets/dh0yl0m9q337gmci.js","assets/nqo5y2f0dorhrqsr.js","assets/root-e6p3mfos.css","assets/ktiwgucld5a8s55m.js","assets/conversation-small-kq10986g.css","assets/gtbc1g1q4ztw05rv.js","assets/dvl2tfqalthh42cv.js","assets/cb0x1wlgm93n2hpu.js","assets/odhzv2q19wc7ynyt.js"])))=>i.map(i=>d[i]);import{r as p,j as e}from"./nqo5y2f0dorhrqsr.js";import{bt as H,cE as N,cF as j,cG as F,aF as f,cH as L,cI as M,c6 as P,cJ as w,cK as _,c7 as A,c9 as B,ca as O,cb as R,ce as D,cc as T,cd as U,cf as W}from"./ktiwgucld5a8s55m.js";import{aR as K,aS as q,ao as z,fJ as J,a3 as V,an as G,f3 as a,dK as Z,fK as Q,ba as X,as as v}from"./dh0yl0m9q337gmci.js";import{d as Y,u as $,C as ee,c as se}from"./cnv95wiq9am77uyo.js";import{c as ae,u as te}from"./odhzv2q19wc7ynyt.js";import{C as re}from"./ezyyguzloavludkz.js";const ne=K(()=>q(()=>import("./cnv95wiq9am77uyo.js").then(s=>s.f),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(s=>s.ChatScreenComposerAlerts));function oe(){const{clientThreadId:s,currentModelId:i,isCompanionWindow:l,onRequestCompletion:n}=p.useContext(ae),h=H(s),o=z(s),c=J(s,o)>=2,d=V(s,o),r=G(s)&&!c&&N(h),{setComposerFooterElement:m}=p.useContext(j);return e.jsx("div",{className:a.footer,children:e.jsxs(F,{style:{"--bar-gap":"0.5rem","--bar-background-color":"transparent"},children:[e.jsxs(f,{type:"secondary",className:"relative",children:[c&&e.jsx(L,{className:a.scrollButton}),e.jsx(ne,{})]}),e.jsxs(f,{type:"primary",ref:m,name:"composer-bar",className:"bottom-[var(--screen-keyboard-bottom,env(keyboard-inset-bottom,0px))]",children:[e.jsx(Y,{clientThreadId:s,currentModelId:i,isNewThread:r,noWrap:!0,onRequestCompletion:n,showPromptStarters:r||!d}),!l&&e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(M,{clientThreadId:s})})]})]})})}function xe({hideHeader:s=!1,hideFooter:i=!1,hideTools:l=!1,embedded:n=!1,renderEmptyState:h,ref:o}){const{clientThreadId:t,currentModelId:c,conversationLeafId:d,isCompanionWindow:r,isInstalledApp:m,onRequestCompletion:S}=te(),{canUseNewHomepage:x,showEmptyState:u}=$({clientThreadId:t,currentLeafId:d}),y=P()[c],[I,b]=w({name:"composer-bar",track:"height"}),C=_(t),g=A(),k=Z(),E=i||u&&x;return Q(t),e.jsx(X.Provider,{value:S,children:e.jsx(B,{children:e.jsxs(O,{clientThreadId:t,currentLeafId:d,children:[e.jsx(R,{children:C!=null&&e.jsx("title",{children:C})}),e.jsx(D,{clientThreadId:t,className:v(n&&"h-full","flex-1"),currentModelConfig:y,children:e.jsx(j.Provider,{value:{setComposerFooterElement:b},children:e.jsxs("div",{className:"h-full",style:{container:"thread-container / inline-size"},children:[e.jsx(T,{id:"canvas-state",name:"canvas-state",checked:g}),e.jsx(T,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:k}),e.jsx(U,{anchor:"vertical",className:v(a.screen,u&&x&&a.screenEmptyState,r&&a.screenCompanionWindow,m&&a.screenInstalledApp,n&&a.screenEmbedded),name:"thread",leading:!s&&e.jsx(ee,{}),style:I,ref:o,trackLeading:!0,trackTrailing:!0,trailing:!E&&e.jsx(oe,{}),children:e.jsx(se,{renderEmptyState:h})}),!r&&!l&&e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsx(W,{})]})]})})})]})})})}export{xe as C};