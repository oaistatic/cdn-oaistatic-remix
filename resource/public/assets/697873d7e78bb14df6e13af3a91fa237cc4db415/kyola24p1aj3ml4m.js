const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jrta4nc4zp6vn1a9.js","assets/dfm2yceao9m2ilo9.js","assets/root-mg58v26q.css","assets/o7wih49jz3zkdcav.js","assets/conversation-small-ile61fj8.css","assets/l5592khpg0yhpsvi.js","assets/irdsidzglcs4nfrj.js","assets/nq6unafdket6v2d4.js","assets/gnqqviod8t2zxuwt.js","assets/c4bxzbp1808foto4.js","assets/ccrdffu4uq6bo5k0.js","assets/m4dpbx3kuuwa8qzf.js","assets/kb6nlpjb6lfuuize.js","assets/ni648vdhvct9krhm.js","assets/oj002yr1cv5905d0.js","assets/kmzrilqog8unlktu.js","assets/lj4uge2p3o5wghmc.js","assets/bmhrvosaxgmn6s0i.js","assets/nvdtwttvqml9sy4p.js","assets/f6hms767mvgd5wdn.js","assets/crgpn8kp0lsek69a.js","assets/lmos6opawwvf3yqw.js","assets/g1a8czag5zgtii4g.js","assets/odf16s7xmj505mjz.js","assets/bp3vdqasuuueuouj.js","assets/d59bvqbgrtjhdi6a.js","assets/j3jvaqmbweoz0uvu.js","assets/of3zireqs833qyjf.js","assets/mwxmeau2u615h9c2.js","assets/huty6yhsfwt7jiw2.js","assets/gb721j76lu290i1c.js","assets/c3pv0g5u6p31bd14.js","assets/c1bxciuqfnnvqhe5.js","assets/fzrn137102spawew.js","assets/zbtw2a6a3r9x82tu.js","assets/mnx8lkd7acwrn154.js","assets/btagl6w1gub4aw61.js","assets/n6msmvxvieyctgmi.js","assets/hg5sf1ymbqlfp32x.js","assets/lstxo8jtyl0rt0qy.js","assets/j3ql1et1mnjvhouk.js","assets/g4tl5lt9yqf20m4s.js"])))=>i.map(i=>d[i]);
import{r as o,cm as K,m as e,a9 as Q,w as q,L as X,eI as Y,ee as D,gY as _,b3 as f,b4 as x,e5 as S,e3 as $,aE as J,cL as w,N as Z,aw as ee,a8 as P,aa as se,dm as N,s as A,bi as ae,D as te,cT as re,cU as ie,cV as oe,dM as ne,g3 as de,t as ce,W as le}from"./dfm2yceao9m2ilo9.js";import{j8 as ue,j9 as L,aQ as R,ja as he,i1 as me,jb as k,i7 as b,gL as fe,bH as y,bI as F,l as xe,jc as ge,u as pe,m as be,ci as je,fS as ve,p as Se,q as we,D as ye,jd as Ce,j as Ee,ch as Te,T as Ie,n as _e,F as Pe,je as Ne,c2 as Ae,jf as ke,jg as Fe,cw as Ve,cx as V,jh as Oe,aD as Me,ji as De,jj as Le,bp as Re,cg as Ue,db as ze,jk as He,jl as We,jm as Be,dc as Ge,jn as Ke,c3 as Qe,fM as qe}from"./o7wih49jz3zkdcav.js";import{m}from"./ccrdffu4uq6bo5k0.js";import{C as Xe}from"./m4dpbx3kuuwa8qzf.js";import{a as U,u as C}from"./oj002yr1cv5905d0.js";import{C as z}from"./g1a8czag5zgtii4g.js";import{a as Ye}from"./nvdtwttvqml9sy4p.js";import{C as $e}from"./bmhrvosaxgmn6s0i.js";function Je({clientThreadId:a}){const s=ue(t=>t.notifications);return o.useEffect(()=>{s.filter(r=>r.clientThreadId===a).map(r=>r.id).filter(r=>r!==void 0).forEach(r=>L(r))},[a,s]),s.length===0||K?null:e.jsx("div",{className:"fixed right-4 top-8 my-2 flex max-h-[90vh] flex-col-reverse space-y-2 space-y-reverse overflow-y-auto px-2 py-4",children:e.jsx(R,{children:s.map(t=>e.jsx(Ze,{...t},t.id))})})}function Ze({...a}){const s=Q(),t=q(),r=X(),n=Y(a.clientThreadId),d=()=>{n&&me(s,t,n),a.id&&L(a.id)};return e.jsxs(m.div,{onClick:d,className:"inline-flex w-80 cursor-pointer items-center justify-start gap-2.5 rounded-2xl border border-token-border-light bg-token-main-surface-primary px-3 py-3 align-middle shadow-lg",initial:{opacity:0,x:320},animate:{opacity:1,x:0},exit:{opacity:0,x:320},transition:{duration:.5},children:[e.jsx(he,{iconName:"openai",size:"medium",className:"border-token-secondary rounded-full border bg-token-main-surface-primary text-token-text-primary"}),e.jsxs("div",{className:"inline-flex w-full shrink grow basis-0 flex-col items-start justify-start overflow-hidden",children:[e.jsx("div",{className:"w-full truncate text-sm font-medium text-token-text-primary",children:a.title??r.formatMessage({id:"mpXAeu",defaultMessage:"New chat"})}),e.jsx("div",{className:"w-full truncate text-sm text-token-text-tertiary",children:a.subtitle??r.formatMessage({id:"qMEc8J",defaultMessage:"New Message"})})]})]})}const O=450;function es({children:a,clientThreadId:s,isOpen:t,onClose:r}){const n=D();return e.jsxs(R,{children:[t&&n&&e.jsx(U,{clientThreadId:s,children:e.jsx(_,{children:e.jsx(k.Provider,{value:{isEmbeddedInFocusedView:!0},children:e.jsxs("div",{className:"absolute inset-0 flex flex-col",children:[e.jsx(m.div,{className:"h-full w-full bg-token-main-surface-secondary",...b}),e.jsxs("div",{className:"absolute inset-0 flex",children:[e.jsx(m.div,{className:"relative shrink-0 border-r border-token-border-medium bg-token-main-surface-primary",style:{width:O},...b,children:e.jsx(z,{hideHeader:!0,hideTools:!0})}),e.jsx("div",{className:"relative flex-grow overflow-auto",children:a})]})]})})})}),t&&!n&&e.jsx(_,{children:e.jsx(k.Provider,{value:{isEmbeddedInFocusedView:!0},children:e.jsxs("div",{className:"absolute inset-0 flex flex-col",children:[e.jsx(m.div,{className:"h-full w-full bg-token-main-surface-secondary",...b}),e.jsxs("div",{className:"absolute inset-0 flex",children:[e.jsx("div",{className:"flex-grow overflow-auto",children:a}),e.jsx(m.div,{className:"relative shrink-0 border-l border-token-border-medium bg-token-main-surface-primary",style:{width:O},...b,children:e.jsx("div",{className:"h-[100vh] pb-4",children:e.jsx(Ye,{clientThreadId:s,hideHeader:!0,hideFooter:!0,hideToolsOverlay:!0,messagesVerticalAlign:"bottom"},s)})})]})]})})})]})}const ss=f(()=>x(()=>import("./jrta4nc4zp6vn1a9.js"),__vite__mapDeps([0,1,2,3,4]))),as=f(()=>x(()=>import("./l5592khpg0yhpsvi.js"),__vite__mapDeps([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])).then(a=>a.ImageEditor));function ts({clientThreadId:a}){const s=fe();o.useEffect(()=>{y.close()},[a]);let t;return s?.type===F.ADAVisualization?t=e.jsx(ss,{clientThreadId:a,visualization:s.visualization}):s?.type===F.Image&&(t=e.jsx(as,{clientThreadId:a,messageId:s.messageId,image:s.image,allImages:s.allImages},s.image.asset_pointer)),e.jsx(es,{clientThreadId:a,isOpen:s!=null,onClose:y.close,children:t})}function rs(){const{clientThreadId:a,resetThread:s}=C();return xe({resetThreadAction:s,clientThreadId:a}),null}const is=f(()=>x(()=>import("./bp3vdqasuuueuouj.js"),__vite__mapDeps([24,1,2,3,4,25,10,19,26,27,28,29,30,31,14,32,33,34,20,35,36])).then(a=>a.CanvasFocusedViewManager)),M=64;function os(){const{focusedObject:a,clientThreadId:s}=C();S(void 0);const t=o.useRef(null),[r,n]=o.useState({bottom:null,height:null});ge(t,n);const d=pe(),g=S("searchSources"),i=S("summarizer"),l=$(),[h,j]=o.useState(!1),v=!d&&!!a;let c=0;h&&r.height==null?c=M:h&&r.height!=null?c=M+r.height:!h&&r.height!=null&&(c=r.height);const p=be();return e.jsx(je,{className:J(w.application,{[w.withCanvasFocusedView]:!!d,[w.withEmbeddedFocusedView]:v}),banner:e.jsx(Z,{children:e.jsx(ve,{setIsMobileAppUpsellBannerVisible:j})}),sidebar:e.jsx($e,{}),thread:e.jsx(z,{ref:t},s),details:e.jsx(is,{clientThreadId:s}),threadExtendedInfo:l&&e.jsxs(e.Fragment,{children:[!1,g&&e.jsx(Se,{clientThreadId:s}),p&&i&&e.jsx(we,{clientThreadId:s})]}),debugger:e.jsx(ye,{clientThreadId:s}),name:"application-root",style:{"--screen-keyboard-bottom":r.bottom?`${r.bottom}px`:"","--screen-height-offset":c>0?`${c}px`:""}})}function ns(){const{clientThreadId:a,currentModelId:s,isCompanionWindow:t}=C();return e.jsx(Ce,{conversationId:a,currentModelId:s,isActiveWindow:!t})}function ds({clientThreadId:a,urlThreadId:s}){return Ee({clientThreadId:a}),e.jsxs(Te,{children:[e.jsx(ns,{}),e.jsx(rs,{}),e.jsxs(Ie,{enableSandbox:!1,clientThreadId:a,children:[e.jsx(_e,{clientThreadId:a,urlThreadId:s}),e.jsx(Pe,{}),e.jsx(os,{})]})]})}var cs={};const ls=f(()=>x(()=>import("./n6msmvxvieyctgmi.js"),__vite__mapDeps([37,1,2,3,4,38,39]))),us=f(()=>x(()=>import("./j3ql1et1mnjvhouk.js"),__vite__mapDeps([40,1,2,3,4,14,22,18,19,10,20,21,23,41])));function ws(a){const{urlThreadId:s,clientThreadId:t,prefetchSearch:r}=a;ms();const n=ee(),d=P(),[g]=se(),[i,l]=o.useState(()=>s!==void 0?s:t!==void 0?t:N());s!==void 0&&i!==s&&A.getServerThreadId(i)!==s&&l(s);const h=Ne(P());o.useEffect(()=>{s===void 0&&A.getServerThreadId(i)!==void 0&&l(N())},[s,i,h]);const j=Ae(Qe.workspaceId),v=D(),{eligible:c,isLoading:p,markAsViewed:E}=ke(),T=Fe(),H=ae("3435450078");o.useEffect(()=>{(d.pathname==="/"||d.pathname.startsWith("/c/"))&&Ve({namespace:V.ChatPageLoad})==null&&(Oe({namespace:V.ChatPageLoad,opts:{expectedTimingLogs:[{name:"render_model_switcher",expectedInMs:1e4},{name:"render_history_items",expectedInMs:25e3}]}}),te.addTiming("chatgpt.web.chatPage.mounted"))},[]);const I=Me();o.useEffect(()=>{re(!0).then(u=>{u.force_login&&I({authType:"login"}),ie.initializeAndGatherData(u),De.initializeAndGatherData(u),oe.initializeAndGatherData(u)})},[I]),o.useEffect(()=>{const u=g.get(Le)==="true";n!==u&&ne.setIsTemporaryChatEnabled(u)},[n,g]),o.useEffect(()=>{d.state?.focusObject&&y.setFocusedObject(d.state.focusObject)},[d.state?.focusObject]),o.useEffect(()=>{!p&&c&&(E(),T())},[c,p,E,T]);const{isOpen:W,isLoading:B}=Re(),G=v?ds:Xe;return e.jsx(de.Provider,{value:null,children:e.jsx(Ue,{children:e.jsxs(ze,{clientThreadId:i,children:[e.jsx(He,{clientThreadId:i},j),!B&&W&&e.jsx(us,{clientThreadId:i,setClientThreadId:l}),e.jsx(We,{}),e.jsx(Be,{}),e.jsx(U,{clientThreadId:i,setClientThreadId:l,prefetchSearch:r,children:e.jsx(G,{urlThreadId:s,clientThreadId:i,setClientThreadId:l,prefetchSearch:r})}),e.jsx(ts,{clientThreadId:i}),e.jsx(Ge,{clientThreadId:i}),e.jsx(hs,{}),e.jsx(Ke,{}),H?e.jsx(Je,{clientThreadId:i}):!1]})})})}function hs(){const a=qe(s=>s.sharingModalThreadId);return a?e.jsx(ls,{serverThreadId:a}):null}function ms(){ce({queryKey:["pingEdge"],queryFn:()=>le.pingEdge(),enabled:!0,staleTime:1/0})}typeof window<"u"&&(window._g=cs.GOKU_SERVICE);export{ws as C,O as F};
//# sourceMappingURL=kyola24p1aj3ml4m.js.map