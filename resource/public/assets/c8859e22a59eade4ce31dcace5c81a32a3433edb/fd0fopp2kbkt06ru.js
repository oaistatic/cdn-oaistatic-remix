import{eE as w,bQ as P}from"./htp5iqft2rzvr58f.js";import{b as A,c as l,d as u,u as T,E as m,D as d,e as D,C as p,S as f}from"./i7lmp86g0sfr67co.js";import{av as i}from"./elatgogjtv7nqe0m.js";import{b4 as k,b1 as H,b5 as B,aj as F,b6 as O}from"./cr91oy4eihkrvo1z.js";function x(e,t){const o=N(e);if(o.length===0)return t;let n=t;return o.forEach(s=>{n=L(s,n)}),n}function L(e,t){return A(t,{start:e.fromA,end:e.toA},R(e))}function R(e){const{fromA:t,toA:o,fromB:n,toB:s}=e;return s-n-(o-t)}function N(e){const t=[],o=(n,s,a,r)=>{t.push({fromA:n,toA:s,fromB:a,toB:r})};return e.changes.iterChangedRanges(o,!0),t}function j(e,t){const o=Array.from(e.keys()),n=Array.from(t.keys());if(o.length!==n.length)return!1;o.sort(),n.sort();for(let s=0;s<o.length;s++)if(o[s]!==n[s])return!1;for(const s of o){const a=e.get(s),r=t.get(s);if(!a||!r||a.start!==r.start||a.end!==r.end)return!1}return!0}const b=l.define(),J=l.define(),q=l.define(),G=l.define();function Y(e){return new Map(e.map(t=>[t.id,t.at]))}const g=u.define({create(){return null},update(e,t){for(const o of t.effects)if(o.is(b))return o.value;return e}}),h=u.define({create(){return[]},update(e,t){for(const r of t.effects)if(r.is(J))return r.value;const o=e,n=Y(o),s=x(t,n);return j(n,s)?o:T(o,s)}}),C=u.define({create(){return null},update(e,t){for(const o of t.effects)if(o.is(q))return o.value;return e}}),v=u.define({create(){return null},update(e,t){for(const o of t.effects)if(o.is(G))return o.value;return e}});function S(e){if(!e||e.to-e.from===0)return d.none;const t=d.mark({class:w.code});return d.set([t.range(e.from,e.to)])}function y(e,t,o){if(e.length===0)return d.none;const s=[...e].sort((a,r)=>a.at.start-r.at.start).map(a=>{if(a.at.end-a.at.start===0)return null;const r=a.id===t,E=a.id===o,M=D({isHovered:r,isFocused:E,isCode:!0,diffStatus:a.diffStatus});return d.mark({class:M,attributes:{"data-comment-id":a.id}}).range(a.at.start,a.at.end)}).filter(P);return d.set(s)}const _=u.define({create(e){const t=e.field(g,!1);return S(t??null)},update(e,t){const o=t.state.field(g,!1);return S(o??null)},provide:e=>m.decorations.from(e)}),z=u.define({create(e){const t=e.field(h,!1),o=e.field(C,!1),n=e.field(v,!1);return y(t??[],o??null,n??null)},update(e,t){const o=t.state.field(h,!1),n=t.state.field(C,!1),s=t.state.field(v,!1);return y(o??[],n??null,s??null)},provide:e=>m.decorations.from(e)});function Q(e){e.state.selection.main.empty&&e.dispatch({effects:b.of(null)})}function I(e){let t=e.dataset.commentId;for(let o=0;o<10&&!t&&e.parentElement;o++)e=e.parentElement,t=e.dataset.commentId;return t}function U(e){const t=e.target,o=I(t);o&&p.focusComment(o)}function V(e){const t=e.target,o=I(t);o?p.mouseEnterComment(o):p.mouseLeaveComment()}function Z(e,t=null,o=null){return[h.init(()=>e),g,C.init(()=>t),v.init(()=>o),_,z,m.updateListener.of(n=>{n.selectionSet&&Q(n.view)}),m.domEventHandlers({click:U,mouseover:V})]}function c(e){return`Create a new document that rewrites the code in ${e}.`}const ee=[{id:"review",title:i({id:"upv1Y0",defaultMessage:"Code review"}),icon:k,prompt:"Search for bugs and opportunities to improve the code—for example, ways that performance or code structure could be improved. Leave as few comments as possible, but add more comments if the text is long. DO NOT leave more than 5 comments. You may reply that you reviewed the code and left suggestions to improve the coding quality, but do not mention the prompt.",action:f.COMMENT},{id:"comments",title:i({id:"sTWMBR",defaultMessage:"Add comments"}),icon:H,prompt:"Add inline code comments to explain the code, especially parts that are more complex. Make sure to rewrite all the code. You may reply that you added inline comments, but do not mention the prompt.",action:f.EDIT},{id:"logs",title:i({id:"+00vDz",defaultMessage:"Add logs"}),icon:B,prompt:"Insert logs/print statements in the code that will help debug its behavior. Do not make any other changes to the code.",action:f.EDIT},{id:"bugs",title:i({id:"Uw2B/L",defaultMessage:"Fix bugs"}),icon:F,prompt:"Find any bugs and rewrite all the code to fix the bugs. Do not add any new comments. If there are no bugs, reply that you reviewed the code and found no bugs.",action:f.EDIT},{id:"port",title:i({id:"BotcNe",defaultMessage:"Port to a language"}),icon:O,prompt:"Port to a language.",action:f.CREATE_TEXTDOC,menu:[{prompt:c("PHP"),title:i({id:"oR7PqF",defaultMessage:"PHP"})},{prompt:c("C++"),title:i({id:"QbnHp2",defaultMessage:"C++"})},{prompt:c("Python"),title:i({id:"viPy6U",defaultMessage:"Python"})},{prompt:c("JavaScript"),title:i({id:"Mnbu7B",defaultMessage:"JavaScript"})},{prompt:c("TypeScript"),title:i({id:"pot/GV",defaultMessage:"TypeScript"})},{prompt:c("Java"),title:i({id:"78tNyh",defaultMessage:"Java"})}]}];export{ee as C,b as a,q as b,Z as c,G as d,h as e,J as s};
//# sourceMappingURL=fd0fopp2kbkt06ru.js.map
