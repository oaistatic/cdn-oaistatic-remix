import{r as a,f$ as M,L as y,O as N,a9 as T,m as _,W as m,dH as i,dI as u,f6 as D,R as b,K as A}from"./dfm2yceao9m2ilo9.js";import{G as v}from"./o7wih49jz3zkdcav.js";function I(){const p=a.useRef(!1),[g,E]=a.useState(""),{code:c,error:l,error_description:f,state:r}=Object.fromEntries(new URLSearchParams(g.substring(1)).entries()),t=M().pluginId,n=y(),C=N(),s=T();return a.useEffect(()=>{E(window.location.hash)},[]),a.useEffect(()=>{if(p.current)return;t&&c&&r&&(p.current=!0);async function S(){const O=window.location.origin+`/ca/${t}/oauth/callback`;if(!t||!c||!r){s("/");return}const e=await m.connectorOauthCallback(t,c,O,r);if(!e.success){s(i(u.CUSTOM_ERROR,e.redirect_path,e.error??e.message));return}let o=D.SLACK_SYNC_CONNECTOR;t===v&&(o=D.GDRIVE_SYNC_CONNECTOR);try{const h=await b.safePost("/connectors/{connector_name}/connect_account",{parameters:{path:{connector_name:o}},requestBody:{}});if(!h.success){await m.deleteUserConnectedApp(o);let R=d.connectedDriveErrorDesc;h.status_code===405&&(R=d.emailNotMatchDesc),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(R)));return}}catch{await m.deleteUserConnectedApp(o),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(d.connectedDriveErrorDesc)));return}s(i(u.CUSTOM_MSG,e.redirect_path,n.formatMessage(d.connectedDriveSyncDesc)))}S()},[t,c,r,n,s]),a.useEffect(()=>{l&&C.danger(`${l}${f?`: ${f}`:""}`)},[l,f,C]),_.jsx(_.Fragment,{})}const d=A({connectedDriveSyncDesc:{id:"CACallback.connectedDriveSyncDesc.1",defaultMessage:"Your account has been connected."},connectedDriveErrorDesc:{id:"CACallback.connectedDriveErrorDesc.1",defaultMessage:"We encountered an issue. Please retry and contact your admin if this issue persists."},emailNotMatchDesc:{id:"CACallback.emailNotMatchDesc.1",defaultMessage:"The account you're trying to connect to doesn't match your ChatGPT account"}});export{I as default};
//# sourceMappingURL=opjl3j2yohc5hnn1.js.map