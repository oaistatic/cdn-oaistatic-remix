import{y as e,a0 as y,al as S,j as F,l as b,N as M,a4 as N,ae as n,as as h,a1 as k}from"./cenhwbprxai3toix.js";import{a as v}from"./lzqwtbp50roqvxnh.js";import{bA as I}from"./bomvf441parvbl6l.js";import{A as T}from"./gt3i1odik6sh3vjp.js";function q(){return e.jsx(v,{className:"icon-sm ml-1 text-token-text-tertiary"})}function U({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,hasPadding:u=!0,className:d,disabled:m=!1}){const c=y(),f=S(),g=F(),{variables:p,mutate:x}=b({mutationFn:({feature:t,enabled:j})=>M.setWorkspaceBetaFeature(i,t,j),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(w.featureSettingsUpdateFailed))}});return e.jsxs(T,{className:N(`justify-start ${u?"py-6":"py-0"}`,d),children:[e.jsx(I,{label:"",disabled:m,enabled:p?.enabled??l,onChange:t=>{x({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(h,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(q,{})})]})]})}const w=k({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{U as B,q as S};
//# sourceMappingURL=o3vit8cumig0r1q3.js.map
