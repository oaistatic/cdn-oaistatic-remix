import{j as e,c as F,r as o}from"./i8w88cc8b3gds516.js";import{z as O,A as k,U as B,H as D,I as g}from"./jg63sxiyqeyvfv9f.js";import{r as p,fK as E,y as N,D as x,aa as v,cp as M,co as P,f as _}from"./eh26o1l35t2fnjj4.js";const s=_({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function q({onClose:n,clientThreadId:d}){const r=F(),b=p.getTree(d),j=o.useContext(E)?.serverSharedThreadId,S=p.getServerThreadId(d),h=j??S,i=N(),c=o.useRef([]),f=o.useRef(""),C=o.useRef(null),l=o.useCallback(()=>{const a=C.current?.elements;c.current=[...a||[]].filter(t=>t.checked).map(t=>t.id).map(t=>t.replace("feedback-","")),f.current=a?.["feedback-other"].value||""},[]),u=o.useCallback((a,t)=>{if(h==null){i.danger("Moderation NOT logged successfully! serverThreadId is null"),x.addError("Moderation: serverThreadId is null");return}const m=b.getMessageId(p.getThreadCurrentLeafId(d));v.submitSharedConversationReportFeedback({message_id:m,shared_conversation_id:h,text:a,tags:t}).then(()=>{i.success("Moderation logged successfully")}).catch(R=>{i.danger("Moderation NOT logged successfully! Please try again"),x.addError(new Error("Moderation: failed to log",{cause:R}))}),n()},[b,d,n,h,i]),w=o.useCallback(()=>{l(),c.current.push("moderation-reject"),u(f.current,c.current)},[u,l]),T=o.useCallback(()=>{l(),c.current.push("moderation-accept"),u(f.current,c.current)},[u,l]),y=e.jsxs(e.Fragment,{children:[e.jsx(M.Button,{title:r.formatMessage(s.submitRejectModeration),color:"danger",onClick:w}),e.jsx(M.Button,{title:r.formatMessage(s.submitAcceptModeration),color:"primary",onClick:T})]}),[A,I]=o.useState([]);return o.useEffect(()=>{v.fetchShareModerationCategories().then(a=>{const t=a.moderation_categories;I(Object.keys(t).map(m=>[m,t[m]]))})},[]),e.jsxs(P,{isOpen:!0,onClose:n,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:r.formatMessage(s.provideAdditionalFeedback),children:[e.jsxs("form",{ref:C,children:[e.jsx(D,{id:"feedback-other",placeholder:r.formatMessage(s.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[A.map(([a,t])=>e.jsx(g,{id:"feedback-"+a,label:t},a)),e.jsx(g,{id:"feedback-copyright",label:r.formatMessage(s.copyrightContent)}),e.jsx(g,{id:"feedback-content-other",label:r.formatMessage(s.reportOtherContent)})]})]}),e.jsx(M.Actions,{primaryButton:y})]})}function U({clientThreadId:n}){return O(k.SharedConversationModeration)?e.jsx(q,{onClose:()=>B.closeModal(k.SharedConversationModeration),clientThreadId:n}):null}export{U as C};
//# sourceMappingURL=n3f3nqcdnta9m7mu.js.map
