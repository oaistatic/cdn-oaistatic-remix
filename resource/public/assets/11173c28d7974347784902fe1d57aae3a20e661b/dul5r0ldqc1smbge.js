const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ol15nok0o6l0ahzg.js","assets/nqo5y2f0dorhrqsr.js","assets/dh0yl0m9q337gmci.js","assets/root-e6p3mfos.css","assets/ktiwgucld5a8s55m.js","assets/conversation-small-kq10986g.css","assets/gaad4oovd7ll3n61.js","assets/c4bxzbp1808foto4.js","assets/ldydeoqo6jyecaok.js","assets/m3ts7jrc8jdb6xvs.js","assets/ADAVisualizationComponent-mi6em660.css"])))=>i.map(i=>d[i]);import{aR as a,aS as u}from"./dh0yl0m9q337gmci.js";import{r as i,j as r}from"./nqo5y2f0dorhrqsr.js";import{bG as c,bH as f,bI as l}from"./ktiwgucld5a8s55m.js";const p=a(()=>u(()=>import("./ol15nok0o6l0ahzg.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(t=>t.default));function m(t){const s=i.useRef(void 0);return i.useEffect(()=>{s.current=t},[t]),s.current}function A({clientThreadId:t,visualization:s}){const e=c(t),o=m(e);return i.useEffect(()=>{if(o&&o.length>0&&o.length<e.length){const n=e[e.length-1];n&&f.setFocusedObject({type:l.ADAVisualization,visualization:n})}},[e,o,t]),r.jsx(p,{visualization:s,clientThreadId:t,expanded:!0})}export{A as default};