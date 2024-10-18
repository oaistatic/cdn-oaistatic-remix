import{X as b,l as e,$ as l,r as u,bg as v,b as y,bB as K,aK as w,m as F,Y as Q,bm as D,u as E,a as h,h as j,a$ as O}from"./j51q469vqqyswwq0.js";import{T as $,f9 as n,C as z,a3 as S}from"./obfv3y06hphbdxag.js";import{L as Y}from"./izqh9v75d1oqc3ic.js";import{g as I,f as q,d as J,e as V}from"./b774ya183ph4vo78.js";import{p as X}from"./nakmlpxnz8km92cm.js";function Z({setEnabled:t,isLoading:r,isEnabled:s}){const c=b();return e.jsxs("div",{className:"flex flex-row content-center items-center justify-items-center",children:[e.jsx($,{disabled:r,enabled:s,onChange:t,label:c.formatMessage(n.sendInviteEmailsLabel)}),e.jsx(Y,{className:"ml-2",children:e.jsx(l,{...n.sendInviteEmailsLabel})})]})}function ee({setEnabled:t,isLoading:r,isEnabled:s}){const c=b(),[i,a]=u.useState(!1),d=()=>{a(!0)},o=f=>{a(!1),f&&t(!1)};return e.jsx("div",{className:"pt-1.5",children:s?e.jsxs(e.Fragment,{children:[e.jsx(v,{disabled:r,color:"danger",onClick:()=>{r||d()},children:e.jsx(l,{...n.deleteDirectorySyncConnectionButton})}),e.jsx(z,{title:c.formatMessage(n.deleteDirectorySyncConnectionModalHeader),description:c.formatMessage(n.deleteDirectorySyncConnectionModalExplanation),confirmText:c.formatMessage(n.deleteDirectorySyncConnectionModalConfirmButton),cancelText:c.formatMessage(n.deleteDirectorySyncConnectionModalCancelButton),isOpen:i,primaryButtonColor:"danger",onClose:()=>o(!1),onConfirm:()=>o(!0)})]}):e.jsx(e.Fragment,{children:e.jsx(v,{disabled:r,color:"primary",onClick:()=>{r||t(!0)},children:e.jsx(l,{...n.enableDirectorySyncButton})})})})}class m{static async getWorkspaceDirectorySyncSettings(r){return y.safeGet("/accounts/{account_id}/scim",{parameters:{path:{account_id:r}}})}static async setWorkspaceDirectorySyncEnabled(r,s){return y.safePost("/accounts/{account_id}/scim/set_enabled",{parameters:{path:{account_id:r}},requestBody:{enabled:s}})}static async setWorkspaceDirectorySyncEmailInvitesEnabled(r,s){return y.safePost("/accounts/{account_id}/scim/set_email_invites_enabled",{parameters:{path:{account_id:r}},requestBody:{enabled:s}})}static async getWorkspaceDirectorySyncPortalUrl(r){return y.safeGet("/accounts/{account_id}/scim/portal_link",{parameters:{path:{account_id:r}}})}static async getWorkspaceDirectorySyncFailedEvents(r){return y.safeGet("/accounts/{account_id}/scim/failed_events",{parameters:{path:{account_id:r}}})}static async retryWorkspaceDirectorySyncFailedEvent(r,s){return y.safePost("/accounts/{account_id}/scim/failed_events/{event_id}/retry",{parameters:{path:{account_id:r,event_id:s}},requestBody:{}})}static async retryAllWorkspaceDirectorySyncFailedEvents(r){return y.safePost("/accounts/{account_id}/scim/failed_events/retry_all",{parameters:{path:{account_id:r}},requestBody:{}})}static async discardWorkspaceDirectorySyncFailedEvent(r,s){return y.delete(`${K}/accounts/${r}/scim/failed_events/${s}`)}static async getWorkspaceDirectorySyncProgressUsers(r){return y.safeGet("/accounts/{account_id}/scim/sync_progress_users",{parameters:{path:{account_id:r}}})}static async getWorkspaceDirectorySyncProgressGroups(r){return y.safeGet("/accounts/{account_id}/scim/sync_progress_groups",{parameters:{path:{account_id:r}}})}}function te({isLoading:t,workspaceId:r,isDirectoryConnectionConfigured:s}){const[c,i]=u.useState(!1),a=w(),d=async()=>{try{i(!0);const o=await m.getWorkspaceDirectorySyncPortalUrl(r);i(!1),o?.portal_link?window.open(o.portal_link,"_blank"):a.danger("Portal link not found.")}catch(o){o instanceof Error?a.danger(o.message):a.danger("An unexpected error occurred.")}};return e.jsxs(v,{disabled:t||c,color:"secondary",className:"mt-3",onClick:d,children:[s?e.jsx(l,{...n.launchDirectorySyncManagementPortalText}):e.jsx(l,{...n.launchDirectorySyncSetupPortalText}),e.jsx(X,{className:"icon-sm ml-1"})]})}function T({percentage:t,height:r=10,className:s,backgroundClassName:c="bg-gray-400",transitionDuration:i,transitionTimingFunction:a,onTransitionEnd:d}){return e.jsxs("div",{className:F("relative w-full",s),style:{height:r},children:[e.jsx("div",{className:F("absolute left-0 top-0 h-full w-full",c)}),e.jsx("div",{className:"absolute left-0 top-0 h-full bg-current transition-[width]",style:{width:`${Math.max(Math.min(t,100),0)}%`,transitionDuration:i,transitionTimingFunction:a},onTransitionEnd:d})]})}function N(t){switch(t){case"dsync.user.created":return n.directorySyncEventTypeUserCreated;case"dsync.user.updated":return n.directorySyncEventTypeUserUpdated;case"dsync.user.deleted":return n.directorySyncEventTypeUserDeleted;case"dsync.group.created":return n.directorySyncEventTypeGroupCreated;case"dsync.group.updated":return n.directorySyncEventTypeGroupUpdated;case"dsync.group.deleted":return n.directorySyncEventTypeGroupDeleted;case"dsync.group.user_added":return n.directorySyncEventTypeGroupUserAdded;case"dsync.group.user_removed":return n.directorySyncEventTypeGroupUserRemoved;case"dsync.activated":return n.directorySyncEventTypeActivated;case"dsync.deleted":return n.directorySyncEventTypeDeleted;case"dsync.deactivated":return n.directorySyncEventTypeDeleted}}function re({isLoading:t,failedEvents:r,retryEventWithId:s,retryAllFailedEvents:c,discardFailedEventWithId:i}){const[a,d]=u.useState(!1),[o,f]=u.useState(),g=b();return e.jsxs(e.Fragment,{children:[o&&e.jsx(Q,{isOpen:a,onClose:d,title:g.formatMessage(N(o.event.event)),description:o.failure_reason,type:"success",showCloseButton:!0,isScrollable:!0,children:e.jsx("pre",{children:JSON.stringify(o.event,null,2)})}),r.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(I,{className:"flex items-center space-x-4",children:[e.jsx(l,{...n.failedDirectorySyncEventsTableHeader}),e.jsx(v,{disabled:t,color:"secondary",size:"small",className:"ml-auto",onClick:()=>{c()},children:e.jsx(l,{...n.retryAllFailedDirectorySyncEventsButton})})]}),e.jsxs(S.Root,{className:"w-full table-auto",children:[e.jsxs(S.Header,{children:[e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableFailureEventTypeColumnHeader})}),e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableFailureReasonColumnHeader})}),e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableActionsColumnHeader})})]}),e.jsx(S.Body,{children:r.map((p,k)=>e.jsxs("tr",{children:[e.jsx(S.Cell,{children:e.jsx(l,{...N(p.event.event)})}),e.jsx(S.Cell,{children:p.failure_reason}),e.jsxs(S.Cell,{children:[e.jsx("div",{children:e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{f(p),d(!0)},children:e.jsx(l,{...n.showEventDirectorySyncEventButton})})}),e.jsx("div",{className:"ml-2",children:e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{s(p.event.id)},children:e.jsx(l,{...n.retryDirectorySyncEventButton})})}),e.jsx("div",{className:"ml-2",children:i&&e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{i(p.event.id)},children:e.jsx(l,{...n.discardDirectorySyncEventButton})})})]})]},p.event.id))})]})]})]})}function se({isLoading:t,numUsersSynced:r,numUsersInDirectory:s,numGroupsSynced:c,numGroupsInDirectory:i,failedEvents:a,retryEventWithId:d,retryAllFailedEvents:o,discardFailedEventWithId:f}){const{value:g}=D("2091463435");return e.jsxs(e.Fragment,{children:[e.jsxs(q,{className:"my-2",children:[e.jsxs("div",{children:[e.jsx(l,{...n.directorySyncUserSyncStatus,values:{numUsersSynced:r,numUsersInDirectory:s}}),e.jsx(T,{percentage:r/(s||1)*100})]}),e.jsx("div",{className:"mt-4",children:g&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center space-x-4",children:e.jsx(l,{...n.directorySyncGroupSyncStatus,values:{numGroupsSynced:c,numGroupsInDirectory:i}})}),e.jsx(T,{percentage:c/(i||1)*100})]})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(re,{isLoading:t,failedEvents:a,retryEventWithId:d,retryAllFailedEvents:o,discardFailedEventWithId:f})})]})}const _=2e3;function C(t,r){const[s,c]=u.useState(!1),{data:i,...a}=E({queryKey:["workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncSettings(t)},enabled:!!t,refetchInterval:r&&s?_:!1});return u.useEffect(()=>{i?.enabled&&i?.directory_connection==null?c(!0):c(!1)},[i]),{data:i,...a}}function W(t,r){const[s,c]=u.useState(!1),{data:i}=C(t,r),{data:a,...d}=E({queryKey:["workspace/directorySyncStatus/progressUsers","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncProgressUsers(t)},enabled:!!t&&!!i?.directory_connection,refetchInterval:s?_:!1});return u.useEffect(()=>{a?.synced_scim_users===0||a?.synced_scim_users!==a?.total_scim_users?c(!0):c(!1)},[a,i?.directory_connection]),{isLoadingUsers:s,data:a,...d}}function ne(t,r){const[s,c]=u.useState(!1),{data:i}=C(t,r),{data:a,...d}=E({queryKey:["workspace/directorySyncStatus/progressGroups","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncProgressGroups(t)},enabled:!!t&&!!i?.directory_connection,refetchInterval:r&&s?_:!1});return u.useEffect(()=>{a?.synced_scim_groups===0||a?.synced_scim_groups!==a?.total_scim_groups?c(!0):c(!1)},[a,i?.directory_connection]),{isLoadingGroups:s,data:a,...d}}function ce(t,r){const{isLoadingUsers:s}=W(t,r);return E({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncFailedEvents(t)},enabled:!!t,refetchInterval:s?_:!1})}function ae(t){const r=h();return j({mutationFn:s=>m.retryWorkspaceDirectorySyncFailedEvent(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}function ie(t){const r=h();return j({mutationFn:()=>m.retryAllWorkspaceDirectorySyncFailedEvents(t),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}function oe(t){const r=h();return j({mutationFn:s=>m.discardWorkspaceDirectorySyncFailedEvent(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents"]})}})}function le(t){const r=h();return j({mutationFn:s=>m.setWorkspaceDirectorySyncEnabled(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySync",t]})}})}function de(t){const r=h();return j({mutationFn:s=>m.setWorkspaceDirectorySyncEmailInvitesEnabled(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySync",t]})}})}function fe({workspaceId:t}){const{value:r}=D("2091463435"),{value:s}=D("2494375100"),{data:c,isLoading:i}=C(t,!0),{data:a,isLoading:d}=W(t,!0),{data:o,isLoading:f}=ne(t,r),{data:g,isLoading:p}=ce(t,!0),{mutateAsync:k,status:G}=le(t),{mutateAsync:A,status:M}=ae(t),{mutateAsync:U,status:P}=ie(t),{mutateAsync:B,status:L}=oe(t),{mutateAsync:R,status:H}=de(t),x=G==="pending"||M==="pending"||P==="pending"||L==="pending"||H=="pending"||i||d||f||p;return e.jsxs(J,{className:`${x?"text-token-text-secondary":""}`,children:[e.jsx(V,{children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx("div",{children:e.jsx(l,{...n.directorySyncTitle})}),e.jsx("div",{className:"ml-2 mt-1",children:x&&e.jsx(O,{})})]})}),e.jsx(q,{children:e.jsx(l,{...n.directorySyncInfoText})}),c?.directory_connection&&e.jsx("div",{children:e.jsx(se,{isLoading:x,numUsersSynced:a?.synced_scim_users??0,numUsersInDirectory:a?.total_scim_users??0,numGroupsSynced:o?.synced_scim_groups??0,numGroupsInDirectory:o?.total_scim_groups??0,failedEvents:g??[],retryEventWithId:A,retryAllFailedEvents:U,discardFailedEventWithId:B})}),s&&c?.enabled&&e.jsx("div",{children:e.jsx(Z,{setEnabled:R,isLoading:x,isEnabled:c?.send_user_invite_emails??!1})}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(ee,{setEnabled:k,isLoading:x,isEnabled:c?.enabled??!0}),c?.enabled&&e.jsx(e.Fragment,{children:e.jsx(te,{isLoading:x,workspaceId:t,isDirectoryConnectionConfigured:!!c?.directory_connection})})]})]})}export{fe as DirectorySyncSection};
//# sourceMappingURL=n68i9o7a7rz3g4iw.js.map
