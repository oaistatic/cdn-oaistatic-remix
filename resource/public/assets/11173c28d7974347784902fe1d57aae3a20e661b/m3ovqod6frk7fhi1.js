import{j as e,r as f,af as b,ae as w,M as C}from"./nqo5y2f0dorhrqsr.js";import{bE as T,fI as y,n as v,ec as M}from"./dh0yl0m9q337gmci.js";import{g as j,A as R,a as A,C as u,b as P,c as g,T as D,d as E}from"./djvq027mfengbixi.js";import{cm as N,cn as S,co as k,cp as L,cq as O,cr as z,cs as V}from"./ktiwgucld5a8s55m.js";const _=({size:r="large",position:i="bottom"})=>{const o=T(),a=r==="large"?"4em":"50px",s=`${o?"rgba(0,0,0,0)":"rgba(255,255,255,0)"},${o?"#2f2f2f":"#ffffff"}`;return i==="bottom"?e.jsx("div",{className:"absolute bottom-0 z-20 h-24 w-full transition-colors",style:{height:a,background:`linear-gradient(${s})`}}):e.jsx("div",{className:"absolute bottom-0 right-0 top-0 z-20 transition-colors",style:{width:a,background:`linear-gradient(to right,${s})`}})},q=()=>e.jsxs(w.div,{role:"button",className:"absolute bottom-3 left-0 right-0 z-50 mx-auto flex w-fit items-baseline gap-1 rounded-full border border-token-border-light bg-token-main-surface-primary px-3 py-1",initial:!1,animate:{opacity:1},exit:{opacity:0,scale:.9},children:[e.jsx("span",{className:"loading-shimmer-pure-text",children:e.jsx(C,{...M({id:"qmLYih",defaultMessage:"Typing"})})}),e.jsx(D,{gap:1,padding:0})]}),F=({onScroll:r,textdocId:i})=>{const o=N(i),{windowWidth:a}=y(p=>p,{windowWidth:0,windowHeight:0});if(!o)return null;const{versions:s}=o,t=v(s);if(!t)return null;const c=s.length>1?s[s.length-2]:null,d=S(t),x=k(t),l=E({isReadonlyFromQueryParam:!0}),{content:m,currentlyStreamingLineIndex:h}=j(t,c);let n=null;switch(t?.type){case O.DOCUMENT:n=e.jsx(P,{value:m,previousValue:c?.content,comments:[],isRequestActive:d,isRewriting:x,isPreview:!0,isDisabled:!0,hideAccelerators:!0,commentsMode:u.COMMENTS_READONLY,readonlyReason:l,hideToolbar:!0,hideEditOverlay:!0,width:a,modelCursor:t.modelCursor});break;default:t&&L(t.type)&&(n=e.jsx(R,{id:"codemirror",currentlyStreamingLineIndex:h,language:A(t.type),value:m,commentsMode:u.COMMENTS_READONLY,hideToolbar:!0,hideAccelerators:!0,isPreview:!0,readonlyReason:l,comments:[],isRequestActive:d}))}return e.jsxs(g,{children:[e.jsx(g.Content,{disableScroll:z(),onScroll:r,children:n}),e.jsx(b,{children:V(t)&&e.jsx(q,{})})]})},G=f.memo(F);export{_ as C,G as T};