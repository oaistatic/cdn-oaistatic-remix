const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/i4r8vevav0lcaxoc.js","assets/cenhwbprxai3toix.js","assets/lzqwtbp50roqvxnh.js","assets/root-o2r7uhf3.css","assets/olbio5uf8m7nh5z5.js","assets/s26g8cj5crlmzrhm.js","assets/bomvf441parvbl6l.js","assets/conversation-small-cll5buey.css","assets/h0w2cfyxquh3a88t.js","assets/i2mam4exf28ww00h.js","assets/jth9gz8y4nfsu03x.js","assets/jyh9xl3syf7yrebg.js","assets/hn877s1av7risab0.js","assets/hn586u5on2jlex6e.js","assets/kp41qb109q7zsu08.js","assets/e3lzzvpbrfw34hi0.js","assets/c657bb6sfxb67al1.js","assets/i5dl7qcorvwptxtt.js","assets/j72yt11gyo474tkr.js","assets/d01hwntyf2775ji3.js","assets/kcdclgxeuzpy449e.js","assets/bh0hpeydruybhwyo.js","assets/oc6674sla3qapg4k.js","assets/if0s6lpo3mwf7mho.js","assets/jmi851zx6qdtjhdj.js","assets/i51i3k321hvaxal9.js","assets/lfvhb0nf0ozjlpqm.js","assets/lwsvc0prcm5qybau.js","assets/dmau43v1lisg5o8k.js","assets/leqgnttd8q44vj5y.js","assets/opnnku3lurllu7tw.js","assets/bj8mbuhov5xcqf0f.js","assets/kehs2ll784eynnt2.js","assets/ghlhzub07tt8683j.js","assets/fxwpnfsczjkyx99q.js"])))=>i.map(i=>d[i]);
import{ah as V,y as e,S as E,P as Z,d as J,ae as K,ab as P,ac as _,r as m,fj as t,a4 as g,a0 as k,c6 as Q,as as X,a1 as Y,d4 as M,ak as $}from"./cenhwbprxai3toix.js";import{hW as ee,hX as se,hY as ae,hZ as te,h_ as ne,h$ as R,i0 as re,i1 as S,i2 as oe,c9 as ie,i3 as de,i4 as ce,i5 as le,hu as he,i6 as me,i7 as ue,cP as pe,gj as N,gi as xe,i8 as Ce}from"./bomvf441parvbl6l.js";import{S as ve,D as F,C as b,b as ge,c as je,d as Te,e as fe,f as Se,F as ye}from"./oc6674sla3qapg4k.js";import{F as Ie,H as we,I as Me}from"./s26g8cj5crlmzrhm.js";import{a as D,G as H,H as y,f as A,c as Ne}from"./hn877s1av7risab0.js";import{J as B,j as O,G as U,A as be,i as Le,m as Ee,k as Pe}from"./h0w2cfyxquh3a88t.js";import{U as _e,G as ke,c as Re}from"./jyh9xl3syf7yrebg.js";import{V as Fe,bu as De,b9 as He}from"./lzqwtbp50roqvxnh.js";function W({clientThreadId:s,currentLeafId:n}){const a=D(s),r=B(s,n);return{showEmptyState:O(s)&&!r&&(H(a)||a?.kind===V.GizmoTest)}}function Ae(){return e.jsx("div",{className:"text-pretty text-center text-xs font-semibold text-token-text-primary",children:e.jsx("button",{onClick:()=>{_e.openModal(ke.ReportConversation),E.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),Z.logEvent(J.sharedConversationReportContentClicked,{location:"Dynamic Shared Thread Page"})},children:e.jsx(K,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})})})}function Be({clientThreadId:s,currentModelId:n,isModelLoaded:a,onRequestCompletion:r,v2HomepageDisclaimer:o}){return e.jsx(ve,{clientThreadId:s,currentModelId:n,isModelLoaded:a,onRequestCompletion:r,v2HomepageDisclaimer:o})}const Oe=P(()=>_(()=>import("./i4r8vevav0lcaxoc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(s=>s.ChatScreenContentModals));function Ue({disableEmptyState:s,fullWidth:n}){const{clientThreadId:a,currentModelId:r,conversationLeafId:o,onChangeItemInView:i,onChangeRating:h,onRequestCompletion:d,onRequestMoreCompletions:u,isModelLoaded:c,prefetchSearch:p}=m.useContext(y),x=U(a,o),C={clientThreadId:a,conversationLeafId:o,currentModelId:r,onChangeItemInView:i,onChangeRating:h,onRequestMoreCompletions:u,onRequestCompletion:d,showAvatar:!1},j=be(a),T=Ie({clientThreadId:a,currentLeafId:o,handleRequestCompletion:d,prefetchSearchPromise:p}),q=j||T||s,v=Le(),{initialConversationTurns:I,continuedConversationTurns:w}=ee(x,v),{showEmptyState:z}=W({clientThreadId:a,currentLeafId:o}),G=x>=2;return se(G),z&&!q?e.jsx(Be,{clientThreadId:a,currentModelId:r,isModelLoaded:c,onRequestCompletion:d,v2HomepageDisclaimer:e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(F,{clientThreadId:a})})}):e.jsxs(e.Fragment,{children:[v&&e.jsx(ae,{}),v&&w.length===0&&e.jsx(Ae,{}),I.length>0&&e.jsx("ol",{className:t.conversationTurnList,children:I.map(({turnIndex:l,isFinalTurn:f})=>e.jsx("li",{className:g(t.conversationTurnWrapper,n&&"w-full"),children:m.createElement(b,{...C,key:l,turnIndex:l,isFinalTurn:f})},l))}),v&&e.jsx(te,{}),e.jsx("ol",{className:t.conversationTurnList,children:w.map(({turnIndex:l,isFinalTurn:f})=>e.jsx("li",{className:g(t.conversationTurnWrapper,n&&"w-full"),children:m.createElement(b,{...C,key:l,turnIndex:l,isFinalTurn:f})},l))}),e.jsx(Oe,{}),x>0&&e.jsx(ne,{})]})}function We(){return e.jsx(e.Fragment,{children:e.jsx(Ue,{})})}const qe=P(()=>_(()=>import("./oc6674sla3qapg4k.js").then(s=>s.i),__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,23,24,25,26,27,12,13,14,15,16,17,18,19,20,21,28,29,30,31,32,33,34])).then(s=>s.ChatScreenComposerAlerts));function ze(){const{clientThreadId:s,currentModelId:n,isCompanionWindow:a,onRequestCompletion:r}=m.useContext(y),o=D(s),i=Ee(s),h=U(s,i),d=h>=2,u=B(s,i),c=O(s)&&!d&&H(o);ge(h,s,i,c);const{setComposerFooterElement:p}=m.useContext(R);return e.jsx("div",{className:t.footer,children:e.jsxs(re,{style:{"--bar-gap":"0.5rem","--bar-background-color":"transparent"},children:[e.jsxs(S,{type:"secondary",className:"relative",children:[e.jsx(oe,{className:t.scrollButton}),e.jsx(qe,{})]}),e.jsxs(S,{type:"primary",ref:p,children:[e.jsx(je,{clientThreadId:s,currentModelId:n,isNewThread:c,noWrap:!0,onRequestCompletion:r,showPromptStarters:c||!u}),!a&&e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(F,{clientThreadId:s})})]})]})})}function Ge(){const s=k();return e.jsx(de,{className:g(M.headerAction,M.floatSidebarAction,t.openSidebar,t.sidebarIcon),htmlFor:ce.OpenOrClosed,icon:e.jsxs(e.Fragment,{children:[e.jsx(De,{className:"h-6 w-6",style:{display:"var(--screen-size-hidden-on-compact-mode)"}}),e.jsx(He,{className:"h-6 w-6",style:{display:"var(--screen-size-hidden-on-wide-mode)"}})]}),label:s.formatMessage({id:"fWaiMq",defaultMessage:"Open Sidebar"})})}function Ve(){const s=k(),{clientThreadId:n,onNewThread:a}=m.useContext(y);return Pe(n),e.jsxs(S,{leading:!0,type:"primary",className:t.header,children:[e.jsxs("div",{className:t.headerLeading,children:[e.jsx(Ge,{}),e.jsx(Q,{to:"/",className:t.newThread,onClick:r=>{a?(r.preventDefault(),a()):E.logEvent("chatgpt_web_thread_tap_new_thread")},children:e.jsx(X,{label:s.formatMessage(L.newChat),children:e.jsx(ie,{className:t.sidebarIcon,icon:e.jsx(Fe,{}),label:s.formatMessage(L.newChat),style:{display:"var(--screen-size-hidden-on-compact-mode)"}})})}),e.jsx("div",{className:t.threadDropdown,children:e.jsx(Te,{clientThreadId:n})})]}),e.jsx("div",{className:t.headerTrailing,children:e.jsx(fe,{clientThreadId:n})})]})}const L=Y({newChat:{id:"rnCpM4",defaultMessage:"New Chat"}});function Ze(){const{isUnauthenticated:s}=$(),{clientThreadId:n}=A();return s?null:e.jsx("div",{className:t.profileInContent,children:e.jsx(Ne,{clientThreadId:n})})}function as({hideHeader:s=!1,hideFooter:n=!1}){const{clientThreadId:a,currentModelId:r,conversationLeafId:o,isCompanionWindow:i,isInstalledApp:h,onRequestCompletion:d}=A(),{showEmptyState:u}=W({clientThreadId:a,currentLeafId:o}),c=we()[r],[p,x]=le({name:"composer-bar",track:"height"}),C=Se(a),j=he(),{isOpen:T}=Re();return e.jsx(me.Provider,{value:d,children:e.jsx(ue,{children:e.jsxs(Me,{clientThreadId:a,currentLeafId:o,children:[e.jsx(pe,{children:C!=null&&e.jsx("title",{children:C})}),e.jsx(ye,{clientThreadId:a,className:"flex-1",currentModelConfig:c,children:e.jsxs(R.Provider,{value:{setComposerFooterElement:x},children:[e.jsx(N,{id:"canvas-state",name:"canvas-state",checked:j}),e.jsx(N,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:T}),e.jsx(xe,{anchor:"vertical",className:g(t.screen,i&&t.screenCompanionWindow,u&&t.screenEmptyState,h&&t.screenInstalledApp),name:"thread",leading:!s&&e.jsx(Ve,{}),style:p,trackLeading:!0,trackTrailing:!0,trailing:!n&&e.jsx(ze,{}),children:e.jsx(We,{})}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),e.jsx(Ce,{})]})]})})]})})})}export{as as C};
//# sourceMappingURL=lrh8wz5t6uhmx4c9.js.map
