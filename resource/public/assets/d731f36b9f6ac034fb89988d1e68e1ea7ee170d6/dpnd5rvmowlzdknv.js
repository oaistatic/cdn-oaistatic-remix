const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/g5tl3tz7va9pytwi.js","assets/i7de8yvdg4jlu6h0.js","assets/lklglvrzltpv3f05.js","assets/root-f8d4ml68.css","assets/c2l8elqoquxr1hzw.js","assets/mc2tj3xhtcshtn61.js","assets/conversation-small-bez2bigx.css","assets/nyuchqurqflwkr59.js","assets/iyxdgxkbt16roiwe.js","assets/demuoz4d7nhb3j9v.js","assets/hcil7bl6nyyvu0ms.js","assets/c4bxzbp1808foto4.js","assets/dew4u2w95bkscujr.js","assets/myjpkx92ev0oo69m.js","assets/bnuj8za8gkvzrfeq.js","assets/f3wqh5wbtzeabanv.js","assets/n4m1jl0hmter93p7.js","assets/mrdk49jeezw0xsac.js","assets/heefrlxlra66lmjs.js"])))=>i.map(i=>d[i]);
import{az as R,gq as oe,v as w,s as D,M as K,F as le,bg as ie,br as U,aw as ce,j as de,bE as Se,aV as ue,aW as me,aX as ge,bO as W,f as Ce,gr as S,bh as F,gs as we,J as _e,gt as pe}from"./i7de8yvdg4jlu6h0.js";import{j as e,r as c,c as xe,M as Ne,a as fe}from"./lklglvrzltpv3f05.js";import{g1 as h,hG as X,hH as Y,bY as ke,k as Me,I as M,hI as De,hB as Oe,U as Pe,dW as Le,dX as Ae,dY as Q,d_ as Z,d$ as Te,gX as Re,dZ as Ie,hJ as Fe,hK as Ve,hL as $e}from"./mc2tj3xhtcshtn61.js";import{S as he}from"./f3wqh5wbtzeabanv.js";import{S as $,c as be,_ as Ee,a as ee,b as J,v as Ue,d as te,g as Be,e as qe,u as We,f as Je}from"./mk3jxh4of9lq3esr.js";import{A as ve}from"./nudgab5t60clv13n.js";import{_ as ze}from"./fzrn137102spawew.js";import{C as Ge}from"./c2l8elqoquxr1hzw.js";import"./e9lafxuzyeh4418f.js";import"./j9pn3dpqp3dnyeg5.js";function He(){const t=h();return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:["Force Use Search",!1]}),e.jsx($,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"mt-1 shadow-none dark:text-gray-800",value:t.forceUseSearch==null?{value:"default",label:"Default"}:t.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:Ke},onChange:a=>{h.setState({forceUseSearch:(a?.value??"default")==="default"?null:a?.value==="true"})}})]})})}const Ke=t=>e.jsx(be.Input,{...t,inputClassName:"focus:ring-0"});var Xe=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],se=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,l=String(a).toLowerCase(),s=String(r.getOptionValue(o)).toLowerCase(),i=String(r.getOptionLabel(o)).toLowerCase();return s===l||i===l},z={formatCreateLabel:function(a){return'Create "'.concat(a,'"')},isValidNewOption:function(a,o,r,l){return!(!a||o.some(function(s){return se(a,s,l)})||r.some(function(s){return se(a,s,l)}))},getNewOptionData:function(a,o){return{label:o,value:a,__isNew__:!0}}};function Ye(t){var a=t.allowCreateWhileLoading,o=a===void 0?!1:a,r=t.createOptionPosition,l=r===void 0?"last":r,s=t.formatCreateLabel,i=s===void 0?z.formatCreateLabel:s,n=t.isValidNewOption,d=n===void 0?z.isValidNewOption:n,m=t.getNewOptionData,b=m===void 0?z.getNewOptionData:m,p=t.onCreateOption,f=t.options,u=f===void 0?[]:f,j=t.onChange,g=Ee(t,Xe),v=g.getOptionValue,x=v===void 0?Be:v,O=g.getOptionLabel,L=O===void 0?qe:O,y=g.inputValue,A=g.isLoading,P=g.isMulti,N=g.value,T=g.name,_=c.useMemo(function(){return d(y,ee(N),u,{getOptionValue:x,getOptionLabel:L})?b(y,i(y)):void 0},[i,b,L,x,y,d,u,N]),I=c.useMemo(function(){return(o||!A)&&_?l==="first"?[_].concat(J(u)):[].concat(J(u),[_]):u},[o,l,A,_,u]),k=c.useCallback(function(C,B){if(B.action!=="select-option")return j(C,B);var H=Array.isArray(C)?C:[C];if(H[H.length-1]===_){if(p)p(y);else{var q=b(y,y),ye={action:"create-option",name:T,option:q};j(Ue(P,[].concat(J(ee(N)),[q]),q),ye)}return}j(C,B)},[b,y,P,T,_,p,j,N]);return te(te({},g),{},{options:I,onChange:k})}var Qe=c.forwardRef(function(t,a){var o=We(t),r=Ye(o);return c.createElement(Je,ze({ref:a},r))}),Ze=Qe;function et({children:t,sidebarOpen:a,onClose:o}){return e.jsx(X.Root,{show:a,as:c.Fragment,children:e.jsxs(Y,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(X.Child,{as:c.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(Y.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:e.jsx("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}function tt({clientThreadId:t}){const{rebaseSystemMessageContent:a,showDebugConversationTurns:o}=h(),[r,l]=c.useState(()=>a?JSON.stringify(a,null,2):void 0),[s,i]=c.useState(!!a),n=oe(t,w.getThreadCurrentLeafId(t)).filter(u=>u.message.author.role!==D.Root).map(u=>u.message),m=ke(n,u=>u.content.content_type===K.SystemContent)?.content??null,b=()=>{l(m?JSON.stringify(m,null,2):"")},p=le(),f=c.useMemo(()=>Me(u=>{try{u?h.setState({rebaseSystemMessageContent:{...JSON.parse(u),content_type:K.SystemContent}}):h.setState({rebaseSystemMessageContent:null}),p.closeAll()}catch{p.danger("The System Message is not valid JSON")}},500),[p]);return c.useEffect(()=>{s?f(r):(f.cancel(),h.setState({rebaseSystemMessageContent:null}))},[f,s,r]),e.jsxs("div",{className:"flex flex-col gap-3 px-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(ie,{label:"Enable to apply this system message to the current conversation.",children:e.jsx(M,{id:"enabled",label:"Enabled",checked:s,onChange:u=>i(u.currentTarget.checked)})}),e.jsx(M,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:o,onChange:()=>{h.setState({showDebugConversationTurns:!o})}})]}),e.jsx(U,{disabled:!m,className:"mt-2",onClick:b,size:"small",children:"Load active system message"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm",children:"System Message"}),e.jsx(st,{disabled:!s,placeholder:m?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:r,onChange:u=>l(u.target.value)})]})]})}const st=R.textarea`w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary`;function at({clientThreadId:t}){const[a,o]=c.useState([]),r=w.getThreadCurrentLeafId(t),l=w.getThreadConversationTurns(t,r),s=n=>{const m=w.getTree(t).getLeafFromNode(n);w.setThreadCurrentLeafId(t,m.id)},i=n=>{o(d=>[...d,r]),s(n)};return e.jsxs(e.Fragment,{children:[a.length>0&&e.jsxs(U,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{const n=a[a.length-1];s(n),o(d=>d.slice(0,-1))},children:[e.jsx(De,{className:"icon-sm"}),"Go back to ",a[a.length-1]]}),e.jsx("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:l.map((n,d)=>{const m=n.messages[0].nodeId,b=w.getTree(t),p=d!==0?b.getParent(m):null,f=p!=null?p.children.findIndex(x=>m===x):0,u=p!=null?p.children:[],j=u.slice(0,f),g=u.slice(f+1);let v;switch(n.role){case D.User:v="bg-blue-500";break;case D.Assistant:v="bg-gray-600";break;default:v="bg-gray-400";break}return e.jsxs("div",{className:ce("relative p-2",v),children:[e.jsx("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:j.map(x=>e.jsx(ae,{variantId:x,onChangeItemInView:i},x))}),e.jsx("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:g.map(x=>e.jsx(ae,{variantId:x,onChangeItemInView:i},x))}),e.jsx("div",{className:"flex flex-col gap-2",children:n.messages.map(x=>e.jsxs("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[e.jsx("div",{className:"font-semibold",children:x.nodeId}),e.jsx("div",{className:"italic text-token-text-tertiary",children:x.message.author.role}),e.jsx("div",{children:de(x.message)})]},x.nodeId))})]},d)})})]})}function ae({variantId:t,onChangeItemInView:a}){return e.jsx("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{a(t)},children:e.jsx("span",{className:"bg-gray-200 p-2",children:t})},t)}const nt=ue(()=>me(()=>import("./g5tl3tz7va9pytwi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(t=>t.DebugModalContents)),rt=ue(()=>me(()=>import("./mrdk49jeezw0xsac.js"),__vite__mapDeps([17,2,1,3,18,5,6])).then(t=>t.FramesViewer)),ne=Object.values(Oe);function kt(){return e.jsx("button",{"data-testid":"open-debug-sidebar-button",className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",onClick:()=>{Pe.setActiveSidebar("debug")},children:e.jsx(he,{className:"icon-xs"})})}function ot({children:t,title:a,icon:o,isOpen:r,slideOver:l,onClose:s}){const i=e.jsxs(pt,{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[e.jsx(o,{className:"icon-sm"}),a]}),e.jsx("div",{className:"mr-2 mt-2 flex h-7 items-center",children:e.jsx(Se,{onClick:s})})]}),t]});return l?e.jsx(et,{sidebarOpen:r,onClose:s,children:i}):r?i:null}function lt({nodes:t,setDebugNodeIndex:a,setFrameSrc:o,conversationId:r}){const l=t.map((s,i)=>{const n=s.message,{role:d,name:m}=n.author,b=m&&m!==d,p=S(n,"metadata.__internal.model_id"),f=S(n,"metadata.__internal.agent.settings.completion_api.engine"),u=S(n,"metadata.__internal.model_experiment_name"),j=S(n,"metadata.__internal.model_experiment_treatment"),g=S(n,"metadata.__internal.alternative_model_selection_rule"),v=S(n,"metadata.__internal.model_experiment_group_name"),x=S(n,"metadata.__internal.model_experiment_group_params"),O=S(n,"metadata.__internal.model_experiment_override"),L=S(n,"metadata.__internal.model_experiment_eval_seq"),y=S(n,"metadata.__internal.raw_tokens")?.length,A=S(n,"metadata.request_id"),P=S(n,"metadata.__internal.search_settings"),N=F.getAudio(n),T=F.getAudioAssetPointers(n),_=F.getFrameAssetPointers(n),I=F.getVideoContainerAssetPointers(n);return e.jsxs(ft,{role:"button",onClick:()=>a(i),children:[e.jsxs("div",{className:ce("flex items-center gap-1 break-words text-xs font-semibold uppercase",d===D.User?"text-token-text-primary":"text-token-text-tertiary"),children:[d===D.User&&e.jsx(Fe,{className:"icon-sm"}),d,b&&` (${m})`,n.recipient&&" -> ",we(n)]}),(n.author.role!==D.System||A)&&e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["ID: ",n.id]}),s.id!==n.id&&e.jsxs("div",{children:["UI Node ID: ",s.id]}),e.jsxs("div",{children:["Req ID: ",A||"Reload page to see ID"]})]}),e.jsx("div",{className:"line-clamp-6",children:de(n)}),(y||p||f||u||j||g||v||x||O||L||P)&&e.jsxs("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[y!==void 0&&e.jsxs("div",{children:[e.jsx("b",{children:"Tokens Count:"})," ",y]}),p&&e.jsxs("div",{children:[e.jsx("b",{children:"Model ID:"})," ",p]}),f&&e.jsxs("div",{children:[e.jsx("b",{children:"Engine:"})," ",f]}),u&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment:"})," ",u]}),j&&e.jsxs("div",{children:[e.jsx("b",{children:"Treatment:"})," ",j]}),g&&e.jsxs("div",{children:[e.jsx("b",{children:"Alternative Model Rule:"})," ",g]}),v&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Name:"})," ",v]}),x&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Params:"}),e.jsx("div",{children:JSON.stringify(x,null,2)})]}),O&&e.jsxs("div",{children:[e.jsx("b",{children:"Above Params are Overridden By:"})," ",O]}),L&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment Eval Seq:"})," click to see"]}),P&&e.jsxs("div",{children:[e.jsx("b",{children:"Search Settings:"}),e.jsx("div",{children:JSON.stringify(P,null,2)})]})]}),N.length||T.length||I.length?e.jsxs("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[e.jsx(mt,{frameAssets:_,setFrameSrc:o},i),N.map((k,C)=>e.jsx(E,{audio:k,conversationId:r},`audio-asset-${C}`)),T.map((k,C)=>e.jsx(E,{assetPointer:k,conversationId:r},`audio-${C}`)),I.map((k,C)=>e.jsx(gt,{assetPointer:k,conversationId:r},`video-asset-${C}`))]}):null]},n.id)});return e.jsx(xt,{children:l})}const V=t=>e.jsx(be.Input,{...t,inputClassName:"focus:ring-0"});function it(){const t=h(),o=Ve().map(s=>({label:s.name,options:s.options.map(i=>({label:`${i.value} (${i.name})`,value:i.value}))})),[r,l]=c.useState(ne[0]);return e.jsxs("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold",children:[e.jsx(M,{id:"force-paragen",label:"Force Parallel Gen",checked:t.forceParagen,onChange:()=>{h.setState({forceParagen:!t.forceParagen})}}),e.jsx(Ze,{options:o,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!t.forceParagen,isLoading:o.length===0,value:t.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:V},onChange:s=>{h.setState({forceParagenModel:s??$e})}}),t.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Paragen Stream Type:"}),e.jsx($,{options:[{label:"Do Not Override",value:"none"},{label:"Force Classic Stream Behavior",value:"default"},{label:"Wait for Assistant",value:"wait_for_assistant"},{label:"Interleave",value:"interleave"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:t.paragenStreamType==="none"?{value:"none",label:"Do Not Override"}:t.paragenStreamType==="default"?{value:"default",label:"Force Classic Stream Behavior"}:t.paragenStreamType==="wait_for_assistant"?{value:"wait_for_assistant",label:"Wait for Assistant"}:{value:"interleave",label:"Interleave"},isMulti:!1,components:{Input:V},onChange:s=>{h.setState({paragenStreamType:s?.value??"none"})}})]}):null,t.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Show CoT in Paragen:"}),e.jsx($,{options:[{label:"Allow",value:"allow"},{label:"Hide CoT for Alter Model",value:"hide_alter"},{label:"Hide",value:"hide"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:t.paragenCotSummaryDisplay==="allow"?{value:"allow",label:"Allow"}:t.paragenCotSummaryDisplay==="hide_alter"?{value:"hide_alter",label:"Hide CoT for Alter Model"}:{value:"hide",label:"Hide"},isMulti:!1,components:{Input:V},onChange:s=>{h.setState({paragenCotSummaryDisplay:s?.value??"allow"})}})]}):null,e.jsx(M,{id:"show-paragen-metadata",label:"Show Paragen Metadata",checked:t.showParagenMetadata,onChange:()=>{h.setState({showParagenMetadata:!t.showParagenMetadata})}}),e.jsx(He,{}),e.jsx(M,{id:"force-rate-limit",label:"Force Rate Limit",checked:t.forceRateLimit,onChange:()=>{h.setState({forceRateLimit:!t.forceRateLimit})}}),e.jsx(M,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:t.resetRateLimits,onChange:()=>{h.setState({resetRateLimits:!t.resetRateLimits})}}),e.jsx(ie,{label:"Enabling this will show debug conversation messages in the chat",children:e.jsx(M,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:t.showDebugConversationTurns,onChange:()=>{h.setState({showDebugConversationTurns:!t.showDebugConversationTurns})}})}),e.jsx("hr",{}),e.jsx("div",{children:"Reset announcement:"}),e.jsx($,{options:ne.map(s=>({label:s.replace("oai/apps/",""),value:s})),name:"reset-announcement",className:"break-all font-mono shadow-none dark:text-gray-800",value:{label:r,value:r},isMulti:!1,components:{Input:V},onChange:s=>{s?.value&&l(s?.value)}}),e.jsx(U,{onClick:()=>_e.resetAnnouncement(r),children:"Reset"})]})}const re=R.div`px-3 pb-2 text-xs font-semibold uppercase border-b-2 ${({$isSelected:t})=>t?"border-black dark:border-white":"border-transparent"}`;function Mt({clientThreadId:t,isOpen:a,slideOver:o,onClose:r}){const l=xe(),s=ge(),[i,n]=c.useState("conversation");return s?.includes("debug")?e.jsx(ot,{icon:he,title:l.formatMessage(G.debugTitle),isOpen:a,slideOver:o,onClose:r,children:e.jsxs(Le,{orientation:"vertical",defaultValue:i,onValueChange:d=>n(d),children:[e.jsxs(Ae,{className:"mb-4 flex items-center justify-center gap-2 px-2 py-1 text-xs",children:[e.jsx(Q,{value:"conversation",children:e.jsx(re,{$isSelected:i==="conversation",children:"Conversation"})}),e.jsx(Q,{value:"system-message-editor",children:e.jsx(re,{$isSelected:i==="system-message-editor",children:"System Message"})}),!1]}),e.jsx(Z,{value:"conversation",children:e.jsx(ct,{clientThreadId:t})}),e.jsx(Z,{value:"system-message-editor",children:e.jsx(tt,{clientThreadId:t})}),!1]})}):null}function ct({clientThreadId:t}){const a=xe(),o=w.getThreadCurrentLeafId(t),r=oe(t,o).filter(g=>g.message.author.role!==D.Root),[l,s]=c.useState(),i=ge(),n=c.useCallback(()=>{s(void 0)},[]),d=le(),m=c.useCallback(g=>{const v=w.getTree(t);Te(v.getTextFromThread(o),d,g)},[o,t,d]),[b,p]=c.useState(!1),[f,u]=c.useState(void 0);return i?.includes("debug")?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:e.jsx(ut,{clientThreadId:t,messages:r.map(g=>g.message)})}),!1,e.jsxs("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[e.jsx("div",{children:e.jsx(Ge,{onCopy:m,buttonText:a.formatMessage(G.copyText)})}),e.jsxs("button",{className:"flex items-center justify-center gap-2",onClick:()=>p(!0),children:[e.jsx(Re,{className:"icon-sm rotate-90"}),"View tree"]})]}),e.jsx(it,{}),e.jsx(lt,{nodes:r,setDebugNodeIndex:s,setFrameSrc:u,conversationId:w.getServerThreadId(t)}),l!==void 0&&e.jsx(W,{type:"success",size:"fullscreen",noPadding:!0,isOpen:!0,onClose:n,children:e.jsx(nt,{threadId:r[l].message.metadata?.__internal?.sonic_thread_id,threadUserId:r[l].message.metadata?.__internal?.sonic_user_id,onClose:n,message:r[l].message})},`DebugMessageModal-${l}`),b&&e.jsx(W,{isOpen:!0,onClose:()=>p(!1),type:"success",size:"custom",noPadding:!0,children:e.jsx(at,{clientThreadId:t})},"DebugTreeViewer"),f&&e.jsx(W,{size:"normal",isOpen:!0,onClose:()=>u(void 0),type:"success",children:e.jsx("img",{src:f,alt:"debug image"})},"DebugFrameViewer")]}):null}function dt(t,a){const o=JSON.stringify({conversation_id:w.getServerThreadId(t),messages:a},null,2),r=new Blob([o],{type:"application/json"}),l=URL.createObjectURL(r),s=document.createElement("a");s.href=l,s.download=`messages-${w.getServerThreadId(t)}.json`,s.click(),URL.revokeObjectURL(l)}function ut({clientThreadId:t,messages:a}){const o=c.useCallback(()=>{dt(t,a)},[t,a]);return e.jsx(U,{onClick:o,color:"primary",size:"small",icon:Ie,children:e.jsx(Ne,{...G.downloadRawConversation})})}function mt(t){const[a,o]=c.useState([]),r=fe(),{frameAssets:l}=t;return c.useEffect(()=>{async function s(){const i=l.map(async({image_asset_pointer:n,timestamp:d})=>{const m={asset:n};return{src:(await ve.fetch(r,m)).url,timestamp:d}});return Promise.all(i)}l.length>0&&s().then(o)},[l,r]),e.jsx(rt,{frames:a,setFrameSrc:t.setFrameSrc})}function E(t){const a=je(t.assetPointer,t.conversationId),o=E.useAudioSource(t.audio),r=a??o,s=pe("3230069703").config.value.expirySeconds,[i,n]=c.useState(Date.now()),d=c.useRef(null);return c.useEffect(()=>{const m=setInterval(()=>{d.current&&d.current.currentTime>0&&!d.current.paused&&!d.current.ended&&d.current.readyState>2||n(Date.now())},s*1e3);return()=>clearInterval(m)},[s]),r?e.jsx("audio",{ref:d,controls:!0,src:r,className:"w-full"},i):null}function je(t,a){const[o,r]=c.useState(null),l=fe();return c.useEffect(()=>{t&&ve.fetch(l,{asset:t,conversationId:a}).then(s=>{r(s.url)})},[l,t,a]),o}E.useAudioSource=t=>{const[a,o]=c.useState(null);return c.useEffect(()=>{if(t){const r=atob(t.payload),l=new Uint8Array(r.length);for(let n=0;n<r.length;n++)l[n]=r.charCodeAt(n);const s=new Blob([l],{type:`audio/${t.format}`}),i=URL.createObjectURL(s);return o(i),()=>{URL.revokeObjectURL(i)}}},[t]),a};function gt(t){const a=je(t.assetPointer,t.conversationId),r=pe("3230069703").config.value.expirySeconds,[l,s]=c.useState(Date.now()),i=c.useRef(null);return c.useEffect(()=>{const n=setInterval(()=>{i.current&&i.current.currentTime>0&&!i.current.paused&&!i.current.ended&&i.current.readyState>2||s(Date.now())},r*1e3);return()=>clearInterval(n)},[r]),a?e.jsx("video",{ref:i,controls:!0,src:a,className:"w-full"},l):null}const pt=R.div`overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary`,xt=R.pre`whitespace-pre-wrap text-sm`,ft=R.div`px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200`,G=Ce({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}});export{ct as DebugConversation,Mt as DebugConversationSidebar,kt as OpenDebugSidebarButton,ot as default};
//# sourceMappingURL=dpnd5rvmowlzdknv.js.map
