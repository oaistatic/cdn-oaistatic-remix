const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ctx3oywitytb5mfd.js","assets/813n9w6xsthevnqe.js","assets/h2ot8b85cve7rfg1.js","assets/root-bkpln5bd.css","assets/cvslyloecw0ll845.js","assets/conversation-small-ile61fj8.css","assets/im3s94nxr72xb8th.js","assets/d3y72ugnrmac5z1v.js","assets/o86m8jbro9d8t6rj.js","assets/fzrn137102spawew.js","assets/e9lafxuzyeh4418f.js","assets/l3hejy9jng0abm4k.js","assets/jh2rya3zgv1osppy.js","assets/c4bxzbp1808foto4.js"])))=>i.map(i=>d[i]);
import{aL as W,G as P,s as J,L as R,r as h,S as v,P as m,d as b,m as e,aD as C,gB as ee,aS as n,F as N,aH as te,aI as se,H as ae,bf as ne,Z as T,Y as re,aE as D,a3 as ie,f3 as oe,c5 as le,ap as ce,b0 as G,gC as de,bp as ue,bV as me,bW as ge,gi as fe,aY as O}from"./813n9w6xsthevnqe.js";import{dy as k,dz as pe,dA as he,ak as xe,dB as B,U as S,l as H,dC as ye,dD as ve,dE as be,dF as je,ai as Me,aj as ke}from"./cvslyloecw0ll845.js";import{U as w,a as Ce}from"./kkpy24kni3zeqpn6.js";import{b as Te,aU as q,aV as _e}from"./h2ot8b85cve7rfg1.js";import{m as Ie}from"./do3noacblfokxtip.js";function Pe({showFreeTrialLoadingPayment:t,handleGetPaymentLink:r}){const a=P(),s=()=>{t||(k(!0),r())},l=M=>{M.stopPropagation(),pe(!0),he(!0)},{data:o,isLoading:u,isSuccess:i}=J({queryKey:["claimedReferralInvite"],queryFn:()=>R.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),c=o?.invite_code,[x,j]=h.useState(!1);if(h.useEffect(()=>{c&&!x&&i&&(j(!0),v.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),m.logEvent(b.chatgptReferralShowClaimedSidebartMenuPromo))},[c,j,x,i]),!c||u||!i)return null;const g=c.invite_metadata.invite_data,y=g?.referral_trial_duration_months?g?.referral_trial_duration_months>1?a.formatMessage(I.monthsOfBenefit,{referralTrialDurationMonths:g?.referral_trial_duration_months}):a.formatMessage(I.daysOfBenefit,{referralTrialDurationDays:g?.referral_trial_duration_days}):null;return e.jsx(Ie.div,{className:C("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(Ne,{className:C(t&&"opacity-75"),onClick:s,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(ee,{className:"icon-sm shrink-0"}),e.jsx(n,{...I.freeTrialCta,values:{duration:y}})]}),!t&&e.jsx(Te,{onClick:l,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const Ne=W.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,I=N({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}}),z=te(()=>se(()=>import("./ctx3oywitytb5mfd.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])));function Se(){const t=P(),r=ae(),a=ne(),s=T(),l=!s,o=s?.hasPaidSubscription()??!1,u=s?.hasClaimedFreeTrial()??!1,i=h.useMemo(()=>s?.subscriptionAnalyticsParams,[s]),c=xe(),x=async()=>{k(!0),m.logEvent(b.clickAccountPaymentCheckout,i);try{const f=await R.getCheckoutLink(a);window.location.href=f.url}catch{r.warning(t.formatMessage(d.paymentErrorWarning),{hasCloseButton:!0}),k(!1)}finally{}},j=()=>{y||(k(!0),x())},g=B(f=>f.didCloseFreeTrial),y=B(f=>f.showFreeTrialLoadingPayment),M=!g&&u,K=s?.wasPaidCustomer()??!1;let _=s?.isWorkspaceAccount()??!1;const $=s?.hasPaidSubscription()??!1,F=s?.isPlus()??!1,{doesUserHaveAnyAccountsWithPlusFeatures:A}=re(),{layer:V}=D("2670443078");let U=F;!_&&!F&&A&&V.get("is_gating_fix_enabled",!1)&&(U=A,_=!0);const Y=!l&&!_,Q=ie(),X=()=>{m.logEvent(b.clickSidebarAccountPaymentMenuItem,i),ye(Q,"Sidebar account payment menu item")},Z=oe("3905879930");var E=s?.isTeam()??!1,L=!1;return E&&(L=Z.config.get("enabled",!1)),e.jsxs(e.Fragment,{children:[!o&&M&&e.jsx(Pe,{showFreeTrialLoadingPayment:y,handleGetPaymentLink:x}),E?L?e.jsx(Fe,{}):e.jsx(we,{}):null,Y&&e.jsx(w,{onClick:M?j:X,className:c?"":"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(Ae,{wasPaidCustomer:K,showFreeTrialLoadingPayment:y,hasPlusSubscription:U,hasPaidSubscription:$})})})})]})}const we=()=>{const t=T();return e.jsxs(e.Fragment,{children:[e.jsx(w,{onClick:()=>{S.openModal(H.InviteUsersToWorkspace),m.logEvent(b.accountMemberInviteButton,{location:"payment-menu-click"}),v.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"payment-menu-click",text:"AddMembers",step:"OpenModal"})},className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(q,{className:"icon-sm shrink-0"})}),e.jsx(n,{...d.inviteMembers})]})})}),t!=null?e.jsx(z,{workspace:t}):null]})},Fe=()=>{const t=T();return e.jsxs(e.Fragment,{children:[e.jsx(w,{onClick:()=>{S.openModal(H.InviteUsersToWorkspace),m.logEvent(b.accountMemberInviteButton,{location:"payment-menu-click"}),v.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"payment-menu-click",text:"AddTeammatesWithInfo",step:"OpenModal"})},className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(q,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(n,{...d.addTeammates})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:e.jsx(n,{...d.addTeammatesUpsell})})]})})]})})})}),t!=null?e.jsx(z,{workspace:t}):null]})},Ae=({wasPaidCustomer:t,showFreeTrialLoadingPayment:r,hasPlusSubscription:a,hasPaidSubscription:s})=>r?e.jsx(le,{className:"icon-sm shrink-0"}):s&&!a?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(_e,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:t?e.jsx(n,{...d.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a?e.jsx(n,{...d.createATeamWorkspace}):!s&&e.jsx(n,{...d.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:a?e.jsx(n,{...d.upgradeToTeamUpsell}):!s&&e.jsx(n,{...d.upgradeToPlusUpsell})})]})})]}),d=N({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},addTeammates:{id:"PaymentMenuItems.addTeammates.0",defaultMessage:"Add teammates"},addTeammatesUpsell:{id:"PaymentMenuItems.addTeammatesUpsell.0",defaultMessage:"Invite coworkers to ChatGPT"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function Ge({navHeader:t,children:r,className:a}){const s=P(),l=h.useRef(null),o=ce(),{isUnauthenticated:u}=G(),{layer:i}=D("1578749296"),c=i.get("is_sticky_toggle_off",!1);return h.useEffect(()=>{c&&S.toggleDesktopNavCollapsed()},[c]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(de,{asChild:!0,children:e.jsx("h2",{children:e.jsx(n,{...p.chatHistoryLabel})})}),e.jsxs("nav",{className:C("flex h-full w-full flex-col px-3",a),"aria-label":s.formatMessage(p.chatHistoryLabel),children:[t,e.jsx(Le,{ref:l,$disableScroll:o&&!u,children:r}),e.jsx(ue,{children:e.jsx(Ue,{})})]})]})})}function Ue(){const[t]=h.useState(()=>{const o=me.getCookie(ge.Workspace);return typeof o=="string"&&o!==fe}),r=T(),a=r?.data==null,{isUnauthenticated:s}=G(),{openSettings:l}=ve();return t&&a||!r?null:s?e.jsx(Ee,{}):e.jsxs("div",{className:C("flex flex-col py-2 empty:hidden dark:border-white/20"),children:[e.jsx(be,{}),e.jsx(Se,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(Ce,{onClickSettings:()=>l()})})})]})}const Ee=()=>{const t=je(),r=Me(),a=ke(p.unauthSignupCta),s=()=>{r({authType:"login",callback:i=>{m.logLogInButtonClicked({location:"Sidebar bottom unit",provider:i}),v.logEvent("chatgpt_sidebar_login_button_clicked")}})},l=()=>{r({authType:"signup",callback:i=>{m.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:i}),v.logEvent("chatgpt_sidebar_signup_button_clicked")}})},o=e.jsx(O,{as:"button",size:"medium",color:t?"secondary":"primary","data-testid":"signup-button",onClick:l,children:e.jsx(n,{...a})}),u=e.jsx(O,{as:"button",size:"medium",color:t?"primary":"secondary","data-testid":"login-button",onClick:s,children:e.jsx(n,{...p.unauthLoginCta})});return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(n,{...t?p.logInOrSignUp:p.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:t?[u,o]:[o,u]})]})},Le=W.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:t})=>t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,p=N({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}});export{Ge as N,Se as P,Ee as U};
//# sourceMappingURL=mh8pkesoon2si38m.js.map
