import{r as c,aA as Q,gf as ie,ds as I,L as E,V as b,P as y,d as _,m as e,cI as re,bn as v,gg as le,t as ce,b6 as S,O as de,fv as ue,af as pe,n as ge,ah as me,K as fe,W as z,e7 as he,o as W,ff as xe,s as be}from"./dfm2yceao9m2ilo9.js";import{bp as ye,bq as G,k as Y,aQ as $,br as K,bs as _e,bt as we,bu as Se,bv as Me,bw as V,bx as ve,by as ke,M as je,aR as Ee,bz as Ce,bA as Ne,bB as Te,bC as Pe,bD as Ie,bE as De}from"./o7wih49jz3zkdcav.js";import{a as Ue}from"./oj002yr1cv5905d0.js";import{C as Le}from"./g1a8czag5zgtii4g.js";import{H as Ae}from"./g4tl5lt9yqf20m4s.js";import"./f6hms767mvgd5wdn.js";import{m as j}from"./ccrdffu4uq6bo5k0.js";import"./nvdtwttvqml9sy4p.js";import"./crgpn8kp0lsek69a.js";import"./lmos6opawwvf3yqw.js";import"./odf16s7xmj505mjz.js";function Fe(t,o){const{data:i,isLoading:r,isSuccess:p,isError:g}=ce({queryKey:["onboardingSteps",t,o],queryFn:()=>z.createOnboardingSteps(void 0,t,o)});return{steps:i?.steps??[],isLoading:r,isSuccess:p,isError:g}}function C({children:t,className:o}){return e.jsx(j.div,{className:o,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},exit:{opacity:0,y:-10},children:t})}function qe({isFirstStep:t,userName:o}){return e.jsx(C,{children:e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(S,{...t?a.preparingOnboardingExperience:a.allSetLetMeShowYouAroundWithoutName,values:{name:o,nextLine:i=>e.jsx("span",{className:"block",children:i})}})})})}function Oe({setIsInWelcomePage:t}){const o=G();return c.useEffect(()=>{o&&setTimeout(()=>{t(!1)},2500)},[o,t]),o?e.jsx(C,{children:e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(S,{...a.imChaggptNiceToMeetYou})})}):null}function Re(t){const o=K(),i=E(),r=de(),p=_e(t);let g=we(t);const m=Se(p,g),s=Me(p,g);return c.useCallback(async f=>{const h="text/plain",n=new Blob([f],{type:h}),d=new File([n],"My_File.txt",{type:h});return V.uploadFile(o,ve(d),d,ke.Retrieval,s,i,r,void 0,m?.attachments)},[o,i,r,s,m?.attachments])}function st({clientThreadId:t,setClientThreadId:o}){const[i,r]=c.useState(!0),{isOpen:p,setIsOpen:g,markAsViewed:m}=ye(),[s,f]=c.useState(0),[h,n]=c.useState(new Set(["usage_question"])),[d,k]=c.useState([]),[M,J]=c.useState(),[D,U]=c.useState(!1),{steps:x,isLoading:N,isError:T}=Fe(D?d:[],D?M:void 0),X=G(),L=Qe({clientThreadId:t,setClientThreadId:o}),A=Re(t),{createNewThread:F}=Y({clientThreadId:t,setClientThreadId:o}),Z=Q(t),q=ie(t,Z),{layer:ee}=I("717266490"),te=ee.get("keep_onboarding_after_dismiss",!1),O=E();c.useEffect(()=>{p&&(b.logEvent("chatgpt_onboarding_flow_shown"),y.logEvent(_.onboardingShown))},[p]),c.useEffect(()=>{T&&(m(),b.logEvent("chatgpt_onboarding_flow_error"),y.logEvent(_.onboardingError))},[T,m]),c.useEffect(()=>{if(!(N||!x[s])&&!h.has(x[s].step_type)){n(w=>new Set([...w,x[s].step_type]));const u=x[s].step_prompt;u&&(L({stepPrompt:u}),x[s].step_type==="file_upload"&&x[s].additional_info&&A(x[s].additional_info))}},[s,N,h,L,x,A]);const l=x[s];if(c.useEffect(()=>{const u=l?.step_type;(u==="usage_question"||u==="self_description")&&q&&(F(),n(w=>new Set(Array.from(w).filter(R=>R==="usage_question"||R==="self_description"))))},[l?.step_type,F,q]),c.useEffect(()=>{l?.step_type&&(b.logEvent("chatgpt_onboarding_step_shown",null,{step_type:l?.step_type,step_index:s.toString()}),y.logEvent(_.onboardingStepShown,{step_type:l?.step_type,step_index:s.toString()}))},[s,l?.step_type]),T)return null;const P=u=>{g(!1),s===x.length-1?(b.logEvent("chatgpt_onboarding_flow_finished"),y.logEvent(_.onboardingFinished)):(b.logEvent("chatgpt_onboarding_flow_dismissed",null,{step_type:l?.step_type,step_index:s.toString()}),y.logEvent(_.onboardingDismissed,{step_type:l?.step_type,step_index:s.toString()})),u&&!te&&m()},se=u=>{k(u),x.find(w=>w.step_type==="self_description")||U(!0),f(w=>w+1),b.logEvent("chatgpt_onboarding_usage_question_selected",null,{main_usages:u.join(", ")}),y.logEvent(_.onboardingUsageQuestionSelected,{main_usages:u.join(", ")})},ne=u=>{J(u),U(!0),f(w=>w+1),b.logEvent("chatgpt_onboarding_self_description_entered",null,{main_usages:d.join(", ")}),y.logEvent(_.onboardingSelfDescriptionEntered,{main_usages:d.join(", ")})},oe=()=>{b.logEvent("chatgpt_onboarding_usage_question_skipped",null,{step_type:l?.step_type,step_index:s.toString()}),y.logEvent(_.onboardingUsageQuestionSkipped,{step_type:l?.step_type,step_index:s.toString()}),f(u=>u+1)},ae=()=>{b.logEvent("chatgpt_onboarding_go_back",null,{step_type:l?.step_type,step_index:s.toString()}),y.logEvent(_.onboardingGoBack,{step_type:l?.step_type,step_index:s.toString()}),f(u=>u-1)};return e.jsx(re,{isOpen:p,onClose:()=>P(!1),type:"success",size:"fullscreen",noPadding:!0,className:"w-full",children:e.jsx(Ue,{clientThreadId:t,children:e.jsxs("div",{className:"flex h-full max-h-full flex-col bg-gradient-to-b from-brand-blue-800/15 to-gray-50 dark:from-brand-blue-800/15 dark:to-token-main-surface-primary",children:[e.jsxs("div",{className:"absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-none px-4",style:{minHeight:"var(--screen-thread-header-min-height,60px)"},children:[x&&x.length>0&&e.jsx("div",{className:"absolute left-0 top-0 h-2 w-full",children:e.jsx(j.div,{className:"h-1.5 bg-token-main-surface-primary-inverse",initial:{width:"0%",opacity:0},animate:{width:`${(s+1)/x.length*100}%`,opacity:1},transition:{duration:.3}})}),s>0?e.jsx(v,{onClick:ae,color:"ghost",className:"border-none",icon:le}):e.jsx("div",{}),l?.step_type==="usage_question"||l?.step_type==="self_description"?e.jsx(v,{onClick:oe,color:"ghost",className:"border-none",children:O.formatMessage(a.skip)}):e.jsx(v,{onClick:()=>P(!0),color:"ghost",className:"border-none",children:O.formatMessage(a.close)})]}),e.jsx("div",{className:"flex flex-1 flex-col items-center justify-center overflow-hidden",children:e.jsx($,{mode:"wait",children:i?e.jsx(Oe,{setIsInWelcomePage:r},"welcome"):N?e.jsx(qe,{isFirstStep:s<1,userName:X?.name},"loading"):l?.step_type==="usage_question"?e.jsx(We,{mainUsagesProp:d,onSelectMainUsages:se},"usage-question"):l?.step_type==="self_description"?e.jsx(He,{mainUsages:d,selfDescriptionProp:M,onEnterSelfDescription:ne},"self-description"):["dalle","file_upload","canvas","voice"].includes(l?.step_type)?e.jsx(Be,{step:l,gotoStep:f,stepIndex:s,totalSteps:x.length,endOnboarding:P,clientThreadId:t},"tools-onboarding"):null})})]})})})}function We({mainUsagesProp:t,onSelectMainUsages:o}){const{layer:i}=I("717266490"),[r,p]=c.useState(new Set(t)),[g,m]=c.useState(void 0),s=E(),f=()=>{const n=new Set(r);n.has("other")&&g&&(n.add(g),n.delete("other")),o(Array.from(n))},h=["school","work","personalTasks","funAndEntertainment"];return i.get("onboarding_show_other_option",!1)&&h.push("other"),e.jsxs(C,{children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(S,{...a.tellMeWhyHere})}),e.jsx("p",{className:"mb-6 text-base text-token-text-secondary",children:e.jsx(S,{...a.suggestUsefulIdeas})})]}),e.jsxs("div",{className:"flex flex-col items-start justify-start gap-5",children:[h.map(n=>e.jsx(je,{id:`main-usage-${n}`,checked:r.has(n),onChange:d=>p(k=>{const M=new Set(k);return d.target.checked?M.add(n):M.delete(n),M}),label:e.jsx("span",{className:"cursor-pointer",children:s.formatMessage(a[n])})},n)),r.has("other")&&e.jsx(Ee,{ariaLabel:s.formatMessage(a.tellMeWhyHere),name:"other",placeholder:s.formatMessage(a.tellMeWhyHere),onChange:n=>m(n.target.value),maxLength:100,className:"ml-6 min-w-64 bg-token-main-surface-primary"})]}),e.jsx(v,{size:"medium",color:"primary",onClick:f,className:"mt-10",disabled:r.size===0,children:e.jsx(S,{...a.next})})]})}function He({mainUsages:t,selfDescriptionProp:o,onEnterSelfDescription:i}){const[r,p]=c.useState(o),g=E(),m=c.useMemo(()=>t.includes("school")?a.exampleSchoolSelfDescription:t.includes("work")?a.exampleWorkSelfDescription:t.includes("funAndEntertainment")?a.exampleFunAndEntertainmentSelfDescription:a.examplePersonalTasksSelfDescription,[t]),{layer:s}=I("717266490"),f=s.get("write_custom_instructions_in_onboarding",!1),h=async()=>{i(r),f&&r&&z.createOrUpdateUserSystemMessage({aboutUserMessage:r,aboutModelMessage:"",disabledTools:[],enabled:!0}).catch(()=>{})};return e.jsxs(C,{className:"flex w-[640px] flex-col items-start",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-4 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(S,{...a.anythingElseYouWantMeToKnow})}),e.jsx("p",{className:"text-base text-token-text-secondary",children:e.jsx(S,{...f?a.selfDescriptionReasonSaveToCustomInstructions:a.selfDescriptionReason,values:{customInstructions:n=>e.jsx("a",{href:Ae,className:"underline",target:"_blank",rel:"noreferrer",children:n})}})})]}),e.jsx(Ce,{className:"!dark:bg-white/5 mt-10 rounded border border-token-border-light !bg-black/5 p-5 !text-base placeholder-token-text-tertiary",placeholder:g.formatMessage(m),rows:4,value:r,onChange:n=>p(n.target.value),autoFocus:!0}),e.jsx(v,{size:"medium",color:"primary",onClick:h,className:"mt-10",children:e.jsx(S,{...a.next})})]})}function Be({step:t,gotoStep:o,stepIndex:i,totalSteps:r,endOnboarding:p,clientThreadId:g}){const m=ue({clientThreadId:g}),s=Ne(),f=K(),h=E(),n=i===r-1,d=()=>{i<r-1?(b.logEvent("chatgpt_onboarding_flow_next_clicked",null,{source_step_type:t?.step_type,source_step_index:i.toString()}),y.logEvent(_.onboardingNextClicked,{source_step_type:t?.step_type,source_step_index:i.toString()}),t?.step_type==="file_upload"&&V.reset(f),o(i+1)):(p(!0),s())};return e.jsxs(C,{className:"flex h-full w-full flex-row px-8 md:px-12 lg:px-16 xl:px-24",children:[e.jsx("div",{className:"flex flex-1 flex-col items-center justify-center",children:e.jsxs(j.div,{className:"flex w-[90%] flex-1 flex-col items-start justify-center gap-2 md:w-[85%] lg:w-[80%]",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs($,{mode:"wait",children:[e.jsx(j.h1,{className:"mb-2 text-3xl font-medium text-token-text-primary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},exit:{opacity:0,y:-10},children:t.title?t.title:H[t.step_type]?h.formatMessage(H[t.step_type]):null},`title-${i}`),e.jsx(j.p,{className:"mb-6 text-base text-token-text-secondary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},exit:{opacity:0,y:-10},children:t.subtitle?t.subtitle:B[t.step_type]?h.formatMessage(B[t.step_type]):null},`subtitle-${i}`)]}),e.jsx(v,{size:"large",color:"primary",onClick:d,disabled:m&&!n,children:e.jsx(S,{...n?a.tryChatGPT:a.next})})]})}),e.jsx("div",{className:"relative flex h-full min-w-[360px] flex-1 flex-col pb-16 pt-16",children:e.jsx("div",{className:"h-full w-full overflow-auto rounded-[30px] bg-token-main-surface-primary shadow-2xl shadow-token-border-xlight",children:e.jsx(Le,{hideHeader:!0,hideTools:!0,embedded:!0})})})]})}const Qe=({clientThreadId:t,setClientThreadId:o})=>{const i=Te(t),r=Pe(),{onThreadCreated:p}=Y({clientThreadId:t,setClientThreadId:o}),{onRequestCompletion:g}=Ie({clientThreadId:t,currentModelId:i,defaultModelId:r.id,onThreadCreated:p}),m=Q(t);return c.useCallback(({stepPrompt:s})=>{const f=new De,h=`${m}-nextPrompt`,n=()=>{const d=he.getTextAsMessage(s,W.User);d.author.metadata=d.author.metadata||{},d.author.metadata.real_author=xe.Onboarding,be.updateTree(t,k=>{k.addNode(h,d,m,W.User,void 0,void 0)})};g({type:pe.Next,promptId:h,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:ge(me.getConversationMode(t)),isOnboardingConversation:!0},updateTree:n,turnTracker:f})},[t,g,m])},a=fe({skip:{defaultMessage:"Skip",id:"chatgpt.new-onboarding.skip"},close:{defaultMessage:"Close",id:"chatgpt.new-onboarding.close"},submit:{defaultMessage:"Submit",id:"chatgpt.new-onboarding.submit"},next:{defaultMessage:"Next",id:"chatgpt.new-onboarding.next"},finish:{defaultMessage:"Finish",id:"chatgpt.new-onboarding.finish"},tellMeWhyHere:{defaultMessage:"Tell me about why you’re here.",id:"chatgpt.new-onboarding.tell-me-why-here"},suggestUsefulIdeas:{defaultMessage:"I’ll use this information to suggest ideas you might find useful.",id:"chatgpt.new-onboarding.suggest-useful-ideas"},school:{defaultMessage:"School",id:"chatgpt.new-onboarding.school"},work:{defaultMessage:"Work",id:"chatgpt.new-onboarding.work"},personalTasks:{defaultMessage:"Personal tasks",id:"chatgpt.new-onboarding.personal-tasks"},funAndEntertainment:{defaultMessage:"Fun and entertainment",id:"chatgpt.new-onboarding.fun-and-entertainment"},other:{defaultMessage:"Other",id:"chatgpt.new-onboarding.other"},imChaggptNiceToMeetYou:{defaultMessage:"Hi, I’m ChatGPT. It’s nice to meet you!",id:"chatgpt.new-onboarding.im-chatgpt-nice-to-meet-you"},preparingOnboardingExperience:{defaultMessage:"Preparing your onboarding experience...",id:"chatgpt.new-onboarding.preparing-onboarding-experience"},oneLastQuestion:{defaultMessage:"One last question:",id:"chatgpt.new-onboarding.one-last-question-2"},anythingElseYouWantMeToKnow:{defaultMessage:"Is there anything else you’d like me to know?",id:"chatgpt.new-onboarding.anything-else-you-want-me-to-know-2"},oneQuestionAnythingElse:{defaultMessage:"One last question: Is there anything else you’d like me to know?",id:"chatgpt.new-onboarding.one-more-question"},selfDescriptionReason:{defaultMessage:"Details like your job, hobbies, or interests make my responses more relevant.",id:"chatgpt.new-onboarding.self-description-reason"},allSetLetMeShowYouAroundWithoutName:{defaultMessage:"All set!<nextLine></nextLine>Now, let me show you around...",id:"chatgpt.new-onboarding.all-set-let-me-show-you-around-without-name"},selfDescriptionReasonSaveToCustomInstructions:{defaultMessage:"Details like your job, hobbies, or interests make my responses more relevant. I’ll save this information as <customInstructions>Custom Instructions</customInstructions>, which you can update any time.",id:"chatgpt.new-onboarding.self-description-reason-save-to-custom-instructions"},exampleSchoolSelfDescription:{defaultMessage:"I'm a college student studying computer science, and I love to play the guitar.",id:"chatgpt.new-onboarding.example-school-self-description"},exampleWorkSelfDescription:{defaultMessage:"I'm a graphic designer based in Berlin, and I enjoy painting and attending art exhibitions.",id:"chatgpt.new-onboarding.example-work-self-description"},examplePersonalTasksSelfDescription:{defaultMessage:"I live in Sydney and love cooking new recipes and planning travel itineraries.",id:"chatgpt.new-onboarding.example-personal-tasks-self-description"},exampleFunAndEntertainmentSelfDescription:{defaultMessage:"I'm a music enthusiast based in Nashville, and I can talk for hours about guitar techniques and songwriting.",id:"chatgpt.new-onboarding.example-fun-and-entertainment-self-description"},tryChatGPT:{defaultMessage:"Try ChatGPT",id:"chatgpt.new-onboarding.try-chatgpt"}}),H={usage_question:a.tellMeWhyHere},B={usage_question:a.suggestUsefulIdeas};export{qe as LoadingState,st as default};
//# sourceMappingURL=j3ql1et1mnjvhouk.js.map
