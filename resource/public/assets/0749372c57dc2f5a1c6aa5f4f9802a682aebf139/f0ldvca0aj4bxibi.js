import{c as E,r,j as e,ad as P,ac as y,M as d}from"./lklglvrzltpv3f05.js";import{aW as G,aX as A}from"./ntw4l0fkgqdiln85.js";import{bd as L,bP as z,bm as U,aq as _}from"./ltrr4mhf6s4m7a72.js";const $=5,D="Default";function R(n){const l={};return n.forEach(c=>{const i=c.group??D;l[i]||(l[i]=[]),l[i].push(c)}),l}function W({tagOptions:n,onSubmit:l,onMoreClicked:c,onCancel:i,maxInlineTags:C=$,modalOnly:u=!1,modalTitle:N,multiple:F,children:I,allowEmptySubmit:S=!1}){const h=E(),[m,o]=r.useState(u?"modal":"inline"),[a,g]=r.useState([]),[x,B]=r.useState(void 0),b=r.useCallback(s=>{l(s),o("submitted"),setTimeout(()=>{o("closed")},1500)},[l]),p=r.useMemo(()=>G(b,500),[b]),v=s=>{let t=[];return F?t=a.includes(s)?a.filter(w=>w!==s):[...a,s]:t=[s],g(t),t},k=()=>{b({tags:a,textFeedback:x,tagChoices:j,source:"modal"})},j=n.map(s=>s.value),T=R(n),M=Object.keys(T);return e.jsxs(e.Fragment,{children:[!u&&e.jsx(P,{children:m!=="closed"&&e.jsxs(y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"min-h-[96px] w-full",children:[m==="submitted"&&e.jsx(y.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"text-center",children:e.jsx("div",{className:"inline-flex rounded-lg border border-token-border-light p-4",children:e.jsx("div",{className:"text-sm",children:e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.submitted",defaultMessage:"Thanks for your feedback!"})})})}),["inline","modal"].includes(m)&&e.jsxs("div",{className:"relative mt-2 flex w-full flex-col gap-3 rounded-lg border border-token-border-light p-4",children:[e.jsx("button",{className:"absolute right-4 top-4 text-sm font-bold",onClick:()=>{o("closed"),p.cancel(),i?.()},children:e.jsx(L,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.inlineTitle",defaultMessage:"Tell us more:"})}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[n.slice(0,C).map(s=>e.jsx(f,{"aria-pressed":a.includes(s.value),"aria-selected":a.includes(s.value),$selected:a.includes(s.value),onClick:()=>{const t=v(s.value);p({tags:t,tagChoices:j,source:"inline"})},children:s.label},s.value)),e.jsx(f,{onClick:()=>{c?.(),p.cancel(),o("modal")},children:e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.moreOptions.1",defaultMessage:"More..."})})]})]})]},"main")}),m==="modal"&&e.jsxs(z,{type:"success",isOpen:!0,className:"max-w-xl",size:"custom",title:N??e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.modalTitle",defaultMessage:"Provide additional feedback"}),onClose:()=>{g([]),o(u?"closed":"inline"),u&&i?.()},showCloseButton:!0,primaryButton:e.jsx(U,{color:"primary",disabled:a.length===0&&!x&&!S,onClick:k,children:e.jsx(d,{id:"ConversationTurnInlineMessageFeedback.submit",defaultMessage:"Submit"})}),rootClassName:"z-50",children:[e.jsx("div",{className:"flex flex-col gap-6",children:M.map(s=>e.jsxs("div",{children:[M.length>1&&e.jsx("div",{className:"mb-3 text-sm font-semibold",children:s}),e.jsx("div",{className:"flex flex-wrap gap-3",children:T[s].map(t=>e.jsx(f,{$selected:a.includes(t.value),onClick:()=>v(t.value),children:t.label},t.value))},s)]},s))}),e.jsx(A,{ariaLabel:h.formatMessage({id:"Z3Ja/T",defaultMessage:"Additional feedback"}),name:"feedback",type:"text",className:"mt-6",placeholder:h.formatMessage({id:"ConversationTurnInlineMessageFeedback.feedbackPlaceholder.1",defaultMessage:"(Optional) Feel free to add specific details"}),value:x??"",onChange:s=>B(s.target.value),onPressEnter:k}),I]})]})}const f=_.button`
  rounded-lg border border-token-border-light px-3 py-1 text-sm text-token-text-secondary hover:text-token-text-primary hover:bg-token-main-surface-secondary
  ${({$selected:n})=>n&&"!bg-token-text-primary !text-token-main-surface-primary"}
`;export{W as I,f as T};
//# sourceMappingURL=f0ldvca0aj4bxibi.js.map