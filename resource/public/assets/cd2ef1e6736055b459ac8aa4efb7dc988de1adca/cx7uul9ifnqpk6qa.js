import{a0 as f,r as M,y as e,bs as h,ae as p,dT as c,L as m}from"./i5bamk05qmvsi6c3.js";import{a as g}from"./ke6ca343lrs30bzf.js";import{d as x}from"./hyvagn7wiyqjw66o.js";import{bt as v,bu as j,bv as R,bw as z,bx as b,by as y}from"./b5wtmoh4inpzei0d.js";import{R as G}from"./n32lok680xrfiyr3.js";function T({gizmoId:s,onClose:a}){const{data:o}=g(s),{data:t}=z(c.Gizmo),n=f(),i=b(n,s,c.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(y,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function D({gizmoId:s,clientThreadId:a,onClose:o}){const t=f(),n=m("1855896025")?.value,i=m("3376455464")?.value,r=x(a),[d,u]=M.useState();return!n||!i||d==="gpt"||r==null?e.jsx(T,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(G,{serverThreadId:r,onClose:o}):e.jsxs(h,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(v,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(j,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),u("conversation")},children:e.jsx(p,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),u("gpt")},children:e.jsx(p,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{T as G,D as a};
//# sourceMappingURL=cx7uul9ifnqpk6qa.js.map
