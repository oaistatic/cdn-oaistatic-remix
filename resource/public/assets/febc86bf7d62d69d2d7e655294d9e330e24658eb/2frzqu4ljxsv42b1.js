import{r as m,M as x,m as a,aD as d,aS as u,aL as f}from"./813n9w6xsthevnqe.js";import{F as h}from"./l6om5d3bfq12f0ew.js";import{aP as M,aQ as c}from"./cvslyloecw0ll845.js";import"./h2ot8b85cve7rfg1.js";function b({messages:i}){const[r,g]=m.useState(!1),t=i.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),p=[...t].slice(0,r?t.size:2),o=M(i);return m.useEffect(()=>{o.forEach(({contentUrl:e})=>{if(!c.getState().images.has(e)){const s=new Image;s.onload=()=>{c.setState(n=>({images:new Set(n.images).add(e)}))},s.src=e}})},[o]),a.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[p.map(([e,s],n)=>a.jsxs(l,{href:e,target:"_blank",children:[a.jsx(h,{url:e,className:"flex-shrink-0"}),s]},n)),!r&&t.size>2&&a.jsx(l,{className:"flex-shrink-0",onClick:()=>g(e=>!e),children:a.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:t.size-2}})})]})}const l=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{b as SearchResultMessage};
//# sourceMappingURL=2frzqu4ljxsv42b1.js.map
