import{c,j as e,M as o}from"./nqo5y2f0dorhrqsr.js";import{x as p,y as a,b2 as M,b3 as v,U as r}from"./ktiwgucld5a8s55m.js";import{bL as u,bv as g,f as b}from"./dh0yl0m9q337gmci.js";import{A as f}from"./fyyhud5jfffqiqpo.js";import"./d3y72ugnrmac5z1v.js";import"./gingn9my21rn74dq.js";import"./fzrn137102spawew.js";import"./e9lafxuzyeh4418f.js";import"./jduckhgljimdwo8y.js";import"./gaad4oovd7ll3n61.js";import"./c4bxzbp1808foto4.js";function E({workspace:i}){const t=c(),l=p(a.InviteUsersToWorkspace),m=M()??!0,n=v()?.map(d=>d.hostname);return e.jsx(u,{size:"custom",className:"max-w-lg text-sm",isOpen:l,onClose:g,type:"success",title:i.data.name!=null?t.formatMessage(s.inviteMemberModalTitle,{workspaceName:i.data.name}):t.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(o,{...s.inviteMemberModalDescription})}),!!n?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(o,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:n.join(", ")})]})]}),children:e.jsx(f,{workspace:i,canResendInviteEmails:!0,onCancel:()=>r.closeModal(a.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(a.InviteUsersToWorkspace),cancelButtonText:t.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=b({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{E as default};
//# sourceMappingURL=ofct9afvdcn5dfv4.js.map