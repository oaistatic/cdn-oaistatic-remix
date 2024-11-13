import{Y as b,j as e,aG as l,r as u,aK as v,h as y,ae as K,Z as w,ar as F,bL as Q,u as D,l as E,m as h,o as j,b0 as $}from"./gqmy69lfum1xn3in.js";import{i as O,cB as z,E as S}from"./icnxn2xqcp3w18gd.js";import{$ as Y}from"./fwlffwb8x61oidmk.js";import{m as n}from"./kxw11ht17q7113e3.js";import{g as I,f as q,d as J,e as V}from"./ihxaggfdzr9ud0ni.js";import{r as Z}from"./i4z8naqcr3t3djqa.js";function X({setEnabled:t,isLoading:r,isEnabled:s}){const c=b();return e.jsxs("div",{className:"flex flex-row content-center items-center justify-items-center",children:[e.jsx(O,{disabled:r,enabled:s,onChange:t,label:c.formatMessage(n.sendInviteEmailsLabel)}),e.jsx(Y,{className:"ml-2",children:e.jsx(l,{...n.sendInviteEmailsLabel})})]})}function ee({setEnabled:t,isLoading:r,isEnabled:s}){const c=b(),[o,a]=u.useState(!1),d=()=>{a(!0)},i=f=>{a(!1),f&&t(!1)};return e.jsx("div",{className:"pt-1.5",children:s?e.jsxs(e.Fragment,{children:[e.jsx(v,{disabled:r,color:"danger",onClick:()=>{r||d()},children:e.jsx(l,{...n.deleteDirectorySyncConnectionButton})}),e.jsx(z,{title:c.formatMessage(n.deleteDirectorySyncConnectionModalHeader),description:c.formatMessage(n.deleteDirectorySyncConnectionModalExplanation),confirmText:c.formatMessage(n.deleteDirectorySyncConnectionModalConfirmButton),cancelText:c.formatMessage(n.deleteDirectorySyncConnectionModalCancelButton),isOpen:o,primaryButtonColor:"danger",onClose:()=>i(!1),onConfirm:()=>i(!0)})]}):e.jsx(e.Fragment,{children:e.jsx(v,{disabled:r,color:"primary",onClick:()=>{r||t(!0)},children:e.jsx(l,{...n.enableDirectorySyncButton})})})})}class m{static async getWorkspaceDirectorySyncSettings(r){return y.safeGet("/accounts/{account_id}/scim",{parameters:{path:{account_id:r}}})}static async setWorkspaceDirectorySyncEnabled(r,s){return y.safePost("/accounts/{account_id}/scim/set_enabled",{parameters:{path:{account_id:r}},requestBody:{enabled:s}})}static async setWorkspaceDirectorySyncEmailInvitesEnabled(r,s){return y.safePost("/accounts/{account_id}/scim/set_email_invites_enabled",{parameters:{path:{account_id:r}},requestBody:{enabled:s}})}static async getWorkspaceDirectorySyncPortalUrl(r){return y.safeGet("/accounts/{account_id}/scim/portal_link",{parameters:{path:{account_id:r}}})}static async getWorkspaceDirectorySyncFailedEvents(r){return y.safeGet("/accounts/{account_id}/scim/failed_events",{parameters:{path:{account_id:r}}})}static async retryWorkspaceDirectorySyncFailedEvent(r,s){return y.safePost("/accounts/{account_id}/scim/failed_events/{event_id}/retry",{parameters:{path:{account_id:r,event_id:s}},requestBody:{}})}static async retryAllWorkspaceDirectorySyncFailedEvents(r){return y.safePost("/accounts/{account_id}/scim/failed_events/retry_all",{parameters:{path:{account_id:r}},requestBody:{}})}static async discardWorkspaceDirectorySyncFailedEvent(r,s){return y.delete(`${K}/accounts/${r}/scim/failed_events/${s}`)}static async getWorkspaceDirectorySyncProgressUsers(r){return y.safeGet("/accounts/{account_id}/scim/sync_progress_users",{parameters:{path:{account_id:r}}})}static async getWorkspaceDirectorySyncProgressGroups(r){return y.safeGet("/accounts/{account_id}/scim/sync_progress_groups",{parameters:{path:{account_id:r}}})}}function te({isLoading:t,workspaceId:r,isDirectoryConnectionConfigured:s}){const[c,o]=u.useState(!1),a=w(),d=async()=>{try{o(!0);const i=await m.getWorkspaceDirectorySyncPortalUrl(r);o(!1),i?.portal_link?window.open(i.portal_link,"_blank"):a.danger("Portal link not found.")}catch(i){i instanceof Error?a.danger(i.message):a.danger("An unexpected error occurred.")}};return e.jsxs(v,{disabled:t||c,color:"secondary",className:"mt-3",onClick:d,children:[s?e.jsx(l,{...n.launchDirectorySyncManagementPortalText}):e.jsx(l,{...n.launchDirectorySyncSetupPortalText}),e.jsx(Z,{className:"icon-sm ml-1"})]})}function T({percentage:t,height:r=10,className:s,backgroundClassName:c="bg-gray-400",transitionDuration:o,transitionTimingFunction:a,onTransitionEnd:d}){return e.jsxs("div",{className:F("relative w-full",s),style:{height:r},children:[e.jsx("div",{className:F("absolute left-0 top-0 h-full w-full",c)}),e.jsx("div",{className:"absolute left-0 top-0 h-full bg-current transition-[width]",style:{width:`${Math.max(Math.min(t,100),0)}%`,transitionDuration:o,transitionTimingFunction:a},onTransitionEnd:d})]})}function N(t){switch(t){case"dsync.user.created":return n.directorySyncEventTypeUserCreated;case"dsync.user.updated":return n.directorySyncEventTypeUserUpdated;case"dsync.user.deleted":return n.directorySyncEventTypeUserDeleted;case"dsync.group.created":return n.directorySyncEventTypeGroupCreated;case"dsync.group.updated":return n.directorySyncEventTypeGroupUpdated;case"dsync.group.deleted":return n.directorySyncEventTypeGroupDeleted;case"dsync.group.user_added":return n.directorySyncEventTypeGroupUserAdded;case"dsync.group.user_removed":return n.directorySyncEventTypeGroupUserRemoved;case"dsync.activated":return n.directorySyncEventTypeActivated;case"dsync.deleted":return n.directorySyncEventTypeDeleted;case"dsync.deactivated":return n.directorySyncEventTypeDeleted}}function re({isLoading:t,failedEvents:r,retryEventWithId:s,retryAllFailedEvents:c,discardFailedEventWithId:o}){const[a,d]=u.useState(!1),[i,f]=u.useState(),g=b();return e.jsxs(e.Fragment,{children:[i&&e.jsx(Q,{isOpen:a,onClose:d,title:g.formatMessage(N(i.event.event)),description:i.failure_reason,type:"success",showCloseButton:!0,isScrollable:!0,children:e.jsx("pre",{children:JSON.stringify(i.event,null,2)})}),r.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(I,{className:"flex items-center space-x-4",children:[e.jsx(l,{...n.failedDirectorySyncEventsTableHeader}),e.jsx(v,{disabled:t,color:"secondary",size:"small",className:"ml-auto",onClick:()=>{c()},children:e.jsx(l,{...n.retryAllFailedDirectorySyncEventsButton})})]}),e.jsxs(S.Root,{className:"w-full table-auto",children:[e.jsxs(S.Header,{children:[e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableFailureEventTypeColumnHeader})}),e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableFailureReasonColumnHeader})}),e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableActionsColumnHeader})})]}),e.jsx(S.Body,{children:r.map((p,k)=>e.jsxs("tr",{children:[e.jsx(S.Cell,{children:e.jsx(l,{...N(p.event.event)})}),e.jsx(S.Cell,{children:p.failure_reason}),e.jsxs(S.Cell,{children:[e.jsx("div",{children:e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{f(p),d(!0)},children:e.jsx(l,{...n.showEventDirectorySyncEventButton})})}),e.jsx("div",{className:"ml-2",children:e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{s(p.event.id)},children:e.jsx(l,{...n.retryDirectorySyncEventButton})})}),e.jsx("div",{className:"ml-2",children:o&&e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{o(p.event.id)},children:e.jsx(l,{...n.discardDirectorySyncEventButton})})})]})]},p.event.id))})]})]})]})}function se({isLoading:t,numUsersSynced:r,numUsersInDirectory:s,numGroupsSynced:c,numGroupsInDirectory:o,failedEvents:a,retryEventWithId:d,retryAllFailedEvents:i,discardFailedEventWithId:f}){const{value:g}=D("2091463435");return e.jsxs(e.Fragment,{children:[e.jsxs(q,{className:"my-2",children:[e.jsxs("div",{children:[e.jsx(l,{...n.directorySyncUserSyncStatus,values:{numUsersSynced:r,numUsersInDirectory:s}}),e.jsx(T,{percentage:r/(s||1)*100})]}),e.jsx("div",{className:"mt-4",children:g&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center space-x-4",children:e.jsx(l,{...n.directorySyncGroupSyncStatus,values:{numGroupsSynced:c,numGroupsInDirectory:o}})}),e.jsx(T,{percentage:c/(o||1)*100})]})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(re,{isLoading:t,failedEvents:a,retryEventWithId:d,retryAllFailedEvents:i,discardFailedEventWithId:f})})]})}const _=2e3;function C(t,r){const[s,c]=u.useState(!1),{data:o,...a}=E({queryKey:["workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncSettings(t)},enabled:!!t,refetchInterval:r&&s?_:!1});return u.useEffect(()=>{o?.enabled&&o?.directory_connection==null?c(!0):c(!1)},[o]),{data:o,...a}}function G(t,r){const[s,c]=u.useState(!1),{data:o}=C(t,r),{data:a,...d}=E({queryKey:["workspace/directorySyncStatus/progressUsers","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncProgressUsers(t)},enabled:!!t&&!!o?.directory_connection,refetchInterval:s?_:!1});return u.useEffect(()=>{a?.synced_scim_users===0||a?.synced_scim_users!==a?.total_scim_users?c(!0):c(!1)},[a,o?.directory_connection]),{isLoadingUsers:s,data:a,...d}}function ne(t,r){const[s,c]=u.useState(!1),{data:o}=C(t,r),{data:a,...d}=E({queryKey:["workspace/directorySyncStatus/progressGroups","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncProgressGroups(t)},enabled:!!t&&!!o?.directory_connection,refetchInterval:r&&s?_:!1});return u.useEffect(()=>{a?.synced_scim_groups===0||a?.synced_scim_groups!==a?.total_scim_groups?c(!0):c(!1)},[a,o?.directory_connection]),{isLoadingGroups:s,data:a,...d}}function ce(t,r){const{isLoadingUsers:s}=G(t,r);return E({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncFailedEvents(t)},enabled:!!t,refetchInterval:s?_:!1})}function ae(t){const r=h();return j({mutationFn:s=>m.retryWorkspaceDirectorySyncFailedEvent(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}function oe(t){const r=h();return j({mutationFn:()=>m.retryAllWorkspaceDirectorySyncFailedEvents(t),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}function ie(t){const r=h();return j({mutationFn:s=>m.discardWorkspaceDirectorySyncFailedEvent(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents"]})}})}function le(t){const r=h();return j({mutationFn:s=>m.setWorkspaceDirectorySyncEnabled(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySync",t]})}})}function de(t){const r=h();return j({mutationFn:s=>m.setWorkspaceDirectorySyncEmailInvitesEnabled(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySync",t]})}})}function ve({workspaceId:t}){const{value:r}=D("2091463435"),{value:s}=D("2494375100"),{data:c,isLoading:o}=C(t,!0),{data:a,isLoading:d}=G(t,!0),{data:i,isLoading:f}=ne(t,r),{data:g,isLoading:p}=ce(t,!0),{mutateAsync:k,status:W}=le(t),{mutateAsync:A,status:M}=ae(t),{mutateAsync:U,status:P}=oe(t),{mutateAsync:B,status:L}=ie(t),{mutateAsync:R,status:H}=de(t),x=W==="pending"||M==="pending"||P==="pending"||L==="pending"||H=="pending"||o||d||f||p;return e.jsxs(J,{className:`${x?"text-token-text-secondary":""}`,children:[e.jsx(V,{children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx("div",{children:e.jsx(l,{...n.directorySyncTitle})}),e.jsx("div",{className:"ml-2 mt-1",children:x&&e.jsx($,{})})]})}),e.jsx(q,{children:e.jsx(l,{...n.directorySyncInfoText})}),c?.directory_connection&&e.jsx("div",{children:e.jsx(se,{isLoading:x,numUsersSynced:a?.synced_scim_users??0,numUsersInDirectory:a?.total_scim_users??0,numGroupsSynced:i?.synced_scim_groups??0,numGroupsInDirectory:i?.total_scim_groups??0,failedEvents:g??[],retryEventWithId:A,retryAllFailedEvents:U,discardFailedEventWithId:B})}),s&&c?.enabled&&e.jsx("div",{children:e.jsx(X,{setEnabled:R,isLoading:x,isEnabled:c?.send_user_invite_emails??!1})}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(ee,{setEnabled:k,isLoading:x,isEnabled:c?.enabled??!0}),c?.enabled&&e.jsx(e.Fragment,{children:e.jsx(te,{isLoading:x,workspaceId:t,isDirectoryConnectionConfigured:!!c?.directory_connection})})]})]})}export{ve as DirectorySyncSection};
//# sourceMappingURL=mo7vjj6gpisphzi0.js.map
