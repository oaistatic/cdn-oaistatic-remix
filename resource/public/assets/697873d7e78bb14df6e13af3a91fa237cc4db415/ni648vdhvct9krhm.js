const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/oapc2n910p0d35m2.js","assets/dfm2yceao9m2ilo9.js","assets/root-mg58v26q.css","assets/o7wih49jz3zkdcav.js","assets/conversation-small-ile61fj8.css","assets/esqnlerutxmalqlr.js","assets/d3y72ugnrmac5z1v.js","assets/d46bewojne6rm7kd.js","assets/fzrn137102spawew.js","assets/e9lafxuzyeh4418f.js","assets/zbtw2a6a3r9x82tu.js","assets/oz9mhv8xwj12nnpw.js","assets/c4bxzbp1808foto4.js"])))=>i.map(i=>d[i]);
import{aJ as L,L as I,t as V,W as O,r as p,V as M,P as h,d as P,m as e,aE as T,gJ as J,b6 as r,bc as Q,K as w,b3 as X,b4 as Y,O as Z,bF as ee,a5 as N,ee as ae,a4 as te,ca as E,a9 as se,co as ne,aw as re,bq as B,gK as ie,N as oe,cf as le,cg as ce,go as de,bn as F}from"./dfm2yceao9m2ilo9.js";import{eg as j,eh as ue,ei as me,ej as A,U as W,K as ge,ek as fe,el as pe,em as he,en as xe,eo as ye,ep as ve,aD as be,aE as je}from"./o7wih49jz3zkdcav.js";import{U as R,d as Me}from"./oj002yr1cv5905d0.js";import{m as Pe}from"./ccrdffu4uq6bo5k0.js";function Te({showFreeTrialLoadingPayment:a,handleGetPaymentLink:n}){const s=I(),t=()=>{a||(j(!0),n())},l=b=>{b.stopPropagation(),ue(!0),me(!0)},{data:o,isLoading:d,isSuccess:i}=V({queryKey:["claimedReferralInvite"],queryFn:()=>O.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),c=o?.invite_code,[x,v]=p.useState(!1);if(p.useEffect(()=>{c&&!x&&i&&(v(!0),M.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),h.logEvent(P.chatgptReferralShowClaimedSidebartMenuPromo))},[c,v,x,i]),!c||d||!i)return null;const m=c.invite_metadata.invite_data,y=m?.referral_trial_duration_months?m?.referral_trial_duration_months>1?s.formatMessage(k.monthsOfBenefit,{referralTrialDurationMonths:m?.referral_trial_duration_months}):s.formatMessage(k.daysOfBenefit,{referralTrialDurationDays:m?.referral_trial_duration_days}):null;return e.jsx(Pe.div,{className:T("relative",{"cursor-progress opacity-50":a}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(Ce,{className:T(a&&"opacity-75"),onClick:t,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(J,{className:"icon-sm shrink-0"}),e.jsx(r,{...k.freeTrialCta,values:{duration:y}})]}),!a&&e.jsx(Q,{onClick:l,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const Ce=L.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,k=w({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}}),ke=X(()=>Y(()=>import("./oapc2n910p0d35m2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])));function Ie(){const a=I(),n=Z(),s=ee(),t=N(),l=!t,o=t?.hasPaidSubscription()??!1,d=t?.hasClaimedFreeTrial()??!1,i=p.useMemo(()=>t?.subscriptionAnalyticsParams,[t]),c=ae(),x=async()=>{j(!0),h.logEvent(P.clickAccountPaymentCheckout,i);try{const g=await O.getCheckoutLink(s);window.location.href=g.url}catch{n.warning(a.formatMessage(u.paymentErrorWarning),{hasCloseButton:!0}),j(!1)}finally{}},v=()=>{y||(j(!0),x())},m=A(g=>g.didCloseFreeTrial),y=A(g=>g.showFreeTrialLoadingPayment),b=!m&&d,D=t?.wasPaidCustomer()??!1;let C=t?.isWorkspaceAccount()??!1;const G=t?.hasPaidSubscription()??!1,S=t?.isPlus()??!1,{doesUserHaveAnyAccountsWithPlusFeatures:_}=te(),{layer:K}=E("2670443078");let U=S;!C&&!S&&_&&K.get("is_gating_fix_enabled",!1)&&(U=_,C=!0);const H=!l&&!C,q=se(),$=()=>{h.logEvent(P.clickSidebarAccountPaymentMenuItem,i),he(q,"Sidebar account payment menu item")};var z=t?.isTeam()??!1;return e.jsxs(e.Fragment,{children:[!o&&b&&e.jsx(Te,{showFreeTrialLoadingPayment:y,handleGetPaymentLink:x}),z?e.jsx(we,{}):null,H&&e.jsx(R,{onClick:b?v:$,className:c?"":"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(Ne,{wasPaidCustomer:D,showFreeTrialLoadingPayment:y,hasPlusSubscription:U,hasPaidSubscription:G})})})})]})}const we=()=>{const a=N();return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{W.openModal(ge.InviteUsersToWorkspace),h.logEvent(P.accountMemberInviteButton,{location:"payment-menu-click"}),M.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"payment-menu-click",text:"AddTeammatesWithInfo",step:"OpenModal"})},className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(fe,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(r,{...u.addTeammates})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:e.jsx(r,{...u.addTeammatesUpsell})})]})})]})})})}),a!=null?e.jsx(ke,{workspace:a}):null]})},Ne=({wasPaidCustomer:a,showFreeTrialLoadingPayment:n,hasPlusSubscription:s,hasPaidSubscription:t})=>n?e.jsx(ne,{className:"icon-sm shrink-0"}):t&&!s?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(pe,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:a?e.jsx(r,{...u.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:s?e.jsx(r,{...u.viewPlans}):!t&&e.jsx(r,{...u.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:s?e.jsx(r,{...u.upgradeToProOrTeamUpsell}):!t&&e.jsx(r,{...u.upgradeToPlusUpsell})})]})})]}),u=w({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},viewPlans:{id:"PaymentMenuItems.viewPlans",defaultMessage:"View plans"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToProOrTeamUpsell:{id:"PaymentMenuItems.upgradeToProOrTeamUpsell",defaultMessage:"Unlimited access, team features, and more"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},addTeammates:{id:"PaymentMenuItems.addTeammates.0",defaultMessage:"Add teammates"},addTeammatesUpsell:{id:"PaymentMenuItems.addTeammatesUpsell.0",defaultMessage:"Invite coworkers to ChatGPT"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function Ee({navHeader:a,children:n,className:s}){const t=I(),l=p.useRef(null),o=re(),{isUnauthenticated:d}=B(),{layer:i}=E("1578749296"),c=i.get("is_sticky_toggle_off",!1);return p.useEffect(()=>{c&&W.toggleDesktopNavCollapsed()},[c]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(ie,{asChild:!0,children:e.jsx("h2",{children:e.jsx(r,{...f.chatHistoryLabel})})}),e.jsxs("nav",{className:T("flex h-full w-full flex-col px-3",s),"aria-label":t.formatMessage(f.chatHistoryLabel),children:[a,e.jsx(Ue,{ref:l,$disableScroll:o&&!d,children:n}),e.jsx(oe,{children:e.jsx(Se,{})})]})]})})}function Se(){const[a]=p.useState(()=>{const o=le.getCookie(ce.Workspace);return typeof o=="string"&&o!==de}),n=N(),s=n?.data==null,{isUnauthenticated:t}=B(),{openSettings:l}=xe();return a&&s||!n?null:t?e.jsx(_e,{}):e.jsxs("div",{className:T("flex flex-col py-2 empty:hidden dark:border-white/20"),children:[e.jsx(ye,{}),e.jsx(Ie,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(Me,{onClickSettings:()=>l()})})})]})}const _e=()=>{const a=ve(),n=be(),s=je(f.unauthSignupCta),t=()=>{n({authType:"login",callback:i=>{h.logLogInButtonClicked({location:"Sidebar bottom unit",provider:i}),M.logEvent("chatgpt_sidebar_login_button_clicked")}})},l=()=>{n({authType:"signup",callback:i=>{h.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:i}),M.logEvent("chatgpt_sidebar_signup_button_clicked")}})},o=e.jsx(F,{as:"button",size:"medium",color:a?"secondary":"primary","data-testid":"signup-button",onClick:l,children:e.jsx(r,{...s})}),d=e.jsx(F,{as:"button",size:"medium",color:a?"primary":"secondary","data-testid":"login-button",onClick:t,children:e.jsx(r,{...f.unauthLoginCta})});return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(r,{...a?f.logInOrSignUp:f.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(r,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:a?[d,o]:[o,d]})]})},Ue=L.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:a})=>a?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,f=w({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}});export{Ee as N,Ie as P,_e as U};
//# sourceMappingURL=ni648vdhvct9krhm.js.map