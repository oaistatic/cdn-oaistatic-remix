import{fy as m,m as s,s as h,r as i,d3 as p,dn as u,dp as c,y as l,c5 as f,L as S}from"./813n9w6xsthevnqe.js";import{C as x}from"./ov8pku9s4jeg8pzj.js";import{S as g}from"./hnl2rwvhl1o64gx9.js";import"./h2ot8b85cve7rfg1.js";import"./cvslyloecw0ll845.js";import"./ihhv8qauypnyxgtg.js";import"./mh8pkesoon2si38m.js";import"./kkpy24kni3zeqpn6.js";import"./do3noacblfokxtip.js";import"./bhbjv50omvtqhsu2.js";import"./b9ie9l06usk7jwyn.js";import"./ho8zf22m1x99cwrp.js";import"./n8loa51nw7f5uosc.js";import"./dxnvgfyxk4ygc2um.js";import"./job0g5qx42g29f8t.js";import"./mfcm71bp7ug1edw3.js";import"./j2y7n03vxto3jk7e.js";import"./isv5syr1ckkke1uq.js";import"./des3b73qvipbj5uz.js";import"./mpxtqki4m80358y8.js";import"./90cq0kla7tz2is3m.js";function y(r){const e=r.sharedConversationId,{data:t,isError:o}=h({queryKey:[`shared-conversation/${e}`],queryFn:()=>S.getAuthedSharedConversation(e)}),[a]=i.useState(()=>p()),[n,d]=i.useState(!1);return i.useEffect(()=>{o&&(window.location.href=u(c.SHARE_NOT_FOUND))},[o]),i.useEffect(()=>{t&&a&&(l.initThreadFromServerData(a,t,!0,e),d(!0))},[t,e,a]),n&&t?r.continueMode?s.jsx(x,{...r.chatPageProps,clientThreadId:a}):s.jsx(g,{sharedConversationId:a,initiallyHighlightedMessageId:t.highlighted_message_id,continueConversationUrl:t.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):s.jsx("div",{className:"flex h-full items-center justify-center",children:s.jsx(f,{className:"text-token-text-tertiary"})})}function H(){const{sharedConversationId:r,...e}=m();return s.jsx(y,{...e,sharedConversationId:r})}export{H as default};
//# sourceMappingURL=njq7snw8yaqliajp.js.map