import{c as O,r as v,j as e,M as k}from"./lklglvrzltpv3f05.js";import{f as Q,ee as R,M as y,s as S,F as W,J as K}from"./dr5q0mnwgdiuy1ac.js";import{gL as U,gM as L,gN as $,gO as G,gP as z,I as B,bt as X,bE as J,g5 as T}from"./fn5bn67vlrtkutmt.js";import{T as Y,I as Z}from"./hl6idnon4g9exonx.js";const ee=["Not relevant","Inaccurate","Incomplete","Missing sources","I don't like it","Shouldn't have searched Google Drive","Prompt was misunderstood","Didn't like the response style","Other"],te=["Good sources","Answered my question","I like it","Other"],se=["Not relevant","Out of date","Content is wrong"],ne=["Relevant","Up to date","Accurate"];function ae(a){switch(a){case"Not relevant":return x.tagNotRelevant;case"Inaccurate":return x.tagInaccurate;case"Incomplete":return x.tagIncomplete;case"Missing sources":return x.tagMissingSources;case"I don't like it":return x.tagDontLikeIt;case"Shouldn't have searched Google Drive":return x.tagShouldntHaveSearched;case"Prompt was misunderstood":return x.tagPromptMisunderstood;case"Didn't like the response style":return x.tagDidntLikeResponseStyle;case"Other":return x.tagOther;case"Good sources":return x.tagGoodSources;case"Answered my question":return x.tagAnsweredMyQuestion;case"I like it":return x.tagLike;case"Out of date":return x.tagOutOfDate;case"Content is wrong":return x.tagContentWrong;case"Relevant":return x.tagRelevant;case"Up to date":return x.tagUpToDate;case"Accurate":return x.tagAccurate}}function P(a,s){let n;try{n=ae(a)}catch{}return n?s.formatMessage(n):a}function E(a,s){return a.map(n=>({label:P(n,s),value:n}))}const x=Q({tagNotRelevant:{id:"T24lap",defaultMessage:"Not relevant"},tagInaccurate:{id:"USOv/g",defaultMessage:"Inaccurate"},tagIncomplete:{id:"Lk26Q8",defaultMessage:"Incomplete"},tagMissingSources:{id:"Fng4pl",defaultMessage:"Missing sources"},tagDontLikeIt:{id:"6eAB3A",defaultMessage:"I don't like it"},tagShouldntHaveSearched:{id:"Y22bKM",defaultMessage:"Shouldn't have searched Google Drive"},tagPromptMisunderstood:{id:"NjmgTt",defaultMessage:"Prompt was misunderstood"},tagDidntLikeResponseStyle:{id:"np+P/8",defaultMessage:"Didn't like the response style"},tagOther:{id:"BK4DWm",defaultMessage:"Other"},tagGoodSources:{id:"SpXc0X",defaultMessage:"Good sources"},tagAnsweredMyQuestion:{id:"jbur49",defaultMessage:"Answered my question"},tagLike:{id:"w9iwLl",defaultMessage:"I like it"},tagOutOfDate:{id:"qzHvzr",defaultMessage:"Out of date"},tagContentWrong:{id:"gGDbwI",defaultMessage:"Content is wrong"},tagRelevant:{id:"G4D31U",defaultMessage:"Relevant"},tagUpToDate:{id:"CsRBPs",defaultMessage:"Up to date"},tagAccurate:{id:"ohD9UA",defaultMessage:"Accurate"}});function re({citationMetadata:a,noBottomBorder:s=!1,sourceFeedback:n,setSourceFeedback:c}){const d=O(),[l,h]=v.useMemo(()=>{if(a.type!=="file")return["",""];const r=a.name.split(".");return r.length>1?[r.slice(0,-1).join("."),r[r.length-1]]:[a.name,""]},[a]),t=v.useMemo(()=>U(R.GDRIVE,h),[h]),u=v.useMemo(()=>{if(a.type==="file"&&a.extra?.cloud_doc_url)try{return new URL(a.extra.cloud_doc_url).hostname}catch{return}},[a]),m=v.useCallback(r=>{c({rating:r,tags:[]})},[c]);return a.type!=="file"?null:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row items-center justify-between py-2",children:[e.jsxs("div",{className:"max-width-full mr-2 flex grow flex-row items-center overflow-hidden",children:[e.jsx(t,{className:"mr-2 flex-shrink-0 flex-grow-0"}),e.jsx("a",{href:a.extra?.cloud_doc_url,className:"text-token-primary flex-grow-1 flex-shrink-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm",target:"_blank",rel:"noreferrer",children:l}),u&&e.jsx("div",{className:"ml-2 text-sm text-token-text-secondary",children:u})]}),e.jsxs("div",{className:"flex shrink-0 flex-row items-center",children:[e.jsx("button",{className:"rounded-md p-1 hover:bg-token-main-surface-secondary",children:n?.rating==="thumbsUp"?e.jsx(L,{className:"icon-md-heavy text-token-text-primary",onClick:()=>m(void 0)}):e.jsx($,{className:"icon-md-heavy text-token-text-secondary",onClick:()=>m("thumbsUp")})}),e.jsx("button",{className:"rounded-md p-1 hover:bg-token-main-surface-secondary",children:n?.rating==="thumbsDown"?e.jsx(G,{className:"icon-md-heavy text-token-text-primary",onClick:()=>m(void 0)}):e.jsx(z,{className:"icon-md-heavy text-token-text-secondary",onClick:()=>m("thumbsDown")})})]})]}),n?.rating&&e.jsx("div",{className:"mb-4 flex flex-row",children:(n.rating==="thumbsDown"?se:ne).map(r=>e.jsx(Y,{className:"mr-2",$selected:n.tags.includes(r),onClick:()=>c({...n,tags:n.tags.includes(r)?n.tags.filter(p=>p!==r):[...n.tags,r]}),children:P(r,d)},r))}),!s&&e.jsx("div",{className:"w-full border-[0.5px] border-token-border-light"})]})}function oe({documentId:a,title:s,externalUrl:n,noBottomBorder:c=!1,shouldHaveBeenIncluded:d,setShouldHaveBeenIncluded:l}){const[h,t]=v.useMemo(()=>{const r=s.split(".");return r.length>1?[r.slice(0,-1).join("."),r[r.length-1]]:[s,""]},[s]),u=v.useMemo(()=>U(R.GDRIVE,t),[t]),m=v.useMemo(()=>{if(n)try{return new URL(n).hostname}catch{return}},[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row items-center justify-between py-2",children:[e.jsxs("div",{className:"max-width-full mr-2 flex grow flex-row items-center overflow-hidden",children:[e.jsx(u,{className:"mr-2 flex-shrink-0 flex-grow-0"}),e.jsx("a",{href:n,className:"text-token-primary flex-grow-1 flex-shrink-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm",target:"_blank",rel:"noreferrer",children:h}),m&&e.jsx("div",{className:"ml-2 text-sm text-token-text-secondary",children:m})]}),e.jsx("div",{className:"flex shrink-0 flex-row items-center px-2",children:e.jsx(B,{checked:d,onChange:r=>l?.(r.currentTarget.checked),id:`should-have-been-included-${a}`})})]}),!c&&e.jsx("div",{className:"w-full border-[0.5px] border-token-border-light"})]})}const le=/^【(\d+)†([^†】]+)(†[^†】]+)?】$/,ie=["File created at","File last modified at"];function ce(a){let s=[];if(!a||typeof a!="object")return null;if(!Object.hasOwn(a,"results"))return null;const n=a.results;if(!Array.isArray(n))return null;const c=n.map(D);for(let l of c){if(l==null)return null;s.push(l)}let d;if(Object.hasOwn(a,"debug_info")){const l=a.debug_info;if(!l||typeof l!="object"||!Object.hasOwn(l,"retrieval_results")||!Array.isArray(l.retrieval_results))return null;const h=l.retrieval_results;d={retrieval_results:[]};for(const t of h){if(!t||typeof t!="object"||typeof t.query!="string"||!Array.isArray(t.results))return null;const u=t.query;let m=t.results.map(D);const r=[];for(const p of m){if(!p)return null;r.push(p)}d.retrieval_results.push({query:u,results:r})}}return{results:s,debug_info:d}}function D(a){const s={};if(!a||typeof a!="object")return null;for(const[n,c]of Object.entries(a))n==="score"&&typeof c=="number"?s.score=c:["document_id","content","title","created_at","updated_at","file_created_at","file_modified_at","document_chunk_id","cloud_doc_url","document_source"].includes(n)&&(c==null||typeof c=="string")&&(s[n]=c??void 0);return s.document_id==null||s.content==null?null:{...s,document_id:s.document_id,content:s.content}}function de(a){const s=[];let n=null,c="",d=a.split(`
`);d.length>0&&d[d.length-1].startsWith("Visible: ")&&(c=d.pop()??"");for(const l of d){const h=l.trim(),t=h.startsWith("# ")?le.exec(h.slice(2)):null;if(t&&t.length>=3){const u=parseInt(t[1],10),m=t[2],r=t[3]?.slice(1)||void 0;n&&s.push(n),n={resultNum:u,title:m,documentId:r,contents:"",metadata:{}}}else if(n)if(n.contents)n.contents+=`
${l}`;else{let u=!1;for(const m of ie){const r=`${m}: `;if(h.startsWith(r)){n.metadata[m]=h.slice(r.length),u=!0;break}}u||(n.contents=l)}}return n&&s.push(n),{visibilityLine:c,chunks:s}}function ue(a){const s=a.content;switch(s.content_type){case y.Text:return s.parts.join();case y.ExecutionOutput:case y.SystemError:case y.Code:case y.SystemMessage:case y.TetherQuote:case y.TetherBrowsingCode:return s.text;case y.TetherBrowsingDisplay:return s.result;case y.UserEditableContext:case y.ModelEditableContext:case y.Error:return null;case y.MultimodalText:return F(s.parts);case y.SystemContent:return s.instructions==null?null:typeof s.instructions=="string"?s.instructions:F(s.instructions)}}function F(a){return a.filter(s=>typeof s=="string").join()}function me(a,s){const{entireConversation:n,messageId:c}=s;if(!n)throw new Error("The extraction function only supports exporting the entire conversation for now.");let d=c;const l=[];for(;d;){const h=a.getNodeByIdOrMessageId(d);if(!h){d=null;break}const t=h.message;if(!t)continue;const u=ue(t)??"",m=Array.isArray(t.metadata?.citations)?t.metadata.citations:[],r=Array.isArray(t.metadata?.attachments)?t.metadata.attachments:[],p={id:String(t.id),author:t.author.role,recipient:t.recipient??"",createTime:t.create_time,updateTime:t.update_time};switch(t.author.role){case S.System:l.push({...p,type:"system",content:t.content,citations:m,attachments:r});break;case S.Assistant:if(t.recipient&&["user","all"].includes(t.recipient)&&u)l.push({...p,type:"visible_text",text:u,citations:m,attachments:r});else if(t.recipient&&t.recipient.includes("file_search")){const b=t.metadata?.command??"";let w=[];try{const _=JSON.parse(u);typeof _=="object"&&_!=null&&Array.isArray(_.queries)&&(w=_.queries.map(M=>String(M)))}catch{}w?l.push({...p,type:"query",command:b,content:t.content,queries:w}):l.push({...p,type:"generic_file_search_tool",command:b,content:t.content})}break;case S.User:(u||r.length>0)&&l.push({...p,type:"visible_text",text:u,citations:m,attachments:r});break;case S.Tool:if(t.author.name?.includes("file_search")&&t.recipient==="all"){const b=t.metadata?.command??"";if(b==="msearch"&&t.content.content_type===y.TetherBrowsingDisplay){const w=t.content.result;if(w){let _=null;const M=t.metadata?.raw_response;if(typeof M=="object"&&M!=null)try{_=ce(M)}catch{}l.push({...p,type:"result",command:b,content:t.content,result:de(w),searchResponse:_})}}else b==="context_stuff"&&t.content.content_type===y.TetherQuote?l.push({...p,type:"fetch",command:b,content:t.content}):l.push({...p,type:"generic_file_search_tool",command:b,content:t.content})}break}d=h.parentId||null}return s.orderRootToLeaf&&l.reverse(),{messages:l}}const fe="considered-source-should-have-been-used";function ye({citations:a,rating:s,onSubmit:n,onCancel:c,messageId:d,conversationId:l,nodeId:h,conversationTree:t}){const u=O(),m=W(),[r,p]=v.useState(""),[b,w]=v.useState(()=>{const o={};for(const f of a)f.metadata?.type==="file"&&(o[f.metadata.id]={rating:void 0,tags:[],url:f.metadata.extra?.cloud_doc_url});return o}),_=t?.getMessage(d),M=v.useMemo(()=>{const o=new Set,f=[];for(const g of _?.metadata?.citations??[])!g.metadata||g.metadata.type!=="file"||o.has(g.metadata.id)||(f.push(g.metadata),o.add(g.metadata.id));for(const g of _?.metadata?.content_references??[])if(g.type==="file_navlist")for(const i of g.items)o.has(i.id)||(f.push({type:"file",id:i.id,name:i.name,source:"my_files",text:i.description,cloud_doc_url:i.cloud_doc_url,extra:{cloud_doc_url:i.cloud_doc_url}}),o.add(i.id));return f},[_]),[I,q]=v.useState(!0),N=v.useMemo(()=>{const o={hasQuery:!1,lastAssistantMessage:null,lastUserMessage:null,referencedSyncedFiles:[]};if(!t||!h||!t.containsNodeOrMessageId(h))return o;const f=me(t,{messageId:h,entireConversation:!0});for(const g of f.messages)switch(g.type){case"fetch":case"generic_file_search_tool":case"system":continue;case"result":{g.result.chunks.forEach(i=>{i.documentId&&i.documentId.startsWith("S")&&!o.referencedSyncedFiles.some(j=>j.fileId===i.documentId)&&!M.some(j=>j.type==="file"&&j.id===i.documentId)&&o.referencedSyncedFiles.push({fileId:i.documentId,title:i.title})});continue}case"query":{o.hasQuery=!0;continue}case"visible_text":{if(g.author===S.User){if(!o.lastUserMessage){const i=t.getConversationTurns(g.id),j=i[i.length-1].messages,C=j[j.length-1];o.lastUserMessage=C}}else if(g.author===S.Assistant&&!o.lastAssistantMessage){const i=t.getConversationTurns(g.id),j=i[i.length-1].messages,C=j[j.length-1];o.lastAssistantMessage=C,o.lastUserMessage=null}continue}}return o},[t,M,h]),V=v.useCallback(async o=>{const f={...o,additionalSources:r,sourcesFeedback:b,consentedToShareConvoLink:I};K.submitCaMessageFeedback({feedback_format:X.ALPHA,message_id:d,conversation_id:l,text:f.textFeedback,rating:s,tags:f.tags,tag_choices:f.tagChoices,additional_sources:f.additionalSources,sources_feedback:f.sourcesFeedback,consented_to_share_convo_link:f.consentedToShareConvoLink}),m.success("Thanks for providing feedback!"),n?.(f)},[r,b,I,d,l,s,m,n]);return e.jsxs(Z,{multiple:!0,allowEmptySubmit:!0,onSubmit:V,onCancel:c,tagOptions:E(s==="thumbsDown"?ee:te,u),modalOnly:!0,modalTitle:e.jsxs("div",{className:"flex items-center gap-2",children:[s==="thumbsDown"?e.jsx(G,{className:"mb-[-6px]"}):e.jsx(L,{className:"mb-[-6px]"}),e.jsx(k,{id:"h5nasL",defaultMessage:"Provide feedback"})]}),children:[M.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mt-6 text-base font-semibold",children:e.jsx(k,{id:"G6+7UX",defaultMessage:"Sources"})}),e.jsx("div",{children:M.map((o,f)=>o?.type!=="file"?null:e.jsx(re,{citationMetadata:o,noBottomBorder:f===M.length-1,sourceFeedback:b[o.id],setSourceFeedback:g=>w(i=>({...i,[o.id]:{...g,url:o.extra?.cloud_doc_url}}))},o.id))})]}),N.referencedSyncedFiles.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-6 flex items-baseline justify-between",children:[e.jsxs("div",{className:"flex-start flex",children:[e.jsx("h3",{className:"text-base font-semibold",children:e.jsx(k,{id:"xvBe/T",defaultMessage:"Considered Sources"})}),e.jsx("p",{className:"ml-2 text-token-text-secondary",children:e.jsx(k,{id:"nX81fN",defaultMessage:"({numSources} sources)",values:{numSources:N.referencedSyncedFiles.length}})})]}),e.jsx("p",{className:"text-sm text-token-text-tertiary",children:e.jsx(k,{id:"0+Uivl",defaultMessage:"Good Source?"})})]}),e.jsx("div",{className:"mt-2 max-h-[200px] overflow-auto",children:N.referencedSyncedFiles.map((o,f)=>{const g=o.fileId.split("--")[1];if(!g)return null;const i=`https://drive.google.com/file/d/${g}`;return e.jsx(oe,{title:o.title,documentId:o.fileId,externalUrl:i,noBottomBorder:f===N.referencedSyncedFiles.length-1,shouldHaveBeenIncluded:!!b[o.fileId],setShouldHaveBeenIncluded:j=>w(C=>{const A={...Object.fromEntries(Object.entries(C).filter(([H])=>H!==o.fileId))};return j&&(A[o.fileId]={tags:[fe],rating:"thumbsUp",url:i}),A})},o.fileId)})})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(k,{id:"1ApJVo",defaultMessage:"Add any additional sources"})}),e.jsx(J,{name:"feedback",className:"mt-2",placeholder:u.formatMessage({id:"CAFeedbackModal.additionalSourcePlaceholder",defaultMessage:"(Optional) Additional sources"}),value:r,onChange:o=>p(o.target.value)})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold",children:e.jsx(k,{id:"9NcQBu",defaultMessage:"Latest Exchange"})}),e.jsx("div",{className:"p-2",children:e.jsxs("div",{className:"mb-4",children:[N.lastUserMessage&&e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-1 pl-4 text-xs text-token-text-secondary",children:e.jsx(k,{id:"QTWrtR",defaultMessage:"Your message"})}),e.jsx("div",{className:"flex justify-start",children:e.jsx("p",{className:"relative max-w-[var(--user-chat-width,70%)] rounded-3xl bg-[#f4f4f4] px-5 py-2.5 dark:bg-token-main-surface-secondary",children:N.lastUserMessage?e.jsx(T,{message:N.lastUserMessage,isCompletionInProgress:!1,clientThreadId:l,isUserTurn:!1,turnIndex:0,isFeedbackEnabled:!1,showEditButton:!1,onEnterEdit:()=>null,onRequestMoreCompletions:()=>null}):null})})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("p",{className:"mb-1 pl-4 text-xs text-token-text-secondary",children:e.jsx(k,{id:"ZCTm4h",defaultMessage:"ChatGPT's response"})}),e.jsx("div",{className:"relative rounded-lg bg-token-main-surface-secondary p-4 text-sm",children:N.lastAssistantMessage?e.jsx(T,{message:N.lastAssistantMessage,isCompletionInProgress:!1,clientThreadId:l,isUserTurn:!1,turnIndex:1,isFeedbackEnabled:!1,showEditButton:!1,onEnterEdit:()=>null,onRequestMoreCompletions:()=>null}):null})]})]})}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mt-6 text-base font-semibold",children:e.jsx(k,{id:"c95uEW",defaultMessage:"Full conversation"})}),e.jsx("p",{className:"mb-2 mt-1 text-sm text-token-text-secondary",children:e.jsx(k,{id:"3E3ZSm",defaultMessage:"If previous portions of this conversation are important to understand your feedback, we encourage you to include it."})}),e.jsx(B,{id:"consented-to-share-entire-convo",label:u.formatMessage({id:"5CC8r8",defaultMessage:"Share Entire Conversation"}),checked:I,onChange:o=>{q(o.currentTarget.checked)}})]})]})]})}export{ye as C,fe as a,P as g};
//# sourceMappingURL=mdcqwpshc46jjeh3.js.map
