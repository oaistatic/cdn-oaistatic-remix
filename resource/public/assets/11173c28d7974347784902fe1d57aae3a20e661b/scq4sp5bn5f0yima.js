const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dolm5w04w6vqwyf2.js","assets/nqo5y2f0dorhrqsr.js"])))=>i.map(i=>d[i]);
import{W as u,w as f,a6 as c,J as S,aS as U,a8 as r,cY as b}from"./dh0yl0m9q337gmci.js";import{u as y,r as i}from"./nqo5y2f0dorhrqsr.js";import{k as d}from"./ktiwgucld5a8s55m.js";async function m(e){const n=await U(()=>import("./dolm5w04w6vqwyf2.js").then(a=>a.i),__vite__mapDeps([0,1]));if(r!=null&&e?.startsWith(r))return!0;try{return n.get(new URL(e??"").hostname)==="openai.com"}catch{return!1}}function g(e,n){const a=u();return y({queryKey:["safe-url",{serverThreadId:e,url:n,isHistoryAndTrainingDisabled:a}],queryFn:async()=>{if(e==null||n==null)throw new Error("Unexpected falsey useSafeUrlQuery");return await m(n)||b(e)?.safeUrls.includes(n)?{safe:!0}:S.getConversationSafeUrls(e,n,a)},enabled:e!=null&&n!=null})}function q(e,n,a=!0){const o=f(s=>e!=null&&n!=null&&c.isThreadUrlSafe(e,n,s)),{data:{safe:l}={}}=g(e,o?void 0:n);return o||l||!a?n:void 0}function C(e,n){const[a,o]=i.useState(void 0),[l]=i.useState(()=>d(s=>{o(s)},n));return i.useEffect(()=>{l(e)},[l,e]),a===e?e:void 0}function F(e,n){const a=u(),o=f(s=>e==null?[]:c.getThread(e,s)?.safeUrls??[]),{data:l=[]}=y({queryKey:["safe-urls",e,n,a,o],queryFn:async()=>{const s=o.filter(t=>n.includes(t)),p=n.filter(t=>!s.includes(t)),w=(await Promise.allSettled(p.map(async t=>{if(await m(t))return t;if(e==null)return null;try{return(await S.getConversationSafeUrls(e,t,a)).safe?t:null}catch{return null}}))).map(t=>t.status==="fulfilled"?t.value:null).filter(t=>t!=null);return s.concat(w)},enabled:e!=null&&n.length>0});return l}export{C as a,q as b,F as u};
//# sourceMappingURL=scq4sp5bn5f0yima.js.map
