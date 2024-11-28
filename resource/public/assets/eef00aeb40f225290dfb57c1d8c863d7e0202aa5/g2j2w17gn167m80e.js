import{dg as d,dh as rt,di as ce,dj as x,dk as ot,dl as at,dm as m,dn as l,dp as n,dq as se,dr as ie,ds as lt,dt as nt,du as ct,dv as st,dw as it,dx as ut,dy as dt,dz as ft,dA as vt,dB as mt,dC as xe,dD as ht,dE as gt,dF as Ke,dG as pt,dH as bt,dI as Me,dJ as St,dK as Tt,dL as Ct,dM as wt,dN as Et,dO as yt}from"./b6arjgg215unn3v3.js";import{r as c,aG as S}from"./gfs0keudzvcg5rgq.js";function Le(f,t){var v=bt(f);if(Me){var h=Me(f);t&&(h=St(h).call(h,function(p){return Ke(f,p).enumerable})),v.push.apply(v,h)}return v}function $e(f){for(var t=1;t<arguments.length;t++){var v=arguments[t]!=null?arguments[t]:{};if(t%2){var h;ie(h=Le(Object(v),!0)).call(h,function(g){mt(f,g,v[g])})}else if(xe)ht(f,xe(v));else{var p;ie(p=Le(Object(v))).call(p,function(g){gt(f,g,Ke(v,g))})}}return f}var Ht=function(){return 1/0},De=17,_t="bottom",C="top",Ve=1,Bt=34,je={};function Nt(f,t){return f(),pt(f,t)}function Fe(f){var t=f.mode,v=f.target,h=v.offsetHeight,p=v.scrollHeight,g=v.scrollTop,E=p-g-h<Ve,r=g<Ve,H=t===C?r:E,M=t!==C?r:E;return{atBottom:E,atEnd:H,atStart:M,atTop:r}}function U(f,t){return f===(t===C?0:"100%")}var ue=function(t){var v=t.checkInterval,h=t.children,p=t.debounce,g=t.debug,E=t.initialScrollBehavior,r=t.mode,H=t.nonce,M=t.scroller,s=c.useMemo(function(){return rt("<ScrollToBottom>",{force:g})},[g]);r=r===C?C:_t;var L=c.useRef(0),z=c.useRef(E),ze=ce(r===C?0:"100%"),Q=x(ze,3),R=Q[0],G=Q[1],$=Q[2],Ge=ce(null),X=x(Ge,3),b=X[0],fe=X[1],w=X[2],Z=c.useRef(0),A=c.useRef(0),W=c.useRef(0),We=c.useState(!0),ve=x(We,2),me=ve[0],he=ve[1],qe=c.useState(!0),ge=x(qe,2),pe=ge[0],be=ge[1],Je=c.useState(!0),Se=x(Je,2),Te=Se[0],Ce=Se[1],Ye=c.useState(!1),we=x(Ye,2),Ee=we[0],ye=we[1],Qe=ce(!0),ee=x(Qe,3),te=ee[0],_=ee[1],B=ee[2],K=c.useRef([]),He=c.useCallback(function(e){var a=w.current;return K.current.push(e),a&&e({scrollTop:a.scrollTop}),function(){var o=K.current,i=ot(o).call(o,e);~i&&at(o).call(o,i,1)}},[K,w]),re=c.useCallback(function(){var e=$.current;s(function(){var a;return m(a=["%cSpineTo%c: %conEnd%c is fired."]).call(a,l(n("magenta")),l(n("orange")),[{animateTo:e}])}),L.current=se(),U(e,r)||_(!1),G(null)},[$,s,L,r,G,_]),N=c.useCallback(function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.behavior,i=w.current;if(typeof e!="number"&&e!=="100%")return console.warn('react-scroll-to-bottom: Arguments passed to scrollTo() must be either number or "100%".');s(function(){var u;return[m(u=["%cscrollTo%c: Will scroll to %c".concat(typeof e=="number"?e+"px":e.replace(/%/g,"%%"),"%c")]).call(u,l(n("lime","")),l(n("purple"))),{behavior:o,nextAnimateTo:e,target:i}]}),o==="auto"?(re(),i&&(i.scrollTop=e==="100%"?i.scrollHeight-i.offsetHeight:e)):(o!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollTo". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),G(e)),U(e,r)&&(s(function(){var u;return[m(u=["%cscrollTo%c: Scrolling to end, will set sticky to %ctrue%c."]).call(u,l(n("lime","")),l(n("purple"))),[{mode:r,nextAnimateTo:e}]]}),_(!0))},[s,re,r,G,_,w]),D=c.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.behavior;s(function(){var o;return m(o=["%cscrollToBottom%c: Called"]).call(o,l(n("yellow","")))}),a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToBottom". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),N("100%",{behavior:a||"smooth"})},[s,N]),V=c.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.behavior;s(function(){var o;return m(o=["%cscrollToTop%c: Called"]).call(o,l(n("yellow","")))}),a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToTop". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),N(0,{behavior:a||"smooth"})},[s,N]),_e=c.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.behavior;s(function(){var i;return m(i=["%cscrollToEnd%c: Called"]).call(i,l(n("yellow","")))}),a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToEnd". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var o={behavior:a||"smooth"};r===C?V(o):D(o)},[s,r,D,V]),Be=c.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.behavior;s(function(){var i;return m(i=["%cscrollToStart%c: Called"]).call(i,l(n("yellow","")))}),a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToStart". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var o={behavior:a||"smooth"};r===C?D(o):V(o)},[s,r,D,V]),q=c.useCallback(function(){var e=w.current;if(e){if(z.current==="auto"){s(function(){var I;return m(I=["%ctarget changed%c: Initial scroll"]).call(I,l(n("blue")))}),e.scrollTop=r===C?0:e.scrollHeight-e.offsetHeight,z.current=!1;return}var a=Z.current,o=e.offsetHeight,i=e.scrollHeight,u=e.scrollTop,y=r===C?0:Math.max(0,i-o-u),k=Math.max(0,a-u),J=M({maxValue:y,minValue:k,offsetHeight:o,scrollHeight:i,scrollTop:u}),O=Math.max(0,Math.min(y,J)),T;r===C||O!==y?T=u+O:T="100%",s(function(){var I,j,F;return[m(I=[m(j=m(F="%cscrollToSticky%c: Will animate from %c".concat(a,"px%c to %c")).call(F,typeof T=="number"?T+"px":T.replace(/%/g,"%%"),"%c (%c")).call(j,(T==="100%"?y:T)+a,"px%c)")]).call(I,l(n("orange")),l(n("purple")),l(n("purple")),l(n("purple"))),{animateFrom:a,maxValue:y,minValue:k,nextAnimateTo:T,nextValue:O,offsetHeight:o,rawNextValue:J,scrollHeight:i,scrollTop:u}]}),N(T,{behavior:"smooth"})}},[Z,s,r,M,N,w]),Xe=c.useCallback(function(e){var a,o=e.timeStampLow,i=$.current,u=w.current,y=i!==null;if(!(o<=L.current||!u)){var k=Fe({mode:r,target:u}),J=k.atBottom,O=k.atEnd,T=k.atStart,I=k.atTop;he(J),be(O),ye(T),Ce(I);var j=u.offsetHeight,F=u.scrollHeight,Oe=A.current,Re=W.current,le=j!==Oe,ne=F!==Re;if(le&&(A.current=j),ne&&(W.current=F),!le&&!ne){var Y=y&&U(i,r)||O;B.current!==Y&&(s(function(){var P,ke,Ie,Pe;return[m(P=["%conScroll%c: %csetSticky%c(%c".concat(Y,"%c)")]).call(P,l(n("red")),l(n("red")),l(n("purple"))),m(ke=[m(Ie=m(Pe="(animating = %c".concat(y,"%c && isEnd = %c")).call(Pe,U(i,r),"%c) || atEnd = %c")).call(Ie,O,"%c")]).call(ke,l(n("purple")),l(n("purple")),l(n("purple")),[{animating:y,animateTo:i,atEnd:O,mode:r,offsetHeight:u.offsetHeight,scrollHeight:u.scrollHeight,sticky:B.current,nextSticky:Y}])]}),_(Y))}else B.current&&(s(function(){var P;return[m(P=["%conScroll%c: Size changed while sticky, calling %cscrollToSticky()%c"]).call(P,l(n("red")),l(n("orange")),[{offsetHeightChanged:le,scrollHeightChanged:ne}]),{nextOffsetHeight:j,prevOffsetHeight:Oe,nextScrollHeight:F,prevScrollHeight:Re}]}),q());var tt=u.scrollTop;ie(a=K.current).call(a,function(P){return P({scrollTop:tt})})}},[$,s,L,r,A,W,K,q,he,be,ye,Ce,_,B,w]);c.useEffect(function(){if(b){var e=!1,a=Nt(function(){var o=w.current,i=$.current!==null;B.current?Fe({mode:r,target:o}).atEnd?e=!1:e?se()-e>Bt&&(i||(Z.current=o.scrollTop,s(function(){var u;return m(u=["%cInterval check%c: Should sticky but not at end, calling %cscrollToSticky()%c to scroll"]).call(u,l(n("navy")),l(n("orange")))}),q()),e=!1):e=se():o.scrollHeight<=o.offsetHeight&&!B.current&&(s(function(){var u;return[m(u=["%cInterval check%c: Container is emptied, setting sticky back to %ctrue%c"]).call(u,l(n("navy")),l(n("purple"))),[{offsetHeight:o.offsetHeight,scrollHeight:o.scrollHeight,sticky:B.current}]]}),_(!0))},Math.max(De,v)||De);return function(){return clearInterval(a)}}},[$,v,s,r,q,_,B,b,w]);var Ne=c.useMemo(function(){var e=je[H]||(je[H]=lt({key:"react-scroll-to-bottom--css-"+nt(),nonce:H}));return function(a){return e.css(a)+""}},[H]),Ze=c.useMemo(function(){return{observeScrollPosition:He,setTarget:fe,styleToClassName:Ne}},[He,fe,Ne]),oe=c.useMemo(function(){return{atBottom:me,atEnd:pe,atStart:Ee,atTop:Te,mode:r}},[me,pe,Ee,Te,r]),ae=c.useMemo(function(){var e=R!==null;return{animating:e,animatingToEnd:e&&U(R,r),sticky:te}},[R,r,te]),Ae=c.useMemo(function(){return $e($e({},oe),ae)},[oe,ae]),et=c.useMemo(function(){return{scrollTo:N,scrollToBottom:D,scrollToEnd:_e,scrollToStart:Be,scrollToTop:V}},[N,D,_e,Be,V]);return c.useEffect(function(){if(b){var e=function(){W.current=b.scrollHeight};return b.addEventListener("focus",e,{capture:!0,passive:!0}),function(){return b.removeEventListener("focus",e)}}},[b]),s(function(){var e;return[m(e=["%cRender%c: Render"]).call(e,l(n("cyan",""))),{animateTo:R,animating:R!==null,sticky:te,target:b}]}),S.createElement(ct.Provider,{value:Ze},S.createElement(st.Provider,{value:et},S.createElement(it.Provider,{value:Ae},S.createElement(ut.Provider,{value:oe},S.createElement(dt.Provider,{value:ae},h,b&&S.createElement(ft,{debounce:p,name:"scroll",onEvent:Xe,target:b}),b&&R!==null&&S.createElement(vt,{name:"scrollTop",onEnd:re,target:b,value:R}))))))};ue.defaultProps={checkInterval:100,children:void 0,debounce:17,debug:void 0,initialScrollBehavior:"smooth",mode:void 0,nonce:void 0,scroller:Ht};ue.propTypes={checkInterval:d.number,children:d.any,debounce:d.number,debug:d.bool,initialScrollBehavior:d.oneOf(["auto","smooth"]),mode:d.oneOf(["bottom","top"]),nonce:d.string,scroller:d.func};var Ot={position:"relative"},de=function(t){var v=t.children,h=t.className,p=t.followButtonClassName,g=t.scrollViewClassName,E=Tt()(Ot);return S.createElement("div",{className:Ct(E,(h||"")+"")},S.createElement(wt,{className:(g||"")+""},v),S.createElement(Et,{className:(p||"")+""}))};de.defaultProps={children:void 0,className:void 0,followButtonClassName:void 0,scrollViewClassName:void 0};de.propTypes={children:d.any,className:d.string,followButtonClassName:d.string,scrollViewClassName:d.string};var Ue=function(t){var v=t.checkInterval,h=t.children,p=t.className,g=t.debounce,E=t.debug,r=t.followButtonClassName,H=t.initialScrollBehavior,M=t.mode,s=t.nonce,L=t.scroller,z=t.scrollViewClassName;return S.createElement(ue,{checkInterval:v,debounce:g,debug:E,initialScrollBehavior:H,mode:M,nonce:s,scroller:L},S.createElement(de,{className:p,followButtonClassName:r,scrollViewClassName:z},h))};Ue.defaultProps={checkInterval:void 0,children:void 0,className:void 0,debounce:void 0,debug:void 0,followButtonClassName:void 0,initialScrollBehavior:"smooth",mode:void 0,nonce:void 0,scroller:void 0,scrollViewClassName:void 0};Ue.propTypes={checkInterval:d.number,children:d.any,className:d.string,debounce:d.number,debug:d.bool,followButtonClassName:d.string,initialScrollBehavior:d.oneOf(["auto","smooth"]),mode:d.oneOf(["bottom","top"]),nonce:d.string,scroller:d.func,scrollViewClassName:d.string};yt();export{Ue as B};
//# sourceMappingURL=g2j2w17gn167m80e.js.map
