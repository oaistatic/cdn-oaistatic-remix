const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/j2eljwmpi7p5a7tz.js","assets/gqmy69lfum1xn3in.js","assets/i4z8naqcr3t3djqa.js","assets/root-dcq62fgs.css","assets/dcq6opmm2fdie4vr.js","assets/icnxn2xqcp3w18gd.js","assets/conversation-small-ict01xsi.css","assets/gk2hjig0je5svcif.js","assets/lixsqsf92vxrz44h.js","assets/cctttvu6l9fe5ino.js","assets/j5w4166bn3c02o6l.js","assets/l1l7138jxqsxecdx.js","assets/fwlffwb8x61oidmk.js","assets/dxo7jh8g6yhf5o3w.js","assets/nd0vf5z6jty2a64o.js","assets/cwpixm22y0dtg212.js","assets/lsd1w8334od0c87y.js","assets/dhyjmgmeeztgicru.js","assets/cavukdcyxypcer1u.js"])))=>i.map(i=>d[i]);
import{r as d,j as e,aY as I,aK as k,L as ie,aw as M,M as q,Z as Y,R as F,ar as ce,b3 as de,aE as Q,aF as Z,Y as ee,bU as se,bL as P,aG as ue,X as me,fL as f,m as te,aD as ge}from"./gqmy69lfum1xn3in.js";import{A as x,f_ as xe,f$ as he,g0 as G,g1 as H,g2 as be,v as p,g3 as fe,d as pe,a as w,bn as ae,U as ve,w as je,x as Se,y as J,z as K,g4 as ye,B as we,d7 as R,g5 as Ce,g6 as _e,g7 as Ne,g8 as ne}from"./icnxn2xqcp3w18gd.js";import{S as O,c as re}from"./i7utccinsv890y27.js";import{C as Me}from"./fshrbah8t1r8n219.js";import{C as ke}from"./dcq6opmm2fdie4vr.js";import{aJ as De,aN as oe,bd as Te,q as Ae}from"./i4z8naqcr3t3djqa.js";import"./e9lafxuzyeh4418f.js";import"./e67pohch4eo5p8ua.js";function Pe(){const s=x(),n=xe(),[o,t]=d.useState(!1),r=Le(n,he),l=Object.keys(r).length>0;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:["Force Use Search",e.jsx(I,{label:l?`${Object.keys(r).length} search setting(s) changed`:"Open search settings",children:e.jsx(k,{size:"xs",color:l?"danger":"secondary",onClick:()=>t(!0),children:"Search Settings"})})]}),e.jsx(O,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"mt-1 shadow-none dark:text-gray-800",value:s.forceUseSearch==null?{value:"default",label:"Default"}:s.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:Re},onChange:i=>{x.setState({forceUseSearch:(i?.value??"default")==="default"?null:i?.value==="true"})}})]}),!1]})}const Re=s=>e.jsx(re.Input,{...s,inputClassName:"focus:ring-0"});function Le(s,n){return Object.keys(s).reduce((o,t)=>(ie(s[t],n[t])||(o[t]=n[t]),o),{})}function Fe({children:s,sidebarOpen:n,onClose:o}){return e.jsx(G.Root,{show:n,as:d.Fragment,children:e.jsxs(H,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(G.Child,{as:d.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(H.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:e.jsx("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:s})})})})})})]})})}function Oe({clientThreadId:s}){const{rebaseSystemMessageContent:n,showDebugConversationTurns:o}=x(),[t,r]=d.useState(()=>n?JSON.stringify(n,null,2):void 0),[l,i]=d.useState(!!n),a=be(s,p.getThreadCurrentLeafId(s)),u=fe(a,m=>m.content.content_type===q.SystemContent)?.content??null,j=()=>{r(u?JSON.stringify(u,null,2):"")},h=Y(),b=d.useMemo(()=>pe(m=>{try{m?x.setState({rebaseSystemMessageContent:{...JSON.parse(m),content_type:q.SystemContent}}):x.setState({rebaseSystemMessageContent:null}),h.closeAll()}catch{h.danger("The System Message is not valid JSON")}},500),[h]);return d.useEffect(()=>{l?b(t):(b.cancel(),x.setState({rebaseSystemMessageContent:null}))},[b,l,t]),e.jsxs("div",{className:"flex flex-col gap-3 px-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(I,{label:"Enable to apply this system message to the current conversation.",children:e.jsx(w,{id:"enabled",label:"Enabled",checked:l,onChange:m=>i(m.currentTarget.checked)})}),e.jsx(w,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:o,onChange:()=>{x.setState({showDebugConversationTurns:!o})}})]}),e.jsx(k,{disabled:!u,className:"mt-2",onClick:j,size:"small",children:"Load active system message"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm",children:"System Message"}),e.jsx(Ie,{disabled:!l,placeholder:u?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:t,onChange:m=>r(m.target.value)})]})]})}const Ie=M.textarea`w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary`;function Ee({clientThreadId:s}){const[n,o]=d.useState([]),t=p.getThreadCurrentLeafId(s),r=p.getThreadConversationTurns(s,t),l=a=>{const u=p.getTree(s).getLeafFromNode(a);p.setThreadCurrentLeafId(s,u.id)},i=a=>{o(c=>[...c,t]),l(a)};return e.jsxs(e.Fragment,{children:[n.length>0&&e.jsxs(k,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{const a=n[n.length-1];l(a),o(c=>c.slice(0,-1))},children:[e.jsx(De,{className:"icon-sm"}),"Go back to ",n[n.length-1]]}),e.jsx("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:r.map((a,c)=>{const u=a.messages[0].nodeId,j=p.getTree(s),h=c!==0?j.getParent(u):null,b=h!=null?h.children.findIndex(g=>u===g):0,m=h!=null?h.children:[],y=m.slice(0,b),S=m.slice(b+1);let v;switch(a.role){case F.User:v="bg-blue-500";break;case F.Assistant:v="bg-gray-600";break;default:v="bg-gray-400";break}return e.jsxs("div",{className:ce("relative p-2",v),children:[e.jsx("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:y.map(g=>e.jsx(W,{variantId:g,onChangeItemInView:i},g))}),e.jsx("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:S.map(g=>e.jsx(W,{variantId:g,onChangeItemInView:i},g))}),e.jsx("div",{className:"flex flex-col gap-2",children:a.messages.map(g=>e.jsxs("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[e.jsx("div",{className:"font-semibold",children:g.nodeId}),e.jsx("div",{className:"italic text-token-text-tertiary",children:g.message.author.role}),e.jsx("div",{children:ae(g.message)})]},g.nodeId))})]},c)})})]})}function W({variantId:s,onChangeItemInView:n}){return e.jsx("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{n(s)},children:e.jsx("span",{className:"bg-gray-200 p-2",children:s})},s)}const $e=Q(()=>Z(()=>import("./j2eljwmpi7p5a7tz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(s=>s.DebugModalContents)),Ue=Q(()=>Z(()=>import("./cavukdcyxypcer1u.js"),__vite__mapDeps([18,1,2,3,5,6])).then(s=>s.FramesViewer));function rs(){return e.jsx("button",{"data-testid":"open-debug-sidebar-button",className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",onClick:()=>{ve.setActiveSidebar("debug")},children:e.jsx(oe,{className:"icon-xs"})})}function Ve({children:s,title:n,icon:o,isOpen:t,slideOver:r,onClose:l}){const i=e.jsxs(Ke,{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[e.jsx(o,{className:"icon-sm"}),n]}),e.jsx("div",{className:"mr-2 mt-2 flex h-7 items-center",children:e.jsx(de,{onClick:l})})]}),s]});return r?e.jsx(Fe,{sidebarOpen:t,onClose:l,children:i}):t?i:null}function Be({nodes:s,setDebugNodeIndex:n,setFrameSrc:o,conversationId:t}){const r=s.map((l,i)=>{const a=l.message,{role:c,name:u}=a.author,j=u&&u!==c,h=f(a,"metadata.__internal.model_id"),b=f(a,"metadata.__internal.agent.settings.completion_api.engine"),m=f(a,"metadata.__internal.model_experiment_name"),y=f(a,"metadata.__internal.model_experiment_treatment"),S=f(a,"metadata.__internal.normalized_model_side"),v=f(a,"metadata.__internal.alternative_model_selection_rule"),g=f(a,"metadata.__internal.model_experiment_group_name"),D=f(a,"metadata.__internal.model_experiment_group_params"),T=f(a,"metadata.__internal.model_experiment_override"),$=f(a,"metadata.__internal.model_experiment_eval_seq"),A=f(a,"metadata.__internal.raw_tokens")?.length,U=f(a,"metadata.request_id"),V=f(a,"metadata.__internal.search_settings"),B=R.getAudio(a),z=R.getAudioAssetPointers(a),le=R.getFrameAssetPointers(a);return e.jsxs(Xe,{role:"button",onClick:()=>n(i),children:[e.jsxs("div",{className:"break-words text-xs font-semibold uppercase text-token-text-tertiary",children:[c,j&&` (${u})`,a.recipient&&" -> ",Ce(a)]}),(a.author.role!==F.System||U)&&e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["ID: ",a.id]}),l.id!==a.id&&e.jsxs("div",{children:["UI Node ID: ",l.id]}),e.jsxs("div",{children:["Req ID: ",U||"Reload page to see ID"]})]}),e.jsx("div",{className:"line-clamp-6",children:ae(a)}),(A||h||b||m||y||S||v||g||D||T||$)&&e.jsxs("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[A!==void 0&&e.jsxs("div",{children:[e.jsx("b",{children:"Tokens Count:"})," ",A]}),h&&e.jsxs("div",{children:[e.jsx("b",{children:"Model ID:"})," ",h]}),b&&e.jsxs("div",{children:[e.jsx("b",{children:"Engine:"})," ",b]}),m&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment:"})," ",m]}),y&&e.jsxs("div",{children:[e.jsx("b",{children:"Treatment:"})," ",y]}),S&&e.jsxs("div",{children:[e.jsx("b",{children:"Normalized Side:"})," ",S]}),v&&e.jsxs("div",{children:[e.jsx("b",{children:"Alternative Model Rule:"})," ",v]}),g&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Name:"})," ",g]}),D&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Params:"}),e.jsx("div",{children:JSON.stringify(D,null,2)})]}),T&&e.jsxs("div",{children:[e.jsx("b",{children:"Above Params are Overridden By:"})," ",T]}),$&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),B.length||z.length?e.jsxs("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[e.jsx(Je,{frameAssets:le,setFrameSrc:o},i),B.map((C,N)=>e.jsx(_,{audio:C,conversationId:t},N)),z.map((C,N)=>e.jsx(_,{assetPointer:C,conversationId:t},N))]}):null,V&&e.jsx("div",{className:"flex flex-wrap gap-1",children:Object.entries(V).map(([C,N])=>e.jsxs("div",{className:"rounded-xl bg-gray-500 px-2 py-0.5 text-xs text-white",children:[C,": ",N]},C))})]},a.id)});return e.jsx(We,{children:r})}const L=s=>e.jsx(re.Input,{...s,inputClassName:"focus:ring-0"});function ze(){const s=x(),o=_e().map(t=>({label:t.name,options:t.options.map(r=>({label:`${r.value} (${r.name})`,value:r.value}))}));return e.jsxs("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold",children:[e.jsx(w,{id:"force-paragen",label:"Force Parallel Gen",checked:s.forceParagen,onChange:()=>{x.setState({forceParagen:!s.forceParagen})}}),e.jsx(Me,{options:o,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!s.forceParagen,isLoading:o.length===0,value:s.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:L},onChange:t=>{x.setState({forceParagenModel:t??Ne})}}),s.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Paragen Stream Type:"}),e.jsx(O,{options:[{label:"Do Not Override",value:"none"},{label:"Force Classic Stream Behavior",value:"default"},{label:"Wait for Assistant",value:"wait_for_assistant"},{label:"Interleave",value:"interleave"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:s.paragenStreamType==="none"?{value:"none",label:"Do Not Override"}:s.paragenStreamType==="default"?{value:"default",label:"Force Classic Stream Behavior"}:s.paragenStreamType==="wait_for_assistant"?{value:"wait_for_assistant",label:"Wait for Assistant"}:{value:"interleave",label:"Interleave"},isMulti:!1,components:{Input:L},onChange:t=>{x.setState({paragenStreamType:t?.value??"none"})}})]}):null,s.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Show CoT in Paragen:"}),e.jsx(O,{options:[{label:"Allow",value:"allow"},{label:"Hide CoT for Alter Model",value:"hide_alter"},{label:"Hide",value:"hide"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:s.paragenCotSummaryDisplay==="allow"?{value:"allow",label:"Allow"}:s.paragenCotSummaryDisplay==="hide_alter"?{value:"hide_alter",label:"Hide CoT for Alter Model"}:{value:"hide",label:"Hide"},isMulti:!1,components:{Input:L},onChange:t=>{x.setState({paragenCotSummaryDisplay:t?.value??"allow"})}})]}):null,e.jsx(w,{id:"show-paragen-metadata",label:"Show Paragen Metadata",checked:s.showParagenMetadata,onChange:()=>{x.setState({showParagenMetadata:!s.showParagenMetadata})}}),e.jsx(Pe,{}),e.jsx(w,{id:"force-rate-limit",label:"Force Rate Limit",checked:s.forceRateLimit,onChange:()=>{x.setState({forceRateLimit:!s.forceRateLimit})}}),e.jsx(w,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:s.resetRateLimits,onChange:()=>{x.setState({resetRateLimits:!s.resetRateLimits})}}),e.jsx(I,{label:"Enabling this will show debug conversation messages in the chat",children:e.jsx(w,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:s.showDebugConversationTurns,onChange:()=>{x.setState({showDebugConversationTurns:!s.showDebugConversationTurns})}})})]})}const X=M.div`px-3 pb-2 text-xs font-semibold uppercase border-b-2 ${({$isSelected:s})=>s?"border-black dark:border-white":"border-transparent"}`;function os({clientThreadId:s,isOpen:n,slideOver:o,onClose:t}){const r=ee(),l=se(),[i,a]=d.useState("conversation");return l?.includes("debug")?e.jsx(Ve,{icon:oe,title:r.formatMessage(E.debugTitle),isOpen:n,slideOver:o,onClose:t,children:e.jsxs(je,{orientation:"vertical",defaultValue:i,onValueChange:c=>a(c),children:[e.jsxs(Se,{className:"mb-4 flex items-center justify-center gap-2 px-2 py-1 text-xs",children:[e.jsx(J,{value:"conversation",children:e.jsx(X,{$isSelected:i==="conversation",children:"Conversation"})}),e.jsx(J,{value:"system-message-editor",children:e.jsx(X,{$isSelected:i==="system-message-editor",children:"System Message"})}),!1]}),e.jsx(K,{value:"conversation",children:e.jsx(qe,{clientThreadId:s})}),e.jsx(K,{value:"system-message-editor",children:e.jsx(Oe,{clientThreadId:s})}),!1]})}):null}function qe({clientThreadId:s}){const n=ee(),o=p.getThreadCurrentLeafId(s),t=ye(s,o),[r,l]=d.useState(),i=se(),a=d.useCallback(()=>{l(void 0)},[]),c=Y(),u=d.useCallback(S=>{const v=p.getTree(s);we(v.getTextFromThread(o),c,S)},[o,s,c]),[j,h]=d.useState(!1),[b,m]=d.useState(void 0);return i?.includes("debug")?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:e.jsx(He,{clientThreadId:s,messages:t.map(S=>S.message)})}),!1,e.jsxs("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[e.jsx("div",{children:e.jsx(ke,{onCopy:u,buttonText:n.formatMessage(E.copyText)})}),e.jsxs("button",{className:"flex items-center justify-center gap-2",onClick:()=>h(!0),children:[e.jsx(Te,{className:"icon-sm rotate-90"}),"View tree"]})]}),e.jsx(ze,{}),e.jsx(Be,{nodes:t,setDebugNodeIndex:l,setFrameSrc:m,conversationId:p.getServerThreadId(s)}),r!==void 0&&e.jsx(P,{type:"success",size:"fullscreen",noPadding:!0,isOpen:!0,onClose:a,children:e.jsx($e,{threadId:t[r].message.metadata?.__internal?.sonic_thread_id,threadUserId:t[r].message.metadata?.__internal?.sonic_user_id,onClose:a,message:t[r].message})},`DebugMessageModal-${r}`),j&&e.jsx(P,{isOpen:!0,onClose:()=>h(!1),type:"success",size:"custom",noPadding:!0,children:e.jsx(Ee,{clientThreadId:s})},"DebugTreeViewer"),b&&e.jsx(P,{size:"normal",isOpen:!0,onClose:()=>m(void 0),type:"success",children:e.jsx("img",{src:b,alt:"debug image"})},"DebugFrameViewer")]}):null}function Ge(s,n){const o=JSON.stringify({conversation_id:p.getServerThreadId(s),messages:n},null,2),t=new Blob([o],{type:"application/json"}),r=URL.createObjectURL(t),l=document.createElement("a");l.href=r,l.download=`messages-${p.getServerThreadId(s)}.json`,l.click(),URL.revokeObjectURL(r)}function He({clientThreadId:s,messages:n}){const o=d.useCallback(()=>{Ge(s,n)},[s,n]);return e.jsx(k,{onClick:o,color:"primary",size:"small",icon:Ae,children:e.jsx(ue,{...E.downloadRawConversation})})}function Je(s){const[n,o]=d.useState([]),t=te(),{frameAssets:r}=s;return d.useEffect(()=>{async function l(){const i=r.map(async({image_asset_pointer:a,timestamp:c})=>{const u={asset:a};return{src:(await ne.fetch(t,u)).url,timestamp:c}});return Promise.all(i)}r.length>0&&l().then(o)},[r,t]),e.jsx(Ue,{frames:n,setFrameSrc:s.setFrameSrc})}function _(s){const n=_.useAssetPointerSource(s.assetPointer,s.conversationId),o=_.useAudioSource(s.audio),t=n??o,l=ge("3230069703").config.value.expirySeconds,[i,a]=d.useState(Date.now()),c=d.useRef(null);return d.useEffect(()=>{const u=setInterval(()=>{c.current&&c.current.currentTime>0&&!c.current.paused&&!c.current.ended&&c.current.readyState>2||a(Date.now())},l*1e3);return()=>clearInterval(u)},[l]),t?e.jsx("audio",{ref:c,controls:!0,src:t,className:"w-full"},i):null}_.useAssetPointerSource=(s,n)=>{const[o,t]=d.useState(null),r=te();return d.useEffect(()=>{s&&ne.fetch(r,{asset:s,conversationId:n}).then(l=>{t(l.url)})},[r,s,n]),o};_.useAudioSource=s=>{const[n,o]=d.useState(null);return d.useEffect(()=>{if(s){const t=atob(s.payload),r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);const l=new Blob([r],{type:`audio/${s.format}`}),i=URL.createObjectURL(l);return o(i),()=>{URL.revokeObjectURL(i)}}},[s]),n};const Ke=M.div`overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary`,We=M.pre`whitespace-pre-wrap text-sm`,Xe=M.div`px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200`,E=me({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}});export{qe as DebugConversation,os as DebugConversationSidebar,rs as OpenDebugSidebarButton,Ve as default};
//# sourceMappingURL=k6qfygi98wv4fsgr.js.map
