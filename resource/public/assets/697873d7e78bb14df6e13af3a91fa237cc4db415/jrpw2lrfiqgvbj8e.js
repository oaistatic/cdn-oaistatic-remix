import{r as T,eA as q,L as S,m as e,a5 as H,O as I,w as R,x as W,W as L,bi as b,b6 as i,gN as U,gO as v,eB as r,ez as l,K as Y,ba as K,en as Q,aE as X,cI as Z,bn as A}from"./dfm2yceao9m2ilo9.js";import{B as p}from"./i953a9ichp1zht75.js";import{c9 as z,c2 as J,c3 as $,eZ as E,e_ as ee,e$ as D,aX as te,f0 as se,f1 as ne,f2 as P,f3 as ae}from"./o7wih49jz3zkdcav.js";import{S as u}from"./oz9mhv8xwj12nnpw.js";import{a as ie,b as oe,u as re,c as le}from"./oqmax98k4d2jzqaz.js";import{a as ce,b as de,c as C,A as k,d as pe,e as ge,f as ue}from"./beuim4fl46eljdtf.js";import"./c4bxzbp1808foto4.js";import"./kb6nlpjb6lfuuize.js";import"./ni648vdhvct9krhm.js";import"./oj002yr1cv5905d0.js";import"./ccrdffu4uq6bo5k0.js";import"./bukl7xv9oirq4ooz.js";import"./n2jol51kjzmqjiuf.js";const me=t=>T.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},T.createElement("path",{d:"M20.0909 7.2368C19.3969 7.66168 18.8221 8.25568 18.4202 8.96321C18.0183 9.67075 17.8025 10.4687 17.7929 11.2823C17.7957 12.1981 18.067 13.0929 18.5733 13.856C19.0796 14.6191 19.7986 15.2169 20.6413 15.5754C20.309 16.6474 19.8173 17.6632 19.1827 18.5888C18.2746 19.8961 17.325 21.2032 15.8803 21.2032C14.4355 21.2032 14.064 20.3638 12.399 20.3638C10.7753 20.3638 10.1974 21.2308 8.87637 21.2308C7.5554 21.2308 6.63358 20.0198 5.574 18.5338C4.17437 16.452 3.40515 14.0106 3.35864 11.5024C3.35864 7.37443 6.0419 5.18665 8.68372 5.18665C10.0873 5.18665 11.2569 6.10847 12.1376 6.10847C12.9769 6.10847 14.2842 5.1315 15.8803 5.1315C16.7009 5.11032 17.5142 5.29127 18.2485 5.6584C18.9827 6.02553 19.6154 6.56757 20.0909 7.2368ZM15.1235 3.38405C15.8271 2.55637 16.2254 1.51233 16.2519 0.426336C16.2531 0.28317 16.2392 0.140275 16.2106 0C15.002 0.11806 13.8844 0.694096 13.087 1.60995C12.3766 2.40465 11.9633 3.42081 11.9174 4.48573C11.9179 4.61524 11.9317 4.74435 11.9587 4.87103C12.0539 4.88904 12.1507 4.89827 12.2476 4.89861C12.8046 4.85429 13.3468 4.69717 13.8412 4.4368C14.3356 4.17644 14.7719 3.81826 15.1235 3.38405Z",fill:"black"})),O=60*60*24,fe=O*90,he=O*365;function xe({conversationTTL:t}){const n=S();let a;return t==null?a=n.formatMessage(s.retentionInfinite):t===fe?a=n.formatMessage(s.retentionNinetyDays):t===he?a=n.formatMessage(s.retentionOneYear):a=n.formatMessage(s.retentionCustomDays,{num:Math.floor(t/O)}),e.jsxs(k,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(i,{...s.conversationRetention})}),e.jsx(K,{label:n.formatMessage(s.retentionSettingTooltip),children:a})]})}function m({title:t,description:n,children:a,upsellEnterprise:o=!1,descriptionValues:g={}}){return e.jsx(Q,{label:e.jsx(i,{...s.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!o,className:"max-w-xl",children:e.jsxs(pe,{className:X(o&&"text-token-text-tertiary"),children:[e.jsxs(ge,{className:"flex items-center gap-3",children:[e.jsx(i,{...t}),o&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(i,{...s.enterpriseUpsellPill})})]}),n&&e.jsx(ue,{className:"py-2 text-token-text-secondary",children:Ce(n)?e.jsx(i,{...n,values:g}):n}),a]})})}function Ce(t){return!!t&&typeof t=="object"&&"id"in t}function Se({workspaceId:t,label:n,setting:a,defaultValue:o,values:g,disabled:f=!1}){const M=S(),y=I(),h=R(),{variables:j,mutate:w}=W({mutationFn:({setting:c,value:x})=>L.setWorkspaceShareSetting(t,c,x),onSettled:()=>{h.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{y.danger(M.formatMessage(s.featureSettingsUpdateFailed))}});return e.jsxs(k,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...n})}),e.jsxs(u.Root,{defaultValue:j?.value??o,onValueChange:c=>{w({setting:a,value:c})},disabled:f,children:[e.jsxs(u.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(u.Value,{}),e.jsx(u.Icon,{})]}),e.jsx(u.Portal,{children:e.jsx(u.Content,{children:g.map((c,x)=>e.jsx(u.Item,{className:"text-md",value:c.value,children:e.jsx(i,{...c.display})},x))})})]})]})}function Me({onConfirm:t,onClose:n}){const a=S();return e.jsx(Z,{type:"warning",isOpen:!0,onClose:n,title:a.formatMessage(s.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(A,{color:"danger",onClick:t,children:e.jsx(i,{...s.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(A,{onClick:n,color:"secondary",children:e.jsx(i,{...s.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(i,{...s.deleteWorkspaceMemoryModalInfo,values:{b:o=>e.jsx("b",{children:o})}})})})}function be({workspaceId:t,data:n}){const a=J($.isTeamPlan),o=H(),g=S(),f=I(),{showWorkspaceSettings:M}=E(),[y,h]=T.useState(!1),j=R(),{variables:w,mutate:c}=W({mutationFn:({feature:d,enabled:V})=>L.setWorkspaceBetaFeature(t,d,V),onSettled:()=>{j.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(g.formatMessage(s.featureSettingsUpdateFailed))}}),x=b("193142637").value,_=b("3180974288").value&&o?.residencyRegion!=="eu",B=b("614413305").value&&o?.residencyRegion!=="eu",F=b("2445152477").value,N=E();N.jiraLinkStatus,N.confluenceLinkStatus;const G=ee();return e.jsxs(ce,{children:[a&&e.jsx(de,{}),e.jsxs(m,{title:s.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(D,{value:o?.data.organizationId??"",onCopied:()=>f.success(g.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(i,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(D,{value:t,onCopied:()=>f.success(g.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(m,{title:s.sharingSettingsTitle,upsellEnterprise:a,children:e.jsx(C,{children:e.jsx(Se,{workspaceId:t,label:s.chatSharingTitle,setting:U.CHAT_SHARE_SETTINGS,disabled:a,defaultValue:n.share_settings.chat_share_setting,values:[{display:s.workspaceMembersOnlySelect,value:v.WORKSPACE_ONLY},{display:s.noOneSelect,value:v.NO_ONE}]})})}),e.jsx(m,{title:s.memoryFeatureSettingsTitle,description:s.workspaceMemoryDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsxs(C,{children:[e.jsxs(k,{className:"justify-start py-6",children:[e.jsx(te,{label:"",disabled:a,enabled:w?.enabled??n.beta_settings.sunshine,onChange:d=>{d?c({feature:r.MEMORY,enabled:d}):h(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...s.memoryOptionTitle})})]}),G&&e.jsx(p,{disabled:!n.beta_settings.sunshine,label:l({id:"Z9AZ9N",defaultMessage:"Allow members to use memory in search"}),feature:r.MEMORY_IN_SEARCH,value:n.beta_settings.memory_in_search,workspaceId:t})]})}),y&&e.jsx(Me,{onConfirm:()=>{c({feature:r.MEMORY,enabled:!1}),h(!1)},onClose:()=>{h(!1)}}),x&&e.jsx(m,{title:l({id:"SyabKs",defaultMessage:"Canvas"}),description:l({id:"ROROHD",defaultMessage:"Control whether users in this workspace can use the ChatGPT canvas feature."}),upsellEnterprise:a,children:e.jsx(C,{children:e.jsx(p,{disabled:a,label:l({id:"i8v3nI",defaultMessage:"Canvas"}),feature:r.CANVAS,value:n.beta_settings.canvas,workspaceId:t})})}),F&&e.jsx(m,{title:l({id:"wgrfi/",defaultMessage:"Work with Apps"}),description:s.workspaceAppPairingDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/10119604",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsx(C,{children:e.jsx(p,{disabled:a,label:l({id:"j8pJeQ",defaultMessage:"Work with Apps"}),feature:r.APP_PAIRING,value:n.beta_settings.app_pairing,workspaceId:t})})}),e.jsx(m,{title:s.retentionPolicyTitle,description:s.retentionChange,upsellEnterprise:a,children:e.jsx(xe,{conversationTTL:n.conversation_ttl})}),M||_?e.jsx(m,{title:s.connectionsTitle,upsellEnterprise:a,description:e.jsx(i,{...s.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(i,{...s.contextConnectorsHelpCenterLink})})}}),children:e.jsxs(C,{children:[M&&e.jsxs(e.Fragment,{children:[!1,!1,e.jsx(p,{disabled:a,label:s.contextConnectorsGoogleDrive,Icon:se,feature:r.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings[r.CONTEXT_CONNECTOR_GDRIVE],workspaceId:t}),e.jsx(p,{disabled:a,label:ne,Icon:P,tooltip:s.contextConnectorsO365BusinessTooltip,feature:r.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings[r.CONTEXT_CONNECTOR_O365_BUSINESS],workspaceId:t}),e.jsx(p,{disabled:a,label:ae,Icon:P,tooltip:s.contextConnectorsO365PersonalTooltip,feature:r.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings[r.CONTEXT_CONNECTOR_O365_PERSONAL],workspaceId:t})]}),_&&e.jsxs(k,{className:"flex-col",children:[e.jsx(p,{hasPadding:!1,disabled:!1,label:l({id:"mcLjLe",defaultMessage:"Beta: Apple Intelligence"}),Icon:me,feature:r.CLIENT_APPLICATION_APPLE,value:n.beta_settings.client_application_apple,workspaceId:t,tooltip:l({id:"mp2Kmk",defaultMessage:"Beta: Enable linking with Apple Intelligence"})}),B&&e.jsx(p,{className:"ml-6",hasPadding:!1,disabled:!n.beta_settings.client_application_apple,label:l({id:"64jjqZ",defaultMessage:"Enable on managed devices only"}),feature:r.CLIENT_APPLICATION_APPLE_MDM_REQUIRED,value:n.beta_settings.client_application_apple_mdm_required,workspaceId:t,tooltip:l({id:"7Afc2K",defaultMessage:"Only allow linking this workspace with Apple Intelligence on MDM managed devices"})})]})]})}):null]})}function ke({currentWorkspaceId:t}){const{data:n,isLoading:a}=q(t),o=S();return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx("title",{children:o.formatMessage(s.title)})}),e.jsx(ie,{title:o.formatMessage(s.title)}),e.jsx(oe,{showSpinner:a,children:n===void 0?null:e.jsx(be,{workspaceId:t,data:n})})]})}const s=Y({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},workspaceAppPairingDescription:{id:"workspaceSettings.workspaceAppPairingDescription",defaultMessage:"Control whether users in this workspace can enable ChatGPT to work with apps. This allows ChatGPT to read the content of specific apps on their desktop to provide better responses. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},connectionsTitle:{id:"workspaceSettings.connectionsTitle",defaultMessage:"Connections"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function Re(){const t=re();return le(),e.jsx(ke,{...t})}export{Re as default};
//# sourceMappingURL=jrpw2lrfiqgvbj8e.js.map
