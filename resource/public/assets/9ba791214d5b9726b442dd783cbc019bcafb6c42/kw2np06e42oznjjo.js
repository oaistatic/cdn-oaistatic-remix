const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/cj882kg1wq5sbkux.js","assets/otyn7m3v4o5hjv1m.js","assets/elwr36cpw46qn2l2.js","assets/root-2e173bts.css","assets/l79no6gpmuagwkzk.js","assets/g98o1hu13svzcy4j.js","assets/conversation-small-eplmind9.css","assets/hei2joi8v15zo6ue.js","assets/o197eeud97p1ngrx.js","assets/jn8ox4rolan5i4xk.js","assets/ohl91zfwkdken7ti.js","assets/nihqhr7q7inhjpxl.js","assets/fh8rgy7067db2vb1.js","assets/kt1clzb86ob3u0gu.js","assets/igiwjk0wq6i8agab.js","assets/fx29zk404fcx2q56.js","assets/hwn9eon755759kxv.js"])))=>i.map(i=>d[i]);
import{j as e,r as d,O as k,d2 as V,ba as Q,aO as A,cX as L,c as oe,cJ as W,bN as ie,cr as X,c8 as Y,H as Z,aQ as ee,I as R,K as le,N as ce,fg as f,cU as F,fh as de,E as te,bZ as ue}from"./otyn7m3v4o5hjv1m.js";import{z as me,T as v,A as xe}from"./lw3rrnnb5dxcyypl.js";import"./n8ljlp21wilt13tf.js";import{ed as z,ee as B,ar as b,ca as ge,D as be,n as se,R as S,Y as pe,an as fe,ao as he,ap as q,aq as G,o as ve,ef as je,eg as ae}from"./g98o1hu13svzcy4j.js";import"./i7fmbdae81b985x0.js";import{c as ye}from"./bm1h4ww1xyrtfsng.js";import{S as Se,c as Ce}from"./jlcmomgtg5gnu0ry.js";import{C as we}from"./g0cxs71a0wheatiy.js";import{C as _e}from"./l79no6gpmuagwkzk.js";import{an as Ne,aL as re,bl as ke,R as Me}from"./elwr36cpw46qn2l2.js";import{u as De}from"./fvmrj8bhjyrxfksq.js";import"./kgyg817qi2bj4184.js";import"./e9lafxuzyeh4418f.js";import"./h7bd8ozklku8chja.js";import"./jmutnjyuz0rby5b2.js";import"./hn32nqznsqfgnwx9.js";import"./guixxmttrchqsmhb.js";import"./g08cpw9vtft4y6ku.js";import"./xe4hexxxyjcii8ft.js";import"./hkmla6lmyftf0v53.js";import"./aszamxbvr2a9gk12.js";import"./hlmesjknt93bcxhd.js";import"./kf0px5xsq2h01gfe.js";import"./kvxptdshjr5uucy7.js";import"./mdbvzkzbjz7wvyrk.js";import"./busl3phtm15t1ux6.js";import"./mdywhc6vbcew95e2.js";import"./meyujahihr76crrx.js";import"./bn16pf6j90ncqssc.js";import"./itbprcwpx790xl1j.js";import"./o197eeud97p1ngrx.js";import"./621y46rkqoaumuwb.js";import"./k9qj1gs8lyamxgck.js";import"./h79fctozd4pirvd4.js";import"./nnjyftwv95b3fulb.js";import"./f6msl6xch9ahw1u0.js";import"./hg4uk436hcqxcqme.js";import"./bkt4td8i9ll1fbc2.js";import"./ohl91zfwkdken7ti.js";import"./9z2zy2gm2kabu572.js";import"./ofmu0gkzz86hjmwa.js";import"./b2fmvrixwi0ualqk.js";function Te({children:t,sidebarOpen:r,onClose:i}){return e.jsx(z.Root,{show:r,as:d.Fragment,children:e.jsxs(B,{as:"div",className:"relative z-10",onClose:i,children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(z.Child,{as:d.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(B.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:e.jsx("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}function Pe({clientThreadId:t}){const{rebaseSystemMessageContent:r,showDebugConversationTurns:i}=b(),[a,n]=d.useState(()=>r?JSON.stringify(r,null,2):void 0),[o,c]=d.useState(!!r),s=me(t,v.getThreadCurrentLeafId(t)),l=ge(s,x=>x.content.content_type===V.SystemContent),u=(l==null?void 0:l.content)??null,j=()=>{n(u?JSON.stringify(u,null,2):"")},g=Q(),p=d.useMemo(()=>be(x=>{try{x?b.setState({rebaseSystemMessageContent:{...JSON.parse(x),content_type:V.SystemContent}}):b.setState({rebaseSystemMessageContent:null}),g.closeAll()}catch{g.danger("The System Message is not valid JSON")}},500),[g]);return d.useEffect(()=>{o?p(a):(p.cancel(),b.setState({rebaseSystemMessageContent:null}))},[p,o,a]),e.jsxs("div",{className:"flex flex-col gap-3 px-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(se,{label:"Enable to apply this system message to the current conversation.",children:e.jsx(S,{id:"enabled",label:"Enabled",checked:o,onChange:x=>c(x.currentTarget.checked)})}),e.jsx(S,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:i,onChange:()=>{b.setState({showDebugConversationTurns:!i})}})]}),e.jsx(A,{disabled:!u,className:"mt-2",onClick:j,size:"small",children:"Load active system message"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm",children:"System Message"}),e.jsx(Re,{disabled:!o,placeholder:u?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:a,onChange:x=>n(x.target.value)})]})]})}const Re=k.textarea`w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary`;function Fe({clientThreadId:t}){const[r,i]=d.useState([]),a=v.getThreadCurrentLeafId(t),n=v.getThreadConversationTurns(t,a),o=s=>{const u=v.getTree(t).getLeafFromNode(s);v.setThreadCurrentLeafId(t,u.id)},c=s=>{i(l=>[...l,a]),o(s)};return e.jsxs(e.Fragment,{children:[r.length>0&&e.jsxs(A,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{const s=r[r.length-1];o(s),i(l=>l.slice(0,-1))},children:[e.jsx(Ne,{className:"icon-sm"}),"Go back to ",r[r.length-1]]}),e.jsx("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:n.map((s,l)=>{const u=s.messages[0].nodeId,j=v.getTree(t),g=l!==0?j.getParent(u):null,p=g!=null?g.children.findIndex(m=>u===m):0,x=g!=null?g.children:[],C=x.slice(0,p),y=x.slice(p+1);let h;switch(s.role){case L.User:h="bg-blue-500";break;case L.Assistant:h="bg-gray-600";break;default:h="bg-gray-400";break}return e.jsxs("div",{className:oe("relative p-2",h),children:[e.jsx("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:C.map(m=>e.jsx(J,{variantId:m,onChangeItemInView:c},m))}),e.jsx("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:y.map(m=>e.jsx(J,{variantId:m,onChangeItemInView:c},m))}),e.jsx("div",{className:"flex flex-col gap-2",children:s.messages.map(m=>e.jsxs("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[e.jsx("div",{className:"font-semibold",children:m.nodeId}),e.jsx("div",{className:"italic text-token-text-tertiary",children:m.message.author.role}),e.jsx("div",{children:W(m.message)})]},m.nodeId))})]},l)})})]})}function J({variantId:t,onChangeItemInView:r}){return e.jsx("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{r(t)},children:e.jsx("span",{className:"bg-gray-200 p-2",children:t})},t)}const Le=X(()=>Y(()=>import("./cj882kg1wq5sbkux.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(t=>t.DebugModalContents),{ssr:!1}),Ae=X(()=>Y(()=>import("./hwn9eon755759kxv.js"),__vite__mapDeps([16,1,2,3,5,6])).then(t=>t.FramesViewer),{ssr:!1});function Lt(){return e.jsx("button",{"data-testid":"open-debug-sidebar-button",className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",onClick:()=>{pe.setActiveSidebar("debug")},children:e.jsx(re,{className:"icon-xs"})})}function Ie({children:t,title:r,icon:i,isOpen:a,slideOver:n,onClose:o}){const c=e.jsxs(Be,{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[e.jsx(i,{className:"icon-sm"}),r]}),e.jsx("div",{className:"mr-2 mt-2 flex h-7 items-center",children:e.jsx(ie,{onClick:o})})]}),t]});return n?e.jsx(Te,{sidebarOpen:a,onClose:o,children:c}):a?c:null}function Ee({nodes:t,setDebugNodeIndex:r,setFrameSrc:i,conversationId:a}){const n=t.map((o,c)=>{var U;const s=o.message,{role:l,name:u}=s.author,j=u&&u!==l,g=f(s,"metadata.__internal.model_id"),p=f(s,"metadata.__internal.agent.settings.completion_api.engine"),x=f(s,"metadata.__internal.model_experiment_name"),C=f(s,"metadata.__internal.model_experiment_treatment"),y=f(s,"metadata.__internal.normalized_model_side"),h=f(s,"metadata.__internal.alternative_model_selection_rule"),m=f(s,"metadata.__internal.model_experiment_group_name"),_=f(s,"metadata.__internal.model_experiment_group_params"),w=f(s,"metadata.__internal.model_experiment_override"),M=f(s,"metadata.__internal.model_experiment_eval_seq"),D=(U=f(s,"metadata.__internal.raw_tokens"))==null?void 0:U.length,E=f(s,"metadata.request_id"),O=F.getAudio(s),$=F.getAudioAssetPointers(s),ne=F.getFrameAssetPointers(s);return e.jsxs(Ge,{role:"button",onClick:()=>r(c),children:[e.jsxs("div",{className:"text-xs font-semibold uppercase text-token-text-tertiary",children:[l,j&&` (${u})`,s.recipient&&" -> ",de(s)]}),(s.author.role!==L.System||E)&&e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["ID: ",s.id]}),o.id!==s.id&&e.jsxs("div",{children:["UI Node ID: ",o.id]}),e.jsxs("div",{children:["Req ID: ",E||"Reload page to see ID"]})]}),e.jsx("div",{className:"line-clamp-6",children:W(s)}),(D||g||p||x||C||y||h||m||_||w||M)&&e.jsxs("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[D!==void 0&&e.jsxs("div",{children:[e.jsx("b",{children:"Tokens Count:"})," ",D]}),g&&e.jsxs("div",{children:[e.jsx("b",{children:"Model ID:"})," ",g]}),p&&e.jsxs("div",{children:[e.jsx("b",{children:"Engine:"})," ",p]}),x&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment:"})," ",x]}),C&&e.jsxs("div",{children:[e.jsx("b",{children:"Treatment:"})," ",C]}),y&&e.jsxs("div",{children:[e.jsx("b",{children:"Normalized Side:"})," ",y]}),h&&e.jsxs("div",{children:[e.jsx("b",{children:"Alternative Model Rule:"})," ",h]}),m&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Name:"})," ",m]}),_&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Params:"}),e.jsx("div",{children:JSON.stringify(_,null,2)})]}),w&&e.jsxs("div",{children:[e.jsx("b",{children:"Above Params are Overridden By:"})," ",w]}),M&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),O.length||$.length?e.jsxs("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[e.jsx(ze,{frameAssets:ne,setFrameSrc:i},c),O.map((T,P)=>e.jsx(N,{audio:T,conversationId:a},P)),$.map((T,P)=>e.jsx(N,{assetPointer:T,conversationId:a},P))]}):null]},s.id)});return e.jsx(qe,{children:n})}const H=t=>e.jsx(Ce.Input,{...t,inputClassName:"focus:ring-0"});function Oe(){const t=b(),i=De().map(a=>({label:a.name,options:a.options.map(n=>({label:`${n.value} (${n.name})`,value:n.value}))}));return e.jsxs("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold",children:[e.jsx(S,{id:"force-paragen",label:"Force Parallel Gen",checked:t.forceParagen,onChange:()=>{b.setState({forceParagen:!t.forceParagen})}}),e.jsx(we,{options:i,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!t.forceParagen,isLoading:i.length===0,value:t.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:H},onChange:a=>{b.setState({forceParagenModel:a??je})}}),e.jsx(S,{id:"show-paragen-metadata",label:"Show Paragen Metadata",checked:t.showParagenMetadata,onChange:()=>{b.setState({showParagenMetadata:!t.showParagenMetadata})}}),e.jsx("div",{id:"force-use-search-label",children:"Force Use Search:"}),e.jsx(Se,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"shadow-none dark:text-gray-800",value:t.forceUseSearch==null?{value:"default",label:"Default"}:t.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:H},onChange:a=>{b.setState({forceUseSearch:((a==null?void 0:a.value)??"default")==="default"?null:(a==null?void 0:a.value)==="true"})}}),e.jsx(S,{id:"force-indepth-feedback",label:"Force Indepth Feedback with prompt:",checked:t.forceIndepthFeedback,onChange:()=>{b.setState({forceIndepthFeedback:!t.forceIndepthFeedback})}}),e.jsx(ye,{id:"force-indepth-feedback-prompt",value:t.forceIndepthFeedbackPrompt,disabled:!t.forceIndepthFeedback,className:"font-weight-normal font-mono text-xs",onChange:a=>{b.setState({forceIndepthFeedbackPrompt:a.target.value})}}),e.jsx(S,{id:"force-rate-limit",label:"Force Rate Limit",checked:t.forceRateLimit,onChange:()=>{b.setState({forceRateLimit:!t.forceRateLimit})}}),e.jsx(S,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:t.resetRateLimits,onChange:()=>{b.setState({resetRateLimits:!t.resetRateLimits})}}),e.jsx(se,{label:"Enabling this will show debug conversation messages in the chat",children:e.jsx(S,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:t.showDebugConversationTurns,onChange:()=>{b.setState({showDebugConversationTurns:!t.showDebugConversationTurns})}})})]})}const K=k.div`px-3 pb-2 text-xs font-semibold uppercase border-b-2 ${({$isSelected:t})=>t?"border-black dark:border-white":"border-transparent"}`;function At({clientThreadId:t,isOpen:r,slideOver:i,onClose:a}){const n=Z(),o=ee(),[c,s]=d.useState("conversation");return o!=null&&o.includes("debug")?e.jsx(Ie,{icon:re,title:n.formatMessage(I.debugTitle),isOpen:r,slideOver:i,onClose:a,children:e.jsxs(fe,{orientation:"vertical",defaultValue:c,onValueChange:l=>s(l),children:[e.jsxs(he,{className:"mb-4 flex items-center justify-center gap-2 px-2 py-1 text-xs",children:[e.jsx(q,{value:"conversation",children:e.jsx(K,{$isSelected:c==="conversation",children:"Conversation"})}),e.jsx(q,{value:"system-message-editor",children:e.jsx(K,{$isSelected:c==="system-message-editor",children:"System Message"})}),!1]}),e.jsx(G,{value:"conversation",children:e.jsx($e,{clientThreadId:t})}),e.jsx(G,{value:"system-message-editor",children:e.jsx(Pe,{clientThreadId:t})}),!1]})}):null}function $e({clientThreadId:t}){var y,h,m,_;const r=Z(),i=v.getThreadCurrentLeafId(t),a=xe(t,i),[n,o]=d.useState(),c=ee(),s=d.useCallback(()=>{o(void 0)},[]),l=Q(),u=d.useCallback(w=>{const M=v.getTree(t);ve(M.getTextFromThread(i),l,w)},[i,t,l]),[j,g]=d.useState(!1),[p,x]=d.useState(void 0);return c!=null&&c.includes("debug")?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:e.jsx(Ve,{clientThreadId:t,messages:a.map(w=>w.message)})}),!1,e.jsxs("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[e.jsx("div",{children:e.jsx(_e,{onCopy:u,buttonText:r.formatMessage(I.copyText)})}),e.jsxs("button",{className:"flex items-center justify-center gap-2",onClick:()=>g(!0),children:[e.jsx(ke,{className:"icon-sm rotate-90"}),"View tree"]})]}),e.jsx(Oe,{}),e.jsx(Ee,{nodes:a,setDebugNodeIndex:o,setFrameSrc:x,conversationId:v.getServerThreadId(t)}),n!==void 0&&e.jsx(R,{type:"success",size:"fullscreen",noPadding:!0,isOpen:!0,onClose:s,children:e.jsx(Le,{threadId:(h=(y=a[n].message.metadata)==null?void 0:y.__internal)==null?void 0:h.sonic_thread_id,threadUserId:(_=(m=a[n].message.metadata)==null?void 0:m.__internal)==null?void 0:_.sonic_user_id,onClose:s,message:a[n].message})},`DebugMessageModal-${n}`),j&&e.jsx(R,{isOpen:!0,onClose:()=>g(!1),type:"success",size:"custom",noPadding:!0,children:e.jsx(Fe,{clientThreadId:t})},"DebugTreeViewer"),p&&e.jsx(R,{size:"normal",isOpen:!0,onClose:()=>x(void 0),type:"success",children:e.jsx("img",{src:p,alt:"debug image"})},"DebugFrameViewer")]}):null}function Ue(t,r){const i=JSON.stringify({conversation_id:v.getServerThreadId(t),messages:r},null,2),a=new Blob([i],{type:"application/json"}),n=URL.createObjectURL(a),o=document.createElement("a");o.href=n,o.download=`messages-${v.getServerThreadId(t)}.json`,o.click(),URL.revokeObjectURL(n)}function Ve({clientThreadId:t,messages:r}){const i=d.useCallback(()=>{Ue(t,r)},[t,r]);return e.jsx(A,{onClick:i,color:"primary",size:"small",icon:Me,children:e.jsx(le,{...I.downloadRawConversation})})}function ze(t){const[r,i]=d.useState([]),a=te(),{frameAssets:n}=t;return d.useEffect(()=>{async function o(){const c=n.map(async({image_asset_pointer:s,timestamp:l})=>{const u={asset:s};return{src:(await ae.fetch(a,u)).url,timestamp:l}});return Promise.all(c)}n.length>0&&o().then(i)},[n,a]),e.jsx(Ae,{frames:r,setFrameSrc:t.setFrameSrc})}function N(t){const r=N.useAssetPointerSource(t.assetPointer,t.conversationId),i=N.useAudioSource(t.audio),a=r??i,o=ue("3230069703").config.value.expirySeconds,[c,s]=d.useState(Date.now()),l=d.useRef(null);return d.useEffect(()=>{const u=setInterval(()=>{l.current&&l.current.currentTime>0&&!l.current.paused&&!l.current.ended&&l.current.readyState>2||s(Date.now())},o*1e3);return()=>clearInterval(u)},[o]),a?e.jsx("audio",{ref:l,controls:!0,src:a,className:"w-full"},c):null}N.useAssetPointerSource=(t,r)=>{const[i,a]=d.useState(null),n=te();return d.useEffect(()=>{t&&ae.fetch(n,{asset:t,conversationId:r}).then(o=>{a(o.url)})},[n,t,r]),i};N.useAudioSource=t=>{const[r,i]=d.useState(null);return d.useEffect(()=>{if(t){const a=atob(t.payload),n=new Uint8Array(a.length);for(let s=0;s<a.length;s++)n[s]=a.charCodeAt(s);const o=new Blob([n],{type:`audio/${t.format}`}),c=URL.createObjectURL(o);return i(c),()=>{URL.revokeObjectURL(c)}}},[t]),r};const Be=k.div`overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary`,qe=k.pre`whitespace-pre-wrap text-sm`,Ge=k.div`px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200`,I=ce({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}});export{$e as DebugConversation,At as DebugConversationSidebar,Lt as OpenDebugSidebarButton,Ie as default,Ue as downloadMessages};
//# sourceMappingURL=kw2np06e42oznjjo.js.map
