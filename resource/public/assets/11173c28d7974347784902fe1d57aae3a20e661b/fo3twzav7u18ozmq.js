import{r as a}from"./nqo5y2f0dorhrqsr.js";function P(t,e){const r=300/t,n=35/r;let s;if(e<=n)s=r*e;else{const l=t-n,g=-4*((e-n)/l);s=35+(99.9-35)*(1-Math.exp(g))}return Math.min(s,99.9)}const p=(t,e)=>{const o=+new Date-t,[i,r]=a.useState(P(e,o));return a.useEffect(()=>{const n=setInterval(()=>{const s=+new Date-t,c=P(e,s);if(r(c),c>=100||s>=e)return clearInterval(n),r(100),100},100);return()=>{clearInterval(n)}},[t,e]),i};export{p as u};