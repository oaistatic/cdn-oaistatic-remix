import{r,A as y,P as h,d as b,j as n,ak as E}from"./e9yuj0ll30e3kmlx.js";import{b8 as A,T as k,aR as v,b2 as j,b9 as P}from"./ihoxwwe79kyl4jef.js";import{u as R}from"./hz18ts8qrzw17mgm.js";import{T as S}from"./ixdbgduk5tyikx9n.js";import{T as D}from"./mj32fg73w6wjno7w.js";import"./mhi0wfvgf6n45t1b.js";import"./k0b3ujwgwrn0wecv.js";import"./ogeaiwpkr6sm1oz0.js";const C={strong:o=>{const{node:e,children:t,...s}=o;return n.jsx("strong",{...s,className:E(s.className,"font-semibold text-token-text-primary"),children:t})},p:o=>{const{node:e,children:t,...s}=o;return n.jsx("p",{...s,className:E(s.className,"text-base","has-[strong]:mb-1 [&:not(:first-child)]:has-[strong]:mt-3 [&:not(:has(strong))]:mb-3"),children:t})}};function O({headline:o,message:e}){const s=e.create_time?new Date(e.create_time*1e3):Date.now(),i=R(+s,48e4);return n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(P,{percentage:i,thickness:1/8,className:"h-5 w-5 text-token-text-primary",backgroundStrokeClassName:"stroke-token-main-surface-tertiary",transitionDuration:`${(100-i)/100*.2}s`,transitionTimingFunction:"cubic-bezier(0.55, 0, 1, 1)"}),o]})}function U({messages:o,isStreaming:e,clientThreadId:t}){const[s,i]=r.useState(""),[m,T]=r.useState(!1),g=A(t)===y.STREAMING||e,a=o[0].message,x=a.id,p=k.getServerThreadId(t),c=v(a),l=a.metadata?.summarization_headline,_=e&&l!=null;r.useEffect(()=>{const N=/\*\*(.*?)(?:\*\*|\n|$)/g;let f,u="";for(;(f=N.exec(c))!=null;)u=f[1].trim();u?i(u):a.metadata?.initial_text!=null&&i(a.metadata.initial_text)},[c,a.metadata?.initial_text]),r.useEffect(()=>{c.length>0&&!l&&T(!0)},[c,l]);const d=r.useMemo(()=>({client_thread_id:t,message_id:x,conversationId:p}),[t,x,p]);r.useEffect(()=>{m&&h.logEvent(b.receivedA8KM123Message,d)},[m]);const M=r.useCallback(()=>{h.logEvent(b.openedA8KM123Message,{...d,isStreaming:e})},[d,e]);return n.jsx(D,{status:g?S.Running:S.Finished,highlightedCommand:g?l==null?s:n.jsx(O,{headline:l,message:a}):a.metadata?.finished_text??"",onOpenAnalytics:M,children:m&&!_?n.jsx("div",{className:"mb-4 border-l-2 pl-4 dark:border-token-text-secondary",children:n.jsx(j,{componentOverrides:C,className:"not-prose leading-6",children:c})}):null})}export{C as SUMMARY_MARKDOWN_COMPONENT_OVERRIDES,U as default};
//# sourceMappingURL=ol5sj8jboiqnckk1.js.map
