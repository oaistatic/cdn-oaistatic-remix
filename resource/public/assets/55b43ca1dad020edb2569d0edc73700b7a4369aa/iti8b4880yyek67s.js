import{r as f,j as o,ad as R,M as h}from"./i8w88cc8b3gds516.js";import{H as j,h as I,M as E,eb as F,an as S,g0 as N,P as T,j as k,bz as w}from"./eh26o1l35t2fnjj4.js";import{c4 as D,ck as A,cl as U,cm as P,cn as V}from"./jg63sxiyqeyvfv9f.js";import{A as M,R as $}from"./jc77wbbs48ir3t2q.js";import"./n2n34r6bou1wwg9e.js";import"./kqwdyvkaaavvn8k3.js";import"./ic47xq5w4y1obgxq.js";function z(e,s){e.documentId?.includes("ackCh")&&(s.text=void 0,s.name=`#${s.name}`)}function J({turnIndex:e,clientThreadId:s}){const d=j(s,a=>w.getTurnContentReferences(a,e)),p=f.useMemo(()=>({turnIndex:e,clientThreadId:s}),[s,e]),u=f.useMemo(()=>{const a=[],c=new Set;return d.forEach(t=>{t.type==="file"&&!c.has(t.id)?(a.push({id:t.id,name:t.name,cloud_doc_url:t.cloud_doc_url??t.extra?.cloud_doc_url,text:t.text}),c.add(t.id)):t.type==="file_navlist"&&t.items.forEach(i=>{c.has(i.id)||(a.push({name:i.name,cloud_doc_url:i.cloud_doc_url,text:i.description,id:i.id,lastModifiedTime:i.last_modified_time}),c.add(i.id))})}),a},[d]),g=D(s),m=A(g),n=j(s,a=>a?.conversationTurns[e]?.messages??[]),r=f.useMemo(()=>{if(!m)return[];const a=[],c=new Set;for(const t of n)if(t.message.author.role===I.Tool&&t.message.author.name==="file_search"&&t.message.content.content_type===E.TetherBrowsingDisplay){const i=U(t.message.content.result),_=t.message.metadata?.cloud_doc_urls??[];i.chunks.forEach((l,b)=>{if(!l.documentId||c.has(l.documentId))return;c.add(l.documentId);let x;l.metadata.cloud_doc_url?x=l.metadata.cloud_doc_url.toString():b<_.length?x=_[b]:l.documentId.endsWith("--google")&&(x=`https://drive.google.com/file/d/${l.documentId.split("--")[1]}`);const v=l.metadata["File last modified at"]??l.metadata["File created at"],y={id:l.documentId,name:l.title,cloud_doc_url:x,text:l.contents,lastModifiedTime:v?v.toString():void 0};z(l,y),a.push(y)})}return a},[m,n]);return o.jsx(R,{children:o.jsxs("div",{className:"mt-[calc(var(--threadFlyOut-leading-height,57px)*-1)] flex w-full flex-col bg-token-main-surface-primary",children:[o.jsx(C,{title:o.jsx(h,{id:"dlVlo6",defaultMessage:"Citations"}),items:u,clientThreadId:s,sectionId:"citations",analyticsMetadata:p}),o.jsx(C,{title:o.jsx(h,{id:"njZblE",defaultMessage:"Search Results"}),items:r,clientThreadId:s,sectionId:"search-results",analyticsMetadata:p})]})})}function C({title:e,items:s,scrollToHeader:d,shouldAnimateScroll:p,clientThreadId:u,analyticsMetadata:g,sectionId:m}){const n=f.useRef(null),r=F(),a=f.useMemo(()=>g?{...g,isScreenArch:r,sectionId:m,numResultsInSection:s.length}:void 0,[g,r,s.length,m]);return f.useEffect(()=>{n.current&&d&&(r?n.current.scrollIntoView({behavior:p?"smooth":"instant"}):setTimeout(()=>{n.current&&n.current.scrollIntoView({behavior:p?"smooth":"instant"})},300))},[d,p,r]),!s||s.length===0?null:o.jsxs("div",{ref:n,children:[o.jsx(M,{className:S("sticky top-0 z-[1] flex h-[calc(var(--screen-thread-header-min-height,60px)+1px)] items-center border-b border-token-border-sharp bg-token-main-surface-primary px-6 pt-4 font-medium text-token-text-primary",r?"pb-3.5 text-panel-title":"pb-4 text-sm"),children:e}),o.jsx("div",{className:"flex flex-col px-3 py-2",children:s.map((c,t)=>o.jsx(M,{index:t,children:o.jsx(L,{positionInSection:t,item:c,analyticsMetadata:a,clientThreadId:u},t)},`${e}-${t}`))})]})}function L({item:e,analyticsMetadata:s,positionInSection:d,clientThreadId:p}){const u=P(e.cloud_doc_url??""),g=u?.type??o.jsx(h,{id:"bqY3sN",defaultMessage:"File"}),m=u?.Icon??V;f.useState(!1);const n=N("1054486462");!n.isLoading&&n.config.getValue("sidebar_enabled",!1);const r=f.useCallback(()=>{s&&T.logEventWithStatsig(k.fileSourcesSidebarItemClicked,"file_sources_sidebar_link_clicked",{...s,positionInSection:d,sourceType:u?.type,hasUrl:!!e.cloud_doc_url})},[s,e.cloud_doc_url,u?.type,d]);return o.jsx(o.Fragment,{children:o.jsxs("a",{href:e.cloud_doc_url,target:"_blank",rel:"noreferrer",onClick:r,className:S("group relative flex flex-col gap-0.5 rounded-xl px-3 py-2.5","hover:bg-token-main-surface-secondary",!1),children:[o.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[m&&o.jsx(m,{className:"icon-sm rounded-full bg-token-main-surface-primary object-cover"}),g]}),o.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.name}),(e.text??e.lastModifiedTime)&&o.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.lastModifiedTime&&o.jsxs("span",{children:[o.jsx($,{date:new Date(e.lastModifiedTime)}),e.text&&" — "]}),e.text]}),!1]})})}export{J as ChatScreenRetrievalResultsFlyoutContent,C as SourcesListGroup};
//# sourceMappingURL=iti8b4880yyek67s.js.map
