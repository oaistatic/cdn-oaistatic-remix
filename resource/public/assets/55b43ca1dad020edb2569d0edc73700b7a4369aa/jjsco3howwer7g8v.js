const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bh4aysu6v5ebttmj.js","assets/i8w88cc8b3gds516.js","assets/eh26o1l35t2fnjj4.js","assets/root-inht5vcp.css"])))=>i.map(i=>d[i]);
import{gj as D,aM as E,aN as P,co as F,ap as $,bn as A,cb as H,an as y,y as L}from"./eh26o1l35t2fnjj4.js";import{j as e,r as h}from"./i8w88cc8b3gds516.js";import{C as U}from"./h2nc3qmtjg2iytti.js";import{d_ as I,d$ as B,e0 as _,e1 as J,e2 as N,e3 as G,e4 as X}from"./jg63sxiyqeyvfv9f.js";import{D as q}from"./mnu0q6d0479j2i47.js";import{a as K,U as Q,b as V}from"./d15pccfai4sxnie0.js";import{a as W}from"./oi81h0bi5xvl06d7.js";import"./nxfut771jrp9zvqt.js";import"./buoyb8jniswedxm6.js";import"./c4bxzbp1808foto4.js";import"./e32pmw1wei9e4ri6.js";import"./hupck0mwkpjjv2tm.js";import"./mrrvs3fql96l359q.js";function C(s){return D({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(s)}function k(s){return D({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{d:"M7 12V7H6v5h1z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(s)}const Y=E(()=>P(()=>import("./bh4aysu6v5ebttmj.js"),__vite__mapDeps([0,1,2,3])));function fe({threadId:s,threadUserId:a}){return K(Q.isDebugModalOpen)&&e.jsx(F,{isOpen:!0,onClose:()=>V.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:e.jsx(te,{threadId:s,threadUserId:a??void 0,onClose:()=>V.toggleDebugModalOpen()})})}const Z=(s,a)=>{const l=JSON.stringify(a,null,2),o=new Blob([l],{type:"application/json"}),r=window.URL.createObjectURL(o),i=document.createElement("a");i.href=r,i.download=s,i.click(),window.URL.revokeObjectURL(r)},z="<|im_start|>",O="<|im_sep|>",R="<|im_end|>",ee="<|fim_suffix|>";function se({prompt:s}){const[a,l]=h.useState({}),o=[],r=[];let i=0;for(;;){const n=s.indexOf(z,i);if(n===-1)break;const c=s.indexOf(O,n);if(c===-1)break;let t=s.indexOf(R,c);const x=s.indexOf(ee,c);if(x!==-1&&(t===-1||x<t)&&(t=x),t===-1)break;const p=s.substring(n+z.length,c),v=s.substring(c+O.length,t);r.push(n);const j=a[n];o.push(e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>l(u=>({...u,[n]:!u[n]})),children:j?e.jsx(k,{size:14}):e.jsx(C,{size:14})}),e.jsxs("span",{className:"font-semibold",children:["[",p,"]"]})]}),e.jsx("div",{className:y("whitespace-pre-wrap",j&&"line-clamp-2 truncate"),children:v})]},n)),i=t+R.length}function f(n){const c={};for(const t of r)c[t]=n;l(c)}return e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"absolute right-0 top-0 flex items-center gap-2 text-xs font-semibold",children:[e.jsxs("button",{className:"flex items-center gap-1 underline",onClick:()=>f(!0),children:[e.jsx(C,{size:14})," Collapse All"]}),"/",e.jsxs("button",{className:"flex items-center gap-1 underline",onClick:()=>f(!1),children:[e.jsx(k,{size:14})," Expand All"]})]}),e.jsx("div",{className:"flex flex-col gap-3",children:o})]})}const g=$.div`mb-[-5px] pb-0.5 font-semibold uppercase border-b-2 ${({$isSelected:s})=>s?"border-black dark:border-white":"border-transparent"}`;function te({threadId:s,threadUserId:a,message:l,onClose:o}){const[r,i]=h.useState(l?"message":"json"),{data:f,isLoading:n,refetch:c}=W({threadId:s,threadUserId:a,refetchOnMount:"always"}),t=f?.thread;if(h.useEffect(()=>{i(l?"message":t?.turns.length?`turn${t?.turns.length-1}`:"thread")},[t?.turns.length,l]),!n&&!t&&!l)return e.jsxs(q,{onClickRetry:()=>c(),children:["Failed to load."," "]});if(n)return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});const x=t?.turns,p=t?.turns[t.turns.length-1],v=p?.artifacts__?.model_snapshots?.default_id,j=p?.artifacts__?.settings?.model_response?.completion_model?.model,u=v??j,b=p?.artifacts__?.eval_preset,M=a&&s?X(a,s):null;return e.jsx("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:e.jsxs(I,{orientation:"vertical",value:r,onValueChange:m=>i(m),children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsxs(B,{className:"flex items-center justify-start gap-3 p-2",children:[l&&e.jsx(_,{value:"message",children:e.jsx(g,{$isSelected:r==="message",children:"Message"})},"message"),t&&e.jsx(_,{value:"thread",children:e.jsx(g,{$isSelected:r==="thread",children:"Thread"})},"thread"),x?.map((m,d)=>e.jsxs(h.Fragment,{children:[e.jsx(_,{value:`turn${d}`,children:e.jsxs(g,{$isSelected:r===`turn${d}`,children:["Turn[",d,"]"]})},d),m.artifacts__?.debug_ddtrace_urls?.map(S=>e.jsx(g,{$isSelected:!1,children:e.jsxs("a",{target:"_blank",href:S,className:"text-nowrap",rel:"noreferrer",children:["Trace[",d,"] ↗"]})},S))]},d))]}),e.jsxs("div",{className:"flex items-center justify-end",children:[t&&e.jsxs(A,{size:"xs",color:"secondary",onClick:()=>Z("thread.json",t),children:[e.jsx(J,{className:"icon-sm"})," thread.json"]}),e.jsx(H,{onClick:o})]})]}),e.jsxs("div",{className:"flex items-center gap-2 px-2",children:[u&&e.jsxs(e.Fragment,{children:[e.jsx(w,{name:"Model",id:u,className:"flex-shrink-0"})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),b&&b!=="production"&&e.jsxs(e.Fragment,{children:[e.jsx(w,{name:"Eval Preset",id:b,className:"flex-shrink-0"}),e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),M&&e.jsx(e.Fragment,{children:e.jsx(w,{name:"Permalink",id:M,className:"flex-shrink-1"})})]}),x?.map((m,d)=>e.jsxs(N,{value:`turn${d}`,className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[e.jsxs("div",{className:y("flex flex-col gap-2 p-2",(m.index??0)%2===0&&"bg-token-main-surface-secondary"),children:[e.jsx(se,{prompt:m.artifacts__?.debug_info?.main_model_response?.prompt_string??""}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"[assistant]"}),e.jsx("div",{"data-testid":"assistant-response",className:"whitespace-pre-wrap",children:m.model_response?.text})]})]})," "]},d)),t&&e.jsx(N,{value:"thread",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-2",children:e.jsx(T,{data:t,collapsed:4})}),l&&e.jsx(N,{value:"message",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-2",children:e.jsx(T,{data:l,collapsed:4})})]},t?.turns.length??"message")})}function T({data:s,collapsed:a}){const[l,o]=h.useState(a??!0);return e.jsxs("div",{className:"flex flex-col items-start gap-1",children:[e.jsx("button",{onClick:()=>o(!l),className:"flex items-center gap-1",children:l?e.jsxs(e.Fragment,{children:[e.jsx(k,{size:14})," Expand all"]}):e.jsxs(e.Fragment,{children:[e.jsx(C,{size:14})," Collapse all"]})}),e.jsx("div",{className:"w-full",children:e.jsx(Y,{json:s,jsonViewProps:{collapsed:l,shortenTextAfterLength:0}},String(l))})]})}function w({name:s,id:a,className:l}){const o=L(),r=h.useCallback(i=>{G(a,o,i)},[a,o]);return e.jsxs("div",{className:y("flex items-center gap-2 truncate",l),children:[e.jsxs("span",{className:"text-nowrap font-semibold",children:[s,":"]}),e.jsx("span",{title:a,className:"truncate text-gray-500 dark:text-white",children:a}),e.jsx(U,{onCopy:r})]})}export{T as DebugJsonViewer,fe as DebugModal,te as DebugModalContents};
//# sourceMappingURL=jjsco3howwer7g8v.js.map
