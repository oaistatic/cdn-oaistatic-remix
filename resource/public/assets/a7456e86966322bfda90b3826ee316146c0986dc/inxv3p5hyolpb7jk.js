import{aE as N,aC as D,aJ as q,S as f,r as k,P as b,V as v,l as s,a5 as p,b5 as T,a6 as U,aP as y,eJ as K,ad as B,bx as F,a1 as V,c as Y,i as Q,bO as X,eK as W,eL as z,bK as C,eM as J,Z}from"./gghzs582a65dvm3m.js";import{bk as S,a8 as _,de as $,au as ee,df as ne}from"./pd094ob9wacofnvk.js";import{L as O}from"./h6nboy9daks7d3l6.js";import{c as L}from"./ke4wseue2s3xar0a.js";import{T as oe}from"./l69acfj4t0bghaz3.js";function j(){return D("437245079").value}function te(){const e=j(),n=L(),o=N("1908072088").config.value,{eligible:t,isLoading:a}=S(_.AG8PqS2q);return{eligible:t&&e&&n&&o.blocking_modal===!0,singleButtonVariant:o.single_button_variant===!0,isLoading:a}}function ve(){const e=j(),n=L(),o=N("1908072088").config.value,{eligible:t,isLoading:a}=S(_.AG8PqS2q);return{eligible:t&&e&&n&&o.dropdown_tooltip,isLoading:a}}const G=_.UseSidekick,se=_.SidekickLauncherOnboarding,E="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",I="download";function P(){const e=y(),n=K("1696863369").layer.get("has_sidekick_access",!1);return e!=null&&n}function ae(e){return e===I}function ie(){const e=B(),o=(F(()=>e.asPath)??"").split("#"),t=ae(o[1]);return{openModal:()=>{const c=e.asPath.split("#");e.replace(c[0]+"#"+I)},closeModal:()=>{e.replace(o[0])},isOpen:t}}function Se(e){var d;const{eligible:n,isLoading:o}=te(),t=P(),{eligible:a,isLoading:c}=S(G),{eligible:g,isLoading:m}=S(se),i=n||!a||!g||!t||((d=e.conversationMode)==null?void 0:d.kind)!==q.PrimaryAssistant,l=o||m||c;return{eligible:!i&&f.getLayerValue({layerName:"1696863369",key:"show_nux_banner",defaultValue:!1}),isLoading:l}}function _e({onClose:e}){k.useEffect(()=>{b.logEvent(v.sidekickAnnouncementShown),f.logEvent("chatgpt_sidekick_announcement_shown")},[]);const{markAsViewed:n}=S(G),o=k.useCallback(()=>{n(),b.logEvent(v.sidekickAnnouncementDismissed),f.logEvent("chatgpt_sidekick_announcement_closed"),e&&e()},[n,e]),t=k.useCallback(()=>{b.logEvent(v.sidekickAnnouncementLinkClicked),f.logEvent("chatgpt_sidekick_announcement_download_clicked"),n(),e&&e()},[n,e]),a={downloadUrl:E,markAsDownloaded:t,markAsViewed:o,isSidekickAvailable:P()};return s.jsx(de,{...a})}function le(){window.open(E,"_blank")}function ce(){var e;return(e=y())!=null&&e.isPlus()?u.bannerTitleMentioningPlus:u.bannerTitleNotMentioningPlus}function Me(){const{closeModal:e,isOpen:n}=ie(),o=P(),t=k.useMemo(()=>({isDesktopAppAvailable:o}),[o]),a=()=>{b.logEvent(v.sidekickDownloadModalClosed,t),f.logEvent("chatgpt_sidekick_modal_closed"),e()},c=()=>{b.logEvent(v.sidekickDownloadModalDownloaded,t),f.logEvent("chatgpt_sidekick_modal_download_clicked"),e()};return k.useEffect(()=>{n&&(b.logEvent(v.sidekickDownloadModalShown,{...t}),f.logEvent("chatgpt_sidekick_modal_shown"))},[t,n]),n?s.jsx(re,{downloadUrl:E,markAsDownloaded:c,markAsViewed:a,isSidekickAvailable:o}):null}function re({downloadUrl:e,markAsDownloaded:n,markAsViewed:o,isSidekickAvailable:t}){const a=t?u.modalTitleEligible:u.modalTitleNotEligible,c=s.jsx(p,{...a}),g=s.jsx(p,{...u.modalContent}),m=t?u.disclaimer:u.comingSoonDisclaimer,i=s.jsx(p,{...m,values:{learnMoreLink:w=>s.jsx(O,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:w})}}),l=s.jsxs("div",{children:[s.jsx("div",{children:g}),s.jsx("div",{className:"mt-2",children:i})]}),d=s.jsx(T,{as:"link",to:e,color:"primary",onClick:n,openNewTab:!0,children:s.jsx(p,{...u.download})}),r=s.jsx(T,{color:"secondary",onClick:o,children:s.jsx(p,{...u.close})}),h=t?d:r,M=t?r:void 0;return s.jsx($,{onClose:o,title:c,description:l,actionButton:h,cancelButton:M})}function de({markAsDownloaded:e,markAsViewed:n}){const o=V(),t=k.useCallback(()=>{le(),e()},[e]),a=s.jsx(p,{...ce()}),c=s.jsx(p,{...u.bannerContent}),g=s.jsx(p,{...u.disclaimer,values:{learnMoreLink:i=>s.jsx(O,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:i})}}),m=s.jsxs("div",{className:"flex-grow",children:[s.jsx("div",{className:"mb-0.5 font-semibold",children:a}),s.jsxs("span",{className:"text-token-text-secondary",children:[c," ",g]})]});return s.jsx(ee,{onPrimaryCtaClick:t,primaryCtaText:o.formatMessage(u.download),onDismiss:n,content:m})}const u=U({bannerTitleNotMentioningPlus:{id:"SidekickOnboarding.bannerTitleEnterprisey_2",defaultMessage:"ChatGPT is available for macOS 14+ with Apple Silicon"},bannerTitleMentioningPlus:{id:"SidekickOnboarding.bannerTitleMentioningPlus",defaultMessage:"ChatGPT is now available for macOS—Plus users get early access"},modalTitleEligible:{id:"SidekickOnboarding.modalTitleEligible",defaultMessage:"The ChatGPT app is now available for macOS"},modalTitleNotEligible:{id:"SidekickOnboarding.modalTitleNotEligible",defaultMessage:"The ChatGPT macOS desktop app is coming soon"},modalContent:{id:"SidekickOnboarding.modal_content_eligible",defaultMessage:"Quickly access ChatGPT from anywhere on your computer with a shortcut: Option + Space. Share screenshots, upload files and photos, have voice conversations, and search through past conversations."},bannerContent:{id:"SidekickOnboarding.banner_content_3",defaultMessage:"Get faster access to ChatGPT with the Option + Space shortcut and the floating companion window."},disclaimer:{id:"SidekickOnboarding.disclaimer_3",defaultMessage:"<learnMoreLink>Learn more</learnMoreLink>."},comingSoonDisclaimer:{id:"SidekickOnboarding.coming_soon_disclaimer",defaultMessage:"The app will be available over the next couple of weeks."},download:{id:"SidekickOnboarding.download",defaultMessage:"Download"},close:{id:"SidekickOnboarding.close",defaultMessage:"Close"}}),x=Y(Q(()=>({statusMap:{}}))),we=e=>x(n=>n.statusMap[e]),ye=(e,n)=>{x.setState(o=>{o.statusMap[e]=n;const t=oe.getServerThreadId(e);t&&(o.statusMap[t]=n)})},R=e=>{x.setState(n=>{for(const{id:o,async_status:t}of e)n.statusMap[o]=t})},H=28,A="conversationHistory";function Ee(){const e=X(),n=(e==null?void 0:e.includes(W))??!1,o=y(),t=!n&&!!(o!=null&&o.data),a=z.useRelayEnvironment(),{value:c}=D("2893406386"),g=ue(a,t&&c),m=ge(t&&!c),{conversations:i,data:l,fetchNextPage:d,hasNextPage:r,isInitialLoading:h,isFetchingNextPage:M,isError:w}=c?g:m;return{data:l,conversations:i,fetchNextPage:d,hasNextPage:r,isLoading:h,isFetchingNextPage:M,isError:t&&w}}function ue(e,n){const{data:o,fetchNextPage:t,hasNextPage:a,isInitialLoading:c,isFetchingNextPage:g,isError:m}=C({queryKey:[A],queryFn:({pageParam:l})=>J.fetchQuery_DEPRECATED(e,me,{after:l,first:H,order:"updated",expand:!1,isArchived:!1}),initialPageParam:"aWR4Oi0x",getNextPageParam:l=>{var d,r;if((d=l.conversationDisplayHistory)!=null&&d.pageInfo.hasNextPage)return(r=l.conversationDisplayHistory)==null?void 0:r.pageInfo.endCursor},enabled:n}),i=k.useMemo(()=>(o==null?void 0:o.pages.flatMap(l=>{var d;return(((d=l.conversationDisplayHistory)==null?void 0:d.edges)??[]).flatMap(r=>{var h;return r!=null&&r.node?[{id:r.node.id,title:r.node.title??"",create_time:r.node.createTime,update_time:r.node.updateTime,conversation_template_id:(h=r.node.primaryGizmo)==null?void 0:h.id,async_status:r.node.asyncStatus}]:[]})}))??[],[o]);return k.useEffect(()=>{R(i)},[i]),{conversations:i,data:o,fetchNextPage:t,hasNextPage:a,isInitialLoading:c,isFetchingNextPage:g,isError:m}}function ge(e){const{data:n,fetchNextPage:o,hasNextPage:t,isInitialLoading:a,isFetchingNextPage:c,isError:g}=C({queryKey:[A],queryFn:async({pageParam:i})=>{const l=await Z.getConversations({offset:i,limit:H});return R(l.items),l},initialPageParam:0,getNextPageParam:i=>{const l=i.offset+i.limit;return l<i.total?l:void 0},enabled:e});return{conversations:k.useMemo(()=>(n==null?void 0:n.pages.flatMap(i=>i.items))??[],[n]),data:n,fetchNextPage:o,hasNextPage:t,isInitialLoading:a,isFetchingNextPage:c,isError:g}}function Pe(e){e.invalidateQueries({queryKey:[A]})}const me=ne;export{A as C,Me as D,te as a,we as b,P as c,ie as d,ve as e,_e as f,Se as g,Pe as r,ye as s,Ee as u};
//# sourceMappingURL=inxv3p5hyolpb7jk.js.map
