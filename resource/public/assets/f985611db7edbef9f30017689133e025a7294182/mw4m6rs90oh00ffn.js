import{t as e,K as f,a0 as n,am as G,V as _,W as R,a as B,r as b,P as v,d as N,u as I,j as D,bq as F,a8 as q,h as z,av as A}from"./bzvcy3tl84gc3bl9.js";import{cW as T,cX as H,cY as P,cZ as Q,c_ as W,R as m,c$ as O,d0 as Y,C as K,d1 as V}from"./moittmkqym6x2q8u.js";import{D as h}from"./d52s2bg30rsaqcut.js";import{aQ as X,O as Z,af as $}from"./o4htpc5iqra16abg.js";import{G as J}from"./m8du01a31yeowgq0.js";import{m as ee}from"./d6ri6s3v2tbmwdon.js";const se=91,C=100;function k(s){return s<C?"bg-[#fcf6e0] text-yellow-500 dark:bg-yellow-600 dark:text-yellow-100":"bg-orange-100 text-[#f48c15] dark:bg-orange-800 dark:text-orange-100"}function S(s){return H()&&s!=null&&s>=se}function te({memoryFullPct:s,className:r,children:o}){return S(s)?e.jsx("div",{className:f("rounded-lg border border-token-border-light p-1 text-sm",r),children:e.jsxs(ee.div,{className:f("flex items-center overflow-hidden whitespace-nowrap rounded px-2 py-1.5",k(s)),initial:{width:0},animate:{width:`${s}%`},transition:{duration:.5},children:[e.jsx(n,{id:"6D2etG",defaultMessage:"{memoryFullPct}% full",values:{memoryFullPct:s}}),o]})}):null}function ue({memoryFullPct:s}){return S(s)?e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:f("relative -mr-1 h-2 w-2 rotate-45 transform border-white/10",k(s))}),e.jsxs("div",{className:f("flex items-center rounded-lg px-3 py-1.5",k(s)),children:[e.jsx(n,{id:"x7M6HK",defaultMessage:"{memoryFullPct}%",values:{memoryFullPct:s}}),e.jsx(G,{label:s<C?e.jsx(n,{id:"VXohcH",defaultMessage:"Memory is almost full. Once memory is full, new memories won’t be created. You can forget existing memories to make space."}):e.jsx(n,{id:"pQ9dnt",defaultMessage:"Memory is full. New memories won’t be created. You can forget existing memories to make space."}),children:e.jsx(X,{className:"icon-sm ml-1 text-token-text-secondary"})})]})]}):null}function ae({memoryFullPct:s,className:r}){return S(s)?e.jsxs("div",{className:f("flex flex-col gap-2",r),children:[e.jsx(te,{memoryFullPct:s}),e.jsx("div",{className:"pl-3 text-sm text-token-text-secondary",children:s<C?e.jsx(n,{id:"z3LYM2",defaultMessage:"<strong>Memory almost full</strong>. Once memory is full, new memories won’t be created. You can forget existing memories to make space. <a>Learn more</a>.",values:{strong:a=>e.jsx("strong",{children:a}),a:a=>e.jsx("a",{href:T,target:"_blank",rel:"noopener noreferrer",className:"underline",children:a})}}):e.jsx(n,{id:"6rc4Jv",defaultMessage:"<strong>Memory is full</strong>. New memories won’t be created. You can forget existing memories to make space. <a>Learn more</a>.",values:{strong:a=>e.jsx("strong",{children:a}),a:a=>e.jsx("a",{href:T,target:"_blank",rel:"noopener noreferrer",className:"underline",children:a})}})})]}):null}function re({gizmo:s,memory:r}){const o=R(),a=q(),l=B(),{mutate:t,isPending:M}=z({mutationFn:u=>D.deleteMemory(u,s?.id),onSettled:()=>{l.invalidateQueries({queryKey:O(s?.id)})},onError:()=>{a.danger(o.formatMessage({id:"MemoriesModal.deleteFailed",defaultMessage:"Failed to forget memory"}),{id:"memoryDeleteFailed"})}}),[j,d]=b.useState(!1),c=o.formatMessage({id:"z2CNgB",defaultMessage:"Forget"});return e.jsxs(e.Fragment,{children:[e.jsxs(m.Row,{disabled:M,children:[e.jsx(m.Cell,{children:e.jsx("div",{className:"whitespace-pre-wrap py-2",children:r.content})}),e.jsx(m.Cell,{textAlign:"right",children:e.jsx(m.Actions,{children:e.jsx("button",{onClick:()=>{v.logEvent(N.memoryModalMemoryDeleteClicked),d(!0)},"aria-label":c,className:"text-token-text-tertiary hover:text-token-text-secondary",children:e.jsx(G,{className:"leading-none",label:c,sideOffset:4,side:"top",children:e.jsx(Z,{className:"icon-sm"})})})})})]}),j&&e.jsx(K,{isOpen:!0,primaryButtonColor:"danger",title:c,confirmText:o.formatMessage({id:"fCn0ar",defaultMessage:"Forget"}),onConfirm:()=>{v.logEvent(N.memoryModalMemoryDeleteConfirmed),t(r.id),d(!1)},onClose:()=>{d(!1)},children:e.jsx(n,{id:"pZ/TCe",defaultMessage:'{name} will forget "{title}". This cannot be undone. <link>Learn more</link>',values:{name:s?.name??"ChatGPT",title:e.jsx("strong",{children:V(r.content,{length:130,omission:"..."})}),link:u=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-faq#h_41527f643d",target:"_blank",className:"underline",rel:"noreferrer",children:u})}})})]})}function ne({selectedGizmoId:s,onSelect:r,items:o}){const a=o.find(t=>t.id===s);function l(t){return e.jsx(J,{isFirstParty:t.id===void 0,src:t.iconUrl??null,className:"icon-md"})}return e.jsx("div",{className:"mb-2 inline-flex rounded-md border border-token-border-medium",children:e.jsxs(h.Root,{children:[e.jsx(h.Trigger,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[a?e.jsxs(e.Fragment,{children:[l(a),e.jsx("span",{className:"text-token-text-primary",children:a?.name})]}):e.jsx(n,{id:"MemoriesModal.unknownGizmo",defaultMessage:"Unknown GPT"}),e.jsx($,{className:"icon-sm text-token-text-tertiary"})]})}),e.jsx(h.Portal,{children:e.jsx(h.Content,{children:o.map(t=>e.jsxs(h.Item,{className:"flex items-center gap-3",onClick:()=>{r(t.id)},children:[l(t),t.name]},t.id))})})]})})}const w=_.div`flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-light`;function xe({onClose:s,initialGizmoId:r}){const o=R(),a=B(),l=P(),[t,M]=b.useState(r),j=Q();b.useEffect(()=>{v.logEvent(N.memoryModalShown)},[]);const{data:d,isLoading:c,isError:u,refetch:E}=W(t,!0,l),y=d?.memories,{data:U,refetch:L}=I({queryKey:["memory_gizmos"],queryFn:()=>D.getGizmosWithMemory(),refetchOnMount:"always"}),p=[{id:void 0,name:"ChatGPT",iconUrl:null},...U?.items?.map(({gizmo:i})=>({id:i.id,name:i.display.name,iconUrl:i.display.profile_picture_url}))??[]],x=p.find(i=>i.id===t);let g;return c?g=e.jsx(w,{children:e.jsx(n,{id:"MemoriesModal.loading",defaultMessage:"Loading..."})}):u?g=e.jsx(w,{children:e.jsxs("div",{className:"max-w-sm text-center",children:[e.jsx("div",{className:"mb-4 text-red-500",children:e.jsx(n,{id:"MemoriesModal.somethingWentWrong",defaultMessage:"Something went wrong..."})}),e.jsx("div",{children:e.jsx(A,{color:"secondary",onClick:()=>{E()},children:e.jsx(n,{id:"MemoriesModal.retry",defaultMessage:"Retry"})})})]})}):!y||y.length===0?g=e.jsx(w,{children:e.jsx("div",{className:"max-w-sm text-center",children:l?e.jsx(n,{id:"MemoriesModal.noMemories.1",defaultMessage:"As you chat with {name}, the details and preferences it remembers will be shown here.",values:{name:x?.name??"ChatGPT"}}):e.jsx(n,{id:"MemoriesModal.noMemoriesAndDisabled",defaultMessage:"Memory is disabled. ChatGPT won't use or create memories."})})}):g=e.jsx(m.Root,{className:"h-full",size:"compact",bordered:!0,children:e.jsx(m.Body,{children:y.map(i=>e.jsx(re,{gizmo:x?{id:x.id,name:x.name}:void 0,memory:i},i.id))})}),e.jsxs(F,{isOpen:!0,onClose:s,size:"custom",className:"max-w-5xl",type:"success",title:o.formatMessage({id:"MemoriesModal.title",defaultMessage:"Memory"}),showCloseButton:!0,children:[j&&p.length>1&&e.jsx("div",{className:"mb-4",children:e.jsx(ne,{selectedGizmoId:t,items:p,onSelect:i=>{a.invalidateQueries({queryKey:O(i)}),M(i)}})}),e.jsx(ae,{memoryFullPct:d?.memoryFullPct,className:"mb-5"}),e.jsx("div",{className:"h-[24rem]",children:g}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx(Y,{onReset:()=>{E(),L(),t&&M(void 0)},gizmoId:t,memoryName:x?.name??"ChatGPT"})})]})}export{ue as M,xe as a};
//# sourceMappingURL=mw4m6rs90oh00ffn.js.map
