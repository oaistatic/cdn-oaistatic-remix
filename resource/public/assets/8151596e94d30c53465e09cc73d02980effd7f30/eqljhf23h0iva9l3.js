const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ix0ood7jcpgrguki.js","assets/g92hdia1euilhv3m.js","assets/j9bb93dkfix5hp9e.js","assets/root-f2s4xiqy.css","assets/j6aqjhsvoij8wq3g.js","assets/l912w0bwi7cbhgoi.js","assets/conversation-small-lkohtmkm.css","assets/o0dbmo0i3zjoxdo0.js","assets/h8ux0o98lkz0sd04.js","assets/c4bxzbp1808foto4.js","assets/itnhsxnrwd7fay2n.js","assets/l73nno6msmw9eeuc.js","assets/nhw3a4u46ui66u3b.js","assets/edc9p6x8gdvacvy4.js","assets/mxmsz2ju7vhtfmrl.js","assets/hjxxdjl2kwvux3mo.js"])))=>i.map(i=>d[i]);
import{m as e,r as d,aL as R,hg as je,o as w,bl as ye,M as K,H as re,aJ as oe,aY as H,q as A,aC as ie,e as le,bk as Se,aH as ce,aI as de,G as ue,bf as me,hh as Ce,cc as U,aS as we,F as _e,hi as S,aK as I,hj as Ne,w as ge,hk as xe}from"./g92hdia1euilhv3m.js";import{hw as h,gX as X,hx as Q,n as ke,z as D,U as De,da as Me,db as Oe,dc as Y,dd as Z,de as Pe,hy as Le,hz as Te,aU as pe}from"./l912w0bwi7cbhgoi.js";import{S as G,c as fe,_ as Ae,a as ee,b as B,v as Re,d as te,g as Fe,e as Ie,u as Ve,f as $e}from"./hdg2g8osfufkkp0x.js";import{_ as Ee}from"./fzrn137102spawew.js";import{C as Ue}from"./j6aqjhsvoij8wq3g.js";import{bu as Be,b6 as he,b3 as qe,a7 as ze,r as Ge}from"./j9bb93dkfix5hp9e.js";import"./e9lafxuzyeh4418f.js";import"./jt5khb1yqv1xtbwl.js";function He(){const t=h();return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:["Force Use Search",!1]}),e.jsx(G,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"mt-1 shadow-none dark:text-gray-800",value:t.forceUseSearch==null?{value:"default",label:"Default"}:t.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:Je},onChange:s=>{h.setState({forceUseSearch:(s?.value??"default")==="default"?null:s?.value==="true"})}})]})})}const Je=t=>e.jsx(fe.Input,{...t,inputClassName:"focus:ring-0"});var We=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],se=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,o=String(s).toLowerCase(),i=String(a.getOptionValue(r)).toLowerCase(),l=String(a.getOptionLabel(r)).toLowerCase();return i===o||l===o},q={formatCreateLabel:function(s){return'Create "'.concat(s,'"')},isValidNewOption:function(s,r,a,o){return!(!s||r.some(function(i){return se(s,i,o)})||a.some(function(i){return se(s,i,o)}))},getNewOptionData:function(s,r){return{label:r,value:s,__isNew__:!0}}};function Ke(t){var s=t.allowCreateWhileLoading,r=s===void 0?!1:s,a=t.createOptionPosition,o=a===void 0?"last":a,i=t.formatCreateLabel,l=i===void 0?q.formatCreateLabel:i,n=t.isValidNewOption,c=n===void 0?q.isValidNewOption:n,m=t.getNewOptionData,b=m===void 0?q.getNewOptionData:m,g=t.onCreateOption,f=t.options,u=f===void 0?[]:f,j=t.onChange,p=Ae(t,We),v=p.getOptionValue,x=v===void 0?Fe:v,M=p.getOptionLabel,P=M===void 0?Ie:M,y=p.inputValue,L=p.isLoading,O=p.isMulti,N=p.value,T=p.name,_=d.useMemo(function(){return c(y,ee(N),u,{getOptionValue:x,getOptionLabel:P})?b(y,l(y)):void 0},[l,b,P,x,y,c,u,N]),F=d.useMemo(function(){return(r||!L)&&_?o==="first"?[_].concat(B(u)):[].concat(B(u),[_]):u},[r,o,L,_,u]),k=d.useCallback(function(C,$){if($.action!=="select-option")return j(C,$);var W=Array.isArray(C)?C:[C];if(W[W.length-1]===_){if(g)g(y);else{var E=b(y,y),ve={action:"create-option",name:T,option:E};j(Re(O,[].concat(B(ee(N)),[E]),E),ve)}return}j(C,$)},[b,y,O,T,_,g,j,N]);return te(te({},p),{},{options:F,onChange:k})}var Xe=d.forwardRef(function(t,s){var r=Ve(t),a=Ke(r);return d.createElement($e,Ee({ref:s},a))}),Qe=Xe;function Ye({children:t,sidebarOpen:s,onClose:r}){return e.jsx(X.Root,{show:s,as:d.Fragment,children:e.jsxs(Q,{as:"div",className:"relative z-10",onClose:r,children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(X.Child,{as:d.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(Q.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:e.jsx("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}function Ze({clientThreadId:t}){const{rebaseSystemMessageContent:s,showDebugConversationTurns:r}=h(),[a,o]=d.useState(()=>s?JSON.stringify(s,null,2):void 0),[i,l]=d.useState(!!s),n=je(t,w.getThreadCurrentLeafId(t)),m=ye(n,u=>u.content.content_type===K.SystemContent)?.content??null,b=()=>{o(m?JSON.stringify(m,null,2):"")},g=re(),f=d.useMemo(()=>ke(u=>{try{u?h.setState({rebaseSystemMessageContent:{...JSON.parse(u),content_type:K.SystemContent}}):h.setState({rebaseSystemMessageContent:null}),g.closeAll()}catch{g.danger("The System Message is not valid JSON")}},500),[g]);return d.useEffect(()=>{i?f(a):(f.cancel(),h.setState({rebaseSystemMessageContent:null}))},[f,i,a]),e.jsxs("div",{className:"flex flex-col gap-3 px-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(oe,{label:"Enable to apply this system message to the current conversation.",children:e.jsx(D,{id:"enabled",label:"Enabled",checked:i,onChange:u=>l(u.currentTarget.checked)})}),e.jsx(D,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:r,onChange:()=>{h.setState({showDebugConversationTurns:!r})}})]}),e.jsx(H,{disabled:!m,className:"mt-2",onClick:b,size:"small",children:"Load active system message"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm",children:"System Message"}),e.jsx(et,{disabled:!i,placeholder:m?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:a,onChange:u=>o(u.target.value)})]})]})}const et=R.textarea`w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary`;function tt({clientThreadId:t}){const[s,r]=d.useState([]),a=w.getThreadCurrentLeafId(t),o=w.getThreadConversationTurns(t,a),i=n=>{const m=w.getTree(t).getLeafFromNode(n);w.setThreadCurrentLeafId(t,m.id)},l=n=>{r(c=>[...c,a]),i(n)};return e.jsxs(e.Fragment,{children:[s.length>0&&e.jsxs(H,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{const n=s[s.length-1];i(n),r(c=>c.slice(0,-1))},children:[e.jsx(Be,{className:"icon-sm"}),"Go back to ",s[s.length-1]]}),e.jsx("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:o.map((n,c)=>{const m=n.messages[0].nodeId,b=w.getTree(t),g=c!==0?b.getParent(m):null,f=g!=null?g.children.findIndex(x=>m===x):0,u=g!=null?g.children:[],j=u.slice(0,f),p=u.slice(f+1);let v;switch(n.role){case A.User:v="bg-blue-500";break;case A.Assistant:v="bg-gray-600";break;default:v="bg-gray-400";break}return e.jsxs("div",{className:ie("relative p-2",v),children:[e.jsx("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:j.map(x=>e.jsx(ae,{variantId:x,onChangeItemInView:l},x))}),e.jsx("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:p.map(x=>e.jsx(ae,{variantId:x,onChangeItemInView:l},x))}),e.jsx("div",{className:"flex flex-col gap-2",children:n.messages.map(x=>e.jsxs("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[e.jsx("div",{className:"font-semibold",children:x.nodeId}),e.jsx("div",{className:"italic text-token-text-tertiary",children:x.message.author.role}),e.jsx("div",{children:le(x.message)})]},x.nodeId))})]},c)})})]})}function ae({variantId:t,onChangeItemInView:s}){return e.jsx("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{s(t)},children:e.jsx("span",{className:"bg-gray-200 p-2",children:t})},t)}const st=ce(()=>de(()=>import("./ix0ood7jcpgrguki.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(t=>t.DebugModalContents)),at=ce(()=>de(()=>import("./hjxxdjl2kwvux3mo.js"),__vite__mapDeps([15,1,2,3,5,6])).then(t=>t.FramesViewer));function Ct(){return e.jsx("button",{"data-testid":"open-debug-sidebar-button",className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",onClick:()=>{De.setActiveSidebar("debug")},children:e.jsx(he,{className:"icon-xs"})})}function nt({children:t,title:s,icon:r,isOpen:a,slideOver:o,onClose:i}){const l=e.jsxs(mt,{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[e.jsx(r,{className:"icon-sm"}),s]}),e.jsx("div",{className:"mr-2 mt-2 flex h-7 items-center",children:e.jsx(Se,{onClick:i})})]}),t]});return o?e.jsx(Ye,{sidebarOpen:a,onClose:i,children:l}):a?l:null}function rt({nodes:t,setDebugNodeIndex:s,setFrameSrc:r,conversationId:a}){const o=t.map((i,l)=>{const n=i.message,{role:c,name:m}=n.author,b=m&&m!==c,g=S(n,"metadata.__internal.model_id"),f=S(n,"metadata.__internal.agent.settings.completion_api.engine"),u=S(n,"metadata.__internal.model_experiment_name"),j=S(n,"metadata.__internal.model_experiment_treatment"),p=S(n,"metadata.__internal.alternative_model_selection_rule"),v=S(n,"metadata.__internal.model_experiment_group_name"),x=S(n,"metadata.__internal.model_experiment_group_params"),M=S(n,"metadata.__internal.model_experiment_override"),P=S(n,"metadata.__internal.model_experiment_eval_seq"),y=S(n,"metadata.__internal.raw_tokens")?.length,L=S(n,"metadata.request_id"),O=S(n,"metadata.__internal.search_settings"),N=I.getAudio(n),T=I.getAudioAssetPointers(n),_=I.getFrameAssetPointers(n),F=I.getVideoContainerAssetPointers(n);return e.jsxs(xt,{role:"button",onClick:()=>s(l),children:[e.jsxs("div",{className:ie("flex items-center gap-1 break-words text-xs font-semibold uppercase",c===A.User?"text-token-text-primary":"text-token-text-tertiary"),children:[c===A.User&&e.jsx(Ge,{className:"icon-sm"}),c,b&&` (${m})`,n.recipient&&" -> ",Ne(n)]}),(n.author.role!==A.System||L)&&e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["ID: ",n.id]}),i.id!==n.id&&e.jsxs("div",{children:["UI Node ID: ",i.id]}),e.jsxs("div",{children:["Req ID: ",L||"Reload page to see ID"]})]}),e.jsx("div",{className:"line-clamp-6",children:le(n)}),(y||g||f||u||j||p||v||x||M||P||O)&&e.jsxs("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[y!==void 0&&e.jsxs("div",{children:[e.jsx("b",{children:"Tokens Count:"})," ",y]}),g&&e.jsxs("div",{children:[e.jsx("b",{children:"Model ID:"})," ",g]}),f&&e.jsxs("div",{children:[e.jsx("b",{children:"Engine:"})," ",f]}),u&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment:"})," ",u]}),j&&e.jsxs("div",{children:[e.jsx("b",{children:"Treatment:"})," ",j]}),p&&e.jsxs("div",{children:[e.jsx("b",{children:"Alternative Model Rule:"})," ",p]}),v&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Name:"})," ",v]}),x&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Params:"}),e.jsx("div",{children:JSON.stringify(x,null,2)})]}),M&&e.jsxs("div",{children:[e.jsx("b",{children:"Above Params are Overridden By:"})," ",M]}),P&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment Eval Seq:"})," click to see"]}),O&&e.jsxs("div",{children:[e.jsx("b",{children:"Search Settings:"}),e.jsx("div",{children:JSON.stringify(O,null,2)})]})]}),N.length||T.length||F.length?e.jsxs("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[e.jsx(dt,{frameAssets:_,setFrameSrc:r},l),N.map((k,C)=>e.jsx(V,{audio:k,conversationId:a},`audio-asset-${C}`)),T.map((k,C)=>e.jsx(V,{assetPointer:k,conversationId:a},`audio-${C}`)),F.map((k,C)=>e.jsx(ut,{assetPointer:k,conversationId:a},`video-asset-${C}`))]}):null]},n.id)});return e.jsx(gt,{children:o})}const z=t=>e.jsx(fe.Input,{...t,inputClassName:"focus:ring-0"});function ot(){const t=h(),r=Le().map(a=>({label:a.name,options:a.options.map(o=>({label:`${o.value} (${o.name})`,value:o.value}))}));return e.jsxs("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold",children:[e.jsx(D,{id:"force-paragen",label:"Force Parallel Gen",checked:t.forceParagen,onChange:()=>{h.setState({forceParagen:!t.forceParagen})}}),e.jsx(Qe,{options:r,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!t.forceParagen,isLoading:r.length===0,value:t.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:z},onChange:a=>{h.setState({forceParagenModel:a??Te})}}),t.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Paragen Stream Type:"}),e.jsx(G,{options:[{label:"Do Not Override",value:"none"},{label:"Force Classic Stream Behavior",value:"default"},{label:"Wait for Assistant",value:"wait_for_assistant"},{label:"Interleave",value:"interleave"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:t.paragenStreamType==="none"?{value:"none",label:"Do Not Override"}:t.paragenStreamType==="default"?{value:"default",label:"Force Classic Stream Behavior"}:t.paragenStreamType==="wait_for_assistant"?{value:"wait_for_assistant",label:"Wait for Assistant"}:{value:"interleave",label:"Interleave"},isMulti:!1,components:{Input:z},onChange:a=>{h.setState({paragenStreamType:a?.value??"none"})}})]}):null,t.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Show CoT in Paragen:"}),e.jsx(G,{options:[{label:"Allow",value:"allow"},{label:"Hide CoT for Alter Model",value:"hide_alter"},{label:"Hide",value:"hide"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:t.paragenCotSummaryDisplay==="allow"?{value:"allow",label:"Allow"}:t.paragenCotSummaryDisplay==="hide_alter"?{value:"hide_alter",label:"Hide CoT for Alter Model"}:{value:"hide",label:"Hide"},isMulti:!1,components:{Input:z},onChange:a=>{h.setState({paragenCotSummaryDisplay:a?.value??"allow"})}})]}):null,e.jsx(D,{id:"show-paragen-metadata",label:"Show Paragen Metadata",checked:t.showParagenMetadata,onChange:()=>{h.setState({showParagenMetadata:!t.showParagenMetadata})}}),e.jsx(He,{}),e.jsx(D,{id:"force-rate-limit",label:"Force Rate Limit",checked:t.forceRateLimit,onChange:()=>{h.setState({forceRateLimit:!t.forceRateLimit})}}),e.jsx(D,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:t.resetRateLimits,onChange:()=>{h.setState({resetRateLimits:!t.resetRateLimits})}}),e.jsx(oe,{label:"Enabling this will show debug conversation messages in the chat",children:e.jsx(D,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:t.showDebugConversationTurns,onChange:()=>{h.setState({showDebugConversationTurns:!t.showDebugConversationTurns})}})})]})}const ne=R.div`px-3 pb-2 text-xs font-semibold uppercase border-b-2 ${({$isSelected:t})=>t?"border-black dark:border-white":"border-transparent"}`;function wt({clientThreadId:t,isOpen:s,slideOver:r,onClose:a}){const o=ue(),i=me(),[l,n]=d.useState("conversation");return i?.includes("debug")?e.jsx(nt,{icon:he,title:o.formatMessage(J.debugTitle),isOpen:s,slideOver:r,onClose:a,children:e.jsxs(Me,{orientation:"vertical",defaultValue:l,onValueChange:c=>n(c),children:[e.jsxs(Oe,{className:"mb-4 flex items-center justify-center gap-2 px-2 py-1 text-xs",children:[e.jsx(Y,{value:"conversation",children:e.jsx(ne,{$isSelected:l==="conversation",children:"Conversation"})}),e.jsx(Y,{value:"system-message-editor",children:e.jsx(ne,{$isSelected:l==="system-message-editor",children:"System Message"})}),!1]}),e.jsx(Z,{value:"conversation",children:e.jsx(it,{clientThreadId:t})}),e.jsx(Z,{value:"system-message-editor",children:e.jsx(Ze,{clientThreadId:t})}),!1]})}):null}function it({clientThreadId:t}){const s=ue(),r=w.getThreadCurrentLeafId(t),a=Ce(t,r),[o,i]=d.useState(),l=me(),n=d.useCallback(()=>{i(void 0)},[]),c=re(),m=d.useCallback(p=>{const v=w.getTree(t);Pe(v.getTextFromThread(r),c,p)},[r,t,c]),[b,g]=d.useState(!1),[f,u]=d.useState(void 0);return l?.includes("debug")?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:e.jsx(ct,{clientThreadId:t,messages:a.map(p=>p.message)})}),!1,e.jsxs("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[e.jsx("div",{children:e.jsx(Ue,{onCopy:m,buttonText:s.formatMessage(J.copyText)})}),e.jsxs("button",{className:"flex items-center justify-center gap-2",onClick:()=>g(!0),children:[e.jsx(qe,{className:"icon-sm rotate-90"}),"View tree"]})]}),e.jsx(ot,{}),e.jsx(rt,{nodes:a,setDebugNodeIndex:i,setFrameSrc:u,conversationId:w.getServerThreadId(t)}),o!==void 0&&e.jsx(U,{type:"success",size:"fullscreen",noPadding:!0,isOpen:!0,onClose:n,children:e.jsx(st,{threadId:a[o].message.metadata?.__internal?.sonic_thread_id,threadUserId:a[o].message.metadata?.__internal?.sonic_user_id,onClose:n,message:a[o].message})},`DebugMessageModal-${o}`),b&&e.jsx(U,{isOpen:!0,onClose:()=>g(!1),type:"success",size:"custom",noPadding:!0,children:e.jsx(tt,{clientThreadId:t})},"DebugTreeViewer"),f&&e.jsx(U,{size:"normal",isOpen:!0,onClose:()=>u(void 0),type:"success",children:e.jsx("img",{src:f,alt:"debug image"})},"DebugFrameViewer")]}):null}function lt(t,s){const r=JSON.stringify({conversation_id:w.getServerThreadId(t),messages:s},null,2),a=new Blob([r],{type:"application/json"}),o=URL.createObjectURL(a),i=document.createElement("a");i.href=o,i.download=`messages-${w.getServerThreadId(t)}.json`,i.click(),URL.revokeObjectURL(o)}function ct({clientThreadId:t,messages:s}){const r=d.useCallback(()=>{lt(t,s)},[t,s]);return e.jsx(H,{onClick:r,color:"primary",size:"small",icon:ze,children:e.jsx(we,{...J.downloadRawConversation})})}function dt(t){const[s,r]=d.useState([]),a=ge(),{frameAssets:o}=t;return d.useEffect(()=>{async function i(){const l=o.map(async({image_asset_pointer:n,timestamp:c})=>{const m={asset:n};return{src:(await pe.fetch(a,m)).url,timestamp:c}});return Promise.all(l)}o.length>0&&i().then(r)},[o,a]),e.jsx(at,{frames:s,setFrameSrc:t.setFrameSrc})}function V(t){const s=be(t.assetPointer,t.conversationId),r=V.useAudioSource(t.audio),a=s??r,i=xe("3230069703").config.value.expirySeconds,[l,n]=d.useState(Date.now()),c=d.useRef(null);return d.useEffect(()=>{const m=setInterval(()=>{c.current&&c.current.currentTime>0&&!c.current.paused&&!c.current.ended&&c.current.readyState>2||n(Date.now())},i*1e3);return()=>clearInterval(m)},[i]),a?e.jsx("audio",{ref:c,controls:!0,src:a,className:"w-full"},l):null}function be(t,s){const[r,a]=d.useState(null),o=ge();return d.useEffect(()=>{t&&pe.fetch(o,{asset:t,conversationId:s}).then(i=>{a(i.url)})},[o,t,s]),r}V.useAudioSource=t=>{const[s,r]=d.useState(null);return d.useEffect(()=>{if(t){const a=atob(t.payload),o=new Uint8Array(a.length);for(let n=0;n<a.length;n++)o[n]=a.charCodeAt(n);const i=new Blob([o],{type:`audio/${t.format}`}),l=URL.createObjectURL(i);return r(l),()=>{URL.revokeObjectURL(l)}}},[t]),s};function ut(t){const s=be(t.assetPointer,t.conversationId),a=xe("3230069703").config.value.expirySeconds,[o,i]=d.useState(Date.now()),l=d.useRef(null);return d.useEffect(()=>{const n=setInterval(()=>{l.current&&l.current.currentTime>0&&!l.current.paused&&!l.current.ended&&l.current.readyState>2||i(Date.now())},a*1e3);return()=>clearInterval(n)},[a]),s?e.jsx("video",{ref:l,controls:!0,src:s,className:"w-full"},o):null}const mt=R.div`overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary`,gt=R.pre`whitespace-pre-wrap text-sm`,xt=R.div`px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200`,J=_e({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}});export{it as DebugConversation,wt as DebugConversationSidebar,Ct as OpenDebugSidebarButton,nt as default};
//# sourceMappingURL=eqljhf23h0iva9l3.js.map
