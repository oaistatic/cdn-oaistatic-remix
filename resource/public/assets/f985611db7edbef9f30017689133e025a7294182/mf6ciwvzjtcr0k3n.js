import{O as C,t as e,aD as Y,a as I,bp as k,aj as M,a3 as T,ag as L,ak as B,r as j,bZ as D,a8 as a,aT as S,s as F,ad as b,P as R,d as O}from"./elatgogjtv7nqe0m.js";import{af as w,bE as z,ch as X,v as H,cU as G}from"./htp5iqft2rzvr58f.js";import{b9 as q,au as K}from"./cr91oy4eihkrvo1z.js";import{m as v}from"./iudm9ugwilu2skh4.js";import{A as Q}from"./goajibdwxzha23en.js";import{c as Z}from"./iej0cupg2dqkmejt.js";function _({children:t}){return e.jsxs("div",{className:"flex min-h-screen w-full flex-col",children:[e.jsx("div",{className:"m-4 flex gap-3",children:e.jsx(Y,{className:"icon-xl"})}),e.jsx("div",{className:"m-auto max-w-sm flex-col justify-center",children:t})]})}const d=C.h2`mb-2 text-2xl font-semibold`,u=C.p`mb-10 text-sm`,$={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{staggerChildren:.5,delayChildren:.2}}},J={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{type:"spring",damping:14}}};function N({isTrial:t}){return e.jsx("div",{className:"mb-6 flex items-center justify-center gap-2",children:e.jsx(w,{children:e.jsx(v.div,{variants:$,initial:"hidden",animate:"show",className:"flex",children:e.jsx(v.div,{variants:J,children:t?e.jsx(q,{className:"h-8"}):e.jsx(K,{className:"h-8"})})})})})}var A=(t=>(t.Landing="landing",t.Setup="setup",t.Invite="invite",t.Complete="complete",t))(A||{});const h=["landing","invite","complete"],V={enter:t=>({translateX:t>=0?"50%":"-50%",opacity:0}),center:{translateX:0,opacity:1},exit:t=>({translateX:t<=0?"50%":"-50%",opacity:0})};function ee(){const t=I(),s=k(),{currentPath:i,currentStep:n}=ne(),m=M(),p=z(X.workspaces),E=H(),U=T(),W=L(),x=p.find(o=>o.structure===B.WORKSPACE&&!o.deactivated),[l,y]=j.useState(1);j.useEffect(()=>{function o(){y(-1)}return window.addEventListener("popstate",o),()=>{window.removeEventListener("popstate",o)}},[]);const g=()=>{y(1);const o=h.indexOf(n),P=o+1;x||s("/"),o!==-1&&P<h.length&&s(i+"#"+h[P])};return e.jsx("div",{className:"max-w-sm pb-6",children:e.jsxs(w,{mode:"wait",custom:l,children:[n==="landing"&&e.jsx(f,{initial:!1,custom:l,children:e.jsx(te,{onNext:g,isLoading:m==null})},"landing"),n==="invite"&&e.jsx(f,{custom:l,children:e.jsx(se,{onNext:()=>{g()}})},"invite"),n==="complete"&&e.jsx(f,{custom:l,children:e.jsx(ae,{onNext:()=>{g(),x&&D(t,x.id,E,U,W),s("/")}})},"complete")]})})}const f=t=>e.jsx(v.div,{initial:"enter",animate:"center",exit:"exit",variants:V,transition:{translateX:{type:"just"},opacity:{duration:.2}},...t});function te({onNext:t,isLoading:s=!1}){return e.jsxs(e.Fragment,{children:[e.jsx(N,{isTrial:!1}),e.jsx(d,{children:e.jsx(a,{...c.standard})}),e.jsx(u,{children:e.jsx(a,{...c.description})}),e.jsx(S,{onClick:t,size:"large",loading:s,fullWidth:!0,children:e.jsx(a,{...c.continue})})]})}function se({onNext:t}){const s=M(),i=T();return s==null?null:e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(a,{...c.inviteTitle,values:{workspaceName:s.data.name}})}),e.jsx(u,{children:e.jsx(a,{...c.completeDescription})}),s!=null&&e.jsx("div",{className:"text-sm",children:e.jsx(Q,{fullWidthButtons:!0,workspace:s,canResendInviteEmails:!1,onCancel:t,cancelButtonText:i.formatMessage(c.skipAddMembers),onSuccess:t})})]})}function ae({onNext:t}){return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(a,{...c.completeTitle})}),e.jsx(u,{children:e.jsx(a,{...c.completeDescription})}),e.jsx(S,{onClick:t,size:"large",fullWidth:!0,children:e.jsx(a,{...c.continueToChatgpt})})]})}function ne(){const{hash:t,pathname:s,search:i}=F(),n=t.slice(1);return{currentStep:ie(n)?n:"landing",currentPath:s+i}}const ie=Z(A),c=b({standard:{id:"UpgradedToTeamSuccess.trial",defaultMessage:"Payment successful"},description:{id:"UpgradedToTeamSuccess.description",defaultMessage:"Your team has been created. You can invite members to join the workspace to start collaborating."},continue:{id:"UpgradedToTeamSuccess.continue",defaultMessage:"Continue"},continueToChatgpt:{id:"UpgradedToTeamSuccess.continueToChatgpt",defaultMessage:"Continue to ChatGPT"},setupTitle:{id:"UpgradedToTeamSuccess.setupTitle",defaultMessage:"Set up a team workspace"},setupSubtitle:{id:"UpgradedToTeamSuccess.setupSubtitle",defaultMessage:"Workspace name"},inviteTitle:{id:"UpgradedToTeamSuccess.inviteTitle",defaultMessage:"Invite members to {workspaceName}"},completeTitle:{id:"UpgradedToTeamSuccess.completeTitle",defaultMessage:"Workspace setup complete"},completeDescription:{id:"UpgradedToTeamSuccess.completeDescription",defaultMessage:"You have now created a team workspace. You can invite members to join the workspace. You can do so at any time from the workspace settings page."},skipAddMembers:{id:"UpgradedToTeamSuccess.skipAddMembers",defaultMessage:"Skip"}});function pe({isTrial:t,isTeam:s}){const i=T(),n=k(),m=j.useCallback(p=>{p.preventDefault(),R.logEvent(O.clickAccountPaymentSuccessContinue),n("/")},[n]);return e.jsxs(_,{children:[e.jsx(G,{children:e.jsx("title",{children:i.formatMessage(r.pageTitle)})}),e.jsx("div",{className:"flex flex-col",children:s?e.jsx(ee,{}):e.jsx(ce,{isTrial:t,onContinue:m})})]})}function ce({isTrial:t,onContinue:s}){const i=t?r.trial:r.standard;return e.jsxs(e.Fragment,{children:[e.jsx(N,{isTrial:!!t}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(d,{children:e.jsx(a,{...i})}),e.jsx(u,{children:e.jsx(a,{...r.paymentReceived})}),e.jsx(S,{onClick:s,size:"large",fullWidth:!0,children:e.jsx(a,{...r.continueButton})})]})]})}const r=b({pageTitle:{id:"PaymentsSuccess.pageTitle",defaultMessage:"Account - Payment success"},paymentReceived:{id:"PaymentsSuccess.paymentSuccessful",defaultMessage:"You've been upgraded to ChatGPT Plus"},continueButton:{id:"PaymentsSuccess.continueButton",defaultMessage:"Continue"},standard:{id:"PaymentsSuccess.standard",defaultMessage:"Payment successful"},trial:{id:"PaymentsSuccess.trial",defaultMessage:"Trial started"}});export{pe as P};
//# sourceMappingURL=mf6ciwvzjtcr0k3n.js.map
