import{y as e,X as y,a9 as S,u as F,h as b,l as M,O as h,a1 as n,an as k,a6 as v}from"./du9ygo55hccsm0ec.js";import{a as I}from"./ibjw18ivx5tw615x.js";import{bx as N}from"./hc0go6t8u8it292j.js";import{A as T}from"./otc6otg6r0pvcjy9.js";function q(){return e.jsx(I,{className:"icon-sm ml-1 text-token-text-tertiary"})}function U({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,hasPadding:u=!0,className:d,disabled:m=!1}){const c=y(),f=S(),g=F(),{variables:x,mutate:p}=b({mutationFn:({feature:t,enabled:j})=>M.setWorkspaceBetaFeature(i,t,j),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(w.featureSettingsUpdateFailed))}});return e.jsxs(T,{className:h(`justify-start ${u?"py-6":"py-0"}`,d),children:[e.jsx(N,{label:"",disabled:m,enabled:x?.enabled??l,onChange:t=>{p({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(k,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(q,{})})]})]})}const w=v({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{U as B,q as S};
//# sourceMappingURL=bs6ptomhbeahvm2j.js.map
