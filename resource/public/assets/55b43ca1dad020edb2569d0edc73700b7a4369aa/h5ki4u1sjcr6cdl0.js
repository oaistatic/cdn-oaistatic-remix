const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/i8mvgt0cg4jm77kl.js","assets/i8w88cc8b3gds516.js","assets/dvm2vv2ab4q4lsy1.js","assets/eh26o1l35t2fnjj4.js","assets/root-inht5vcp.css","assets/mkf03mv1563ttunw.js","assets/jg63sxiyqeyvfv9f.js","assets/conversation-small-nranh1cg.css","assets/e7ldcb1pybd2xac9.js","assets/odtcpqxk4i00cn7j.js","assets/nn3eagpzgs5zxgjm.js","assets/lfg8hxcdjtgf8exd.js","assets/n68da3tpieo3rh4d.js","assets/oxsgpajobfic2yr3.js","assets/i09ixv564jwzaz97.js","assets/oh4o3ugq8w1dadrw.js","assets/mlrtrigc936cuuwx.js","assets/hdlxmm5uakr0zjwo.js","assets/ic47xq5w4y1obgxq.js","assets/ek9cvogjccpvng4b.js","assets/dakmoc6joys0e4qs.js","assets/da5q67men22kxnfn.js","assets/obl0r3ppfp7a769l.js","assets/ijm5sxx90xmrc4mh.js","assets/fqvmdqxedgfcj4co.js","assets/l9qnx9gxiveduhi4.js","assets/j36zxu0jsrspjc86.js"])))=>i.map(i=>d[i]);
import{an as I,ap as J,gK as k,eH as te,eI as ne,bY as oe,e4 as ie,eE as re,e6 as le,b8 as K,b$ as Y,D as ce,j as L,c4 as me,gL as de,N as ge,P as fe,aM as v,aN as b,aO as he,df as ue,ab as P,fd as xe}from"./eh26o1l35t2fnjj4.js";import{j as s,ad as w,c as _e,r as x,ac as R,a as pe,M}from"./i8w88cc8b3gds516.js";import{hq as ye,hr as Ee,hs as U,ht as $,h2 as ve,hu as je,hv as be,hw as Te,hx as Ie,as as Se,ar as Ne,hy as Ae,hz as Ce,F as Re,hA as we,hB as De,hC as Oe,co as t,hD as Pe,hE as ke,hF as Le,hG as Me,hH as Fe,hI as Ve,hJ as Ue,hK as Be,g5 as ze,hL as He,fr as We}from"./jg63sxiyqeyvfv9f.js";import{N as Qe}from"./e7ldcb1pybd2xac9.js";function Je({highlightedText:e,shouldShimmer:o,className:a}){return s.jsx(w,{children:s.jsx("div",{className:I(o&&"loading-shimmer-pure-text","absolute left-0 top-0 flex h-8 gap-1 overflow-hidden",a),children:s.jsx("span",{children:e})})})}function Ke({messages:e,clientThreadId:o}){const a=e[0]?.message,m=e.find(i=>i.message.metadata?.b1de6e2&&i.message.metadata?.async_task_id)?.message,f=m?.metadata?.async_task_id,d=ye(i=>f?i.tasks[f]?.title:""),l=_e().formatMessage({id:"RHdQQd",defaultMessage:"Creating task..."});return!d&&a.status==="in_progress"?s.jsx("div",{className:"relative pt-8",children:s.jsx(Je,{highlightedText:l,shouldShimmer:!0,className:"mr-1.5 mt-1 h-8 items-center justify-start text-token-text-secondary"})}):!f||!m?null:s.jsx(Ee,{payloadTaskId:f,messageWithTaskMetadata:m,clientThreadId:o})}const Ye=2e3,X=.4,$e=.45,Xe=.2,Ze=.1,qe=.25;var A=(e=>(e[e.Running=0]="Running",e[e.Finished=1]="Finished",e[e.Error=2]="Error",e[e.Stopped=3]="Stopped",e[e.Paused=4]="Paused",e))(A||{});function Ns({conversationMessages:e,icon:o,status:a,text:m,estimatedToolDurationMs:f,animationLoopDurationMs:d=Ye,shouldPersistAfterFinished:r=!1}){const[l,i]=x.useState(a===0?0:a===1&&!r?7:1),[h,_]=x.useState(0);x.useEffect(()=>{a===2?i(8):a===3?i(9):a===4?i(10):a===1?i(l===2?3:7):a===0&&l===10&&(i(2),_(g=>g+1))},[a]);const c=ss(l);return x.useEffect(()=>{const g=e[0].message.id;if(c)return U.addDelayedRenderingMessage(g),()=>{U.removeDelayedRenderingMessage(g)}},[c]),$(()=>{C(l)&&_(g=>g+1)},d),l===7&&!r?null:s.jsxs("div",{className:"my-2.5 flex items-center gap-2.5",children:[s.jsx(Ge,{icon:o,status:a,uiState:l,estimatedToolDurationMs:f,animationLoopCounter:h,shouldPersistAfterFinished:r,onFillProgressBarAnimationComplete:()=>i(4),onFinishAnimationComplete:()=>{i(5),setTimeout(()=>{i(r?7:6)},Ze*1e3)},onHideAnimationComplete:()=>i(7)}),s.jsx(es,{text:m,uiState:l,animationLoopCounter:h,onEnterAnimationComplete:()=>i(2)})]})}const B=50;function Ge({icon:e,status:o,uiState:a,estimatedToolDurationMs:m,animationLoopCounter:f,shouldPersistAfterFinished:d,onFillProgressBarAnimationComplete:r,onFinishAnimationComplete:l,onHideAnimationComplete:i}){const[h,_]=x.useState(0);$(()=>{C(a)?_(O=>O+B):a===10&&_(0)},B);let c,g,y;C(a)||a===10?(c="running",g=s.jsx(e,{animationLoopCounter:f}),y="bg-transparent"):a===4||a===5||a===7&&d?(c="finished",g=s.jsx(je,{}),y="bg-brand-purple"):o===2?(c="error",g=s.jsx(be,{}),y="bg-orange-500"):o===3&&(c="stopped",g=s.jsx(Te,{}),y="bg-gray-300");let p={opacity:0,scale:0,rotate:-180,x:0},j={type:"spring",bounce:.3,duration:$e},S={opacity:0,scale:.6,rotate:0,x:0};a===0?(p={opacity:0,scale:.5,rotate:-180,x:-8},j={type:"spring",bounce:.3,duration:X}):a===1?p=!1:a===5&&(S={opacity:0,scale:0,rotate:0,x:0},j={type:"spring",bounce:.3,duration:qe});const D=Ie(h,m);return s.jsx("div",{className:"relative h-5 w-5 shrink-0",children:s.jsx(w,{onExitComplete:()=>{a===6&&i()},children:c!=null&&s.jsxs(R.div,{className:I("absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full text-white",y),initial:p,animate:{opacity:1,scale:1,rotate:0,x:0},exit:S,transition:j,onAnimationComplete:()=>{a===4&&l()},children:[g,(C(a)||a===10)&&s.jsx(ve,{percentage:a===3?100:D,thickness:1.5/23,className:"absolute left-1/2 top-1/2 h-[23px] w-[23px] -translate-x-1/2 -translate-y-1/2 text-brand-purple",backgroundStrokeClassName:"stroke-brand-purple/25 dark:stroke-brand-purple/50",transitionDuration:a===3?`${(100-D)/100*Xe}s`:void 0,transitionTimingFunction:a===3?"cubic-bezier(0.55, 0, 1, 1)":void 0,onTransitionEnd:()=>{a===3&&r()}})]},c)})})}function es({text:e,uiState:o,animationLoopCounter:a,onEnterAnimationComplete:m}){const[f,d]=x.useState(e);x.useEffect(()=>{o===2&&d(e)},[a]),x.useEffect(()=>{C(o)||d(e)},[o,e]);let r={opacity:0,x:0,y:15},l={type:"spring",bounce:.3,opacity:{duration:.15},y:{duration:.3}};o===0?(r={opacity:0,x:-8,y:0},l={type:"spring",bounce:.3,duration:X,delay:.15}):o===1&&(r=!1);const i=f??void 0;return s.jsx("div",{className:I("relative h-5 w-full leading-5",o===8||o===9?"text-token-text-tertiary":"text-token-text-secondary"),children:s.jsx(w,{children:i!=null&&s.jsx(R.div,{className:"absolute left-0 top-0 line-clamp-1 overflow-visible",initial:r,animate:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-15},transition:l,onAnimationComplete:()=>{o===0&&m()},children:i},i.toString())})})}function C(e){return e===0||e===2||e===3}function ss(e){return C(e)||e===4||e===5||e===6||e===10}const z=J.div`group absolute left-0 top-0 mr-1.5 h-8 overflow-hidden mt-1`;function as({highlightedCommand:e,status:o,children:a,showWorkUserSetting:m=!1,hideOnlyIfNotInteractedWith:f=!1,onOpenAnalytics:d,onClick:r}){const l=a!=null||r!=null,[i]=x.useState(m),[h,_]=x.useState(m),[c,g]=x.useState(!1),y=o===A.Finished||o===A.Error,p=f?i?!1:!c:!1,j=o===A.Running&&"loading-shimmer";return y&&p?null:l?s.jsxs(s.Fragment,{children:[s.jsx(H,{$canShowWork:!0,children:s.jsx(w,{children:s.jsx(z,{children:s.jsx(R.button,{onClick:()=>{h||d?.(),_(S=>!S),g(!0),r?.()},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:I(j),children:s.jsxs("div",{className:"flex items-center justify-start gap-1",children:[s.jsx("span",{children:e}),!r&&(h?s.jsx(Se,{className:"icon-md"}):s.jsx(Ne,{className:"icon-md"}))]})},e?.toString())})})}),s.jsx(w,{children:h&&a&&s.jsx(R.div,{initial:"collapsed",animate:"reveal",exit:"collapsed",variants:{collapsed:{translateY:-20,opacity:0,height:0},reveal:{translateY:0,opacity:1,height:"auto"}},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:a})})]}):s.jsx(H,{$canShowWork:!1,children:s.jsx(z,{className:I(j),children:e})})}const H=J.span`block first:mt-0 relative h-8
${({$canShowWork:e})=>e?"text-token-text-secondary hover:text-token-text-primary my-1.5":"text-token-text-secondary"}`,ts=3,ns=.1,W=[0,.26,.4];function os({nextMessage:e,isLastMessage:o,isRequestActive:a,isLastTurnInConversation:m,clientThreadId:f,turnIndex:d}){let r=o||!e||e&&!k(e.message);const l=x.useRef(!1),i=pe();x.useEffect(()=>{e&&k(e.message)&&!l.current&&(l.current=!0,Ae(i))},[e,i]);const h=te(e?.message),_=ne(e?.message);e?.message.id&&Ce(e?.message.id);const c=[];if(_?.[0]?.type==="navigation"&&e&&c.push(s.jsx(is,{clientThreadId:f,turnIndex:d,nextMessage:e,isRequestActive:a,isLastTurnInConversation:m,navigationCitation:_[0]},"fast-nav")),r){const g=oe(h.slice(0,ts).map(p=>p.entries[0].url)),y=a?s.jsxs("div",{className:"flex items-center gap-1",children:[g.map((p,j)=>s.jsx(R.div,{className:I("-ml-1.5 first:ml-0 last:mr-1.5","relative"),initial:{width:j===0?0:6,opacity:0},animate:{width:20,opacity:1},transition:{duration:ns,delay:W[Math.min(j,W.length-1)]},children:s.jsx("div",{className:I("flex h-[22px] w-[22px] items-center overflow-hidden rounded-full","border-2 border-token-main-surface-primary bg-token-main-surface-primary"),children:s.jsx(Re,{url:p,size:32,minSize:16,className:"icon-md rounded-full"})})},p)),s.jsx(M,{id:"jjx8Qg",defaultMessage:"Searching the web"})]}):s.jsx(M,{id:"fssXGM",defaultMessage:"Error while searching"});c.push(s.jsx(as,{highlightedCommand:y,status:a?A.Running:A.Error},"search-gpt-query"))}return c.length?s.jsx(s.Fragment,{children:c}):null}const is=({clientThreadId:e,turnIndex:o,nextMessage:a,isRequestActive:m,isLastTurnInConversation:f,navigationCitation:d})=>{const{scrollToHeader:r}=ie("searchSources")??{},l=re(),i=le()&&l?.type==="searchSources",{openThreadSidebar:h}=K(),{value:_}=Y("756982148");return x.useEffect(()=>{ce.addFirstTiming("render.fastNavigation")},[]),x.useEffect(()=>{i&&h({type:"searchSources",scrollToHeader:r,clientThreadId:e,turnIndex:o,messageId:a?.message.id??""})},[]),x.useEffect(()=>{const c=a.message,g=c.metadata?.search_source,y=d.domains.map(p=>p.url);we.logEvent(L.searchToolRequestTimeToFastNav,e,c.id,{search_source:g,urls:y},()=>{g===me.InstantQuery&&De.logEvent(L.searchToolPageLoadTimeToFastNav,{message_id:c.id,urls:y,search_source:g})})},[e,a,d]),m&&f&&_?s.jsx(R.div,{initial:{opacity:m?0:1,height:m?0:"auto"},animate:{opacity:1,height:"auto"},children:s.jsx(Q,{clientThreadId:e,turnIndex:o,nextMessage:a,navigationCitation:d})}):s.jsx(Q,{clientThreadId:e,turnIndex:o,nextMessage:a,navigationCitation:d})},Q=({clientThreadId:e,turnIndex:o,nextMessage:a,navigationCitation:m})=>{const{toggleThreadSidebar:f}=K(),{value:d}=Y("756982148"),r=x.useMemo(()=>({clientThreadId:e,turnIndex:o,messageId:a?.message.id}),[e,o,a?.message.id]),l=x.useCallback((_,c)=>{f({type:"searchSources",scrollToHeader:c,clientThreadId:e,turnIndex:o,messageId:a?.message.id??""})},[f,e,o,a?.message.id]),i=x.useRef(!1),h=x.useCallback((_,c,g,y)=>{if(r&&r.messageId&&de(r.messageId)&&(!i.current||_!==L.searchContentReferenceShown)){i.current=!0;const p={...ge(r),type:g,index:0,...y??{}};fe.logEventWithStatsig(_,c,p)}},[r]);return d?s.jsx(Qe,{navigation:m,onShowSearchResults:l,trackContentReferenceEvent:h}):s.jsx(Oe,{tldr:{type:"tldr",display_title:m.domains[0].title,url:m.domains[0].url,matched_text:"",start_idx:0,end_idx:0,page_title:"",breadcrumbs:[m.domains[0].domain]},trackContentReferenceEvent:h})},rs=v(()=>b(()=>import("./i8mvgt0cg4jm77kl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),ls=v(()=>b(()=>import("./odtcpqxk4i00cn7j.js"),__vite__mapDeps([9,1,3,4,10]))),cs=v(()=>b(()=>import("./lfg8hxcdjtgf8exd.js"),__vite__mapDeps([11,1,3,4,6,7]))),ms=v(()=>b(()=>import("./n68da3tpieo3rh4d.js"),__vite__mapDeps([12,1,3,4,6,7])).then(e=>e.TextMessageEditor)),ds=v(()=>b(()=>import("./oxsgpajobfic2yr3.js"),__vite__mapDeps([13,1,3,4,14,6,7,15,2,5,8]))),gs=v(async()=>()=>null),fs=v(()=>b(()=>import("./mlrtrigc936cuuwx.js"),__vite__mapDeps([16,1,3,4,6,7,8]))),hs=v(()=>b(()=>import("./hdlxmm5uakr0zjwo.js"),__vite__mapDeps([17,1,3,4,6,7,18,8])).then(e=>e.BrowsingMessage)),us=v(()=>b(()=>import("./ek9cvogjccpvng4b.js"),__vite__mapDeps([19,1,3,4,6,7])).then(e=>e.SearchResultMessage)),xs=v(()=>b(()=>import("./dakmoc6joys0e4qs.js"),__vite__mapDeps([20,1,3,4,6,7,8])).then(e=>e.JITPluginMessage)),_s=v(()=>b(()=>import("./da5q67men22kxnfn.js"),__vite__mapDeps([21,3,1,4,6,7,8])).then(e=>e.DataAnalysisMessage)),ps=v(()=>b(()=>import("./obl0r3ppfp7a769l.js"),__vite__mapDeps([22,1,3,4,6,7,8]))),ys=v(()=>b(()=>import("./ijm5sxx90xmrc4mh.js"),__vite__mapDeps([23,1,6,3,4,7,24,25,26])).then(e=>e.JawboneMessage));function As(e){switch(e.type){case t.Text:case t.Debug:return[e.message];case t.MultiText:case t.Browsing:case t.CodeInterpreter:case t.JITPlugin:case t.RetrievalBrowsing:case t.ParallelBrowsing:case t.Dalle:case t.GizmoEditor:case t.SearchResult:case t.a8km123:case t.f959b8c:case t.b1de6e2:case t.b1de6e2_c:case t.b1de6e2_s:case t.is_loading_message:case t.Canmore:case t.SonicCanvas:case t.de1d73e:case t.SearchGPTQuery:case t.l1p9k3u:case t.oiw209h:return e.messages;default:throw new Error("Bad")}}function Cs({groupedMessagesToRender:e,allGroupedMessages:o,clientThreadId:a,isEditing:m,isUserTurn:f,isCompletionRequestInProgress:d,isFeedbackEnabled:r,isFinalTurn:l,turnIndex:i,hasActiveRequest:h,showEditButton:_=!1,handleEnterEdit:c,handleExitEdit:g,onChangeItemInView:y,onRequestMoreCompletions:p,onRequestCompletion:j,shouldGrowContainer:S=!0}){const{showDebugConversationTurns:D}=Pe(),O=he(a),F=ue(a),Z=ke(),q=o.some(n=>Le.includes(n.type)),G=o.some(n=>n.type===t.b1de6e2_s),ee=e.map((n,u)=>{const T=u===o.length-1;switch(n.type){case t.Text:case t.MultiText:{const E=e[u-1],N=E?.type,V=E&&"messages"in E?E.messages:void 0;if(n.type===t.Text){const se=n?.message&&!k(n.message.message),ae=m?s.jsx(ms,{message:n.message,clientThreadId:a,onChangeItemInView:y,onRequestCompletion:j,onRequestMoreCompletions:p,onExitEdit:g,disabled:h}):q&&se?null:s.jsx(ze,{className:"min-h-8",message:n.message,isFeedbackEnabled:r,isCompletionInProgress:T&&d,turnIndex:i,clientThreadId:a,showEditButton:_,onEnterEdit:c,isUserTurn:f,onRequestMoreCompletions:p,prevGroupedMessageType:N,prevGroupedMessages:V});return s.jsxs(x.Fragment,{children:[ae,s.jsx(He,{isUserTurn:f,message:n.message.message})]},"group-"+n.message.nodeId)}else return n.type===t.MultiText?s.jsx(cs,{clientThreadId:a,messages:n.messages,isCompletionInProgress:T&&d,isFeedbackEnabled:r,onRequestMoreCompletions:p,prevGroupedMessageType:N,prevGroupedMessages:V},"multitext-"+(n.messages[0]?.nodeId??u)):n.type}case t.Browsing:case t.RetrievalBrowsing:{const E=O!=null&&[P.GizmoInteraction,P.GizmoMagicCreate,P.GizmoTest].includes(O.kind),N=F?Be(F):!1;return s.jsx(hs,{messages:n.messages,isRequestActive:h,isLastMessageInTurn:T,isUsingGizmo:E,isUsingSnorlax:N,isRetrieval:n.type===t.RetrievalBrowsing},"browsing-"+(n.messages[0]?.nodeId??u))}case t.SearchGPTQuery:{const E=o.slice(u+1).find(N=>N.type===t.Text);return s.jsx(os,{clientThreadId:a,turnIndex:i,isRequestActive:h,isLastMessage:T,isLastTurnInConversation:l,nextMessage:E&&E.type===t.Text?E.message:void 0},"searchquery-"+(n.messages[0]?.nodeId??u))}case t.a8km123:return s.jsx(ps,{messages:n.messages,isStreaming:T&&d,isLastMessage:T,clientThreadId:a,currentGroupedMessageIndex:u,turnIndex:i},"sum-"+(n.messages[0]?.nodeId??u));case t.f959b8c:return null;case t.is_loading_message:return T&&d?s.jsx(Ue,{}):null;case t.b1de6e2:return G?null:s.jsx(Ke,{messages:n.messages,clientThreadId:a,isCompletionRequestInProgress:d},"b1de6e2-"+(n.messages[0]?.nodeId??u));case t.l1p9k3u:return null;case t.b1de6e2_c:return s.jsx(Ve,{messages:n.messages,clientThreadId:a,isLastMessage:T},"b1de6e2-"+(n.messages[0]?.nodeId??u));case t.b1de6e2_s:return s.jsx(Fe,{messages:n.messages,clientThreadId:a},"b1de6e2_s-"+(n.messages[0]?.nodeId??u));case t.de1d73e:if(Z){const E=u+1<o.length?o[u+1]:void 0;return s.jsx(ys,{clientThreadId:a,currentGroupedMessage:n,nextMessage:E&&E.type===t.Text?E.message:void 0,isLastMessage:T,isRequestActive:h},"jawbone-"+(n.messages[0]?.nodeId??u))}else return null;case t.ParallelBrowsing:return s.jsx(fs,{messages:n.messages},"parallel-"+(n.messages[0]?.nodeId??u));case t.CodeInterpreter:return s.jsx(_s,{messages:n.messages,isRequestActive:h,clientThreadId:a},"ada-"+(n.messages[0]?.nodeId??u));case t.JITPlugin:return s.jsx(xs,{messages:n.messages,clientThreadId:a,isLastTurnInConversation:l,onRequestCompletion:j},"jit-"+(n.messages[0]?.nodeId??u));case t.Dalle:return s.jsx(ds,{messages:n.messages,clientThreadId:a},"dalle-"+(n.messages[0]?.nodeId??u));case t.GizmoEditor:return s.jsx(rs,{messages:n.messages},"gizmo-editor-"+(n.messages[0]?.nodeId??u));case t.oiw209h:return s.jsx(gs,{messages:n.messages,clientThreadId:a},"oiw209h-"+(n.messages[0]?.nodeId??u));case t.Canmore:return s.jsx(Me,{messages:n.messages,allGroupedMessages:e,isFinalTurn:l,isRequestActive:h,clientThreadId:a},"canmore-"+(n.messages[0]?.nodeId??u));case t.SonicCanvas:return!1;case t.Debug:return D?s.jsx(ls,{message:n.message},"debug-"+n.message.nodeId):null;case t.SearchResult:return s.jsx(us,{messages:n.messages},"search-result-"+(n.messages[0]?.nodeId??u))}});return s.jsx(vs,{shouldGrowContainer:S,children:ee})}function Es(){return s.jsx(We,{type:"danger",children:s.jsx(M,{id:"5eGo3w",defaultMessage:"Unable to display this message due to an error."})})}function vs({children:e,shouldGrowContainer:o}){return s.jsx("div",{className:I({"flex max-w-full flex-col":!0,"flex-grow":o}),children:s.jsx(xe,{name:"GroupedMessages",fallback:Es,children:e})})}export{Cs as C,Je as S,as as T,A as a,Ns as b,As as g};
//# sourceMappingURL=h5ki4u1sjcr6cdl0.js.map
