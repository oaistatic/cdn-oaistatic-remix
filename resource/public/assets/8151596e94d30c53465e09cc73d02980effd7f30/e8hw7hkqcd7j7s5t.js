import{m as e,G as S,H as y,w as F,x as M,L as b,aC as h,aS as n,aJ as k,F as v}from"./g92hdia1euilhv3m.js";import{c as w}from"./j9bb93dkfix5hp9e.js";import{aO as C}from"./l912w0bwi7cbhgoi.js";import{A as I}from"./ce6kgdte6riev9xt.js";function N(){return e.jsx(w,{className:"icon-sm ml-1 text-token-text-tertiary"})}function U({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,hasPadding:u=!0,className:d,disabled:m=!1}){const c=S(),f=y(),g=F(),{variables:x,mutate:p}=M({mutationFn:({feature:t,enabled:j})=>b.setWorkspaceBetaFeature(i,t,j),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(T.featureSettingsUpdateFailed))}});return e.jsxs(I,{className:h(`justify-start ${u?"py-6":"py-0"}`,d),children:[e.jsx(C,{label:"",disabled:m,enabled:x?.enabled??l,onChange:t=>{p({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(k,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(N,{})})]})]})}const T=v({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{U as B,N as S};
//# sourceMappingURL=e8hw7hkqcd7j7s5t.js.map