import{Q as T,a4 as x,a3 as y,r as a,K as g,m as j,j as r,eG as R}from"./lyvmbpf7ocwbhkqv.js";import{O as u,Q as s,R as E,V as F,W as l,X as I,v as p,Y as P,Z as S,_ as O}from"./g6lhcxpyem234o4q.js";import{T as Q,C as b}from"./c3yevlrksv5keue9.js";import"./c7ci0rjyj4htmm6k.js";import"./mgblivg7zbb6krjc.js";import"./nf0lyo87fmthbxnm.js";import"./fum5k2u9xxdkha3i.js";import"./g2ca5q7bw0mlea5j.js";import"./fnas3sx9icripad8.js";import"./dw2bwtw7gv4b633n.js";import"./f7hryzhmf6534y0i.js";import"./k2y9y6jp2p2f60qu.js";import"./jfec09n9f8qvv3j3.js";import"./hw10e1ayp99m2hf3.js";import"./20oui79okpigofgd.js";import"./dix6qsz4ydykm8n4.js";import"./kjmjj3btbfkn56qw.js";import"./nwn7mr0xxa9yw8bk.js";const D=()=>(R(),null);function J(){const n=T(),[o]=x(),i=y(),f=u(n.conversationId),d=s(o.get("readonly"),!1),C=s(o.get("isFullScreen"),!1),h=s(o.get("header"),!0),v=s(o.get("hideBottomComposer"),!!d),t=u(n.canmoreId),e=f,c=E();a.useEffect(()=>{F({type:l.Textdoc,textdocId:t})},[t]),I(e,{kind:g.PrimaryAssistant});const m=j();return a.useEffect(()=>(p.retainThread(e),()=>{setTimeout(()=>{m.invalidateQueries({queryKey:["conversation",e]})},0),p.releaseThread(e)}),[e,m]),a.useEffect(()=>{t||i("/")},[t,i]),!t||c?.type!==l.Textdoc?null:r.jsx("div",{className:"h-full w-full overflow-hidden contain-content",children:r.jsx(P,{clientThreadId:e,children:r.jsx(Q,{isEmbedded:!0,isFullScreen:C,hideHeader:!h,hideBottomComposer:v,readonlyReason:d?S.QueryParam:void 0,clientThreadId:e,focusedTextdoc:c,onClose:()=>{O().sendMessage({type:b.Close})}},"textdocContent")})})}export{D as clientLoader,J as default};
//# sourceMappingURL=eqhm2ad6svm72uuy.js.map