import{L as p,m,gb as a,K as c}from"./gfs0keudzvcg5rgq.js";import{a as u,T as f}from"./fdqp2wfsa8ojjx32.js";import{aX as S}from"./b6arjgg215unn3v3.js";import"./iqnriohw8g1d2uyi.js";import"./o7amlkgkeatodl16.js";const b=.75;function D({messages:t}){const o=p(),[i,e]=t,s=M(i,e);let n=u.Running,l=r.creatingPlan,g;switch(s.status){case"running":s.numTotalSubAgents>0&&s.numCompletedSubAgents/s.numTotalSubAgents>=b?l=r.almostDone:(l=r.running,g={numTasks:s.numTotalSubAgents});break;case"done":n=u.Finished,l=void 0;break;case"stopped":n=u.Stopped,l=r.cancelled;break}const d=l?o.formatMessage(l,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(t,o){const i=o?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??t.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,s=0,n=0;i!=null&&(e=h(i),s=e.length,n=e.filter(_).length);let l="planning";return S(t.message)?l="stopped":o!=null&&(l=n===s?"done":"running"),{status:l,subAgentInfos:e,numTotalSubAgents:s,numCompletedSubAgents:n}}function h(t){const o=Object.values(t).reduce((e,s)=>{const n=s.task_index;return e[n]==null&&(e[n]=[]),e[n].push(s),e},{});return Object.values(o).map(e=>({...e[0],status:T(e)})).sort((e,s)=>e.task_index-s.task_index)}function T(t){const o=t.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(o.some(s=>s===e))return e;return a.Starting}function _(t){return t.status===a.Done||t.status===a.Timeout||t.status===a.Error||t.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{D as default};
//# sourceMappingURL=is9p8r27z7oxdseo.js.map
