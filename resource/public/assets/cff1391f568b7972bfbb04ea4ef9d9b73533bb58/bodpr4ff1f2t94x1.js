import{ft as E,ay as R,r as f,a6 as i,dt as q,fu as P,ar as $,fv as Y}from"./l3hptpare9m1mqfv.js";import{fR as K,fS as X,W as b,fT as Z,fU as J,fV as Q,d$ as ee,fW as te,fX as se,fY as ae,fZ as oe,f_ as ne,f$ as ie,g0 as re,g1 as ce,g2 as de,g3 as le,g4 as ue,g5 as fe,g6 as W,g7 as pe,g8 as F,g9 as he,b7 as L,bZ as N,ga as ge,gb as me,gc as xe,gd as be,R as ve,ge as Ce,gf as O,U as D,bA as Se,gg as j,gh as we,gi as Te}from"./c7sgref9mfwezh7s.js";import{L as ye}from"./dpmpp4vjdzk6xdj4.js";import{u as Ie}from"./l6y8nur0rcsuz3d2.js";import{T as Ee}from"./izkmwxvh2wufn1qx.js";import{m as x}from"./mh08vel4sd7gl5e4.js";import"./km9gro7xi1t4gs2t.js";import"./ds7myuf7nkx8b20x.js";import"./bkgevi7dwlpkqxzf.js";import"./ev3ca23urw2rf3h9.js";import"./i4jzjalmx9h3noc6.js";import"./o8pwa9djmd3woe3v.js";import"./f6opayjz8ndxpu2c.js";import"./mcjxbkmf3g1q207d.js";import"./gef2pkbm9t7u9jaf.js";import"./cd3cu5yb561k7gvn.js";import"./ls034jw95v45vrao.js";import"./kt2wzbpt1cq6zkgh.js";import"./g17ny8y1cqtvxzoo.js";import"./lqjdha68cqgoq5qr.js";import"./dmugo7bnjan4aevw.js";const M="oai/apps/canmoreSidebarWidth",Ae=.25,_e=400,k=400;function H(e){return e-_e}function y(e,a){return X(k,H(e),a??Ae*e)}function Re(){const e=E.useState(E.selectWindowWidth),a=y(e,K(R.DANGER_SECRET_FOLDERS_ONLY_getItem(M))),s=U(),[t,r]=f.useState(a);f.useEffect(()=>{(t<k||t>H(e))&&r(y(e,t))},[e]);function o(u){r(m=>y(e,m+=u.delta.x))}function d(u){r(u),R.DANGER_SECRET_FOLDERS_ONLY_setItem(M,u)}function c(){const u=y(e,void 0);d(u)}const n=`calc(100vw - ${t}px)`;return s?{chatWidth:t,canvasWidth:e-t,canvasWidthCalc:n,viewportWidth:e,handleDrag:o,handleDoubleClick:c,persist:d}:{chatWidth:0,canvasWidth:e,canvasWidthCalc:"100vw",viewportWidth:e,handleDrag:()=>{},handleDoubleClick:()=>{},persist:()=>{}}}function U(){return E.useState(e=>E.selectWindowWidth(e)>1e3)}function We(e,a){let s;return a?.type===b.Textdoc&&(s={type:"canvas_textdoc",id:a.textdocId}),{...e,messageMetadata:{...e.messageMetadata,open_in_canvas_view:s}}}const V=({isFullScreen:e=!1,clientThreadId:a,focusedObject:s,onClose:t,isAnimating:r=!1,width:o})=>{const{setTargetedContent:d}=Z(),c=f.useRef(!1);if(f.useEffect(()=>(c.current&&d(void 0),c.current=!0,()=>{c.current=!1}),[s]),s==null)return null;switch(s.type){case b.Textdoc:return i.jsx(Ee,{isFullScreen:e,onClose:t,clientThreadId:a,focusedTextdoc:s,isAnimating:r,width:o});case b.ADAVisualization:return null}},Ne=300,Oe=e=>e?.type===b.Textdoc?e.textdocId:null;function De(e){const a=J(e),s=Q(a),t=ee(e),r=te(e,t),o=se({clientThreadId:e,conversationLeafId:t}),d=ae(),[c,n]=f.useMemo(()=>{if(r&&oe(r))return[void 0,null];let h;return!o&&r&&(h=ne(ie(r.messages))),je(s,d,h)},[o,r,s,d]),u=n!=null,m=Oe(n);f.useEffect(()=>{if(n&&c&&(re(n,c),n.type===b.Textdoc)){const{textdocId:h}=n,C=pe(h);ce(document.getElementById(C))}},[u,m])}function je(e,a,s){switch(s?.type){case de.Canmore:{const[t,r]=s.messages;if(!le(t?.message))break;const o=ue(e,t.message,r?.message??null),d=o.textdocId??a;if(d&&(o.function===fe.CreateTextdoc?(o.content??"").length>Ne||o.status===W.WAITING:o.status===W.STREAMING))return[o.messageId,{type:b.Textdoc,textdocId:d}];break}}return[void 0,null]}const Me=260,Fe=280,I={type:"spring",bounce:.12,duration:.64},Le={type:"spring",bounce:0,duration:.58},ke=({clientThreadId:e,focusedObject:a,onClose:s})=>{const{chatWidth:t,canvasWidthCalc:r,handleDrag:o,handleDoubleClick:d,persist:c}=Re(),n=L(),[u,m]=f.useState(!0),[h,C]=f.useState(!1),g=N(l=>l.activeSidebar),v=ge(({rect:l})=>l),{windowHeight:w,windowWidth:S}=P(l=>l,{windowWidth:0,windowHeight:0});let p=v??{top:0,left:t,width:S-t,height:w},_=!1;if(v&&(p.top<0||p.top+p.height>w)){_=!0;const l={width:(S-t)*.75,height:w*.75};p={top:w/2-l.height/2,left:(S-t-l.width)/2+t,width:l.width,height:l.height}}if(n){const l=S-p.width-p.left;p={...p,left:-l}}const T=v?.borderRadius,A=me(),G=A?.history!=null||A?.showChangesAtVersion!=null,z=N(l=>l.isDesktopNavCollapsed);return i.jsxs(i.Fragment,{children:[G&&i.jsx(ye,{onClick:()=>xe(A.textdocId),zIndexKey:"chatOverlay"}),i.jsxs(x.div,{initial:!n&&{marginRight:z?0:-Me},animate:!n&&{marginRight:0},transition:Le,children:[i.jsx(x.div,{initial:{opacity:1},animate:{opacity:0},exit:{opacity:[1,0]},transition:{...I,delay:.22},className:"pointer-events-none absolute left-0 top-0 z-20 h-full w-full bg-token-main-surface-primary"}),!n&&i.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"}),i.jsx(x.div,{className:"relative z-20 h-full",style:{width:r},exit:{width:0},transition:{type:"spring",bounce:0,duration:.1}})]}),i.jsx(x.div,{className:$("absolute z-20 h-full transition-shadow",n&&"right-0 max-h-[100cqh] max-w-[var(--available-details-width)] overflow-y-auto overflow-x-clip",!n&&"overflow-hidden",!n&&(g==="debug"?"md:left-[-250px] lg:left-[-300px] xl:left-[-350px] 2xl:left-[-400px]":"left-0")),initial:{borderRadius:T,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)",opacity:_?0:1,x:p.left,y:p.top,height:p.height,width:p.width},animate:{opacity:1,x:n?0:t,y:0,width:n?`calc(100cqw - ${t}px)`:r,height:"100%",borderRadius:0,boxShadow:"0px 0px 18px rgba(0,0,0,0.075)"},exit:{scale:.64,opacity:0,filter:"blur(12px)",transition:{opacity:{duration:.14,bounce:.1}},borderRadius:T,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},transition:h?{duration:0}:I,onAnimationComplete:()=>m(!1),children:i.jsx(x.div,{className:"h-full overflow-hidden border-l border-gray-100 dark:border-token-border-medium",initial:{borderRadius:T},animate:{borderRadius:0},exit:{borderRadius:T},transition:I,children:i.jsxs("div",{className:"h-full",children:[i.jsx(x.div,{drag:"x",className:"absolute left-[-2px] z-10 h-full w-[4px] cursor-ew-resize bg-token-text-quaternary opacity-0",whileHover:{opacity:.5},whileDrag:{opacity:.75,width:"8px",left:"-4px"},transition:{type:"tween",duration:.1},style:{x:0,y:0,transform:"translateX(0px)"},dragMomentum:!1,dragSnapToOrigin:!1,dragElastic:!1,dragConstraints:{left:0,right:0,top:0,bottom:0},onDrag:(l,B)=>{C(!0),o(B)},onDragEnd:()=>{C(!1),c(t)},onDoubleClick:()=>d()}),i.jsx(V,{onClose:s,clientThreadId:e,isAnimating:u,focusedObject:a,width:S-t})]})})})]})},He=f.memo(ke),Ue=({clientThreadId:e,focusedObject:a,onClose:s})=>i.jsx(Y,{children:i.jsx(x.div,{className:"fixed inset-0 z-20 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",initial:{scale:.98},animate:{scale:1},transition:I,children:i.jsx(V,{isFullScreen:!0,clientThreadId:e,focusedObject:a,onClose:s})})}),Ve=({clientThreadId:e})=>{const{store:a,actions:s}=be(),t=U(),r=Ie(e);De(e);const o=ve(),d=Ce(),c=f.useMemo(()=>{let g=o;if(o?.type===b.Textdoc){const v=d?.[o.textdocId];v&&(g={...o,textdocId:v})}return g},[o,d]);f.useEffect(()=>{F()},[e]);const n=c&&(t?i.jsx(He,{clientThreadId:e,onClose:j,focusedObject:c},"canvas-sidebar"):i.jsx(Ue,{clientThreadId:e,onClose:j,focusedObject:c},"canvas-modal"));f.useEffect(()=>{if(c)return O(g=>We(g,c)),()=>O(null)},[c,d]);const u=L(),m=Fe+400+64+we+Te,h=n!=null;return f.useEffect(()=>{const g=u&&a.getState().isSidebarOpen&&window.innerWidth<m;return g&&h&&s.closeSidebar(),D.setActiveStageSidebar(h),()=>{h&&(u&&g&&s.openSidebar(),D.setActiveStageSidebar(!1))}},[h,a,s,u,m]),r!==e?null:i.jsx(Se,{children:n})},dt=e=>{const a=f.useRef(null);return i.jsx(q,{ref:a,onError:(s,t)=>{F(),setTimeout(()=>{a.current?.resetErrorBoundary()}),he.logError("Error boundary hit",s,{componentStack:t})},name:"canmore-focused-view",children:i.jsx(Ve,{...e})})};export{dt as CanvasFocusedViewManager};
//# sourceMappingURL=bodpr4ff1f2t94x1.js.map
