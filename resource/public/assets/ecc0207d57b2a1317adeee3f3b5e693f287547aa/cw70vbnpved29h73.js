import{u as $,r as m,h as j,R as Q,y as X}from"./cenhwbprxai3toix.js";import{dK as k,dL as J,dM as W,dN as z,dO as ee,dP as w,dQ as se,dR as te,dS as A,dT as oe,dU as D,bM as re,dV as ne,dW as ae,dX as ce,dY as de,cD as ie,dZ as ue,d_ as Te,d$ as H,e0 as me,e1 as fe,e2 as le,e3 as pe,e4 as xe,e5 as B,e6 as Ie,e7 as ge,e8 as ve,e9 as Me,ea as S,eb as R,ec as Ee,ed as Ce}from"./bomvf441parvbl6l.js";import{a as he,T as F,m as ye,o as Fe,s as Le}from"./h0w2cfyxquh3a88t.js";import{f as Re}from"./bh0hpeydruybhwyo.js";const Ve=e=>j.safeGet("/conversation/{conversation_id}/textdocs",{parameters:{path:{conversation_id:e}}}),Ne=async e=>{const t=await Ve(e),o=new Map(t?.map(r=>[r.id,r])),s=[];for(const{id:r,content:a,version:c,textdoc_type:n,title:l,comments:p}of t)s.push({textdocId:r,messageId:null,type:z(n),comments:ee(p,a),status:w.COMPLETE,title:l,content:a,versionInt:c,createdAt:0});return{persistedTextdocVersionById:new Map(s.map(r=>[r.textdocId,r])),persistedTextdocVersions:s,persistedTextdocById:o}};function Oe({clientThreadId:e,isEnabled:t}){const o=he(()=>F.getServerThreadId(e)),{data:s,error:d,isLoading:r,isFetching:a,refetch:c}=$({queryKey:[o,"textdocs"],enabled:!!o&&t,gcTime:0,queryFn:()=>o&&Ne(o)});return m.useEffect(()=>{if(!s)return;const{persistedTextdocVersions:n}=s;k(n),J(n),W(n)},[s]),[{...s,error:d,isLoading:r,isFetching:a},c]}var b=(e=>(e[e.INITIALIZING=0]="INITIALIZING",e[e.READY=1]="READY",e[e.REFETCHING=2]="REFETCHING",e))(b||{});function Be({clientThreadId:e,isEnabled:t}){const[{error:o,persistedTextdocVersionById:s=null,isLoading:d,isFetching:r},a]=Oe({clientThreadId:e,isEnabled:t}),c=se();te(()=>{if(!t)return;const l=F.getThreadCurrentLeafId(e),p=F.getThreadConversationTurns(e,l),f=A(p)?.messages??[],i=oe(f);if(i==null)return;const M=i.message.metadata?.canvas?.textdoc_id,L=i.message.metadata?.canvas?.version;M!=null&&L!=null&&c(M,L),a()});let n=0;return s&&r?n=2:s&&!r&&!d&&(n=1),m.useMemo(()=>({status:n,fetchError:o,textdocVersionById:s,refetch:a}),[n,o,s,a])}const U=e=>{if(!e)return;const{messages:t}=e,o=ne(t??[],({message:d})=>d.author.role===Q.System),s=o===-1?t:t?.slice(o+1);if(s&&ae(s))return s},Se=({lastTurn:e,clientThreadId:t,isEnabled:o,isRequestActive:s,persistedTextdocStoreStatus:d})=>{const[r,a]=m.useState(!0),c=o&&(s||!r||d===b.REFETCHING),n=m.useMemo(()=>{if(!e||!D(e))return null;const p=F.getTree(t),{variantIds:v}=e;return v.map(f=>{const i=p.getLeafFromNode(f).id;return A(F.getThreadConversationTurns(t,i))})},[t,e]);return[m.useMemo(()=>!c||!e?null:D(e)?n?.flatMap(U).filter(re)??null:U(e)??null,[c,e,n]),a]};function Ae({clientThreadId:e,isEnabled:t}){const o=ye(e),s=Fe(e,o),d=Le(e),r=ie(d),a=Be({isEnabled:t,clientThreadId:e}),c=ue(),n=Te(()=>Promise.allSettled([a.refetch(),Re(e,!0)])),[l,p]=Se({isEnabled:t,isRequestActive:r,lastTurn:A(s),clientThreadId:e,persistedTextdocStoreStatus:a.status}),v=!!l,f=n??l,i=!!n||r,M=f?n?H.NATIVE:H.LAST_TURN:null,L=m.useMemo(()=>s.slice(0,v?-1:s.length),[s.length,v]),P=me(L),V=fe(),_=le(),q=pe(),E=m.useMemo(()=>{let g=xe(P);const{textdocVersionById:G,fetchError:Y,status:Z}=a;return g=B(g,u=>{u.fetchError=Y,u.isFetchingFromPersistence=Z===b.REFETCHING;for(const{pastedAt:x,content:C,metadata:h,tempId:T}of q){const O=u.resolveTempTextdocId[T]??T,{title:y="",type:I=Me.DOCUMENT}=h??{};S(u,{textdocId:O,title:y,type:I,content:C,createdAt:x,versionInt:0,comments:[],messageId:null,status:w.COMPLETE})}if(G)for(const[x,C]of G.entries()){u.allTextdocIdSet[x]=x;const h=c.get(x);let T=h&&(h.versionInt??R)>(C.versionInt??R)?{...C,...h}:C;const O=_.filter(I=>I.textdocId===x&&I.kind===Ee.REMOVE_COMMENT);let y=T.versionInt;for(const I of O)T=Ce(T,I),y=Math.max(y??R,I.versionInt??R);T={...T,versionInt:y},u.textdocById[x]=void 0,S(u,T)}}),V?B(g,u=>{S(u,V,!1)}):g},[q,P,a,c,V,_]),K=m.useMemo(()=>f?.length?Ie(i,E,f):null,[f,i,E]),N=ge(i,K,p);return m.useMemo(()=>N?B(ve(E,N),g=>{g.streamingSource=M}):E,[E,M,N])}function De({clientThreadId:e,children:t}){const o=ce(),s=Ae({clientThreadId:e,isEnabled:o});return X.jsx(de.Provider,{value:s,children:t})}export{De as T};
//# sourceMappingURL=cw70vbnpved29h73.js.map
