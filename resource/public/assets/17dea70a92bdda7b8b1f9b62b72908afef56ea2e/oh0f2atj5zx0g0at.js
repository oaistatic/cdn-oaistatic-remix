import{r as a,l as t,m as R,a1 as F,ck as A,e7 as _,P as g,a as h,be as b,Z as T,R as z}from"./dr7d3iwdkso0acad.js";import{c1 as I,dd as G,de as K,o as $}from"./dmeh4acfgftb4ocn.js";import{a as B,T as N}from"./mhaqcfmmdyzdbeu3.js";import"./nk93elwanh2qmq79.js";import"./dnerd8yjozxoav5t.js";const D=a.forwardRef(function(s,n){const{className:c,...l}=s;return t.jsxs("div",{className:"grid",children:[t.jsx("textarea",{className:R("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",c),ref:n,...l}),t.jsxs("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[s.value," "]})]})});function J({initialText:r,clientThreadId:s,currentLeaf:n,onChangeItemInView:c,onExitEdit:l,onRequestCompletion:j,disabled:k,attachments:d}){const w=a.useId(),u=`${n}-${w}`,[x,E]=a.useState(r??""),p=a.useRef(null),y=A(),f=x.trim()==="",M=a.useCallback(e=>{E(e.currentTarget.value)},[]),m=a.useCallback(()=>{if(f)return;const e=()=>{N.updateTree(s,i=>{const P=i.getParentId(n);i.addNode(u,x,P,z.User,void 0,d?{attachments:d}:void 0)}),c(u)},o=new I;j({type:_.Next,promptId:u,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:B.getConversationMode(s)},updateTree:e,turnTracker:o}),l(),g.logEvent(h.changeNode,{intent:"edit_save"})},[d,s,n,u,x,c,j,l,f]),v=a.useCallback(()=>{c(n),g.logEvent(h.changeNode,{intent:"edit_cancel"}),l(),g.logEvent(h.cancelEditPrompt,{threadId:N.getServerThreadId(s)})},[n,c,l,s]);a.useEffect(()=>{const e=p.current;if(e){e.focus();const o=e.value.length;e.setSelectionRange(o,o)}},[]),a.useEffect(()=>{const e=p.current,o=i=>{i.key==="Enter"&&i.metaKey?m():i.key==="Escape"&&v()};return e&&e.addEventListener("keydown",o),()=>{e&&e.removeEventListener("keydown",o)}},[v,m]);const C=d&&d.length>0&&t.jsx(U,{children:d.map(e=>t.jsx(G,{width:y?"normal":"wide",file:e.name,contextConnectorInfo:K(e.context_connector_info)},e.id))}),S=t.jsx("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:t.jsx(D,{ref:p,value:x,onChange:M,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return t.jsxs("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[C,S,t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(b,{as:"button",color:"secondary",onClick:v,children:t.jsx(T,{id:"D9gbPp",defaultMessage:"Cancel"})}),t.jsx(b,{as:"button",onClick:m,disabled:k||f,children:t.jsx(T,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}const U=F.div`flex gap-2 flex-wrap`;function Q({message:r,...s}){return t.jsx(J,{currentLeaf:r.nodeId,initialText:$(r.message),attachments:r.message.metadata?.attachments,...s})}export{Q as TextMessageEditor};
//# sourceMappingURL=oh0f2atj5zx0g0at.js.map
