const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/f9a4i2o9meuuacvw.js","assets/813n9w6xsthevnqe.js","assets/h2ot8b85cve7rfg1.js","assets/root-bkpln5bd.css","assets/ctx3oywitytb5mfd.js","assets/cvslyloecw0ll845.js","assets/conversation-small-ile61fj8.css","assets/im3s94nxr72xb8th.js","assets/d3y72ugnrmac5z1v.js","assets/o86m8jbro9d8t6rj.js","assets/fzrn137102spawew.js","assets/e9lafxuzyeh4418f.js","assets/l3hejy9jng0abm4k.js","assets/jh2rya3zgv1osppy.js","assets/c4bxzbp1808foto4.js"])))=>i.map(i=>d[i]);
import{s as X,L as R,G as p,H as D,t as T,w as A,F as w,aH as Q,aI as V,c as de,r as v,m as e,aS as c,c9 as me,df as Z,u as ee,aD as se,ak as C,br as x,aJ as ae,c5 as ue,aY as N,aL as ge,Z as xe,a3 as fe,a4 as Me,S as je,eR as ve}from"./813n9w6xsthevnqe.js";import{b5 as he,f3 as $,fw as K,ex as pe,fx as Y,c8 as i,U as L,l as te,fy as G,fz as be,fA as W,bD as ye,fB as Re,i as Ce,aI as Ue,cc as ke}from"./cvslyloecw0ll845.js";import{c as Ie}from"./iej0cupg2dqkmejt.js";import{t as ne,L as P,h as Ne}from"./h2ot8b85cve7rfg1.js";import{a as Pe,b as Se,u as De}from"./ov4n8l8to0vzlfsx.js";import{m as re}from"./oo3yd6kbq3nsimum.js";import{B as Ae}from"./jh2rya3zgv1osppy.js";import"./ihhv8qauypnyxgtg.js";import"./mh8pkesoon2si38m.js";import"./kkpy24kni3zeqpn6.js";import"./do3noacblfokxtip.js";import"./lufw28qbrn2gq5pt.js";import"./mmfktyszrtnocuts.js";import"./c4bxzbp1808foto4.js";const k=25;function we(s,a,t){return X({queryKey:["workspace",s,"invites",a,t],queryFn:async()=>await R.getWorkspaceInvites(s,a,k,t)})}function _e(s,a,t){return X({queryKey:["workspace",s,"invites","requests",a,t],queryFn:async()=>await R.getWorkspaceInviteRequests(s,a,k,t)})}function ie(s){const a=p(),t=D(),n=T();return A({mutationFn:({inviteId:r,role:o,acceptRequest:l})=>R.patchWorkspaceInvite(s,r,{role:o,acceptRequest:l}).catch(d=>{t.danger(a.formatMessage(q.updateInviteError,{error:d.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]}),n.invalidateQueries({queryKey:["workspace",s]})}})}function oe(s){const a=p(),t=D(),n=T();return A({mutationFn:({email:r})=>R.deleteWorkspaceInvite(s,r).catch(o=>{t.danger(a.formatMessage(q.deleteInviteError,{email:r,error:o.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}function qe(s){const a=p(),t=D(),n=T();return A({mutationFn:({role:r,email:o})=>R.addWorkspaceUsers(s,[o],r,!0).then(({account_invites:l,errored_emails:d})=>{if(d.length>0)throw new Error(d[0].error);l.length>0&&t.success(a.formatMessage(q.resendInviteSuccess,{email:o}))}).catch(l=>{t.danger(a.formatMessage(q.resendInviteError,{email:o,error:l.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}const q=w({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}}),Ee=Q(()=>V(()=>import("./f9a4i2o9meuuacvw.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication)),S=de(()=>({confirmModalUserData:null})),E={openModalForUser:s=>{S.setState({confirmModalUserData:s})},closeModal:()=>{S.setState({confirmModalUserData:null})}};function Te({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),o=he()?.id,l=$(s),d=K(s),m=l||d,u=He(),f=Oe(s),{data:b}=pe(s,t*Y,a),B=v.useCallback(g=>{E.openModalForUser(g)},[]),_=v.useCallback(()=>{const g=S.getState().confirmModalUserData?.id;g!==void 0&&f.mutate({userId:g}),E.closeModal()},[f]),F=v.useCallback((g,O)=>{u.mutate({userId:g,value:O,workspaceId:s})},[u,s]);if(b===void 0)return e.jsx(J,{});const H=b.items,y=Math.ceil((b.total??0)/Y);return t>=y&&y!==0&&n(Math.max(y-1,0)),e.jsxs(e.Fragment,{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...M.name})}),e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...M.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:l?"pl-3":"",children:e.jsx(c,{...M.role})})}),m&&e.jsx(i.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(i.Body,{children:[H.map(g=>e.jsx(Be,{isCurrentUser:o!==void 0&&g.id===o,user:g,currentUserHasAdminRights:m,isCurrentUserOwner:l,onRemoveUserClick:()=>B({id:g.id,name:g.name??"",email:g.email??"",created_time:g.created_time}),onUpdateUserRole:F},g.id)),H.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...M.noResults})})})})]})]}),e.jsxs("div",{className:"relative mb-8 mt-4 min-h-[20px]",children:[l&&e.jsxs("button",{onClick:()=>L.openModal(te.InviteUsersToWorkspace),className:"flex items-center gap-2 text-token-text-secondary hover:text-token-text-primary",children:[e.jsx(ne,{className:"icon-sm"}),e.jsx(c,{...M.inviteMemberButton})]}),y>1&&e.jsx("div",{className:"absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:y})})]}),e.jsx(We,{onDeleteConfirm:_})]})}function We({onDeleteConfirm:s}){const a=p(),t=S(r=>r.confirmModalUserData!==null),n=S(r=>r.confirmModalUserData===null?{}:{userId:r.confirmModalUserData.id,email:r.confirmModalUserData.email,name:r.confirmModalUserData.name,dateAdded:be(r.confirmModalUserData.created_time)});return e.jsx(me,{isOpen:t,title:a.formatMessage(M.removeMemberModalTitle),onClose:()=>E.closeModal(),type:"success",primaryButton:e.jsx(Z.Button,{title:a.formatMessage(M.removeMemberModalConfirm),color:"danger",onClick:s}),secondaryButton:e.jsx(Z.Button,{title:a.formatMessage(M.removeMemberModalCancel),color:"secondary",onClick:()=>E.closeModal()}),children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[n.name??n.email,e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...M.dateJoined,values:{dateAdded:a.formatDate(n.dateAdded,{year:"numeric",month:"long",day:"numeric"})}})})]})})}function Be({user:s,currentUserHasAdminRights:a,isCurrentUserOwner:t,isCurrentUser:n,onRemoveUserClick:r,onUpdateUserRole:o}){const d=W()[s.role],m=s.name==null||s.name==="",{value:u}=ee("3999712942");return e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:e.jsxs("span",{className:se("flex flex-grow items-center justify-between gap-2",m&&"text-token-text-tertiary"),children:[e.jsx("span",{children:s.name??e.jsx(c,{...M.missingName})}),n&&e.jsx("span",{children:e.jsx(c,{...M.youSpecifier})}),u&&s.is_scim_managed&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-grow"}),e.jsx(Ee,{})]})]})}),e.jsx(i.Cell,{children:s.email}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:s.role,onUpdateUserRole:f=>{o(s.id,f)},disabled:n}):d}),a&&e.jsx(i.Cell,{children:e.jsx(Fe,{userId:s.id,onRemoveUserClick:r,disabled:n,isScimManaged:s.is_scim_managed})})]})}function z({currentRole:s,onUpdateUserRole:a,disabled:t=!1}){const n=W();return e.jsx(Ae,{disabled:t,defaultValue:s,onValueChange:r=>{a(r)},options:[{label:n[C.STANDARD],value:C.STANDARD},{label:n[C.ADMIN],value:C.ADMIN},{label:n[C.OWNER],value:C.OWNER}]})}function Fe({disabled:s,onRemoveUserClick:a,userId:t,isScimManaged:n}){const r=p();return s?null:n?e.jsx(x.Root,{children:e.jsx(x.Trigger,{disabled:!0,children:e.jsx(ae,{sideOffset:0,label:r.formatMessage(re.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(P,{className:"icon-sm"})})})}):e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{className:"-my-2",children:e.jsx(P,{className:"icon-sm"})}),e.jsx(x.Portal,{children:e.jsx(x.Content,{children:e.jsx(x.Item,{onClick:()=>{a(t)},children:e.jsx(c,{...M.removeMemberModalTitle})})})})]})}function He(){const s=D();return A({mutationFn:({userId:a,workspaceId:t,value:n})=>R.updateWorkspaceUserRole(t,a,n).catch(r=>{s.danger(`Unable to update user (${a}) role: ${r.message}`)})})}function Oe(s){const a=T(),t=D();return A({mutationFn:({userId:n})=>R.removeWorkspaceUser(s,n).catch(r=>{t.danger(`Unable to remove user (${n}) from workspace: ${r.message}`)}),onSuccess:()=>{a.invalidateQueries({queryKey:["workspace",s]})}})}function J(){return e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(ue,{})})}const M=w({name:{id:"UserManager.name",defaultMessage:"Name"},email:{id:"UserManager.email",defaultMessage:"Email"},role:{id:"UserManager.role",defaultMessage:"Role"},missingName:{id:"UserManager.missingName",defaultMessage:"No name provided"},youSpecifier:{id:"UserManager.youSpecifier",defaultMessage:"(You)"},removeUser:{id:"UserManager.removeUser",defaultMessage:"Remove user from workspace"},removeMemberModalTitle:{id:"UserManager.removeMemberModalTitle",defaultMessage:"Remove member"},removeMemberModalConfirm:{id:"UserManager.removeMemberModalConfirm",defaultMessage:"Delete"},removeMemberModalCancel:{id:"UserManager.removeMemberModalCancel",defaultMessage:"Cancel"},dateJoined:{id:"UserManager.dateJoined",defaultMessage:"Joined workspace on {dateAdded}"},inviteMemberButton:{id:"UserManager.inviteMemberButton",defaultMessage:"Invite member"},noResults:{id:"UserManager.noResults",defaultMessage:"No results"}}),Le=Q(()=>V(()=>import("./f9a4i2o9meuuacvw.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication));function Qe({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),r=$(s),o=K(s),l=r||o,{data:d}=we(s,t*k,a);if(d===void 0)return e.jsx(J,{});const m=d.items,u=Math.ceil((d.total??0)/k);return t>=u&&u!==0&&n(Math.max(u-1,0)),e.jsxs("div",{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...I.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:l?"pl-3":"",children:e.jsx(c,{...I.role})})}),l&&e.jsx(i.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(i.Body,{children:[m.map(f=>e.jsx(Ve,{workspaceId:s,invite:f,isCurrentUserOwner:r,currentUserHasAdminRights:l},f.id)),m.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...I.noResults})})})})]})]}),u>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:u})})]})}function Ve({workspaceId:s,invite:a,isCurrentUserOwner:t,currentUserHasAdminRights:n}){const r=W(),o=ie(s),l=oe(s),d=qe(s),{value:m}=ee("3999712942");return e.jsxs(i.Row,{disabled:o.isPending||l.isPending||l.isSuccess||d.isPending,children:[e.jsx(i.Cell,{children:e.jsxs("span",{className:"flex flex-grow justify-between",children:[e.jsx("span",{children:a.email_address}),m&&a.is_scim_managed&&e.jsx(Le,{})]})}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:a.role,onUpdateUserRole:u=>{o.mutate({inviteId:a.id,role:u})}}):r[a.role]}),n&&e.jsx(e.Fragment,{children:e.jsx(i.Cell,{children:e.jsx($e,{onDeleteUser:()=>{l.mutate({email:a.email_address??""})},onResendInvite:()=>{d.mutate({email:a.email_address??"",role:a.role??""})},disabled:a.is_scim_managed})})})]})}function $e({onDeleteUser:s,onResendInvite:a,disabled:t}){const n=p();return e.jsx(e.Fragment,{children:t?e.jsx(x.Root,{children:e.jsx(x.Trigger,{disabled:!0,children:e.jsx(ae,{sideOffset:0,label:n.formatMessage(re.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(P,{className:"icon-sm"})})})}):e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{children:e.jsx(P,{className:"icon-sm"})}),e.jsx(x.Portal,{children:e.jsxs(x.Content,{children:[e.jsx(x.Item,{onClick:a,children:e.jsx(c,{...I.resendInvite})}),e.jsx(x.Item,{onClick:s,children:e.jsx(c,{...I.revokeInvite})})]})})]})})}const I=w({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Ke({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),{data:r}=_e(s,t*k,a),o=$(s),l=K(s),d=p(),m=o||l;if(r===void 0)return e.jsx(J,{});const u=r.items,f=Math.ceil(r.total/k);return t>=f&&f!==0&&n(Math.max(f-1,0)),e.jsxs("div",{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...U.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:m?"pl-3":"",children:e.jsx(c,{...U.role})})}),m&&e.jsx(i.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:d.formatMessage(U.actions)})]}),e.jsxs(i.Body,{children:[u.map(b=>e.jsx(Ge,{workspaceId:s,invite:b,isCurrentUserOwner:o,currentUserHasAdminRights:m},b.id)),u.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...U.noResults})})})})]})]}),f>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:f})})]})}function Ge({workspaceId:s,invite:a,isCurrentUserOwner:t,currentUserHasAdminRights:n}){const r=W(),o=ie(s),l=oe(s),d=p();return e.jsxs(i.Row,{disabled:o.isPending||l.isPending||l.isPending,children:[e.jsx(i.Cell,{children:a.email_address}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:a.role,onUpdateUserRole:m=>{o.mutate({inviteId:a.id,role:m})}}):r[a.role]}),n&&e.jsx(e.Fragment,{children:e.jsx(i.Cell,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(N,{onClick:()=>o.mutate({inviteId:a.id,acceptRequest:!0}),children:d.formatMessage(U.accept)}),e.jsx(N,{color:"secondary",onClick:()=>l.mutate({email:a.email_address}),children:d.formatMessage(U.reject)})]})})})]})}const U=w({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}}),ze=Q(()=>V(()=>import("./ctx3oywitytb5mfd.js"),__vite__mapDeps([4,1,2,3,5,6,7,8,9,10,11,12,13,14])));var le=(s=>(s.Members="members",s.Invites="invites",s.Requests="requests",s))(le||{});function Je({tab:s}){switch(s){case"members":return e.jsx(c,{...h.allMembers});case"invites":return e.jsx(c,{...h.pendingInvites});case"requests":return e.jsx(c,{...h.pendingRequests})}}function Ze({tab:s,filterInputValue:a,workspaceId:t}){switch(s){case"members":return e.jsx(Te,{workspaceId:t,filterInputValue:a});case"invites":return e.jsx(Qe,{workspaceId:t,filterInputValue:a});case"requests":return e.jsx(Ke,{workspaceId:t,filterInputValue:a})}}const Ye=Ie(le);function Xe({currentWorkspaceId:s}){const a=p(),t=xe(),n=ye(s)??"?",r=Re(t),o=t?.isTeam(),l=fe(),[d]=Me(),m=d.get("tab"),u=m&&Ye(m)?m:"members",[f,b]=v.useState(""),[B,_]=v.useState("");v.useEffect(()=>{_("")},[u]);const F=v.useCallback(Ce(j=>{_(j)},250),[]),y=!!Ue()?.length;if(!t)return null;const g=t.isAdminOfAccount(),O=t.isOwnerOfAccount(),ce=o||!y?["members","invites"]:["members","invites","requests"];return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsx("title",{children:a.formatMessage(h.adminBrowserPageTitle)})}),e.jsx(Pe,{title:a.formatMessage(h.adminPageTitle),subtitle:e.jsx(c,{values:{totalMembers:n,planName:r},...h.totalMembers})}),e.jsxs(Se,{children:[e.jsxs(ss,{children:[e.jsx("div",{className:"mb-6 flex gap-2",children:ce.map(j=>e.jsx(es,{onClick:()=>{l(j!=null?`/admin?tab=${j}`:"/admin")},isSelected:u===j,children:e.jsx(Je,{tab:j})},j))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(Ne,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:f,onChange:j=>{b(j.target.value),F(j.target.value)},placeholder:a.formatMessage(h.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(g||O||o)&&e.jsx(N,{onClick:()=>{L.openModal(te.InviteUsersToWorkspace),je.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"workspace-admin-click",text:"InviteMember",step:"OpenModal"})},icon:ne,children:e.jsx(c,{...h.inviteMemberButton})}),o?e.jsx(ve,{triggerButton:e.jsx(N,{color:"secondary",icon:P}),children:e.jsx(x.Item,{onClick:()=>{t&&L.setLeaveWorkspaceData(t)},children:e.jsx(c,{...h.leaveWorkspace})})}):null]})]}),e.jsx(Ze,{workspaceId:s,tab:u,filterInputValue:B})]}),t!=null?e.jsx(ze,{workspace:t}):null]})}function es({children:s,isSelected:a,onClick:t}){return e.jsx(N,{color:"ghost",className:se(a?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:t,children:s})}const ss=ge.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,h=w({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} · {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function Ms(){const s=De();return e.jsx(Xe,{...s})}export{Ms as default};
//# sourceMappingURL=mpni56yg30emofst.js.map
