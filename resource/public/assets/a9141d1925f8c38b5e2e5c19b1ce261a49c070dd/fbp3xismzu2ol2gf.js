const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/omh7yh5r7uvfoy42.js","assets/e9yuj0ll30e3kmlx.js","assets/mhi0wfvgf6n45t1b.js","assets/root-g1i0dm9m.css","assets/ihoxwwe79kyl4jef.js","assets/conversation-small-o3h1ik6j.css"])))=>i.map(i=>d[i]);
import{j as e,ak as g,K as D,r as y,aW as T,D as R,aB as n,I as z,ao as E,ap as P,ar as p,P as N,d as w,bz as F,bv as U,ba as B,l as k,aQ as I,aK as j,dP as O,aF as G,u as M,c9 as d,cU as H}from"./e9yuj0ll30e3kmlx.js";import{cn as q,bJ as K,cp as W,aD as Q,e5 as $,aH as C,dj as J,n as Y,o as b,az as V,cW as S,bC as X,b6 as Z,e6 as ee,U as se}from"./ihoxwwe79kyl4jef.js";import{A as te,aW as ae,r as ie,L as re,O as _,F as A}from"./mhi0wfvgf6n45t1b.js";import{G as oe}from"./hctu73tqgw9pngv7.js";import{m as ne}from"./ogeaiwpkr6sm1oz0.js";function le({resource:s,grayedOut:t,className:a}){const o=s.gizmo.vanity_metrics?.num_conversations_str;return e.jsxs("div",{className:g("flex w-full flex-grow items-center gap-4 overflow-hidden",a),children:[e.jsx(q,{isFirstParty:!!s.gizmo.tags?.includes(K.FirstParty),src:s.gizmo.display.profile_picture_url??void 0,className:g("h-12 w-12 flex-shrink-0",t&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"overflow-hidden text-ellipsis break-words",children:[e.jsx("span",{className:"line-clamp-2 text-sm font-semibold leading-tight",children:s.gizmo.display.name}),e.jsx("span",{className:"line-clamp-3 text-xs",children:s.gizmo.display.description}),e.jsxs("div",{className:"mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",children:[e.jsx(W,{gizmo:s,className:"text-xs",hideLink:!0}),o&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-[8px]",children:"•"}),e.jsx(te,{className:"h-3 w-3"}),o]})]})]})]})}function ce({gizmoResource:s}){const t=D(),[a,o]=y.useState(!1);return s.gizmo.share_recipient===Q.Private?null:e.jsx(T.Item,{onClick:async r=>{r.stopPropagation(),r.preventDefault();try{const i=s.gizmo.short_url?$(s.gizmo.short_url):window.location.origin+`${C(s)}`;await J(i,t,r),o(!0),setTimeout(()=>{o(!1)},2e3)}catch(i){R.addError(i);return}},icon:ae,children:a?e.jsx(n,{...v.copiedURL}):e.jsx(n,{...v.copyLink})})}const v=z({copyLink:{defaultMessage:"Copy link",id:"GizmoInformation.copyLink"},copiedURL:{defaultMessage:"Copied URL",id:"GizmoInformation.copiedURL"}}),de=E(()=>P(()=>import("./omh7yh5r7uvfoy42.js"),__vite__mapDeps([0,1,2,3,4,5])).then(s=>s.GizmoKeepInSidebarMenuItem)),me=4,h=p.div`font-bold mt-6`,ue=s=>k({queryFn:async()=>S.getAbout(s),queryKey:["gizmo","about",{gizmoId:s}]}),xe=s=>k({queryFn:async()=>S.getCreatorSlice({creatorId:s}),queryKey:["gizmo","creator",{creatorId:s}],enabled:s!=null}),ge=s=>{switch(s.type){case d.BROWSER:return{title:l.browsing};case d.PYTHON:return{title:l.dataAnalysis};case d.DALLE:return{title:l.dalle};case d.MEMORY:return{title:l.memory,description:l.memoryDescription};case d.JIT_PLUGIN:return{title:l.actions,description:l.actionsDescription};default:return null}},pe=({tools:s})=>{const t=I(),a=t?.includes(j.SearchTool)&&!t?.includes(j.SearchToolHoldout),o=X(s??[],i=>i.type);var r=Z(o.map(ge).filter(i=>i!=null)??[]);return r.length===0?null:(a&&(r=r.map(i=>i.title===l.browsing?{title:l.search}:i)),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(h,{className:"mb-2",children:e.jsx(n,{id:"gizmo.about.capabilitiesHeader",defaultMessage:"Capabilities"})}),r.map(i=>e.jsxs("div",{className:"flex flex-row items-start gap-2 py-1 text-sm",children:[e.jsx(ie,{className:"icon-sm mt-0.5 text-green-600"}),e.jsxs("div",{children:[e.jsx(n,{...i.title}),i.description!=null&&e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(n,{...i.description})})]})]},i.title.id))]}))},m=p.div`flex flex-col justify-center items-center gap-2 border-l border-token-border-heavy first:border-0 w-48 mt-4 px-2`,u=p.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`,x=p.div`text-xs text-token-text-tertiary`,he=({gizmoResource:s})=>e.jsxs(O,{contentAlign:"end",sideOffset:4,triggerButton:e.jsx(G,{color:"ghost",icon:re}),children:[e.jsx(de,{gizmoResource:s}),e.jsx(ce,{gizmoResource:s})]}),fe=({aboutBlock:s})=>{switch(s.type){case"generic_title_subtitle":return e.jsxs(m,{children:[e.jsx(u,{children:s.title}),e.jsx(x,{children:s.subtitle})]});case"rating":return e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx(_,{className:"icon-sm"}),s.avg]}),e.jsx(x,{children:s.count_str})]});case"category":return s.category_ranking!=null?e.jsxs(m,{children:[e.jsx(u,{children:e.jsx(n,{id:"gizmo.about.trendingRank",defaultMessage:"#{rank}",values:{rank:s.category_ranking}})}),e.jsx(x,{children:e.jsx(n,{id:"gizmo.about.inCategory",defaultMessage:"in {category} {locale}",values:{category:s.category_str,locale:s.category_locale_str??""}})})]}):e.jsxs(m,{children:[e.jsx(u,{children:s.category_str}),e.jsx(x,{children:e.jsx(n,{id:"gizmo.about.category",defaultMessage:"Category"})})]})}},je=({blocks:s})=>e.jsx("div",{className:"flex justify-center",children:s.map(t=>e.jsx(fe,{aboutBlock:t},t.type))}),be=({href:s,onClick:t,children:a})=>e.jsx(ne.div,{whileTap:{scale:.98},className:"flex",children:e.jsxs(H,{to:s,onClick:t,className:g("group relative ml-2 h-14 flex-grow rounded-xl border border-token-border-medium bg-token-main-surface-primary px-4 hover:bg-token-main-surface-secondary focus:outline-none"),children:[e.jsx("div",{className:"flex h-full items-center",children:e.jsx("div",{className:"line-clamp-2 text-sm",children:a})}),e.jsx("div",{className:"absolute -bottom-px -left-2 h-3 w-4 border-b border-token-border-medium bg-token-main-surface-primary group-hover:bg-token-main-surface-secondary",children:e.jsx("div",{className:"h-3 w-2 rounded-br-full border-b border-r border-token-border-medium bg-token-main-surface-primary"})}),e.jsx("div",{className:"absolute bottom-0 right-2 top-0 hidden items-center group-hover:flex",children:e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-token-main-surface-primary",children:e.jsx(A,{className:"icon-md text-token-text-primary"})})})]})}),ve=({gizmo:s,onClose:t})=>{const a=M("1825130190").value,o=s.gizmo.display.prompt_starters?.slice(0,me);return o==null||o.length===0||!a?null:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(h,{children:e.jsx(n,{id:"gizmo.about.conversationStartersHeader",defaultMessage:"Conversation Starters"})}),e.jsx("div",{className:"mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2",children:o.map((r,i)=>e.jsx(ye,{gizmo:s,prompt:r,onClick:t},i))})]})};function ye(s){const{gizmo:t,prompt:a,onClick:o}=s,r=ee(t,a);return e.jsx(be,{href:r?.toString()??"#",onClick:o,children:a})}const ze=({reviewStats:s})=>M("1825130190").value?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(h,{children:e.jsx(n,{id:"gizmo.about.ratingsHeader",defaultMessage:"Ratings"})})}),s!=null?[5,4,3,2,1].map(a=>e.jsxs("div",{className:"flex flex-row items-center gap-2 py-1 text-xl font-semibold",children:[e.jsxs("div",{className:"icon-lg relative",children:[e.jsx(_,{className:"icon-lg text-green-500"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-[11px] text-white",children:a})]}),e.jsx("div",{className:"h-2.5 flex-grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700",children:e.jsx("div",{className:"h-full bg-green-500",style:{width:`${(s?.by_rating[a-1]??0)*100}%`}})})]},a)):e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(n,{id:"gizmo.about.ratings.notEnoughRatings",defaultMessage:"Not enough ratings yet"})})]}):null,_e=({gizmoId:s,creatorId:t})=>{const a=Y(b.GPTDetails),o=()=>se.closeModal(b.GPTDetails);return a?e.jsx(Ne,{gizmoId:s,creatorId:t,onClose:o}):null},Ne=({gizmoId:s,creatorId:t,onClose:a,children:o})=>{const r=ue(s),{data:i}=xe(t),L=r.data?.gizmo,f=V(s),c=f?.data;return y.useEffect(()=>{N.logEvent(w.showDetailModal,{gizmo_id:s})},[s]),e.jsx(F,{isOpen:!0,onClose:a,type:"success",hideSeparator:!0,showCloseButton:!0,noPadding:!0,className:"flex h-[calc(100vh-25rem)] min-h-[80vh] max-w-xl flex-col",children:e.jsx("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden px-2 py-4",children:r.isLoading||f.isLoading?e.jsx("div",{className:"flex h-40 items-center justify-center pb-10",children:e.jsx(U,{})}):L==null||c==null||r.data==null?e.jsx("div",{className:"flex flex-col gap-4 pb-10",children:e.jsx(n,{id:"gizmo.about.notFound",defaultMessage:"GPT not found"})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex flex-grow flex-col gap-4 overflow-y-auto px-6 pb-20 pt-16",children:[e.jsx("div",{className:"absolute top-0",children:e.jsxs("div",{className:"fixed left-4 right-4 z-10 flex items-center justify-end bg-gradient-to-b from-token-main-surface-primary to-transparent pb-2",children:[c&&e.jsx(he,{gizmoResource:c}),e.jsx(B,{onClick:a})]})}),e.jsx("div",{className:"absolute bottom-[64px]",children:e.jsx("div",{className:"fixed left-4 right-4 z-10 flex min-h-[64px] items-end bg-gradient-to-t from-token-main-surface-primary to-transparent px-2",children:o})}),e.jsx(oe,{gizmo:c,className:"!h-fit",avatarClassName:"!h-20 !w-20"}),e.jsx(je,{blocks:r.data.about_blocks}),e.jsx(ve,{gizmo:c,onClose:a}),e.jsx(pe,{tools:c.tools}),e.jsx(ze,{reviewStats:r.data.review_stats}),i&&e.jsx(we,{gizmos:i.items})]})})})})};function we({gizmos:s}){return s.length>0?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(h,{children:e.jsx(n,{id:"gizmo.about.moreByHeader",defaultMessage:"More by {creatorName}",values:{creatorName:s[0].gizmo.author.display_name}})})}),e.jsx("div",{className:g("no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden"),children:s&&s.map(t=>e.jsx("a",{onClick:()=>{N.logEvent(w.detailClickGizmo,{gizmo_id:t.gizmo.id})},href:C(t),className:"h-fit min-w-fit rounded-xl bg-token-main-surface-secondary px-1 py-4 md:px-3 md:py-4 lg:px-3",children:e.jsx(le,{resource:t})},t.gizmo.id))})]}):null}const Ae=s=>e.jsx("div",{className:"flex flex-grow flex-col items-center",children:e.jsxs(G,{color:"primary",className:"h-12 w-full",icon:A,...s,children:[e.jsx(n,{id:"gizmo.about.startChat",defaultMessage:"Start Chat"}),s.children]})}),l=z({browsing:{id:"gizmo.about.tools.browsing",defaultMessage:"Browsing"},search:{id:"gizmo.about.tools.search",defaultMessage:"Web Search"},dataAnalysis:{id:"gizmo.about.tools.dataAnalysis",defaultMessage:"Code Interpreter & Data Analysis"},dalle:{id:"gizmo.about.tools.dalle",defaultMessage:"DALL·E Images"},memory:{id:"gizmo.about.tools.memory",defaultMessage:"Memory"},actions:{id:"gizmo.about.tools.actions",defaultMessage:"Actions"},actionsDescription:{id:"gizmo.about.tools.actionsDescription",defaultMessage:"Retrieves or takes actions outside of ChatGPT"},memoryDescription:{id:"gizmo.about.tools.memoryDescription",defaultMessage:"Learns from previous chats to improve future conversations"}});export{Ne as G,Ae as a,le as b,_e as c,ce as d};
//# sourceMappingURL=fbp3xismzu2ol2gf.js.map