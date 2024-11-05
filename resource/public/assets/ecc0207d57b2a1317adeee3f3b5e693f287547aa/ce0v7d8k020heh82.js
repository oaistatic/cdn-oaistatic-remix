import{r as d,a0 as P,cO as C,cP as E,al as I,cS as j,y as e,aA as D,ae as u,w as L,bC as N,bE as T,bD as v,cT as f,L as A}from"./cenhwbprxai3toix.js";import{aQ as F,af as k,aR as R}from"./lzqwtbp50roqvxnh.js";import{_ as U,S as y,a0 as _,d9 as S,da as G,db as z,dc as H,dd as J}from"./bomvf441parvbl6l.js";import{S as a}from"./i5dl7qcorvwptxtt.js";function O({voice:t}){const[l,o]=d.useState(!1),i=P(),s=C(),g=t.voice,r=t.preview_url,n=d.useRef({playPromise:null}).current,c=E(x=>x.isPlaying&&x.sourceUrl===r),h=I(),m=d.useCallback(async()=>{if(!s)return;const x={voice:g,source:r};j.previews.click(x);try{o(!0),s.changeSource(r),n.playPromise=s.play(),o(!1)}catch(w){j.previews.error(w,x),h.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,s,r,g,n,h]),p=d.useCallback(()=>{s&&(n.playPromise?n.playPromise.then(()=>{s.stop(),n.playPromise=null}):s.stop())},[s,n]),M=d.useCallback(()=>{c?p():l||m()},[p,m,l,c]);return d.useEffect(()=>()=>{c&&p()},[t,c,p]),e.jsx(D,{onClick:M,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:c?F:k,children:c?e.jsx(u,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(u,{id:"JwYDVp",defaultMessage:"Play"})})}const $={Trigger:Y,Content:B};function b(){return A("174366048")?.value}function Y(){return b()?e.jsx(U,{value:y.Speech,icon:e.jsx(R,{className:"icon-sm"}),label:e.jsx(u,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function B(){const t=b(),l=L("1426009137")?.value;return t?e.jsxs(_,{value:y.Speech,children:[e.jsx(S,{children:e.jsx(Q,{})}),l?e.jsx(S,{children:e.jsx(W,{})}):null]}):null}function V(t){const{data:l,isLoading:o}=N(t)||{},i=T();return{isLoading:o,value:l,setValue:s=>{i.mutate({setting:t,value:s})}}}function Q(){const{isLoading:t,value:l,setValue:o}=V(v.VoiceName),i=G(),s=z(),g=t?"":H(l,s),r=i.find(({voice:n})=>n===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[r?e.jsxs(e.Fragment,{children:[e.jsx(O,{voice:r}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:g,onValueChange:n=>o(n),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:i.map(({voice:n,name:c})=>e.jsx(a.Item,{value:n,children:c},n))})})]})]})]})})})}function W(){const{isLoading:t,value:l,setValue:o}=V(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:t?"":l??f.Auto,onValueChange:i=>o(i),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:f.Auto,children:e.jsx(u,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(f).filter(([i,s])=>s!==f.Auto).map(([i,s])=>e.jsx(a.Item,{value:s,className:"capitalize",children:i},s))]})})]})]}),e.jsx(J,{children:e.jsx(u,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{$ as S,V as u};
//# sourceMappingURL=ce0v7d8k020heh82.js.map
