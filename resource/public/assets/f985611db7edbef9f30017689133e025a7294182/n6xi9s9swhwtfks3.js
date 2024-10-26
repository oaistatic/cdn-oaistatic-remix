import{V as x,t as e,am as f,K as g,a0 as i,bx as b,W as j,eJ as w,dh as c,a5 as y}from"./bzvcy3tl84gc3bl9.js";import{af as v,ae as k,a_ as T}from"./o4htpc5iqra16abg.js";import{e9 as M,ea as N}from"./moittmkqym6x2q8u.js";const I=x.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`,C=x.div`mb-6`,W=x.input`w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`;function A({label:o,description:s,collapsed:r,onClick:a}){const t=e.jsx("label",{className:"block font-semibold text-token-text-primary",children:o});return e.jsxs("div",{className:"mb-1.5 flex items-center",onClick:a,children:[r!==void 0&&(r?e.jsx(k,{className:"icon-sm"}):e.jsx(v,{className:"icon-sm"})),s?e.jsx(f,{label:s,sideOffset:4,side:"top",delayDuration:0,children:t}):e.jsx(e.Fragment,{children:t})]})}function E({actionTool:o,onShowActionsEditor:s,isDisabled:r}){const a="metadata"in o?o.metadata?.domain:void 0;return e.jsxs("div",{className:g("flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",r?"bg-token-main-surface-secondary":""),onClick:s,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:a??e.jsx("span",{className:"text-red-500",children:e.jsx(i,{id:"TJYXrY",defaultMessage:"Invalid action"})})}),e.jsx("div",{className:"w-px bg-token-border-medium"}),e.jsx("button",{disabled:r,className:"flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",children:e.jsx(T,{className:"icon-sm"})})]})}function G(){return e.jsx("div",{className:"ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-semibold leading-none text-token-text-tertiary",children:"?"})}function S({description:o}){return e.jsx(f,{wide:!0,label:o,delayDuration:0,children:e.jsx(G,{})})}function m({label:o,toolType:s,enabledTools:r,onEnabledToolsChange:a,disabled:t,disabledTooltip:n}){const d=l=>r.some(h=>h.type===l),p=e.jsx(N,{labelClassName:"w-full cursor-pointer",id:s,label:o,checked:!t&&d(s),disabled:t,onChange:()=>{d(s)?a(r.filter(l=>l.type!==s)):a([...r,{type:s}])}});return n!=null?e.jsx("div",{className:"opacity-70",children:e.jsx(f,{side:"top",label:n,children:p})}):p}function B({enabledTools:o,onEnabledToolsChange:s}){const r=M(b.BrowsingAvailable),a=j();var t,n;const d=w(b.SearchTool);return d?n=e.jsx(i,{id:"gs7/Pw",defaultMessage:"Web Search"}):n=e.jsx(i,{id:"tNlef1",defaultMessage:"Web Browsing"}),r?t=void 0:t=d?e.jsx(i,{...u.disabledSearchToolTip}):e.jsx(i,{...u.disabledBrowsingToolTip}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx(m,{label:n,toolType:c.BROWSER,enabledTools:o,onEnabledToolsChange:s,disabled:!r,disabledTooltip:t}),e.jsx(m,{label:e.jsx(i,{id:"uSmS/p",defaultMessage:"DALL·E Image Generation"}),toolType:c.DALLE,enabledTools:o,onEnabledToolsChange:s}),e.jsx(m,{label:e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{id:"8Lv1lK",defaultMessage:"Code Interpreter & Data Analysis"}),e.jsx(S,{description:a.formatMessage(u.codeInterpreterTooltip)})]}),toolType:c.PYTHON,enabledTools:o,onEnabledToolsChange:s})]})}const u=y({disabledBrowsingToolTip:{defaultMessage:"Web browsing is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledBrowsingToolTip"},disabledSearchToolTip:{defaultMessage:"Web search is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledSearchToolTip"},codeInterpreterTooltip:{id:"GizmoEditorModelPicker.codeInterpreterTooltip",defaultMessage:"Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more."},memoryTooltip:{id:"GizmoEditorModelPicker.memoryTooltip",defaultMessage:"Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT."}});export{C as F,B as G,A as a,W as b,I as c,E as d};
//# sourceMappingURL=n6xi9s9swhwtfks3.js.map
