import{aJ as C,r,m as e,b6 as o,ba as y,c9 as g,K as j}from"./dfm2yceao9m2ilo9.js";import{b1 as M,b2 as b}from"./o7wih49jz3zkdcav.js";const u=j({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function S({buttonText:a,shouldChangeText:x=!0,iconClassName:i="icon-sm",onCopy:p,className:n}){const[t,c]=r.useState(!1),d=M(),m=r.useCallback(l=>{l.stopPropagation(),p(l),c(!0),setTimeout(()=>{d()&&c(!1)},2e3)},[d,p]);let s=a;return x&&t?s=e.jsx(o,{...u.copied}):a===!0&&(s=e.jsx(o,{...u.copy})),e.jsxs(e.Fragment,{children:[!t&&e.jsx(y,{label:e.jsx(o,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(f,{onClick:m,className:n,children:[e.jsx(b,{className:i}),s]})}),t&&e.jsxs(f,{className:n,children:[e.jsx(g,{className:i}),s]})]})}const f=C.button`flex gap-1 items-center select-none`;export{S as C};
//# sourceMappingURL=hlo8cl07ylvwwy6v.js.map
