import{c as C,g as E,j as s,M as m,r as g,ac as N}from"./lklglvrzltpv3f05.js";import{gv as L,gw as w,gx as A,j as d,gy as y,F as T,gz as F,gA as $}from"./ntw4l0fkgqdiln85.js";import{s as z,eR as D,w as P,bj as O,d$ as k,gu as V,ao as M,j as v,u as j,a2 as _,P as G,V as H}from"./ltrr4mhf6s4m7a72.js";import{S as U,a as q}from"./bsxj1qnf5qq972mc.js";import{g as B}from"./kqwdyvkaaavvn8k3.js";import{a as I}from"./abdi060vkh3h3l2t.js";function W({date:e}){const t=C(),a=e instanceof Date?e:new Date(e*1e3),r=L(a,new Date);if(r<4&&r>-4){const i=t.formatRelativeTime(r,"day",{numeric:"auto"});return i.charAt(0).toUpperCase()+i.slice(1)}else return t.formatDate(a,{year:"numeric",month:"long",day:"numeric"})}var Y=D,J=z,K=w,Q=P;function X(e,t){var a=Q(e)?Y:K;return a(e,J(t))}var Z=X,ee=A,te=Z;function ae(e,t){return ee(te(e,t),1)}var ne=ae;const se=E(ne);function re({clientThreadId:e,turnIndex:t,messageId:a,scrollToHeader:r=d.Citations,shouldAnimateScroll:i,isInSidebar:c=!1}){const{value:n}=O("756982148"),o=le(e,a),l=ce(e,a),f=k(),u=V(e,a),p={clientThreadId:e,messageId:a,turnIndex:t},S=se(u,x=>x.entries).toSorted((x,R)=>(R?.pub_date??0)-(x?.pub_date??0));return s.jsxs("div",{className:M("flex w-full flex-col bg-token-main-surface-primary",c?"mt-[calc(var(--threadFlyOut-leading-height,57px)*-1)]":"mt-0",!f||!c?"border-t border-token-border-light":""),children:[n&&o&&o.length>0&&s.jsx(h,{title:s.jsx(m,{id:"fYO0jL",defaultMessage:"Links"}),items:o,analyticsMetadata:{...p,linkType:"navigation"},scrollToHeader:r===d.Links,shouldAnimateScroll:i,messageId:a}),s.jsx(h,{title:s.jsx(m,{id:"dlVlo6",defaultMessage:"Citations"}),items:l,analyticsMetadata:{...p,linkType:"citation"},scrollToHeader:r===d.Citations,shouldAnimateScroll:i,messageId:a}),s.jsx(h,{title:s.jsx(m,{id:"Gz+4tE",defaultMessage:"More"}),items:S,analyticsMetadata:{...p,linkType:"search_result"},messageId:a,analyticsIndexOffset:l.length,scrollToHeader:r===d.SearchResults,shouldAnimateScroll:i})]},`${t}-${e}`)}function h({title:e,items:t,analyticsMetadata:a,analyticsIndexOffset:r=0,scrollToHeader:i,messageId:c,shouldAnimateScroll:n}){const o=g.useRef(null),l=k();return g.useEffect(()=>{o.current&&i&&(l?o.current.scrollIntoView({behavior:n?"smooth":"instant"}):setTimeout(()=>{o.current&&o.current.scrollIntoView({behavior:n?"smooth":"instant"})},300))},[i,n,l]),!t||t.length===0?null:s.jsxs("div",{ref:o,children:[s.jsx(b,{className:M("sticky top-0 z-[1] flex h-[calc(var(--screen-thread-header-min-height,60px)+1px)] items-center border-b border-token-border-sharp bg-token-main-surface-primary px-6 pt-4 font-medium text-token-text-primary",l?"pb-3.5 text-panel-title":"pb-4 text-sm"),children:e}),s.jsx("div",{className:"flex flex-col px-3 py-2",children:t.map((f,u)=>s.jsx(b,{index:u,children:s.jsx(oe,{item:f,analyticsMetadata:{...a,groupIndex:u,entireListIndex:u+r},messageId:c},u)},`${e}-${u}`))})]})}function b({children:e,index:t=0,className:a=""}){return s.jsx(N.div,{className:a,initial:{opacity:0},animate:{opacity:1},transition:{delay:(t+1)*.03+.2},children:e})}function oe({item:e,analyticsMetadata:t,messageId:a}){const r=I(e.url).data??B(e.url,"short"),i=n=>"ref_id"in n&&"content_type"in n;return s.jsxs(ie,{analyticsMetadata:t,href:e.url,target:"_blank",rel:"noopener",className:"flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-token-main-surface-secondary",onMouseEnter:()=>{y.setHighlightBySource(a,e)},onMouseLeave:()=>{y.clearHighlights()},children:[s.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[s.jsx(T,{url:e.url,className:"icon-sm rounded-full bg-token-main-surface-primary object-cover",size:32,minSize:20,fallback:s.jsx(U,{className:"icon-sm text-token-text-quaternary"})}),r,i(e)&&s.jsx(q,{searchResult:e,className:"inline h-4 w-4 text-token-text-tertiary"})]}),s.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.title}),(e.pub_date??e.snippet)&&s.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.pub_date&&s.jsx(W,{date:e.pub_date}),e.pub_date&&e.snippet&&" — ",e.snippet]})]})}const ie=g.forwardRef(function(t,a){const{analyticsMetadata:r,...i}=t;function c(n,o){if(!t.href)return;const{entireListIndex:l,groupIndex:f,linkType:u,...p}=r;G.logEventWithStatsig(n,o,{...H(p),url:t.href,global_index:l.toString(),local_index:f.toString(),type:u})}return g.useEffect(()=>{c(v.searchLinkShown,"search_link_shown")},[]),s.jsx("a",{ref:a,...i,onClick:n=>{t.onClick?.(n),n.stopPropagation(),c(v.searchLinkClicked,"search_link_clicked")}})}),ce=(e,t)=>{const a=F();return j(()=>{const r=_.getMessageContentReferences(e,t);return $(r,a)})},le=(e,t)=>j(()=>{const a=_.getMessageContentReferences(e,t);let r=[];const i=a.filter(n=>n.type==="navigation");i.length>0&&(r=i.flatMap(n=>n.domains.flatMap(o=>[{title:o.title,snippet:o.domain,url:o.url},...o.sub_domains.map(l=>({title:l.title,snippet:o.domain,url:l.url}))])));const c=a.filter(n=>n.type==="tldr").filter(n=>!n.used_as_navigation);return c.length>0&&c.forEach(n=>{r.push({title:n.display_title,url:n.url})}),r.length>0?r:void 0}),xe=Object.freeze(Object.defineProperty({__proto__:null,AnimatedContainer:b,SearchSources:re,SourcesListGroup:h},Symbol.toStringTag,{value:"Module"}));export{b as A,W as R,re as S,xe as a};
//# sourceMappingURL=gzp99d3yjsamuheq.js.map