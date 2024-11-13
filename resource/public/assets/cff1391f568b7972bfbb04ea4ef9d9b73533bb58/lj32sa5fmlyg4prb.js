import{aw as f,a2 as d,Z as m,r as u,aj as G,a6 as e,aH as o,b1 as v,aL as j,ak as P,et as y}from"./l3hptpare9m1mqfv.js";import{di as M,d3 as C,b7 as g,q as T,dY as z}from"./c7sgref9mfwezh7s.js";import{C as N,a as w,G as S,b as L}from"./ll5kim314rfmj8nj.js";import k from"./fg34biyrlirgihlj.js";import{G as A}from"./ga9eeq25pwgxodaz.js";import{E,P as _}from"./dpmpp4vjdzk6xdj4.js";import"./km9gro7xi1t4gs2t.js";import"./nht10jce1juzcd0e.js";import"./oi1chbp7ana2d10k.js";import"./ds7myuf7nkx8b20x.js";import"./mh08vel4sd7gl5e4.js";import"./n190yr24ltcex025.js";import"./dl7ede68b0iso9ei.js";import"./f6pcsdsvt7lhgd9d.js";import"./ighnjpo7t7h4h60s.js";import"./g3xwycjx8gd49erj.js";import"./bkgevi7dwlpkqxzf.js";import"./ev3ca23urw2rf3h9.js";import"./i4jzjalmx9h3noc6.js";import"./o8pwa9djmd3woe3v.js";const I=8,p=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,h=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function W(){const s=d(),t=m(),r=s?.isWorkspaceAccount(),[a,i]=u.useState("mine");M({resetThreadAction:()=>{t("/")}});const c=G();if(s==null)return null;const l=e.jsx(o,{id:"1pqG1A",defaultMessage:"Created by me"}),n=e.jsx(o,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(o,{id:"dgQTc/",defaultMessage:"My GPTs"})}),r&&(a==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{children:l}),e.jsx(h,{onClick:()=>i("shared_with_me"),children:n})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{onClick:()=>i("mine"),children:l}),e.jsx(p,{children:n})]})),a==="mine"&&e.jsx(N,{type:w.Enabled}),e.jsx(R,{emptyMessage:a==="shared_with_me"?c.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:a},a)]})})}function R({cutId:s,emptyMessage:t}){const[r,a]=u.useState(!0),{data:i,hasNextPage:c,fetchNextPage:l,isLoading:n}=C({cutId:s,limit:I,enabled:r});return n&&i==null?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(v,{})}):!n&&i?.pages?.[0].list.items.length===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:i?.pages.flatMap(b=>b.list.items.map(({resource:x})=>e.jsx(S,{gizmoResource:x},x.gizmo.id)))}),!r||c||n?e.jsx(j,{color:"secondary",onClick:()=>{r?l():a(!0)},loading:n,fullWidth:!0,children:e.jsx(o,{...B.discoveryLoadMore})}):null]})}const B=P({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function U({children:s}){const t=d(),r=m(),a=g();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,!a&&e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(k,{})})]}):t.hasPaidSubscription()?null:e.jsx(D,{button:e.jsx(j,{onClick:()=>T(r,"Gizmo landing upsell"),children:e.jsx(o,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(o,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function D({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const le=()=>(y(),null);function ce(){const s=d(),t=s?.canCreateGizmos(),r=m(),a=g();if(u.useEffect(()=>{s!=null&&!t&&r("/gpts")},[s,t,r]),!s?.canCreateGizmos())return null;const i=e.jsx(U,{children:e.jsx(W,{})});return a?e.jsx(L,{children:i}):e.jsx(A,{header:e.jsxs(z,{children:[e.jsx(E,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(_,{})})]}),children:i})}export{le as clientLoader,ce as default};
//# sourceMappingURL=lj32sa5fmlyg4prb.js.map