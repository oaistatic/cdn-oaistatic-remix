import{a4 as m,e as R,r as o,j as S}from"./nqo5y2f0dorhrqsr.js";import{F as _,J as E,dl as h,dm as p}from"./dh0yl0m9q337gmci.js";const f="chatgpt://oauth_complete";function U(){const{pluginId:a,code:i,state:n,error:r,errorDesc:c}=m(),t=R(),u=o.useRef(!1);o.useEffect(()=>{if(u.current===!0)return;u.current=!0;async function d(){const g=`https://chat.openai.com/aip/${a}/oauth/callback`;try{const e=await E.pluginOauthCallback(a,i,g,n);if(e.success)if(e.redirect_path===f)window.location.href=f;else{const s=new URL(h(p.OAUTH_SUCCESS,e.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),t(s.pathname+s.search+s.hash)}else t(h(p.CUSTOM_ERROR,e.redirect_path,e.error??e.message))}catch{t({pathname:"/",search:new URLSearchParams({model:"gpt-4-plugins",loginAip:a,loginSuccess:"false"}).toString()})}}d()},[a,i,n,t]);const l=_();return o.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),S.jsx("div",{})}export{U as default};
//# sourceMappingURL=dj00jd0e206r6c41.js.map
