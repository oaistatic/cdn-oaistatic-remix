import{X as c,y as e,bq as p,br as M,a1 as n,a6 as u}from"./du9ygo55hccsm0ec.js";import{a as v,G as a,U as r}from"./156t2vs0ziqy5ta8.js";import{A as g}from"./kt61c41epyvtnw4k.js";import{bH as b,bI as f}from"./hc0go6t8u8it292j.js";import"./ibjw18ivx5tw615x.js";import"./kwyhm54wtm4zbkpo.js";import"./m7ykldedawewofy8.js";import"./kl23pvq05rxrgvth.js";import"./d3y72ugnrmac5z1v.js";import"./hgeajy87cwg3r1m6.js";import"./e9lafxuzyeh4418f.js";import"./if45wgcplc4vea0y.js";import"./g917upaeimfgkdh1.js";function y({workspace:i}){const t=c(),l=v(a.InviteUsersToWorkspace),m=b()??!0,o=f()?.map(d=>d.hostname);return e.jsx(p,{size:"custom",className:"max-w-lg text-sm",isOpen:l,onClose:M,type:"success",title:i.data.name!=null?t.formatMessage(s.inviteMemberModalTitle,{workspaceName:i.data.name}):t.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(n,{...s.inviteMemberModalDescription})}),!!o?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(n,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:o.join(", ")})]})]}),children:e.jsx(g,{workspace:i,canResendInviteEmails:!0,onCancel:()=>r.closeModal(a.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(a.InviteUsersToWorkspace),cancelButtonText:t.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=u({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{y as default};
//# sourceMappingURL=oha1fu72tkaa6vtt.js.map