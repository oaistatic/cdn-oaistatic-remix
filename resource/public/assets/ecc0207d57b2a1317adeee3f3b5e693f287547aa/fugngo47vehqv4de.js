import{a0 as T,bG as j,$ as A,r as U,P as l,d,y as e,bF as o,bu as C,aB as G,aU as F,ae as r,aV as I,a1 as k}from"./cenhwbprxai3toix.js";import{dq as X,U as E,A as L,dr as S}from"./bomvf441parvbl6l.js";import{t as _}from"./bh0hpeydruybhwyo.js";import{u as $}from"./kp41qb109q7zsu08.js";import{u,v as O}from"./s26g8cj5crlmzrhm.js";import"./lzqwtbp50roqvxnh.js";import"./h0w2cfyxquh3a88t.js";import"./i2mam4exf28ww00h.js";import"./e3lzzvpbrfw34hi0.js";import"./jth9gz8y4nfsu03x.js";const D="webp",q=2579,H=1159,Q="srgb",B=3,R="uchar",Y=72,z="4:2:0",K=!1,V=!0,W=!1,Z="{{.assetPrefix}}/assets/gpt4o_nux_bg-ofsa8c8d.webp",J={format:D,width:q,height:H,space:Q,channels:B,depth:R,density:Y,chromaSubsampling:z,isProgressive:K,hasProfile:V,hasAlpha:W,src:Z},ce=({onClose:m})=>{const p=T(),{eligible:g,isLoading:h}=$(),{markAsViewed:f}=X(E.AG8PqS2q),x=u(!1),y=u(!0),i=L(),{doesUserHaveAnyAccountsWithPlusFeatures:M}=j(),{categories:N,isLoading:b}=O(),t=A(),s=N.find(({categoryId:v})=>v===S.GPT4o),n=g&&!h&&!b&&s;if(U.useEffect(()=>{n&&l.logEvent(d.gpt4oNUXModalShown,{plan_type:t?.planType})},[n,t?.planType]),!n)return null;const c=()=>{f(),_(),m()},w=()=>{l.logEvent(d.gpt4oNUXModalDismissed,{plan_type:t?.planType,switch_to_gpt4o:!0}),x({modelId:s.defaultModel,location:"GPT‑4o NUX Modal"}),i(s.defaultModel),c()},P=()=>{l.logEvent(d.gpt4oNUXModalTryItNowClicked,{plan_type:t?.planType}),y({modelId:s.defaultModel,location:"GPT‑4o NUX Modal"}),i(s.defaultModel),c()};return e.jsx(o.Root,{isOpen:!0,onClose:C,children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{className:"relative flex max-w-md flex-col items-center rounded-xl p-0 pb-10 text-center focus:outline-none",children:[e.jsxs("div",{className:"relative flex w-full items-center justify-center overflow-hidden bg-clip-content",children:[e.jsx("img",{src:J.src,height:210,fetchPriority:"high",className:"rounded-t-xl"}),e.jsx(G,{className:"absolute right-0 top-0 m-4",onClick:w})]}),e.jsxs("div",{className:"mb-5 mt-8 flex flex-col px-6",children:[e.jsx(F,{className:"font-semibold leading-6",children:e.jsx(r,{...a.title,values:{modelName:"GPT‑4o"}})}),e.jsx(I,{className:"pt-3 text-sm text-token-text-secondary",children:M?e.jsx(r,{...a.bodyPaidFinal,values:{modelName:"GPT‑4o",anotherModelName:"GPT‑4"}}):e.jsx(r,{...a.bodyFreeFinal,values:{modelName:"GPT‑4o"}})})]}),e.jsx("div",{className:"flex justify-center gap-4",children:e.jsx(o.Button,{onClick:P,title:p.formatMessage(a.buttonTryItNow),className:"rounded-xl px-5",color:"primary"})})]})})})},a=k({title:{id:"1kewDD",defaultMessage:"Introducing {modelName}"},bodyPaidFinal:{id:"Z6KHqN",defaultMessage:"You can now try our newest model, {modelName}. It’s faster than {anotherModelName}, better at understanding images, and speaks more languages."},bodyFreeFinal:{id:"w8Y79o",defaultMessage:"You now have limited access to our latest model, {modelName}. It’s smarter, understands images, can browse the web, and speaks more languages."},buttonTryItNow:{id:"RHbQLy",defaultMessage:"Try it now"},titleNoAuth:{id:"k9PG/O",defaultMessage:"Sign up to try GPT‑4o"},bodyNoAuth:{id:"Pd71un",defaultMessage:"Get smarter responses, upload files, analyze images, and browse the web with our latest model."}});export{ce as ModelOnboardingNUXModal};
//# sourceMappingURL=fugngo47vehqv4de.js.map
