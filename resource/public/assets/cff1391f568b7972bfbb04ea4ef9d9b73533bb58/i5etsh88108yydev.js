import{e7 as s,bt as d,a6 as r,b7 as l,r as c,c4 as m,aj as h,Z as u,ej as v}from"./l3hptpare9m1mqfv.js";import{C as g}from"./hzukjesj77zyhnwb.js";import{v as o,a1 as p,a2 as x}from"./c7sgref9mfwezh7s.js";import{S as C}from"./d9n4xm5ugo0r0n1x.js";import"./km9gro7xi1t4gs2t.js";import"./n190yr24ltcex025.js";import"./ds7myuf7nkx8b20x.js";import"./dpmpp4vjdzk6xdj4.js";import"./bkgevi7dwlpkqxzf.js";import"./ev3ca23urw2rf3h9.js";import"./i4jzjalmx9h3noc6.js";import"./mh08vel4sd7gl5e4.js";import"./o8pwa9djmd3woe3v.js";import"./dl7ede68b0iso9ei.js";import"./oi1chbp7ana2d10k.js";import"./nht10jce1juzcd0e.js";import"./f6pcsdsvt7lhgd9d.js";import"./he20qiwgsftwhtr2.js";import"./gef2pkbm9t7u9jaf.js";import"./ma543wl1emaceytt.js";import"./j6n14by4mv1mn19j.js";import"./mzxkdr9pas3hg58p.js";import"./ighnjpo7t7h4h60s.js";import"./fg34biyrlirgihlj.js";import"./lqjdha68cqgoq5qr.js";import"./0odnh5vt1ryeof4u.js";import"./41u5zi6mjeqe26vw.js";import"./kwbgkipp06htw7ha.js";import"./fs92qmfhnb4hknpa.js";function f(e){if(e.serverResponse.type==="error")return r.jsx(j,{error:e.serverResponse.error});const t={...e,conversationData:e.serverResponse.data};return e.continueMode||e.isContinueEnabled?r.jsx(S,{...t}):e.moderationMode?r.jsx(l,{children:r.jsx(n,{...t})}):r.jsx(n,{...t})}function S(e){const[t]=c.useState(()=>m());return o.initThreadFromServerData(t,e.conversationData,!0,e.sharedConversationId),e.chatPageProps!=null?r.jsx(p.Provider,{value:{serverSharedThreadId:e.sharedConversationId},children:r.jsx(g,{...e.chatPageProps,clientThreadId:t})}):null}function n(e){return o.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0),r.jsx(C,{sharedConversationId:e.sharedConversationId,initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url,isIndexable:e.conversationData.is_indexable,isBetterMetatagsEnabled:e.conversationData.is_better_metatags_enabled})}function j({error:e}){const t=h(),a=u();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(x,{content:e,primaryCtaText:t.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const X=({data:e})=>{const t=e;if(!t||t.serverResponse.type==="error"||!t.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=t;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:window.location.origin+"/share/"+t.sharedConversationId}]:[{title:"ChatGPT"},...v]};function Y(){const{sharedConversationId:e,...t}=s(),{layer:a}=d("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(f,{...t,sharedConversationId:e,isContinueEnabled:i})}export{Y as default,X as meta};
//# sourceMappingURL=i5etsh88108yydev.js.map
