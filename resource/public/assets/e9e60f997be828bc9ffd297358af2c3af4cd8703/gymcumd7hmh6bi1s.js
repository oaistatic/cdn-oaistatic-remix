import{X as g,y as r,a1 as E,j as _,r as w,a2 as i,a6 as y,l as b,au as j,O as C,M as m,D as p}from"./du9ygo55hccsm0ec.js";import{az as N,cQ as S,cR as M}from"./hc0go6t8u8it292j.js";import{aM as v}from"./ibjw18ivx5tw615x.js";import{c as T}from"./m7ykldedawewofy8.js";function k({jupyterMessage:e}){const a=T(),t=g();if(a)return r.jsxs("div",{className:"my-1 flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-token-text-tertiary dark:border-white/10",children:[r.jsx(v,{className:"icon-lg"}),r.jsx(E,{...d.imageNotSupported})]});if(e.image_payload!=null)return r.jsx("img",{className:"my-1",src:`data:image/png;base64,${e.image_payload}`,alt:t.formatMessage(d.altText)});if(e.image_url!=null){const s=N(e.image_url);return r.jsx(O,{fileId:s})}return null}const F=30*1e3,f=100,c=1.5,I=Math.log(1-F*(1-c)/f)/Math.log(c);function O({fileId:e}){const a=g(),{data:t,isLoading:s,refetch:l}=_({queryKey:["getFileDownloadLink",e],queryFn:()=>b.getFileDownloadLink(e),refetchInterval:o=>{const n=o.state.dataUpdateCount;return o.state.data?.status===i.Success||n>I||o.state.status===i.Error?!1:Math.pow(c,n)*f}});return w.useEffect(()=>{if(t?.status===i.Success){const n=new URL(t.download_url,location.toString()).searchParams.get("se");n!=null&&!s&&new Date>new Date(n)&&l()}},[t,s,l]),t?.status!==i.Success?null:r.jsx("img",{src:t.download_url,className:"my-1 max-h-full max-w-full",alt:a.formatMessage(d.altText)})}const d=y({imageNotSupported:{id:"CodeExecutionOutputImage.imageNotSupported",defaultMessage:"Image output is not supported in a shared chat"},altText:{id:"CodeExecutionOutputImage.altText",defaultMessage:"Output image"}});function H({FormattedText:e,message:a}){const{resolvedTheme:t}=j();return r.jsx(M.Provider,{value:{isWithinDataAnalysisToolMessage:!0},children:r.jsx(e,{className:C("markdown prose w-full break-words dark:prose-invert",t==="dark"?"dark":"light"),children:R(a)})})}function R(e){function a(t,s){return`\`\`\`${s}
${t}
\`\`\``}if(e.content.content_type==="code")return a(e.content.text,"python");if(e.recipient==="python"){if(e.content.content_type!=="text")throw new Error("Unexpected content type for code message");const t=e.content.parts;if(t.length!==1||typeof t[0]!="string")throw new Error("Unexpected parts for code message");return a(t[0],"python")}throw new Error("Unexpected code message format")}function J({message:e}){const a=g();if(e.content.content_type!==m.ExecutionOutput)return null;const t=e.metadata?.aggregate_result;if(!t)return p.addError("Corrupt code execution result message"),null;const s=t.messages.filter(U),l=s.length>0,o=t.final_expression_output!=null,n=t.in_kernel_exception!=null;return r.jsxs(r.Fragment,{children:[l&&r.jsx(x,{label:"STDOUT/STDERR",output:s.map((u,h)=>r.jsx("span",{className:u.stream_name==="stderr"?"text-red-500":"",children:u.text},`${h}`))}),o&&r.jsx(x,{label:a.formatMessage({id:"codeInterpreterMessage.resultLabel",defaultMessage:"Result"}),output:t.final_expression_output}),n&&r.jsx(D,{traceback:t.in_kernel_exception.traceback.join("")})]})}function x({label:e,output:a}){return r.jsxs("div",{className:"bg-gray-700 p-4 text-xs",children:[r.jsx("div",{className:"mb-1 text-gray-400",children:e}),r.jsx("div",{className:"prose flex flex-col-reverse text-white",children:r.jsx("pre",{className:"shrink-0",children:a})})]})}function D({traceback:e}){return r.jsx("div",{className:"overflow-auto border-t border-gray-500 text-white",children:r.jsx("div",{className:"border-l-4 border-red-500 p-2 text-xs",children:r.jsx("div",{className:"scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",children:r.jsx("pre",{className:"shrink-0",children:e})})})})}function q({message:e}){if(e.content.content_type!==m.ExecutionOutput)return null;const a=e.metadata?.aggregate_result;return a?r.jsx(r.Fragment,{children:a.messages.filter(L).map((t,s)=>r.jsx(k,{jupyterMessage:t},s))}):(p.addError("Corrupt code execution result message"),null)}function U(e){return e.message_type==="stream"}function L(e){return e.message_type==="image"||"image_url"in e&&S(e.image_url+"")}export{q as C,H as a,J as b,k as c,R as g,L as i};
//# sourceMappingURL=gymcumd7hmh6bi1s.js.map
