import{aM as f,a3 as d,a8 as u,r as m,L as v,m as e,aT as o,c8 as G,aZ as g,K as P,fY as M}from"./gfs0keudzvcg5rgq.js";import{cU as y,e7 as T,av as j,eh as C,dT as z,ef as N}from"./b6arjgg215unn3v3.js";import{C as w,b as S,c as L,a as A}from"./djgcbw3qjhgwnd5b.js";import{G as k}from"./l8b8agpwnuh9dc38.js";import{E,P as _}from"./gyqgqt7py9lqpp7m.js";import"./iqnriohw8g1d2uyi.js";import"./okj5y0nipwhz20cq.js";import"./kfqzi8h3ie5n60ji.js";import"./o7amlkgkeatodl16.js";import"./eq1nad9lwlbxs0ds.js";import"./nz3b0tgrlhvp60cd.js";import"./hstfd7jg0qovo68e.js";import"./itggh6ang5sjriim.js";const I=8,h=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,p=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function W(){const s=d(),t=u(),r=s?.isWorkspaceAccount(),[a,i]=m.useState("mine");y({resetThreadAction:()=>{t("/")}});const c=v();if(s==null)return null;const l=e.jsx(o,{id:"1pqG1A",defaultMessage:"Created by me"}),n=e.jsx(o,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(o,{id:"dgQTc/",defaultMessage:"My GPTs"})}),r&&(a==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{children:l}),e.jsx(p,{onClick:()=>i("shared_with_me"),children:n})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{onClick:()=>i("mine"),children:l}),e.jsx(h,{children:n})]})),a==="mine"&&e.jsx(w,{type:S.Enabled}),e.jsx(R,{emptyMessage:a==="shared_with_me"?c.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:a},a)]})})}function R({cutId:s,emptyMessage:t}){const[r,a]=m.useState(!0),{data:i,hasNextPage:c,fetchNextPage:l,isLoading:n}=T({cutId:s,limit:I,enabled:r});return n&&i==null?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(G,{})}):!n&&i?.pages?.[0].list.items.length===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:i?.pages.flatMap(b=>b.list.items.map(({resource:x})=>e.jsx(L,{gizmoResource:x},x.gizmo.id)))}),!r||c||n?e.jsx(g,{color:"secondary",onClick:()=>{r?l():a(!0)},loading:n,fullWidth:!0,children:e.jsx(o,{...U.discoveryLoadMore})}):null]})}const U=P({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function B({children:s}){const t=d(),r=u(),a=j();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,!a&&e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(C,{})})]}):t.hasPaidSubscription()?null:e.jsx(D,{button:e.jsx(g,{onClick:()=>z(r,"Gizmo landing upsell"),children:e.jsx(o,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(o,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function D({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const se=()=>(M(),null);function te(){const s=d(),t=s?.canCreateGizmos(),r=u(),a=j();if(m.useEffect(()=>{s!=null&&!t&&r("/gpts")},[s,t,r]),!s?.canCreateGizmos())return null;const i=e.jsx(B,{children:e.jsx(W,{})});return a?e.jsx(A,{children:i}):e.jsx(k,{header:e.jsxs(N,{children:[e.jsx(E,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(_,{})})]}),children:i})}export{se as clientLoader,te as default};
//# sourceMappingURL=lr3vo9cletl0uyuj.js.map
