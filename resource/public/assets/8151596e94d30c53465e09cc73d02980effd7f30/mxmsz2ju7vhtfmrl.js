import{t as u,r as a}from"./g92hdia1euilhv3m.js";import{T as o,g as i}from"./itnhsxnrwd7fay2n.js";function c({threadId:r,threadUserId:t,refetchOnMount:e}){return u({queryKey:["thread",r,t],queryFn:async()=>{if(!r)return{thread:null,turns:null};const s=await i({threadId:r,threadUserId:t}),n=s.turns;return{thread:s,turns:n}},enabled:!!r,refetchOnMount:e})}function T({threadId:r,threadUserId:t}){const e=c({threadId:r,threadUserId:t??void 0}),s=e.data;return a.useEffect(()=>{r&&o.setThread(r,s?.turns??[])},[r,s]),{query:e.data?.turns[0]?.user_query,refetch:e.refetch,isLoading:e.isLoading,isError:e.isError}}export{c as a,T as u};
//# sourceMappingURL=mxmsz2ju7vhtfmrl.js.map
