const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-hpuf4kjxpnclnp3l.js","assets/o1ivbuadejprpakj.js","assets/hpmltgx65508529x.js","assets/root-nv4wy9md.css","assets/cdfz4zzo8ae7sffb.js","assets/i16nwty7q09iq1st.js","assets/conversation-small-cll5buey.css","assets/hx2tdb79whqndr2i.js","assets/bwu3xfza0pxwe6ru.js","assets/kwa3fw7gjdaasnda.js","assets/j8qjjjf38v0oqfi8.js","assets/j76lrd6kdu2dvuce.js","assets/l8i8os8zb9hbkizc.js","assets/hcdx55t4k5s9h90a.js","assets/l4ck0jsx010sty0l.js","assets/kgovzb8a5v2gsd51.js","assets/cg1djtp0bw9bc15a.js","assets/nbsdgm0upgk4irzm.js","assets/cydma3qyvyx80hyp.js","assets/jq9wblohokz1apkp.js","assets/m1obf60srwp2ts7s.js","assets/mjcfyknvrjj9hd19.js","assets/mi42bzcdvpy1x8ji.js","assets/emhq1o2jx82qz3bm.js","assets/enbllfvgkwykbnul.js","assets/owy0qj0hqrq1f2pc.js","assets/fg9954vf8hgy1gcn.js","assets/ojaeance25t5l4bb.js","assets/itghwucfyv5ciib7.js","assets/itribem5qub0i7p6.js","assets/g73bwio0cfed44ag.js","assets/cjpxys9onj11vjfw.js","assets/983a0dy92b3ronpv.js","assets/bhc6dxlbkrv8rm6j.js","assets/kqwdyvkaaavvn8k3.js","assets/lxeo5vj71yvftln5.js","assets/nsh9u1ayt7btqvk7.js","assets/dk9wqxoctu51uhww.js","assets/l49eh3lvilhue1yc.js","assets/e9lafxuzyeh4418f.js","assets/ca6isrh75bfn19jp.js","assets/c2xwnbedvlrmbzk4.js","assets/me6ol1fk19tysqpp.js","assets/hk03l0orwjxr8cyh.js","assets/h1tpeqj9phe52x6j.js","assets/cnw4jjx0sud6z7yd.js","assets/hxp8sj7fp6y8lzao.js","assets/iwxn86yfz3oofcvu.js","assets/iej0cupg2dqkmejt.js","assets/hh8tg5nvn87pq7j7.js","assets/kx2eu387su5l4riw.js","assets/jk8w36bsokizpx57.js","assets/lgmd1aoy1h693zh7.js","assets/ndpvxw383vfc4cps.js","assets/ofz97uvppzmgi00i.js","assets/i7xeh80xiny5qb6b.js","assets/fm52zv9csux36to5.js","assets/g938os69qqp130as.js","assets/kwn6kttdzkq2auqo.js","assets/cq2vk92by17h7xws.js","assets/n784r1t36m7pcolp.js","assets/swiper-react-kmk1dd5x.css"])))=>i.map(i=>d[i]);
import{ag as F,db as H,bh as $,a8 as Q,bA as w,bj as B,P as m,dc as y,y as e,a6 as R,Z as W,$ as V,w as Y,W as K,r as f,ar as X,c8 as J,a1 as z,eC as Z,b as A,eD as q,O as b,X as ee}from"./o1ivbuadejprpakj.js";import{G as E}from"./me6ol1fk19tysqpp.js";import{u as te,j as ne,z as se}from"./j8qjjjf38v0oqfi8.js";import{w as ae,r as oe,t as re,v as ie,x as le,y as ce,bE as ue,bF as de,K as I}from"./i16nwty7q09iq1st.js";import{I as me,aW as ge,a$ as pe,S as xe}from"./hpmltgx65508529x.js";import{u as fe}from"./j76lrd6kdu2dvuce.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:l,title:u,call_to_action:c,description:d}=r,g=F(),h=te(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=ae(),k=a&&"block_reason"in a?a.block_reason:null,v="banner_description",C={type:l||"unknown",location:v,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:c},M=$(),T=oe(),{isUnauthenticated:D}=Q(),p=re(),P=ie(w.signUpButtonText),N=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:P,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?P:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.GET_PLUS:return{text:_.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(C),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):ce(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:_.newChatButton,onClick:()=>{h({modelId:"",location:v})}}}};B(()=>{m.logRateLimitBannerShown(C)});let[L,S]=c??[];L===y.AUTHENTICATE&&o&&(S=y.AUTHENTICATE_SECONDARY);const U={primaryAction:N(L),secondaryAction:N(S)};return e.jsx(le,{onDismiss:i,title:u,description:d,actions:U})},_=R({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=W(()=>V(()=>import("./sso-hpuf4kjxpnclnp3l.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=Y("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=K.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ne({cutId:"recent",limit:8}),{data:i,isLoading:l}=se();return{isLoading:r||l,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},l){const u=ue(),c=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(l,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=c.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(X,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(I.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{c.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(ve,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{c.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ie,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ie=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs(J,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(z,{...j.dropdownCreateLabel})})]})}),je=({onClick:n,onClose:r})=>{const[i,l]=f.useState(null),u=f.useRef(null),c=f.useRef(null),[d,g]=f.useState(0),h=ee(),a=s=>{m.logEvent(A.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(j.searchPlaceholder),ref:u,onKeyDown:s=>{const t=c.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=c.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;c.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;c.current?.scrollToItem(o),g(o)}},onChange:s=>{l(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:c,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=Z(),l=!!i;return B(()=>{m.logEvent(A.mentionsOpened,{gizmo_selector_disabled:l})}),l?e.jsx(ke,{clientThreadId:q,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(je,{onClick:n,onClose:r})})};function ve({gizmoResource:n,from:r,showDescription:i,isSelected:l,grayedOut:u}){const c=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs(G,{className:b(l?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(E,{isFirstParty:c,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function Re({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(E,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(z,{...j.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const j=R({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,Re as a,Te as u};
//# sourceMappingURL=kayo3zzhv3q9694m.js.map
