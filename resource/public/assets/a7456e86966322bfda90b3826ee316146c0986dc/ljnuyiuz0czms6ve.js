import{$ as pe,q as me,r as n,B as H,_ as $,x as K,E as qe,z as g,H as Je,I as ze,J as Qe,K as en,ba as oe,t as be,w as W,b9 as nn,A as tn,C as on,F as rn,G as cn,y as O,en as xe,c8 as an,s as ge,N as he,l as b,m as y}from"./gghzs582a65dvm3m.js";import{bV as sn,cz as _e,cA as un,cB as dn,b_ as ve,bZ as ln,bY as ee,cC as fn,cD as $n}from"./pd094ob9wacofnvk.js";import{W as pn}from"./e34jsxd5qw5romn0.js";const ne=["Enter"," "],mn=["ArrowDown","PageUp","Home"],we=["ArrowUp","PageDown","End"],bn=[...mn,...we],xn={ltr:[...ne,"ArrowRight"],rtl:[...ne,"ArrowLeft"]},gn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Z="Menu",[A,hn,_n]=sn(Z),[P,Me]=pe(Z,[_n,me,_e]),q=me(),Ce=_e(),[Ee,R]=P(Z),[vn,j]=P(Z),wn=e=>{const{__scopeMenu:t,open:o=!1,children:r,dir:c,onOpenChange:a,modal:u=!0}=e,d=q(t),[f,m]=n.useState(null),i=n.useRef(!1),s=oe(a),p=nn(c);return n.useEffect(()=>{const x=()=>{i.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},h=()=>i.current=!1;return document.addEventListener("keydown",x,{capture:!0}),()=>{document.removeEventListener("keydown",x,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),n.createElement(be,d,n.createElement(Ee,{scope:t,open:o,onOpenChange:s,content:f,onContentChange:m},n.createElement(vn,{scope:t,onClose:n.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:i,dir:p,modal:u},r)))},Re=n.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e,c=q(o);return n.createElement(tn,$({},c,r,{ref:t}))}),De="MenuPortal",[Mn,Pe]=P(De,{forceMount:void 0}),Cn=e=>{const{__scopeMenu:t,forceMount:o,children:r,container:c}=e,a=R(De,t);return n.createElement(Mn,{scope:t,forceMount:o},n.createElement(H,{present:o||a.open},n.createElement(on,{asChild:!0,container:c},r)))},C="MenuContent",[En,re]=P(C),Rn=n.forwardRef((e,t)=>{const o=Pe(C,e.__scopeMenu),{forceMount:r=o.forceMount,...c}=e,a=R(C,e.__scopeMenu),u=j(C,e.__scopeMenu);return n.createElement(A.Provider,{scope:e.__scopeMenu},n.createElement(H,{present:r||a.open},n.createElement(A.Slot,{scope:e.__scopeMenu},u.modal?n.createElement(Dn,$({},c,{ref:t})):n.createElement(Pn,$({},c,{ref:t})))))}),Dn=n.forwardRef((e,t)=>{const o=R(C,e.__scopeMenu),r=n.useRef(null),c=K(t,r);return n.useEffect(()=>{const a=r.current;if(a)return qe(a)},[]),n.createElement(ce,$({},e,{ref:c,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:g(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)}))}),Pn=n.forwardRef((e,t)=>{const o=R(C,e.__scopeMenu);return n.createElement(ce,$({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)}))}),ce=n.forwardRef((e,t)=>{const{__scopeMenu:o,loop:r=!1,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:u,disableOutsidePointerEvents:d,onEntryFocus:f,onEscapeKeyDown:m,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:p,onDismiss:x,disableOutsideScroll:h,...w}=e,I=R(C,o),T=j(C,o),L=q(o),G=Ce(o),ae=hn(o),[Be,se]=n.useState(null),U=n.useRef(null),Ye=K(t,U,I.onContentChange),V=n.useRef(0),B=n.useRef(""),Xe=n.useRef(0),J=n.useRef(null),ue=n.useRef("right"),z=n.useRef(0),We=h?rn:n.Fragment,He=h?{as:cn,allowPinchZoom:!0}:void 0,Ze=l=>{var _,M;const D=B.current+l,k=ae().filter(E=>!E.disabled),Q=document.activeElement,de=(_=k.find(E=>E.ref.current===Q))===null||_===void 0?void 0:_.textValue,Y=k.map(E=>E.textValue),N=Hn(Y,D,de),ie=(M=k.find(E=>E.textValue===N))===null||M===void 0?void 0:M.ref.current;(function E(le){B.current=le,window.clearTimeout(V.current),le!==""&&(V.current=window.setTimeout(()=>E(""),1e3))})(D),ie&&setTimeout(()=>ie.focus())};n.useEffect(()=>()=>window.clearTimeout(V.current),[]),Je();const S=n.useCallback(l=>{var _,M;return ue.current===((_=J.current)===null||_===void 0?void 0:_.side)&&qn(l,(M=J.current)===null||M===void 0?void 0:M.area)},[]);return n.createElement(En,{scope:o,searchRef:B,onItemEnter:n.useCallback(l=>{S(l)&&l.preventDefault()},[S]),onItemLeave:n.useCallback(l=>{var _;S(l)||((_=U.current)===null||_===void 0||_.focus(),se(null))},[S]),onTriggerLeave:n.useCallback(l=>{S(l)&&l.preventDefault()},[S]),pointerGraceTimerRef:Xe,onPointerGraceIntentChange:n.useCallback(l=>{J.current=l},[])},n.createElement(We,He,n.createElement(ze,{asChild:!0,trapped:c,onMountAutoFocus:g(a,l=>{var _;l.preventDefault(),(_=U.current)===null||_===void 0||_.focus()}),onUnmountAutoFocus:u},n.createElement(Qe,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:m,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:p,onDismiss:x},n.createElement(un,$({asChild:!0},G,{dir:T.dir,orientation:"vertical",loop:r,currentTabStopId:Be,onCurrentTabStopIdChange:se,onEntryFocus:g(f,l=>{T.isUsingKeyboardRef.current||l.preventDefault()})}),n.createElement(en,$({role:"menu","aria-orientation":"vertical","data-state":ke(I.open),"data-radix-menu-content":"",dir:T.dir},L,w,{ref:Ye,style:{outline:"none",...w.style},onKeyDown:g(w.onKeyDown,l=>{const M=l.target.closest("[data-radix-menu-content]")===l.currentTarget,D=l.ctrlKey||l.altKey||l.metaKey,k=l.key.length===1;M&&(l.key==="Tab"&&l.preventDefault(),!D&&k&&Ze(l.key));const Q=U.current;if(l.target!==Q||!bn.includes(l.key))return;l.preventDefault();const Y=ae().filter(N=>!N.disabled).map(N=>N.ref.current);we.includes(l.key)&&Y.reverse(),Xn(Y)}),onBlur:g(e.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout(V.current),B.current="")}),onPointerMove:g(e.onPointerMove,F(l=>{const _=l.target,M=z.current!==l.clientX;if(l.currentTarget.contains(_)&&M){const D=l.clientX>z.current?"right":"left";ue.current=D,z.current=l.clientX}}))})))))))}),In=n.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e;return n.createElement(O.div,$({role:"group"},r,{ref:t}))}),Sn=n.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e;return n.createElement(O.div,$({},r,{ref:t}))}),te="MenuItem",fe="menu.itemSelect",Ie=n.forwardRef((e,t)=>{const{disabled:o=!1,onSelect:r,...c}=e,a=n.useRef(null),u=j(te,e.__scopeMenu),d=re(te,e.__scopeMenu),f=K(t,a),m=n.useRef(!1),i=()=>{const s=a.current;if(!o&&s){const p=new CustomEvent(fe,{bubbles:!0,cancelable:!0});s.addEventListener(fe,x=>r==null?void 0:r(x),{once:!0}),an(s,p),p.defaultPrevented?m.current=!1:u.onClose()}};return n.createElement(Se,$({},c,{ref:f,disabled:o,onClick:g(e.onClick,i),onPointerDown:s=>{var p;(p=e.onPointerDown)===null||p===void 0||p.call(e,s),m.current=!0},onPointerUp:g(e.onPointerUp,s=>{var p;m.current||(p=s.currentTarget)===null||p===void 0||p.click()}),onKeyDown:g(e.onKeyDown,s=>{const p=d.searchRef.current!=="";o||p&&s.key===" "||ne.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})}))}),Se=n.forwardRef((e,t)=>{const{__scopeMenu:o,disabled:r=!1,textValue:c,...a}=e,u=re(te,o),d=Ce(o),f=n.useRef(null),m=K(t,f),[i,s]=n.useState(!1),[p,x]=n.useState("");return n.useEffect(()=>{const h=f.current;if(h){var w;x(((w=h.textContent)!==null&&w!==void 0?w:"").trim())}},[a.children]),n.createElement(A.ItemSlot,{scope:o,disabled:r,textValue:c??p},n.createElement(dn,$({asChild:!0},d,{focusable:!r}),n.createElement(O.div,$({role:"menuitem","data-highlighted":i?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},a,{ref:m,onPointerMove:g(e.onPointerMove,F(h=>{r?u.onItemLeave(h):(u.onItemEnter(h),h.defaultPrevented||h.currentTarget.focus())})),onPointerLeave:g(e.onPointerLeave,F(h=>u.onItemLeave(h))),onFocus:g(e.onFocus,()=>s(!0)),onBlur:g(e.onBlur,()=>s(!1))}))))}),yn="MenuRadioGroup",[On,Tn]=P(yn,{value:void 0,onValueChange:()=>{}}),kn=n.forwardRef((e,t)=>{const{value:o,onValueChange:r,...c}=e,a=oe(r);return n.createElement(On,{scope:e.__scopeMenu,value:o,onValueChange:a},n.createElement(In,$({},c,{ref:t})))}),Nn="MenuRadioItem",An=n.forwardRef((e,t)=>{const{value:o,...r}=e,c=Tn(Nn,e.__scopeMenu),a=o===c.value;return n.createElement(Fn,{scope:e.__scopeMenu,checked:a},n.createElement(Ie,$({role:"menuitemradio","aria-checked":a},r,{ref:t,"data-state":Ae(a),onSelect:g(r.onSelect,()=>{var u;return(u=c.onValueChange)===null||u===void 0?void 0:u.call(c,o)},{checkForDefaultPrevented:!1})})))}),ye="MenuItemIndicator",[Fn,Kn]=P(ye,{checked:!1}),jn=n.forwardRef((e,t)=>{const{__scopeMenu:o,forceMount:r,...c}=e,a=Kn(ye,o);return n.createElement(H,{present:r||Ne(a.checked)||a.checked===!0},n.createElement(O.span,$({},c,{ref:t,"data-state":Ae(a.checked)})))}),Ln=n.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e;return n.createElement(O.div,$({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))}),Oe="MenuSub",[Gn,Te]=P(Oe),Un=e=>{const{__scopeMenu:t,children:o,open:r=!1,onOpenChange:c}=e,a=R(Oe,t),u=q(t),[d,f]=n.useState(null),[m,i]=n.useState(null),s=oe(c);return n.useEffect(()=>(a.open===!1&&s(!1),()=>s(!1)),[a.open,s]),n.createElement(be,u,n.createElement(Ee,{scope:t,open:r,onOpenChange:s,content:m,onContentChange:i},n.createElement(Gn,{scope:t,contentId:W(),triggerId:W(),trigger:d,onTriggerChange:f},o)))},X="MenuSubTrigger",Vn=n.forwardRef((e,t)=>{const o=R(X,e.__scopeMenu),r=j(X,e.__scopeMenu),c=Te(X,e.__scopeMenu),a=re(X,e.__scopeMenu),u=n.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:f}=a,m={__scopeMenu:e.__scopeMenu},i=n.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return n.useEffect(()=>i,[i]),n.useEffect(()=>{const s=d.current;return()=>{window.clearTimeout(s),f(null)}},[d,f]),n.createElement(Re,$({asChild:!0},m),n.createElement(Se,$({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":c.contentId,"data-state":ke(o.open)},e,{ref:xe(t,c.onTriggerChange),onClick:s=>{var p;(p=e.onClick)===null||p===void 0||p.call(e,s),!(e.disabled||s.defaultPrevented)&&(s.currentTarget.focus(),o.open||o.onOpenChange(!0))},onPointerMove:g(e.onPointerMove,F(s=>{a.onItemEnter(s),!s.defaultPrevented&&!e.disabled&&!o.open&&!u.current&&(a.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{o.onOpenChange(!0),i()},100))})),onPointerLeave:g(e.onPointerLeave,F(s=>{var p;i();const x=(p=o.content)===null||p===void 0?void 0:p.getBoundingClientRect();if(x){var h;const w=(h=o.content)===null||h===void 0?void 0:h.dataset.side,I=w==="right",T=I?-5:5,L=x[I?"left":"right"],G=x[I?"right":"left"];a.onPointerGraceIntentChange({area:[{x:s.clientX+T,y:s.clientY},{x:L,y:x.top},{x:G,y:x.top},{x:G,y:x.bottom},{x:L,y:x.bottom}],side:w}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(s),s.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:g(e.onKeyDown,s=>{const p=a.searchRef.current!=="";if(!(e.disabled||p&&s.key===" ")&&xn[r.dir].includes(s.key)){var x;o.onOpenChange(!0),(x=o.content)===null||x===void 0||x.focus(),s.preventDefault()}})})))}),Bn="MenuSubContent",Yn=n.forwardRef((e,t)=>{const o=Pe(C,e.__scopeMenu),{forceMount:r=o.forceMount,...c}=e,a=R(C,e.__scopeMenu),u=j(C,e.__scopeMenu),d=Te(Bn,e.__scopeMenu),f=n.useRef(null),m=K(t,f);return n.createElement(A.Provider,{scope:e.__scopeMenu},n.createElement(H,{present:r||a.open},n.createElement(A.Slot,{scope:e.__scopeMenu},n.createElement(ce,$({id:d.contentId,"aria-labelledby":d.triggerId},c,{ref:m,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:i=>{var s;u.isUsingKeyboardRef.current&&((s=f.current)===null||s===void 0||s.focus()),i.preventDefault()},onCloseAutoFocus:i=>i.preventDefault(),onFocusOutside:g(e.onFocusOutside,i=>{i.target!==d.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:g(e.onEscapeKeyDown,i=>{u.onClose(),i.preventDefault()}),onKeyDown:g(e.onKeyDown,i=>{const s=i.currentTarget.contains(i.target),p=gn[u.dir].includes(i.key);if(s&&p){var x;a.onOpenChange(!1),(x=d.trigger)===null||x===void 0||x.focus(),i.preventDefault()}})})))))});function ke(e){return e?"open":"closed"}function Ne(e){return e==="indeterminate"}function Ae(e){return Ne(e)?"indeterminate":e?"checked":"unchecked"}function Xn(e){const t=document.activeElement;for(const o of e)if(o===t||(o.focus(),document.activeElement!==t))return}function Wn(e,t){return e.map((o,r)=>e[(t+r)%e.length])}function Hn(e,t,o){const c=t.length>1&&Array.from(t).every(m=>m===t[0])?t[0]:t,a=o?e.indexOf(o):-1;let u=Wn(e,Math.max(a,0));c.length===1&&(u=u.filter(m=>m!==o));const f=u.find(m=>m.toLowerCase().startsWith(c.toLowerCase()));return f!==o?f:void 0}function Zn(e,t){const{x:o,y:r}=e;let c=!1;for(let a=0,u=t.length-1;a<t.length;u=a++){const d=t[a].x,f=t[a].y,m=t[u].x,i=t[u].y;f>r!=i>r&&o<(m-d)*(r-f)/(i-f)+d&&(c=!c)}return c}function qn(e,t){if(!t)return!1;const o={x:e.clientX,y:e.clientY};return Zn(o,t)}function F(e){return t=>t.pointerType==="mouse"?e(t):void 0}const Jn=wn,zn=Re,Qn=Cn,et=Rn,nt=Sn,tt=Ie,ot=kn,rt=An,ct=jn,at=Ln,st=Un,ut=Vn,dt=Yn,Fe="DropdownMenu",[it,Ht]=pe(Fe,[Me]),v=Me(),[lt,Ke]=it(Fe),ft=e=>{const{__scopeDropdownMenu:t,children:o,dir:r,open:c,defaultOpen:a,onOpenChange:u,modal:d=!0}=e,f=v(t),m=n.useRef(null),[i=!1,s]=ge({prop:c,defaultProp:a,onChange:u});return n.createElement(lt,{scope:t,triggerId:W(),triggerRef:m,contentId:W(),open:i,onOpenChange:s,onOpenToggle:n.useCallback(()=>s(p=>!p),[s]),modal:d},n.createElement(Jn,$({},f,{open:i,onOpenChange:s,dir:r,modal:d}),o))},$t="DropdownMenuTrigger",pt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,disabled:r=!1,...c}=e,a=Ke($t,o),u=v(o);return n.createElement(zn,$({asChild:!0},u),n.createElement(O.button,$({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},c,{ref:xe(t,a.triggerRef),onPointerDown:g(e.onPointerDown,d=>{!r&&d.button===0&&d.ctrlKey===!1&&(a.onOpenToggle(),a.open||d.preventDefault())}),onKeyDown:g(e.onKeyDown,d=>{r||(["Enter"," "].includes(d.key)&&a.onOpenToggle(),d.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})))}),mt=e=>{const{__scopeDropdownMenu:t,...o}=e,r=v(t);return n.createElement(Qn,$({},r,o))},bt="DropdownMenuContent",xt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=Ke(bt,o),a=v(o),u=n.useRef(!1);return n.createElement(et,$({id:c.contentId,"aria-labelledby":c.triggerId},a,r,{ref:t,onCloseAutoFocus:g(e.onCloseAutoFocus,d=>{var f;u.current||(f=c.triggerRef.current)===null||f===void 0||f.focus(),u.current=!1,d.preventDefault()}),onInteractOutside:g(e.onInteractOutside,d=>{const f=d.detail.originalEvent,m=f.button===0&&f.ctrlKey===!0,i=f.button===2||m;(!c.modal||i)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),gt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=v(o);return n.createElement(nt,$({},c,r,{ref:t}))}),ht=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=v(o);return n.createElement(tt,$({},c,r,{ref:t}))}),_t=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=v(o);return n.createElement(ot,$({},c,r,{ref:t}))}),vt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=v(o);return n.createElement(rt,$({},c,r,{ref:t}))}),wt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=v(o);return n.createElement(ct,$({},c,r,{ref:t}))}),Mt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=v(o);return n.createElement(at,$({},c,r,{ref:t}))}),Ct=e=>{const{__scopeDropdownMenu:t,children:o,open:r,onOpenChange:c,defaultOpen:a}=e,u=v(t),[d=!1,f]=ge({prop:r,defaultProp:a,onChange:c});return n.createElement(st,$({},u,{open:d,onOpenChange:f}),o)},Et=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=v(o);return n.createElement(ut,$({},c,r,{ref:t}))}),Rt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,c=v(o);return n.createElement(dt,$({},c,r,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),je=ft,Le=pt,Ge=mt,Dt=xt,Pt=gt,$e=ht,It=_t,St=vt,yt=wt,Ot=Mt,Tt=Ct,kt=Et,Nt=Rt,Ue=he.forwardRef(function({className:t,size:o="default",align:r,...c},a){return b.jsx(ve,{ref:a,$as:Dt,sideOffset:4,align:r??"start",collisionPadding:10,className:y({"min-w-[280px]":o==="default","min-w-[340px]":o==="large","min-w-[125px]":o==="small","overflow-hidden":!0},t),...c})});function At(e){return b.jsx(ln,{$as:Le,...e,onFocusCapture:t=>{var o;t.stopPropagation(),(o=e.onFocusCapture)==null||o.call(e,t)}})}function Ft({onSelect:e,icon:t,className:o,color:r,size:c="default",testId:a,...u},d){const f=t;return t?b.jsxs(ee,{$as:$e,ref:d,onSelect:e,className:y(r==="danger"&&"text-token-text-error",c==="large"&&"gap-3",o),"data-testid":a,...u,children:[b.jsx("div",{className:y("flex items-center justify-center",r==="danger"&&"text-token-text-error",r!=="danger"&&"text-token-text-secondary",c==="default"&&"h-5 w-5",c==="large"&&"h-5 w-7"),children:n.isValidElement(t)?t:b.jsx(f,{className:"h-5 w-5 shrink-0"})}),u.children]}):b.jsx(ee,{$as:$e,ref:d,onSelect:e,className:y(r==="danger"&&"text-token-text-error",o),...u})}function Kt({className:e,...t}){return b.jsx(Ot,{className:y("mx-5 my-1 h-px bg-token-border-light",e),...t})}function jt({onSelect:e,children:t,...o}){return b.jsxs(fn,{$as:St,onSelect:e,...o,children:[b.jsx(yt,{className:"absolute",children:b.jsx(pn,{className:"icon-sm"})}),b.jsx("span",{className:"ml-6",children:t})]})}function Lt(e){const{className:t,...o}=e;return b.jsx(ve,{$as:Nt,className:y("mt-2 max-h-[calc(100vh-300px)] min-w-[100px] overflow-auto",t),sideOffset:8,alignOffset:-16,collisionPadding:20,...o})}function Gt(e){const{icon:t,children:o,...r}=e;return b.jsxs(ee,{$as:kt,...r,children:[t&&b.jsx("div",{className:"flex h-5 w-5 items-center justify-center text-token-text-secondary",children:b.jsx(t,{className:"h-5 w-5 flex-shrink-0"})}),o,b.jsx("div",{className:"ml-auto flex items-center text-token-text-tertiary group-data-[disabled]:opacity-50",children:b.jsx($n,{className:"icon-md"})})]})}function Zt({triggerButton:e,children:t,size:o="default",open:r,onOpenChange:c,contentAlign:a,side:u,sideOffset:d=0,alignOffset:f=0,contentClassName:m}){var s;const i=n.useRef(null);return b.jsxs(je,{modal:!1,open:r,onOpenChange:c,children:[b.jsx(Le,{asChild:!0,ref:i,children:e}),b.jsx(Ge,{container:(s=i.current)==null?void 0:s.ownerDocument.body,children:b.jsx(Ue,{size:o,align:a,alignOffset:f,side:u,sideOffset:d,className:m,children:t})})]})}function Ut({children:e}){return b.jsx(Pt,{className:"mx-2 my-0 px-2 text-xs font-semibold text-token-text-secondary",children:e})}const Ve=n.createContext(null);function Vt(e){var c;const{children:t,...o}=e,r=n.useRef(null);return b.jsxs(je,{...o,children:[b.jsx("span",{className:"hidden",ref:r}),b.jsx(Ve.Provider,{value:((c=r.current)==null?void 0:c.ownerDocument)??null,children:t})]})}function Bt(e){const{children:t,...o}=e,r=n.useContext(Ve);return b.jsx(Ge,{container:r==null?void 0:r.body,...o,children:t})}const qt={Root:Vt,Trigger:At,Portal:Bt,Content:Ue,Item:he.forwardRef(Ft),Separator:Kt,RadioGroup:It,RadioItem:jt,Sub:Tt,SubContent:Lt,SubMenuTrigger:Gt,Label:Ut};export{Le as $,Zt as B,qt as D};
//# sourceMappingURL=ljnuyiuz0czms6ve.js.map
