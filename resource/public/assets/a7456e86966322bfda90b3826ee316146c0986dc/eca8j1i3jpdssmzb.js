import{Q as r,O as o,r as h,ad as g,cj as l,aM as y,aw as p,Z as f,D as R}from"./gghzs582a65dvm3m.js";import{bS as n,bT as T,bU as v}from"./pd094ob9wacofnvk.js";import{P as i,k as A}from"./ke4wseue2s3xar0a.js";import{s as b}from"./inxv3p5hyolpb7jk.js";import{e as P,i as C,T as w}from"./l69acfj4t0bghaz3.js";const x="prompt-textarea";function L(){var e;(e=document.getElementById(x))==null||e.focus()}const F={getAndReset:(e,s)=>{const t=r.getItem(o.RestoreMessageAfterOauthRedirect);return r.removeItem(o.RestoreMessageAfterOauthRedirect),!t||t.userId!==e||s!==t.serverThreadId||Date.now()>t.expiresAt?null:t},set:(e,s,t)=>{const a={userId:e,serverThreadId:s,inputText:t,expiresAt:Date.now()+6e4};r.setItem(o.RestoreMessageAfterOauthRedirect,a)}},q=()=>i.useState(i.getPersistedSystemHints).has(n.Search),z=()=>{const e=i.useStore();return h.useCallback(s=>{s?e.addPersistedSystemHint(n.Search):e.removePersistedSystemHint(n.Search)},[e])};async function H(e,s){const t=v(e),a=t??await f.getConversation(e);return s==null&&t&&(s=!0),t||R.addTiming("chatgpt.web.chatPage.loadExistingConversation"),w.initThreadFromServerData(e,a,s,void 0,s),b(a.conversation_id,a.async_status??null),a}const _=e=>{const{asPath:s,replace:t}=g(),a=l(),u=P(),d=y();p({queryKey:["conversation",e],queryFn:()=>H(e).catch(m=>{const c=T(s),S=c!=null?A(c):"/";throw t(S,void 0,{shallow:!0}),d.danger(`Unable to load conversation ${e}`),m}),enabled:!C(e)&&!a&&!u,refetchOnMount:!0})};export{F as P,x as T,z as a,q as b,H as f,L as t,_ as u};
//# sourceMappingURL=eca8j1i3jpdssmzb.js.map
