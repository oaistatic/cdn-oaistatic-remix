import{a9 as u,dX as l,be as f,ag as h,r as c,y as o,a0 as w,as as m,L as x,eF as g,eG as b}from"./i5bamk05qmvsi6c3.js";import{C as v,a as C}from"./gk3k26qetn7dgip8.js";import{a as E}from"./hj0zkoarghra2cye.js";import"./liga9kkfxw3f2sj7.js";import{dD as W,dE as j}from"./b5wtmoh4inpzei0d.js";import{a$ as y,b0 as M}from"./mqz1li9meltzje6z.js";import{a as O,b as S,j as k}from"./hyvagn7wiyqjw66o.js";import{c as L}from"./nsgllgbmonfki2sx.js";import"./gs79fvhyldtvksv2.js";import"./i5ztl46q405lbqos.js";import"./ke6ca343lrs30bzf.js";import"./n5sxb9l1jmluwhlc.js";import"./jn8sbvvcvfq89cru.js";import"./mk4ingvn6gaf4ymp.js";import"./cfedk9ai3jrtaixx.js";import"./nbwdriiaqujlrqtu.js";import"./n32lok680xrfiyr3.js";import"./f8m2hnrr877wbn2c.js";import"./metsqyg8q27iv32z.js";import"./9o3sbnrj80pgev5o.js";import"./byf6ztwo85tskvys.js";import"./fktn9askyugo9zvq.js";import"./k4owery9q8o61suw.js";import"./basnv9fux9j484go.js";import"./kfe2c9wpphxhi1gf.js";import"./js5qb1fmq9lggf33.js";import"./go8i9ioogzsa6rv8.js";import"./chzj6qbe1fufxjay.js";import"./kmyp4ah1dd5ptfwx.js";import"./j9x5yz86yxlnd515.js";import"./leiuw82gjevvfzoe.js";import"./enzbfz65vpzupghi.js";import"./j70059cdefmxdczh.js";import"./mm9o2zoscihga6da.js";import"./doodretu0y6yq9ie.js";import"./l63ca3cm2p9lee2n.js";import"./e3nlqujb5lj65pa2.js";import"./c3bo1tgi83ukaug4.js";import"./hn3zskgmb2j8dfsg.js";import"./mmrg2ruvit3yy6k8.js";const T=L("Dismiss16Regular","16",["m2.59 2.72.06-.07a.5.5 0 0 1 .63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 0 1 .7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 0 1-.7-.7L7.29 8 2.65 3.35a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);function N({onNewThread:t,onOpenInMainWindow:r,onClose:n}){const i=w(),e=i.formatMessage({id:"cHkwhd",defaultMessage:"New chat"}),s=i.formatMessage({id:"BzpJ40",defaultMessage:"Open in Main Window"}),a=i.formatMessage({id:"63wWYx",defaultMessage:"Close"});return o.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex h-[32px] w-full justify-between",children:[o.jsx(m,{label:e,sideOffset:4,side:"bottom",children:o.jsx(p,{onClick:t,"aria-label":e,children:o.jsx(y,{})})}),r&&o.jsx(m,{label:s,sideOffset:4,side:"bottom",className:"ml-auto",children:o.jsx(p,{onClick:r,"aria-label":s,children:o.jsx(M,{})})}),o.jsx(m,{label:a,sideOffset:4,side:"bottom",children:o.jsx(D,{onClick:n,"aria-label":a,children:o.jsx(T,{})})})]})}const p=u.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-gray-200 active:bg-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-700`,D=u.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-red-500 hover:text-white active:bg-red-400 active:text-white`;function B({onNewThread:t,onOpenInMainWindow:r,onClose:n,children:i}){const e=c.useRef(null);return o.jsxs("div",{className:"flex h-full w-full flex-col pt-[32px]",ref:e,children:[o.jsx(N,{onNewThread:t,onOpenInMainWindow:r,onClose:n}),i]})}function R({clientThreadId:t}){const r=l.useStore(),n=f(),i=O(s=>S.resolveThreadId(t,s)),e=h();return c.useEffect(()=>{if(!e)return;function s(d){d.key==="Escape"&&!d.shiftKey&&!d.ctrlKey&&!d.metaKey&&!d.altKey&&l.hide()}function a(){e&&W()&&l.hide()}return e.document.addEventListener("keydown",s),e.addEventListener("blur",a),()=>{e.document.removeEventListener("keydown",s),e.removeEventListener("blur",a)}},[e]),o.jsx(B,{onNewThread:()=>{r.newThread(!0)},onOpenInMainWindow:i!==t||!k(t)?()=>{n(`/c/${t}`),r.newThread(!0),l.focusMainWindow()}:void 0,onClose:()=>{l.hide()},children:o.jsx(v,{clientThreadId:t})})}function Ee(){const{value:t}=x("3653083604"),{isOpen:r}=j(),n=E(a=>a.isVoiceModeActive),i=t&&!r&&!n,{clientThreadId:e}=l.useState(),s=l.useStore();if(c.useEffect(()=>{i&&!e&&s.newThread(!1)},[i,e,s]),!(!i||!e))return o.jsx(C,{features:`${g}=${b.COMPANION}`,children:o.jsx(R,{clientThreadId:e})})}export{Ee as DesktopCompanionWindowController};
//# sourceMappingURL=ol3e23lsqar2rh3e.js.map
