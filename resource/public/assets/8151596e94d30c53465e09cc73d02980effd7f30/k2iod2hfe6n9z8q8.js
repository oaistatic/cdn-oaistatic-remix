import{en as G,G as M,m as e,Z as q,H as P,r as H,w as R,x as I,L as W,aR as k,aS as i,gs as U,gt as _,eo as r,eq as d,F as V,aJ as Y,e7 as Q,aC as X,cc as K,aY as v}from"./g92hdia1euilhv3m.js";import{B as p}from"./e8hw7hkqcd7j7s5t.js";import{cx as z,c2 as J,c3 as Z,cy as A,cz as D,aO as $,cA as ee,cB as te}from"./l912w0bwi7cbhgoi.js";import{X as se,a9 as E,aO as ne}from"./j9bb93dkfix5hp9e.js";import{S as u}from"./h8ux0o98lkz0sd04.js";import{a as ae,b as ie,u as oe,c as re}from"./l0gt516jkmowk15t.js";import{a as le,b as ce,c as S,A as y,d as de,e as ge,f as pe}from"./ce6kgdte6riev9xt.js";import"./c4bxzbp1808foto4.js";import"./lrmbs77eo8y3fn41.js";import"./dmaf5le5xejig3y4.js";import"./ckccvvf5yal7qfyi.js";import"./bz2yxwsv6hrttawy.js";import"./h4d36m14jzfua858.js";import"./xf7ebn3ih6ykjmz1.js";const w=60*60*24,ue=w*90,me=w*365;function fe({conversationTTL:s}){const n=M();let a;return s==null?a=n.formatMessage(t.retentionInfinite):s===ue?a=n.formatMessage(t.retentionNinetyDays):s===me?a=n.formatMessage(t.retentionOneYear):a=n.formatMessage(t.retentionCustomDays,{num:Math.floor(s/w)}),e.jsxs(y,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(i,{...t.conversationRetention})}),e.jsx(Y,{label:n.formatMessage(t.retentionSettingTooltip),children:a})]})}function m({title:s,description:n,children:a,upsellEnterprise:o=!1,descriptionValues:g={}}){return e.jsx(Q,{label:e.jsx(i,{...t.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!o,className:"max-w-xl",children:e.jsxs(de,{className:X(o&&"text-token-text-tertiary"),children:[e.jsxs(ge,{className:"flex items-center gap-3",children:[e.jsx(i,{...s}),o&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(i,{...t.enterpriseUpsellPill})})]}),n&&e.jsx(pe,{className:"py-2 text-token-text-secondary",children:xe(n)?e.jsx(i,{...n,values:g}):n}),a]})})}function xe(s){return!!s&&typeof s=="object"&&"id"in s}function he({workspaceId:s,label:n,setting:a,defaultValue:o,values:g,disabled:f=!1}){const C=M(),j=P(),x=R(),{variables:b,mutate:T}=I({mutationFn:({setting:l,value:h})=>W.setWorkspaceShareSetting(s,l,h),onSettled:()=>{x.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{j.danger(C.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(y,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...n})}),e.jsxs(u.Root,{defaultValue:b?.value??o,onValueChange:l=>{T({setting:a,value:l})},disabled:f,children:[e.jsxs(u.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(u.Value,{}),e.jsx(u.Icon,{})]}),e.jsx(u.Portal,{children:e.jsx(u.Content,{children:g.map((l,h)=>e.jsx(u.Item,{className:"text-md",value:l.value,children:e.jsx(i,{...l.display})},h))})})]})]})}function Se({onConfirm:s,onClose:n}){const a=M();return e.jsx(K,{type:"warning",isOpen:!0,onClose:n,title:a.formatMessage(t.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(v,{color:"danger",onClick:s,children:e.jsx(i,{...t.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(v,{onClick:n,color:"secondary",children:e.jsx(i,{...t.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(i,{...t.deleteWorkspaceMemoryModalInfo,values:{b:o=>e.jsx("b",{children:o})}})})})}function Me({workspaceId:s,data:n}){const a=J(Z.isTeamPlan),o=q(),g=M(),f=P(),{showWorkspaceSettings:C}=A(),[j,x]=H.useState(!1),b=R(),{variables:T,mutate:l}=I({mutationFn:({feature:c,enabled:B})=>W.setWorkspaceBetaFeature(s,c,B),onSettled:()=>{b.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(g.formatMessage(t.featureSettingsUpdateFailed))}}),h=k("193142637").value,O=k("3180974288").value&&o?.residencyRegion!=="eu",L=k("614413305").value&&o?.residencyRegion!=="eu",F=k("2445152477").value,N=A();return N.jiraLinkStatus,N.confluenceLinkStatus,e.jsxs(le,{children:[a&&e.jsx(ce,{}),e.jsxs(m,{title:t.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(D,{value:o?.data.organizationId??"",onCopied:()=>f.success(g.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(D,{value:s,onCopied:()=>f.success(g.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(m,{title:t.sharingSettingsTitle,upsellEnterprise:a,children:e.jsx(S,{children:e.jsx(he,{workspaceId:s,label:t.chatSharingTitle,setting:U.CHAT_SHARE_SETTINGS,disabled:a,defaultValue:n.share_settings.chat_share_setting,values:[{display:t.workspaceMembersOnlySelect,value:_.WORKSPACE_ONLY},{display:t.noOneSelect,value:_.NO_ONE}]})})}),e.jsx(m,{title:t.memoryFeatureSettingsTitle,description:t.workspaceMemoryDescription,descriptionValues:{link:c=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:c})},upsellEnterprise:a,children:e.jsx(S,{children:e.jsxs(y,{className:"justify-start py-6",children:[e.jsx($,{label:"",disabled:a,enabled:T?.enabled??n.beta_settings.sunshine,onChange:c=>{c?l({feature:r.MEMORY,enabled:c}):x(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...t.memoryOptionTitle})})]})})}),j&&e.jsx(Se,{onConfirm:()=>{l({feature:r.MEMORY,enabled:!1}),x(!1)},onClose:()=>{x(!1)}}),h&&e.jsx(m,{title:d({id:"SyabKs",defaultMessage:"Canvas"}),description:d({id:"ROROHD",defaultMessage:"Control whether users in this workspace can use the ChatGPT canvas feature."}),upsellEnterprise:a,children:e.jsx(S,{children:e.jsx(p,{disabled:a,label:d({id:"i8v3nI",defaultMessage:"Canvas"}),feature:r.CANVAS,value:n.beta_settings.canvas,workspaceId:s})})}),F&&e.jsx(m,{title:d({id:"wgrfi/",defaultMessage:"Work with Apps"}),description:t.workspaceAppPairingDescription,descriptionValues:{link:c=>e.jsx("a",{href:"https://help.openai.com/en/articles/10119604",target:"_blank",className:"underline",rel:"noreferrer",children:c})},upsellEnterprise:a,children:e.jsx(S,{children:e.jsx(p,{disabled:a,label:d({id:"j8pJeQ",defaultMessage:"Work with Apps"}),feature:r.APP_PAIRING,value:n.beta_settings.app_pairing,workspaceId:s})})}),e.jsx(m,{title:t.retentionPolicyTitle,description:t.retentionChange,upsellEnterprise:a,children:e.jsx(fe,{conversationTTL:n.conversation_ttl})}),C||O?e.jsx(m,{title:t.connectionsTitle,upsellEnterprise:a,description:e.jsx(i,{...t.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(i,{...t.contextConnectorsHelpCenterLink})})}}),children:e.jsxs(S,{children:[C&&e.jsxs(e.Fragment,{children:[!1,!1,e.jsx(p,{disabled:a,label:t.contextConnectorsGoogleDrive,Icon:se,feature:r.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings[r.CONTEXT_CONNECTOR_GDRIVE],workspaceId:s}),e.jsx(p,{disabled:a,label:ee,Icon:E,tooltip:t.contextConnectorsO365BusinessTooltip,feature:r.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings[r.CONTEXT_CONNECTOR_O365_BUSINESS],workspaceId:s}),e.jsx(p,{disabled:a,label:te,Icon:E,tooltip:t.contextConnectorsO365PersonalTooltip,feature:r.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings[r.CONTEXT_CONNECTOR_O365_PERSONAL],workspaceId:s})]}),O&&e.jsxs(y,{className:"flex-col",children:[e.jsx(p,{hasPadding:!1,disabled:!1,label:d({id:"Rg5f9y",defaultMessage:"Apple Intelligence"}),Icon:ne,feature:r.CLIENT_APPLICATION_APPLE,value:n.beta_settings.client_application_apple,workspaceId:s}),L&&e.jsx(p,{className:"ml-6",hasPadding:!1,disabled:!n.beta_settings.client_application_apple,label:d({id:"64jjqZ",defaultMessage:"Enable on managed devices only"}),feature:r.CLIENT_APPLICATION_APPLE_MDM_REQUIRED,value:n.beta_settings.client_application_apple_mdm_required,workspaceId:s,tooltip:d({id:"7Afc2K",defaultMessage:"Only allow linking this workspace with Apple Intelligence on MDM managed devices"})})]})]})}):null]})}function Ce({currentWorkspaceId:s}){const{data:n,isLoading:a}=G(s),o=M();return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx("title",{children:o.formatMessage(t.title)})}),e.jsx(ae,{title:o.formatMessage(t.title)}),e.jsx(ie,{showSpinner:a,children:n===void 0?null:e.jsx(Me,{workspaceId:s,data:n})})]})}const t=V({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},workspaceAppPairingDescription:{id:"workspaceSettings.workspaceAppPairingDescription",defaultMessage:"Control whether users in this workspace can enable ChatGPT to work with other apps on their desktop. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},connectionsTitle:{id:"workspaceSettings.connectionsTitle",defaultMessage:"Connections"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function Re(){const s=oe();return re(),e.jsx(Ce,{...s})}export{Re as default};
//# sourceMappingURL=k2iod2hfe6n9z8q8.js.map
