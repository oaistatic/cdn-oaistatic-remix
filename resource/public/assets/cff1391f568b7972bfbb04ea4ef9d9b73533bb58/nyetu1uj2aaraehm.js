import{a6 as e,aj as S,a7 as y,j as F,l as b,K as M,ar as k,aH as n,aZ as h,ak as v}from"./l3hptpare9m1mqfv.js";import{c as I}from"./km9gro7xi1t4gs2t.js";import{bp as N}from"./c7sgref9mfwezh7s.js";import{A as T}from"./o0xgdlw3jzdgpfmv.js";function q(){return e.jsx(I,{className:"icon-sm ml-1 text-token-text-tertiary"})}function A({workspaceId:r,Icon:s,label:i,feature:o,value:l,tooltip:a,hasPadding:u=!0,className:d,disabled:m=!1}){const c=S(),f=y(),g=F(),{variables:p,mutate:x}=b({mutationFn:({feature:t,enabled:j})=>M.setWorkspaceBetaFeature(r,t,j),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(w.featureSettingsUpdateFailed))}});return e.jsxs(T,{className:k(`justify-start ${u?"py-6":"py-0"}`,d),children:[e.jsx(N,{label:"",disabled:m,enabled:p?.enabled??l,onChange:t=>{x({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...i}),a&&e.jsx(h,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(q,{})})]})]})}const w=v({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{A as B,q as S};
//# sourceMappingURL=nyetu1uj2aaraehm.js.map
