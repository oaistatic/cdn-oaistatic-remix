import{aj as r,j as t,a6 as n}from"./l3hptpare9m1mqfv.js";import{D as m}from"./ds7myuf7nkx8b20x.js";import{aZ as d,a5 as p}from"./km9gro7xi1t4gs2t.js";import{bT as u,c3 as f,c4 as c}from"./c7sgref9mfwezh7s.js";function b(i){const{data:{gizmos:e}={}}=u();return e?e.some(o=>o.resource.gizmo.id===i):!1}function G({gizmoResource:i}){const e=b(i.gizmo.id),o=r(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),a=t();return n.jsx(m.Item,{onClick:()=>{f.updateGizmoSidebar(a,c,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{G as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=i7vbk6qji9omdtbr.js.map