import{r as h,j as e,c as O,M as f,v as oe,f as Pe,L as Me}from"./lklglvrzltpv3f05.js";import{cT as Te,f9 as A,be as c,ir as Ee,is as U,it as _e,iu as re,iv as De,iw as L,ix as ae,iy as ie,iz as _,iA as Oe,iB as le,ia as Ae,eY as Ue,iC as Le,iD as Be,iE as Re,iF as ze,iG as Ge,iH as He,iI as Xe,iJ as q,eZ as $e,iK as z,iL as J,iM as Qe,iN as G,bE as We,iO as Ze,iP as Ve,cY as X,iQ as Ye,aR as Ke,iR as qe,iS as Je,iT as et,iU as tt,iV as ce,iW as st,cW as nt,iX as ot,iY as rt,fW as at,fc as it,hp as lt,dI as ct,d$ as dt,e0 as ut,iZ as mt,i_ as xt,i$ as ft,aW as ht,j0 as ee,j1 as pt,j2 as gt}from"./ntw4l0fkgqdiln85.js";import{ao as S,d5 as de,aq as B,H as jt,y as $,bQ as D,bP as ue,aV as H,P as me,j as xe,a_ as vt,e7 as fe,b$ as yt,bm as bt,c1 as St,bA as Nt,bj as Ct,gQ as te,f$ as kt,e5 as wt}from"./ltrr4mhf6s4m7a72.js";import{S as It}from"./od0q70ax7x1slg7q.js";import{F as Ft}from"./mrdowcb525zld97p.js";import{P as Pt}from"./m5cd4p680vhusvsg.js";import"./hzzlkn5ny7a6v61q.js";import"./dz00r7qlzgek59uu.js";import"./bwsmtgh34vk8igjb.js";import"./vyarha3ckzwu9yf1.js";import"./lnovrxcizvfadwta.js";const Mt=[null,"#F14D42","#E36E30","#B98618","#DB9F1E","#3DCB40","#30A633","#27C0A6","#16B7DB","#6490F0","#0088FF","#1D53BF","#512AEB","#875BE1","#EE4D83","#E659C2"];function Tt({color:t,active:n,onClick:s}){const o=O();return e.jsx("button",{onClick:()=>s(t),className:"flex h-10 w-10 items-center justify-center rounded-full bg-token-text-primary can-hover:hover:scale-110 can-hover:active:scale-100","aria-label":t??o.formatMessage(c.defaultColor),style:{backgroundColor:t??void 0},children:n&&e.jsx(Ee,{className:"h-6 w-6 text-token-main-surface-primary"})})}function Et({currentTheme:t,onSelect:n}){return e.jsx("div",{className:"m-4 grid grid-cols-4 gap-4",children:Mt.map(s=>e.jsx(Tt,{active:s===t,color:s,onClick:o=>{n(o)}},s))})}const _t=({currentTheme:t,isPopoverOpen:n,disabled:s,...o},a)=>e.jsxs("button",{ref:a,disabled:s,...o,className:S("group relative flex h-[60px] w-[60px] items-center justify-center",s&&"pointer-events-none"),children:[e.jsx("div",{className:S("absolute flex h-full w-full items-center justify-center rounded-full",t&&"opacity-10",!t&&"bg-token-main-surface-secondary"),style:{backgroundColor:t??void 0}}),e.jsx("div",{className:"relative flex h-full w-full items-center justify-center",children:e.jsx(Te,{className:S("icon-lg duration-200 ease-out can-hover:group-hover:scale-110",s&&"text-token-text-tertiary"),style:{color:t}})}),e.jsx("div",{className:S("absolute bottom-0 right-0 flex h-6 w-6 scale-0 items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary text-token-text-secondary opacity-0 drop-shadow-sm duration-200 ease-out group-hover:scale-100 group-hover:opacity-100",n&&"scale-100"),children:e.jsx(A,{className:"h-[18px] w-[18px] rounded-full text-token-text-secondary"})})]}),he=h.forwardRef(_t);function Q({file:t,fileName:n,fileId:s,gizmoId:o}){const a=U(n)&&s!=null,r=_e(t&&re(t)?t:null,n,s,o,void 0);return a?e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#129FBF] bg-cover bg-center text-white",style:{backgroundImage:`url(${r})`},children:!r&&e.jsx(De,{className:"icon-lg"})}):null}function Dt({gizmoId:t,gizmoName:n,pendingFiles:s,files:o,modelCapacityUsed:a,interpreterOnlyFileIds:r,onAddFiles:l,removePendingFile:d,pendingFileUpsertMutationsRef:i}){return s.length===0&&o.length===0?e.jsx("div",{className:"h-full pb-6",children:e.jsx(Lt,{gizmoName:n,onAddFiles:l})}):e.jsx("div",{className:"pb-6",children:e.jsx(Ot,{gizmoId:t,modelCapacityUsed:a,files:o,pendingFiles:s,interpreterOnlyFileIds:r,removePendingFile:d,pendingFileUpsertMutationsRef:i})})}function Ot({gizmoId:t,modelCapacityUsed:n,files:s,pendingFiles:o,interpreterOnlyFileIds:a,removePendingFile:r,pendingFileUpsertMutationsRef:l}){const d=L();return s.length===0&&o.length===0?null:e.jsxs("div",{className:"overflow-hidden rounded-lg border border-token-border-light",children:[n&&n>1?e.jsxs("div",{className:"border-b border-token-border-light bg-gray-50 px-4 py-3 text-xs text-token-text-secondary dark:bg-gray-750",children:[e.jsx("div",{className:"font-medium",children:e.jsx(f,{...c.tooManyFilesTitle})}),e.jsx("div",{children:e.jsx(f,{...c.tooManyFilesDescription})})]}):null,s.map(i=>e.jsx(Ut,{gizmoId:t,gizmoFile:i,interpreterOnly:a.includes(i.file_id),onDelete:async()=>{const m=new Promise(u=>{l.current.push({id:t,mutationId:oe(),update:j=>{const g=j.files.filter(v=>v.file_id!==i.file_id);return{...j,files:g}},onSuccess:u})});return ae(t)({gizmoId:t,upsertProjectMutation:d,pendingFileUpsertMutationsRef:l}),m}},i.file_id)),o.map(i=>e.jsx(At,{interpreterOnly:a.includes(i.tempId),pendingFile:i,onDelete:async()=>r(i.tempId)},i.tempId))]})}function pe(){return e.jsx("div",{className:"truncate",children:e.jsx(f,{...c.interpreterOnlyLabel})})}function At({pendingFile:t,onDelete:n,interpreterOnly:s}){const o=t.file.name,r=(re(t.file)&&t.file?.type.startsWith("image/")||U(o))&&e.jsx(Q,{file:t.file,fileName:o,fileId:t.fileId??void 0,gizmoId:t.gizmoId??void 0});return e.jsx(ge,{interpreterOnly:s,onDelete:n,children:e.jsx(ie,{icon:r,fileName:t.file.name,loadingPercentage:t.status===_.Uploading?t.progress:void 0,customFileDescription:s?e.jsx(pe,{}):void 0})})}function Ut({gizmoFile:t,gizmoId:n,interpreterOnly:s,onDelete:o}){const a=t.name,l=U(a)&&t.file_id!=null&&e.jsx(Q,{fileName:a,fileId:t.file_id,gizmoId:n});return e.jsx(ge,{interpreterOnly:s,onDelete:o,children:e.jsx(ie,{icon:l,fileName:t.name,customFileDescription:s?e.jsx(pe,{}):void 0})})}function ge({children:t,onDelete:n,interpreterOnly:s}){const[o,a]=h.useState(!1);return e.jsxs("div",{className:S("group flex w-full justify-between border-b border-token-border-light p-3 text-sm last:border-b-0",s&&"grayscale"),children:[e.jsx("div",{className:"w-10/12 can-hover:w-full can-hover:group-hover:w-11/12",children:t}),e.jsx("div",{className:S("flex shrink-0 grow-0 bg-token-main-surface-primary pl-1 can-hover:group-hover:flex",!o&&"can-hover:hidden"),children:o?e.jsx("div",{className:"flex h-full w-6 items-center justify-center",children:e.jsx(de,{})}):e.jsx("button",{onClick:async()=>{n&&(a(!0),await n(),a(!1))},children:e.jsx(Oe,{className:"text-token-secondary rounded-full hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-tertiary"})})})]})}function Lt({gizmoName:t,onAddFiles:n}){return e.jsx("div",{className:"flex h-full cursor-pointer items-center justify-center rounded-lg border border-token-border-light px-4 py-3 pb-6 active:bg-token-main-surface-tertiary",onClick:n,children:e.jsxs("div",{className:"flex flex-col items-center gap-2 py-4 text-sm text-token-text-secondary",children:[e.jsx(le,{}),e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"max-w-100 text-token-text-secondary",children:e.jsx(f,{...c.emptyFileInstructions,values:{gizmoNameText:e.jsx("span",{className:"font-bold",children:e.jsx(f,{...c.emptyFileGizmoName,values:{gizmoName:t}})},"gizmoNameText")}})})})]})})}const je=B.div`text-sm text-red-500`,Bt=B.textarea`w-full overflow-y-auto overflow-x-clip rounded-lg border px-3 py-2 focus:ring-2 focus:ring-token-text-primary border-token-border-medium bg-token-main-surface-primary`,E=20;function ve({onClose:t,gizmo:n}){const s=O(),[o,a]=h.useState(n?.gizmo?.instructions||""),r=L(),l=$(),d=[];o?.length>z&&d.push(s.formatMessage(c.instructionsTooLong,{length:z}));const i=g=>{a(g.target.value)},m=()=>{t()},x=async()=>{try{await r.mutateAsync({update:{instructions:o??""},id:n.gizmo.id}),t()}catch(g){const v=fe(g);l.danger(v??"Error",{duration:2})}},u=e.jsx(D.Button,{title:s.formatMessage(c.save),color:"primary",onClick:x,loading:r.isPending,disabled:d.length>0}),j=e.jsx(D.Button,{title:s.formatMessage(c.cancel),color:"secondary",onClick:m,disabled:r.isPending});return e.jsx(ue,{className:"min-h-[50dvh] max-w-[820px]",isOpen:!0,showCloseButton:!r.isPending,hideSeparator:!0,noPadding:!0,size:"custom",type:"success",title:e.jsx("div",{className:"h-8",children:s.formatMessage(c.editCustomInstructionsTitle)}),onClose:()=>{r.isPending||t()},children:e.jsxs("div",{className:"flex h-full flex-col px-6 pb-7 pt-0",children:[e.jsx("div",{className:"text-sm font-medium",children:s.formatMessage(c.editCustomInstructionsSubtitle)}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:s.formatMessage(c.editCustomInstructionsDescription)}),e.jsx(Bt,{autoFocus:!0,placeholder:s.formatMessage(c.projectInstructionsPlaceholder),className:"mb-1 mt-4 min-h-24 w-full flex-grow resize-none rounded-md bg-token-main-surface-primary",onChange:i,value:o,disabled:r.isPending}),d.map(g=>e.jsx(je,{className:"mt-1",children:g},g)),e.jsx(D.Actions,{primaryButton:u,secondaryButton:j})]})})}function Rt({gizmoId:t,gizmoName:n,gizmoEditorData:s,openFileDialog:o,pendingFiles:a,setVersion:r,pendingFileUpsertMutationsRef:l,currentModelConfig:d}){const i=s?.files?.reduce((p,k)=>p+(k.file_size_tokens??0),0)??0,m=s?.contextStuffingBudget;let x;m&&(x=i/m,i>0&&x<.01&&(x=.01));const u=s?.files??[],j=Array.from(a.current.values()).filter(p=>u.every(k=>k.file_id!==p.fileId)),g=j.filter(p=>d!=null&&G(d,p.file.type,p.file.name)===H.CodeInterpreter),v=u.filter(p=>d!=null&&p.type!=null&&G(d,p.type,p.name)===H.CodeInterpreter),y=[...g.map(p=>p.tempId),...v.map(p=>p.file_id)];return e.jsx(Dt,{gizmoId:t,gizmoName:n,pendingFiles:j,pendingFileUpsertMutationsRef:l,files:u,modelCapacityUsed:x,interpreterOnlyFileIds:y,onAddFiles:o,removePendingFile:p=>{a.current.delete(p),r(k=>k+1)}})}const zt=h.forwardRef(function({gizmo:n,showInstructions:s=!0},o){const a=O(),[r,l]=h.useState(!1),d=L(),i=Ae(n),m=Ue(i),{data:x}=Le(),u=x?.modelsList.find(N=>N.tags.includes(jt.GPT_4o))??x?.modelsList.find(N=>N.id===Be),j=$(),[g,v]=h.useState(0),y=h.useRef(new Map),p=h.useRef([]),k=Re(u,void 0),Se=N=>{N.some(({errors:I})=>I.length!==1||I[0]?.code!==q.TooManyFiles)?j.danger(a.formatMessage(c.unknownError),{duration:2}):j.danger(a.formatMessage(c.dragTooManyFilesError,{MAX_FILES_PER_PROJECT:E}),{duration:2})},Ne=async N=>{me.logEvent(xe.uploadFile,{client:"web",eventSource:"mouse",intent:"gizmo"});const I=i.id;N.length>0&&await Promise.all(N.map(F=>{const R=We(F);y.current.set(R,{tempId:R,gizmoId:I,file:F,status:_.Uploading,progress:1,fileId:null,cdnUrl:null}),Ze(R,F,a,j,{kind:vt.Gizmo,gizmoId:I},{onFileUploaded:async(b,w,M,P)=>{const C=y.current.get(b);C?.fileId&&C?.fileId&&(p.current.push({id:n.gizmo.id,mutationId:oe(),update:T=>{if(!C.fileId)return T;const Fe=[...T.files??[],{file_id:C.fileId,name:C.file.name,size:C.file.size,type:P?.mimeType??Ve(C.file),last_modified:C.file.lastModified,file_size_tokens:P?.fileTokenSize}];return{...T,files:Fe}},onSuccess:()=>{y.current.delete(b),v(T=>T+1)}}),ae(n.gizmo.id)({gizmoId:n.gizmo.id,upsertProjectMutation:d,pendingFileUpsertMutationsRef:p}))},onFileCreated:(b,w,M)=>{y.current.set(b,{tempId:b,gizmoId:I,file:F,status:_.Uploading,progress:1,...y.current.get(b),fileId:w,cdnUrl:M}),v(P=>P+1)},onFileUploadProgress:(b,w)=>{const M=y.current.get(b);M?.status===_.Uploading&&y.current.set(b,{...M,progress:w>95?95:w}),v(P=>P+1)},onError:b=>{y.current.delete(b),v(w=>w+1)}},{usesRetrievalIndex:u!=null&&G(u,F.type,F.name)===H.Retrieval})}))},Z=ze(k),V=Ge(Z),Y=y.current.size+i.files.length,{open:K,getInputProps:Ce,getRootProps:ke,isDragAccept:we,isDragReject:Ie}=He({noClick:!0,noDragEventsBubbling:!0,onDropAccepted:Ne,onDropRejected:Se,multiple:!0,maxSize:Xe,maxFiles:E-Y,validator:()=>Y>=E?{code:q.TooManyFiles,message:"Too many files"}:null,...Z});return h.useImperativeHandle(o,()=>({openFileDialog:K})),e.jsxs("div",{...ke({className:"h-full px-6"}),children:[e.jsx("input",{...Ce()}),s&&e.jsxs(Ft,{children:[e.jsx("button",{className:"w-full",onClick:()=>l(!0),children:e.jsx("div",{className:"w-full rounded-lg border border-token-border-light text-left text-sm",children:i?.instructions?.length?e.jsx("div",{className:"mx-4 my-3 line-clamp-4",children:i.instructions}):e.jsxs("div",{className:"flex h-full w-full items-center px-4 py-3 text-token-text-secondary",children:[e.jsx("div",{className:"flex-1",children:e.jsx(f,{...c.addCustomInstructions})}),e.jsx(A,{className:"icon-sm"})]})})}),m.includes($e.GizmoInstructionsTooLong)?e.jsx(je,{className:"mt-1",children:e.jsx(f,{...c.instructionsTooLong,values:{length:z}})}):null]}),r&&e.jsx(ve,{gizmo:n,onClose:()=>{l(!1)}}),e.jsx(Rt,{gizmoId:n.gizmo.id,gizmoName:n.gizmo.display.name,gizmoEditorData:i,openFileDialog:K,pendingFiles:y,pendingFileUpsertMutationsRef:p,setVersion:v,currentModelConfig:u}),we&&e.jsxs(J,{children:[e.jsx(Qe,{}),e.jsx("h3",{children:e.jsx(f,{...c.dragInstructions})}),e.jsx("h4",{className:"w-2/3 text-center",children:V.length>0?V.join(", "):e.jsx(f,{...c.dragAllAccepted})})]}),Ie&&e.jsxs(J,{children:[e.jsx(It,{className:"icon-2xl"}),e.jsx("h3",{children:e.jsx(f,{...c.dragTooManyFiles})}),e.jsx("h4",{className:"w-2/3 text-center",children:e.jsx(f,{...c.dragTooManyFilesDescription,values:{MAX_FILES_PER_PROJECT:E}})})]})]})});function Gt({gizmo:t,onClose:n}){const s=h.useRef(null),o=h.useCallback(()=>{s.current?.openFileDialog()},[s]);return e.jsx(e.Fragment,{children:e.jsx(ue,{className:"min-h-72 max-w-[820px]",isOpen:!0,showCloseButton:!0,hideSeparator:!0,noPadding:!0,size:"custom",type:"success",onClose:()=>{n()},children:e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsx(D.TitleBar,{$hasSeparator:!1,children:e.jsxs("div",{className:"flex w-full items-center gap-2",children:[e.jsx("div",{className:"flex-1",children:e.jsx(yt,{className:"text-lg font-semibold leading-6 text-token-text-primary",children:e.jsx(f,{...c.projectFilesModalTitle})})}),e.jsx(bt,{color:"secondary",onClick:o,children:e.jsx(f,{...c.addFilesButtonLabel})}),e.jsx(St,{asChild:!0,className:"sm:mt-0",children:e.jsx(Nt,{onClick:n})})]})}),e.jsx("div",{className:"h-[50dvh] flex-grow overflow-y-auto pt-0",children:e.jsx(zt,{ref:s,gizmo:t,showInstructions:!1})})]})})})}function Ht({gizmo:t}){return e.jsx("div",{className:"mt-6 grid grid-cols-1 items-start gap-5 xs:grid-cols-2",children:t?e.jsxs(e.Fragment,{children:[e.jsx(Xt,{gizmo:t}),e.jsx(Qt,{gizmo:t})]}):e.jsxs(e.Fragment,{children:[e.jsx(se,{}),e.jsx(se,{})]})})}function W({header:t,context:n,contextClassName:s="",icon:o,modal:a,onClick:r,disabled:l=!1,isModalOpen:d=!1}){return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:r,className:S("group/snorlax-control-tile relative h-full rounded-2xl border border-token-border-xlight bg-token-main-surface-primary shadow-xxs hover:bg-token-main-surface-secondary active:bg-token-main-surface-tertiary active:drop-shadow-none",l&&"pointer-events-none"),children:e.jsxs("div",{className:"relative mx-5 my-4 flex items-center justify-between gap-3 overflow-hidden",children:[e.jsxs("div",{className:"w-full grow text-left",children:[e.jsx("div",{className:"text-sm font-medium",children:t}),e.jsx("div",{className:S("text-xs text-token-text-secondary",s),children:n})]}),o]})}),d&&a]})}function se(){return e.jsx(W,{disabled:!0,header:e.jsx("div",{className:"my-2 h-2 w-48 rounded-full bg-token-main-surface-secondary"}),context:e.jsx("div",{className:"my-2 h-2 w-32 rounded-full bg-token-main-surface-secondary"})})}function Xt({gizmo:t}){const{files:n}=t,s=!n.length,o=X(t.gizmo.id),[a,r]=h.useState(!1),l=a&&e.jsx(Gt,{gizmo:t,onClose:()=>{r(!1)}}),d=()=>r(!0);let i,m,x;if(s)i=e.jsx(f,{...c.addFilesButtonLabel}),m=e.jsx(f,{...c.filesControlDescription}),x=e.jsxs("div",{className:"relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full",children:[e.jsx("div",{className:"absolute h-full w-full rounded-full bg-token-main-surface-secondary opacity-5",style:{backgroundColor:o??void 0}}),e.jsx(le,{className:"icon-md h-5 w-5",style:{color:o}})]});else{const j=n.slice(0,3);i=e.jsx(f,{...c.projectFilesModalTitle}),m=e.jsx(f,{...c.filesCount,values:{count:n.length}}),x=e.jsx("div",{className:"relative flex h-10 w-20 shrink-0 items-center justify-center rounded-full",children:j.toReversed().map((g,v)=>e.jsx($t,{file:g,index:v,gizmoId:t.gizmo.id},g.id))})}return e.jsx(W,{isModalOpen:a,modal:l,onClick:d,header:i,context:m,icon:x})}function $t({file:t,index:n,gizmoId:s}){const o=t.name,r=U(o)&&t.file_id!=null&&e.jsx(Q,{fileName:o,fileId:t.file_id,gizmoId:s});return e.jsx("div",{className:"absolute right-0 top-0 h-10 w-10 overflow-hidden rounded-xl border-2 border-token-main-surface-primary group-hover/snorlax-control-tile:border-token-main-surface-secondary",style:{transform:`translateX(${n*-20}px)`},children:r||e.jsx(Ye,{className:"h-9 w-9 flex-shrink-0",filename:t.name,contextConnectorInfo:void 0})})}function Qt({gizmo:t}){const{instructions:n}=t.gizmo,s=!n.length,o=X(t.gizmo.id),[a,r]=h.useState(!1),l=a&&e.jsx(ve,{gizmo:t,onClose:()=>{r(!1)}}),d=()=>r(!0);let i,m,x,u;return s?(i=e.jsx(f,{...c.customInstructionsTitle}),m=e.jsx(f,{...c.customInstructionsDescription}),x=e.jsxs("div",{className:"relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full",children:[e.jsx("div",{className:"absolute h-full w-full rounded-full bg-token-main-surface-secondary opacity-5",style:{backgroundColor:o??void 0}}),e.jsx(A,{className:"icon-md h-5 w-5",style:{color:o}})]})):(i=e.jsx(f,{...c.editCustomInstructionsTitle}),u="overflow-hidden text-ellipsis whitespace-nowrap",m=n),e.jsx(W,{isModalOpen:a,modal:l,onClick:d,header:i,context:m,icon:x,contextClassName:u})}const ye=B.h3`p4 overflow-hidden text-ellipsis break-all py-3 px-4 text-xs font-semibold text-token-text-secondary`,Wt=B.div`h-24 w-full rounded-3xl bg-token-main-surface-secondary`,Zt=()=>e.jsx("div",{className:"ml-1 mt-3 h-10",children:e.jsx("div",{className:"my-[15px] h-[10px] w-48 rounded-full bg-token-main-surface-secondary"})}),ne=new Map;function Vt(t){const n=ne.get(t);if(n)return n;const s=ht(Yt,2e3,{trailing:!0});return ne.set(t,s),s}async function Yt({gizmoId:t,upsertProjectMutation:n,toaster:s}){const o=gt,a=ee(o.getState(),"theme",t);try{a!==void 0&&await n.mutateAsync({id:t,update:{theme:a??void 0}}),ee(o.getState(),"theme",t)===a&&pt(t,"theme")}catch(r){const l=fe(r);s.warning(l??"Error",{duration:2})}}function Kt({gizmoId:t,theme:n,upsertProjectMutation:s,toaster:o}){ft(t,"theme",n),Vt(t)({gizmoId:t,upsertProjectMutation:s,toaster:o})}function qt({gizmo:t}){const n=t.gizmo.display.emoji,s=X(t.gizmo.id),o=ot(),a=L(),[r,l]=h.useState(!1),d=$();if(o&&n)return e.jsx(rt,{emoji:n,className:"icon-lg text-2xl"});const i=m=>{m!==s&&(dt.count(ut.DEFAULT,"projects.theme.change",[{key:"theme",value:m??"default"}]),Kt({gizmoId:t.gizmo.id,theme:m,upsertProjectMutation:a,toaster:d}))};return e.jsx(at,{open:r,sideOffset:4,alignOffset:7,side:"bottom",alignAgainstAnchor:"start",size:"none",modal:!0,onOpenChange:m=>l(m),triggerButton:e.jsx(he,{currentTheme:s,isPopoverOpen:r}),children:e.jsx(Et,{currentTheme:s,onSelect:i})})}function Jt({gizmo:t}){return e.jsxs("div",{className:"mb-6 flex w-full flex-col px-4",children:[t?e.jsx(qt,{gizmo:t}):e.jsx(he,{disabled:!0,currentTheme:null,isPopoverOpen:!1}),t?e.jsxs("button",{className:"group ml-1 mt-3 self-start text-balance text-left text-4xl font-semibold hover:text-token-text-secondary",onClick:()=>{ce.setShowProjectSettingsModal(!0)},children:[t.gizmo.display.name,e.jsx(A,{className:"icon-lg ml-2.5 inline-block text-token-text-secondary opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-100"})]}):e.jsx(Zt,{})]})}function be({children:t}){return e.jsx("div",{className:"group relative flex flex-col gap-1 p-4",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(it,{className:"icon-md text-token-sidebar-icon"}),t]})})}function es({conversation:t,gizmo:n}){const s=kt(t.id)??t.title,[o,a]=h.useState(!1);h.useEffect(()=>wt(lt,{editTitleInMainScreen:({serverThreadId:d})=>{d===t.id&&a(!0)}}),[t.id]);const{snippet:r}=t,l=e.jsxs(be,{children:[e.jsxs("div",{className:"flex-grow overflow-hidden group-hover:mr-5",children:[o?e.jsx(mt,{conversation:t,onClose:()=>{a(!1)}}):e.jsx("div",{className:"text-sm font-medium",children:s}),r&&e.jsx("div",{className:"truncate text-sm text-token-text-secondary",children:r})]}),!o&&e.jsx(ts,{conversation:t})]});return o?l:e.jsx(Me,{to:ct(t.id,n),children:l})}function ts({conversation:t}){const[n,s]=h.useState(!1);return e.jsx("div",{className:S("absolute bottom-0 top-0 items-center gap-1.5 pr-4 ltr:right-0 rtl:left-0",n?"flex":"hidden can-hover:group-hover:flex"),onClick:o=>{o.preventDefault()},children:e.jsx(xt,{conversation:t,conversationTitle:t.title,onOpenChange:o=>{s(o),o&&me.logEvent(xe.conversationHistoryItemOpenMenu,{conversationId:t.id})},inMainScreen:!0})})}function ss({gizmo:t}){st(t.gizmo.id);const{items:n,hasNextPage:s,fetchNextPage:o,isLoading:a,isFetching:r,isFetchingNextPage:l}=nt(t.gizmo.id),d=h.useRef(null),i=h.useCallback(x=>{a||x==null||(d.current?.disconnect(),d.current=new IntersectionObserver(u=>{u[0].isIntersecting&&s&&!r&&o()}),d.current.observe(x))},[a,s,o,r]);h.useEffect(()=>()=>{d.current?.disconnect()},[]);const m=n.length;return e.jsxs("div",{className:"mb-14 mt-6",children:[m||a?e.jsx(os,{gizmo:t,items:n??[],hasNextPage:s,infiniteScrollTriggerElementRef:i}):e.jsx(ns,{}),l&&e.jsx("div",{className:"m-4 mb-5 flex justify-center",children:e.jsx(de,{})})]})}function ns(){return e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx(f,{...c.emptyChatsInProjectTitle})}),e.jsx("ol",{children:Array.from({length:5}).map((n,s)=>e.jsx("li",{style:{opacity:1-s*.2,transition:"opacity 0.3s ease-in-out"},className:S(s!==4&&"border-b border-token-border-xlight"),children:e.jsx(be,{children:e.jsxs("div",{className:"my-2 flex w-full flex-col gap-2",children:[e.jsx("div",{className:"h-2 w-2/12 rounded-full bg-token-main-surface-tertiary"}),e.jsx("div",{className:"h-2 w-5/12 rounded-full bg-token-main-surface-tertiary"})]})})},s))})]})}function os({gizmo:t,items:n,hasNextPage:s,infiniteScrollTriggerElementRef:o}){const a=n.length;return e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx(f,{...c.chatsInProjectTitle})}),e.jsx("ol",{children:n.map((r,l)=>{const d=s&&l===n.length-3?o:void 0;return e.jsx("li",{ref:d,className:S("first:rounded-t-lg last:rounded-b-lg hover:bg-token-main-surface-secondary",l!==a-1&&"border-b border-token-border-xlight"),children:e.jsx(es,{conversation:r,gizmo:t})},r.id)})})]})}function gs({clientThreadId:t,gizmoId:n,currentModelId:s,onRequestCompletion:o}){const a=O(),{data:r}=Ke(n),l=qe(u=>u.showProjectSettingsModal),[d,i]=Pe(),{value:m}=Ct("3463955812"),x=r&&Je(r);return h.useEffect(()=>(!x&&!m&&(te(t,u=>{u.modelId="gpt-4o",u.lockModel=!0}),i(u=>(u.delete("model"),u))),()=>{te(t,u=>{u.lockModel=!1})}),[t,x,i,m]),e.jsxs(et,{isStaticSharedThread:!1,withVerticalPadding:!1,withHorizontalPadding:!0,clientThreadId:t,fullHeight:!0,children:[e.jsx(Jt,{gizmo:r}),r?e.jsx(Pt,{clientThreadId:t,isNewThread:!0,currentModelId:s,onRequestCompletion:o,hideHeader:!0,showPromptStarters:!1}):e.jsx(Wt,{}),e.jsx(Ht,{gizmo:r}),r&&e.jsx(ss,{gizmo:r}),l&&e.jsx(tt,{submitButtonTitle:a.formatMessage(c.projectSettingsSubmitButton),gizmo:r,onClose:()=>{ce.setShowProjectSettingsModal(!1)}},n)]})}export{gs as SnorlaxSplashScreen};
//# sourceMappingURL=k7oseobxn1x5zsjv.js.map
