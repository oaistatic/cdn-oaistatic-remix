import{X as b,aN as C,l as e,$ as j,r as g,bg as P,P as w,d as A,a$ as _,cN as T,bm as V}from"./j51q469vqqyswwq0.js";import{N as F,ag as E,aW as L,aX as B,S as O,aY as I}from"./nakmlpxnz8km92cm.js";import{cL as S,a8 as M,c as q,du as z}from"./obfv3y06hphbdxag.js";import{A as D}from"./eq1a948h5ja80igb.js";import{V as Q,u as U,a as W,b as X,c as Y}from"./b5mw61jyhnuj47ko.js";import{d as G}from"./bhohgwthir2krdjp.js";import"./cgd14f0ekgctjpp5.js";import"./j3spc189b36cp0w7.js";import"./lekbmt0int1ydbph.js";import"./cvissq6nouyk550c.js";import"./1sbljp6832i8csyf.js";import"./ckxksx1fpuuymnl0.js";import"./d8jxcgzgxqig2mkw.js";import"./duhba84pe3ongyzk.js";function H({conversationId:t}){const s=b(),o=S(M.hasSeenAdvancedVoiceNuxFullPage),n=C(),l=n?.isPlus()??!1,c=n?.isEnterprisey()??!1,r=!l&&!c,u="https://help.openai.com/en/articles/8400625-voice-mode-faq#h_c5d6fe534b",x=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(F,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"TFfx7w",defaultMessage:"Natural conversations"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"qR+v5Q",defaultMessage:"Senses and responds to interruptions, humor, and more."})})]})]}),f=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(E,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"br49Gd",defaultMessage:"Free monthly preview"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"LhOfga",defaultMessage:"Use advanced voice for a short period each month."})})]})]}),d=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(L,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"84QiAT",defaultMessage:"Multiple voices"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"yYgwEW",defaultMessage:"Offers an expanded set of voices to choose from."})})]})]}),i=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(B,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"M/x7uJ",defaultMessage:"Personalized to you"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"QZXq7u",defaultMessage:"Can use memory and custom instructions to shape responses."})})]})]}),m=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(O,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"e6n5kr",defaultMessage:"You’re in control"})}),e.jsx("p",{className:"text-token-text-secondary",children:c?e.jsx(j,{id:"4szv66",defaultMessage:"Your audio recordings are saved but not used for training. Learn how to <link>manage recordings</link>.",values:{link:a=>e.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"underline",children:a})}}):e.jsx(j,{id:"M/k4S5",defaultMessage:"Audio recordings are saved, and you can delete them at any time. Learn how to <link>manage recordings</link>.",values:{link:a=>e.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"underline",children:a})}})})]})]}),h=r?[f,x,i,m]:[x,d,i,m],[v,p]=g.useState(!1),N=()=>{o.markAsViewed(),p(!0)};return v?e.jsx(Q,{conversationId:t,onClose:()=>p(!1),cameFromNux:!0}):e.jsx("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",children:e.jsxs("div",{className:"mx-auto w-full max-w-lg px-4 text-center",children:[e.jsx("h1",{className:"mb-9 text-2xl font-semibold text-token-text-primary",children:r?s.formatMessage({id:"XV3+9K",defaultMessage:"Sneak a peek at advanced voice mode"}):s.formatMessage({id:"9YnxDX",defaultMessage:"Say hello to advanced voice mode"})}),e.jsx("div",{className:"mb-9 space-y-5",children:h.map((a,k)=>e.jsx("div",{children:a},k))}),e.jsxs("p",{className:"mb-9 text-sm text-token-text-primary",children:[s.formatMessage({id:"vtcf3s",defaultMessage:"Voice mode can make mistakes — check important info."}),e.jsx("br",{}),s.formatMessage({id:"4nw2S2",defaultMessage:"Usage limits may change."})]}),e.jsx(P,{className:"rounded-full bg-token-text-primary px-20 py-3 font-semibold",onClick:N,children:e.jsx(j,{id:"ppi93b",defaultMessage:"Continue"})})]})})}const K={default_voice_mode:"advanced",modes:[{mode:"advanced",default_model_slug:D,disabled_mode_metadata:null,description:"Advanced Voice Mode",display_name:"Advanced Voice",info_message:{actions:[],buttons:[],hint:"Advanced Voice",message_markdown:"Advanced Voice",message:"Advanced Voice",title:"Advanced Voice",display_at_launch:!1},disclosure_message:null,resets_after:"None"}]};function R(){const t=V("2775516364").value,s=S(M.hasSeenAdvancedVoiceNuxFullPage);return!s.isLoading&&s.eligible&&t}function $(){const t=V("562926978").value,s=S(M.hasSeenAdvancedVoiceWebNuxTooltip);return{shouldShowTooltipNux:!s.isLoading&&s.eligible&&t,tooltipAnnouncement:s}}function xe({clientThreadId:t,gizmoId:s}){const o=G(t),l=b().formatMessage({id:"HDu59A",defaultMessage:"Start voice mode"}),[c,r]=g.useState(!1),[u,x]=g.useState(!1),f=R(),{shouldShowTooltipNux:d,tooltipAnnouncement:i}=$(),{refetch:m}=U({conversationId:o??null,requestedVoiceMode:"advanced",gizmoId:s,eventSource:"composer_speech_button",fetchImmediately:!1}),h=W(),v=o??t,p=X(a=>a.isVoiceModeActive),N=g.useCallback(async()=>{if(w.logEvent(A.composerSpeechButtonClicked),d&&i.markAsViewed(),f){x(!0);return}let a;r(!0);try{a=await m()}finally{r(!1)}const k=a.data??h??K;Y.setState(y=>{y.voiceStatus=k,y.isVoiceModeActive=!0})},[h,m,f,d,i]);return e.jsxs(e.Fragment,{children:[u&&e.jsx(H,{conversationId:v}),e.jsx(J,{showNuxTooltip:d,tooltipAnnouncement:i,children:e.jsx("button",{"data-testid":"composer-speech-button",onClick:N,"aria-label":l,disabled:p||c,className:"mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary",children:c?e.jsx(_,{}):e.jsx(I,{})})})]})}function J({children:t,showNuxTooltip:s,tooltipAnnouncement:o}){const n=b();return s?e.jsx(z,{side:"top",show:!0,badge:"new",dismissOnOutsideClick:!0,title:n.formatMessage({id:"DQ6CAP",defaultMessage:"Try advanced voice mode"}),contentAlign:"center",onDismiss:o.markAsViewed,sideOffset:2,children:e.jsx("div",{children:t})}):e.jsx(q,{sideOffset:14,label:n.formatMessage({id:"i4P/ix",defaultMessage:"Use voice mode"}),side:"top",onOpenChange:l=>{l&&(w.logEvent(A.composerSpeechButtonHovered),T.composerSpeechButton.hover())},children:t})}export{xe as ComposerSpeechButton};
//# sourceMappingURL=hpy03srxt2fcoqws.js.map
