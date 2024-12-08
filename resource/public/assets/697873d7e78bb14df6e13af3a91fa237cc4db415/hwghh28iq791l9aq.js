import{L as E,H as C,eZ as L,I as N,g as A,bi as T,ee as k,gW as w,m as n,aE as M,b6 as g,r as h,bL as D,ba as F,d as b,y as _,ah as j,P as $,ad as z}from"./dfm2yceao9m2ilo9.js";import{f_ as P,f$ as H,g0 as G,g1 as p,dg as O,g2 as y,ba as U,g3 as V,g4 as I}from"./o7wih49jz3zkdcav.js";import{S as W,a as q}from"./oeea7ds9qsa1oahd.js";import{g as B}from"./kqwdyvkaaavvn8k3.js";import{a as Y}from"./hpofv4tsrpkbskxe.js";import{E as Z}from"./ccuhdim3zfgruue4.js";import{m as J}from"./ccrdffu4uq6bo5k0.js";function K({date:e}){const t=E(),a=e instanceof Date?e:new Date(e*1e3),r=P(a,new Date);if(r<4&&r>-4){const o=t.formatRelativeTime(r,"day",{numeric:"auto"});return o.charAt(0).toUpperCase()+o.slice(1)}else return t.formatDate(a,{year:"numeric",month:"long",day:"numeric"})}var Q=L,X=C,ee=H,te=N;function ae(e,t){var a=te(e)?Q:ee;return a(e,X(t))}var ne=ae,se=G,re=ne;function ie(e,t){return se(re(e,t),1)}var oe=ie;const ce=A(oe);function ve({clientThreadId:e,turnIndex:t,messageId:a,scrollToHeader:r=p.Citations,shouldAnimateScroll:o,isInSidebar:l=!1}){const{value:s}=T("756982148"),i=de(e,a),c=fe(e,a),f=k(),u=w(e,a),d={clientThreadId:e,messageId:a,turnIndex:t},S=ce(u,x=>x.entries).toSorted((x,R)=>(R?.pub_date??0)-(x?.pub_date??0));return n.jsxs("div",{className:M("flex w-full flex-col bg-token-main-surface-primary",l?"mt-[calc(var(--threadFlyOut-leading-height,57px)*-1)]":"mt-0",!f||!l?"border-t border-token-border-light":""),children:[s&&i&&i.length>0&&n.jsx(m,{title:n.jsx(g,{id:"fYO0jL",defaultMessage:"Links"}),items:i,analyticsMetadata:{...d,linkType:"navigation"},scrollToHeader:r===p.Links,shouldAnimateScroll:o,messageId:a}),n.jsx(m,{title:n.jsx(g,{id:"dlVlo6",defaultMessage:"Citations"}),items:c,analyticsMetadata:{...d,linkType:"citation"},scrollToHeader:r===p.Citations,shouldAnimateScroll:o,messageId:a}),n.jsx(m,{title:n.jsx(g,{id:"Gz+4tE",defaultMessage:"More"}),items:S,analyticsMetadata:{...d,linkType:"search_result"},messageId:a,analyticsIndexOffset:c.length,scrollToHeader:r===p.SearchResults,shouldAnimateScroll:o})]},`${t}-${e}`)}function m({title:e,items:t,analyticsMetadata:a,analyticsIndexOffset:r=0,scrollToHeader:o,messageId:l,shouldAnimateScroll:s}){const i=h.useRef(null),c=k();return h.useEffect(()=>{i.current&&o&&(c?i.current.scrollIntoView({behavior:s?"smooth":"instant"}):setTimeout(()=>{i.current&&i.current.scrollIntoView({behavior:s?"smooth":"instant"})},300))},[o,s,c]),!t||t.length===0?null:n.jsxs("div",{ref:i,children:[n.jsx(v,{className:M("sticky top-0 z-[1] flex h-[calc(var(--screen-thread-header-min-height,60px)+1px)] items-center border-b border-token-border-sharp bg-token-main-surface-primary px-6 pt-4 font-medium text-token-text-primary",c?"pb-3.5 text-panel-title":"pb-4 text-sm"),children:e}),n.jsx("div",{className:"flex flex-col px-3 py-2",children:t.map((f,u)=>n.jsx(v,{index:u,children:n.jsx(le,{item:f,analyticsMetadata:{...a,groupIndex:u,entireListIndex:u+r},messageId:l},u)},`${e}-${u}`))})]})}function v({children:e,index:t=0,className:a=""}){return n.jsx(J.div,{className:a,initial:{opacity:0},animate:{opacity:1},transition:{delay:(t+1)*.03+.2},children:e})}function le({item:e,analyticsMetadata:t,messageId:a}){const r=Y(e.url).data??B(e.url,"short"),o=c=>"ref_id"in c&&"content_type"in c,l=O(),s=D().resolvedTheme==="dark",i=n.jsxs(ue,{analyticsMetadata:t,href:e.url,target:"_blank",rel:"noopener",className:"flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-token-main-surface-secondary",onMouseEnter:()=>{y.setHighlightBySource(a,e)},onMouseLeave:()=>{y.clearHighlights()},children:[n.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[n.jsx(U,{url:e.url,className:"icon-sm rounded-full bg-token-main-surface-primary object-cover",size:32,minSize:20,fallback:n.jsx(W,{className:"icon-sm text-token-text-quaternary"})}),r,o(e)&&n.jsx(q,{searchResult:e,className:"inline h-4 w-4 text-token-text-tertiary"})]}),n.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.title}),(e.pub_date??e.snippet)&&n.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.pub_date&&n.jsx(K,{date:e.pub_date}),e.pub_date&&e.snippet&&" — ",e.snippet]})]});return l?n.jsx(F,{label:n.jsx(Z,{item:e}),className:"text-left text-xs",theme:s?"default":"white",children:i}):i}const ue=h.forwardRef(function(t,a){const{analyticsMetadata:r,...o}=t;function l(s,i){if(!t.href)return;const{entireListIndex:c,groupIndex:f,linkType:u,...d}=r;$.logEventWithStatsig(s,i,{...z(d),url:t.href,global_index:c.toString(),local_index:f.toString(),type:u})}return h.useEffect(()=>{l(b.searchLinkShown,"search_link_shown")},[]),n.jsx("a",{ref:a,...o,onClick:s=>{t.onClick?.(s),s.stopPropagation(),l(b.searchLinkClicked,"search_link_clicked")}})}),fe=(e,t)=>{const a=V();return _(()=>{const r=j.getMessageContentReferences(e,t);return I(r,a)})},de=(e,t)=>_(()=>{const a=j.getMessageContentReferences(e,t);let r=[];const o=a.filter(s=>s.type==="navigation");o.length>0&&(r=o.flatMap(s=>s.domains.flatMap(i=>[{title:i.title,snippet:i.domain,url:i.url},...i.sub_domains.map(c=>({title:c.title,snippet:i.domain,url:c.url}))])));const l=a.filter(s=>s.type==="tldr").filter(s=>!s.used_as_navigation);return l.length>0&&l.forEach(s=>{r.push({title:s.display_title,url:s.url})}),r.length>0?r:void 0});export{ve as SearchSources,m as SourcesListGroup};
//# sourceMappingURL=hwghh28iq791l9aq.js.map
