import{aH as te,aI as q,aJ as j,aK as he,aL as ie,aM as ce,aN as be,aO as y,aP as xe,aQ as we,aR as Be,aS as Ce,aT as Te,aU as me,aV as Fe,aW as Me,aX as W,aY as Y,aZ as ee,a_ as ke,a$ as Oe,b0 as Re,b1 as _e,b2 as ae,b3 as Pe,b4 as le,b5 as ue,b6 as $e,b7 as Se,b8 as ye,b9 as De,ba as Ne,bb as Le,bc as Ae,bd as J,be as N,bf as He,bg as Ge,bh as Ke,bi as Ue,bj as Je,bk as U,bl as Ee,bm as We,bn as L,bo as se}from"./bomvf441parvbl6l.js";import{r as o,a6 as P}from"./cenhwbprxai3toix.js";import{M as Xe,y as Ze,x as Qe,R as Ve,b as je}from"./hn877s1av7risab0.js";var Ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ye||{}),qe=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(qe||{});let ze={0:e=>({...e,popoverState:W(e.popoverState,{0:1,1:0}),__demoMode:!1}),1(e){return e.popoverState===1?e:{...e,popoverState:1,__demoMode:!1}},2(e,l){return e.button===l.button?e:{...e,button:l.button}},3(e,l){return e.buttonId===l.buttonId?e:{...e,buttonId:l.buttonId}},4(e,l){return e.panel===l.panel?e:{...e,panel:l.panel}},5(e,l){return e.panelId===l.panelId?e:{...e,panelId:l.panelId}}},pe=o.createContext(null);pe.displayName="PopoverContext";function ne(e){let l=o.useContext(pe);if(l===null){let v=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,ne),v}return l}let oe=o.createContext(null);oe.displayName="PopoverAPIContext";function de(e){let l=o.useContext(oe);if(l===null){let v=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,de),v}return l}let fe=o.createContext(null);fe.displayName="PopoverGroupContext";function ge(){return o.useContext(fe)}let re=o.createContext(null);re.displayName="PopoverPanelContext";function et(){return o.useContext(re)}function tt(e,l){return W(l.type,ze,e,l)}let nt="div";function ot(e,l){var v;let{__demoMode:x=!1,...$}=e,g=o.useRef(null),w=j(l,he(u=>{g.current=u})),a=o.useRef([]),m=o.useReducer(tt,{__demoMode:x,popoverState:x?0:1,buttons:a,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:o.createRef(),afterPanelSentinel:o.createRef(),afterButtonSentinel:o.createRef()}),[{popoverState:I,button:t,buttonId:S,panel:b,panelId:E,beforePanelSentinel:i,afterPanelSentinel:d,afterButtonSentinel:s},f]=m,h=ie((v=g.current)!=null?v:t),M=o.useMemo(()=>{if(!t||!b)return!1;for(let C of document.querySelectorAll("body > *"))if(Number(C?.contains(t))^Number(C?.contains(b)))return!0;let u=ce(),n=u.indexOf(t),r=(n+u.length-1)%u.length,p=(n+1)%u.length,c=u[r],F=u[p];return!b.contains(c)&&!b.contains(F)},[t,b]),X=be(S),k=be(E),Z=o.useMemo(()=>({buttonId:X,panelId:k,close:()=>f({type:1})}),[X,k,f]),O=ge(),B=O?.registerPopover,Q=y(()=>{var u;return(u=O?.isFocusWithinPopoverGroup())!=null?u:h?.activeElement&&(t?.contains(h.activeElement)||b?.contains(h.activeElement))});o.useEffect(()=>B?.(Z),[B,Z]);let[A,T]=xe(),H=we(t),R=Be({mainTreeNode:H,portals:A,defaultContainers:[t,b]});Ce(h?.defaultView,"focus",u=>{var n,r,p,c,F,C;u.target!==window&&u.target instanceof HTMLElement&&I===0&&(Q()||t&&b&&(R.contains(u.target)||(r=(n=i.current)==null?void 0:n.contains)!=null&&r.call(n,u.target)||(c=(p=d.current)==null?void 0:p.contains)!=null&&c.call(p,u.target)||(C=(F=s.current)==null?void 0:F.contains)!=null&&C.call(F,u.target)||f({type:1})))},!0),Te(I===0,R.resolveContainers,(u,n)=>{f({type:1}),Ue(n,Je.Loose)||(u.preventDefault(),t?.focus())});let _=y(u=>{f({type:1});let n=u?u instanceof HTMLElement?u:"current"in u&&u.current instanceof HTMLElement?u.current:t:t;n?.focus()}),V=o.useMemo(()=>({close:_,isPortalled:M}),[_,M]),z=o.useMemo(()=>({open:I===0,close:_}),[I,_]),G={ref:w};return P.createElement(me,{node:H},P.createElement(Xe,null,P.createElement(re.Provider,{value:null},P.createElement(pe.Provider,{value:m},P.createElement(oe.Provider,{value:V},P.createElement(Fe,{value:_},P.createElement(Me,{value:W(I,{0:Y.Open,1:Y.Closed})},P.createElement(T,null,ee({ourProps:G,theirProps:$,slot:z,defaultTag:nt,name:"Popover"})))))))))}let rt="button";function at(e,l){let v=o.useId(),{id:x=`headlessui-popover-button-${v}`,disabled:$=!1,autoFocus:g=!1,...w}=e,[a,m]=ne("Popover.Button"),{isPortalled:I}=de("Popover.Button"),t=o.useRef(null),S=`headlessui-focus-sentinel-${o.useId()}`,b=ge(),E=b?.closeOthers,i=et()!==null;o.useEffect(()=>{if(!i)return m({type:3,buttonId:x}),()=>{m({type:3,buttonId:null})}},[i,x,m]);let[d]=o.useState(()=>Symbol()),s=j(t,l,Ze(),y(n=>{if(!i){if(n)a.buttons.current.push(d);else{let r=a.buttons.current.indexOf(d);r!==-1&&a.buttons.current.splice(r,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),n&&m({type:2,button:n})}})),f=j(t,l),h=ie(t),M=y(n=>{var r,p,c;if(i){if(a.popoverState===1)return;switch(n.key){case U.Space:case U.Enter:n.preventDefault(),(p=(r=n.target).click)==null||p.call(r),m({type:1}),(c=a.button)==null||c.focus();break}}else switch(n.key){case U.Space:case U.Enter:n.preventDefault(),n.stopPropagation(),a.popoverState===1&&E?.(a.buttonId),m({type:0});break;case U.Escape:if(a.popoverState!==0)return E?.(a.buttonId);if(!t.current||h!=null&&h.activeElement&&!t.current.contains(h.activeElement))return;n.preventDefault(),n.stopPropagation(),m({type:1});break}}),X=y(n=>{i||n.key===U.Space&&n.preventDefault()}),k=y(n=>{var r,p;Ee(n.currentTarget)||$||(i?(m({type:1}),(r=a.button)==null||r.focus()):(n.preventDefault(),n.stopPropagation(),a.popoverState===1&&E?.(a.buttonId),m({type:0}),(p=a.button)==null||p.focus()))}),Z=y(n=>{n.preventDefault(),n.stopPropagation()}),{isFocusVisible:O,focusProps:B}=ke({autoFocus:g}),{isHovered:Q,hoverProps:A}=Oe({isDisabled:$}),{pressed:T,pressProps:H}=Re({disabled:$}),R=a.popoverState===0,_=o.useMemo(()=>({open:R,active:T||R,disabled:$,hover:Q,focus:O,autofocus:g}),[R,Q,O,T,$,g]),V=_e(e,a.button),z=i?ae({ref:f,type:V,onKeyDown:M,onClick:k,disabled:$||void 0,autoFocus:g},B,A,H):ae({ref:s,id:a.buttonId,type:V,"aria-expanded":a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,disabled:$||void 0,autoFocus:g,onKeyDown:M,onKeyUp:X,onClick:k,onMouseDown:Z},B,A,H),G=Pe(),u=y(()=>{let n=a.panel;if(!n)return;function r(){W(G.current,{[L.Forwards]:()=>J(n,N.First),[L.Backwards]:()=>J(n,N.Last)})===se.Error&&J(ce().filter(p=>p.dataset.headlessuiFocusGuard!=="true"),W(G.current,{[L.Forwards]:N.Next,[L.Backwards]:N.Previous}),{relativeTo:a.button})}r()});return P.createElement(P.Fragment,null,ee({ourProps:z,theirProps:w,slot:_,defaultTag:rt,name:"Popover.Button"}),R&&!i&&I&&P.createElement(le,{id:S,ref:a.afterButtonSentinel,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:u}))}let lt="div",ut=te.RenderStrategy|te.Static;function Ie(e,l){let v=o.useId(),{id:x=`headlessui-popover-backdrop-${v}`,transition:$=!1,...g}=e,[{popoverState:w},a]=ne("Popover.Backdrop"),[m,I]=o.useState(null),t=j(l,I),S=$e(),[b,E]=Se($,m,S!==null?(S&Y.Open)===Y.Open:w===0),i=y(f=>{if(Ee(f.currentTarget))return f.preventDefault();a({type:1})}),d=o.useMemo(()=>({open:w===0}),[w]),s={ref:t,id:x,"aria-hidden":!0,onClick:i,...ye(E)};return ee({ourProps:s,theirProps:g,slot:d,defaultTag:lt,features:ut,visible:b,name:"Popover.Backdrop"})}let st="div",it=te.RenderStrategy|te.Static;function ct(e,l){let v=o.useId(),{id:x=`headlessui-popover-panel-${v}`,focus:$=!1,anchor:g,portal:w=!1,modal:a=!1,transition:m=!1,...I}=e,[t,S]=ne("Popover.Panel"),{close:b,isPortalled:E}=de("Popover.Panel"),i=`headlessui-focus-sentinel-before-${v}`,d=`headlessui-focus-sentinel-after-${v}`,s=o.useRef(null),f=Qe(g),[h,M]=Ve(f),X=je();f&&(w=!0);let[k,Z]=o.useState(null),O=j(s,l,f?h:null,y(r=>S({type:4,panel:r})),Z),B=ie(s),Q=De();Ne(()=>(S({type:5,panelId:x}),()=>{S({type:5,panelId:null})}),[x,S]);let A=$e(),[T,H]=Se(m,k,A!==null?(A&Y.Open)===Y.Open:t.popoverState===0);Le(T,t.button,()=>{S({type:1})});let R=t.__demoMode?!1:a&&T;Ae(R,B);let _=y(r=>{var p;switch(r.key){case U.Escape:if(t.popoverState!==0||!s.current||B!=null&&B.activeElement&&!s.current.contains(B.activeElement))return;r.preventDefault(),r.stopPropagation(),S({type:1}),(p=t.button)==null||p.focus();break}});o.useEffect(()=>{var r;e.static||t.popoverState===1&&((r=e.unmount)==null||r)&&S({type:4,panel:null})},[t.popoverState,e.unmount,e.static,S]),o.useEffect(()=>{if(t.__demoMode||!$||t.popoverState!==0||!s.current)return;let r=B?.activeElement;s.current.contains(r)||J(s.current,N.First)},[t.__demoMode,$,s.current,t.popoverState]);let V=o.useMemo(()=>({open:t.popoverState===0,close:b}),[t.popoverState,b]),z=ae(f?X():{},{ref:O,id:x,onKeyDown:_,onBlur:$&&t.popoverState===0?r=>{var p,c,F,C,K;let D=r.relatedTarget;D&&s.current&&((p=s.current)!=null&&p.contains(D)||(S({type:1}),((F=(c=t.beforePanelSentinel.current)==null?void 0:c.contains)!=null&&F.call(c,D)||(K=(C=t.afterPanelSentinel.current)==null?void 0:C.contains)!=null&&K.call(C,D))&&D.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...I.style,...M,"--button-width":He(t.button,!0).width},...ye(H)}),G=Pe(),u=y(()=>{let r=s.current;if(!r)return;function p(){W(G.current,{[L.Forwards]:()=>{var c;J(r,N.First)===se.Error&&((c=t.afterPanelSentinel.current)==null||c.focus())},[L.Backwards]:()=>{var c;(c=t.button)==null||c.focus({preventScroll:!0})}})}p()}),n=y(()=>{let r=s.current;if(!r)return;function p(){W(G.current,{[L.Forwards]:()=>{if(!t.button)return;let c=ce(),F=c.indexOf(t.button),C=c.slice(0,F+1),K=[...c.slice(F+1),...C];for(let D of K.slice())if(D.dataset.headlessuiFocusGuard==="true"||k!=null&&k.contains(D)){let ve=K.indexOf(D);ve!==-1&&K.splice(ve,1)}J(K,N.First,{sorted:!1})},[L.Backwards]:()=>{var c;J(r,N.Previous)===se.Error&&((c=t.button)==null||c.focus())}})}p()});return P.createElement(Ge,null,P.createElement(re.Provider,{value:x},P.createElement(oe.Provider,{value:{close:b,isPortalled:E}},P.createElement(Ke,{enabled:w?e.static||T:!1},T&&E&&P.createElement(le,{id:i,ref:t.beforePanelSentinel,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:u}),ee({mergeRefs:Q,ourProps:z,theirProps:I,slot:V,defaultTag:st,features:it,visible:T,name:"Popover.Panel"}),T&&E&&P.createElement(le,{id:d,ref:t.afterPanelSentinel,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:n})))))}let pt="div";function dt(e,l){let v=o.useRef(null),x=j(v,l),[$,g]=o.useState([]),w=y(i=>{g(d=>{let s=d.indexOf(i);if(s!==-1){let f=d.slice();return f.splice(s,1),f}return d})}),a=y(i=>(g(d=>[...d,i]),()=>w(i))),m=y(()=>{var i;let d=We(v);if(!d)return!1;let s=d.activeElement;return(i=v.current)!=null&&i.contains(s)?!0:$.some(f=>{var h,M;return((h=d.getElementById(f.buttonId.current))==null?void 0:h.contains(s))||((M=d.getElementById(f.panelId.current))==null?void 0:M.contains(s))})}),I=y(i=>{for(let d of $)d.buttonId.current!==i&&d.close()}),t=o.useMemo(()=>({registerPopover:a,unregisterPopover:w,isFocusWithinPopoverGroup:m,closeOthers:I}),[a,w,m,I]),S=o.useMemo(()=>({}),[]),b=e,E={ref:x};return P.createElement(me,null,P.createElement(fe.Provider,{value:t},ee({ourProps:E,theirProps:b,slot:S,defaultTag:pt,name:"Popover.Group"})))}let ft=q(ot),vt=q(at),bt=q(Ie),mt=q(Ie),Pt=q(ct),$t=q(dt),gt=Object.assign(ft,{Button:vt,Backdrop:mt,Overlay:bt,Panel:Pt,Group:$t});export{gt as a};
//# sourceMappingURL=e5xk6h4nhrt60lwz.js.map
