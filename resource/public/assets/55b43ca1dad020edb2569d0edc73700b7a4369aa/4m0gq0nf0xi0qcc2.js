const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/frp5azq6es8omsdo.js","assets/i8w88cc8b3gds516.js","assets/eh26o1l35t2fnjj4.js","assets/root-inht5vcp.css","assets/jc77wbbs48ir3t2q.js","assets/jg63sxiyqeyvfv9f.js","assets/conversation-small-nranh1cg.css","assets/n2n34r6bou1wwg9e.js","assets/kqwdyvkaaavvn8k3.js","assets/ic47xq5w4y1obgxq.js"])))=>i.map(i=>d[i]);
import{g6 as G,H as w,u as D,$ as R,ai as L,aj as O,gI as F,gJ as U,gs as H,a5 as B,df as W,j as i,f as $,aP as q,cr as K,b$ as V,bn as b,S as C,P as j,aM as J,aN as Q,gy as X,r as Y,eb as Z,fK as ee,an as k,dt as ae,fn as x,e6 as se}from"./eh26o1l35t2fnjj4.js";import{j as e,r as P,M as h,c as te,X as re}from"./i8w88cc8b3gds516.js";import{ag as N,bk as ne,_ as oe,U as z,A,c4 as ie,ho as _,hp as de,cK as ce,cL as le,v as he,db as ue,cs as me,dA as ge}from"./jg63sxiyqeyvfv9f.js";import{C as xe}from"./ctlsvvj6folqh10x.js";import{C as pe}from"./mwkkzpk83u6e8doo.js";import{C as ve}from"./n3f3nqcdnta9m7mu.js";import{m as fe}from"./f6me6s5gbwcgzvtj.js";import{G as Ce}from"./ks978xypam3896ia.js";const E=({children:a,icon:s})=>e.jsxs("div",{className:"mb-4 flex items-start justify-start gap-2.5 rounded-md bg-token-main-surface-tertiary p-4 text-token-text-secondary last:mb-0",children:[s!=null&&e.jsx(s,{className:"icon-sm mt-1 flex-shrink-0"}),a]});function I({clientThreadId:a}){const s=G(a),r=w(a,l=>l?.sharedConversationMetadata?.authorName),t=D(l=>R.getThreadCreateTime(a,l)),o=L(a),d=O(a,o),c=P.useMemo(()=>fe(d),[d]),n=F(a),m=U(a),p=n||m;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:s}),(r!=null||t!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[r!=null&&e.jsx("span",{children:r}),r!=null&&t!=null&&e.jsx("span",{className:"px-2",children:"•"}),t!=null&&e.jsx(H,{value:t,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(je,{shouldShowCodeInterpreterDisclaimer:c,shouldShowPersonalizedDataDisclaimer:p})]})}const je=({shouldShowCodeInterpreterDisclaimer:a,shouldShowPersonalizedDataDisclaimer:s})=>e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"mt-4",children:e.jsx(E,{icon:N,children:e.jsx(h,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),s&&e.jsx("div",{className:"mt-4",children:e.jsx(E,{icon:N,children:e.jsx(h,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),Te=({clientThreadId:a})=>{const s=B(),r=W(a),{data:t,isLoading:o}=ne(r);if(o)return null;const d=s?.accountUserId?t?v.loggedInCtaGizmo:v.loggedInCta:v.loggedOutCta,c=s&&t?oe(t):"/";let n=i.sharedConversationLoggedOutClicked;return s&&s?.accountUserId&&(s.isFree()?n=t?i.sharedConversationFreeGizmoClicked:i.sharedConversationFreeClicked:n=t?i.sharedConversationPaidGizmoClicked:i.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(Ce,{href:c,onClickTrackingEventName:n,children:e.jsx(h,{...d,values:{name:t?.gizmo.display.name}})})})},v=$({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function Se({clientThreadId:a,isModeratingThread:s,continueConversationUrl:r}){const t=q(),o=te(),{layer:d}=K("2840731323"),{value:c}=V("1860647109"),n=d.get("is_continue_enabled",!1)||t?.includes("debug");return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!n&&e.jsx(Te,{clientThreadId:a}),s&&c&&e.jsx(b,{onClick:()=>{z.openModal(A.SharedConversationModeration)},children:o.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),n&&r&&e.jsx(b,{color:"primary",as:"link",to:r,size:"giant",onClick:()=>{C.logEvent("chatgpt_continue_shared_conversation_click"),j.logEvent(i.sharedConversationContinueConversationClicked)},children:o.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function Me({onClickReportSharedConversation:a}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{a()},children:e.jsx(h,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(f,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(h,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(f,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(h,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(f,{})]})}const f=()=>e.jsx("span",{children:"|"}),ye=J(()=>Q(()=>import("./frp5azq6es8omsdo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(a=>a.SearchResultsModal));function Ae({sharedConversationId:a,initiallyHighlightedMessageId:s,continueConversationUrl:r,isIndexable:t,isBetterMetatagsEnabled:o}){const c=re().action==="moderate",n=L(a);P.useEffect(()=>{j.logEvent(i.sharedConversationPageLoaded),C.logEvent("chatgpt_conversation_share_page_loaded")},[]);const m=ie(a)??_,p=de(m),l=X(a,n),T=Y.getTitle(a),u=Z(),S=()=>[...new Array(l).keys()].map(g=>{const y=e.jsx(xe,{isFinalTurn:g===l-1,turnIndex:g,clientThreadId:a,conversationLeafId:n,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:m??_,scrollToMessageId:s,avatarClassName:p,showAvatar:!u},g);return u?e.jsx("li",{className:x.conversationTurnWrapper,children:y},g):y}),M=e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(Se,{clientThreadId:a,isModeratingThread:c,continueConversationUrl:r}),e.jsx(Me,{onClickReportSharedConversation:()=>{z.openModal(A.ReportConversation),C.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),j.logEvent(i.sharedConversationReportContentClicked,{location:"Static Shared Thread Page"})}})]});return e.jsxs(ee.Provider,{value:{serverSharedThreadId:a,isIndexable:t},children:[!o&&e.jsx(ce,{children:T!=null&&e.jsx("title",{children:T})}),e.jsxs("div",{className:"flex h-full flex-col",children:[u?e.jsx(pe,{className:k(ae.application),thread:e.jsxs(le,{anchor:"top",className:k(x.screen),name:"thread",trackLeading:!0,trackTrailing:!0,trailing:M,children:[e.jsx("div",{className:x.staticSharedThreadHeader,children:e.jsx(I,{clientThreadId:a})}),e.jsx("ol",{className:x.conversationTurnList,children:S()})]}),threadExtendedInfo:e.jsx(he,{clientThreadId:a})}):e.jsxs("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:[e.jsx(ue,{children:e.jsx(I,{clientThreadId:a})}),S()]}),!u&&M]}),e.jsx(me,{serverThreadId:a,clientThreadId:a,isStaticSharedThread:!0}),e.jsx(ve,{clientThreadId:a}),!u&&e.jsx(be,{clientThreadId:a}),e.jsx(ge,{clientThreadId:a})]})}function be({clientThreadId:a}){return se()&&e.jsx(ye,{clientThreadId:a})}export{Ae as S};
//# sourceMappingURL=4m0gq0nf0xi0qcc2.js.map