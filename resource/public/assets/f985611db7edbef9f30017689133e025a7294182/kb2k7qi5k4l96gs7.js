import{r as d,a3 as C,cN as I,cO as N,ag as E,cR as j,t as e,aT as D,a8 as u,bH as L,bK as T,bI as v,cS as f,bJ as y}from"./elatgogjtv7nqe0m.js";import{aQ as F,a9 as R,aR as k}from"./cr91oy4eihkrvo1z.js";import{ad as A,S as b,ae as U,aa as S,db as H,dc as J,dd as z,de as G}from"./htp5iqft2rzvr58f.js";import{S as a}from"./cguzkiw1ysteyh96.js";function O({voice:t}){const[l,o]=d.useState(!1),i=C(),s=I(),g=t.voice,r=t.preview_url,n=d.useRef({playPromise:null}).current,c=N(x=>x.isPlaying&&x.sourceUrl===r),h=E(),m=d.useCallback(async()=>{if(!s)return;const x={voice:g,source:r};j.previews.click(x);try{o(!0),s.changeSource(r),n.playPromise=s.play(),o(!1)}catch(P){j.previews.error(P,x),h.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,s,r,g,n,h]),p=d.useCallback(()=>{s&&(n.playPromise?n.playPromise.then(()=>{s.stop(),n.playPromise=null}):s.stop())},[s,n]),w=d.useCallback(()=>{c?p():l||m()},[p,m,l,c]);return d.useEffect(()=>()=>{c&&p()},[t,c,p]),e.jsx(D,{onClick:w,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:c?F:R,children:c?e.jsx(u,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(u,{id:"JwYDVp",defaultMessage:"Play"})})}const Z={Trigger:Y,Content:_};function V(){return y("174366048")?.value}function Y(){return V()?e.jsx(A,{value:b.Speech,icon:e.jsx(k,{className:"icon-sm"}),label:e.jsx(u,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function _(){const t=V(),l=y("1426009137")?.value;return t?e.jsxs(U,{value:b.Speech,children:[e.jsx(S,{children:e.jsx(B,{})}),l?e.jsx(S,{children:e.jsx(K,{})}):null]}):null}function M(t){const{data:l,isLoading:o}=L(t)||{},i=T();return{isLoading:o,value:l,setValue:s=>{i.mutate({setting:t,value:s})}}}function B(){const{isLoading:t,value:l,setValue:o}=M(v.VoiceName),i=H(),s=J(),g=t?"":z(l,s),r=i.find(({voice:n})=>n===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[r?e.jsxs(e.Fragment,{children:[e.jsx(O,{voice:r}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:g,onValueChange:n=>o(n),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:i.map(({voice:n,name:c})=>e.jsx(a.Item,{value:n,children:c},n))})})]})]})]})})})}function K(){const{isLoading:t,value:l,setValue:o}=M(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:t?"":l??f.Auto,onValueChange:i=>o(i),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:f.Auto,children:e.jsx(u,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(f).filter(([i,s])=>s!==f.Auto).map(([i,s])=>e.jsx(a.Item,{value:s,className:"capitalize",children:i},s))]})})]})]}),e.jsx(G,{children:e.jsx(u,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{Z as S,M as u};
//# sourceMappingURL=kb2k7qi5k4l96gs7.js.map
