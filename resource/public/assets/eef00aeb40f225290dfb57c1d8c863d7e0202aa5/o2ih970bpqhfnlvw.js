const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/i0lf7qg6iju1327y.js","assets/gfs0keudzvcg5rgq.js","assets/iqnriohw8g1d2uyi.js","assets/root-f6p3uecq.css"])))=>i.map(i=>d[i]);
import{a4 as u,y as c,ag as f,t as S,V as y,aJ as g,ai as l,r,o as b}from"./gfs0keudzvcg5rgq.js";import{n as w}from"./b6arjgg215unn3v3.js";async function m(e){const t=await g(()=>import("./i0lf7qg6iju1327y.js").then(a=>a.i),__vite__mapDeps([0,1,2,3]));if(l!=null&&e?.startsWith(l))return!0;try{return t.get(new URL(e??"").hostname)==="openai.com"}catch{return!1}}function D(e,t){const a=u();return S({queryKey:["safe-url",{serverThreadId:e,url:t,isHistoryAndTrainingDisabled:a}],queryFn:async()=>await m(t)||b.getThreadSafeUrls(e)?.includes(t)?{safe:!0}:y.getConversationSafeUrls(e,t,a),enabled:e!=null&&t!=null})}function V(e,t,a=!0){const o=c(s=>e!=null&&t!=null&&f.isThreadUrlSafe(e,t,s)),{data:{safe:i}={}}=D(e,o?void 0:t);return o||i||!a?t:void 0}function q(e,t){const[a,o]=r.useState(void 0),[i]=r.useState(()=>w(s=>{o(s)},t));return r.useEffect(()=>{i(e)},[i,e]),a===e?e:void 0}function C(e,t){const a=u(),o=c(s=>e==null?[]:f.getThread(e,s)?.safeUrls??[]),{data:i=[]}=S({queryKey:["safe-urls",e,t,a,o],queryFn:async()=>{const s=o.filter(n=>t.includes(n)),d=t.filter(n=>!s.includes(n)),p=(await Promise.allSettled(d.map(async n=>{if(await m(n))return n;if(e==null)return null;try{return(await y.getConversationSafeUrls(e,n,a)).safe?n:null}catch{return null}}))).map(n=>n.status==="fulfilled"?n.value:null).filter(n=>n!=null);return s.concat(p)},enabled:e!=null&&t.length>0});return i}export{q as a,V as b,C as u};
//# sourceMappingURL=o2ih970bpqhfnlvw.js.map
