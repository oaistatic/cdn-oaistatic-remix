const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/frq0b1quqth8tpoy.js","assets/l3hptpare9m1mqfv.js","assets/km9gro7xi1t4gs2t.js","assets/root-pbd7dlk8.css"])))=>i.map(i=>d[i]);
import{a0 as u,u as c,K as f,aG as b,ab as l,r}from"./l3hptpare9m1mqfv.js";import{a7 as S,a8 as y,d as g,v as w}from"./c7sgref9mfwezh7s.js";async function m(e){const t=await b(()=>import("./frq0b1quqth8tpoy.js").then(a=>a.i),__vite__mapDeps([0,1,2,3]));if(l!=null&&e?.startsWith(l))return!0;try{return t.get(new URL(e??"").hostname)==="openai.com"}catch{return!1}}function D(e,t){const a=u();return c({queryKey:["safe-url",{serverThreadId:e,url:t,isHistoryAndTrainingDisabled:a}],queryFn:async()=>await m(t)||w.getThreadSafeUrls(e)?.includes(t)?{safe:!0}:f.getConversationSafeUrls(e,t,a),enabled:e!=null&&t!=null})}function q(e,t,a=!0){const o=S(s=>e!=null&&t!=null&&y.isThreadUrlSafe(e,t,s)),{data:{safe:i}={}}=D(e,o?void 0:t);return o||i||!a?t:void 0}function C(e,t){const[a,o]=r.useState(void 0),[i]=r.useState(()=>g(s=>{o(s)},t));return r.useEffect(()=>{i(e)},[i,e]),a===e?e:void 0}function E(e,t){const a=u(),o=S(s=>e==null?[]:y.getThread(e,s)?.safeUrls??[]),{data:i=[]}=c({queryKey:["safe-urls",e,t,a,o],queryFn:async()=>{const s=o.filter(n=>t.includes(n)),d=t.filter(n=>!s.includes(n)),p=(await Promise.allSettled(d.map(async n=>{if(await m(n))return n;if(e==null)return null;try{return(await f.getConversationSafeUrls(e,n,a)).safe?n:null}catch{return null}}))).map(n=>n.status==="fulfilled"?n.value:null).filter(n=>n!=null);return s.concat(p)},enabled:e!=null&&t.length>0});return i}export{C as a,q as b,E as u};
//# sourceMappingURL=dmugo7bnjan4aevw.js.map
