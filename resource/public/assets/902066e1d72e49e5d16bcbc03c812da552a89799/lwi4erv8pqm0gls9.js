import{er as N,a1 as k,l as e,bE as w,$ as o,m as p,ci as G,r as u,a as P,a0 as T}from"./j51q469vqqyswwq0.js";import{d4 as S,a0 as z,c4 as M,bI as D,c as y,M as E,X as I,D as j,ag as L,bE as m,d5 as F}from"./obfv3y06hphbdxag.js";import{r as _,K as A,L as O,R as B,N as U,v as $,aT as q,S as H}from"./nakmlpxnz8km92cm.js";import{G as K}from"./bpczpv0guerapvqi.js";import{x as W,n as v,c as Y,y as Q}from"./eq1a948h5ja80igb.js";import{G as X}from"./c8uguzsj90vcmzi7.js";import{m as J}from"./duhba84pe3ongyzk.js";let x=null;function V(){return x||(x=document.createElement("div"),x.setAttribute("portal-container",""),document.body.append(x)),x||null}function Z(s){const{children:a}=s,t=V();return t&&N.createPortal(a,t)}function b({delay:s,animateTap:a=!0,children:t}){return e.jsx(J.div,{whileTap:{scale:a?.98:void 0},initial:{opacity:0,translateY:5},animate:{opacity:1,translateY:0,transition:{duration:.3,ease:"easeIn",delay:s??0}},children:t})}var R=(s=>(s.Enabled="enabled",s.ComingSoon="coming-soon",s))(R||{});function ee({gizmoResource:s}){const a=s.gizmo.vanity_metrics?.num_conversations_str,t=s.gizmo.share_recipient??m.Private,i=F(t);return e.jsxs("div",{children:[s.gizmo.share_recipient!==m.Private&&a!=null?e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(U,{className:"icon-sm"}),e.jsx("span",{children:e.jsx(o,{...ae.conversationCountStrLabel,values:{numConvos:a}})})]}):void 0,e.jsxs("div",{className:"flex items-center gap-1",children:[t===m.Link||t===m.Marketplace?e.jsx($,{className:"icon-sm shrink-0"}):t===m.Workspace?e.jsx(q,{className:"icon-sm shrink-0"}):e.jsx(H,{className:"icon-sm shrink-0"}),e.jsx("span",{className:"line-clamp-1",children:i})]})]})}function me({gizmoResource:s,canRemoveRecent:a}){const t=w(),i=S(s),n=W(s),r=!!s.gizmo.tags?.includes(z.FirstParty);return e.jsx(C,{href:n?v(s.gizmo.id):Y(s),icon:e.jsx(K,{isFirstParty:r,src:s?.gizmo.display.profile_picture_url??void 0,className:"h-[42px] w-[42px] flex-shrink-0"}),title:s.gizmo.display.name||M,isDraft:n,description:s.gizmo.display.description??"",byline:i?e.jsx(ee,{gizmoResource:s}):e.jsx(D,{gizmo:s}),buttons:e.jsxs(e.Fragment,{children:[i&&e.jsx(y,{label:e.jsx(o,{id:"gizmo.gpt.grid.EditGPT",defaultMessage:"Edit GPT"}),className:"flex justify-center",side:"top",children:e.jsx("button",{className:"rounded-lg px-3 py-2 text-token-text-primary transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{t(v(s.gizmo.id))},children:e.jsx(_,{className:"icon-sm"})})}),e.jsx(te,{gizmoResource:s,isOwner:i,canRemoveRecent:a})]})})}const se=k.div`flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed
${({$disabled:s})=>s?"":"border-token-border-light bg-token-main-surface-secondary"}`;function xe({type:s}){const a=Q(),t=s==="coming-soon";return e.jsxs(E,{disabled:!t,label:e.jsx(o,{id:"gizmo.gpt.grid.CreateGPTComingSoon",defaultMessage:"GPT creation will be available in the coming weeks"}),children:[e.jsx(C,{href:a,disabled:t,icon:e.jsx(se,{$disabled:t,children:e.jsx(A,{className:p("icon-sm",t&&"opacity-30")})}),title:e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(o,{id:"gizmo.gpt.grid.CreateGPT",defaultMessage:"Create a GPT"})}),description:"Customize a version of ChatGPT for a specific purpose",byline:t?e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("div",{className:"flex items-center",children:e.jsx(o,{id:"gizmo.gpt.grid.ComingSoon",defaultMessage:"Coming soon"})})}):void 0}),e.jsx("div",{className:"h-px bg-gray-100 dark:bg-gray-700"})]})}function C({href:s,icon:a,title:t,isDraft:i=!1,description:n,byline:r,buttons:l,disabled:d,className:c}){const h=p("flex items-center px-2 py-4 rounded-xl",d?"":"hover:bg-token-main-surface-secondary",c),f=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex grow items-center overflow-hidden md:w-3/5 md:grow-0",children:[a,e.jsxs("div",{className:p("grow overflow-hidden pl-4 pr-9 leading-tight",d?"opacity-50":"hover:cursor-pointer"),children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"font-semibold",children:t}),i&&e.jsx(y,{label:e.jsx(o,{id:"gizmo.gpt.grid.Draft",defaultMessage:"Draft"}),className:"flex justify-center",side:"top",children:e.jsx("div",{className:"m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600"})})]}),e.jsx("div",{className:"line-clamp-2 overflow-hidden text-ellipsis break-words text-sm",children:n}),r!=null&&e.jsx("div",{className:"text-ellipsis text-sm text-token-text-tertiary md:hidden",children:r})]})]}),r!=null&&e.jsx("div",{className:"hidden flex-1 text-ellipsis text-sm text-token-text-tertiary md:block",children:r}),l!=null&&e.jsx("div",{onClick:g=>{g.preventDefault()},onPointerDownCapture:g=>{g.stopPropagation()},className:"flex h-9 shrink-0 justify-end gap-2 font-semibold md:w-[100px]",children:l})]});return d?e.jsx(b,{children:e.jsx("span",{className:h,children:f})}):e.jsx(b,{children:e.jsx(G,{className:h,to:s,children:f})})}function te({gizmoResource:s,isOwner:a,canRemoveRecent:t}){const[i,n]=u.useState(!1),[r,l]=u.useState(!1),d=P();return!a&&!t?null:e.jsxs(e.Fragment,{children:[e.jsxs(I,{side:"top",contentAlign:"end",sideOffset:8,open:r,onOpenChange:c=>l(c),triggerButton:e.jsx("button",{color:"secondary",className:"rounded-lg bg-transparent px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{l(c=>!c)},children:e.jsx(O,{className:"icon-md"})}),children:[a&&e.jsx(j.Item,{color:"danger",onClick:()=>{n(!0)},icon:B,children:e.jsx(o,{id:"gizmo.gpt.grid.DeleteGPT",defaultMessage:"Delete GPT"})}),t&&e.jsx(j.Item,{onClick:()=>{L.removeFromRecent(d,s.gizmo.id)},children:e.jsx(o,{id:"gizmo.gpt.grid.RemoveFromRecent",defaultMessage:"Remove from Recent"})})]}),i&&e.jsx(Z,{children:e.jsx(X,{gizmoId:s.gizmo.id,onSuccess:()=>{n(!1)},onClose:()=>{n(!1)}})})]})}const ae=T({conversationCountStrLabel:{id:"gizmo.gpt.grid.conversationCountStrLabel",defaultMessage:"{numConvos} Chats"}});export{xe as C,b as G,R as a,me as b};
//# sourceMappingURL=lwi4erv8pqm0gls9.js.map
