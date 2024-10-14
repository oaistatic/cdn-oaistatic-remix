import{l as e,W as M,aK as k,r as c,P as R,a as w,X as T,a0 as v,m as x,bd as N,a1 as S,h as C}from"./egi9yqe8h527q0wn.js";import{aS as E,aH as p,aD as F,a7 as P,c as b,X as O,al as U,a4 as H}from"./kovfiydeinrm6blw.js";import{aO as _}from"./e6itquh41uv61tg7.js";import{e as L}from"./bue7ssrf5lr74ywi.js";function q(t,o){const a=t??o??0;return x(t!=null&&t!=o&&"opacity-50 dark:opacity-60",a>4?"text-brand-purple":a>3?"text-green-500":a>2?"text-yellow-500":a>1?"text-orange-500":"text-red-500")}function A(t){switch(t){case 1:return s.hoverRating1;case 2:return s.hoverRating2;case 3:return s.hoverRating3;case 4:return s.hoverRating4;case 5:return s.hoverRating5}}function B(t){return C({queryFn:async()=>U.getUserReview(t),queryKey:["gizmo","review",{gizmoId:t}],enabled:t!=null})}const I=({rating:t,onRating:o,className:a})=>{const[i,u]=c.useState(),r=M();return e.jsx("div",{className:x("flex flex-row",a),children:[1,2,3,4,5].map(d=>{const m=e.jsx(_,{className:x("icon-2xl cursor-pointer",(i??t??0)>=d?q(i,t):"text-token-main-surface-tertiary")}),g=A(i??0),l=g&&r.formatMessage(g);return e.jsx("div",{onClick:()=>{o(d)},onMouseEnter:()=>{u(d)},onMouseLeave:()=>{u(void 0)},className:"p-1",children:g?e.jsx(b,{label:l,side:"top",sideOffset:4,children:m}):m},d)})})},X=({gizmo:t})=>E(p.GPTReview)?e.jsx(D,{gizmo:t}):null,D=({gizmo:t})=>{const o=F(),a=()=>H.closeModal(p.GPTReview),i=M(),u=k(),[r,d]=c.useState(""),[m,g]=c.useState(!1),l=B(t.gizmo.id),y=L(t.gizmo.id),[n,h]=c.useState(),j=n===l.data?.rating;c.useEffect(()=>{l.data!=null&&n==null&&h(l.data.rating)},[l.data,n]),c.useEffect(()=>{R.logEvent(w.showRatingModal,{gizmo_id:t.gizmo.id})},[t.gizmo.id]);const G=l.data!=null,z=!t.gizmo.tags?.includes(P.FirstParty)&&t.gizmo.author.will_receive_support_emails;return e.jsx(T,{type:"success",title:e.jsxs("div",{children:[e.jsx(v,{...s.title}),e.jsxs("div",{className:"align-end mt-2 flex text-sm font-normal",children:[G?e.jsx(v,{...s.subtitleChange}):e.jsx(v,{...s.subtitle}),e.jsx(b,{label:i.formatMessage(s.subtitleTooltip),className:"ml-1 flex cursor-pointer items-center pl-1",sideOffset:0,children:e.jsx("div",{className:"icon-xs flex items-center justify-center rounded-full border border-token-text-tertiary text-[8px] font-bold text-token-text-tertiary",children:"i"})})]})]}),isOpen:!0,onClose:a,size:"custom",showCloseButton:!0,className:"max-w-xl overflow-y-auto",hideSeparator:!0,children:e.jsxs("div",{className:"flex flex-grow flex-col space-y-8",children:[e.jsx(I,{rating:n,onRating:h,className:"mx-auto flex flex-row items-center"}),z&&e.jsxs("div",{children:[e.jsx(O,{className:"mb-1 w-full resize-none overflow-y-auto rounded-md bg-transparent focus:border-gray-200 focus:ring-gray-200 dark:focus:border-white dark:focus:ring-white",placeholder:i.formatMessage(s.messagePlaceholder),value:r,rows:1,onChange:f=>d(f.target.value)}),e.jsxs("div",{className:x("flex flex-row items-center space-x-2 self-start",r.length>0?"text-token-text-primary":"text-token-text-tertiary"),children:[e.jsx("input",{type:"checkbox",className:"rounded",checked:m,onChange:f=>g(f.target.checked)}),o&&e.jsx("span",{className:"text-sm",children:e.jsx(v,{...s.includeFrom,values:{email:e.jsx("strong",{children:o.email})}})})]})]}),e.jsx(N,{color:"primary",disabled:j,onClick:async()=>{if(n==null){u.warning("Please select a rating");return}R.logEvent(w.submitRatingModal,{gizmo_id:t.gizmo.id,rating:n}),await y.mutateAsync({rating:n,message:r.length>0?r:void 0,includeFrom:r.length>0?m:void 0}),u.success(i.formatMessage(s.successToast),{duration:3}),a()},children:e.jsx(v,{...s.submit})})]})})},s=S({title:{id:"GizmoReviewModal.title",defaultMessage:"Leave Feedback"},subtitle:{id:"GizmoReviewModal.subtitle",defaultMessage:"How would you rate this GPT?"},subtitleChange:{id:"GizmoReviewModal.subtitleChange",defaultMessage:"Would you like to change your rating?"},subtitleTooltip:{id:"GizmoReviewModal.subtitleTooltip",defaultMessage:"Stars will be public and anonymous"},messagePlaceholder:{id:"GizmoReviewModal.messagePlaceholder",defaultMessage:"Add an optional private email to the creator"},submit:{id:"GizmoReviewModal.submit",defaultMessage:"Submit"},successToast:{id:"GizmoReviewModal.successToast",defaultMessage:"Review sent"},includeFrom:{id:"GizmoReviewModal.includeFrom",defaultMessage:"Include my email address {email}"},hoverRating1:{id:"GizmoReviewModal.hoverRating1",defaultMessage:"Bad"},hoverRating2:{id:"GizmoReviewModal.hoverRating2",defaultMessage:"Okay"},hoverRating3:{id:"GizmoReviewModal.hoverRating3",defaultMessage:"Good"},hoverRating4:{id:"GizmoReviewModal.hoverRating4",defaultMessage:"Great!"},hoverRating5:{id:"GizmoReviewModal.hoverRating5",defaultMessage:"Excellent!"}});export{X as G,I as a};
//# sourceMappingURL=elp95vs8lkf3yodn.js.map
