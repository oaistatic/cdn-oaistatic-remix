const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/j46875ild3gage9f.js","assets/dfm2yceao9m2ilo9.js","assets/root-mg58v26q.css","assets/o7wih49jz3zkdcav.js","assets/conversation-small-ile61fj8.css","assets/b0glygzf0il6a37a.js","assets/b26k4otrrempmlcn.js","assets/beuim4fl46eljdtf.js","assets/ocf3zsnt570d6j2n.js"])))=>i.map(i=>d[i]);
import{r as m,L as R,m as e,b6 as i,bn as B,bS as I,K as F,cJ as D,cI as z,aE as Q,O as ee,cZ as G,b3 as te,b4 as se,u as ne,w as oe,fl as ae,cP as ie}from"./dfm2yceao9m2ilo9.js";import{S as le}from"./n2jol51kjzmqjiuf.js";import{gs as re,cW as p,gt as de,fj as ce,gu as ue,cs as ge,aD as K,gv as me,gw as fe,gx as Y,gy as pe,aR as xe,gz as ye,e$ as U,gA as he,gB as Se,gC as be,gD as E,fY as Z,c9 as Me}from"./o7wih49jz3zkdcav.js";import{S as ve}from"./loa6txsy0p4dc7kk.js";import{j as je}from"./jk8w36bsokizpx57.js";import{a as Ce,b as Ie,u as we,d as De}from"./oqmax98k4d2jzqaz.js";import{f as H,a as Ae,d as V,e as q}from"./beuim4fl46eljdtf.js";import"./kb6nlpjb6lfuuize.js";import"./ni648vdhvct9krhm.js";import"./oj002yr1cv5905d0.js";import"./ccrdffu4uq6bo5k0.js";import"./bukl7xv9oirq4ooz.js";const Te=t=>m.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C10.3431 4 8.99999 5.34315 8.99999 7C8.99999 8.65685 10.3431 10 12 10C13.6568 10 15 8.65685 15 7C15 5.34315 13.6568 4 12 4ZM6.99999 7C6.99999 4.23858 9.23857 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23857 12 6.99999 9.76142 6.99999 7ZM12 15C8.55615 15 5.73716 17.6788 5.51424 21.0657C5.47796 21.6168 5.00181 22.0341 4.45072 21.9978C3.89962 21.9616 3.48228 21.4854 3.51855 20.9343C3.81022 16.5031 7.49559 13 12 13C12.3833 13 12.7613 13.0254 13.1321 13.0748C13.6795 13.1478 14.0642 13.6507 13.9912 14.1982C13.9183 14.7456 13.4154 15.1303 12.8679 15.0573C12.5844 15.0196 12.2948 15 12 15ZM17.9998 14C18.5521 14 18.9998 14.4476 18.9999 14.9999L19 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H19.0001V21C19.0001 21.5523 18.5524 22 18.0001 22C17.4478 22 17.0001 21.5523 17.0001 21V19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H17L16.9999 15.0001C16.9998 14.4478 17.4475 14 17.9998 14Z",fill:"currentColor"}));function ke({onRemoveDomainClick:t,onVerifyDomainClick:n}){return e.jsxs(I.Root,{children:[e.jsx(I.Trigger,{children:e.jsx(ge,{className:"icon-sm"})}),e.jsx(I.Portal,{children:e.jsxs(I.Content,{children:[e.jsx(I.Item,{onClick:t,children:e.jsx(i,{...A.ssoDropdownRemoveButtonText})}),e.jsx(I.Item,{onClick:n,children:e.jsx(i,{...A.ssoDropdownVerifyButtonText})})]})})]})}function Le({domains:t,workspaceId:n}){const o=R(),{mutateAsync:a}=re(n),[s,c]=m.useState(!1),[u,x]=m.useState();return e.jsxs(e.Fragment,{children:[e.jsxs(p.Root,{className:"w-full table-auto",children:[e.jsxs(p.Header,{children:[e.jsx(p.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(i,{...A.domainTableHeader})}),e.jsx(p.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(i,{...A.statusTableHeader})}),e.jsx(p.HeaderCell,{className:"bg-token-main-surface-primary"})]}),e.jsx(p.Body,{children:t.map((g,v)=>e.jsxs("tr",{onClick:()=>x(g),className:"cursor-pointer",children:[e.jsx(p.Cell,{children:g.hostname}),e.jsx(p.Cell,{children:o.formatMessage(de[g.status])}),e.jsx(p.Cell,{textAlign:"right",children:e.jsx("div",{onClick:j=>j.stopPropagation(),children:e.jsx(ke,{onRemoveDomainClick:()=>{a({domainId:g.id})},onVerifyDomainClick:()=>{x(g)}})})})]},v))})]}),e.jsx(B,{color:"secondary",className:"mt-6",onClick:()=>{c(!0)},icon:ce,children:e.jsx(i,{...A.addDomainButton})}),e.jsx(ue,{isOpen:s||u!==void 0,onClose:()=>{c(!1),x(void 0)},workspaceId:n,currentDomain:s?void 0:u,domains:t},u?.id)]})}const A=F({ssoDropdownRemoveButtonText:{id:"workspaceIdentity.ssoDropdownRemoveButtonText",defaultMessage:"Remove Domain"},ssoDropdownVerifyButtonText:{id:"workspaceIdentity.ssoDropdownVerifyButtonText",defaultMessage:"Verify"},domainTableHeader:{id:"workspaceIdentity.domainTableHeader",defaultMessage:"Domain"},statusTableHeader:{id:"workspaceIdentity.statusTableHeader",defaultMessage:"Status"},addDomainButton:{id:"workspaceIdentity.addDomainButton.0",defaultMessage:"Add domain"}}),Ee=async t=>new Promise((n,o)=>{const a=new FileReader;a.readAsText(t),a.onload=function(s){n(s.target?.result)},a.onerror=o});function Be({acsId:t,hasSSO:n}){const o=`https://auth0.openai.com/login/callback?connection=${t}`,a=`urn:auth0:openai:${t}`,s=`${location.host}/auth/login?sso=true&connection=${t}`,c=R(),u=ee();return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(i,{...d.setupSSOContent})}),e.jsxs("div",{className:"mb-6 flex flex-col space-y-4",children:[e.jsx(U,{label:"Assertion Consumer Service (ACS) URL",value:o,onCopied:()=>{u.success(c.formatMessage(d.copiedACSToClipboard),{duration:3})}}),e.jsx(U,{label:"Entity ID",value:a,onCopied:()=>{u.success(c.formatMessage(d.copiedEntityToClipboard),{duration:3})}}),n&&e.jsx(U,{label:c.formatMessage(d.idpSignInURL),value:s,onCopied:()=>{u.success(c.formatMessage(d.copiedIDPUrlToClipboard),{duration:3})}})]})]})}function Re({workspaceId:t,data:n,isOpen:o,onClose:a}){const s=R(),c=K(),{mutateAsync:u}=me(t),{mutateAsync:x}=fe(t),{mutateAsync:g}=Y(t),v=m.useRef(null),j=n?.connection,[S,w]=m.useState(j?.sign_in_endpoint),[X,y]=m.useState(!1),[b,T]=m.useState(j?.cert),h=n===null?1:2,O=async(r,f)=>{let L;try{L=await u({signInEndpoint:r,cert:f})}catch(C){if(C instanceof G&&C.code==="reauth_required"){y(!0);return}throw C}await g({connectionId:L.id,active:!0}),a()},k=h===1?e.jsx(D.Button,{title:s.formatMessage(d.doneButton),color:"primary",disabled:S===void 0||b===void 0,onClick:async()=>{S===void 0||b===void 0||await O(S,b)}}):n&&e.jsx(D.Button,{title:s.formatMessage(d.doneButton),color:"primary",onClick:async()=>{await g({connectionId:n?.id,cert:b,signInEndpoint:S,active:!0}),a()}}),P=n===null?e.jsx(D.Button,{title:s.formatMessage(d.cancelButton),color:"secondary",onClick:()=>a()}):e.jsx(B,{as:"link",color:"danger-outline",onClick:async()=>{await x({connectionId:n?.id}),a()},children:s.formatMessage(d.deleteButton)});return e.jsx(z,{isOpen:o,type:"success",title:s.formatMessage(h===1?d.createTitle:d.editTitle),primaryButton:k,secondaryButton:P,onClose:a,children:e.jsxs("form",{onSubmit:r=>r.preventDefault(),children:[e.jsx(pe,{children:e.jsx(i,{...d.createInstructionsManual})}),e.jsx("label",{htmlFor:"sign-in-url",className:"mb-2 flex items-center text-sm",children:e.jsx(i,{...d.signInLabel})}),e.jsx("div",{className:"mb-4",children:e.jsx(xe,{ariaLabel:!1,className:"w-full appearance-none rounded border px-3 py-2",name:"sign-in-url",type:"text",placeholder:"https://your.idp.here/saml2?idpid=123456",value:S??"",onChange:r=>{w(r.target.value)}})}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("label",{className:"text-sm",children:e.jsx(i,{...d.certLabel})}),e.jsx("input",{ref:v,type:"file",accept:".csv,.cer,.pem,text/plain",className:"hidden",onChange:async r=>{if(r.target.files?.[0]){const f=await Ee(r.target.files[0]);T(f)}}}),e.jsx(B,{color:"secondary",onClick:()=>v.current?.click(),icon:ye})]}),e.jsx("textarea",{rows:10,className:Q("w-full resize-none overflow-y-auto rounded border border-gray-300 px-3 py-2","outline-none focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600","text-token-text-primary placeholder-gray-500 dark:bg-gray-700"),placeholder:"-----BEGIN CERTIFICATE-----",value:b??"",onChange:r=>{T(r.target.value)}})]}),X&&e.jsx("label",{className:"text-token-text-error",children:e.jsx(i,{id:"ZfFabW",defaultMessage:"You need to re-authenticate to access this page. Please <login>log in</login> before continuing.",values:{login:r=>e.jsx("a",{href:"#",className:"text-token-text-primary underline",onClick:f=>{f.preventDefault(),c({authType:"login",callbackUrl:"/admin/identity"})},children:r})}})})]})})}const d=F({setupSSOContent:{id:"workspaceIdentity.setupSSOContent",defaultMessage:"Anyone using email addresses with a verified domain can log in via SAML SSO."},createInstructionsXML:{id:"ssoModal.createInstructionsXML",defaultMessage:"If your Identity Provider offers a metadata URL or an XML file, add it here for the quickest setup option."},createInstructionsManual:{id:"ssoModal.createInstructionsManual",defaultMessage:"Copy your Sign-in endpoint (SSO URL) and the public X.509 certificate from your Identity Provider."},createTitle:{id:"ssoModal.createTitle",defaultMessage:"Create SAML SSO Configuration"},editTitle:{id:"ssoModal.editTitle",defaultMessage:"Edit SAML SSO Configuration"},ssoMetadataLabel:{id:"ssoModal.ssoMetadataLabel",defaultMessage:"App Federation Metadata URL"},signInLabel:{id:"ssoModal.signInLabel",defaultMessage:"SSO URL"},certLabel:{id:"ssoModal.certLabel",defaultMessage:"X.509 Signing Certificate"},doneButton:{id:"ssoModal.doneButton",defaultMessage:"Done"},nextButton:{id:"ssoModal.nextButton",defaultMessage:"Next"},deleteButton:{id:"ssoModal.deleteButton",defaultMessage:"Delete configuration"},cancelButton:{id:"ssoModal.cancelButton",defaultMessage:"Cancel"},acsURLLabel:{id:"workspaceIdentity.acsURLLabel",defaultMessage:"Assertion Consumer Service (ACS) URL"},entityIDLabel:{id:"workspaceIdentity.entityIDLabel",defaultMessage:"Entity ID"},idpSignInURL:{id:"workspaceIdentity.idpSignInURL",defaultMessage:"IDP Tile URL"},copiedACSToClipboard:{id:"workspaceIdentity.copiedACSToClipboard",defaultMessage:"Copied ACS URL to clipboard"},copiedEntityToClipboard:{id:"workspaceIdentity.copiedEntityToClipboard",defaultMessage:"Copied entity ID to clipboard"},copiedIDPUrlToClipboard:{id:"workspaceIdentity.copiedIDPUrlToClipboard",defaultMessage:"Copied IDP URL to clipboard"},orDivider:{id:"workspaceIdentity.orDivider",defaultMessage:"or"},certExtractFailed:{id:"workspaceIdentity.certExtractFailed",defaultMessage:"Unable to find X.509 Certificate in provided XML"},ssoUrlExtractFailed:{id:"workspaceIdentity.ssoUrlExtractFailed",defaultMessage:"Unable to find Entity ID (sign-in endpoint) in provided XML"},ssoLearnMoreLink:{id:"workspaceIdentity.ssoLearnMoreLink",defaultMessage:"Learn more"}}),Oe=te(()=>se(()=>import("./j46875ild3gage9f.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(t=>t.DirectorySyncSection)),Pe=({title:t,footer:n,children:o})=>e.jsxs(V,{children:[e.jsx(q,{children:e.jsx(i,{...t})}),e.jsx("div",{children:o}),e.jsx(H,{children:n})]}),N=({icon:t,title:n,body:o,toggle:a})=>e.jsxs(V,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{className:"icon-sm"}),e.jsx(q,{children:e.jsx(i,{...n})})]}),e.jsx("div",{children:a})]}),e.jsx(H,{children:o})]});function _e({currentWorkspaceId:t}){const{value:n}=ne("3999712942"),o=R(),a=oe(),{data:s,isLoading:c}=he(t),u=K(),{mutateAsync:x}=Y(t),{variables:g,mutateAsync:v}=Se(t),{variables:j,mutateAsync:S}=be(t),w=s?.sso_connection!=null,y=!!s?.domains?.some(M=>M.status===ae.VERIFIED),b=w?l.ssoEditButton:l.ssoAddButton,[T,h]=m.useState(!1),[O,k]=m.useState(!1),P=s?.sso_connection?.status==="ACTIVE",r=s?.sso_connection?.connection?.enabled_client_names?.includes("chat")??!1,f=P&&r,L=s?.sso_connection?.id,C=j?.shouldAllowExternalDomainInvites??s?.allow_external_domain_invites??!0,J=y,W=s?e.jsxs(Ae,{children:[n&&e.jsx(Oe,{workspaceId:t}),e.jsx(Pe,{title:l.domainSubtitle,footer:e.jsx(e.Fragment,{children:e.jsx(i,{...l.verifyDomainInfoText})}),children:e.jsx(Le,{domains:s.domains,workspaceId:t})}),e.jsx(N,{icon:Te,title:l.autoProvisionTitle,body:e.jsx(e.Fragment,{children:e.jsx(i,{...l.autoProvisionBody})}),toggle:e.jsx(E,{disabled:!y,enabled:g?.shouldAutoProvision??s.should_auto_provision,onChange:M=>{v({shouldAutoProvision:M})},label:o.formatMessage(l.toggleAutoProvisionLabel)})}),J&&e.jsx(N,{icon:ve,title:l.allowExternalDomainInvitesTitle,body:e.jsx(e.Fragment,{children:e.jsx(i,{...l.allowExternalDomainInvitesBody})}),toggle:e.jsx(E,{disabled:!y&&C,enabled:C,onChange:M=>{S({shouldAllowExternalDomainInvites:M})},label:o.formatMessage(l.toggleDisableExternalDomainInvitesLabel)})}),e.jsxs(V,{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(le,{className:Q("icon-sm",f?"text-blue-600":"text-token-text-tertiary")}),e.jsx(q,{children:e.jsx(i,{...l.ssoTitle})})]}),w&&e.jsx("div",{children:e.jsx(E,{enabled:f,onChange:()=>{x({connectionId:L,active:!f})},label:o.formatMessage(l.ssoToggleActive)})})]}),y&&e.jsx(Be,{acsId:s.acs_id,hasSSO:w}),e.jsxs("div",{children:[e.jsx(B,{as:"button",color:"primary",disabled:!y,onClick:()=>{$(a)?k(!0):h(!0)},children:e.jsx(i,{...b})}),e.jsx(Re,{workspaceId:t,data:s.sso_connection,isOpen:O,onClose:()=>{k(!1)}}),e.jsx(z,{isOpen:T,onClose:()=>h(!1),type:"warning",title:o.formatMessage(l.reauthRequiredTitle),icon:Z,primaryButton:e.jsx(D.Button,{onClick:()=>{u({authType:"login",callbackUrl:"/admin/identity"})},color:"primary",children:e.jsx(i,{id:"qcl4gn",defaultMessage:"Login"})}),secondaryButton:e.jsx(D.Button,{onClick:()=>h(!1),children:e.jsx(i,{id:"E1vtdZ",defaultMessage:"Close"})}),children:e.jsx("label",{className:"mb-2 flex items-center text-sm",children:o.formatMessage(l.reauthRequiredExplanation)})})]})]}),s.sso_connection&&e.jsx(N,{icon:Z,title:l.enforceSSOTitle,body:e.jsx(e.Fragment,{children:e.jsx(i,{...l.enforceSSOBody})}),toggle:e.jsx(E,{disabled:!y,enabled:s.sso_connection.auth0_enforced_clients?.includes("chat"),onChange:M=>{!$(a)||!s.sso_connection?h(!0):x({connectionId:s.sso_connection.id,enforcedClients:M?["chat"]:[]}).catch(_=>{throw _ instanceof G&&_.status===401&&h(!0),_})},label:o.formatMessage(l.enforceSSOLabel)})})]}):null;return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:e.jsx("title",{children:o.formatMessage(l.title)})}),e.jsx(Ce,{title:o.formatMessage(l.title)}),e.jsx(Ie,{showSpinner:c,children:W})]})}const l=F({title:{id:"workspaceIdentity.title",defaultMessage:"Identity & Provisioning"},domainSubtitle:{id:"workspaceIdentity.domainSubtitle",defaultMessage:"Domain management"},ssoTitle:{id:"workspaceIdentity.ssoTitle",defaultMessage:"Single Sign On"},ssoToggleActive:{id:"WorkspaceIdentityPage.ssoToggleActive",defaultMessage:"Enable SSO for this workspace"},ssoAddButton:{id:"workspaceIdentity.ssoAddButton",defaultMessage:"Add SAML SSO"},ssoEditButton:{id:"workspaceIdentity.ssoEditButton",defaultMessage:"Edit SAML SSO"},autoProvisionTitle:{id:"workspaceIdentity.autoProvisionSubtitle",defaultMessage:"Automatic account creation"},autoProvisionBody:{id:"workspaceIdentity.autoProvisionBody",defaultMessage:"Automatically create workspace accounts for new users who log in with a verified domain."},toggleAutoProvisionLabel:{id:"workspaceIdentity.toggleAutoProvisionLabel",defaultMessage:"Toggle to enable or disable auto provisioning"},allowExternalDomainInvitesTitle:{id:"RQGwuu",defaultMessage:"Allow External Domain Invites"},allowExternalDomainInvitesBody:{id:"7KRqHk",defaultMessage:"If not checked, future invitations to this workspace will be limited to users from this organization's verified domains"},toggleDisableExternalDomainInvitesLabel:{id:"bQy24Z",defaultMessage:"Toggle to enable or disable external domain invites"},enforceSSOTitle:{id:"workspaceIdentity.enforceSSOTitle",defaultMessage:"Enforce SSO log in"},enforceSSOBody:{id:"workspaceIdentity.enforceSSOBody",defaultMessage:"When SSO is active, users will no longer be able to use social logins and will be redirected to your SSO portal."},enforceSSOLabel:{id:"workspaceIdentity.enforceSSOLabel",defaultMessage:"Toggle to enable or disable SSO enforcement"},verifyDomainInfoText:{id:"workspaceIdentity.verifyDomainInfoText",defaultMessage:"Verify ownership of an email domain to access advanced security features including single sign-on."},learnMoreLink:{id:"workspaceIdentity.learnMoreLink",defaultMessage:"Learn more"},reauthRequiredTitle:{id:"workspaceIdentity.reauthRequiredTitle",defaultMessage:"Please login again"},reauthRequiredExplanation:{id:"workspaceIdentity.reauthRequiredExplanation",defaultMessage:"For security reasons, we need you to reauthenticate before making changes to SSO settings."}});function $(t){const n=ie(t)?.accessToken,a=(n?je(n):null)?.pwd_auth_time;return a==null?!1:Date.now()-a<6e4}function Ke(){const t=we();return De(),e.jsx(_e,{...t})}export{Ke as default};
//# sourceMappingURL=ds9ue9ibvknmuqww.js.map
