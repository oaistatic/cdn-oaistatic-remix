const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dul5r0ldqc1smbge.js","assets/dh0yl0m9q337gmci.js","assets/nqo5y2f0dorhrqsr.js","assets/root-e6p3mfos.css","assets/ktiwgucld5a8s55m.js","assets/conversation-small-kq10986g.css","assets/d8a6nk884cnxbwmw.js","assets/0q32pbg69g3j8gqh.js","assets/c6ttvc5iok520ou8.js","assets/omjllvghnjt0nbze.js","assets/c4bxzbp1808foto4.js","assets/dgcxf4c1lo6y3h3a.js","assets/nb34aa8izknzna97.js","assets/l697z2ouob9b6hw7.js","assets/odhzv2q19wc7ynyt.js","assets/k56enwh74zn4hbwt.js","assets/mfdhaorj0sghs4gl.js","assets/fy8orb1z72ox92eg.js","assets/cnv95wiq9am77uyo.js","assets/gtbc1g1q4ztw05rv.js","assets/dvl2tfqalthh42cv.js","assets/cb0x1wlgm93n2hpu.js","assets/buun9i8g5c97ea0e.js","assets/ezyyguzloavludkz.js","assets/clbn1wgiymxka0kz.js","assets/djvq027mfengbixi.js","assets/c6goikw79mh4htjc.js","assets/ehu6hsbnosptkam5.js","assets/fhfdp4ckr0b1smzt.js","assets/gdesxkqxsoz75aum.js","assets/itzwlfoi7caa8gqm.js","assets/ergxkgfpa1klt06l.js","assets/ovfdo5lup4kpuqv1.js","assets/fzrn137102spawew.js","assets/jduckhgljimdwo8y.js","assets/l35pvk6j2ug7fgbc.js","assets/scq4sp5bn5f0yima.js","assets/btagl6w1gub4aw61.js","assets/kizqiaqqkjxnk0zn.js","assets/mav83crfduvkg85m.js","assets/lrt1lzalv2692ks0.js","assets/u891bhy1y10f4qha.js","assets/g4tl5lt9yqf20m4s.js"])))=>i.map(i=>d[i]);
import{gs as G,ce as q,ek as Q,dV as D,ge as _,aR as f,aS as x,dM as S,dK as X,as as J,cA as w,N as Y,ak as $,a6 as Z,d5 as N,v as P,bl as ee,D as se,cI as ae,cJ as te,dr as re,fo as ie,J as oe}from"./dh0yl0m9q337gmci.js";import{r as o,j as e,af as L,e as ne,a as de,c as ce,ae as m,d as A,f as le,u as ue}from"./nqo5y2f0dorhrqsr.js";import{im as he,io as R,ip as me,hj as fe,iq as k,hl as b,gT as xe,bH as T,bI as F,n as ge,ir as pe,u as be,o as ve,cj as je,g0 as Se,r as we,v as Te,D as ye,is as Ce,l as Ie,ci as Ee,T as _e,p as Ne,F as Pe,it as Ae,c4 as ke,iu as Fe,iv as Ve,cy as Oe,cz as V,iw as Me,aD as De,ix as Le,iy as Re,bp as Ue,ch as ze,dd as Be,iz as He,iA as Ke,iB as We,de as Ge,iC as qe,c5 as Qe,ck as Xe}from"./ktiwgucld5a8s55m.js";import{C as Je}from"./dgcxf4c1lo6y3h3a.js";import{a as U,u as y}from"./odhzv2q19wc7ynyt.js";import{C as z}from"./buun9i8g5c97ea0e.js";import{a as Ye}from"./cnv95wiq9am77uyo.js";import{C as $e}from"./fy8orb1z72ox92eg.js";function Ze(){const a=he(r=>r.notifications),{activeThreadIds:s}=G();return o.useEffect(()=>{a.filter(t=>t.clientThreadId===void 0||s.has(t.clientThreadId)).map(t=>t.id).filter(t=>t!==void 0).forEach(t=>R(t))},[s,a]),a.length===0||q?null:e.jsx("div",{className:"fixed right-4 top-8 my-2 flex max-h-[90vh] flex-col-reverse space-y-2 space-y-reverse overflow-y-auto px-2 py-4",children:e.jsx(L,{children:a.map(r=>e.jsx(es,{...r},r.id))})})}function es({...a}){const s=ne(),r=de(),t=ce(),n=Q(a.clientThreadId),d=()=>{n&&fe(s,r,n),a.id&&R(a.id)};return e.jsxs(m.div,{onClick:d,className:"inline-flex w-80 cursor-pointer items-center justify-start gap-2.5 rounded-2xl border border-token-border-light bg-token-main-surface-primary px-3 py-3 align-middle shadow-lg",initial:{opacity:0,x:320},animate:{opacity:1,x:0},exit:{opacity:0,x:320},transition:{duration:.5},children:[e.jsx(me,{iconName:"openai",size:"medium",className:"border-token-secondary rounded-full border bg-token-main-surface-primary text-token-text-primary"}),e.jsxs("div",{className:"inline-flex w-full shrink grow basis-0 flex-col items-start justify-start overflow-hidden",children:[e.jsx("div",{className:"w-full truncate text-sm font-medium text-token-text-primary",children:a.title??t.formatMessage({id:"mpXAeu",defaultMessage:"New chat"})}),e.jsx("div",{className:"w-full truncate text-sm text-token-text-tertiary",children:a.subtitle??t.formatMessage({id:"qMEc8J",defaultMessage:"New Message"})})]})]})}const O=450;function ss({children:a,clientThreadId:s,isOpen:r,onClose:t}){const n=D();return e.jsxs(L,{children:[r&&n&&e.jsx(U,{clientThreadId:s,children:e.jsx(_,{children:e.jsx(k.Provider,{value:{isEmbeddedInFocusedView:!0},children:e.jsxs("div",{className:"absolute inset-0 flex flex-col",children:[e.jsx(m.div,{className:"h-full w-full bg-token-main-surface-secondary",...b}),e.jsxs("div",{className:"absolute inset-0 flex",children:[e.jsx(m.div,{className:"relative shrink-0 border-r border-token-border-medium bg-token-main-surface-primary",style:{width:O},...b,children:e.jsx(z,{hideHeader:!0,hideTools:!0})}),e.jsx("div",{className:"relative flex-grow overflow-auto",children:a})]})]})})})}),r&&!n&&e.jsx(_,{children:e.jsx(k.Provider,{value:{isEmbeddedInFocusedView:!0},children:e.jsxs("div",{className:"absolute inset-0 flex flex-col",children:[e.jsx(m.div,{className:"h-full w-full bg-token-main-surface-secondary",...b}),e.jsxs("div",{className:"absolute inset-0 flex",children:[e.jsx("div",{className:"flex-grow overflow-auto",children:a}),e.jsx(m.div,{className:"relative shrink-0 border-l border-token-border-medium bg-token-main-surface-primary",style:{width:O},...b,children:e.jsx("div",{className:"h-[100vh] pb-4",children:e.jsx(Ye,{clientThreadId:s,hideHeader:!0,hideFooter:!0,hideToolsOverlay:!0,messagesVerticalAlign:"bottom"},s)})})]})]})})})]})}const as=f(()=>x(()=>import("./dul5r0ldqc1smbge.js"),__vite__mapDeps([0,1,2,3,4,5]))),ts=f(()=>x(()=>import("./d8a6nk884cnxbwmw.js"),__vite__mapDeps([6,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])).then(a=>a.ImageEditor));function rs({clientThreadId:a}){const s=xe();o.useEffect(()=>{T.close()},[a]);let r;return s?.type===F.ADAVisualization?r=e.jsx(as,{clientThreadId:a,visualization:s.visualization}):s?.type===F.Image&&(r=e.jsx(ts,{clientThreadId:a,messageId:s.messageId,image:s.image,allImages:s.allImages},s.image.asset_pointer)),e.jsx(ss,{clientThreadId:a,isOpen:s!=null,onClose:T.close,children:r})}function is(){const{clientThreadId:a,resetThread:s}=y();return ge({resetThreadAction:s,clientThreadId:a}),null}const os=f(()=>x(()=>import("./clbn1wgiymxka0kz.js"),__vite__mapDeps([24,2,4,1,3,5,25,19,26,27,28,29,30,31,14,32,33,34,20,35,36,37])).then(a=>a.CanvasFocusedViewManager)),M=64;function ns(){const{focusedObject:a,clientThreadId:s}=y();S(void 0);const r=o.useRef(null),[t,n]=o.useState({bottom:null,height:null});pe(r,n);const d=be(),g=S("searchSources"),i=S("summarizer"),l=X(),[h,v]=o.useState(!1),j=!d&&!!a;let c=0;h&&t.height==null?c=M:h&&t.height!=null?c=M+t.height:!h&&t.height!=null&&(c=t.height);const p=ve();return e.jsx(je,{className:J(w.application,{[w.withCanvasFocusedView]:!!d,[w.withEmbeddedFocusedView]:j}),banner:e.jsx(Y,{children:e.jsx(Se,{setIsMobileAppUpsellBannerVisible:v})}),sidebar:e.jsx($e,{}),thread:e.jsx(z,{ref:r},s),details:e.jsx(os,{clientThreadId:s}),threadExtendedInfo:l&&e.jsxs(e.Fragment,{children:[!1,g&&e.jsx(we,{clientThreadId:s}),p&&i&&e.jsx(Te,{clientThreadId:s})]}),debugger:e.jsx(ye,{clientThreadId:s}),name:"application-root",style:{"--screen-keyboard-bottom":t.bottom?`${t.bottom}px`:"","--screen-height-offset":c>0?`${c}px`:""}})}function ds(){const{clientThreadId:a,currentModelId:s,isCompanionWindow:r}=y();return e.jsx(Ce,{conversationId:a,currentModelId:s,isActiveWindow:!r})}function cs({clientThreadId:a,urlThreadId:s}){return Ie({clientThreadId:a}),e.jsxs(Ee,{children:[e.jsx(ds,{}),e.jsx(is,{}),e.jsxs(_e,{enableSandbox:!0,clientThreadId:a,children:[e.jsx(Ne,{clientThreadId:a,urlThreadId:s}),e.jsx(Pe,{}),e.jsx(ns,{})]})]})}var ls={};const us=f(()=>x(()=>import("./kizqiaqqkjxnk0zn.js"),__vite__mapDeps([38,2,1,3,4,5,39,40]))),hs=f(()=>x(()=>import("./u891bhy1y10f4qha.js"),__vite__mapDeps([41,2,1,3,4,5,14,22,18,19,20,21,23,42])));function Ts(a){const{urlThreadId:s,clientThreadId:r,prefetchSearch:t}=a;fs();const n=$(),d=A(),[g]=le(),[i,l]=o.useState(()=>s!==void 0?Z.getClientNewThreadIdForServerThreadId(s)??s:r!==void 0?r:N());s!==void 0&&i!==s&&(P.getServerThreadId(i)===s||l(s));const h=Ae(A());o.useEffect(()=>{s===void 0&&P.getServerThreadId(i)!==void 0&&l(N())},[s,i,h]);const v=ke(Qe.workspaceId),j=D(),{eligible:c,isLoading:p,markAsViewed:C}=Fe(),I=Ve(),B=ee("3435450078");o.useEffect(()=>{(d.pathname==="/"||d.pathname.startsWith("/c/"))&&Oe({namespace:V.ChatPageLoad})==null&&(Me({namespace:V.ChatPageLoad,opts:{expectedTimingLogs:[{name:"render_model_switcher",expectedInMs:1e4},{name:"render_history_items",expectedInMs:25e3}]}}),se.addTiming("chatgpt.web.chatPage.mounted"))},[]);const E=De();o.useEffect(()=>{ae(!0).then(u=>{u.force_login&&E({authType:"login"}),Le.initializeAndGatherData(u),te.initializeAndGatherData(u)})},[E]),o.useEffect(()=>{const u=g.get(Re)==="true";n!==u&&re.setIsTemporaryChatEnabled(u)},[n,g]),o.useEffect(()=>{d.state?.focusObject&&T.setFocusedObject(d.state.focusObject)},[d.state?.focusObject]),o.useEffect(()=>{!p&&c&&(C(),I())},[c,p,C,I]);const{isOpen:H,isLoading:K}=Ue(),W=j?cs:Je;return e.jsx(ie.Provider,{value:null,children:e.jsx(ze,{children:e.jsxs(Be,{clientThreadId:i,children:[e.jsx(He,{clientThreadId:i},v),!K&&H&&e.jsx(hs,{clientThreadId:i,setClientThreadId:l}),e.jsx(Ke,{}),e.jsx(We,{}),e.jsx(U,{clientThreadId:i,setClientThreadId:l,prefetchSearch:t,children:e.jsx(W,{urlThreadId:s,clientThreadId:i,setClientThreadId:l,prefetchSearch:t})}),e.jsx(rs,{clientThreadId:i}),e.jsx(Ge,{clientThreadId:i}),e.jsx(ms,{}),e.jsx(qe,{}),B?e.jsx(Ze,{}):!1]})})})}function ms(){const a=Xe(s=>s.sharingModalThreadId);return a?e.jsx(us,{serverThreadId:a}):null}function fs(){ue({queryKey:["pingEdge"],queryFn:()=>oe.pingEdge(),enabled:!0,staleTime:1/0})}typeof window<"u"&&(window._g=ls.GOKU_SERVICE);export{Ts as C,O as F};
//# sourceMappingURL=ty18ymk2wf2zvd35.js.map