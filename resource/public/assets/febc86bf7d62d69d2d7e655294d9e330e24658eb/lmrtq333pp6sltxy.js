import{fV as v,a4 as y,a3 as x,r as a,am as g,t as j,y as u,m as r,fW as F}from"./813n9w6xsthevnqe.js";import{t as l,a as s,u as E,s as I,C as p,b as P,T as S,g as b}from"./cvslyloecw0ll845.js";import{T as B,C as N}from"./b0ncijgdv55x7cx7.js";import"./h2ot8b85cve7rfg1.js";import"./do3noacblfokxtip.js";import"./n4jwwbpp24n48g2l.js";import"./ho8zf22m1x99cwrp.js";import"./mppcxblfy674yzt1.js";import"./dnxvfdkv3wpqe4lg.js";import"./jx5htwp11i31meja.js";import"./dxnvgfyxk4ygc2um.js";import"./nucaizes6lp9j669.js";import"./fzrn137102spawew.js";import"./l3hejy9jng0abm4k.js";import"./kkpy24kni3zeqpn6.js";import"./jyg5rovtxsh6127n.js";import"./hipcbn5pmczpttr7.js";const U=()=>(F(),null);function X(){const n=v(),[o]=y(),i=x(),f=l(n.conversationId),c=s(o.get("readonly"),!1),C=s(o.get("isFullScreen"),!1),h=s(o.get("header"),!0),T=s(o.get("hideBottomComposer"),!!c),t=l(n.canmoreId),e=f,d=E();a.useEffect(()=>{I({type:p.Textdoc,textdocId:t})},[t]),P(e,{kind:g.PrimaryAssistant});const m=j();return a.useEffect(()=>(u.retainThread(e),()=>{setTimeout(()=>{m.invalidateQueries({queryKey:["conversation",e]})},0),u.releaseThread(e)}),[e,m]),a.useEffect(()=>{t||i("/")},[t,i]),!t||d?.type!==p.Textdoc?null:r.jsx("div",{className:"h-full w-full overflow-hidden contain-content",children:r.jsx(S,{clientThreadId:e,children:r.jsx(B,{isEmbedded:!0,isFullScreen:C,hideHeader:!h,hideBottomComposer:T,isReadonlyFromQueryParam:c,clientThreadId:e,focusedTextdoc:d,onClose:()=>{b().sendMessage({type:N.Close})}},"textdocContent")})})}export{U as clientLoader,X as default};
//# sourceMappingURL=lmrtq333pp6sltxy.js.map