import{r as f,j as e,c as D,M as m,v as ne,L as Fe}from"./lklglvrzltpv3f05.js";import{eG as Pe,fa as A,be as d,hM as Te,hN as U,hO as Me,hP as oe,hQ as Ee,hR as L,hS as re,hT as ie,hU as _,hV as _e,hW as ae,hu as Oe,eZ as De,hX as Ae,hY as Ue,hZ as Le,h_ as Be,h$ as Re,i0 as ze,i1 as Ge,i2 as K,e_ as He,i3 as z,i4 as q,i5 as Xe,i6 as G,bC as Ze,i7 as Ve,i8 as Qe,eL as X,i9 as $e,aS as We,ia as Ye,ib as Je,ic as Ke,id as le,ie as qe,eJ as et,ig as tt,ih as st,hz as nt,fd as ot,hi as rt,dw as it,ii as at,ij as lt,ik as ct,k as dt,il as ee,im as ut,io as mt}from"./mc2tj3xhtcshtn61.js";import{aw as S,ch as ce,az as B,V as xt,F as Z,bP as O,bO as de,b0 as H,P as ue,h as me,b5 as ht,e1 as xe,b_ as ft,br as pt,c0 as gt,bE as jt,fH as vt,d_ as yt}from"./i7de8yvdg4jlu6h0.js";import{S as bt}from"./od0q70ax7x1slg7q.js";import{F as St}from"./ow19wq5eskz0jknt.js";import{P as Nt}from"./nhuh8jcuqx1lx1ir.js";import"./dk013urovhoijlg9.js";import"./jwqmomqwr7i8vy2f.js";import"./edmhw3acfg18izr2.js";import"./ia3bxqi6sme14xzy.js";import"./0zwkq4p4h5hlkinb.js";import"./i4m4t1sfl2ukfiy2.js";const Ct=[null,"#F14D42","#E36E30","#B98618","#DB9F1E","#3DCB40","#30A633","#27C0A6","#16B7DB","#6490F0","#0088FF","#1D53BF","#512AEB","#875BE1","#EE4D83","#E659C2"];function kt({color:t,active:n,onClick:s}){const o=D();return e.jsx("button",{onClick:()=>s(t),className:"flex h-10 w-10 items-center justify-center rounded-full bg-token-text-primary can-hover:hover:scale-110 can-hover:active:scale-100","aria-label":t??o.formatMessage(d.defaultColor),style:{backgroundColor:t??void 0},children:n&&e.jsx(Te,{className:"h-6 w-6 text-token-main-surface-primary"})})}function wt({currentTheme:t,onSelect:n}){return e.jsx("div",{className:"m-4 grid grid-cols-4 gap-4",children:Ct.map(s=>e.jsx(kt,{active:s===t,color:s,onClick:o=>{n(o)}},s))})}const It=({currentTheme:t,isPopoverOpen:n,disabled:s,...o},i)=>e.jsxs("button",{ref:i,disabled:s,...o,className:S("group relative flex h-[60px] w-[60px] items-center justify-center",s&&"pointer-events-none"),children:[e.jsx("div",{className:S("absolute flex h-full w-full items-center justify-center rounded-full",t&&"opacity-10",!t&&"bg-token-main-surface-secondary"),style:{backgroundColor:t??void 0}}),e.jsx("div",{className:"relative flex h-full w-full items-center justify-center",children:e.jsx(Pe,{className:S("icon-lg duration-200 ease-out can-hover:group-hover:scale-110",s&&"text-token-text-tertiary"),style:{color:t}})}),e.jsx("div",{className:S("absolute bottom-0 right-0 flex h-6 w-6 scale-0 items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary text-token-text-secondary opacity-0 drop-shadow-sm duration-200 ease-out group-hover:scale-100 group-hover:opacity-100",n&&"scale-100"),children:e.jsx(A,{className:"h-[18px] w-[18px] rounded-full text-token-text-secondary"})})]}),he=f.forwardRef(It);function V({file:t,fileName:n,fileId:s,gizmoId:o}){const i=U(n)&&s!=null,r=Me(t&&oe(t)?t:null,n,s,o,void 0);return i?e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#129FBF] bg-cover bg-center text-white",style:{backgroundImage:`url(${r})`},children:!r&&e.jsx(Ee,{className:"icon-lg"})}):null}function Ft({gizmoId:t,gizmoName:n,pendingFiles:s,files:o,modelCapacityUsed:i,interpreterOnlyFileIds:r,onAddFiles:l,removePendingFile:c,pendingFileUpsertMutationsRef:a}){return s.length===0&&o.length===0?e.jsx("div",{className:"h-full pb-6",children:e.jsx(Et,{gizmoName:n,onAddFiles:l})}):e.jsx("div",{className:"pb-6",children:e.jsx(Pt,{gizmoId:t,modelCapacityUsed:i,files:o,pendingFiles:s,interpreterOnlyFileIds:r,removePendingFile:c,pendingFileUpsertMutationsRef:a})})}function Pt({gizmoId:t,modelCapacityUsed:n,files:s,pendingFiles:o,interpreterOnlyFileIds:i,removePendingFile:r,pendingFileUpsertMutationsRef:l}){const c=L();return s.length===0&&o.length===0?null:e.jsxs("div",{className:"overflow-hidden rounded-lg border border-token-border-light",children:[n&&n>1?e.jsxs("div",{className:"border-b border-token-border-light bg-gray-50 px-4 py-3 text-xs text-token-text-secondary dark:bg-gray-750",children:[e.jsx("div",{className:"font-medium",children:e.jsx(m,{...d.tooManyFilesTitle})}),e.jsx("div",{children:e.jsx(m,{...d.tooManyFilesDescription})})]}):null,s.map(a=>e.jsx(Mt,{gizmoId:t,gizmoFile:a,interpreterOnly:i.includes(a.file_id),onDelete:async()=>{const u=new Promise(p=>{l.current.push({id:t,mutationId:ne(),update:j=>{const g=j.files.filter(v=>v.file_id!==a.file_id);return{...j,files:g}},onSuccess:p})});return re(t)({gizmoId:t,upsertProjectMutation:c,pendingFileUpsertMutationsRef:l}),u}},a.file_id)),o.map(a=>e.jsx(Tt,{interpreterOnly:i.includes(a.tempId),pendingFile:a,onDelete:async()=>r(a.tempId)},a.tempId))]})}function fe(){return e.jsx("div",{className:"truncate",children:e.jsx(m,{...d.interpreterOnlyLabel})})}function Tt({pendingFile:t,onDelete:n,interpreterOnly:s}){const o=t.file.name,r=(oe(t.file)&&t.file?.type.startsWith("image/")||U(o))&&e.jsx(V,{file:t.file,fileName:o,fileId:t.fileId??void 0,gizmoId:t.gizmoId??void 0});return e.jsx(pe,{interpreterOnly:s,onDelete:n,children:e.jsx(ie,{icon:r,fileName:t.file.name,loadingPercentage:t.status===_.Uploading?t.progress:void 0,customFileDescription:s?e.jsx(fe,{}):void 0})})}function Mt({gizmoFile:t,gizmoId:n,interpreterOnly:s,onDelete:o}){const i=t.name,l=U(i)&&t.file_id!=null&&e.jsx(V,{fileName:i,fileId:t.file_id,gizmoId:n});return e.jsx(pe,{interpreterOnly:s,onDelete:o,children:e.jsx(ie,{icon:l,fileName:t.name,customFileDescription:s?e.jsx(fe,{}):void 0})})}function pe({children:t,onDelete:n,interpreterOnly:s}){const[o,i]=f.useState(!1);return e.jsxs("div",{className:S("group flex w-full justify-between border-b border-token-border-light p-3 text-sm last:border-b-0",s&&"grayscale"),children:[e.jsx("div",{className:"w-10/12 can-hover:w-full can-hover:group-hover:w-11/12",children:t}),e.jsx("div",{className:S("flex shrink-0 grow-0 bg-token-main-surface-primary pl-1 can-hover:group-hover:flex",!o&&"can-hover:hidden"),children:o?e.jsx("div",{className:"flex h-full w-6 items-center justify-center",children:e.jsx(ce,{})}):e.jsx("button",{onClick:async()=>{n&&(i(!0),await n(),i(!1))},children:e.jsx(_e,{className:"text-token-secondary rounded-full hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-tertiary"})})})]})}function Et({gizmoName:t,onAddFiles:n}){return e.jsx("div",{className:"flex h-full cursor-pointer items-center justify-center rounded-lg border border-token-border-light px-4 py-3 pb-6 active:bg-token-main-surface-tertiary",onClick:n,children:e.jsxs("div",{className:"flex flex-col items-center gap-2 py-4 text-sm text-token-text-secondary",children:[e.jsx(ae,{}),e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"max-w-100 text-token-text-secondary",children:e.jsx(m,{...d.emptyFileInstructions,values:{gizmoNameText:e.jsx("span",{className:"font-bold",children:e.jsx(m,{...d.emptyFileGizmoName,values:{gizmoName:t}})},"gizmoNameText")}})})})]})})}const ge=B.div`text-sm text-red-500`,_t=B.textarea`w-full overflow-y-auto overflow-x-clip rounded-lg border px-3 py-2 focus:ring-2 focus:ring-token-text-primary border-token-border-medium bg-token-main-surface-primary`,E=20;function je({onClose:t,gizmo:n}){const s=D(),[o,i]=f.useState(n?.gizmo?.instructions||""),r=L(),l=Z(),c=[];o?.length>z&&c.push(s.formatMessage(d.instructionsTooLong,{length:z}));const a=g=>{i(g.target.value)},u=()=>{t()},x=async()=>{try{await r.mutateAsync({update:{instructions:o??""},id:n.gizmo.id}),t()}catch(g){const v=xe(g);l.danger(v??"Error",{duration:2})}},p=e.jsx(O.Button,{title:s.formatMessage(d.save),color:"primary",onClick:x,loading:r.isPending,disabled:c.length>0}),j=e.jsx(O.Button,{title:s.formatMessage(d.cancel),color:"secondary",onClick:u,disabled:r.isPending});return e.jsx(de,{className:"min-h-[50dvh] max-w-[820px]",isOpen:!0,showCloseButton:!r.isPending,hideSeparator:!0,noPadding:!0,size:"custom",type:"success",title:e.jsx("div",{className:"h-8",children:s.formatMessage(d.editCustomInstructionsTitle)}),onClose:()=>{r.isPending||t()},children:e.jsxs("div",{className:"flex h-full flex-col px-6 pb-7 pt-0",children:[e.jsx("div",{className:"text-sm font-medium",children:s.formatMessage(d.editCustomInstructionsSubtitle)}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:s.formatMessage(d.editCustomInstructionsDescription)}),e.jsx(_t,{autoFocus:!0,placeholder:s.formatMessage(d.projectInstructionsPlaceholder),className:"mb-1 mt-4 min-h-24 w-full flex-grow resize-none rounded-md bg-token-main-surface-primary",onChange:a,value:o,disabled:r.isPending}),c.map(g=>e.jsx(ge,{className:"mt-1",children:g},g)),e.jsx(O.Actions,{primaryButton:p,secondaryButton:j})]})})}function Ot({gizmoId:t,gizmoName:n,gizmoEditorData:s,openFileDialog:o,pendingFiles:i,setVersion:r,pendingFileUpsertMutationsRef:l,currentModelConfig:c}){const a=s?.files?.reduce((h,k)=>h+(k.file_size_tokens??0),0)??0,u=s?.contextStuffingBudget;let x;u&&(x=a/u,a>0&&x<.01&&(x=.01));const p=s?.files??[],j=Array.from(i.current.values()).filter(h=>p.every(k=>k.file_id!==h.fileId)),g=j.filter(h=>c!=null&&G(c,h.file.type,h.file.name)===H.CodeInterpreter),v=p.filter(h=>c!=null&&h.type!=null&&G(c,h.type,h.name)===H.CodeInterpreter),y=[...g.map(h=>h.tempId),...v.map(h=>h.file_id)];return e.jsx(Ft,{gizmoId:t,gizmoName:n,pendingFiles:j,pendingFileUpsertMutationsRef:l,files:p,modelCapacityUsed:x,interpreterOnlyFileIds:y,onAddFiles:o,removePendingFile:h=>{i.current.delete(h),r(k=>k+1)}})}const Dt=f.forwardRef(function({gizmo:n,showInstructions:s=!0},o){const i=D(),[r,l]=f.useState(!1),c=L(),a=Oe(n),u=De(a),{data:x}=Ae(),p=x?.modelsList.find(N=>N.tags.includes(xt.GPT_4o))??x?.modelsList.find(N=>N.id===Ue),j=Z(),[g,v]=f.useState(0),y=f.useRef(new Map),h=f.useRef([]),k=Le(p,void 0),be=N=>{N.some(({errors:I})=>I.length!==1||I[0]?.code!==K.TooManyFiles)?j.danger(i.formatMessage(d.unknownError),{duration:2}):j.danger(i.formatMessage(d.dragTooManyFilesError,{MAX_FILES_PER_PROJECT:E}),{duration:2})},Se=async N=>{ue.logEvent(me.uploadFile,{client:"web",eventSource:"mouse",intent:"gizmo"});const I=a.id;N.length>0&&await Promise.all(N.map(F=>{const R=Ze(F);y.current.set(R,{tempId:R,gizmoId:I,file:F,status:_.Uploading,progress:1,fileId:null,cdnUrl:null}),Ve(R,F,i,j,{kind:ht.Gizmo,gizmoId:I},{onFileUploaded:async(b,w,T,P)=>{const C=y.current.get(b);C?.fileId&&C?.fileId&&(h.current.push({id:n.gizmo.id,mutationId:ne(),update:M=>{if(!C.fileId)return M;const Ie=[...M.files??[],{file_id:C.fileId,name:C.file.name,size:C.file.size,type:P?.mimeType??Qe(C.file),last_modified:C.file.lastModified,file_size_tokens:P?.fileTokenSize}];return{...M,files:Ie}},onSuccess:()=>{y.current.delete(b),v(M=>M+1)}}),re(n.gizmo.id)({gizmoId:n.gizmo.id,upsertProjectMutation:c,pendingFileUpsertMutationsRef:h}))},onFileCreated:(b,w,T)=>{y.current.set(b,{tempId:b,gizmoId:I,file:F,status:_.Uploading,progress:1,...y.current.get(b),fileId:w,cdnUrl:T}),v(P=>P+1)},onFileUploadProgress:(b,w)=>{const T=y.current.get(b);T?.status===_.Uploading&&y.current.set(b,{...T,progress:w>95?95:w}),v(P=>P+1)},onError:b=>{y.current.delete(b),v(w=>w+1)}},{usesRetrievalIndex:p!=null&&G(p,F.type,F.name)===H.Retrieval})}))},$=Be(k),W=Re($),Y=y.current.size+a.files.length,{open:J,getInputProps:Ne,getRootProps:Ce,isDragAccept:ke,isDragReject:we}=ze({noClick:!0,noDragEventsBubbling:!0,onDropAccepted:Se,onDropRejected:be,multiple:!0,maxSize:Ge,maxFiles:E-Y,validator:()=>Y>=E?{code:K.TooManyFiles,message:"Too many files"}:null,...$});return f.useImperativeHandle(o,()=>({openFileDialog:J})),e.jsxs("div",{...Ce({className:"h-full px-6"}),children:[e.jsx("input",{...Ne()}),s&&e.jsxs(St,{children:[e.jsx("button",{className:"w-full",onClick:()=>l(!0),children:e.jsx("div",{className:"w-full rounded-lg border border-token-border-light text-left text-sm",children:a?.instructions?.length?e.jsx("div",{className:"mx-4 my-3 line-clamp-4",children:a.instructions}):e.jsxs("div",{className:"flex h-full w-full items-center px-4 py-3 text-token-text-secondary",children:[e.jsx("div",{className:"flex-1",children:e.jsx(m,{...d.addCustomInstructions})}),e.jsx(A,{className:"icon-sm"})]})})}),u.includes(He.GizmoInstructionsTooLong)?e.jsx(ge,{className:"mt-1",children:e.jsx(m,{...d.instructionsTooLong,values:{length:z}})}):null]}),r&&e.jsx(je,{gizmo:n,onClose:()=>{l(!1)}}),e.jsx(Ot,{gizmoId:n.gizmo.id,gizmoName:n.gizmo.display.name,gizmoEditorData:a,openFileDialog:J,pendingFiles:y,pendingFileUpsertMutationsRef:h,setVersion:v,currentModelConfig:p}),ke&&e.jsxs(q,{children:[e.jsx(Xe,{}),e.jsx("h3",{children:e.jsx(m,{...d.dragInstructions})}),e.jsx("h4",{className:"w-2/3 text-center",children:W.length>0?W.join(", "):e.jsx(m,{...d.dragAllAccepted})})]}),we&&e.jsxs(q,{children:[e.jsx(bt,{className:"icon-2xl"}),e.jsx("h3",{children:e.jsx(m,{...d.dragTooManyFiles})}),e.jsx("h4",{className:"w-2/3 text-center",children:e.jsx(m,{...d.dragTooManyFilesDescription,values:{MAX_FILES_PER_PROJECT:E}})})]})]})});function At({gizmo:t,onClose:n}){const s=f.useRef(null),o=f.useCallback(()=>{s.current?.openFileDialog()},[s]);return e.jsx(e.Fragment,{children:e.jsx(de,{className:"min-h-72 max-w-[820px]",isOpen:!0,showCloseButton:!0,hideSeparator:!0,noPadding:!0,size:"custom",type:"success",onClose:()=>{n()},children:e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsx(O.TitleBar,{$hasSeparator:!1,children:e.jsxs("div",{className:"flex w-full items-center gap-2",children:[e.jsx("div",{className:"flex-1",children:e.jsx(ft,{className:"text-lg font-semibold leading-6 text-token-text-primary",children:e.jsx(m,{...d.projectFilesModalTitle})})}),e.jsx(pt,{color:"secondary",onClick:o,children:e.jsx(m,{...d.addFilesButtonLabel})}),e.jsx(gt,{asChild:!0,className:"sm:mt-0",children:e.jsx(jt,{onClick:n})})]})}),e.jsx("div",{className:"h-[50dvh] flex-grow overflow-y-auto pt-0",children:e.jsx(Dt,{ref:s,gizmo:t,showInstructions:!1})})]})})})}function Ut({gizmo:t}){return e.jsx("div",{className:"mt-6 grid grid-cols-1 items-start gap-5 xs:grid-cols-2",children:t?e.jsxs(e.Fragment,{children:[e.jsx(Lt,{gizmo:t}),e.jsx(Rt,{gizmo:t})]}):e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx(te,{})]})})}function Q({header:t,context:n,contextClassName:s="",icon:o,modal:i,onClick:r,disabled:l=!1,isModalOpen:c=!1}){return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:r,className:S("group/snorlax-control-tile relative h-full rounded-2xl border border-token-border-xlight bg-token-main-surface-primary shadow-xxs hover:bg-token-main-surface-secondary active:bg-token-main-surface-tertiary active:drop-shadow-none",l&&"pointer-events-none"),children:e.jsxs("div",{className:"relative mx-5 my-4 flex items-center justify-between gap-3 overflow-hidden",children:[e.jsxs("div",{className:"w-full grow text-left",children:[e.jsx("div",{className:"text-sm font-medium",children:t}),e.jsx("div",{className:S("text-xs text-token-text-secondary",s),children:n})]}),o]})}),c&&i]})}function te(){return e.jsx(Q,{disabled:!0,header:e.jsx("div",{className:"my-2 h-2 w-48 rounded-full bg-token-main-surface-secondary"}),context:e.jsx("div",{className:"my-2 h-2 w-32 rounded-full bg-token-main-surface-secondary"})})}function Lt({gizmo:t}){const{files:n}=t,s=!n.length,o=X(t.gizmo.id),[i,r]=f.useState(!1),l=i&&e.jsx(At,{gizmo:t,onClose:()=>{r(!1)}}),c=()=>r(!0);let a,u,x;if(s)a=e.jsx(m,{...d.addFilesButtonLabel}),u=e.jsx(m,{...d.filesControlDescription}),x=e.jsxs("div",{className:"relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full",children:[e.jsx("div",{className:"absolute h-full w-full rounded-full bg-token-main-surface-secondary opacity-5",style:{backgroundColor:o??void 0}}),e.jsx(ae,{className:"icon-md h-5 w-5",style:{color:o}})]});else{const j=n.slice(0,3);a=e.jsx(m,{...d.projectFilesModalTitle}),u=e.jsx(m,{...d.filesCount,values:{count:n.length}}),x=e.jsx("div",{className:"relative flex h-10 w-20 shrink-0 items-center justify-center rounded-full",children:j.toReversed().map((g,v)=>e.jsx(Bt,{file:g,index:v,gizmoId:t.gizmo.id},g.id))})}return e.jsx(Q,{isModalOpen:i,modal:l,onClick:c,header:a,context:u,icon:x})}function Bt({file:t,index:n,gizmoId:s}){const o=t.name,r=U(o)&&t.file_id!=null&&e.jsx(V,{fileName:o,fileId:t.file_id,gizmoId:s});return e.jsx("div",{className:"absolute right-0 top-0 h-10 w-10 overflow-hidden rounded-xl border-2 border-token-main-surface-primary group-hover/snorlax-control-tile:border-token-main-surface-secondary",style:{transform:`translateX(${n*-20}px)`},children:r||e.jsx($e,{className:"h-9 w-9 flex-shrink-0",filename:t.name,contextConnectorInfo:void 0})})}function Rt({gizmo:t}){const{instructions:n}=t.gizmo,s=!n.length,o=X(t.gizmo.id),[i,r]=f.useState(!1),l=i&&e.jsx(je,{gizmo:t,onClose:()=>{r(!1)}}),c=()=>r(!0);let a,u,x,p;return s?(a=e.jsx(m,{...d.customInstructionsTitle}),u=e.jsx(m,{...d.customInstructionsDescription}),x=e.jsxs("div",{className:"relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full",children:[e.jsx("div",{className:"absolute h-full w-full rounded-full bg-token-main-surface-secondary opacity-5",style:{backgroundColor:o??void 0}}),e.jsx(A,{className:"icon-md h-5 w-5",style:{color:o}})]})):(a=e.jsx(m,{...d.editCustomInstructionsTitle}),p="overflow-hidden text-ellipsis whitespace-nowrap",u=n),e.jsx(Q,{isModalOpen:i,modal:l,onClick:c,header:a,context:u,icon:x,contextClassName:p})}const ve=B.h3`p4 overflow-hidden text-ellipsis break-all py-3 px-4 text-xs font-semibold text-token-text-secondary`,zt=B.div`h-24 w-full rounded-3xl bg-token-main-surface-secondary`,Gt=()=>e.jsx("div",{className:"ml-1 mt-3 h-10",children:e.jsx("div",{className:"my-[15px] h-[10px] w-48 rounded-full bg-token-main-surface-secondary"})}),se=new Map;function Ht(t){const n=se.get(t);if(n)return n;const s=dt(Xt,2e3,{trailing:!0});return se.set(t,s),s}async function Xt({gizmoId:t,upsertProjectMutation:n,toaster:s}){const o=mt,i=ee(o.getState(),"theme",t);try{i!==void 0&&await n.mutateAsync({id:t,update:{theme:i??void 0}}),ee(o.getState(),"theme",t)===i&&ut(t,"theme")}catch(r){const l=xe(r);s.warning(l??"Error",{duration:2})}}function Zt({gizmoId:t,theme:n,upsertProjectMutation:s,toaster:o}){ct(t,"theme",n),Ht(t)({gizmoId:t,upsertProjectMutation:s,toaster:o})}function Vt({gizmo:t}){const n=t.gizmo.display.emoji,s=X(t.gizmo.id),o=tt(),i=L(),[r,l]=f.useState(!1),c=Z();if(o&&n)return e.jsx(st,{emoji:n,className:"icon-lg text-2xl"});const a=u=>{u!==s&&Zt({gizmoId:t.gizmo.id,theme:u,upsertProjectMutation:i,toaster:c})};return e.jsx(nt,{open:r,sideOffset:4,alignOffset:7,side:"bottom",alignAgainstAnchor:"start",size:"none",modal:!0,onOpenChange:u=>l(u),triggerButton:e.jsx(he,{currentTheme:s,isPopoverOpen:r}),children:e.jsx(wt,{currentTheme:s,onSelect:a})})}function Qt({gizmo:t}){return e.jsxs("div",{className:"mb-6 flex w-full flex-col px-4",children:[t?e.jsx(Vt,{gizmo:t}):e.jsx(he,{disabled:!0,currentTheme:null,isPopoverOpen:!1}),t?e.jsxs("button",{className:"group ml-1 mt-3 self-start text-balance text-left text-4xl font-semibold hover:text-token-text-secondary",onClick:()=>{le.setShowProjectSettingsModal(!0)},children:[t.gizmo.display.name,e.jsx(A,{className:"icon-lg ml-2.5 inline-block text-token-text-secondary opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-100"})]}):e.jsx(Gt,{})]})}function ye({children:t}){return e.jsx("div",{className:"group relative flex flex-col gap-1 p-4",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(ot,{className:"icon-md text-token-sidebar-icon"}),t]})})}function $t({conversation:t,gizmo:n}){const s=vt(t.id)??t.title,[o,i]=f.useState(!1);f.useEffect(()=>yt(rt,{editTitleInMainScreen:({serverThreadId:c})=>{c===t.id&&i(!0)}}),[t.id]);const{snippet:r}=t,l=e.jsxs(ye,{children:[e.jsxs("div",{className:"flex-grow overflow-hidden group-hover:mr-5",children:[o?e.jsx(at,{conversation:t,onClose:()=>{i(!1)}}):e.jsx("div",{className:"text-sm font-medium",children:s}),r&&e.jsx("div",{className:"truncate text-sm text-token-text-secondary",children:r})]}),!o&&e.jsx(Wt,{conversation:t})]});return o?l:e.jsx(Fe,{to:it(t.id,n),children:l})}function Wt({conversation:t}){const[n,s]=f.useState(!1);return e.jsx("div",{className:S("absolute bottom-0 top-0 items-center gap-1.5 pr-4 ltr:right-0 rtl:left-0",n?"flex":"hidden can-hover:group-hover:flex"),onClick:o=>{o.preventDefault()},children:e.jsx(lt,{conversation:t,conversationTitle:t.title,onOpenChange:o=>{s(o),o&&ue.logEvent(me.conversationHistoryItemOpenMenu,{conversationId:t.id})},inMainScreen:!0})})}function Yt({gizmo:t}){qe(t.gizmo.id);const{items:n,hasNextPage:s,fetchNextPage:o,isLoading:i,isFetching:r,isFetchingNextPage:l}=et(t.gizmo.id),c=f.useRef(null),a=f.useCallback(x=>{i||x==null||(c.current?.disconnect(),c.current=new IntersectionObserver(p=>{p[0].isIntersecting&&s&&!r&&o()}),c.current.observe(x))},[i,s,o,r]);f.useEffect(()=>()=>{c.current?.disconnect()},[]);const u=n.length;return e.jsxs("div",{className:"mb-14 mt-6",children:[u||i?e.jsx(Kt,{gizmo:t,items:n??[],hasNextPage:s,infiniteScrollTriggerElementRef:a}):e.jsx(Jt,{}),l&&e.jsx("div",{className:"m-4 mb-5 flex justify-center",children:e.jsx(ce,{})})]})}function Jt(){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:e.jsx(m,{...d.emptyChatsInProjectTitle})}),e.jsx("ol",{children:Array.from({length:5}).map((n,s)=>e.jsx("li",{style:{opacity:1-s*.2,transition:"opacity 0.3s ease-in-out"},className:S(s!==4&&"border-b border-token-border-xlight"),children:e.jsx(ye,{children:e.jsxs("div",{className:"my-2 flex w-full flex-col gap-2",children:[e.jsx("div",{className:"h-2 w-2/12 rounded-full bg-token-main-surface-tertiary"}),e.jsx("div",{className:"h-2 w-5/12 rounded-full bg-token-main-surface-tertiary"})]})})},s))})]})}function Kt({gizmo:t,items:n,hasNextPage:s,infiniteScrollTriggerElementRef:o}){const i=n.length;return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:e.jsx(m,{...d.chatsInProjectTitle})}),e.jsx("ol",{children:n.map((r,l)=>{const c=s&&l===n.length-3?o:void 0;return e.jsx("li",{ref:c,className:S("first:rounded-t-lg last:rounded-b-lg hover:bg-token-main-surface-secondary",l!==i-1&&"border-b border-token-border-xlight"),children:e.jsx($t,{conversation:r,gizmo:t})},r.id)})})]})}function ms({clientThreadId:t,gizmoId:n,currentModelId:s,onRequestCompletion:o}){const i=D(),{data:r}=We(n),l=Ye(c=>c.showProjectSettingsModal);return e.jsxs(Je,{isStaticSharedThread:!1,withVerticalPadding:!1,withHorizontalPadding:!0,clientThreadId:t,fullHeight:!0,children:[e.jsx(Qt,{gizmo:r}),r?e.jsx(Nt,{clientThreadId:t,isNewThread:!0,currentModelId:s,onRequestCompletion:o,hideHeader:!0,showPromptStarters:!1}):e.jsx(zt,{}),e.jsx(Ut,{gizmo:r}),r&&e.jsx(Yt,{gizmo:r}),l&&e.jsx(Ke,{submitButtonTitle:i.formatMessage(d.projectSettingsSubmitButton),gizmo:r,onClose:()=>{le.setShowProjectSettingsModal(!1)}},n)]})}export{ms as SnorlaxSplashScreen};
//# sourceMappingURL=ga0gie3a8piuonwy.js.map
