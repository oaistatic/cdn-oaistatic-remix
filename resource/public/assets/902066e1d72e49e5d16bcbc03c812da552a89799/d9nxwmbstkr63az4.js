import{dj as j,dk as f,r as d,dl as S,dm as C,dn as y,ae as E,l as e,dp as v,dq as R,dr as _,ds as A,dt as T,du as g,dv as B,dc as N,m as c,dw as P,dx as F,dy as q,dz as D,c_ as L,dA as w,dB as G,T as O,dC as U,di as $,dD as u,dE as H}from"./j51q469vqqyswwq0.js";import"./nakmlpxnz8km92cm.js";var I={};j();const Q=()=>!1,W=()=>[{title:"ChatGPT"},...g];function M(){return B().map(s=>s.data?.dehydratedState).filter(s=>s!=null).reduce((s,n)=>(s.queries.push(...n.queries),s.mutations.push(...n.mutations),s),{mutations:[],queries:[]})}function p({children:t,isSearchPage:a,isElectron:s,isIos:n,isAndroidChrome:o,cspScriptNonce:r}){return e.jsxs("html",{"data-build":N,dir:"ltr",className:c({"snc-root":a,"sdtrn-root":s}),suppressHydrationWarning:!0,children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"UTF-8"}),e.jsx("meta",{name:"viewport",content:`width=device-width, initial-scale=1${n?", maximum-scale=1":""}`}),o?e.jsx("link",{rel:"manifest",href:"/manifest.json"}):null,e.jsx(P,{}),e.jsx(F,{}),e.jsx(q,{}),e.jsx(D,{})]}),e.jsxs("body",{className:c({snc:a}),children:[e.jsx(L.Provider,{value:{cspScriptNonce:r,isElectron:!!s},children:t}),e.jsx(w,{nonce:r})]})]})}function z(){const t=G(),{cspNonce:a}=d.useContext(O);return e.jsx(p,{cspScriptNonce:a,children:U(t)?t.status===404?e.jsx($,{}):e.jsx(u,{error:new Error(`Route Error (${t.status} ${t.statusText}): ${t.message}`),resetError:()=>location.reload()}):e.jsx(u,{error:t,resetError:()=>location.reload()})})}function Y(){const{clientBootstrap:t,isIos:a,isAndroidChrome:s,isElectron:n,cspScriptNonce:o}=f(),[r]=d.useState(()=>S()),i=M(),l=d.useRef(!1);l.current||(l.current=!0,C(r,i),H(t),y(r));const{pathname:h}=E(),x=h.startsWith("/search"),m=t.statsig??null;return e.jsx(v,{statsig:I.FORCE_STATSIG_DEFAULTS?null:m,children:e.jsx(p,{isIos:a,isAndroidChrome:s,isElectron:n,isSearchPage:x,cspScriptNonce:o,children:e.jsx(R,{client:r,children:e.jsx(_,{state:i,children:e.jsx(A,{Component:T,remixQueryClient:r,pageProps:t})})})})})}export{z as ErrorBoundary,Y as default,W as meta,Q as shouldRevalidate};
//# sourceMappingURL=d9nxwmbstkr63az4.js.map
