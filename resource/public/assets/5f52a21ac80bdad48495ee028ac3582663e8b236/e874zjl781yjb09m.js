import{F as S,J as E,dm as u,dn as h}from"./muemwvh3ybsggbb1.js";import{X as O,e as C,r as a}from"./lklglvrzltpv3f05.js";function b(){const{pluginId:e}=O(),t=C(),l=a.useRef(!1),[p,d]=a.useState(""),{code:r,error:o,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(p.substring(1)).entries());a.useEffect(()=>{d(window.location.hash)},[]),a.useEffect(()=>{if(l.current)return;if(e&&r&&c)l.current=!0;else{t("/");return}async function m(){const R=window.location.origin+`/ccc/${e}/oauth/callback`;if(!(!e||!r||!c))try{const s=await E.connectorOauthCallback(e,r,R,c);if(s.success){const n=new URL(u(h.OAUTH_SUCCESS,s.redirect_path),location.origin);n.searchParams.set("oauth_success","true"),t(n.pathname+n.search+n.hash)}else t(u(h.CUSTOM_ERROR,s.redirect_path,s.error??s.message))}catch{t(u(h.CUSTOM_ERROR))}}m()},[e,r,c,t]);const f=S();return a.useEffect(()=>{o&&f.danger(`${o}${i?`: ${i}`:""}`)},[o,i,f]),null}export{b as default};
//# sourceMappingURL=e874zjl781yjb09m.js.map
