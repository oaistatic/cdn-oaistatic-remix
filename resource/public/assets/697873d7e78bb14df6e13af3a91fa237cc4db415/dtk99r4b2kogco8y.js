import{m as e,fy as p,r as h,dm as S,cL as k,gV as T,aJ as w,a9 as G,ba as y,b6 as o,en as P,aE as f,ef as z,w as M,cK as D,bS as v,K as I}from"./dfm2yceao9m2ilo9.js";import{aF as L,ff as E,ch as F,ci as _,cb as U,cd as A,fT as B,fU as O,bR as H,eY as b,aT as K,cS as Y,fV as W,cU as q,eH as V,fj as X,cs as $,cX as J,dl as Q,aP as m,fW as Z,eM as R,fX as ee,eK as se,fY as ae,fZ as te}from"./o7wih49jz3zkdcav.js";import{C as ie}from"./odf16s7xmj505mjz.js";import{C as ne}from"./bmhrvosaxgmn6s0i.js";import{a as re}from"./oj002yr1cv5905d0.js";import{G as oe}from"./dcqw1exbxjpuudt7.js";import{m as le}from"./ccrdffu4uq6bo5k0.js";function ce(){return e.jsx(L,{leading:!0,type:"primary",className:p.header,children:e.jsx("div",{className:p.headerLeading,children:e.jsx(E,{})})})}function ke({children:s,header:t,footer:a}){const[i,n]=h.useState(()=>S());return e.jsx(re,{clientThreadId:i,setClientThreadId:n,children:e.jsx(F,{children:e.jsx(_,{className:k.application,sidebar:e.jsx(ne,{}),thread:e.jsx(de,{header:t,footer:a,children:s}),name:"gpts-sc"})})})}function de({children:s,header:t,footer:a}){return e.jsxs("div",{className:"h-full flex-1",style:{container:"thread-container / inline-size"},children:[e.jsxs(U,{anchor:"vertical",className:p.screen,name:"thread",leading:t??e.jsx(ce,{}),trackLeading:!0,trailing:a,children:[s,e.jsx(ie,{})]}),e.jsx(A,{})]})}let x=null;function me(){return x||(x=document.createElement("div"),x.setAttribute("portal-container",""),document.body.append(x)),x||null}function xe(s){const{children:t}=s,a=me();return a&&T.createPortal(t,a)}function C({delay:s,animateTap:t=!0,children:a}){return e.jsx(le.div,{whileTap:{scale:t?.98:void 0},initial:{opacity:0,translateY:5},animate:{opacity:1,translateY:0,transition:{duration:.3,ease:"easeIn",delay:s??0}},children:a})}var ge=(s=>(s.Enabled="enabled",s.ComingSoon="coming-soon",s))(ge||{});function pe({gizmoResource:s}){const t=s.gizmo.vanity_metrics?.num_conversations_str,a=s.gizmo.share_recipient??m.Private,i=Z(a);return e.jsxs("div",{children:[s.gizmo.share_recipient!==m.Private&&t!=null?e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(R,{className:"icon-sm"}),e.jsx("span",{children:e.jsx(o,{...ue.conversationCountStrLabel,values:{numConvos:t}})})]}):void 0,e.jsxs("div",{className:"flex items-center gap-1",children:[a===m.Link||a===m.Marketplace?e.jsx(ee,{className:"icon-sm shrink-0"}):a===m.Workspace?e.jsx(se,{className:"icon-sm shrink-0"}):e.jsx(ae,{className:"icon-sm shrink-0"}),e.jsx("span",{className:"line-clamp-1",children:i})]})]})}function Te({gizmoResource:s,canRemoveRecent:t}){const a=G(),i=B(s),n=O(s),r=!!s.gizmo.tags?.includes(H.FirstParty);return e.jsx(N,{href:n?b(s.gizmo.id):K(s),icon:e.jsx(Y,{isFirstParty:r,src:s?.gizmo.display.profile_picture_url??void 0,className:"h-[42px] w-[42px] flex-shrink-0"}),title:s.gizmo.display.name||W,isDraft:n,description:s.gizmo.display.description??"",byline:i?e.jsx(pe,{gizmoResource:s}):e.jsx(q,{gizmo:s}),buttons:e.jsxs(e.Fragment,{children:[i&&e.jsx(y,{label:e.jsx(o,{id:"gizmo.gpt.grid.EditGPT",defaultMessage:"Edit GPT"}),className:"flex justify-center",side:"top",children:e.jsx("button",{className:"rounded-lg px-3 py-2 text-token-text-primary transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{a(b(s.gizmo.id))},children:e.jsx(V,{className:"icon-sm"})})}),e.jsx(fe,{gizmoResource:s,isOwner:i,canRemoveRecent:t})]})})}const he=w.div`flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed
${({$disabled:s})=>s?"":"border-token-border-light bg-token-main-surface-secondary"}`;function we({type:s}){const t=te(),a=s==="coming-soon";return e.jsxs(P,{disabled:!a,label:e.jsx(o,{id:"gizmo.gpt.grid.CreateGPTComingSoon",defaultMessage:"GPT creation will be available in the coming weeks"}),children:[e.jsx(N,{href:t,disabled:a,icon:e.jsx(he,{$disabled:a,children:e.jsx(X,{className:f("icon-sm",a&&"opacity-30")})}),title:e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(o,{id:"gizmo.gpt.grid.CreateGPT",defaultMessage:"Create a GPT"})}),description:"Customize a version of ChatGPT for a specific purpose",byline:a?e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("div",{className:"flex items-center",children:e.jsx(o,{id:"gizmo.gpt.grid.ComingSoon",defaultMessage:"Coming soon"})})}):void 0}),e.jsx("div",{className:"h-px bg-gray-100 dark:bg-gray-700"})]})}function N({href:s,icon:t,title:a,isDraft:i=!1,description:n,byline:r,buttons:l,disabled:c,className:d}){const u=f("flex items-center px-2 py-4 rounded-xl",c?"":"hover:bg-token-main-surface-secondary",d),j=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex grow items-center overflow-hidden md:w-3/5 md:grow-0",children:[t,e.jsxs("div",{className:f("grow overflow-hidden pl-4 pr-9 leading-tight",c?"opacity-50":"hover:cursor-pointer"),children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"font-semibold",children:a}),i&&e.jsx(y,{label:e.jsx(o,{id:"gizmo.gpt.grid.Draft",defaultMessage:"Draft"}),className:"flex justify-center",side:"top",children:e.jsx("div",{className:"m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600"})})]}),e.jsx("div",{className:"line-clamp-2 overflow-hidden text-ellipsis break-words text-sm",children:n}),r!=null&&e.jsx("div",{className:"text-ellipsis text-sm text-token-text-tertiary md:hidden",children:r})]})]}),r!=null&&e.jsx("div",{className:"hidden flex-1 text-ellipsis text-sm text-token-text-tertiary md:block",children:r}),l!=null&&e.jsx("div",{onClick:g=>{g.preventDefault()},onPointerDownCapture:g=>{g.stopPropagation()},className:"flex h-9 shrink-0 justify-end gap-2 font-semibold md:w-[100px]",children:l})]});return c?e.jsx(C,{children:e.jsx("span",{className:u,children:j})}):e.jsx(C,{children:e.jsx(z,{className:u,to:s,children:j})})}function fe({gizmoResource:s,isOwner:t,canRemoveRecent:a}){const[i,n]=h.useState(!1),[r,l]=h.useState(!1),c=M();return!t&&!a?null:e.jsxs(e.Fragment,{children:[e.jsxs(D,{side:"top",contentAlign:"end",sideOffset:8,open:r,onOpenChange:d=>l(d),triggerButton:e.jsx("button",{color:"secondary",className:"rounded-lg bg-transparent px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{l(d=>!d)},children:e.jsx($,{className:"icon-md"})}),children:[t&&e.jsx(v.Item,{color:"danger",onClick:()=>{n(!0)},icon:J,children:e.jsx(o,{id:"gizmo.gpt.grid.DeleteGPT",defaultMessage:"Delete GPT"})}),a&&e.jsx(v.Item,{onClick:()=>{Q.removeFromRecent(c,s.gizmo.id)},children:e.jsx(o,{id:"gizmo.gpt.grid.RemoveFromRecent",defaultMessage:"Remove from Recent"})})]}),i&&e.jsx(xe,{children:e.jsx(oe,{gizmoId:s.gizmo.id,onSuccess:()=>{n(!1)},onClose:()=>{n(!1)}})})]})}const ue=I({conversationCountStrLabel:{id:"gizmo.gpt.grid.conversationCountStrLabel",defaultMessage:"{numConvos} Chats"}});export{we as C,C as G,ke as a,ge as b,Te as c};
//# sourceMappingURL=dtk99r4b2kogco8y.js.map
