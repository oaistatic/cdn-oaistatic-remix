import{r as a,N as O,aj as N,a7 as y,Z as T,a6 as D,K as m,cq as i,cr as u,ds as R,h as b,ak as A}from"./l3hptpare9m1mqfv.js";import{a0 as k}from"./c7sgref9mfwezh7s.js";import"./km9gro7xi1t4gs2t.js";function I(){const p=a.useRef(!1),[g,E]=a.useState(""),{code:c,error:l,error_description:f,state:r}=Object.fromEntries(new URLSearchParams(g.substring(1)).entries()),t=O().pluginId,n=N(),C=y(),s=T();return a.useEffect(()=>{E(window.location.hash)},[]),a.useEffect(()=>{if(p.current)return;t&&c&&r&&(p.current=!0);async function S(){const M=window.location.origin+`/ca/${t}/oauth/callback`;if(!t||!c||!r){s("/");return}const e=await m.connectorOauthCallback(t,c,M,r);if(!e.success){s(i(u.CUSTOM_ERROR,e.redirect_path,e.error??e.message));return}let o=R.SLACK_SYNC_CONNECTOR;t===k&&(o=R.GDRIVE_SYNC_CONNECTOR);try{const h=await b.safePost("/connectors/{connector_name}/connect_account",{parameters:{path:{connector_name:o}},requestBody:{}});if(!h.success){await m.deleteUserConnectedApp(o);let _=d.connectedDriveErrorDesc;h.status_code===405&&(_=d.emailNotMatchDesc),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(_)));return}}catch{await m.deleteUserConnectedApp(o),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(d.connectedDriveErrorDesc)));return}s(i(u.CUSTOM_MSG,e.redirect_path,n.formatMessage(d.connectedDriveSyncDesc)))}S()},[t,c,r,n,s]),a.useEffect(()=>{l&&C.danger(`${l}${f?`: ${f}`:""}`)},[l,f,C]),D.jsx(D.Fragment,{})}const d=A({connectedDriveSyncDesc:{id:"CACallback.connectedDriveSyncDesc.1",defaultMessage:"Your account has been connected."},connectedDriveErrorDesc:{id:"CACallback.connectedDriveErrorDesc.1",defaultMessage:"We encountered an issue. Please retry and contact your admin if this issue persists."},emailNotMatchDesc:{id:"CACallback.emailNotMatchDesc.1",defaultMessage:"The account you're trying to connect to doesn't match your ChatGPT account"}});export{I as default};
//# sourceMappingURL=jzq1guk7raw23elq.js.map
