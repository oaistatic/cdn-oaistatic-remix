import{dc as W,Y as S,j as e,a8 as L,Z as A,r as F,m as E,o as I,N as P,y as _,aG as i,f8 as B,f9 as N,fa as l,a_ as d,X as G,aY as q,d4 as H,ar as Y,bL as U,aK as O}from"./lyvmbpf7ocwbhkqv.js";import{B as u}from"./e2ha20o7g6t143ej.js";import{cG as V,cb as K,cc as Q,cH as z,cI as v,bh as X,cJ as Z,cK as J}from"./g6lhcxpyem234o4q.js";import{l as $,a7 as D,b0 as ee}from"./c7ci0rjyj4htmm6k.js";import{S as g}from"./gcvp947cimzkwurk.js";import{a as te,b as se,u as ne,c as ae}from"./eocfdaywsmuxq5wl.js";import{a as ie,b as oe,c as C,A as y,d as re,e as le,f as ce}from"./n3e288bk2gnvmuo7.js";import"./j5w4166bn3c02o6l.js";import"./ma9w350fc5ophuxv.js";import"./mgblivg7zbb6krjc.js";import"./nf0lyo87fmthbxnm.js";import"./fum5k2u9xxdkha3i.js";import"./g2ca5q7bw0mlea5j.js";import"./caezovn54xyig95j.js";import"./ddma9e07txnptzud.js";const T=60*60*24,de=T*90,ge=T*365;function pe({conversationTTL:s}){const n=S();let a;return s==null?a=n.formatMessage(t.retentionInfinite):s===de?a=n.formatMessage(t.retentionNinetyDays):s===ge?a=n.formatMessage(t.retentionOneYear):a=n.formatMessage(t.retentionCustomDays,{num:Math.floor(s/T)}),e.jsxs(y,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(i,{...t.conversationRetention})}),e.jsx(q,{label:n.formatMessage(t.retentionSettingTooltip),children:a})]})}function m({title:s,description:n,children:a,upsellEnterprise:o=!1,descriptionValues:c={}}){return e.jsx(H,{label:e.jsx(i,{...t.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!o,className:"max-w-xl",children:e.jsxs(re,{className:Y(o&&"text-token-text-tertiary"),children:[e.jsxs(le,{className:"flex items-center gap-3",children:[e.jsx(i,{...s}),o&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(i,{...t.enterpriseUpsellPill})})]}),n&&e.jsx(ce,{className:"py-2 text-token-text-secondary",children:ue(n)?e.jsx(i,{...n,values:c}):n}),a]})})}function ue(s){return!!s&&typeof s=="object"&&"id"in s}function me({workspaceId:s,label:n,setting:a,defaultValue:o,values:c,disabled:f=!1}){const M=S(),b=A(),x=E(),{variables:j,mutate:k}=I({mutationFn:({setting:r,value:h})=>P.setWorkspaceShareSetting(s,r,h),onSettled:()=>{x.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{b.danger(M.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(y,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...n})}),e.jsxs(g.Root,{defaultValue:j?.value??o,onValueChange:r=>{k({setting:a,value:r})},disabled:f,children:[e.jsxs(g.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(g.Value,{}),e.jsx(g.Icon,{})]}),e.jsx(g.Portal,{children:e.jsx(g.Content,{children:c.map((r,h)=>e.jsx(g.Item,{className:"text-md",value:r.value,children:e.jsx(i,{...r.display})},h))})})]})]})}function fe({onConfirm:s,onClose:n}){const a=S();return e.jsx(U,{type:"warning",isOpen:!0,onClose:n,title:a.formatMessage(t.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(O,{color:"danger",onClick:s,children:e.jsx(i,{...t.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(O,{onClick:n,color:"secondary",children:e.jsx(i,{...t.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(i,{...t.deleteWorkspaceMemoryModalInfo,values:{b:o=>e.jsx("b",{children:o})}})})})}function xe({workspaceId:s,data:n}){const a=K(Q.isTeamPlan),o=L(),c=S(),f=A(),{showWorkspaceSettings:M}=z(),[b,x]=F.useState(!1),j=E(),{variables:k,mutate:r}=I({mutationFn:({feature:p,enabled:R})=>P.setWorkspaceBetaFeature(s,p,R),onSettled:()=>{j.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(t.featureSettingsUpdateFailed))}}),h=_("193142637").value,w=_("3180974288").value;return e.jsxs(ie,{children:[a&&e.jsx(oe,{}),e.jsxs(m,{title:t.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(v,{value:o?.data.organizationId??"",onCopied:()=>f.success(c.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(v,{value:s,onCopied:()=>f.success(c.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(m,{title:t.sharingSettingsTitle,upsellEnterprise:a,children:e.jsx(C,{children:e.jsx(me,{workspaceId:s,label:t.chatSharingTitle,setting:B.CHAT_SHARE_SETTINGS,disabled:a,defaultValue:n.share_settings.chat_share_setting,values:[{display:t.workspaceMembersOnlySelect,value:N.WORKSPACE_ONLY},{display:t.noOneSelect,value:N.NO_ONE}]})})}),e.jsx(m,{title:t.memoryFeatureSettingsTitle,description:t.workspaceMemoryDescription,descriptionValues:{link:p=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:p})},upsellEnterprise:a,children:e.jsx(C,{children:e.jsxs(y,{className:"justify-start py-6",children:[e.jsx(X,{label:"",disabled:a,enabled:k?.enabled??n.beta_settings.sunshine,onChange:p=>{p?r({feature:l.MEMORY,enabled:p}):x(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...t.memoryOptionTitle})})]})})}),b&&e.jsx(fe,{onConfirm:()=>{r({feature:l.MEMORY,enabled:!1}),x(!1)},onClose:()=>{x(!1)}}),h&&e.jsx(m,{title:d({id:"SyabKs",defaultMessage:"Canvas"}),description:d({id:"ROROHD",defaultMessage:"Control whether users in this workspace can use the ChatGPT canvas feature."}),upsellEnterprise:a,children:e.jsx(C,{children:e.jsx(u,{disabled:a,label:d({id:"i8v3nI",defaultMessage:"Canvas"}),feature:l.CANVAS,value:n.beta_settings.canvas,workspaceId:s})})}),e.jsx(m,{title:t.retentionPolicyTitle,description:t.retentionChange,upsellEnterprise:a,children:e.jsx(pe,{conversationTTL:n.conversation_ttl})}),M||w?e.jsx(m,{title:t.connectionsTitle,upsellEnterprise:a,description:e.jsx(i,{...t.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(i,{...t.contextConnectorsHelpCenterLink})})}}),children:e.jsxs(C,{children:[M&&e.jsxs(e.Fragment,{children:[e.jsx(u,{disabled:a,label:t.contextConnectorsGoogleDrive,Icon:$,feature:l.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings.context_connector_gdrive,workspaceId:s}),e.jsx(u,{disabled:a,label:Z,Icon:D,tooltip:t.contextConnectorsO365BusinessTooltip,feature:l.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings.context_connector_o365_business,workspaceId:s}),e.jsx(u,{disabled:a,label:J,Icon:D,tooltip:t.contextConnectorsO365PersonalTooltip,feature:l.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings.context_connector_o365_personal,workspaceId:s})]}),w&&e.jsxs(y,{className:"flex-col",children:[e.jsx(u,{hasPadding:!1,disabled:!1,label:d({id:"AOszR9",defaultMessage:"Enable Apple Intelligence"}),Icon:ee,feature:l.CLIENT_APPLICATION_APPLE,value:n.beta_settings.client_application_apple,workspaceId:s,tooltip:d({id:"r8RutN",defaultMessage:"Enable linking with Apple Intelligence"})}),e.jsx(u,{className:"ml-6",hasPadding:!1,disabled:!n.beta_settings.client_application_apple,label:d({id:"64jjqZ",defaultMessage:"Enable on managed devices only"}),feature:l.CLIENT_APPLICATION_APPLE_MDM_REQUIRED,value:n.beta_settings.client_application_apple_mdm_required,workspaceId:s,tooltip:d({id:"7Afc2K",defaultMessage:"Only allow linking this workspace with Apple Intelligence on MDM managed devices"})})]})]})}):null]})}function he({currentWorkspaceId:s}){const{data:n,isLoading:a}=W(s),o=S();return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("title",{children:o.formatMessage(t.title)})}),e.jsx(te,{title:o.formatMessage(t.title)}),e.jsx(se,{showSpinner:a,children:n===void 0?null:e.jsx(xe,{workspaceId:s,data:n})})]})}const t=G({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},connectionsTitle:{id:"workspaceSettings.connectionsTitle",defaultMessage:"Connections"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function Ee(){const s=ne();return ae(),e.jsx(he,{...s})}export{Ee as default};
//# sourceMappingURL=h8d7y35zo1lfyvv6.js.map
