import{c as u,r as T,a as x,j as e,M as a}from"./nqo5y2f0dorhrqsr.js";import{bL as M,bv as v,bo as i,J as p,f as y}from"./dh0yl0m9q337gmci.js";function P({isOpen:n,onClose:t,account:d,gpt:s}){const m=u(),[r,l]=T.useState(!1),c=x();return e.jsxs(M,{size:"custom",className:"max-w-lg text-sm",isOpen:n,onClose:v,type:"success",title:m.formatMessage(o.removeModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(a,{...o.removeModalPrompt,values:{gptName:s.gizmo.display.name}})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(i,{color:"secondary",onClick:()=>{t(!1)},loading:r,children:e.jsx(a,{...o.cancelButtonText})}),e.jsx(i,{color:"danger",loading:r,onClick:()=>{l(!0),p.removeThirdPartyGPTFromWorkspace(d.id,s.gizmo.id).finally(()=>{c.invalidateQueries({queryKey:["gizmo"]}),t(!0),l(!1)})},children:e.jsx(a,{...o.removeButtonText})})]})]})}const o=y({removeModalTitle:{id:"removeThirdPartyGPTModal.accessModalTitle",defaultMessage:"Remove GPT from workspace"},removeModalPrompt:{id:"removeThirdPartyGPTModal.accessModalPrompt",defaultMessage:"Are you sure you want to revoke approval of {gptName} for your workspace? Members won't be able to chat with this GPT anymore."},cancelButtonText:{id:"removeThirdPartyGPTModal.cancelButtonText",defaultMessage:"Cancel"},removeButtonText:{id:"removeThirdPartyGPTModal.removeButtonText",defaultMessage:"Remove GPT"}});export{P as R};
//# sourceMappingURL=c2l34h7x2hqv5md0.js.map
