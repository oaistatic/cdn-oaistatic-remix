import{r as y,y as g,v,R as f,M as z,e2 as M,a4 as T}from"./du9ygo55hccsm0ec.js";import{bM as x}from"./hc0go6t8u8it292j.js";import{a as h}from"./ndpe1ojbx7c3v18s.js";import{a as j}from"./d28r08o6ubsxmagb.js";import{c as C,T as l}from"./m7ykldedawewofy8.js";import"./ibjw18ivx5tw615x.js";import"./kwyhm54wtm4zbkpo.js";import"./igmk8bhhl98b6n5v.js";import"./kl23pvq05rxrgvth.js";function D({messages:e,clientThreadId:o,isLastTurnInConversation:m,onRequestCompletion:a}){const[i,...t]=e,n=C(),s=t.find(c=>c.message.metadata?.jit_plugin_data?.from_server?.type==="confirm_action")?.message.metadata?.jit_plugin_data?.from_server,_=s?.body.actions[0].type==="contact_gizmo"?s?.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:p}=h(_),r=m&&t[t.length-1];return y.useEffect(()=>{if(n||!r||r.message.metadata?.jit_plugin_data?.from_server?.type!=="confirm_action")return;const c=r.message.metadata?.jit_plugin_data?.from_server;if(c?.type==="confirm_action"){const d=c.body.actions.find(u=>u.type==="contact_gizmo");d&&d.type==="contact_gizmo"&&S({allMessages:e,assistantMessage:i,clientThreadId:o,onRequestCompletion:a,actionData:{type:"contact_gizmo",...d.contact_gizmo}})}},[n,r,a,e,i,o]),g.jsx("div",{className:"my-2 flex flex-col",children:p&&g.jsx(j,{gizmoResource:p})})}function S({actionData:e,allMessages:o,assistantMessage:m,clientThreadId:a,onRequestCompletion:i}){const t={id:v(),author:{role:f.Tool,name:m.message.recipient},content:{content_type:z.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:e}}};l.updateTree(a,s=>{s.addNode(t.id,t,o[o.length-1].message.id,f.Tool,{completionSampleFinishTime:Date.now()})}),l.setThreadCurrentLeafId(a,t.id);const n=new x;i({type:M.Next,promptId:t.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:T.PrimaryAssistant}},turnTracker:n})}export{D as GizmoContactsMessage};
//# sourceMappingURL=pb8a11gbl0tlsd7v.js.map