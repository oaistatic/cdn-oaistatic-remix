const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bzrz5xkdjmhsyngx.js","assets/gfs0keudzvcg5rgq.js","assets/iqnriohw8g1d2uyi.js","assets/root-f6p3uecq.css","assets/b6arjgg215unn3v3.js","assets/conversation-small-lkohtmkm.css"])))=>i.map(i=>d[i]);
import{L as N,N as q,r as I,m as e,cc as B,aT as i,aZ as K,K as E,x as D,aM as $,c$ as G,c8 as te,aC as se,w as L,V as ie,aI as ne,aJ as oe,eW as J,a3 as re,bf as H,u as _,b2 as F,gg as ce,es as de,b0 as Q,a8 as Z,by as o,P as le,o as me,g7 as ue,aS as ge,e4 as he}from"./gfs0keudzvcg5rgq.js";import{bm as xe,w as U,x as f,bx as fe,cZ as C,U as x,en as pe,da as ve,db as we,dc as ye,eo as X,ep as Se,eq as je,er as be,es as Ge,et as Ie,aI as O,d_ as Y,ax as R,as as Ce,eu as T}from"./b6arjgg215unn3v3.js";import{P as Me,M as ke,c as ze,A as Pe,aZ as Ae,l as Te,al as _e,H as Fe,b3 as Ne,an as Ee,b4 as ee,b as De,b5 as Le,e as Ue,b6 as Oe,G as We,b7 as Ve}from"./iqnriohw8g1d2uyi.js";import{R as qe}from"./d8zqd1yblwfffmly.js";import{c as Be,d as Ke}from"./iufz8u9qhnteeubl.js";import"./e50rxb5ybt07ryl4.js";import"./o7amlkgkeatodl16.js";function $e(a){return D({mutationFn:async({message:t,includeFrom:s})=>{await C.sendFeedbackEmail(a,t,s)}})}const Je=({gizmo:a})=>{const t=xe(),s=U(f.GPTFeedbackEmail),n=()=>x.closeModal(f.GPTFeedbackEmail),c=N(),r=q(),[d,p]=I.useState(""),[v,l]=I.useState(!0),g=$e(a.gizmo.id),h=d.length===0;return e.jsx(B,{type:"success",title:c.formatMessage(b.title,{name:a.gizmo.display.name}),isOpen:s,onClose:n,size:"custom",showCloseButton:!0,className:"max-w-xl overflow-y-auto",hideSeparator:!0,children:e.jsx("div",{className:"flex flex-row",children:e.jsxs("div",{className:"-mt-4 flex flex-grow flex-col space-y-4",children:[e.jsx(fe,{className:"mb-1 w-full resize-none overflow-y-auto rounded-md bg-transparent focus:border-gray-200 focus:ring-gray-200 dark:focus:border-white dark:focus:ring-white",placeholder:`Write feedback about ${a.gizmo.display.name}...`,value:d,rows:4,onChange:m=>p(m.target.value)}),e.jsxs("div",{className:"flex flex-row items-center space-x-2 self-start",children:[e.jsx("input",{type:"checkbox",checked:v,onChange:m=>l(m.target.checked)}),t&&e.jsx("span",{className:"text-sm",children:e.jsx(i,{...b.includeFrom,values:{email:e.jsx("strong",{children:t.email})}})})]}),e.jsx(K,{color:"primary",disabled:h,onClick:async()=>{await g.mutateAsync({message:d,includeFrom:v}),r.success(c.formatMessage(b.successToast),{duration:3}),n()},children:e.jsx(i,{...b.send,values:{name:a.gizmo.author.display_name}})})]})})})},b=E({title:{id:"GizmoFeedbackEmailModal.title",defaultMessage:"Feedback about {name}"},send:{id:"GizmoFeedbackEmailModal.sendTo",defaultMessage:"Send To {name}"},successToast:{id:"GizmoFeedbackEmailModal.successToast",defaultMessage:"Feedback sent"},includeFrom:{id:"GizmoFeedbackEmailModal.includeFrom",defaultMessage:"Include my email address {email}"}});function He(a){const t=L();return D({mutationFn:async({actionId:s,domain:n,settings:c})=>C.upsertUserActionSettings(s,n,c),onSuccess:()=>{t.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:a}]})}})}function Qe(a){const t=L();return D({mutationFn:async({pluginId:s})=>{await ie.deletePluginUserSettings({pluginId:s})},onSuccess:()=>{t.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:a}]})}})}const Ze=({gizmo:a})=>{const{data:t,isLoading:s}=pe(a.gizmo.id,!0),n=U(f.GPTPrivacySettings),c=()=>x.closeModal(f.GPTPrivacySettings),r=N(),[d,p]=I.useState("actions"),v=t!=null&&t.settings.some(l=>l.oauth_status!=null&&a.tools.some(g=>g.type===G.JIT_PLUGIN&&g.metadata?.action_id===l.action_id));return d==="connected_accounts"&&!v&&p("actions"),e.jsx(B,{title:r.formatMessage(w.title),isOpen:n,onClose:c,type:"success",size:"custom",className:"min-h-[50vh] max-w-3xl overflow-y-auto scroll-smooth",noPadding:!0,showCloseButton:!0,children:s?e.jsx(te,{}):e.jsxs(ve,{className:"flex flex-row gap-6 p-4",orientation:"vertical",defaultValue:d,onValueChange:l=>{p(l)},children:[v&&e.jsxs(we,{className:se("flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2"),children:[e.jsx(W,{value:"actions",message:w.actions}),v&&e.jsx(W,{value:"connected_accounts",message:w.connectedAccounts})]}),e.jsxs("div",{className:"flex-1 text-sm",children:[d==="actions"&&e.jsxs(V,{children:[e.jsx(i,{...w.allowedActionsDesc,values:{gizmoName:a.gizmo.display.name}}),t?.settings.map((l,g)=>{const h=a.tools?.find(m=>m.type===G.JIT_PLUGIN&&m.metadata?.action_id===l.action_id);return h&&e.jsx(Xe,{gizmoId:a.gizmo.id,actionSettings:l,actionTool:h},g)})]}),d==="connected_accounts"&&e.jsxs(V,{children:[e.jsx(i,{...w.connectedAccountsDesc,values:{gizmoName:a.gizmo.display.name}}),e.jsx("div",{children:t?.settings.map((l,g)=>{const h=a.tools?.find(m=>m.type===G.JIT_PLUGIN&&m.metadata?.action_id===l.action_id);return h&&l.oauth_status&&e.jsx(Ye,{gizmoId:a.gizmo.id,actionSettings:l,actionTool:h},g)})})]})]})]})})};function W({value:a,message:t}){return e.jsx(ye,{className:"flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",value:a,children:e.jsx("div",{className:"truncate",children:e.jsx(i,{...t})})})}function Xe({gizmoId:a,actionSettings:t,actionTool:s}){const n=He(a),c=t.action_settings?.all,r=d=>{s.metadata?.action_id&&s.metadata?.domain&&n.mutateAsync({actionId:s.metadata.action_id,domain:s.metadata.domain,settings:{all:d}})};return e.jsx("div",{children:e.jsxs(ae,{className:"border-b border-black/10 dark:border-white/10",children:[e.jsxs("div",{className:"flex flex-row space-x-4",children:[e.jsx("div",{className:"font-semibold",children:s.metadata?.domain}),e.jsxs("a",{href:s.metadata?.privacy_policy_url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-token-text-tertiary hover:cursor-pointer hover:text-token-text-secondary",children:[e.jsx(i,{...w.privacyPolicyLink}),e.jsx(Me,{className:"icon-md"})]})]}),e.jsxs("select",{value:c?"always_allow":"unset",onChange:d=>r(d.target.value),className:"rounded border-none bg-token-main-surface-primary text-sm",children:[e.jsx("option",{value:"always_allow",children:e.jsx(i,{...w.alwaysAllowDropdown})}),e.jsx("option",{value:"unset",children:e.jsx(i,{...w.askDropdown})})]})]})})}function Ye({gizmoId:a,actionSettings:t,actionTool:s}){const n=Qe(a),c=t.oauth_status==="valid";return e.jsxs(ae,{children:[e.jsx("div",{className:"font-semibold",children:s?.metadata?.domain}),e.jsx(K,{color:"secondary",size:"small",onClick:()=>{s.metadata?.action_id&&s.metadata?.domain&&(c?n.mutateAsync({pluginId:s.metadata?.action_id}):C.doOAuthRedirect(a,s.metadata?.action_id,s.metadata?.domain,window.location.href))},children:e.jsx(i,{...c?w.logout:w.login})})]})}const V=$.div`flex flex-col gap-6`,ae=$.div`flex flex-row justify-between py-3 items-center`,w=E({title:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.title"},actions:{defaultMessage:"Actions",id:"GizmoPrivacySettings.actions"},connectedAccounts:{defaultMessage:"Connected accounts",id:"GizmoPrivacySettings.connectedAccounts"},connectedAccountsDesc:{defaultMessage:"Manage which 3rd party accounts can be accessed by {gizmoName}.",id:"GizmoPrivacySettings.connectedAccountsDesc"},allowedActionsTitle:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.allowedActionsTitle"},allowedActionsDesc:{defaultMessage:"Select which 3rd party actions are allowed in conversations with {gizmoName}.",id:"GizmoPrivacySettings.allowedActionsDesc"},privacyPolicyLink:{defaultMessage:"Privacy policy",id:"GizmoPrivacySettings.privacyPolicyLink"},alwaysAllowDropdown:{defaultMessage:"Always allow",id:"GizmoPrivacySettings.alwaysAllowDropdown"},askDropdown:{defaultMessage:"Ask",id:"GizmoPrivacySettings.askDropdown"},login:{defaultMessage:"Log in",id:"GizmoPrivacySettings.login"},logout:{defaultMessage:"Log out",id:"GizmoPrivacySettings.logout"}}),Re=ne(()=>oe(()=>import("./bzrz5xkdjmhsyngx.js"),__vite__mapDeps([0,1,2,3,4,5])).then(a=>a.GizmoKeepInSidebarMenuItem));function la({children:a,clientThreadId:t,gizmoResource:s,showReportModal:n,inMobileHeader:c}){return e.jsxs(e.Fragment,{children:[e.jsx(J,{contentAlign:c?"center":"start",size:"small",triggerButton:a,children:e.jsx(aa,{clientThreadId:t,gizmoResource:s,showReportModal:n})}),e.jsx(ea,{gizmoResource:s})]})}function ea({gizmoResource:a}){const t=U(f.GPTRemoveThirdParty),s=re(),n=X(a);return e.jsxs(e.Fragment,{children:[e.jsx(Be,{gizmoId:a.gizmo.id,creatorId:a.gizmo.author.user_id}),e.jsx(Ze,{gizmo:a}),n&&e.jsx(Je,{gizmo:a}),n&&e.jsx(Se,{gizmo:a}),e.jsx(qe,{gpt:a,isOpen:t,onClose:()=>x.closeModal(f.GPTRemoveThirdParty),account:s})]})}function aa({clientThreadId:a,gizmoResource:t,showReportModal:s}){const n=je(t),c=be(t),r=Ge(t.gizmo.id),d=H(),p=Ie(t),v=t.gizmo.share_recipient===O.Marketplace||t.gizmo.share_recipient===O.Link,l=!p&&v,g=_("1825130190").value,h=_("3645668434").value,m=g&&!p&&X(t),M=d?.includes(F.GizmoSupportEmails)&&!p&&t.gizmo.author.will_receive_support_emails&&m,k=ce(),j=de(a),z=Y(F.WorkspaceShareLinks),{isUnauthenticated:P}=Q(),A=j&&z&&!P,y=Z();return e.jsxs(e.Fragment,{children:[e.jsx(o.Item,{onClick:()=>{le.logNewChatButtonClicked({location:"Gizmo information dropdown",gizmo_id:t.gizmo.id}),R(y,`/g/${t.gizmo.short_url}`)},icon:ke,children:e.jsx(i,{...u.newChat})}),e.jsx(o.Item,{onClick:()=>x.openModal(f.GPTDetails),icon:ze,children:e.jsx(i,{...u.about})}),t.tools?.find(S=>S.type===G.JIT_PLUGIN)&&e.jsx(o.Item,{onClick:()=>x.openModal(f.GPTPrivacySettings),icon:Pe,children:e.jsx(i,{...u.privacySettings})}),n&&e.jsx(o.Item,{onClick:()=>{y(r)},icon:Ae,children:e.jsx(i,{...u.customize})}),!n&&c&&h&&e.jsxs(e.Fragment,{children:[e.jsx(o.Item,{onClick:async()=>{y(`/g/${t.gizmo.id}/view`)},icon:Te,children:e.jsx(i,{id:"GizmoInformation.viewGizmoLabel",defaultMessage:"View configuration"})}),e.jsx(o.Item,{onClick:async()=>{const S=await C.copyGizmo({gizmoId:t.gizmo.id});S.gizmo.id&&y(`/gpts/editor/${S.gizmo.id}`)},icon:_e,children:e.jsx(i,{id:"GizmoInformation.copyGizmoLabel",defaultMessage:"Duplicate GPT"})})]}),e.jsx(Re,{gizmoResource:t}),e.jsx(Ke,{gizmoResource:t}),M&&e.jsx(o.Item,{onClick:()=>x.openModal(f.GPTFeedbackEmail),icon:Fe,children:e.jsx(i,{...u.feedbackEmail})}),m&&e.jsx(o.Item,{onClick:()=>x.openModal(f.GPTReview),icon:Ne,children:e.jsx(i,{...u.reviewGPT})}),l&&e.jsx(o.Item,{onClick:s,icon:Ee,children:e.jsx(i,{...u.report})}),A&&e.jsx(o.Item,{onClick:()=>x.openSharingModal(j),icon:ee,children:e.jsx(i,{...u.shareChat})}),k&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{color:"danger",onClick:()=>x.openModal(f.GPTRemoveThirdParty),icon:De,children:e.jsx(i,{defaultMessage:"Remove GPT from workspace",id:"GizmoInformation.removeGPT"})})]}),d?.includes("debug")&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{onClick:()=>{y(Ce(t))},children:"(Internal) See share page"})]})]})}const ta=({conversation:a,inMainScreen:t=!1})=>{const s=a.id,c=H()?.includes("debug"),r=me.getServerThreadId(s),d=Y(F.WorkspaceShareLinks),{isUnauthenticated:p}=Q(),v=d&&r&&!p,l=ue.useStore(),{value:g}=_("3653083604"),{value:h}=ge("2851018874"),m=g||h&&window.documentPictureInPicture,M=he(s),k=Z(),j=!1,z=q(),P=N(),A=L();return a.gizmo_id,I.useCallback(async(y,S)=>{},[A,z,P]),e.jsxs(e.Fragment,{children:[v&&e.jsx(o.Item,{onClick:()=>x.openSharingModal(r,"History Item Menu"),icon:ee,"data-testid":"share-chat-menu-item",children:e.jsx(i,{...u.shareChat})}),m&&e.jsx(o.Item,{onClick:()=>{l.setThreadId(s,!0),M&&R(k)},icon:Le,children:e.jsx(i,{...u.openInCompanionWindow})}),j,e.jsx(o.Item,{disabled:!r,onClick:()=>{setTimeout(()=>{r&&T.publish({kind:t?"editTitleInMainScreen":"editTitle",serverThreadId:r})},100)},icon:Ue,children:e.jsx(i,{...u.renameChat})}),e.jsx(o.Item,{disabled:!r,onClick:()=>{r&&T.publish({kind:"archiveChat",serverThreadId:r})},icon:Oe,children:e.jsx(i,{...u.archiveChat})}),e.jsx(o.Item,{color:"danger",disabled:!r,onClick:()=>{r&&T.publish({kind:"deleteChat",serverThreadId:r})},icon:We,"data-testid":"delete-chat-menu-item",children:e.jsx(i,{...u.deleteChat})}),c&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{onClick:()=>x.toggleActiveSidebar("debug"),icon:Ve,children:e.jsx(i,{...u.debugChat})})]})]})},ma=({conversation:a,children:t,onOpenChange:s,inMainScreen:n=!1})=>e.jsx(J,{onOpenChange:s,side:"bottom",contentAlign:"start",triggerButton:t,size:"auto",children:e.jsx(ta,{conversation:a,inMainScreen:n})}),u=E({newChat:{defaultMessage:"New chat",id:"GizmoInformation.newChat"},about:{defaultMessage:"About",id:"GizmoInformation.about"},privacySettings:{defaultMessage:"Privacy settings",id:"GizmoInformation.privacySettings"},viewDetails:{defaultMessage:"View details",id:"GizmoInformation.viewDetails"},share:{defaultMessage:"Share",id:"GizmoInformation.share"},favorite:{defaultMessage:"Favorite",id:"GizmoInformation.favorite"},customize:{defaultMessage:"Edit GPT",id:"GizmoInformation.customize"},feedbackEmail:{defaultMessage:"Send feedback",id:"GizmoInformation.feedbackEmail"},reviewGPT:{defaultMessage:"Review GPT",id:"GizmoInformation.reviewGPT"},report:{defaultMessage:"Report",id:"GizmoInformation.report"},privacy:{defaultMessage:"Privacy",id:"GizmoInformation.privacy"},deleteChat:{defaultMessage:"Delete",id:"GizmoInformation.deleteChat.0"},debugChat:{defaultMessage:"(Internal) Debug",id:"GizmoInformation.debugChat"},renameChat:{defaultMessage:"Rename",id:"GizmoInformation.renameChat"},archiveChat:{defaultMessage:"Archive",id:"GizmoInformation.archiveChat.0"},shareChat:{defaultMessage:"Share",id:"GizmoInformation.shareChat"},openInCompanionWindow:{defaultMessage:"Open in companion window",id:"GizmoInformation.openInCompanionWindow1"},shareChatLong:{defaultMessage:"Share chat",id:"GizmoInformation.shareChatLong"}});export{ma as GizmoConversationOptionsDropdown,la as GizmoInformationDropdown,aa as GizmoInformationDropdownItems};
//# sourceMappingURL=abad9oytyuceruta.js.map