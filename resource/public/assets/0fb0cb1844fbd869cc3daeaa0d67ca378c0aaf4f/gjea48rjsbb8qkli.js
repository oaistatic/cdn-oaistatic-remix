import{j as e,Y as F,r as o,Z as O,D as k,N as x,cj as g,bL as B,X as D}from"./lyvmbpf7ocwbhkqv.js";import{a9 as E,aa as v,U as N,v as M,ab as P,ac as _,a as b}from"./g6lhcxpyem234o4q.js";const r=D({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function q({onClose:n,clientThreadId:d}){const s=F(),p=M.getTree(d),j=o.useContext(P)?.serverSharedThreadId,S=M.getServerThreadId(d),h=j??S,i=O(),c=o.useRef([]),f=o.useRef(""),C=o.useRef(null),l=o.useCallback(()=>{const a=C.current?.elements;c.current=[...a||[]].filter(t=>t.checked).map(t=>t.id).map(t=>t.replace("feedback-","")),f.current=a?.["feedback-other"].value||""},[]),u=o.useCallback((a,t)=>{if(h==null){i.danger("Moderation NOT logged successfully! serverThreadId is null"),k.addError("Moderation: serverThreadId is null");return}const m=p.getMessageId(M.getThreadCurrentLeafId(d));x.submitSharedConversationReportFeedback({message_id:m,shared_conversation_id:h,text:a,tags:t}).then(()=>{i.success("Moderation logged successfully")}).catch(R=>{i.danger("Moderation NOT logged successfully! Please try again"),k.addError(new Error("Moderation: failed to log",{cause:R}))}),n()},[p,d,n,h,i]),w=o.useCallback(()=>{l(),c.current.push("moderation-reject"),u(f.current,c.current)},[u,l]),T=o.useCallback(()=>{l(),c.current.push("moderation-accept"),u(f.current,c.current)},[u,l]),y=e.jsxs(e.Fragment,{children:[e.jsx(g.Button,{title:s.formatMessage(r.submitRejectModeration),color:"danger",onClick:w}),e.jsx(g.Button,{title:s.formatMessage(r.submitAcceptModeration),color:"primary",onClick:T})]}),[A,I]=o.useState([]);return o.useEffect(()=>{x.fetchShareModerationCategories().then(a=>{const t=a.moderation_categories;I(Object.keys(t).map(m=>[m,t[m]]))})},[]),e.jsxs(B,{isOpen:!0,onClose:n,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:s.formatMessage(r.provideAdditionalFeedback),children:[e.jsxs("form",{ref:C,children:[e.jsx(_,{id:"feedback-other",placeholder:s.formatMessage(r.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[A.map(([a,t])=>e.jsx(b,{id:"feedback-"+a,label:t},a)),e.jsx(b,{id:"feedback-copyright",label:s.formatMessage(r.copyrightContent)}),e.jsx(b,{id:"feedback-content-other",label:s.formatMessage(r.reportOtherContent)})]})]}),e.jsx(g.Actions,{primaryButton:y})]})}function U({clientThreadId:n}){return E(v.SharedConversationModeration)?e.jsx(q,{onClose:()=>N.closeModal(v.SharedConversationModeration),clientThreadId:n}):null}export{U as C};
//# sourceMappingURL=gjea48rjsbb8qkli.js.map
