const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/onhpao43pshfntsa.js","assets/nqo5y2f0dorhrqsr.js","assets/dh0yl0m9q337gmci.js","assets/root-e6p3mfos.css","assets/ofct9afvdcn5dfv4.js","assets/ktiwgucld5a8s55m.js","assets/conversation-small-kq10986g.css","assets/fyyhud5jfffqiqpo.js","assets/d3y72ugnrmac5z1v.js","assets/gingn9my21rn74dq.js","assets/fzrn137102spawew.js","assets/e9lafxuzyeh4418f.js","assets/jduckhgljimdwo8y.js","assets/gaad4oovd7ll3n61.js","assets/c4bxzbp1808foto4.js"])))=>i.map(i=>d[i]);import{u as X,c as p,a as T,b as D,r as h,j as e,M as c,e as de,f as me}from"./nqo5y2f0dorhrqsr.js";import{J as R,F as A,f as _,aR as V,aS as $,c as ue,bL as ge,bM as Y,u as ee,as as se,ag as C,bR as x,bd as ae,cg as xe,bo as N,av as fe,o as Me,S as je,cz as he}from"./dh0yl0m9q337gmci.js";import{bq as ve,h7 as L,h8 as K,eO as pe,h9 as Z,cY as i,U as Q,y as te,fs as ne,ha as z,hb as be,hc as W,cu as P,b_ as ye,hd as Re,k as Ce,b3 as Ue,cb as ke,bc as Ie}from"./ktiwgucld5a8s55m.js";import{c as Ne}from"./iej0cupg2dqkmejt.js";import{a as Pe,b as Se,u as De}from"./k2espd6213xxd06o.js";import{m as re}from"./dvvcopwe6s3rkhu6.js";import{B as Ae}from"./gaad4oovd7ll3n61.js";import"./nb34aa8izknzna97.js";import"./l697z2ouob9b6hw7.js";import"./odhzv2q19wc7ynyt.js";import"./jf3ekh73ifxuzv6r.js";import"./fmqfavm16qrwpb4s.js";import"./c4bxzbp1808foto4.js";const k=25;function _e(s,a,t){return X({queryKey:["workspace",s,"invites",a,t],queryFn:async()=>await R.getWorkspaceInvites(s,a,k,t)})}function qe(s,a,t){return X({queryKey:["workspace",s,"invites","requests",a,t],queryFn:async()=>await R.getWorkspaceInviteRequests(s,a,k,t)})}function ie(s){const a=p(),t=A(),n=T();return D({mutationFn:({inviteId:r,role:o,acceptRequest:l})=>R.patchWorkspaceInvite(s,r,{role:o,acceptRequest:l}).catch(d=>{t.danger(a.formatMessage(w.updateInviteError,{error:d.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]}),n.invalidateQueries({queryKey:["workspace",s]})}})}function oe(s){const a=p(),t=A(),n=T();return D({mutationFn:({email:r})=>R.deleteWorkspaceInvite(s,r).catch(o=>{t.danger(a.formatMessage(w.deleteInviteError,{email:r,error:o.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}function we(s){const a=p(),t=A(),n=T();return D({mutationFn:({role:r,email:o})=>R.addWorkspaceUsers(s,[o],r,!0).then(({account_invites:l,errored_emails:d})=>{if(d.length>0)throw new Error(d[0].error);l.length>0&&t.success(a.formatMessage(w.resendInviteSuccess,{email:o}))}).catch(l=>{t.danger(a.formatMessage(w.resendInviteError,{email:o,error:l.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}const w=_({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}}),Ee=V(()=>$(()=>import("./onhpao43pshfntsa.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication)),S=ue(()=>({confirmModalUserData:null})),E={openModalForUser:s=>{S.setState({confirmModalUserData:s})},closeModal:()=>{S.setState({confirmModalUserData:null})}};function Te({workspaceId:s,filterInputValue:a}){const[t,n]=h.useState(0),o=ve()?.id,l=L(s),d=K(s),m=l||d,u=Oe(),f=He(s),{data:b}=pe(s,t*Z,a),B=h.useCallback(g=>{E.openModalForUser(g)},[]),q=h.useCallback(()=>{const g=S.getState().confirmModalUserData?.id;g!==void 0&&f.mutate({userId:g}),E.closeModal()},[f]),F=h.useCallback((g,H)=>{u.mutate({userId:g,value:H,workspaceId:s})},[u,s]);if(b===void 0)return e.jsx(J,{});const O=b.items,y=Math.ceil((b.total??0)/Z);return t>=y&&y!==0&&n(Math.max(y-1,0)),e.jsxs(e.Fragment,{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...M.name})}),e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...M.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:l?"pl-3":"",children:e.jsx(c,{...M.role})})}),m&&e.jsx(i.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(i.Body,{children:[O.map(g=>e.jsx(Be,{isCurrentUser:o!==void 0&&g.id===o,user:g,currentUserHasAdminRights:m,isCurrentUserOwner:l,onRemoveUserClick:()=>B({id:g.id,name:g.name??"",email:g.email??"",created_time:g.created_time}),onUpdateUserRole:F},g.id)),O.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...M.noResults})})})})]})]}),e.jsxs("div",{className:"relative mb-8 mt-4 min-h-[20px]",children:[l&&e.jsxs("button",{onClick:()=>Q.openModal(te.InviteUsersToWorkspace),className:"flex items-center gap-2 text-token-text-secondary hover:text-token-text-primary",children:[e.jsx(ne,{className:"icon-sm"}),e.jsx(c,{...M.inviteMemberButton})]}),y>1&&e.jsx("div",{className:"absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",children:e.jsx(z,{currentPage:t,onChangeIndex:n,length:y})})]}),e.jsx(We,{onDeleteConfirm:q})]})}function We({onDeleteConfirm:s}){const a=p(),t=S(r=>r.confirmModalUserData!==null),n=S(r=>r.confirmModalUserData===null?{}:{userId:r.confirmModalUserData.id,email:r.confirmModalUserData.email,name:r.confirmModalUserData.name,dateAdded:be(r.confirmModalUserData.created_time)});return e.jsx(ge,{isOpen:t,title:a.formatMessage(M.removeMemberModalTitle),onClose:()=>E.closeModal(),type:"success",primaryButton:e.jsx(Y.Button,{title:a.formatMessage(M.removeMemberModalConfirm),color:"danger",onClick:s}),secondaryButton:e.jsx(Y.Button,{title:a.formatMessage(M.removeMemberModalCancel),color:"secondary",onClick:()=>E.closeModal()}),children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[n.name??n.email,e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...M.dateJoined,values:{dateAdded:a.formatDate(n.dateAdded,{year:"numeric",month:"long",day:"numeric"})}})})]})})}function Be({user:s,currentUserHasAdminRights:a,isCurrentUserOwner:t,isCurrentUser:n,onRemoveUserClick:r,onUpdateUserRole:o}){const d=W()[s.role],m=s.name==null||s.name==="",{value:u}=ee("3999712942");return e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:e.jsxs("span",{className:se("flex flex-grow items-center justify-between gap-2",m&&"text-token-text-tertiary"),children:[e.jsx("span",{children:s.name??e.jsx(c,{...M.missingName})}),n&&e.jsx("span",{children:e.jsx(c,{...M.youSpecifier})}),u&&s.is_scim_managed&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-grow"}),e.jsx(Ee,{})]})]})}),e.jsx(i.Cell,{children:s.email}),e.jsx(i.Cell,{children:t?e.jsx(G,{currentRole:s.role,onUpdateUserRole:f=>{o(s.id,f)},disabled:n}):d}),a&&e.jsx(i.Cell,{children:e.jsx(Fe,{userId:s.id,onRemoveUserClick:r,disabled:n,isScimManaged:s.is_scim_managed})})]})}function G({currentRole:s,onUpdateUserRole:a,disabled:t=!1}){const n=W();return e.jsx(Ae,{disabled:t,defaultValue:s,onValueChange:r=>{a(r)},options:[{label:n[C.STANDARD],value:C.STANDARD},{label:n[C.ADMIN],value:C.ADMIN},{label:n[C.OWNER],value:C.OWNER}]})}function Fe({disabled:s,onRemoveUserClick:a,userId:t,isScimManaged:n}){const r=p();return s?null:n?e.jsx(x.Root,{children:e.jsx(x.Trigger,{disabled:!0,children:e.jsx(ae,{sideOffset:0,label:r.formatMessage(re.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(P,{className:"icon-sm"})})})}):e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{className:"-my-2",children:e.jsx(P,{className:"icon-sm"})}),e.jsx(x.Portal,{children:e.jsx(x.Content,{children:e.jsx(x.Item,{onClick:()=>{a(t)},children:e.jsx(c,{...M.removeMemberModalTitle})})})})]})}function Oe(){const s=A();return D({mutationFn:({userId:a,workspaceId:t,value:n})=>R.updateWorkspaceUserRole(t,a,n).catch(r=>{s.danger(`Unable to update user(${a})role:${r.message}`)})})}function He(s){const a=T(),t=A();return D({mutationFn:({userId:n})=>R.removeWorkspaceUser(s,n).catch(r=>{t.danger(`Unable to remove user(${n})from workspace:${r.message}`)}),onSuccess:()=>{a.invalidateQueries({queryKey:["workspace",s]})}})}function J(){return e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(xe,{})})}const M=_({name:{id:"UserManager.name",defaultMessage:"Name"},email:{id:"UserManager.email",defaultMessage:"Email"},role:{id:"UserManager.role",defaultMessage:"Role"},missingName:{id:"UserManager.missingName",defaultMessage:"No name provided"},youSpecifier:{id:"UserManager.youSpecifier",defaultMessage:"(You)"},removeUser:{id:"UserManager.removeUser",defaultMessage:"Remove user from workspace"},removeMemberModalTitle:{id:"UserManager.removeMemberModalTitle",defaultMessage:"Remove member"},removeMemberModalConfirm:{id:"UserManager.removeMemberModalConfirm",defaultMessage:"Delete"},removeMemberModalCancel:{id:"UserManager.removeMemberModalCancel",defaultMessage:"Cancel"},dateJoined:{id:"UserManager.dateJoined",defaultMessage:"Joined workspace on {dateAdded}"},inviteMemberButton:{id:"UserManager.inviteMemberButton",defaultMessage:"Invite member"},noResults:{id:"UserManager.noResults",defaultMessage:"No results"}}),Qe=V(()=>$(()=>import("./onhpao43pshfntsa.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication));function Ve({workspaceId:s,filterInputValue:a}){const[t,n]=h.useState(0),r=L(s),o=K(s),l=r||o,{data:d}=_e(s,t*k,a);if(d===void 0)return e.jsx(J,{});const m=d.items,u=Math.ceil((d.total??0)/k);return t>=u&&u!==0&&n(Math.max(u-1,0)),e.jsxs("div",{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...I.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:l?"pl-3":"",children:e.jsx(c,{...I.role})})}),l&&e.jsx(i.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(i.Body,{children:[m.map(f=>e.jsx($e,{workspaceId:s,invite:f,isCurrentUserOwner:r,currentUserHasAdminRights:l},f.id)),m.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...I.noResults})})})})]})]}),u>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(z,{currentPage:t,onChangeIndex:n,length:u})})]})}function $e({workspaceId:s,invite:a,isCurrentUserOwner:t,currentUserHasAdminRights:n}){const r=W(),o=ie(s),l=oe(s),d=we(s),{value:m}=ee("3999712942");return e.jsxs(i.Row,{disabled:o.isPending||l.isPending||l.isSuccess||d.isPending,children:[e.jsx(i.Cell,{children:e.jsxs("span",{className:"flex flex-grow justify-between",children:[e.jsx("span",{children:a.email_address}),m&&a.is_scim_managed&&e.jsx(Qe,{})]})}),e.jsx(i.Cell,{children:t?e.jsx(G,{currentRole:a.role,onUpdateUserRole:u=>{o.mutate({inviteId:a.id,role:u})}}):r[a.role]}),n&&e.jsx(e.Fragment,{children:e.jsx(i.Cell,{children:e.jsx(Le,{onDeleteUser:()=>{l.mutate({email:a.email_address??""})},onResendInvite:()=>{d.mutate({email:a.email_address??"",role:a.role??""})},disabled:a.is_scim_managed})})})]})}function Le({onDeleteUser:s,onResendInvite:a,disabled:t}){const n=p();return e.jsx(e.Fragment,{children:t?e.jsx(x.Root,{children:e.jsx(x.Trigger,{disabled:!0,children:e.jsx(ae,{sideOffset:0,label:n.formatMessage(re.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(P,{className:"icon-sm"})})})}):e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{children:e.jsx(P,{className:"icon-sm"})}),e.jsx(x.Portal,{children:e.jsxs(x.Content,{children:[e.jsx(x.Item,{onClick:a,children:e.jsx(c,{...I.resendInvite})}),e.jsx(x.Item,{onClick:s,children:e.jsx(c,{...I.revokeInvite})})]})})]})})}const I=_({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Ke({workspaceId:s,filterInputValue:a}){const[t,n]=h.useState(0),{data:r}=qe(s,t*k,a),o=L(s),l=K(s),d=p(),m=o||l;if(r===void 0)return e.jsx(J,{});const u=r.items,f=Math.ceil(r.total/k);return t>=f&&f!==0&&n(Math.max(f-1,0)),e.jsxs("div",{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...U.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:m?"pl-3":"",children:e.jsx(c,{...U.role})})}),m&&e.jsx(i.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:d.formatMessage(U.actions)})]}),e.jsxs(i.Body,{children:[u.map(b=>e.jsx(ze,{workspaceId:s,invite:b,isCurrentUserOwner:o,currentUserHasAdminRights:m},b.id)),u.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...U.noResults})})})})]})]}),f>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(z,{currentPage:t,onChangeIndex:n,length:f})})]})}function ze({workspaceId:s,invite:a,isCurrentUserOwner:t,currentUserHasAdminRights:n}){const r=W(),o=ie(s),l=oe(s),d=p();return e.jsxs(i.Row,{disabled:o.isPending||l.isPending||l.isPending,children:[e.jsx(i.Cell,{children:a.email_address}),e.jsx(i.Cell,{children:t?e.jsx(G,{currentRole:a.role,onUpdateUserRole:m=>{o.mutate({inviteId:a.id,role:m})}}):r[a.role]}),n&&e.jsx(e.Fragment,{children:e.jsx(i.Cell,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(N,{onClick:()=>o.mutate({inviteId:a.id,acceptRequest:!0}),children:d.formatMessage(U.accept)}),e.jsx(N,{color:"secondary",onClick:()=>l.mutate({email:a.email_address}),children:d.formatMessage(U.reject)})]})})})]})}const U=_({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}}),Ge=V(()=>$(()=>import("./ofct9afvdcn5dfv4.js"),__vite__mapDeps([4,1,5,2,3,6,7,8,9,10,11,12,13,14])));var le=(s=>(s.Members="members",s.Invites="invites",s.Requests="requests",s))(le||{});function Je({tab:s}){switch(s){case"members":return e.jsx(c,{...v.allMembers});case"invites":return e.jsx(c,{...v.pendingInvites});case"requests":return e.jsx(c,{...v.pendingRequests})}}function Ye({tab:s,filterInputValue:a,workspaceId:t}){switch(s){case"members":return e.jsx(Te,{workspaceId:t,filterInputValue:a});case"invites":return e.jsx(Ve,{workspaceId:t,filterInputValue:a});case"requests":return e.jsx(Ke,{workspaceId:t,filterInputValue:a})}}const Ze=Ne(le);function Xe({currentWorkspaceId:s}){const a=p(),t=Me(),n=ye(s)??"?",r=Re(t),o=t?.isTeam(),l=de(),[d]=me(),m=d.get("tab"),u=m&&Ze(m)?m:"members",[f,b]=h.useState(""),[B,q]=h.useState("");h.useEffect(()=>{q("")},[u]);const F=h.useCallback(Ce(j=>{q(j)},250),[]),y=!!Ue()?.length;if(!t)return null;const g=t.isAdminOfAccount(),H=t.isOwnerOfAccount(),ce=o||!y?["members","invites"]:["members","invites","requests"];return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsx("title",{children:a.formatMessage(v.adminBrowserPageTitle)})}),e.jsx(Pe,{title:a.formatMessage(v.adminPageTitle),subtitle:e.jsx(c,{values:{totalMembers:n,planName:r},...v.totalMembers})}),e.jsxs(Se,{children:[e.jsxs(ss,{children:[e.jsx("div",{className:"mb-6 flex gap-2",children:ce.map(j=>e.jsx(es,{onClick:()=>{l(j!=null?`/admin?tab=${j}`:"/admin")},isSelected:u===j,children:e.jsx(Je,{tab:j})},j))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(Ie,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:f,onChange:j=>{b(j.target.value),F(j.target.value)},placeholder:a.formatMessage(v.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(g||H||o)&&e.jsx(N,{onClick:()=>{Q.openModal(te.InviteUsersToWorkspace),je.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"workspace-admin-click",text:"InviteMember",step:"OpenModal"})},icon:ne,children:e.jsx(c,{...v.inviteMemberButton})}),o?e.jsx(he,{triggerButton:e.jsx(N,{color:"secondary",icon:P}),children:e.jsx(x.Item,{onClick:()=>{t&&Q.setLeaveWorkspaceData(t)},children:e.jsx(c,{...v.leaveWorkspace})})}):null]})]}),e.jsx(Ye,{workspaceId:s,tab:u,filterInputValue:B})]}),t!=null?e.jsx(Ge,{workspace:t}):null]})}function es({children:s,isSelected:a,onClick:t}){return e.jsx(N,{color:"ghost",className:se(a?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:t,children:s})}const ss=fe.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,v=_({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} · {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function fs(){const s=De();return e.jsx(Xe,{...s})}export{fs as default};