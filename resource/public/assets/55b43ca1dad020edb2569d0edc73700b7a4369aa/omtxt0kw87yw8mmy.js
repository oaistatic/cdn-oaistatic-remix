import{a2 as m,e as R,r as o,j as S}from"./i8w88cc8b3gds516.js";import{y as _,aa as E,dJ as h,dK as p}from"./eh26o1l35t2fnjj4.js";const f="chatgpt://oauth_complete";function U(){const{pluginId:e,code:i,state:n,error:r,errorDesc:c}=m(),t=R(),u=o.useRef(!1);o.useEffect(()=>{if(u.current===!0)return;u.current=!0;async function d(){const g=`https://chat.openai.com/aip/${e}/oauth/callback`;try{const a=await E.pluginOauthCallback(e,i,g,n);if(a.success)if(a.redirect_path===f)window.location.href=f;else{const s=new URL(h(p.OAUTH_SUCCESS,a.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),t(s.pathname+s.search+s.hash)}else t(h(p.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t({pathname:"/",search:new URLSearchParams({model:"gpt-4-plugins",loginAip:e,loginSuccess:"false"}).toString()})}}d()},[e,i,n,t]);const l=_();return o.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),S.jsx("div",{})}export{U as default};
//# sourceMappingURL=omtxt0kw87yw8mmy.js.map
