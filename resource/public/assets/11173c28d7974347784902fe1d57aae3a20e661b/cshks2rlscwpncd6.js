import{a4 as m,j as a,u as h,r as o}from"./nqo5y2f0dorhrqsr.js";import{C as u}from"./ty18ymk2wf2zvd35.js";import{S as c}from"./k6el7ghyym9hl80v.js";import{bQ as l,d5 as p,dl as f,dm as S,v as x,eL as g,cg as v,J as C}from"./dh0yl0m9q337gmci.js";import"./ktiwgucld5a8s55m.js";import"./dgcxf4c1lo6y3h3a.js";import"./nb34aa8izknzna97.js";import"./l697z2ouob9b6hw7.js";import"./odhzv2q19wc7ynyt.js";import"./k56enwh74zn4hbwt.js";import"./mfdhaorj0sghs4gl.js";import"./fy8orb1z72ox92eg.js";import"./cnv95wiq9am77uyo.js";import"./gtbc1g1q4ztw05rv.js";import"./dvl2tfqalthh42cv.js";import"./cb0x1wlgm93n2hpu.js";import"./buun9i8g5c97ea0e.js";import"./ezyyguzloavludkz.js";import"./gxhifror9unq5n3g.js";import"./lrt1lzalv2692ks0.js";import"./lln33rcqgeiu1vmy.js";function y(t){const r=t.sharedConversationId,{data:e,isError:i}=h({queryKey:[`shared-conversation/${r}`],queryFn:()=>C.getAuthedSharedConversation(r)}),[s]=o.useState(()=>p()),[n,d]=o.useState(!1);return o.useEffect(()=>{i&&(window.location.href=f(S.SHARE_NOT_FOUND))},[i]),o.useEffect(()=>{e&&s&&(x.initThreadFromServerData(s,e,!0,r),d(!0))},[e,r,s]),n&&e?t.continueMode||t.isContinueEnabled?a.jsx(g.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:a.jsx(u,{...t.chatPageProps,clientThreadId:s})}):a.jsx(c,{sharedConversationId:s,initiallyHighlightedMessageId:e.highlighted_message_id,continueConversationUrl:e.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):a.jsx("div",{className:"flex h-full items-center justify-center",children:a.jsx(v,{className:"text-token-text-tertiary"})})}function U(){const{sharedConversationId:t,...r}=m(),{layer:e}=l("2840731323"),i=e.get("is_direct_continue_enabled",!1);return a.jsx(y,{...r,sharedConversationId:t,isContinueEnabled:i})}export{U as default};
//# sourceMappingURL=cshks2rlscwpncd6.js.map