const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/g8fao4zcu8rl4ap4.js","assets/lj2b9v3ilohzzubf.js","assets/np8fo7dxv82gt6zv.js","assets/root-jo2ifv11.css","assets/m2xe8hrs3fe8d0zo.js","assets/conversation-small-o3h1ik6j.css","assets/db2yuwmgtlw331km.js","assets/u7imi8dyp3ybk8s0.js","assets/nb19zwwjnu1w9qvt.js","assets/grlfcfuez0u45yoc.js"])))=>i.map(i=>d[i]);
import{u as se,j as e,r as m,ak as x,dP as w,aX as D,aC as I,ao as T,ap as A,J as z,aH as te,a4 as ae,aq as U,Z as N,aw as O,ag as ne,cV as ie,m as H,W as oe,bB as re,bC as le,I as ce,aV as K,ea as v,au as de,av as ue,f1 as me}from"./lj2b9v3ilohzzubf.js";import{dC as P,D as _,k7 as W,k8 as ge,dE as fe,et as xe,k9 as he,ka as be,gK as q,cH as pe,kb as Se,bk as je,ch as ve,kc as Ce,U as G,b5 as ke,ds as R,b3 as Ie,b4 as ze,kd as Ne,es as ye,jl as Ge,b0 as V,jm as Me,j8 as we,j9 as Te,dG as Z,cl as Ae,fk as Oe,bg as Pe,cP as _e,y as Ee,ke as k,kf as M,dq as Fe,dH as Le,kg as Be,kh as De,ki as f,kj as Ue,kk as He,ij as Ke,gN as X,b1 as $,kl as We,km as qe,kn as Re,ko as S,kp as Ve,f$ as Ze,a9 as Xe,kq as $e,kr as Qe,ks as Ye,fh as Je,kt as es}from"./m2xe8hrs3fe8d0zo.js";import{N as ss,L as E,bt as ts,aA as as,bc as ns,aw as is,K as os}from"./np8fo7dxv82gt6zv.js";import{N as rs,e as ls}from"./n985yc0bql5eas8a.js";import{m as F}from"./utt1v4s8vubsyl62.js";import{U as cs,P as ds}from"./d1jdyv6e1zm7b7yx.js";function us(){const s=P(_.SonicSidebar),[a,t]=m.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(F.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(gs,{children:e.jsx(W,{href:"/search",target:"_blank",icon:e.jsx("div",{className:x("gizmo-shadow-stroke mr-[0.5] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(ge,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(fs,{isOpen:a,setIsOpen:t,onDismiss:()=>s.markAsViewed()}),e.jsx(ss,{className:x("icon-md text-token-text-tertiary",!a&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function ms(){const s=xe(),a=P(_.hasSeenSncSidebarTooltip),t=he(),n=be(),{activeModals:i}=q(),o=pe();return!a.isLoading&&a.eligible&&!t&&i.size===0&&!s&&!n&&!o}function gs({children:s}){const a=ms(),t=P(_.hasSeenSncSidebarTooltip);return a?e.jsx(fe,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:t.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function fs({isOpen:s,setIsOpen:a,onDismiss:t}){return e.jsx(w,{open:s,onOpenChange:a,triggerButton:e.jsx("button",{className:x("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:n=>{n.preventDefault()},children:e.jsx(E,{className:"icon-md"})}),children:e.jsx(D.Item,{onClick:n=>{n.preventDefault(),t()},children:e.jsx(I,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function Q(){const s=se("114024");return!s.value||s.isLoading?null:e.jsx(us,{})}const xs=T(()=>A(()=>import("./g8fao4zcu8rl4ap4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(s=>s.FannyPackAction)),hs=T(()=>A(()=>Promise.resolve().then(()=>Cs),void 0).then(s=>s.GizmoSidebarList));function _s({clientThreadId:s,onNewThread:a}){const t=ke(s),n=N(),{isUnauthenticated:i}=O(),o=R(s),l=ne();return i?null:e.jsxs(e.Fragment,{children:[e.jsx(Ie,{onNewThread:a}),n?.canInteractWithGizmos()?e.jsx(hs,{currentGizmoId:o}):e.jsx(Q,{}),!1,!i&&e.jsx(ze,{activeId:l?void 0:t})]})}function Es({className:s,onNewThread:a}){const t=z(),n=te(),i=Se(),o=ae(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:l}=je();return e.jsxs("div",{className:x("flex",o?.visible&&o.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(U,{sideOffset:4,label:t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(ve,{className:"no-draggable","aria-label":t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{Ce(n)?G.toggleNavSidebar():G.togglePopoverNavSidebar()},icon:ts,mobileIcon:as,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[l&&e.jsx(xs,{}),!i&&e.jsx(rs,{onClick:a,testId:"create-new-chat-button"})]})]})}function Y(){const s=z(),a=q(),t=s.formatMessage({id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"});return e.jsx(Ne,{children:e.jsx(F.div,{whileTap:{scale:.98},children:e.jsx(ie,{to:ye(),onClick:()=>{a.activeSidebar==="popover-nav"&&G.setActiveSidebar(!1)},children:e.jsx(Ge,{icon:ns,"data-testid":"explore-gpts-button",children:t})},"explore")})})}const bs=T(()=>A(()=>import("./grlfcfuez0u45yoc.js"),__vite__mapDeps([9,1,2,3,4,5])).then(s=>s.GizmoKeepInSidebarMenuItem));var J=(s=>(s[s.Keep=0]="Keep",s[s.Recents=1]="Recents",s))(J||{});const ps=2;function L({isActive:s,isNewConversation:a}){const t=H(),n=oe(),i=V();return e.jsx("div",{className:x(i?"":"bg-token-sidebar-surface-primary","pt-0"),children:e.jsx(B,{gizmo:void 0,isActive:s,onClick:o=>{re(le(t))&&!a&&(o.preventDefault(),Me(n))}})})}function Ss(s,a,t,n){const i=Ee(s,r=>r.flair.kind),o=[...i[k.FirstParty]?.map(({resource:r})=>({gizmo:r,section:0}))??[],...i[k.SidebarKeep]?.map(({resource:r})=>({gizmo:r,section:0}))??[],...i[k.Recent]?.slice(0,n?i[k.Recent]?.length:ps).map(({resource:r})=>({gizmo:r,section:1}))??[]],l=o.length>t+1,c=(l||n)&&!a&&o.length>t?o.slice(0,t):o,g=[...c.filter(({section:r})=>r===0),...c.filter(({section:r})=>r===1)];return{listItems:a?g.slice(M):g,itemsLeft:o.length-c.length,needsToCollapseItems:l}}function y({gizmo:s,currentGizmoId:a,maxToShowOnLoad:t,hideOverflowMenu:n=!1}){const i=m.useRef(!1),o=!t,l=V(),{listItems:c}=Ss(s,o,t??0,l);m.useEffect(()=>{c.length>0&&!i.current&&(we({namespace:Te.ChatPageLoad})?.logTiming("render_gizmo_sidebar"),i.current=!0)},[c]);function g(r,d){const u=e.jsx(B,{gizmo:r,isActive:r.gizmo.id===a,section:d,hideOverflowMenu:n},r.gizmo.id);return l?e.jsx("li",{children:u}):u}return e.jsxs("div",{children:[c.map(({gizmo:r,section:d},u)=>e.jsxs(m.Fragment,{children:[u>1&&d!==c[u-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),g(r,d)]},u)),!l&&e.jsx(Y,{})]})}function js({currentGizmoId:s}){const{data:{gizmos:a}={}}=Z();let t=a;return e.jsxs(e.Fragment,{children:[e.jsx(L,{isActive:s===void 0,isNewConversation:!0}),e.jsx(Q,{}),t!=null?e.jsx(y,{gizmo:t,currentGizmoId:s,maxToShowOnLoad:4}):null]})}function vs({gizmo:s,isOpen:a,setIsOpen:t,section:n}){const i=H();return e.jsxs(w,{open:a,onOpenChange:t,triggerButton:e.jsx("button",{className:x("flex text-token-text-secondary hover:text-token-text-primary",a?"":"invisible group-hover:visible"),children:e.jsx(E,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[n===1&&e.jsx(D.Item,{onClick:async()=>{await Fe.updateGizmoSidebar(i,Le,s.gizmo.id,"keep")},children:e.jsx(I,{...j.keepInSidebar})}),e.jsx(bs,{gizmoResource:s})]})}function B({gizmo:s,historyDisabled:a,section:t,onClick:n,isActive:i,hideOverflowMenu:o=!1}){const l=z(),[c,g]=m.useState(!1),[r,d]=m.useState(!1),u=N(),h=!!s?.gizmo.tags?.includes(Ae.FirstParty),p=!1;let C=!1,b;if(s!=null)b=s.gizmo.display.name||Oe;else{if(u==null)return null;a?b=l.formatMessage(j.clearChat):u.canInteractWithGizmos()?b=Be:b=l.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return e.jsx(F.div,{whileTap:{scale:.98},onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},children:e.jsx(W,{loggingGizmoId:s?.gizmo.id??"primary",href:s!=null?Pe(s):"/",onClick:n,showActiveIndicator:C,icon:e.jsx(_e,{gizmoId:s?.gizmo.id,isFirstParty:s==null||h,src:s?.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:c,label:b,hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(r||c)&&s!=null&&!p&&!o&&e.jsx("div",{className:"text-token-text-tertiary",onClick:ee=>{ee.preventDefault()},children:e.jsx(vs,{gizmo:s,isOpen:c,setIsOpen:g,section:t})}),!o&&e.jsx(U,{side:"right",label:l.formatMessage(a?j.clearChat:j.newChat),className:"flex items-center",children:e.jsx("button",{className:c?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:a?e.jsx(is,{className:"icon-md"}):e.jsx(os,{className:"icon-md"})})})]})})})}const j=ce({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}}),Cs=Object.freeze(Object.defineProperty({__proto__:null,DefaultGPTSidebarListItem:L,GizmoSidebarList:js,GizmoSidebarListContent:y,GizmoSidebarListItem:B,SidebarSectionType:J,sidebarMessages:j},Symbol.toStringTag,{value:"Module"}));function ks({currentGizmoId:s,gizmos:a,onClick:t}){const{isSidebarFlyoutOpen:n,onSidebarFlyoutOpenChange:i}=De(),o=n(f.Gizmo);return e.jsx("div",{className:"group mt-1 flex w-full items-center justify-start",children:e.jsx(w,{onOpenChange:l=>i(f.Gizmo,l),side:"right",sideOffset:4,open:o,contentAlign:"end",triggerButton:e.jsxs("button",{className:x("flex flex-1 select-none items-center gap-2 rounded-lg px-2 py-2.5 text-sm tracking-condensed text-token-text-secondary hover:bg-token-main-surface-secondary focus:ring-0",o&&"bg-token-main-surface-secondary"),onClick:t,children:[e.jsx(E,{className:x("icon-md mr-1 font-semibold text-token-sidebar-icon")}),e.jsx("span",{className:"text-left",children:e.jsx(I,{id:"qTIiY/",defaultMessage:"See more"})})]}),size:"auto",children:e.jsx("div",{className:"max-h-[50dvh] overflow-x-auto px-2 [scrollbar-gutter:stable]",children:e.jsx(K,{children:e.jsx("ul",{className:"flex flex-col gap-0.5",children:e.jsx(y,{gizmo:a,currentGizmoId:s,hideOverflowMenu:!0})})})})})})}function Is({currentGizmoId:s}){const{data:{gizmos:a}={}}=Z();let t=a;const n=!t||t?.length===0,i=t&&t?.length>M;return n?null:e.jsx(e.Fragment,{children:e.jsxs(Ue,{header:e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",children:e.jsx(I,{id:"ZT2HVu",defaultMessage:"GPTs"})}),isLastInGroup:!0,children:[e.jsx(Y,{}),e.jsx(L,{isActive:s===void 0,isNewConversation:!0}),e.jsx(y,{gizmo:t??[],currentGizmoId:s,maxToShowOnLoad:M}),i&&e.jsx(K,{children:e.jsx(ks,{currentGizmoId:s,gizmos:t??[]})})]})})}function zs({clientThreadId:s}){const a=N(),t=R(s),{isUnauthenticated:n}=O();return n?null:e.jsxs("div",{className:x(v.screenContent),children:[null,e.jsx(He,{clientThreadId:s}),a?.canInteractWithGizmos()?e.jsx(Is,{currentGizmoId:t}):null]})}function Ns(){const s=N(),a=s?.data==null,{isUnauthenticated:t}=O(),{openSettings:n}=Ke(),[i]=m.useState(()=>{const d=de.getCookie(ue.Workspace);return typeof d=="string"&&d!==me}),o=z(),{store:l,actions:c}=X(),g=l(d=>d.mode);if(!s||i&&a)return null;const r=t?e.jsx(cs,{}):e.jsx(ls,{onClickSettings:()=>n()});return e.jsxs($,{name:"user-profile-bar",className:"z-10 mb-[0.5px] grid-cols-[minmax(0,_1fr)_auto] px-sidebar-inline md:py-1.5",type:"primary",disableSizeTracking:!0,style:{"--bar-gap":"12px","--bar-background-color":"transparent"},children:[r,e.jsx("div",{className:v.togglePinWrapper,children:e.jsx(We,{tooltipSideOffset:14,className:v.pinSidebarAction,icon:e.jsx(qe,{}),onActivate:d=>{d.preventDefault(),d.persist(),Re.togglePinSidebar(d,c,g===S.Floating?S.Pinned:S.Floating)},label:g===S.Floating?o.formatMessage({id:"b43Hkt",defaultMessage:"Pin Sidebar"}):o.formatMessage({id:"6m3n9w",defaultMessage:"Unpin Sidebar"}),htmlFor:Ve.FloatingOrPinned})})]})}function ys(){return e.jsx($,{className:"z-10 px-sidebar-inline pb-0.5",type:"primary",disableSizeTracking:!0,style:{"--bar-gap":"12px","--bar-background-color":"transparent"},children:e.jsx(ds,{})})}function Gs(){return e.jsxs(Ze,{className:x(v.screenTrailingBarContainer),children:[e.jsx(ys,{}),e.jsx(Ns,{})]})}function Fs(){const{clientThreadId:s,onNewThread:a}=Xe(),[t,n]=m.useState(!1),[i,o]=m.useState(!1),[l,c]=m.useState(!1),{store:g,actions:r}=X(),d=m.useCallback(h=>h===f.Conversation?t:h===f.Gizmo?i:h===f.Conversation2?l:!1,[t,i,l]),u=m.useCallback((h,p)=>{const C=b=>{h===f.Conversation?n(b):h===f.Gizmo?o(b):h===f.Conversation2&&c(b)};if(p){C(p);return}setTimeout(()=>{C(p)},100)},[]);return $e(()=>{u(f.Conversation,!1),u(f.Gizmo,!1),u(f.Conversation2,!1),window.matchMedia("(max-width: 700px)").matches&&g.getState().mode===S.Floating&&setTimeout(()=>{r.closeSidebar()},100)}),e.jsxs(Qe,{value:{isSidebarFlyoutOpen:d,onSidebarFlyoutOpenChange:u},children:[e.jsx(Ye,{}),e.jsx(Je,{anchor:"vertical",className:x(v.screen,"popover flex-1 border-r border-r-token-border-xlight"),name:"sidebar",leading:e.jsx(es,{onNewThread:a}),trackLeading:!0,trailing:e.jsx(Gs,{}),children:e.jsx(zs,{clientThreadId:s})})]})}export{Fs as C,Cs as G,Es as S,_s as a};
//# sourceMappingURL=o0g2k1x6ujprc5b0.js.map
