import{j as e,r as o}from"./lklglvrzltpv3f05.js";import{bH as h,bg as j,aw as p}from"./muemwvh3ybsggbb1.js";import{g as f}from"./kqwdyvkaaavvn8k3.js";import{a as v}from"./e21p2gwsa1rmb9eb.js";import{dk as g,dl as N,dm as b,dn as _,dp as F}from"./cp734xu9t8fnlezn.js";function P({url:i}){const l=v(i).data??f(i,"short");return e.jsx(e.Fragment,{children:l})}function M({item:i}){const l=g(),n=N();let x=i.attributions_debug&&b(i.attributions_debug,i.attributions_debug.influence_temperature??void 0,void 0,n);const c=i.attributions_debug&&l!==i.attributions_debug.influence_temperature&&b(i.attributions_debug,l,void 0,n);return e.jsxs("div",{className:"text-left text-xs text-token-text-secondary",children:[e.jsx("div",{className:"font-bold",children:"Highlighted Segments"}),e.jsx("ul",{children:i.attribution_segments?.map((s,r)=>e.jsx("li",{children:s},r))}),c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:i.attributions_debug?.ref_id}),e.jsxs("label",{className:"font-bold",children:["Probabilities (temperature: ",l,")"]}),e.jsxs("div",{className:"grid grid-cols-[auto,auto,auto] place-items-start gap-1",children:[e.jsx("div",{children:"Segment"}),e.jsx("div",{children:"Probability"}),e.jsx("div",{children:"Influence"}),c?.map(({attribution_index:s,probability:r,influence:d})=>e.jsxs(o.Fragment,{children:[e.jsx("div",{children:s}),e.jsx("div",{children:r.toPrecision(4)}),e.jsx("div",{children:d?.toPrecision(4)})]},s))]})]}),e.jsxs("label",{className:"font-bold",children:["Probabilities (default temp"," ",i.attributions_debug?.influence_temperature,")"]}),e.jsxs("div",{className:"grid grid-cols-[auto,1fr] place-items-start gap-1",children:[e.jsx("div",{children:"Segment"}),e.jsx("div",{children:"Probability"}),x?.map(({attribution_index:s,probability:r})=>e.jsxs(o.Fragment,{children:[e.jsx("div",{children:s}),e.jsx("div",{children:r.toPrecision(4)})]},s))]}),i.attributions_debug?.timings&&e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"font-bold",children:"Timings"}),e.jsx("div",{className:"grid grid-cols-[auto,1fr] place-items-start gap-1",children:Object.entries(i.attributions_debug.timings).map(([s,r])=>e.jsxs(o.Fragment,{children:[e.jsx("div",{children:s}),e.jsxs("div",{children:[r.toFixed(0),"ms"]})]},s))})]}),e.jsx("label",{className:"font-bold",children:"Debug info"}),e.jsxs("div",{className:"grid grid-cols-[auto,1fr] place-items-start gap-1",children:[e.jsx("div",{children:"Segment start idx"}),e.jsx("div",{children:i.attributions_debug?.start_idx}),e.jsx("div",{children:"Segment end idx"}),e.jsx("div",{children:i.attributions_debug?.end_idx})]})]})}function I({attributions:i,attributionsDebug:l,children:n}){const x=_(),c=h(),s=o.useMemo(()=>i?.map((t,a)=>({...t,originalIndex:a}))?.toSorted((t,a)=>a.probability-t.probability),[i]),r=g(),d=l&&i&&l.influence_temperature!==r&&F(i,r);return!s||!x?n:e.jsx(j,{label:e.jsxs("div",{className:"text-left text-xs font-normal text-token-text-primary",children:[e.jsx("div",{className:"font-bold",children:"Attributions (Debug)"}),e.jsxs("div",{className:"grid grid-cols-[200px,1fr,1fr] gap-1",children:[e.jsx("div",{children:"Source"}),e.jsxs("div",{children:["τ=",l?.influence_temperature]}),e.jsx("div",{children:d&&`τ=${r}`}),s.map((t,a)=>{const m=t.source_type==="prior",u=m?"text-red-500":t.url?"":"text-gray-500";return e.jsxs(o.Fragment,{children:[e.jsx("div",{className:p("flex flex-col",u),children:m?e.jsx("div",{className:"line-clamp-1 font-bold",children:"Model Prior"}):t.url?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex gap-1",children:[e.jsx("div",{className:"line-clamp-1 font-bold",children:e.jsx(P,{url:t.url})}),"(",t.source_type,")"]}),e.jsx("div",{className:"line-clamp-1 text-xs",children:t.url})]}):e.jsxs("div",{className:"text-xxs line-clamp-1",children:["(",t.source_type,")"]})}),e.jsxs("div",{className:u,children:[(t.probability*100).toFixed(2),"%"]}),e.jsx("div",{className:u,children:d&&`${(d[t.originalIndex].probability*100).toFixed(2)}%`})]},a)})]})]}),theme:c?"default":"white",delayDuration:0,className:"inline",side:"left",children:n})}export{I as A,M as E,P as a};
//# sourceMappingURL=ea1g710sxq9mfb3i.js.map
