import{y as s,a4 as m,r as M,bA as _,ah as E,$ as A,u as P,N as U,ak as D,f0 as q,aZ as H,aF as z,ae as R}from"./cenhwbprxai3toix.js";import{G as $}from"./lwsvc0prcm5qybau.js";import{aB as k,b$ as B,fr as W,dp as K,cG as O,fs as j,ft as T,fu as Q,fv as V,fw as Z,dF as F,fx as J,bN as X,fy as Y,fz as ee,az as se}from"./bomvf441parvbl6l.js";import{b as te,T as ae,l as re,j as ne,A as oe}from"./h0w2cfyxquh3a88t.js";import{b as G,U as ie}from"./jyh9xl3syf7yrebg.js";import{k as le,t as ce,l as de}from"./hn877s1av7risab0.js";import{D as ue,b as me,E as xe}from"./s26g8cj5crlmzrhm.js";import{u as pe,t as fe}from"./bh0hpeydruybhwyo.js";import{m as w}from"./i2mam4exf28ww00h.js";import{G as N}from"./dmau43v1lisg5o8k.js";function Ee({fullHeight:e,isStaticSharedThread:r,children:a,withVerticalPadding:n,withHorizontalPadding:o}){const t=o&&!r;return s.jsx("div",{className:m("m-auto text-base",n&&"py-[18px]",o&&"px-3 md:px-4",t&&"w-full md:px-5 lg:px-4 xl:px-5",e&&"h-full"),children:a})}function he({children:e}){const r=k(),a=G();return s.jsx("div",{className:m("mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6",a?"md:max-w-3xl":"md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]",r&&"-mx-4"),children:e})}function Ae({children:e}){const r=k(),a=G();return B()?s.jsx("div",{className:"mx-auto mt-[var(--screen-optical-offset-amount)] flex h-full max-w-[var(--screen-content-ideal-size)] flex-col justify-center text-base",children:e}):s.jsx("div",{className:m("mx-auto flex h-full w-full flex-col text-base lg:justify-center",a?"md:max-w-3xl":"md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]",r&&"-mx-4"),children:e})}function I(){const{store:e}=W(),r=e.useSharedProps(),a=ue(),{clearSearchModeTrigger:n,getSearchModeTrigger:o}=pe();return M.useCallback(async(t,i,c)=>{if(!r)return;const{clientThreadId:l,currentLeafId:d,onCreateNewCompletion:p,onResetState:f,conversationMode:h}=r;ie.hideThreadHeader();const x=`${d}-nextPrompt`,v=new K,g=a.has(O.Search),S=g?o():void 0;await p({promptId:x,content:le(t),eventMetadata:{eventSource:"mouse"},completionMetadata:{suggestions:i,suggestion:t,suggestionIndex:c,conversationMode:h??te.getConversationMode(l),systemHints:[...a],searchSource:S},messageMetadata:{is_starter_prompt:!0,suggestion_type:t.type,starter_prompt_id:"id"in t?t.id:null},turnTracker:v});const u=ae.getTree(l).getMessageId(x);f(),ce(t,c,l,u),fe(),S&&g&&n()},[r,a,o,n])}function b(e){return(j(e)?e.promptStarters:e.gizmo.display.prompt_starters)?.map(r=>({type:T.Starter,title:"",body:r,prompt:r}))}function ge(e,r,a,n,o,t){const i=_(),c=re(r),l=me(c?.kind===E.GizmoInteraction?c.gizmo_id:void 0).data,{gizmoEditorData:d,mode:p}=Q(),f=V(c),h=A(),x=e&&!f&&(n||!h?.isEnterprisey()),{data:v,isLoading:g,isSuccess:S,isError:y}=P({queryKey:["promptStarters",r,a,o,t],queryFn:()=>U.getSampledPromptStarter(a,o,t),enabled:x});return i==null?{promptStarters:[],isLoading:!0,isSuccess:!1}:p==="test"&&d?{promptStarters:b(d)??[],isLoading:!1,isSuccess:!0}:l!=null?{promptStarters:b(l),isLoading:!1,isSuccess:!0}:x?{promptStarters:v?.items.map(u=>({type:T.Starter,id:u.id,title:u.title,body:u.description,prompt:u.prompt,category:u.category,oneliner:u.oneliner,theme:u.theme,requires_file_upload:u.requires_file_upload}))??[],isLoading:g,isSuccess:S,isError:y}:{promptStarters:[],isLoading:!1,isSuccess:!0}}function Pe({clientThreadId:e}){const{isUnauthenticated:r}=D(),a=!r,n=ne(e),o=oe(e),t=q(),i=F(),c=I(),l=xe(e),d=J(l),{promptStarters:p,isSuccess:f,isError:h}=ge(n&&!o,e,i?2:4,void 0,void 0,l??void 0),x=p&&p?.length>0,v=f&&x&&a&&!d,{layer:g}=H("4031588851"),S=g.get("is_two_line",!1);return s.jsx(s.Fragment,{children:s.jsx(X,{children:(h||f)&&s.jsxs(s.Fragment,{children:[s.jsx(z,{className:`h-12 w-12 ${a?"":"max-sm:hidden"}`}),v&&s.jsx(Se,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},promptStarters:p,onSelectStarterPrompt:c,isSendBlocked:t,clientThreadId:e,isTwoLine:S}),!x&&a&&!d&&s.jsx(C,{}),d?s.jsx(Y,{}):null,h&&a&&s.jsx(C,{})]})})})}function C(){return s.jsx("div",{className:"mt-7 text-3xl",children:s.jsx(R,{id:"24tuqq",defaultMessage:"Hi, how can I help?"})})}function Se({promptStarters:e,onSelectStarterPrompt:r,isSendBlocked:a,clientThreadId:n,isTwoLine:o,...t}){return M.useEffect(()=>{de(e,n)},[n]),s.jsx(s.Fragment,{children:o?s.jsx(w.div,{...t,className:"absolute bottom-6 w-full px-4",children:s.jsx(he,{children:s.jsx(je,{starterPrompts:e,onSelectStarterPrompt:r,disabled:a})})}):s.jsx(w.div,{...t,children:s.jsx(L,{starterPrompts:e,onSelectStarterPrompt:r,disabled:a})})})}const ve=/\s/;function L({starterPrompts:e,onSelectStarterPrompt:r,disabled:a,cssMobileDisplayLimit:n,marginOverride:o}){let t=e.map((i,c)=>{let l=i.oneliner??i.title;l===""&&(l=i.body);const d=ve.test(l);return s.jsxs("button",{className:m(n!==void 0&&c>=n&&"max-sm:hidden","relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed"),disabled:a,onClick:()=>r(i,e,c),children:[s.jsx(Z,{starterPrompt:i}),s.jsx("div",{className:m("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500",d?"break-word":"break-all"),children:l})]},i.id??c)});if(t.length>2){const i=Math.floor(t.length/2);t=[t.slice(0,i),t.slice(i)].map((c,l)=>s.jsx("div",{className:"flex max-w-3xl flex-wrap items-stretch justify-center gap-4",children:c},l))}return s.jsx("div",{className:m("mx-3 flex max-w-3xl flex-wrap items-stretch justify-center gap-4",o??"mt-12"),children:t})}function je({starterPrompts:e,onSelectStarterPrompt:r,disabled:a}){let n=e.map((t,i)=>s.jsx("button",{className:"relative whitespace-nowrap rounded-2xl border border-token-border-light px-4 py-2 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",disabled:a,onClick:()=>r(t,e,i),children:s.jsxs("div",{className:"flex flex-col overflow-hidden",children:[t.title&&s.jsx("div",{className:"truncate font-semibold",children:t.title}),s.jsx("div",{className:m("truncate font-normal",t.title?"opacity-50":""),children:t.body})]})},t.id??i));const o=Math.floor(n.length/2);return n=[n.slice(0,o),n.slice(o)].map((t,i)=>s.jsx("div",{className:"flex flex-col gap-2",children:t},i)),s.jsx("div",{className:"grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2",children:n})}function Ue({gizmo:e,hideOwner:r=!1,children:a,className:n,avatarClassName:o,showStarterPrompts:t=!1,disableStarterPrompts:i=!1}){return e==null?null:s.jsx(s.Fragment,{children:s.jsxs("div",{className:m("flex h-full flex-col items-center justify-center text-token-text-primary",n),children:[s.jsx(be,{gizmo:e,avatarClassName:o}),s.jsx(we,{gizmo:e,hideOwner:r,showStarterPrompts:t,disableStarterPrompts:i}),a]})})}function be({gizmo:e,avatarClassName:r}){const a=!!(e!=null&&ee(e)&&e?.gizmo.tags?.includes(se.FirstParty));return s.jsx("div",{className:"relative",children:s.jsx($,{isFirstParty:a||!e,src:e!=null&&j(e)?e.profilePictureUrl:e?.gizmo.display.profile_picture_url,className:m("mb-3 h-12 w-12",r)})})}function ye({gizmo:e,disabled:r}){const a=b(e),n=I(),o=F();if(a==null||a.length===0)return null;const t=a.slice(0,o?2:4);return s.jsx(L,{starterPrompts:t,onSelectStarterPrompt:n,disabled:r})}function we({gizmo:e,hideOwner:r,showStarterPrompts:a,disableStarterPrompts:n}){const o=e!=null&&j(e)?e.name:e?.gizmo.display.name,t=e!=null&&j(e)?e.description:e?.gizmo.display.description;return s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx("div",{className:"text-center text-2xl font-semibold",children:o}),!r&&s.jsx("div",{className:"flex items-center gap-1 text-token-text-tertiary",children:s.jsx(s.Fragment,{children:e&&j(e)?s.jsx(N,{gizmo:e}):s.jsx(N,{gizmo:e,socials:e.gizmo.author.display_socials})})}),t&&s.jsx("div",{className:"max-w-md text-center text-sm font-normal text-token-text-primary",children:t}),a&&s.jsx(ye,{gizmo:e,disabled:n})]})}export{Ue as G,Ae as H,be as L,he as M,je as S,Ee as T,ge as a,C as b,L as c,Pe as d,I as u};
//# sourceMappingURL=lfvhb0nf0ozjlpqm.js.map
