import{dl as F,J as S,j as e,X as B,K as D,r as G,m as E,o as P,O as I,aA as C,aB as i,f3 as q,f4 as v,f5 as l,dn as c,I as H,aq as U,d6 as V,ak as Y,bz as z,aF as N}from"./e9yuj0ll30e3kmlx.js";import{B as g}from"./i4zuwni0fm0u7osy.js";import{cv as K,bZ as Q,b_ as X,cw as J,cx as O,aJ as Z,cy as $,cz as ee}from"./ihoxwwe79kyl4jef.js";import{_ as te,a6 as A,aL as se}from"./mhi0wfvgf6n45t1b.js";import{S as u}from"./200yv5u68uso5y77.js";import{a as ne,b as ae,u as ie,c as oe}from"./m1bfmxczyk0s28b0.js";import{a as re,b as le,c as M,A as y,d as ce,e as de,f as pe}from"./gakesr0z9jt9n9sl.js";import"./c4bxzbp1808foto4.js";import"./d7j71pnz17tmnn0d.js";import"./gnc11p2kgf0azhul.js";import"./mry9hax8k6o56kk4.js";import"./ogeaiwpkr6sm1oz0.js";import"./mb36dfr9sa2ydx8o.js";import"./e0pprjs7j5u6zo4r.js";const T=60*60*24,ge=T*90,ue=T*365;function me({conversationTTL:s}){const n=S();let a;return s==null?a=n.formatMessage(t.retentionInfinite):s===ge?a=n.formatMessage(t.retentionNinetyDays):s===ue?a=n.formatMessage(t.retentionOneYear):a=n.formatMessage(t.retentionCustomDays,{num:Math.floor(s/T)}),e.jsxs(y,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(i,{...t.conversationRetention})}),e.jsx(U,{label:n.formatMessage(t.retentionSettingTooltip),children:a})]})}function m({title:s,description:n,children:a,upsellEnterprise:o=!1,descriptionValues:p={}}){return e.jsx(V,{label:e.jsx(i,{...t.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!o,className:"max-w-xl",children:e.jsxs(ce,{className:Y(o&&"text-token-text-tertiary"),children:[e.jsxs(de,{className:"flex items-center gap-3",children:[e.jsx(i,{...s}),o&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(i,{...t.enterpriseUpsellPill})})]}),n&&e.jsx(pe,{className:"py-2 text-token-text-secondary",children:fe(n)?e.jsx(i,{...n,values:p}):n}),a]})})}function fe(s){return!!s&&typeof s=="object"&&"id"in s}function xe({workspaceId:s,label:n,setting:a,defaultValue:o,values:p,disabled:f=!1}){const k=S(),b=D(),x=E(),{variables:j,mutate:w}=P({mutationFn:({setting:r,value:h})=>I.setWorkspaceShareSetting(s,r,h),onSettled:()=>{x.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{b.danger(k.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(y,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...n})}),e.jsxs(u.Root,{defaultValue:j?.value??o,onValueChange:r=>{w({setting:a,value:r})},disabled:f,children:[e.jsxs(u.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(u.Value,{}),e.jsx(u.Icon,{})]}),e.jsx(u.Portal,{children:e.jsx(u.Content,{children:p.map((r,h)=>e.jsx(u.Item,{className:"text-md",value:r.value,children:e.jsx(i,{...r.display})},h))})})]})]})}function he({onConfirm:s,onClose:n}){const a=S();return e.jsx(z,{type:"warning",isOpen:!0,onClose:n,title:a.formatMessage(t.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(N,{color:"danger",onClick:s,children:e.jsx(i,{...t.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(N,{onClick:n,color:"secondary",children:e.jsx(i,{...t.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(i,{...t.deleteWorkspaceMemoryModalInfo,values:{b:o=>e.jsx("b",{children:o})}})})})}function Me({workspaceId:s,data:n}){const a=Q(X.isTeamPlan),o=B(),p=S(),f=D(),{showWorkspaceSettings:k}=J(),[b,x]=G.useState(!1),j=E(),{variables:w,mutate:r}=P({mutationFn:({feature:d,enabled:L})=>I.setWorkspaceBetaFeature(s,d,L),onSettled:()=>{j.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(p.formatMessage(t.featureSettingsUpdateFailed))}}),h=C("193142637").value,_=C("3180974288").value&&o?.residencyRegion!=="eu",R=C("614413305").value&&o?.residencyRegion!=="eu",W=C("2445152477").value;return e.jsxs(re,{children:[a&&e.jsx(le,{}),e.jsxs(m,{title:t.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(O,{value:o?.data.organizationId??"",onCopied:()=>f.success(p.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(O,{value:s,onCopied:()=>f.success(p.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(m,{title:t.sharingSettingsTitle,upsellEnterprise:a,children:e.jsx(M,{children:e.jsx(xe,{workspaceId:s,label:t.chatSharingTitle,setting:q.CHAT_SHARE_SETTINGS,disabled:a,defaultValue:n.share_settings.chat_share_setting,values:[{display:t.workspaceMembersOnlySelect,value:v.WORKSPACE_ONLY},{display:t.noOneSelect,value:v.NO_ONE}]})})}),e.jsx(m,{title:t.memoryFeatureSettingsTitle,description:t.workspaceMemoryDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsx(M,{children:e.jsxs(y,{className:"justify-start py-6",children:[e.jsx(Z,{label:"",disabled:a,enabled:w?.enabled??n.beta_settings.sunshine,onChange:d=>{d?r({feature:l.MEMORY,enabled:d}):x(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...t.memoryOptionTitle})})]})})}),b&&e.jsx(he,{onConfirm:()=>{r({feature:l.MEMORY,enabled:!1}),x(!1)},onClose:()=>{x(!1)}}),h&&e.jsx(m,{title:c({id:"SyabKs",defaultMessage:"Canvas"}),description:c({id:"ROROHD",defaultMessage:"Control whether users in this workspace can use the ChatGPT canvas feature."}),upsellEnterprise:a,children:e.jsx(M,{children:e.jsx(g,{disabled:a,label:c({id:"i8v3nI",defaultMessage:"Canvas"}),feature:l.CANVAS,value:n.beta_settings.canvas,workspaceId:s})})}),W&&e.jsx(m,{title:c({id:"wgrfi/",defaultMessage:"Work with Apps"}),description:t.workspaceAppPairingDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/10119604",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsx(M,{children:e.jsx(g,{disabled:a,label:c({id:"j8pJeQ",defaultMessage:"Work with Apps"}),feature:l.APP_PAIRING,value:n.beta_settings.app_pairing,workspaceId:s})})}),e.jsx(m,{title:t.retentionPolicyTitle,description:t.retentionChange,upsellEnterprise:a,children:e.jsx(me,{conversationTTL:n.conversation_ttl})}),k||_?e.jsx(m,{title:t.connectionsTitle,upsellEnterprise:a,description:e.jsx(i,{...t.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(i,{...t.contextConnectorsHelpCenterLink})})}}),children:e.jsxs(M,{children:[k&&e.jsxs(e.Fragment,{children:[e.jsx(g,{disabled:a,label:t.contextConnectorsGoogleDrive,Icon:te,feature:l.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings.context_connector_gdrive,workspaceId:s}),e.jsx(g,{disabled:a,label:$,Icon:A,tooltip:t.contextConnectorsO365BusinessTooltip,feature:l.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings.context_connector_o365_business,workspaceId:s}),e.jsx(g,{disabled:a,label:ee,Icon:A,tooltip:t.contextConnectorsO365PersonalTooltip,feature:l.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings.context_connector_o365_personal,workspaceId:s})]}),_&&e.jsxs(y,{className:"flex-col",children:[e.jsx(g,{hasPadding:!1,disabled:!1,label:c({id:"AOszR9",defaultMessage:"Enable Apple Intelligence"}),Icon:se,feature:l.CLIENT_APPLICATION_APPLE,value:n.beta_settings.client_application_apple,workspaceId:s,tooltip:c({id:"r8RutN",defaultMessage:"Enable linking with Apple Intelligence"})}),R&&e.jsx(g,{className:"ml-6",hasPadding:!1,disabled:!n.beta_settings.client_application_apple,label:c({id:"64jjqZ",defaultMessage:"Enable on managed devices only"}),feature:l.CLIENT_APPLICATION_APPLE_MDM_REQUIRED,value:n.beta_settings.client_application_apple_mdm_required,workspaceId:s,tooltip:c({id:"7Afc2K",defaultMessage:"Only allow linking this workspace with Apple Intelligence on MDM managed devices"})})]})]})}):null]})}function Se({currentWorkspaceId:s}){const{data:n,isLoading:a}=F(s),o=S();return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx("title",{children:o.formatMessage(t.title)})}),e.jsx(ne,{title:o.formatMessage(t.title)}),e.jsx(ae,{showSpinner:a,children:n===void 0?null:e.jsx(Me,{workspaceId:s,data:n})})]})}const t=H({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},workspaceAppPairingDescription:{id:"workspaceSettings.workspaceAppPairingDescription",defaultMessage:"Control whether users in this workspace can enable ChatGPT to work with other apps on their desktop. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},connectionsTitle:{id:"workspaceSettings.connectionsTitle",defaultMessage:"Connections"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function Pe(){const s=ie();return oe(),e.jsx(Se,{...s})}export{Pe as default};
//# sourceMappingURL=ina3g7dk73oufp95.js.map
