import{a9 as f,$ as c,be as m,r as u,a0 as b,y as e,ae as n,aw as G,aA as g,a1 as v,dF as P}from"./cenhwbprxai3toix.js";import{u as y}from"./er1c9qkbvqkr07px.js";import{j as M}from"./s26g8cj5crlmzrhm.js";import{C,a as T,b as z}from"./kexua9rhv4b58n9v.js";import N from"./kehs2ll784eynnt2.js";import{z as w,bG as L}from"./bomvf441parvbl6l.js";import{G as S}from"./mvwrbzl0ajj9fyy4.js";import{E as k,c as E}from"./hn877s1av7risab0.js";import"./lzqwtbp50roqvxnh.js";import"./bh0hpeydruybhwyo.js";import"./kp41qb109q7zsu08.js";import"./e3lzzvpbrfw34hi0.js";import"./h0w2cfyxquh3a88t.js";import"./i2mam4exf28ww00h.js";import"./jyh9xl3syf7yrebg.js";import"./jth9gz8y4nfsu03x.js";import"./hn586u5on2jlex6e.js";import"./lwsvc0prcm5qybau.js";import"./dmau43v1lisg5o8k.js";import"./ncje3k50k193ehlz.js";import"./ghlhzub07tt8683j.js";import"./f994slaknt0q0gbk.js";import"./id6ryfq9914uxpp5.js";import"./cd7rmveqys68yu6w.js";import"./c657bb6sfxb67al1.js";import"./i5dl7qcorvwptxtt.js";import"./j72yt11gyo474tkr.js";import"./d01hwntyf2775ji3.js";import"./kcdclgxeuzpy449e.js";const A=8,p=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,h=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function _(){const s=c(),t=m(),a=s?.isWorkspaceAccount(),[i,o]=u.useState("mine");y({resetThreadAction:()=>{t("/")}});const d=b();if(s==null)return null;const l=e.jsx(n,{id:"1pqG1A",defaultMessage:"Created by me"}),r=e.jsx(n,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(n,{id:"dgQTc/",defaultMessage:"My GPTs"})}),a&&(i==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{children:l}),e.jsx(h,{onClick:()=>o("shared_with_me"),children:r})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{onClick:()=>o("mine"),children:l}),e.jsx(p,{children:r})]})),i==="mine"&&e.jsx(C,{type:T.Enabled}),e.jsx(I,{emptyMessage:i==="shared_with_me"?d.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:i},i)]})})}function I({cutId:s,emptyMessage:t}){const[a,i]=u.useState(!0),{data:o,hasNextPage:d,fetchNextPage:l,isLoading:r}=M({cutId:s,limit:A,enabled:a});return r&&o==null?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(G,{})}):!r&&o?.pages?.[0].list.items.length===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:o?.pages.flatMap(j=>j.list.items.map(({resource:x})=>e.jsx(z,{gizmoResource:x},x.gizmo.id)))}),!a||d||r?e.jsx(g,{color:"secondary",onClick:()=>{a?l():i(!0)},loading:r,fullWidth:!0,children:e.jsx(n,{...W.discoveryLoadMore})}):null]})}const W=v({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function R({children:s}){const t=c(),a=m();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(N,{})})]}):t.hasPaidSubscription()?null:e.jsx(B,{button:e.jsx(g,{onClick:()=>w(a,"Gizmo landing upsell"),children:e.jsx(n,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(n,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function B({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const he=()=>(P(),null);function fe(){const s=c(),t=s?.canCreateGizmos(),a=m();return u.useEffect(()=>{s!=null&&!t&&a("/gpts")},[s,t,a]),s?.canCreateGizmos()?e.jsx(S,{header:e.jsxs(L,{children:[e.jsx(k,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(E,{})})]}),children:e.jsx(R,{children:e.jsx(_,{})})}):null}export{he as clientLoader,fe as default};
//# sourceMappingURL=cjdl6a793o9ayuoq.js.map