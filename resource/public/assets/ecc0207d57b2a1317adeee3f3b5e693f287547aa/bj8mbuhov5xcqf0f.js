import{D as g,S as u,P as m,d as p,bq as f,bu as s}from"./cenhwbprxai3toix.js";import{aB as _,aC as w,aD as l,aE as I,aF as h,aG as F}from"./bomvf441parvbl6l.js";import{a as v}from"./hn877s1av7risab0.js";function E(e){return e.metadata?.dalle?.prompt??""}async function y(e,t,a="image/png"){return new Promise((i,n)=>{e.toBlob(o=>{o!=null?i(new File([o],t,{type:a})):n(new Error("Failed to convert canvas to blob"))},a)})}async function b(e,t){const a=document.createElement("canvas");a.width=e.width,a.height=e.height;const i=a.getContext("2d");if(i==null)throw new Error("Failed to get 2d context for mask canvas");const n=i.createImageData(e.width,e.height);for(let o=0;o<e.data.length;o+=4)e.data[o+3]!==0?(n.data[o]=0,n.data[o+1]=0,n.data[o+2]=0,n.data[o+3]=255):(n.data[o]=255,n.data[o+1]=255,n.data[o+2]=255,n.data[o+3]=255);return i.putImageData(n,0,0),y(a,t)}async function D(e,t){const i=await(await fetch(e)).blob(),n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=t,n.click(),n.remove()}function k(e){const t=F(new Date,"yyyy-MM-dd HH.mm.ss");let a=e.slice(0,150);return a.endsWith(".")&&(a=a.slice(0,-1)),`DALL·E ${t} - ${a}.webp`}async function S(e,t,a){const i=E(e),n=k(i);await D(e.url,n),u.logEvent("chatgpt_dalle_image_download",null,{sourceOperation:e.metadata?.dalle?.edit_op??"none",hasParent:e.metadata?.dalle?.parent_gen_id!=null?"true":"false"}),m.logEvent(p.dalleImageDownload,{conversationId:t,messageId:a,generationId:e.metadata?.dalle?.gen_id,parentGenerationId:e.metadata?.dalle?.parent_gen_id,fileId:l(e.asset_pointer),sourceOperation:e.metadata?.dalle?.edit_op})}function G(e){const t=v(e),a=_(),i=t&&"gizmo"in t?t.gizmo:void 0;return!a&&i?.gizmo.id===w}function U(e,t){const a=t.metadata?.dalle?.gen_id,i=l(t.asset_pointer);return i==null||a==null?e:{...e,messageMetadata:{...e.messageMetadata,dalle:{from_client:{operation:{type:"transformation",original_gen_id:a,original_file_id:i}}}}}}async function C(e,t,a,i){return new Promise((n,o)=>{I(h(e),e,t,a,{kind:f.DalleAgent},{onFileCreated:s,onFileUploadProgress:s,onFileUploaded:(d,r)=>n(r),onError:(d,r)=>{o(new Error(`Failed to upload file with reason: ${r}`))}},i)})}async function T(e,t,a,i,n){const o=t.metadata?.dalle?.gen_id,d=l(t.asset_pointer);if(d==null||o==null||a==null)return e;try{const r=await b(a,"mask.png"),c=await C(r,i,n,{imageDimensions:{width:t.width,height:t.height}});return{...e,messageMetadata:{...e.messageMetadata,dalle:{from_client:{operation:{type:"inpainting",original_gen_id:o,original_file_id:d,mask_file_id:c}}}}}}catch(r){return g.addError(r),e}}export{G as a,S as d,E as g,U as s,T as u};
//# sourceMappingURL=bj8mbuhov5xcqf0f.js.map
