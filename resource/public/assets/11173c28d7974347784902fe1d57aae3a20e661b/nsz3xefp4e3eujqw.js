import{c as a,a as r,j as n}from"./nqo5y2f0dorhrqsr.js";import{bR as d,fX as m}from"./dh0yl0m9q337gmci.js";import{dJ as u,dn as f,dL as p,dM as c}from"./ktiwgucld5a8s55m.js";function b(i){const{data:{gizmos:e}={}}=u();return e?e.some(s=>s.resource.gizmo.id===i):!1}function I({gizmoResource:i}){const e=b(i.gizmo.id),s=a(),o=e?s.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):s.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),t=r();return n.jsx(d.Item,{onClick:()=>{f.updateGizmoSidebar(t,p,i.gizmo.id,e?"hide":"keep")},icon:e?m:c,children:o})}export{I as GizmoKeepInSidebarMenuItem};