import{j as n,r as g,am as F,ad as j,ac as E}from"./lklglvrzltpv3f05.js";import{bP as z,bQ as D,bR as p,bS as w,bT as v,E as O,F as q}from"./ntw4l0fkgqdiln85.js";import{a2 as S,aq as A,d8 as Q,b as G,bQ as y,bZ as W,bd as B,P as _,j as N,V as T}from"./ltrr4mhf6s4m7a72.js";import{S as U}from"./ccbvqxrwvcpykpsk.js";import{g as V}from"./kqwdyvkaaavvn8k3.js";import{a as X}from"./abdi060vkh3h3l2t.js";import{u as Z,a as $,g as H,b as C}from"./i319krasmy4ol4lq.js";function J(e,t){const s=S.getTurnContentReferences(e,t);return z(s)}function K(e,t){const s=J(e,t),a=S.getTurnImageSearchResults(e,t);return D(s.concat(a),"content_url")}function ge({clientThreadId:e}){const t=p.useCurrentImage();if(!t)return null;const{image:s,source:a,analyticsMetadata:o}=t;if(a==null||e==null||o?.turnIndex==null)return n.jsx(d,{image:s,analyticsMetadata:{}});const l=K(e,o.turnIndex);return n.jsx(d,{image:s,group:l,analyticsMetadata:o,groupSource:a})}function de(){const e=p.useCurrentImage();if(!e)return null;const{image:t,source:s}=e;if(s==null)return n.jsx(d,{image:t,analyticsMetadata:{}});switch(s){case w.ImagesTab:return n.jsx(Y,{image:t});case w.Turn:return n.jsx(ee,{image:t})}}function Y({image:e}){const{imageResults:t}=Z();return n.jsx(d,{image:e,group:t,groupSource:w.ImagesTab,analyticsMetadata:{}})}function ee({image:e}){const{imageResults:t}=$();return n.jsx(d,{image:e,group:t,groupSource:w.Turn,analyticsMetadata:{}})}const R=A.div`grow flex items-start p-8`,te={enter:e=>({x:e>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e<0?1e3:-1e3,opacity:0})},k=1e4,ne=(e,t)=>Math.abs(e)*t;function d({image:e,group:t,groupSource:s,analyticsMetadata:a}){const o=X(e?.url??""),l=p.useCurrentImage(),i=p.useStore(),h=l?.mountDirection;g.useEffect(()=>{window?.history?.state?.imageModalOpen||window.history.pushState({imageModalOpen:!0},"",window.location.href);const r=()=>{window?.history?.state?.imageModalOpen||i.setCurrentImage(void 0)};return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[i]);const b=()=>{window.history.go(-1),i.setCurrentImage(void 0)},c=t?.findIndex(r=>Q(e,r)),u=t?.length??1,m=c!=null&&u>1,x=g.useCallback(()=>{!m||t==null||i.setCurrentImage({image:t[(c+1)%t.length],source:s,mountDirection:v.FromRight,analyticsMetadata:a})},[m,t,i,c,s,a]);F({queries:(t??[]).map(r=>H(r.thumbnail_url))});const f=g.useCallback(()=>{!m||t==null||i.setCurrentImage({image:t[(c-1+t.length)%t.length],source:s,mountDirection:v.FromLeft,analyticsMetadata:a})},[m,t,i,c,s,a]);g.useEffect(()=>G(document,{keydown:r=>{r.key==="ArrowRight"?x():r.key==="ArrowLeft"&&f()}}),[x,f]);const L=e.content_url.replace(/^http:\/\//,"https://");return n.jsx(j,{children:e&&n.jsx(y.Root,{isOpen:!0,onClose:b,children:n.jsx(y.Overlay,{children:n.jsxs(W,{className:"flex h-full w-full flex-col bg-black/95",children:[n.jsxs("div",{className:"relative flex w-full grow justify-center overflow-hidden",children:[n.jsxs("div",{className:"absolute right-4 top-4 flex items-center sm:right-6 sm:top-6",children:[m&&n.jsxs("div",{className:"shrink-0 px-4 py-2 text-token-text-tertiary",children:[c+1," / ",u]}),n.jsx("button",{onClick:r=>{r.stopPropagation(),b()},className:"flex h-9 w-9 items-center justify-center outline-none hover:opacity-70",children:n.jsx(B,{className:"h-6 w-6 text-gray-400"})})]}),u>1&&n.jsx(R,{className:"cursor-w-resize",onClick:r=>{r.stopPropagation(),f()}}),n.jsx(j,{initial:!1,custom:h,children:n.jsx(E.div,{variants:te,custom:h??0,className:"absolute bottom-4 top-24",initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:u>1?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(r,{offset:P,velocity:M})=>{const I=ne(P.x,M.x);I<-k?x():I>k&&f()},children:n.jsx(se,{image:e,analyticsMetadata:a})},c)}),u>1&&n.jsx(R,{className:"cursor-e-resize",onClick:r=>{r.stopPropagation(),x()}})]}),n.jsx(O,{onClick:()=>{_.logEventWithStatsig(N.searchContentReferenceClicked,"search_content_reference_clicked",{...T(a),type:"full_screen_image",url:e.url,image_url:L})},href:e.url,className:"flex min-h-20 w-full shrink-0 items-center gap-8 px-6 pb-3 pt-8 text-sm hover:opacity-70 sm:px-8 sm:pb-8",children:n.jsxs("div",{className:"flex grow flex-col gap-0.5 overflow-hidden pr-2",children:[n.jsxs("div",{className:"flex items-center gap-2 truncate text-token-text-tertiary",children:[n.jsx(q,{url:e.content_url,className:"rounded",size:16}),o.data??V(e.url)]}),n.jsx("div",{className:"truncate font-semibold text-white",children:e.title})]})})]})})})})}function se({image:e,analyticsMetadata:t}){const s=g.useRef(!1),a=e.content_url.replace(/^http:\/\//,"https://"),o=e.thumbnail_url.replace(/^http:\/\//,"https://"),l=e.content_size.width/e.content_size.height,{isError:i}=C(a),{isError:h}=C(o);return s.current||(s.current=!0,_.logEventWithStatsig(N.searchContentReferenceShown,"search_content_reference_shown",{...T(t),type:"full_screen_image",url:e.url,image_url:a})),!h||!i?n.jsx(E.img,{src:i?o:a,alt:e.title,style:{backgroundImage:o?`url(${o})`:void 0,backgroundSize:"contain",aspectRatio:l,backgroundPosition:"center",backgroundRepeat:"no-repeat"},initial:{opacity:0},animate:{opacity:1},className:"h-full max-w-[100vw] object-contain sm:max-w-[calc(100vw-10rem)]"}):n.jsx("div",{className:"flex h-full grow items-center justify-center",children:n.jsx("div",{className:"flex h-96 w-96 items-center justify-center bg-white/10",children:n.jsx(U,{className:"h-12 w-12 text-token-text-tertiary"})})})}export{ge as ImageLightbox,de as ImageLightboxSearchGPT,d as ImageResultModal,J as getThreadTurnContentReferenceImages,K as getThreadTurnImages};
//# sourceMappingURL=bh91sj5txs08nvqu.js.map
