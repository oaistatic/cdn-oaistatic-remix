import{ek as p,a3 as h,m,r as e,eK as A}from"./gqmy69lfum1xn3in.js";import"./i4z8naqcr3t3djqa.js";function C(){const a=p(),c=h(),u=m(),[s,d]=e.useState(!1),[o,f]=e.useState(!1),t=a.accountId;e.useEffect(()=>{let n=!1;if(t&&!s){const i=()=>{if(n)return;const{updatedAccount:l}=A(u,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,s,u]);const r=!t||s;return e.useEffect(()=>{!o&&r&&(c(a.toPath,{replace:!0}),f(!0))},[o,r,a.toPath,c]),null}export{C as default};
//# sourceMappingURL=obxzca7u6hqg6yzi.js.map