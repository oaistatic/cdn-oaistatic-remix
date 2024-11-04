import{r as g,y as e,a1 as _,X as R,a9 as $,ag as B,u as L,h as F,l as O,a6 as U,eY as H,j as Q,av as v,bq as W,ar as X}from"./du9ygo55hccsm0ec.js";import{a as z,b as J,u as Z,e as ee}from"./d2ehv2ml02x5rh4j.js";import{a as se,d as te,e as ae,f as ne}from"./otc6otg6r0pvcjy9.js";import{ag as oe,t as ie,I as re,bh as le}from"./ibjw18ivx5tw615x.js";import{S as d}from"./g917upaeimfgkdh1.js";import{U as T,G as w,a as ce}from"./156t2vs0ziqy5ta8.js";import{N as f,ao as de,h as ue}from"./hc0go6t8u8it292j.js";import{D as N}from"./23yqn56dfa53achp.js";import"./eo3f8wi24ku6jqxy.js";import"./d0s4um1rh2f7pgrr.js";import"./ndpe1ojbx7c3v18s.js";import"./m7ykldedawewofy8.js";import"./kl23pvq05rxrgvth.js";import"./kwyhm54wtm4zbkpo.js";import"./huj2tv4ji3im8uo0.js";import"./j2y7wsnqu61ya7iz.js";import"./ls8z0fgz00gw1alh.js";import"./gymcumd7hmh6bi1s.js";import"./gj6xeouxppgt6npy.js";import"./j5wjh6rpg8sgmhl2.js";import"./o10l6zlxq2kc59vq.js";import"./lhn6m9yd9enpu197.js";const k={NAME_KEYWORD:"Name keyword",NAME_SUBSTRING:"Name substring",DESCRIPTION_KEYWORD:"Description keyword",DESCRIPTION_SUBSTRING:"Description substring"},h={USERS:"User",GROUPS:"Group",SHARED_DRIVE:"Shared drive",...k},me={ALL:"All exclusion types",...k},P={ALL:"All exclusion types",...h},xe=[["sensitive_object_name_keywords",h.NAME_KEYWORD],["sensitive_object_name_substrings",h.NAME_SUBSTRING],["sensitive_object_description_keywords",h.DESCRIPTION_KEYWORD],["sensitive_object_description_substrings",h.DESCRIPTION_SUBSTRING],["sensitive_users",h.USERS],["sensitive_groups",h.GROUPS],["sensitive_shared_drive_ids",h.SHARED_DRIVE]],K={},V={};xe.forEach(([s,n])=>{K[s]=n,V[n]=s});function fe(s){const n=[];for(const[i,o]of Object.entries(s))for(const[t,c]of Object.entries(o)){const x=K[t];if(x){if(Array.isArray(c))c.forEach((u,r)=>{n.push({id:`${i}_${t}_${r}`,lastModifiedTime:o.last_modified_time,name:u,exclusionType:x,parentId:i,parentType:o.type})});else if(typeof c=="object"&&c!=null)for(const u of Object.keys(c))n.push({id:`${i}_${t}_${u}`,lastModifiedTime:o.last_modified_time,name:u,exclusionType:x,parentId:i,parentType:o.type})}}return n}function pe(s){return Object.values(s)[0]?.last_modified_time}function ge(s){return Object.keys(s)[0]}function he(s){return!!Object.values(s)[0]?.is_oauth}const A=10;function Me({rowData:s,filterInputValue:n,filterType:i,workspaceId:o}){const[t,c]=g.useState(0);g.useEffect(()=>{c(0)},[n,i]);const x=s.filter(m=>m.name.toLowerCase().includes(n.toLowerCase())&&(i===P.ALL||m.exclusionType.toLowerCase()===i.toLowerCase())),u=x.slice(t*A,(t+1)*A),r=Math.ceil(x.length/A);return e.jsxs("div",{className:"mb-6",children:[e.jsxs(f.Root,{fixed:!0,size:"normal",children:[e.jsxs(f.Header,{children:[e.jsx(f.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(_,{...y.name})}),e.jsx(f.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:e.jsx(_,{...y.type})}),e.jsx(f.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(f.Body,{children:[u.map(m=>e.jsx(je,{config:m,workspaceId:o},m.id)),u.length===0&&e.jsx(f.Row,{children:e.jsx(f.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(_,{...y.noResults})})})})]})]}),r>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(de,{currentPage:t,onChangeIndex:c,length:r})})]})}function je({config:s,workspaceId:n}){const i=R(),o=$(),t=B(),c=L(),x=F({mutationFn:r=>{const m={store_id:r.storeId,operations:r.operations,last_modified_time:r.lastModifiedTime};return O.updateKnowledgeStoreExclusionConfig(m,r.accountId)},onSuccess:()=>{c.invalidateQueries({queryKey:["listExclusionConfigs",n]}),o.success(i.formatMessage(y.deleteConfigSuccessMessage),{duration:3})},onError:()=>{o.danger(i.formatMessage(y.deleteConfigGenericErrorMessage),{duration:3})}}),u=()=>{if(!s.parentId){o.danger(i.formatMessage(y.deleteConfigGenericErrorMessage),{duration:3});return}if(!t){o.danger(i.formatMessage(y.deleteConfigGenericErrorMessage),{duration:3});return}const r={action:H.REMOVE,field:V[s.exclusionType],value:s.name};x.mutate({storeId:s.parentId,operations:[r],lastModifiedTime:s.lastModifiedTime,accountId:t.id})};return e.jsxs(f.Row,{children:[e.jsx(f.Cell,{className:"whitespace-normal break-all",children:e.jsx("span",{children:s.name})}),e.jsx(f.Cell,{className:"whitespace-nowrap",children:e.jsx("span",{children:s.exclusionType})}),e.jsx(f.Cell,{children:e.jsx(ye,{onDelete:u})})]})}function ye({onDelete:s}){return e.jsxs(N.Root,{children:[e.jsx(N.Trigger,{children:e.jsx(oe,{className:"icon-sm cursor-pointer"})}),e.jsx(N.Portal,{children:e.jsx(N.Content,{children:e.jsx(N.Item,{className:"cursor-pointer",onClick:s,children:e.jsx(_,{...y.deleteConfig})})})})]})}const y=U({name:{id:"B+5Xa5",defaultMessage:"Name"},type:{id:"DY07PN",defaultMessage:"Type"},deleteConfig:{id:"fB8e41",defaultMessage:"Delete config"},noResults:{id:"x1Ejc3",defaultMessage:"No results"},deleteConfigSuccessMessage:{id:"d60LPO",defaultMessage:"Exclusion deleted successfully."},deleteConfigGenericErrorMessage:{id:"pOww+E",defaultMessage:"Error deleting exclusion."}});function Ce({currentWorkspaceId:s}){const n=R(),[i,o]=g.useState(""),{data:t}=Q({queryKey:["listExclusionConfigs",s],queryFn:()=>O.listExclusionConfigs(s)}),c=t?fe(t):[],x=t?ge(t):null,u=t?pe(t):null,r=t?he(t):!1,[m,C]=g.useState(P.ALL),[E,M]=g.useState(""),S=g.useCallback(ue(b=>{M(b)},250),[]);return e.jsxs(e.Fragment,{children:[e.jsx(z,{title:n.formatMessage(l.title)}),e.jsx(J,{children:e.jsxs(se,{className:"mt-6 gap-6",children:[e.jsxs(te,{children:[e.jsx(ae,{children:n.formatMessage(l.exclusionsSectionHeader)}),e.jsx(ne,{className:"text-[var(--Primary-Gray-600,_#565869)]",children:n.formatMessage(l.exclusionsSectionDescription)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(ie,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:i,onChange:b=>{o(b.target.value),S(b.target.value)},placeholder:n.formatMessage(l.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 text-base placeholder:text-token-text-tertiary"})]}),e.jsx(Ee,{filterType:m,setFilterType:C,isOAuth:r})]}),e.jsx(v,{className:"max-w-[192px] rounded-lg border text-base",color:"primary",icon:re,onClick:()=>{T.openModal(w.CreateExclusion)},children:n.formatMessage(l.createExclusionButton)})]}),e.jsx(Me,{rowData:c,filterInputValue:E,filterType:m,workspaceId:s})]})}),e.jsx(be,{currentWorkspaceId:s,parentId:x,lastModifiedTime:u,isOAuth:r})]})}function Ee({filterType:s,setFilterType:n,isOAuth:i}){return e.jsx("div",{className:"max-w-[208px]",children:e.jsxs(d.Root,{value:s,onValueChange:o=>n(o),disabled:!1,children:[e.jsxs(d.Trigger,{className:"rounded-lg border border-token-border-light py-5 text-base",children:[e.jsx(d.Value,{}),e.jsx(d.Icon,{})]}),e.jsx(d.Portal,{children:e.jsx(d.Content,{children:Object.entries(i?me:P).map(([o,t])=>e.jsx(d.Item,{value:t,className:"text-base",children:t},o))})})]})})}function be({currentWorkspaceId:s,parentId:n,lastModifiedTime:i,isOAuth:o}){const t=R(),c=B(),x=L(),u=ce(w.CreateExclusion),[r,m]=g.useState(""),[C,E]=g.useState([]),[M,S]=g.useState(""),[b,j]=g.useState(null),q=a=>{a.key==="Enter"||a.key===","?(a.preventDefault(),M.trim()&&(E([...C,M.trim()]),S(""))):a.key==="Backspace"&&!M&&G(C.length-1)},G=a=>{E(C.filter((p,D)=>D!==a))},I=F({mutationFn:a=>{const p={store_id:a.storeId,operations:a.operations,last_modified_time:a.lastModifiedTime};return O.updateKnowledgeStoreExclusionConfig(p,a.accountId)},onSuccess:()=>{x.invalidateQueries({queryKey:["listExclusionConfigs",s]}),E([]),m(""),S(""),T.closeModal(w.CreateExclusion)},onError:()=>{j(l.creationModalGenericErrorMessage)}}),Y=()=>{const a=[...C];if(M.trim()&&a.push(M.trim()),!n){j(l.creationModalGenericErrorMessage);return}if(!c){j(l.creationModalGenericErrorMessage);return}if(!r){j(l.creationModalValueErrorMessage);return}if(a.length===0){j(l.creationModalValueErrorMessage);return}j(null);const p=a.map(D=>({action:H.ADD,field:V[r],value:D}));I.mutate({storeId:n,operations:p,lastModifiedTime:i,accountId:c.id})};return e.jsx(W,{size:"custom",className:"max-w-lg overflow-y-auto text-base",isOpen:u,onClose:()=>{T.closeModal(w.CreateExclusion),j(null),E([])},showCloseButton:!0,type:"success",title:t.formatMessage(l.creationModalTitle),description:"",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"inline-flex items-center pb-2 text-base",children:t.formatMessage(l.creationModalExclusionType)}),e.jsxs(d.Root,{value:r,onValueChange:a=>m(a),disabled:!1,children:[e.jsxs(d.Trigger,{className:"justify-between rounded-lg border border-token-border-light py-5 text-base",children:[e.jsx(d.Value,{placeholder:"Select exclusion type"}),e.jsx(d.Icon,{})]}),e.jsx(d.Portal,{children:e.jsx(d.Content,{children:Object.entries(o?k:h).map(([a,p])=>e.jsx(d.Item,{value:p,className:"text-base",children:p},a))})})]}),e.jsxs("div",{className:"flex justify-between pb-2 pt-6",children:[e.jsx("p",{className:"inline-flex items-center text-base",children:t.formatMessage(l.creationModalExclusionValue)}),e.jsx("p",{className:"inline-flex items-center text-sm text-token-text-secondary",children:t.formatMessage(l.creationModalSeparateByCommas)})]}),e.jsxs("div",{className:"flex flex-wrap items-center rounded-lg border border-token-border-light bg-token-main-surface-primary text-base",children:[C.map((a,p)=>e.jsxs("div",{className:"mx-1.5 my-2 flex min-w-0 cursor-pointer items-center rounded-full bg-gray-200 px-3.5 py-1 font-medium text-black",children:[e.jsx("span",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:a}),e.jsx(v,{onClick:()=>{G(p)},color:"ghost",className:"ml-2 min-h-0 p-0 text-gray-600 hover:text-red-700",icon:le})]},p)),e.jsx("input",{type:"text",value:M,onChange:a=>S(a.target.value),onKeyDown:q,placeholder:t.formatMessage(l.creationModalValuePlaceholder),className:"w-full min-w-0 flex-1 overflow-x-auto border-none bg-transparent text-base placeholder:text-token-text-tertiary focus:border-transparent focus:outline-none focus:ring-0"})]}),b&&e.jsx("p",{className:"mt-4 text-sm text-red-500",children:t.formatMessage(b)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(v,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{T.closeModal(w.CreateExclusion),E([]),j(null)},children:t.formatMessage(l.creationModalCancelButton)}),e.jsx(v,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:Y,disabled:I.status==="pending",children:I.status==="pending"?e.jsx(X,{}):t.formatMessage(l.creationModalCreateButton)})]})]})})}const l=U({title:{id:"j2s2hr",defaultMessage:"Google Drive Connection"},search:{id:"NxiatU",defaultMessage:"Search"},exclusionsSectionHeader:{id:"D6JZP8",defaultMessage:"Exclusions"},exclusionsSectionDescription:{id:"9a9d/v",defaultMessage:"Manage which files will be excluded from being indexed by ChatGPT."},createExclusionButton:{id:"nKYBN7",defaultMessage:"Create exclusion"},creationModalTitle:{id:"ET+VpS",defaultMessage:"New exclusion"},creationModalExclusionType:{id:"I+xnyV",defaultMessage:"Type"},creationModalValuePlaceholder:{id:"hua2tW",defaultMessage:"String"},creationModalExclusionValue:{id:"aAr8X0",defaultMessage:"Value"},creationModalSeparateByCommas:{id:"HQDOHA",defaultMessage:"Separate values by commas"},creationModalCreateButton:{id:"GsyTJk",defaultMessage:"Create"},creationModalCancelButton:{id:"kUO70c",defaultMessage:"Cancel"},creationModalGenericErrorMessage:{id:"wUcmIJ",defaultMessage:"Error creating exclusion."},creationModalValueErrorMessage:{id:"+2RviF",defaultMessage:"Please enter all required fields."}});function Ye(){const s=Z();return ee(),e.jsx(Ce,{...s})}export{Ye as default};
//# sourceMappingURL=ecpi9o90315wzutq.js.map