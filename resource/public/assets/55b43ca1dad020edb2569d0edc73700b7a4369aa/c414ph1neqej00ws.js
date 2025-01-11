import{r as o,c as P,j as e,M as d}from"./i8w88cc8b3gds516.js";import{gm as E,gn as I,y as L,fg as j,bn as D,ck as N,dz as F,cl as v,cm as x,bU as y}from"./eh26o1l35t2fnjj4.js";import{S as k}from"./fioevnw06bqx6tt9.js";import{fA as A,fB as C,fC as R,fD as S,fE as T,fF as U,fG as z,fH as B}from"./jg63sxiyqeyvfv9f.js";import{S as n}from"./buoyb8jniswedxm6.js";import{S as G}from"./gdsmqpdlbx03h3zp.js";const H=s=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z",fill:"currentcolor"}),o.createElement("path",{d:"M9.5 14.6683V9.33167C9.5 8.5405 10.3752 8.06266 11.0408 8.49049L15.1915 11.1588C15.8038 11.5525 15.8038 12.4475 15.1915 12.8412L11.0408 15.5095C10.3752 15.9373 9.5 15.4595 9.5 14.6683Z",fill:"currentcolor"}));function Z({voice:s}){const[l,r]=o.useState(!1),i=P(),t=E(),g=s.voice,u=s.preview_url,a=o.useRef({playPromise:null}).current,c=I(f=>f.isPlaying&&f.sourceUrl===u),m=L(),h=o.useCallback(async()=>{if(!t)return;const f={voice:g,source:u};j.previews.click(f);try{r(!0),t.changeSource(u),a.playPromise=t.play(),r(!1)}catch(M){j.previews.error(M,f),m.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,t,u,g,a,m]),p=o.useCallback(()=>{t&&(a.playPromise?a.playPromise.then(()=>{t.stop(),a.playPromise=null}):t.stop())},[t,a]),w=o.useCallback(()=>{c?p():l||h()},[p,h,l,c]);return o.useEffect(()=>()=>{c&&p()},[s,c,p]),e.jsx(D,{onClick:w,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:c?G:H,children:c?e.jsx(d,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(d,{id:"JwYDVp",defaultMessage:"Play"})})}const ee={Trigger:J,Content:Y};function V(){return y("174366048")?.value}function J(){return V()?e.jsx(A,{value:C.Speech,icon:e.jsx(k,{className:"icon-sm"}),label:e.jsx(d,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function Y(){const s=V(),l=y("1426009137")?.value;return s?e.jsxs(R,{value:C.Speech,children:[e.jsx(S,{children:e.jsx(_,{})}),l?e.jsx(S,{children:e.jsx(O,{})}):null]}):null}function b(s){const{data:l,isLoading:r}=N(s)||{},i=F();return{isLoading:r,value:l,setValue:t=>{i.mutate({setting:s,value:t})}}}function _(){const{isLoading:s,value:l,setValue:r}=b(v.VoiceName),i=T(),t=U(),g=s?"":z(l,t),u=i.find(({voice:a})=>a===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(d,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[u?e.jsxs(e.Fragment,{children:[e.jsx(Z,{voice:u}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(n.Root,{value:g,onValueChange:a=>r(a),disabled:s,children:[e.jsxs(n.Trigger,{children:[e.jsx(n.Value,{}),e.jsx(n.Icon,{})]}),e.jsx(n.Portal,{children:e.jsx(n.Content,{children:i.map(({voice:a,name:c})=>e.jsx(n.Item,{value:a,children:c},a))})})]})]})]})})})}function O(){const{isLoading:s,value:l,setValue:r}=b(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(d,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(n.Root,{value:s?"":l??x.Auto,onValueChange:i=>r(i),disabled:s,children:[e.jsxs(n.Trigger,{children:[e.jsx(n.Value,{}),e.jsx(n.Icon,{})]}),e.jsx(n.Portal,{children:e.jsxs(n.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(n.Item,{value:x.Auto,children:e.jsx(d,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(x).filter(([i,t])=>t!==x.Auto).map(([i,t])=>e.jsx(n.Item,{value:t,className:"capitalize",children:i},t))]})})]})]}),e.jsx(B,{children:e.jsx(d,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{ee as S,b as u};
//# sourceMappingURL=c414ph1neqej00ws.js.map
