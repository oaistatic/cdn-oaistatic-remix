const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/o5u355155zdtvywc.js","assets/dfm2yceao9m2ilo9.js","assets/root-mg58v26q.css","assets/irdsidzglcs4nfrj.js","assets/nq6unafdket6v2d4.js","assets/o7wih49jz3zkdcav.js","assets/conversation-small-ile61fj8.css","assets/ccrdffu4uq6bo5k0.js","assets/ba20lgnl47nenhtw.js","assets/jvd7v811vc32c0gj.js","assets/dr4xzumftaqy79xu.js","assets/l3uwv9kpvyaezim5.js","assets/exc5ksalymo1h08y.js","assets/rodqb28vg243fmhg.js","assets/gnqqviod8t2zxuwt.js","assets/h5vyxc788qi7gbj9.js","assets/g1wd2b9yuaxn5nf3.js","assets/c2pwglyvnc7orqda.js","assets/kkoyvg7ee9ff56ss.js","assets/hpofv4tsrpkbskxe.js","assets/izdi8teybt99hr9m.js","assets/lauyszb70p04hw4j.js","assets/owso01zt9buqsat2.js","assets/okr4mgceik4wnl4h.js","assets/ocf3zsnt570d6j2n.js","assets/efw2lwbm4kjkhxdz.js"])))=>i.map(i=>d[i]);
import{r as u,m as s,aE as I,aJ as W,gT as H,fj as q,fk as ee,be as se,b6 as L,e5 as ae,fg as ne,e3 as te,bz as J,bi as K,gU as oe,d as ie,ad as re,P as le,b3 as y,b4 as v,b8 as ce,at as O,fa as me}from"./dfm2yceao9m2ilo9.js";import{fx as k,fy as Q,aQ as P,fz as de,fA as ge,fB as fe,fC as pe,fD as xe,c_ as ue,aZ as he,fE as _e,ba as ye,fF as Ee,fG as ve,bV as n,fH as je,fI as be,fJ as Ie,fK as Te,fL as Ae,fc as Ne}from"./o7wih49jz3zkdcav.js";import{m as C}from"./ccrdffu4uq6bo5k0.js";const Se=2e3,Y=.4,Ce=.45,we=.2,De=.1,Re=.25;var N=(e=>(e[e.Running=0]="Running",e[e.Finished=1]="Finished",e[e.Error=2]="Error",e[e.Stopped=3]="Stopped",e[e.Paused=4]="Paused",e))(N||{});function os({conversationMessages:e,icon:o,status:a,text:d,estimatedToolDurationMs:p,animationLoopDurationMs:g=Se,shouldPersistAfterFinished:r=!1}){const[l,i]=u.useState(a===0?0:a===1&&!r?7:1),[c,x]=u.useState(0);u.useEffect(()=>{a===2?i(8):a===3?i(9):a===4?i(10):a===1?i(l===2?3:7):a===0&&l===10&&(i(2),x(m=>m+1))},[a]);const f=Le(l);return u.useEffect(()=>{const m=e[0].message.id;if(f)return k.addDelayedRenderingMessage(m),()=>{k.removeDelayedRenderingMessage(m)}},[f]),Q(()=>{S(l)&&x(m=>m+1)},g),l===7&&!r?null:s.jsxs("div",{className:"my-2.5 flex items-center gap-2.5",children:[s.jsx(Pe,{icon:o,status:a,uiState:l,estimatedToolDurationMs:p,animationLoopCounter:c,shouldPersistAfterFinished:r,onFillProgressBarAnimationComplete:()=>i(4),onFinishAnimationComplete:()=>{i(5),setTimeout(()=>{i(r?7:6)},De*1e3)},onHideAnimationComplete:()=>i(7)}),s.jsx(Oe,{text:d,uiState:l,animationLoopCounter:c,onEnterAnimationComplete:()=>i(2)})]})}const F=50;function Pe({icon:e,status:o,uiState:a,estimatedToolDurationMs:d,animationLoopCounter:p,shouldPersistAfterFinished:g,onFillProgressBarAnimationComplete:r,onFinishAnimationComplete:l,onHideAnimationComplete:i}){const[c,x]=u.useState(0);Q(()=>{S(a)?x(D=>D+F):a===10&&x(0)},F);let f,m,_;S(a)||a===10?(f="running",m=s.jsx(e,{animationLoopCounter:p}),_="bg-transparent"):a===4||a===5||a===7&&g?(f="finished",m=s.jsx(ge,{}),_="bg-brand-purple"):o===2?(f="error",m=s.jsx(fe,{}),_="bg-orange-500"):o===3&&(f="stopped",m=s.jsx(pe,{}),_="bg-gray-300");let E={opacity:0,scale:0,rotate:-180,x:0},b={type:"spring",bounce:.3,duration:Ce},T={opacity:0,scale:.6,rotate:0,x:0};a===0?(E={opacity:0,scale:.5,rotate:-180,x:-8},b={type:"spring",bounce:.3,duration:Y}):a===1?E=!1:a===5&&(T={opacity:0,scale:0,rotate:0,x:0},b={type:"spring",bounce:.3,duration:Re});const w=xe(c,d);return s.jsx("div",{className:"relative h-5 w-5 shrink-0",children:s.jsx(P,{onExitComplete:()=>{a===6&&i()},children:f!=null&&s.jsxs(C.div,{className:I("absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full text-white",_),initial:E,animate:{opacity:1,scale:1,rotate:0,x:0},exit:T,transition:b,onAnimationComplete:()=>{a===4&&l()},children:[m,(S(a)||a===10)&&s.jsx(de,{percentage:a===3?100:w,thickness:1.5/23,className:"absolute left-1/2 top-1/2 h-[23px] w-[23px] -translate-x-1/2 -translate-y-1/2 text-brand-purple",backgroundStrokeClassName:"stroke-brand-purple/25 dark:stroke-brand-purple/50",transitionDuration:a===3?`${(100-w)/100*we}s`:void 0,transitionTimingFunction:a===3?"cubic-bezier(0.55, 0, 1, 1)":void 0,onTransitionEnd:()=>{a===3&&r()}})]},f)})})}function Oe({text:e,uiState:o,animationLoopCounter:a,onEnterAnimationComplete:d}){const[p,g]=u.useState(e);u.useEffect(()=>{o===2&&g(e)},[a]),u.useEffect(()=>{S(o)||g(e)},[o,e]);let r={opacity:0,x:0,y:15},l={type:"spring",bounce:.3,opacity:{duration:.15},y:{duration:.3}};o===0?(r={opacity:0,x:-8,y:0},l={type:"spring",bounce:.3,duration:Y,delay:.15}):o===1&&(r=!1);const i=p??void 0;return s.jsx("div",{className:I("relative h-5 w-full leading-5",o===8||o===9?"text-token-text-tertiary":"text-token-text-secondary"),children:s.jsx(P,{children:i!=null&&s.jsx(C.div,{className:"absolute left-0 top-0 line-clamp-1 overflow-visible",initial:r,animate:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-15},transition:l,onAnimationComplete:()=>{o===0&&d()},children:i},i.toString())})})}function S(e){return e===0||e===2||e===3}function Le(e){return S(e)||e===4||e===5||e===6||e===10}const V=W.div`group absolute left-0 top-0 mr-1.5 h-8 overflow-hidden mt-1`;function Me({highlightedCommand:e,status:o,children:a,showWorkUserSetting:d=!1,hideOnlyIfNotInteractedWith:p=!1,onOpenAnalytics:g,onClick:r}){const l=a!=null||r!=null,[i]=u.useState(d),[c,x]=u.useState(d),[f,m]=u.useState(!1),_=o===N.Finished||o===N.Error,E=p?i?!1:!f:!1,b=o===N.Running&&"loading-shimmer";return _&&E?null:l?s.jsxs(s.Fragment,{children:[s.jsx(B,{$canShowWork:!0,children:s.jsx(P,{children:s.jsx(V,{children:s.jsx(C.button,{onClick:()=>{c||g?.(),x(T=>!T),m(!0),r?.()},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:I(b),children:s.jsxs("div",{className:"flex items-center justify-start gap-1",children:[s.jsx("span",{children:e}),!r&&(c?s.jsx(ue,{className:"icon-md"}):s.jsx(he,{className:"icon-md"}))]})},e?.toString())})})}),s.jsx(P,{children:c&&a&&s.jsx(C.div,{initial:"collapsed",animate:"reveal",exit:"collapsed",variants:{collapsed:{translateY:-20,opacity:0,height:0},reveal:{translateY:0,opacity:1,height:"auto"}},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:a})})]}):s.jsx(B,{$canShowWork:!1,children:s.jsx(V,{className:I(b),children:e})})}const B=W.span`block first:mt-0 relative h-8
${({$canShowWork:e})=>e?"text-token-text-secondary hover:text-token-text-primary my-1.5":"text-token-text-secondary"}`,ke=3,Fe=.1,U=[0,.26,.4];function Ve({nextMessage:e,isLastMessage:o,isRequestActive:a,isLastTurnInConversation:d,clientThreadId:p,turnIndex:g}){let r=o||!e||e&&!H(e.message);const l=q(e?.message),i=ee(e?.message);e?.message.id&&_e(e?.message.id);const c=[];if(i?.[0]?.type==="navigation"&&e&&c.push(s.jsx(Be,{clientThreadId:p,turnIndex:g,nextMessage:e,isRequestActive:a,isLastTurnInConversation:d,navigationCitation:i[0]},"fast-nav")),r){const x=se(l.slice(0,ke).map(m=>m.entries[0].url)),f=a?s.jsxs("div",{className:"flex items-center gap-1",children:[x.map((m,_)=>s.jsx(C.div,{className:I("-ml-1.5 first:ml-0 last:mr-1.5","relative"),initial:{width:_===0?0:6,opacity:0},animate:{width:20,opacity:1},transition:{duration:Fe,delay:U[Math.min(_,U.length-1)]},children:s.jsx("div",{className:I("flex h-[22px] w-[22px] items-center overflow-hidden rounded-full","border-2 border-token-main-surface-primary bg-token-main-surface-primary"),children:s.jsx(ye,{url:m,size:32,minSize:16,className:"icon-md rounded-full"})})},m)),s.jsx(L,{id:"jjx8Qg",defaultMessage:"Searching the web"})]}):s.jsx(L,{id:"fssXGM",defaultMessage:"Error while searching"});c.push(s.jsx(Me,{highlightedCommand:f,status:a?N.Running:N.Error},"search-gpt-query"))}return c.length?s.jsx(s.Fragment,{children:c}):null}const Be=({clientThreadId:e,turnIndex:o,nextMessage:a,isRequestActive:d,isLastTurnInConversation:p,navigationCitation:g})=>{const{scrollToHeader:r}=ae("searchSources")??{},l=ne(),i=te()&&l?.type==="searchSources",{openThreadSidebar:c}=J(),{value:x}=K("756982148");return u.useEffect(()=>{i&&c({type:"searchSources",scrollToHeader:r,clientThreadId:e,turnIndex:o,messageId:a?.message.id??""})},[]),d&&p&&x?s.jsx(C.div,{initial:{opacity:d?0:1,height:d?0:"auto"},animate:{opacity:1,height:"auto"},children:s.jsx(z,{clientThreadId:e,turnIndex:o,nextMessage:a,navigationCitation:g})}):s.jsx(z,{clientThreadId:e,turnIndex:o,nextMessage:a,navigationCitation:g})},z=({clientThreadId:e,turnIndex:o,nextMessage:a,navigationCitation:d})=>{const{toggleThreadSidebar:p}=J(),{value:g}=K("756982148"),r=u.useMemo(()=>({clientThreadId:e,turnIndex:o,messageId:a?.message.id}),[e,o,a?.message.id]),l=u.useCallback((x,f)=>{p({type:"searchSources",scrollToHeader:f,clientThreadId:e,turnIndex:o,messageId:a?.message.id??""})},[p,e,o,a?.message.id]),i=u.useRef(!1),c=u.useCallback((x,f,m,_)=>{if(r&&r.messageId&&oe(r.messageId)&&(!i.current||x!==ie.searchContentReferenceShown)){i.current=!0;const E={...re(r),type:m,index:0,..._??{}};le.logEventWithStatsig(x,f,E)}},[r]);return g?s.jsx(Ee,{navigation:d,onShowSearchResults:l,trackContentReferenceEvent:c}):s.jsx(ve,{tldr:{type:"tldr",display_title:d.domains[0].title,url:d.domains[0].url,matched_text:"",start_idx:0,end_idx:0,page_title:"",breadcrumbs:[d.domains[0].domain]},trackContentReferenceEvent:c})},Ue=y(()=>v(()=>import("./o5u355155zdtvywc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),ze=y(()=>v(()=>import("./ba20lgnl47nenhtw.js"),__vite__mapDeps([8,1,2,9]))),We=y(()=>v(()=>import("./dr4xzumftaqy79xu.js"),__vite__mapDeps([10,1,2,5,6]))),He=y(()=>v(()=>import("./l3uwv9kpvyaezim5.js"),__vite__mapDeps([11,1,2,5,6])).then(e=>e.TextMessageEditor)),Je=y(()=>v(()=>import("./exc5ksalymo1h08y.js"),__vite__mapDeps([12,1,2,13,5,6,7,14,3,4,15,16]))),Ke=y(async()=>()=>null),Qe=y(()=>v(()=>import("./c2pwglyvnc7orqda.js"),__vite__mapDeps([17,1,2,5,6,7]))),Ye=y(()=>v(()=>import("./kkoyvg7ee9ff56ss.js"),__vite__mapDeps([18,1,2,5,6,19,7])).then(e=>e.BrowsingMessage)),$e=y(()=>v(()=>import("./izdi8teybt99hr9m.js"),__vite__mapDeps([20,1,2,5,6])).then(e=>e.SearchResultMessage)),Xe=y(()=>v(()=>import("./lauyszb70p04hw4j.js"),__vite__mapDeps([21,1,2,5,6,7])).then(e=>e.JITPluginMessage)),Ze=y(()=>v(()=>import("./owso01zt9buqsat2.js"),__vite__mapDeps([22,1,2,5,6,7])).then(e=>e.DataAnalysisMessage)),Ge=y(()=>v(()=>import("./okr4mgceik4wnl4h.js"),__vite__mapDeps([23,1,2,15,5,6,24,25,7])));function is(e){switch(e.type){case n.Text:case n.Debug:return[e.message];case n.MultiText:case n.Browsing:case n.CodeInterpreter:case n.JITPlugin:case n.RetrievalBrowsing:case n.ParallelBrowsing:case n.Dalle:case n.GizmoEditor:case n.SearchResult:case n.a8km123:case n.f959b8c:case n.b1de6e2:case n.b1de6e2_c:case n.Canmore:case n.SonicCanvas:case n.de1d73e:case n.SearchGPTQuery:case n.oiw209h:return e.messages;default:throw new Error("Bad")}}function rs({groupedMessagesToRender:e,allGroupedMessages:o,clientThreadId:a,isEditing:d,isUserTurn:p,isCompletionRequestInProgress:g,isFeedbackEnabled:r,isFinalTurn:l,turnIndex:i,hasActiveRequest:c,showEditButton:x=!1,handleEnterEdit:f,handleExitEdit:m,onChangeItemInView:_,onRequestMoreCompletions:E,onRequestCompletion:b,shouldGrowContainer:T=!0}){const{showDebugConversationTurns:w}=je(),D=ce(a),$=o.some(t=>be.includes(t.type)),X=e.map((t,h)=>{const A=h===o.length-1;switch(t.type){case n.Text:case n.MultiText:{const j=e[h-1],R=j?.type,M=j&&"messages"in j?j.messages:void 0;if(t.type===n.Text){const Z=t?.message&&!H(t.message.message),G=d?s.jsx(He,{message:t.message,clientThreadId:a,onChangeItemInView:_,onRequestCompletion:b,onRequestMoreCompletions:E,onExitEdit:m,disabled:c}):$&&Z?null:s.jsx(Te,{className:"min-h-8",message:t.message,isFeedbackEnabled:r,isCompletionInProgress:A&&g,turnIndex:i,clientThreadId:a,showEditButton:x,onEnterEdit:f,isUserTurn:p,onRequestMoreCompletions:E,prevGroupedMessageType:R,prevGroupedMessages:M});return s.jsxs(u.Fragment,{children:[G,s.jsx(Ae,{isUserTurn:p,message:t.message.message})]},"group-"+t.message.nodeId)}else return t.type===n.MultiText?s.jsx(We,{clientThreadId:a,messages:t.messages,isCompletionInProgress:A&&g,isFeedbackEnabled:r,onRequestMoreCompletions:E,prevGroupedMessageType:R,prevGroupedMessages:M},"multitext-"+(t.messages[0]?.nodeId??h)):t.type}case n.Browsing:case n.RetrievalBrowsing:{const j=D!=null&&[O.GizmoInteraction,O.GizmoMagicCreate,O.GizmoTest].includes(D.kind);return s.jsx(Ye,{messages:t.messages,isRequestActive:c,isLastMessageInTurn:A,isUsingGizmo:j,isRetrieval:t.type===n.RetrievalBrowsing},"browsing-"+(t.messages[0]?.nodeId??h))}case n.SearchGPTQuery:{const j=o.slice(h+1).find(R=>R.type===n.Text);return s.jsx(Ve,{clientThreadId:a,turnIndex:i,isRequestActive:c,isLastMessage:A,isLastTurnInConversation:l,nextMessage:j&&j.type===n.Text?j.message:void 0},"searchquery-"+(t.messages[0]?.nodeId??h))}case n.a8km123:return s.jsx(Ge,{messages:t.messages,isStreaming:A&&g,isLastMessage:A,clientThreadId:a,currentGroupedMessageIndex:h,turnIndex:i},"sum-"+(t.messages[0]?.nodeId??h));case n.f959b8c:return null;case n.b1de6e2:return null;case n.b1de6e2_c:return null;case n.de1d73e:return null;case n.ParallelBrowsing:return s.jsx(Qe,{messages:t.messages},"parallel-"+(t.messages[0]?.nodeId??h));case n.CodeInterpreter:return s.jsx(Ze,{messages:t.messages,isRequestActive:c,clientThreadId:a},"ada-"+(t.messages[0]?.nodeId??h));case n.JITPlugin:return s.jsx(Xe,{messages:t.messages,clientThreadId:a,isLastTurnInConversation:l,onRequestCompletion:b},"jit-"+(t.messages[0]?.nodeId??h));case n.Dalle:return s.jsx(Je,{messages:t.messages,clientThreadId:a},"dalle-"+(t.messages[0]?.nodeId??h));case n.GizmoEditor:return s.jsx(Ue,{messages:t.messages},"gizmo-editor-"+(t.messages[0]?.nodeId??h));case n.oiw209h:return s.jsx(Ke,{messages:t.messages,clientThreadId:a},"oiw209h-"+(t.messages[0]?.nodeId??h));case n.Canmore:return s.jsx(Ie,{messages:t.messages,allGroupedMessages:e,isFinalTurn:l,isRequestActive:c,clientThreadId:a},"canmore-"+(t.messages[0]?.nodeId??h));case n.SonicCanvas:return!1;case n.Debug:return w?s.jsx(ze,{message:t.message},"debug-"+t.message.nodeId):null;case n.SearchResult:return s.jsx($e,{messages:t.messages},"search-result-"+(t.messages[0]?.nodeId??h))}});return s.jsx(es,{shouldGrowContainer:T,children:X})}function qe(){return s.jsx(Ne,{type:"danger",children:s.jsx(L,{id:"daIg0P",defaultMessage:"Unable to display this message due to a error."})})}function es({children:e,shouldGrowContainer:o}){return s.jsx("div",{className:I({"flex max-w-full flex-col":!0,"flex-grow":o}),children:s.jsx(me,{name:"GroupedMessages",fallback:qe,children:e})})}export{rs as C,N as T,Me as a,os as b,is as g};
//# sourceMappingURL=crgpn8kp0lsek69a.js.map
