const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/h5rj9zj38tkr3i20.js","assets/du9ygo55hccsm0ec.js","assets/ibjw18ivx5tw615x.js","assets/root-d4voymz4.css","assets/23yqn56dfa53achp.js","assets/hc0go6t8u8it292j.js","assets/conversation-small-cll5buey.css","assets/ndpe1ojbx7c3v18s.js","assets/m7ykldedawewofy8.js","assets/kl23pvq05rxrgvth.js","assets/kwyhm54wtm4zbkpo.js"])))=>i.map(i=>d[i]);
import{y as e,O as g,a9 as D,r as v,D as L,a1 as o,a6 as y,Z as T,$ as R,W as p,P as z,b as N,bq as E,ar as P,aw as F,j as w,ey as B,bx as U,av as G,bA as M,da as d,c3 as O}from"./du9ygo55hccsm0ec.js";import{a as H,G as j,U as I}from"./156t2vs0ziqy5ta8.js";import{K as q,bu as K,H as $,a1 as k,bB as Q,f as W}from"./hc0go6t8u8it292j.js";import{D as J,B as Y}from"./23yqn56dfa53achp.js";import{K as V,b1 as Z,G as X,ag as ee,aD as C,P as S}from"./ibjw18ivx5tw615x.js";import{G as se}from"./itr9kuli5zrjmpey.js";import{G as te}from"./igmk8bhhl98b6n5v.js";import{A as ae,f as _,a as ie,B as re}from"./ndpe1ojbx7c3v18s.js";import{G as oe}from"./focy1c95cgqmv4o7.js";import{m as ne}from"./kl23pvq05rxrgvth.js";function le({resource:s,grayedOut:a,className:i}){const r=s.gizmo.vanity_metrics?.num_conversations_str;return e.jsxs("div",{className:g("flex w-full flex-grow items-center gap-4 overflow-hidden",i),children:[e.jsx(te,{isFirstParty:!!s.gizmo.tags?.includes(q.FirstParty),src:s.gizmo.display.profile_picture_url??void 0,className:g("h-12 w-12 flex-shrink-0",a&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"overflow-hidden text-ellipsis break-words",children:[e.jsx("span",{className:"line-clamp-2 text-sm font-semibold leading-tight",children:s.gizmo.display.name}),e.jsx("span",{className:"line-clamp-3 text-xs",children:s.gizmo.display.description}),e.jsxs("div",{className:"mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",children:[e.jsx(se,{gizmo:s,className:"text-xs",hideLink:!0}),r&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-[8px]",children:"•"}),e.jsx(V,{className:"h-3 w-3"}),r]})]})]})]})}function ce({gizmoResource:s}){const a=D(),[i,r]=v.useState(!1);return s.gizmo.share_recipient===K.Private?null:e.jsx(J.Item,{onClick:async t=>{t.stopPropagation(),t.preventDefault();try{const l=s.gizmo.short_url?ae(s.gizmo.short_url):`https://chatgpt.com${_(s)}`;await $(l,a,t),r(!0),setTimeout(()=>{r(!1)},2e3)}catch(l){L.addError(l);return}},icon:Z,children:i?e.jsx(o,{...b.copiedURL}):e.jsx(o,{...b.copyLink})})}const b=y({copyLink:{defaultMessage:"Copy link",id:"GizmoInformation.copyLink"},copiedURL:{defaultMessage:"Copied URL",id:"GizmoInformation.copiedURL"}}),de=T(()=>R(()=>import("./h5rj9zj38tkr3i20.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(s=>s.GizmoKeepInSidebarMenuItem)),me=4,f=p.div`font-bold mt-6`,ue=s=>w({queryFn:async()=>k.getAbout(s),queryKey:["gizmo","about",{gizmoId:s}]}),xe=s=>w({queryFn:async()=>k.getCreatorSlice({creatorId:s}),queryKey:["gizmo","creator",{creatorId:s}],enabled:s!=null}),ge=s=>{switch(s.type){case d.BROWSER:return{title:n.browsing};case d.PYTHON:return{title:n.dataAnalysis};case d.DALLE:return{title:n.dalle};case d.MEMORY:return{title:n.memory,description:n.memoryDescription};case d.JIT_PLUGIN:return{title:n.actions,description:n.actionsDescription};default:return null}},pe=({tools:s})=>{const a=B(U.SearchTool),i=Q(s??[],t=>t.type);var r=W(i.map(ge).filter(t=>t!=null)??[]);return r.length===0?null:(a&&(r=r.map(t=>t.title===n.browsing?{title:n.search}:t)),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(f,{className:"mb-2",children:e.jsx(o,{id:"gizmo.about.capabilitiesHeader",defaultMessage:"Capabilities"})}),r.map(t=>e.jsxs("div",{className:"flex flex-row items-start gap-2 py-1 text-sm",children:[e.jsx(X,{className:"icon-sm mt-0.5 text-green-600"}),e.jsxs("div",{children:[e.jsx(o,{...t.title}),t.description!=null&&e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(o,{...t.description})})]})]},t.title.id))]}))},m=p.div`flex flex-col justify-center items-center gap-2 border-l border-token-border-heavy first:border-0 w-48 mt-4 px-2`,u=p.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`,x=p.div`text-xs text-token-text-tertiary`,fe=({gizmoResource:s})=>e.jsxs(Y,{contentAlign:"end",sideOffset:4,triggerButton:e.jsx(G,{color:"ghost",icon:ee}),children:[e.jsx(de,{gizmoResource:s}),e.jsx(ce,{gizmoResource:s})]}),he=({aboutBlock:s})=>{switch(s.type){case"generic_title_subtitle":return e.jsxs(m,{children:[e.jsx(u,{children:s.title}),e.jsx(x,{children:s.subtitle})]});case"rating":return e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx(C,{className:"icon-sm"}),s.avg]}),e.jsx(x,{children:s.count_str})]});case"category":return s.category_ranking!=null?e.jsxs(m,{children:[e.jsx(u,{children:e.jsx(o,{id:"gizmo.about.trendingRank",defaultMessage:"#{rank}",values:{rank:s.category_ranking}})}),e.jsx(x,{children:e.jsx(o,{id:"gizmo.about.inCategory",defaultMessage:"in {category} {locale}",values:{category:s.category_str,locale:s.category_locale_str??""}})})]}):e.jsxs(m,{children:[e.jsx(u,{children:s.category_str}),e.jsx(x,{children:e.jsx(o,{id:"gizmo.about.category",defaultMessage:"Category"})})]})}},je=({blocks:s})=>e.jsx("div",{className:"flex justify-center",children:s.map(a=>e.jsx(he,{aboutBlock:a},a.type))}),be=({href:s,onClick:a,children:i})=>e.jsx(ne.div,{whileTap:{scale:.98},className:"flex",children:e.jsxs(O,{to:s,onClick:a,className:g("group relative ml-2 h-14 flex-grow rounded-xl border border-token-border-medium bg-token-main-surface-primary px-4 hover:bg-token-main-surface-secondary focus:outline-none"),children:[e.jsx("div",{className:"flex h-full items-center",children:e.jsx("div",{className:"line-clamp-2 text-sm",children:i})}),e.jsx("div",{className:"absolute -bottom-px -left-2 h-3 w-4 border-b border-token-border-medium bg-token-main-surface-primary group-hover:bg-token-main-surface-secondary",children:e.jsx("div",{className:"h-3 w-2 rounded-br-full border-b border-r border-token-border-medium bg-token-main-surface-primary"})}),e.jsx("div",{className:"absolute bottom-0 right-2 top-0 hidden items-center group-hover:flex",children:e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-token-main-surface-primary",children:e.jsx(S,{className:"icon-md text-token-text-primary"})})})]})}),ve=({gizmo:s,onClose:a})=>{const i=M("1825130190").value,r=s.gizmo.display.prompt_starters?.slice(0,me);return r==null||r.length===0||!i?null:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(f,{children:e.jsx(o,{id:"gizmo.about.conversationStartersHeader",defaultMessage:"Conversation Starters"})}),e.jsx("div",{className:"mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2",children:r.map((t,l)=>e.jsx(ye,{gizmo:s,prompt:t,onClick:a},l))})]})};function ye(s){const{gizmo:a,prompt:i,onClick:r}=s,t=re(a,i);return e.jsx(be,{href:t?.toString()??"#",onClick:r,children:i})}const ze=({reviewStats:s})=>M("1825130190").value?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(f,{children:e.jsx(o,{id:"gizmo.about.ratingsHeader",defaultMessage:"Ratings"})})}),s!=null?[5,4,3,2,1].map(i=>e.jsxs("div",{className:"flex flex-row items-center gap-2 py-1 text-xl font-semibold",children:[e.jsxs("div",{className:"icon-lg relative",children:[e.jsx(C,{className:"icon-lg text-green-500"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-[11px] text-white",children:i})]}),e.jsx("div",{className:"h-2.5 flex-grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700",children:e.jsx("div",{className:"h-full bg-green-500",style:{width:`${(s?.by_rating[i-1]??0)*100}%`}})})]},i)):e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(o,{id:"gizmo.about.ratings.notEnoughRatings",defaultMessage:"Not enough ratings yet"})})]}):null,Re=({gizmoId:s,creatorId:a})=>{const i=H(j.GPTDetails),r=()=>I.closeModal(j.GPTDetails);return i?e.jsx(Ne,{gizmoId:s,creatorId:a,onClose:r}):null},Ne=({gizmoId:s,creatorId:a,onClose:i,children:r})=>{const t=ue(s),{data:l}=xe(a),A=t.data?.gizmo,h=ie(s),c=h?.data;return v.useEffect(()=>{z.logEvent(N.showDetailModal,{gizmo_id:s})},[s]),e.jsx(E,{isOpen:!0,onClose:i,type:"success",hideSeparator:!0,showCloseButton:!0,noPadding:!0,className:"flex h-[calc(100vh-25rem)] min-h-[80vh] max-w-xl flex-col",children:e.jsx("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden px-2 py-4",children:t.isLoading||h.isLoading?e.jsx("div",{className:"flex h-40 items-center justify-center pb-10",children:e.jsx(P,{})}):A==null||c==null||t.data==null?e.jsx("div",{className:"flex flex-col gap-4 pb-10",children:e.jsx(o,{id:"gizmo.about.notFound",defaultMessage:"GPT not found"})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex flex-grow flex-col gap-4 overflow-y-auto px-6 pb-20 pt-16",children:[e.jsx("div",{className:"absolute top-0",children:e.jsxs("div",{className:"fixed left-4 right-4 z-10 flex items-center justify-end bg-gradient-to-b from-token-main-surface-primary to-transparent pb-2",children:[c&&e.jsx(fe,{gizmoResource:c}),e.jsx(F,{onClick:i})]})}),e.jsx("div",{className:"absolute bottom-[64px]",children:e.jsx("div",{className:"fixed left-4 right-4 z-10 flex min-h-[64px] items-end bg-gradient-to-t from-token-main-surface-primary to-transparent px-2",children:r})}),e.jsx(oe,{gizmo:c,className:"!h-fit",avatarClassName:"!h-20 !w-20"}),e.jsx(je,{blocks:t.data.about_blocks}),e.jsx(ve,{gizmo:c,onClose:i}),e.jsx(pe,{tools:c.tools}),e.jsx(ze,{reviewStats:t.data.review_stats}),l&&e.jsx(we,{gizmos:l.items})]})})})})};function we({gizmos:s}){return s.length>0?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(f,{children:e.jsx(o,{id:"gizmo.about.moreByHeader",defaultMessage:"More by {creatorName}",values:{creatorName:s[0].gizmo.author.display_name}})})}),e.jsx("div",{className:g("no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden"),children:s&&s.map(a=>e.jsx("a",{onClick:()=>{z.logEvent(N.detailClickGizmo,{gizmo_id:a.gizmo.id})},href:_(a),className:"h-fit min-w-fit rounded-xl bg-token-main-surface-secondary px-1 py-4 md:px-3 md:py-4 lg:px-3",children:e.jsx(le,{resource:a})},a.gizmo.id))})]}):null}const Ee=s=>e.jsx("div",{className:"flex flex-grow flex-col items-center",children:e.jsxs(G,{color:"primary",className:"h-12 w-full",icon:S,...s,children:[e.jsx(o,{id:"gizmo.about.startChat",defaultMessage:"Start Chat"}),s.children]})}),n=y({browsing:{id:"gizmo.about.tools.browsing",defaultMessage:"Browsing"},search:{id:"gizmo.about.tools.search",defaultMessage:"Web Search"},dataAnalysis:{id:"gizmo.about.tools.dataAnalysis",defaultMessage:"Code Interpreter & Data Analysis"},dalle:{id:"gizmo.about.tools.dalle",defaultMessage:"DALL·E Images"},memory:{id:"gizmo.about.tools.memory",defaultMessage:"Memory"},actions:{id:"gizmo.about.tools.actions",defaultMessage:"Actions"},actionsDescription:{id:"gizmo.about.tools.actionsDescription",defaultMessage:"Retrieves or takes actions outside of ChatGPT"},memoryDescription:{id:"gizmo.about.tools.memoryDescription",defaultMessage:"Learns from previous chats to improve future conversations"}});export{Ne as G,Ee as a,le as b,Re as c,ce as d};
//# sourceMappingURL=h4zw348iayrmnaf8.js.map
