import{c as w,j as r,ad as _,ac as E}from"./lklglvrzltpv3f05.js";import{M as k,fz as s,s as S,aw as v,fA as Q,J as F,az as B}from"./dr5q0mnwgdiuy1ac.js";import{bd as C,be as T,bc as q,bf as L,F as N,bg as D,bh as O}from"./fn5bn67vlrtkutmt.js";import{u as U}from"./ckxtmp809sfjyjji.js";import{T as M,a as W}from"./oggr4qblywivx1kc.js";import"./kmcda7yv67z85pgk.js";function re({messages:e,isRequestActive:t,isLastMessageInTurn:n,isRetrieval:i,isUsingGizmo:l,isUsingSnorlax:g}){const m=e.map(u=>u.message),f=K(m),a=f.filter(u=>J(u,!1)),c=a[a.length-1]??void 0,o=w();if(X(m).some(({content:u})=>u.content_type===k.SystemError))return null;let d=M.Running;const y=a.filter(u=>u.type===s.Search).length,h={count:a.length-y,domain:c?C(x(c)??""):void 0,query:c?j(c):void 0};let p=i?l?g?o.formatMessage(T.searchingProjectFiles):o.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):o.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):o.formatMessage({id:"message.tools.browse.running",defaultMessage:"Searching the web"});return m.some(q)?(d=M.Stopped,p=i?l?o.formatMessage({id:"browsingMessage.searchingKnowledgeStopped",defaultMessage:"Stopped searching knowledge"}):o.formatMessage({id:"browsingMessage.retrievalStopped",defaultMessage:"Stopped reading documents"}):o.formatMessage({id:"message.tools.browse.stopped",defaultMessage:"Search stopped"})):!n||!t?f.length>0&&f.every(u=>u.didError)?(d=M.Error,p=i?l?o.formatMessage({id:"browsingMessage.searchingKnowledgeFailed",defaultMessage:"Error searching knowledge"}):o.formatMessage({id:"browsingMessage.retrievalFailed",defaultMessage:"Error reading documents"}):o.formatMessage({id:"message.tools.browse.failed",defaultMessage:"Search failed"})):(d=M.Finished,p=i?null:h.count===0?o.formatMessage({id:"message.tools.browse.started",defaultMessage:"Searching the web..."}):o.formatMessage({id:"message.tools.browse.finished",defaultMessage:"Searched {count, plural, =0 {0 sites} one {# site} other {# sites}}"},h)):a.length>0&&(p=I(o,h,i,l,a[a.length-1])),(a.length>0||i&&n)&&d!==M.Error?r.jsx(W,{highlightedCommand:p,showWorkUserSetting:!1,status:d,children:a.length===0?null:r.jsx(P,{commands:a})}):r.jsx(Y,{$isError:d===M.Error,children:p})}function b(e){return e.metadata?.command==="quote"||e.metadata?.command==="quote_full"||e.metadata?.command==="quote_lines"}function K(e){return e.map((t,n)=>{if(t.author.role!==S.Tool||n>0&&b(t)&&b(e[n-1]))return null;const i=t.metadata;if(!i)return null;const{command:l,status:g}=i;return l?{type:l,status:g,didError:t.content.content_type===k.SystemError,message:t}:null}).filter(L)}function P({commands:e}){const t=w(),n=e.map(x).filter(l=>l!=null),i=U(n);return r.jsx("div",{className:"mb-4 divide-y divide-token-border-light rounded-xl border border-token-border-light text-sm",children:r.jsx(_,{initial:!1,children:e.map((l,g)=>{const m=R(l);if(m==null)return null;const{icon:f,url:a,title:c,externalLink:o}=m,d=a?C(a):void 0,y=c?typeof c=="string"?c:t.formatMessage(c):null,h=a?i.get(a):null;return r.jsx(E.div,{initial:"collapsed",animate:"open",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},children:r.jsxs($,{url:o??a,className:v("flex items-start gap-3 px-4 py-3",c?"text-token-text-secondary":"text-token-text-primary",g===0&&"rounded-t-xl",g===e.length-1&&"rounded-b-xl"),children:[f?r.jsx(f,{className:"icon-sm mt-0.5 flex-shrink-0 text-token-text-secondary"}):a?r.jsx(N,{url:a,className:"mt-1"}):null,r.jsxs("div",{children:[y&&r.jsxs("div",{className:"line-clamp-1 text-token-text-primary",children:[h&&`${h} — `,y]}),r.jsx("div",{children:d})]})]})},g)})})})}function $({url:e,children:t,className:n}){return e?r.jsxs("a",{href:e,target:"_blank",className:v(n,"group relative hover:bg-token-main-surface-secondary"),rel:"noreferrer",children:[t,r.jsx("div",{className:"invisible absolute right-3 bg-gradient-to-l from-token-main-surface-secondary to-transparent pl-4 group-hover:visible",children:r.jsx(D,{className:"icon-md text-token-text-secondary"})})]}):r.jsx("div",{className:n,children:t})}function A(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type!=="file"?t.title:null}function j(e){return e.message.metadata?.args?.[0]}function R(e){switch(e.type){case s.Search:{const t=e.message.metadata?.search_engine;if(t&&t!==Q.Bing)return null;const n=j(e);return{icon:O,url:e.message.metadata?.message_source==="apple"?null:"bing.com",externalLink:H(e),title:n?`“${n}”`:{id:"message.tools.browse.querying",defaultMessage:"Querying",description:"Status message when issuing a query"}}}case s.Click:case s.MultiClick:case s.Lookup:case s.OpenUrl:case s.Open:case s.Quote:case s.QuoteFull:case s.QuoteLines:case s.Scroll:return{url:x(e),title:A(e)??void 0};case s.Back:return null}}function H(e){const t=e.message.metadata?.args?.[0];return t===void 0?null:F.getBingLink({query:t})}function I(e,t,n,i,l){switch(l?.type){case s.Click:case s.MultiClick:case s.Lookup:case s.OpenUrl:case s.Quote:case s.QuoteFull:case s.QuoteLines:case s.Scroll:case s.Open:case s.Back:return e.formatMessage({id:"message.tools.browse.reading",defaultMessage:"Browsing {domain}"},t);case s.Search:case void 0:return n?i?e.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):e.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):e.formatMessage({id:"message.tools.browse.searching",defaultMessage:'Searching "{query}"'},t)}}function V(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type==="file"?t.name:null}function J(e,t){switch(e.type){case s.Search:return!0;case s.Click:case s.Lookup:case s.MultiClick:case s.OpenUrl:case s.Quote:case s.QuoteFull:case s.QuoteLines:return t?V(e)!=null:x(e)!=null;case s.Open:case s.Back:case s.Scroll:return!1}}function x(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type!=="file"?t.url:null}function X(e){return e.filter(t=>t.author.role===S.Tool)}const Y=B.p`first:mt-0 my-1.5 h-8 flex items-center ltr:mr-auto rtl:ml-auto empty:hidden
${({$isError:e})=>e?"text-token-text-error":"text-token-text-secondary"}`;export{re as BrowsingMessage,x as getVisitedUrl};
//# sourceMappingURL=i0ly2refky6ik5mr.js.map
