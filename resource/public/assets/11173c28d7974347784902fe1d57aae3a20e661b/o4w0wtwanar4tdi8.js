import{f as n,h as c,j as l}from"./ktiwgucld5a8s55m.js";import{cd as u}from"./dh0yl0m9q337gmci.js";import{f as i,r as f,k as h}from"./nqo5y2f0dorhrqsr.js";function P(){const[t]=i(),e=t.get("next"),r=e?.startsWith("/")?e:"/",a="/auth/ext_callback_refresh?next="+encodeURIComponent(r),s=n();return f.useEffect(()=>{const o=s??c(t,!1,!1);h.signIn(o,{callbackUrl:a||"/"},{...l(u())})},[]),null}export{P as default};