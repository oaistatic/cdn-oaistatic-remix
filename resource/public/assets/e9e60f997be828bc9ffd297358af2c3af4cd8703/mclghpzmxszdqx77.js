import{dE as S,bc as b,r as s,a9 as m,l as O,bM as u,bN as h}from"./du9ygo55hccsm0ec.js";import"./ibjw18ivx5tw615x.js";function g(){const{pluginId:e}=S(),t=b(),l=s.useRef(!1),[p,R]=s.useState(""),{code:r,error:o,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(p.substring(1)).entries());s.useEffect(()=>{R(window.location.hash)},[]),s.useEffect(()=>{if(l.current)return;if(e&&r&&c)l.current=!0;else{t("/");return}async function d(){const E=${window.location.origin}+`/ccc/${e}/oauth/callback`;if(!(!e||!r||!c))try{const a=await O.connectorOauthCallback(e,r,E,c);if(a.success){const n=new URL(u(h.OAUTH_SUCCESS,a.redirect_path),location.origin);n.searchParams.set("oauth_success","true"),t(n.pathname+n.search+n.hash)}else t(u(h.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t(u(h.CUSTOM_ERROR))}}d()},[e,r,c,t]);const f=m();return s.useEffect(()=>{o&&f.danger(`${o}${i?`: ${i}`:""}`)},[o,i,f]),null}export{g as default};
//# sourceMappingURL=mclghpzmxszdqx77.js.map
