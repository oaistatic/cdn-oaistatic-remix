import{J as M,r as h,j as e,bA as g,aC as c,dR as p,u as m}from"./lj2b9v3ilohzzubf.js";import{b5 as f,b6 as x,b7 as b,b8 as j,b9 as R,ba as v,bb as z,bc as G,bd as y}from"./m2xe8hrs3fe8d0zo.js";function C({gizmoId:s,onClose:r}){const{data:o}=v(s),{data:t}=z(p.Gizmo),n=M(),i=G(n,s,p.Gizmo);if(t==null)return null;const a=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(y,{reasons:t.reasons,submitReport:i,title:a,onClose:r,header:t.header,subHeader:t.header_explanation})}function E({gizmoId:s,clientThreadId:r,onClose:o}){const t=M(),n=m("1855896025")?.value,i=m("3376455464")?.value,a=f(r),[d,u]=h.useState();return!n||!i||d==="gpt"||a==null?e.jsx(C,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(x,{serverThreadId:a,onClose:o}):e.jsxs(g,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(b,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(j,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),u("conversation")},children:e.jsx(c,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),u("gpt")},children:e.jsx(c,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{C as G,E as a};
//# sourceMappingURL=hu1goazg91sifbq6.js.map
