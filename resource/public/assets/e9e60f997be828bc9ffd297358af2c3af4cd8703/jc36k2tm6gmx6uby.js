import{dJ as b,bh as m,r as s,a9 as E,l as O,bR as u,bS as h}from"./o1ivbuadejprpakj.js";import"./hpmltgx65508529x.js";function g(){const{pluginId:e}=b(),t=m(),l=s.useRef(!1),[p,R]=s.useState(""),{code:r,error:o,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(p.substring(1)).entries());s.useEffect(()=>{R(window.location.hash)},[]),s.useEffect(()=>{if(l.current)return;if(e&&r&&c)l.current=!0;else{t("/");return}async function S(){const d=${window.location.origin}+`/ccc/${e}/oauth/callback`;if(!(!e||!r||!c))try{const a=await O.connectorOauthCallback(e,r,d,c);if(a.success){const n=new URL(u(h.OAUTH_SUCCESS,a.redirect_path),location.origin);n.searchParams.set("oauth_success","true"),t(n.pathname+n.search+n.hash)}else t(u(h.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t(u(h.CUSTOM_ERROR))}}S()},[e,r,c,t]);const f=E();return s.useEffect(()=>{o&&f.danger(`${o}${i?`: ${i}`:""}`)},[o,i,f]),null}export{g as default};
//# sourceMappingURL=jc36k2tm6gmx6uby.js.map
