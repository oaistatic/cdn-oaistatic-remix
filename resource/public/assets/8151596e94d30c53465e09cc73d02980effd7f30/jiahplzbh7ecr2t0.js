import{G as v,av as S,eJ as M,aw as j,g as _,gS as R,m as a,aC as y,aS as h,r as f,bo as A,aJ as E,d as x,y as C,ab as N,P as D,a7 as w}from"./g92hdia1euilhv3m.js";import{f5 as L,f6 as T,f7 as F,av as k,bK as $,bN as P,bi as z,f8 as m,a$ as I,f9 as U,fa as G}from"./l912w0bwi7cbhgoi.js";import{S as H,a as J}from"./mvk5hxnlwo9ua85g.js";import{E as O}from"./ftq5cjmm9nctlu5n.js";import{m as V}from"./bz2yxwsv6hrttawy.js";import"./j9bb93dkfix5hp9e.js";function q({date:e}){const t=v(),s=e instanceof Date?e:new Date(e*1e3),n=L(s,new Date);if(n<4&&n>-4){const r=t.formatRelativeTime(n,"day",{numeric:"auto"});return r.charAt(0).toUpperCase()+r.slice(1)}else return t.formatDate(s,{year:"numeric",month:"long",day:"numeric"})}var B=M,K=S,W=T,Q=j;function X(e,t){var s=Q(e)?B:W;return s(e,K(t))}var Y=X,Z=F,ee=Y;function te(e,t){return Z(ee(e,t),1)}var ae=te;const se=_(ae),ne=(e,t)=>{const s=U();return C(()=>{const n=N.getMessageContentReferences(e,t);return G(n,s)})};function pe({clientThreadId:e,turnIndex:t,messageId:s,scrollToHeader:n,isInSidebar:r=!1}){const i=ne(e,s),o=k(),u=R(e,s),c={clientThreadId:e,messageId:s,turnIndex:t},l=se(u,d=>d.entries).toSorted((d,p)=>(p?.pub_date??0)-(d?.pub_date??0));return a.jsxs("div",{className:y("flex w-full flex-col bg-token-main-surface-primary",r?"mt-[calc(var(--threadFlyOut-leading-height,57px)*-1)]":"mt-0",!o||!r?"border-t border-token-border-light":""),children:[a.jsx(b,{title:a.jsx(h,{id:"dlVlo6",defaultMessage:"Citations"}),items:i,analyticsMetadata:{...c,linkType:"citation"},scrollToHeader:n!=="search_results",messageId:s}),a.jsx(b,{title:a.jsx(h,{id:"iUafP7",defaultMessage:"Search Results"}),scrollToHeader:n==="search_results",items:l,analyticsMetadata:{...c,linkType:"search_result"},messageId:s,analyticsIndexOffset:i.length})]},`${t}-${e}`)}function b({title:e,items:t,analyticsMetadata:s,analyticsIndexOffset:n=0,scrollToHeader:r,messageId:i}){const o=f.useRef(null),u=k();return f.useEffect(()=>{o.current&&r&&o.current.scrollIntoView({behavior:"instant"})},[r]),!t||t.length===0?null:a.jsxs("div",{ref:o,children:[a.jsx(g,{className:y("sticky top-0 z-[1] flex h-[calc(var(--screen-thread-header-min-height,60px)+1px)] items-center border-b border-token-border-sharp bg-token-main-surface-primary px-6 pt-4 font-medium text-token-text-primary",u?"pb-3.5 text-panel-title":"pb-4 text-sm"),children:e}),a.jsx("div",{className:"flex flex-col px-3 py-2",children:t.map((c,l)=>a.jsx(g,{index:l,children:a.jsx(re,{item:c,analyticsMetadata:{...s,groupIndex:l,entireListIndex:l+n},messageId:i},l)},`${e}-${l}`))})]})}function g({children:e,index:t=0,className:s=""}){return a.jsx(V.div,{className:s,initial:{opacity:0},animate:{opacity:1},transition:{delay:(t+1)*.03+.2},children:e})}function re({item:e,analyticsMetadata:t,messageId:s}){const n=$(e.url).data??P(e.url,"short"),r=c=>"ref_id"in c&&"content_type"in c,i=z(),o=A().resolvedTheme==="dark",u=a.jsxs(oe,{analyticsMetadata:t,href:e.url,target:"_blank",rel:"noopener",className:"flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-token-main-surface-secondary",onMouseEnter:()=>{!("attributions"in e)||!e.attributions||m.setHighlightBySource(s,e)},onMouseLeave:()=>{m.clearHighlights()},children:[a.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[a.jsx(I,{url:e.url,className:"icon-sm rounded-full bg-token-main-surface-primary object-cover",size:32,minSize:20,fallback:a.jsx(H,{className:"icon-sm text-token-text-quaternary"})}),n,r(e)&&a.jsx(J,{searchResult:e,className:"inline h-4 w-4 text-token-text-tertiary"})]}),a.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.title}),(e.pub_date??e.snippet)&&a.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.pub_date&&a.jsx(q,{date:e.pub_date}),e.pub_date&&e.snippet&&" — ",e.snippet]})]});return i?a.jsx(E,{label:a.jsx(O,{item:e}),className:"text-left text-xs",theme:o?"default":"white",children:u}):u}const oe=f.forwardRef(function(t,s){const{analyticsMetadata:n,...r}=t;function i(o,u){if(!t.href)return;const{entireListIndex:c,groupIndex:l,linkType:d,...p}=n;D.logEventWithStatsig(o,u,{...w(p),url:t.href,global_index:c.toString(),local_index:l.toString(),type:d})}return f.useEffect(()=>{i(x.searchLinkShown,"search_link_shown")},[]),a.jsx("a",{ref:s,...r,onClick:o=>{t.onClick?.(o),o.stopPropagation(),i(x.searchLinkClicked,"search_link_clicked")}})});export{pe as SearchSources,b as SourcesListGroup};
//# sourceMappingURL=jiahplzbh7ecr2t0.js.map