import{r as E,j as n,R as c}from"./lklglvrzltpv3f05.js";import{aR as G,aG as m,aH as S,fU as V,c5 as T,c6 as A,c7 as M,c8 as N}from"./muemwvh3ybsggbb1.js";var k="Toggle",C=E.forwardRef((e,r)=>{const{pressed:a,defaultPressed:t=!1,onPressedChange:s,...u}=e,[l=!1,o]=G({prop:a,onChange:s,defaultProp:t});return n.jsx(m.button,{type:"button","aria-pressed":l,"data-state":l?"on":"off","data-disabled":e.disabled?"":void 0,...u,ref:r,onClick:S(e.onClick,()=>{e.disabled||o(!l)})})});C.displayName=k;var d="ToggleGroup",[h,U]=V(d,[T]),j=T(),x=c.forwardRef((e,r)=>{const{type:a,...t}=e;if(a==="single"){const s=t;return n.jsx(w,{...s,ref:r})}if(a==="multiple"){const s=t;return n.jsx(F,{...s,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${d}\``)});x.displayName=d;var[I,_]=h(d),w=c.forwardRef((e,r)=>{const{value:a,defaultValue:t,onValueChange:s=()=>{},...u}=e,[l,o]=G({prop:a,defaultProp:t,onChange:s});return n.jsx(I,{scope:e.__scopeToggleGroup,type:"single",value:l?[l]:[],onItemActivate:o,onItemDeactivate:c.useCallback(()=>o(""),[o]),children:n.jsx(b,{...u,ref:r})})}),F=c.forwardRef((e,r)=>{const{value:a,defaultValue:t,onValueChange:s=()=>{},...u}=e,[l=[],o]=G({prop:a,defaultProp:t,onChange:s}),p=c.useCallback(i=>o((g=[])=>[...g,i]),[o]),f=c.useCallback(i=>o((g=[])=>g.filter(y=>y!==i)),[o]);return n.jsx(I,{scope:e.__scopeToggleGroup,type:"multiple",value:l,onItemActivate:p,onItemDeactivate:f,children:n.jsx(b,{...u,ref:r})})});x.displayName=d;var[D,B]=h(d),b=c.forwardRef((e,r)=>{const{__scopeToggleGroup:a,disabled:t=!1,rovingFocus:s=!0,orientation:u,dir:l,loop:o=!0,...p}=e,f=j(a),i=A(l),g={role:"group",dir:i,...p};return n.jsx(D,{scope:a,rovingFocus:s,disabled:t,children:s?n.jsx(M,{asChild:!0,...f,orientation:u,dir:i,loop:o,children:n.jsx(m.div,{...g,ref:r})}):n.jsx(m.div,{...g,ref:r})})}),v="ToggleGroupItem",R=c.forwardRef((e,r)=>{const a=_(v,e.__scopeToggleGroup),t=B(v,e.__scopeToggleGroup),s=j(e.__scopeToggleGroup),u=a.value.includes(e.value),l=t.disabled||e.disabled,o={...e,pressed:u,disabled:l},p=c.useRef(null);return t.rovingFocus?n.jsx(N,{asChild:!0,...s,focusable:!l,active:u,ref:p,children:n.jsx(P,{...o,ref:r})}):n.jsx(P,{...o,ref:r})});R.displayName=v;var P=c.forwardRef((e,r)=>{const{__scopeToggleGroup:a,value:t,...s}=e,u=_(v,a),l={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},o=u.type==="single"?l:void 0;return n.jsx(C,{...o,...s,ref:r,onPressedChange:p=>{p?u.onItemActivate(t):u.onItemDeactivate(t)}})}),L=x,$=R;export{$ as I,L as R,U as c};
//# sourceMappingURL=lyo94ofw9bcsf3gt.js.map
