import{gX as I,bJ as j,r as h,m as o,aC as q,aD as Y,aA as K,fi as X,e8 as J,l as Q,f as $,T as M,fa as Z,ee as k,gs as ee,aE as te,gY as se}from"./dfm2yceao9m2ilo9.js";import{g5 as ae,g6 as oe,C as m,g7 as ne,g8 as ie,g9 as re,ga as ce,cp as de,gb as le,gc as ue,bV as R,gd as he,ge,gf as L,gg as pe,fM as _,gh as fe,gi as me,gj as xe,u as ve,gk as Ce,gl as W,U as D,aQ as be,gm as F}from"./o7wih49jz3zkdcav.js";import{L as we}from"./d59bvqbgrtjhdi6a.js";import{u as Se}from"./of3zireqs833qyjf.js";import{T as ye}from"./mwxmeau2u615h9c2.js";import{g as Te}from"./btagl6w1gub4aw61.js";import{m as x}from"./ccrdffu4uq6bo5k0.js";import"./f6hms767mvgd5wdn.js";import"./j3jvaqmbweoz0uvu.js";import"./huty6yhsfwt7jiw2.js";import"./gb721j76lu290i1c.js";import"./c3pv0g5u6p31bd14.js";import"./oj002yr1cv5905d0.js";import"./c1bxciuqfnnvqhe5.js";import"./fzrn137102spawew.js";import"./zbtw2a6a3r9x82tu.js";import"./crgpn8kp0lsek69a.js";import"./mnx8lkd7acwrn154.js";const O="oai/apps/canmoreSidebarWidth",Ie=.25,Ee=400,U=400;function V(e){return e-Ee}function y(e,s){return oe(U,V(e),s??Ie*e)}function Ae(){const e=I.useState(I.selectWindowWidth),s=y(e,ae(j.DANGER_SECRET_FOLDERS_ONLY_getItem(O))),a=H(),[t,d]=h.useState(s);h.useEffect(()=>{(t<U||t>V(e))&&d(y(e,t))},[e]);function r(c){d(f=>y(e,f+=c.delta.x))}function n(c){d(c),j.DANGER_SECRET_FOLDERS_ONLY_setItem(O,c)}function i(){const c=y(e,void 0);n(c)}const l=`calc(100vw - ${t}px)`;return a?{chatWidth:t,canvasWidth:e-t,canvasWidthCalc:l,viewportWidth:e,handleDrag:r,handleDoubleClick:i,persist:n}:{chatWidth:0,canvasWidth:e,canvasWidthCalc:"100vw",viewportWidth:e,handleDrag:()=>{},handleDoubleClick:()=>{},persist:()=>{}}}function H(e){const s=I.useState(I.selectWindowWidth);return(e??s)>1e3}function Ne(e,s){let a;return s?.type===m.Textdoc&&(a={type:"canvas_textdoc",id:s.textdocId}),{...e,messageMetadata:{...e.messageMetadata,open_in_canvas_view:a}}}const z=({isFullScreen:e=!1,clientThreadId:s,focusedObject:a,onClose:t,isAnimating:d=!1,width:r})=>{const{setTargetedContent:n}=ne(),i=h.useRef(!1);if(h.useEffect(()=>(i.current&&n(void 0),i.current=!0,()=>{i.current=!1}),[a]),a==null)return null;switch(a.type){case m.Textdoc:return o.jsx(ye,{isFullScreen:e,onClose:t,clientThreadId:s,focusedTextdoc:a,isAnimating:d,width:r});case m.ADAVisualization:return null;case m.Sonic:return!1}},je=300,Me=e=>{switch(e?.type){case m.Textdoc:return e.textdocId;case m.Sonic:return e.id;default:return null}};function Re(e,s){const a=q(e),t=Y(a),d=K(e),r=X(e,d),n=J({clientThreadId:e,conversationLeafId:d}),i=ie(),[l,c]=h.useMemo(()=>{if(r&&re(r))return[void 0,null];if(s===!0)return[void 0,null];let g;return!n&&r&&(g=Q(ce(r.messages))),_e({clientThreadId:e,isRequestActive:t,latestTextdocId:i,groupedMessage:g})},[n,r,t,i,s,e]),f=c!=null,w=Me(c);h.useEffect(()=>{if(c&&l&&!de()&&(le(c,l),c.type===m.Textdoc)){const{textdocId:g}=c,v=Te(g);ue(document.getElementById(v))}},[f,w])}function _e({clientThreadId:e,isRequestActive:s,latestTextdocId:a,groupedMessage:t}){switch(t?.type){case R.Canmore:{const[d,r]=t.messages;if(!he(d?.message))break;const n=ge(s,d.message,r?.message??null),i=n.textdocId??a;if(i&&(n.function===$.CreateTextdoc?(n.content??"").length>je||n.status===M.WAITING:n.status===M.STREAMING))return[n.messageId,{type:m.Textdoc,textdocId:i}];break}case R.SonicCanvas:break}return[void 0,null]}const We=260,T={type:"spring",bounce:.12,duration:.64},De={type:"spring",bounce:0,duration:.58},Fe=({clientThreadId:e,focusedObject:s,onClose:a})=>{const{chatWidth:t,canvasWidthCalc:d,handleDrag:r,handleDoubleClick:n,persist:i}=Ae(),l=k(),[c,f]=h.useState(!0),[w,g]=h.useState(!1),v=_(u=>u.activeSidebar),E=fe(({rect:u})=>u),{windowHeight:C,windowWidth:b}=ee(u=>u,{windowWidth:0,windowHeight:0});let p=E??{top:0,left:t,width:b-t,height:C},N=!1;if(E&&(p.top<0||p.top+p.height>C)){N=!0;const u={width:(b-t)*.75,height:C*.75};p={top:C/2-u.height/2,left:(b-t-u.width)/2+t,width:u.width,height:u.height}}if(l){const u=b-p.width-p.left;p={...p,left:-u}}const S=E?.borderRadius,A=me(),G=A?.history!=null||A?.showChangesAtVersion!=null,B=_(u=>u.isDesktopNavCollapsed);return o.jsxs(o.Fragment,{children:[G&&o.jsx(we,{onClick:()=>xe(A.textdocId),zIndexKey:"chatOverlay"}),o.jsxs(x.div,{initial:!l&&{marginRight:B?0:-We},animate:!l&&{marginRight:0},transition:De,children:[o.jsx(x.div,{initial:{opacity:1},animate:{opacity:0},exit:{opacity:[1,0]},transition:{...T,delay:.22},className:"pointer-events-none absolute left-0 top-0 z-20 h-full w-full bg-token-main-surface-primary"}),!l&&o.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"}),o.jsx(x.div,{className:"relative z-20 h-full",style:{width:d},exit:{width:0},transition:{type:"spring",bounce:0,duration:.1}})]}),o.jsx(x.div,{className:te("absolute z-20 h-full transition-shadow",l&&"right-0 max-h-[100cqh] max-w-[var(--available-details-width)] overflow-y-auto overflow-x-clip",!l&&"overflow-hidden",!l&&(v==="debug"?"md:left-[-250px] lg:left-[-300px] xl:left-[-350px] 2xl:left-[-400px]":"left-0")),initial:{borderRadius:S,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)",opacity:N?0:1,x:p.left,y:p.top,height:p.height,width:p.width},animate:{opacity:1,x:l?0:t,y:0,width:d,height:C,borderRadius:0,boxShadow:"0px 0px 18px rgba(0,0,0,0.075)"},exit:{scale:.64,opacity:0,filter:"blur(12px)",transition:{opacity:{duration:.14,bounce:.1}},borderRadius:S,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},transition:w?{duration:0}:T,onAnimationComplete:()=>f(!1),children:o.jsx(x.div,{className:"h-full overflow-hidden border-l border-gray-100 dark:border-token-border-medium",initial:{borderRadius:S},animate:{borderRadius:0},exit:{borderRadius:S},transition:T,children:o.jsxs("div",{className:"h-full",children:[o.jsx(x.div,{drag:"x",className:"absolute left-[-2px] z-10 h-full w-[4px] cursor-ew-resize bg-token-text-quaternary opacity-0",whileHover:{opacity:.5},whileDrag:{opacity:.75,width:"8px",left:"-4px"},transition:{type:"tween",duration:.1},style:{x:0,y:0,transform:"translateX(0px)"},dragMomentum:!1,dragSnapToOrigin:!1,dragElastic:!1,dragConstraints:{left:0,right:0,top:0,bottom:0},onDrag:(u,P)=>{g(!0),r(P)},onDragEnd:()=>{g(!1),i(t)},onDoubleClick:()=>n()}),o.jsx(z,{onClose:a,clientThreadId:e,isAnimating:c,focusedObject:s,width:b-t})]})})})]})},Oe=h.memo(Fe),ke=({clientThreadId:e,focusedObject:s,onClose:a})=>o.jsx(se,{children:o.jsx(x.div,{className:"fixed inset-0 z-40 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",initial:{scale:.98},animate:{scale:1},transition:T,children:o.jsx(z,{isFullScreen:!0,clientThreadId:e,focusedObject:s,onClose:a})})}),Le=({clientThreadId:e,overrideWidth:s,isAutoFocusDisabled:a=!1})=>{let t=H(s);const d=Se(e);Re(e,a);const r=ve(),n=Ce(),i=h.useMemo(()=>{let g=r;if(r?.type===m.Textdoc){const v=n?.[r.textdocId];v&&(g={...r,textdocId:v})}return g},[r,n]);h.useEffect(()=>{L()},[e]);const l=i&&(t?o.jsx(Oe,{clientThreadId:e,onClose:F,focusedObject:i},"canvas-sidebar"):o.jsx(ke,{clientThreadId:e,onClose:F,focusedObject:i},"canvas-modal"));h.useEffect(()=>{if(i)return W(g=>Ne(g,i)),()=>W(null)},[i,n]);const c=k(),f=l!=null;return h.useEffect(()=>{if(!c)return D.setActiveStageSidebar(f),()=>{f&&D.setActiveStageSidebar(!1)}},[f,c]),d!==e?null:o.jsx(be,{children:l})},at=e=>{const s=h.useRef(null);return o.jsx(Z,{ref:s,onError:(a,t)=>{L(),setTimeout(()=>{s.current?.resetErrorBoundary()}),pe.logError("Error boundary hit",a,{componentStack:t})},name:"canmore-focused-view",children:o.jsx(Le,{...e})})};export{at as CanvasFocusedViewManager};
//# sourceMappingURL=bp3vdqasuuueuouj.js.map