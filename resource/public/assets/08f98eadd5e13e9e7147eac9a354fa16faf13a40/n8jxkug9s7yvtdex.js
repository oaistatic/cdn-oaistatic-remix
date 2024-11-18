import{J as A,l as W,O as E,r as g,K as me,o as B,j as e,aG as _,aC as d,bA as z,M as Me,ak as $,I as X,Z as V,m as Z,aX as G,bw as K,fO as xe,fP as Y}from"./lj2b9v3ilohzzubf.js";import{a as je,b as ve,u as ye,e as we}from"./icdjdr0x9oz425pc.js";import{b as ie,g as P,d as U,e as H,f as q,a as _e,A as Ce}from"./gmlrh4kocpigi5tm.js";import{b as Se,jF as oe,gk as Ne,jG as Ee,z as x,g$ as ke,ab as ee,ac as y,U as C,d as Ae}from"./m2xe8hrs3fe8d0zo.js";import{a as fe}from"./nuho9o392xhbz80e.js";import{aq as ne,D as ge,b6 as De,bk as Te,bl as le,aM as Ie,L as Fe,aF as Re,s as pe,h as Oe,bw as Pe}from"./np8fo7dxv82gt6zv.js";import{b as Le,g as ce}from"./f8ixwjo0ebo0wqqe.js";import{S as w}from"./ftlpzyflvlw4vun3.js";import"./d1jdyv6e1zm7b7yx.js";import"./n985yc0bql5eas8a.js";import"./utt1v4s8vubsyl62.js";import"./gssfwjcq08w69hmy.js";import"./g2tpotr3lhgcas9c.js";import"./otlsz2b7ph0d84bq.js";import"./c4bxzbp1808foto4.js";function Ge({feedbackMetadata:s,currentWorkspaceId:t,onClose:o,onFeedbackActionTaken:i}){const a=A(),{data:r,refetch:n,isLoading:p}=W({queryKey:["adminGetCaMessageFeedback",t,s.feedback_id],queryFn:()=>E.adminGetCaMessageFeedback({accountId:t,feedbackId:s.feedback_id})}),[u,c]=g.useState(!0),S=me(),M=B({mutationFn:l=>l.operation==="delete"?E.adminDeleteCaMessageFeedback({accountId:l.workspaceId,feedbackId:l.feedbackId}):E.adminApproveCaMessageFeedback({accountId:l.workspaceId,feedbackId:l.feedbackId,withSources:l.withSources}),onSuccess:(l,v)=>{i(),o(),S.success(v.operation==="approve"?a.formatMessage(b.feedbackApproved):a.formatMessage(b.feedbackDeleted))},onError:(l,v)=>{n(),S.warning(v.operation==="approve"?a.formatMessage(b.errorApprovingFeedback):a.formatMessage(b.errorDeletingFeedback))}}),N=g.useMemo(()=>{const l=s.review_status==="unreviewed",v=s.review_status==="approved_without_sources_data_available",D=s.review_status==="unreviewed";let j;switch(s.review_status){case"creating":{j=a.formatMessage(b.actionMessageFeedbackCreating);break}case"approved_with_sources":case"approved_without_sources_data_expired":{j=a.formatMessage(b.actionMessageNoActionsAvailable);break}case"approved_without_sources_data_available":{j=a.formatMessage(b.actionMessageApprovedWithoutSources);break}case"deleted":{j=a.formatMessage(b.actionMessageFeedbackDeleted);break}}const F={workspaceId:t,feedbackId:s.feedback_id,withSources:u};return e.jsxs("div",{className:"sticky bottom-0 flex w-full flex-col gap-2 rounded-lg bg-token-main-surface-secondary p-4",children:[e.jsxs("div",{children:[l&&e.jsx(Se,{id:"ca-feedback-review-inlude-sources",label:a.formatMessage(b.labelIncludeSources),checked:u,onChange:R=>c(R.currentTarget.checked)}),j&&e.jsx("p",{children:j})]}),e.jsxs("div",{className:"flex flex-row gap-2",children:[l&&e.jsx(_,{color:"primary",icon:ne,onClick:()=>M.mutate({...F,operation:"approve"}),loading:M.isPending,children:e.jsx(d,{id:"Zq8YOH",defaultMessage:"Approve Feedback"})}),v&&e.jsx(_,{color:"primary",icon:ne,onClick:()=>M.mutate({...F,operation:"approve",withSources:!0}),loading:M.isPending,children:e.jsx(d,{id:"dOOGEc",defaultMessage:"Re-Approve With Sources"})}),D&&e.jsx(_,{color:"danger-outline",icon:ge,onClick:()=>M.mutate({...F,operation:"delete"}),loading:M.isPending,children:e.jsx(d,{id:"qeIjD9",defaultMessage:"Delete Feedback"})})]})]})},[s.review_status,s.feedback_id,u,M,t,a]);return e.jsx(z,{size:"custom",className:"max-w-lg overflow-y-auto text-base",isOpen:!0,icon:De,onClose:o,showCloseButton:!0,type:"success",title:a.formatMessage(b.modalTitle),children:e.jsx("div",{className:"flex flex-col",children:r&&!p?e.jsxs(e.Fragment,{children:[e.jsx(Be,{feedbackData:r,feedbackMetadata:s}),e.jsx(ie,{className:"my-4"}),e.jsx(Ke,{fileRefs:r.file_references}),e.jsx(ie,{className:"my-4"}),e.jsx(Ue,{retrievalMessages:r.retrieval_messages,userDisplayName:s.submitter_display_name??s.submitter_email}),N]}):e.jsx(fe,{lines:8})})})}function Be({feedbackMetadata:s,feedbackData:t}){const o=A(),i=s.submitter_display_name&&s.submitter_email?o.formatMessage(b.userDisplayName,{displayName:s.submitter_display_name,email:s.submitter_email}):s.submitter_id,a=g.useMemo(()=>t.sources_feedback?Object.entries(t.sources_feedback).map(([r,n])=>{if(!n.rating&&!(n.tags&&n.tags.length>0))return null;const p=t.file_references.find(c=>c.document_id===r)?.title,u=n.tags&&n.tags.length===1&&n.tags[0]===Le;return e.jsxs("li",{className:"flex flex-col break-words p-1 text-sm",children:[e.jsxs("div",{className:"mb-1 flex flex-row items-center gap-2",children:[n.rating==="thumbsUp"?e.jsx(Te,{className:"icon-sm"}):n.rating==="thumbsDown"?e.jsx(le,{className:"icon-sm"}):null,e.jsx("a",{href:n.url??void 0,className:"text-sm font-semibold",children:p??n.url??r})]}),e.jsx("div",{className:"flex flex-row flex-wrap gap-1",children:u?e.jsx("span",{className:"italic",children:e.jsx(d,{id:"yNGc6H",defaultMessage:"This source should have been used."})}):n.tags?.map(c=>e.jsx("div",{className:"rounded-lg border border-token-border-light px-3 py-1 text-xs text-token-text-secondary",children:ce(c,o)},c))})]},r)}).filter(r=>!!r):[],[t.file_references,t.sources_feedback,o]);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-2",children:e.jsx(he,{reviewStatus:s.review_status})}),e.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[t.rating==="thumbsUp"?e.jsx(Ie,{className:"icon-xl m-2"}):e.jsx(le,{className:"icon-xl m-2"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{children:i}),e.jsx("p",{className:"text-xs text-token-text-secondary",children:new Date(s.submitted_at).toLocaleString()})]})]}),t.tags&&t.tags.length>0&&e.jsx("div",{className:"mb-2 flex flex-wrap gap-1",children:t.tags?.map(r=>e.jsx("div",{className:"rounded-lg border border-token-border-light px-3 py-1 text-sm text-token-text-secondary",children:ce(r,o)},r))}),e.jsxs("div",{className:"mb-2",children:[e.jsx(P,{className:"mb-1",children:e.jsx(d,{id:"VrPx6x",defaultMessage:"Feedback"})}),e.jsx("p",{className:"break-words rounded border p-2 text-sm",children:t.text?t.text:e.jsx("span",{className:"italic",children:e.jsx(d,{id:"pEEJ/8",defaultMessage:"No written feedback was provided."})})})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(P,{className:"mb-1",children:e.jsx(d,{id:"LUg6Vl",defaultMessage:"Additional Sources"})}),e.jsx("p",{className:"break-words rounded border p-2 text-sm",children:t.additional_sources?t.additional_sources:e.jsx("span",{className:"italic",children:e.jsx(d,{id:"u24Zo5",defaultMessage:"No additional sources were provided."})})})]}),a.length>0&&e.jsxs("div",{className:"mb-2",children:[e.jsx(P,{className:"mb-1",children:e.jsx(d,{id:"lNSdNZ",defaultMessage:"Sources Feedback"})}),e.jsx("ul",{className:"flex flex-col gap-1",children:a})]})]})}const Ve=["citation","context_stuff","search_result"];function de(s){return Array.from(s.map(t=>Ee({type:"file",id:t.document_id,cloud_doc_url:t.external_url??void 0,name:t.title??"",source:"google_drive",extra:{cloud_doc_url:t.external_url??void 0}})).filter(t=>!!t))}function Ke({fileRefs:s}){const[t,o]=g.useMemo(()=>{const i=new Map,a=new Map;return s.forEach(r=>{Ve.includes(r.reference_source)&&r.document_id.startsWith("S")&&r.external_url&&!i.has(r.document_id)?i.set(r.document_id,r):r.reference_source==="user_feedback"&&r.external_url&&!a.has(r.document_id)&&a.set(r.document_id,r)}),[de(Array.from(i.values())),de(Array.from(a.values()))]},[s]);return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx(P,{className:"mb-2",children:e.jsx(d,{id:"FB4YIA",defaultMessage:"Sources In Conversation"})}),t.length>0?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-2 text-xs text-token-text-secondary",children:e.jsx(d,{id:"L0nY9M",defaultMessage:"These sources were considered or cited in the conversation. Snapshots of these sources will be included with the feedback if you choose to approve the feedback with sources."})}),e.jsx("div",{className:"flex flex-col gap-1",children:t.map(i=>e.jsx(oe,{compact:!0,citationMetadata:i},i.url))})]}):e.jsx("p",{className:"text-xs text-token-text-secondary",children:e.jsx(d,{id:"QnY3vg",defaultMessage:"No synced sources were considered or cited in the conversation, however there may be other sources present such as user uploaded files. If you choose to approve this feedback with sources, only the snippets of those files that ChatGPT looked at will be shared with this feedback."})})]}),o.length>0&&e.jsxs("div",{className:"mt-8",children:[e.jsx(P,{className:"mb-2",children:e.jsx(d,{id:"SCwQnr",defaultMessage:"Sources From Feedback"})}),e.jsx("p",{className:"mb-2 text-xs text-token-text-secondary",children:e.jsx(d,{id:"Rr+4KZ",defaultMessage:"The feedback submitter mentioned these documents in their feedback. Snapshots of these documents will be included with the feedback if you choose to approve the feedback with sources and the user had access to them."})}),e.jsx("div",{className:"flex flex-col gap-1",children:o.map(i=>e.jsx(oe,{compact:!0,citationMetadata:i},i.url))})]})]})}function Ue({retrievalMessages:s,userDisplayName:t}){return e.jsxs("div",{className:"mb-8",children:[e.jsx(P,{className:"mb-4",children:e.jsx(d,{id:"pOb00r",defaultMessage:"Conversation"})}),s.map(o=>e.jsx(He,{message:o,userDisplayName:t},o.id))]})}function He({message:s,userDisplayName:t}){const o=A();switch(s.type){case"visible_text":{if(s.author==="unknown")return null;const i={nodeId:s.id,parentId:"",canRetry:!1,message:{id:s.id,author:{role:s.author},metadata:{citations:s.citations,attachments:s.attachments,content_references:s.citations.map(a=>a.metadata?.type!=="file"?null:{start_idx:a.start_ix,end_idx:a.end_ix,matched_text:s.text.slice(a.start_ix,a.end_ix),type:"file",source:a.metadata.source,name:a.metadata.name,id:a.metadata.id,cloud_doc_url:a.metadata.cloud_doc_url??a.metadata.extra?.cloud_doc_url}).filter(a=>!!a)},content:{content_type:Me.Text,parts:[s.text]}}};return e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:$("mb-1 text-xs text-token-text-secondary",s.author==="user"?"pr-4 text-end":"text-start"),children:s.author==="assistant"?o.formatMessage(b.authorChatGPT):s.author==="user"?t??o.formatMessage(b.authorUser):s.author}),e.jsx(Ne,{message:i,isCompletionInProgress:!1,clientThreadId:"--fake-thread-id--",isUserTurn:s.author==="user",turnIndex:0,isFeedbackEnabled:!1,showEditButton:!1,onEnterEdit:()=>null,onRequestMoreCompletions:()=>null})]})}case"query":return e.jsx("div",{className:"my-2 text-xs text-token-text-primary",children:e.jsx(d,{id:"bJ9BXd",defaultMessage:"ChatGPT performed a search."})});case"result":case"fetch":case"generic_file_search_tool":case"system":case void 0:return null}}function he({reviewStatus:s,onClick:t,disabled:o}){let i;const a=A();switch(s){case"unreviewed":i=a.formatMessage(b.reviewStatusUnreviewed);break;case"creating":i=a.formatMessage(b.reviewStatusCreating);break;case"approved_with_sources":i=a.formatMessage(b.reviewStatusApprovedWithSouces);break;case"approved_without_sources_data_available":case"approved_without_sources_data_expired":i=a.formatMessage(b.reviewStatusApprovedWithoutSources);break;case"deleted":i=a.formatMessage(b.reviewStatusDeleted);break}return e.jsx("button",{className:$("rounded-2xl px-3 py-1 text-sm text-token-text-primary",s==="unreviewed"&&"bg-[#e2c541] dark:bg-[#EA8444]"),onClick:t,disabled:!!o||!t,children:i})}const b=X({modalTitle:{id:"zufVun",defaultMessage:"Review Feedback"},feedbackApproved:{id:"DS+YGt",defaultMessage:"Feedback approved."},feedbackDeleted:{id:"Rz/tmW",defaultMessage:"Feedback deleted."},errorApprovingFeedback:{id:"UVsTlf",defaultMessage:"Encountered an error approving this feedback. Please refresh and try again."},errorDeletingFeedback:{id:"cI6gt9",defaultMessage:"Encountered an error deleting this feedback. Please refresh and try again."},actionMessageFeedbackCreating:{id:"urBely",defaultMessage:"You can't take actions on this feedback yet because it's still being processed. Once it's done processing, it will be available for review."},actionMessageNoActionsAvailable:{id:"JGNhjT",defaultMessage:"This feedback has been reviewed."},actionMessageApprovedWithoutSources:{id:"68PAfK",defaultMessage:"This feedback has already been approved without sources, but you can re-approve it with sources."},actionMessageFeedbackDeleted:{id:"Kel9lE",defaultMessage:"This feedback has been deleted."},labelIncludeSources:{id:"8UlZM0",defaultMessage:"Include Sources"},authorChatGPT:{id:"7Fo5p2",defaultMessage:"ChatGPT"},authorUser:{id:"TpT0hg",defaultMessage:"User"},userDisplayName:{id:"3OKTcX",defaultMessage:"{displayName} ({email})"},reviewStatusUnreviewed:{id:"FEHKZj",defaultMessage:"Needs Review"},reviewStatusCreating:{id:"7lVVU7",defaultMessage:"Preparing for Review"},reviewStatusApprovedWithSouces:{id:"kpZ41g",defaultMessage:"Approved With Sources"},reviewStatusApprovedWithoutSources:{id:"Y0lc+p",defaultMessage:"Approved Without Sources"},reviewStatusDeleted:{id:"gKoYhr",defaultMessage:"Deleted"}});function qe({currentWorkspaceId:s}){const{data:t,refetch:o,isLoading:i}=W({queryKey:["adminListCaMessageFeedback",s],queryFn:()=>E.adminListCaMessageFeedback({accountId:s})}),[a,r]=g.useState();return e.jsxs(U,{children:[e.jsx(H,{children:e.jsx(d,{id:"sK+hfD",defaultMessage:"Alpha Feedback"})}),e.jsx(q,{className:"text-[var(--Primary-Gray-600,_#565869)]",children:e.jsx(d,{id:"39A5sH",defaultMessage:"Review feedback your workspace users have submitted for the alpha. Feedback is not shared with OpenAI until you approve it."})}),t&&!i?e.jsx(We,{feedbackList:t.feedback,setSelectedFeedback:r}):e.jsx(fe,{lines:12,widthVariance:0}),a&&e.jsx(Ge,{feedbackMetadata:a,currentWorkspaceId:s,onClose:()=>r(void 0),onFeedbackActionTaken:()=>o()})]})}function ue(s){switch(s){case"unreviewed":return 1;case"creating":return 2;case"approved_with_sources":return 3;case"approved_without_sources_data_available":return 4;case"approved_without_sources_data_expired":return 5;case"deleted":return 6}}function We({feedbackList:s,setSelectedFeedback:t}){const o=g.useMemo(()=>[...s].sort((i,a)=>{const r=ue(i.review_status)-ue(a.review_status);return r!==0?r:i.submitted_at>a.submitted_at?-1:i.submitted_at<a.submitted_at?1:0}),[s]);return e.jsxs(x.Root,{size:"normal",children:[e.jsxs(x.Header,{children:[e.jsx(x.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(d,{id:"KcGNl2",defaultMessage:"Review Status"})}),e.jsx(x.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:e.jsx(d,{id:"joba0B",defaultMessage:"Submitted By"})}),e.jsx(x.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:e.jsx(d,{id:"yl1cCR",defaultMessage:"Submitted At"})})]}),e.jsx(x.Body,{children:o.length===0?e.jsx(x.Row,{children:e.jsx(x.Cell,{children:e.jsx(d,{id:"AYwCJD",defaultMessage:"No feedback yet."})})}):o.map(i=>{const a=i.review_status==="deleted",r=a?void 0:()=>t(i);return e.jsxs(x.Row,{className:$("my-2",a?"bg-token-main-surface-tertiary":"hover:cursor-pointer hover:bg-token-main-surface-secondary"),onClick:r,children:[e.jsx(x.Cell,{className:"truncate",children:e.jsx(he,{reviewStatus:i.review_status,onClick:r,disabled:a})}),e.jsx(x.Cell,{className:"truncate",children:e.jsx("span",{children:i.submitter_display_name&&i.submitter_email?e.jsx(d,{id:"3OKTcX",defaultMessage:"{displayName} ({email})",values:{displayName:i.submitter_display_name,email:i.submitter_email}}):e.jsx("code",{children:i.submitter_id.split("__")[0]})})}),e.jsx(x.Cell,{className:"truncate",children:e.jsx("span",{children:new Date(i.submitted_at).toLocaleString()})})]},i.feedback_id)})})]})}const se={NAME_KEYWORD:"Name keyword",NAME_SUBSTRING:"Name substring"},T={USERS:"User",GROUPS:"Group",SHARED_DRIVE:"Shared drive",FILE_ID:"File ID",...se},Ye={ALL:"All exclusion types",...se},te={ALL:"All exclusion types",...T};var ae=(s=>(s.EXCLUDE="exclude",s.INCLUDE="include",s))(ae||{});const ze=[["sensitive_object_name_keywords",T.NAME_KEYWORD],["sensitive_object_name_substrings",T.NAME_SUBSTRING],["sensitive_users",T.USERS],["sensitive_groups",T.GROUPS],["sensitive_shared_drive_ids",T.SHARED_DRIVE],["blocked_object_ids",T.FILE_ID]],be={},re={};ze.forEach(([s,t])=>{be[s]=t,re[t]=s});function Xe(s){const t=[];for(const[o,i]of Object.entries(s))for(const[a,r]of Object.entries(i)){const n=be[a];n&&Array.isArray(r)&&r.forEach((p,u)=>{t.push({id:`${o}_${a}_${u}`,lastModifiedTime:i.last_modified_time,name:p,exclusionType:n,parentId:o,parentType:i.type})})}return t}function Ze(s){return Object.values(s)[0]?.last_modified_time}function Qe(s){return Object.keys(s)[0]}function Je(s){return!!Object.values(s)[0]?.is_oauth}function $e(s){return Object.values(s)[0]?.default_shared_drive_exclusion_selection??null}const J=10;function es({rowData:s,filterInputValue:t,filterType:o,workspaceId:i}){const[a,r]=g.useState(0);g.useEffect(()=>{r(0)},[t,o]);const n=s.filter(c=>c.name.toLowerCase().includes(t.toLowerCase())&&(o===te.ALL||c.exclusionType.toLowerCase()===o.toLowerCase())),p=n.slice(a*J,(a+1)*J),u=Math.ceil(n.length/J);return e.jsxs("div",{className:"mb-6",children:[e.jsxs(x.Root,{fixed:!0,size:"normal",children:[e.jsxs(x.Header,{children:[e.jsx(x.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(d,{...I.name})}),e.jsx(x.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:e.jsx(d,{...I.type})}),e.jsx(x.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(x.Body,{children:[p.map(c=>e.jsx(ss,{config:c,workspaceId:i},c.id)),p.length===0&&e.jsx(x.Row,{children:e.jsx(x.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(d,{...I.noResults})})})})]})]}),u>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(ke,{currentPage:a,onChangeIndex:r,length:u})})]})}function ss({config:s,workspaceId:t}){const o=A(),i=me(),a=V(),r=Z(),n=B({mutationFn:u=>{const c={store_id:u.storeId,operations:u.operations,last_modified_time:u.lastModifiedTime};return E.updateKnowledgeStoreExclusionConfig(c,u.accountId)},onSuccess:()=>{r.invalidateQueries({queryKey:["listExclusionConfigs",t,a?.id]}),i.success(o.formatMessage(I.deleteConfigSuccessMessage),{duration:3})},onError:()=>{i.danger(o.formatMessage(I.deleteConfigGenericErrorMessage),{duration:3})}}),p=()=>{if(!s.parentId){i.danger(o.formatMessage(I.deleteConfigGenericErrorMessage),{duration:3});return}if(!a){i.danger(o.formatMessage(I.deleteConfigGenericErrorMessage),{duration:3});return}const u={action:xe.REMOVE,field:re[s.exclusionType],value:s.name};n.mutate({storeId:s.parentId,operations:[u],lastModifiedTime:s.lastModifiedTime,accountId:a.id})};return e.jsxs(x.Row,{children:[e.jsx(x.Cell,{className:"whitespace-normal break-all",children:e.jsx("span",{children:s.name})}),e.jsx(x.Cell,{className:"whitespace-nowrap",children:e.jsx("span",{children:s.exclusionType})}),e.jsx(x.Cell,{children:e.jsx(ts,{onDelete:p})})]})}function ts({onDelete:s}){return e.jsxs(G.Root,{children:[e.jsx(G.Trigger,{children:e.jsx(Fe,{className:"icon-sm cursor-pointer"})}),e.jsx(G.Portal,{children:e.jsx(G.Content,{children:e.jsx(G.Item,{className:"cursor-pointer",onClick:s,children:e.jsx(d,{...I.deleteConfig})})})})]})}function as(){return e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(K,{})})}const I=X({name:{id:"B+5Xa5",defaultMessage:"Name"},type:{id:"DY07PN",defaultMessage:"Type"},deleteConfig:{id:"fB8e41",defaultMessage:"Delete config"},noResults:{id:"x1Ejc3",defaultMessage:"No results"},deleteConfigSuccessMessage:{id:"d60LPO",defaultMessage:"Exclusion deleted successfully."},deleteConfigGenericErrorMessage:{id:"pOww+E",defaultMessage:"Error deleting exclusion."}});function rs(){const s=ee(y.AddServiceAccountKey),t=A(),o=V(),i=Z(),[a,r]=g.useState(""),[n,p]=g.useState(null),[u,c]=g.useState(null),S=B({mutationFn:async l=>{const D={secret:await is(l.keyFile),admin_email:l.email,secret_type:Y.GOOGLE_DRIVE_DWD};return E.createSecretForWorkspace(D,l.accountId)},onSuccess:()=>{i.invalidateQueries({queryKey:["secretExistsForWorkspace",o?.id]}),r(""),p(null),C.closeModal(y.AddServiceAccountKey)},onError:(l,v)=>{c(h.creationModalGenericErrorMessage),E.deleteSecretForWorkspace(Y.GOOGLE_DRIVE_DWD,v.accountId)}}),M=()=>{if(!a||!n){c(h.creationModalValueErrorMessage);return}if(!o){c(h.creationModalGenericErrorMessage);return}c(null),S.mutate({email:a,keyFile:n,accountId:o.id})},N=l=>{l.target.files&&l.target.files[0]&&p(l.target.files[0])};return e.jsx(z,{size:"custom",className:"max-w-lg overflow-y-auto text-base",isOpen:s,onClose:()=>{C.closeModal(y.AddServiceAccountKey),c(null),r(""),p(null)},showCloseButton:!0,type:"success",title:t.formatMessage(h.serviceAccountModalTitle),description:"",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"pb-2 text-base",children:t.formatMessage(h.emailLabel)}),e.jsx("input",{type:"email",value:a,onChange:l=>r(l.target.value),placeholder:t.formatMessage(h.emailPlaceholder),className:"mb-4 rounded-lg border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-base placeholder:text-token-text-tertiary"}),e.jsx("label",{className:"pb-2 text-base",children:t.formatMessage(h.keyFileLabel)}),e.jsx("input",{type:"file",accept:".json",onChange:N,className:"mb-4 rounded-lg border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-base"}),n&&e.jsx("p",{className:"text-sm text-token-text-secondary",children:t.formatMessage(h.selectedFile,{fileName:n.name})}),u&&e.jsx("p",{className:"mt-4 text-sm text-red-500",children:t.formatMessage(u)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(_,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{C.closeModal(y.AddServiceAccountKey),c(null),r(""),p(null)},children:t.formatMessage(h.creationModalCancelButton)}),e.jsx(_,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:M,disabled:S.status==="pending",children:S.status==="pending"?e.jsx(K,{}):t.formatMessage(h.creationModalCreateButton)})]})]})})}function is(s){return new Promise((t,o)=>{const i=new FileReader;i.onload=a=>{a.target&&typeof a.target.result=="string"?t(a.target.result):o(new Error("Error reading file."))},i.onerror=()=>{o(new Error("Error reading the file."))},i.readAsText(s)})}function os(){const s=ee(y.DeleteServiceAccountKey),t=A(),o=V(),i=Z(),[a,r]=g.useState(null),n=B({mutationFn:()=>o?E.deleteSecretForWorkspace(Y.GOOGLE_DRIVE_DWD,o.id):Promise.reject(new Error("No current account")),onSuccess:()=>{i.invalidateQueries({queryKey:["secretExistsForWorkspace",o?.id]}),C.closeModal(y.DeleteServiceAccountKey)},onError:()=>{r(h.genericErrorMessage)}});return e.jsxs(z,{size:"custom",type:"success",className:"max-w-lg overflow-y-auto text-base",isOpen:s,onClose:()=>{C.closeModal(y.DeleteServiceAccountKey),r(null)},showCloseButton:!0,title:t.formatMessage(h.deleteModalTitle),children:[e.jsx("p",{children:t.formatMessage(h.deleteModalDescription)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[a&&e.jsx("p",{className:"mt-4 text-base text-red-500",children:t.formatMessage(a)}),e.jsx(_,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{C.closeModal(y.DeleteServiceAccountKey)},children:t.formatMessage(h.deleteModalCancelButton)}),e.jsx(_,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:()=>n.mutate(),disabled:n.status==="pending",children:n.status==="pending"?e.jsx(K,{}):t.formatMessage(h.deleteModalDeleteButton)})]})]})}const ns=({isSecretLoading:s,isSecretError:t,secretExistData:o})=>{const i=A();return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:i.formatMessage(h.googleDriveDWDSectionHeader)}),s?e.jsx(K,{}):t?e.jsx("p",{className:"text-red-500",children:i.formatMessage(h.genericErrorMessage)}):o&&o.has_secret?e.jsxs("div",{className:"flex items-center",children:[e.jsx(Re,{className:"mr-2 text-green-500"}),e.jsx(_,{className:"max-w-[100px] rounded-lg border text-base",color:"secondary",icon:ge,onClick:()=>{C.openModal(y.DeleteServiceAccountKey)},children:i.formatMessage(h.deleteServiceAccountKeyButton)})]}):e.jsx(_,{className:"max-w-[192px] rounded-lg border text-base",color:"primary",icon:pe,onClick:()=>{C.openModal(y.AddServiceAccountKey)},children:i.formatMessage(h.addServiceAccountKeyButton)})]})},h=X({serviceAccountModalTitle:{id:"ri0otc",defaultMessage:"Service account config"},googleDriveDWDSectionHeader:{id:"pIbDsS",defaultMessage:"Google Drive"},addServiceAccountKeyButton:{id:"dEHoaF",defaultMessage:"Service account"},deleteServiceAccountKeyButton:{id:"n4njrg",defaultMessage:"Delete"},deleteModalTitle:{id:"nhz40y",defaultMessage:"Delete service account"},deleteModalDescription:{id:"cWxpDi",defaultMessage:"Are you sure you want to delete the service account?"},deleteModalCancelButton:{id:"ZXiXY2",defaultMessage:"Cancel"},deleteModalDeleteButton:{id:"6i1l4W",defaultMessage:"Delete"},emailLabel:{id:"O9fBv1",defaultMessage:"Admin email"},emailPlaceholder:{id:"Y32reR",defaultMessage:"Enter admin email"},keyFileLabel:{id:"U2yeNU",defaultMessage:"Service account key"},selectedFile:{id:"8/rZrp",defaultMessage:"Selected file: {fileName}"},creationModalCreateButton:{id:"bCzjac",defaultMessage:"Create"},creationModalCancelButton:{id:"kUO70c",defaultMessage:"Cancel"},creationModalGenericErrorMessage:{id:"l2SCVt",defaultMessage:"Error when saving config."},genericErrorMessage:{id:"nKlawS",defaultMessage:"Error"},creationModalValueErrorMessage:{id:"B1fdKK",defaultMessage:"Please enter all required fields."}});function ls({currentWorkspaceId:s}){const t=A(),o=V(),[i,a]=g.useState(""),{data:r,isLoading:n}=W({queryKey:["listExclusionConfigs",s,o?.id],queryFn:()=>o?E.listExclusionConfigs({workspaceId:s,accountId:o?.id}):Promise.reject(new Error("No current account")),enabled:!!o}),{data:p,isLoading:u,isError:c}=W({queryKey:["secretExistsForWorkspace",o?.id],queryFn:()=>o?E.secretExistForWorkspace(Y.GOOGLE_DRIVE_DWD,o.id):Promise.reject(new Error("No current account")),enabled:!!o}),S=r?Xe(r):[],M=r?Qe(r):null,N=r?Ze(r):null,l=r?Je(r):!1,v=r?$e(r):null,[D,j]=g.useState(te.ALL),[F,R]=g.useState(""),L=g.useCallback(Ae(O=>{R(O)},250),[]);return e.jsxs(e.Fragment,{children:[e.jsx(je,{title:t.formatMessage(m.title)}),e.jsx(ve,{children:e.jsxs(_e,{className:"mt-6 gap-6",children:[!l&&e.jsxs(U,{children:[e.jsx(H,{children:t.formatMessage(m.serviceAccountSectionHeader)}),e.jsx(q,{className:"text-[var(--Primary-Gray-600,_#565869)]",children:t.formatMessage(m.serviceAccountConfigSectionDescription)}),e.jsx(Ce,{children:e.jsx(ns,{isSecretLoading:u,isSecretError:c,secretExistData:p})})]}),!l&&v&&e.jsxs(U,{children:[e.jsx(H,{children:t.formatMessage(m.sharedDriveSectionHeader)}),e.jsx(q,{className:"text-token-text-secondary",children:v===ae.INCLUDE?t.formatMessage(m.sharedDriveInclusionDefaultSubtitle):t.formatMessage(m.sharedDriveExclusionDefaultSubtitle)})]}),e.jsxs(U,{children:[e.jsx(H,{children:t.formatMessage(m.exclusionsSectionHeader)}),e.jsx(q,{className:"text-[var(--Primary-Gray-600,_#565869)]",children:t.formatMessage(m.exclusionsSectionDescription)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(Oe,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:i,onChange:O=>{a(O.target.value),L(O.target.value)},placeholder:t.formatMessage(m.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 text-base placeholder:text-token-text-tertiary"})]}),e.jsx(cs,{filterType:D,setFilterType:j,isOAuth:l})]}),e.jsx(_,{className:"max-w-[192px] rounded-lg border text-base",color:"primary",icon:pe,onClick:()=>{C.openModal(y.CreateExclusion)},children:t.formatMessage(m.createExclusionButton)})]}),n?e.jsx(as,{}):e.jsx(es,{rowData:S,filterInputValue:F,filterType:D,workspaceId:s}),e.jsx(qe,{currentWorkspaceId:s})]})}),e.jsx(ds,{currentWorkspaceId:s,parentId:M,lastModifiedTime:N,isOAuth:l,defaultSharedDrivePolicy:v}),e.jsx(rs,{}),e.jsx(os,{})]})}function cs({filterType:s,setFilterType:t,isOAuth:o}){return e.jsx("div",{className:"max-w-[208px]",children:e.jsxs(w.Root,{value:s,onValueChange:i=>t(i),disabled:!1,children:[e.jsxs(w.Trigger,{className:"rounded-lg border border-token-border-light py-5 text-base",children:[e.jsx(w.Value,{}),e.jsx(w.Icon,{})]}),e.jsx(w.Portal,{children:e.jsx(w.Content,{children:Object.entries(o?Ye:te).map(([i,a])=>e.jsx(w.Item,{value:a,className:"text-base",children:a},i))})})]})})}function ds({currentWorkspaceId:s,parentId:t,lastModifiedTime:o,isOAuth:i,defaultSharedDrivePolicy:a}){const r=A(),n=V(),p=Z(),u=ee(y.CreateExclusion),[c,S]=g.useState(""),[M,N]=g.useState([]),[l,v]=g.useState(""),[D,j]=g.useState(null),F=f=>{f.key==="Enter"||f.key===","?(f.preventDefault(),l.trim()&&(N([...M,l.trim()]),v(""))):f.key==="Backspace"&&!l&&R(M.length-1)},R=f=>{N(M.filter((k,Q)=>Q!==f))},L=B({mutationFn:f=>{const k={store_id:f.storeId,operations:f.operations,last_modified_time:f.lastModifiedTime};return E.updateKnowledgeStoreExclusionConfig(k,f.accountId)},onSuccess:()=>{p.invalidateQueries({queryKey:["listExclusionConfigs",s,n?.id]}),N([]),S(""),v(""),C.closeModal(y.CreateExclusion)},onError:()=>{j(m.creationModalGenericErrorMessage)}}),O=()=>{const f=[...M];if(l.trim()&&f.push(l.trim()),!t){j(m.creationModalGenericErrorMessage);return}if(!n){j(m.creationModalGenericErrorMessage);return}if(!c){j(m.creationModalValueErrorMessage);return}if(f.length===0){j(m.creationModalValueErrorMessage);return}j(null);const k=f.map(Q=>({action:xe.ADD,field:re[c],value:Q}));L.mutate({storeId:t,operations:k,lastModifiedTime:o,accountId:n.id})};return e.jsx(z,{size:"custom",className:"max-w-lg overflow-y-auto text-base",isOpen:u,onClose:()=>{C.closeModal(y.CreateExclusion),j(null),N([])},showCloseButton:!0,type:"success",title:r.formatMessage(m.creationModalTitle),description:"",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"inline-flex items-center pb-2 text-base",children:r.formatMessage(m.creationModalExclusionType)}),e.jsxs(w.Root,{value:c,onValueChange:f=>S(f),disabled:!1,children:[e.jsxs(w.Trigger,{className:"justify-between rounded-lg border border-token-border-light py-5 text-base",children:[e.jsx(w.Value,{placeholder:"Select exclusion type"}),e.jsx(w.Icon,{})]}),e.jsx(w.Portal,{children:e.jsx(w.Content,{children:Object.entries(i?se:T).map(([f,k])=>e.jsx(w.Item,{value:k,className:"text-base",children:k},f))})})]}),e.jsx("p",{className:"inline-flex items-center pb-2 pt-6 text-base",children:r.formatMessage(m.creationModalExclusionValue)}),e.jsxs("div",{className:"flex flex-wrap items-center rounded-lg border border-token-border-light bg-token-main-surface-primary text-base",children:[M.map((f,k)=>e.jsxs("div",{className:"mx-1.5 my-2 flex min-w-0 cursor-pointer items-center rounded-full bg-gray-200 px-3.5 py-1 font-medium text-black",children:[e.jsx("span",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:f}),e.jsx(_,{onClick:()=>{R(k)},color:"ghost",className:"ml-2 min-h-0 p-0 text-gray-600 hover:text-red-700",icon:Pe})]},k)),e.jsx("input",{type:"text",value:l,onChange:f=>v(f.target.value),onKeyDown:F,placeholder:r.formatMessage(m.creationModalValuePlaceholder),className:"w-full min-w-0 flex-1 overflow-x-auto border-none bg-transparent text-base placeholder:text-token-text-tertiary focus:border-transparent focus:outline-none focus:ring-0"})]}),e.jsx("p",{className:"mt-1 inline-flex items-center text-sm text-token-text-secondary",children:!i&&c===T.SHARED_DRIVE&&a?a===ae.INCLUDE?r.formatMessage(m.creationModalSeparateByCommasAndDefaultIncludeDrives):r.formatMessage(m.creationModalSeparateByCommasAndDefaultExcludeDrives):r.formatMessage(m.creationModalSeparateByCommas)}),D&&e.jsx("p",{className:"mt-4 text-sm text-red-500",children:r.formatMessage(D)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(_,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{C.closeModal(y.CreateExclusion),N([]),j(null)},children:r.formatMessage(m.creationModalCancelButton)}),e.jsx(_,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:O,disabled:L.status==="pending",children:L.status==="pending"?e.jsx(K,{}):r.formatMessage(m.creationModalCreateButton)})]})]})})}const m=X({title:{id:"j2s2hr",defaultMessage:"Google Drive Connection"},search:{id:"NxiatU",defaultMessage:"Search"},sharedDriveSectionHeader:{id:"MoVjjM",defaultMessage:"Shared Drives"},sharedDriveInclusionDefaultSubtitle:{id:"QpN++w",defaultMessage:"Shared drives are included by default. You can set overrides to exclude specific shared drives in the exclusions section."},sharedDriveExclusionDefaultSubtitle:{id:"Id1y2X",defaultMessage:"Shared drives are excluded by default. You can set overrides to include specific shared drives in the exclusions section."},serviceAccountSectionHeader:{id:"KZiaoi",defaultMessage:"Service account config"},serviceAccountConfigSectionDescription:{id:"MaxpKa",defaultMessage:"Manage your service account config for connectors."},exclusionsSectionHeader:{id:"D6JZP8",defaultMessage:"Exclusions"},exclusionsSectionDescription:{id:"UNjawu",defaultMessage:"Manage which files will be excluded from being indexed by ChatGPT. Changes made to exclusions may take time to reflect."},createExclusionButton:{id:"nKYBN7",defaultMessage:"Create exclusion"},creationModalTitle:{id:"ET+VpS",defaultMessage:"New exclusion"},creationModalExclusionType:{id:"I+xnyV",defaultMessage:"Type"},creationModalValuePlaceholder:{id:"hua2tW",defaultMessage:"String"},creationModalExclusionValue:{id:"aAr8X0",defaultMessage:"Value"},creationModalSeparateByCommas:{id:"HQDOHA",defaultMessage:"Separate values by commas"},creationModalSeparateByCommasAndDefaultIncludeDrives:{id:"qXuyO7",defaultMessage:"Separate values by commas. Any shared drive IDs added here will be excluded from indexing."},creationModalSeparateByCommasAndDefaultExcludeDrives:{id:"PQPdqt",defaultMessage:"Separate values by commas. Any shared drive IDs added here will be indexed."},creationModalCreateButton:{id:"GsyTJk",defaultMessage:"Create"},creationModalCancelButton:{id:"kUO70c",defaultMessage:"Cancel"},creationModalGenericErrorMessage:{id:"wUcmIJ",defaultMessage:"Error creating exclusion."},creationModalValueErrorMessage:{id:"+2RviF",defaultMessage:"Please enter all required fields."}});function Ss(){const s=ye();return we(),e.jsx(ls,{...s})}export{Ss as default};
//# sourceMappingURL=n8jxkug9s7yvtdex.js.map
