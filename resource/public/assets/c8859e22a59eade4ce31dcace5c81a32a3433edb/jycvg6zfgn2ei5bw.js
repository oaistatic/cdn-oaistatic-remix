import{t as e,O as E,r as f,z as S,d8 as D,bL as v,at as M,T as F}from"./elatgogjtv7nqe0m.js";import{bX as h,bY as p,bZ as I,af as y,bR as P}from"./htp5iqft2rzvr58f.js";import{S as z,aG as O}from"./cr91oy4eihkrvo1z.js";import{g as _,e as A,f as G,h as $}from"./h1jpzm6tqkxt344d.js";import{g as X}from"./kqwdyvkaaavvn8k3.js";import{a as q}from"./kjt5h7j69e6yt20h.js";import{m as k}from"./iudm9ugwilu2skh4.js";import"./lknunzf857a9nkhn.js";import"./njnyzv45aw3y7o3m.js";function re({clientThreadId:t}){const s=h.useCurrentImage();if(!s)return null;const{image:n,source:a,turnIndex:i}=s;if(a==null||t==null||i==null)return e.jsx(x,{image:n});const c=_(t,i);return e.jsx(x,{image:n,group:c,turnIndex:i,groupSource:a})}function ne(){const t=h.useCurrentImage();if(!t)return null;const{image:s,source:n}=t;if(n==null)return e.jsx(x,{image:s});switch(n){case p.ImagesTab:return e.jsx(U,{image:s});case p.Turn:return e.jsx(Y,{image:s})}}function U({image:t}){const{imageResults:s}=A();return e.jsx(x,{image:t,group:s,groupSource:p.ImagesTab})}function Y({image:t}){const{imageResults:s}=G();return e.jsx(x,{image:t,group:s,groupSource:p.Turn})}const N=E.div`grow flex items-start p-8`;function L({title:t,urls:s}){const n=s[0],{data:a,isError:i}=$(n);if(s.length===0)return;if(i)return s.length>1?e.jsx(L,{title:t,urls:s.slice(1)}):e.jsx("div",{className:"flex h-full grow items-center justify-center",children:e.jsx("div",{className:"flex h-96 w-96 items-center justify-center bg-white/10",children:e.jsx(O,{className:"h-12 w-12 text-token-text-tertiary"})})});const c="max-w-[100vw] sm:max-w-[calc(100vw-10rem)] object-scale-down h-full";return a!=null?e.jsx(k.img,{src:n,alt:t,initial:{opacity:0},animate:{opacity:1},className:c}):e.jsx("div",{className:F("w-full animate-pulse bg-white/10",c)})}const Z={enter:t=>({x:t>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:t=>({zIndex:0,x:t<0?1e3:-1e3,opacity:0})},C=1e4,B=(t,s)=>Math.abs(t)*s;function x({image:t,group:s,groupSource:n,turnIndex:a}){const i=q(t?.url??""),c=h.useCurrentImage(),o=h.useStore(),w=c?.mountDirection;f.useEffect(()=>{window?.history?.state?.imageModalOpen||window.history.pushState({imageModalOpen:!0},"",window.location.href);const r=()=>{window?.history?.state?.imageModalOpen||o.setCurrentImage(void 0)};return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[o]);const b=()=>{window.history.go(-1),o.setCurrentImage(void 0)},l=s?.findIndex(r=>S(t,r)),u=s?.length??1,m=l!=null&&u>1,g=f.useCallback(()=>{!m||s==null||o.setCurrentImage({image:s[(l+1)%s.length],source:n,mountDirection:I.FromRight,turnIndex:a})},[m,s,o,l,n,a]),d=f.useCallback(()=>{!m||s==null||o.setCurrentImage({image:s[(l-1+s.length)%s.length],source:n,mountDirection:I.FromLeft,turnIndex:a})},[m,s,o,l,n,a]);return f.useEffect(()=>D(document,{keydown:r=>{r.key==="ArrowRight"?g():r.key==="ArrowLeft"&&d()}}),[g,d]),e.jsx(y,{children:t&&e.jsx(v.Root,{isOpen:!0,onClose:b,children:e.jsx(v.Overlay,{children:e.jsxs(M,{className:"flex h-full w-full flex-col bg-black/95",children:[e.jsxs("div",{className:"relative flex w-full grow justify-center overflow-hidden",children:[e.jsxs("div",{className:"absolute right-4 top-4 flex items-center sm:right-6 sm:top-6",children:[m&&e.jsxs("div",{className:"shrink-0 px-4 py-2 text-token-text-tertiary",children:[l+1," / ",u]}),e.jsx("button",{onClick:r=>{r.stopPropagation(),b()},className:"flex h-9 w-9 items-center justify-center outline-none hover:opacity-70",children:e.jsx(z,{className:"h-6 w-6 text-gray-400"})})]}),u>1&&e.jsx(N,{className:"cursor-w-resize",onClick:r=>{r.stopPropagation(),d()}}),e.jsx(y,{initial:!1,custom:w,children:e.jsx(k.div,{variants:Z,custom:w??0,className:"absolute bottom-4 top-24",initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:u>1?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(r,{offset:R,velocity:T})=>{const j=B(R.x,T.x);j<-C?g():j>C&&d()},children:e.jsx(L,{title:t.title,urls:[t.content_url.replace(/^http:\/\//,"https://"),t.thumbnail_url]})},l)}),u>1&&e.jsx(N,{className:"cursor-e-resize",onClick:r=>{r.stopPropagation(),g()}})]}),e.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"flex min-h-20 w-full shrink-0 items-center gap-8 px-6 pb-3 pt-8 text-sm hover:opacity-70 sm:px-8 sm:pb-8",children:e.jsxs("div",{className:"flex grow flex-col gap-0.5 overflow-hidden pr-2",children:[e.jsxs("div",{className:"flex items-center gap-2 truncate text-token-text-tertiary",children:[e.jsx(P,{url:t.content_url,className:"rounded",size:16}),i.data??X(t.url)]}),e.jsx("div",{className:"truncate font-semibold text-white",children:t.title})]})})]})})})})}export{re as ImageLightbox,ne as ImageLightboxSearchGPT,x as ImageResultModal};
//# sourceMappingURL=jycvg6zfgn2ei5bw.js.map
