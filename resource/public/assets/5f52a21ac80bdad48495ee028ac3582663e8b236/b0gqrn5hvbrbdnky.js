import{a2 as m,j as a,u as h,r as o}from"./lklglvrzltpv3f05.js";import{C as u}from"./baoyeygjfosl813s.js";import{S as c}from"./dvx092euib4tndp6.js";import{bR as l,d6 as p,dm as f,dn as S,v as x,eL as v,ch as C,J as g}from"./muemwvh3ybsggbb1.js";import"./cp734xu9t8fnlezn.js";import"./is0m8tfqgil3c7at.js";import"./n2org3lp2h7qg1d3.js";import"./ergkj5c0fieprx2t.js";import"./gt9bqxxv5tm4mxgb.js";import"./zcwaehho7sns4ks4.js";import"./d3fq140zc3twd2zv.js";import"./784s8wahottjk0mt.js";import"./niv09ftczy3amt99.js";import"./hd9epd94ws110vxy.js";import"./k5u3zqwwbhrcvwt6.js";import"./hrqebt1cy2m73e7b.js";import"./j9qctek7saq0riwf.js";import"./6pnkzr9mb29nz1pz.js";import"./cfomm9pr8dm8j2s1.js";import"./n9yjlaf1m5d5gdel.js";import"./dxs4eruig8mrqj8s.js";import"./pb0uti1hvbxmw4fb.js";function y(t){const r=t.sharedConversationId,{data:e,isError:i}=h({queryKey:[`shared-conversation/${r}`],queryFn:()=>g.getAuthedSharedConversation(r)}),[s]=o.useState(()=>p()),[n,d]=o.useState(!1);return o.useEffect(()=>{i&&(window.location.href=f(S.SHARE_NOT_FOUND))},[i]),o.useEffect(()=>{e&&s&&(x.initThreadFromServerData(s,e,!0,r),d(!0))},[e,r,s]),n&&e?t.continueMode||t.isContinueEnabled?a.jsx(v.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:a.jsx(u,{...t.chatPageProps,clientThreadId:s})}):a.jsx(c,{sharedConversationId:s,initiallyHighlightedMessageId:e.highlighted_message_id,continueConversationUrl:e.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):a.jsx("div",{className:"flex h-full items-center justify-center",children:a.jsx(C,{className:"text-token-text-tertiary"})})}function J(){const{sharedConversationId:t,...r}=m(),{layer:e}=l("2840731323"),i=e.get("is_direct_continue_enabled",!1);return a.jsx(y,{...r,sharedConversationId:t,isContinueEnabled:i})}export{J as default};
//# sourceMappingURL=b0gqrn5hvbrbdnky.js.map