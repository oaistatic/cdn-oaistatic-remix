import{ab as E,m as n,aL as z,r as g,cE as D,bi as F,b as O,dg as j,bG as G,P as N,d as _,a7 as S}from"./g92hdia1euilhv3m.js";import{bG as A,bH as q,bI as p,bJ as b,bK as J,bL as v,aJ as y,bM as Q,a$ as W,bN as $}from"./l912w0bwi7cbhgoi.js";import{b as B,aJ as H}from"./j9bb93dkfix5hp9e.js";import{u as K,a as U,g as X,b as C}from"./h7sxq33ga6hmnj9e.js";import{m as L}from"./bz2yxwsv6hrttawy.js";import"./itnhsxnrwd7fay2n.js";function V(e,t){const s=E.getTurnContentReferences(e,t);return A(s)}function Y(e,t){const s=V(e,t),a=E.getTurnImageSearchResults(e,t);return q(s.concat(a),"content_url")}function me({clientThreadId:e}){const t=p.useCurrentImage();if(!t)return null;const{image:s,source:a,analyticsMetadata:o}=t;if(a==null||e==null||o?.turnIndex==null)return n.jsx(d,{image:s,analyticsMetadata:{}});const l=Y(e,o.turnIndex);return n.jsx(d,{image:s,group:l,analyticsMetadata:o,groupSource:a})}function ge(){const e=p.useCurrentImage();if(!e)return null;const{image:t,source:s}=e;if(s==null)return n.jsx(d,{image:t,analyticsMetadata:{}});switch(s){case b.ImagesTab:return n.jsx(Z,{image:t});case b.Turn:return n.jsx(ee,{image:t})}}function Z({image:e}){const{imageResults:t}=K();return n.jsx(d,{image:e,group:t,groupSource:b.ImagesTab,analyticsMetadata:{}})}function ee({image:e}){const{imageResults:t}=U();return n.jsx(d,{image:e,group:t,groupSource:b.Turn,analyticsMetadata:{}})}const R=z.div`grow flex items-start p-8`,te={enter:e=>({x:e>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e<0?1e3:-1e3,opacity:0})},k=1e4,ne=(e,t)=>Math.abs(e)*t;function d({image:e,group:t,groupSource:s,analyticsMetadata:a}){const o=J(e?.url??""),l=p.useCurrentImage(),i=p.useStore(),h=l?.mountDirection;g.useEffect(()=>{window?.history?.state?.imageModalOpen||window.history.pushState({imageModalOpen:!0},"",window.location.href);const r=()=>{window?.history?.state?.imageModalOpen||i.setCurrentImage(void 0)};return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[i]);const w=()=>{window.history.go(-1),i.setCurrentImage(void 0)},c=t?.findIndex(r=>D(e,r)),u=t?.length??1,m=c!=null&&u>1,x=g.useCallback(()=>{!m||t==null||i.setCurrentImage({image:t[(c+1)%t.length],source:s,mountDirection:v.FromRight,analyticsMetadata:a})},[m,t,i,c,s,a]);F({queries:(t??[]).map(r=>X(r.thumbnail_url))});const f=g.useCallback(()=>{!m||t==null||i.setCurrentImage({image:t[(c-1+t.length)%t.length],source:s,mountDirection:v.FromLeft,analyticsMetadata:a})},[m,t,i,c,s,a]);g.useEffect(()=>O(document,{keydown:r=>{r.key==="ArrowRight"?x():r.key==="ArrowLeft"&&f()}}),[x,f]);const T=e.content_url.replace(/^http:\/\//,"https://");return n.jsx(y,{children:e&&n.jsx(j.Root,{isOpen:!0,onClose:w,children:n.jsx(j.Overlay,{children:n.jsxs(G,{className:"flex h-full w-full flex-col bg-black/95",children:[n.jsxs("div",{className:"relative flex w-full grow justify-center overflow-hidden",children:[n.jsxs("div",{className:"absolute right-4 top-4 flex items-center sm:right-6 sm:top-6",children:[m&&n.jsxs("div",{className:"shrink-0 px-4 py-2 text-token-text-tertiary",children:[c+1," / ",u]}),n.jsx("button",{onClick:r=>{r.stopPropagation(),w()},className:"flex h-9 w-9 items-center justify-center outline-none hover:opacity-70",children:n.jsx(B,{className:"h-6 w-6 text-gray-400"})})]}),u>1&&n.jsx(R,{className:"cursor-w-resize",onClick:r=>{r.stopPropagation(),f()}}),n.jsx(y,{initial:!1,custom:h,children:n.jsx(L.div,{variants:te,custom:h??0,className:"absolute bottom-4 top-24",initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:u>1?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(r,{offset:M,velocity:P})=>{const I=ne(M.x,P.x);I<-k?x():I>k&&f()},children:n.jsx(se,{image:e,analyticsMetadata:a})},c)}),u>1&&n.jsx(R,{className:"cursor-e-resize",onClick:r=>{r.stopPropagation(),x()}})]}),n.jsx(Q,{onClick:()=>{N.logEventWithStatsig(_.searchContentReferenceClicked,"search_content_reference_clicked",{...S(a),type:"full_screen_image",url:e.url,image_url:T})},href:e.url,className:"flex min-h-20 w-full shrink-0 items-center gap-8 px-6 pb-3 pt-8 text-sm hover:opacity-70 sm:px-8 sm:pb-8",children:n.jsxs("div",{className:"flex grow flex-col gap-0.5 overflow-hidden pr-2",children:[n.jsxs("div",{className:"flex items-center gap-2 truncate text-token-text-tertiary",children:[n.jsx(W,{url:e.content_url,className:"rounded",size:16}),o.data??$(e.url)]}),n.jsx("div",{className:"truncate font-semibold text-white",children:e.title})]})})]})})})})}function se({image:e,analyticsMetadata:t}){const s=g.useRef(!1),a=e.content_url.replace(/^http:\/\//,"https://"),o=e.thumbnail_url.replace(/^http:\/\//,"https://"),l=e.content_size.width/e.content_size.height,{isError:i}=C(a),{isError:h}=C(o);return s.current||(s.current=!0,N.logEventWithStatsig(_.searchContentReferenceShown,"search_content_reference_shown",{...S(t),type:"full_screen_image",url:e.url,image_url:a})),!h||!i?n.jsx(L.img,{src:i?o:a,alt:e.title,style:{backgroundImage:o?`url(${o})`:void 0,backgroundSize:"contain",aspectRatio:l,backgroundPosition:"center",backgroundRepeat:"no-repeat"},initial:{opacity:0},animate:{opacity:1},className:"h-full max-w-[100vw] object-contain sm:max-w-[calc(100vw-10rem)]"}):n.jsx("div",{className:"flex h-full grow items-center justify-center",children:n.jsx("div",{className:"flex h-96 w-96 items-center justify-center bg-white/10",children:n.jsx(H,{className:"h-12 w-12 text-token-text-tertiary"})})})}export{me as ImageLightbox,ge as ImageLightboxSearchGPT,d as ImageResultModal,V as getThreadTurnContentReferenceImages,Y as getThreadTurnImages};
//# sourceMappingURL=hbank31mtjosh769.js.map