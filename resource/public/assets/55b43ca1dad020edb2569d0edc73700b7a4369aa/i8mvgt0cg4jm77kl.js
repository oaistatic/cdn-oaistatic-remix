import{R as j,j as e,c as l}from"./i8w88cc8b3gds516.js";import{u as z,I as D}from"./dvm2vv2ab4q4lsy1.js";import{b as n,a as r}from"./h5ki4u1sjcr6cdl0.js";import{dB as d,dC as u}from"./jg63sxiyqeyvfv9f.js";import{bV as T,f as _}from"./eh26o1l35t2fnjj4.js";import"./mkf03mv1563ttunw.js";import"./e7ldcb1pybd2xac9.js";const f=13e3;function v({messages:s}){const t=l(),o=s.flatMap(i=>T.getImageAssetPointers(i.message)),a=z(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:p,data:c,error:M}=i;if(p)return e.jsx(n,{conversationMessages:s,icon:d,status:r.Finished,estimatedToolDurationMs:f,animationLoopDurationMs:4e3},g);if(M!=null||c?.url==null)return e.jsx(n,{conversationMessages:s,icon:u,status:r.Error,text:t.formatMessage(m.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:P,width:h,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(D,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},g)})})}function G({messages:s}){const t=l();return s.length===0?null:e.jsx(n,{conversationMessages:s,icon:d,status:r.Running,text:t.formatMessage(m.generatingProfilePic),estimatedToolDurationMs:f,animationLoopDurationMs:4e3})}function E({messages:s}){const t=l();return s.some(a=>a.message.status==="in_progress")?e.jsx(n,{conversationMessages:s,icon:u,status:r.Running,text:t.formatMessage(m.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(n,{conversationMessages:s,icon:u,status:r.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function I({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const B=j.memo(I),m=_({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{B as default};
//# sourceMappingURL=i8mvgt0cg4jm77kl.js.map
