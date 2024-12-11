import{R as u,gk as o,D as l,c as S,g as L,bh as $}from"./dh0yl0m9q337gmci.js";import{r as a}from"./nqo5y2f0dorhrqsr.js";import{k as _}from"./ktiwgucld5a8s55m.js";var g=(e=>(e.SCALLION="scallion",e.SCALLION_RC="scallion-rc",e))(g||{});const D=async({queryKey:e})=>{const[t,n]=e;if(n.length<2)return[];const r=new URLSearchParams({query_fragment:n});return u.get(`${o}/suggestions?${r.toString()}`).then(s=>s.suggestions).catch(()=>[])};async function q({threadId:e,sessionId:t,query:n,agentSettingsOverrides:r,metadata:s,extraTurnData:E}){const w=m(r),d=e?`${o}/threads/${e}/turns?blocking=false`:`${o}/turns?nonce=${t}`;r.emulated_location&&(s={...s,...r.emulated_location});const h=new PerformanceObserver(C=>{const f=C.getEntriesByName(d,"resource");if(f.length){const c=f[0];if(c.connectEnd){const x=c.connectEnd-c.fetchStart;l.addAction("sonic.web.home.new_turn_connection_time",{durationMs:x})}h.disconnect()}});return h.observe({type:"resource"}),u.post(d,{...w,turn:{user_query:n,now:r.emulated_date?new Date(r.emulated_date).toISOString():void 0,...E},user_metadata:s})}async function I(){return u.delete(`${o}/threads`)}function m(e){return{settings_overrides:{search_results:{search_engines:e.use_labrador?{bing:{}}:{bing:{ranking_model:null,rrf_alpha:1,rrf_input_threshold:0},labrador:null}},model_response:{enable_multimodal:e.show_image_to_model,completion_model:e.completion_model&&e.completion_model!=="production"?{model:e.completion_model,clip_model:"@mmapi",direct_connection_urls:[]}:{}}},base_config:e.base_config??g.SCALLION,eval_preset:e.eval_preset}}async function N({threadId:e,threadUserId:t,routePrefix:n}){let r=o;n&&(r=r+n);const s=new URL(`${r}/threads/${e}/with_turns`);return t&&s.searchParams.append("thread_user_id",t),await u.get(s.toString())}async function O(e){const t=new FormData;return t.append("feedback",JSON.stringify({thread_id:e.threadId,turn_index:e.turnIndex,rating:e.rating,search_query:e.searchQuery,text:e.text,model_instructions:e.modelInstructions,tags:e.tags,user_email:e.userEmail})),e.screenshot&&t.append("file",new File([e.screenshot],"screenshot.jpeg",{type:"image/jpeg"})),u.post(`${o}/feedback/turns`,t)}async function P(e,t){return u.post(`${o}/threads/${e}/turns/${t}/images_try_hard`)}async function z(e){const t=new FormData;return e.screenshot&&t.append("file",new File([e.screenshot],"screenshot.jpeg",{type:"image/jpeg"})),t.append("feedback",JSON.stringify({thread_id:e.threadId,url:e.url,title:e.title,snippet:e.snippet,rating:e.rating,search_query:e.searchQuery,text:e.text,tags:e.tags,user_email:e.userEmail,turn_index:e.turnIndex})),u.post(`${o}/feedback/links`,t)}function H(e){const t=m(e.agentSettingsOverrides);u.post(`${o}/prefetch`,{...t,turn:{user_query:e.query},user_metadata:e.metadata})}function U(){return u.get(`${o}/healthcheck`)}function J(){return u.post(`${o}/waitlist`)}const Q=e=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("g",{id:"icon / robot-sad"},a.createElement("path",{id:"Rectangle 49961",d:"M4.9585 9.91667C4.9585 8.35186 6.22702 7.08333 7.79183 7.08333H26.2085C27.7733 7.08333 29.0418 8.35186 29.0418 9.91667V21.25C29.0418 24.3796 26.5048 26.9167 23.3752 26.9167H10.6252C7.49555 26.9167 4.9585 24.3796 4.9585 21.25V9.91667Z",stroke:"currentColor",strokeWidth:2.83333}),a.createElement("circle",{id:"Ellipse 32520",cx:12.0415,cy:14.1667,r:2.125,fill:"currentColor"}),a.createElement("circle",{id:"Ellipse 32521",cx:21.9585,cy:14.1667,r:2.125,fill:"currentColor"}),a.createElement("path",{id:"Vector 2380",d:"M17 7.08333V4.25",stroke:"currentColor",strokeWidth:2.83333,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector 2381",d:"M4.95817 14.1667V14.1667C4.17577 14.1667 3.5415 14.8009 3.5415 15.5833V17C3.5415 17.7824 4.17577 18.4167 4.95817 18.4167V18.4167",stroke:"currentColor",strokeWidth:2.83333,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector 2382",d:"M29.0418 14.1667V14.1667C29.8242 14.1667 30.4585 14.8009 30.4585 15.5833V17C30.4585 17.7824 29.8242 18.4167 29.0418 18.4167V18.4167",stroke:"currentColor",strokeWidth:2.83333,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector 2386",d:"M19.8335 21.158C17.8696 20.3362 16.1307 20.3362 14.1668 21.158",stroke:"currentColor",strokeWidth:2.83333,strokeLinecap:"round",strokeLinejoin:"round"})));function T(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,s]of e)if(!Object.is(s,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}class Z extends Error{constructor(t){super(t),this.name="WebsocketConnectError"}}class k extends Error{constructor(t){super(t),this.name="TurnError"}}class G extends Error{constructor(t){super(t),this.name="TurnDeltaMessageError"}}function V(e){return e?e.model_response?.text!=null&&e.model_response.text.length>0:!1}function p(e){return e.execution_status==="fatal_system_error"}function M(e){return e.execution_status==="in_progress"||e.execution_status===null}function K(e){return i(t=>t.thread?.turns.map(n=>e.reduce((r,s)=>(r[s]=n[s],r),{}))??[],(t,n)=>{if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(!T(t[r],n[r]))return!1;return!0})}function X(){return i(e=>$(e.thread?.turns.flatMap(t=>t.model_response?.citations)),T)}const y={thread:null,error:void 0},i=S(L(()=>({...y}))),R=_(()=>{l.addError(new k("got updateTurn with no current thread"))},1e3),b=_(e=>{l.addError(new k("turn not found"),{turnIndex:e})},1e3),Y={threadId:e=>e.thread?.id??null,turns:e=>e.thread?.turns??[],turnCitations:e=>t=>t.thread?.turns[e].model_response?.citations??[],hasResponse:e=>V(e.thread?.turns[0]),firstTurn:e=>e.thread!=null?e.thread.turns[0]:void 0,lastTurn:e=>e.thread!=null?e.thread.turns[e.thread.turns.length-1]:void 0,numTurns:e=>e.thread?.turns.length??0,isLastTurnStreaming:e=>{const t=e.thread!=null?e.thread.turns[e.thread.turns.length-1]:void 0;return t!=null&&M(t)},hasModelResponseText:e=>e.thread?.turns[0]?.model_response?.text!=null,hasFirstTurnError:e=>{const t=e.thread?.turns[0];return!!t&&p(t)},hasTurnError:e=>e.thread?.turns.some(p)??!1,threadError:e=>e.error,__deprecated_sportsWidget:e=>e.thread?.turns[0]?.sports_widget??null},A={appendTurn(e,t,n){i.setState(r=>{r.thread?.id!==e&&(n?.(e),r.thread={id:e,turns:[]}),r.thread.turns.push(t)})},updateTurn(e,t){i.setState(n=>{const r=n.thread;if(!r){R();return}const s=r.turns[e];if(!s){b(e);return}t(s)})},clearThread(){i.setState(()=>({...y}))},setError(e){i.setState(t=>{t.error=e})},setThread(e,t){i.setState(n=>{n.thread={id:e,turns:t}})}};export{g as B,Q as S,A as T,Z as W,i as a,Y as b,X as c,p as d,I as e,J as f,N as g,U as h,q as i,k as j,G as k,D as l,O as m,z as n,M as o,P as p,H as r,K as u};