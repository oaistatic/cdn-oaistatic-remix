import{L as a,w as n,m as r,bS as d,gG as m}from"./dfm2yceao9m2ilo9.js";import{dz as u,dl as p,dB as f,dC as c}from"./o7wih49jz3zkdcav.js";function z(i){const{data:{gizmos:e}={}}=u();return e?e.some(s=>s.resource.gizmo.id===i):!1}function l({gizmoResource:i}){const e=z(i.gizmo.id),s=a(),o=e?s.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):s.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),t=n();return r.jsx(d.Item,{onClick:()=>{p.updateGizmoSidebar(t,f,i.gizmo.id,e?"hide":"keep")},icon:e?m:c,children:o})}export{l as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=cd9mg5fj3i2vbnby.js.map