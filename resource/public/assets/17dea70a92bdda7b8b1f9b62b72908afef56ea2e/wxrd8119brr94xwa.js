import{V as T,er as j,aN as A,r as U,P as l,a as d,l as e,Y as o,X as C,bf as G,bc as F,Z as r,bd as I,a0 as X}from"./dr7d3iwdkso0acad.js";import{E as k,G as E,df as L,dg as S}from"./dmeh4acfgftb4ocn.js";import{t as _}from"./kk83ngqx38127x2h.js";import{a as O}from"./hy5i8xpuojx9el7d.js";import{u,w as $}from"./l97vil97vij75d6c.js";import"./nk93elwanh2qmq79.js";import"./mhaqcfmmdyzdbeu3.js";import"./dnerd8yjozxoav5t.js";import"./oj5tgfeg398yhzr0.js";const D="webp",H=2579,Q=1159,Y="srgb",q=3,R="uchar",z=72,B="4:2:0",K=!1,V=!0,W=!1,Z="{{.assetPrefix}}/assets/gpt4o_nux_bg-ofsa8c8d.webp",J={format:D,width:H,height:Q,space:Y,channels:q,depth:R,density:z,chromaSubsampling:B,isProgressive:K,hasProfile:V,hasAlpha:W,src:Z},ie=({onClose:m})=>{const p=T(),{eligible:g,isLoading:h}=O(),{markAsViewed:f}=k(E.AG8PqS2q),x=u(!1),y=u(!0),i=L(),{doesUserHaveAnyAccountsWithPlusFeatures:N}=j(),{categories:M,isLoading:b}=$(),t=A(),s=M.find(({categoryId:v})=>v===S.GPT4o),n=g&&!h&&!b&&s;if(U.useEffect(()=>{n&&l.logEvent(d.gpt4oNUXModalShown,{plan_type:t?.planType})},[n,t?.planType]),!n)return null;const c=()=>{f(),_(),m()},w=()=>{l.logEvent(d.gpt4oNUXModalDismissed,{plan_type:t?.planType,switch_to_gpt4o:!0}),x({modelId:s.defaultModel,location:"GPT‑4o NUX Modal"}),i(s.defaultModel),c()},P=()=>{l.logEvent(d.gpt4oNUXModalTryItNowClicked,{plan_type:t?.planType}),y({modelId:s.defaultModel,location:"GPT‑4o NUX Modal"}),i(s.defaultModel),c()};return e.jsx(o.Root,{isOpen:!0,onClose:C,children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{className:"relative flex max-w-md flex-col items-center rounded-xl p-0 pb-10 text-center focus:outline-none",children:[e.jsxs("div",{className:"relative flex w-full items-center justify-center overflow-hidden bg-clip-content",children:[e.jsx("img",{src:J.src,height:210,fetchPriority:"high",className:"rounded-t-xl"}),e.jsx(G,{className:"absolute right-0 top-0 m-4",onClick:w})]}),e.jsxs("div",{className:"mb-5 mt-8 flex flex-col px-6",children:[e.jsx(F,{className:"font-semibold leading-6",children:e.jsx(r,{...a.title,values:{modelName:"GPT‑4o"}})}),e.jsx(I,{className:"pt-3 text-sm text-token-text-secondary",children:N?e.jsx(r,{...a.bodyPaidFinal,values:{modelName:"GPT‑4o",anotherModelName:"GPT‑4"}}):e.jsx(r,{...a.bodyFreeFinal,values:{modelName:"GPT‑4o"}})})]}),e.jsx("div",{className:"flex justify-center gap-4",children:e.jsx(o.Button,{onClick:P,title:p.formatMessage(a.buttonTryItNow),className:"rounded-xl px-5",color:"primary"})})]})})})},a=X({title:{id:"1kewDD",defaultMessage:"Introducing {modelName}"},bodyPaidFinal:{id:"Z6KHqN",defaultMessage:"You can now try our newest model, {modelName}. It’s faster than {anotherModelName}, better at understanding images, and speaks more languages."},bodyFreeFinal:{id:"w8Y79o",defaultMessage:"You now have limited access to our latest model, {modelName}. It’s smarter, understands images, can browse the web, and speaks more languages."},buttonTryItNow:{id:"RHbQLy",defaultMessage:"Try it now"},titleNoAuth:{id:"k9PG/O",defaultMessage:"Sign up to try GPT‑4o"},bodyNoAuth:{id:"Pd71un",defaultMessage:"Get smarter responses, upload files, analyze images, and browse the web with our latest model."}});export{ie as ModelOnboardingNUXModal};
//# sourceMappingURL=wxrd8119brr94xwa.js.map
