import{c as R,r as h,j as e,M as c}from"./nqo5y2f0dorhrqsr.js";import{ek as f,bL as g,eM as p,u as m}from"./dh0yl0m9q337gmci.js";import{aH as x,aI as j,aJ as v,aK as M,aL as z,aM as G,aN as y,aO as T}from"./ktiwgucld5a8s55m.js";function C({gizmoId:s,onClose:r}){const{data:o}=z(s),{data:t}=G(p.Gizmo),n=R(),i=y(n,s,p.Gizmo);if(t==null)return null;const a=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(T,{reasons:t.reasons,submitReport:i,title:a,onClose:r,header:t.header,subHeader:t.header_explanation})}function E({gizmoId:s,clientThreadId:r,onClose:o}){const t=R(),n=m("1855896025")?.value,i=m("3376455464")?.value,a=f(r),[u,d]=h.useState();return!n||!i||u==="gpt"||a==null?e.jsx(C,{gizmoId:s,onClose:o}):u==="conversation"?e.jsx(x,{serverThreadId:a,onClose:o}):e.jsxs(g,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(j,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(v,{children:[e.jsx(M,{onClick:l=>{l.preventDefault(),d("conversation")},children:e.jsx(c,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(M,{onClick:l=>{l.preventDefault(),d("gpt")},children:e.jsx(c,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{C as G,E as a};
//# sourceMappingURL=czsmuml2szqqy1d1.js.map