import{a1 as E,V as G,r,l as e,Z as d,W as P,be as z}from"./dr7d3iwdkso0acad.js";import{d as A,K as L,I as U}from"./dmeh4acfgftb4ocn.js";import{a as _}from"./nk93elwanh2qmq79.js";import{m as y}from"./dnerd8yjozxoav5t.js";const $=5,D="Default";function R(a){const n={};return a.forEach(c=>{const o=c.group??D;n[o]||(n[o]=[]),n[o].push(c)}),n}function Z({tagOptions:a,onSubmit:n,onMoreClicked:c,onCancel:o,maxInlineTags:C=$,modalOnly:u=!1,modalTitle:M,multiple:N,children:F,allowEmptySubmit:I=!1}){const S=G(),[m,i]=r.useState(u?"modal":"inline"),[l,h]=r.useState([]),[x,B]=r.useState(void 0),b=r.useCallback(s=>{n(s),i("submitted"),setTimeout(()=>{i("closed")},1500)},[n]),p=r.useMemo(()=>A(b,500),[b]),g=s=>{let t=[];return N?t=l.includes(s)?l.filter(w=>w!==s):[...l,s]:t=[s],h(t),t},k=()=>{b({tags:l,textFeedback:x,tagChoices:v,source:"modal"})},v=a.map(s=>s.value),j=R(a),T=Object.keys(j);return e.jsxs(e.Fragment,{children:[!u&&e.jsx(L,{children:m!=="closed"&&e.jsxs(y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"min-h-[96px] w-full",children:[m==="submitted"&&e.jsx(y.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"text-center",children:e.jsx("div",{className:"inline-flex rounded-lg border border-token-border-light p-4",children:e.jsx("div",{className:"text-sm",children:e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.submitted",defaultMessage:"Thanks for your feedback!"})})})}),["inline","modal"].includes(m)&&e.jsxs("div",{className:"relative mt-2 flex w-full flex-col gap-3 rounded-lg border border-token-border-light p-4",children:[e.jsx("button",{className:"absolute right-4 top-4 text-sm font-bold",onClick:()=>{i("closed"),p.cancel(),o?.()},children:e.jsx(_,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.inlineTitle",defaultMessage:"Tell us more:"})}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.slice(0,C).map(s=>e.jsx(f,{$selected:l.includes(s.value),onClick:()=>{const t=g(s.value);p({tags:t,tagChoices:v,source:"inline"})},children:s.label},s.value)),e.jsx(f,{onClick:()=>{c?.(),p.cancel(),i("modal")},children:e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.moreOptions.1",defaultMessage:"More..."})})]})]})]},"main")}),m==="modal"&&e.jsxs(P,{type:"success",isOpen:!0,className:"max-w-xl",size:"custom",title:M??e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.modalTitle",defaultMessage:"Provide additional feedback"}),onClose:()=>{h([]),i(u?"closed":"inline"),u&&o?.()},showCloseButton:!0,primaryButton:e.jsx(z,{color:"primary",disabled:l.length===0&&!x&&!I,onClick:k,children:e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.submit",defaultMessage:"Submit"})}),rootClassName:"z-50",children:[e.jsx("div",{className:"flex flex-col gap-6",children:T.map(s=>e.jsxs("div",{children:[T.length>1&&e.jsx("div",{className:"mb-3 text-sm font-semibold",children:s}),e.jsx("div",{className:"flex flex-wrap gap-3",children:j[s].map(t=>e.jsx(f,{$selected:l.includes(t.value),onClick:()=>g(t.value),children:t.label},t.value))},s)]},s))}),e.jsx(U,{name:"feedback",type:"text",className:"mt-6",placeholder:S.formatMessage({id:"ConversationTurnInlineMessageFeedback.feedbackPlaceholder.1",defaultMessage:"(Optional) Feel free to add specific details"}),value:x??"",onChange:s=>B(s.target.value),onPressEnter:k}),F]})]})}const f=E.button`
  rounded-lg border border-token-border-light px-3 py-1 text-sm text-token-text-secondary hover:text-token-text-primary hover:bg-token-main-surface-secondary
  ${({$selected:a})=>a&&"!bg-token-text-primary !text-token-main-surface-primary"}
`;export{Z as I,f as T};
//# sourceMappingURL=oa2dss9sig21dsm0.js.map
