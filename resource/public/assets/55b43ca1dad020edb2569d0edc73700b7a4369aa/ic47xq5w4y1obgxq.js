import{gw as y,R,a1 as S,bY as A}from"./eh26o1l35t2fnjj4.js";import{fk as f}from"./jg63sxiyqeyvfv9f.js";import{a as p,u as T,ak as _}from"./i8w88cc8b3gds516.js";const d=()=>{let e,s;const n=new Promise((r,a)=>{e=r,s=a});return{resolve:e,reject:s,value:n}},D=(e,s)=>{const n=e.name??`batcher:${Math.random().toString(16).slice(2)})`,r=e.scheduler??v(10),a=globalThis.__BATSHIT_DEVTOOLS__?.for(n);let t={seq:0,batch:new Set,currentRequest:d(),timer:void 0,start:null,latest:null};a?.create({seq:t.seq});const c=()=>{t.batch=new Set,t.currentRequest=d(),t.timer=void 0,t.start=null,t.latest=null};return{fetch:u=>{t.start||(t.start=Date.now()),t.latest=Date.now(),t.batch.add(u),clearTimeout(t.timer);const i=r(t.start,t.latest,t.batch.size);a?.queue({seq:t.seq,query:u,batch:[...t.batch],scheduled:i,latest:t.latest,start:t.start});const m=()=>{const o=t.seq,h=e.fetcher([...t.batch]),q=t.currentRequest;return a?.fetch({seq:o,batch:[...t.batch]}),c(),h.then(l=>{a?.data({seq:o,data:l}),q.resolve(l)}).catch(l=>{a?.error({seq:o,error:l}),q.reject(l)}),t.seq++,h};if(i==="immediate"){const o=t.currentRequest;return m(),o.value.then(h=>e.resolver(h,u))}else return i==="never"?t.currentRequest.value.then(o=>e.resolver(o,u)):(t.timer=setTimeout(m,i),t.currentRequest.value.then(o=>e.resolver(o,u)))}}},M=e=>(s,n)=>s.find(r=>r[e]==n),v=e=>(s,n)=>{const r=n-s;return e-r},w=y(e=>D({fetcher:async s=>{const n=new Map;for await(const r of R.streamedJsonPost(`${S}/attributions`,{urls:s}))r.attribution&&n.set(r.url,r.attribution),e.setQueryData(["attribution",{url:r.url}],r.attribution);return A(s.map(r=>{const a=n.get(r);return a&&{url:r,attribution:a}}))},resolver:M("url"),scheduler:v(100)}));function C(e,{useBaseUrl:s=!0,enabled:n=!0}={}){const r=s?f(e):e,a=p(),t=w(a);return T({queryKey:["attribution",{url:r}],queryFn:async()=>(await t.fetch(r)).attribution,enabled:n&&!!e})}function P(e,{useBaseUrl:s=!0,enabled:n=!0}={}){const r=s?e.map(f):e,a=p(),t=w(a);return _({queries:r.map(c=>({queryKey:["attribution",{url:c}],queryFn:async()=>(await t.fetch(c)).attribution,enabled:r.length>0&&n})),combine:c=>{const b=new Map;for(let u=0;u<c.length;u++){const i=c[u].data;i&&b.set(e[u],i)}return b}})}export{C as a,P as u};
//# sourceMappingURL=ic47xq5w4y1obgxq.js.map
