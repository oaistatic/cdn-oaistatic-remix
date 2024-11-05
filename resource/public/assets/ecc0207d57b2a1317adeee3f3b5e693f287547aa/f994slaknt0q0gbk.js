const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/fsgxvopn2vdlerpg.js","assets/cenhwbprxai3toix.js","assets/lzqwtbp50roqvxnh.js","assets/root-o2r7uhf3.css","assets/bomvf441parvbl6l.js","assets/conversation-small-cll5buey.css","assets/hibtdcbfc20dw1xa.js","assets/jrixumr7y4kpqw3k.js","assets/h0w2cfyxquh3a88t.js","assets/i2mam4exf28ww00h.js","assets/er1c9qkbvqkr07px.js","assets/bh0hpeydruybhwyo.js","assets/s26g8cj5crlmzrhm.js","assets/jth9gz8y4nfsu03x.js","assets/kp41qb109q7zsu08.js","assets/e3lzzvpbrfw34hi0.js","assets/jyh9xl3syf7yrebg.js","assets/hlr47ngx7l2l1y19.js","assets/lwsvc0prcm5qybau.js","assets/hn586u5on2jlex6e.js","assets/hn877s1av7risab0.js","assets/c657bb6sfxb67al1.js","assets/i5dl7qcorvwptxtt.js","assets/j72yt11gyo474tkr.js","assets/d01hwntyf2775ji3.js","assets/kcdclgxeuzpy449e.js","assets/id6ryfq9914uxpp5.js"])))=>i.map(i=>d[i]);
import{a0 as k,y as e,ae as b,$ as I,r,P as F,d as U,a1 as E,L as V,a4 as S,a6 as W,a9 as $,j as q,dY as X,aE as Y,aw as N,aA as K,ab as G,ac as C,ag as Q,eZ as Z,as as J,ak as ee,ch as se}from"./cenhwbprxai3toix.js";import{dq as u,U as m,ds as M,dF as A,c2 as te,eT as ne,c8 as ae,eU as oe,eV as ie,c3 as re,c4 as ce,eW as le,at as de,b_ as ue,eX as me,bq as fe}from"./bomvf441parvbl6l.js";import{p as xe,ae as pe,b8 as ge,b9 as he}from"./lzqwtbp50roqvxnh.js";import{B as be,D as Se}from"./hn586u5on2jlex6e.js";import{u as D,e as L,b as B,U as w}from"./jyh9xl3syf7yrebg.js";import{m as ve}from"./i2mam4exf28ww00h.js";import{d as ye,k as je}from"./h0w2cfyxquh3a88t.js";import{u as Ne,H as we}from"./id6ryfq9914uxpp5.js";import{a as Te,r as Pe}from"./kp41qb109q7zsu08.js";import{j as ke}from"./hn877s1av7risab0.js";function H(){const{activeModals:s}=D(),t=I(),n=u(m.ExploreGPTs),a=u(m.ExploreGPTsNewNux),i=L(),o=B(),l=A(),f=n.eligible&&!n.isLoading&&!o;let c=a.eligible&&!a.isLoading&&!o&&!i&&!l;return s.size>0&&(c=!1),!f&&t?.hasPlusFeatures()&&(c=!1),r.useEffect(()=>{c&&F.logEvent(U.storeDisplayNewNux)},[c]),c}function Xe({children:s}){const t=H(),n=k(),a=u(m.ExploreGPTsNewNux);return t?e.jsx(M,{side:"right",show:!0,title:n.formatMessage(T.exploreGPTsTitle),onDismiss:a.markAsViewed,sideOffset:20,theme:"bright",description:e.jsx(b,{...T.exploreGPTsDescriptionNewNux}),children:s}):e.jsx(e.Fragment,{children:s})}const T=E({exploreGPTsTitle:{id:"gptExploreGPTs.title",defaultMessage:"Explore GPTs"},exploreGPTsDescription:{id:"gptExploreGPTs.description",defaultMessage:"Now you can discover GPTs created by the community"},exploreGPTsDescriptionNewNux:{id:"gptExploreGPTs.descriptionNewNux",defaultMessage:"Discover custom versions of ChatGPT created for specific use cases like writing, research, and coding."}});function Ie(){const s=u(m.SonicSidebar),[t,n]=r.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(ve.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(Ge,{children:e.jsx(te,{href:"/search",target:"_blank",icon:e.jsx("div",{className:S("gizmo-shadow-stroke mr-[0.5] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(ne,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Ce,{isOpen:t,setIsOpen:n,onDismiss:()=>s.markAsViewed()}),e.jsx(xe,{className:S("icon-md text-token-text-tertiary",!t&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function Ee(){const s=B(),t=u(m.hasSeenSncSidebarTooltip),n=H(),a=L(),{activeModals:i}=D(),o=A();return!t.isLoading&&t.eligible&&!n&&i.size===0&&!s&&!a&&!o}function Ge({children:s}){const t=Ee(),n=u(m.hasSeenSncSidebarTooltip);return t?e.jsx(M,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:n.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function Ce({isOpen:s,setIsOpen:t,onDismiss:n}){return e.jsx(be,{open:s,onOpenChange:t,triggerButton:e.jsx("button",{className:S("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:a=>{a.preventDefault()},children:e.jsx(pe,{className:"icon-md"})}),children:e.jsx(Se.Item,{onClick:a=>{a.preventDefault(),n()},children:e.jsx(b,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function Me(){const s=V("114024");return!s.value||s.isLoading?null:e.jsx(Ie,{})}const P=E({unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history"},retryButton:{id:"history.retryButton",defaultMessage:"Retry"}});function Ae({activeId:s,isPrimaryBackgroundColor:t}){const n=q(),[a,i]=r.useState(!1),[o,l]=r.useState(0),f=X(),{conversations:p,hasNextPage:c,fetchNextPage:y,isLoading:x,isFetchingNextPage:O,isError:j}=Te(),g=r.useRef(null),_=r.useCallback(h=>{x||h==null||(g.current?.disconnect(),g.current=new IntersectionObserver(R=>{R[0].isIntersecting&&c&&y()}),g.current.observe(h))},[x,c,y]);r.useEffect(()=>()=>{g.current?.disconnect()},[]),r.useMemo(()=>{ae.publish({kind:"refreshHistory",conversations:p})},[p]);const v=p;r.useEffect(()=>{const h=oe(ie(),Date.now());f(()=>{l(o+1)},h+1e3)},[o,f]);const d=v.length===0;r.useEffect(()=>{d||re({namespace:ce.ChatPageLoad})?.logTiming("render_history_items")},[d]);const z=Ne(v,o);return e.jsxs(Le,{$centered:x||j||d,children:[d&&x&&e.jsx(Y,{children:e.jsx(N,{className:"m-auto"})}),d&&j&&e.jsxs("div",{className:"p-3 text-center italic text-token-text-tertiary",children:[e.jsx(b,{...P.unableToLoadHistory}),!a&&e.jsx("div",{className:"mt-1",children:e.jsx(K,{as:"button",color:"primary",size:"small",className:"m-auto mt-2",onClick:()=>{i(!0),Pe(n)},children:e.jsx(b,{...P.retryButton})})})]}),!x&&!d&&e.jsx("div",{children:e.jsx(we,{activeId:s,bucketedItems:z,hasNextPage:c,items:v,isPrimaryBackgroundColor:t,infiniteScrollTriggerElementRef:_})}),O&&e.jsx("div",{className:"m-4 mb-5 flex justify-center",children:e.jsx(N,{})})]})}const De=W.memo(Ae),Le=$.div`flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5
${({$centered:s})=>[s&&"h-full justify-center items-center empty:hidden"]}`,Be=G(()=>C(()=>import("./fsgxvopn2vdlerpg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(s=>s.FannyPackAction)),He=G(()=>C(()=>import("./hlr47ngx7l2l1y19.js"),__vite__mapDeps([17,1,2,3,18,12,4,5,8,9,13,16,19,20,14,15,21,22,23,24,25,11,26,10])).then(s=>s.GizmoSidebarList));function Ye({clientThreadId:s,onNewThread:t}){const n=ye(s),a=I(),{isUnauthenticated:i}=ee(),o=je(s),l=se();return i?null:e.jsxs(e.Fragment,{children:[e.jsx(fe,{onNewThread:t}),a?.canInteractWithGizmos()?e.jsx(He,{currentGizmoId:o}):e.jsx(Me,{}),!1,!i&&e.jsx(De,{activeId:l?void 0:n})]})}function Ke({className:s,onNewThread:t}){const n=k(),a=Q(),i=le(),o=Z(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:l}=de();return e.jsxs("div",{className:S("flex",o?.visible&&o.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(J,{sideOffset:4,label:n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(ue,{className:"no-draggable","aria-label":n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{me(a)?w.toggleNavSidebar():w.togglePopoverNavSidebar()},icon:ge,mobileIcon:he,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[l&&e.jsx(Be,{}),!i&&e.jsx(ke,{onClick:t,testId:"create-new-chat-button"})]})]})}export{Ye as C,Xe as E,De as H,Ke as S,Me as a};
//# sourceMappingURL=f994slaknt0q0gbk.js.map
