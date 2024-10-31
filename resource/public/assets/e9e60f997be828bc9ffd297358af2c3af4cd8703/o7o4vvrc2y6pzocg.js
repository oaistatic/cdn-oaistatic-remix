const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/iy531oautf248r6m.js","assets/du9ygo55hccsm0ec.js","assets/ibjw18ivx5tw615x.js","assets/root-d4voymz4.css","assets/hc0go6t8u8it292j.js","assets/conversation-small-cll5buey.css","assets/e9pifcw0zbbez9d7.js","assets/fk0t1ybdlhjnuo8z.js","assets/m7ykldedawewofy8.js","assets/kl23pvq05rxrgvth.js","assets/kxc80swz6kz1g4fr.js","assets/ot4k89oi9z3cyuwx.js","assets/gj6xeouxppgt6npy.js","assets/ndpe1ojbx7c3v18s.js","assets/kwyhm54wtm4zbkpo.js","assets/huj2tv4ji3im8uo0.js","assets/j2y7wsnqu61ya7iz.js","assets/156t2vs0ziqy5ta8.js","assets/c8jcqyufjz3y3xq2.js","assets/igmk8bhhl98b6n5v.js","assets/23yqn56dfa53achp.js","assets/d0s4um1rh2f7pgrr.js","assets/ls8z0fgz00gw1alh.js","assets/g917upaeimfgkdh1.js","assets/gymcumd7hmh6bi1s.js","assets/fcsx10fpeqfsj82e.js"])))=>i.map(i=>d[i]);
import{X as k,y as e,a1 as b,ag as P,r as d,P as W,b as $,a6 as G,bA as X,O as x,T as Y,W as q,u as Q,dU as Z,az as K,ar as w,av as J,Z as M,$ as E,a3 as ee,eV as se,an as te,a8 as ne,ce as ie}from"./du9ygo55hccsm0ec.js";import{dp as h,V as p,dr as A,eG as H,c0 as ae,eT as oe,cx as re,eU as ce,eV as le,c1 as de,c2 as ue,bY as me,eW as fe,eX as xe,eY as he,au as pe,bX as ge,eZ as be,bn as ye}from"./hc0go6t8u8it292j.js";import{p as ve,ag as Se,bc as je,bd as Ne}from"./ibjw18ivx5tw615x.js";import{B as Te,D as we}from"./23yqn56dfa53achp.js";import{u as N,e as D,b as L,U as j}from"./156t2vs0ziqy5ta8.js";import{m as Ie}from"./kl23pvq05rxrgvth.js";import{d as Ce,n as ke}from"./m7ykldedawewofy8.js";import{u as Pe,a as B,H as Ge,b as Me}from"./fcsx10fpeqfsj82e.js";import{a as Ee,r as Ae}from"./huj2tv4ji3im8uo0.js";import{m as He}from"./d0s4um1rh2f7pgrr.js";function O(){const{activeModals:s}=N(),t=P(),n=h(p.ExploreGPTs),i=h(p.ExploreGPTsNewNux),o=D(),a=L(),l=H(),r=n.eligible&&!n.isLoading&&!a;let c=i.eligible&&!i.isLoading&&!a&&!o&&!l;return s.size>0&&(c=!1),!r&&t?.hasPlusFeatures()&&(c=!1),d.useEffect(()=>{c&&W.logEvent($.storeDisplayNewNux)},[c]),c}function ts({children:s}){const t=O(),n=k(),i=h(p.ExploreGPTsNewNux);return t?e.jsx(A,{side:"right",show:!0,title:n.formatMessage(I.exploreGPTsTitle),onDismiss:i.markAsViewed,sideOffset:20,theme:"bright",description:e.jsx(b,{...I.exploreGPTsDescriptionNewNux}),children:s}):e.jsx(e.Fragment,{children:s})}const I=G({exploreGPTsTitle:{id:"gptExploreGPTs.title",defaultMessage:"Explore GPTs"},exploreGPTsDescription:{id:"gptExploreGPTs.description",defaultMessage:"Now you can discover GPTs created by the community"},exploreGPTsDescriptionNewNux:{id:"gptExploreGPTs.descriptionNewNux",defaultMessage:"Discover custom versions of ChatGPT created for specific use cases like writing, research, and coding."}});function De(){const s=h(p.SonicSidebar),[t,n]=d.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(Ie.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(Be,{children:e.jsx(ae,{href:"/search",target:"_blank",icon:e.jsx("div",{className:x("gizmo-shadow-stroke mr-[0.5] flex h-6 w-6 items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(oe,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Oe,{isOpen:t,setIsOpen:n,onDismiss:()=>s.markAsViewed()}),e.jsx(ve,{className:x("icon-md text-token-text-tertiary",!t&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function Le(){const s=L(),t=h(p.hasSeenSncSidebarTooltip),n=O(),i=D(),{activeModals:o}=N(),a=H();return!t.isLoading&&t.eligible&&!n&&o.size===0&&!s&&!i&&!a}function Be({children:s}){const t=Le(),n=h(p.hasSeenSncSidebarTooltip);return t?e.jsx(A,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:n.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function Oe({isOpen:s,setIsOpen:t,onDismiss:n}){return e.jsx(Te,{open:s,onOpenChange:t,triggerButton:e.jsx("button",{className:x("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:i=>{i.preventDefault()},children:e.jsx(Se,{className:"icon-md"})}),children:e.jsx(we.Item,{onClick:i=>{i.preventDefault(),n()},children:e.jsx(b,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function ze(){const s=X("114024");return!s.value||s.isLoading?null:e.jsx(De,{})}const C=G({unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history"},retryButton:{id:"history.retryButton",defaultMessage:"Retry"}});function Re({activeId:s,isPrimaryBackgroundColor:t}){const n=Q(),[i,o]=d.useState(!1),[a,l]=d.useState(0),r=Z(),{conversations:u,hasNextPage:c,fetchNextPage:y,isLoading:g,isFetchingNextPage:z,isError:T}=Ee(),v=d.useRef(null),R=d.useCallback(f=>{g||f==null||(v.current?.disconnect(),v.current=new IntersectionObserver(U=>{U[0].isIntersecting&&c&&y()}),v.current.observe(f))},[g,c,y]);d.useEffect(()=>()=>{v.current?.disconnect()},[]),d.useMemo(()=>{re.publish({kind:"refreshHistory",conversations:u})},[u]);const S=u;d.useEffect(()=>{const f=ce(le(),Date.now());r(()=>{l(a+1)},f+1e3)},[a,r]);const m=S.length===0;d.useEffect(()=>{m||de({namespace:ue.ChatPageLoad})?.logTiming("render_history_items")},[m]);const _=Pe(S,a),{isCollapsible:F}=B(),V=N(f=>f.isHistoryCollapsed);return e.jsxs(Ve,{$centered:g||T||m,children:[m&&g&&e.jsx(K,{children:e.jsx(w,{className:"m-auto"})}),m&&T&&e.jsxs("div",{className:"p-3 text-center italic text-token-text-tertiary",children:[e.jsx(b,{...C.unableToLoadHistory}),!i&&e.jsx("div",{className:"mt-1",children:e.jsx(J,{as:"button",color:"primary",size:"small",className:"m-auto mt-2",onClick:()=>{o(!0),Ae(n)},children:e.jsx(b,{...C.retryButton})})})]}),!g&&!m&&e.jsx("div",{children:F&&V?e.jsx(_e,{activeId:s,items:S,isPrimaryBackgroundColor:t}):e.jsx(Ge,{activeId:s,bucketedItems:_,hasNextPage:c,items:S,isPrimaryBackgroundColor:t,infiniteScrollTriggerElementRef:R})}),z&&e.jsx("div",{className:"m-4 mb-5 flex justify-center",children:e.jsx(w,{})})]})}function _e({activeId:s,items:t,isPrimaryBackgroundColor:n}){const{isCollapsible:i,recentConversationLimit:o}=B(),a=me(),l=t.slice(0,o);if(s){const r=t.findIndex(u=>u.id===s);r>o-1&&l.push(t[r])}return e.jsxs("div",{className:x(n&&"first:mt-0","relative mt-5 last:mb-5"),children:[e.jsx("div",{className:x("sticky top-[--sidebar-sticky-threshold]","z-20"),children:e.jsx("span",{className:"flex h-9 items-center",children:e.jsx(fe,{$screenArch:a,children:e.jsx(b,{id:"VbQeVG",defaultMessage:"Recent"})})})}),e.jsx("ol",{className:a?"mt-1 flex flex-col gap-0.5":void 0,children:l.map((r,u)=>{const c=s===r.id,y=u===0;return e.jsx(Me,{item:r,isActive:c,isFirstItem:y,isPrimaryBackgroundColor:n,testId:`history-item-${u}`},`history-item-${r.id}`)})}),i&&e.jsx(xe,{type:"more",onClick:j.toggleHistoryCollapsed})]})}const Fe=Y.memo(Re),Ve=q.div`flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5
${({$centered:s})=>[s&&"h-full justify-center items-center empty:hidden"]}`,Ue=M(()=>E(()=>import("./iy531oautf248r6m.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(s=>s.FannyPackAction)),We=M(()=>E(()=>import("./c8jcqyufjz3y3xq2.js"),__vite__mapDeps([18,1,2,3,19,13,4,5,8,9,14,17,20,21,15,16,22,23,24,12,25,11])).then(s=>s.GizmoSidebarList));function ns({clientThreadId:s,onNewThread:t}){const n=Ce(s),i=P(),{isUnauthenticated:o}=ne(),a=ke(s),l=ie();return o?null:e.jsxs(e.Fragment,{children:[e.jsx(ye,{onNewThread:t}),i?.canInteractWithGizmos()?e.jsx(We,{currentGizmoId:a}):e.jsx(ze,{}),!1,!o&&e.jsx(Fe,{activeId:l?void 0:n})]})}function is({className:s,onNewThread:t}){const n=k(),i=ee(),o=he(),a=se(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:l}=pe();return e.jsxs("div",{className:x("flex",a?.visible&&a.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(te,{sideOffset:4,label:n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(ge,{className:"no-draggable","aria-label":n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{be(i)?j.toggleNavSidebar():j.togglePopoverNavSidebar()},icon:je,mobileIcon:Ne,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[l&&e.jsx(Ue,{}),!o&&e.jsx(He,{onClick:t,testId:"create-new-chat-button"})]})]})}export{ns as C,ts as E,Fe as H,is as S,ze as a};
//# sourceMappingURL=o7o4vvrc2y6pzocg.js.map
