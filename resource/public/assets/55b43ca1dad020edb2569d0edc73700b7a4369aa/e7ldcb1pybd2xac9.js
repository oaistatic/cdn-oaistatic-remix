import{r as u,j as s}from"./i8w88cc8b3gds516.js";import{ap as p,b$ as h,j as d,an as o,b5 as g}from"./eh26o1l35t2fnjj4.js";import{S as j,l as N,E as k,F as S}from"./jg63sxiyqeyvfv9f.js";const m=4;function C({navigation:e,onShowSearchResults:n,trackContentReferenceEvent:r}){const{value:i}=h("3472722167");u.useEffect(()=>{r(d.searchContentReferenceShown,"search_content_reference_shown",e.type,{urls:e.domains.map(a=>a.url).join(",")})},[e]);let t=[],l=[],c=e.domains[0].sub_domains.length>0&&i;return e.domains.length>3||c?(t=[e.domains[0]],l=e.domains.slice(1,m)):t=e.domains,s.jsxs("div",{className:o("not-prose mb-3 flex gap-2",l.length>0?"flex-col":"flex-row"),children:[t.map((a,b)=>s.jsx(x,{isPrimaryDomain:b===0,isFistLineDomain:!0,navigationDomain:a,trackContentReferenceEvent:r},a.url)),l.length>0&&s.jsxs("div",{className:"flex items-stretch gap-2",children:[l.map(a=>s.jsx(x,{navigationDomain:a,trackContentReferenceEvent:r},a.url)),e.domains.length>m&&s.jsx(v,{onShowSearchResults:n,trackContentReferenceEvent:r})]})]})}const f=p.div`border border-token-border-light shadow-xxs hover:bg-token-main-surface-secondary dark:border-token-border-xlight dark:bg-token-main-surface-secondary hover:dark:bg-token-main-surface-tertiary`,v=({onShowSearchResults:e,trackContentReferenceEvent:n})=>s.jsx(f,{className:"flex w-8 cursor-pointer items-center justify-center rounded-xl",onClick:()=>{n(d.searchContentReferenceClicked,"search_content_reference_clicked","navigation",{sidebar:"sidebar"}),e(j.Sources,N.Links)},children:s.jsx(g,{className:"opacity-50"})}),x=({isPrimaryDomain:e,isFistLineDomain:n,navigationDomain:r,trackContentReferenceEvent:i})=>s.jsx("div",{className:o("flex-1",e?"min-w-[40%]":"min-w-0"),children:s.jsx(_,{isFistLineDomain:n,isPrimaryDomain:e,title:r.title,subtitle:r.subtitle??void 0,url:r.url,domain:r.domain,subDomains:r.sub_domains,trackContentReferenceEvent:i})}),_=({isFistLineDomain:e,isPrimaryDomain:n,title:r,subtitle:i,url:t,subDomains:l,trackContentReferenceEvent:c})=>{const{value:a}=h("3472722167");return u.useState(!1),l.length>0,s.jsxs(f,{className:"group/navigation flex flex-col rounded-2xl text-token-link",children:[s.jsxs(k,{href:t,onClick:()=>c(d.searchContentReferenceClicked,"search_content_reference_clicked","navigation",{url:t,title:r}),className:o("flex flex-row items-center gap-2",e?"px-4 py-3":"px-4 py-2.5"),children:[s.jsx("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1D53BF0D] group-hover/navigation:bg-[#1D53BF1A] dark:bg-[#7CA8FF33] group-hover/navigation:dark:bg-[#7CA8FF33]",children:s.jsx(S,{url:t,size:32,minSize:20,className:"icon-sm rounded-full"})}),s.jsxs("div",{className:"flex min-w-0 flex-col gap-0.5",children:[s.jsxs("div",{className:o("flex items-center gap-1 font-semibold",e?"text-sm":"text-xs"),children:[s.jsx("span",{className:"flex-1 truncate",children:r}),!1]}),s.jsx("div",{className:"truncate text-xs",children:i})]})]}),!1]})};export{C as N};
//# sourceMappingURL=e7ldcb1pybd2xac9.js.map