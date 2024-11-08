import{aj as E,a6 as e,ar as L,ak as B,r as d,a7 as _,ch as q,bJ as oe,aH as m,j as ie,l as ce,c7 as le,K as Y,aI as de,n as ue,fs as me,Z as N,aD as pe,cp as xe,aL as fe,aw as C,a2 as z,a$ as K,ah as ge,b1 as ve,x as ke,aZ as he}from"./l3hptpare9m1mqfv.js";import{fu as je,fv as be,fw as we,bt as ye,ae as S,fx as A,U as I,I as Me,cg as Z,cd as F,fy as Ae,fz as Ne,cU as Pe,fA as Se,fB as Ce,fC as We,ch as P,ab as Ue,ci as De,fD as Ie}from"./c7sgref9mfwezh7s.js";import{S as Ee,a as Be}from"./n190yr24ltcex025.js";import{ad as Re,b as Te,t as Le,bd as Fe,be as J,bf as _e,aK as ze,bg as He,a_ as Ge,bh as $e,bc as Oe,P as qe}from"./km9gro7xi1t4gs2t.js";import{d as H,a as V}from"./b0cc5t6nfdppks2k.js";import{d as Q}from"./dpmpp4vjdzk6xdj4.js";import{b as Ke,c as Ze}from"./dblqglbuigwu0tuc.js";function Je({onFileChange:a,className:t,message:s,mimeTypes:n}){const r=E(),o=s??r.formatMessage(X.helpText),i=W=>{if(W.length>0){const U=W[0];n&&n.includes(U.type)&&a(U)}},{open:u,getRootProps:x,getInputProps:y,isDragActive:h}=je({disabled:!1,noClick:!0,onDropAccepted:i,onDropRejected:()=>null,multiple:!1,maxSize:be,...we(n)});return e.jsxs("div",{className:L("flex flex-col content-center justify-center gap-3 rounded-xl border border-dashed px-6 py-16 text-center",h?"border-green-600 bg-green-600 bg-opacity-10":"border-token-border-medium",t),...x(),children:[e.jsx("input",{...y()}),e.jsx("div",{className:"text-center dark:text-white",children:e.jsx("div",{className:"inline-block",children:e.jsx(Re,{})})}),e.jsx("div",{className:"text-center text-sm",children:o}),e.jsx("div",{className:"cursor-pointer text-center text-sm font-bold text-green-600",onClick:()=>{u()},children:r.formatMessage(X.openFilePicker)})]})}const X=B({helpText:{id:"FileUploadBox.helpText",defaultMessage:"Drop file here to upload"},openFilePicker:{id:"FileUploadBox.openFilePicker",defaultMessage:"Browse files"}});function Qe(a){const t=ie(),s=E(),n=_();return ce({mutationFn:({name:r,profilePictureId:o,profilePictureUrl:i})=>Y.patchWorkspace({workspaceId:a,name:r,profile_picture_id:o,profile_picture_url:i}).catch(u=>{n.danger(s.formatMessage(k.saveError,{error:u.message}))}),onSuccess:()=>{t.invalidateQueries({queryKey:["account-status"]})}})}function Xe({workspace:a}){const[t,s]=d.useState(a?.name??""),[n,r]=d.useState(!1);!n&&a&&(r(!0),t==""&&s(a?.name??""));const[o,i]=d.useState(a.profilePictureUrl),[u,x]=d.useState(a.profilePictureId),y=ye(S.WorkspaceAppearance),h=E(),W=_(),U=()=>I.closeModal(S.WorkspaceAppearance),[l,b]=d.useState(void 0);async function se(f){const M=await Se(f,Z.workspaceAvatarPreview*2),$=Ce(M);b({tempId:$,file:M,status:A.Uploading,progress:1,fileId:null,cdnUrl:null}),We($,M,h,W,le.ProfilePicture,{onFileCreated(w,j,g){b(c=>c!=="initial"&&c?.tempId===w&&c.status===A.Uploading?{...c,progress:10,fileId:j,cdnUrl:g}:c)},onFileUploadProgress(w,j){b(g=>g!=="initial"&&g?.tempId===w&&g.status===A.Uploading?{...g,progress:j}:g)},onFileUploaded(w,j,g){b(c=>c!=="initial"&&c&&c.cdnUrl&&c.tempId===w?(Y.getFileDownloadLink(c.fileId).then(O=>{O.status===de.Success&&(x(c.fileId),i(O.download_url))}),{...c,status:A.Ready,progress:100,fileSpec:{name:c.file.name,id:c.fileId,size:c.file.size,...g??{}}}):c)},onError(w){b(j=>{if(j!=="initial"&&j?.tempId===w){x(void 0),i(void 0),T(null);return}return j})}})}const G=Qe(a.id),te=e.jsx(q.Button,{color:"primary",disabled:l!=="initial"&&l!==void 0&&l.status!==A.Ready||l!=="initial"&&l!==void 0&&l.status===A.Ready&&!o||G.isPending||t.trim().length===0,onClick:async()=>{G.mutate({name:t,profilePictureId:u,profilePictureUrl:o}),I.closeModal(S.WorkspaceAppearance)},title:h.formatMessage(k.modalSubmit)}),ne=e.jsx(q.Button,{onClick:()=>{b(void 0),x(a.profilePictureId),i(a.profilePictureUrl),I.closeModal(S.WorkspaceAppearance)},title:h.formatMessage(k.modalCancel)}),[R,T]=d.useState(null);d.useEffect(()=>{if(l!=="initial"&&l!=null&&R==null){const f=new FileReader;f.addEventListener("load",()=>{const M=f.result;typeof M=="string"&&T(M)}),f.readAsDataURL(l.file)}},[l,R]);const re=()=>{x(null),i(null),b(void 0),T(null)};return e.jsxs(oe,{isOpen:y,onClose:U,showCloseButton:!0,primaryButton:te,secondaryButton:ne,type:"danger",title:h.formatMessage(k.modalTitle),children:[e.jsxs("div",{className:"mb-4 flex-wrap",children:[e.jsx("label",{htmlFor:"workspace-name",className:"block pb-1 font-semibold text-token-text-primary",children:e.jsx(m,{...k.workspaceName})}),e.jsx("p",{className:"font-base text-sm text-token-text-secondary",children:e.jsx(m,{...k.workspaceNameDescription})})]}),e.jsx("div",{className:"mb-4",children:e.jsx(Me,{type:"text",name:"workspace-name",value:t,onChange:f=>s(f.target.value),maxLength:64})}),e.jsxs("div",{className:"mb-4 flex-wrap",children:[e.jsx("label",{htmlFor:"workspace-avatar",className:"block pb-1 font-semibold text-token-text-primary",children:e.jsx(m,{...k.workspaceAvatar})}),e.jsx("p",{className:"font-base text-sm text-token-text-secondary",children:h.formatMessage(k.workspaceAvatarDescription,{size:Z.workspaceAvatarPreview*2})})]}),e.jsxs("div",{className:"mb-4 flex-wrap text-center",children:[o?e.jsxs("div",{className:"relative mb-3 inline-flex",children:[e.jsx(F,{src:o,size:"workspaceAvatarPreview"}),e.jsx("div",{className:"absolute -right-1 -top-1",children:e.jsx(Ye,{onClick:re})})]}):l!=null&&l!=="initial"&&R?e.jsx("div",{className:"flex flex-col justify-center text-center",children:e.jsxs("div",{className:"relative mb-3 text-center",children:[e.jsx(F,{src:URL.createObjectURL(l.file),size:"workspaceAvatarPreview"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-white",children:e.jsx(Ae,{percentage:l.progress,className:"h-6 w-6"})})]})}):e.jsx(Je,{onFileChange:f=>{se(f)},mimeTypes:Ne}),e.jsx(Pe,{className:"mt-3",children:h.formatMessage(k.propagationWarning)})]})]})}function Ye({onClick:a}){return e.jsx("div",{className:"flex h-6 w-6 cursor-pointer flex-row flex-wrap content-center justify-center rounded-full border-2 border-white bg-black text-white",onClick:a,children:e.jsx(Te,{className:"h-3 w-3"})})}const k=B({modalTitle:{id:"workspaceAppearanceModal.title",defaultMessage:"Workspace appearance"},modalSubmit:{id:"workspaceAppearanceModal.submit",defaultMessage:"Save"},modalCancel:{id:"workspaceAppearanceModal.cancel",defaultMessage:"Cancel"},workspaceName:{id:"workspaceAppearanceModal.workspaceName",defaultMessage:"Workspace name"},workspaceNameDescription:{id:"workspaceAppearanceModal.workspaceNameDescription",defaultMessage:"Update the name of the workspace."},workspaceAvatar:{id:"workspaceAppearanceModal.workspaceAvatar",defaultMessage:"Workspace image"},workspaceAvatarDescription:{id:"workspaceAppearanceModal.workspaceAvatarDescription",defaultMessage:"Upload a JPEG or PNG workspace image for your team. (Minimum {size}×{size}px recommended.)"},propagationWarning:{id:"workspaceAppearanceModal.propagationWarning",defaultMessage:"Changes to the workspace name and image may take some time to take effect."},saveError:{id:"workspaceAppearanceModal.saveError",defaultMessage:"Failed to save workspace appearance"}});function ua(){return ue(me("routes/admin"))}function ma(){const a=P(n=>n.currentWorkspace),t=a!=null?H(a.role):void 0,s=N();d.useEffect(()=>{t===!1&&s("/admin")},[t,s])}function pa(){const a=P(n=>n.currentWorkspace),t=a!=null?V(a.role):void 0,s=N();d.useEffect(()=>{t===!1&&s("/admin")},[t,s])}function ee(){return pe("1001765573").config.get("ca_admin_enabled",!1)}function xa(){const a=P(r=>r.currentWorkspace),t=a!=null?H(a.role):void 0,s=ee(),n=N();d.useEffect(()=>{(!t||!s)&&n("/admin")},[s,t,n])}function Ve({accountId:a,subscription:t}){const s=E(),n=_(),r=Ke(a),[o,i]=d.useState(!1),u=Ue(a),x=async()=>{i(!0);try{await r.mutateAsync(a)}catch{n.warning(s.formatMessage(D.errorRenewingSubscription),{hasCloseButton:!0})}finally{i(!1)}};return e.jsx("div",{className:"bg-token-main-surface-secondary",children:e.jsxs("div",{className:"mx-auto flex w-full max-w-5xl items-center justify-between px-2 py-4 md:px-6 lg:px-10 lg:py-6",children:[e.jsxs("div",{className:"mx-2 flex-grow md:mx-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(xe,{className:"mr-4 hidden text-orange-500 md:block"}),e.jsx("p",{className:"text-lg font-semibold",children:e.jsx(m,{...D.workspaceWillBeDeactivated})})]}),t.active_until!=null&&e.jsx("p",{className:"md:ml-8",children:e.jsx(m,{...D.retainAccessUntil,values:{expiryDate:new Date(t.active_until)}})})]}),u&&e.jsx(fe,{color:"primary",onClick:x,loading:o,children:e.jsx(m,{...D.reactivateBtn})})]})})}const D=B({retainAccessUntil:{id:"adminPage.retainAccessUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},workspaceWillBeDeactivated:{id:"adminPage.workspaceWillBeDeactivated",defaultMessage:"This workspace will be deactivated."},reactivateBtn:{id:"adminPage.reactivateBtn",defaultMessage:"Reactivate"},errorRenewingSubscription:{id:"adminPage.errorRenewingSubscription",defaultMessage:"There was an error reactivating your subscription."}});function v({route:a,icon:t,name:s,upsellEnterprise:n=!1}){const r=ke().pathname.replace(/\/$/,"")||"/",o=N();return n?e.jsx(he,{label:e.jsx(m,{...p.availableForEnterprise}),side:"right",children:e.jsxs(Q,{$as:"button",className:L("w-full rounded text-left","hover:bg-token-sidebar-surface-secondary"),children:[e.jsx(qe,{className:"icon-sm shrink-0 text-token-text-secondary"}),e.jsx("span",{className:"text-token-text-secondary",children:e.jsx(m,{...s})})]})}):e.jsxs(Q,{$as:"button",className:L("w-full rounded text-left hover:bg-token-sidebar-surface-secondary",r===a&&"bg-token-sidebar-surface-secondary"),onClick:i=>{o(a),i.stopPropagation()},children:[t,e.jsx(m,{...s})]})}function ea({workspace:a,hasAdminPrivileges:t,hasOwnerPrivileges:s}){const n=N(),r=d.useCallback(()=>{n("/")},[n]),o=P(De.isEnterpriseyPlan),i=ee();return e.jsxs("nav",{className:"p-2",children:[e.jsx("div",{className:"mb-1 flex flex-row gap-2",children:e.jsxs(Be,{onClick:r,children:[e.jsx(Ie,{className:"icon-sm"}),e.jsx(m,{...p.backToChat})]})}),e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs("div",{className:`flex flex-col gap-2 rounded px-2 py-2 ${s?"cursor-pointer hover:bg-token-main-surface-secondary":""}`,onClick:()=>{s&&I.openModal(S.WorkspaceAppearance)},children:[e.jsx(F,{size:"large",src:a?.profilePictureUrl}),e.jsxs("div",{className:"align-center flex flex-row",children:[e.jsx("h2",{className:"flex-1 text-lg text-token-text-primary dark:text-white",children:a?.name}),s?e.jsx("div",{className:"my-auto h-4 flex-initial align-middle dark:text-white",children:e.jsx(Le,{className:"icon-sm opacity-70 hover:opacity-100"})}):null]})]}),e.jsx(v,{route:"/admin",icon:e.jsx(Fe,{className:"icon-sm"}),name:p.membersPageTitle}),o&&e.jsx(v,{route:"/admin/groups",icon:e.jsx(J,{className:"icon-sm"}),upsellEnterprise:!o,name:K({id:"aecR1i",defaultMessage:"Groups"})}),s&&e.jsx(v,{route:"/admin/billing",icon:e.jsx(_e,{className:"icon-sm"}),name:p.billing}),s&&e.jsx(v,{route:"/admin/gpts",icon:e.jsx(ze,{className:"icon-sm"}),name:p.gpts}),t&&i&&e.jsx(v,{route:"/admin/connectors",icon:e.jsx(He,{className:"icon-sm"}),name:p.connectors}),s&&e.jsx(v,{route:"/admin/settings",icon:e.jsx(Ge,{className:"icon-sm"}),name:p.settings}),!o&&e.jsx("span",{className:"mx-3 border-t border-y-token-border-medium"}),!o&&e.jsx(v,{route:"/admin/groups",icon:e.jsx(J,{className:"icon-sm"}),upsellEnterprise:!o,name:K({id:"aecR1i",defaultMessage:"Groups"})}),t&&e.jsx(v,{route:"/admin/analytics",icon:e.jsx($e,{className:"icon-sm"}),name:p.analytics,upsellEnterprise:!o}),s&&e.jsx(v,{route:"/admin/identity",upsellEnterprise:!o,icon:e.jsx(Oe,{className:"icon-sm"}),name:p.identity})]})]})}function fa({mobilePageTitle:a,requireAdminPrivileges:t=!1,requireOwnerPrivileges:s=!1,children:n}){const r=P(y=>y.currentWorkspace),o=N(),i=r!=null?H(r.role):void 0,u=r!=null?V(r.role):void 0;return d.useEffect(()=>{t&&i===!1&&o("/admin"),s&&u===!1&&o("/admin")},[t,i,o,s,u]),z()==null?null:e.jsxs(e.Fragment,{children:[e.jsx(Ee,{mobileHeaderContent:a,forceOpenDesktopSidebar:!0,sidebar:e.jsx(ea,{workspace:r??void 0,hasAdminPrivileges:i,hasOwnerPrivileges:u}),children:n}),r==null?null:e.jsx(Xe,{workspace:r})]})}const aa=C.div`border-b border-token-main-surface-tertiary hidden md:block py-6 lg:py-10`,ae=C.h2`mx-auto w-full max-w-4xl px-2 md:px-6 lg:px-10`,sa=C(ae)`font-normal text-base text-token-text-secondary`;C.p`text-sm text-token-text-tertiary`;function ga({title:a,subtitle:t}){const{data:s}=Ze(),n=z(),r=n&&s&&s.plan_type===ge.TEAM&&!s.will_renew;return e.jsxs(e.Fragment,{children:[r&&e.jsx(Ve,{accountId:n.id,subscription:s}),e.jsxs(aa,{children:[e.jsx(ae,{children:a}),t&&e.jsx(sa,{children:t})]})]})}const ta=C.div`max-w-4xl mx-auto w-full px-2 md:px-6 lg:px-10`;function va({children:a,showSpinner:t}){const s=z(),n=P(o=>o.currentWorkspace),r=!s||t;return e.jsxs(ta,{children:[r&&e.jsx("div",{className:"flex min-h-[80vh] items-center justify-center",children:e.jsx(ve,{})}),!r&&!n&&e.jsx("div",{className:"flex min-h-[80vh] items-center justify-center",children:e.jsx(m,{...p.workspaceNotFound})}),!r&&n&&a]})}const p=B({workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},membersPageTitle:{id:"adminPage.membersPageTitle",defaultMessage:"Members"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},billing:{id:"adminPage.billing.1",defaultMessage:"Billing"},gpts:{id:"adminPage.gpts",defaultMessage:"GPTs"},connectors:{id:"adminPage.connectors",defaultMessage:"Connectors"},settings:{id:"adminPage.Settings",defaultMessage:"Settings"},identity:{id:"adminPage.identity.0",defaultMessage:"Identity & provisioning"},availableForEnterprise:{id:"adminPage.availableForEnterprise",defaultMessage:"Available for Enterprise plan"}});export{fa as A,ga as a,va as b,ma as c,pa as d,xa as e,ua as u};
//# sourceMappingURL=iyts0i2xrrl18tb4.js.map
