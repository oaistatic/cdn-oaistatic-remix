import{X as x,M as w,y as r,R as b,O as k,e1 as s,l as C,W as j}from"./du9ygo55hccsm0ec.js";import{bJ as Q,aD as _,bK as E}from"./hc0go6t8u8it292j.js";import{p as F,t as T}from"./ibjw18ivx5tw615x.js";import{o as S}from"./ndpe1ojbx7c3v18s.js";import{u as q}from"./jaayw0db1wxhxzj6.js";import{a as h,T as B}from"./4kejfy36ysbrmoi8.js";import{d as L}from"./d0s4um1rh2f7pgrr.js";import{m as N}from"./kl23pvq05rxrgvth.js";import"./m7ykldedawewofy8.js";import"./kwyhm54wtm4zbkpo.js";import"./i241ashuzoz67842.js";import"./f0zfhvj0myt4b1v1.js";import"./156t2vs0ziqy5ta8.js";import"./gymcumd7hmh6bi1s.js";import"./23yqn56dfa53achp.js";import"./huj2tv4ji3im8uo0.js";import"./j2y7wsnqu61ya7iz.js";import"./ls8z0fgz00gw1alh.js";import"./g917upaeimfgkdh1.js";import"./gj6xeouxppgt6npy.js";function pe({messages:e,isRequestActive:t,isLastMessageInTurn:l,isRetrieval:n,isUsingGizmo:i}){const d=e.map(m=>m.message),p=O(d),a=p.filter(m=>A(m,!1)),c=a[a.length-1]??void 0,o=x();if(H(d).some(({content:m})=>m.content_type===w.SystemError))return null;let g=h.Running;const f={count:a.length,domain:c?S(M(c)??""):void 0,query:c?v(c):void 0};let u=n?i?o.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):o.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):o.formatMessage({id:"message.tools.browse.running",defaultMessage:"Searching the web"});return d.some(L)?(g=h.Stopped,u=n?i?o.formatMessage({id:"browsingMessage.searchingKnowledgeStopped",defaultMessage:"Stopped searching knowledge"}):o.formatMessage({id:"browsingMessage.retrievalStopped",defaultMessage:"Stopped reading documents"}):o.formatMessage({id:"message.tools.browse.stopped",defaultMessage:"Search stopped"})):!l||!t?p.length>0&&p.every(m=>m.didError)?(g=h.Error,u=n?i?o.formatMessage({id:"browsingMessage.searchingKnowledgeFailed",defaultMessage:"Error searching knowledge"}):o.formatMessage({id:"browsingMessage.retrievalFailed",defaultMessage:"Error reading documents"}):o.formatMessage({id:"message.tools.browse.failed",defaultMessage:"Search failed"})):(g=h.Finished,u=n?null:f.count===0?o.formatMessage({id:"message.tools.browse.started",defaultMessage:"Searching the web..."}):o.formatMessage({id:"message.tools.browse.finished",defaultMessage:"Searched {count, plural, =0 {0 sites} one {# site} other {# sites}}"},f)):a.length>0&&(u=$(o,f,n,i,a[a.length-1])),(a.length>0||n&&l)&&g!==h.Error?r.jsx(B,{highlightedCommand:u,showWorkUserSetting:!1,status:g,children:a.length===0?null:r.jsx(D,{commands:a})}):r.jsx(I,{$isError:g===h.Error,children:u})}function y(e){return e.metadata?.command==="quote"||e.metadata?.command==="quote_full"||e.metadata?.command==="quote_lines"}function O(e){return e.map((t,l)=>{if(t.author.role!==b.Tool||l>0&&y(t)&&y(e[l-1]))return null;const n=t.metadata;if(!n)return null;const{command:i,status:d}=n;return i?{type:i,status:d,didError:t.content.content_type===w.SystemError,message:t}:null}).filter(Q)}function D({commands:e}){const t=x(),l=e.map(M).filter(i=>i!=null),n=q(l);return r.jsx("div",{className:"mb-4 divide-y divide-token-border-light rounded-xl border border-token-border-light text-sm",children:r.jsx(_,{initial:!1,children:e.map((i,d)=>{const{icon:p,url:a,title:c,externalLink:o}=U(i),g=a?S(a):void 0,f=c?typeof c=="string"?c:t.formatMessage(c):null,u=a?n.get(a):null;return r.jsx(N.div,{initial:"collapsed",animate:"open",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},children:r.jsxs(W,{url:o??a,className:k("flex items-start gap-3 px-4 py-3",c?"text-token-text-secondary":"text-token-text-primary",d===0&&"rounded-t-xl",d===e.length-1&&"rounded-b-xl"),children:[p?r.jsx(p,{className:"icon-sm mt-0.5 flex-shrink-0 text-token-text-secondary"}):a?r.jsx(E,{url:a,className:"mt-1"}):null,r.jsxs("div",{children:[f&&r.jsxs("div",{className:"line-clamp-1 text-token-text-primary",children:[u&&`${u} — `,f]}),r.jsx("div",{children:g})]})]})},d)})})})}function W({url:e,children:t,className:l}){return e?r.jsxs("a",{href:e,target:"_blank",className:k(l,"group relative hover:bg-token-main-surface-secondary"),rel:"noreferrer",children:[t,r.jsx("div",{className:"invisible absolute right-3 bg-gradient-to-l from-token-main-surface-secondary to-transparent pl-4 group-hover:visible",children:r.jsx(F,{className:"icon-md text-token-text-secondary"})})]}):r.jsx("div",{className:l,children:t})}function K(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type!=="file"?t.title:null}function v(e){return e.message.metadata?.args?.[0]}function U(e){switch(e.type){case s.Search:{const t=v(e);return{icon:T,url:"bing.com",externalLink:R(e),title:t?`“${t}”`:{id:"message.tools.browse.querying",defaultMessage:"Querying",description:"Status message when issuing a query"}}}case s.Click:case s.MultiClick:case s.Lookup:case s.OpenUrl:case s.Open:case s.Quote:case s.QuoteFull:case s.QuoteLines:case s.Scroll:return{url:M(e),title:K(e)??void 0};case s.Back:return{}}}function R(e){const t=e.message.metadata?.args?.[0];return t===void 0?null:C.getBingLink({query:t})}function $(e,t,l,n,i){switch(i?.type){case s.Click:case s.MultiClick:case s.Lookup:case s.OpenUrl:case s.Quote:case s.QuoteFull:case s.QuoteLines:case s.Scroll:case s.Open:case s.Back:return e.formatMessage({id:"message.tools.browse.reading",defaultMessage:"Browsing {domain}"},t);case s.Search:case void 0:return l?n?e.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):e.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):e.formatMessage({id:"message.tools.browse.searching",defaultMessage:'Searching "{query}"'},t)}}function P(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type==="file"?t.name:null}function A(e,t){switch(e.type){case s.Search:return!0;case s.Click:case s.Lookup:case s.MultiClick:case s.OpenUrl:case s.Quote:case s.QuoteFull:case s.QuoteLines:return t?P(e)!=null:M(e)!=null;case s.Open:case s.Back:case s.Scroll:return!1}}function M(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type!=="file"?t.url:null}function H(e){return e.filter(t=>t.author.role===b.Tool)}const I=j.p`first:mt-0 my-1.5 h-8 flex items-center ltr:mr-auto rtl:ml-auto empty:hidden
${({$isError:e})=>e?"text-token-text-error":"text-token-text-secondary"}`;export{pe as BrowsingMessage,M as getVisitedUrl};
//# sourceMappingURL=okilulno41mef7t5.js.map
