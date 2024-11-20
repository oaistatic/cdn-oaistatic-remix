import{j as e,aF as T,aB as g,C as A,I as B,a0 as ie,J as ne,r as C,ar as le,M as W,v as re,R as V,a3 as oe,c9 as de,bz as ce}from"./e9yuj0ll30e3kmlx.js";import{T as F,k as me,cV as ue,cW as ge,cX as fe,cc as pe,cY as xe,cZ as he,az as ye,c_ as je,c$ as z,d0 as _e,aT as ve,bw as Me,d1 as L}from"./ihoxwwe79kyl4jef.js";import{ad as $,aC as we,J as Pe}from"./mhi0wfvgf6n45t1b.js";import{T as P}from"./ixdbgduk5tyikx9n.js";import{T as Se}from"./mj32fg73w6wjno7w.js";import"./k0b3ujwgwrn0wecv.js";import"./ogeaiwpkr6sm1oz0.js";function Te({action:s,handleUserAction:t,userActionParams:i,displayParams:a}){return s.type==="deny"?e.jsx(T,{color:"secondary",size:"small",onClick:()=>{t({...i,actionData:{type:"deny",...s.deny}})},children:e.jsx(g,{...s.name==="decline"?y.decline:y.deny})}):s.type==="allow"?e.jsx(T,{color:"primary",size:"small",onClick:()=>{t({...i,actionData:{type:"allow",...s.allow}})},children:e.jsx(g,{...s.name==="allow"?y.allow:y.confirm})}):s.type==="always_allow"?e.jsx(T,{color:"secondary",size:"small",onClick:async()=>{t({...i,actionData:{type:"always_allow",...s.always_allow}})},children:e.jsx(g,{...y.alwaysAllow})}):s.type==="oauth_redirect"?e.jsx(T,{color:"primary",size:"small",onClick:()=>{Ne(s.oauth_redirect,i.clientThreadId,i.turnGizmo)},children:e.jsx(g,{...y.signInButton,values:{domain:a.domain}})}):s.type==="contact_gizmo"?e.jsx(T,{color:"secondary",size:"small",onClick:async()=>{t({...i,actionData:{type:"contact_gizmo",...s.contact_gizmo}})},children:e.jsx(g,{...y.allow})}):null}async function Ne(s,t,i){const a=F.getServerThreadId(t),n=me.getConversationMode(t)?.kind===A.GizmoTest,l=a&&!n?ue(a,i):window.location.href;ge.doOAuthRedirect(s.gizmo_id,s.gizmo_action_id,s.domain,l,n)}const y=B({alwaysAllow:{id:"jitPluginMessage.alwaysAllow",defaultMessage:"Always Allow"},allow:{id:"jitPluginMessage.allow",defaultMessage:"Allow"},decline:{id:"jitPluginMessage.decline",defaultMessage:"Decline"},confirm:{id:"jitPluginMessage.confirm",defaultMessage:"Confirm"},deny:{id:"jitPluginMessage.deny",defaultMessage:"Deny"},signInButton:{id:"jitPluginMessage.signInButton",defaultMessage:"Sign in with {domain}"}}),N="openaiFileIdRefs";function We({messages:s,clientThreadId:t,isLastTurnInConversation:i,onRequestCompletion:a}){const[n,l]=ie(),[r,...c]=s,o=ne(),m=fe(),S=pe(t),h=r.message.metadata?.gizmo_id??S,j=xe(t,h),Y=he(j)&&j.gizmo_id===h,_=ye(h,Y)?.data,[K,U]=C.useState(!1),O=je(r.message.recipient);let k;if(O?.functionName!=null&&_?.tools!=null){for(const d of _.tools)if(Ie(d,O.functionName)){k=d;break}}const H=c.filter(d=>d.message.metadata?.jit_plugin_data?.from_server?.type==="debug"),Q=c.filter(d=>!["debug","send_test"].some(u=>u===d.message.metadata?.jit_plugin_data?.from_server?.type)),{uiState:x,jitPluginData:f,fileAttachments:X}=ke(r,Q,i),v=f?.from_server?.type!=="denied_by_user"?f?.from_server?.body.domain:k?.metadata?.domain,G=k?.metadata?.privacy_policy_url;if(C.useEffect(()=>{if(j?.kind!==A.GizmoInteraction||q(f?.from_client)?.type==="oauth_success")return;const d=n.get("oauth_success");if(f?.from_server?.type==="oauth_required"&&d){for(const u of f.from_server.body.actions)if(u.type==="oauth_redirect"){J({assistantMessage:r,allMessages:s,clientThreadId:t,onRequestCompletion:a,actionData:{type:"oauth_success",target_message_id:u.oauth_redirect.target_message_id},conversationMode:j});return}l(u=>(u.delete("oauth_success"),u),{replace:!0})}},[j,r,s,t,a,f,i,n,l]),!_)return null;let M=P.Running,w=v?p.running:p.starting,I={domain:v},b=null;if(x===7)return null;if(x===4||x===5){M=P.Paused,w=p.confirmingSimple;const d={gizmoName:_.gizmo.display.name,domain:v};b=o.formatMessage(p.confirmParamsTitle,d),I={...d,title:u=>e.jsxs("div",{className:"inline-flex items-center gap-1 text-sm",children:[u,e.jsx($,{className:"icon-sm"})]}),subtitle:u=>e.jsx("div",{className:"text-xs",children:u})}}else x===1?(M=P.Finished,w=p.finished,b=o.formatMessage(p.sentParamsTitle,{gizmoName:_.gizmo.display.name,domain:v}),I={domain:v}):x===2?(M=P.Error,w=p.error):(x===3||x===6)&&(M=P.Stopped,w=x===6?p.declined:p.stopped);const Z={assistantMessage:r,allMessages:s,clientThreadId:t,turnGizmo:_,onRequestCompletion:a,conversationMode:j},ee={domain:v},D=f?.from_server?.type!=="denied_by_user"?f?.from_server?.body.actions.map((d,u)=>e.jsx(Te,{action:d,displayParams:ee,handleUserAction:J,userActionParams:Z},u)):null,se=w?o.formatMessage(w,I):null,te=le.div`flex gap-2 flex-wrap mt-1 empty:hidden`,R=f?E(f):null,Ae=R?.[N]??[],ae=!!R;return e.jsxs(e.Fragment,{children:[e.jsx(ze,{debugMessages:H}),e.jsx(Se,{highlightedCommand:se,status:M,showWorkUserSetting:!1,children:ae?e.jsx(De,{privacyPolicyUrl:G,data:f,isPromptingForPermission:M===P.Paused}):null}),e.jsx(te,{children:X?.map(d=>e.jsx(z,{file:d.name,fileId:d.id,width:"wide",alwaysShowData:!0,showDownloadButton:!0,downloadLink:d.download_url,contextConnectorInfo:_e(d.context_connector_info)},d.id))}),(x===5||x===4)&&D&&!m&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex gap-2",children:D}),e.jsxs("div",{className:"my-1 flex items-center gap-2 text-sm",children:[e.jsx(we,{className:"icon-sm"}),e.jsx(g,{...p.confirmingSubtitle})]})]}),b!==null&&e.jsx(Fe,{title:b,privacyPolicyUrl:G,data:f,onClose:()=>U(!1),isOpen:K,actionButtons:D})]})}function be({messageMetadata:s}){const[t,i]=C.useState(!1);return e.jsxs("div",{className:"my-2 flex flex-col text-sm",children:[e.jsxs("div",{className:"flex flex-row items-center hover:cursor-pointer",onClick:()=>{i(!t)},children:[t?e.jsx($,{className:"icon-sm"}):e.jsx(Pe,{className:"icon-sm"}),e.jsx("div",{className:"font-semibold",children:s.display_message})]}),t&&e.jsx("pre",{children:JSON.stringify(s.data,null,2)})]})}function ze({debugMessages:s}){return s.length===0?null:e.jsx("div",{children:s.map((t,i)=>{const a=t.message.metadata?.jit_plugin_data?.from_server;return a&&a.type==="debug"?e.jsx(be,{messageMetadata:a.body},i):null})})}function ke(s,t,i){if(s.message.metadata?.jit_plugin_data?.from_server?.type==="send_test")return{uiState:7};if(t.some(a=>a.message.content.content_type===W.SystemError))return{uiState:2};if(ve(s.message))return{uiState:3};for(let a=t.length-1;a>=0;a--){const n=t[a];if(n.message.metadata?.invoked_plugin){const c=[];return t.forEach(o=>{const m=o.message.metadata?.attachments?.filter(S=>S.display_files_from_actions_ext);m&&c.push(...m)}),{uiState:1,jitPluginData:n.message.metadata.jit_plugin_data,fileAttachments:c}}const l=q(n.message.metadata?.jit_plugin_data?.from_client);if(l!=null){if(l?.type==="contact_gizmo")return{uiState:1,jitPluginData:t[a-1]?.message.metadata?.jit_plugin_data};if(l?.type==="deny")return{uiState:6};if(l?.type==="oauth_success")return{uiState:0,jitPluginData:n.message.metadata?.jit_plugin_data};break}const r=n.message.metadata?.jit_plugin_data?.from_server;if(r?.type==="preview"&&i)return{uiState:0,jitPluginData:n.message.metadata?.jit_plugin_data};if(r?.type==="confirm_action"&&i)return{uiState:5,jitPluginData:n.message.metadata?.jit_plugin_data};if(r?.type==="oauth_required"&&i)return{uiState:4,jitPluginData:n.message.metadata?.jit_plugin_data}}return{uiState:i?0:3}}function J({actionData:s,assistantMessage:t,allMessages:i,clientThreadId:a,turnGizmo:n,onRequestCompletion:l,conversationMode:r}){const c={id:re(),author:{role:V.Tool,name:t.message.recipient},content:{content_type:W.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:s}}};r=r??{kind:A.PrimaryAssistant},n?.gizmo.id&&(c.metadata.gizmo_id=n.gizmo.id),F.updateTree(a,m=>{m.addNode(c.id,c,i[i.length-1].message.id,V.Tool,{completionSampleFinishTime:Date.now()})}),F.setThreadCurrentLeafId(a,c.id);const o=new Me;l({type:oe.Next,promptId:c.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:r},turnTracker:o})}function Ie(s,t){if(s.type!==de.JIT_PLUGIN||!s.metadata.json_schema)return!1;let i=!1;function a(n){for(const l in n)l==="operationId"&&n[l]===t&&(i=!0),n[l]&&typeof n[l]=="object"&&a(n[l])}return a(s.metadata.json_schema),i}function E(s){if(s.from_server?.type==="confirm_action"||s.from_server?.type==="oauth_required"||s.from_server?.type==="preview")return s.from_server.body.params}function De({data:s,privacyPolicyUrl:t,isPromptingForPermission:i}){const a=s?E(s):null,l=(a?.[N]??[]).map((r,c)=>{const o=r.name.startsWith("dalle-");let m=r.name;return o&&(m=`${m}.webp`),e.jsx(z,{file:m,fileId:r.id},c)});return e.jsxs("div",{className:"mb-4 mt-1 divide-y divide-token-border-light overflow-hidden rounded-xl border border-token-border-light",children:[e.jsxs("div",{className:"flex justify-between bg-token-main-surface-tertiary px-4 py-2 text-sm text-token-text-secondary",children:[i?e.jsx(g,{id:"JITPluginMessage.params.sharing.present",defaultMessage:"The following will be shared:"}):e.jsx(g,{id:"JITPluginMessage.params.sharing.past",defaultMessage:"The following was shared:"}),t&&e.jsx("a",{href:L(t),className:"text-token-text-primary",target:"_blank",rel:"noreferrer",children:e.jsx(g,{...p.privacyPolicyLink})})]}),a&&Object.keys(a).map((r,c)=>r===N?null:e.jsxs("div",{className:"flex items-center space-x-2 px-4 py-2 font-mono",children:[e.jsx("span",{className:"text-token-text-tertiary",children:`${r}:`}),e.jsx("span",{children:JSON.stringify(a[r],null,2)})]},c)),l.length>0&&e.jsx("div",{className:"px-4 py-2",children:l})]})}function Ce({title:s,data:t,privacyPolicyUrl:i,actionButtons:a}){const n=t?E(t):null,l=n?.[N]??[],r=l.filter(o=>!o.mime_type?.startsWith("image/")).map((o,m)=>e.jsx(z,{file:o.name,fileId:o.id},m)),c=l.filter(o=>o.mime_type?.startsWith("image/")).map((o,m)=>{const S=o.name.startsWith("dalle-");let h=o.name;return S&&(h=`${h}.webp`),e.jsx(z,{file:h,fileId:o.id},m)});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-semibold",children:s}),n&&Object.keys(n).map((o,m)=>o===N?null:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:o}),e.jsx("div",{children:JSON.stringify(n[o],null,2)})]},m)),c.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(g,{id:"jitPluginMessage.paramsModalImages",defaultMessage:"Images"})}),c]}),r.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(g,{id:"jitPluginMessage.paramsModalFiles",defaultMessage:"Files"})}),r]}),e.jsxs("div",{className:"flex flex-row items-center justify-between pt-4",children:[a!==null&&e.jsx("div",{className:"space-x-2",children:a}),i&&e.jsx("a",{className:"text-xs font-semibold",href:L(i),children:e.jsx(g,{...p.privacyPolicyLink})})]})]})}function Fe({title:s,data:t,privacyPolicyUrl:i,onClose:a,isOpen:n,actionButtons:l}){return e.jsx(ce,{isOpen:n,onClose:a,type:"success",hideSeparator:!0,showCloseButton:!0,size:"normal",title:e.jsx(g,{id:"jitPluginMessage.paramsModalTitle",defaultMessage:"Review action"}),children:e.jsx("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden",children:e.jsx("div",{className:"space-y-2",children:e.jsx(Ce,{title:s,data:t,privacyPolicyUrl:i,actionButtons:l})})})})}function q(s){if(s&&"user_action"in s){const t=s.user_action;s={...s,...t.data},"target_message_id"in s&&t.target_message_id&&(s.target_message_id=t.target_message_id)}return s}const p=B({starting:{id:"jitPluginMessage.starting",defaultMessage:"Starting action"},confirming:{id:"jitPluginMessage.confirmingV4",defaultMessage:"<title>{gizmoName} wants to talk to {domain}</title><subtitle>Only allow sites you trust</subtitle>"},confirmingSimple:{id:"jitPluginMessage.confirming.simple",defaultMessage:"{gizmoName} wants to talk to {domain}"},confirmingSubtitle:{id:"jitPluginMessage.confirming.subtitle",defaultMessage:"Only allow sites you trust."},running:{id:"jitPluginMessage.runningV4",defaultMessage:"Talking to {domain}"},finished:{id:"jitPluginMessage.finishedV4",defaultMessage:"Talked to {domain}"},stopped:{id:"jitPluginMessage.stoppedV4",defaultMessage:"Stopped talking to {domain}"},error:{id:"jitPluginMessage.errorV5",defaultMessage:"Error talking to {domain}"},declined:{id:"jitPluginMessage.declined",defaultMessage:"You declined this action"},ranTest:{id:"jitPluginMessage.ranTest",defaultMessage:"Tested {operationName}"},confirmParamsTitle:{id:"jitPluginMessage.confirmParamsTitleV3",defaultMessage:"{gizmoName} wants to share this info with {domain}"},sentParamsTitle:{id:"jitPluginMessage.sentParamsTitleV2",defaultMessage:"{gizmoName} sent this info to {domain}"},privacyPolicyLink:{id:"jitPluginMessage.privacyPolicyLinkV2",defaultMessage:"Privacy policy"}});export{We as JITPluginMessage};
//# sourceMappingURL=ofhlnnw1tyz4mgkh.js.map
