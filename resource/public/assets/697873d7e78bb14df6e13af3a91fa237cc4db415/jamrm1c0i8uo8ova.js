import{f$ as S,a9 as E,r as s,O as m,W as C,dH as u,dI as h}from"./dfm2yceao9m2ilo9.js";function g(){const{pluginId:e}=S(),t=E(),l=s.useRef(!1),[d,p]=s.useState(""),{code:r,error:o,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(d.substring(1)).entries());s.useEffect(()=>{p(window.location.hash)},[]),s.useEffect(()=>{if(l.current)return;if(e&&r&&c)l.current=!0;else{t("/");return}async function R(){const O=window.location.origin+`/ccc/${e}/oauth/callback`;if(!(!e||!r||!c))try{const a=await C.connectorOauthCallback(e,r,O,c);if(a.success){const n=new URL(u(h.OAUTH_SUCCESS,a.redirect_path),location.origin);n.searchParams.set("oauth_success","true"),t(n.pathname+n.search+n.hash)}else t(u(h.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t(u(h.CUSTOM_ERROR))}}R()},[e,r,c,t]);const f=m();return s.useEffect(()=>{o&&f.danger(`${o}${i?`: ${i}`:""}`)},[o,i,f]),null}export{g as default};
//# sourceMappingURL=jamrm1c0i8uo8ova.js.map