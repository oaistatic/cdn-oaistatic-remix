import{ef as y,h as R,a6 as S,m as f,l as A,eg as T}from"./lj2b9v3ilohzzubf.js";import{c as _,eq as p}from"./m2xe8hrs3fe8d0zo.js";const d=()=>{let e,s;const n=new Promise((r,a)=>{e=r,s=a});return{resolve:e,reject:s,value:n}},D=(e,s)=>{const n=e.name??`batcher:${Math.random().toString(16).slice(2)})`,r=e.scheduler??v(10),a=globalThis.__BATSHIT_DEVTOOLS__?.for(n);let t={seq:0,batch:new Set,currentRequest:d(),timer:void 0,start:null,latest:null};a?.create({seq:t.seq});const o=()=>{t.batch=new Set,t.currentRequest=d(),t.timer=void 0,t.start=null,t.latest=null};return{fetch:u=>{t.start||(t.start=Date.now()),t.latest=Date.now(),t.batch.add(u),clearTimeout(t.timer);const i=r(t.start,t.latest,t.batch.size);a?.queue({seq:t.seq,query:u,batch:[...t.batch],scheduled:i,latest:t.latest,start:t.start});const m=()=>{const c=t.seq,h=e.fetcher([...t.batch]),q=t.currentRequest;return a?.fetch({seq:c,batch:[...t.batch]}),o(),h.then(l=>{a?.data({seq:c,data:l}),q.resolve(l)}).catch(l=>{a?.error({seq:c,error:l}),q.reject(l)}),t.seq++,h};if(i==="immediate"){const c=t.currentRequest;return m(),c.value.then(h=>e.resolver(h,u))}else return i==="never"?t.currentRequest.value.then(c=>e.resolver(c,u)):(t.timer=setTimeout(m,i),t.currentRequest.value.then(c=>e.resolver(c,u)))}}},M=e=>(s,n)=>s.find(r=>r[e]==n),v=e=>(s,n)=>{const r=n-s;return e-r},w=y(e=>D({fetcher:async s=>{const n=new Map;for await(const r of R.streamedJsonPost(`${S}/attributions`,{urls:s}))r.attribution&&n.set(r.url,r.attribution),e.setQueryData(["attribution",{url:r.url}],r.attribution);return _(s.map(r=>{const a=n.get(r);return a&&{url:r,attribution:a}}))},resolver:M("url"),scheduler:v(100)}));function C(e,{useBaseUrl:s=!0,enabled:n=!0}={}){const r=s?p(e):e,a=f(),t=w(a);return A({queryKey:["attribution",{url:r}],queryFn:async()=>(await t.fetch(r)).attribution,enabled:n&&!!e})}function P(e,{useBaseUrl:s=!0,enabled:n=!0}={}){const r=s?e.map(p):e,a=f(),t=w(a);return T({queries:r.map(o=>({queryKey:["attribution",{url:o}],queryFn:async()=>(await t.fetch(o)).attribution,enabled:r.length>0&&n})),combine:o=>{const b=new Map;for(let u=0;u<o.length;u++){const i=o[u].data;i&&b.set(e[u],i)}return b}})}export{C as a,D as c,M as k,P as u,v as w};
//# sourceMappingURL=d7i7xmy31eeb8e80.js.map
