import{r as x,L as M,N as I,m as e,cc as O,aT as n,gG as U,dj as w,a3 as E,K as _,aM as B,c8 as H,aZ as Y,u as q,aC as T,aK as K,t as se,V as X,eW as ae,by as P}from"./gfs0keudzvcg5rgq.js";import{b as V,a as D,c as te,d as ne}from"./0eur7gugsn205558.js";import{ha as m,hb as G,hc as k,hd as Q,he as Z,hf as ie,bm as le,b_ as oe,aK as re,hg as ce,b$ as de,hh as ue,hi as W,c2 as ge,L as me,cu as xe}from"./b6arjgg215unn3v3.js";import{c as fe}from"./iej0cupg2dqkmejt.js";import{ai as pe,bg as he,bs as je,bt as Me,ap as ve,f as be,P as ye}from"./iqnriohw8g1d2uyi.js";import{a as Se,b as Ne,d as we}from"./npj420mlfrwchkgj.js";import{a as Ce,d as z,e as A,g as $,f as Be,c as Ie,A as Pe}from"./hbygy22pb1mye80o.js";import"./hstfd7jg0qovo68e.js";import"./eq1nad9lwlbxs0ds.js";import"./gyqgqt7py9lqpp7m.js";import"./o7amlkgkeatodl16.js";import"./q6d0xw25r3ge4hkv.js";var C=(s=>(s.FLEXIBLE="month",s.ANNUAL="year",s))(C||{});const Le=fe(C);function Te({isOpen:s,onClose:i,initialTeamBillingType:a,renewalDate:t,accountId:l}){const[c,o]=x.useState(a),[r,u]=x.useState(!1),j=function(){u(!r)},[f,g]=x.useState(!1),v=De[c],p=M(),b=I(),S=V(l),N=async()=>{g(!0);try{await S.mutateAsync({accountId:l,updatedPriceInterval:c==="month"?"month":"year",updatedSeats:void 0}),g(!1),b.success(p.formatMessage({id:"teamBilling.successfullyUpdatedSubscription",defaultMessage:"Your subscription was updated successfully"}),{hasCloseButton:!0}),u(!1),i()}catch{b.warning(p.formatMessage({id:"teamBilling.errorUpdatingSubscription",defaultMessage:"There was a problem updating your subscription"}),{hasCloseButton:!0})}finally{g(!1)}};return e.jsx(O,{type:"success",isOpen:s,onClose:()=>{u(!1),o(a),i()},size:"custom",className:"max-w-xl",noPadding:!0,title:r?p.formatMessage({id:"teamBilling.changeBillingScheduleConfirmTitle",defaultMessage:"Confirm changes"}):p.formatMessage({id:"teamBilling.changeBillingScheduleTitle",defaultMessage:"Change billing schedule"}),showCloseButton:!0,children:r?e.jsx(_e,{selectedPlan:c,initialTeamBillingType:a,renewalDate:t,selectedPlanData:v,handleUpdate:N,isUpdating:f}):e.jsx(Ee,{setSelectedPlan:o,selectedPlan:c,initialTeamBillingType:a,toggleConfirmPage:j,renewalDate:t})})}function Ee({selectedPlan:s,setSelectedPlan:i,initialTeamBillingType:a,toggleConfirmPage:t,renewalDate:l}){const c=M();return e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-flow-row grid-cols-2",children:e.jsxs(G,{className:"col-span-2 grid md:col-span-2 md:grid-cols-2",defaultValue:s,onValueChange:o=>{Le(o)&&i(o)},children:[e.jsx(k,{billingType:"month",...Q}),e.jsx(k,{billingType:"year",...Z})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"m-4 flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{...m.changeEffectDate,values:{date:e.jsx(U,{value:l,year:"numeric",month:"long",day:"numeric"})}})}),e.jsx(w,{title:c.formatMessage(m.continueToPricePreview),disabled:s===a,color:"primary",onClick:()=>{t()}})]})]})}function _e({initialTeamBillingType:s,selectedPlan:i,renewalDate:a,selectedPlanData:t,handleUpdate:l,isUpdating:c}){const o=M();return e.jsxs("div",{className:"p-4",children:[e.jsx("span",{className:"text-sm",children:e.jsx(n,{...m.confirmPageChangeEffectDate,values:{current_plan:s==="month"?"Flexible (monthly)":"Annual",new_plan:i==="month"?"Flexible (monthly)":"Annual",date:e.jsx(U,{value:a,year:"numeric",month:"long",day:"numeric"})}})}),e.jsxs("div",{className:"mt-4 flex flex-col bg-token-main-surface-secondary p-4",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{...t.name})}),e.jsx("span",{className:"text-sm",children:e.jsx(n,{...t.cost,values:{s:(...r)=>e.jsx(ie,{children:r})}})}),e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{...t.structure})})]}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(w,{title:o.formatMessage(m.confirmChange),color:"primary",onClick:l,loading:c})})]})}const De={month:{name:m.flexiblePlanName,cost:m.flexiblePlanCost,structure:m.teamsCostStructure},year:{name:m.annualPlanName,cost:m.annualPlanCost,structure:m.teamsCostStructure}};function ke({isOpen:s,onClose:i}){const a=M(),t=I(),{data:l,isLoading:c}=D(),o=E(),r=te(o?.id),u=le(),[j,f]=x.useState(""),[g,v]=x.useState(!1),p=u?.email&&j.toLowerCase()==u.email.toLowerCase(),[b,S]=x.useState(l&&!l.will_renew);if(c||!o||!l)return null;const N=async()=>{v(!0);try{await r.mutateAsync(o.id),S(!0)}catch{t.warning(a.formatMessage(h.errorCancellingSubscription),{hasCloseButton:!0})}finally{v(!1)}};return e.jsx(O,{type:"success",onClose:i,showCloseButton:!0,isOpen:s,className:"",title:e.jsx("span",{className:"text-lg",children:e.jsx(n,{...h.cancelPlan})}),children:b?e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(n,{...h.successfullyCanceled})}),l.active_until!=null&&e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(n,{...h.retainUntil,values:{expiryDate:new Date(l.active_until)}})}),e.jsx("div",{className:"mt-6 flex w-full flex-row justify-end",children:e.jsx(w,{title:a.formatMessage(h.doneButton),color:"primary",onClick:i,disabled:g})})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(oe,{src:o.data.profilePictureUrl,size:"large"}),e.jsxs("div",{className:"flex-col",children:[e.jsx("p",{className:"font-semibold",children:o.data.name}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{...h.membersCount,values:{count:l.seats_entitled}})})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(n,{...h.areYouSure})}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-token-text-secondary",children:[e.jsx("li",{className:"my-2",children:e.jsx(n,{...h.dataUnavailable})}),l.active_until!=null&&e.jsx("li",{className:"my-2",children:e.jsx(n,{...h.retainUntil,values:{expiryDate:new Date(l.active_until)}})}),e.jsx("li",{className:"my-2",children:e.jsx(n,{...h.retainEmailAccess})})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(n,{...h.enterEmailToConfirm})}),e.jsx(re,{type:"text",name:"user-email",placeholder:"abcd@acme.com",onChange:y=>{f(y.target.value)}})]})]}),e.jsxs("div",{className:"mt-6 flex w-full flex-row justify-end",children:[e.jsx(w,{title:a.formatMessage(h.keepSubscriptionButton),onClick:i,disabled:g}),e.jsx(w,{title:a.formatMessage(h.cancelSubscriptionButton),onClick:N,disabled:!p,loading:g,color:"danger",className:"ml-2"})]})]})})}const h=_({dataUnavailable:{id:"cancelTeamPlanModal.dataUnavailable",defaultMessage:"All workspace data including chat history and settings will not be available."},cancelPlan:{id:"cancelTeamPlanModal.cancelPlan",defaultMessage:"Cancel subscription"},retainUntil:{id:"cancelTeamPlanModal.retainUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},retainEmailAccess:{id:"cancelTeamPlanModal.retainEmailAccess",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},errorCancellingSubscription:{id:"cancelTeamPlanModal.errorCancellingSubscription",defaultMessage:"There was a problem cancelling your subscription."},areYouSure:{id:"cancelTeamPlanModal.areYouSure",defaultMessage:"Are you sure?"},enterEmailToConfirm:{id:"cancelTeamPlanModal.enterEmailToConfirm",defaultMessage:"Enter your Email address to confirm"},emailPlaceholder:{id:"cancelTeamPlanModal.emailPlaceholder",defaultMessage:"abcd@acme.com"},doneButton:{id:"cancelTeamPlanModal.doneButton",defaultMessage:"Done"},keepSubscriptionButton:{id:"cancelTeamPlanModal.keepSubscriptionButton",defaultMessage:"Keep subscription"},cancelSubscriptionButton:{id:"cancelTeamPlanModal.cancelSubscriptionButton",defaultMessage:"Cancel subscription"},successfullyCanceled:{id:"cancelTeamPlanModal.successfullyCanceled",defaultMessage:"You have successfully canceled your subscription."},membersCount:{id:"yourComponent.membersCount",defaultMessage:"{count, plural, one {# member} other {# members}}"}}),ze=25*12,Ae=30,Oe=B.p`text-base font-semibold mb-3 mt-3`;function Ue({isOpen:s,onClose:i,initialTeamBillingType:a,initialSeats:t,accountId:l,renewalDate:c}){const o=M(),r=I(),[u,j]=x.useState(t),[f,g]=x.useState(!1),v=function(){g(!f)},[p,b]=x.useState(!1),S=We[a],N=a==="month"?Q:Z,y=V(l),ee=async()=>{b(!0);try{await y.mutateAsync({accountId:l,updatedPriceInterval:void 0,updatedSeats:u}),b(!1),r.success(o.formatMessage({id:"teamBilling.successfullyUpdatedSubscription",defaultMessage:"Your subscription was updated successfully"}),{hasCloseButton:!0}),g(!1),i()}catch{r.warning(o.formatMessage({id:"teamBilling.errorUpdatingSubscription",defaultMessage:"There was a problem updating your subscription"}),{hasCloseButton:!0})}finally{b(!1)}};return e.jsx(O,{type:"success",isOpen:s,onClose:()=>{g(!1),j(t),i()},size:"custom",noPadding:!0,className:"max-w-xl",showCloseButton:!0,title:f?o.formatMessage({id:"teamsManageSeatsModal.title",defaultMessage:"Manage seats"}):o.formatMessage({id:"teamsManageSeatsModalConfirmPage.title",defaultMessage:"Review"}),children:f?e.jsx(Re,{numSeats:u,initialSeats:t,handleUpdate:ee,isUpdating:p,renewalDate:c,accountId:l}):e.jsx(Fe,{initialTeamBillingType:a,selectedPlanBillingInfo:N,numSeats:u,initialSeats:t,setNumSeats:j,selectedPlanData:S,toggleConfirmPage:v})})}function Fe({initialTeamBillingType:s,selectedPlanBillingInfo:i,numSeats:a,initialSeats:t,setNumSeats:l,selectedPlanData:c,toggleConfirmPage:o}){const r=M();return e.jsxs("div",{className:"grid grid-flow-row grid-cols-2",children:[e.jsx(G,{className:"col-span-2 grid md:col-span-1 md:grid-cols-1",defaultValue:s,children:e.jsx(k,{billingType:s,...i})}),e.jsxs("div",{className:"col-span-3 overflow-hidden border-l border-token-main-surface-tertiary bg-token-main-surface-secondary p-6 md:col-span-1",children:[e.jsx("label",{className:"mb-3 block text-base font-semibold",htmlFor:"seats",children:e.jsx(n,{...m.seatsTitle})}),e.jsx(ce,{numSeats:a,minSeats:t,setNumSeats:l}),e.jsx(de,{}),e.jsx(Oe,{children:e.jsx(n,{...m.summaryTitle})}),e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"mb-2",children:e.jsx(n,{...c.name})}),e.jsxs(ue,{children:[e.jsx(W,{children:e.jsx(n,{...c.billed})}),e.jsx(W,{children:e.jsx("b",{children:e.jsx(n,{...c.total,values:{totalCost:(a||0)*(s==="year"?ze:Ae)}})})})]})]})]}),e.jsx("hr",{}),e.jsx("div",{className:"m-4 flex justify-end",children:e.jsx(w,{title:r.formatMessage({id:"teamsManageSeatsModal.continue",defaultMessage:"Continue"}),disabled:a===t,onClick:()=>{o()},color:"primary"})})]})}function Re({numSeats:s,initialSeats:i,renewalDate:a,handleUpdate:t,isUpdating:l,accountId:c}){const o=M(),{data:r,isError:u,isLoading:j}=ne(c,s);if(j)return e.jsx("div",{className:"flex items-center justify-center p-6",children:e.jsx(H,{})});if(!(u||!r))return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.additionalSeats",defaultMessage:"{additionalSeats} additional seats",values:{additionalSeats:s-i}})}),e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.additionalSeatsTotal",defaultMessage:"${totalCost}",values:{totalCost:(r.total_amount/100).toFixed(2)}})})]}),e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{id:"teamsManageSeatsModal.proratedAmountMessage",defaultMessage:"Prorated amount until next billing cycle"})}),e.jsx("span",{className:"mt-4 flex flex-col bg-token-main-surface-secondary p-4 text-sm text-token-text-secondary",children:e.jsx(n,{id:"teamsManageSeatsModal.chargeMessage",defaultMessage:"You will be charged for {numSeats} total seats at your next renewal on {date}",values:{numSeats:s,date:e.jsx(U,{value:a,year:"numeric",month:"long",day:"numeric"})}})}),e.jsx("hr",{className:"mt-4"}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.subTotal",defaultMessage:"Subtotal"})}),e.jsx("span",{children:e.jsx(n,{id:"teamsManageSeatsModal.subtotalPrice",defaultMessage:"${totalCost}",values:{totalCost:(r.amount_excluding_tax/100).toFixed(2)}})})]}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.tax",defaultMessage:"Tax"})}),e.jsx("span",{children:e.jsx(n,{id:"teamsManageSeatsModal.taxAmount",defaultMessage:"${tax}",values:{tax:(r.tax_amount/100).toFixed(2)}})})]}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.totalDueToday",defaultMessage:"Total due today"})}),e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.totalDueTodayAmount",defaultMessage:"${totalCost}",values:{totalCost:(r.total_amount/100).toFixed(2)}})})]}),e.jsx("hr",{className:"mt-4"}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(w,{title:o.formatMessage({id:"teamsManageSeatsModal.payNow",defaultMessage:"Pay now"}),color:"primary",onClick:t,loading:l})})]})}const We={month:{name:m.flexiblePlanSelected,billed:{id:"teamManageSeatsModal.flexiblePlanBilled",defaultMessage:"Price billed monthly",description:"Summary billing of selected plan"},total:m.flexiblePlanTotal},year:{name:m.annualPlanSelected,billed:{id:"teamManageSeatsModal.flexiblePlanBilled",defaultMessage:"Price billed annually",description:"Summary billing of selected plan"},total:m.annualPlanTotal}};function $e({numInUse:s,numAllocated:i,isTeam:a,subscriptionWillRenew:t,subscriptionBillingPeriod:l,accountId:c,subscriptionRenewalDate:o}){const u=Math.max(i,s)>10?He:Xe,j=q("3954884439")?.value,[f,g]=x.useState(!1),v=function(){g(!f)},p=l==="monthly"?C.FLEXIBLE:C.ANNUAL;return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"mt-1 text-left text-sm",children:e.jsx(n,{...R.description,values:{num:`${s}/${i}`}})}),a&&t&&j&&e.jsx(Y,{color:"secondary",className:"text-right",onClick:v,children:e.jsx(n,{id:"components.business.NumSeats.manageSeats",defaultMessage:"Manage seats"})}),e.jsx(Ue,{isOpen:f,onClose:v,initialTeamBillingType:p,initialSeats:i,accountId:c,renewalDate:o})]}),e.jsx(u,{numInUse:s,numAllocated:i})]})}function He({numAllocated:s,numInUse:i}){const a=M(),t=i>s,l=t?100:i/s*100,c=t?s/i*100:100;return e.jsx("div",{className:T("relative w-full rounded-full",t?"bg-orange-500":"bg-token-main-surface-primary"),children:e.jsxs("div",{className:"relative h-4",style:{width:`${c}%`},children:[e.jsx("div",{className:T("h-4 overflow-hidden rounded-l-full bg-green-600",i===s&&"rounded-r-full"),style:{width:`${l}%`}}),i!==s&&t&&e.jsx("div",{className:"absolute right-0 top-[-3px] bg-token-main-surface-primary",children:e.jsx(K,{label:a.formatMessage(R.dividerTooltip,{count:s}),children:e.jsx(J,{className:"px-1 py-0.5"})})})]})})}const J=({className:s})=>e.jsxs("div",{className:T("flex flex-col gap-0.5",s),children:[e.jsx(L,{}),e.jsx(L,{}),e.jsx(L,{}),e.jsx(L,{})]}),F=B.div`h-4 w-4 rounded-full`,Ye=B(F)`bg-green-600`,qe=B(F)`bg-token-main-surface-tertiary`,Ke=B(F)`bg-orange-500`,L=B.span`w-[3px] h-[3px] bg-gray-400 dark:bg-gray-500 rounded-full`;function Xe({numAllocated:s,numInUse:i}){const a=M(),t=i>s,l=x.useMemo(()=>Array.from(Array(t?i:s).keys()),[t,s,i]);return e.jsx("div",{className:"flex items-center gap-2",children:l.map(c=>{let o=Ke,r=null;return c<i&&!t?o=Ye:c<s&&!t&&(o=qe),c===s-1&&(r=e.jsx(K,{label:a.formatMessage(R.dividerTooltip,{count:s}),children:e.jsx(J,{})})),e.jsxs(e.Fragment,{children:[e.jsx(o,{},c),r]})})})}const R=_({dividerTooltip:{defaultMessage:"Your team has {count, plural, =0 {no seats} one {# seat} other {# seats}} purchased",id:"components.business.NumSeats.dividerTooltip"},description:{defaultMessage:"{num} seats in use",id:"components.business.NumSeats.description"}});function Ve(s,i){const a=M(),t=I();return se({queryKey:["organization-invoices",{...s,options:i}],queryFn:async()=>await X.getInvoices(s,i).catch(l=>{throw t.danger(a.formatMessage(Qe.invoicesLoadError,{error:l.message})),l}),enabled:"account_id"in s||"organization_id"in s})}function Ge(s){const i=E(),a=i?.id,t=i?.data.organizationId??void 0,l=i?.isEnterprisey();return Ve(l?{organization_id:t}:{account_id:a},s)}const Qe=_({invoicesLoadError:{id:"organizationBillingInfo.invoicesLoadError.0",defaultMessage:"Failed to load invoices. Contact support@openai.com if error persists."}});function Ze(){const{data:s,isLoading:i,isError:a}=D(),t=E(),[l,c]=x.useState(!1),o=function(){c(!l)};if(i)return e.jsx("div",{className:"flex min-h-screen items-center justify-center",children:e.jsx(H,{})});if(a||!s||!t)return null;const r=s.active_until!=null,u=s?.seats_in_use>s?.seats_entitled;return e.jsx(e.Fragment,{children:e.jsxs(z,{children:[e.jsx(A,{children:e.jsx(n,{...d.planTitle})}),e.jsx("hr",{}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx($,{children:t?.isEdu()?r?e.jsx(n,{...d.activeEduLicense}):t?.isResellerHosted()?e.jsx(n,{...d.resellerHostedEduLicense}):e.jsx(n,{...d.pendingEduLicense}):t?.isEnterprisey()?r?e.jsx(n,{...d.activeEnterpriseLicense}):t?.isResellerHosted()?e.jsx(n,{...d.resellerHostedEnterpriseLicense}):e.jsx(n,{...d.pendingEnterpriseLicense}):r?s.non_profit_org_discount_applied?e.jsx(n,{...d.activeTeamLicenseNonProfitOrg}):e.jsx(n,{...d.activeTeamLicense}):e.jsx(n,{...d.pendingTeamLicense})}),s.active_until!=null&&e.jsx(Be,{className:"mt-1",children:t?.isEnterprisey()?e.jsx(n,{...d.licenseExpiry,values:{expiryDate:new Date(s.active_until)}}):s.will_renew?e.jsx(n,{...d.renewalDate,values:{expiryDate:new Date(s.active_until)}}):e.jsx(n,{...d.deactivateDate,values:{expiryDate:new Date(s.active_until)}})})]}),e.jsx(Je,{isOpen:l,onDropdownOpen:o})]}),e.jsx("hr",{}),r&&e.jsxs("div",{children:[e.jsx($,{children:e.jsx(n,{...d.seatsTitle})}),e.jsx(as,{isTeam:t?.isTeam()??!1,accountId:t.id}),t?.isTeam()&&u&&e.jsxs("span",{className:"text-sm text-token-text-secondary",children:[e.jsx(n,{...d.teamsAutochargeMessage}),e.jsx(me,{className:"pl-1",openNewTab:!0,href:"https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan",children:e.jsx(n,{...d.billingLearnMore})})]})]}),e.jsx("hr",{})]})})}function Je({isOpen:s,onDropdownOpen:i}){const[a,t]=x.useState(!1),l=M(),c=I(),o=E(),{data:r}=D(),[u,j]=x.useState(!1),f=function(){j(!u)},[g,v]=x.useState(!1),p=function(){v(!g)},b=q("1318146997")?.value;if(!o||!o.isTeam()||!r)return;const S=async()=>{t(!0);try{const y=await X.fetchCustomerPortalUrl(o?.getWorkspaceId());location.href=y.url}catch{c.warning(l.formatMessage(d.stripeErrorWarning),{hasCloseButton:!0})}finally{t(!1)}},N=r?.billing_period==="monthly"?C.FLEXIBLE:C.ANNUAL;return e.jsxs(ae,{open:s,size:"default",triggerButton:e.jsx(Y,{color:"secondary",onClick:i,icon:pe,children:e.jsx(n,{...d.manageLicenseBtn})}),children:[e.jsx(P.Item,{icon:he,onClick:S,children:e.jsx(n,{...d.managePaymentMethod})}),r.will_renew&&b&&e.jsx(P.Item,{icon:je,onClick:()=>{p()},children:e.jsx(n,{...d.manageBillingSchedule})}),r.active_until!=null&&e.jsx(Te,{isOpen:g,onClose:p,initialTeamBillingType:N,renewalDate:new Date(r.active_until),accountId:o.id}),r?.will_renew&&e.jsx(P.Separator,{}),r?.will_renew&&e.jsx(P.Item,{icon:Me,color:"danger",onClick:()=>{f()},children:e.jsx(n,{...d.cancelSubscriptionBtn})}),e.jsx(ke,{isOpen:u,onClose:f})]})}function es({invoice:s}){const i=s?.status_transitions.paid_at!=null&&new Date(s.status_transitions.paid_at*1e3),a=s&&new Date(s.due_date*1e3),t=s&&new Date(s.created*1e3);return e.jsxs(Pe,{className:"items-center",children:[e.jsxs("div",{className:"flex grow flex-col gap-1",children:[e.jsx("span",{children:t?e.jsx(n,{...d.invoiceName,values:{createdDate:t}}):e.jsx(n,{...d.defaultInvoiceName})}),s?.paid&&i!=null?e.jsx("div",{className:"text-xs text-token-text-secondary",children:e.jsx(n,{...d.paidInvoice,values:{invoiceDate:i}})}):s&&e.jsx("div",{className:"text-xs text-green-600",children:e.jsx(n,{...d.upcomingInvoice,values:{invoiceDate:a}})})]}),e.jsx("a",{href:s?.hosted_invoice_url,className:T("mx-auto",s?.hosted_invoice_url==null&&"cursor-not-allowed opacity-20"),target:"_blank",rel:"noreferrer",children:e.jsx(ye,{className:"icon-sm text-green-600"})})]})}function ss(){const[s,i]=x.useState({limit:5}),{data:a,isError:t}=Ge(s),l=s.startingAfter!=null||s.endingBefore!=null&&a?.has_more,c=s.endingBefore!=null||a?.has_more&&s.endingBefore==null;return t||a==null?e.jsxs(z,{children:[e.jsx(A,{children:e.jsx(n,{...d.invoicesTitle})}),e.jsx(xe,{children:e.jsx(n,{...d.noInvoices})})]}):e.jsxs(z,{children:[e.jsx(A,{children:e.jsx(n,{...d.invoicesTitle})}),e.jsx(Ie,{children:a.data.map(o=>e.jsx(es,{invoice:o},o.id))}),e.jsxs("div",{className:"flex",children:[l&&e.jsx("button",{onClick:()=>{a&&i(o=>({...o,endingBefore:a.data[0].id,startingAfter:void 0}))},children:e.jsx(ve,{className:"icon-sm"})}),e.jsx("div",{className:"flex-grow"}),c&&e.jsx("button",{onClick:()=>{a&&i(o=>({...o,startingAfter:a.data[a.data.length-1].id,endingBefore:void 0}))},children:e.jsx(be,{className:"icon-sm"})})]})]})}function as({isTeam:s,accountId:i}){const{data:a,isLoading:t,isError:l}=D();return l||!a||t||!a.billing_period||!a.active_until?null:e.jsx($e,{numInUse:a.seats_in_use,numAllocated:a.seats_entitled,isTeam:s,subscriptionWillRenew:a.will_renew,subscriptionBillingPeriod:a.billing_period,subscriptionRenewalDate:new Date(a.active_until),accountId:i})}function ts(){const i=ge(t=>t.currentWorkspace)?.organizationId,a=M();return i===void 0?null:e.jsxs(e.Fragment,{children:[e.jsx(Se,{title:a.formatMessage(d.title),subtitle:a.formatMessage(d.subtitle)}),e.jsx(Ne,{children:e.jsxs(Ce,{children:[e.jsx(Ze,{}),e.jsx(ss,{})]})})]})}const d=_({title:{id:"organizationBillingInfo.title.1",defaultMessage:"Billing"},subtitle:{id:"organizationBillingInfo.subtitle",defaultMessage:"Only workspace owners can view and change these settings"},planTitle:{id:"organizationBillingInfo.planTitle",defaultMessage:"Plan"},activeEnterpriseLicense:{id:"organizationBillingInfo.activeEnterpriseLicense",defaultMessage:"Enterprise License"},pendingEnterpriseLicense:{id:"organizationBillingInfo.pendingEnterpriseLicense",defaultMessage:"Enterprise License (pending activation)"},resellerHostedEnterpriseLicense:{id:"organizationBillingInfo.resellerHostedEnterpriseLicense",defaultMessage:"Enterprise License"},activeEduLicense:{id:"organizationBillingInfo.activeEduLicense",defaultMessage:"Edu License"},pendingEduLicense:{id:"organizationBillingInfo.pendingEduLicense",defaultMessage:"Edu License (pending activation)"},resellerHostedEduLicense:{id:"organizationBillingInfo.resellerHostedEduLicense",defaultMessage:"Edu License"},activeTeamLicense:{id:"organizationBillingInfo.activeTeamLicense",defaultMessage:"Team License"},activeTeamLicenseNonProfitOrg:{id:"organizationBillingInfo.activeTeamLicenseNonProfitOrg",defaultMessage:"Team License (Non Profit Discount)"},pendingTeamLicense:{id:"organizationBillingInfo.pendingTeamLicense",defaultMessage:"Team License (pending activation)"},licenseExpiry:{id:"organizationBillingInfo.licenseExpiry",defaultMessage:"Active until {expiryDate, date, long}"},renewalDate:{id:"organizationBillingInfo.renewalDate",defaultMessage:"Renews on {expiryDate, date, long}"},deactivateDate:{id:"organizationBillingInfo.deactivateDate",defaultMessage:"Deactivates on {expiryDate, date, long}"},seatsTitle:{id:"organizationBillingInfo.seatsTitle",defaultMessage:"Seats"},seatsInUse:{id:"organizationBillingInfo.seatsInUse",defaultMessage:"{numSeats} in use ({numSeatsPct})"},invoicesTitle:{id:"organizationBillingInfo.invoicesTitle",defaultMessage:"Invoices"},invoiceName:{id:"organizationBillingInfo.invoiceName",defaultMessage:"Invoice: {createdDate, date, long}"},defaultInvoiceName:{id:"organizationBillingInfo.defaultInvoiceName",defaultMessage:"Invoice"},paidInvoice:{id:"organizationBillingInfo.paidInvoice",defaultMessage:"Paid: {invoiceDate, date, long}"},upcomingInvoice:{id:"organizationBillingInfo.upcomingInvoice",defaultMessage:"Due: {invoiceDate, date, long}"},noInvoices:{id:"organizationBillingInfo.noInvoices",defaultMessage:"No invoices found"},manageSubscription:{id:"organizationBillingInfo.manageSubscription",defaultMessage:"Manage subscription"},cancelSubscriptionBtn:{id:"organizationBillingInfo.cancelSubscriptionBtn",defaultMessage:"Cancel subscription"},manageLicenseBtn:{id:"organizationBillingInfo.manageLicenseBtn",defaultMessage:"Manage license"},managePaymentMethod:{id:"organizationBillingInfo.managePaymentMethod",defaultMessage:"Payment method"},manageBillingSchedule:{id:"organizationBillingInfo.manageSchedule",defaultMessage:"Billing schedule"},stripeErrorWarning:{id:"organizationBillingInfo.stripeErrorWarning",defaultMessage:"Error loading account information"},teamsAutochargeMessage:{id:"organizationBillingInfo.teamsAutochargeMessage",defaultMessage:"Your additional seats will be included on your next invoice."},billingLearnMore:{id:"organizationBillingInfo.billingLearnMore",defaultMessage:"Learn more"}});function hs(){return we(),e.jsx(ts,{})}export{hs as default};
//# sourceMappingURL=gj5peempksp57at0.js.map
