import{a1 as ye,r as o,l as e,aQ as A,m as z,P as L,d as M,bg as R,$ as y,X as H,aN as V,bm as ae,v as Y,ci as ne,a0 as je,K as J,L as Z,a$ as le,dW as be,bE as ce,dX as ke,bA as we}from"./j51q469vqqyswwq0.js";import{h as Ne,i as ze,j as de,k as Se,c as q,l as Ge,m as ee,n as Ee}from"./eq1a948h5ja80igb.js";import{a0 as I,bI as me,bJ as ue,bK as Le,H as Me,d as Ce,bL as Pe,bM as Te,j as O,M as Ae,y as Oe,bN as Re,c as De,bO as W,bP as Ie,E as _e}from"./obfv3y06hphbdxag.js";import{P as We,E as Ue,a as He}from"./1sbljp6832i8csyf.js";import{N as fe,t as Be,D as Ve,aM as Fe,aN as ge,aa as Ke,K as $e}from"./nakmlpxnz8km92cm.js";import{b as Qe,G as Xe,a as Ye}from"./fasqaae2vmeqyudj.js";import{A as se}from"./ib4d9e2hh0qlrf44.js";import{G as xe}from"./bpczpv0guerapvqi.js";import{G as $}from"./lwi4erv8pqm0gls9.js";import{a as te}from"./vwa1j8rwek3gtqyi.js";const he=ye.div`grid grid-cols-1 gap-x-1.5 gap-y-1 md:gap-x-2 md:gap-y-1.5 lg:grid-cols-2 lg:gap-x-3 lg:gap-y-2.5`,re="gpt_store";function Je(s,t){t.scrollLeft>s.offsetLeft?t.scrollBy({left:s.offsetLeft-t.scrollLeft-20,behavior:"smooth"}):t.scrollLeft+t.clientWidth<s.offsetLeft+s.clientWidth&&t.scrollBy({left:s.offsetLeft+s.clientWidth-t.clientWidth-t.scrollLeft+20,behavior:"smooth"})}function Q({gizmo:s,children:t,onClick:r,onModalOpen:i,onModalClose:c,selectOnly:n,className:u}){const g=ae("1825130190").value,[x,d]=o.useState(!1);return n?e.jsx("a",{className:z("gizmo-link cursor-pointer",u),href:"#",onClick:m=>{m.preventDefault(),r?.(m)},children:t}):g?e.jsxs(e.Fragment,{children:[x&&e.jsx(Xe,{gizmoId:s.gizmo.id,creatorId:s.gizmo.author.user_id,onClose:()=>{d(!1),c?.()},children:e.jsx(Ye,{as:"link",to:q(s)})}),e.jsx("a",{className:z("gizmo-link cursor-pointer",u),href:"#",onClick:m=>{m.preventDefault(),r?.(m),d(!0),i?.()},children:t})]}):e.jsx(ne,{to:q(s),className:z("gizmo-link",u),target:"_blank",onClick:r,children:t})}function ws({anon:s}){const[t,r]=o.useState(()=>J.getItem(Z.GizmoDiscoveryLocale)),i=x=>{r(x),J.setItem(Z.GizmoDiscoveryLocale,x)},c=V(),[n,u]=o.useState(!1),g=c?.isOwnerOfAccount()&&!n?A.OWNER:A.STANDARD;return e.jsx(Ze,{anon:s,currAccount:c,requestedLocale:t,effectiveRole:g,setPretendStandardUser:u,setLocale:i})}function Ze({anon:s,currAccount:t,requestedLocale:r,effectiveRole:i,setPretendStandardUser:c,setLocale:n}){const[u,g]=o.useState(void 0),x=!!s||t?.isPersonalAccount()&&!0,{data:d,isLoading:m,isError:v}=Ge(r,x);o.useEffect(()=>{d&&g({locale:d.locale,workspace_filtered:d.workspace_filtered,cuts:d.cuts.map(a=>({info:a.info,list:{items:a.list.items.map(l=>l.resource),cursor:a.list.cursor}}))})},[d]);const h=(...a)=>{const l=de(...a);return{...l,data:l.data?.pages.flatMap(j=>j.list.items.map(b=>b.resource))??[]}};return e.jsx(qe,{anon:s,discoveryLanding:u,isLoading:m,isError:v,effectiveRole:i,setPretendStandardUser:c,requestedLocale:r,setLocale:n,useFetchMoreQuery:h})}function qe({anon:s,discoveryLanding:t,isLoading:r,isError:i,effectiveRole:c,setPretendStandardUser:n,requestedLocale:u,setLocale:g,useFetchMoreQuery:x}){const d=V(),m=t?.locale??u,v=o.useRef({}),[h,a]=o.useState({}),l=o.useMemo(()=>Me(Ce(t?.cuts.map(f=>({id:f.info.id,name:f.info.display_group}))),"name"),[t]),j=o.useRef(null),b=l.find(f=>h[f.id])??l[0];o.useEffect(()=>{const f=v.current,N=new IntersectionObserver(P=>{P.forEach(k=>{for(const G of l){const _=f[G.id];_!=null&&k.target===_&&a(F=>({...F,[G.id]:k.isIntersecting}))}})},{root:null,rootMargin:"-96px",threshold:.1});return Object.values(f).forEach(P=>{P!=null&&N.observe(P)}),()=>{Object.values(f).forEach(P=>{P!=null&&N.unobserve(P)})}},[v,l]);const C=o.useRef(null),E=o.useRef(null),[S,w]=o.useState(0);return o.useEffect(()=>{const f=E.current,N=()=>{f!=null&&w(f.scrollTop)};return f?.addEventListener("scroll",N),window.addEventListener("resize",N),N(),()=>{f?.removeEventListener("scroll",N),window.removeEventListener("resize",N)}},[E,w]),r||i?e.jsxs(e.Fragment,{children:[s?e.jsx(se,{redirectUrl:ee(),className:"sticky top-0 z-30 h-14 bg-token-main-surface-primary"}):e.jsx(oe,{locale:m,setLocale:g,currAccount:d}),e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:i?e.jsx(Pe,{type:"danger",children:e.jsx(y,{...p.discoveryError})}):e.jsx(le,{})})]}):e.jsxs("div",{ref:E,className:"h-full overflow-y-auto",children:[s?e.jsx(se,{redirectUrl:ee(),className:"sticky top-0 z-30 h-14 bg-token-main-surface-primary"}):e.jsxs(e.Fragment,{children:[d?.isWorkspaceAccount()&&e.jsx(rs,{role:c,onPretendStandardUser:f=>{n(f)}}),e.jsx(oe,{pageSearchRef:C,locale:m,setLocale:g,currAccount:d})]}),e.jsxs("div",{className:"mx-auto max-w-3xl overflow-x-clip px-4",children:[e.jsx(es,{}),!s&&e.jsx(pe,{ref:C,className:"z-20 mb-6 mt-2 flex-grow shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.04)]",inputClassName:"md:h-14 h-12 text-base pl-12",iconClassName:"left-5",resultsSizeOffset:Math.min(S-260,-110)}),l.length>1&&e.jsx(ss,{displayGroups:l,currentDisplayGroup:b,scrollToDisplayGroup:f=>{(v.current[f.id]??j.current).scrollIntoView({behavior:"smooth",block:"start"})}}),e.jsx("div",{ref:j,className:"scroll-mt-28"}),t?.cuts.map(f=>f.info.display_type==="featured"?e.jsx(is,{info:f.info,items:f.list.items,ref:N=>{N!=null&&(v.current[f.info.id]=N)},effectiveRole:c},f.info.id):e.jsx(ns,{info:f.info,items:f.list.items,cursor:f.list.cursor??void 0,ref:N=>{N!=null&&(v.current[f.info.id]=N)},anon:s,effectiveRole:c,useFetchMoreQuery:x},f.info.id))??[]]}),t?.workspace_filtered&&!d?.isOwnerOfAccount()&&e.jsx(ts,{})]})}function es(){return e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"my-2 text-center text-3xl font-bold md:my-4 md:text-5xl",children:e.jsx(y,{...p.discoverySplashHeader})}),e.jsx("div",{className:"mx-auto w-full text-center text-sm text-token-text-secondary md:text-lg md:leading-tight",children:e.jsx(y,{...p.discoverySplashDescription})})]})}function ss({displayGroups:s,currentDisplayGroup:t,scrollToDisplayGroup:r}){const i=o.useRef(null),c=H(),n=(...a)=>c.formatMessage(...a),u=o.useRef({}),[g,x]=o.useState(!1);o.useEffect(()=>{if(g||t==null)return;const l=u.current[t.id];if(l==null)return;const j=i.current;j!=null&&Je(l,j)},[t,g]);const[d,m]=o.useState(!1),[v,h]=o.useState(!1);return o.useEffect(()=>{const a=i.current,l=()=>{a!=null&&(m(a.scrollLeft>0),h(a.scrollLeft+a.clientWidth<a.scrollWidth))};return a?.addEventListener("scroll",l),window.addEventListener("resize",l),l(),()=>{a?.removeEventListener("scroll",l),window.removeEventListener("resize",l)}},[i]),e.jsxs("div",{className:"sticky top-14 z-10 -ml-4 mb-12 w-screen bg-token-main-surface-primary py-2 text-sm md:ml-0 md:w-full md:pb-0",children:[d&&e.jsx("div",{className:"absolute left-0 top-2 hidden h-full items-end bg-gradient-to-r from-white from-50% to-transparent pr-8 dark:from-gray-800 md:block",children:e.jsx("button",{className:"mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-white/20",onClick:()=>{i.current!=null&&i.current.scrollBy({left:-400,behavior:"smooth"})},children:e.jsx(Ve,{className:"icon-sm"})})}),e.jsx("div",{className:"no-scrollbar flex scroll-m-5 gap-1.5 overflow-x-auto md:overflow-hidden",ref:i,children:s.map(a=>e.jsx("div",{className:z("cursor-pointer select-none scroll-mx-5 whitespace-nowrap rounded-3xl px-3 py-2 first:ml-4 last:mr-4 md:px-2 md:first:ml-0 md:last:mr-0",a.id===t?.id?"border-token-text-primary bg-black text-token-main-surface-primary dark:bg-gray-100 md:rounded-none md:border-b-2 md:bg-transparent md:text-token-text-primary dark:md:bg-transparent":"bg-token-main-surface-secondary hover:bg-gray-100 hover:text-token-text-primary dark:hover:bg-white/20 md:rounded-lg md:bg-transparent md:text-token-text-tertiary md:hover:bg-gray-50 dark:md:bg-transparent dark:md:hover:bg-gray-700"),onClick:()=>{x(!0),r(a),setTimeout(()=>{x(!1)},1e3),L.logEvent(M.storeClickCategory,{category:a.id})},ref:l=>{l!=null&&(u.current[a.id]=l)},children:n({id:`gizmo.categoryName.${a.name}`,defaultMessage:a.name,description:"store category"})},a.id))}),v&&e.jsx("div",{className:"absolute right-0 top-2 hidden h-full bg-gradient-to-l from-white from-50% to-transparent pl-8 dark:from-gray-800 md:block",children:e.jsx("button",{className:"mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-white/10",onClick:()=>{i.current!=null&&i.current.scrollBy({left:400,behavior:"smooth"})},children:e.jsx(Fe,{className:"icon-sm"})})})]})}function ts(){const s=H(),t=ue(),r=Te();return e.jsxs("div",{className:z("fixed bottom-0 flex w-full items-center justify-center gap-2 bg-token-main-surface-secondary p-3 text-sm text-token-text-secondary",!r&&"md:w-[calc(100%-16rem)]"),children:[e.jsx(ge,{className:"icon-sm"}),s.formatMessage(p.discoveryThirdPartyGPTsDisabled,{workspaceName:t})]})}function rs({role:s,onPretendStandardUser:t}){const r=H();return be()?e.jsxs("div",{className:"h-52px flex w-full items-center justify-center gap-2 bg-gray-100 p-3 text-sm dark:bg-gray-700",children:[e.jsx(ge,{className:"icon-sm"}),e.jsx(y,{id:"gizmo.discovery.browsingAsOwner",defaultMessage:"You're viewing as a <b>workspace member</b>",values:{b:c=>e.jsxs(O.Root,{defaultValue:s,onValueChange:n=>{t(n===A.STANDARD)},children:[e.jsxs(O.Trigger,{className:"-mx-2 -my-2 bg-transparent px-1 font-semibold",children:[e.jsx(Ae,{disabled:s!==A.OWNER,label:r.formatMessage({id:"gizmo.discovery.browsingAsOwnerTooltip",defaultMessage:"Owners can access all third-party GPTs, even if they haven’t been approved."}),side:"bottom",children:e.jsx(O.Value,{})}),e.jsx(O.Icon,{})]}),e.jsx(O.Portal,{children:e.jsxs(O.Content,{children:[e.jsx(O.Item,{value:A.OWNER,children:e.jsx(y,{id:"gizmo.discovery.browsingOwnerRole",defaultMessage:"workspace owner"})}),e.jsx(O.Item,{value:A.STANDARD,children:e.jsx(y,{id:"gizmo.discovery.browsingMemberRole",defaultMessage:"workspace member"})})]})})]})}})]}):null}function oe({pageSearchRef:s,locale:t,setLocale:r,currAccount:i}){const c=Ee(),n=ce(),u=H(),g=Oe(),[x,d]=o.useState(!1),[m,v]=o.useState(!1);o.useEffect(()=>{if(s==null||typeof s=="function"){d(!1);return}const a=s?.current,l=new IntersectionObserver(j=>{j.forEach(b=>{b.target===a&&d(!b.isIntersecting)})},{root:null,rootMargin:"20px",threshold:.5});return a!=null&&l.observe(a),()=>{a!=null&&l.unobserve(a)}},[s]);const h=i?.canCreateGizmos();return e.jsx(e.Fragment,{children:e.jsxs(Re,{className:"z-30 mx-auto flex w-full justify-center gap-2 whitespace-nowrap pt-[1.125rem]",children:[e.jsxs("div",{className:z("w-[calc((100%-768px)/2)] min-w-fit items-center",m?"hidden lg:flex":"flex"),children:[e.jsx(Ue,{}),e.jsx(De,{side:"right",label:t===W.GLOBAL?u.formatMessage(p.discoveryGlobalViewOn):u.formatMessage(p.discoveryGlobalViewOff),children:e.jsx(R,{color:"ghost",onClick:()=>{t===W.GLOBAL?r(W.ENGLISH):r(W.GLOBAL)},children:e.jsx(Ke,{className:z("icon-sm",t===W.GLOBAL?"text-token-text-primary":"text-token-text-tertiary")})})})]}),e.jsx(pe,{className:"max-w-3xl flex-grow",inputClassName:z("h-10 text-sm pl-9",!x&&"hidden"),iconClassName:"left-4",open:m,setOpen:v,resultsSizeOffset:-90,placeholder:g?u.formatMessage(p.discoverySearch):u.formatMessage(p.discoverySearchSmall)}),e.jsxs("div",{className:z("w-[calc((100%-768px)/2)] min-w-fit justify-end gap-2",m?"hidden lg:flex":"flex"),children:[h&&e.jsx(R,{color:"ghost",onClick:()=>{n("/gpts/mine"),L.logEvent(M.storeMyGizmos)},children:e.jsx(y,{...p.discoveryMyGPTs})}),e.jsx(os,{canCreateGizmos:h,createUrl:c})]}),e.jsx(He,{})]})})}const os=({canCreateGizmos:s,createUrl:t})=>{const[r,i]=o.useState(!1),c=o.useRef(void 0),n=ke(),g=V()?.planType??"unknown",x="create_gpt",d=()=>{s||(L.logPopoverHover({location:re,type:x,plan_type:g}),clearTimeout(c.current),i(!0))},m=()=>{s||(c.current=n(function(){i(!1)},300))},v=ce(),h=()=>{L.logUpsellGetPlusButtonClicked({location:re,type:x,plan_type:g}),_e(v,"Gizmo Discovery page upsell")},a=s?()=>L.logEvent(M.storeCreateGizmo):l=>l.preventDefault();return e.jsxs("div",{onMouseEnter:d,onMouseLeave:m,className:"relative",children:[e.jsx(R,{color:"primary",disabled:!s,visuallyDisabled:!s,onClick:a,as:"link",to:t,icon:$e,"data-testid":"create-gpt-discovery-button",children:e.jsx(y,{...p.discoveryCreateGPT})}),!s&&r&&!we&&e.jsxs("div",{className:"absolute right-0 z-10 mt-2 w-64 rounded-lg border border-token-border-light bg-token-main-surface-primary p-3 text-sm shadow-lg",children:[e.jsx("p",{className:"mb-2 whitespace-normal break-words from-token-text-tertiary text-left font-normal",children:e.jsx(y,{...p.createGPTUpsell})}),e.jsx(R,{color:"secondary",onClick:h,size:"small",children:e.jsx(y,{...p.createGPTUpsellButtonLabel})})]})]})},is=o.forwardRef(function({info:t,items:r,effectiveRole:i},c){return e.jsx(ve,{title:t.title,description:t.description,ref:c,children:e.jsx(he,{children:r.map((n,u)=>e.jsx(as,{resource:n,effectiveRole:i},`${u}-${n.gizmo.id}`))})})});function as({resource:s,effectiveRole:t}){const r=s.gizmo.vanity_metrics?.num_conversations_str,i=s.gizmo.tags?.includes(I.WorkspaceDisabled)&&t!==A.OWNER;return e.jsx($,{children:e.jsxs(Q,{gizmo:s,className:z("group flex h-24 items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-white/10 md:h-32 lg:h-36",i&&"opacity-50 hover:opacity-100"),onClick:()=>{L.logEvent(M.storeClickGizmo,{gizmo_id:s.gizmo.id,section:"featured"})},children:[e.jsx(xe,{isFirstParty:!!s.gizmo.tags?.includes(I.FirstParty),src:s.gizmo.display.profile_picture_url??void 0,className:z("h-16 w-16 flex-shrink-0 md:h-24 md:w-24",i&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"line-clamp-2 font-semibold md:text-lg",children:s.gizmo.display.name}),e.jsx("span",{className:"line-clamp-2 text-xs md:line-clamp-3",children:s.gizmo.display.description}),e.jsxs("div",{className:"mt-1 line-clamp-1 flex justify-start gap-1 text-xs text-token-text-tertiary",children:[e.jsx(me,{gizmo:s,className:"text-xs",hideLink:!0}),r&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-[10px]",children:"•"}),e.jsx(fe,{className:"mt-0.5 h-3 w-3"}),r]})]})]})]})})}const ns=o.forwardRef(function({info:t,items:r,cursor:i,anon:c,effectiveRole:n,useFetchMoreQuery:u},g){const[x,d]=o.useState(r.length===0),{data:m,hasNextPage:v,fetchNextPage:h,isFetchingNextPage:a,isError:l}=u({cutId:t.id,locale:t.locale,limit:6,cursor:i,enabled:x});o.useEffect(()=>{r.length===0&&h()},[h,r.length]);const[j,b]=o.useState(m.length),C=o.useRef(null),E=Ie(.1);return o.useEffect(()=>{m.length>j&&(b(m.length),C.current?.scrollIntoView({behavior:"smooth",block:"nearest"}))},[m.length,j]),e.jsxs(ve,{title:t.title,description:t.description,ref:g,children:[e.jsxs(he,{children:[r.map((S,w)=>e.jsx(ie,{resource:S,rank:w+1,cutId:t.id,effectiveRole:n},w)),m.map((S,w)=>e.jsx(ie,{resource:S,rank:r.length+w+1,cutId:t.id,delay:E(w-j,m.length-j),effectiveRole:n},w))]}),(!x||v||a||l)&&!c&&i!=null&&e.jsx(R,{color:l?"danger-outline":"secondary",onClick:()=>{d(!0),L.logEvent(M.storeLoadMore,{section:t.id}),h()},fullWidth:!0,className:"mt-2 md:mt-3",loading:a,children:l?e.jsx(y,{...p.discoveryLoadMoreError}):e.jsx(y,{...p.discoveryLoadMore})}),e.jsx("div",{ref:C})]})});function ie({resource:s,rank:t,cutId:r,delay:i,effectiveRole:c}){const n=s.gizmo.tags?.includes(I.WorkspaceDisabled)&&c!==A.OWNER,u=s.gizmo.tags?.includes(I.FirstParty);return e.jsx($,{delay:i,children:e.jsxs(Q,{gizmo:s,className:z("group flex h-[104px] items-center gap-2.5 overflow-hidden rounded-xl px-1 py-4 hover:bg-token-main-surface-secondary md:px-3 md:py-4 lg:px-3",n&&"opacity-50 hover:opacity-100"),onClick:()=>{L.logEvent(M.storeClickGizmo,{gizmo_id:s.gizmo.id,position:t,section:u?"first_party":r})},children:[e.jsx("div",{className:"text-md flex w-8 shrink-0 items-center justify-center font-semibold",children:t}),e.jsx(Qe,{resource:s,grayedOut:n})]},s.gizmo.id)})}const pe=o.forwardRef(function({className:t,inputClassName:r,iconClassName:i,open:c,setOpen:n,resultsSizeOffset:u,placeholder:g,effectiveRole:x,onSelect:d},m){const v=H(),[h,a]=o.useState(""),[l,j]=o.useState(""),[b,C]=o.useState(!1),E=c??b,S=n??C,w=o.useRef(null),f=V()?.isWorkspaceAccount(),N=ae("3054422710").value,P=f!==void 0&&f&&N;o.useEffect(()=>{if(!E)return;const T=B=>{B.key==="Escape"&&(S(!1),w.current?.blur())},X=B=>{B.target instanceof Node&&typeof m!="function"&&!m?.current?.contains(B.target)&&S(!1)};return document.addEventListener("keydown",T,!1),document.addEventListener("mousedown",X,!1),()=>{document.removeEventListener("keydown",T,!1),document.removeEventListener("mousedown",X,!1)}},[E,S,w,m]);const[k,G]=o.useState();o.useEffect(()=>{const T=()=>{G(window.visualViewport?.height)};return window.visualViewport?.addEventListener("resize",T),T(),()=>{window.visualViewport?.removeEventListener("resize",T)}},[G]);const[_,F]=o.useState(!1);return o.useEffect(()=>{_&&!E&&S(!0)},[_,S,E]),o.useEffect(()=>{const T=setTimeout(()=>{j(h)},250);return()=>{clearTimeout(T)}},[h]),e.jsxs(te,{as:"div",className:z("group relative rounded-xl",t),ref:m,children:[e.jsx(Be,{className:z("pointer-none icon-md absolute top-0 h-full text-token-text-tertiary",i)}),e.jsx("input",{className:z("z-10 w-full rounded-xl border border-token-border-light bg-token-main-surface-primary py-2 pr-3 font-normal outline-0 delay-100","",r),placeholder:g??v.formatMessage(p.discoverySearch),value:h,onChange:T=>a(T.target.value),onFocus:()=>{S(!0),L.logEvent(M.searchOpened)},ref:w}),e.jsx(We,{show:E,children:e.jsx(te.Panel,{static:!0,className:"absolute top-[calc(100%-10px)] w-full overflow-y-auto rounded-lg rounded-t-none border border-t-0 border-token-border-light bg-token-main-surface-primary px-3 py-2",style:{maxHeight:k!=null?k+(u??0):"100vh"},children:e.jsx(ls,{query:l,effectiveRole:x,setPopoverForceOpen:F,onSelect:d,showWorkspaceResults:P})})})]})});function K(){return e.jsx("div",{className:"flex items-center justify-center py-1",children:e.jsx(le,{})})}function ls({query:s,effectiveRole:t,setPopoverForceOpen:r,showWorkspaceResults:i,onSelect:c}){const[n,u]=o.useState("ALL");o.useEffect(()=>{L.logEvent(M.searchStart)},[]);const{data:g,isLoading:x}=Ne(s),{data:d,isLoading:m}=ze(s,i),{data:v,isLoading:h}=de({cutId:"recent",limit:3});return e.jsx(cs,{debouncedQuery:s,searchResults:g?.items,isLoadingSearch:x,searchResultsCursor:g?.cursor,showWorkspaceResults:i,workspaceSearchResults:d?.items,workspaceSearchResultsCursor:d?.cursor,isLoadingWorkspaceSearch:m,isLoadingRecent:h,recent:v?.pages.flatMap(a=>a.list.items.map(l=>l.resource))??[],effectiveRole:t,setPopoverForceOpen:r,onSelect:c,activeTab:n,setActiveTab:u})}function cs({debouncedQuery:s,searchResults:t,isLoadingSearch:r,searchResultsCursor:i,showWorkspaceResults:c,workspaceSearchResults:n,workspaceSearchResultsCursor:u,isLoadingWorkspaceSearch:g,recent:x,isLoadingRecent:d,effectiveRole:m,setPopoverForceOpen:v,onSelect:h,activeTab:a,setActiveTab:l}){const j=o.useRef(Y());if(o.useEffect(()=>{L.logEvent(M.searchStart)},[]),o.useEffect(()=>{!r&&t&&(j.current=Y(),t.length>0?Promise.all(t.map((b,C)=>{L.logEvent(M.searchDisplayResult,{search_id:j.current,gizmo_id:b.gizmo.id,position:C,query:s})})):L.logEvent(M.searchNoResults,{query:s}))},[t,r,s]),s===""&&d)return e.jsx(K,{});if(c){if(a==="ALL"&&r||a==="WORKSPACE"&&g)return e.jsx(K,{});if(s!=""&&!r&&!g&&(!t||t.length===0)&&(!n||n.length===0))return e.jsx("div",{className:"mx-2",children:e.jsx(D,{onClick:void 0,isSelected:void 0,isClickable:!1,children:e.jsx(y,{...p.discoveryNoResultsSearch})})})}else{if(r)return e.jsx(K,{});if(s!=""&&!r&&(!t||t.length===0))return e.jsx("div",{className:"mx-2",children:e.jsx(D,{onClick:void 0,isSelected:void 0,isClickable:!1,children:e.jsx(y,{...p.discoveryNoResultsSearch})})})}return e.jsxs(e.Fragment,{children:[e.jsx(ms,{query:s,activeTab:a,setActiveTab:l,showWorkspaceResults:c,recentSearchResults:x??[]}),e.jsx(ds,{query:s}),e.jsx(us,{query:s,searchIdRef:j.current,searchResults:t,searchResultsCursor:i,isLoadingSearch:r,workspaceSearchResults:n,workspaceSearchResultsCursor:u,isLoadingWorkspaceSearch:g,recentSearchResults:x??[],activeTab:a,setPopoverForceOpen:v,effectiveRole:m,onSelect:h})]})}function ds({query:s}){if(/search\s?gpt/i.test(s))return e.jsx("div",{className:"mb-1 mt-2 rounded-lg bg-gray-50 py-3 text-center text-xs dark:bg-gray-750",children:e.jsx(y,{id:"NEGLw8",defaultMessage:"Learn more about OpenAI's <searchGPTLink>SearchGPT prototype</searchGPTLink>",values:{searchGPTLink:t=>e.jsx(ne,{to:"/search",target:"_blank",className:"text-brand-blue-800 dark:text-blue-400",onClick:()=>{L.logEvent(M.searchGPTGizmoBannerLinkClicked)},children:t})}})})}function D({children:s,onClick:t,isSelected:r,isClickable:i}){return e.jsx("div",{className:`px-3 pb-2 text-xs text-token-text-tertiary ${r?"border-b-2 font-bold":"font-semibold"} ${i?"cursor-pointer":""}`,onClick:()=>{t?.()},children:s})}function ms({query:s,activeTab:t,setActiveTab:r,showWorkspaceResults:i,recentSearchResults:c}){const n=ue();return s===""?c&&c.length>0?e.jsx(D,{onClick:void 0,isSelected:!1,isClickable:!1,children:e.jsx(y,{...p.discoverySearchRecentlyUsed})}):e.jsx(D,{onClick:void 0,isSelected:void 0,isClickable:!1,children:e.jsx(y,{...p.discoverySearchRecentlyUsedEmpty})}):e.jsxs("div",{className:"flex",children:[e.jsx(D,{onClick:()=>r("ALL"),isSelected:t==="ALL"&&i,isClickable:i,children:e.jsx(y,{...p.discoveryAllResultsHeader})}),i&&e.jsx(D,{onClick:()=>r("WORKSPACE"),isSelected:t==="WORKSPACE",isClickable:!0,children:e.jsx(y,{...p.discoveryWorkspaceResultsHeader,values:{workspaceName:n}})})]})}function us({query:s,searchIdRef:t,searchResults:r,searchResultsCursor:i,isLoadingSearch:c,workspaceSearchResults:n,workspaceSearchResultsCursor:u,isLoadingWorkspaceSearch:g,recentSearchResults:x,setPopoverForceOpen:d,activeTab:m,effectiveRole:v,onSelect:h}){const[a,l]=o.useState(!1),j=Se(s,a,m==="WORKSPACE",m==="WORKSPACE"?u:i),{data:b,hasNextPage:C,fetchNextPage:E,isFetchingNextPage:S,isError:w}={...j,data:j.data?.pages.flatMap(k=>k.items.map(G=>G))??[]},[f,N]=o.useState(b.length),P=o.useRef(null);return o.useEffect(()=>{b.length>f&&(N(b.length),P.current?.scrollIntoView({behavior:"smooth",block:"nearest"}))},[b.length,f]),s===""&&x&&x.length>0?e.jsx(e.Fragment,{children:x.map((k,G)=>e.jsx(U,{searchId:t,position:G,query:s,resource:k,effectiveRole:v,setPopoverForceOpen:d,onSelect:h},k.gizmo.id))}):s!==""&&!c&&m==="ALL"&&(r==null||r.length===0)?e.jsx("div",{className:"mt-4 px-3 pb-2 text-xs font-semibold text-token-text-tertiary",children:e.jsx(y,{...p.discoveryNoResultsSearch})}):s!==""&&!g&&m==="WORKSPACE"&&(n==null||n.length===0)?e.jsx("div",{className:"mt-4 px-3 pb-2 text-xs font-semibold text-token-text-tertiary",children:e.jsx(y,{...p.discoveryNoResultsSearch})}):e.jsx("div",{children:m==="ALL"?e.jsxs("div",{children:[r&&r.map((k,G)=>e.jsx(U,{searchId:t,position:G,query:s,resource:k,effectiveRole:v,setPopoverForceOpen:d,onSelect:h},k.gizmo.id)),r&&b&&b.map((k,G)=>e.jsx(U,{searchId:t,position:G+r?.length,query:s,resource:k,effectiveRole:v,setPopoverForceOpen:d,onSelect:h},k.gizmo.id)),(!a&&b.length===0||C||S||w)&&i!=null&&e.jsx(R,{color:w?"danger-outline":"secondary",onClick:()=>{l(!0),E(),d?.(!0)},loading:S,fullWidth:!0,className:"mt-2 md:mt-3",children:w?e.jsx(y,{...p.discoveryLoadMoreError}):e.jsx(y,{...p.discoveryLoadMore})})]}):e.jsxs("div",{children:[n&&n.map((k,G)=>e.jsx(U,{searchId:t,position:G,resource:k,query:s,setPopoverForceOpen:d},k.gizmo.id)),n&&b&&b.map((k,G)=>e.jsx(U,{searchId:t,position:G+n?.length,query:s,resource:k,effectiveRole:v,setPopoverForceOpen:d,onSelect:h},k.gizmo.id)),(!a&&b.length===0||C||S||w)&&u!=null&&e.jsx(R,{color:w?"danger-outline":"secondary",onClick:()=>{l(!0),E(),d?.(!0)},fullWidth:!0,className:"mt-2 md:mt-3",loading:S,children:w?e.jsx(y,{...p.discoveryLoadMoreError}):e.jsx(y,{...p.discoveryLoadMore})})]})})}function U({searchId:s,resource:t,position:r,query:i,effectiveRole:c,setPopoverForceOpen:n,onSelect:u}){const g=t.gizmo.vanity_metrics?.num_conversations_str,x=Le(),d=t.gizmo.tags?.includes(I.WorkspaceDisabled)&&c!==A.OWNER;return e.jsxs(Q,{gizmo:t,className:z("group mx-2 flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/10",d&&"opacity-50 hover:opacity-100"),onClick:()=>{u?u(t):L.logEvent(M.storeClickGizmo,{search_id:s,gizmo_id:t.gizmo.id,position:r,query:i,section:"search"})},onModalOpen:()=>{n?.(!0)},onModalClose:()=>{n?.(!1)},selectOnly:!!u,children:[e.jsx(xe,{isFirstParty:!!t.gizmo.tags?.includes(I.FirstParty),src:t.gizmo.display.profile_picture_url??void 0,className:z("h-8 w-8 shrink-0",d&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex flex-col space-y-1 truncate",children:[e.jsx("div",{className:"flex flex-row items-end space-x-2",children:e.jsx("span",{className:"shrink-0 truncate text-sm font-semibold",children:t.gizmo.display.name})}),x&&e.jsx("span",{className:"max-w-md truncate text-xs text-token-text-tertiary",children:t.gizmo.display.description}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"-mt-1",children:e.jsx(me,{gizmo:t,className:"truncate text-xs text-token-text-tertiary",hideLink:!0})}),g&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-1 font-semibold text-token-text-tertiary",style:{marginTop:"-2px"},children:[e.jsx(fe,{className:"icon-xs"}),e.jsx("span",{className:"line-clamp-1 text-xs",children:g})]})})]})]})]})}const ve=o.forwardRef(function({title:t,description:r,className:i,children:c},n){return e.jsxs("div",{ref:n,className:"h-fit scroll-mt-28 last:min-h-[calc(100vh-8rem)]",children:[e.jsxs($,{animateTap:!1,children:[e.jsx("div",{className:"text-xl font-semibold md:text-2xl",children:t}),r&&e.jsx("div",{className:"text-sm text-token-text-tertiary md:text-base",children:r})]}),e.jsx("div",{className:z("mb-10 mt-4",i),children:c})]})}),p=je({discoveryAllResultsHeader:{id:"gizmo.discovery.AllResultsHeader",defaultMessage:"All"},discoveryWorkspaceResultsHeader:{id:"gizmo.discovery.workspaceResultsHeaderName",defaultMessage:"{workspaceName} workspace"},discoveryEmpty:{id:"gizmo.discovery.empty",defaultMessage:"Nothing to discover"},discoveryNoResultsSearch:{id:"gizmo.discovery.search.empty",defaultMessage:"No results found"},discoveryError:{id:"gizmo.discovery.error",defaultMessage:"Error loading GPTs"},discoverySearch:{id:"gizmo.discovery.search",defaultMessage:"Search GPTs"},discoverySearchSmall:{id:"gizmo.discovery.searchSmall",defaultMessage:"Search"},discoverySearchRecentlyUsed:{id:"gizmo.discovery.search.recentlyUsed",defaultMessage:"Recently Used"},discoverySearchRecentlyUsedEmpty:{id:"gizmo.discovery.search.recentlyUsedEmpty",defaultMessage:"No recently used GPTs"},discoverySearchResults:{id:"gizmo.discovery.search.results",defaultMessage:"Search Results"},discoveryLoadMore:{id:"gizmo.discovery.loadMore",defaultMessage:"See more"},discoveryLoadMoreError:{id:"gizmo.discovery.loadMoreError",defaultMessage:"Error loading more"},discoveryMyGPTs:{id:"gizmo.discovery.myGPTs",defaultMessage:"My GPTs"},discoveryCreateGPT:{id:"gizmo.discovery.createGPT",defaultMessage:"Create"},discoveryThirdPartyGPTsDisabled:{id:"gizmo.discovery.thirdPartyGPTsDisabled",defaultMessage:"Your admin has blocked GPTs created outside {workspaceName}."},discoverySplashHeader:{id:"gizmo.discovery.splashHeader",defaultMessage:"GPTs"},discoverySplashDescription:{id:"gizmo.discovery.splashDescription",defaultMessage:"Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills."},discoveryGlobalViewOn:{id:"gizmo.discovery.globalViewOn",defaultMessage:"Global View On"},discoveryGlobalViewOff:{id:"gizmo.discovery.globalViewOff",defaultMessage:"Global View Off"},createdAgoLabel:{id:"gizmo.discovery.createdAgoLabel",defaultMessage:"Created {createdAgo}"},createGPTUpsell:{id:"gizmo.discovery.createGPTUpsell",defaultMessage:"Get ChatGPT Plus to create and share your own GPTs"},createGPTUpsellButtonLabel:{id:"gizmo.discovery.createGPTUpsellButtonLabel",defaultMessage:"Get Plus"}});export{pe as G,ws as a};
//# sourceMappingURL=obvzaj6d0gtku2cx.js.map
