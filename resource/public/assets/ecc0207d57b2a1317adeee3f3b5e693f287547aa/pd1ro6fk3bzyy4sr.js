import{f3 as T,bn as N,r as l,y as n,cB as G,f4 as q,a4 as $,f5 as P}from"./cenhwbprxai3toix.js";import{fQ as Y,fR as K,a5 as g,fS as X,cD as Q,fT as Z,dU as J,dS as ee,fU as te,fV as se,fW as ae,fX as oe,fY as ne,fZ as ie,f_ as re,f$ as _,g0 as ce,g1 as F,g2 as de,b$ as le,g3 as ue,g4 as pe,g5 as me,a3 as fe,g6 as he,g7 as j,bN as ge,g8 as R}from"./bomvf441parvbl6l.js";import{L as xe}from"./hn877s1av7risab0.js";import{u as M,U as W}from"./jyh9xl3syf7yrebg.js";import{u as ve}from"./cborgxcam8a7my8h.js";import{T as be}from"./zvpw97uxkl46jvhx.js";import{s as Ce,m as we,B as ye,C as Se}from"./h0w2cfyxquh3a88t.js";import{m as h}from"./i2mam4exf28ww00h.js";import"./lzqwtbp50roqvxnh.js";import"./hn586u5on2jlex6e.js";import"./kp41qb109q7zsu08.js";import"./e3lzzvpbrfw34hi0.js";import"./s26g8cj5crlmzrhm.js";import"./jth9gz8y4nfsu03x.js";import"./c657bb6sfxb67al1.js";import"./i5dl7qcorvwptxtt.js";import"./j72yt11gyo474tkr.js";import"./d01hwntyf2775ji3.js";import"./kcdclgxeuzpy449e.js";import"./bh0hpeydruybhwyo.js";import"./excfi9p08rx2yfii.js";import"./nvw1dral599ors5n.js";import"./if0s6lpo3mwf7mho.js";import"./hfwsa5j99aclb7b9.js";import"./f4c5dqtaqqzzhoq0.js";import"./j4pjeew6dlxr95ui.js";import"./h20dz7cyjcptun6e.js";import"./leqgnttd8q44vj5y.js";import"./ji6rwnid2aarnx0c.js";const D="oai/apps/canmoreSidebarWidth",Te=.25,Ie=400,O=400;function k(e){return e-Ie}function y(e,o){return K(O,k(e),o??Te*e)}function Ee(){const e=T.useState(T.selectWindowWidth),o=y(e,Y(N.DANGER_SECRET_FOLDERS_ONLY_getItem(D))),s=L(),[t,i]=l.useState(o);l.useEffect(()=>{(t<O||t>k(e))&&i(y(e,t))},[e]);function a(c){i(m=>y(e,m+=c.delta.x))}function r(c){i(c),N.DANGER_SECRET_FOLDERS_ONLY_setItem(D,c)}function u(){const c=y(e,void 0);r(c)}const d=`calc(100vw - ${t}px)`;return s?{chatWidth:t,canvasWidth:e-t,canvasWidthCalc:d,viewportWidth:e,handleDrag:a,handleDoubleClick:u,persist:r}:{chatWidth:0,canvasWidth:e,canvasWidthCalc:"100vw",viewportWidth:e,handleDrag:()=>{},handleDoubleClick:()=>{},persist:()=>{}}}function L(){return T.useState(e=>T.selectWindowWidth(e)>1e3)}function Ae(e,o){let s;return o?.type===g.Textdoc&&(s={type:"canvas_textdoc",id:o.textdocId}),{...e,messageMetadata:{...e.messageMetadata,open_in_canvas_view:s}}}const U=({isFullScreen:e=!1,clientThreadId:o,focusedObject:s,onClose:t,isAnimating:i=!1,width:a})=>{const{setTargetedContent:r}=X(),u=l.useRef(!1);if(l.useEffect(()=>(u.current&&r(void 0),u.current=!0,()=>{u.current=!1}),[s]),s==null)return null;switch(s.type){case g.Textdoc:return n.jsx(be,{isFullScreen:e,onClose:t,clientThreadId:o,focusedTextdoc:s,isAnimating:i,width:a});case g.ADAVisualization:return null}},Ne=300,_e=e=>e?.type===g.Textdoc?e.textdocId:null;function je(e){const o=Ce(e),s=Q(o),t=we(e),i=ye(e,t),a=Se({clientThreadId:e,conversationLeafId:t}),r=Z(),[u,d]=l.useMemo(()=>{if(i&&J(i))return[void 0,null];let x;return!a&&i&&(x=ee(te(i.messages))),Re(s,r,x)},[a,i,s,r]),c=d!=null,m=_e(d);l.useEffect(()=>{if(d&&u&&(se(d,u),d.type===g.Textdoc)){const{textdocId:x}=d,v=ce(x);ae(document.getElementById(v))}},[c,m])}function Re(e,o,s){switch(s?.type){case oe.Canmore:{const[t,i]=s.messages;if(!ne(t?.message))break;const a=ie(e,t.message,i?.message??null),r=a.textdocId??o;if(r&&(a.function===re.CreateTextdoc?(a.content??"").length>Ne||a.status===_.WAITING:a.status===_.STREAMING))return[a.messageId,{type:g.Textdoc,textdocId:r}];break}}return[void 0,null]}const Me=260,S={type:"spring",bounce:.12,duration:.64},We={type:"spring",bounce:0,duration:.58},De=({clientThreadId:e,focusedObject:o,onClose:s})=>{const{chatWidth:t,canvasWidthCalc:i,handleDrag:a,handleDoubleClick:r,persist:u}=Ee(),d=le(),[c,m]=l.useState(!0),[x,v]=l.useState(!1),V=M(p=>p.activeSidebar),I=ue(({rect:p})=>p),{windowHeight:b,windowWidth:C}=q(p=>p,{windowWidth:0,windowHeight:0});let f=I??{top:0,left:t,width:C-t,height:b},A=!1;if(I&&(f.top<0||f.top+f.height>b)){A=!0;const p={width:(C-t)*.75,height:b*.75};f={top:b/2-p.height/2,left:(C-t-p.width)/2+t,width:p.width,height:p.height}}const w=I?.borderRadius,E=pe(),H=E?.history!=null||E?.showChangesAtVersion!=null,z=M(p=>p.isDesktopNavCollapsed);return n.jsxs(n.Fragment,{children:[H&&n.jsx(xe,{onClick:()=>me(E.textdocId),zIndexKey:"chatOverlay"}),n.jsxs(h.div,{initial:{marginRight:z?0:-Me},animate:{marginRight:0},transition:We,children:[n.jsx(h.div,{initial:{opacity:1},animate:{opacity:0},exit:{opacity:[1,0]},transition:{...S,delay:.22},className:"pointer-events-none absolute left-0 top-0 z-20 h-full w-full bg-token-main-surface-primary"}),n.jsx(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"}),n.jsx(h.div,{className:"relative z-20 h-full",style:{width:i},exit:{width:0},transition:{type:"spring",bounce:0,duration:.1}})]}),n.jsx(h.div,{className:$("z-20 h-full transition-shadow",!d&&"absolute overflow-hidden",d&&"max-h-[100cqh] max-w-[var(--available-details-width)] overflow-y-auto overflow-x-clip",V==="debug"?"md:left-[-250px] lg:left-[-300px] xl:left-[-350px] 2xl:left-[-400px]":"left-0"),initial:{borderRadius:w,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)",opacity:A?0:1,x:f.left,y:f.top,height:f.height,width:f.width},animate:{opacity:1,x:d?0:t,y:0,width:d?`calc(100cqw - ${t}px)`:i,height:"100%",borderRadius:0,boxShadow:"0px 0px 18px rgba(0,0,0,0.075)"},exit:{scale:.64,opacity:0,filter:"blur(12px)",transition:{opacity:{duration:.14,bounce:.1}},borderRadius:w,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},transition:x?{duration:0}:S,onAnimationComplete:()=>m(!1),children:n.jsx(h.div,{className:"h-full overflow-hidden border-l border-gray-100 dark:border-token-border-medium",initial:{borderRadius:w},animate:{borderRadius:0},exit:{borderRadius:w},transition:S,children:n.jsxs("div",{className:"h-full",children:[n.jsx(h.div,{drag:"x",className:"absolute left-[-2px] z-10 h-full w-[4px] cursor-ew-resize bg-token-text-quaternary opacity-0",whileHover:{opacity:.5},whileDrag:{opacity:.75,width:"8px",left:"-4px"},transition:{type:"tween",duration:.1},style:{x:0,y:0,transform:"translateX(0px)"},dragMomentum:!1,dragSnapToOrigin:!1,dragElastic:!1,dragConstraints:{left:0,right:0,top:0,bottom:0},onDrag:(p,B)=>{v(!0),a(B)},onDragEnd:()=>{v(!1),u(t)},onDoubleClick:()=>r()}),n.jsx(U,{onClose:s,clientThreadId:e,isAnimating:c,focusedObject:o,width:C-t})]})})})]})},Fe=l.memo(De),Oe=({clientThreadId:e,focusedObject:o,onClose:s})=>n.jsx(P,{children:n.jsx(h.div,{className:"fixed inset-0 z-20 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",initial:{scale:.98},animate:{scale:1},transition:S,children:n.jsx(U,{isFullScreen:!0,clientThreadId:e,focusedObject:o,onClose:s})})}),ke=({clientThreadId:e})=>{const o=L(),s=ve(e);je(e);const t=fe(),i=he(),a=l.useMemo(()=>{let c=t;if(t?.type===g.Textdoc){const m=i?.[t.textdocId];m&&(c={...t,textdocId:m})}return c},[t,i]);l.useEffect(()=>{F()},[e]);const r=a&&(o?n.jsx(Fe,{clientThreadId:e,onClose:R,focusedObject:a},"canvas-sidebar"):n.jsx(Oe,{clientThreadId:e,onClose:R,focusedObject:a},"canvas-modal"));l.useEffect(()=>{if(a)return j(c=>Ae(c,a)),()=>j(null)},[a,i]);const u=r!=null;return l.useEffect(()=>(W.setActiveStageSidebar(u),()=>W.setActiveStageSidebar(!1)),[u]),s!==e?null:n.jsx(ge,{children:r})},mt=e=>{const o=l.useRef(null);return n.jsx(G,{ref:o,onError:(s,t)=>{F(),setTimeout(()=>{o.current?.resetErrorBoundary()}),de.logError("Error boundary hit",s,{componentStack:t})},name:"canmore-focused-view",children:n.jsx(ke,{...e})})};export{mt as CanvasFocusedViewManager};
//# sourceMappingURL=pd1ro6fk3bzyy4sr.js.map
