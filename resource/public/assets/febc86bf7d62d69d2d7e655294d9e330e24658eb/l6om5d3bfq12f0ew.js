import{m as u,s as m,D as d}from"./813n9w6xsthevnqe.js";function x({url:n,size:r=16,minSize:t,fallback:s,className:i}){const o=f(n,r);return o==null?s??null:t!=null?u.jsx(h,{faviconUrl:o,size:r,minSize:t,fallback:s,className:i}):u.jsx(a,{faviconUrl:o,size:r,className:i})}function h({faviconUrl:n,size:r,minSize:t,fallback:s,className:i}){const{data:o,isLoading:g}=m({queryKey:["imageSize",n],queryFn:()=>new Promise((c,l)=>{const e=new Image;e.onload=()=>{c(Math.min(e.width,e.height))},e.onerror=()=>{l()},e.src=n})});return g?u.jsx("div",{className:i}):o==null||o<t?s??null:u.jsx(a,{faviconUrl:n,size:r,className:i})}function a({faviconUrl:n,size:r,className:t}){return u.jsx("img",{src:n,alt:"Favicon",width:r,height:r,className:t})}function f(n,r){if(!n)return null;try{const{origin:t}=new URL(n);return`https://www.google.com/s2/favicons?domain=${t}&sz=${r}`}catch(t){return d.addError(t),null}}export{x as F};
//# sourceMappingURL=l6om5d3bfq12f0ew.js.map
