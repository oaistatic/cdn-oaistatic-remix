const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/nvdtwttvqml9sy4p.js","assets/dfm2yceao9m2ilo9.js","assets/root-mg58v26q.css","assets/o7wih49jz3zkdcav.js","assets/conversation-small-ile61fj8.css","assets/f6hms767mvgd5wdn.js","assets/ccrdffu4uq6bo5k0.js","assets/crgpn8kp0lsek69a.js","assets/lmos6opawwvf3yqw.js","assets/oj002yr1cv5905d0.js"])))=>i.map(i=>d[i]);
import{b3 as H,b4 as N,r as p,aA as F,gt as L,gf as P,az as w,m as e,fy as t,e3 as M,b5 as _,aE as T}from"./dfm2yceao9m2ilo9.js";import{bt as A,cC as B,cD as j,cE as D,aF as f,cF as O,cG as R,c4 as U,cH as W,cI as z,c5 as q,c7 as V,c8 as G,c9 as Z,cc as J,ca as v,cb as K,cd as Q}from"./o7wih49jz3zkdcav.js";import{c as X,u as Y,C as $,b as ee}from"./nvdtwttvqml9sy4p.js";import{c as se,u as te}from"./oj002yr1cv5905d0.js";import{C as ae}from"./odf16s7xmj505mjz.js";const re=H(()=>N(()=>import("./nvdtwttvqml9sy4p.js").then(s=>s.e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(s=>s.ChatScreenComposerAlerts));function ne(){const{clientThreadId:s,currentModelId:i,isCompanionWindow:l,onRequestCompletion:n}=p.useContext(se),h=A(s),o=F(s),c=L(s,o)>=2,d=P(s,o),r=w(s)&&!c&&B(h),{setComposerFooterElement:m}=p.useContext(j);return e.jsx("div",{className:t.footer,children:e.jsxs(D,{style:{"--bar-gap":"0.5rem","--bar-background-color":"transparent"},children:[e.jsxs(f,{type:"secondary",className:"relative",children:[c&&e.jsx(O,{className:t.scrollButton}),e.jsx(re,{})]}),e.jsxs(f,{type:"primary",ref:m,name:"composer-bar",className:"bottom-[var(--screen-keyboard-bottom,env(keyboard-inset-bottom,0px))]",children:[e.jsx(X,{clientThreadId:s,currentModelId:i,isNewThread:r,noWrap:!0,onRequestCompletion:n,showPromptStarters:r||!d}),!l&&e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(R,{clientThreadId:s})})]})]})})}function he({hideHeader:s=!1,hideFooter:i=!1,hideTools:l=!1,embedded:n=!1,renderEmptyState:h,ref:o}){const{clientThreadId:a,currentModelId:c,conversationLeafId:d,isCompanionWindow:r,isInstalledApp:m,onRequestCompletion:b}=te(),{canUseNewHomepage:x,showEmptyState:u}=Y({clientThreadId:a,currentLeafId:d}),y=U()[c],[S,g]=W({name:"composer-bar",track:"height"}),C=z(a),I=q(),E=M(),k=i||u&&x;return e.jsx(_.Provider,{value:b,children:e.jsx(V,{children:e.jsxs(G,{clientThreadId:a,currentLeafId:d,children:[e.jsx(Z,{children:C!=null&&e.jsx("title",{children:C})}),e.jsx(J,{clientThreadId:a,className:T(n&&"h-full","flex-1"),currentModelConfig:y,children:e.jsx(j.Provider,{value:{setComposerFooterElement:g},children:e.jsxs("div",{className:"h-full",style:{container:"thread-container / inline-size"},children:[e.jsx(v,{id:"canvas-state",name:"canvas-state",checked:I}),e.jsx(v,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:E}),e.jsx(K,{anchor:"vertical",className:T(t.screen,u&&x&&t.screenEmptyState,r&&t.screenCompanionWindow,m&&t.screenInstalledApp,n&&t.screenEmbedded),name:"thread",leading:!s&&e.jsx($,{}),style:S,ref:o,trackLeading:!0,trackTrailing:!0,trailing:!k&&e.jsx(ne,{}),children:e.jsx(ee,{renderEmptyState:h})}),!r&&!l&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{}),e.jsx(Q,{})]})]})})})]})})})}export{he as C};
//# sourceMappingURL=g1a8czag5zgtii4g.js.map