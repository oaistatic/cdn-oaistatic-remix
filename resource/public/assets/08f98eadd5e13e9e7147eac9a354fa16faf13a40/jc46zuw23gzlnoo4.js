import{j as s,aC as o,ak as m}from"./lj2b9v3ilohzzubf.js";import{F as h}from"./d9vdcakeqav3xsi4.js";import{bF as f,bG as g,c as x,bH as S}from"./m2xe8hrs3fe8d0zo.js";import{T as n}from"./79fim6f3v4hoib63.js";import{T as j}from"./je7gjg1s5i2f8a69.js";import{m as N}from"./utt1v4s8vubsyl62.js";import"./np8fo7dxv82gt6zv.js";import"./eymyq72jzbpxck1z.js";const T=3,b=.1,l=[0,.26,.4];function G({nextMessage:e,isLastMessage:c,isRequestActive:r}){let d=c||!e||e&&!f(e.message);const u=g(e?.message),p=x(u.slice(0,T).map(a=>a.entries[0].url));if(e?.message.id&&S(e?.message.id),d){const a=r?s.jsxs("div",{className:"flex items-center gap-1",children:[p.map((t,i)=>s.jsx(N.div,{className:m("-ml-1.5 first:ml-0 last:mr-1.5","relative"),initial:{width:i===0?0:6,opacity:0},animate:{width:20,opacity:1},transition:{duration:b,delay:l[Math.min(i,l.length-1)]},children:s.jsx("div",{className:m("flex h-[22px] w-[22px] items-center overflow-hidden rounded-full","border-2 border-token-main-surface-primary bg-token-main-surface-primary"),children:s.jsx(h,{url:t,size:32,minSize:16,className:"icon-md rounded-full"})})},t)),s.jsx(o,{id:"jjx8Qg",defaultMessage:"Searching the web"})]}):s.jsx(o,{id:"fssXGM",defaultMessage:"Error while searching"});return s.jsx(j,{highlightedCommand:a,status:r?n.Running:n.Error})}return null}export{G as SearchGPTQueryMessage};
//# sourceMappingURL=jc46zuw23gzlnoo4.js.map
