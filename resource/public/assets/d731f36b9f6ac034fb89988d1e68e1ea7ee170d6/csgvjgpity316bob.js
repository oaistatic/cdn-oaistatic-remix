import{j as e,M as t,e as c,f as h,r as l}from"./lklglvrzltpv3f05.js";import{f as g,P as p,br as f}from"./i7de8yvdg4jlu6h0.js";import{A as m,a as y,b as E}from"./oyxhb3n4vhc6e4ki.js";import{b4 as v,b5 as A}from"./mc2tj3xhtcshtn61.js";const r=g({oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"},systemBusyError:{id:"AuthError.systemBusyError",defaultMessage:"Our systems are a bit busy at the moment, please take a break and try again soon."},identityProviderMismatch:{id:"AuthError.identityProviderMismatch",defaultMessage:"You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method."},accountDeactivated:{id:"AuthError.accountDeactivated",defaultMessage:"You do not have an account because it has been deleted or deactivated. If you believe this was an error, please contact us through our help center at help.openai.com."},unsupportedCountry:{id:"AuthError.unsupportedCountry",defaultMessage:"OpenAI's services are not available in your country."},unsupportedRegion:{id:"AuthError.unsupportedRegion",defaultMessage:"OpenAI's services are not available in your region."},unknownCountry:{id:"AuthError.unknownCountry",defaultMessage:"We were unable to determine your country of origin to enforce geographical restrictions. Please use a different network, or contact us at help.openai.com if the issue persists."},ssoRequired:{id:"AuthError.ssoRequired",defaultMessage:"Please use your organization's SSO to access your account."},mfaBypass:{id:"AuthError.mfaBypass",defaultMessage:"Your account is protected with multi-factor authentication. Please log in again using the method you set that up with."},defaultError:{id:"AuthError.defaultError",defaultMessage:"We ran into an issue while signing you in, please take a break and try again soon."}}),i=e.jsx(t,{...r.systemBusyError}),x="mfa_bypass",n={RequestTimeout:i,AuthRateLimit:i,identity_provider_mismatch:e.jsx(t,{...r.identityProviderMismatch}),account_deactivated:e.jsx(t,{...r.accountDeactivated}),unsupported_country:e.jsx(t,{...r.unsupportedCountry}),unsupported_region:e.jsx(t,{...r.unsupportedRegion}),unknown_country:e.jsx(t,{...r.unknownCountry}),sso_required:e.jsx(t,{...r.ssoRequired}),default:e.jsx(t,{...r.defaultError})};function k(){return e.jsx(j,{})}function M(o){const s=o.split("|");return s.length>1?s[1]:void 0}function b(o){if(o in n)return n[o];if(o.startsWith(x)){const s=M(o),a=(s===void 0?void 0:A[s])??"your other account you set that up with";return e.jsx(t,{id:"AuthError.mfaBypass2",defaultMessage:"Your account is protected with multi-factor authentication. Please log in with {providerLabel} to provide the verification code.",values:{providerLabel:a}})}else return n.default}function j(){const o=c(),[s]=h(),a=s.get("error")??"",u=b(a);return l.useEffect(()=>{if(a!==void 0){const d=sessionStorage.getItem(v)??"unknown";p.logAuthErrorResponse(a,d)}},[a]),e.jsx(m,{isStorageComplianceEnabled:!1,children:e.jsxs(y,{children:[e.jsx(E,{}),e.jsx("div",{className:"mb-2 text-center text-lg",children:e.jsx(t,{...r.oops})}),e.jsx("div",{className:"mb-5 text-center",children:u}),e.jsx(f,{as:"button",color:"secondary",onClick:()=>o("/auth/login",{replace:!0}),children:e.jsx(t,{...r.goBack})})]})})}export{k as default};
//# sourceMappingURL=csgvjgpity316bob.js.map
