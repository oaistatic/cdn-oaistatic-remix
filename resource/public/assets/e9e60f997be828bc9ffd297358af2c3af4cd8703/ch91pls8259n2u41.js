import{dh as h,bc as p,u as A,r as e,dK as m}from"./du9ygo55hccsm0ec.js";import"./ibjw18ivx5tw615x.js";function C(){const s=h(),c=p(),u=A(),[a,d]=e.useState(!1),[o,f]=e.useState(!1),t=s.accountId;e.useEffect(()=>{let n=!1;if(t&&!a){const i=()=>{if(n)return;const{updatedAccount:l}=m(u,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,a,u]);const r=!t||a;return e.useEffect(()=>{!o&&r&&(c(s.toPath,{replace:!0}),f(!0))},[o,r,s.toPath,c]),null}export{C as default};
//# sourceMappingURL=ch91pls8259n2u41.js.map