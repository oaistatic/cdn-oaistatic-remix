import{r as m,j as a,M as d}from"./lklglvrzltpv3f05.js";import{M as p,aw as u,az as f}from"./muemwvh3ybsggbb1.js";import{bi as h,bj as c,F as M}from"./cp734xu9t8fnlezn.js";function k({messages:i}){const[r,g]=m.useState(!1),t=i.reduce((e,s)=>(s.message.content.content_type===p.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),x=[...t].slice(0,r?t.size:2),o=h(i);return m.useEffect(()=>{o.forEach(({contentUrl:e})=>{if(!c.getState().images.has(e)){const s=new Image;s.onload=()=>{c.setState(n=>({images:new Set(n.images).add(e)}))},s.src=e}})},[o]),a.jsxs("div",{className:u("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[x.map(([e,s],n)=>a.jsxs(l,{href:e,target:"_blank",children:[a.jsx(M,{url:e,className:"flex-shrink-0"}),s]},n)),!r&&t.size>2&&a.jsx(l,{className:"flex-shrink-0",onClick:()=>g(e=>!e),children:a.jsx(d,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:t.size-2}})})]})}const l=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{k as SearchResultMessage};
//# sourceMappingURL=c3ko751x0isq86kq.js.map
