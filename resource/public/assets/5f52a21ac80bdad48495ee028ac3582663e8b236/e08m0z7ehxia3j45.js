import{j as e,c as S,a as y,b as F,M as n}from"./lklglvrzltpv3f05.js";import{a$ as b,b0 as M}from"./cp734xu9t8fnlezn.js";import{F as h,J as k,aw as v,bg as w,f as I}from"./muemwvh3ybsggbb1.js";import{A as N}from"./i55jxnmby42pg60z.js";function T(){return e.jsx(b,{className:"icon-sm ml-1 text-token-text-tertiary"})}function A({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,hasPadding:u=!0,className:d,disabled:m=!1}){const c=S(),f=h(),g=y(),{variables:p,mutate:x}=F({mutationFn:({feature:t,enabled:j})=>k.setWorkspaceBetaFeature(i,t,j),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(q.featureSettingsUpdateFailed))}});return e.jsxs(N,{className:v(`justify-start ${u?"py-6":"py-0"}`,d),children:[e.jsx(M,{label:"",disabled:m,enabled:p?.enabled??l,onChange:t=>{x({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(w,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(T,{})})]})]})}const q=I({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{A as B,T as S};
//# sourceMappingURL=e08m0z7ehxia3j45.js.map