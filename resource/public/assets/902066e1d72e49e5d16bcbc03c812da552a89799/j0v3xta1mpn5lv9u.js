import{a1 as p,dY as a,bE as f,U as h,r as m,l as e,X as w,bm as x,eI as b,eJ as g}from"./j51q469vqqyswwq0.js";import{C as v,a as C}from"./dqf9tsjvd9anpymk.js";import{ee as W,c,ef as j}from"./obfv3y06hphbdxag.js";import{b3 as y,b4 as E}from"./nakmlpxnz8km92cm.js";import{b as k,a as M,l as O}from"./bhohgwthir2krdjp.js";import{c as S}from"./c9tkbvzq81lrpaol.js";import"./1sbljp6832i8csyf.js";import"./eq1a948h5ja80igb.js";import"./ckxksx1fpuuymnl0.js";import"./d8jxcgzgxqig2mkw.js";import"./norrhrtwn06eo0rl.js";import"./gxr4a24xgpsgpxf0.js";import"./ktqwgaolag0lyhuk.js";import"./ovwigcku86ragnxi.js";import"./egu4x3uf3rb117kx.js";import"./duhba84pe3ongyzk.js";import"./h2j4dl7822y63znb.js";import"./dx1kft3turolxdnj.js";import"./cvissq6nouyk550c.js";import"./hpbm273bn1r1dl1w.js";import"./lekbmt0int1ydbph.js";import"./i19602kfz3tapo6n.js";import"./lwbqa1df9hzwwtd8.js";import"./hrr6enb8hpk9oxy9.js";import"./oremrru2v6xyxcko.js";import"./bpczpv0guerapvqi.js";import"./d32c9hbviwnzsmjo.js";import"./k902qq8cllnn4qh8.js";import"./lgf5y8t1ymmvwqgj.js";import"./e6xtvwen9t1l7c7s.js";import"./j3spc189b36cp0w7.js";const L=S("Dismiss16Regular","16",["m2.59 2.72.06-.07a.5.5 0 0 1 .63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 0 1 .7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 0 1-.7-.7L7.29 8 2.65 3.35a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);function N({onNewThread:s,onOpenInMainWindow:i,onClose:n}){const t=w(),o=t.formatMessage({id:"cHkwhd",defaultMessage:"New chat"}),r=t.formatMessage({id:"BzpJ40",defaultMessage:"Open in Main Window"}),l=t.formatMessage({id:"63wWYx",defaultMessage:"Close"});return e.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex h-[32px] w-full justify-between",children:[e.jsx(c,{label:o,sideOffset:4,side:"bottom",children:e.jsx(u,{onClick:s,"aria-label":o,children:e.jsx(y,{})})}),i&&e.jsx(c,{label:r,sideOffset:4,side:"bottom",className:"ml-auto",children:e.jsx(u,{onClick:i,"aria-label":r,children:e.jsx(E,{})})}),e.jsx(c,{label:l,sideOffset:4,side:"bottom",children:e.jsx(T,{onClick:n,"aria-label":l,children:e.jsx(L,{})})})]})}const u=p.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-gray-200 active:bg-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-700`,T=p.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-red-500 hover:text-white active:bg-red-400 active:text-white`;function B({onNewThread:s,onOpenInMainWindow:i,onClose:n,children:t}){const o=m.useRef(null);return e.jsxs("div",{className:"flex h-full w-full flex-col pt-[32px]",ref:o,children:[e.jsx(N,{onNewThread:s,onOpenInMainWindow:i,onClose:n}),t]})}function D({clientThreadId:s}){const i=a.useStore(),n=f(),t=k(r=>M.resolveThreadId(s,r)),o=h();return m.useEffect(()=>{if(!o)return;function r(d){d.key==="Escape"&&!d.shiftKey&&!d.ctrlKey&&!d.metaKey&&!d.altKey&&a.hide()}function l(){o&&W()&&a.hide()}return o.document.addEventListener("keydown",r),o.addEventListener("blur",l),()=>{o.document.removeEventListener("keydown",r),o.removeEventListener("blur",l)}},[o]),e.jsx(B,{onNewThread:()=>{i.newThread()},onOpenInMainWindow:t!==s||!O(s)?()=>{n(`/c/${s}`),i.newThread(),a.focusMainWindow()}:void 0,onClose:()=>{a.hide()},children:e.jsx(v,{clientThreadId:s})})}function ue(){const{value:s}=x("3653083604"),{isOpen:i}=j(),n=s&&!i,{clientThreadId:t}=a.useState(),o=a.useStore();if(m.useEffect(()=>{n&&!t&&o.newThread()},[n,t,o]),!(!n||!t))return e.jsx(C,{features:`${b}=${g.COMPANION}`,children:e.jsx(D,{clientThreadId:t})})}export{ue as DesktopCompanionWindowController};
//# sourceMappingURL=j0v3xta1mpn5lv9u.js.map
