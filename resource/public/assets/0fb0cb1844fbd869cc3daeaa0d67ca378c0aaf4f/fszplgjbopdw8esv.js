import{at as j,j as e,Y as u,X as z}from"./gqmy69lfum1xn3in.js";import{d7 as D,d8 as T,d9 as d,da as l,db as _}from"./icnxn2xqcp3w18gd.js";import{b as n,T as r}from"./n9r06ayr76pio4lm.js";import"./i4z8naqcr3t3djqa.js";import"./batco5mjkqikbslw.js";import"./gt1nd5d752xxormd.js";import"./gvt29ccgnn9ozjnb.js";import"./i5v48a1mcjul24c4.js";const f=13e3;function v({messages:s}){const t=u(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:p,data:c,error:M}=i;if(p)return e.jsx(n,{conversationMessages:s,icon:d,status:r.Finished,estimatedToolDurationMs:f,animationLoopDurationMs:4e3},g);if(M!=null||c?.url==null)return e.jsx(n,{conversationMessages:s,icon:l,status:r.Error,text:t.formatMessage(m.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:P,width:h,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},g)})})}function G({messages:s}){const t=u();return s.length===0?null:e.jsx(n,{conversationMessages:s,icon:d,status:r.Running,text:t.formatMessage(m.generatingProfilePic),estimatedToolDurationMs:f,animationLoopDurationMs:4e3})}function E({messages:s}){const t=u();return s.some(a=>a.message.status==="in_progress")?e.jsx(n,{conversationMessages:s,icon:l,status:r.Running,text:t.formatMessage(m.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(n,{conversationMessages:s,icon:l,status:r.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const O=j.memo(L),m=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{O as default};
//# sourceMappingURL=fszplgjbopdw8esv.js.map