import{bx as u,by as g,r as d,em as l,S as h,bp as y,s as T,co as p,ag as f,u as v,j as R,D as b,en as E}from"./elatgogjtv7nqe0m.js";import{cB as r,cC as C,cD as P}from"./htp5iqft2rzvr58f.js";import{P as m,s as A}from"./lknunzf857a9nkhn.js";import{s as H}from"./invgdph6vy3ds9mr.js";import{c as _,l as x,T as M}from"./h1jpzm6tqkxt344d.js";const I="prompt-textarea";function q(){document.getElementById(I)?.focus()}const z={getAndReset:(e,s)=>{const t=u.getItem(g.RestoreMessageAfterOauthRedirect);return u.removeItem(g.RestoreMessageAfterOauthRedirect),!t||t.userId!==e||s!==t.serverThreadId||Date.now()>t.expiresAt?null:t},set:(e,s,t)=>{const a={userId:e,serverThreadId:s,inputText:t,expiresAt:Date.now()+6e4};u.setItem(g.RestoreMessageAfterOauthRedirect,a)}},K=()=>m.useState(m.getPersistedSystemHints).has(r.Search),N=()=>{const e=m.useStore(),s=d.useCallback(()=>e.getPersistedSystemHintTrigger(r.Search),[e]),t=d.useCallback(()=>e.clearPersistedSystemHintTrigger(r.Search),[e]),a=d.useCallback((o,n,i)=>{(o?e.addPersistedSystemHint:e.removePersistedSystemHint)(r.Search,n,i)},[e]);return{getSearchModeTrigger:s,clearSearchModeTrigger:t,setThreadSearchMode:a}},j=(e,s,t)=>e?"file_upload_pending":s?t?"text_content_too_long":void 0:"empty_text_content",D=e=>e.replace(/[\u{E0000}-\u{E007F}]+/gu,""),Q=e=>{const s=D(e.getContentToSend().content);return Math.ceil(s.length/4)},L=1e3;function U(e){return e&&e.length>L&&!l().shift&&h.checkGate("1508312659")}async function k(e,s){const t=P(e),a=t??await R.getConversation(e);return s==null&&t&&(s=!0),t||b.addTiming("chatgpt.web.chatPage.loadExistingConversation"),M.initThreadFromServerData(e,a,s,void 0,s),H(a.conversation_id,a.async_status?{source:E.SERVER,value:a.async_status}:null),a}const V=e=>{const s=y(),{pathname:t}=T(),a=p(),o=_(),n=f();v({queryKey:["conversation",e],queryFn:()=>k(e).catch(i=>{const c=C(t),S=c!=null?A(c):"/";throw s(S),n.danger(`Unable to load conversation ${e}`,{testId:"conversation-fetch-error-toaster"}),i}),enabled:!x(e)&&!a&&!o,refetchOnMount:!0})};export{z as P,I as T,V as a,K as b,Q as e,k as f,j as g,U as i,D as s,q as t,N as u};
//# sourceMappingURL=jxoikmmk4apd7oqs.js.map
