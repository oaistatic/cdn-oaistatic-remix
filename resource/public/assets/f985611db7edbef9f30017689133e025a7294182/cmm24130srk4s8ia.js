import{r as a,t,K as R,V as F,ea as A,P as g,d as h,av as j,a0 as T,R as _}from"./bzvcy3tl84gc3bl9.js";import{eb as z,bP as I,dm as K,dn as G,b as $}from"./moittmkqym6x2q8u.js";import{b as B,T as N}from"./c3nvn3bmsyj77vtl.js";import"./o4htpc5iqra16abg.js";import"./d6ri6s3v2tbmwdon.js";const D=a.forwardRef(function(s,n){const{className:c,...d}=s;return t.jsxs("div",{className:"grid",children:[t.jsx("textarea",{className:R("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",c),ref:n,...d}),t.jsxs("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[s.value," "]})]})});function J({initialText:r,clientThreadId:s,currentLeaf:n,onChangeItemInView:c,onExitEdit:d,onRequestCompletion:b,disabled:w,attachments:i}){const E=a.useId(),u=`${n}-${E}`,[x,k]=a.useState(r??""),p=a.useRef(null),y=z(),f=x.trim()==="",M=a.useCallback(e=>{k(e.currentTarget.value)},[]),m=a.useCallback(()=>{if(f)return;const e=()=>{N.updateTree(s,l=>{const P=l.getParentId(n);l.addNode(u,x,P,_.User,void 0,i?{attachments:i}:void 0)}),c(u)},o=new I;b({type:A.Next,promptId:u,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:B.getConversationMode(s)},updateTree:e,turnTracker:o}),d(),g.logEvent(h.changeNode,{intent:"edit_save"})},[i,s,n,u,x,c,b,d,f]),v=a.useCallback(()=>{c(n),g.logEvent(h.changeNode,{intent:"edit_cancel"}),d(),g.logEvent(h.cancelEditPrompt,{threadId:N.getServerThreadId(s)})},[n,c,d,s]);a.useEffect(()=>{const e=p.current;if(e){e.focus();const o=e.value.length;e.setSelectionRange(o,o)}},[]),a.useEffect(()=>{const e=p.current,o=l=>{l.key==="Enter"&&l.metaKey?m():l.key==="Escape"&&v()};return e&&e.addEventListener("keydown",o),()=>{e&&e.removeEventListener("keydown",o)}},[v,m]);const C=i&&i.length>0&&t.jsx(U,{children:i.map(e=>t.jsx(K,{width:y?"normal":"wide",file:e.name,contextConnectorInfo:G(e.context_connector_info)},e.id))}),S=t.jsx("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:t.jsx(D,{ref:p,value:x,onChange:M,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return t.jsxs("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[C,S,t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(j,{as:"button",color:"secondary",onClick:v,children:t.jsx(T,{id:"D9gbPp",defaultMessage:"Cancel"})}),t.jsx(j,{as:"button",onClick:m,disabled:w||f,children:t.jsx(T,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}const U=F.div`flex gap-2 flex-wrap`;function V({message:r,...s}){return t.jsx(J,{currentLeaf:r.nodeId,initialText:$(r.message),attachments:r.message.metadata?.attachments,...s})}export{V as TextMessageEditor};
//# sourceMappingURL=cmm24130srk4s8ia.js.map
