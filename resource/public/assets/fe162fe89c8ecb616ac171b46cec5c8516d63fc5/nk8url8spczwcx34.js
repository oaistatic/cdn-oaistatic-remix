import{r as a,j as t}from"./lklglvrzltpv3f05.js";import{ch as x,fE as m}from"./dr5q0mnwgdiuy1ac.js";import{S as p}from"./heefrlxlra66lmjs.js";import{c4 as f}from"./fn5bn67vlrtkutmt.js";function c({children:e,position:s,onClick:l}){return t.jsx("button",{onClick:l,className:`absolute ${s==="left"?"left-2":"right-2"} top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md`,"aria-label":s==="left"?"Previous":"Next",children:e})}function v({frames:e,setFrameSrc:s}){const[l,d]=a.useState(0),[n,i]=a.useState(!1),r=a.useCallback((o,g)=>{d((l+e.length+g)%e.length),i(!1),o.stopPropagation()},[e.length,l]),u=a.useCallback(o=>{o.stopPropagation(),s(e[l].src)},[e,l,s]),h=a.useCallback(()=>{i(!0)},[]);return e.length===0?null:t.jsxs("div",{className:"relative flex",children:[t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:`absolute flex h-full w-full items-center justify-center bg-gray-50 ${n?"hidden":"block"}`,children:t.jsx(x,{})}),t.jsx("img",{onLoad:h,onClick:u,src:e[l].src,alt:`Image ${l}`}),t.jsx("p",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-sm bg-black bg-opacity-50 p-0.5 font-mono text-sm text-white ${n?"":"hidden"}`,children:f(Math.floor(e[l].timestamp))})]}),e.length>1&&t.jsxs(t.Fragment,{children:[t.jsx(c,{position:"left",onClick:o=>r(o,-1),children:t.jsx(m,{})}),t.jsx(c,{position:"right",onClick:o=>r(o,1),children:t.jsx(p,{})})]})]})}export{v as FramesViewer};
//# sourceMappingURL=nk8url8spczwcx34.js.map
