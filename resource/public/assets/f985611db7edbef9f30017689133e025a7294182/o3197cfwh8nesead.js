import{V as C,r as l,t as e,a0 as o,am as y,a5 as g}from"./bzvcy3tl84gc3bl9.js";import{bJ as j}from"./moittmkqym6x2q8u.js";import{_ as M,G as h}from"./o4htpc5iqra16abg.js";const u=g({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function k({buttonText:a,shouldChangeText:m=!0,iconClassName:i="icon-sm",onCopy:p,className:d}){const[t,n]=l.useState(!1),r=j(),x=l.useCallback(c=>{c.stopPropagation(),p(c),n(!0),setTimeout(()=>{r()&&n(!1)},2e3)},[r,p]);let s=a;return m&&t?s=e.jsx(o,{...u.copied}):a===!0&&(s=e.jsx(o,{...u.copy})),e.jsxs(e.Fragment,{children:[!t&&e.jsx(y,{label:e.jsx(o,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(f,{onClick:x,className:d,children:[e.jsx(M,{className:i}),s]})}),t&&e.jsxs(f,{className:d,children:[e.jsx(h,{className:i}),s]})]})}const f=C.button`flex gap-1 items-center`;export{k as C};
//# sourceMappingURL=o3197cfwh8nesead.js.map