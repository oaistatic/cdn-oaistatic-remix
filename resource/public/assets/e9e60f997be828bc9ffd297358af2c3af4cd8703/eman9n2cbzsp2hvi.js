import{r,b6 as j}from"./du9ygo55hccsm0ec.js";import{s as q,i as D,a as B,b as L,T as $,C as z,m as J}from"./h4w64oacmz2dx2bb.js";import"./ibjw18ivx5tw615x.js";import"./hc0go6t8u8it292j.js";import"./kl23pvq05rxrgvth.js";import"./m7ykldedawewofy8.js";import"./g917upaeimfgkdh1.js";import"./gymcumd7hmh6bi1s.js";import"./gubi661ggt10w3q1.js";import"./kf2up37bytt7yd8r.js";import"./23yqn56dfa53achp.js";import"./d0s4um1rh2f7pgrr.js";import"./ndpe1ojbx7c3v18s.js";import"./kwyhm54wtm4zbkpo.js";import"./huj2tv4ji3im8uo0.js";import"./j2y7wsnqu61ya7iz.js";import"./ls8z0fgz00gw1alh.js";import"./156t2vs0ziqy5ta8.js";import"./gj6xeouxppgt6npy.js";const Q=()=>t=>t.targetY,U=()=>t=>t.targetX-1,Z=()=>t=>t.targetY-1,ee=()=>t=>t.targetWidth+2,te=()=>t=>t.targetHeight+2,re=()=>t=>t.targetY+10,ie=()=>t=>Math.max(0,(t.targetHeight-28)/2),ne=q("div")({name:"DataGridOverlayEditorStyle",class:"gdg-d19meir1",propsAsIs:!1,vars:{"d19meir1-0":[Q(),"px"],"d19meir1-1":[U(),"px"],"d19meir1-2":[Z(),"px"],"d19meir1-3":[ee(),"px"],"d19meir1-4":[te(),"px"],"d19meir1-5":[re(),"px"],"d19meir1-6":[ie(),"px"]}});function se(){const[t,s]=r.useState();return[t??void 0,s]}function ae(){const[t,s]=se(),[i,g]=r.useState(0),[f,C]=r.useState(!0);r.useLayoutEffect(()=>{if(t===void 0||!("IntersectionObserver"in window))return;const a=new IntersectionObserver(o=>{o.length!==0&&C(o[0].isIntersecting)},{threshold:1});return a.observe(t),()=>a.disconnect()},[t]),r.useEffect(()=>{if(f||t===void 0)return;let a;const o=()=>{const{right:x}=t.getBoundingClientRect();g(m=>Math.min(m+window.innerWidth-x-10,0)),a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>{a!==void 0&&cancelAnimationFrame(a)}},[t,f]);const b=r.useMemo(()=>({transform:`translateX(${i}px)`}),[i]);return{ref:s,style:b}}const Re=t=>{const{target:s,content:i,onFinishEditing:g,forceEditMode:f,initialValue:C,imageEditorOverride:b,markdownDivCreateNode:a,highlight:o,className:x,theme:m,id:N,cell:v,validateCell:p,getCellRenderer:I,provideEditor:w,isOutsideClick:T}=t,[d,V]=r.useState(f?i:void 0),O=r.useRef(d??i);O.current=d??i;const[y,S]=r.useState(()=>p===void 0?!0:!(D(i)&&p?.(v,i,O.current)===!1)),u=r.useCallback((e,n)=>{g(y?e:void 0,n)},[y,g]),G=r.useCallback(e=>{if(p!==void 0&&e!==void 0&&D(e)){const n=p(v,e,O.current);n===!1?S(!1):(typeof n=="object"&&(e=n),S(!0))}V(e)},[v,p]),h=r.useRef(!1),c=r.useRef(void 0),H=r.useCallback(()=>{u(d,[0,0]),h.current=!0},[d,u]),A=r.useCallback((e,n)=>{u(e,n??c.current??[0,0]),h.current=!0},[u]),K=r.useCallback(async e=>{let n=!1;e.key==="Escape"?(e.stopPropagation(),e.preventDefault(),c.current=[0,0]):e.key==="Enter"&&!e.shiftKey?(e.stopPropagation(),e.preventDefault(),c.current=[0,1],n=!0):e.key==="Tab"&&(e.stopPropagation(),e.preventDefault(),c.current=[e.shiftKey?-1:1,0],n=!0),window.setTimeout(()=>{!h.current&&c.current!==void 0&&(u(n?d:void 0,c.current),h.current=!0)},0)},[u,d]),k=d??i,[l,W]=r.useMemo(()=>{if(B(i))return[];const e=w?.(i);return e!==void 0?[e,!1]:[I(i)?.provideEditor?.(i),!1]},[i,I,w]),{ref:X,style:Y}=ae();let F=!0,P,_=!0,E;if(l!==void 0){F=l.disablePadding!==!0,_=l.disableStyling!==!0;const e=L(l);e&&(E=l.styleOverride);const n=e?l.editor:l;P=r.createElement(n,{isHighlighted:o,onChange:G,value:k,initialValue:C,onFinishedEditing:A,validatedSelection:D(k)?k.selectionRange:void 0,forceEditMode:f,target:s,imageEditorOverride:b,markdownDivCreateNode:a,isValid:y,theme:m})}E={...E,...Y};const M=document.getElementById("portal");if(M===null)return console.error('Cannot open Data Grid overlay editor, because portal not found.  Please add `<div id="portal" />` as the last child of your `<body>`.'),null;let R=_?"gdg-style":"gdg-unstyle";return y||(R+=" gdg-invalid"),F&&(R+=" gdg-pad"),j.createPortal(r.createElement($.Provider,{value:m},r.createElement(z,{style:J(m),className:x,onClickOutside:H,isOutsideClick:T},r.createElement(ne,{ref:X,id:N,className:R,style:E,as:W===!0?"label":void 0,targetX:s.x,targetY:s.y,targetWidth:s.width,targetHeight:s.height},r.createElement("div",{className:"gdg-clip-region",onKeyDown:K},P)))),M)};export{Re as default};
//# sourceMappingURL=eman9n2cbzsp2hvi.js.map
