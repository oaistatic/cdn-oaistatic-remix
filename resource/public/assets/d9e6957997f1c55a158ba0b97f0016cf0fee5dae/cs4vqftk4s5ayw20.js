import{r as n,M as x,y as t,O as d,a1 as u,W as f}from"./o1ivbuadejprpakj.js";import{bP as p,bO as h}from"./i16nwty7q09iq1st.js";import{g as M}from"./hcdx55t4k5s9h90a.js";import"./hpmltgx65508529x.js";import"./l4ck0jsx010sty0l.js";import"./j8qjjjf38v0oqfi8.js";import"./j76lrd6kdu2dvuce.js";import"./bwu3xfza0pxwe6ru.js";import"./l8i8os8zb9hbkizc.js";import"./kgovzb8a5v2gsd51.js";import"./cg1djtp0bw9bc15a.js";import"./nbsdgm0upgk4irzm.js";import"./cydma3qyvyx80hyp.js";import"./jq9wblohokz1apkp.js";import"./m1obf60srwp2ts7s.js";import"./mjcfyknvrjj9hd19.js";function _({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{_ as SearchResultMessage};
//# sourceMappingURL=cs4vqftk4s5ayw20.js.map
