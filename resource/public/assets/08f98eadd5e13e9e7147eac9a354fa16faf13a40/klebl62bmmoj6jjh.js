import{ar as g,eU as d,W as E,aH as T,r as l,j as n,u as w,J as v,aq as h,fl as I,fm as b}from"./lj2b9v3ilohzzubf.js";import{C as _,a as W}from"./lcsk1vzbivcwjbyw.js";import{a as D}from"./hsszj936047x4vt2.js";import"./d51dno1tpc3lu5o0.js";import{b0 as C,ez as B,eA as y}from"./m2xe8hrs3fe8d0zo.js";import{b3 as L,b4 as S}from"./np8fo7dxv82gt6zv.js";import{c as j}from"./o4vn8qxawxe032d1.js";import"./bhbrwbqgjt2pxoro.js";import"./h2vwtx24g9nva0dp.js";import"./d3oipwmaenjajggo.js";import"./o545f88g8hpm6119.js";import"./dsellp5bliow2765.js";import"./utt1v4s8vubsyl62.js";import"./leetci8n826xoeaw.js";import"./n985yc0bql5eas8a.js";import"./ih9daw890a94om4n.js";import"./otlsz2b7ph0d84bq.js";import"./i8x718i0ayf9d2nr.js";const O=j("Dismiss16Regular","16",["m2.59 2.72.06-.07a.5.5 0 0 1 .63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 0 1 .7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 0 1-.7-.7L7.29 8 2.65 3.35a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);function p(s,r){return s/r}function x(){const[t,i]=l.useState({titleBarHeight:32,buttonWidth:46,iconSize:16}),{value:o}=w("842034403");return l.useEffect(()=>{if(!o)return;const e=async()=>{const u=await window.getScreenDetails(),c=window.devicePixelRatio/u.currentScreen.devicePixelRatio;i({titleBarHeight:p(32,c),buttonWidth:p(46,c),iconSize:p(16,c)})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[o]),t}function A({onNewThread:s,onOpenInMainWindow:r,onClose:a}){const t=v(),{titleBarHeight:i,buttonWidth:o,iconSize:e}=x(),u=t.formatMessage({id:"DAjGx7",defaultMessage:"New chat"}),c=t.formatMessage({defaultMessage:"Open in main window",id:"CompanionWindow.openInMainWindow1"}),m=t.formatMessage({id:"/LZfgc",defaultMessage:"Close"});return n.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex w-full justify-between",style:{height:`${i}px`},children:[n.jsx(h,{label:u,sideOffset:4,side:"bottom",children:n.jsx(f,{onClick:s,"aria-label":u,style:{height:`${i}px`,width:`${o}px`},children:n.jsx(L,{style:{height:`${e}px`,width:`${e}px`}})})}),n.jsx(h,{label:c,sideOffset:4,side:"bottom",className:"ml-auto",children:n.jsx(f,{onClick:r,"aria-label":c,style:{height:`${i}px`,width:`${o}px`},children:n.jsx(S,{style:{height:`${e}px`,width:`${e}px`}})})}),n.jsx(h,{label:m,sideOffset:4,side:"bottom",children:n.jsx(R,{onClick:a,"aria-label":m,style:{height:`${i}px`,width:`${o}px`},children:n.jsx(O,{style:{height:`${e}px`,width:`${e}px`}})})})]})}const f=g.button`flex items-center justify-center cursor-default hover:bg-gray-200 active:bg-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-700`,R=g.button`flex items-center justify-center cursor-default hover:bg-red-500 hover:text-white active:bg-red-400 active:text-white`;function $({onNewThread:s,onOpenInMainWindow:r,onClose:a,children:t}){const i=l.useRef(null),{titleBarHeight:o}=x(),e=C();return n.jsxs("div",{className:"flex h-full w-full flex-col",style:{paddingTop:e?void 0:`${o}px`,"--screen-titlebar-height":`${o}px`,"--screen-height-override":"calc(100dvh - var(--screen-titlebar-height))","--screen-scrollbar-gutter-override":"stable both-edges","--screen-inline-padding-override":"0px","--screen-inline-padding-offset-override":"0px","--conversation-turn-wrapper-padding-left-override":"1.25rem","--conversation-turn-wrapper-padding-right-override":"1.25rem"},ref:i,children:[n.jsx(A,{onNewThread:s,onOpenInMainWindow:r,onClose:a}),t]})}function N({clientThreadId:s}){const r=d.useStore(),a=E(),t=T();return l.useEffect(()=>{if(!t)return;function i(e){e.key==="Escape"&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&d.hide()}function o(){t&&B()&&d.hide()}return t.document.addEventListener("keydown",i),t.addEventListener("blur",o),()=>{t.document.removeEventListener("keydown",i),t.removeEventListener("blur",o)}},[t]),n.jsx($,{onNewThread:()=>{r.newThread(!0)},onOpenInMainWindow:()=>{a(`/c/${s}`),r.newThread(!0),d.focusMainWindow()},onClose:()=>{d.hide()},children:n.jsx(_,{clientThreadId:s})})}function ie(){const{value:s}=w("3653083604"),{isOpen:r}=y(),a=D(e=>e.isVoiceModeActive),t=s&&!r&&!a,{clientThreadId:i}=d.useState(),o=d.useStore();if(l.useEffect(()=>{t&&!i&&o.newThread(!1)},[t,i,o]),!(!t||!i))return n.jsx(W,{features:`${I}=${b.COMPANION}`,children:n.jsx(N,{clientThreadId:i})})}export{ie as DesktopCompanionWindowController};
//# sourceMappingURL=klebl62bmmoj6jjh.js.map
