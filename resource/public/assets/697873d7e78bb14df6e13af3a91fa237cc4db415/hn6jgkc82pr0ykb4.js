import{g1 as u,a9 as i,aa as p,O as l,L as g,w as m,r as f,V as y,P as d,K as P}from"./dfm2yceao9m2ilo9.js";import{aU as C}from"./o7wih49jz3zkdcav.js";function T(){const e=u(),a=i(),[t]=p(),o=l(),n=g(),r=m();return f.useEffect(()=>{if(e){const s=t.get("plan_type")??"plus",c=C(s);s==="plus"&&y.logEvent("chatgpt_plus_payment_success_page"),d.logPaymentSuccess({plan_type:s}),r.invalidateQueries({queryKey:["account-status"]}),a("/#pricing"),o.success(n.formatMessage(_.paymentConfirmationToastMessage,{planName:c}),{duration:5})}},[e,a,t,o,n,r]),null}const _=P({paymentConfirmationToastMessage:{id:"Payments.success.toast",defaultMessage:"You're now subscribed to ChatGPT {planName}"}});export{T as default};
//# sourceMappingURL=hn6jgkc82pr0ykb4.js.map