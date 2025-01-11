import{c as J,r as h,j as e,M as t,ad as ke,ac as we,a as Le,b as _e,u as be}from"./i8w88cc8b3gds516.js";import{y as pe,dr as Ne,S as D,P as F,j as R,cr as Ee,co as X,dn as de,cp as L,bn as ce,fJ as Pe,fM as Be,an as G,fN as Ie,b9 as se,a5 as Ae,c1 as ue,c2 as Q,aP as Oe,bU as ze,q as v,f as te,aa as ae}from"./eh26o1l35t2fnjj4.js";import{a4 as Fe,U as Re,A as De,a5 as He,a6 as ge,a7 as Ge,a8 as We,a9 as qe,aa as Ke,ab as Ye,ac as Ze,ad as Qe,ae as Xe,af as $e,ag as Ce,ah as xe,ai as Je,aj as Ve,ak as es,I as ss}from"./jg63sxiyqeyvfv9f.js";function ts({onSuccess:l,onError:r}){const n=Le();return _e({mutationFn:({userContext:d})=>ae.createOrUpdateUserSystemMessage(d),onSettled:(d,C)=>{const c=["userContext"];d!==null&&!C?n.setQueryData(c,d):n.invalidateQueries({queryKey:c})},onSuccess:l,onError:r})}function as(l){const r=J(),n=pe();return be({queryKey:["userContext"],queryFn:()=>ae.getUserSystemMessage().catch(d=>{throw n.danger(r.formatMessage({id:"userContextModal.getCustomInstructionsError",defaultMessage:"Failed to get your settings"})),d}),refetchOnMount:"always",enabled:l,select:d=>({aboutUserMessage:d?.about_user_message??"",aboutModelMessage:d?.about_model_message??"",nameUserMessage:d?.name_user_message??"",roleUserMessage:d?.role_user_message??"",traitsModelMessage:d?.traits_model_message??"",otherUserMessage:d?.other_user_message??"",disabledTools:d?.disabled_tools??[],enabled:d?.enabled??!0})})}function gs(){return be({queryKey:["userContextMessageDisabledTools"],queryFn:()=>ae.getUserSystemMessageDisabledTools().catch(l=>{throw l}),select:l=>l?.disabled_tools??[]})}const me={aboutUserMessage:void 0,aboutModelMessage:void 0,nameUserMessage:void 0,roleUserMessage:void 0,traitsModelMessage:void 0,otherUserMessage:void 0,disabledTools:void 0,enabled:void 0};function xs({isModalOpen:l}){const r=J(),n=pe(),d=Fe(),[C,c]=h.useState(!1),{isLoading:u,data:S}=as(l),{aboutUserMessage:f="",aboutModelMessage:m="",nameUserMessage:i="",roleUserMessage:M="",traitsModelMessage:y="",otherUserMessage:b="",disabledTools:T=[],enabled:I}=S??{},[A,p]=h.useState(me),{aboutUserMessage:j,aboutModelMessage:U,nameUserMessage:_,roleUserMessage:N,traitsModelMessage:k,otherUserMessage:E,disabledTools:P,enabled:g}=A,x=g??!!I,[O,V]=h.useState(null),W=h.useCallback(()=>{Re.closeModal(De.UserContext),p(me),V(null)},[]),{isPending:q,mutate:oe}=ts({onSuccess:()=>{W()},onError:o=>(o.response?.reason==="content_policy"&&o.response?.field?V(o.response?.field):n.danger(r.formatMessage({id:"userContextModal.saveError",defaultMessage:"Failed to update settings"})),o)}),[le,re]=h.useState(!1),[Te,je]=h.useState(!1),[ee,Ue]=h.useState([]),K=[j,U,_,N,k,E].some(o=>$(o??"")),Y=[{local:U,server:m},{local:j,server:f},{local:_,server:i},{local:N,server:M},{local:k,server:y},{local:E,server:b}].some(({local:o,server:s})=>o!==void 0&&o!==s)||P!==void 0&&!Ne(P,T)||g!==void 0&&g!==I,Z=h.useCallback(()=>{D.logEvent("chatgpt_user_context_cancel_clicked"),F.logEvent(R.userContextCancelClicked),Y?re(!0):W()},[W,Y]),ie=h.useCallback(async()=>{if(!q){V(null);const o={aboutUserMessage:j??"",aboutModelMessage:U??"",nameUserMessage:_??"",roleUserMessage:N??"",traitsModelMessage:k??"",otherUserMessage:E??"",disabledTools:P??[],enabled:!!g},s={name:i,occupation:M,traits:y,other:b},ne={name:o.nameUserMessage,role:o.roleUserMessage,traits:o.traitsModelMessage,other:o.otherUserMessage,traitPillsSelected:ee};F.logEvent(R.userContextSaveCustomizeChatGPT,{previousState:s,newState:ne}),D.logEvent("chatgpt_user_context_save_custom_instructions",void 0,{previousState:JSON.stringify(s),newState:JSON.stringify(ne)}),oe({userContext:o})}},[q,U,j,_,N,k,E,P,g,ee,i,M,y,b,oe]),w=h.useCallback(()=>{if(K){const o=$(j??""),s=$(U??"");o&&(D.logEvent("chatgpt_user_context_modal__message_past_limit",void 0,{type:"about_user_message",limit:B.toString(),character_length:j?.length.toString()??""}),F.logEvent(R.userContextModelMessagePastLimit,{type:"about_user_message",limit:B.toString(),character_length:j?.length.toString()??""})),s&&(D.logEvent("chatgpt_user_context_modal__message_past_limit",void 0,{type:"about_model_message",limit:B.toString(),character_length:U?.length.toString()??""}),F.logEvent(R.userContextModelMessagePastLimit,{type:"about_model_message",limit:B.toString(),character_length:U?.length.toString()??""})),n.danger(r.formatMessage(a.messageLimitError,{limit:B}),{duration:4,hasCloseButton:!0});return}ie()},[r,K,U,j,ie,n]),{layer:Se}=Ee("3206655705"),ve=Se.get("enable_new_ux",!1);if(l&&!le&&ve)return e.jsxs(X,{isOpen:l,onClose:Z,type:"success",size:"custom",className:"max-w-xl",title:e.jsx(t,{...a.profileTitle}),description:e.jsx("span",{className:"text-token-text-secondary",children:e.jsx(t,{...a.profileSubtitle})}),children:[u?e.jsx("div",{className:"flex h-14 items-center justify-center",children:e.jsx(de,{})}):e.jsxs("div",{className:"max-h-[60vh] overflow-y-auto md:max-h-[calc(100vh-300px)]",children:[e.jsx("p",{className:"text-muted py-2 text-sm font-medium",children:e.jsx(t,{...a.customizeName})}),e.jsx(z,{className:"mb-3",onSubmit:w,disabled:!x,hasModError:O==="name_user_message",value:_??i,onChange:o=>p(s=>({aboutModelMessage:s.aboutModelMessage??m,aboutUserMessage:s.aboutUserMessage??f,nameUserMessage:o.target.value,roleUserMessage:s.roleUserMessage??M,traitsModelMessage:s.traitsModelMessage??y,otherUserMessage:s.otherUserMessage??b,enabled:s.enabled??x,disabledTools:s.disabledTools??T})),size:"sm",showCharacterCount:!1}),e.jsx("p",{className:"text-muted py-2 text-sm font-medium text-token-text-primary",children:e.jsx(t,{...a.customizeRole})}),e.jsx(z,{className:"mb-3",onSubmit:w,disabled:!x,hasModError:O==="role_user_message",value:N??M,placeholder:r.formatMessage(a.customizeRolePlaceholder),onChange:o=>p(s=>({aboutUserMessage:"",aboutModelMessage:"",nameUserMessage:s.nameUserMessage??i,roleUserMessage:o.target.value,traitsModelMessage:s.traitsModelMessage??y,otherUserMessage:s.otherUserMessage??b,enabled:s.enabled??x,disabledTools:s.disabledTools??T})),size:"sm",showCharacterCount:!1}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-muted mr-2 py-2 text-sm font-medium text-token-text-primary",children:e.jsx(t,{...a.customizeTraits})}),e.jsx(he,{primaryLabel:e.jsx("div",{className:"text-muted mx-3 mb-[6px] mt-3 text-sm font-medium",children:e.jsx(t,{...a.traitsTooltipTitle})}),secondaryLabel:e.jsxs("ul",{className:"text-muted mx-2 mb-3 list-disc justify-start space-y-[6px] pl-5 text-sm text-token-text-primary",children:[e.jsx("li",{children:e.jsx(t,{...a.traitsTooltipBodyItem1})}),e.jsx("li",{children:e.jsx(t,{...a.traitsTooltipBodyItem2})}),e.jsx("li",{children:e.jsx(t,{...a.traitsTooltipBodyItem3})})]})})]}),e.jsx(z,{onSubmit:w,disabled:!x,hasModError:O==="traits_model_message",value:k??y,placeholder:r.formatMessage(a.customizeTraitsPlaceholder),onChange:o=>p(s=>({aboutUserMessage:"",aboutModelMessage:"",nameUserMessage:s.nameUserMessage??i,roleUserMessage:s.roleUserMessage??M,traitsModelMessage:o.target.value,otherUserMessage:s.otherUserMessage??b,enabled:s.enabled??x,disabledTools:s.disabledTools??T})),size:"md",showCharacterCount:!1,isNewCustomInstructionsUIEnabled:!0}),e.jsx("div",{className:"mb-4",children:e.jsx(os,{onSelect:o=>{p(s=>({...s,traitsModelMessage:`${s.traitsModelMessage??""} ${o}`.trim(),aboutUserMessage:"",aboutModelMessage:"",nameUserMessage:s.nameUserMessage??i,roleUserMessage:s.roleUserMessage??M,otherUserMessage:s.otherUserMessage??b,disabledTools:s.disabledTools??T,enabled:s.enabled??x}))},selectedTraits:ee,setSelectedTraits:Ue})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-muted mr-2 py-2 text-sm font-medium text-token-text-primary",children:e.jsx(t,{...a.customizeOther})}),e.jsx(he,{primaryLabel:e.jsx("div",{className:"text-muted mx-3 mb-2 mt-3 text-sm font-medium",children:e.jsx(t,{...a.otherTooltipTitle})}),secondaryLabel:e.jsxs("ul",{className:"text-muted mx-2 mb-3 list-disc justify-start space-y-[6px] pl-5 text-sm text-token-text-primary",children:[e.jsx("li",{children:e.jsx(t,{...a.otherTooltipBodyItem1})}),e.jsx("li",{children:e.jsx(t,{...a.otherTooltipBodyItem2})}),e.jsx("li",{children:e.jsx(t,{...a.otherTooltipBodyItem3})})]})})]}),e.jsx(z,{onSubmit:w,disabled:!x,hasModError:O==="other_user_message",value:E??b,placeholder:r.formatMessage(a.customizeOtherPlaceholder),onChange:o=>p(s=>({aboutUserMessage:"",aboutModelMessage:"",nameUserMessage:s.nameUserMessage??i,roleUserMessage:s.roleUserMessage??M,traitsModelMessage:s.traitsModelMessage??y,otherUserMessage:o.target.value,enabled:s.enabled??x,disabledTools:s.disabledTools??T})),size:"md",showCharacterCount:!1,isNewCustomInstructionsUIEnabled:!0}),e.jsxs("div",{className:"mt-3 pb-8",children:[e.jsxs("button",{onClick:()=>je(o=>!o),className:"text-muted flex items-center justify-between py-2 text-sm font-medium text-token-text-primary",children:[e.jsx(t,{...a.advanced}),e.jsx(He,{className:"ml-1 h-5 w-5"})]}),Te&&e.jsx("div",{className:"mt-2",children:e.jsx(fe,{disabledTools:A.disabledTools??T??[],onDisabledToolsChanged:o=>p(s=>({aboutUserMessage:"",aboutModelMessage:"",nameUserMessage:s.nameUserMessage??i,roleUserMessage:s.roleUserMessage??M,traitsModelMessage:s.traitsModelMessage??y,otherUserMessage:s.otherUserMessage??b,enabled:s.enabled??x,disabledTools:o})),isNewCustomInstructionsUIEnabled:!0})})]})]}),e.jsx("div",{className:"-ml-6 -mr-6 border-t",children:e.jsxs("div",{className:"ml-6 mr-6 flex flex-grow flex-col items-stretch justify-between gap-0 pb-1 pt-2 sm:flex-row sm:items-center sm:gap-3",children:[e.jsxs("label",{className:"mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",children:[e.jsx(ge,{enabled:x,onChange:o=>{p(s=>({aboutUserMessage:"",aboutModelMessage:"",nameUserMessage:s.nameUserMessage??i,roleUserMessage:s.roleUserMessage??M,traitsModelMessage:s.traitsModelMessage??y,otherUserMessage:s.otherUserMessage??b,enabled:o,disabledTools:s.disabledTools??T}))},label:x?r.formatMessage(a.disableToggleLabel):r.formatMessage(a.enableToggleLabel)}),e.jsx("div",{className:"self-center text-sm text-token-text-primary",children:e.jsx(t,{...a.chatPreferencesEnable})})]}),e.jsx(L.Actions,{secondaryButton:e.jsx(L.Button,{onClick:Z,children:e.jsx(t,{...a.cancel})}),primaryButton:e.jsx(L.Button,{loading:q,onClick:w,color:"primary",visuallyDisabled:K,disabled:!Y,children:e.jsx(t,{...a.save})})})]})})]},"user-context");if(l&&d&&!C)return e.jsx(Ge,{onClose:()=>{c(!0)}});if(l&&le){const o=()=>{re(!1),D.logEvent("chatgpt_user_context_confirm_close_clicked"),F.logEvent(R.userContextConfirmCloseClicked)};return e.jsx(X,{isOpen:!0,onClose:o,type:"success",title:r.formatMessage(a.confirmCloseTitle),primaryButton:e.jsx(L.Button,{title:r.formatMessage(a.confirmCloseOk),color:"danger",onClick:()=>{W(),o()}}),secondaryButton:e.jsx(L.Button,{title:r.formatMessage(a.confirmCloseCancel),color:"secondary",onClick:o}),children:e.jsx("div",{className:"text-sm",children:e.jsx(t,{...a.confirmCloseBody})})},"confirm-close")}return e.jsxs(X,{isOpen:l,onClose:Z,type:"success",size:"custom",className:"max-w-lg xl:max-w-xl",title:e.jsx(t,{...a.profileTitle}),children:[u?e.jsx("div",{className:"flex h-14 items-center justify-center",children:e.jsx(de,{})}):e.jsxs("div",{className:"max-h-[60vh] overflow-y-auto md:max-h-[calc(100vh-300px)]",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"text-sm font-semibold",children:e.jsx(t,{...a.customInstructionsTitle})}),e.jsx(ye,{label:e.jsx(t,{...a.customInstructionsTooltip,values:{article:o=>e.jsx("a",{href:We,target:"_blank",className:"underline",rel:"noreferrer",children:o})}})})]}),e.jsx("p",{className:"text-muted pb-3 pt-2 text-sm text-token-text-primary",children:e.jsx(t,{...a.aboutYouHelpText})}),e.jsx(z,{className:"mb-3",onSubmit:w,disabled:!x,tip:e.jsx(Me,{children:e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:e.jsx(t,{...a.aboutUserTip1})}),e.jsx("li",{children:e.jsx(t,{...a.aboutUserTip2})}),e.jsx("li",{children:e.jsx(t,{...a.aboutUserTip3})}),e.jsx("li",{children:e.jsx(t,{...a.aboutUserTip4})}),e.jsx("li",{children:e.jsx(t,{...a.aboutUserTip5})})]})}),hasModError:O==="about_user_message",value:j??f,onChange:o=>p(s=>({aboutModelMessage:s.aboutModelMessage??m,aboutUserMessage:o.target.value,nameUserMessage:"",roleUserMessage:"",traitsModelMessage:"",otherUserMessage:"",enabled:s.enabled??x,disabledTools:s.disabledTools??T}))}),e.jsx("p",{className:"text-muted py-3 text-sm text-token-text-primary",children:e.jsx(t,{...a.modelHelpText})}),e.jsx(z,{onSubmit:w,disabled:!x,tip:e.jsx(Me,{children:e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:e.jsx(t,{...a.modelTip1})}),e.jsx("li",{children:e.jsx(t,{...a.modelTip2})}),e.jsx("li",{children:e.jsx(t,{...a.modelTip3})}),e.jsx("li",{children:e.jsx(t,{...a.modelTip4})})]})}),hasModError:O==="about_model_message",value:U??m,onChange:o=>p(s=>({aboutUserMessage:s.aboutUserMessage??f,aboutModelMessage:o.target.value,nameUserMessage:"",roleUserMessage:"",traitsModelMessage:"",otherUserMessage:"",enabled:s.enabled??x,disabledTools:s.disabledTools??T}))}),e.jsx("div",{className:"my-6 h-px bg-token-border-light"}),e.jsx(fe,{disabledTools:A.disabledTools??T??[],onDisabledToolsChanged:o=>p(s=>({aboutUserMessage:s.aboutUserMessage??f,aboutModelMessage:s.aboutModelMessage??m,nameUserMessage:"",roleUserMessage:"",traitsModelMessage:"",otherUserMessage:"",enabled:s.enabled??x,disabledTools:o}))})]}),e.jsx("div",{className:"mt-4 md:mt-5",children:e.jsxs("div",{className:"flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3",children:[e.jsxs("label",{className:"mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",children:[e.jsx("div",{className:"self-center text-sm text-token-text-primary",children:e.jsx(t,{...a.chatPreferencesEnable})}),e.jsx(ge,{enabled:x,onChange:o=>{p(s=>({aboutUserMessage:s.aboutUserMessage??f,aboutModelMessage:s.aboutModelMessage??m,nameUserMessage:"",roleUserMessage:"",traitsModelMessage:"",otherUserMessage:"",enabled:o,disabledTools:s.disabledTools??T}))},label:x?r.formatMessage(a.disableToggleLabel):r.formatMessage(a.enableToggleLabel)})]}),e.jsx(L.Actions,{secondaryButton:e.jsx(L.Button,{onClick:Z,children:e.jsx(t,{...a.cancel})}),primaryButton:e.jsx(L.Button,{loading:q,onClick:w,color:"primary",visuallyDisabled:K,disabled:!Y,children:e.jsx(t,{...a.save})})})]})})]},"user-context")}const os=({onSelect:l,selectedTraits:r,setSelectedTraits:n})=>{const[d,C]=h.useState(!0),c=J(),u=d?ls:rs,S=m=>{r.includes(m)||(n(i=>[...i,m]),l(c.formatMessage(ns[m])))},f=()=>{n([]),C(m=>!m)};return e.jsx("div",{children:e.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-1 gap-y-2",children:[u.map(m=>{const i=m;return!r.includes(i)&&e.jsxs(ce,{size:"small",color:"secondary",className:"py-2 pl-2 pr-3 text-xs font-normal text-token-text-secondary",onClick:()=>S(i),children:[e.jsx(qe,{className:"mr-[1px] h-4 w-4"}),c.formatMessage(is[i])]},i)}),e.jsx(ce,{size:"small",color:"secondary",className:"text-token-text-secondary",onClick:f,children:e.jsx(Ke,{className:"-mx-1 h-4 w-4"})})]})})},Me=({children:l})=>e.jsx("div",{className:"whitespace-pre-line",children:l}),B=1500,$=l=>l.length>B,z=({disabled:l,onChange:r,onSubmit:n,placeholder:d,value:C,tip:c,hasModError:u,className:S,size:f="md",showCharacterCount:m=!0,isNewCustomInstructionsUIEnabled:i=!1})=>{const M=J(),y=h.useRef(null),b=Pe(),T=Be(),I=!b,[A,p]=h.useState(!1),[j,U]=h.useState(I),_=!I&&A&&!j,N=I&&!j,k=$(C),E=g=>{!l&&g.key==="Enter"&&g.metaKey&&!g.shiftKey&&!g.nativeEvent.isComposing&&(g.preventDefault(),n())},P=h.useRef(null);return e.jsxs(e.Fragment,{children:[c&&e.jsx(X,{isOpen:N,type:"success",size:"custom",className:"max-w-lg",title:M.formatMessage(a.tipsHeader),showCloseButton:!0,onClose:()=>{U(!0)},children:c}),e.jsxs(Ye,{open:_,children:[e.jsxs("div",{className:S,ref:P,children:[e.jsx(Ze,{asChild:!0,children:e.jsx("textarea",{ref:y,className:G("w-full resize-none bg-token-main-surface-primary",{"rounded p-4":f!=="sm"&&!i,"rounded-lg border text-sm":f==="sm"||i,"border-orange-400 focus:border-orange-400":u,"border-red-500 focus:border-red-500":k&&!u,"focus-token-border-heavy border-token-border-light":!k&&!u,"opacity-30":l,"placeholder:text-gray-400":f==="sm"||i,"placeholder:text-gray-300":!i}),disabled:l,placeholder:d,onKeyDown:E,rows:f==="sm"?1:b&&!T?6:5,value:C,onChange:r,onBlur:()=>{p(!1)},onFocus:()=>{p(!0)}})}),e.jsx("div",{className:G("flex items-center justify-between px-1 text-xs tabular-nums",k?"text-red-600":"text-token-text-tertiary"),children:u?e.jsx("div",{className:"visible mt-2 text-left text-xs text-orange-400",children:e.jsx(t,{...a.modApiVoilation,values:{policyLink:g=>e.jsx("a",{href:"https://platform.openai.com/docs/usage-policies/content-policy",className:"underline",target:"_blank",rel:"noreferrer",children:g}),feedbackLink:g=>e.jsx("a",{href:"https://forms.gle/3gyAMj5r5rTEcgbs5",className:"underline",target:"_blank",rel:"noreferrer",children:g})}})}):e.jsxs(e.Fragment,{children:[m&&e.jsx("div",{children:`${C.length}/${B}`}),c&&e.jsx("button",{className:"flex items-center gap-1",onClick:()=>{y.current?.focus(),U(!j)},tabIndex:-1,children:e.jsx(ke,{initial:!1,children:A&&e.jsx(we.div,{className:"flex items-center gap-1",initial:{opacity:0},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:j?e.jsxs(e.Fragment,{children:[e.jsx(t,{...a.showTips}),e.jsx(Qe,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(t,{...a.hideTips}),e.jsx(Ie,{className:"icon-xs"})]})},"show-hide")})})]})})]}),c&&e.jsx(Xe,{container:P.current?.ownerDocument.body,children:e.jsx($e,{side:"right",align:"start",sideOffset:12,className:"popover relative z-50 max-w-[220px] animate-slideLeftAndFade select-none rounded-xl border border-token-border-light bg-token-main-surface-primary p-4 text-sm text-token-text-primary shadow-[0px_4px_14px_rgba(0,0,0,0.06)] xl:max-w-xs",onOpenAutoFocus:g=>{g.preventDefault()},onCloseAutoFocus:g=>{g.preventDefault()},children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("strong",{children:e.jsx(t,{...a.tipsHeader})}),c]})})})]})]})};function he({primaryLabel:l,secondaryLabel:r,side:n="top"}){return e.jsx(se,{sideOffset:4,interactive:!0,label:e.jsx("div",{children:l}),secondaryLabel:e.jsx("div",{children:r}),side:n,theme:"white",customPrimaryLabelColorStyle:"primary",customPaddingClassName:"p-2",customBorderClassName:"border border-token-border-light",labelTextAlign:"left",children:e.jsx(Ce,{className:"h-4 w-4 text-token-text-tertiary"})})}function ye({label:l,side:r="bottom"}){return e.jsx(se,{sideOffset:4,interactive:!0,label:e.jsx("div",{children:l}),side:r,children:e.jsx(Ce,{className:"h-4 w-4 text-token-text-tertiary"})})}function fe({disabledTools:l,onDisabledToolsChanged:r,isNewCustomInstructionsUIEnabled:n=!1}){h.useEffect(()=>{F.logEvent(R.userContextGpt4CapabilitiesShown)},[]);const C=Ae()?.isEnterprisey()??!1,c=!ue(Q.BrowsingAvailable)&&C,u=M=>{const y=l.includes(M)?l.filter(b=>b!==M):[...l,M];r(y)},S=Oe(),{value:f}=ze("2044826081"),m=!ue(Q.Canvas)&&C;var i;return S?.includes(Q.SearchTool)&&!S?.includes(Q.SearchToolHoldout)?i=e.jsx(H,{title:e.jsx(t,{id:"userContextModal.tools.web",defaultMessage:"Web Search"}),tooltipLabel:c?e.jsx(t,{id:"Osf0vy",defaultMessage:"Web Search is disabled by your organization"}):e.jsx(t,{id:"userContexModal.tools.webSearchTooltip",defaultMessage:"Automatically search the web to get answers"}),tool:v.BROWSER,onClick:u,Icon:xe,checked:!l.includes(v.BROWSER)&&!c,disabled:c,isNewCustomInstructionsUIEnabled:n}):i=e.jsx(H,{title:e.jsx(t,{id:"userContextModal.tools.browse",defaultMessage:"Browsing"}),tooltipLabel:c?e.jsx(t,{id:"5SuA2c",defaultMessage:"Browsing is disabled by your organization"}):e.jsx(t,{id:"userContexModal.tools.browserTooltip",defaultMessage:"Browse the internet to find answers"}),tool:v.BROWSER,onClick:u,Icon:xe,checked:!l.includes(v.BROWSER)&&!c,disabled:c,isNewCustomInstructionsUIEnabled:n}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:G("text-sm",{"text-muted font-medium":n,"font-semibold":!n}),children:e.jsx(t,{id:"userContextModal.gpt4CapabilitiesTitle",defaultMessage:"ChatGPT Capabilities"})}),e.jsx(ye,{label:e.jsx(t,{id:"userContextModal.tools.capabilitiesInfo.1",defaultMessage:"Choose which tools can be used with GPT-4"}),side:"top"})]}),e.jsxs("div",{className:"mt-2 flex flex-col flex-wrap gap-3 md:flex-row",children:[i,e.jsx(H,{title:e.jsx(t,{id:"userContextModal.tools.dalle",defaultMessage:"DALL·E"}),tooltipLabel:e.jsx(t,{id:"userContextModal.tools.dalleTooltip",defaultMessage:"Generate images using DALL·E"}),tool:v.DALLE,onClick:u,Icon:Je,checked:!l.includes(v.DALLE),isNewCustomInstructionsUIEnabled:n}),e.jsx(H,{title:e.jsx(t,{id:"userContextModal.tools.codeInterpreter.1",defaultMessage:"Code"}),tooltipLabel:e.jsx(t,{id:"userContextModal.tools.codeInterpreterTooltip",defaultMessage:"Execute code using Code Interpreter"}),tool:v.PYTHON,onClick:u,Icon:Ve,checked:!l.includes(v.PYTHON),isNewCustomInstructionsUIEnabled:n}),f&&!m&&e.jsx(H,{title:e.jsx(t,{id:"FW2C7Y",defaultMessage:"Canvas"}),tooltipLabel:e.jsx(t,{id:"dP6U4B",defaultMessage:"Collaborate with ChatGPT on text and code"}),tool:v.CANMORE,onClick:u,Icon:es,checked:!l.includes(v.CANMORE),isNewCustomInstructionsUIEnabled:n})]})]})}function H({tool:l,title:r,tooltipLabel:n,Icon:d,onClick:C,checked:c,disabled:u,isNewCustomInstructionsUIEnabled:S=!1}){return e.jsx(se,{className:"block",label:n,side:"top",sideOffset:4,children:e.jsxs("button",{className:G("flex w-full items-center justify-between gap-2 whitespace-nowrap rounded border border-token-border-medium p-2",{"cursor-not-allowed text-token-text-quaternary":u}),onClick:()=>C(l),disabled:u,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{className:"h-4 w-4 text-token-text-tertiary"}),e.jsx("div",{className:G("text-sm",S?"text-muted font-medium":"font-semibold"),children:r})]}),e.jsx(ss,{id:l,checked:c&&!u,disabled:u})]})})}const a=te({tipsHeader:{id:"userContextModal.tipsHeader",defaultMessage:"Thought starters"},aboutUserTip1:{id:"userContextModal.aboutUserTip1",defaultMessage:"Where are you based?"},aboutUserTip2:{id:"userContextModal.aboutUserTip2",defaultMessage:"What do you do for work?"},aboutUserTip3:{id:"userContextModal.aboutUserTip3",defaultMessage:"What are your hobbies and interests?"},aboutUserTip4:{id:"userContextModal.aboutUserTip4",defaultMessage:"What subjects can you talk about for hours?"},aboutUserTip5:{id:"userContextModal.aboutUserTip5",defaultMessage:"What are some goals you have?"},modelTip1:{id:"userContextModal.modelTip1",defaultMessage:"How formal or casual should ChatGPT be?"},modelTip2:{id:"userContextModal.modelTip2",defaultMessage:"How long or short should responses generally be?"},modelTip3:{id:"userContextModal.modelTip3",defaultMessage:"How do you want to be addressed?"},modelTip4:{id:"userContextModal.modelTip4",defaultMessage:"Should ChatGPT have opinions on topics or remain neutral?"},save:{id:"userContextModal.save",defaultMessage:"Save"},chatPreferencesEnable:{id:"userContextModal.chatPreferencesEnable",defaultMessage:"Enable for new chats"},enableToggleLabel:{id:"userContextModal.enableToggleLabel",defaultMessage:"Enable chat preferences"},disableToggleLabel:{id:"userContextModal.disableToggleLabel",defaultMessage:"Disable chat preferences"},cancel:{id:"userContextModal.cancel",defaultMessage:"Cancel"},aboutYouHelpText:{id:"userContextModal.aboutYouHelpText",defaultMessage:"What would you like ChatGPT to know about you to provide better responses?"},modelHelpText:{id:"userContextModal.modelHelpText",defaultMessage:"How would you like ChatGPT to respond?"},profileTitle:{id:"userContextModal.title.1",defaultMessage:"Customize ChatGPT"},profileSubtitle:{id:"userContextModal.profileSubtitle",defaultMessage:"Introduce yourself to get better, more personalized responses"},customizeName:{id:"userContextModal.customizeName",defaultMessage:"What should ChatGPT call you?"},customizeRole:{id:"userContextModal.customizeRole",defaultMessage:"What do you do?"},customizeRolePlaceholder:{id:"userContextModal.customizeRolePlaceholder",defaultMessage:"Engineer, student, etc."},customizeTraits:{id:"userContextModal.customizeTraits",defaultMessage:"What traits should ChatGPT have?"},customizeTraitsPlaceholder:{id:"userContextModal.customizeTraitsPlaceholder",defaultMessage:"Describe or select traits"},customizeOther:{id:"userContextModal.customizeOther",defaultMessage:"Anything else ChatGPT should know about you?"},customizeOtherPlaceholder:{id:"userContextModal.customizeOtherPlaceholder",defaultMessage:"Interests, values, or preferences to keep in mind"},customInstructionsTitle:{id:"userContextModal.customInstructionsTitle",defaultMessage:"Custom Instructions"},customInstructionsTooltip:{id:"userContextModal.customInstructionsTooltip",defaultMessage:"<article>Learn more</article> about Custom Instructions and how they’re used to help ChatGPT provide better responses."},traitsTooltipTitle:{id:"userContextModal.traitsTooltipTitle",defaultMessage:"You can tell ChatGPT to do things like..."},traitsTooltipBodyItem1:{id:"userContextModal.traitsTooltipBodyItem1",defaultMessage:"Use a formal, professional tone."},traitsTooltipBodyItem2:{id:"userContextModal.traitsTooltipBodyItem2",defaultMessage:"Be casual and chatty."},traitsTooltipBodyItem3:{id:"userContextModal.traitsTooltipBodyItem3",defaultMessage:"Be opinionated. If a question could have multiple answers, try to give only the best one."},otherTooltipTitle:{id:"userContextModal.otherTooltipTitle",defaultMessage:"You can share things like..."},otherTooltipBodyItem1:{id:"userContextModal.otherTooltipBodyItem1",defaultMessage:"I love hiking and jazz"},otherTooltipBodyItem2:{id:"userContextModal.otherTooltipBodyItem2",defaultMessage:"I'm vegetarian"},otherTooltipBodyItem3:{id:"userContextModal.otherTooltipBodyItem3",defaultMessage:"I'm trying to learn French"},messageLimitError:{id:"userContextModal.messageLimitError",defaultMessage:"Please limit your responses to {limit} characters or less."},showTips:{id:"userContextModal.showTips",defaultMessage:"Show tips"},hideTips:{id:"userContextModal.hideTips",defaultMessage:"Hide tips"},confirmCloseTitle:{id:"userContextModal.confirmCloseTitle",defaultMessage:"You have unsaved changes."},confirmCloseBody:{id:"userContextModal.confirmCloseBody",defaultMessage:"Are you sure you want to exit? Any changes you made will be permanently lost."},confirmCloseCancel:{id:"userContextModal.confirmCloseCancel",defaultMessage:"Back"},confirmCloseOk:{id:"userContextModal.confirmCloseOk",defaultMessage:"Exit"},modApiVoilation:{id:"userContextModal.modApiVoilation",defaultMessage:"This content may violate our <policyLink>content policy</policyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area."},browser:{id:"userContexModal.tools.browserTooltip",defaultMessage:"Browse the internet to find answers"},dalle:{id:"userContexModal.tools.dalleTooltip",defaultMessage:"Generate images using DALL·E"},python:{id:"userContexModal.tools.codeInterpreterTooltip",defaultMessage:"Execute code using Code Interpreter"},advanced:{id:"userContextModal.advanced",defaultMessage:"Advanced"}}),ls=["Chatty","Witty","Opinionated","StraightShooting","GenZ","Encouraging","Skeptical","Traditional","ForwardThinking"],rs=["Poetic","Respectful","Humble","Professional","Corporate","Direct","Silly","Pragmatic","Chill","OutsideTheBox"],is=te({Chatty:{id:"userContextModal.chattyLabel",defaultMessage:"Chatty"},Witty:{id:"userContextModal.wittyLabel",defaultMessage:"Witty"},StraightShooting:{id:"userContextModal.straightShootingLabel",defaultMessage:"Straight shooting"},Encouraging:{id:"userContextModal.encouragingLabel",defaultMessage:"Encouraging"},GenZ:{id:"userContextModal.genZLabel",defaultMessage:"Gen Z"},Skeptical:{id:"userContextModal.skepticalLabel",defaultMessage:"Skeptical"},Traditional:{id:"userContextModal.traditionalLabel",defaultMessage:"Traditional"},ForwardThinking:{id:"userContextModal.forwardThinkingLabel",defaultMessage:"Forward thinking"},Poetic:{id:"userContextModal.poeticLabel",defaultMessage:"Poetic"},Opinionated:{id:"userContextModal.opinionatedLabel",defaultMessage:"Opinionated"},Respectful:{id:"userContextModal.respectfulLabel",defaultMessage:"Respectful"},Humble:{id:"userContextModal.humbleLabel",defaultMessage:"Humble"},Professional:{id:"userContextModal.professionalLabel",defaultMessage:"Professional"},Silly:{id:"userContextModal.sillyLabel",defaultMessage:"Silly"},Direct:{id:"userContextModal.directLabel",defaultMessage:"Direct"},Pragmatic:{id:"userContextModal.pragmaticLabel",defaultMessage:"Pragmatic"},Corporate:{id:"userContextModal.corporateLabel",defaultMessage:"Corporate"},Chill:{id:"userContextModal.chillLabel",defaultMessage:"Chill"},OutsideTheBox:{id:"userContextModal.outsideTheBoxLabel",defaultMessage:"Outside the box"}}),ns=te({Chatty:{id:"userContextModal.chattySentence",defaultMessage:"Be talkative and conversational."},Witty:{id:"userContextModal.wittySentence",defaultMessage:"Use quick and clever humor when appropriate."},StraightShooting:{id:"userContextModal.straightShootingSentence",defaultMessage:"Tell it like it is; don't sugar-coat responses."},Encouraging:{id:"userContextModal.encouragingSentence",defaultMessage:"Use an encouraging tone."},GenZ:{id:"userContextModal.genZSentence",defaultMessage:"Talk like a member of Gen Z."},Skeptical:{id:"userContextModal.skepticalSentence",defaultMessage:"Adopt a skeptical, questioning approach."},Traditional:{id:"userContextModal.traditionalSentence",defaultMessage:"Have a traditional outlook, valuing the past and how things have always been done."},ForwardThinking:{id:"userContextModal.forwardThinkingSentence",defaultMessage:"Take a forward-thinking view."},Poetic:{id:"userContextModal.poeticSentence",defaultMessage:"Use a poetic, lyrical tone."},Opinionated:{id:"userContextModal.opinionatedSentence",defaultMessage:"Readily share strong opinions."},Respectful:{id:"userContextModal.respectfulSentence",defaultMessage:"Always be respectful."},Humble:{id:"userContextModal.humbleSentence",defaultMessage:"Be humble when appropriate."},Professional:{id:"userContextModal.professionalSentence",defaultMessage:"Use a formal, professional tone."},Silly:{id:"userContextModal.sillySentence",defaultMessage:"Be playful and goofy."},Direct:{id:"userContextModal.directSentence",defaultMessage:"Get right to the point."},Pragmatic:{id:"userContextModal.pragmaticSentence",defaultMessage:"Be practical above all."},Corporate:{id:"userContextModal.corporateSentence",defaultMessage:"Respond with corporate jargon."},Chill:{id:"userContextModal.chillSentence",defaultMessage:"Keep it relaxed and easygoing."},OutsideTheBox:{id:"userContextModal.outsideTheBoxSentence",defaultMessage:"Be innovative and think outside the box."}});export{xs as U,as as a,gs as u};
//# sourceMappingURL=j14akxnqigsmgi7w.js.map