import{r as m,c as G,j as e,M as i,a as H,e as Ne,h as Ge,b as te}from"./lklglvrzltpv3f05.js";import{br as N,aw as R,bO as Pe,by as ve,J as L,f as Q,gn as w,bf as O,bi as ge,bg as Me,ch as Z,bS as C,ef as Ae,F as ae,o as _e,u as Re,aX as De,q as xe,go as Y,g4 as Ee,g5 as X,eg as he,e3 as Le}from"./muemwvh3ybsggbb1.js";import{d0 as p,d1 as ee,aX as be,hc as We,aW as k,I as se,bh as Ie,fs as fe,hd as Te,he as je,b3 as ze,h8 as Fe,cY as Be,bV as He,cy as qe,g6 as Ve,hf as Ue,f5 as Ke,eG as we,ci as Ye}from"./cp734xu9t8fnlezn.js";import{S as y}from"./mul4xsnmrv9qj0xd.js";import{S as Qe,a as Je,b as $e,u as Xe,d as Ze}from"./nqttftvfcmuoku0w.js";import{B as ye,S as es}from"./e08m0z7ehxia3j45.js";import{g as ke}from"./l2vblm23do8uh8uh.js";import{S as ss}from"./nodzyxt8sjpstt1k.js";import{A as ts}from"./hwk46q0buk8g6bak.js";import{V as as}from"./d3y72ugnrmac5z1v.js";import{R as is}from"./cg0q4xyx5oyizgvs.js";import{a as ns,b as ls,c as Se,d as rs,e as os,f as cs,A as ds}from"./i55jxnmby42pg60z.js";import"./c4bxzbp1808foto4.js";import"./n2org3lp2h7qg1d3.js";import"./ergkj5c0fieprx2t.js";import"./gt9bqxxv5tm4mxgb.js";import"./jgmvllhgvicow6vd.js";import"./eoh3qcov0jni3wda.js";import"./gq1oquoigcb35b69.js";import"./2hojtc47c0h6f1o9.js";import"./hn4xrxm352qbbf2x.js";import"./heefrlxlra66lmjs.js";import"./ks7uqntkdx8nl2pe.js";import"./cfomm9pr8dm8j2s1.js";import"./784s8wahottjk0mt.js";import"./nn3h1xb49p1mewbj.js";import"./ee3xtu0bz0w5l8fu.js";import"./j9qctek7saq0riwf.js";import"./dqqw583uk9wv9e1r.js";import"./pb0uti1hvbxmw4fb.js";import"./b1s3ucv64yc8b8pt.js";function ps({value:s,title:t,valueClassName:a,onChange:n,emptyMessage:l}){const[r,c]=m.useState(!1),[x,f]=m.useState(""),j=G(),T=m.useRef(null),g=()=>{if(x!==""){const d=x.trim();n([...s,d]),c(!1),f("")}};return e.jsxs(p.Root,{className:"w-auto",children:[e.jsxs(p.Header,{children:[e.jsx(p.HeaderCell,{children:t}),e.jsx(p.HeaderCell,{})]}),e.jsxs(p.Body,{children:[s.map((d,b)=>e.jsxs(p.Row,{children:[e.jsx(p.Cell,{className:a,children:d}),e.jsx(p.Cell,{textAlign:"right",children:e.jsx(N,{type:"button",onClick:()=>{n(s.filter((P,v)=>v!==b))},children:e.jsx(ee,{className:"icon-sm"})})})]},b)),l&&s.length===0?e.jsx(p.Row,{children:e.jsx(p.Cell,{colSpan:2,className:"text-center text-sm italic",children:l})}):null,e.jsxs(p.Row,{children:[e.jsxs("div",{className:R("mt-2 flex flex-row gap-2 p-1",!r&&"hidden"),children:[e.jsx(be,{ariaLabel:j.formatMessage({id:"CgP6Du",defaultMessage:"Add new domain"}),className:"w-80",name:"newDomain",value:x,onChange:d=>{f(d.target.value)},ref:T,onPressEnter:g,placeholder:"example.com"}),e.jsx(N,{className:"grow-0",onClick:g,children:e.jsx(i,{id:"svRVol",defaultMessage:"Add"})})]}),!r&&e.jsxs(N,{type:"button",onClick:()=>{c(!0),setTimeout(()=>{T.current?.focus()},0)},className:"mt-2",children:[e.jsx(We,{className:"icon-sm inline-block"}),e.jsx(i,{id:"J5y3+M",defaultMessage:"Add new domain"})]})]})]})]})}const us=s=>m.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V7.11526C21 7.96049 20.6434 8.76651 20.018 9.33508L15.8273 13.1448C15.6189 13.3343 15.5 13.603 15.5 13.8847V19.882C15.5 21.3687 13.9354 22.3357 12.6056 21.6708L9.60557 20.1708C8.92801 19.832 8.5 19.1395 8.5 18.382V13.8847C8.5 13.603 8.38115 13.3343 8.17267 13.1448L3.98198 9.33508C3.35656 8.76651 3 7.96049 3 7.11526V6ZM6 5C5.44772 5 5 5.44772 5 6V7.11526C5 7.397 5.11885 7.66568 5.32733 7.8552L9.51802 11.6649C10.1434 12.2335 10.5 13.0395 10.5 13.8847V18.382L13.5 19.882V13.8847C13.5 13.0395 13.8566 12.2335 14.482 11.6649L18.6727 7.8552C18.8811 7.66568 19 7.39701 19 7.11526V6C19 5.44772 18.5523 5 18 5H6Z",fill:"currentColor"}));function ms({isOpen:s,onClose:t,account:a,gpt:n}){const l=G(),[r,c]=m.useState(!1),[x,f]=m.useState(""),[j,T]=m.useState(!0);return e.jsxs(Pe,{size:"custom",className:"max-w-lg text-sm",isOpen:s,onClose:ve,type:"success",title:l.formatMessage(F.deleteModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(i,{...F.deleteModalPrompt,values:{gptName:n.gizmo.display.name}})}),!j&&e.jsx("p",{className:"text-red-500",children:e.jsx(i,{...F.invalidEmail})}),e.jsx(be,{ariaLabel:l.formatMessage({id:"x4A5l2",defaultMessage:"Email"}),className:R("px-3 py-2",j?"":"border-red-500"),name:"email",type:"email",value:x,placeholder:"Email",onChange:g=>{f(g.target.value)}}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(N,{color:"secondary",onClick:()=>{t(!1),c(!1),T(!0)},loading:r,children:e.jsx(i,{...F.cancelButtonText})}),e.jsx(N,{color:"primary",loading:r,onClick:()=>{c(!0),T(!0),x==""||!as.test(x)?(T(!1),c(!1)):L.updateWorkspaceGPTOwner(a.id,n.gizmo.id,x).then(()=>{t(!0),c(!1),T(!0)},()=>{T(!1),c(!1)})},children:e.jsx(i,{...F.deleteButtonText})})]})]})}const F=Q({deleteModalTitle:{id:"changeOwnerModal.changeModalTitle",defaultMessage:"Change Owner"},deleteModalPrompt:{id:"changeOwnerModal.changeModalPrompt",defaultMessage:"New owner of {gptName}"},cancelButtonText:{id:"changeOwnerModal.cancelButtonText",defaultMessage:"Cancel"},deleteButtonText:{id:"changeOwnerModal.changeOwnerButtonText",defaultMessage:"Change owner"},invalidEmail:{id:"changeOwnerModal.invalidEmail",defaultMessage:"Email is invalid or does not belong to a member in this workspace"}});function gs({isOpen:s,onClose:t,account:a,gpt:n}){const l=G(),[r,c]=m.useState(!1);return e.jsxs(Pe,{size:"custom",className:"max-w-lg text-sm",isOpen:s,onClose:ve,type:"success",title:l.formatMessage(U.deleteModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(i,{...U.deleteModalPrompt,values:{gptName:n.gizmo.display.name}})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(N,{color:"secondary",onClick:()=>{t(!1)},loading:r,children:e.jsx(i,{...U.cancelButtonText})}),e.jsx(N,{color:"danger",loading:r,onClick:()=>{c(!0),L.deleteWorkspaceGPT(a.id,n.gizmo.id).finally(()=>{t(!0),c(!1)})},children:e.jsx(i,{...U.deleteButtonText})})]})]})}const U=Q({deleteModalTitle:{id:"deleteGPTModal.accessModalTitle",defaultMessage:"Delete GPT"},deleteModalPrompt:{id:"deleteGPTModal.accessModalPrompt",defaultMessage:"Are you sure you would like to delete {gptName}? This action can not be undone."},cancelButtonText:{id:"deleteGPTModal.cancelButtonText",defaultMessage:"Cancel"},deleteButtonText:{id:"deleteGPTModal.deleteButtonText",defaultMessage:"Delete"}}),B=10;function xs({account:s,gpt:t,thirdParty:a=!1}){const n=H(),[l,r]=m.useState(!1),[c,x]=m.useState(!1),[f,j]=m.useState(!1),[T,g]=m.useState(!1),d=Ne(),b=new Date(a?t.gizmo.workspace_approval_date??"":t.gizmo.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric"}),P=t.tools.filter(h=>h.type===O.JIT_PLUGIN).map(h=>h.type===O.JIT_PLUGIN?h.metadata.domain:"");let v="";return P.length===0?v="":P.length===1?v=P[0]:v=`${P.length} domains`,e.jsxs(e.Fragment,{children:[e.jsxs(p.Row,{children:[e.jsx(p.Cell,{className:"py-4 pr-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"h-10 w-10 flex-shrink-0",children:e.jsx(Be,{src:t.gizmo.display.profile_picture_url,isFirstParty:t.gizmo.tags?.includes(He.FirstParty)??!1,alt:t.gizmo.display.name,className:"h-10 w-10"})}),e.jsx("div",{className:"ml-4",children:e.jsx("div",{className:"text-sm font-semibold text-token-text-primary",children:t.gizmo.display.name})})]})}),e.jsx(p.Cell,{className:"p-4 text-sm text-token-text-secondary",children:t.gizmo.author.display_name}),e.jsx(p.Cell,{className:"p-4 text-sm text-token-text-secondary",children:v}),!a&&e.jsx(p.Cell,{className:"p-4 text-sm text-token-text-secondary",children:e.jsx(ks,{gizmo:t,account:s})}),!a&&e.jsx(p.Cell,{className:"p-4 text-sm text-token-text-secondary",children:t.gizmo.vanity_metrics?.num_conversations_str??0}),e.jsx(p.Cell,{className:"p-4 text-sm text-token-text-secondary",children:b}),e.jsx(p.Cell,{className:"p-4",children:e.jsxs(C.Root,{children:[e.jsx(C.Trigger,{className:"-my-2",children:e.jsx(qe,{className:"icon-sm"})}),e.jsx(C.Portal,{children:a?e.jsx(C.Content,{children:e.jsx(C.Item,{onClick:()=>{g(!0)},color:"danger",icon:ee,children:e.jsx(i,{...o.removeFromWorkspace})})}):e.jsxs(C.Content,{children:[e.jsx(C.Item,{onClick:()=>{r(t)},icon:Qe,children:e.jsx(i,{...o.changeAccess})}),e.jsx(C.Item,{onClick:()=>{j(!0)},icon:Ve,children:e.jsx(i,{...o.changeOwner})}),e.jsx(C.Item,{onClick:()=>{x(!0)},icon:ee,color:"danger",children:e.jsx(i,{...o.deleteGPT})})]})})]})})]}),l&&e.jsx(ss,{publishedGizmo:l,gizmo:Ue(l),promoteGizmo:async()=>{},onClose:()=>{r(!1)},showActionsModal:()=>{},appealGizmo:async()=>{d(Ke(l.gizmo.id))},setAppealState:()=>{},shareOnly:!0,updateGizmo:()=>{},workspaceOwner:!0}),e.jsx(ms,{isOpen:f,gpt:t,account:s,onClose:h=>{j(!1),h&&n.invalidateQueries({queryKey:["workspace",s.id,w.WORKSPACE]})}}),e.jsx(gs,{isOpen:c,gpt:t,account:s,onClose:h=>{x(!1),h&&n.invalidateQueries({queryKey:["workspace",s.id,w.WORKSPACE]})}}),e.jsx(is,{isOpen:T,gpt:t,account:s,onClose:h=>{g(!1),h&&n.invalidateQueries({queryKey:["workspace",s.id,w.THIRD_PARTY]})}})]})}function hs(s,t,a){return s.sort((n,l)=>{let r,c;if(t==="created_at")r=new Date(n.gizmo.created_at).getTime(),c=new Date(l.gizmo.created_at).getTime();else if(t==="workspace_approval_date")r=new Date(n.gizmo.workspace_approval_date??"").getTime(),c=new Date(l.gizmo.workspace_approval_date??"").getTime();else if(t==="vanity_metrics.num_conversations_str")r=n.gizmo.vanity_metrics?.num_conversations??0,c=l.gizmo.vanity_metrics?.num_conversations??0;else throw new Error(`Invalid field: ${t}`);if(a==="asc")return r-c;if(a==="desc")return c-r;throw new Error(`Invalid direction: ${a}`)})}function fs(s){switch(s){case k.User:case k.Group:return k.Private;case k.WorkspaceLink:return k.Workspace;default:return s}}function Ts(s,t){return s.filter(a=>{const n=a.tools.some(c=>c.type===O.MEMORY?!1:t.tools[c.type]),l=fs(a.gizmo.share_recipient),r=t.share_recipient[l];return n||r})}function js(s,t){const a=t.toLowerCase();return s.filter(n=>{const l=n.gizmo.author.display_name&&n.gizmo.author.display_name.toLowerCase(),r=n.gizmo.display.name.toLowerCase();return l&&l.includes(a)||r.includes(a)})}function ws({account:s,showThirdParty:t}){const[a,n]=m.useState(w.WORKSPACE),{data:l,fetchNextPage:r,hasNextPage:c,isError:x,isFetchingNextPage:f}=ys(s.id,a),j=G(),[T,g]=m.useState(!1),d=l?.pages.flatMap(S=>S.items)??[];m.useEffect(()=>{!x&&!f&&c&&r()},[f,c,x,r]);const b=c,P=m.useRef(null),[v,h]=m.useState(""),[W,ie]=m.useState(!1),[A,ne]=m.useState(a==w.WORKSPACE?"created_at":"workspace_approval_date"),[_,D]=m.useState("desc"),le={tools:{[O.BROWSER]:!1,[O.PYTHON]:!1,[O.JIT_PLUGIN]:!1,[O.RETRIEVAL]:!1,[O.DALLE]:!1,[O.CANVAS]:!1},share_recipient:{[k.Private]:!1,[k.Workspace]:!1,[k.Link]:!1,[k.Marketplace]:!1}},[E,re]=m.useState(le),[J,q]=m.useState(0),Ce=H();m.useEffect(()=>{W&&P.current&&P.current.focus()},[W]);function oe(S,I){const{id:z,checked:Oe}=S.currentTarget,me={...E};me[I][z]=Oe,re(me),q(0)}let ce=0,de=0;const $=Object.values(E.tools).filter(Boolean).length+Object.values(E.share_recipient).filter(Boolean).length;let M=[],pe=0;const V=l===void 0,ue=!V&&d.length>0;return V||(pe=Math.min(d.length,B),de=Math.ceil(d.length/B),b?M=d:M=hs(d,A,_),v!==""&&(M=js(M,v)),$>0&&(M=Ts(M,E)),ce=Math.ceil(M.length/B),M=M.slice(J*B,(J+1)*B)),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between border-b border-token-border-light",children:[e.jsxs("div",{className:"flex space-x-4 pt-2",children:[e.jsx("a",{className:R("text-l pb-4 font-semibold",a===w.WORKSPACE?"border-b border-token-text-secondary text-token-text-primary":"cursor-pointer text-token-text-tertiary"),onClick:()=>{n(w.WORKSPACE)},children:e.jsx(i,{...o.workspaceTab})}),t&&e.jsx("a",{className:R("text-l pb-4 font-semibold",a===w.THIRD_PARTY?"border-b border-token-text-secondary text-token-text-primary":"cursor-pointer text-token-text-tertiary"),onClick:()=>{n(w.THIRD_PARTY)},children:e.jsx(i,{...o.thirdPartyTab})})]}),!V&&e.jsxs("div",{className:"flex items-center space-x-4 pb-2",children:[$>0&&e.jsxs("div",{className:"mx-0 flex items-center space-x-1",onClick:()=>{re(le)},children:[e.jsx("span",{children:$}),e.jsx(ge,{className:"cursor-pointer"})]}),e.jsx(Me,{theme:"white",label:e.jsxs("div",{className:"w-64 space-y-4 p-2 font-normal text-token-text-primary",children:[e.jsxs("div",{className:"flex-col space-y-2",children:[e.jsx("span",{className:"flex font-semibold",children:e.jsx(i,{...o.capabilitiesTitle})}),Object.entries(E.tools).map(([S,I])=>e.jsx(se,{id:S,checked:I,label:ke(s,S),onChange:z=>{oe(z,"tools")}},S))]}),e.jsxs("div",{className:"flex-col space-y-2",children:[e.jsx("span",{className:"flex font-semibold",children:e.jsx(i,{...o.whoHasAccessTitle})}),Object.entries(E.share_recipient).map(([S,I])=>e.jsx(se,{id:S,checked:I,label:ke(s,S),onChange:z=>{oe(z,"share_recipient")}},S))]})]}),className:"bg-token-main-surface-primary",side:"bottom",withArrow:!1,align:"end",sideOffset:4,wide:!0,interactive:!0,children:e.jsx(us,{className:"cursor-pointer"})}),e.jsx("div",{className:"cursor-pointer",onClick:()=>{ie(!0)},children:e.jsx(Ie,{className:"icon-sm"})}),e.jsx("input",{type:"text",ref:P,placeholder:j.formatMessage(o.filterByNameOrBuilderPlaceholder),className:R("border-none bg-token-main-surface-primary px-0 transition-width duration-300 ease-in-out focus:ring-0",W?"w-64":"w-0"),value:v,onChange:()=>{q(0),h(P.current?.value??"")}}),e.jsx("div",{className:R("cursor-pointer",W?"":"hidden"),onClick:()=>{ie(!1),h(""),q(0)},children:e.jsx(ge,{className:"icon-sm"})}),t&&e.jsx(N,{color:"secondary",onClick:()=>{g(!0)},icon:fe,children:e.jsx(i,{...o.approveAGPTButton})})]})]}),V?e.jsx("div",{className:"mt-8 flex items-center justify-center",children:e.jsx(Z,{})}):e.jsxs("div",{style:{height:pe*85+75},className:"mb-8",children:[M.length>0?e.jsxs(p.Root,{size:"normal",className:"min-w-full overflow-hidden bg-token-main-surface-primary sm:rounded-lg",children:[e.jsxs(p.Header,{children:[e.jsx(p.HeaderCell,{className:"py-2 pr-4 text-left text-xs text-token-text-secondary",children:e.jsx(i,{...o.nameCellTitle})}),e.jsx(p.HeaderCell,{className:"px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsx(i,{...o.builderCellTitle})}),e.jsx(p.HeaderCell,{className:"px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsx(i,{...o.customActionsCellTitle})}),a==w.WORKSPACE&&e.jsx(p.HeaderCell,{className:"px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsx(i,{...o.whoHasAccessTitle})}),a==w.WORKSPACE&&e.jsx(p.HeaderCell,{className:"cursor-pointer px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>{A==="vanity_metrics.num_conversations_str"?D(_==="asc"?"desc":"asc"):(ne("vanity_metrics.num_conversations_str"),D("desc"))},children:[e.jsx("span",{children:e.jsx(i,{...o.chatsCellTitle})}),A==="vanity_metrics.num_conversations_str"&&_==="asc"&&e.jsx(Te,{className:"icon-sm"}),A==="vanity_metrics.num_conversations_str"&&_==="desc"&&e.jsx(je,{className:"icon-sm"})]})}),e.jsx(p.HeaderCell,{className:"cursor-pointer px-4 py-2 text-left text-xs text-token-text-secondary",children:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>{A==="created_at"?D(_==="asc"?"desc":"asc"):(ne("created_at"),D("desc"))},children:[e.jsx("span",{children:a==w.WORKSPACE?e.jsx(i,{...o.createdCellTitle}):e.jsx(i,{...o.approvedCellTitle})}),A==="created_at"&&_==="asc"&&e.jsx(Te,{className:"icon-sm"}),A==="created_at"&&_==="desc"&&e.jsx(je,{className:"icon-sm"})]})}),e.jsx(p.HeaderCell,{className:"w-16"})]}),e.jsx(p.Body,{children:M.map(S=>e.jsx(xs,{account:s,gpt:S,thirdParty:a==w.THIRD_PARTY},S.gizmo.id))})]}):e.jsxs("div",{className:"flex h-full w-full flex-col items-center gap-4 py-16",children:[e.jsx(ze,{className:"h-12 w-12 text-gray-400"}),e.jsx("p",{className:"text-token-text-secondary",children:a==w.THIRD_PARTY?ue?e.jsx(i,{...o.noWorkspaceApprovedGPTsFound}):e.jsx(i,{...o.noWorkspaceApprovedGPTs}):ue?e.jsx(i,{...o.noWorkspaceGPTsFound}):e.jsx(i,{...o.noWorkspaceGPTs})}),a==w.THIRD_PARTY&&e.jsx(N,{color:"secondary",onClick:()=>{g(!0)},icon:fe,children:e.jsx(i,{...o.approveAGPTButton})})]}),b&&e.jsxs("div",{className:"my-4 flex w-full items-center justify-center gap-4 text-token-text-tertiary",children:[e.jsx(Z,{}),e.jsx(i,{...o.stillLoadingData})]}),de>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(Fe,{currentPage:J,onChangeIndex:q,length:Math.max(ce,1)})})]}),e.jsx(ts,{isOpen:T,onClose:()=>{g(!1),Ce.invalidateQueries({queryKey:["workspace",s.id,w.THIRD_PARTY]})},account:s})]})}function ys(s,t){return Ge({queryKey:["workspace",s,"gizmos",t],queryFn:({pageParam:a})=>L.getWorkspaceGPTs(s,t,a),initialPageParam:"",getNextPageParam:a=>a.cursor})}function ks({gizmo:s,account:t}){const a=G(),n={[k.Private]:a.formatMessage(o.shareRecipientTitlePrivate),[k.User]:a.formatMessage(o.shareRecipientTitlePrivate),[k.Group]:a.formatMessage(o.shareRecipientTitlePrivate),[k.Link]:a.formatMessage(o.shareRecipientTitleLink),[k.Marketplace]:a.formatMessage(o.shareRecipientTitlePublic),[k.Workspace]:t.data.name,[k.WorkspaceLink]:t.data.name};if(["private","user","group"].includes(s.gizmo.sharing.recipient)){const{users:l,groups:r}=Ss(s);return l===0&&r===0?e.jsx("span",{className:"text-token-text-secondary",children:e.jsx(i,{...o.shareRecipientTitlePrivate})}):l>0&&r>0?e.jsxs("span",{className:"text-token-text-secondary",children:[n[s.gizmo.share_recipient],e.jsx("br",{}),e.jsx(i,{id:"fQ+tJG",defaultMessage:"Shared with {users} and {groups}",values:{users:a.formatMessage(o.userCount,{numUsers:l}),groups:a.formatMessage(o.groupCount,{numGroups:r})}})]}):l>0?e.jsxs("span",{className:"text-token-text-secondary",children:[n[s.gizmo.share_recipient],e.jsx("br",{}),e.jsx(i,{...o.userCount,values:{numUsers:l}})]}):e.jsxs("span",{className:"text-token-text-secondary",children:[n[s.gizmo.share_recipient],e.jsx("br",{}),e.jsx(i,{...o.groupCount,values:{numGroups:r}})]})}return e.jsx("span",{children:n[s.gizmo.share_recipient]})}function Ss(s){if(s.gizmo.sharing.subjects){const t=s.gizmo.sharing.subjects.filter(n=>n.type===we.USER).length,a=s.gizmo.sharing.subjects.filter(n=>n.type===we.GROUP).length;return{users:t,groups:a}}return{users:0,groups:0}}const o=Q({stillLoadingData:{id:"workspaceSettings.stillLoadingData",defaultMessage:"Don't see what you're looking for? Some GPTs are still loading..."},noWorkspaceGPTs:{id:"workspaceSettings.noWorkspaceGPTs",defaultMessage:"This workspace does not have any GPTs"},noWorkspaceGPTsFound:{id:"workspaceSettings.noWorkspaceGPTsFound",defaultMessage:"No workspace GPTs found"},noWorkspaceApprovedGPTs:{id:"workspaceSettings.noWorkspaceApprovedGPTs",defaultMessage:"You havent approved any third-party GPTs"},noWorkspaceApprovedGPTsFound:{id:"workspaceSettings.noWorkspaceApprovedGPTsFound",defaultMessage:"No approved third-party GPTs found"},workspaceTab:{id:"workspaceSettings.workspaceTab",defaultMessage:"Workspace"},thirdPartyTab:{id:"workspaceSettings.thirdPartyTab",defaultMessage:"Third-party"},capabilitiesTitle:{id:"workspaceSettings.capabilitiesTitle",defaultMessage:"Capabilities"},whoHasAccessTitle:{id:"workspaceSettings.whoHasAccessTitle",defaultMessage:"Who has access"},filterByNameOrBuilderPlaceholder:{id:"workspaceSettings.filterByNameOrBuilderPlaceholder",defaultMessage:"Filter by name or builder..."},nameCellTitle:{id:"workspaceSettings.nameCellTitle",defaultMessage:"Name"},builderCellTitle:{id:"workspaceSettings.builderCellTitle",defaultMessage:"Builder"},customActionsCellTitle:{id:"workspaceSettings.customActionsCellTitle",defaultMessage:"Custom Actions"},chatsCellTitle:{id:"workspaceSettings.chatsCellTitle",defaultMessage:"Chats"},createdCellTitle:{id:"workspaceSettings.createdCellTitle",defaultMessage:"Created"},approvedCellTitle:{id:"workspaceSettings.approvedCellTitle",defaultMessage:"Approved"},approveAGPTButton:{id:"workspaceSettings.approveAGPTButton",defaultMessage:"Approve a GPT"},shareRecipientTitlePrivate:{id:"vyjlzc",defaultMessage:"Invite only"},shareRecipientTitleLink:{id:"workspaceSettings.shareRecipientTitleLink",defaultMessage:"Link"},shareRecipientTitlePublic:{id:"workspaceSettings.shareRecipientTitlePublic",defaultMessage:"Public"},changeAccess:{id:"workspaceSettings.changeAccess",defaultMessage:"Change who has access"},changeOwner:{id:"workspaceSettings.changeOwner",defaultMessage:"Change Owner"},deleteGPT:{id:"workspaceSettings.deleteGPT",defaultMessage:"Delete GPT"},removeFromWorkspace:{id:"workspaceSettings.removeFromWorkspace",defaultMessage:"Remove from workspace"},userCount:{id:"P1xo2B",defaultMessage:"{numUsers, plural, one {# user} other {# users}}"},groupCount:{id:"4zRUED",defaultMessage:"{numGroups, plural, one {# group} other {# groups}}"}});function K({title:s,description:t,children:a,upsellEnterprise:n=!1,className:l=""}){return e.jsx(Le,{label:e.jsx(i,{...u.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!n,className:"max-w-5xl",children:e.jsxs(rs,{className:R(n&&"text-token-text-tertiary","max-w-4xl",l),children:[e.jsxs(os,{className:"flex items-center gap-3",children:[e.jsx(i,{...s}),n&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(i,{...u.enterpriseUpsellPill})})]}),t&&e.jsx(cs,{className:"py-2 text-token-text-secondary",children:e.jsx(i,{...t})}),a]})})}function Ps({workspaceId:s,label:t,setting:a,defaultValue:n,values:l,disabled:r=!1}){const c=G(),x=ae(),f=H(),{variables:j,mutate:T}=te({mutationFn:({setting:g,value:d})=>L.setWorkspaceShareSetting(s,g,d),onSettled:()=>{f.invalidateQueries({queryKey:["workspace-settings"]}),f.invalidateQueries({queryKey:["workspace"]})},onError:()=>{x.danger(c.formatMessage(u.featureSettingsUpdateFailed))}});return e.jsxs(ds,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(i,{...t})}),e.jsxs(y.Root,{defaultValue:j?.value??n,onValueChange:g=>{T({setting:a,value:g})},disabled:r,children:[e.jsxs(y.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(y.Value,{}),e.jsx(y.Icon,{})]}),e.jsx(y.Portal,{children:e.jsx(y.Content,{children:l.map((g,d)=>e.jsx(y.Item,{className:"text-md",value:g.value,children:e.jsx(i,{...g.display})},d))})})]})]})}function vs({workspaceId:s,value:t,upsellEnterprise:a=!1}){const n=G(),l=ae(),r=H(),{variables:c,mutate:x}=te({mutationFn:({value:f})=>L.setWorkspaceThirdPartyGPTSetting(s,f),onSettled:()=>{r.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{l.danger(n.formatMessage(u.featureSettingsUpdateFailed))}});return e.jsxs(y.Root,{defaultValue:c?.value??t,onValueChange:f=>{x({value:f})},children:[e.jsxs(y.Trigger,{className:"border border-token-border-light text-base focus-visible:border-token-border-light",children:[e.jsx(y.Value,{}),e.jsx(y.Icon,{})]}),e.jsx(y.Portal,{children:e.jsxs(y.Content,{children:[e.jsx(y.Item,{className:"text-base",value:Y.ALLOW_ALL,children:e.jsx(i,{...u.allowAllOption})}),!a&&e.jsx(y.Item,{className:"text-base",value:Y.ALLOW_SPECIFIC,children:e.jsx(i,{...u.ownerApprovedOnlyOption})}),e.jsx(y.Item,{className:"text-base",value:Y.ALLOW_NONE,children:e.jsx(i,{...u.dontAllowOption})})]})})]})}function Ms({workspaceId:s,data:t}){const a=G(),n=ae(),l=_e(),r=H(),[c,x]=m.useState([]),{value:f}=Re("3298726333"),j=te({mutationFn:({value:h})=>L.setWorkspaceCustomActionsDomains(s,h),onSettled:()=>{r.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{n.danger(a.formatMessage(u.featureSettingsUpdateFailed))}}),T=De(),g=T?.includes(xe.SearchTool)&&!T?.includes(xe.SearchToolHoldout);if(l==null)return null;const d=l.isTeam(),b=e.jsx(K,{title:u.thirdPartyGPTsTitle,description:u.thirdPartyGPTsDescription,className:"border-b border-token-border-light pb-4",children:e.jsx("div",{children:e.jsx(vs,{workspaceId:s,value:t.allow_third_party_gpts,upsellEnterprise:d})})}),P=e.jsx(K,{title:u.sidebarTitle,children:e.jsx(ws,{account:l,showThirdParty:!d&&t.allow_third_party_gpts===Y.ALLOW_SPECIFIC})}),v=t.allowed_custom_actions_domains!=null||t.beta_settings.workspace_gpt_custom_actions===!1;return e.jsxs(ns,{className:"max-w-5xl",children:[d&&b,d&&l.isOwnerOfAccount()&&P,d&&e.jsx(ls,{}),e.jsx(K,{title:u.sharingSettingsTitle,upsellEnterprise:d,children:e.jsx(Se,{children:e.jsx(Ps,{workspaceId:s,label:u.gptSharingTitle,disabled:d,setting:Ee.GPT_SHARE_SETTINGS,defaultValue:t.share_settings.gpt_share_setting,values:[{display:u.anyOneSelect,value:X.ANYONE},{display:u.workspaceMembersOnlySelect,value:X.WORKSPACE_ONLY},{display:u.inviteOnlySelect,value:X.NO_ONE}]})})}),e.jsx(K,{title:u.workspaceGPTsTitle,description:u.workspaceGPTsDescription,upsellEnterprise:d,children:e.jsxs(Se,{children:[e.jsx(ye,{label:g?u.searchOptionTitle:u.browseOptionTitle,feature:he.BROWSING,value:t.beta_settings.browsing,workspaceId:s,tooltip:g?u.searchTooltip:u.browseTooltip,disabled:d}),f?e.jsxs("div",{className:"flex flex-col gap-4 py-6",children:[e.jsx("div",{className:"text-xl font-semibold",children:e.jsx(i,{id:"ugI3Yt",defaultMessage:"GPT actions"})}),e.jsx("div",{className:"py-2 text-sm text-token-text-secondary",children:e.jsx(i,{id:"HY2eof",defaultMessage:"GPT actions allow GPTs to call third-party APIs for tasks such as retrieving or modifying data. GPT actions are defined by GPT builders, and you can limit the domains that can be used for GPTs created in your workspace."})}),e.jsxs("div",{className:"flex flex-row items-center gap-4",children:[e.jsx(se,{checked:!v,id:"allow-all-domains",onChange:h=>{h.currentTarget.checked?(x(t.allowed_custom_actions_domains),j.mutate({value:null})):j.mutate({value:c??[]})},label:e.jsxs("span",{className:"flex flex-row items-center",children:[e.jsx(i,{id:"WnWoqJ",defaultMessage:"Allow all domains for GPT actions"}),e.jsx(Me,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(i,{id:"KjJtEm",defaultMessage:"Limit the Internet domains that can be used by GPTs created in your workspace. This does not apply to third-party GPTs."}),side:"top",children:e.jsx(es,{})})]})}),j.isPending&&e.jsx(Z,{})]}),v&&e.jsx(ps,{value:t.allowed_custom_actions_domains??[],title:a.formatMessage({id:"YetDcq",defaultMessage:"Domains"}),onChange:h=>{j.mutate({value:h})},emptyMessage:a.formatMessage({id:"rFH4IP",defaultMessage:"No domains added. No GPT actions will be allowed."})})]}):e.jsx(ye,{label:u.customActionsOptionTitle,feature:he.WORKSPACE_GPT_CUSTOM_ACTIONS,value:t.beta_settings.workspace_gpt_custom_actions,workspaceId:s,tooltip:u.customActionsTooltip,disabled:d})]})}),!d&&b,!d&&l.isOwnerOfAccount()&&P]})}function bs({currentWorkspaceId:s}){const{data:t,isLoading:a}=Ae(s),n=G();return e.jsxs(e.Fragment,{children:[e.jsx(Ye,{children:e.jsx("title",{children:n.formatMessage(u.sidebarTitle)})}),e.jsx(Je,{title:n.formatMessage(u.sidebarTitle)}),e.jsx($e,{showSpinner:a,children:t===void 0?null:e.jsx(Ms,{workspaceId:s,data:t})})]})}const u=Q({sidebarTitle:{id:"workspaceSettingsOld.sidebarTitle",defaultMessage:"GPTs"},allowAllOption:{id:"workspaceSettingsOld.allowAllOption",defaultMessage:"Allow all"},ownerApprovedOnlyOption:{id:"workspaceSettingsOld.ownerApprovedOnlyOption",defaultMessage:"Owner-approved only"},dontAllowOption:{id:"workspaceSettingsOld.dontAllowOption",defaultMessage:"Don't allow"},retentionPolicyTitle:{id:"workspaceSettingsOld.retentionPolicyTitle",defaultMessage:"Retention policy"},thirdPartyGPTsTitle:{id:"workspaceSettingsOld.thirdPartyGPTsTitle",defaultMessage:"Third-party"},thirdPartyGPTsDescription:{id:"workspaceSettingsOld.thirdPartyGPTsDescription",defaultMessage:"Manage whether members can use GPTs created outside your workspace."},customActionsTooltip:{id:"workspaceSettingsOld.customActionsTooltip",defaultMessage:"Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders."},browseTooltip:{id:"workspaceSettingsOld.browseTooltip",defaultMessage:"Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events."},searchTooltip:{id:"workspaceSettingsOld.searchTooltip",defaultMessage:"Web search allows ChatGPT and GPTs to answer questions on recent topics. When enabled, it may send search queries and general location information to Bing, but this data is not linked to or associated with user accounts."},customActionsOptionTitle:{id:"workspaceSettingsOld.pluginsOptionTitle.0",defaultMessage:"Custom actions"},browseOptionTitle:{id:"workspaceSettingsOld.browseOptionTitle",defaultMessage:"Browsing with Bing"},searchOptionTitle:{id:"workspaceSettingsOld.searchOptionTitle",defaultMessage:"Web Search"},workspaceGPTsTitle:{id:"workspaceSettingsOld.workspaceGPTsTitle",defaultMessage:"Workspace"},appearanceTitle:{id:"workspaceSettingsOld.appearanceTitle",defaultMessage:"Appearance"},sharingSettingsTitle:{id:"workspaceSettingsOld.sharingSettingsTitle",defaultMessage:"Sharing"},gptSharingTitle:{id:"workspaceSettingsOld.gptSharingTitle",defaultMessage:"GPTs can be shared with..."},chatSharingTitle:{id:"workspaceSettingsOld.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceMembersOnlySelect:{id:"workspaceSettingsOld.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},anyOneSelect:{id:"workspaceSettingsOld.anyOneSelect",defaultMessage:"Anyone"},noOneSelect:{id:"workspaceSettingsOld.noOneSelect",defaultMessage:"No one"},inviteOnlySelect:{id:"workspaceSettingsOld.inviteOnlySelect",defaultMessage:"Invite only"},featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettingsOld.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettingsOld.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettingsOld.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettingsOld.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettingsOld.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettingsOld.retentionChange",defaultMessage:"Contact your account manager to change this setting."},workspaceGPTsDescription:{id:"workspaceSettingsOld.workspaceGPTsDescription",defaultMessage:"Manage which capabilities are available for GPTs built in your workspace or by ChatGPT. This does not apply to third-party GPTs."},enterpriseUpsellPill:{id:"workspaceSettingsOld.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettingsOld.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettingsOld.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},shareRecipientTitlePrivate:{id:"workspaceSettingsOld.shareRecipientTitlePrivate",defaultMessage:"Private"},shareRecipientTitleLink:{id:"workspaceSettingsOld.shareRecipientTitleLink",defaultMessage:"Link"},shareRecipientTitlePublic:{id:"workspaceSettingsOld.shareRecipientTitlePublic",defaultMessage:"Public"}});function nt(){const s=Xe();return Ze(),e.jsx(bs,{...s})}export{nt as default};
//# sourceMappingURL=dudf0wlaxgo8uuiv.js.map
