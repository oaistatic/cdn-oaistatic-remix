import{dF as S,bE as m,r as s,aK as O,j as C,c3 as u,c4 as h}from"./j51q469vqqyswwq0.js";import"./nakmlpxnz8km92cm.js";function g(){const{pluginId:e}=S(),t=m(),l=s.useRef(!1),[p,R]=s.useState(""),{code:r,error:o,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(p.substring(1)).entries());s.useEffect(()=>{R(window.location.hash)},[]),s.useEffect(()=>{if(l.current)return;if(e&&r&&c)l.current=!0;else{t("/");return}async function d(){const E=`${window.location.origin}/ccc/${e}/oauth/callback`;if(!(!e||!r||!c))try{const a=await C.connectorOauthCallback(e,r,E,c);if(a.success){const n=new URL(u(h.OAUTH_SUCCESS,a.redirect_path),location.origin);n.searchParams.set("oauth_success","true"),t(n.pathname+n.search+n.hash)}else t(u(h.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t(u(h.CUSTOM_ERROR))}}d()},[e,r,c,t]);const f=O();return s.useEffect(()=>{o&&f.danger(`${o}${i?`: ${i}`:""}`)},[o,i,f]),null}export{g as default};
//# sourceMappingURL=j4hrl7xioo1j1cru.js.map
