import{f$ as j,aa as w,a9 as P,r as a,at as F,w as I,s as u,m as e,g0 as E}from"./dfm2yceao9m2ilo9.js";import{t as p,a as r,u as S,s as b,C,b as M,g as f,T as B}from"./o7wih49jz3zkdcav.js";import{T as N,C as O}from"./c5tfanxxannd6xxa.js";import{C as h,T as R}from"./mwxmeau2u615h9c2.js";import{C as Q}from"./oj002yr1cv5905d0.js";import"./d59bvqbgrtjhdi6a.js";import"./ccrdffu4uq6bo5k0.js";import"./f6hms767mvgd5wdn.js";import"./j3jvaqmbweoz0uvu.js";import"./huty6yhsfwt7jiw2.js";import"./gb721j76lu290i1c.js";import"./c3pv0g5u6p31bd14.js";import"./c1bxciuqfnnvqhe5.js";import"./fzrn137102spawew.js";import"./zbtw2a6a3r9x82tu.js";import"./crgpn8kp0lsek69a.js";import"./mnx8lkd7acwrn154.js";import"./of3zireqs833qyjf.js";const ee=()=>(E(),null);function te(){const d=j(),[o]=w(),c=P(),x=p(d.conversationId),n=r(o.get("readonly"),!1),v=r(o.get("isFullScreen"),!1),m=r(o.get("header"),!0),T=r(o.get("hideBottomComposer"),!!n),s=p(d.canmoreId),t=x,i=S();a.useEffect(()=>{b({type:C.Textdoc,textdocId:s})},[s]),M(t,{kind:F.PrimaryAssistant});const l=I();if(a.useEffect(()=>(u.retainThread(t),()=>{setTimeout(()=>{l.invalidateQueries({queryKey:["conversation",t]})},0),u.releaseThread(t)}),[t,l]),a.useEffect(()=>{s||c("/")},[s,c]),a.useEffect(()=>{f().sendMessage({type:h.Loaded})},[s]),!s||i?.type!==C.Textdoc)return null;const g=()=>{f().sendMessage({type:h.Close})},y=n&&!m;return e.jsxs("div",{className:"h-full w-full overflow-hidden contain-content",children:[e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}),e.jsx(Q,{clientThreadId:t,children:e.jsx(B,{clientThreadId:t,children:y?e.jsxs(e.Fragment,{children:[e.jsx(N,{textdocId:i.textdocId}),e.jsx(O,{})]}):e.jsx(R,{isEmbedded:!0,isFullScreen:v,hideHeader:!m,hideBottomComposer:T,isReadonlyFromQueryParam:n,clientThreadId:t,focusedTextdoc:i,onClose:g},"textdocContent")})})]})}export{ee as clientLoader,te as default};
//# sourceMappingURL=hxxgjtl0a2v5v5hp.js.map
