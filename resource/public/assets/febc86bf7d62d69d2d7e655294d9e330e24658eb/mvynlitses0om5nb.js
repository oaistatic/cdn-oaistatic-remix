import{D as i,P as s,d as t,S as r,c as g,j as k}from"./813n9w6xsthevnqe.js";let a="",c="";const _=new Set,u={setSessionId(n){a=n},setQuerySessionId(n){_.clear(),c=n},logClick(n,e,o){i.addAction("fannypack.web.click",{index:e,source:o}),s.logEvent(t.fannyPackClickResult,{fanny_pack_session_id:a,fanny_pack_query_session_id:c,conversationId:n,index:e,source:o}),r.logEvent("chatgpt_fannypack_click",e,{index:String(e),source:o})},logClose(n){s.logEvent(t.fannyPackClose,{fanny_pack_session_id:a,source:n})},logOpen(n){i.addAction("fannypack.web.open",{source:n}),s.logEvent(t.fannyPackOpen,{fanny_pack_session_id:a,source:n}),r.logEvent("chatgpt_fannypack_open",n)},logQuery(){i.addAction("fannypack.web.query"),s.logEvent(t.fannyPackQuery,{fanny_pack_session_id:a,fanny_pack_query_session_id:c}),r.logEvent("chatgpt_fannypack_query")},logQueryError(){i.addError("fannypack.web.query_error"),s.logEvent(t.fannyPackQueryError,{fanny_pack_session_id:a,fanny_pack_query_session_id:c})},logQueryMore(){i.addAction("fannypack.web.queryMore"),s.logEvent(t.fannyPackQueryFetchMore,{fanny_pack_session_id:a,fanny_pack_query_session_id:c}),r.logEvent("chatgpt_fannypack_query_more")},logNoResults(){s.logEvent(t.fannyPackNoResults,{fanny_pack_session_id:a,fanny_pack_query_session_id:c})},logImpression(n,e,o){_.has(o)||(_.add(o),s.logEvent(t.fannyPackImpression,{fanny_pack_session_id:a,fanny_pack_query_session_id:c,source:n,index:e,conversation_id:o}))}},f={isActive:!1,query:"",activeIndex:void 0,mouseInteractionsDisabled:!1},d=g(k(()=>({...f}))),l=d.getState,y=d.setState,v={getQuery:(n=l())=>n.query,getMouseInteractionsDisabled:()=>l().mouseInteractionsDisabled},I={setIsActive:n=>{y({isActive:n})},setQuery:n=>{y({query:n})},setActiveIndex:n=>{y(e=>{e.activeIndex=n,e.mouseInteractionsDisabled=!0})},setMouseInteractionsDisabled:n=>{y(e=>{e.mouseInteractionsDisabled=n})}};export{I as F,u as a,v as b,d as u};
//# sourceMappingURL=mvynlitses0om5nb.js.map
