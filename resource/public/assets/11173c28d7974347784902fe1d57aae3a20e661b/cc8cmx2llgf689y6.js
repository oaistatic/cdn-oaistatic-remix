const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ol15nok0o6l0ahzg.js","assets/nqo5y2f0dorhrqsr.js","assets/dh0yl0m9q337gmci.js","assets/root-e6p3mfos.css","assets/ktiwgucld5a8s55m.js","assets/conversation-small-kq10986g.css","assets/gaad4oovd7ll3n61.js","assets/c4bxzbp1808foto4.js","assets/ldydeoqo6jyecaok.js","assets/m3ts7jrc8jdb6xvs.js","assets/ADAVisualizationComponent-mi6em660.css"])))=>i.map(i=>d[i]);import{aR as V,aS as _,M as b,av as I,da as S,db as A}from"./dh0yl0m9q337gmci.js";import{j as e,c as T}from"./nqo5y2f0dorhrqsr.js";import{b6 as C,bf as w,bg as F,bh as k,O as z,bi as O,bj as v,bk as W,bl as D,bm as R}from"./ktiwgucld5a8s55m.js";import{T as c,a as U}from"./dvl2tfqalthh42cv.js";const M=V(()=>_(()=>import("./ol15nok0o6l0ahzg.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(t=>t.default));function B({messages:t,isRequestActive:l,clientThreadId:u}){const[r,s]=t,n=C(r.message),a=s?.message.metadata?.aggregate_result,h=w(),g=F(),d=s?.message?k(s.message):[],o=s?.message.metadata?.aggregate_result?.messages.filter(z)??[],j=(d.filter(i=>i.type==="chart")??[]).length!==o.length,f=g&&!j;let m=c.Running;return a?.status==="success"?m=c.Finished:s!=null&&s.message.content.content_type!==b.ExecutionOutput||a!=null&&a.status!=="running"?m=c.Error:(n||!l)&&(m=c.Stopped),e.jsxs(e.Fragment,{children:[e.jsx(N,{messages:t,status:m,isRequestActive:l}),f&&d.map((i,x)=>{const{type:E}=i;return E==="chart"&&!h?(i.fallback_to_image=!0,e.jsx(y,{children:e.jsx(M,{clientThreadId:u,visualization:i})},x)):e.jsx(y,{children:e.jsx(M,{clientThreadId:u,visualization:i})},x)}),!f&&s!=null&&e.jsx(O,{message:s.message})]})}const y=I.div`mb-3 max-w-[80%]`;function N({messages:t,status:l,isRequestActive:u}){const[r,s]=t,n=T(),a=s?.message.metadata?.aggregate_result,h=C(r.message),{data:g,error:d}=S(A.ShowExpandedCodeView);let o=n.formatMessage({id:"message.tools.data-analysis.running",defaultMessage:"Analyzing"});if(a?.status==="success"?o=n.formatMessage({id:"message.tools.data-analysis.finished",defaultMessage:"Analyzed"}):s!=null&&s.message.content.content_type!==b.ExecutionOutput||a!=null&&a.status!=="running"?o=n.formatMessage({id:"message.tools.data-analysis.error",defaultMessage:"Analysis errored"}):(h||!u)&&(o=n.formatMessage({id:"message.tools.data-analysis.stopped",defaultMessage:"Analysis paused"})),g!==void 0||d){const p=v(r.message)!=null;return e.jsx(U,{status:l,highlightedCommand:o,showWorkUserSetting:g??!1,hideOnlyIfNotInteractedWith:!0,children:p?e.jsxs("div",{className:"mb-3 mt-0.5 overflow-hidden rounded-xl bg-black",children:[e.jsx(W,{message:r.message,FormattedText:D}),s!=null&&e.jsx(R,{message:s.message})]}):null})}return null}export{B as DataAnalysisMessage};