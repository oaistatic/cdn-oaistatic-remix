import{R as d,r as x,j as e}from"./i8w88cc8b3gds516.js";import{M as o,l as p,an as u,co as h}from"./eh26o1l35t2fnjj4.js";import{S as g}from"./nn3eagpzgs5zxgjm.js";function f({message:s,className:r}){const[n,a]=x.useState(!1),l=s.message.content.content_type===o.ModelEditableContext?s.message.content.model_set_context:null,i=p(s.message);if(s.message.content.content_type===o.UserEditableContext)return null;const{recipient:t}=s.message,c=!!s.message.metadata?.rebase_system_message,m=!!s.message.metadata?.is_user_system_message;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:u(r,"mt-6 flex flex-col items-start gap-2 overflow-x-auto whitespace-pre-wrap break-words first:mt-0"),children:[e.jsxs("div",{className:"text-xs",children:[e.jsx("div",{className:"uppercase text-red-500",children:"debug message"}),!!l&&e.jsxs("button",{onClick:()=>a(!0),className:"flex cursor-pointer items-center gap-1",children:[e.jsx(g,{className:"icon-sm"}),e.jsx("div",{className:"underline",children:"View all model memories"})]})]}),e.jsx("div",{className:"flex w-full items-start justify-between",children:e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["From: ",s.message.author.name??s.message.author.role]}),!!t&&t!=="all"&&e.jsxs("div",{children:["To: ",t]})]})}),e.jsx("div",{className:"whitespace-pre-wrap font-mono text-sm",children:i}),e.jsxs("div",{className:"flex gap-3",children:[c&&e.jsx("div",{className:"rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",children:"Rebased System Message"}),m&&e.jsx("div",{className:"rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",children:"Custom Instruction"})]})]}),e.jsx(h,{title:"All Model Memories",type:"success",isOpen:n,onClose:()=>a(!1),children:e.jsx("div",{className:"max-h-[80vh] overflow-auto whitespace-pre-wrap font-mono text-sm",children:l})})]})}const v=d.memo(f);export{v as default};
//# sourceMappingURL=odtcpqxk4i00cn7j.js.map
