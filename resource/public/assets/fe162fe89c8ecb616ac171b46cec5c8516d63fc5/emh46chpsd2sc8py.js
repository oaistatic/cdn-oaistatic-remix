const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/km1cj2ifwclcfk7m.js","assets/lklglvrzltpv3f05.js","assets/dr5q0mnwgdiuy1ac.js","assets/root-fllmzfn1.css","assets/j1opitz9a3u4difi.js","assets/fn5bn67vlrtkutmt.js","assets/conversation-small-bez2bigx.css","assets/bsxj1qnf5qq972mc.js","assets/kqwdyvkaaavvn8k3.js","assets/ckxtmp809sfjyjji.js","assets/kyiaok12vbk3z3k5.js"])))=>i.map(i=>d[i]);
import{fH as w,cG as R,w as D,aa as O,as as G,at as F,gl as U,gm as H,g1 as B,o as W,d5 as q,h as i,f as V,aX as X,bR as $,bo as Q,br as y,S as C,P as j,aV as Z,aW as J,U as k,f$ as K,v as Y,dW as ee,dL as I,fq as ae,cB as se,aw as te,f4 as x}from"./dr5q0mnwgdiuy1ac.js";import{j as e,r as z,M as h,c as re,X as ne}from"./lklglvrzltpv3f05.js";import{a$ as _,aS as oe,aZ as ie,U as L,A as P,bG as de,hj as ce,ci as le,cp as he,ck as me,cj as ue,v as ge,cS as xe,b_ as pe,dn as fe}from"./fn5bn67vlrtkutmt.js";import{e as ve}from"./e0j7g4azm9nlvt6p.js";import{C as Ce}from"./id6j6wzhtmplkq2i.js";import{m as je}from"./bpir28tsvsj8dvno.js";import{G as Te}from"./ohdwbgr1hwj1s89z.js";const N=({children:a,icon:s})=>e.jsxs("div",{className:"mb-4 flex items-start justify-start gap-2.5 rounded-md bg-token-main-surface-tertiary p-4 text-token-text-secondary last:mb-0",children:[s!=null&&e.jsx(s,{className:"icon-sm mt-1 flex-shrink-0"}),a]});function E({clientThreadId:a}){const s=w(a),r=R(a,l=>l?.sharedConversationMetadata?.authorName),t=D(l=>O.getThreadCreateTime(a,l)),o=G(a),d=F(a,o),c=z.useMemo(()=>je(d),[d]),n=U(a),u=H(a),p=n||u;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:s}),(r!=null||t!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[r!=null&&e.jsx("span",{children:r}),r!=null&&t!=null&&e.jsx("span",{className:"px-2",children:"•"}),t!=null&&e.jsx(B,{value:t,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(Se,{shouldShowCodeInterpreterDisclaimer:c,shouldShowPersonalizedDataDisclaimer:p})]})}const Se=({shouldShowCodeInterpreterDisclaimer:a,shouldShowPersonalizedDataDisclaimer:s})=>e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"mt-4",children:e.jsx(N,{icon:_,children:e.jsx(h,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),s&&e.jsx("div",{className:"mt-4",children:e.jsx(N,{icon:_,children:e.jsx(h,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),Me=({clientThreadId:a})=>{const s=W(),r=q(a),{data:t,isLoading:o}=oe(r);if(o)return null;const d=s?.accountUserId?t?f.loggedInCtaGizmo:f.loggedInCta:f.loggedOutCta,c=s&&t?ie(t):"/";let n=i.sharedConversationLoggedOutClicked;return s&&s?.accountUserId&&(s.isFree()?n=t?i.sharedConversationFreeGizmoClicked:i.sharedConversationFreeClicked:n=t?i.sharedConversationPaidGizmoClicked:i.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(Te,{href:c,onClickTrackingEventName:n,children:e.jsx(h,{...d,values:{name:t?.gizmo.display.name}})})})},f=V({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function be({clientThreadId:a,isModeratingThread:s,continueConversationUrl:r}){const t=X(),o=re(),{layer:d}=$("2840731323"),{value:c}=Q("1860647109"),n=d.get("is_continue_enabled",!1)||t?.includes("debug");return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!n&&e.jsx(Me,{clientThreadId:a}),s&&c&&e.jsx(y,{onClick:()=>{L.openModal(P.SharedConversationModeration)},children:o.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),n&&r&&e.jsx(y,{color:"primary",as:"link",to:r,size:"giant",onClick:()=>{C.logEvent("chatgpt_continue_shared_conversation_click"),j.logEvent(i.sharedConversationContinueConversationClicked)},children:o.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function ye({onClickReportSharedConversation:a}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{a()},children:e.jsx(h,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(v,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(h,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(v,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(h,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(v,{})]})}const v=()=>e.jsx("span",{children:"|"}),ke=Z(()=>J(()=>import("./km1cj2ifwclcfk7m.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(a=>a.SearchResultsModal));function Ae({sharedConversationId:a,initiallyHighlightedMessageId:s,continueConversationUrl:r,isIndexable:t,isBetterMetatagsEnabled:o}){const c=ne().action==="moderate",n=G(a);z.useEffect(()=>{j.logEvent(i.sharedConversationPageLoaded),C.logEvent("chatgpt_conversation_share_page_loaded")},[]);const u=de(a)??k,p=ce(u),l=K(a,n),T=Y.getTitle(a),m=ee(),A=I(),S=()=>[...new Array(l).keys()].map(g=>{const b=e.jsx(ve,{isFinalTurn:g===l-1,turnIndex:g,clientThreadId:a,conversationLeafId:n,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:u??k,scrollToMessageId:s,avatarClassName:p,showAvatar:!m},g);return m?e.jsx("li",{className:x.conversationTurnWrapper,children:b},g):b}),M=e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(be,{clientThreadId:a,isModeratingThread:c,continueConversationUrl:r}),e.jsx(ye,{onClickReportSharedConversation:()=>{L.openModal(P.ReportConversation),C.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),j.logEvent(i.sharedConversationReportContentClicked,{location:"Static Shared Thread Page"})}})]});return e.jsxs(ae.Provider,{value:{serverSharedThreadId:a,isIndexable:t},children:[!o&&e.jsx(le,{children:T!=null&&e.jsx("title",{children:T})}),e.jsxs("div",{className:"flex h-full flex-col",children:[m?e.jsx(he,{className:se.application,thread:e.jsxs(me,{anchor:"top",className:te(x.screen),name:"thread",trackLeading:!0,trackTrailing:!0,trailing:M,children:[e.jsx(ue,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:A}),e.jsx("div",{className:x.staticSharedThreadHeader,children:e.jsx(E,{clientThreadId:a})}),e.jsx("ol",{className:x.conversationTurnList,children:S()})]}),threadExtendedInfo:e.jsx(ge,{clientThreadId:a})}):e.jsxs("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:[e.jsx(xe,{children:e.jsx(E,{clientThreadId:a})}),S()]}),!m&&M]}),e.jsx(pe,{serverThreadId:a,clientThreadId:a,isStaticSharedThread:!0}),e.jsx(Ce,{clientThreadId:a}),!m&&e.jsx(_e,{clientThreadId:a}),e.jsx(fe,{clientThreadId:a})]})}function _e({clientThreadId:a}){return I()&&e.jsx(ke,{clientThreadId:a})}export{Ae as S};
//# sourceMappingURL=emh46chpsd2sc8py.js.map