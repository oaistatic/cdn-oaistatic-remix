import{c,j as e,M as o}from"./lklglvrzltpv3f05.js";import{z as p,A as a,b8 as M,b9 as u,U as r}from"./mc2tj3xhtcshtn61.js";import{bO as v,by as g,f as b}from"./i7de8yvdg4jlu6h0.js";import{A as f}from"./kvbkf0ua1vw3b5iq.js";import"./d3y72ugnrmac5z1v.js";import"./mk3jxh4of9lq3esr.js";import"./fzrn137102spawew.js";import"./e9lafxuzyeh4418f.js";import"./j9pn3dpqp3dnyeg5.js";import"./hcil7bl6nyyvu0ms.js";import"./c4bxzbp1808foto4.js";function A({workspace:i}){const t=c(),l=p(a.InviteUsersToWorkspace),m=M()??!0,n=u()?.map(d=>d.hostname);return e.jsx(v,{size:"custom",className:"max-w-lg text-sm",isOpen:l,onClose:g,type:"success",title:i.data.name!=null?t.formatMessage(s.inviteMemberModalTitle,{workspaceName:i.data.name}):t.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(o,{...s.inviteMemberModalDescription})}),!!n?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(o,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:n.join(", ")})]})]}),children:e.jsx(f,{workspace:i,canResendInviteEmails:!0,onCancel:()=>r.closeModal(a.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(a.InviteUsersToWorkspace),cancelButtonText:t.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=b({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{A as default};
//# sourceMappingURL=opykreeffolm06fz.js.map
