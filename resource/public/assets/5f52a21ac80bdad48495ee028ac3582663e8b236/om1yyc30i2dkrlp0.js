import{j as e,c as h,M as i}from"./lklglvrzltpv3f05.js";import{bg as x,q as u,aX as g,bf as m,f as j}from"./muemwvh3ybsggbb1.js";import{d4 as w,d5 as T}from"./cp734xu9t8fnlezn.js";function y(){return e.jsx("div",{className:"ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-semibold leading-none text-token-text-tertiary",children:"?"})}function M({description:o}){return e.jsx(x,{wide:!0,label:o,delayDuration:0,children:e.jsx(y,{})})}function f({label:o,toolType:s,enabledTools:t,onEnabledToolsChange:c,disabled:r,disabledTooltip:a}){const l=d=>t.some(b=>b.type===d),n=e.jsx(T,{labelClassName:"w-full cursor-pointer",id:s,label:o,checked:!r&&l(s),disabled:r,onChange:()=>{l(s)?c(t.filter(d=>d.type!==s)):c([...t,{type:s}])}});return a!=null?e.jsx("div",{className:"opacity-70",children:e.jsx(x,{side:"top",label:a,children:n})}):n}function P({enabledTools:o,onEnabledToolsChange:s}){const t=w(u.BrowsingAvailable),c=h();var r,a;const l=g(),n=l?.includes(u.SearchTool)&&!l?.includes(u.SearchToolHoldout),d=l?.includes(u.GizmoCanvasToggle);return n?a=e.jsx(i,{id:"gs7/Pw",defaultMessage:"Web Search"}):a=e.jsx(i,{id:"tNlef1",defaultMessage:"Web Browsing"}),t?r=void 0:r=n?e.jsx(i,{...p.disabledSearchToolTip}):e.jsx(i,{...p.disabledBrowsingToolTip}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx(f,{label:a,toolType:m.BROWSER,enabledTools:o,onEnabledToolsChange:s,disabled:!t,disabledTooltip:r}),d&&e.jsx(f,{label:e.jsx(i,{id:"kilwxz",defaultMessage:"Canvas"}),toolType:m.CANVAS,enabledTools:o,onEnabledToolsChange:s,disabled:!d}),e.jsx(f,{label:e.jsx(i,{id:"uSmS/p",defaultMessage:"DALL·E Image Generation"}),toolType:m.DALLE,enabledTools:o,onEnabledToolsChange:s}),e.jsx(f,{label:e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{id:"8Lv1lK",defaultMessage:"Code Interpreter & Data Analysis"}),e.jsx(M,{description:c.formatMessage(p.codeInterpreterTooltip)})]}),toolType:m.PYTHON,enabledTools:o,onEnabledToolsChange:s})]})}const p=j({disabledBrowsingToolTip:{defaultMessage:"Web browsing is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledBrowsingToolTip"},disabledSearchToolTip:{defaultMessage:"Web search is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledSearchToolTip"},codeInterpreterTooltip:{id:"GizmoEditorModelPicker.codeInterpreterTooltip",defaultMessage:"Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more."},memoryTooltip:{id:"GizmoEditorModelPicker.memoryTooltip",defaultMessage:"Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT."}});export{P as G};
//# sourceMappingURL=om1yyc30i2dkrlp0.js.map
