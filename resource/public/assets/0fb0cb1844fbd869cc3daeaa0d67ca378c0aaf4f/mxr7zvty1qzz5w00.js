const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dj4xilw1ovxf7lyf.js","assets/gqmy69lfum1xn3in.js","assets/i4z8naqcr3t3djqa.js","assets/root-dcq62fgs.css","assets/icnxn2xqcp3w18gd.js","assets/conversation-small-ict01xsi.css","assets/e33rr2tekz3b36pc.js","assets/eqioprfiyr5t7wpr.js","assets/kqwdyvkaaavvn8k3.js","assets/u2yzjc5fk8e8a6w2.js","assets/osln3piq629gytwx.js","assets/gvt29ccgnn9ozjnb.js","assets/983a0dy92b3ronpv.js"])))=>i.map(i=>d[i]);
import{j as e,r as z,fk as O,aG as l,a8 as F,d as i,X as U,bU as H,Y as B,bs as q,y as Q,aK as k,S as j,P as T,aE as V,aF as W,Q as $,fN as K,fE as X,ar as _,e6 as x}from"./gqmy69lfum1xn3in.js";import{g9 as Y,ga as A,a7 as J,a8 as Z,dO as L,dR as ee,dS as ae,dT as se,de as te,b9 as re,bf as ne,U as w,aa as I,cj as oe,gb as N,gc as ie,gd as de,v as ce,a$ as le,bA as R,ab as he,cG as me,eT as ue,eU as ge,ge as xe,gf as pe,co as fe,c0 as ve,d6 as Ce}from"./icnxn2xqcp3w18gd.js";import{C as je}from"./ouf5xd4dzzqtohhf.js";import{C as Te}from"./j2hbc1gzdtzedqly.js";import{m as Se}from"./o33xgveo5d2fezxe.js";import{c as G}from"./i4z8naqcr3t3djqa.js";import{G as ye}from"./g9psrsj4nhlsuf56.js";const E=({children:a,icon:s})=>e.jsxs("div",{className:"mb-4 flex items-start justify-start gap-2.5 rounded-md bg-token-main-surface-tertiary p-4 text-token-text-secondary last:mb-0",children:[s!=null&&e.jsx(s,{className:"icon-sm mt-1 flex-shrink-0"}),a]});function P({clientThreadId:a}){const s=Y(a),r=A(a),t=J(u=>Z.getThreadCreateTime(a,u)),o=L(a),d=ee(a,o),c=z.useMemo(()=>Se(d),[d]),n=ae(a),m=se(a),p=n||m;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:s}),(r!=null||t!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[r!=null&&e.jsx("span",{children:r}),r!=null&&t!=null&&e.jsx("span",{className:"px-2",children:"•"}),t!=null&&e.jsx(O,{value:t,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(be,{shouldShowCodeInterpreterDisclaimer:c,shouldShowPersonalizedDataDisclaimer:p})]})}const be=({shouldShowCodeInterpreterDisclaimer:a,shouldShowPersonalizedDataDisclaimer:s})=>e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"mt-4",children:e.jsx(E,{icon:G,children:e.jsx(l,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),s&&e.jsx("div",{className:"mt-4",children:e.jsx(E,{icon:G,children:e.jsx(l,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),Me=({clientThreadId:a})=>{const s=F(),r=te(a),{data:t,isLoading:o}=re(r);if(o)return null;const d=s?.accountUserId?t?v.loggedInCtaGizmo:v.loggedInCta:v.loggedOutCta,c=s&&t?ne(t):"/";let n=i.sharedConversationLoggedOutClicked;return s&&s?.accountUserId&&(s.isFree()?n=t?i.sharedConversationFreeGizmoClicked:i.sharedConversationFreeClicked:n=t?i.sharedConversationPaidGizmoClicked:i.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(ye,{href:c,onClickTrackingEventName:n,children:e.jsx(l,{...d,values:{name:t?.gizmo.display.name}})})})},v=U({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function ke({clientThreadId:a,isModeratingThread:s,continueConversationUrl:r}){const t=H(),o=B(),{layer:d}=q("2840731323"),{value:c}=Q("1860647109"),n=d.get("is_continue_enabled",!1)||t?.includes("debug");return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!n&&e.jsx(Me,{clientThreadId:a}),s&&c&&e.jsx(k,{onClick:()=>{w.openModal(I.SharedConversationModeration)},children:o.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),n&&r&&e.jsx(k,{color:"primary",as:"link",to:r,size:"giant",onClick:()=>{j.logEvent("chatgpt_continue_shared_conversation_click"),T.logEvent(i.sharedConversationContinueConversationClicked)},children:o.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function _e({onClickReportSharedConversation:a}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{a()},children:e.jsx(l,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(C,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(l,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(C,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(l,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(C,{})]})}const C=()=>e.jsx("span",{children:"|"}),Ne=V(()=>W(()=>import("./dj4xilw1ovxf7lyf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(a=>a.SearchResultsModal));function Re({sharedConversationId:a,initiallyHighlightedMessageId:s,continueConversationUrl:r,isIndexable:t,isBetterMetatagsEnabled:o}){const c=$().action==="moderate",n=L(a);z.useEffect(()=>{T.logEvent(i.sharedConversationPageLoaded),j.logEvent("chatgpt_conversation_share_page_loaded")},[]);const m=oe(a)??N,p=ie(m),u=de(a,n),f=ce.getTitle(a),S=A(a),h=le(),{isOpen:D}=R(),y=()=>[...new Array(u).keys()].map(g=>{const M=e.jsx(je,{isFinalTurn:g===u-1,turnIndex:g,clientThreadId:a,conversationLeafId:n,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:m??N,scrollToMessageId:s,avatarClassName:p,showAvatar:!h},g);return h?e.jsx("li",{className:_(x.conversationTurnWrapper,"contain-inline-size empty:hidden"),children:M},g):M}),b=e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(ke,{clientThreadId:a,isModeratingThread:c,continueConversationUrl:r}),e.jsx(_e,{onClickReportSharedConversation:()=>{w.openModal(I.ReportConversation),j.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),T.logEvent(i.sharedConversationReportContentClicked,{location:"Static Shared Thread Page"})}})]});return e.jsxs(he.Provider,{value:{serverSharedThreadId:a,isIndexable:t},children:[!o&&e.jsxs(me,{children:[f!=null&&e.jsx("title",{children:f}),e.jsx("meta",{property:"og:site_name",content:"ChatGPT"}),e.jsx("meta",{name:"robots",content:t?"index,nofollow":"noindex,nofollow"},"robots"),e.jsx("meta",{property:"og:title",content:f??"Shared Chat on ChatGPT"},"og:title"),e.jsx("meta",{property:"og:description",content:"Shared "+(S!=null?`by ${S} `:"")+"via ChatGPT"},"og:description"),e.jsx("meta",{property:"og:image",content:K.src},"og:image")]}),e.jsxs("div",{className:"flex h-full flex-col",children:[h?e.jsx(ue,{className:X.application,thread:e.jsxs(ge,{anchor:"top",className:_(x.screen),name:"thread",trackLeading:!0,trackTrailing:!0,trailing:b,children:[e.jsx(xe,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:D}),e.jsx("div",{className:x.staticSharedThreadHeader,children:e.jsx(P,{clientThreadId:a})}),e.jsx("ol",{className:x.conversationTurnList,children:y()})]}),threadExtendedInfo:e.jsx(pe,{clientThreadId:a})}):e.jsxs("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:[e.jsx(fe,{children:e.jsx(P,{clientThreadId:a})}),y()]}),!h&&b]}),e.jsx(ve,{serverThreadId:a,clientThreadId:a,isStaticSharedThread:!0}),e.jsx(Te,{clientThreadId:a}),!h&&e.jsx(Ge,{clientThreadId:a}),e.jsx(Ce,{clientThreadId:a})]})}function Ge({clientThreadId:a}){const{isOpen:s}=R();return s&&e.jsx(Ne,{clientThreadId:a})}export{Re as S};
//# sourceMappingURL=mxr7zvty1qzz5w00.js.map
