import{j as e,ad as C,M as F,r as M,ac as j}from"./lklglvrzltpv3f05.js";import{dc as L,dd as v,bI as G,b_ as I,de as E,df as _,dg as P,dh as U,di as A,bZ as q,d1 as D,dj as u,dk as g,dl as R}from"./ntw4l0fkgqdiln85.js";import{ao as d,aX as T,aj as B,dO as O,g3 as W,bp as S,bS as H,at as X}from"./ltrr4mhf6s4m7a72.js";function se({clientThreadId:s}){const{isUnauthenticated:l}=T(),a=!l,n=B(s),i=O(s),t=W(),r=S(),c=v(),o=G(s),x=I(o),{promptStarters:m,isSuccess:h,isError:p}=E(n&&!i,s,r?2:4,void 0,void 0,o??void 0),f=m&&m?.length>0,y=h&&f&&a&&!x,{layer:N}=H("4031588851"),k=N.get("is_two_line",!1);return e.jsx(e.Fragment,{children:e.jsx(C,{children:(p||h)&&e.jsxs(e.Fragment,{children:[e.jsx(X,{className:`h-12 w-12 ${a?"":"max-sm:hidden"}`}),y&&e.jsx(Z,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},promptStarters:m,onSelectStarterPrompt:c,isSendBlocked:t,clientThreadId:s,isTwoLine:k}),!f&&a&&!x&&e.jsx(b,{}),x?e.jsx(_,{}):null,p&&a&&e.jsx(b,{})]})})})}function b(){return e.jsx("div",{className:"mt-7 text-3xl",children:e.jsx(F,{id:"24tuqq",defaultMessage:"Hi, how can I help?"})})}function Z({promptStarters:s,onSelectStarterPrompt:l,isSendBlocked:a,clientThreadId:n,isTwoLine:i,...t}){return M.useEffect(()=>{P(s,n)},[n]),e.jsx(e.Fragment,{children:i?e.jsx(j.div,{...t,className:"absolute bottom-6 w-full px-4",children:e.jsx(U,{children:e.jsx(J,{starterPrompts:s,onSelectStarterPrompt:l,disabled:a})})}):e.jsx(j.div,{...t,children:e.jsx(w,{starterPrompts:s,onSelectStarterPrompt:l,disabled:a})})})}const $=/\s/;function w({starterPrompts:s,onSelectStarterPrompt:l,disabled:a,cssMobileDisplayLimit:n,marginOverride:i}){let t=s.map((r,c)=>{let o=r.oneliner??r.title;o===""&&(o=r.body);const x=$.test(o);return e.jsxs("button",{className:d(n!==void 0&&c>=n&&"max-sm:hidden","relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed"),disabled:a,onClick:()=>l(r,s,c),children:[e.jsx(L,{category:r.category}),e.jsx("div",{className:d("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500",x?"break-word":"break-all"),children:o})]},r.id??c)});if(t.length>2){const r=Math.floor(t.length/2);t=[t.slice(0,r),t.slice(r)].map((c,o)=>e.jsx("div",{className:"flex max-w-3xl flex-wrap items-stretch justify-center gap-4",children:c},o))}return e.jsx("div",{className:d("mx-3 flex max-w-3xl flex-wrap items-stretch justify-center gap-4",i??"mt-12"),children:t})}function J({starterPrompts:s,onSelectStarterPrompt:l,disabled:a}){let n=s.map((t,r)=>e.jsx("button",{className:"relative whitespace-nowrap rounded-2xl border border-token-border-light px-4 py-2 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",disabled:a,onClick:()=>l(t,s,r),children:e.jsxs("div",{className:"flex flex-col overflow-hidden",children:[t.title&&e.jsx("div",{className:"truncate font-semibold",children:t.title}),e.jsx("div",{className:d("truncate font-normal",t.title?"opacity-50":""),children:t.body})]})},t.id??r));const i=Math.floor(n.length/2);return n=[n.slice(0,i),n.slice(i)].map((t,r)=>e.jsx("div",{className:"flex flex-col gap-2",children:t},r)),e.jsx("div",{className:"grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2",children:n})}function te({gizmo:s,hideOwner:l=!1,children:a,className:n,avatarClassName:i,showStarterPrompts:t=!1,disableStarterPrompts:r=!1}){return s==null?null:e.jsx(e.Fragment,{children:e.jsxs("div",{className:d("flex h-full flex-col items-center justify-center text-token-text-primary",n),children:[e.jsx(K,{gizmo:s,avatarClassName:i}),e.jsx(V,{gizmo:s,hideOwner:l,showStarterPrompts:t,disableStarterPrompts:r}),a]})})}function K({gizmo:s,avatarClassName:l}){const a=!!(s!=null&&A(s)&&s?.gizmo.tags?.includes(q.FirstParty));return e.jsx("div",{className:"relative",children:e.jsx(D,{isFirstParty:a||!s,src:s!=null&&u(s)?s.profilePictureUrl:s?.gizmo.display.profile_picture_url,className:d("mb-3 h-12 w-12",l)})})}function Q({gizmo:s,disabled:l}){const a=R(s),n=v(),i=S();if(a==null||a.length===0)return null;const t=a.slice(0,i?2:4);return e.jsx(w,{starterPrompts:t,onSelectStarterPrompt:n,disabled:l})}function V({gizmo:s,hideOwner:l,showStarterPrompts:a,disableStarterPrompts:n}){const i=s!=null&&u(s)?s.name:s?.gizmo.display.name,t=s!=null&&u(s)?s.description:s?.gizmo.display.description;return e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"text-center text-2xl font-semibold",children:i}),!l&&e.jsx("div",{className:"flex items-center gap-1 text-token-text-tertiary",children:e.jsx(e.Fragment,{children:s&&u(s)?e.jsx(g,{gizmo:s}):e.jsx(g,{gizmo:s,socials:s.gizmo.author.display_socials})})}),t&&e.jsx("div",{className:"max-w-md text-center text-sm font-normal text-token-text-primary",children:t}),a&&e.jsx(Q,{gizmo:s,disabled:n})]})}export{te as G,K as L,J as S,b as a,w as b,se as c};
//# sourceMappingURL=dz00r7qlzgek59uu.js.map
