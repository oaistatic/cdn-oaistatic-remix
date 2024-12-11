import{f as d,eB as g,k as m,A as c,eG as p,bi as y,as as h,a5 as x}from"./dh0yl0m9q337gmci.js";import{j as t,g as b,r,af as M,ae as v,M as k,c as E}from"./nqo5y2f0dorhrqsr.js";import{iQ as L,fG as w}from"./ktiwgucld5a8s55m.js";import{_ as j}from"./isjdmfmhzv09v01t.js";const ne=d({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},invitedToastMessage:{id:"Login.invitedToastMessage",defaultMessage:"You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation."}}),S=t.jsxs(t.Fragment,{children:["ChatGPT ",t.jsx("span",{className:"font-circle",children:"●"})]});var T=j;function A(e,a){var i=-1,o=e.length,s=o-1;for(a=a===void 0?o:a;++i<a;){var l=T(i,s),n=e[l];e[l]=e[i],e[i]=n}return e.length=a,e}var u=A,_=L,I=u;function R(e){return I(_(e))}var N=R,P=g;function O(e,a){return P(a,function(i){return e[i]})}var W=O,G=W,C=m;function D(e){return e==null?[]:G(e,C(e))}var V=D,$=u,F=V;function H(e){return $(F(e))}var B=H,q=N,Q=B,U=c;function Y(e){var a=U(e)?q:Q;return a(e)}var X=Y;const J=b(X),K=40,Z=2500;function z(){const[e,a]=r.useState(0),i=r.useRef(J(Object.values(te))),{currentLocale:o}=p();return t.jsx(M,{mode:"wait",initial:!1,children:t.jsx(v.div,{className:"-mt-4 flex w-full flex-col pr-5 md:pr-8 lg:pr-10",initial:{opacity:0,y:24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},transition:{duration:.2},children:t.jsx(k,{...i.current[e],values:{title:s=>t.jsx("p",{className:"font-bold",children:s}),body:s=>{const l=s?.[0];return typeof l!="string"?null:t.jsx(ee,{text:l,onFinishedTyping:()=>{setTimeout(()=>{a(n=>(n+1)%i.current.length)},Z)}},o)}}})},e)})}function ee({text:e,onFinishedTyping:a}){const i=y(e),o=i.length,[s,l]=r.useState(-12),n=r.useRef(!1);return r.useEffect(()=>{n.current||s===o&&(a(),n.current=!0)},[s,o,a]),w(()=>{l(f=>f+1)},K),t.jsxs("p",{className:"font-normal",children:[i.slice(0,Math.max(s,0)).join(""),t.jsxs("span",{className:h("font-circle",{invisible:s>o+12}),children:["​","●"]})]})}const te=d({marketingExample1:{id:"PvNRKc",defaultMessage:"<title>Recommend a dish</title><body>to bring to a potluck</body>"},marketingExample2:{id:"x6dDU4",defaultMessage:"<title>Recommend a dish</title><body>to impress a date who's a picky eater</body>"},marketingExample3:{id:"dVTBN5",defaultMessage:"<title>Help me debug</title><body>a Python script automating daily reports</body>"},marketingExample4:{id:"Hlddw+",defaultMessage:"<title>Help me debug</title><body>why the linked list appears empty after I've reversed it</body>"},marketingExample5:{id:"faJr4O",defaultMessage:"<title>Draft an email</title><body>to request a quote from local plumbers</body>"},marketingExample6:{id:"oV5RJ5",defaultMessage:"<title>Draft an email</title><body>requesting a deadline extension for my project</body>"},marketingExample7:{id:"vL3rX1",defaultMessage:"<title>Summarize this article</title><body>into three key points</body>"},marketingExample8:{id:"xo9nQj",defaultMessage:"<title>Summarize this article</title><body>as a table of pros and cons</body>"},marketingExample9:{id:"VVg3aa",defaultMessage:"<title>Write a text</title><body>asking a friend to be my plus-one at a wedding</body>"},marketingExample10:{id:"8Vl7TM",defaultMessage:"<title>Write a text</title><body>that goes with a kitten gif for a friend having a rough day</body>"},marketingExample11:{id:"dXqZbT",defaultMessage:"<title>Suggest fun activities</title><body>for a family of 4 to do indoors on a rainy day</body>"},marketingExample12:{id:"h09XOo",defaultMessage:"<title>Suggest fun activities</title><body>for a team-building day with remote employees</body>"},marketingExample13:{id:"6FcHEa",defaultMessage:"<title>Brainstorm names</title><body>for my fantasy football team</body>"},marketingExample14:{id:"O6iNBu",defaultMessage:"<title>Brainstorm names</title><body>for an orange cat we're adopting from the shelter</body>"},marketingExample15:{id:"uw95Qj",defaultMessage:"<title>Give me ideas</title><body>for what to do with my kids' art</body>"},marketingExample16:{id:"HQTYuP",defaultMessage:"<title>Give me ideas</title><body>for a customer loyalty program in a small bookstore</body>"},marketingExample17:{id:"s3Gh5S",defaultMessage:"<title>Plan a trip</title><body>to see the northern lights in Norway</body>"},marketingExample18:{id:"517NID",defaultMessage:"<title>Plan a trip</title><body>to experience Seoul like a local</body>"},marketingExample19:{id:"EASxoK",defaultMessage:"<title>Write a thank-you note</title><body>to my interviewer</body>"},marketingExample20:{id:"ozMspN",defaultMessage:"<title>Write a thank-you note</title><body>to our babysitter for the last-minute help</body>"},marketingExample21:{id:"2o1b9o",defaultMessage:"<title>Help me pick</title><body>a gift for my dad who loves fishing</body>"},marketingExample22:{id:"TysYjq",defaultMessage:"<title>Help me pick</title><body>an outfit that will look good on camera</body>"},marketingExample23:{id:"pVmQs6",defaultMessage:"<title>Improve my post</title><body>for hiring a store associate</body>"},marketingExample24:{id:"mvvlCD",defaultMessage:"<title>Improve my post</title><body>for selling a used vacuum in good condition</body>"}});function re(){const e=E(),a=x(()=>!0)??!1;return t.jsxs("div",{className:"relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",children:[t.jsx("nav",{className:"left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",children:t.jsx("h1",{"aria-label":e.formatMessage(ae.ariaLabel),children:t.jsx("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:t.jsx("div",{children:S})})})}),t.jsx("div",{className:"flex flex-col text-[32px] leading-[1.2] md:text-[40px]","aria-hidden":"true",children:a?t.jsx(z,{}):null})]})}const ae=d({ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"}});export{re as L,S as T,ne as m};
//# sourceMappingURL=bokzl1e8s6dfxurv.js.map
