import{aw as I,aO as A,cg as C,ch as p,ci as j,Z as w,j as t,bL as _,aK as O,ar as N,o as T,a9 as L,fb as u}from"./lyvmbpf7ocwbhkqv.js";import{i as f,bi as E}from"./g6lhcxpyem234o4q.js";import{S as r}from"./gcvp947cimzkwurk.js";import{B as o,d as k}from"./m196oa93c25o2qds.js";import{$ as c}from"./lmpt2itob1p4b3uv.js";import{u as Q}from"./g9492y7jukk97hjl.js";import{b as U}from"./nbp15q696vhlgiw7.js";const y={debug_mode:!1,base_config:o.SCALLION,completion_model:"production",eval_preset:"production",use_labrador:!0,show_image_to_model:!0,emulated_location:void 0,emulated_date:void 0};function D({children:s,...e}){return t.jsx(r.Content,{...e,className:N("z-50",e.className),children:s})}function F(s){return T({mutationFn:k,onSuccess:s})}function J({onClose:s}){const{theme:e,setTheme:i}=A(),{data:l}=C(p.TrainingAllowed),a=j(),v=w(),m=F(()=>v.success("All search logs have been deleted",{duration:3})),[g,b]=U(),S=Q();return t.jsx(_,{isOpen:!0,onClose:s,type:"success",size:"custom",className:"max-w-2xl",title:"SearchGPT Settings",showCloseButton:!0,children:t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsxs(d,{children:[t.jsx(c,{htmlFor:"theme",className:"text-sm",children:"Theme"}),t.jsxs(r.Root,{value:e,onValueChange:n=>{n!==e&&i(n)},children:[t.jsxs(r.Trigger,{id:"theme",children:[t.jsx(r.Value,{}),t.jsx(r.Icon,{})]}),t.jsx(r.Portal,{children:t.jsxs(D,{children:[t.jsx(r.Item,{value:"light",children:"Light"}),t.jsx(r.Item,{value:"dark",children:"Dark"}),t.jsx(r.Item,{value:"system",children:"System"})]})})]})]}),t.jsxs("div",{className:"flex flex-col border-t border-token-border-medium pt-1",children:[t.jsxs(d,{children:[t.jsx(c,{htmlFor:"location",className:"text-sm",children:"Share precise location"}),t.jsx(f,{onChange:n=>{b({...g,useLocation:n})},enabled:g.useLocation,disabled:!S||S==="denied",label:"Use location from browser"})]}),t.jsx("div",{className:"text-xs text-token-text-secondary",children:"Improve searches using precise location data from your device e.g. “restaurants near me” will try to show you restaurants near your current location. (When precise location is off, we’ll still use general location info based on your IP address so we can help you search local weather, etc.)"})]}),t.jsxs("div",{className:"flex flex-col border-t border-token-border-medium pt-1",children:[t.jsxs(d,{children:[t.jsx(c,{htmlFor:"trainingAllowed",className:"text-sm",children:"Improve search for everyone"}),t.jsx(f,{onChange:n=>{a.mutate({setting:p.TrainingAllowed,value:n})},enabled:l??!0,label:"Use location from browser"})]}),t.jsxs("div",{className:"text-xs text-token-text-secondary",children:["Allow your conversations to be used to improve our search functionality, which makes our services better for you and everyone who uses them. We take steps to protect your privacy."," ",t.jsx("a",{className:"underline",href:"https://openai.com/policies/privacy-policy/",target:"_blank",rel:"noreferrer",children:"Learn more"})]})]}),t.jsx("div",{className:"flex flex-col border-t border-token-border-medium pt-2",children:t.jsxs(d,{children:[t.jsx(c,{htmlFor:"deleteLogs",className:"text-sm",children:"Delete search logs"}),t.jsx(O,{color:"danger",loading:m.isPending,onClick:()=>m.mutate(),children:"Delete All"})]})})]})})}const d=I.div`flex justify-between items-center gap-2 min-h-[36px]`;var P=(s=>(s[s.InitialPending=0]="InitialPending",s[s.Active=1]="Active",s))(P||{});class x extends L()(e=>({queryInput:e?.initialQuery??"",followupQueryInput:"",initialQuery:e?.initialQuery??void 0,shouldShowComposer:!1,agentSettingsOverrides:e?.initialAgentSettingsOverrides??H(e?.isUserAdmin??!1),currentSearch:e?.initialQuery?{config:{threadId:e.initialThreadId??null,query:e.initialQuery,isFollowup:!1,querySource:"url_query"},state:0}:void 0,lastPrefetchedQuery:void 0,shouldShowAddToHomePopover:!1,hasSearched:localStorage.getItem("oai/apps/hasSearched")==="1",hasDismissedExtensionUpsell:localStorage.getItem("oai/apps/dismissExtensionUpsell")==="1",hasDismissedAddToHome:localStorage.getItem("oai/apps/dismissAddToHome")==="1"})){static selectQueryInput=e=>e.queryInput;static selectFollowupQueryInput=e=>e.followupQueryInput;static selectAgentSettingsOverrides=e=>e.agentSettingsOverrides;static selectLastSubmittedQuery=e=>e.currentSearch?.config.query;static selectWasCurrentSearchPrefetched=e=>e.currentSearch?.config.query===e.lastPrefetchedQuery;setQueryInput(e){this.setState({queryInput:e})}setFollowupQueryInput(e){this.setState({followupQueryInput:e})}setCurrentSearch(e){this.setState({currentSearch:e})}setLastPrefetchedQuery(e){this.setState({lastPrefetchedQuery:e})}handlePendingInitialSearch(){const e=this.getState();if(e.currentSearch?.state===0){const i={...e.currentSearch,state:1};return this.setState({currentSearch:i}),i}}updateAgentSettingsOverrides(e){const i={...this.getState().agentSettingsOverrides,...e};this.setState({agentSettingsOverrides:i}),B(i)}markHasSearched(){this.getState().hasSearched||(this.setState({hasSearched:!0}),localStorage.setItem("oai/apps/hasSearched","1"))}dismissExtensionUpsell(){this.getState().hasDismissedExtensionUpsell||(this.setState({hasDismissedExtensionUpsell:!0}),localStorage.setItem("oai/apps/dismissExtensionUpsell","1"))}dismissAddToHomePrompt(){this.getState().hasDismissedAddToHome||(this.setState({hasDismissedAddToHome:!0}),localStorage.setItem("oai/apps/dismissAddToHome","1"))}}function Z({children:s,serverProps:e}){return t.jsx(x.Provider,{store:()=>new x(e),children:s})}const h="agent_overrides";function R(s,e){switch(s){case"scallion-prod":return o.SCALLION;case"scallion-rc":return o.SCALLION_RC;case"scallion":return e?o.SCALLION_RC:o.SCALLION}}function q(s){switch(s){case o.SCALLION:return"scallion-prod";case o.SCALLION_RC:return"scallion-rc"}}function H(s,e){let i={};try{const l=u.getCookie(h,e);let a={};typeof l=="string"&&(a=JSON.parse(l)),i={...a,base_config:a.base_config?R(a.base_config,s):a.base_config}}catch{}return{...y,...i}}function B(s){if(s===y)u.deleteCookie(h);else{const e={...s,base_config:q(s.base_config)};u.setCookie(h,JSON.stringify(e),{maxAge:E})}}export{y as D,J as E,Z as S,x as a,P as b};
//# sourceMappingURL=lavn4j5wlte1rb9n.js.map
