import{c as P,r as c,j as e,M as f,a as de,b as me}from"./lklglvrzltpv3f05.js";import{aw as Y,f as ce,bi as ue,bg as ge,F as J,br as V,fO as fe,ak as F,bk as pe,S as $,J as he}from"./muemwvh3ybsggbb1.js";import{b9 as xe,b8 as ve,d0 as M,aX as be,d1 as Me,I as we,d2 as Se}from"./cp734xu9t8fnlezn.js";import{V as Z}from"./d3y72ugnrmac5z1v.js";import{S as Ee,c as je}from"./l7d9ul5jfqvxe5kc.js";import{S}from"./mul4xsnmrv9qj0xd.js";function G(a){return a.split(/[\s,]+/)}function Ce({value:a,onChange:l,className:v}){const u=P(),[o,d]=c.useState(""),E=c.useCallback(b=>{if(o)switch(b.key){case"Enter":case",":case" ":{const h=G(o);l([...a,...h.map(K)]),d(""),b.preventDefault()}}},[o,l,a]),p=b=>{if(o){const h=G(o);l([...a,...h.map(K)]),d(o),b.preventDefault()}};return e.jsx(Ee,{className:Y("react-select-container",v),isMulti:!0,onBlur:p,classNamePrefix:"react-select",components:ke,inputValue:o,isClearable:!0,menuIsOpen:!1,onChange:l,onInputChange:d,onKeyDown:E,placeholder:u.formatMessage(O.placeholder),value:a,"aria-labelledby":"add-emails-label",name:"add-member-emails"})}const K=a=>({label:a,value:a,isValid:Z.test(a)}),Ne=a=>{const l=P(),v=e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{children:a.children}),e.jsx(ue,{className:"icon-sm"})]}),u=a.data.isValid?v:e.jsx(ge,{label:l.formatMessage(O.tooltipInvalidEmail,{email:a.data.value}),side:"top",children:v});return e.jsx(je.MultiValue,{...a,children:e.jsx("button",{className:Y("m-1 cursor-pointer rounded-full border border-transparent py-1 pl-3 pr-2 text-sm text-token-text-primary",a.data.isValid?"bg-token-main-surface-secondary hover:border-token-border-medium hover:bg-token-main-surface-tertiary":"bg-red-200 text-red-500"),onClick:o=>{a.removeProps.onClick?.(o),o.preventDefault()},"aria-label":l.formatMessage(O.removeMember,{member:a.data.value}),children:u})})},ke={DropdownIndicator:()=>null,IndicatorsContainer:()=>null,ClearIndicator:()=>null,MultiValueRemove:()=>null,MultiValue:Ne},O=ce({membersAdded:{id:"emailsTextarea.membersAdded",defaultMessage:"+{count} {count, plural, one {member} other {members}}"},removeMember:{id:"emailsTextarea.removeMember",defaultMessage:"Remove {member}"},tooltipInvalidEmail:{id:"emailsTextarea.tooltipInvalidEmail",defaultMessage:'"{email}" may not be a valid email'},clearAllEntries:{id:"emailsTextarea.clearAllEntries",defaultMessage:"Clear all"},placeholder:{id:"emailsTextarea.placeholder",defaultMessage:"Type an email and press enter..."}}),Ie=`email,role
user1@company.com,member
admin@company.com,admin
it@company.com,owner`,ee=25,Q=[];function Le({workspace:a,canResendInviteEmails:l,onCancel:v,cancelButtonText:u,onSuccess:o,fullWidthButtons:d=!1}){const E=a.isOwnerOfAccount(),[p,b]=c.useState(!1),[h,N]=c.useState(!1),k=c.useRef(null),s=P(),m=J(),[w,j]=c.useState(!0),[R,B]=c.useState(!1),[I,T]=c.useState(0),[g,y]=c.useState([]),[A,H]=c.useState([]),{mutateAsync:ae}=ye(a.id,o),D=xe(),z=ve()??!0,[_,W]=c.useState(Q);c.useEffect(()=>{if(!g?.length||!D?.length||z){W(Q);return}const n=D.map(t=>"@"+t.hostname.toLowerCase()),r=g.map(({email:t})=>t.toLowerCase()).filter(t=>!n.some(x=>t.endsWith(x)));W(r)},[D,z,g]);const C=Te(E),te=async n=>{const r=n.target.files?.[0];if(r){const t=await Re(r,C,h);t.status==="success"?(y(t.newRows),T(1),N(t.hasWarning)):t.reason==="file_too_large"?m.danger(s.formatMessage(i.fileTooLargeWarning,{maxSize:`${ee}MB`}),{duration:5}):t.reason==="invalid_file_type"&&m.danger(s.formatMessage(i.fileIncorrectTypeWarning),{duration:5})}},U=(n,r,t)=>{const x=[...g];x[n]={...x[n],[r]:t},y(x)},ie=n=>{const r=[...g.slice(0,n),...g.slice(n+1)];y(r)},q=c.useCallback(()=>{y([]),T(0),B(!1),H([])},[]),se=async()=>{B(!0);try{g.length>5&&m.info(s.formatMessage(i.inviteMessageLoading,{numRows:g.length}),{hasCloseButton:!0});const n=[["admin",F.ADMIN],["owner",F.OWNER],["member",F.STANDARD]],t=(await Promise.all(pe(n.map(([x,re])=>{const X=g.filter(L=>L.role===x).map(L=>L.email);return X.length>0&&ae({emails:X,role:re,resendEmails:w})})))).flat().length;t>0&&m.success(s.formatMessage(i.inviteSuccessToast,{numRows:t,userStr:t===1?"user":"users",workspaceName:Se(s,a)})),$.logEvent("chatgpt_invite_users_to_workspace",g.length,{action:"SubmitEmails",location:"modal-submit-button",text:"Submit",step:"AdminModal-CollectEmails-Submit"}),o?.(),q()}finally{B(!1)}},ne=()=>{const n=new Set,r=A.reduce((t,x)=>(n.has(x.value)||t.push(x.value),n.add(x.value),t),[]);y(r.map(t=>({email:t,role:C.member}))),T(1),$.logEvent("chatgpt_invite_users_to_workspace",0,{action:"CollectEmails",location:"modal-next-button",text:"Next",step:"AdminModal-CollectEmails-Next"})},le=e.jsx(V,{color:"primary",size:d?"large":"medium",disabled:R||g.length===0||_.length>0,onClick:se,children:R?s.formatMessage(i.inviteMemberInviteSubmitButtonLoading):s.formatMessage(i.inviteMemberInviteSubmitButton)}),oe=e.jsx(V,{color:"primary",size:d?"large":"medium",disabled:A.length===0,onClick:ne,children:s.formatMessage(i.inviteMemberInviteNextButton)});return e.jsxs("div",{className:"flex flex-col gap-2",children:[I===0&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"upload-csv",id:"upload-csv-label",children:e.jsx(f,{...i.importCSVLabel})}),e.jsxs("span",{className:"text-sm text-token-text-tertiary",children:[e.jsx(f,{...p?i.helperCSVFormatHide:i.helperCSVFormatShow,values:{link:n=>e.jsx("button",{className:"underline",onClick:()=>{b(!p)},children:n})}}),p&&e.jsx("pre",{className:"mt-4",children:Ie})]})]}),e.jsx("input",{ref:k,type:"file",accept:".csv,text/csv",id:"upload-csv",className:"hidden",onChange:te}),e.jsx(V,{color:"secondary",onClick:()=>k.current?.click(),children:e.jsx(f,{...i.importCSVButton})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"add-member-emails",id:"add-emails-label",children:e.jsx(f,{...i.addEmailsFieldName})}),e.jsx(Ce,{value:A,onChange:H})]})]}),I===1&&e.jsxs(e.Fragment,{children:[h&&e.jsxs("div",{className:"flex w-full items-center bg-yellow-100 p-4",children:[e.jsx(fe,{className:"icon-sm mr-2 text-yellow-700"}),e.jsx("div",{className:"flex-grow text-yellow-700",children:e.jsx(f,{...i.unspecifiedRoleDescription})})]}),_.length>0&&e.jsx("div",{className:"flex w-full items-center bg-red-100 p-4",children:e.jsxs("div",{className:"flex-grow text-red-700",children:[e.jsx(f,{...i.prohibitedExternalEmailDescription}),e.jsx("pre",{className:"my-1",children:_.join(", ")}),e.jsx(f,{...i.prohibitedExternalEmailResolution})]})}),e.jsxs(M.Root,{size:"normal",children:[e.jsxs(M.Header,{children:[e.jsx(M.HeaderCell,{children:e.jsx(f,{...i.inviteTableHeaderEmail})}),e.jsx(M.HeaderCell,{className:"pl-3 dark:bg-gray-900",children:e.jsx(f,{...i.inviteTableHeaderRole})}),e.jsx(M.HeaderCell,{})]}),e.jsx(M.Body,{children:g.map((n,r)=>e.jsxs(M.Row,{children:[e.jsx(M.Cell,{children:e.jsx(be,{ariaLabel:s.formatMessage(i.inviteTableHeaderEmail),name:"email",type:"email",value:n.email,onChange:t=>U(r,"email",t.target.value),color:"neutral"})}),e.jsx(M.Cell,{children:e.jsxs(S.Root,{value:n.role,onValueChange:t=>U(r,"role",t),children:[e.jsxs(S.Trigger,{children:[e.jsx(S.Value,{}),e.jsx(S.Icon,{})]}),e.jsx(S.Portal,{children:e.jsxs(S.Content,{className:"border border-token-main-surface-secondary",children:[e.jsx(S.Item,{value:C.member,children:e.jsx(f,{...i.inviteRoleMember})}),C.admin&&e.jsx(S.Item,{value:C.admin,children:e.jsx(f,{...i.inviteRoleAdmin})}),C.owner&&e.jsx(S.Item,{value:C.owner,children:e.jsx(f,{...i.inviteRoleOwner})})]})})]})}),e.jsx(M.Cell,{textAlign:"right",children:e.jsx(Me,{onClick:()=>ie(r),className:"icon-sm mr-2 cursor-pointer text-token-text-secondary"})})]},r))})]})]}),l&&j&&e.jsx("div",{className:"mt-2 flex items-center text-left text-token-text-secondary",children:e.jsx(we,{id:"resend-emails",checked:w,onChange:n=>j(n.currentTarget.checked),label:s.formatMessage(i.resendEmailsFieldName)})}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(V,{color:"secondary",size:d?"large":"medium",onClick:()=>{I!==0?T(0):(q(),v())},children:I===0?u:s.formatMessage(i.inviteMemberInviteBackButton)}),I===0?oe:le]})]})}function ye(a,l){const v=P(),u=J(),o=de();return me({mutationFn:async({emails:d,role:E,resendEmails:p})=>{const b=[],h=Math.max(5,Math.round(d.length/10));for(let s=0;s<d.length;s+=h)b.push(d.slice(s,s+h));const N=async s=>he.addWorkspaceUsers(a,s,E,p).then(m=>(m.errored_emails.length>0&&u.danger(v.formatMessage(i.inviteMessageFailure,{emailsStr:m.errored_emails.map(({email_address:w,error:j})=>`${w}: ${j}`).join(", ")})),m.account_invites)).catch(m=>{throw u.danger(m.message),m});return(await Promise.all(b.map(s=>N(s)))).flat()},onSuccess:()=>{o.invalidateQueries({queryKey:["workspace","invites",a]}),l?.()}})}function Re(a,l,v){return new Promise(u=>{if(a.size/1048576>ee)u({status:"error",reason:"file_too_large"});else if(a.type!=="text/csv")u({status:"error",reason:"invalid_file_type"});else{const d=new FileReader;d.readAsText(a),d.onload=function(E){let p=v;const h=(E.target?.result).split(`
`),N=new Set,k=h.reduce((s,m)=>{const[w,j]=m.split(",").map(R=>R.trim());return Z.test(w)&&!N.has(w)&&(l[j]===void 0&&!p&&(p=!0),s.push({email:w,role:l[j]??l.member})),N.add(w),s},[]);u({status:"success",newRows:k,hasWarning:p})}}})}const Te=a=>{const l={member:"member"};return a&&(l.admin="admin",l.owner="owner"),l},i={importCSVLabel:{id:"adminPage.importCSVLabel",defaultMessage:"Import from CSV",description:"Name of label for import from CSV button"},helperCSVFormatHide:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Hide Example</link>',description:"Instructions for formatting the import CSV, with a link to hide the example"},helperCSVFormatShow:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Show Example</link>',description:"Instructions for formatting the import CSV, with a link to show an example"},importCSVButton:{id:"adminPage.importCSVButton",defaultMessage:"Upload",description:"Name of upload from CSV button"},addEmailsFieldName:{id:"adminPage.addEmailsFieldName.0",defaultMessage:"Emails",description:"Name of input for adding emails to workspace"},unspecifiedRoleDescription:{id:"adminPage.unspecifiedRoleDescription",defaultMessage:"Roles that were unspecified have been changed to Member.",description:"Description text for defaulting invite roles to member"},prohibitedExternalEmailDescription:{id:"adminPage.prohibitedExternalEmailDescription",defaultMessage:"The following emails are not a part of your organization's verified domains:",description:"Description text for error message"},prohibitedExternalEmailResolution:{id:"adminPage.prohibitedExternalEmailResolution",defaultMessage:'Either remove these emails, enable "Allow External Domain Invites" from your workspace settings, or verify these email domains.',description:"Description text for error message"},inviteTableHeaderEmail:{id:"adminPage.inviteTableHeaderEmail",defaultMessage:"Email",description:"Label for email column of invite table header"},inviteTableHeaderRole:{id:"adminPage.inviteTableHeaderRole",defaultMessage:"Role",description:"Label for role column of invite table header"},inviteRoleMember:{id:"adminPage.inviteRoleMember",defaultMessage:"Member",description:"Member role for workspace invite"},inviteRoleAdmin:{id:"adminPage.inviteRoleAdmin",defaultMessage:"Admin",description:"Admin role for workspace invite"},inviteRoleOwner:{id:"adminPage.inviteRoleOwner",defaultMessage:"Owner",description:"Owner role for workspace invite"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}.",description:"Error when uploading a file that is too large"},fileIncorrectTypeWarning:{id:"adminPage",defaultMessage:"Please upload a CSV file.",description:"Error when uploading a file that is not a CSV"},resendEmailsFieldName:{id:"adminPage.resendEmailsFieldName",defaultMessage:"Resend emails for existing invites",description:"Name of checkbox input for resending emails to workspace"},teamInviteModalNote:{id:"adminPage.teamInviteModalNote",defaultMessage:"Users that accept invites will be included as additional seats on your next invoice.",description:"Note for team plan invites that additional seats will be charged"},teamInviteModalNoteBeforeLink:{id:"adminPage.teamInviteModalNoteBeforeLink",defaultMessage:"Learn more about ",description:"Note for team plan invites that additional seats will be charged"},teamInviteModalNoteBillingLink:{id:"adminPage.teamInviteModalNoteBillingLink",defaultMessage:"billing",description:"billing word that will be a link to the billing help page"},inviteMessageLoading:{id:"adminPage.inviteMessageLoading",defaultMessage:"Sending out {numRows} invites, this may take a minute...",description:"Loading message when invites are being sent"},inviteSuccessToast:{id:"adminPage.inviteSuccessToast",defaultMessage:"Invited {numRows} {userStr} to {workspaceName}",description:"Message on successfully sending out invites"},inviteMemberInviteNextButton:{id:"adminPage.inviteMemberInviteNextButton",defaultMessage:"Next",description:"The title of the invite member modal next button"},inviteMemberInviteSubmitButton:{id:"adminPage.inviteMemberInviteSubmitButton",defaultMessage:"Send invites",description:"The title of the invite member modal submit button"},inviteMemberInviteSubmitButtonLoading:{id:"adminPage.inviteMemberInviteSubmitButtonLoading",defaultMessage:"Sending invites...",description:"Button label while inviting members"},inviteMemberInviteBackButton:{id:"adminPage.inviteMemberInviteBackButton",defaultMessage:"Back",description:"The title of the invite member modal back button"},inviteMessageFailure:{id:"adminPage.inviteMessageFailure",defaultMessage:"Unable to invite {emailsStr}",description:"Message that shows which emails were unsuccessful at being invited"}};export{Le as A};
//# sourceMappingURL=ozrv7djeqrsnnkoi.js.map
