import{r as n,M as x,y as t,a4 as d,ae as u,a9 as f}from"./cenhwbprxai3toix.js";import{bP as p,bO as h}from"./bomvf441parvbl6l.js";import{g as M}from"./hn877s1av7risab0.js";import"./lzqwtbp50roqvxnh.js";import"./hn586u5on2jlex6e.js";import"./kp41qb109q7zsu08.js";import"./e3lzzvpbrfw34hi0.js";import"./h0w2cfyxquh3a88t.js";import"./i2mam4exf28ww00h.js";import"./s26g8cj5crlmzrhm.js";import"./jth9gz8y4nfsu03x.js";import"./c657bb6sfxb67al1.js";import"./jyh9xl3syf7yrebg.js";import"./i5dl7qcorvwptxtt.js";import"./j72yt11gyo474tkr.js";import"./d01hwntyf2775ji3.js";import"./kcdclgxeuzpy449e.js";import"./bh0hpeydruybhwyo.js";function O({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{O as SearchResultMessage};
//# sourceMappingURL=mr8kcqifgqmriieb.js.map
