import{r as a,t,T as R,O as F,eb as A,P as v,d as h,aT as b,a8 as j,R as _}from"./elatgogjtv7nqe0m.js";import{ag as z,bT as I,dn as G,dp as K,b as $}from"./htp5iqft2rzvr58f.js";import{a as B,T as N}from"./h1jpzm6tqkxt344d.js";import"./cr91oy4eihkrvo1z.js";import"./iudm9ugwilu2skh4.js";const D=a.forwardRef(function(s,n){const{className:c,...d}=s;return t.jsxs("div",{className:"grid",children:[t.jsx("textarea",{className:R("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",c),ref:n,...d}),t.jsxs("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[s.value," "]})]})});function J({initialText:r,clientThreadId:s,currentLeaf:n,onChangeItemInView:c,onExitEdit:d,onRequestCompletion:T,disabled:w,attachments:i}){const E=a.useId(),u=`${n}-${E}`,[x,k]=a.useState(r??""),p=a.useRef(null),y=z(),f=x.trim()==="",M=a.useCallback(e=>{k(e.currentTarget.value)},[]),m=a.useCallback(()=>{if(f)return;const e=()=>{N.updateTree(s,l=>{const P=l.getParentId(n);l.addNode(u,x,P,_.User,void 0,i?{attachments:i}:void 0)}),c(u)},o=new I;T({type:A.Next,promptId:u,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:B.getConversationMode(s)},updateTree:e,turnTracker:o}),d(),v.logEvent(h.changeNode,{intent:"edit_save"})},[i,s,n,u,x,c,T,d,f]),g=a.useCallback(()=>{c(n),v.logEvent(h.changeNode,{intent:"edit_cancel"}),d(),v.logEvent(h.cancelEditPrompt,{threadId:N.getServerThreadId(s)})},[n,c,d,s]);a.useEffect(()=>{const e=p.current;if(e){e.focus();const o=e.value.length;e.setSelectionRange(o,o)}},[]),a.useEffect(()=>{const e=p.current,o=l=>{l.key==="Enter"&&l.metaKey?m():l.key==="Escape"&&g()};return e&&e.addEventListener("keydown",o),()=>{e&&e.removeEventListener("keydown",o)}},[g,m]);const C=i&&i.length>0&&t.jsx(O,{children:i.map(e=>t.jsx(G,{width:y?"normal":"wide",file:e.name,contextConnectorInfo:K(e.context_connector_info)},e.id))}),S=t.jsx("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:t.jsx(D,{ref:p,value:x,onChange:M,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return t.jsxs("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[C,S,t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(b,{as:"button",color:"secondary",onClick:g,children:t.jsx(j,{id:"D9gbPp",defaultMessage:"Cancel"})}),t.jsx(b,{as:"button",onClick:m,disabled:w||f,children:t.jsx(j,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}const O=F.div`flex gap-2 flex-wrap`;function X({message:r,...s}){return t.jsx(J,{currentLeaf:r.nodeId,initialText:$(r.message),attachments:r.message.metadata?.attachments,...s})}export{X as TextMessageEditor};
//# sourceMappingURL=mansp1xhwfbyu4aa.js.map
