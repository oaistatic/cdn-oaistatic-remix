import{a9 as ne,a0 as O,az as le,r as d,S as p,y as e,ec as oe,u as ce,al as de,$ as ue,be as fe,l as me,N as D,D as xe,ae as s,c6 as ge,aA as v,a1 as he,aw as pe,P as j,d as y,b2 as ve,b3 as je,b4 as E,b5 as P,dh as ye}from"./cenhwbprxai3toix.js";import{L as _e,T as be,m as T}from"./ddr1hpzjym08nyae.js";import{cg as U,ch as H,ci as ke,w as Ne,ae as L}from"./bomvf441parvbl6l.js";import{c as we}from"./juh0qqcw2hhfkych.js";import{G as k}from"./lzqwtbp50roqvxnh.js";import{p as N}from"./j30ux8h0392339qt.js";import{m as I}from"./i2mam4exf28ww00h.js";import"./fsddy3bxlesj6ecw.js";import"./jyh9xl3syf7yrebg.js";import"./jth9gz8y4nfsu03x.js";import"./h0w2cfyxquh3a88t.js";import"./e3lzzvpbrfw34hi0.js";function A(){return e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(pe,{})})}const Ie=({referralCodeId:r,sessionUser:a,auth0Provider:n,redirectUrl:o})=>{const u=O(),{resolvedTheme:f}=le(),m=f==="dark",l=d.useRef(null);return d.useEffect(()=>{p.logEvent("chatgpt_referral_invite_loaded",a?.id?"has_user":"user_logged_out",{user_id:a?.id?a.id:"_no_user",referral_code_id:r})},[r,a?.id]),d.useEffect(()=>{l.current===null&&(l.current=document.body.style.backgroundColor);const h=m?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=h,()=>{l.current!==null&&(document.body.style.backgroundColor=l.current)}},[m]),e.jsxs("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[e.jsx(_e,{}),e.jsxs("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[e.jsx("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:e.jsx("h1",{"aria-label":u.formatMessage(t.ariaLabel),children:e.jsx("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:e.jsx("div",{children:be})})})}),e.jsx(Re,{sessionUser:a,auth0Provider:n,redirectUrl:o,referralCodeId:r}),e.jsxs("div",{className:"flex flex-col items-center justify-end",children:[e.jsx("div",{className:"flex text-gray-300",children:e.jsx(oe,{className:"h-[22px] w-auto"})}),e.jsx("div",{className:"opacity-50",children:e.jsx(we,{isStorageComplianceEnabled:!1})})]})]})]})},Me=({offerDollarValue:r,sessionUser:a,isLoading:n,isLoadingLogin:o,handleClaimInvite:u,handleSignupWarning:f,handleLogin:m})=>{const l=U(H.hasPaidSubscription),h=Ne(T.signUp);return a?.id?e.jsx(v,{disabled:n||l,loading:n,color:l?"disabled":"blue",size:"large",fullWidth:!0,onClick:u,children:l?e.jsx(s,{...t.alreadyPaidUserCta}):e.jsx(s,{...t.acceptInviteCtaLoggedIn,values:{dollarValue:r}})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-5 text-center text-sm text-token-text-tertiary",children:e.jsx(s,{...t.claimInviteLoginOrSignUp})}),e.jsx("div",{className:"flex flex-col space-y-4 px-3",children:e.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row",children:[e.jsx(v,{disabled:n,loading:o,fullWidth:!0,onClick:m,children:e.jsx(s,{...T.logIn})}),e.jsx(v,{onClick:f,disabled:n,fullWidth:!0,children:e.jsx(s,{...h})})]})})]})};function Re({sessionUser:r,referralCodeId:a,redirectUrl:n,auth0Provider:o}){const[u,f]=d.useState(!1),[m,l]=d.useState(!1),[h,x]=d.useState(!1),[B,M]=d.useState(!1),R=r?.id??"_no_user",{data:F,isLoading:G,isError:_}=ce({queryKey:["referral-invite",a],queryFn:()=>D.getPublicReferralInvite(a)}),c=O(),W=de(),i=F?.result.invite_metadata?.invite_data,S=`$${i?.referral_trial_dollar_value}`,V=i?.referrer_public_avatar_url,$="$20",q=i?.referral_trial_duration_months?i?.referral_trial_duration_months>=1?c.formatMessage(t.monthsOfService,{referralTrialDurationMonths:i?.referral_trial_duration_months}):c.formatMessage(t.daysOfService,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,z=i?.referrer_user_name,Y=i?.referral_trial_duration_months?i?.referral_trial_duration_months>1?c.formatMessage(t.monthsOfBenefit,{referralTrialDurationMonths:i?.referral_trial_duration_months}):c.formatMessage(t.daysOfBenefit,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,K=i?.referral_trial_duration_months?i?.referral_trial_duration_months>=1?c.formatMessage(t.ctaHeaderMonths,{referralTrialDurationMonths:i?.referral_trial_duration_months}):c.formatMessage(t.ctaHeaderDays,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,Q=c.formatMessage(t.dollarValue,{offerDollarValue:S}),X="ChatGPT Plus",J=ue(),C=U(H.workspaceId),b=fe(),{mutateAsync:Z}=me({mutationFn:()=>D.postClaimReferralInvite(a,C||""),onSettled:()=>{x(!1)},onError:async()=>{W.danger(c.formatMessage(t.claimReferralError))},onSuccess:()=>{f(!0),b(`/invite/accepted?referralCodeId=${a}`)}}),ee=async()=>{x(!0),p.logEvent("chatgpt_referral_invite_claim",a,{referralCodeId:a,userId:R}),j.logEvent(y.chatgptReferralInviteClaim,{content:R}),await Z()},ae=()=>{x(!0),l(!0),p.logEvent("chatgpt_referral_invite_explain_signup",a,{referralCodeId:a}),j.logEvent(y.chatgptReferralInviteExplainSignup,{content:a}),x(!1)},te=ke(),re=()=>{x(!0),M(!0),p.logEvent("chatgpt_referral_invite_login",a,{referralCodeId:a}),j.logEvent(y.chatgptReferralInviteLogin,{content:a});const g=ve.getCookie(je.DeviceId)?.toString(),ie=te();E.signIn(o,{callbackUrl:n,...g?{device_id:g}:{}},{prompt:"login",...L(P()),...ie?{use_email_otp:"true"}:{}})},se=()=>{x(!0),M(!0),p.logEvent("chatgpt_referral_invite_signup",a,{referralCodeId:a}),j.logEvent(y.chatgptReferralInviteSignup,{content:a}),E.signIn(o,{callbackUrl:n},{prompt:"login",screen_hint:"signup",...L(P())})};return d.useEffect(()=>{_&&(b("/?e=oldi"),xe.addAction("fetch_error_404",{url:location.href,errorMessage:"Referral code not found"}))},[_,b]),_?e.jsx(Ce,{}):G||J==null&&r?.id||u?e.jsx(De,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex h-full w-full flex-col items-center justify-center",children:[m&&e.jsx(I.div,{initial:{opacity:0,x:10},transition:{delay:1,duration:.1},animate:{x:0,opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsx(Se,{handleSignup:se,setHasRequestedSignup:l})}),!m&&e.jsx(I.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsx("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:K}),e.jsx(Ee,{referrerPublicAvatarUrl:V,referrerName:z,benefitWithTime:Y,receivedPlan:X,dollarValue:Q}),e.jsx("div",{children:e.jsx("p",{className:"text-sm",children:e.jsx(s,{...t.benefitPointsHeader})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(w,{children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...N.plus.demandAccess})})]}),e.jsxs(w,{children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...N.plus.responseSpeed})})]}),e.jsxs(w,{className:"pb-2",children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...N.plus.modelFeatures})})]})]}),e.jsx("div",{className:"w-full",children:e.jsx(Me,{handleClaimInvite:ee,handleSignupWarning:ae,handleLogin:re,sessionUser:r,offerDollarValue:S,isLoading:h,isLoadingLogin:B})}),e.jsxs("div",{className:"space-y-1.5 py-1 text-center",children:[e.jsx("p",{className:"text-xs text-token-text-tertiary",children:e.jsx(s,{...t.ctaFollowUpSummary,values:{monthlyCost:$,monthsOfService:q}})}),r?.id&&e.jsx("p",{className:"text-xs text-token-text-tertiary",children:e.jsx(s,{...t.ctaNotice,values:{userEmail:r?.email,avatar:()=>e.jsx("img",{className:"inline-block h-4 w-4 rounded-full",src:r?.picture??void 0,alt:r?.name}),email:g=>e.jsx("span",{className:"font-semibold",children:g}),link:g=>e.jsx(ge,{className:"underline",to:"/auth/logout",children:g})}})})]})]})})})]})})}const Se=({setHasRequestedSignup:r,handleSignup:a})=>e.jsxs("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:e.jsx(s,{...t.signUpExplainTitle})}),e.jsx("div",{children:e.jsx("p",{className:"text-sm",children:e.jsx(s,{...t.signUpExplainDescription})})}),e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(v,{fullWidth:!0,onClick:()=>{r(!1)},color:"secondary",children:e.jsx(s,{...t.signUpCtaBack})}),e.jsx(v,{onClick:a,fullWidth:!0,color:"primary",children:e.jsx(s,{...t.signUpCtaProceed})})]})]}),Ce=()=>e.jsxs("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[e.jsx("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:e.jsx(A,{})}),e.jsx(I.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-sm font-semibold",children:e.jsx(s,{...t.errorHeader})}),e.jsx("p",{className:"text-xs font-normal",children:e.jsx(s,{...t.errorDescription,values:{link:r=>e.jsx("a",{href:"/",className:"underline",children:r})}})})]})})]}),De=()=>e.jsx("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:e.jsx("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:e.jsx(A,{})})}),w=ne.div`gap-2 flex flex-row justify-start text-sm items-start`,Ee=({referrerPublicAvatarUrl:r,referrerName:a,benefitWithTime:n,receivedPlan:o,dollarValue:u})=>e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx("div",{className:"flex-shrink-0 pt-0.5",children:e.jsx("img",{className:"h-12 w-12 rounded-full bg-yellow-400",src:r,alt:a})}),e.jsx("div",{className:"ml-3 w-0 flex-1",children:e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(s,{...t.socialProofText,values:{referrerName:a,benefitWithTime:n,receivedPlan:o,dollarValue:u,highlight:f=>e.jsx("span",{className:"rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",children:f})}})})})]}),t=he({claimReferralError:{id:"ReferralInvite.claimReferralError",defaultMessage:"There was an issue."},claimInviteLoginOrSignUp:{id:"ReferralInvite.claimInviteLoginOrSignUp",defaultMessage:"You can claim this invite after you log in or sign up."},ctaNotice:{id:"ReferralInvite.ctaNotice",defaultMessage:"Claiming referral with <avatar></avatar> <email>{userEmail}</email>. <link>Not you?</link>"},ctaHeaderMonths:{id:"ReferralInvite.ctaHeaderMonths",defaultMessage:"Claim your {referralTrialDurationMonths, plural, one {one month} other {# months}} of ChatGPT Plus"},ctaHeaderDays:{id:"ReferralInvite.ctaHeaderDays",defaultMessage:"Claim your {referralTrialDurationDays, plural, one {one day} other {# days}} of ChatGPT Plus"},dollarValue:{id:"ReferralInvite.dollarValue",defaultMessage:"(a {offerDollarValue} value)"},monthsOfService:{id:"ReferralInvite.monthsOfService",defaultMessage:"{referralTrialDurationMonths, plural, one {# month} other {# months}}"},daysOfService:{id:"ReferralInvite.daysOfService",defaultMessage:"{referralTrialDurationDays, plural, one {# day} other {# days}}"},monthsOfBenefit:{id:"ReferralInvite.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {free month} other {# free months}}"},daysOfBenefit:{id:"ReferralInvite.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {# free day} other {# free days}}"},ariaLabel:{id:"ReferralInvite.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},socialProofText:{id:"ReferralInvite.socialProofText",defaultMessage:"{referrerName} sent you <highlight>{benefitWithTime}</highlight> of {receivedPlan} {dollarValue}"},welcome:{id:"ReferralInvite.welcome",defaultMessage:"Welcome to ChatGPT"},benefitPointsHeader:{id:"ReferralInvite.benefitPointsHeader",defaultMessage:"ChatGPT Plus offers subscribers premium access to OpenAI's conversational AI, which includes:"},acceptInviteCtaLoggedOut:{id:"ReferralInvite.acceptInviteCtaLoggedOut",defaultMessage:"Get started"},acceptInviteCtaLoggedIn:{id:"ReferralInvite.acceptInviteCtaLoggedIn",defaultMessage:"Claim invite"},alreadyPaidUserCta:{id:"ReferralInvite.alreadyPaidUserCta",defaultMessage:"ChatGPT Plus subscription found"},ctaFollowUpSummary:{id:"ReferralInvite.ctaFollowUpSummary",defaultMessage:"{monthsOfService} free, then {monthlyCost}/month"},referralCodeContent:{id:"ReferralInvite.referralCodeContent",defaultMessage:"Referral code: {codeToken}"},errorHeader:{id:"ReferralInvite.errorHeader",defaultMessage:"Invite error"},errorDescription:{id:"ReferralInvite.errorDescription",defaultMessage:"You will be redirected, or <link>click here.</link>"},loadingHeader:{id:"ReferralInvite.loadingHeader",defaultMessage:"Invite loading"},loadingDescription:{id:"ReferralInvite.loadingDescription",defaultMessage:"Your page will be loaded, or <link>go home by clicking here.</link>"},signUpExplainTitle:{id:"ReferralInvite.signUpExplainTitle",defaultMessage:"Almost done!"},signUpExplainDescription:{id:"ReferralInvite.signUpExplainDescription",defaultMessage:"Once you’ve finished signing up, return to this page to claim your invite."},signUpCtaProceed:{id:"ReferralInvite.signUpCtaProceed",defaultMessage:"Proceed"},signUpCtaBack:{id:"ReferralInvite.signUpCtaBack",defaultMessage:"Go back"}});function $e(){const r=ye();return e.jsx(Ie,{...r})}export{$e as default};
//# sourceMappingURL=0rjreokl03l5lh4e.js.map
