import{E as v,a0 as x,$ as y,r,C as g,m as j,j as a,eF as F}from"./e9yuj0ll30e3kmlx.js";import{t as u,a as s,u as E,s as I,C as l,b as P,T as p,c as S,g as b}from"./ihoxwwe79kyl4jef.js";import{T as B,C as N}from"./b0crfrak97mklwk7.js";import"./mhi0wfvgf6n45t1b.js";import"./ogeaiwpkr6sm1oz0.js";import"./ckzt1z3opco67c10.js";import"./fq0451of3h9o57hb.js";import"./hlvgw9oyg882c45o.js";import"./e3hecsyr6ickw1bt.js";import"./z8pqu5q32w1jenu1.js";import"./i3rqszi2jft06oon.js";import"./mn3d10go6s4oyp47.js";import"./fzrn137102spawew.js";import"./gf188augm5itvpd3.js";import"./mry9hax8k6o56kk4.js";import"./h6q6kaq8zg1ta889.js";import"./ej09qo1vmp718kgv.js";const V=()=>(F(),null);function W(){const n=v(),[o]=x(),i=y(),f=u(n.conversationId),c=s(o.get("readonly"),!1),C=s(o.get("isFullScreen"),!1),h=s(o.get("header"),!0),T=s(o.get("hideBottomComposer"),!!c),t=u(n.canmoreId),e=f,d=E();r.useEffect(()=>{I({type:l.Textdoc,textdocId:t})},[t]),P(e,{kind:g.PrimaryAssistant});const m=j();return r.useEffect(()=>(p.retainThread(e),()=>{setTimeout(()=>{m.invalidateQueries({queryKey:["conversation",e]})},0),p.releaseThread(e)}),[e,m]),r.useEffect(()=>{t||i("/")},[t,i]),!t||d?.type!==l.Textdoc?null:a.jsx("div",{className:"h-full w-full overflow-hidden contain-content",children:a.jsx(S,{clientThreadId:e,children:a.jsx(B,{isEmbedded:!0,isFullScreen:C,hideHeader:!h,hideBottomComposer:T,isReadonlyFromQueryParam:c,clientThreadId:e,focusedTextdoc:d,onClose:()=>{b().sendMessage({type:N.Close})}},"textdocContent")})})}export{V as clientLoader,W as default};
//# sourceMappingURL=oesw8w2llj6se4gu.js.map
