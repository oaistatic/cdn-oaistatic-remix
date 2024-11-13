import{r as g,u as v,j as e,a3 as j,fk as p,dF as N,b8 as M,aG as i,l as z,c5 as w,fl as k,bL as C,aK as h,c4 as S,a8 as V,Q as R,eG as F}from"./gqmy69lfum1xn3in.js";import{bY as G,b9 as L,dF as _,dG as b,bW as A,di as T,dH as B,dI as O}from"./icnxn2xqcp3w18gd.js";import{F as u,a as x,b as y,c as D,G as E,d as P}from"./j1palrhz04j45aeu.js";import{Z as $,ax as H,aD as W}from"./i4z8naqcr3t3djqa.js";const q=({gizmoId:s,limit:t,cursor:a})=>z({queryFn:async()=>G.listVersions({gizmoId:s}),queryKey:["gizmo","versions",{gizmoId:s,limit:t,cursor:a}]}),U=g.memo(function({gizmoId:t,onSelectVersion:a}){const{value:n}=v("3645668434");return!t||!n?null:e.jsx(I,{gizmoId:t,onSelectVersion:a})});function I({gizmoId:s,onSelectVersion:t}){const a=j(),{data:n}=q({gizmoId:s}),r=n?n.items.reduce((o,d)=>{const c=new Date(d.updated_at),f=`${c.getFullYear()}-${c.getMonth()+1}-${c.getDate()}`;return o[f]||(o[f]=[]),o[f].push(d),o},{}):null,l=o=>{a(`/g/${s}/view?version=${o}`)};return r?e.jsx("div",{className:"relative h-full w-screen max-w-2xs",children:e.jsx("div",{className:"flex h-full max-w-2xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",children:e.jsx("div",{className:"relative flex-1 px-4 sm:px-6",children:Object.keys(r).map((o,d)=>{const c=r[o];return e.jsx(K,{date:o,entries:c,onSelectVersion:t,onRestoreVersion:l},d)})})})}):null}function K({date:s,entries:t,onSelectVersion:a,onRestoreVersion:n}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-b border-token-border-medium py-2 font-semibold uppercase text-token-text-secondary",children:e.jsx(p,{value:s,dateStyle:"medium"})}),e.jsx("div",{className:"flex flex-col space-y-2",children:t.map((r,l)=>e.jsxs("div",{className:"flex flex-row items-center justify-between border-b border-token-border-medium",onClick:()=>a(r.version),children:[e.jsx("span",{className:"grow p-2 hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",children:e.jsx(p,{value:r.updated_at,timeStyle:"short"})}),e.jsx(Q,{onRestoreVersion:()=>{n(r.version)}})]},l))})]})}function Q({onRestoreVersion:s}){return e.jsx(e.Fragment,{children:e.jsx(N,{sideOffset:8,triggerButton:e.jsx("button",{color:"secondary",className:"rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-token-sidebar-surface-tertiary active:scale-[0.9]",children:e.jsx($,{className:"icon-md"})}),children:e.jsxs(M.Item,{className:"items-center",disabled:!1,onClick:s,children:[e.jsx(H,{className:"icon-md"}),e.jsx(i,{id:"gizmoVersionHistory.restoreVersionLabel",defaultMessage:"Restore this version"})]})})})}const Y=({gizmoId:s,version:t})=>z({queryFn:async()=>G.getVersion({gizmoId:s,version:t}),queryKey:["gizmo","version",{gizmoId:s,version:t}]}),J=(s,t)=>`/gpts/editor/${s}?version=${t}`;function Z({gizmoId:s}){const[t,a]=g.useState(null),n=j(),{data:r}=L(s),l=r?.gizmo.current_user_permission?.can_write,o=_(),[d,c]=g.useState(!1),f=()=>{n(t?J(s,t):B(s))};return e.jsxs("div",{className:"flex h-screen w-full flex-col items-center",children:[e.jsx("div",{className:"relative flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",children:r&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex cursor-pointer items-center gap-2",onClick:()=>n(-1),children:[e.jsx(W,{className:"icon-lg"}),e.jsx("div",{className:"font-semibold",children:l?e.jsx(i,{id:"gizmoReadOnly.versionHistoryTitle",defaultMessage:"Version History"}):e.jsx(i,{id:"gizmoReadOnly.configurationTitle",defaultMessage:"Configuration"})})]}),e.jsx("div",{className:"mr-4 flex items-center gap-2",children:l?e.jsx(b,{color:"secondary",onClick:()=>{t&&t!==r.gizmo.live_version&&r.tools.find(m=>m.type===w.JIT_PLUGIN&&m.metadata.auth?.type!==k.None)?c(!0):f()},children:e.jsx(i,{id:"gizmo.readonly.restoreVersion",defaultMessage:"Restore this version"})}):e.jsx(b,{color:"secondary",loading:o.isPending,onClick:async()=>{const m=await o.mutateAsync({gizmoId:s});m.gizmo.id&&n(`/gpts/editor/${m.gizmo.id}`)},children:e.jsx(i,{id:"gizmo.readonly.duplicate",defaultMessage:"Duplicate"})})})]})}),e.jsxs("div",{className:"flex h-full w-full items-center",children:[l&&e.jsx(U,{gizmoId:s,onSelectVersion:m=>{a(m)}}),e.jsx(ee,{gizmoId:s,version:t})]}),d&&e.jsx(X,{onClose:()=>{c(!1)},onContinue:f})]})}function X({onClose:s,onContinue:t}){const[a,n]=g.useState(!1);return e.jsx(C,{isOpen:!0,onClose:s,type:"warning",showCloseButton:!0,title:e.jsx(i,{id:"gizmoReadOnly.authModalWarningTitle",defaultMessage:"Reset Authentication for Custom Actions"}),primaryButton:e.jsx(h,{onClick:()=>{n(!0),t()},loading:a,color:"secondary",children:e.jsx(i,{id:"gizmoReadOnly.authModalContinueButton",defaultMessage:"Continue"})}),secondaryButton:e.jsx(h,{onClick:s,color:"secondary",children:e.jsx(i,{id:"gizmoReadOnly.authModalCancelButton",defaultMessage:"Cancel"})}),size:"normal",children:e.jsx(i,{id:"gizmoReadOnly.authModalWarningBody",defaultMessage:"Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards."})})}function ee({gizmoId:s,version:t}){const{data:a}=Y({gizmoId:s,version:t}),[n,r]=g.useState(null);if(!a)return null;const l=a.tools.filter(o=>o.type===w.JIT_PLUGIN);return e.jsx("div",{className:"flex max-h-[80vh] flex-grow justify-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-2xl flex-col text-sm",children:[e.jsx(u,{className:"self-center",children:e.jsx(A,{src:a.gizmo.display.profile_picture_url,isFirstParty:!1,className:"h-12 w-12"})}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.nameLabel",defaultMessage:"Name"})}),e.jsx(y,{type:"text",value:a.gizmo.display.name??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.descriptionLabel",defaultMessage:"Description"})}),e.jsx(y,{type:"text",value:a.gizmo.display.description??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.instructionsLabel",defaultMessage:"Instructions"})}),e.jsx(D,{className:"resize-none bg-token-main-surface-secondary",rows:8,value:a.gizmo.instructions??"",disabled:!0})]}),a.gizmo.display.prompt_starters&&a.gizmo.display.prompt_starters.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.conversationStartersLabel",defaultMessage:"Conversation starters"})}),a.gizmo.display.prompt_starters.map((o,d)=>e.jsx(y,{type:"text",value:o,disabled:!0,className:"resize-none bg-token-main-surface-secondary"},d))]}),a.files&&a.files.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.knowledgeLabel",defaultMessage:"Knowledge"})}),a.files.map((o,d)=>e.jsx(T,{file:o.name,fileId:o.id},d))]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.capabilitiesLabel",defaultMessage:"Capabilities"})}),e.jsx(E,{enabledTools:a.tools,onEnabledToolsChange:S})]}),l&&l.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.actionsLabel",defaultMessage:"Actions"})}),l.map((o,d)=>{const c=o;return e.jsx(P,{isDisabled:!1,actionTool:c,onShowActionsEditor:()=>{n?.metadata.action_id===c.metadata.action_id?r(null):r(c)}},d)}),n&&e.jsx("textarea",{readOnly:!0,value:n.metadata.raw_spec??"",className:"mb-16 block h-96 w-full border-t-0 border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary"})]})]})})}const ne=()=>(F(),null);function re(){const s=V(),t=j(),n=R().gizmoId??"",r=O(n),{value:l}=v("3645668434");return g.useEffect(()=>{s!=null&&s.isFree()&&t("/")},[s,t]),l?e.jsx(Z,{gizmoId:r}):null}export{ne as clientLoader,re as default};
//# sourceMappingURL=fg55baewu4f6xa01.js.map
