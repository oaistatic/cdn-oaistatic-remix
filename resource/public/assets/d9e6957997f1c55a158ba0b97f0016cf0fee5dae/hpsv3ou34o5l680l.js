const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/e23k5tkgm8k3ryc0.js","assets/o1ivbuadejprpakj.js","assets/hpmltgx65508529x.js","assets/root-nv4wy9md.css","assets/i16nwty7q09iq1st.js","assets/conversation-small-cll5buey.css","assets/jvq3actf1qss8vnf.js","assets/cejk4t702l9hwngc.js","assets/j76lrd6kdu2dvuce.js","assets/bwu3xfza0pxwe6ru.js","assets/owhksomqrhj77rp9.js","assets/x1nuwls0vwzrssgy.js","assets/mjcfyknvrjj9hd19.js","assets/j8qjjjf38v0oqfi8.js","assets/l8i8os8zb9hbkizc.js","assets/kgovzb8a5v2gsd51.js","assets/cg1djtp0bw9bc15a.js","assets/cydma3qyvyx80hyp.js","assets/jnkgkn5x4vbbfzyc.js","assets/me6ol1fk19tysqpp.js","assets/l4ck0jsx010sty0l.js","assets/hcdx55t4k5s9h90a.js","assets/nbsdgm0upgk4irzm.js","assets/jq9wblohokz1apkp.js","assets/m1obf60srwp2ts7s.js","assets/3fewmy3xjhyris2h.js"])))=>i.map(i=>d[i]);
import{X as k,y as e,a1 as b,ag as P,r as d,P as U,b as W,a6 as G,bF as X,O as x,T as q,W as Q,u as Y,d_ as K,az as Z,ar as w,av as J,Z as M,$ as E,a3 as ee,e$ as se,an as te,a8 as ne,cj as ie}from"./o1ivbuadejprpakj.js";import{dx as h,V as p,dz as A,eF as H,c4 as ae,eS as oe,cz as re,eT as ce,eU as le,c5 as de,a5 as ue,c0 as me,eV as fe,eW as xe,eX as he,az as pe,b$ as ge,eY as be,br as ye}from"./i16nwty7q09iq1st.js";import{p as Se,ag as ve,bc as je,bd as Ne}from"./hpmltgx65508529x.js";import{B as Te,D as we}from"./l4ck0jsx010sty0l.js";import{u as N,e as D,b as L,U as j}from"./cydma3qyvyx80hyp.js";import{m as Ie}from"./bwu3xfza0pxwe6ru.js";import{d as Ce,m as ke}from"./j76lrd6kdu2dvuce.js";import{u as Pe,a as z,H as Ge,b as Me}from"./3fewmy3xjhyris2h.js";import{a as Ee,r as Ae}from"./kgovzb8a5v2gsd51.js";import{N as He}from"./hcdx55t4k5s9h90a.js";function B(){const{activeModals:s}=N(),t=P(),n=h(p.ExploreGPTs),i=h(p.ExploreGPTsNewNux),o=D(),a=L(),l=H(),r=n.eligible&&!n.isLoading&&!a;let c=i.eligible&&!i.isLoading&&!a&&!o&&!l;return s.size>0&&(c=!1),!r&&t?.hasPlusFeatures()&&(c=!1),d.useEffect(()=>{c&&U.logEvent(W.storeDisplayNewNux)},[c]),c}function ts({children:s}){const t=B(),n=k(),i=h(p.ExploreGPTsNewNux);return t?e.jsx(A,{side:"right",show:!0,title:n.formatMessage(I.exploreGPTsTitle),onDismiss:i.markAsViewed,sideOffset:20,theme:"bright",description:e.jsx(b,{...I.exploreGPTsDescriptionNewNux}),children:s}):e.jsx(e.Fragment,{children:s})}const I=G({exploreGPTsTitle:{id:"gptExploreGPTs.title",defaultMessage:"Explore GPTs"},exploreGPTsDescription:{id:"gptExploreGPTs.description",defaultMessage:"Now you can discover GPTs created by the community"},exploreGPTsDescriptionNewNux:{id:"gptExploreGPTs.descriptionNewNux",defaultMessage:"Discover custom versions of ChatGPT created for specific use cases like writing, research, and coding."}});function De(){const s=h(p.SonicSidebar),[t,n]=d.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(Ie.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(ze,{children:e.jsx(ae,{href:"/search",target:"_blank",icon:e.jsx("div",{className:x("gizmo-shadow-stroke mr-[0.5] flex h-6 w-6 items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(oe,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Be,{isOpen:t,setIsOpen:n,onDismiss:()=>s.markAsViewed()}),e.jsx(Se,{className:x("icon-md text-token-text-tertiary",!t&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function Le(){const s=L(),t=h(p.hasSeenSncSidebarTooltip),n=B(),i=D(),{activeModals:o}=N(),a=H();return!t.isLoading&&t.eligible&&!n&&o.size===0&&!s&&!i&&!a}function ze({children:s}){const t=Le(),n=h(p.hasSeenSncSidebarTooltip);return t?e.jsx(A,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:n.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function Be({isOpen:s,setIsOpen:t,onDismiss:n}){return e.jsx(Te,{open:s,onOpenChange:t,triggerButton:e.jsx("button",{className:x("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:i=>{i.preventDefault()},children:e.jsx(ve,{className:"icon-md"})}),children:e.jsx(we.Item,{onClick:i=>{i.preventDefault(),n()},children:e.jsx(b,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function Oe(){const s=X("114024");return!s.value||s.isLoading?null:e.jsx(De,{})}const C=G({unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history"},retryButton:{id:"history.retryButton",defaultMessage:"Retry"}});function _e({activeId:s,isPrimaryBackgroundColor:t}){const n=Y(),[i,o]=d.useState(!1),[a,l]=d.useState(0),r=K(),{conversations:u,hasNextPage:c,fetchNextPage:y,isLoading:g,isFetchingNextPage:O,isError:T}=Ee(),S=d.useRef(null),_=d.useCallback(f=>{g||f==null||(S.current?.disconnect(),S.current=new IntersectionObserver($=>{$[0].isIntersecting&&c&&y()}),S.current.observe(f))},[g,c,y]);d.useEffect(()=>()=>{S.current?.disconnect()},[]),d.useMemo(()=>{re.publish({kind:"refreshHistory",conversations:u})},[u]);const v=u;d.useEffect(()=>{const f=ce(le(),Date.now());r(()=>{l(a+1)},f+1e3)},[a,r]);const m=v.length===0;d.useEffect(()=>{m||de({namespace:ue.ChatPageLoad})?.logTiming("render_history_items")},[m]);const R=Pe(v,a),{isCollapsible:F}=z(),V=N(f=>f.isHistoryCollapsed);return e.jsxs(Ve,{$centered:g||T||m,children:[m&&g&&e.jsx(Z,{children:e.jsx(w,{className:"m-auto"})}),m&&T&&e.jsxs("div",{className:"p-3 text-center italic text-token-text-tertiary",children:[e.jsx(b,{...C.unableToLoadHistory}),!i&&e.jsx("div",{className:"mt-1",children:e.jsx(J,{as:"button",color:"primary",size:"small",className:"m-auto mt-2",onClick:()=>{o(!0),Ae(n)},children:e.jsx(b,{...C.retryButton})})})]}),!g&&!m&&e.jsx("div",{children:F&&V?e.jsx(Re,{activeId:s,items:v,isPrimaryBackgroundColor:t}):e.jsx(Ge,{activeId:s,bucketedItems:R,hasNextPage:c,items:v,isPrimaryBackgroundColor:t,infiniteScrollTriggerElementRef:_})}),O&&e.jsx("div",{className:"m-4 mb-5 flex justify-center",children:e.jsx(w,{})})]})}function Re({activeId:s,items:t,isPrimaryBackgroundColor:n}){const{isCollapsible:i,recentConversationLimit:o}=z(),a=me(),l=t.slice(0,o);if(s){const r=t.findIndex(u=>u.id===s);r>o-1&&l.push(t[r])}return e.jsxs("div",{className:x(n&&"first:mt-0","relative mt-5 last:mb-5"),children:[e.jsx("div",{className:x("sticky top-[--sidebar-sticky-threshold]","z-20"),children:e.jsx("span",{className:"flex h-9 items-center",children:e.jsx(fe,{$screenArch:a,children:e.jsx(b,{id:"VbQeVG",defaultMessage:"Recent"})})})}),e.jsx("ol",{className:a?"mt-1 flex flex-col gap-0.5":void 0,children:l.map((r,u)=>{const c=s===r.id,y=u===0;return e.jsx(Me,{item:r,isActive:c,isFirstItem:y,isPrimaryBackgroundColor:n,testId:`history-item-${u}`},`history-item-${r.id}`)})}),i&&e.jsx(xe,{type:"more",onClick:j.toggleHistoryCollapsed})]})}const Fe=q.memo(_e),Ve=Q.div`flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5
${({$centered:s})=>[s&&"h-full justify-center items-center empty:hidden"]}`,$e=M(()=>E(()=>import("./e23k5tkgm8k3ryc0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(s=>s.FannyPackAction)),Ue=M(()=>E(()=>import("./jnkgkn5x4vbbfzyc.js"),__vite__mapDeps([18,1,2,3,19,13,4,5,8,9,14,17,20,21,15,16,22,23,24,12,25,11])).then(s=>s.GizmoSidebarList));function ns({clientThreadId:s,onNewThread:t}){const n=Ce(s),i=P(),{isUnauthenticated:o}=ne(),a=ke(s),l=ie();return o?null:e.jsxs(e.Fragment,{children:[e.jsx(ye,{onNewThread:t}),i?.canInteractWithGizmos()?e.jsx(Ue,{currentGizmoId:a}):e.jsx(Oe,{}),!1,!o&&e.jsx(Fe,{activeId:l?void 0:n})]})}function is({className:s,onNewThread:t}){const n=k(),i=ee(),o=he(),a=se(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:l}=pe();return e.jsxs("div",{className:x("flex",a?.visible&&a.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(te,{sideOffset:4,label:n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(ge,{className:"no-draggable","aria-label":n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{be(i)?j.toggleNavSidebar():j.togglePopoverNavSidebar()},icon:je,mobileIcon:Ne,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[l&&e.jsx($e,{}),!o&&e.jsx(He,{onClick:t,testId:"create-new-chat-button"})]})]})}export{ns as C,ts as E,Fe as H,is as S,Oe as a};
//# sourceMappingURL=hpsv3ou34o5l680l.js.map
