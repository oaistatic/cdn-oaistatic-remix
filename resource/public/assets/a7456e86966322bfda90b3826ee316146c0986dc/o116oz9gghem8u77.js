import{a1 as I,aM as E,r as d,b4 as T,l as e,a6 as D,P as w,V as S,D as M,b0 as y}from"./gghzs582a65dvm3m.js";import{b as V,C as _,c as A,d as L,F as B,g as z,a as F,T as H}from"./l7y4v0h9zw28wb0r.js";import{p as k,s as O,C as p,t as P,q as R}from"./jjibai5naylf11fy.js";import{W,y as U,b4 as $,b5 as q,z as Q}from"./e34jsxd5qw5romn0.js";import{dV as v}from"./pd094ob9wacofnvk.js";import{D as j}from"./ljnuyiuz0czms6ve.js";import{S as x}from"./hxxw62av1uep63qt.js";import{C as G}from"./mjaocuyfmbcvmeq2.js";import"./knl5287dkf7ic29t.js";import"./ihd4f7co74jdzknp.js";import"./nxrjmz20sk5ywca0.js";import"./nm04jgpfyxi6pn12.js";import"./zyfep1d1y9m3kzcw.js";import"./oumq0lo7vo2u8qdw.js";import"./egu0eqrtgme3ss9j.js";import"./l69acfj4t0bghaz3.js";import"./ke4wseue2s3xar0a.js";import"./inxv3p5hyolpb7jk.js";import"./h6nboy9daks7d3l6.js";import"./ezmptwrca6wtpbet.js";import"./l1ucg8fno55vfzot.js";import"./eca8j1i3jpdssmzb.js";const N=({onDownload:a,onDownloadFormat:t,formats:n})=>{const s=I(),i=E(),[o,m]=d.useState(!1),u=T(),r=h=>()=>{m(!0),h(),u(()=>{m(!1)},2e3)},c=r(()=>{a?a():i.warning("Not implemented yet")}),l=e.jsx(v,{icon:o?W:U,onClick:c,label:s.formatMessage(J.download)});return n!=null&&n.length?e.jsxs(j.Root,{children:[e.jsx(j.Trigger,{className:"h-[30px] w-[30px] px-0",children:l}),e.jsx(j.Portal,{children:e.jsx(j.Content,{children:n.map(({label:h,value:f})=>e.jsxs(j.Item,{onClick:r(()=>t==null?void 0:t(f)),children:[h," (",f,")"]},f))})})]}):l},J=D({download:{id:"sgWUAE",defaultMessage:"Download"}}),K=({visualization:a})=>{const{data:t}=k(a),n=()=>{t&&A(t.download_url)};return e.jsx(N,{onDownload:n})},X=({showStatic:a,chartRef:t,visualization:n})=>{const{fallback_image:s}=n,i=async()=>{if(a&&s)w.logEvent(S.adaDownloadedStaticChart),await L(s);else if(t!=null&&t.current){const o=t.current.getBase64Image();o&&(w.logEvent(S.adaDownloadedInteractiveChart),A(o,`${n.title}.png`))}};return e.jsx(N,{onDownload:i})},Y=({visualization:a,showStatic:t,chartData:n,onChangeChartData:s,onToggleStatic:i,chartRef:o})=>{const m=I(),{type:u,fallback_to_image:r}=a,{sourceUrl:c,contextConnectorName:l}=V(a);return e.jsxs(e.Fragment,{children:[e.jsx("span",{}),e.jsxs("div",{className:"flex items-center gap-2",children:[u==="chart"&&!r&&e.jsxs(e.Fragment,{children:[e.jsx(_,{chartData:n,setChartData:s}),e.jsx(v,{onClick:i,icon:t?$:q})]}),c&&l&&e.jsx(v,{icon:Q,href:c,target:"_blank",label:m.formatMessage(Z.contextConnector,{contextConnectorName:l})}),u==="table"&&e.jsx(K,{visualization:a}),u==="chart"&&e.jsx(X,{chartRef:o,showStatic:t,visualization:a})]})]})},Z=D({switchToInteractive:{id:"o0thnT",defaultMessage:"Switch to interactive chart"},switchToStatic:{id:"cigiQO",defaultMessage:"Switch to static chart"},contextConnector:{id:"ltkpN0",defaultMessage:"Open in {contextConnectorName}"}}),ee=({onChangeSheetName:a,sheetName:t,visualization:n})=>{var i;const{data:s}=k(n);return Array.isArray(s==null?void 0:s.content)?e.jsxs(x.Root,{defaultValue:t??"",onValueChange:a,children:[e.jsxs(x.Trigger,{className:"m-0 h-6 self-end bg-transparent px-1 py-2 text-xs font-semibold",children:[t??((i=s==null?void 0:s.content)==null?void 0:i[0].name),e.jsx(x.Icon,{})]}),e.jsx(x.Portal,{children:e.jsx(x.Content,{className:"z-50",children:s.content.map(o=>e.jsx(x.Item,{className:"text-xs font-semibold",value:o.name??"",children:o.name},o.name))})})]}):null},De=({onClose:a,visualization:t,clientThreadId:n})=>{const{title:s,type:i,fallback_image:o,fallback_to_image:m}=t,u=O(),[r,c]=d.useState(!u),[l,h]=d.useState(),[f,C]=d.useState(),b=d.useRef(null);let g=null;switch(i){case"chart":{if(!m&&!r){g=e.jsx(se,{chartData:f,onChangeChartData:C,chartRef:b,visualization:t,clientThreadId:n});break}if(o==null){M.addError("No fallback image message provided for fallback chart"),g=null;break}g=e.jsx(te,{fallbackImage:o});break}case"table":{g=e.jsx(ne,{sheetName:l,visualization:t});break}}return e.jsxs(p,{children:[e.jsx(p.Header,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(p.CloseButton,{onClick:a}),e.jsx(p.Title,{children:s}),e.jsx(ee,{sheetName:l,onChangeSheetName:h,visualization:t})]})}),e.jsx(p.Content,{children:g}),e.jsx(Y,{chartRef:b,showStatic:r,chartData:f,visualization:t,onChangeChartData:C,onToggleStatic:()=>c(!r)})]})},te=({fallbackImage:a})=>{const[t,n]=d.useState(!1),s=P();return e.jsxs("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),className:"relative flex h-full w-full items-center justify-center p-4",children:[e.jsx(G,{jupyterMessage:a}),s&&e.jsx(B,{isHovered:t})]})},se=({visualization:a,onChangeChartData:t,chartRef:n,chartData:s})=>{const{isLoading:i,data:o}=R(a);return d.useEffect(()=>{w.logEvent(S.adaInteractiveChartShown)},[]),d.useEffect(()=>{if(o&&o.content!==s){const{chart_type:m,datasets:u,labels:r}=o.content,c=o.content;c.datasets=u.map((l,h)=>{const f=z(m,l,h);return{...l,colors:f}}),c.labels=Array.isArray(r)?r:[r],t==null||t(c)}},[s,o]),e.jsx("div",{className:"relative flex h-full w-full items-center justify-center p-2",children:i||s==null?e.jsx(y,{}):e.jsx(F,{ref:n,chart:s})})},ne=({visualization:a,sheetName:t})=>{const n=d.useRef(null),[s,i]=d.useState(null),[o,m]=d.useState(null),{isLoading:u,data:r}=k(a);d.useEffect(()=>{const{current:l}=n;if(!l)return;const h=new ResizeObserver(f=>{for(const C of f){const{width:b,height:g}=C.contentRect;i(b),m(g)}});return h.observe(l),()=>{h.disconnect()}});let c;return r&&(Array.isArray(r.content)?c=r.content.find(l=>l.name===t)??r.content[0]:c=r.content),e.jsx("div",{className:"h-full w-full",ref:n,children:u||c==null?e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsx(y,{})}):e.jsx(H,{table:{...c,name:a.title,sheetName:t},height:o??0,width:s??0})})};export{De as ADAVisualizationCanvasContent};
//# sourceMappingURL=o116oz9gghem8u77.js.map
