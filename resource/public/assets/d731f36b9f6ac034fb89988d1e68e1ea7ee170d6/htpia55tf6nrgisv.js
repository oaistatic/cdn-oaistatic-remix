import{r as h,c as y,j as e,M as t,e as A}from"./lklglvrzltpv3f05.js";import{bv as C,c5 as D,U as O,c6 as I,c7 as T,c8 as B,c9 as U,ca as E,cb as v,cc as x,cd as b}from"./mc2tj3xhtcshtn61.js";import{o as j,cg as R,F as _,bO as L,by as Y,dh as p,J as g,fF as F,dp as z,fG as G,f as H}from"./i7de8yvdg4jlu6h0.js";function K(){const o=C(),a=j(),{data:d}=R(),r=a!=null||d!=null,[i,c]=h.useState(!1),f=d?.accountItems,m=D(a?.id??""),w=a?.id,l=f?.find(n=>n.id===w),M=a?.isOwnerOfAccount()&&a.isTeam()&&!a.hasPaidSubscription(),W=a?.isOwnerOfAccount()&&a.isTeam()&&a.hasPaidSubscription(),u=f?.filter(n=>!n.isDeactivated()),k=y(),N=_(),S=h.useCallback(()=>{c(!0),O.setPurchaseWorkspaceData({minimumSeats:Math.max(m,I),billingDetails:T,existingAccount:l}),c(!1)},[m,l]),P=async()=>{c(!0);try{const n=await g.fetchCustomerPortalUrl();location.href=n.url,c(!1)}catch{c(!1),N.warning(k.formatMessage(s.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return a==null||!l||!u?e.jsx(e.Fragment,{}):e.jsx(L,{type:"success",onClose:Y,isOpen:r,title:e.jsx("span",{className:"text-lg",children:e.jsx(t,{...s.workspaceDeactivated})}),children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(B,{src:l.data.profilePictureUrl,size:"large"}),e.jsx("div",{className:"font-semibold",children:l.data.name})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.workspaceDeactivated})}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{className:"mb-1",children:e.jsx(t,{...s.chatHistoryUnavailable})}),e.jsx("li",{children:e.jsx(t,{...s.otherWorkspacesAvailable})})]})]}),M&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.purchaseNewSubscription})}),e.jsx(p,{className:"m-auto mt-2 w-full",loading:i,onClick:S,children:e.jsx(t,{...s.purchaseNewSubscriptionButton})})]}),W&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.resolveOutstandingInvoice})}),e.jsx(p,{className:"m-auto mt-2 w-full",loading:i,onClick:P,children:e.jsx(t,{...s.manageSubscriptionButton})})]}),e.jsx(U,{}),e.jsx("div",{className:"w-full justify-center",children:u.length>0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.selectWorkspace})}),e.jsx(E,{data:u})]}):e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-base font-bold",children:e.jsx(t,{...s.createPersonalWorkspace})}),e.jsx(t,{...s.deactivatedWorkspaceReason})]}),e.jsxs("div",{className:"flex w-full items-center gap-4",children:[o&&o.picture&&e.jsx("img",{alt:"Profile",src:o.picture,width:v.workspaceMedium,height:v.workspaceMedium,className:"flex items-center justify-center rounded-sm"}),e.jsx("span",{className:"font-semibold",children:o&&e.jsx("span",{children:o.name})})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(p,{title:k.formatMessage(s.createPersonalWorkspaceButton),loading:i,onClick:async()=>{c(!0),await g.upsertPersonalWorkspace(),F(G),z()},color:"primary",className:"ml-4"})})]})})]})})}const s=H({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}});function V(){const o=x(b.workspaces),a=j(),d=x(b.workspaceId),r=o.find(c=>c.id===d),i=A();return h.useEffect(()=>{a?.data&&(!r||!r.deactivated)&&i("/")},[a,r,i]),a?.data&&(!r||!r.deactivated)?e.jsx("div",{}):e.jsx(K,{})}export{V as default};
//# sourceMappingURL=htpia55tf6nrgisv.js.map
