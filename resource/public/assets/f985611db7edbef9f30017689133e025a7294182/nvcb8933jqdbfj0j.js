import{dp as s,aU as m,t as r,az as d,r as l,dO as c,dP as h,W as p,bh as u,dy as g}from"./bzvcy3tl84gc3bl9.js";import{C as v}from"./cwrhre4otpzdvuwa.js";import{ai as f}from"./moittmkqym6x2q8u.js";import{S as x}from"./ee6wrsb43tbaajc7.js";import{T as i}from"./c3nvn3bmsyj77vtl.js";import"./o4htpc5iqra16abg.js";import"./fva0y2t3fypb4vx2.js";import"./f064jjm5wr3qzqg4.js";import"./ebzdroxnuj9v1lzs.js";import"./d52s2bg30rsaqcut.js";import"./fpqcccnb4r5a4jeu.js";import"./issp2uwkgcl4tbnk.js";import"./bqbsbuqdn312jedx.js";import"./doew5jjpf8k0sin5.js";import"./n33pr282y4sqqudc.js";import"./ggc3fotsdmfv7wsk.js";import"./d6ri6s3v2tbmwdon.js";import"./g1g2rzxx0onpz04t.js";import"./o5egk1m8ftkmbhvq.js";import"./ia40vr3rpj4bcpvd.js";import"./b2nwax1gutiivxyr.js";import"./oknmb9zdqyp1ori9.js";import"./glkcmrbsq3gptlrq.js";import"./hzt63k1bxbkdxp8j.js";import"./ir3jkhe2jwoyimq2.js";import"./vlpkgw9yxupfg8nn.js";import"./g00pskhyy7e7sbbu.js";import"./c2xdlummyznu9vto.js";import"./mg19kc75oys2btjg.js";import"./iv68epmlitk2zqua.js";import"./n94fyatj9l1ok9rz.js";import"./kroduc4gb8c5iqy3.js";import"./bl9x8m63ktarxok0.js";import"./m8du01a31yeowgq0.js";import"./cgy1fdb35hi1ihxo.js";import"./h1610tucipr8mm1y.js";import"./jez09p2lu4osxgsl.js";import"./jvvalgag579gecy1.js";import"./g7h9pzr79lndjlhq.js";import"./mw4m6rs90oh00ffn.js";import"./k7mulp1vrhhdwp94.js";import"./itle4us4kn8g7e9j.js";import"./hakz5a320bl549yf.js";import"./ouummqcftzlgz5ih.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(y,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(d,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=l.useState(()=>c());return i.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(h.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(v,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return i.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(x,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function y({error:t}){const e=p(),a=u();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(f,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const ht=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:window.location.origin+"/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...g]};function pt(){const{sharedConversationId:t,...e}=s(),{layer:a}=m("2840731323"),n=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:n})}export{pt as default,ht as meta};
//# sourceMappingURL=nvcb8933jqdbfj0j.js.map