import{be as l,x as h,ch as y,al as T,u as p,N as f,D as v,eh as R,r as u,bn as g,bj as d,ei as E,S as b}from"./cenhwbprxai3toix.js";import{q as P,P as m}from"./s26g8cj5crlmzrhm.js";import{cE as A,cF as C,cG as r}from"./bomvf441parvbl6l.js";import{s as H}from"./kp41qb109q7zsu08.js";import{c as _,j as x,T as M}from"./h0w2cfyxquh3a88t.js";async function I(e,s){const t=C(e),a=t??await f.getConversation(e);return s==null&&t&&(s=!0),t||v.addTiming("chatgpt.web.chatPage.loadExistingConversation"),M.initThreadFromServerData(e,a,s,void 0,s),H(a.conversation_id,a.async_status?{source:R.SERVER,value:a.async_status}:null),a}const q=e=>{const s=l(),{pathname:t}=h(),a=y(),o=_(),n=T();p({queryKey:["conversation",e],queryFn:()=>I(e).catch(i=>{const c=A(t),S=c!=null?P(c):"/";throw s(S),n.danger(`Unable to load conversation ${e}`,{testId:"conversation-fetch-error-toaster"}),i}),enabled:!x(e)&&!a&&!o,refetchOnMount:!0})},L="prompt-textarea";function N(){document.getElementById(L)?.focus()}const z={getAndReset:(e,s)=>{const t=g.getItem(d.RestoreMessageAfterOauthRedirect);return g.removeItem(d.RestoreMessageAfterOauthRedirect),!t||t.userId!==e||s!==t.serverThreadId||Date.now()>t.expiresAt?null:t},set:(e,s,t)=>{const a={userId:e,serverThreadId:s,inputText:t,expiresAt:Date.now()+6e4};g.setItem(d.RestoreMessageAfterOauthRedirect,a)}},K=()=>m.useState(m.getPersistedSystemHints).has(r.Search),j=()=>{const e=m.useStore(),s=u.useCallback(()=>e.getPersistedSystemHintTrigger(r.Search),[e]),t=u.useCallback(()=>e.clearPersistedSystemHintTrigger(r.Search),[e]),a=u.useCallback((o,n,i)=>{(o?e.addPersistedSystemHint:e.removePersistedSystemHint)(r.Search,n,i)},[e]);return{getSearchModeTrigger:s,clearSearchModeTrigger:t,setThreadSearchMode:a}},Q=(e,s,t)=>e?"file_upload_pending":s?t?"text_content_too_long":void 0:"empty_text_content",D=e=>e.replace(/[\u{E0000}-\u{E007F}]+/gu,""),U=e=>{const s=D(e.getContentToSend().content);return Math.ceil(s.length/4)},F=1e3;function V(e){return e&&e.length>F&&!E().shift&&b.checkGate("1508312659")}export{z as P,L as T,q as a,K as b,U as e,I as f,Q as g,V as i,D as s,N as t,j as u};
//# sourceMappingURL=bh0hpeydruybhwyo.js.map
