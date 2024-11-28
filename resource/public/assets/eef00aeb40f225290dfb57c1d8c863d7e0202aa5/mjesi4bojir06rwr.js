import{L as V,r as u,m as e,aC as ee,K as ue,aK as ge,N as te,f7 as pe,aZ as T,aT as c,ap as F,aO as fe,U as Q,w as he,x as xe,V as ve}from"./gfs0keudzvcg5rgq.js";import{aT as be,aS as Me,ct as S,aK as Se,z as we,cu as je,cv as Ee}from"./b6arjgg215unn3v3.js";import{V as ae}from"./d3y72ugnrmac5z1v.js";import{S as Ce,c as Ne}from"./cx3rnqi5o9eva3pp.js";import{b as Ie,aG as ke,G as ye}from"./iqnriohw8g1d2uyi.js";import{S as w}from"./ng4znd9vscmia3td.js";function Y(t){return t.split(/[\s,]+/)}function Re({value:t,onChange:n,className:b}){const g=V(),[o,m]=u.useState(""),j=u.useCallback(M=>{if(o)switch(M.key){case"Enter":case",":case" ":{const h=Y(o);n([...t,...h.map(Z)]),m(""),M.preventDefault()}}},[o,n,t]),f=M=>{if(o){const h=Y(o);n([...t,...h.map(Z)]),m(o),M.preventDefault()}};return e.jsx(Ce,{className:ee("react-select-container",b),isMulti:!0,onBlur:f,classNamePrefix:"react-select",components:Ve,inputValue:o,isClearable:!0,menuIsOpen:!1,onChange:n,onInputChange:m,onKeyDown:j,placeholder:g.formatMessage(O.placeholder),value:t,"aria-labelledby":"add-emails-label",name:"add-member-emails"})}const Z=t=>({label:t,value:t,isValid:ae.test(t)}),Te=t=>{const n=V(),b=e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{children:t.children}),e.jsx(Ie,{className:"icon-sm"})]}),g=t.data.isValid?b:e.jsx(ge,{label:n.formatMessage(O.tooltipInvalidEmail,{email:t.data.value}),side:"top",children:b});return e.jsx(Ne.MultiValue,{...t,children:e.jsx("button",{className:ee("m-1 cursor-pointer rounded-full border border-transparent py-1 pl-3 pr-2 text-sm text-token-text-primary",t.data.isValid?"bg-token-main-surface-secondary hover:border-token-border-medium hover:bg-token-main-surface-tertiary":"bg-red-200 text-red-500"),onClick:o=>{t.removeProps.onClick?.(o),o.preventDefault()},"aria-label":n.formatMessage(O.removeMember,{member:t.data.value}),children:g})})},Ve={DropdownIndicator:()=>null,IndicatorsContainer:()=>null,ClearIndicator:()=>null,MultiValueRemove:()=>null,MultiValue:Te},O=ue({membersAdded:{id:"emailsTextarea.membersAdded",defaultMessage:"+{count} {count, plural, one {member} other {members}}"},removeMember:{id:"emailsTextarea.removeMember",defaultMessage:"Remove {member}"},tooltipInvalidEmail:{id:"emailsTextarea.tooltipInvalidEmail",defaultMessage:'"{email}" may not be a valid email'},clearAllEntries:{id:"emailsTextarea.clearAllEntries",defaultMessage:"Clear all"},placeholder:{id:"emailsTextarea.placeholder",defaultMessage:"Type an email and press enter..."}}),_e=`email,role
user1@company.com,member
admin@company.com,admin
it@company.com,owner`,ie=25,J=[];function We({workspace:t,canResendInviteEmails:n,onCancel:b,cancelButtonText:g,onSuccess:o,fullWidthButtons:m=!1}){const j=t.isOwnerOfAccount(),[f,M]=u.useState(!1),[h,C]=u.useState(!1),I=u.useRef(null),d=t.isTeam(),l=V(),x=te(),_=pe("3905879930").config.get("enabled",!1),[z,H]=u.useState(!0),[W,P]=u.useState(!1),[N,R]=u.useState(0),[p,y]=u.useState([]),[B,U]=u.useState([]),{mutateAsync:se}=Pe(t.id,o),A=be(),K=Me()??!0,[D,q]=u.useState(J);u.useEffect(()=>{if(!p?.length||!A?.length||K){q(J);return}const s=A.map(a=>"@"+a.hostname.toLowerCase()),r=p.map(({email:a})=>a.toLowerCase()).filter(a=>!s.some(v=>a.endsWith(v)));q(r)},[A,K,p]);const E=Ae(j),ne=async s=>{const r=s.target.files?.[0];if(r){const a=await Be(r,E,h);a.status==="success"?(y(a.newRows),R(1),C(a.hasWarning)):a.reason==="file_too_large"?x.danger(l.formatMessage(i.fileTooLargeWarning,{maxSize:`${ie}MB`}),{duration:5}):a.reason==="invalid_file_type"&&x.danger(l.formatMessage(i.fileIncorrectTypeWarning),{duration:5})}},G=(s,r,a)=>{const v=[...p];v[s]={...v[s],[r]:a},y(v)},le=s=>{const r=[...p.slice(0,s),...p.slice(s+1)];y(r)},X=u.useCallback(()=>{y([]),R(0),P(!1),U([])},[]),oe=async()=>{P(!0);try{p.length>5&&x.info(l.formatMessage(i.inviteMessageLoading,{numRows:p.length}),{hasCloseButton:!0});const s=[["admin",F.ADMIN],["owner",F.OWNER],["member",F.STANDARD]],a=(await Promise.all(fe(s.map(([v,ce])=>{const $=p.filter(L=>L.role===v).map(L=>L.email);return $.length>0&&se({emails:$,role:ce,resendEmails:z})})))).flat().length;a>0&&x.success(l.formatMessage(i.inviteSuccessToast,{numRows:a,userStr:a===1?"user":"users",workspaceName:Ee(l,t)})),Q.logEvent("chatgpt_invite_users_to_workspace",p.length,{action:"SubmitEmails",location:"modal-submit-button",text:"Submit",step:"AdminModal-CollectEmails-Submit"}),o?.(),X()}finally{P(!1)}},re=()=>{const s=new Set,r=B.reduce((a,v)=>(s.has(v.value)||a.push(v.value),s.add(v.value),a),[]);y(r.map(a=>({email:a,role:E.member}))),R(1),Q.logEvent("chatgpt_invite_users_to_workspace",0,{action:"CollectEmails",location:"modal-next-button",text:"Next",step:"AdminModal-CollectEmails-Next"})},me=e.jsx(T,{color:"primary",size:m?"large":"medium",disabled:W||p.length===0||D.length>0,onClick:oe,children:W?l.formatMessage(i.inviteMemberInviteSubmitButtonLoading):l.formatMessage(i.inviteMemberInviteSubmitButton)}),de=e.jsx(T,{color:"primary",size:m?"large":"medium",disabled:B.length===0,onClick:re,children:l.formatMessage(i.inviteMemberInviteNextButton)});return e.jsxs("div",{className:"flex flex-col gap-2",children:[N===0&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"upload-csv",id:"upload-csv-label",children:e.jsx(c,{...i.importCSVLabel})}),e.jsxs("span",{className:"text-sm text-token-text-tertiary",children:[e.jsx(c,{...f?i.helperCSVFormatHide:i.helperCSVFormatShow,values:{link:s=>e.jsx("button",{className:"underline",onClick:()=>{M(!f)},children:s})}}),f&&e.jsx("pre",{className:"mt-4",children:_e})]})]}),e.jsx("input",{ref:I,type:"file",accept:".csv,text/csv",id:"upload-csv",className:"hidden",onChange:ne}),e.jsx(T,{color:"secondary",onClick:()=>I.current?.click(),children:e.jsx(c,{...i.importCSVButton})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"add-member-emails",id:"add-emails-label",children:e.jsx(c,{...i.addEmailsFieldName})}),e.jsx(Re,{value:B,onChange:U})]})]}),N===1&&e.jsxs(e.Fragment,{children:[h&&e.jsxs("div",{className:"flex w-full items-center bg-yellow-100 p-4",children:[e.jsx(ke,{className:"icon-sm mr-2 text-yellow-700"}),e.jsx("div",{className:"flex-grow text-yellow-700",children:e.jsx(c,{...i.unspecifiedRoleDescription})})]}),D.length>0&&e.jsx("div",{className:"flex w-full items-center bg-red-100 p-4",children:e.jsxs("div",{className:"flex-grow text-red-700",children:[e.jsx(c,{...i.prohibitedExternalEmailDescription}),e.jsx("pre",{className:"my-1",children:D.join(", ")}),e.jsx(c,{...i.prohibitedExternalEmailResolution})]})}),e.jsxs(S.Root,{size:"normal",children:[e.jsxs(S.Header,{children:[e.jsx(S.HeaderCell,{children:e.jsx(c,{...i.inviteTableHeaderEmail})}),e.jsx(S.HeaderCell,{className:"pl-3 dark:bg-gray-900",children:e.jsx(c,{...i.inviteTableHeaderRole})}),e.jsx(S.HeaderCell,{})]}),e.jsx(S.Body,{children:p.map((s,r)=>e.jsxs(S.Row,{children:[e.jsx(S.Cell,{children:e.jsx(Se,{name:"email",type:"email",value:s.email,onChange:a=>G(r,"email",a.target.value),color:"neutral"})}),e.jsx(S.Cell,{children:e.jsxs(w.Root,{value:s.role,onValueChange:a=>G(r,"role",a),children:[e.jsxs(w.Trigger,{children:[e.jsx(w.Value,{}),e.jsx(w.Icon,{})]}),e.jsx(w.Portal,{children:e.jsxs(w.Content,{className:"border border-token-main-surface-secondary",children:[e.jsx(w.Item,{value:E.member,children:e.jsx(c,{...i.inviteRoleMember})}),E.admin&&e.jsx(w.Item,{value:E.admin,children:e.jsx(c,{...i.inviteRoleAdmin})}),E.owner&&e.jsx(w.Item,{value:E.owner,children:e.jsx(c,{...i.inviteRoleOwner})})]})})]})}),e.jsx(S.Cell,{textAlign:"right",children:e.jsx(ye,{onClick:()=>le(r),className:"icon-sm mr-2 cursor-pointer text-token-text-secondary"})})]},r))})]})]}),n&&H&&e.jsx("div",{className:"mt-2 flex items-center text-left text-token-text-secondary",children:e.jsx(we,{id:"resend-emails",checked:z,onChange:s=>H(s.currentTarget.checked),label:l.formatMessage(i.resendEmailsFieldName)})}),N===0&&d&&(_?e.jsx(e.Fragment,{}):e.jsx("div",{className:"mb-4",children:e.jsx(je,{children:e.jsx(c,{...i.teamInviteModalNote})})})),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(T,{color:"secondary",size:m?"large":"medium",onClick:()=>{N!==0?R(0):(X(),b())},children:N===0?g:l.formatMessage(i.inviteMemberInviteBackButton)}),N===0?de:me]})]})}function Pe(t,n){const b=V(),g=te(),o=he();return xe({mutationFn:async({emails:m,role:j,resendEmails:f})=>{const M=[],h=Math.max(5,Math.round(m.length/10));for(let d=0;d<m.length;d+=h)M.push(m.slice(d,d+h));const C=async d=>ve.addWorkspaceUsers(t,d,j,f).then(l=>(l.errored_emails.length>0&&g.danger(b.formatMessage(i.inviteMessageFailure,{emailsStr:l.errored_emails.map(({email_address:x,error:k})=>`${x}: ${k}`).join(", ")})),l.account_invites)).catch(l=>{throw g.danger(l.message),l});return(await Promise.all(M.map(d=>C(d)))).flat()},onSuccess:()=>{o.invalidateQueries({queryKey:["workspace","invites",t]}),n?.()}})}function Be(t,n,b){return new Promise(g=>{if(t.size/1048576>ie)g({status:"error",reason:"file_too_large"});else if(t.type!=="text/csv")g({status:"error",reason:"invalid_file_type"});else{const m=new FileReader;m.readAsText(t),m.onload=function(j){let f=b;const h=(j.target?.result).split(`
`),C=new Set,I=h.reduce((d,l)=>{const[x,k]=l.split(",").map(_=>_.trim());return ae.test(x)&&!C.has(x)&&(n[k]===void 0&&!f&&(f=!0),d.push({email:x,role:n[k]??n.member})),C.add(x),d},[]);g({status:"success",newRows:I,hasWarning:f})}}})}const Ae=t=>{const n={member:"member"};return t&&(n.admin="admin",n.owner="owner"),n},i={importCSVLabel:{id:"adminPage.importCSVLabel",defaultMessage:"Import from CSV",description:"Name of label for import from CSV button"},helperCSVFormatHide:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Hide Example</link>',description:"Instructions for formatting the import CSV, with a link to hide the example"},helperCSVFormatShow:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Show Example</link>',description:"Instructions for formatting the import CSV, with a link to show an example"},importCSVButton:{id:"adminPage.importCSVButton",defaultMessage:"Upload",description:"Name of upload from CSV button"},addEmailsFieldName:{id:"adminPage.addEmailsFieldName.0",defaultMessage:"Emails",description:"Name of input for adding emails to workspace"},unspecifiedRoleDescription:{id:"adminPage.unspecifiedRoleDescription",defaultMessage:"Roles that were unspecified have been changed to Member.",description:"Description text for defaulting invite roles to member"},prohibitedExternalEmailDescription:{id:"adminPage.prohibitedExternalEmailDescription",defaultMessage:"The following emails are not a part of your organization's verified domains:",description:"Description text for error message"},prohibitedExternalEmailResolution:{id:"adminPage.prohibitedExternalEmailResolution",defaultMessage:'Either remove these emails, enable "Allow External Domain Invites" from your workspace settings, or verify these email domains.',description:"Description text for error message"},inviteTableHeaderEmail:{id:"adminPage.inviteTableHeaderEmail",defaultMessage:"Email",description:"Label for email column of invite table header"},inviteTableHeaderRole:{id:"adminPage.inviteTableHeaderRole",defaultMessage:"Role",description:"Label for role column of invite table header"},inviteRoleMember:{id:"adminPage.inviteRoleMember",defaultMessage:"Member",description:"Member role for workspace invite"},inviteRoleAdmin:{id:"adminPage.inviteRoleAdmin",defaultMessage:"Admin",description:"Admin role for workspace invite"},inviteRoleOwner:{id:"adminPage.inviteRoleOwner",defaultMessage:"Owner",description:"Owner role for workspace invite"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}.",description:"Error when uploading a file that is too large"},fileIncorrectTypeWarning:{id:"adminPage",defaultMessage:"Please upload a CSV file.",description:"Error when uploading a file that is not a CSV"},resendEmailsFieldName:{id:"adminPage.resendEmailsFieldName",defaultMessage:"Resend emails for existing invites",description:"Name of checkbox input for resending emails to workspace"},teamInviteModalNote:{id:"adminPage.teamInviteModalNote",defaultMessage:"Users that accept invites will be included as additional seats on your next invoice.",description:"Note for team plan invites that additional seats will be charged"},teamInviteModalNoteBeforeLink:{id:"adminPage.teamInviteModalNoteBeforeLink",defaultMessage:"Learn more about ",description:"Note for team plan invites that additional seats will be charged"},teamInviteModalNoteBillingLink:{id:"adminPage.teamInviteModalNoteBillingLink",defaultMessage:"billing",description:"billing word that will be a link to the billing help page"},inviteMessageLoading:{id:"adminPage.inviteMessageLoading",defaultMessage:"Sending out {numRows} invites, this may take a minute...",description:"Loading message when invites are being sent"},inviteSuccessToast:{id:"adminPage.inviteSuccessToast",defaultMessage:"Invited {numRows} {userStr} to {workspaceName}",description:"Message on successfully sending out invites"},inviteMemberInviteNextButton:{id:"adminPage.inviteMemberInviteNextButton",defaultMessage:"Next",description:"The title of the invite member modal next button"},inviteMemberInviteSubmitButton:{id:"adminPage.inviteMemberInviteSubmitButton",defaultMessage:"Send invites",description:"The title of the invite member modal submit button"},inviteMemberInviteSubmitButtonLoading:{id:"adminPage.inviteMemberInviteSubmitButtonLoading",defaultMessage:"Sending invites...",description:"Button label while inviting members"},inviteMemberInviteBackButton:{id:"adminPage.inviteMemberInviteBackButton",defaultMessage:"Back",description:"The title of the invite member modal back button"},inviteMessageFailure:{id:"adminPage.inviteMessageFailure",defaultMessage:"Unable to invite {emailsStr}",description:"Message that shows which emails were unsuccessful at being invited"}};export{We as A};
//# sourceMappingURL=mjesi4bojir06rwr.js.map
