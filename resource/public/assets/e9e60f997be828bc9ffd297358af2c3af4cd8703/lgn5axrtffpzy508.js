import{r as d,X as P,cL as C,cM as I,a9 as E,cP as j,y as e,av as L,a1 as u,w as N,by as D,bB as A,bz as v,cQ as f,bA as F}from"./du9ygo55hccsm0ec.js";import{aU as T,ah as U,aV as k}from"./ibjw18ivx5tw615x.js";import{a2 as R,S as y,a3 as z,a0 as S,da as G,db as _,dc as B,dd as H}from"./hc0go6t8u8it292j.js";import{S as a}from"./g917upaeimfgkdh1.js";function J({voice:t}){const[l,o]=d.useState(!1),i=P(),s=C(),g=t.voice,r=t.preview_url,n=d.useRef({playPromise:null}).current,c=I(x=>x.isPlaying&&x.sourceUrl===r),h=E(),m=d.useCallback(async()=>{if(!s)return;const x={voice:g,source:r};j.previews.click(x);try{o(!0),s.changeSource(r),n.playPromise=s.play(),o(!1)}catch(w){j.previews.error(w,x),h.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,s,r,g,n,h]),p=d.useCallback(()=>{s&&(n.playPromise?n.playPromise.then(()=>{s.stop(),n.playPromise=null}):s.stop())},[s,n]),M=d.useCallback(()=>{c?p():l||m()},[p,m,l,c]);return d.useEffect(()=>()=>{c&&p()},[t,c,p]),e.jsx(L,{onClick:M,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:c?T:U,children:c?e.jsx(u,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(u,{id:"JwYDVp",defaultMessage:"Play"})})}const $={Trigger:Y,Content:O};function b(){return F("174366048")?.value}function Y(){return b()?e.jsx(R,{value:y.Speech,icon:e.jsx(k,{className:"icon-sm"}),label:e.jsx(u,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function O(){const t=b(),l=N("1426009137")?.value;return t?e.jsxs(z,{value:y.Speech,children:[e.jsx(S,{children:e.jsx(Q,{})}),l?e.jsx(S,{children:e.jsx(W,{})}):null]}):null}function V(t){const{data:l,isLoading:o}=D(t)||{},i=A();return{isLoading:o,value:l,setValue:s=>{i.mutate({setting:t,value:s})}}}function Q(){const{isLoading:t,value:l,setValue:o}=V(v.VoiceName),i=G(),s=_(),g=t?"":B(l,s),r=i.find(({voice:n})=>n===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[r?e.jsxs(e.Fragment,{children:[e.jsx(J,{voice:r}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:g,onValueChange:n=>o(n),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:i.map(({voice:n,name:c})=>e.jsx(a.Item,{value:n,children:c},n))})})]})]})]})})})}function W(){const{isLoading:t,value:l,setValue:o}=V(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:t?"":l??f.Auto,onValueChange:i=>o(i),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:f.Auto,children:e.jsx(u,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(f).filter(([i,s])=>s!==f.Auto).map(([i,s])=>e.jsx(a.Item,{value:s,className:"capitalize",children:i},s))]})})]})]}),e.jsx(H,{children:e.jsx(u,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{$ as S,V as u};
//# sourceMappingURL=lgn5axrtffpzy508.js.map
