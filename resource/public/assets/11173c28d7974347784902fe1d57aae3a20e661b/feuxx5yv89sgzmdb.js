import{r as m,j as a,M as x}from"./nqo5y2f0dorhrqsr.js";import{M as p,as as u,av as f}from"./dh0yl0m9q337gmci.js";import{bd as h,be as c,ba as M}from"./ktiwgucld5a8s55m.js";function k({messages:i}){const[r,g]=m.useState(!1),t=i.reduce((e,s)=>(s.message.content.content_type===p.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),d=[...t].slice(0,r?t.size:2),o=h(i);return m.useEffect(()=>{o.forEach(({contentUrl:e})=>{if(!c.getState().images.has(e)){const s=new Image;s.onload=()=>{c.setState(n=>({images:new Set(n.images).add(e)}))},s.src=e}})},[o]),a.jsxs("div",{className:u("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[d.map(([e,s],n)=>a.jsxs(l,{href:e,target:"_blank",children:[a.jsx(M,{url:e,className:"flex-shrink-0"}),s]},n)),!r&&t.size>2&&a.jsx(l,{className:"flex-shrink-0",onClick:()=>g(e=>!e),children:a.jsx(x,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:t.size-2}})})]})}const l=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{k as SearchResultMessage};
//# sourceMappingURL=feuxx5yv89sgzmdb.js.map