import{c as m,f as p,en as A,bF as g,eo as C,aj as I,dl as R,j as T,r as u}from"./elatgogjtv7nqe0m.js";import{T as h}from"./h1jpzm6tqkxt344d.js";const c=m(p(()=>({statusMap:{}}))),M=s=>c(t=>t.statusMap[s]),H=(s,t)=>{c.setState(n=>{n.statusMap[s]=t;const e=h.getServerThreadId(s);e&&(n.statusMap[e]=t)})},f=s=>{c.setState(t=>{for(const{id:n,async_status:e}of s)e!=null&&(t.statusMap[n]={source:A.SERVER,value:e})})},_=28,y="conversationHistory";function N(){const t=g()?.includes(C)??!1,n=I(),e=!t&&!!n?.data,{data:r,fetchNextPage:S,hasNextPage:d,isInitialLoading:l,isFetchingNextPage:v,isError:E}=R({queryKey:[y],queryFn:async({pageParam:a})=>{const o=await T.getConversations({offset:a,limit:_});return f(o.items),o},initialPageParam:0,getNextPageParam:a=>{const o=a.offset+a.limit;return o<a.total?o:void 0},enabled:e}),i=u.useMemo(()=>r?.pages.flatMap(a=>a.items)??[],[r]);return u.useEffect(()=>{f(i)},[i]),{conversations:i,data:r,fetchNextPage:S,hasNextPage:d,isLoading:l,isFetchingNextPage:v,isError:E}}function P(s){s.invalidateQueries({queryKey:[y]})}export{y as C,M as a,P as r,H as s,N as u};
//# sourceMappingURL=invgdph6vy3ds9mr.js.map