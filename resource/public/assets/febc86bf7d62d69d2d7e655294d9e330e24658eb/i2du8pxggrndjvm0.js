import{aL as b,m as e,aJ as p,aD as g,aS as i,b2 as m,G as j,bf as w,c_ as u,F as y}from"./813n9w6xsthevnqe.js";import{ad as v,aG as k,aW as T}from"./h2ot8b85cve7rfg1.js";import{dJ as M,dK as G}from"./cvslyloecw0ll845.js";const I=b.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`,C=b.div`mb-6`,W=b.input`w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`;function A({label:o,description:s,collapsed:r,onClick:a}){const t=e.jsx("label",{className:"block font-semibold text-token-text-primary",children:o});return e.jsxs("div",{className:"mb-1.5 flex items-center",onClick:a,children:[r!==void 0&&(r?e.jsx(k,{className:"icon-sm"}):e.jsx(v,{className:"icon-sm"})),s?e.jsx(p,{label:s,sideOffset:4,side:"top",delayDuration:0,children:t}):e.jsx(e.Fragment,{children:t})]})}function E({actionTool:o,onShowActionsEditor:s,isDisabled:r}){const a="metadata"in o?o.metadata?.domain:void 0;return e.jsxs("div",{className:g("flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",r?"bg-token-main-surface-secondary":""),onClick:s,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:a??e.jsx("span",{className:"text-red-500",children:e.jsx(i,{id:"TJYXrY",defaultMessage:"Invalid action"})})}),e.jsx("div",{className:"w-px bg-token-border-medium"}),e.jsx("button",{disabled:r,className:"flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",children:e.jsx(T,{className:"icon-sm"})})]})}function N(){return e.jsx("div",{className:"ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-semibold leading-none text-token-text-tertiary",children:"?"})}function S({description:o}){return e.jsx(p,{wide:!0,label:o,delayDuration:0,children:e.jsx(N,{})})}function f({label:o,toolType:s,enabledTools:r,onEnabledToolsChange:a,disabled:t,disabledTooltip:d}){const n=c=>r.some(h=>h.type===c),l=e.jsx(G,{labelClassName:"w-full cursor-pointer",id:s,label:o,checked:!t&&n(s),disabled:t,onChange:()=>{n(s)?a(r.filter(c=>c.type!==s)):a([...r,{type:s}])}});return d!=null?e.jsx("div",{className:"opacity-70",children:e.jsx(p,{side:"top",label:d,children:l})}):l}function B({enabledTools:o,onEnabledToolsChange:s}){const r=M(m.BrowsingAvailable),a=j();var t,d;const n=w(),l=n?.includes(m.SearchTool)&&!n?.includes(m.SearchToolHoldout);return l?d=e.jsx(i,{id:"gs7/Pw",defaultMessage:"Web Search"}):d=e.jsx(i,{id:"tNlef1",defaultMessage:"Web Browsing"}),r?t=void 0:t=l?e.jsx(i,{...x.disabledSearchToolTip}):e.jsx(i,{...x.disabledBrowsingToolTip}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx(f,{label:d,toolType:u.BROWSER,enabledTools:o,onEnabledToolsChange:s,disabled:!r,disabledTooltip:t}),e.jsx(f,{label:e.jsx(i,{id:"uSmS/p",defaultMessage:"DALL·E Image Generation"}),toolType:u.DALLE,enabledTools:o,onEnabledToolsChange:s}),e.jsx(f,{label:e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{id:"8Lv1lK",defaultMessage:"Code Interpreter & Data Analysis"}),e.jsx(S,{description:a.formatMessage(x.codeInterpreterTooltip)})]}),toolType:u.PYTHON,enabledTools:o,onEnabledToolsChange:s})]})}const x=y({disabledBrowsingToolTip:{defaultMessage:"Web browsing is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledBrowsingToolTip"},disabledSearchToolTip:{defaultMessage:"Web search is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledSearchToolTip"},codeInterpreterTooltip:{id:"GizmoEditorModelPicker.codeInterpreterTooltip",defaultMessage:"Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more."},memoryTooltip:{id:"GizmoEditorModelPicker.memoryTooltip",defaultMessage:"Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT."}});export{C as F,B as G,A as a,W as b,I as c,E as d};
//# sourceMappingURL=i2du8pxggrndjvm0.js.map
