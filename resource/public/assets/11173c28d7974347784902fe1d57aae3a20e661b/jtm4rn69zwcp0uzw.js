import{J as o,dl as n,dm as a}from"./dh0yl0m9q337gmci.js";import{u as r}from"./nqo5y2f0dorhrqsr.js";const s=async()=>{try{const t=await o.requestMfaToken();if(!t||!t.state_token)throw new Error("Failed to fetch MFA token");return t.state_token}catch{window.location.href=n(a.ENABLE_MFA_ERROR,"/#settings/Security")}};function c(){const{data:t}=r({queryKey:["mfaToken"],queryFn:s});if(t){const e="ChatGPT";window.location.href=`https://auth.openai.com/totp_enroll?origin_app_name=${e}&mfa_token=${t}`}return null}export{c as default};
//# sourceMappingURL=jtm4rn69zwcp0uzw.js.map
