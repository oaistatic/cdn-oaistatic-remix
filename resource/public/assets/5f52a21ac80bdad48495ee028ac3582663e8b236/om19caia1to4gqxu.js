import{c as O,r,e as H,j as e,M as p,k as b,a2 as R,d as z,f as K}from"./lklglvrzltpv3f05.js";import{T as M,m as V,L as X}from"./h679rw2sid68fseu.js";import{C as Y}from"./xqi8h3wbt2sp2d6l.js";import{u as $,cc as q,aw as C,P as v,a4 as k,a5 as P,ce as N,br as F,h as W,S as J,fI as Q,f as Z,F as ee,bH as te}from"./muemwvh3ybsggbb1.js";import{c as se}from"./ko2vtvp89jhtnj00.js";import{d7 as B,d8 as oe,aL as ne,d9 as ae,da as ie,db as re,dc as le,j as E,dd as S,de as U,df as G,dg as ce,f as ue,h as de,b4 as ge}from"./cp734xu9t8fnlezn.js";import"./isjdmfmhzv09v01t.js";function he({auth0Provider:s,nextUrl:n,isStorageComplianceEnabled:i}){const o=B(),l=O(),[t,c]=r.useState(!1),d=oe(),L=H(),A=ne(h.signUp),{value:f}=$("2131161815"),m=ae(),g=ie(),x=re(),T=le(),y=g(),w=x(),u=T(),{country:a}=q(),j=!o||f&&!t,_=()=>{v.logLogInButtonClicked({provider:s,location:"Login page"}),t||setTimeout(()=>{c(!0)},500),b.signIn(s,{callbackUrl:n},{prompt:"login",...E(N()),...y||m?{[S]:"true"}:{},...w?{[U]:"true"}:{},...a?{country_code:a}:{},...u?{[G]:"true"}:{}})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[!o&&e.jsx("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:e.jsx("h1",{"aria-label":l.formatMessage(h.ariaLabel),children:e.jsx("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:e.jsx("div",{children:M})})})}),e.jsxs("div",{className:"relative flex w-full grow flex-col items-center justify-center",children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:o?e.jsx("div",{children:M}):e.jsx(p,{...h.pageTitle})}),e.jsx("div",{className:"mt-5 w-full max-w-[440px]",children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:C("grid gap-x-3 gap-y-2",o?"mx-16 gap-y-4 sm:grid-cols-1 sm:gap-y-4":"sm:grid-cols-2 sm:gap-y-0"),children:[e.jsx(I,{blue:!0,loading:t,testid:"login-button",onClick:_,children:e.jsx(p,{...h.logIn})}),o&&t&&e.jsx(I,{ghost:!0,testid:"login-tryagain-button",onClick:_,children:e.jsx(p,{...h.logInTryAgain})}),j&&e.jsx(I,{blue:!0,testid:"signup-button",onClick:()=>{v.logSignUpButtonClicked({provider:"auth0",location:"Login page"}),k.setCookie(P.SignupRedirectUrl,n,{maxAge:60*60*3}),b.signIn(s,{callbackUrl:n},{prompt:"login",screen_hint:"signup",...E(N()),...y||m?{[S]:"true"}:{},...w?{[U]:"true"}:{},...a?{country_code:a}:{},...u?{[G]:"true"}:{}})},children:e.jsx(p,{...A})})]})})}),d?e.jsx(F,{color:"ghost",className:"mt-2 sm:mt-5",onClick:D=>{D.preventDefault(),v.logEvent(W.authTryItFirstLinkClicked),J.logEvent("chatgpt_auth_try_it_first_link_clicked"),L("/")},children:e.jsx(p,{...h.tryItFirst})}):null]}),e.jsxs("div",{className:"mt-10 flex flex-col justify-center",children:[e.jsx("div",{className:"flex justify-center text-gray-300 md:mb-3",children:e.jsx(Q,{className:"h-[22px] w-auto"})}),e.jsx(se,{isStorageComplianceEnabled:i})]})]})})}function I({icon:s,children:n,className:i,onClick:o,testid:l,blue:t=!1,ghost:c=!1,loading:d=!1}){return e.jsxs(F,{color:t?"blue":c?"ghost":"primary",loading:d,size:"large","data-testid":l,onClick:o,className:i,children:[s?e.jsx("div",{className:C("h-5 w-5 justify-self-start",{}),style:{backgroundImage:s}}):null,e.jsx("span",{children:n})]})}const h=Z({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},logInTryAgain:{id:"Login.logInTryAgain",defaultMessage:"Try again"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},tryItFirst:{id:"Login.tryItFirst",defaultMessage:"Try it first"}});function fe({auth0Provider:s,cfConnectingIp:n,isStorageComplianceEnabled:i,statsigShowCapacityGate:o}){const{hash:l}=z(),[t]=K(),c=t.get("next"),d=(c?.startsWith("/")?c:"/")+l,L=O(),A=ee(),f=o===!0,m=r.useRef(!1),g=t.get("sso"),x=g?t.get("connection"):void 0,y=ce()(),u=ue()??(de(t,!0,y)||s);return r.useEffect(()=>{sessionStorage.setItem(ge,u.toString())},[u]),r.useEffect(()=>{if(g&&!f){const a=k.getCookie(P.DeviceId)?.toString();b.signIn(u,{callbackUrl:d},{...a?{device_id:a}:{},...x?{connection:x}:{},...E(a)})}},[d,g,x,f,u]),r.useEffect(()=>{v.logEvent(W.loggedOutOpenedAuthLogin,{cfConnectingIp:n})},[n]),r.useEffect(()=>{window.location.hash==="#pricing"&&k.setCookie(P.ShowPaymentModal,!0,{maxAge:6*60*60})},[]),r.useEffect(()=>{if(m.current)return;m.current=!0;const a=t.get("inv_ws_name"),j=t.get("inv_email");a&&j&&A.success(L.formatMessage(V.invitedToastMessage,{workspace_name:a,email:j}),{hasCloseButton:!0,duration:600})},[t,L,A]),f?e.jsx(Y,{}):g?null:e.jsx(me,{auth0Provider:u,nextUrl:d,isStorageComplianceEnabled:i})}const me=({auth0Provider:s,nextUrl:n,isStorageComplianceEnabled:i})=>e.jsxs(e.Fragment,{children:[e.jsx(xe,{auth0Provider:s,nextUrl:n,isStorageComplianceEnabled:i}),!1]});function xe({auth0Provider:s,nextUrl:n,isStorageComplianceEnabled:i}){const o=B(),l=te(),t=r.useRef(null);return r.useEffect(()=>{if(o)return;t.current==null&&(t.current=document.body.style.backgroundColor);const c=l?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=c,()=>{t.current!=null&&(document.body.style.backgroundColor=t.current)}},[l,o]),e.jsxs("div",{className:C("flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid",o?"md:grid-cols-1":"md:grid-cols-2 lg:grid-cols-[60%_40%]"),children:[!o&&e.jsx(X,{}),e.jsx(he,{auth0Provider:s,nextUrl:n,isStorageComplianceEnabled:i})]})}function Ie(){const s=R();return e.jsx(fe,{...s})}export{Ie as default};
//# sourceMappingURL=om19caia1to4gqxu.js.map
