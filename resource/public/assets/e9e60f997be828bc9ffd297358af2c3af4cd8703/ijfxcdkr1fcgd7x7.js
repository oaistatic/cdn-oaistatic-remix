import{dh as g,bc as m,r as o,a9 as S,y as R,l as b,bM as h,bN as p}from"./du9ygo55hccsm0ec.js";import"./ibjw18ivx5tw615x.js";function _(){const{pluginId:e,code:i,state:n,error:r,errorDesc:c}=g(),t=m(),u=o.useRef(!1);o.useEffect(()=>{if(u.current===!0)return;u.current=!0;async function f(){const d=`https://chat.openai.com/aip/${e}/oauth/callback`;try{const a=await b.pluginOauthCallback(e,i,d,n);if(a.success){const s=new URL(h(p.OAUTH_SUCCESS,a.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),t(s.pathname+s.search+s.hash)}else t(h(p.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t({pathname:"/",search:new URLSearchParams({model:"gpt-4-plugins",loginAip:e,loginSuccess:"false"}).toString()})}}f()},[e,i,n,t]);const l=S();return o.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),R.jsx("div",{})}export{_ as default};
//# sourceMappingURL=ijfxcdkr1fcgd7x7.js.map
