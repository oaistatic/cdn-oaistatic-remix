import{J as t,m as r,j as n,aW as m}from"./e9yuj0ll30e3kmlx.js";import{aS as d,R as u}from"./mhi0wfvgf6n45t1b.js";import{db as p,cW as f,de as c}from"./ihoxwwe79kyl4jef.js";function b(i){const{data:{gizmos:e}={}}=p();return e?e.some(s=>s.resource.gizmo.id===i):!1}function I({gizmoResource:i}){const e=b(i.gizmo.id),s=t(),o=e?s.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):s.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),a=r();return n.jsx(m.Item,{onClick:()=>{f.updateGizmoSidebar(a,c,i.gizmo.id,e?"hide":"keep")},icon:e?d:u,children:o})}export{I as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=omh7yh5r7uvfoy42.js.map