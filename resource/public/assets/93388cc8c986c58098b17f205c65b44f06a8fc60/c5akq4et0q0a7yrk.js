import{aw as a,r as o}from"./eljox9y9liclbxjs.js";import{h as i,i as c}from"./q02ioa5nz1msdn73.js";function f({threadId:r,threadUserId:n,refetchOnMount:e}){return a({queryKey:["thread",r,n],queryFn:async()=>{if(!r)return{thread:null,turns:null};const s=await c({threadId:r,threadUserId:n}),t=s.turns;return{thread:s,turns:t}},enabled:!!r,refetchOnMount:e})}function h({threadId:r,threadUserId:n}){var t,u;const e=f({threadId:r,threadUserId:n}),s=e.data;return o.useEffect(()=>{r&&i.setThread(r,(s==null?void 0:s.turns)??[])},[r,s]),{query:(u=(t=e.data)==null?void 0:t.turns[0])==null?void 0:u.user_query,refetch:e.refetch,isLoading:e.isLoading,isError:e.isError}}export{f as a,h as u};
//# sourceMappingURL=c5akq4et0q0a7yrk.js.map
