import{X as u,r as T,u as x,y as e,bv as v,bw as y,a1 as o,av as i,l as M,a6 as g}from"./o1ivbuadejprpakj.js";function P({isOpen:n,onClose:t,account:d,gpt:s}){const m=u(),[r,l]=T.useState(!1),c=x();return e.jsxs(v,{size:"custom",className:"max-w-lg text-sm",isOpen:n,onClose:y,type:"success",title:m.formatMessage(a.removeModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(o,{...a.removeModalPrompt,values:{gptName:s.gizmo.display.name}})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(i,{color:"secondary",onClick:()=>{t(!1)},loading:r,children:e.jsx(o,{...a.cancelButtonText})}),e.jsx(i,{color:"danger",loading:r,onClick:()=>{l(!0),M.removeThirdPartyGPTFromWorkspace(d.id,s.gizmo.id).finally(()=>{c.invalidateQueries({queryKey:["gizmo"]}),t(!0),l(!1)})},children:e.jsx(o,{...a.removeButtonText})})]})]})}const a=g({removeModalTitle:{id:"removeThirdPartyGPTModal.accessModalTitle",defaultMessage:"Remove GPT from workspace"},removeModalPrompt:{id:"removeThirdPartyGPTModal.accessModalPrompt",defaultMessage:"Are you sure you want to revoke approval of {gptName} for your workspace? Members won't be able to chat with this GPT anymore."},cancelButtonText:{id:"removeThirdPartyGPTModal.cancelButtonText",defaultMessage:"Cancel"},removeButtonText:{id:"removeThirdPartyGPTModal.removeButtonText",defaultMessage:"Remove GPT"}});export{P as R};
//# sourceMappingURL=bcqh336f60g6ggyh.js.map
