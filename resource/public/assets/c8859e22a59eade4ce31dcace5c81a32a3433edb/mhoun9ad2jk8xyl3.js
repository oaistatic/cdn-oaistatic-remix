import{aE as pe,ce as me,r as n,aY as W,aH as $,aF as K,ch as Qe,aM as g,cj as Ze,ck as qe,cl as ze,cm as en,aK as oe,cf as be,aN as H,aI as nn,cg as tn,c2 as on,ci as cn,aG as rn,aL as O,eG as xe,c3 as an,aJ as ge,Q as he,t as b,T as y}from"./elatgogjtv7nqe0m.js";import{cG as sn,ee as ve,ef as un,eg as dn,cL as _e,cK as ln,cJ as ee,eh as fn,ei as $n}from"./htp5iqft2rzvr58f.js";import{G as pn}from"./cr91oy4eihkrvo1z.js";const ne=["Enter"," "],mn=["ArrowDown","PageUp","Home"],we=["ArrowUp","PageDown","End"],bn=[...mn,...we],xn={ltr:[...ne,"ArrowRight"],rtl:[...ne,"ArrowLeft"]},gn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},J="Menu",[F,hn,vn]=sn(J),[P,Me]=pe(J,[vn,me,ve]),Q=me(),Ce=ve(),[Ee,R]=P(J),[_n,L]=P(J),wn=e=>{const{__scopeMenu:t,open:o=!1,children:c,dir:r,onOpenChange:a,modal:u=!0}=e,d=Q(t),[l,m]=n.useState(null),f=n.useRef(!1),s=oe(a),p=nn(r);return n.useEffect(()=>{const x=()=>{f.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},h=()=>f.current=!1;return document.addEventListener("keydown",x,{capture:!0}),()=>{document.removeEventListener("keydown",x,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),n.createElement(be,d,n.createElement(Ee,{scope:t,open:o,onOpenChange:s,content:l,onContentChange:m},n.createElement(_n,{scope:t,onClose:n.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:f,dir:p,modal:u},c)))},Re=n.forwardRef((e,t)=>{const{__scopeMenu:o,...c}=e,r=Q(o);return n.createElement(tn,$({},r,c,{ref:t}))}),De="MenuPortal",[Mn,Pe]=P(De,{forceMount:void 0}),Cn=e=>{const{__scopeMenu:t,forceMount:o,children:c,container:r}=e,a=R(De,t);return n.createElement(Mn,{scope:t,forceMount:o},n.createElement(W,{present:o||a.open},n.createElement(on,{asChild:!0,container:r},c)))},C="MenuContent",[En,ce]=P(C),Rn=n.forwardRef((e,t)=>{const o=Pe(C,e.__scopeMenu),{forceMount:c=o.forceMount,...r}=e,a=R(C,e.__scopeMenu),u=L(C,e.__scopeMenu);return n.createElement(F.Provider,{scope:e.__scopeMenu},n.createElement(W,{present:c||a.open},n.createElement(F.Slot,{scope:e.__scopeMenu},u.modal?n.createElement(Dn,$({},r,{ref:t})):n.createElement(Pn,$({},r,{ref:t})))))}),Dn=n.forwardRef((e,t)=>{const o=R(C,e.__scopeMenu),c=n.useRef(null),r=K(t,c);return n.useEffect(()=>{const a=c.current;if(a)return Qe(a)},[]),n.createElement(re,$({},e,{ref:r,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:g(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)}))}),Pn=n.forwardRef((e,t)=>{const o=R(C,e.__scopeMenu);return n.createElement(re,$({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)}))}),re=n.forwardRef((e,t)=>{const{__scopeMenu:o,loop:c=!1,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:u,disableOutsidePointerEvents:d,onEntryFocus:l,onEscapeKeyDown:m,onPointerDownOutside:f,onFocusOutside:s,onInteractOutside:p,onDismiss:x,disableOutsideScroll:h,...w}=e,I=R(C,o),T=L(C,o),j=Q(o),G=Ce(o),ae=hn(o),[Be,se]=n.useState(null),U=n.useRef(null),Ye=K(t,U,I.onContentChange),V=n.useRef(0),B=n.useRef(""),Xe=n.useRef(0),Z=n.useRef(null),ue=n.useRef("right"),q=n.useRef(0),He=h?cn:n.Fragment,We=h?{as:rn,allowPinchZoom:!0}:void 0,Je=i=>{var v,M;const D=B.current+i,k=ae().filter(E=>!E.disabled),z=document.activeElement,de=(v=k.find(E=>E.ref.current===z))===null||v===void 0?void 0:v.textValue,Y=k.map(E=>E.textValue),N=Wn(Y,D,de),ie=(M=k.find(E=>E.textValue===N))===null||M===void 0?void 0:M.ref.current;(function E(le){B.current=le,window.clearTimeout(V.current),le!==""&&(V.current=window.setTimeout(()=>E(""),1e3))})(D),ie&&setTimeout(()=>ie.focus())};n.useEffect(()=>()=>window.clearTimeout(V.current),[]),Ze();const S=n.useCallback(i=>{var v,M;return ue.current===((v=Z.current)===null||v===void 0?void 0:v.side)&&Qn(i,(M=Z.current)===null||M===void 0?void 0:M.area)},[]);return n.createElement(En,{scope:o,searchRef:B,onItemEnter:n.useCallback(i=>{S(i)&&i.preventDefault()},[S]),onItemLeave:n.useCallback(i=>{var v;S(i)||((v=U.current)===null||v===void 0||v.focus(),se(null))},[S]),onTriggerLeave:n.useCallback(i=>{S(i)&&i.preventDefault()},[S]),pointerGraceTimerRef:Xe,onPointerGraceIntentChange:n.useCallback(i=>{Z.current=i},[])},n.createElement(He,We,n.createElement(qe,{asChild:!0,trapped:r,onMountAutoFocus:g(a,i=>{var v;i.preventDefault(),(v=U.current)===null||v===void 0||v.focus()}),onUnmountAutoFocus:u},n.createElement(ze,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:m,onPointerDownOutside:f,onFocusOutside:s,onInteractOutside:p,onDismiss:x},n.createElement(un,$({asChild:!0},G,{dir:T.dir,orientation:"vertical",loop:c,currentTabStopId:Be,onCurrentTabStopIdChange:se,onEntryFocus:g(l,i=>{T.isUsingKeyboardRef.current||i.preventDefault()})}),n.createElement(en,$({role:"menu","aria-orientation":"vertical","data-state":ke(I.open),"data-radix-menu-content":"",dir:T.dir},j,w,{ref:Ye,style:{outline:"none",...w.style},onKeyDown:g(w.onKeyDown,i=>{const M=i.target.closest("[data-radix-menu-content]")===i.currentTarget,D=i.ctrlKey||i.altKey||i.metaKey,k=i.key.length===1;M&&(i.key==="Tab"&&i.preventDefault(),!D&&k&&Je(i.key));const z=U.current;if(i.target!==z||!bn.includes(i.key))return;i.preventDefault();const Y=ae().filter(N=>!N.disabled).map(N=>N.ref.current);we.includes(i.key)&&Y.reverse(),Xn(Y)}),onBlur:g(e.onBlur,i=>{i.currentTarget.contains(i.target)||(window.clearTimeout(V.current),B.current="")}),onPointerMove:g(e.onPointerMove,A(i=>{const v=i.target,M=q.current!==i.clientX;if(i.currentTarget.contains(v)&&M){const D=i.clientX>q.current?"right":"left";ue.current=D,q.current=i.clientX}}))})))))))}),In=n.forwardRef((e,t)=>{const{__scopeMenu:o,...c}=e;return n.createElement(O.div,$({role:"group"},c,{ref:t}))}),Sn=n.forwardRef((e,t)=>{const{__scopeMenu:o,...c}=e;return n.createElement(O.div,$({},c,{ref:t}))}),te="MenuItem",fe="menu.itemSelect",Ie=n.forwardRef((e,t)=>{const{disabled:o=!1,onSelect:c,...r}=e,a=n.useRef(null),u=L(te,e.__scopeMenu),d=ce(te,e.__scopeMenu),l=K(t,a),m=n.useRef(!1),f=()=>{const s=a.current;if(!o&&s){const p=new CustomEvent(fe,{bubbles:!0,cancelable:!0});s.addEventListener(fe,x=>c?.(x),{once:!0}),an(s,p),p.defaultPrevented?m.current=!1:u.onClose()}};return n.createElement(Se,$({},r,{ref:l,disabled:o,onClick:g(e.onClick,f),onPointerDown:s=>{var p;(p=e.onPointerDown)===null||p===void 0||p.call(e,s),m.current=!0},onPointerUp:g(e.onPointerUp,s=>{var p;m.current||(p=s.currentTarget)===null||p===void 0||p.click()}),onKeyDown:g(e.onKeyDown,s=>{const p=d.searchRef.current!=="";o||p&&s.key===" "||ne.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})}))}),Se=n.forwardRef((e,t)=>{const{__scopeMenu:o,disabled:c=!1,textValue:r,...a}=e,u=ce(te,o),d=Ce(o),l=n.useRef(null),m=K(t,l),[f,s]=n.useState(!1),[p,x]=n.useState("");return n.useEffect(()=>{const h=l.current;if(h){var w;x(((w=h.textContent)!==null&&w!==void 0?w:"").trim())}},[a.children]),n.createElement(F.ItemSlot,{scope:o,disabled:c,textValue:r??p},n.createElement(dn,$({asChild:!0},d,{focusable:!c}),n.createElement(O.div,$({role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":c||void 0,"data-disabled":c?"":void 0},a,{ref:m,onPointerMove:g(e.onPointerMove,A(h=>{c?u.onItemLeave(h):(u.onItemEnter(h),h.defaultPrevented||h.currentTarget.focus())})),onPointerLeave:g(e.onPointerLeave,A(h=>u.onItemLeave(h))),onFocus:g(e.onFocus,()=>s(!0)),onBlur:g(e.onBlur,()=>s(!1))}))))}),yn="MenuRadioGroup",[On,Tn]=P(yn,{value:void 0,onValueChange:()=>{}}),kn=n.forwardRef((e,t)=>{const{value:o,onValueChange:c,...r}=e,a=oe(c);return n.createElement(On,{scope:e.__scopeMenu,value:o,onValueChange:a},n.createElement(In,$({},r,{ref:t})))}),Nn="MenuRadioItem",Fn=n.forwardRef((e,t)=>{const{value:o,...c}=e,r=Tn(Nn,e.__scopeMenu),a=o===r.value;return n.createElement(An,{scope:e.__scopeMenu,checked:a},n.createElement(Ie,$({role:"menuitemradio","aria-checked":a},c,{ref:t,"data-state":Fe(a),onSelect:g(c.onSelect,()=>{var u;return(u=r.onValueChange)===null||u===void 0?void 0:u.call(r,o)},{checkForDefaultPrevented:!1})})))}),ye="MenuItemIndicator",[An,Kn]=P(ye,{checked:!1}),Ln=n.forwardRef((e,t)=>{const{__scopeMenu:o,forceMount:c,...r}=e,a=Kn(ye,o);return n.createElement(W,{present:c||Ne(a.checked)||a.checked===!0},n.createElement(O.span,$({},r,{ref:t,"data-state":Fe(a.checked)})))}),jn=n.forwardRef((e,t)=>{const{__scopeMenu:o,...c}=e;return n.createElement(O.div,$({role:"separator","aria-orientation":"horizontal"},c,{ref:t}))}),Oe="MenuSub",[Gn,Te]=P(Oe),Un=e=>{const{__scopeMenu:t,children:o,open:c=!1,onOpenChange:r}=e,a=R(Oe,t),u=Q(t),[d,l]=n.useState(null),[m,f]=n.useState(null),s=oe(r);return n.useEffect(()=>(a.open===!1&&s(!1),()=>s(!1)),[a.open,s]),n.createElement(be,u,n.createElement(Ee,{scope:t,open:c,onOpenChange:s,content:m,onContentChange:f},n.createElement(Gn,{scope:t,contentId:H(),triggerId:H(),trigger:d,onTriggerChange:l},o)))},X="MenuSubTrigger",Vn=n.forwardRef((e,t)=>{const o=R(X,e.__scopeMenu),c=L(X,e.__scopeMenu),r=Te(X,e.__scopeMenu),a=ce(X,e.__scopeMenu),u=n.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:l}=a,m={__scopeMenu:e.__scopeMenu},f=n.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return n.useEffect(()=>f,[f]),n.useEffect(()=>{const s=d.current;return()=>{window.clearTimeout(s),l(null)}},[d,l]),n.createElement(Re,$({asChild:!0},m),n.createElement(Se,$({id:r.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":r.contentId,"data-state":ke(o.open)},e,{ref:xe(t,r.onTriggerChange),onClick:s=>{var p;(p=e.onClick)===null||p===void 0||p.call(e,s),!(e.disabled||s.defaultPrevented)&&(s.currentTarget.focus(),o.open||o.onOpenChange(!0))},onPointerMove:g(e.onPointerMove,A(s=>{a.onItemEnter(s),!s.defaultPrevented&&!e.disabled&&!o.open&&!u.current&&(a.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{o.onOpenChange(!0),f()},100))})),onPointerLeave:g(e.onPointerLeave,A(s=>{var p;f();const x=(p=o.content)===null||p===void 0?void 0:p.getBoundingClientRect();if(x){var h;const w=(h=o.content)===null||h===void 0?void 0:h.dataset.side,I=w==="right",T=I?-5:5,j=x[I?"left":"right"],G=x[I?"right":"left"];a.onPointerGraceIntentChange({area:[{x:s.clientX+T,y:s.clientY},{x:j,y:x.top},{x:G,y:x.top},{x:G,y:x.bottom},{x:j,y:x.bottom}],side:w}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(s),s.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:g(e.onKeyDown,s=>{const p=a.searchRef.current!=="";if(!(e.disabled||p&&s.key===" ")&&xn[c.dir].includes(s.key)){var x;o.onOpenChange(!0),(x=o.content)===null||x===void 0||x.focus(),s.preventDefault()}})})))}),Bn="MenuSubContent",Yn=n.forwardRef((e,t)=>{const o=Pe(C,e.__scopeMenu),{forceMount:c=o.forceMount,...r}=e,a=R(C,e.__scopeMenu),u=L(C,e.__scopeMenu),d=Te(Bn,e.__scopeMenu),l=n.useRef(null),m=K(t,l);return n.createElement(F.Provider,{scope:e.__scopeMenu},n.createElement(W,{present:c||a.open},n.createElement(F.Slot,{scope:e.__scopeMenu},n.createElement(re,$({id:d.contentId,"aria-labelledby":d.triggerId},r,{ref:m,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var s;u.isUsingKeyboardRef.current&&((s=l.current)===null||s===void 0||s.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:g(e.onFocusOutside,f=>{f.target!==d.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:g(e.onEscapeKeyDown,f=>{u.onClose(),f.preventDefault()}),onKeyDown:g(e.onKeyDown,f=>{const s=f.currentTarget.contains(f.target),p=gn[u.dir].includes(f.key);if(s&&p){var x;a.onOpenChange(!1),(x=d.trigger)===null||x===void 0||x.focus(),f.preventDefault()}})})))))});function ke(e){return e?"open":"closed"}function Ne(e){return e==="indeterminate"}function Fe(e){return Ne(e)?"indeterminate":e?"checked":"unchecked"}function Xn(e){const t=document.activeElement;for(const o of e)if(o===t||(o.focus(),document.activeElement!==t))return}function Hn(e,t){return e.map((o,c)=>e[(t+c)%e.length])}function Wn(e,t,o){const r=t.length>1&&Array.from(t).every(m=>m===t[0])?t[0]:t,a=o?e.indexOf(o):-1;let u=Hn(e,Math.max(a,0));r.length===1&&(u=u.filter(m=>m!==o));const l=u.find(m=>m.toLowerCase().startsWith(r.toLowerCase()));return l!==o?l:void 0}function Jn(e,t){const{x:o,y:c}=e;let r=!1;for(let a=0,u=t.length-1;a<t.length;u=a++){const d=t[a].x,l=t[a].y,m=t[u].x,f=t[u].y;l>c!=f>c&&o<(m-d)*(c-l)/(f-l)+d&&(r=!r)}return r}function Qn(e,t){if(!t)return!1;const o={x:e.clientX,y:e.clientY};return Jn(o,t)}function A(e){return t=>t.pointerType==="mouse"?e(t):void 0}const Zn=wn,qn=Re,zn=Cn,et=Rn,nt=Sn,tt=Ie,ot=kn,ct=Fn,rt=Ln,at=jn,st=Un,ut=Vn,dt=Yn,Ae="DropdownMenu",[it,Wt]=pe(Ae,[Me]),_=Me(),[lt,Ke]=it(Ae),ft=e=>{const{__scopeDropdownMenu:t,children:o,dir:c,open:r,defaultOpen:a,onOpenChange:u,modal:d=!0}=e,l=_(t),m=n.useRef(null),[f=!1,s]=ge({prop:r,defaultProp:a,onChange:u});return n.createElement(lt,{scope:t,triggerId:H(),triggerRef:m,contentId:H(),open:f,onOpenChange:s,onOpenToggle:n.useCallback(()=>s(p=>!p),[s]),modal:d},n.createElement(Zn,$({},l,{open:f,onOpenChange:s,dir:c,modal:d}),o))},$t="DropdownMenuTrigger",pt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,disabled:c=!1,...r}=e,a=Ke($t,o),u=_(o);return n.createElement(qn,$({asChild:!0},u),n.createElement(O.button,$({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":c?"":void 0,disabled:c},r,{ref:xe(t,a.triggerRef),onPointerDown:g(e.onPointerDown,d=>{!c&&d.button===0&&d.ctrlKey===!1&&(a.onOpenToggle(),a.open||d.preventDefault())}),onKeyDown:g(e.onKeyDown,d=>{c||(["Enter"," "].includes(d.key)&&a.onOpenToggle(),d.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})))}),mt=e=>{const{__scopeDropdownMenu:t,...o}=e,c=_(t);return n.createElement(zn,$({},c,o))},bt="DropdownMenuContent",xt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=Ke(bt,o),a=_(o),u=n.useRef(!1);return n.createElement(et,$({id:r.contentId,"aria-labelledby":r.triggerId},a,c,{ref:t,onCloseAutoFocus:g(e.onCloseAutoFocus,d=>{var l;u.current||(l=r.triggerRef.current)===null||l===void 0||l.focus(),u.current=!1,d.preventDefault()}),onInteractOutside:g(e.onInteractOutside,d=>{const l=d.detail.originalEvent,m=l.button===0&&l.ctrlKey===!0,f=l.button===2||m;(!r.modal||f)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),gt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=_(o);return n.createElement(nt,$({},r,c,{ref:t}))}),ht=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=_(o);return n.createElement(tt,$({},r,c,{ref:t}))}),vt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=_(o);return n.createElement(ot,$({},r,c,{ref:t}))}),_t=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=_(o);return n.createElement(ct,$({},r,c,{ref:t}))}),wt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=_(o);return n.createElement(rt,$({},r,c,{ref:t}))}),Mt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=_(o);return n.createElement(at,$({},r,c,{ref:t}))}),Ct=e=>{const{__scopeDropdownMenu:t,children:o,open:c,onOpenChange:r,defaultOpen:a}=e,u=_(t),[d=!1,l]=ge({prop:c,defaultProp:a,onChange:r});return n.createElement(st,$({},u,{open:d,onOpenChange:l}),o)},Et=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=_(o);return n.createElement(ut,$({},r,c,{ref:t}))}),Rt=n.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...c}=e,r=_(o);return n.createElement(dt,$({},r,c,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Le=ft,je=pt,Ge=mt,Dt=xt,Pt=gt,$e=ht,It=vt,St=_t,yt=wt,Ot=Mt,Tt=Ct,kt=Et,Nt=Rt,Ue=he.forwardRef(function({className:t,size:o="default",align:c,...r},a){return b.jsx(_e,{ref:a,$as:Dt,sideOffset:4,align:c??"start",collisionPadding:10,className:y({"min-w-[280px]":o==="default","min-w-[340px]":o==="large","min-w-[125px]":o==="small","overflow-hidden":!0},t),...r})});function Ft(e){return b.jsx(ln,{$as:je,...e,onFocusCapture:t=>{t.stopPropagation(),e.onFocusCapture?.(t)}})}function At({onSelect:e,icon:t,className:o,color:c,size:r="default",testId:a,...u},d){const l=t;return t?b.jsxs(ee,{$as:$e,ref:d,onSelect:e,className:y(c==="danger"&&"text-token-text-error",r==="large"&&"gap-3",o),"data-testid":a,...u,children:[b.jsx("div",{className:y("flex items-center justify-center",c==="danger"&&"text-token-text-error",c!=="danger"&&"text-token-text-secondary",r==="default"&&"h-5 w-5",r==="large"&&"h-5 w-7"),children:n.isValidElement(t)?t:b.jsx(l,{className:"h-5 w-5 shrink-0"})}),u.children]}):b.jsx(ee,{$as:$e,ref:d,onSelect:e,className:y(c==="danger"&&"text-token-text-error",o),...u})}function Kt({className:e,...t}){return b.jsx(Ot,{className:y("mx-5 my-1 h-px bg-token-border-light",e),...t})}function Lt({onSelect:e,children:t,...o}){return b.jsxs(fn,{$as:St,onSelect:e,...o,children:[b.jsx(yt,{className:"absolute",children:b.jsx(pn,{className:"icon-sm"})}),b.jsx("span",{className:"ml-6",children:t})]})}function jt(e){const{className:t,...o}=e;return b.jsx(_e,{$as:Nt,className:y("mt-2 max-h-[calc(100vh-300px)] min-w-[100px] overflow-auto",t),sideOffset:8,alignOffset:-16,collisionPadding:20,...o})}function Gt(e){const{icon:t,children:o,...c}=e;return b.jsxs(ee,{$as:kt,...c,children:[t&&b.jsx("div",{className:"flex h-5 w-5 items-center justify-center text-token-text-secondary",children:b.jsx(t,{className:"h-5 w-5 flex-shrink-0"})}),o,b.jsx("div",{className:"ml-auto flex items-center text-token-text-tertiary group-data-[disabled]:opacity-50",children:b.jsx($n,{className:"icon-md"})})]})}function Jt({triggerButton:e,children:t,size:o="default",open:c,onOpenChange:r,contentAlign:a,side:u,sideOffset:d=0,alignOffset:l=0,contentClassName:m,testId:f}){const s=n.useRef(null);return b.jsxs(Le,{modal:!1,open:c,onOpenChange:r,children:[b.jsx(je,{asChild:!0,ref:s,"data-testid":`${f}-button`,children:e}),b.jsx(Ge,{container:s.current?.ownerDocument.body,children:b.jsx(Ue,{size:o,align:a,alignOffset:l,side:u,sideOffset:d,className:m,children:t})})]})}function Ut({children:e}){return b.jsx(Pt,{className:"mx-2 my-0 px-2 text-xs font-semibold text-token-text-secondary",children:e})}const Ve=n.createContext(null);function Vt(e){const{children:t,...o}=e,c=n.useRef(null);return b.jsxs(Le,{...o,children:[b.jsx("span",{className:"hidden",ref:c}),b.jsx(Ve.Provider,{value:c.current?.ownerDocument??null,children:t})]})}function Bt(e){const{children:t,...o}=e,c=n.useContext(Ve);return b.jsx(Ge,{container:c?.body,...o,children:t})}const Qt={Root:Vt,Trigger:Ft,Portal:Bt,Content:Ue,Item:he.forwardRef(At),Separator:Kt,RadioGroup:It,RadioItem:Lt,Sub:Tt,SubContent:jt,SubMenuTrigger:Gt,Label:Ut};export{je as $,Jt as B,Qt as D};
//# sourceMappingURL=mhoun9ad2jk8xyl3.js.map
