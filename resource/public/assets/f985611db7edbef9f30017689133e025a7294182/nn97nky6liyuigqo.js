import{W as p,t as m,e8 as a,a5 as c}from"./bzvcy3tl84gc3bl9.js";import{a as u,T as f,i as S}from"./vlpkgw9yxupfg8nn.js";import"./o4htpc5iqra16abg.js";import"./moittmkqym6x2q8u.js";import"./fva0y2t3fypb4vx2.js";import"./f064jjm5wr3qzqg4.js";import"./c3nvn3bmsyj77vtl.js";import"./d6ri6s3v2tbmwdon.js";import"./ebzdroxnuj9v1lzs.js";import"./d52s2bg30rsaqcut.js";import"./fpqcccnb4r5a4jeu.js";import"./issp2uwkgcl4tbnk.js";import"./bqbsbuqdn312jedx.js";import"./doew5jjpf8k0sin5.js";import"./n33pr282y4sqqudc.js";import"./g00pskhyy7e7sbbu.js";import"./c2xdlummyznu9vto.js";import"./mg19kc75oys2btjg.js";import"./b2nwax1gutiivxyr.js";import"./iv68epmlitk2zqua.js";import"./ia40vr3rpj4bcpvd.js";const b=.75;function K({messages:s}){const l=p(),[i,e]=s,t=M(i,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?l.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,l){const i=l?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;i!=null&&(e=h(i),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{K as default};
//# sourceMappingURL=nn97nky6liyuigqo.js.map
