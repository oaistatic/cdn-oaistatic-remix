import{e2 as h,e3 as lt,e4 as fe,e5 as G,e6 as st,e7 as ct,e8 as b,e9 as s,ea as c,eb as ve,ec as ge,ed as it,ee as ut,ef as dt,eg as mt,eh as ft,ei as vt,ej as ht,ek as gt,el as pt,em as bt,en as De,eo as Tt,ep as St,eq as Xe,er as xt,es as Ct,et as Ve,eu as yt,ev as kt,ew as wt,ex as Et,ey as Nt,ez as _t,d as Bt,br as Ht,I as It}from"./icnxn2xqcp3w18gd.js";import{r as a,at as y,aw as Mt,Y as Pt,j as u,aG as ee,bL as jt,aK as Rt}from"./gqmy69lfum1xn3in.js";import{b as Ot}from"./i4z8naqcr3t3djqa.js";import{m as Ge}from"./gvt29ccgnn9ozjnb.js";function Ue(l,t){var d=Ct(l);if(Ve){var g=Ve(l);t&&(g=yt(g).call(g,function(x){return Xe(l,x).enumerable})),d.push.apply(d,g)}return d}function ze(l){for(var t=1;t<arguments.length;t++){var d=arguments[t]!=null?arguments[t]:{};if(t%2){var g;ge(g=Ue(Object(d),!0)).call(g,function(p){bt(l,p,d[p])})}else if(De)Tt(l,De(d));else{var x;ge(x=Ue(Object(d))).call(x,function(p){St(l,p,Xe(d,p))})}}return l}var Lt=function(){return 1/0},Ke=17,Ft="bottom",_="top",We=1,$t=34,Ye={};function Dt(l,t){return l(),xt(l,t)}function qe(l){var t=l.mode,d=l.target,g=d.offsetHeight,x=d.scrollHeight,p=d.scrollTop,k=x-p-g<We,r=p<We,B=t===_?r:k,j=t!==_?r:k;return{atBottom:k,atEnd:B,atStart:j,atTop:r}}function te(l,t){return l===(t===_?0:"100%")}var pe=function(t){var d=t.checkInterval,g=t.children,x=t.debounce,p=t.debug,k=t.initialScrollBehavior,r=t.mode,B=t.nonce,j=t.scroller,i=a.useMemo(function(){return lt("<ScrollToBottom>",{force:p})},[p]);r=r===_?_:Ft;var w=a.useRef(0),H=a.useRef(k),M=fe(r===_?0:"100%"),U=G(M,3),E=U[0],z=U[1],I=U[2],Q=fe(null),K=G(Q,3),S=K[0],Z=K[1],C=K[2],W=a.useRef(0),v=a.useRef(0),T=a.useRef(0),ne=a.useState(!0),Te=G(ne,2),Se=Te[0],xe=Te[1],Qe=a.useState(!0),Ce=G(Qe,2),ye=Ce[0],ke=Ce[1],Ze=a.useState(!0),we=G(Ze,2),Ee=we[0],Ne=we[1],Ae=a.useState(!1),_e=G(Ae,2),Be=_e[0],He=_e[1],et=fe(!0),le=G(et,3),se=le[0],R=le[1],O=le[2],A=a.useRef([]),Ie=a.useCallback(function(e){var n=C.current;return A.current.push(e),n&&e({scrollTop:n.scrollTop}),function(){var o=A.current,m=st(o).call(o,e);~m&&ct(o).call(o,m,1)}},[A,C]),ce=a.useCallback(function(){var e=I.current;i(function(){var n;return b(n=["%cSpineTo%c: %conEnd%c is fired."]).call(n,s(c("magenta")),s(c("orange")),[{animateTo:e}])}),w.current=ve(),te(e,r)||R(!1),z(null)},[I,i,w,r,z,R]),L=a.useCallback(function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.behavior,m=C.current;if(typeof e!="number"&&e!=="100%")return console.warn('react-scroll-to-bottom: Arguments passed to scrollTo() must be either number or "100%".');i(function(){var f;return[b(f=["%cscrollTo%c: Will scroll to %c".concat(typeof e=="number"?e+"px":e.replace(/%/g,"%%"),"%c")]).call(f,s(c("lime","")),s(c("purple"))),{behavior:o,nextAnimateTo:e,target:m}]}),o==="auto"?(ce(),m&&(m.scrollTop=e==="100%"?m.scrollHeight-m.offsetHeight:e)):(o!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollTo". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),z(e)),te(e,r)&&(i(function(){var f;return[b(f=["%cscrollTo%c: Scrolling to end, will set sticky to %ctrue%c."]).call(f,s(c("lime","")),s(c("purple"))),[{mode:r,nextAnimateTo:e}]]}),R(!0))},[i,ce,r,z,R,C]),Y=a.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.behavior;i(function(){var o;return b(o=["%cscrollToBottom%c: Called"]).call(o,s(c("yellow","")))}),n!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToBottom". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),L("100%",{behavior:n||"smooth"})},[i,L]),q=a.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.behavior;i(function(){var o;return b(o=["%cscrollToTop%c: Called"]).call(o,s(c("yellow","")))}),n!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToTop". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),L(0,{behavior:n||"smooth"})},[i,L]),Me=a.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.behavior;i(function(){var m;return b(m=["%cscrollToEnd%c: Called"]).call(m,s(c("yellow","")))}),n!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToEnd". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var o={behavior:n||"smooth"};r===_?q(o):Y(o)},[i,r,Y,q]),Pe=a.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.behavior;i(function(){var m;return b(m=["%cscrollToStart%c: Called"]).call(m,s(c("yellow","")))}),n!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToStart". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var o={behavior:n||"smooth"};r===_?Y(o):q(o)},[i,r,Y,q]),re=a.useCallback(function(){var e=C.current;if(e){if(H.current==="auto"){i(function(){var D;return b(D=["%ctarget changed%c: Initial scroll"]).call(D,s(c("blue")))}),e.scrollTop=r===_?0:e.scrollHeight-e.offsetHeight,H.current=!1;return}var n=W.current,o=e.offsetHeight,m=e.scrollHeight,f=e.scrollTop,P=r===_?0:Math.max(0,m-o-f),$=Math.max(0,n-f),oe=j({maxValue:P,minValue:$,offsetHeight:o,scrollHeight:m,scrollTop:f}),F=Math.max(0,Math.min(P,oe)),N;r===_||F!==P?N=f+F:N="100%",i(function(){var D,X,J;return[b(D=[b(X=b(J="%cscrollToSticky%c: Will animate from %c".concat(n,"px%c to %c")).call(J,typeof N=="number"?N+"px":N.replace(/%/g,"%%"),"%c (%c")).call(X,(N==="100%"?P:N)+n,"px%c)")]).call(D,s(c("orange")),s(c("purple")),s(c("purple")),s(c("purple"))),{animateFrom:n,maxValue:P,minValue:$,nextAnimateTo:N,nextValue:F,offsetHeight:o,rawNextValue:oe,scrollHeight:m,scrollTop:f}]}),L(N,{behavior:"smooth"})}},[W,i,r,j,L,C]),tt=a.useCallback(function(e){var n,o=e.timeStampLow,m=I.current,f=C.current,P=m!==null;if(!(o<=w.current||!f)){var $=qe({mode:r,target:f}),oe=$.atBottom,F=$.atEnd,N=$.atStart,D=$.atTop;xe(oe),ke(F),He(N),Ne(D);var X=f.offsetHeight,J=f.scrollHeight,Re=v.current,Oe=T.current,de=X!==Re,me=J!==Oe;if(de&&(v.current=X),me&&(T.current=J),!de&&!me){var ae=P&&te(m,r)||F;O.current!==ae&&(i(function(){var V,Le,Fe,$e;return[b(V=["%conScroll%c: %csetSticky%c(%c".concat(ae,"%c)")]).call(V,s(c("red")),s(c("red")),s(c("purple"))),b(Le=[b(Fe=b($e="(animating = %c".concat(P,"%c && isEnd = %c")).call($e,te(m,r),"%c) || atEnd = %c")).call(Fe,F,"%c")]).call(Le,s(c("purple")),s(c("purple")),s(c("purple")),[{animating:P,animateTo:m,atEnd:F,mode:r,offsetHeight:f.offsetHeight,scrollHeight:f.scrollHeight,sticky:O.current,nextSticky:ae}])]}),R(ae))}else O.current&&(i(function(){var V;return[b(V=["%conScroll%c: Size changed while sticky, calling %cscrollToSticky()%c"]).call(V,s(c("red")),s(c("orange")),[{offsetHeightChanged:de,scrollHeightChanged:me}]),{nextOffsetHeight:X,prevOffsetHeight:Re,nextScrollHeight:J,prevScrollHeight:Oe}]}),re());var nt=f.scrollTop;ge(n=A.current).call(n,function(V){return V({scrollTop:nt})})}},[I,i,w,r,v,T,A,re,xe,ke,He,Ne,R,O,C]);a.useEffect(function(){if(S){var e=!1,n=Dt(function(){var o=C.current,m=I.current!==null;O.current?qe({mode:r,target:o}).atEnd?e=!1:e?ve()-e>$t&&(m||(W.current=o.scrollTop,i(function(){var f;return b(f=["%cInterval check%c: Should sticky but not at end, calling %cscrollToSticky()%c to scroll"]).call(f,s(c("navy")),s(c("orange")))}),re()),e=!1):e=ve():o.scrollHeight<=o.offsetHeight&&!O.current&&(i(function(){var f;return[b(f=["%cInterval check%c: Container is emptied, setting sticky back to %ctrue%c"]).call(f,s(c("navy")),s(c("purple"))),[{offsetHeight:o.offsetHeight,scrollHeight:o.scrollHeight,sticky:O.current}]]}),R(!0))},Math.max(Ke,d)||Ke);return function(){return clearInterval(n)}}},[I,d,i,r,re,R,O,S,C]);var je=a.useMemo(function(){var e=Ye[B]||(Ye[B]=it({key:"react-scroll-to-bottom--css-"+ut(),nonce:B}));return function(n){return e.css(n)+""}},[B]),rt=a.useMemo(function(){return{observeScrollPosition:Ie,setTarget:Z,styleToClassName:je}},[Ie,Z,je]),ie=a.useMemo(function(){return{atBottom:Se,atEnd:ye,atStart:Be,atTop:Ee,mode:r}},[Se,ye,Be,Ee,r]),ue=a.useMemo(function(){var e=E!==null;return{animating:e,animatingToEnd:e&&te(E,r),sticky:se}},[E,r,se]),ot=a.useMemo(function(){return ze(ze({},ie),ue)},[ie,ue]),at=a.useMemo(function(){return{scrollTo:L,scrollToBottom:Y,scrollToEnd:Me,scrollToStart:Pe,scrollToTop:q}},[L,Y,Me,Pe,q]);return a.useEffect(function(){if(S){var e=function(){T.current=S.scrollHeight};return S.addEventListener("focus",e,{capture:!0,passive:!0}),function(){return S.removeEventListener("focus",e)}}},[S]),i(function(){var e;return[b(e=["%cRender%c: Render"]).call(e,s(c("cyan",""))),{animateTo:E,animating:E!==null,sticky:se,target:S}]}),y.createElement(dt.Provider,{value:rt},y.createElement(mt.Provider,{value:at},y.createElement(ft.Provider,{value:ot},y.createElement(vt.Provider,{value:ie},y.createElement(ht.Provider,{value:ue},g,S&&y.createElement(gt,{debounce:x,name:"scroll",onEvent:tt,target:S}),S&&E!==null&&y.createElement(pt,{name:"scrollTop",onEnd:ce,target:S,value:E}))))))};pe.defaultProps={checkInterval:100,children:void 0,debounce:17,debug:void 0,initialScrollBehavior:"smooth",mode:void 0,nonce:void 0,scroller:Lt};pe.propTypes={checkInterval:h.number,children:h.any,debounce:h.number,debug:h.bool,initialScrollBehavior:h.oneOf(["auto","smooth"]),mode:h.oneOf(["bottom","top"]),nonce:h.string,scroller:h.func};var Vt={position:"relative"},be=function(t){var d=t.children,g=t.className,x=t.followButtonClassName,p=t.scrollViewClassName,k=kt()(Vt);return y.createElement("div",{className:wt(k,(g||"")+"")},y.createElement(Et,{className:(p||"")+""},d),y.createElement(Nt,{className:(x||"")+""}))};be.defaultProps={children:void 0,className:void 0,followButtonClassName:void 0,scrollViewClassName:void 0};be.propTypes={children:h.any,className:h.string,followButtonClassName:h.string,scrollViewClassName:h.string};var Je=function(t){var d=t.checkInterval,g=t.children,x=t.className,p=t.debounce,k=t.debug,r=t.followButtonClassName,B=t.initialScrollBehavior,j=t.mode,i=t.nonce,w=t.scroller,H=t.scrollViewClassName;return y.createElement(pe,{checkInterval:d,debounce:p,debug:k,initialScrollBehavior:B,mode:j,nonce:i,scroller:w},y.createElement(be,{className:x,followButtonClassName:r,scrollViewClassName:H},g))};Je.defaultProps={checkInterval:void 0,children:void 0,className:void 0,debounce:void 0,debug:void 0,followButtonClassName:void 0,initialScrollBehavior:"smooth",mode:void 0,nonce:void 0,scroller:void 0,scrollViewClassName:void 0};Je.propTypes={checkInterval:h.number,children:h.any,className:h.string,debounce:h.number,debug:h.bool,followButtonClassName:h.string,initialScrollBehavior:h.oneOf(["auto","smooth"]),mode:h.oneOf(["bottom","top"]),nonce:h.string,scroller:h.func,scrollViewClassName:h.string};_t();const Gt=5,Ut="Default";function zt(l){const t={};return l.forEach(d=>{const g=d.group??Ut;t[g]||(t[g]=[]),t[g].push(d)}),t}function Xt({tagOptions:l,onSubmit:t,onMoreClicked:d,onCancel:g,maxInlineTags:x=Gt,modalOnly:p=!1,modalTitle:k,multiple:r,children:B,allowEmptySubmit:j=!1}){const i=Pt(),[w,H]=a.useState(p?"modal":"inline"),[M,U]=a.useState([]),[E,z]=a.useState(void 0),I=a.useCallback(v=>{t(v),H("submitted"),setTimeout(()=>{H("closed")},1500)},[t]),Q=a.useMemo(()=>Bt(I,500),[I]),K=v=>{let T=[];return r?T=M.includes(v)?M.filter(ne=>ne!==v):[...M,v]:T=[v],U(T),T},S=()=>{I({tags:M,textFeedback:E,tagChoices:Z,source:"modal"})},Z=l.map(v=>v.value),C=zt(l),W=Object.keys(C);return u.jsxs(u.Fragment,{children:[!p&&u.jsx(Ht,{children:w!=="closed"&&u.jsxs(Ge.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"min-h-[96px] w-full",children:[w==="submitted"&&u.jsx(Ge.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"text-center",children:u.jsx("div",{className:"inline-flex rounded-lg border border-token-border-light p-4",children:u.jsx("div",{className:"text-sm",children:u.jsx(ee,{id:"ConversationTurnInlineMessageFeedback.submitted",defaultMessage:"Thanks for your feedback!"})})})}),["inline","modal"].includes(w)&&u.jsxs("div",{className:"relative mt-2 flex w-full flex-col gap-3 rounded-lg border border-token-border-light p-4",children:[u.jsx("button",{className:"absolute right-4 top-4 text-sm font-bold",onClick:()=>{H("closed"),Q.cancel(),g?.()},children:u.jsx(Ot,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})}),u.jsx("div",{className:"text-sm text-token-text-secondary",children:u.jsx(ee,{id:"ConversationTurnInlineMessageFeedback.inlineTitle",defaultMessage:"Tell us more:"})}),u.jsxs("div",{className:"flex flex-wrap gap-3",children:[l.slice(0,x).map(v=>u.jsx(he,{$selected:M.includes(v.value),onClick:()=>{const T=K(v.value);Q({tags:T,tagChoices:Z,source:"inline"})},children:v.label},v.value)),u.jsx(he,{onClick:()=>{d?.(),Q.cancel(),H("modal")},children:u.jsx(ee,{id:"ConversationTurnInlineMessageFeedback.moreOptions.1",defaultMessage:"More..."})})]})]})]},"main")}),w==="modal"&&u.jsxs(jt,{type:"success",isOpen:!0,className:"max-w-xl",size:"custom",title:k??u.jsx(ee,{id:"ConversationTurnInlineMessageFeedback.modalTitle",defaultMessage:"Provide additional feedback"}),onClose:()=>{U([]),H(p?"closed":"inline"),p&&g?.()},showCloseButton:!0,primaryButton:u.jsx(Rt,{color:"primary",disabled:M.length===0&&!E&&!j,onClick:S,children:u.jsx(ee,{id:"ConversationTurnInlineMessageFeedback.submit",defaultMessage:"Submit"})}),rootClassName:"z-50",children:[u.jsx("div",{className:"flex flex-col gap-6",children:W.map(v=>u.jsxs("div",{children:[W.length>1&&u.jsx("div",{className:"mb-3 text-sm font-semibold",children:v}),u.jsx("div",{className:"flex flex-wrap gap-3",children:C[v].map(T=>u.jsx(he,{$selected:M.includes(T.value),onClick:()=>K(T.value),children:T.label},T.value))},v)]},v))}),u.jsx(It,{name:"feedback",type:"text",className:"mt-6",placeholder:i.formatMessage({id:"ConversationTurnInlineMessageFeedback.feedbackPlaceholder.1",defaultMessage:"(Optional) Feel free to add specific details"}),value:E??"",onChange:v=>z(v.target.value),onPressEnter:S}),B]})]})}const he=Mt.button`
  rounded-lg border border-token-border-light px-3 py-1 text-sm text-token-text-secondary hover:text-token-text-primary hover:bg-token-main-surface-secondary
  ${({$selected:l})=>l&&"!bg-token-text-primary !text-token-main-surface-primary"}
`;export{Je as B,Xt as I,he as T};
//# sourceMappingURL=gt1nd5d752xxormd.js.map
