import{r as a,j as t,M}from"./lklglvrzltpv3f05.js";import{aw as z,az as A,a8 as F,aa as G,P as v,h,v as T,br as y,s as H,j as J}from"./i7de8yvdg4jlu6h0.js";import{cM as K,fO as O,fP as U,bJ as $,fQ as B,dz as D,dA as Q}from"./mc2tj3xhtcshtn61.js";const W=a.forwardRef(function(s,r){const{className:c,...i}=s;return t.jsxs("div",{className:"grid",children:[t.jsx("textarea",{className:z("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",c),ref:r,...i}),t.jsxs("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[s.value," "]})]})});function q({initialText:o,clientThreadId:s,currentLeaf:r,onChangeItemInView:c,onExitEdit:i,onRequestCompletion:j,disabled:w,attachments:d}){const N=a.useId(),u=`${r}-${N}`,[f,k]=a.useState(o??""),x=a.useRef(null),E=K(),S=O(),g=f.trim()==="",C=a.useCallback(e=>{k(e.currentTarget.value)},[]),p=a.useCallback(()=>{if(g)return;const e={},n=U();d&&(e.attachments=d),n&&(e.__internal={search_settings:n});const l=()=>{T.updateTree(s,b=>{const R=b.getParentId(r);b.addNode(u,f,R,H.User,void 0,Object.keys(e).length>0?e:void 0)}),c(u)},I=new $;j({type:F.Next,promptId:u,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:G.getConversationMode(s),systemHints:S?[B.Search]:void 0},updateTree:l,turnTracker:I}),i(),v.logEvent(h.changeNode,{intent:"edit_save"})},[d,s,r,u,f,c,j,i,g,S]),m=a.useCallback(()=>{c(r),v.logEvent(h.changeNode,{intent:"edit_cancel"}),i(),v.logEvent(h.cancelEditPrompt,{threadId:T.getServerThreadId(s)})},[r,c,i,s]);a.useEffect(()=>{const e=x.current;if(e){e.focus();const n=e.value.length;e.setSelectionRange(n,n)}},[]),a.useEffect(()=>{const e=x.current,n=l=>{l.key==="Enter"&&l.metaKey?p():l.key==="Escape"&&m()};return e&&e.addEventListener("keydown",n),()=>{e&&e.removeEventListener("keydown",n)}},[m,p]);const P=d&&d.length>0&&t.jsx(L,{children:d.map(e=>t.jsx(D,{width:E?"normal":"wide",file:e.name,contextConnectorInfo:Q(e.context_connector_info)},e.id))}),_=t.jsx("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:t.jsx(W,{ref:x,value:f,onChange:C,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return t.jsxs("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[P,_,t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(y,{as:"button",color:"secondary",onClick:m,children:t.jsx(M,{id:"D9gbPp",defaultMessage:"Cancel"})}),t.jsx(y,{as:"button",onClick:p,disabled:w||g,children:t.jsx(M,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}const L=A.div`flex gap-2 flex-wrap`;function ee({message:o,...s}){return t.jsx(q,{currentLeaf:o.nodeId,initialText:J(o.message),attachments:o.message.metadata?.attachments,...s})}export{ee as TextMessageEditor};
//# sourceMappingURL=jax00gsd1xozvat8.js.map
