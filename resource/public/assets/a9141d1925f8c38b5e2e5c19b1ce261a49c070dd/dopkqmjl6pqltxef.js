import{ei as i,al as s,j as r,r as d,ca as l,J as c,$ as m,eu as h}from"./e9yuj0ll30e3kmlx.js";import{C as u}from"./fqtexs0gqm3z4gnq.js";import{T as n,D as g,B as v}from"./ihoxwwe79kyl4jef.js";import{S as C}from"./fwszxoeln4ewuclf.js";import"./mhi0wfvgf6n45t1b.js";import"./d7j71pnz17tmnn0d.js";import"./gnc11p2kgf0azhul.js";import"./mry9hax8k6o56kk4.js";import"./ogeaiwpkr6sm1oz0.js";import"./lv3864e7hotyf5b5.js";import"./ejd7qgx2ipuhgs3u.js";import"./i3rqszi2jft06oon.js";import"./hgy4vqlj2re9g125.js";import"./e7j70gn24wjc1x68.js";import"./hctu73tqgw9pngv7.js";import"./fq0451of3h9o57hb.js";import"./hyw91is0wpdvej8o.js";import"./lqckdo21ej0fjrg7.js";import"./gcvnmtdvlfkhgilw.js";import"./cfcok9s8bhhgxbwv.js";import"./os9sz5vbrb9n44ev.js";import"./eu50iahmptl7ah4k.js";function f(e){if(e.serverResponse.type==="error")return r.jsx(S,{error:e.serverResponse.error});const t={...e,conversationData:e.serverResponse.data};return e.continueMode||e.moderationMode||e.isContinueEnabled?r.jsx(x,{...t}):r.jsx(p,{...t})}function x(e){const[t]=d.useState(()=>l());return n.initThreadFromServerData(t,e.conversationData,!0,e.sharedConversationId),e.chatPageProps!=null?r.jsx(g.Provider,{value:{serverSharedThreadId:e.sharedConversationId},children:r.jsx(u,{...e.chatPageProps,clientThreadId:t})}):null}function p(e){return n.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0),r.jsx(C,{sharedConversationId:e.sharedConversationId,initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url,isIndexable:e.conversationData.is_indexable,isBetterMetatagsEnabled:e.conversationData.is_better_metatags_enabled})}function S({error:e}){const t=c(),a=m();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(v,{content:e,primaryCtaText:t.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const W=({data:e})=>{const t=e;if(!t||t.serverResponse.type==="error"||!t.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=t;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:window.location.origin+"/share/"+t.sharedConversationId}]:[{title:"ChatGPT"},...h]};function $(){const{sharedConversationId:e,...t}=i(),{layer:a}=s("2840731323"),o=a.get("is_direct_continue_enabled",!1);return r.jsx(f,{...t,sharedConversationId:e,isContinueEnabled:o})}export{$ as default,W as meta};
//# sourceMappingURL=dopkqmjl6pqltxef.js.map