import{ei as d,$ as m,r as i,K as S,j as R,O as E,cv as h,cw as p}from"./e9yuj0ll30e3kmlx.js";import"./mhi0wfvgf6n45t1b.js";function T(){const{pluginId:e,code:o,state:n,error:r,errorDesc:c}=d(),t=m(),u=i.useRef(!1);i.useEffect(()=>{if(u.current===!0)return;u.current=!0;async function f(){const g=`https://chat.openai.com/aip/${e}/oauth/callback`;try{const a=await E.pluginOauthCallback(e,o,g,n);if(a.success){const s=new URL(h(p.OAUTH_SUCCESS,a.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),t(s.pathname+s.search+s.hash)}else t(h(p.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t({pathname:"/",search:new URLSearchParams({model:"gpt-4-plugins",loginAip:e,loginSuccess:"false"}).toString()})}}f()},[e,o,n,t]);const l=S();return i.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),R.jsx("div",{})}export{T as default};
//# sourceMappingURL=lmsm3sdju48uy185.js.map
