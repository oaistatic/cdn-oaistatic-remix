const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jyrnreeksbpl25a8.js","assets/du9ygo55hccsm0ec.js","assets/ibjw18ivx5tw615x.js","assets/root-d4voymz4.css","assets/jajzrlrmjppvuz8o.js","assets/hc0go6t8u8it292j.js","assets/conversation-small-cll5buey.css","assets/c976eesfueui6hhk.js","assets/23yqn56dfa53achp.js","assets/clenuo0uazdg9a2v.js","assets/g917upaeimfgkdh1.js","assets/2ab64b95mqw4xqtw.js","assets/nda14nl95arzddjs.js","assets/d17zfc73wiaepo2q.js","assets/bhg9jpmdcp3v4wvw.js","assets/f9fy58oabfudcwqa.js","assets/pqsprbuszhz35qrt.js"])))=>i.map(i=>d[i]);
import{y as e,r as d,W as _,M as B,a9 as X,an as K,av as I,R as F,O as oe,aw as le,Z as Q,$ as Y,X as Z,bw as ee,bq as P,a1 as ie,a6 as ce,eX as b,u as te,Y as de}from"./du9ygo55hccsm0ec.js";import{z as ue,T as h,A as me}from"./m7ykldedawewofy8.js";import"./ndpe1ojbx7c3v18s.js";import"./huj2tv4ji3im8uo0.js";import{fd as z,fe as q,G as p,cG as ge,h as xe,d as w,b as se,A as pe,D as fe,E as G,F as H,H as be,dg as R,ff as he,fg as ve,fh as ae}from"./hc0go6t8u8it292j.js";import{U as je}from"./156t2vs0ziqy5ta8.js";import{S as L,c as ye}from"./hgeajy87cwg3r1m6.js";import{C as Se}from"./kb7xugd5kw771ze8.js";import{C as we}from"./jajzrlrmjppvuz8o.js";import{ai as Ce,ap as ne,b6 as _e,o as Ne}from"./ibjw18ivx5tw615x.js";import{d as Me}from"./koyiigs1bh3cqmq2.js";import"./kl23pvq05rxrgvth.js";import"./kwyhm54wtm4zbkpo.js";import"./j2y7wsnqu61ya7iz.js";import"./e9lafxuzyeh4418f.js";import"./if45wgcplc4vea0y.js";import"./mgmk61xedx50tz2y.js";import"./4kejfy36ysbrmoi8.js";import"./i241ashuzoz67842.js";import"./f0zfhvj0myt4b1v1.js";import"./d0s4um1rh2f7pgrr.js";import"./23yqn56dfa53achp.js";import"./ls8z0fgz00gw1alh.js";import"./g917upaeimfgkdh1.js";import"./gymcumd7hmh6bi1s.js";import"./gj6xeouxppgt6npy.js";import"./mxtabnjz46g5s0cv.js";import"./n76fh2yxfraxsw30.js";import"./focy1c95cgqmv4o7.js";import"./igmk8bhhl98b6n5v.js";import"./itr9kuli5zrjmpey.js";import"./g3qlyev81q1nuv69.js";import"./d28r08o6ubsxmagb.js";import"./kvl6v3wn9q5374rs.js";import"./buez05obmqmatsz0.js";import"./j5wjh6rpg8sgmhl2.js";import"./mahlkymmmcl5d7ax.js";import"./o9yaharrxcbvpcdi.js";function ke({children:t,sidebarOpen:n,onClose:o}){return e.jsx(z.Root,{show:n,as:d.Fragment,children:e.jsxs(q,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(z.Child,{as:d.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(q.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:e.jsx("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}function De({clientThreadId:t}){const{rebaseSystemMessageContent:n,showDebugConversationTurns:o}=p(),[a,r]=d.useState(()=>n?JSON.stringify(n,null,2):void 0),[l,c]=d.useState(!!n),s=ue(t,h.getThreadCurrentLeafId(t)),u=ge(s,m=>m.content.content_type===B.SystemContent)?.content??null,j=()=>{r(u?JSON.stringify(u,null,2):"")},x=X(),f=d.useMemo(()=>xe(m=>{try{m?p.setState({rebaseSystemMessageContent:{...JSON.parse(m),content_type:B.SystemContent}}):p.setState({rebaseSystemMessageContent:null}),x.closeAll()}catch{x.danger("The System Message is not valid JSON")}},500),[x]);return d.useEffect(()=>{l?f(a):(f.cancel(),p.setState({rebaseSystemMessageContent:null}))},[f,l,a]),e.jsxs("div",{className:"flex flex-col gap-3 px-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(K,{label:"Enable to apply this system message to the current conversation.",children:e.jsx(w,{id:"enabled",label:"Enabled",checked:l,onChange:m=>c(m.currentTarget.checked)})}),e.jsx(w,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:o,onChange:()=>{p.setState({showDebugConversationTurns:!o})}})]}),e.jsx(I,{disabled:!u,className:"mt-2",onClick:j,size:"small",children:"Load active system message"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm",children:"System Message"}),e.jsx(Te,{disabled:!l,placeholder:u?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:a,onChange:m=>r(m.target.value)})]})]})}const Te=_.textarea`w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary`;function Ae({clientThreadId:t}){const[n,o]=d.useState([]),a=h.getThreadCurrentLeafId(t),r=h.getThreadConversationTurns(t,a),l=s=>{const u=h.getTree(t).getLeafFromNode(s);h.setThreadCurrentLeafId(t,u.id)},c=s=>{o(i=>[...i,a]),l(s)};return e.jsxs(e.Fragment,{children:[n.length>0&&e.jsxs(I,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{const s=n[n.length-1];l(s),o(i=>i.slice(0,-1))},children:[e.jsx(Ce,{className:"icon-sm"}),"Go back to ",n[n.length-1]]}),e.jsx("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:r.map((s,i)=>{const u=s.messages[0].nodeId,j=h.getTree(t),x=i!==0?j.getParent(u):null,f=x!=null?x.children.findIndex(g=>u===g):0,m=x!=null?x.children:[],S=m.slice(0,f),y=m.slice(f+1);let v;switch(s.role){case F.User:v="bg-blue-500";break;case F.Assistant:v="bg-gray-600";break;default:v="bg-gray-400";break}return e.jsxs("div",{className:oe("relative p-2",v),children:[e.jsx("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:S.map(g=>e.jsx(J,{variantId:g,onChangeItemInView:c},g))}),e.jsx("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:y.map(g=>e.jsx(J,{variantId:g,onChangeItemInView:c},g))}),e.jsx("div",{className:"flex flex-col gap-2",children:s.messages.map(g=>e.jsxs("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[e.jsx("div",{className:"font-semibold",children:g.nodeId}),e.jsx("div",{className:"italic text-token-text-tertiary",children:g.message.author.role}),e.jsx("div",{children:se(g.message)})]},g.nodeId))})]},i)})})]})}function J({variantId:t,onChangeItemInView:n}){return e.jsx("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{n(t)},children:e.jsx("span",{className:"bg-gray-200 p-2",children:t})},t)}const Pe=Q(()=>Y(()=>import("./jyrnreeksbpl25a8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(t=>t.DebugModalContents),{ssr:!1}),Re=Q(()=>Y(()=>import("./pqsprbuszhz35qrt.js"),__vite__mapDeps([16,1,2,3,5,6])).then(t=>t.FramesViewer),{ssr:!1});function kt(){return e.jsx("button",{"data-testid":"open-debug-sidebar-button",className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",onClick:()=>{je.setActiveSidebar("debug")},children:e.jsx(ne,{className:"icon-xs"})})}function Le({children:t,title:n,icon:o,isOpen:a,slideOver:r,onClose:l}){const c=e.jsxs(Ve,{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[e.jsx(o,{className:"icon-sm"}),n]}),e.jsx("div",{className:"mr-2 mt-2 flex h-7 items-center",children:e.jsx(le,{onClick:l})})]}),t]});return r?e.jsx(ke,{sidebarOpen:a,onClose:l,children:c}):a?c:null}function Fe({nodes:t,setDebugNodeIndex:n,setFrameSrc:o,conversationId:a}){const r=t.map((l,c)=>{const s=l.message,{role:i,name:u}=s.author,j=u&&u!==i,x=b(s,"metadata.__internal.model_id"),f=b(s,"metadata.__internal.agent.settings.completion_api.engine"),m=b(s,"metadata.__internal.model_experiment_name"),S=b(s,"metadata.__internal.model_experiment_treatment"),y=b(s,"metadata.__internal.normalized_model_side"),v=b(s,"metadata.__internal.alternative_model_selection_rule"),g=b(s,"metadata.__internal.model_experiment_group_name"),M=b(s,"metadata.__internal.model_experiment_group_params"),k=b(s,"metadata.__internal.model_experiment_override"),O=b(s,"metadata.__internal.model_experiment_eval_seq"),D=b(s,"metadata.__internal.raw_tokens")?.length,$=b(s,"metadata.request_id"),U=R.getAudio(s),V=R.getAudioAssetPointers(s),re=R.getFrameAssetPointers(s);return e.jsxs(ze,{role:"button",onClick:()=>n(c),children:[e.jsxs("div",{className:"break-words text-xs font-semibold uppercase text-token-text-tertiary",children:[i,j&&` (${u})`,s.recipient&&" -> ",he(s)]}),(s.author.role!==F.System||$)&&e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["ID: ",s.id]}),l.id!==s.id&&e.jsxs("div",{children:["UI Node ID: ",l.id]}),e.jsxs("div",{children:["Req ID: ",$||"Reload page to see ID"]})]}),e.jsx("div",{className:"line-clamp-6",children:se(s)}),(D||x||f||m||S||y||v||g||M||k||O)&&e.jsxs("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[D!==void 0&&e.jsxs("div",{children:[e.jsx("b",{children:"Tokens Count:"})," ",D]}),x&&e.jsxs("div",{children:[e.jsx("b",{children:"Model ID:"})," ",x]}),f&&e.jsxs("div",{children:[e.jsx("b",{children:"Engine:"})," ",f]}),m&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment:"})," ",m]}),S&&e.jsxs("div",{children:[e.jsx("b",{children:"Treatment:"})," ",S]}),y&&e.jsxs("div",{children:[e.jsx("b",{children:"Normalized Side:"})," ",y]}),v&&e.jsxs("div",{children:[e.jsx("b",{children:"Alternative Model Rule:"})," ",v]}),g&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Name:"})," ",g]}),M&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Params:"}),e.jsx("div",{children:JSON.stringify(M,null,2)})]}),k&&e.jsxs("div",{children:[e.jsx("b",{children:"Above Params are Overridden By:"})," ",k]}),O&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),U.length||V.length?e.jsxs("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[e.jsx(Ue,{frameAssets:re,setFrameSrc:o},c),U.map((T,A)=>e.jsx(C,{audio:T,conversationId:a},A)),V.map((T,A)=>e.jsx(C,{assetPointer:T,conversationId:a},A))]}):null]},s.id)});return e.jsx(Be,{children:r})}const N=t=>e.jsx(ye.Input,{...t,inputClassName:"focus:ring-0"});function Ie(){const t=p(),o=Me().map(a=>({label:a.name,options:a.options.map(r=>({label:`${r.value} (${r.name})`,value:r.value}))}));return e.jsxs("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold",children:[e.jsx(w,{id:"force-paragen",label:"Force Parallel Gen",checked:t.forceParagen,onChange:()=>{p.setState({forceParagen:!t.forceParagen})}}),e.jsx(Se,{options:o,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!t.forceParagen,isLoading:o.length===0,value:t.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:N},onChange:a=>{p.setState({forceParagenModel:a??ve})}}),t.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Paragen Stream Type:"}),e.jsx(L,{options:[{label:"Do Not Override",value:"none"},{label:"Force Classic Stream Behavior",value:"default"},{label:"Wait for Assistant",value:"wait_for_assistant"},{label:"Interleave",value:"interleave"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:t.paragenStreamType==="none"?{value:"none",label:"Do Not Override"}:t.paragenStreamType==="default"?{value:"default",label:"Force Classic Stream Behavior"}:t.paragenStreamType==="wait_for_assistant"?{value:"wait_for_assistant",label:"Wait for Assistant"}:{value:"interleave",label:"Interleave"},isMulti:!1,components:{Input:N},onChange:a=>{p.setState({paragenStreamType:a?.value??"none"})}})]}):null,t.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Show CoT in Paragen:"}),e.jsx(L,{options:[{label:"Allow",value:"allow"},{label:"Hide CoT for Alter Model",value:"hide_alter"},{label:"Hide",value:"hide"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:t.paragenCotSummaryDisplay==="allow"?{value:"allow",label:"Allow"}:t.paragenCotSummaryDisplay==="hide_alter"?{value:"hide_alter",label:"Hide CoT for Alter Model"}:{value:"hide",label:"Hide"},isMulti:!1,components:{Input:N},onChange:a=>{p.setState({paragenCotSummaryDisplay:a?.value??"allow"})}})]}):null,e.jsx(w,{id:"show-paragen-metadata",label:"Show Paragen Metadata",checked:t.showParagenMetadata,onChange:()=>{p.setState({showParagenMetadata:!t.showParagenMetadata})}}),e.jsx("div",{children:"Force Use Search:"}),e.jsx(L,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"shadow-none dark:text-gray-800",value:t.forceUseSearch==null?{value:"default",label:"Default"}:t.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:N},onChange:a=>{p.setState({forceUseSearch:(a?.value??"default")==="default"?null:a?.value==="true"})}}),e.jsx(w,{id:"force-rate-limit",label:"Force Rate Limit",checked:t.forceRateLimit,onChange:()=>{p.setState({forceRateLimit:!t.forceRateLimit})}}),e.jsx(w,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:t.resetRateLimits,onChange:()=>{p.setState({resetRateLimits:!t.resetRateLimits})}}),e.jsx(K,{label:"Enabling this will show debug conversation messages in the chat",children:e.jsx(w,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:t.showDebugConversationTurns,onChange:()=>{p.setState({showDebugConversationTurns:!t.showDebugConversationTurns})}})})]})}const W=_.div`px-3 pb-2 text-xs font-semibold uppercase border-b-2 ${({$isSelected:t})=>t?"border-black dark:border-white":"border-transparent"}`;function Dt({clientThreadId:t,isOpen:n,slideOver:o,onClose:a}){const r=Z(),l=ee(),[c,s]=d.useState("conversation");return l?.includes("debug")?e.jsx(Le,{icon:ne,title:r.formatMessage(E.debugTitle),isOpen:n,slideOver:o,onClose:a,children:e.jsxs(pe,{orientation:"vertical",defaultValue:c,onValueChange:i=>s(i),children:[e.jsxs(fe,{className:"mb-4 flex items-center justify-center gap-2 px-2 py-1 text-xs",children:[e.jsx(G,{value:"conversation",children:e.jsx(W,{$isSelected:c==="conversation",children:"Conversation"})}),e.jsx(G,{value:"system-message-editor",children:e.jsx(W,{$isSelected:c==="system-message-editor",children:"System Message"})}),!1]}),e.jsx(H,{value:"conversation",children:e.jsx(Ee,{clientThreadId:t})}),e.jsx(H,{value:"system-message-editor",children:e.jsx(De,{clientThreadId:t})}),!1]})}):null}function Ee({clientThreadId:t}){const n=Z(),o=h.getThreadCurrentLeafId(t),a=me(t,o),[r,l]=d.useState(),c=ee(),s=d.useCallback(()=>{l(void 0)},[]),i=X(),u=d.useCallback(y=>{const v=h.getTree(t);be(v.getTextFromThread(o),i,y)},[o,t,i]),[j,x]=d.useState(!1),[f,m]=d.useState(void 0);return c?.includes("debug")?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:e.jsx($e,{clientThreadId:t,messages:a.map(y=>y.message)})}),!1,e.jsxs("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[e.jsx("div",{children:e.jsx(we,{onCopy:u,buttonText:n.formatMessage(E.copyText)})}),e.jsxs("button",{className:"flex items-center justify-center gap-2",onClick:()=>x(!0),children:[e.jsx(_e,{className:"icon-sm rotate-90"}),"View tree"]})]}),e.jsx(Ie,{}),e.jsx(Fe,{nodes:a,setDebugNodeIndex:l,setFrameSrc:m,conversationId:h.getServerThreadId(t)}),r!==void 0&&e.jsx(P,{type:"success",size:"fullscreen",noPadding:!0,isOpen:!0,onClose:s,children:e.jsx(Pe,{threadId:a[r].message.metadata?.__internal?.sonic_thread_id,threadUserId:a[r].message.metadata?.__internal?.sonic_user_id,onClose:s,message:a[r].message})},`DebugMessageModal-${r}`),j&&e.jsx(P,{isOpen:!0,onClose:()=>x(!1),type:"success",size:"custom",noPadding:!0,children:e.jsx(Ae,{clientThreadId:t})},"DebugTreeViewer"),f&&e.jsx(P,{size:"normal",isOpen:!0,onClose:()=>m(void 0),type:"success",children:e.jsx("img",{src:f,alt:"debug image"})},"DebugFrameViewer")]}):null}function Oe(t,n){const o=JSON.stringify({conversation_id:h.getServerThreadId(t),messages:n},null,2),a=new Blob([o],{type:"application/json"}),r=URL.createObjectURL(a),l=document.createElement("a");l.href=r,l.download=`messages-${h.getServerThreadId(t)}.json`,l.click(),URL.revokeObjectURL(r)}function $e({clientThreadId:t,messages:n}){const o=d.useCallback(()=>{Oe(t,n)},[t,n]);return e.jsx(I,{onClick:o,color:"primary",size:"small",icon:Ne,children:e.jsx(ie,{...E.downloadRawConversation})})}function Ue(t){const[n,o]=d.useState([]),a=te(),{frameAssets:r}=t;return d.useEffect(()=>{async function l(){const c=r.map(async({image_asset_pointer:s,timestamp:i})=>{const u={asset:s};return{src:(await ae.fetch(a,u)).url,timestamp:i}});return Promise.all(c)}r.length>0&&l().then(o)},[r,a]),e.jsx(Re,{frames:n,setFrameSrc:t.setFrameSrc})}function C(t){const n=C.useAssetPointerSource(t.assetPointer,t.conversationId),o=C.useAudioSource(t.audio),a=n??o,l=de("3230069703").config.value.expirySeconds,[c,s]=d.useState(Date.now()),i=d.useRef(null);return d.useEffect(()=>{const u=setInterval(()=>{i.current&&i.current.currentTime>0&&!i.current.paused&&!i.current.ended&&i.current.readyState>2||s(Date.now())},l*1e3);return()=>clearInterval(u)},[l]),a?e.jsx("audio",{ref:i,controls:!0,src:a,className:"w-full"},c):null}C.useAssetPointerSource=(t,n)=>{const[o,a]=d.useState(null),r=te();return d.useEffect(()=>{t&&ae.fetch(r,{asset:t,conversationId:n}).then(l=>{a(l.url)})},[r,t,n]),o};C.useAudioSource=t=>{const[n,o]=d.useState(null);return d.useEffect(()=>{if(t){const a=atob(t.payload),r=new Uint8Array(a.length);for(let s=0;s<a.length;s++)r[s]=a.charCodeAt(s);const l=new Blob([r],{type:`audio/${t.format}`}),c=URL.createObjectURL(l);return o(c),()=>{URL.revokeObjectURL(c)}}},[t]),n};const Ve=_.div`overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary`,Be=_.pre`whitespace-pre-wrap text-sm`,ze=_.div`px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200`,E=ce({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}});export{Ee as DebugConversation,Dt as DebugConversationSidebar,kt as OpenDebugSidebarButton,Le as default};
//# sourceMappingURL=g25rdt29bll4sk12.js.map
