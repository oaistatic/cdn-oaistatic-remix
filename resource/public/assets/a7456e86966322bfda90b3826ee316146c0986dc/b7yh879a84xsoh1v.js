const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/fy9ugg7vwsd4rw7v.js","assets/gghzs582a65dvm3m.js","assets/e34jsxd5qw5romn0.js","assets/root-eakuwlaq.css","assets/pd094ob9wacofnvk.js","assets/conversation-small-eplmind9.css","assets/hca8izdud0kbqirn.js","assets/d3y72ugnrmac5z1v.js","assets/9iu40ylckxf6thie.js","assets/e9lafxuzyeh4418f.js","assets/hxxw62av1uep63qt.js"])))=>i.map(i=>d[i]);
import{r as g,S as k,ad as me,l as e,bw as he,aU as pe,aW as xe,aX as be,aZ as ve,m as w,W as N,P as f,b5 as P,a5 as l,bz as Se,a6 as T,a7 as q,a1 as R,aw as K,Z as B,V as C,cK as je,aF as ye,aG as Ce,aM as Me,bO as V,aP as _,d$ as ke,bi as X,bq as Z,f6 as J,b0 as we,ek as Ne,cj as Ie,f7 as Pe,b7 as Te,T as _e,U as Fe,e3 as Ue,bS as Le,N as D}from"./gghzs582a65dvm3m.js";import{w as F,X as v,fE as Ee,l as Q,u as O,m as Y,fF as I,fG as Re,fH as Be,fI as z,fJ as Oe,fK as A,aJ as ee,o as Ae,aS as se,e1 as He,fL as We,ec as G,ea as $e,e6 as De}from"./pd094ob9wacofnvk.js";import{bq as ze,k as Ge,bv as qe,bw as te,a8 as Ke,bx as Ve,aR as Xe,aO as Ze}from"./e34jsxd5qw5romn0.js";import{N as ae,c as Je}from"./egu0eqrtgme3ss9j.js";import{m as ne}from"./knl5287dkf7ic29t.js";import{B as Qe,D as L}from"./ljnuyiuz0czms6ve.js";import{u as Ye}from"./inxv3p5hyolpb7jk.js";import{E as es}from"./bbie8a5uhoq6uzh7.js";function ss(){const{conversations:s}=Ye(),n=g.useMemo(()=>s.length<=5?!1:k.checkGate("4277113861"),[s]);return{canUseHistoryIsCollapsible:n,isCollapsible:n&&s.length>5,recentConversationLimit:5}}function Is({onClick:s,className:n,...a}){return e.jsx(Ee,{onClick:s,className:w(n,"flex-grow overflow-hidden"),...a})}function Ps({onNewChatButtonClick:s}){const{isUnauthenticated:n,isLoading:a}=N();return a||!n?null:e.jsx(ae,{className:"mr-3",onClick:()=>{f.logNewChatButtonClicked({location:"Mobile header"}),s()}})}function Ts({onNewChatButtonClick:s}){const{isUnauthenticated:n,isLoading:a}=N(),t=Q();return a?null:n?t?e.jsx(as,{}):e.jsx(ts,{}):e.jsx(ae,{onClick:()=>{f.logNewChatButtonClicked({location:"Mobile header"}),s()}})}function ts(){const s=O(),n=Y(ie.signUpButtonText);return e.jsx(P,{as:"button",size:"small",color:"primary",onClick:()=>{s({authType:"signup",callback:a=>{f.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:a})}})},children:e.jsx(l,{...n})})}function as(){const s=O();return e.jsx(P,{as:"button",size:"small",color:"primary",onClick:()=>{s({authType:"login",callback:n=>{f.logLogInButtonClicked({location:"Mobile Chat Stage Header",provider:n})}})},"data-testid":"mobile-login-button",children:e.jsx(l,{...Se.logInButtonText})})}function ns({onClick:s}){return e.jsxs("button",{type:"button",className:"inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:s,"data-testid":"open-sidebar-button",children:[e.jsx("span",{className:"sr-only",children:e.jsx(l,{...ie.openSidebar})}),e.jsx(ze,{className:"icon-lg mx-2 text-token-text-secondary"})]})}const is=({onClickOpenSidebar:s,children:n,showNavSidebar:a,leftContent:t,rightContent:c,bottomContent:i})=>{const u=F(m=>m.activeSidebar),o=me().asPath;return g.useEffect(()=>{u==="popover-nav"&&v.setActiveSidebar(!1)},[o]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",children:[(a||t)&&e.jsxs("div",{className:"no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",children:[a&&e.jsx(ns,{onClick:s}),t]}),e.jsx("div",{className:"no-draggable",children:n}),c&&e.jsx("div",{className:"no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",children:c})]}),i&&e.jsx("div",{className:"no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",children:i})]})};function rs({isPopoverOnDesktop:s=!1,isExpanded:n=!1,children:a}){const t=he();return e.jsxs(e.Fragment,{children:[!t||s?e.jsx(ls,{children:a}):null,e.jsx(os,{isExpanded:!s&&n,children:a})]})}function os({isExpanded:s,children:n}){const a=g.useRef(null);return e.jsx(ne.div,{className:"flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:a,initial:!1,animate:{width:s?"260px":0,transition:{type:"spring",bounce:.12,duration:.64}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(s||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:"h-full w-[260px]",children:e.jsx("div",{className:"flex h-full min-h-0 flex-col",children:n})})})}function ls({children:s}){const n=F(a=>a.activeSidebar);return e.jsx(pe,{open:n==="popover-nav",onOpenChange:a=>{a||v.setActiveSidebar(!1)},children:e.jsxs(xe,{children:[e.jsx(be,{className:"fixed inset-0 z-10 bg-gray-50/50 radix-state-open:animate-show dark:bg-black/50"}),e.jsx(ve,{className:"fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none radix-state-closed:animate-sidebarHide radix-state-open:animate-sidebarShow dark:border-gray-800",children:s})]})})}const ie=T({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}});function cs({showFreeTrialLoadingPayment:s,handleGetPaymentLink:n}){const a=R(),t=()=>{s||(I(!0),n())},c=y=>{y.stopPropagation(),Re(!0),Be(!0)},{data:i,isLoading:u,isSuccess:r}=K({queryKey:["claimedReferralInvite"],queryFn:()=>B.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),o=i==null?void 0:i.invite_code,[m,p]=g.useState(!1);if(g.useEffect(()=>{o&&!m&&r&&(p(!0),k.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),f.logEvent(C.chatgptReferralShowClaimedSidebartMenuPromo))},[o,p,m,r]),!o||u||!r)return null;const d=o.invite_metadata.invite_data,S=d!=null&&d.referral_trial_duration_months?(d==null?void 0:d.referral_trial_duration_months)>1?a.formatMessage(E.monthsOfBenefit,{referralTrialDurationMonths:d==null?void 0:d.referral_trial_duration_months}):a.formatMessage(E.daysOfBenefit,{referralTrialDurationDays:d==null?void 0:d.referral_trial_duration_days}):null;return e.jsx(ne.div,{className:w("relative",{"cursor-progress opacity-50":s}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(ds,{className:w(s&&"opacity-75"),onClick:t,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(je,{className:"icon-sm shrink-0"}),e.jsx(l,{...E.freeTrialCta,values:{duration:S}})]}),!s&&e.jsx(Ge,{onClick:c,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const ds=q.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,E=T({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}}),us=ye(()=>Ce(()=>import("./fy9ugg7vwsd4rw7v.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])));function fs(){const s=R(),n=Me(),a=V(),t=_(),c=!t,i=(t==null?void 0:t.hasPaidSubscription())??!1,u=(t==null?void 0:t.hasClaimedFreeTrial())??!1,r=g.useMemo(()=>t==null?void 0:t.subscriptionAnalyticsParams,[t]),o=async()=>{I(!0),f.logEvent(C.clickAccountPaymentCheckout,r);try{const x=await B.getCheckoutLink(a);window.location.href=x.url}catch{n.warning(s.formatMessage(b.paymentErrorWarning),{hasCloseButton:!0}),I(!1)}finally{}},m=()=>{d||(I(!0),o())},p=z(x=>x.didCloseFreeTrial),d=z(x=>x.showFreeTrialLoadingPayment),S=!p&&u,y=(t==null?void 0:t.wasPaidCustomer())??!1;let j=(t==null?void 0:t.isWorkspaceAccount())??!1;const U=(t==null?void 0:t.hasPaidSubscription())??!1,h=(t==null?void 0:t.isPlus())??!1,{doesUserHaveAnyAccountsWithPlusFeatures:H}=ke(),{layer:le}=X("2670443078");let W=h;!j&&!h&&H&&le.get("is_gating_fix_enabled",!1)&&(W=H,j=!0);const ce=!c&&!j&&!Ne,de=Z(),ue=()=>{f.logEvent(C.clickSidebarAccountPaymentMenuItem,r),Ae(de,"Sidebar account payment menu item")},{setShowReferralInviteModal:$}=Oe(x=>({setShowReferralInviteModal:x.setShowReferralInviteModal})),fe=g.useCallback(()=>{k.logEvent("chatgpt_referral_invite_sidebar_clicked"),f.logEvent(C.chatgptReferralInviteSidebarClicked,r),$(!0,()=>{f.logEvent(C.clickSidebarAccountPaymentMenuItem,r)})},[r,$]),ge=(t==null?void 0:t.isTeam())??!1;return e.jsxs(e.Fragment,{children:[((a==null?void 0:a.includes(J))||i)&&e.jsx(hs,{analyticsParams:r,handleReferralInvite:fe}),!i&&S&&e.jsx(cs,{showFreeTrialLoadingPayment:d,handleGetPaymentLink:o}),ge&&e.jsx(ms,{}),ce&&e.jsx(A,{onClick:S?m:ue,className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(gs,{wasPaidCustomer:y,showFreeTrialLoadingPayment:d,hasPlusSubscription:W,hasPaidSubscription:U})})})})]})}const gs=({wasPaidCustomer:s,showFreeTrialLoadingPayment:n,hasPlusSubscription:a,hasPaidSubscription:t})=>n?e.jsx(we,{className:"icon-sm shrink-0"}):t&&!a?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(qe,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:s?e.jsx(l,{...b.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a?e.jsx(l,{...b.createATeamWorkspace}):!t&&e.jsx(l,{...b.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:a?e.jsx(l,{...b.upgradeToTeamUpsell}):!t&&e.jsx(l,{...b.upgradeToPlusUpsell})})]})})]}),ms=()=>{const s=_();return e.jsxs(e.Fragment,{children:[e.jsx(A,{onClick:()=>{v.openModal(ee.InviteUsersToWorkspace)},className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(te,{className:"icon-sm shrink-0"})}),e.jsx(l,{...b.inviteMembers})]})})}),s!=null?e.jsx(us,{workspace:s}):null]})},hs=({analyticsParams:s,handleReferralInvite:n})=>{const a=V(),t=(a==null?void 0:a.includes(J))??!1,c=_(),{data:i}=K({queryKey:["referralInvites"],queryFn:()=>B.getEligibleReferralInvites(),enabled:t}),u=c&&!c.isOrWasPaidCustomer()&&!c.hasPlusFeatures(),r=(i==null?void 0:i.invites_remaining)&&(i==null?void 0:i.invites_remaining)>0,o=u&&r,[m,p]=g.useState(!1);return g.useEffect(()=>{o&&!m&&(p(!0),k.logEvent("chatgpt_referral_show_sidebar_menu_item"),f.logEvent(C.chatgptReferralShowSidebarMenuItem,s))},[o,p,m,s]),o?e.jsx(A,{onClick:n,className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(te,{className:"icon-sm shrink-0"})}),e.jsx(l,{...b.inviteReferral})]})})}):null},b=T({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function _s({navHeader:s,children:n,className:a}){const t=R(),c=g.useRef(null),i=Ie(),{isUnauthenticated:u}=N(),{layer:r}=X("1578749296"),o=r.get("is_sticky_toggle_off",!1);return g.useEffect(()=>{o&&v.openSidebar()},[o]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(Pe,{asChild:!0,children:e.jsx("h2",{children:e.jsx(l,{...M.chatHistoryLabel})})}),e.jsxs("nav",{className:w("flex h-full w-full flex-col px-3",a),"aria-label":t.formatMessage(M.chatHistoryLabel),children:[s,e.jsx(xs,{ref:c,$disableScroll:i&&!u,children:n}),e.jsx(Te,{children:e.jsx(ps,{})})]})]})})}function ps(){const[s]=g.useState(()=>{const r=_e.getCookie(Fe.Workspace);return typeof r=="string"&&r!==Ue}),n=_(),a=(n==null?void 0:n.data)==null,{isUnauthenticated:t}=N(),{openSettings:c}=se(),{isCollapsible:i}=ss(),u=F(r=>r.isHistoryCollapsed);return s&&a||!n?null:t?e.jsx(re,{}):e.jsxs("div",{className:w("flex flex-col py-2 empty:hidden dark:border-white/20",i&&"-mx-3 border-t border-token-border-sharp px-3"),children:[i&&!u&&e.jsx(He,{type:"less",onClick:v.toggleHistoryCollapsed}),e.jsx(We,{}),e.jsx(fs,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(Je,{onClickSettings:()=>c()})})})]})}const re=()=>{const s=Q(),n=O(),a=Y(M.unauthSignupCta),t=()=>{n({authType:"login",callback:r=>{f.logLogInButtonClicked({location:"Sidebar bottom unit",provider:r}),k.logEvent("chatgpt_sidebar_login_button_clicked")}})},c=()=>{n({authType:"signup",callback:r=>{f.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:r}),k.logEvent("chatgpt_sidebar_signup_button_clicked")}})},i=e.jsx(P,{as:"button",size:"medium",color:s?"secondary":"primary","data-testid":"signup-button",onClick:c,children:e.jsx(l,{...a})}),u=e.jsx(P,{as:"button",size:"medium",color:s?"primary":"secondary","data-testid":"login-button",onClick:t,children:e.jsx(l,{...M.unauthLoginCta})});return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(l,{...s?M.logInOrSignUp:M.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(l,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:s?[u,i]:[i,u]})]})},xs=q.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:s})=>s?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,M=T({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}}),bs=()=>{var t;const{openSettings:s}=se(),n=(t=Le("3376455464"))==null?void 0:t.value,a=Z();return e.jsxs("div",{className:"flex h-full flex-col gap-2 p-3",children:[e.jsx(G,{icon:Ke,onClick:()=>{$e(a),v.closeActiveSidebar()},children:e.jsx(l,{id:"0FupYP",defaultMessage:"New chat"})}),e.jsx("div",{className:"flex grow items-center justify-center",children:e.jsx(re,{})}),e.jsxs(Qe,{contentClassName:"w-[298px]",triggerButton:e.jsx(G,{icon:Ve,children:e.jsx(l,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[e.jsx(L.Item,{onClick:()=>s(),icon:Xe,children:e.jsx(l,{id:"HrRLkZ",defaultMessage:"Settings"})}),n&&e.jsx(L.Item,{icon:Ze,onClick:()=>{v.openModal(ee.ReportConversation)},children:e.jsx(l,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),e.jsx(L.Separator,{}),e.jsx(es,{})]})]})};function oe({children:s,hideNavigation:n=!1,mobileHeaderContent:a,mobileHeaderLeftContent:t,mobileHeaderRightContent:c,mobileHeaderBottomContent:i,sidebar:u,forceOpenDesktopSidebar:r=!1}){const{isUnauthenticated:o}=N(),[m,p]=F(h=>[h.activeStageSidebar,h.activeSidebar]),d=De(),S=[];let y=null;D.Children.forEach(s,h=>{D.isValidElement(h)&&(h.type===oe.Sidebars?y=h:S.push(h))});const j=!o&&!n&&u!=null,U=!n&&(j||o);return e.jsxs("div",{className:w("relative flex h-full w-full overflow-hidden transition-colors",p!=="popover-nav"&&"z-0"),children:[j&&e.jsx(rs,{isExpanded:r||!d,isPopoverOnDesktop:m,children:o?e.jsx(bs,{}):u}),e.jsxs("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[U&&e.jsx(is,{onClickOpenSidebar:()=>v.togglePopoverNavSidebar(),showNavSidebar:j,leftContent:t,rightContent:c,bottomContent:i,children:a}),e.jsx("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:S})]}),y]})}function vs({children:s}){return e.jsx(e.Fragment,{children:s})}oe.Sidebars=vs;export{_s as N,oe as S,Is as a,Ps as b,Ts as c,ss as u};
//# sourceMappingURL=b7yh879a84xsoh1v.js.map
