import{j as e,r as u,M as z}from"./lklglvrzltpv3f05.js";import{aw as i,fY as F,am as K,v as $,j as B,bx as H,P as E,h as _,br as L}from"./muemwvh3ybsggbb1.js";import{u as U}from"./jxlaep7450nj06io.js";import{p as W,bq as X}from"./cp734xu9t8fnlezn.js";import{a as Y,T as C}from"./k5u3zqwwbhrcvwt6.js";import{P as q}from"./hzwiqclxkvromn27.js";import{S as Q}from"./demuoz4d7nhb3j9v.js";import"./hrqebt1cy2m73e7b.js";function P({title:a,content:t,buttons:n,time:s,icon:o,size:r="default",progressBar:m,disabled:c=!1,onClick:d}){const g="border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]",N=r==="small"?`w-[380px] pr-[15px] pl-[20px] pt-[13px] pb-[10px] ${c?"":"gap-4"}`:"w-full gap-4 px-[22px] pb-[22px] pt-[18px]",f=d?"cursor-pointer":"",p=r==="small"?"text-[15px]":"";return e.jsxs("div",{className:i("inline-flex flex-col items-start justify-start rounded-2xl border",g,"bg-token-main-surface-primary dark:bg-token-main-surface-secondary",N,f,p),onClick:d,style:r==="small"&&!c?{boxShadow:"rgba(0, 0, 0, 0.06) 0px 2px 6px 0px"}:void 0,children:[e.jsxs("div",{className:i("flex flex-col items-start justify-start self-stretch",r!=="small"&&"gap-1.5"),children:[e.jsxs("div",{className:i("inline-flex items-start justify-start self-stretch",r!=="small"&&"gap-2"),children:[e.jsx("div",{className:i("shrink grow basis-0 font-medium leading-normal",c?"text-token-text-secondary":"text-token-text-primary"),children:a}),e.jsx("div",{className:"relative h-6 w-6"}),!c&&(o||e.jsx(Q,{className:"relative h-6 w-6"}))]}),e.jsx("div",{className:i("flex w-full flex-col items-start justify-start",r==="small"&&"mt-[-2px]"),children:e.jsx("div",{className:i("inline-flex w-full items-start justify-start self-stretch rounded",r==="small"?"gap-1":"gap-2.5 py-1"),children:e.jsx("div",{className:i("w-full font-normal leading-relaxed",c?"text-token-text-tertiary":"text-token-text-secondary"),children:t})})})]}),m?e.jsxs("div",{className:i("mb-2 inline-flex items-center justify-between self-stretch",n?.length&&"mt-[-10px]"),children:[m,n]}):e.jsxs("div",{className:"inline-flex items-center justify-end self-stretch",children:[s&&e.jsx("div",{className:"shrink grow basis-0 text-[15px] font-normal leading-normal text-token-text-tertiary",children:s}),e.jsx("div",{className:"flex gap-2",children:n})]})]})}const V={strong:a=>{const{node:t,children:n,...s}=a;return e.jsx("strong",{...s,className:i(s.className,"font-semibold text-token-text-primary"),children:n})},p:a=>{const{node:t,children:n,...s}=a;return e.jsx("p",{...s,className:i(s.className,"text-base","has-[strong]:mb-1 [&:not(:first-child)]:has-[strong]:mt-3 [&:not(:has(strong))]:mb-3"),children:n})}};function G({message:a,isExpandable:t}){const s=a.create_time?new Date(a.create_time*1e3):Date.now(),o=U(+s,48e4);return e.jsx(q,{percentage:o,className:i("mr-4",t?"!w-3/4":"!w-full"),backgroundClassName:"bg-token-sidebar-surface-secondary rounded-full",barClassName:"bg-token-text-primary rounded-full",transitionDuration:`${(100-o)/100*.2}s`,transitionTimingFunction:"cubic-bezier(0.55, 0, 1, 1)",height:8})}function J({isExpandable:a,handleOpenSidebarSummarizer:t,summarizationHeadline:n,latestTitle:s,message:o}){return e.jsx("div",{className:"pb-2",children:e.jsx(P,{buttons:[e.jsx(L,{onClick:t,color:"secondary",className:"!h-[38px] text-[15px] font-normal text-token-text-secondary",children:e.jsx("div",{className:"px-1",children:e.jsx(z,{id:"wQcuK8",defaultMessage:"Details"})})},"Details")],title:n,time:null,icon:e.jsx("div",{className:""}),content:`${s}...`,size:"small",progressBar:e.jsx(G,{message:o,isExpandable:a})})})}function Z({handleOpenSidebarSummarizer:a,summarizationHeadline:t,message:n}){return e.jsx("div",{className:"pb-2",children:e.jsx(P,{buttons:[],title:t,time:null,content:n.metadata?.finished_text??"",size:"small",disabled:!0,onClick:a})})}function T({completionInProgress:a,latestTitle:t,message:n,summaryText:s,isExpandable:o,disableExpansion:r,onOpenAnalytics:m,handleOpenSidebarSummarizer:c}){return e.jsx(Y,{status:a?C.Running:C.Finished,highlightedCommand:a?t:n.metadata?.finished_text??"",onOpenAnalytics:m,onClick:c,children:s&&o&&!r?e.jsx("div",{className:"mb-4 border-l-2 pl-4 dark:border-token-text-secondary",children:e.jsx(X,{componentOverrides:V,className:"not-prose leading-6",children:s})}):null})}function oe({messages:a,isStreaming:t,isLastMessage:n,clientThreadId:s,currentGroupedMessageIndex:o,turnIndex:r}){const[m,c]=u.useState(""),[d,g]=u.useState(!1),f=F(s)===K.STREAMING,p=f||t,l=a[0].message,y=l.id,k=$.getServerThreadId(s),x=B(l),h=l.metadata?.summarization_headline,A=t&&h!=null,{toggleThreadSidebar:S}=H(),D=l.metadata?.model_slug?.startsWith("o1")&&l.metadata?.model_slug?.endsWith("o"),O=W(),b=u.useCallback(()=>{S({type:"summarizer",clientThreadId:s,currentGroupedMessageIndex:o,turnIndex:r})},[S,s,o,r]);u.useEffect(()=>{const R=/\*\*(.*?)(?:\*\*|\n|$)/g;let w,v="";for(;(w=R.exec(x))!=null;)v=w[1].trim();v?c(v):l.metadata?.initial_text!=null&&c(l.metadata.initial_text)},[x,l.metadata?.initial_text]),u.useEffect(()=>{x.length>0&&g(!0)},[x]);const j=u.useMemo(()=>({client_thread_id:s,message_id:y,conversationId:k}),[s,y,k]);u.useEffect(()=>{d&&E.logEvent(_.receivedA8KM123Message,j)},[d]);const M=u.useCallback(()=>{E.logEvent(_.openedA8KM123Message,{...j,isStreaming:t})},[j,t]);return O?D?f&&n||t?e.jsx(J,{isExpandable:d,handleOpenSidebarSummarizer:b,summarizationHeadline:h??null,latestTitle:m,message:l}):e.jsx(Z,{handleOpenSidebarSummarizer:b,summarizationHeadline:h??null,message:l}):e.jsx(T,{completionInProgress:p,latestTitle:m,message:l,onOpenAnalytics:M,handleOpenSidebarSummarizer:d||!t?b:void 0}):e.jsx(T,{completionInProgress:p,latestTitle:m,message:l,onOpenAnalytics:M,summaryText:x,isExpandable:d,disableExpansion:A})}export{V as SUMMARY_MARKDOWN_COMPONENT_OVERRIDES,oe as default};
//# sourceMappingURL=mdljuv4g05upvogu.js.map
