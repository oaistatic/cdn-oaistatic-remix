import{r as p,g1 as w,l as h,m as o}from"./g92hdia1euilhv3m.js";import{g as y,A as v,a as R,C as d,b as A,c as l,d as E}from"./fbdlrrxr279dzg3a.js";import{i as M,j as f,k as b,l as j,m as O}from"./l912w0bwi7cbhgoi.js";const D=({onScroll:u,textdocId:m})=>{const n=M(m),{windowWidth:x}=w(g=>g,{windowWidth:0,windowHeight:0});if(!n)return null;const{versions:t}=n,e=h(t);if(!e)return null;const r=t.length>1?t[t.length-2]:null,i=f(e),C=b(e),a=E({isReadonlyFromQueryParam:!0}),{content:c,currentlyStreamingLineIndex:T}=y(e,r);let s=null;switch(e?.type){case O.DOCUMENT:s=o.jsx(A,{value:c,previousValue:r?.content,comments:[],isRequestActive:i,isRewriting:C,isPreview:!0,isDisabled:!0,hideAccelerators:!0,commentsMode:d.COMMENTS_READONLY,readonlyReason:a,hideToolbar:!0,hideEditOverlay:!0,width:x,modelCursor:e.modelCursor});break;default:e&&j(e.type)&&(s=o.jsx(v,{id:"codemirror",currentlyStreamingLineIndex:T,language:R(e.type),value:c,commentsMode:d.COMMENTS_READONLY,hideToolbar:!0,hideAccelerators:!0,readonlyReason:a,comments:[],isRequestActive:i}))}return o.jsx(l,{children:o.jsx(l.Content,{onScroll:u,children:s})})},V=p.memo(D);export{V as T};
//# sourceMappingURL=eazw1ncxdfn6lidk.js.map
