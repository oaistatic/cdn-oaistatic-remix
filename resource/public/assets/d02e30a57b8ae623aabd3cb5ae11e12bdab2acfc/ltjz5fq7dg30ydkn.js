import{l as e,W as D,r as i,b0 as F,aK as K,D as _,j as I,Z as T,X as Q,a1 as O,eA as V,a0 as v,aN as X,a as g,bP as Z,bg as J,aA as Y,bd as z,ap as A,P,dI as ee,fd as te}from"./egi9yqe8h527q0wn.js";import{T as j,E as ae,F as L,d as se,a as oe,l as B,p as re,q as ne,r as ie,c as de,k as ce}from"./d1idnzvl0pqu9wz9.js";import{aS as le,aH as k,a4 as N,fO as ue,m as S,cz as E,cN as me,eM as he}from"./kovfiydeinrm6blw.js";import{d as ge,C as pe}from"./g8dk0p9fqqplk9i1.js";import{T as fe}from"./i91n50yt16oqkyc4.js";import{m as xe}from"./gf88mdq83xzbrg13.js";import{b as G}from"./e6itquh41uv61tg7.js";import{b as Ce,d as ve,a as Me}from"./bue7ssrf5lr74ywi.js";import{G as be}from"./olgw4535s2akqnw4.js";const C=O({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function je({onClose:t,clientThreadId:a}){const o=D(),s=j.getTree(a),c=i.useContext(F)?.serverSharedThreadId,u=j.getServerThreadId(a),d=c??u,r=K(),l=i.useRef([]),p=i.useRef(""),f=i.useRef(null),h=i.useCallback(()=>{const m=f.current?.elements;l.current=[...m||[]].filter(n=>n.checked).map(n=>n.id).map(n=>n.replace("feedback-","")),p.current=m?.["feedback-other"].value||""},[]),x=i.useCallback((m,n)=>{if(d==null){r.danger("Moderation NOT logged successfully! serverThreadId is null"),_.addError("Moderation: serverThreadId is null");return}const b=s.getMessageId(j.getThreadCurrentLeafId(a));I.submitSharedConversationReportFeedback({message_id:b,shared_conversation_id:d,text:m,tags:n}).then(()=>{r.success("Moderation logged successfully")}).catch($=>{r.danger("Moderation NOT logged successfully! Please try again"),_.addError(new Error("Moderation: failed to log",{cause:$}))}),t()},[s,a,t,d,r]),M=i.useCallback(()=>{h(),l.current.push("moderation-reject"),x(p.current,l.current)},[x,h]),H=i.useCallback(()=>{h(),l.current.push("moderation-accept"),x(p.current,l.current)},[x,h]),U=e.jsxs(e.Fragment,{children:[e.jsx(T.Button,{title:o.formatMessage(C.submitRejectModeration),color:"danger",onClick:M}),e.jsx(T.Button,{title:o.formatMessage(C.submitAcceptModeration),color:"primary",onClick:H})]}),[q,W]=i.useState([]);return i.useEffect(()=>{I.fetchShareModerationCategories().then(m=>{const n=m.moderation_categories;W(Object.keys(n).map(b=>[b,n[b]]))})},[]),e.jsxs(Q,{isOpen:!0,onClose:t,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:o.formatMessage(C.provideAdditionalFeedback),children:[e.jsxs("form",{ref:f,children:[e.jsx(ue,{id:"feedback-other",placeholder:o.formatMessage(C.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[q.map(([m,n])=>e.jsx(S,{id:"feedback-"+m,label:n},m)),e.jsx(S,{id:"feedback-copyright",label:o.formatMessage(C.copyrightContent)}),e.jsx(S,{id:"feedback-content-other",label:o.formatMessage(C.reportOtherContent)})]})]}),e.jsx(T.Actions,{primaryButton:U})]})}function ke({clientThreadId:t}){return le(k.SharedConversationModeration)?e.jsx(je,{onClose:()=>N.closeModal(k.SharedConversationModeration),clientThreadId:t}):null}const R=({children:t,icon:a})=>e.jsxs("div",{className:"mb-4 flex items-start justify-start gap-2.5 rounded-md bg-token-main-surface-tertiary p-4 text-token-text-secondary last:mb-0",children:[a!=null&&e.jsx(a,{className:"icon-sm mt-1 flex-shrink-0"}),t]});function Te({clientThreadId:t}){const a=ae(t),o=L(t),s=se(f=>oe.getThreadCreateTime(t,f)),c=B(t),u=re(t,c),d=i.useMemo(()=>xe(u),[u]),r=ne(t),l=ie(t),p=r||l;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:a}),(o!=null||s!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[o!=null&&e.jsx("span",{children:o}),o!=null&&s!=null&&e.jsx("span",{className:"px-2",children:"•"}),s!=null&&e.jsx(V,{value:s,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(Se,{shouldShowCodeInterpreterDisclaimer:d,shouldShowPersonalizedDataDisclaimer:p})]})}const Se=({shouldShowCodeInterpreterDisclaimer:t,shouldShowPersonalizedDataDisclaimer:a})=>e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{className:"mt-4",children:e.jsx(R,{icon:G,children:e.jsx(v,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),a&&e.jsx("div",{className:"mt-4",children:e.jsx(R,{icon:G,children:e.jsx(v,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),ye=({clientThreadId:t})=>{const a=X(),o=de(t),{data:s,isLoading:c}=Ce(o);if(c)return null;const u=a?.accountUserId?s?y.loggedInCtaGizmo:y.loggedInCta:y.loggedOutCta,d=a&&s?ve(s):"/";let r=g.sharedConversationLoggedOutClicked;return a&&a?.accountUserId&&(a.isFree()?r=s?g.sharedConversationFreeGizmoClicked:g.sharedConversationFreeClicked:r=s?g.sharedConversationPaidGizmoClicked:g.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(be,{href:d,onClickTrackingEventName:r,children:e.jsx(v,{...u,values:{name:s?.gizmo.display.name}})})})},y=O({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function we({clientThreadId:t,isModeratingThread:a,continueConversationUrl:o}){const s=Z(),c=D(),{layer:u}=J("2840731323"),{value:d}=Y("1860647109"),r=u.get("is_continue_enabled",!1)||s?.includes("debug");return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!r&&e.jsx(ye,{clientThreadId:t}),a&&d&&e.jsx(z,{onClick:()=>{N.openModal(k.SharedConversationModeration)},children:c.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),r&&o&&e.jsx(z,{color:"primary",as:"link",to:o,size:"giant",onClick:()=>{A.logEvent("chatgpt_continue_shared_conversation_click"),P.logEvent(g.sharedConversationContinueConversationClicked)},children:c.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function Ae({onClickReportSharedConversation:t}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{t()},children:e.jsx(v,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(w,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(v,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(w,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(v,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(w,{})]})}const w=()=>e.jsx("span",{children:"|"});function Fe({sharedConversationId:t,initiallyHighlightedMessageId:a,continueConversationUrl:o,isIndexable:s,isBetterMetatagsEnabled:c}){const d=ee().action==="moderate",r=B(t);i.useEffect(()=>{P.logEvent(g.sharedConversationPageLoaded),A.logEvent("chatgpt_conversation_share_page_loaded")},[]);const l=Me(t)??E,p=ge(l),f=ce(t,r),h=j.getTitle(t),x=L(t);return e.jsxs(F.Provider,{value:{serverSharedThreadId:t,isIndexable:s},children:[!c&&e.jsxs(me,{children:[h!=null&&e.jsx("title",{children:h}),e.jsx("meta",{property:"og:site_name",content:"ChatGPT"}),e.jsx("meta",{name:"robots",content:s?"index,nofollow":"noindex,nofollow"},"robots"),e.jsx("meta",{property:"og:title",content:h??"Shared Chat on ChatGPT"},"og:title"),e.jsx("meta",{property:"og:description",content:"Shared "+(x!=null?`by ${x} `:"")+"via ChatGPT"},"og:description"),e.jsx("meta",{property:"og:image",content:te.src},"og:image")]}),e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsxs("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:[e.jsx(he,{children:e.jsx(Te,{clientThreadId:t})}),[...new Array(f).keys()].map(M=>e.jsx(pe,{isFinalTurn:M===f-1,turnIndex:M,clientThreadId:t,conversationLeafId:r,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:l??E,initiallyHighlightedMessageId:a,avatarClassName:p},M))]}),e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(we,{clientThreadId:t,isModeratingThread:d,continueConversationUrl:o}),e.jsx(Ae,{onClickReportSharedConversation:()=>{N.openModal(k.ReportConversation),A.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),P.logEvent(g.sharedConversationReportContentClicked,{location:"Static Shared Thread Page"})}})]})]}),e.jsx(fe,{serverThreadId:t,clientThreadId:t,isStaticSharedThread:!0}),e.jsx(ke,{clientThreadId:t})]})}export{Fe as S};
//# sourceMappingURL=ltjz5fq7dg30ydkn.js.map
