import{dj as p,y as i,u as d,r as a,dK as u,bO as h,bP as c,aw as l,N as f}from"./i5bamk05qmvsi6c3.js";import{C as S}from"./krnw2qv3qlh1upig.js";import{S as x}from"./evz5h9kqynlxpwp5.js";import{T as g}from"./hyvagn7wiyqjw66o.js";import"./mqz1li9meltzje6z.js";import"./b5wtmoh4inpzei0d.js";import"./f8m2hnrr877wbn2c.js";import"./n5sxb9l1jmluwhlc.js";import"./jn8sbvvcvfq89cru.js";import"./mk4ingvn6gaf4ymp.js";import"./ke6ca343lrs30bzf.js";import"./f0xcjowxwlfqmke5.js";import"./kfe2c9wpphxhi1gf.js";import"./basnv9fux9j484go.js";import"./js5qb1fmq9lggf33.js";import"./go8i9ioogzsa6rv8.js";import"./chzj6qbe1fufxjay.js";import"./kmyp4ah1dd5ptfwx.js";import"./j9x5yz86yxlnd515.js";import"./leiuw82gjevvfzoe.js";import"./i5ztl46q405lbqos.js";import"./c3bo1tgi83ukaug4.js";import"./mmrg2ruvit3yy6k8.js";import"./lipvfqcybsnta3w3.js";import"./jh608eser2rz5gpi.js";import"./nbwdriiaqujlrqtu.js";import"./n32lok680xrfiyr3.js";import"./metsqyg8q27iv32z.js";import"./9o3sbnrj80pgev5o.js";import"./byf6ztwo85tskvys.js";import"./fktn9askyugo9zvq.js";import"./k4owery9q8o61suw.js";import"./enzbfz65vpzupghi.js";import"./j70059cdefmxdczh.js";import"./mm9o2zoscihga6da.js";import"./doodretu0y6yq9ie.js";import"./l63ca3cm2p9lee2n.js";import"./e3nlqujb5lj65pa2.js";import"./hn3zskgmb2j8dfsg.js";import"./gs79fvhyldtvksv2.js";import"./8u9bhf0h5fodlczy.js";import"./flc8vwvqnwhe4pes.js";import"./cfedk9ai3jrtaixx.js";import"./olxi3y6ljt445e4b.js";import"./ekkbdnbfcwuznuva.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>u()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=h(c.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(g.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(S,{...e.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function ut(){const{sharedConversationId:e,...t}=p();return i.jsx(C,{...t,sharedConversationId:e})}export{ut as default};
//# sourceMappingURL=liv5qtjeqsfhwdm3.js.map
