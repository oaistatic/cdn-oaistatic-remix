import{r as p,j as x}from"./nqo5y2f0dorhrqsr.js";import{j as m,bv as f}from"./dh0yl0m9q337gmci.js";import{b5 as c}from"./ktiwgucld5a8s55m.js";function T({messages:e,clientThreadId:s,isCompletionInProgress:o,isFeedbackEnabled:n,prevGroupedMessageType:u,prevGroupedMessages:a,onRequestMoreCompletions:i}){const d=p.useMemo(()=>[e.reduce((r,t)=>t.err==null?r+m(t.message):r,"")],[e]);return x.jsx(c,{clientThreadId:s,parts:d,isUserTurn:!1,turnIndex:0,isCompletionInProgress:o,isFeedbackEnabled:n,id:"",messages:e,onRequestMoreCompletions:i,onEnterEdit:f,prevGroupedMessageType:u,prevGroupedMessages:a})}export{T as default};