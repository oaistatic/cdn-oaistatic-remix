const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/emdjl2hrfn204u0b.js","assets/813n9w6xsthevnqe.js","assets/h2ot8b85cve7rfg1.js","assets/root-bkpln5bd.css","assets/hvw7rhmrf6lmvlr6.js","assets/cvslyloecw0ll845.js","assets/conversation-small-ile61fj8.css","assets/l6om5d3bfq12f0ew.js","assets/jxu0c5ap33pd0zjv.js","assets/kqwdyvkaaavvn8k3.js","assets/b7421ep9ujsjhty1.js","assets/osr2sbejnub06ig4.js","assets/do3noacblfokxtip.js","assets/983a0dy92b3ronpv.js"])))=>i.map(i=>d[i]);
import{m as e,g_ as w,g$ as D,x as R,ab as O,ay as I,az as F,r as z,gN as H,gO as U,gE as B,aS as l,Z as V,d2 as q,d as i,F as Q,bf as W,G as $,aE as Y,aR as Z,aY as b,S as C,P as j,aH as J,aI as K,fV as X,V as k,h0 as ee,y as ae,fo as A,f$ as se,gQ as te,aD as re,fr as x}from"./813n9w6xsthevnqe.js";import{at as ne,aB as oe,U as G,l as L,bi as ie,ft as de,ak as ce,cc as le,eL as he,eM as ue,fu as me,fv as ge,c2 as xe,bx as pe,cA as fe}from"./cvslyloecw0ll845.js";import{a as ve}from"./b9ie9l06usk7jwyn.js";import{C as Ce}from"./des3b73qvipbj5uz.js";import{m as je}from"./mpxtqki4m80358y8.js";import{c as _}from"./h2ot8b85cve7rfg1.js";import{G as Te}from"./90cq0kla7tz2is3m.js";const N=({children:a,icon:s})=>e.jsxs("div",{className:"mb-4 flex items-start justify-start gap-2.5 rounded-md bg-token-main-surface-tertiary p-4 text-token-text-secondary last:mb-0",children:[s!=null&&e.jsx(s,{className:"icon-sm mt-1 flex-shrink-0"}),a]});function E({clientThreadId:a}){const s=w(a),r=D(a),t=R(m=>O.getThreadCreateTime(a,m)),o=I(a),d=F(a,o),c=z.useMemo(()=>je(d),[d]),n=H(a),u=U(a),p=n||u;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:s}),(r!=null||t!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[r!=null&&e.jsx("span",{children:r}),r!=null&&t!=null&&e.jsx("span",{className:"px-2",children:"•"}),t!=null&&e.jsx(B,{value:t,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(Se,{shouldShowCodeInterpreterDisclaimer:c,shouldShowPersonalizedDataDisclaimer:p})]})}const Se=({shouldShowCodeInterpreterDisclaimer:a,shouldShowPersonalizedDataDisclaimer:s})=>e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"mt-4",children:e.jsx(N,{icon:_,children:e.jsx(l,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),s&&e.jsx("div",{className:"mt-4",children:e.jsx(N,{icon:_,children:e.jsx(l,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),Me=({clientThreadId:a})=>{const s=V(),r=q(a),{data:t,isLoading:o}=ne(r);if(o)return null;const d=s?.accountUserId?t?f.loggedInCtaGizmo:f.loggedInCta:f.loggedOutCta,c=s&&t?oe(t):"/";let n=i.sharedConversationLoggedOutClicked;return s&&s?.accountUserId&&(s.isFree()?n=t?i.sharedConversationFreeGizmoClicked:i.sharedConversationFreeClicked:n=t?i.sharedConversationPaidGizmoClicked:i.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(Te,{href:c,onClickTrackingEventName:n,children:e.jsx(l,{...d,values:{name:t?.gizmo.display.name}})})})},f=Q({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function ye({clientThreadId:a,isModeratingThread:s,continueConversationUrl:r}){const t=W(),o=$(),{layer:d}=Y("2840731323"),{value:c}=Z("1860647109"),n=d.get("is_continue_enabled",!1)||t?.includes("debug");return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!n&&e.jsx(Me,{clientThreadId:a}),s&&c&&e.jsx(b,{onClick:()=>{G.openModal(L.SharedConversationModeration)},children:o.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),n&&r&&e.jsx(b,{color:"primary",as:"link",to:r,size:"giant",onClick:()=>{C.logEvent("chatgpt_continue_shared_conversation_click"),j.logEvent(i.sharedConversationContinueConversationClicked)},children:o.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function be({onClickReportSharedConversation:a}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{a()},children:e.jsx(l,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(v,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(l,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(v,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(l,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(v,{})]})}const v=()=>e.jsx("span",{children:"|"}),ke=J(()=>K(()=>import("./emdjl2hrfn204u0b.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(a=>a.SearchResultsModal));function Pe({sharedConversationId:a,initiallyHighlightedMessageId:s,continueConversationUrl:r,isIndexable:t,isBetterMetatagsEnabled:o}){const c=X().action==="moderate",n=I(a);z.useEffect(()=>{j.logEvent(i.sharedConversationPageLoaded),C.logEvent("chatgpt_conversation_share_page_loaded")},[]);const u=ie(a)??k,p=de(u),m=ee(a,n),T=ae.getTitle(a),h=ce(),P=A(),S=()=>[...new Array(m).keys()].map(g=>{const y=e.jsx(ve,{isFinalTurn:g===m-1,turnIndex:g,clientThreadId:a,conversationLeafId:n,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:u??k,scrollToMessageId:s,avatarClassName:p,showAvatar:!h},g);return h?e.jsx("li",{className:x.conversationTurnWrapper,children:y},g):y}),M=e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(ye,{clientThreadId:a,isModeratingThread:c,continueConversationUrl:r}),e.jsx(be,{onClickReportSharedConversation:()=>{G.openModal(L.ReportConversation),C.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),j.logEvent(i.sharedConversationReportContentClicked,{location:"Static Shared Thread Page"})}})]});return e.jsxs(se.Provider,{value:{serverSharedThreadId:a,isIndexable:t},children:[!o&&e.jsx(le,{children:T!=null&&e.jsx("title",{children:T})}),e.jsxs("div",{className:"flex h-full flex-col",children:[h?e.jsx(he,{className:te.application,thread:e.jsxs(ue,{anchor:"top",className:re(x.screen),name:"thread",trackLeading:!0,trackTrailing:!0,trailing:M,children:[e.jsx(me,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:P}),e.jsx("div",{className:x.staticSharedThreadHeader,children:e.jsx(E,{clientThreadId:a})}),e.jsx("ol",{className:x.conversationTurnList,children:S()})]}),threadExtendedInfo:e.jsx(ge,{clientThreadId:a})}):e.jsxs("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:[e.jsx(xe,{children:e.jsx(E,{clientThreadId:a})}),S()]}),!h&&M]}),e.jsx(pe,{serverThreadId:a,clientThreadId:a,isStaticSharedThread:!0}),e.jsx(Ce,{clientThreadId:a}),!h&&e.jsx(_e,{clientThreadId:a}),e.jsx(fe,{clientThreadId:a})]})}function _e({clientThreadId:a}){return A()&&e.jsx(ke,{clientThreadId:a})}export{Pe as S};
//# sourceMappingURL=hnl2rwvhl1o64gx9.js.map