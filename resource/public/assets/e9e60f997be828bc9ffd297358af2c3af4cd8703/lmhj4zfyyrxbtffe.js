import{dm as h,bh as p,u as m,r as e,dP as A}from"./o1ivbuadejprpakj.js";import"./hpmltgx65508529x.js";function C(){const s=h(),c=p(),u=m(),[a,d]=e.useState(!1),[o,f]=e.useState(!1),t=s.accountId;e.useEffect(()=>{let n=!1;if(t&&!a){const i=()=>{if(n)return;const{updatedAccount:l}=A(u,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,a,u]);const r=!t||a;return e.useEffect(()=>{!o&&r&&(c(s.toPath,{replace:!0}),f(!0))},[o,r,s.toPath,c]),null}export{C as default};
//# sourceMappingURL=lmhj4zfyyrxbtffe.js.map
