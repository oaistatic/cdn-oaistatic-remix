import{a4 as C,a1 as P,ab as L,S as d,r,P as u,d as g,t as n,a8 as l,aT as S,ad as j,aj as v,ep as y,bp as G,s as B,a3 as U}from"./elatgogjtv7nqe0m.js";import{cE as b,a4 as f,cF as I,aq as K}from"./htp5iqft2rzvr58f.js";import{L as D}from"./e52rm0fcoysbc5g7.js";import{b as V}from"./lknunzf857a9nkhn.js";function q(){return P("437245079").value}function F(){const e=q(),o=V(),a=C("1908072088").config.value,{eligible:i,isLoading:t}=b(f.AG8PqS2q);return{eligible:i&&e&&o&&a.blocking_modal===!0,singleButtonVariant:a.single_button_variant===!0,isLoading:t}}const A=f.UseSidekick,R=f.SidekickLauncherOnboarding,w="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",E="download";function M(){const e=v(),o=y("1696863369").layer.get("has_sidekick_access",!1);return e!=null&&o}function W(e){return e===E}function X(){const e=G(),{hash:o}=B(),a=W(o.slice(1));return{openModal:()=>{e({hash:E})},closeModal:()=>{e({hash:""})},isOpen:a}}function ne(e){const{eligible:o,isLoading:a}=F(),i=M(),{eligible:t,isLoading:c}=b(A),{eligible:k,isLoading:m}=b(R),h=o||!t||!k||!i||e.conversationMode?.kind!==L.PrimaryAssistant,p=a||m||c;return{eligible:!h&&d.getLayerValue({layerName:"1696863369",key:"show_nux_banner",defaultValue:!1}),isLoading:p}}function oe({onClose:e}){r.useEffect(()=>{u.logEvent(g.sidekickAnnouncementShown),d.logEvent("chatgpt_sidekick_announcement_shown")},[]);const{markAsViewed:o}=b(A),a=r.useCallback(()=>{o(),u.logEvent(g.sidekickAnnouncementDismissed),d.logEvent("chatgpt_sidekick_announcement_closed"),e&&e()},[o,e]),i=r.useCallback(()=>{u.logEvent(g.sidekickAnnouncementLinkClicked),d.logEvent("chatgpt_sidekick_announcement_download_clicked"),o(),e&&e()},[o,e]),t={downloadUrl:w,markAsDownloaded:i,markAsViewed:a,isSidekickAvailable:M()};return n.jsx(Q,{...t})}function H(){window.open(w,"_blank")}function Y(){return v()?.isPlus()?s.bannerTitleMentioningPlus:s.bannerTitleNotMentioningPlus}function ae(){const{closeModal:e,isOpen:o}=X(),a=M(),i=r.useMemo(()=>({isDesktopAppAvailable:a}),[a]),t=()=>{u.logEvent(g.sidekickDownloadModalClosed,i),d.logEvent("chatgpt_sidekick_modal_closed"),e()},c=()=>{u.logEvent(g.sidekickDownloadModalDownloaded,i),d.logEvent("chatgpt_sidekick_modal_download_clicked"),e()};return r.useEffect(()=>{o&&(u.logEvent(g.sidekickDownloadModalShown,{...i}),d.logEvent("chatgpt_sidekick_modal_shown"))},[i,o]),o?n.jsx(z,{downloadUrl:w,markAsDownloaded:c,markAsViewed:t,isSidekickAvailable:a}):null}function z({downloadUrl:e,markAsDownloaded:o,markAsViewed:a,isSidekickAvailable:i}){const t=i?s.modalTitleEligible:s.modalTitleNotEligible,c=n.jsx(l,{...t}),k=n.jsx(l,{...s.modalContent}),m=i?s.disclaimer:s.comingSoonDisclaimer,h=n.jsx(l,{...m,values:{learnMoreLink:N=>n.jsx(D,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:N})}}),p=n.jsxs("div",{children:[n.jsx("div",{children:k}),n.jsx("div",{className:"mt-2",children:h})]}),T=n.jsx(S,{as:"link",to:e,color:"primary",onClick:o,openNewTab:!0,children:n.jsx(l,{...s.download})}),_=n.jsx(S,{color:"secondary",onClick:a,children:n.jsx(l,{...s.close})}),x=i?T:_,O=i?_:void 0;return n.jsx(I,{onClose:a,title:c,description:p,actionButton:x,cancelButton:O})}function Q({markAsDownloaded:e,markAsViewed:o}){const a=U(),i=r.useCallback(()=>{H(),e()},[e]),t=n.jsx(l,{...Y()}),c=n.jsx(l,{...s.bannerContent}),k=n.jsx(l,{...s.disclaimer,values:{learnMoreLink:h=>n.jsx(D,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:h},"link")}}),m=n.jsxs("div",{className:"flex-grow",children:[n.jsx("div",{className:"mb-0.5 font-semibold",children:t}),n.jsxs("span",{className:"text-token-text-secondary",children:[c," ",k]})]});return n.jsx(K,{onPrimaryCtaClick:i,primaryCtaText:a.formatMessage(s.download),onDismiss:o,content:m})}const s=j({bannerTitleNotMentioningPlus:{id:"SidekickOnboarding.bannerTitleEnterprisey_2",defaultMessage:"ChatGPT is available for macOS 14+ with Apple Silicon"},bannerTitleMentioningPlus:{id:"SidekickOnboarding.bannerTitleMentioningPlus",defaultMessage:"ChatGPT is now available for macOS—Plus users get early access"},modalTitleEligible:{id:"SidekickOnboarding.modalTitleEligible",defaultMessage:"The ChatGPT app is now available for macOS"},modalTitleNotEligible:{id:"SidekickOnboarding.modalTitleNotEligible",defaultMessage:"The ChatGPT macOS desktop app is coming soon"},modalContent:{id:"SidekickOnboarding.modal_content_eligible",defaultMessage:"Quickly access ChatGPT from anywhere on your computer with a shortcut: Option + Space. Share screenshots, upload files and photos, have voice conversations, and search through past conversations."},bannerContent:{id:"SidekickOnboarding.banner_content_3",defaultMessage:"Get faster access to ChatGPT with the Option + Space shortcut and the floating companion window."},disclaimer:{id:"SidekickOnboarding.disclaimer_3",defaultMessage:"<learnMoreLink>Learn more</learnMoreLink>."},comingSoonDisclaimer:{id:"SidekickOnboarding.coming_soon_disclaimer",defaultMessage:"The app will be available over the next couple of weeks."},download:{id:"SidekickOnboarding.download",defaultMessage:"Download"},close:{id:"SidekickOnboarding.close",defaultMessage:"Close"}});export{ae as D,M as a,X as b,oe as c,ne as d,F as u};
//# sourceMappingURL=l6guvzd52gy27z13.js.map
