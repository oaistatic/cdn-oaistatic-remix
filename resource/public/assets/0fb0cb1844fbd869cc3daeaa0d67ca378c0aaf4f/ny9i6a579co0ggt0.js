import{Q as m,a3 as E,r as a,Z as O,N as C,cs as u,ct as h}from"./gqmy69lfum1xn3in.js";import"./i4z8naqcr3t3djqa.js";function b(){const{pluginId:t}=m(),e=E(),l=a.useRef(!1),[p,R]=a.useState(""),{code:r,error:o,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(p.substring(1)).entries());a.useEffect(()=>{R(window.location.hash)},[]),a.useEffect(()=>{if(l.current)return;if(t&&r&&c)l.current=!0;else{e("/");return}async function S(){const d=window.location.origin+`/ccc/${t}/oauth/callback`;if(!(!t||!r||!c))try{const s=await C.connectorOauthCallback(t,r,d,c);if(s.success){const n=new URL(u(h.OAUTH_SUCCESS,s.redirect_path),location.origin);n.searchParams.set("oauth_success","true"),e(n.pathname+n.search+n.hash)}else e(u(h.CUSTOM_ERROR,s.redirect_path,s.error??s.message))}catch{e(u(h.CUSTOM_ERROR))}}S()},[t,r,c,e]);const f=O();return a.useEffect(()=>{o&&f.danger(`${o}${i?`: ${i}`:""}`)},[o,i,f]),null}export{b as default};
//# sourceMappingURL=ny9i6a579co0ggt0.js.map
