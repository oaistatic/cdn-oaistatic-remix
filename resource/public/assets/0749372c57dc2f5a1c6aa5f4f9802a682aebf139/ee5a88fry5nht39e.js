import{a2 as i,j as a,r as s,c as d,e as l}from"./lklglvrzltpv3f05.js";import{C as c}from"./myjrgpm0gs628bnj.js";import{B as m}from"./ntw4l0fkgqdiln85.js";import{bS as h,d4 as u,r as n,eZ as g,fu as v}from"./ltrr4mhf6s4m7a72.js";import{S as f}from"./dn8e9t7llrgx6uoe.js";import"./kqs0d9q6go77jiiq.js";import"./gruuolgwd1up46vp.js";import"./hzzlkn5ny7a6v61q.js";import"./jebvbwlsp750x4d4.js";import"./m9aklkujr89s52e5.js";import"./p8eg3euad9gvin3k.js";import"./emuaj61pmpol8zzg.js";import"./m5cd4p680vhusvsg.js";import"./dz00r7qlzgek59uu.js";import"./bwsmtgh34vk8igjb.js";import"./vyarha3ckzwu9yf1.js";import"./lnovrxcizvfadwta.js";import"./n7xaphlc0h5m9xjk.js";import"./lweu58rz02vpanvm.js";import"./hags0lzrfk4kk50a.js";import"./i9ntb1zjwbcuz2uj.js";import"./c84k0nbcah46qpzd.js";import"./dvitv0c7q5c06c87.js";import"./peo8ghqw4ce4uq0z.js";import"./bxwx37b57lp5xuaa.js";function C(e){if(e.serverResponse.type==="error")return a.jsx(S,{error:e.serverResponse.error});const t={...e,conversationData:e.serverResponse.data};return e.continueMode||e.moderationMode||e.isContinueEnabled?a.jsx(x,{...t}):a.jsx(p,{...t})}function x(e){const[t]=s.useState(()=>u());return n.initThreadFromServerData(t,e.conversationData,!0,e.sharedConversationId),e.chatPageProps!=null?a.jsx(g.Provider,{value:{serverSharedThreadId:e.sharedConversationId},children:a.jsx(c,{...e.chatPageProps,clientThreadId:t})}):null}function p(e){return n.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0),a.jsx(f,{sharedConversationId:e.sharedConversationId,initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url,isIndexable:e.conversationData.is_indexable,isBetterMetatagsEnabled:e.conversationData.is_better_metatags_enabled})}function S({error:e}){const t=d(),r=l();return a.jsx("div",{className:"flex h-full w-full justify-center",children:a.jsx("div",{className:"max-w-lg p-6",children:a.jsx(m,{content:e,primaryCtaText:t.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>r("/")})})})}const J=({data:e})=>{const t=e;if(!t||t.serverResponse.type==="error"||!t.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:r}=t;return r.isBetterMetatagsEnabled?[{title:"ChatGPT - "+r.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:r.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+r.title},{property:"og:description",content:r.description},{property:"og:image",content:r.imageSrc},{property:"og:url",content:window.location.origin+"/share/"+t.sharedConversationId}]:[{title:"ChatGPT"},...v]};function K(){const{sharedConversationId:e,...t}=i(),{layer:r}=h("2840731323"),o=r.get("is_direct_continue_enabled",!1);return a.jsx(C,{...t,sharedConversationId:e,isContinueEnabled:o})}export{K as default,J as meta};
//# sourceMappingURL=ee5a88fry5nht39e.js.map