import{eZ as j}from"./dr7d3iwdkso0acad.js";import{j as G,c as L,s as U,l as q,a as J}from"./g5r4uw1ha4jdomj8.js";import{F as k,b as A,P as E,S as T,d as K,N,D as W,p as X,q as F,M as Y}from"./mdvtv1mc8g2bqrsl.js";import{e4 as Z,e5 as Q,e6 as R}from"./dmeh4acfgftb4ocn.js";function _(n){let t="",e=!1;const r=[];function s(i){if(e=!1,i.type.name==="paragraph")return i.descendants(l=>s(l)),t+=`
`,e=!0,!1;if(i.type.name==="command_token"){const l=i.textContent;return r.push({symbol:j.SystemHint,startIndex:t.length,endIndex:t.length+l.length}),t+=l,!1}else i.isText&&i.text!==void 0&&(t+=i.text)}return n.descendants(i=>s(i)),e&&t.endsWith(`
`)&&(t=t.slice(0,-1)),{content:t,metadata:{custom_symbol_offsets:r}}}function xe(n){return _(n.state.doc)}const $=L(J,q,U);async function Te(n,t){const{schema:e}=n.state,r=t.split(`
`);if(n.dispatch(n.state.tr.deleteSelection()),n.dispatch(n.state.tr.insertText(r[0])),r.length>1){$(n.state,n.dispatch);const s=r.slice(1),i=k.fromArray(s.map(a=>e.nodes.paragraph.create(null,a===""?null:e.text(a)))),l=new A(i,0,0);n.dispatch(n.state.tr.replaceSelection(l)),G(n.state,n.dispatch,n)}}const V=typeof navigator<"u"?/Mac|iP(hone|[oa]d)/.test(navigator.platform):!1;function ee(n){let t=n.split(/-(?!$)/),e=t[t.length-1];e=="Space"&&(e=" ");let r,s,i,l;for(let a=0;a<t.length-1;a++){let o=t[a];if(/^(cmd|meta|m)$/i.test(o))l=!0;else if(/^a(lt)?$/i.test(o))r=!0;else if(/^(c|ctrl|control)$/i.test(o))s=!0;else if(/^s(hift)?$/i.test(o))i=!0;else if(/^mod$/i.test(o))V?l=!0:s=!0;else throw new Error("Unrecognized modifier name: "+o)}return r&&(e="Alt-"+e),s&&(e="Ctrl-"+e),l&&(e="Meta-"+e),i&&(e="Shift-"+e),e}function te(n){let t=Object.create(null);for(let e in n)t[ee(e)]=n[e];return t}function S(n,t,e=!0){return t.altKey&&(n="Alt-"+n),t.ctrlKey&&(n="Ctrl-"+n),t.metaKey&&(n="Meta-"+n),e&&t.shiftKey&&(n="Shift-"+n),n}function Se(n){return new E({props:{handleKeyDown:H(n)}})}function H(n){let t=te(n);return function(e,r){let s=Z(r),i,l=t[S(s,r)];if(l&&l(e.state,e.dispatch,e))return!0;if(s.length==1&&s!=" "){if(r.shiftKey){let a=t[S(s,r,!1)];if(a&&a(e.state,e.dispatch,e))return!0}if((r.shiftKey||r.altKey||r.metaKey||s.charCodeAt(0)>127)&&(i=Q[r.keyCode])&&i!=s){let a=t[S(i,r)];if(a&&a(e.state,e.dispatch,e))return!0}}return!1}}class p extends T{constructor(t){super(t,t)}map(t,e){let r=t.resolve(e.map(this.head));return p.valid(r)?new p(r):T.near(r)}content(){return A.empty}eq(t){return t instanceof p&&t.head==this.head}toJSON(){return{type:"gapcursor",pos:this.head}}static fromJSON(t,e){if(typeof e.pos!="number")throw new RangeError("Invalid input for GapCursor.fromJSON");return new p(t.resolve(e.pos))}getBookmark(){return new P(this.anchor)}static valid(t){let e=t.parent;if(e.isTextblock||!ne(t)||!se(t))return!1;let r=e.type.spec.allowGapCursor;if(r!=null)return r;let s=e.contentMatchAt(t.index()).defaultType;return s&&s.isTextblock}static findGapCursorFrom(t,e,r=!1){e:for(;;){if(!r&&p.valid(t))return t;let s=t.pos,i=null;for(let l=t.depth;;l--){let a=t.node(l);if(e>0?t.indexAfter(l)<a.childCount:t.index(l)>0){i=a.child(e>0?t.indexAfter(l):t.index(l)-1);break}else if(l==0)return null;s+=e;let o=t.doc.resolve(s);if(p.valid(o))return o}for(;;){let l=e>0?i.firstChild:i.lastChild;if(!l){if(i.isAtom&&!i.isText&&!N.isSelectable(i)){t=t.doc.resolve(s+i.nodeSize*e),r=!1;continue e}break}i=l,s+=e;let a=t.doc.resolve(s);if(p.valid(a))return a}return null}}}p.prototype.visible=!1;p.findFrom=p.findGapCursorFrom;T.jsonID("gapcursor",p);class P{constructor(t){this.pos=t}map(t){return new P(t.map(this.pos))}resolve(t){let e=t.resolve(this.pos);return p.valid(e)?new p(e):T.near(e)}}function ne(n){for(let t=n.depth;t>=0;t--){let e=n.index(t),r=n.node(t);if(e==0){if(r.type.spec.isolating)return!0;continue}for(let s=r.child(e-1);;s=s.lastChild){if(s.childCount==0&&!s.inlineContent||s.isAtom||s.type.spec.isolating)return!0;if(s.inlineContent)return!1}}return!0}function se(n){for(let t=n.depth;t>=0;t--){let e=n.indexAfter(t),r=n.node(t);if(e==r.childCount){if(r.type.spec.isolating)return!0;continue}for(let s=r.child(e);;s=s.firstChild){if(s.childCount==0&&!s.inlineContent||s.isAtom||s.type.spec.isolating)return!0;if(s.inlineContent)return!1}}return!0}function Me(){return new E({props:{decorations:ae,createSelectionBetween(n,t,e){return t.pos==e.pos&&p.valid(e)?new p(e):null},handleClick:ie,handleKeyDown:re,handleDOMEvents:{beforeinput:le}}})}const re=H({ArrowLeft:w("horiz",-1),ArrowRight:w("horiz",1),ArrowUp:w("vert",-1),ArrowDown:w("vert",1)});function w(n,t){const e=n=="vert"?t>0?"down":"up":t>0?"right":"left";return function(r,s,i){let l=r.selection,a=t>0?l.$to:l.$from,o=l.empty;if(l instanceof K){if(!i.endOfTextblock(e)||a.depth==0)return!1;o=!1,a=r.doc.resolve(t>0?a.after():a.before())}let f=p.findGapCursorFrom(a,t,o);return f?(s&&s(r.tr.setSelection(new p(f))),!0):!1}}function ie(n,t,e){if(!n||!n.editable)return!1;let r=n.state.doc.resolve(t);if(!p.valid(r))return!1;let s=n.posAtCoords({left:e.clientX,top:e.clientY});return s&&s.inside>-1&&N.isSelectable(n.state.doc.nodeAt(s.inside))?!1:(n.dispatch(n.state.tr.setSelection(new p(r))),!0)}function le(n,t){if(t.inputType!="insertCompositionText"||!(n.state.selection instanceof p))return!1;let{$from:e}=n.state.selection,r=e.parent.contentMatchAt(e.index()).findWrapping(n.state.schema.nodes.text);if(!r)return!1;let s=k.empty;for(let l=r.length-1;l>=0;l--)s=k.from(r[l].createAndFill(null,s));let i=n.state.tr.replace(e.pos,e.pos,new A(s,0,0));return i.setSelection(K.near(i.doc.resolve(e.pos+1))),n.dispatch(i),!1}function ae(n){if(!(n.selection instanceof p))return null;let t=document.createElement("div");return t.className="ProseMirror-gapcursor",W.create(n.doc,[X.widget(n.selection.head,t,{key:"gapcursor"})])}const oe=500;class h{constructor(t,e){this.items=t,this.eventCount=e}popEvent(t,e){if(this.eventCount==0)return null;let r=this.items.length;for(;;r--)if(this.items.get(r-1).selection){--r;break}let s,i;e&&(s=this.remapping(r,this.items.length),i=s.maps.length);let l=t.tr,a,o,f=[],d=[];return this.items.forEach((u,c)=>{if(!u.step){s||(s=this.remapping(r,c+1),i=s.maps.length),i--,d.push(u);return}if(s){d.push(new g(u.map));let m=u.step.map(s.slice(i)),y;m&&l.maybeStep(m).doc&&(y=l.mapping.maps[l.mapping.maps.length-1],f.push(new g(y,void 0,void 0,f.length+d.length))),i--,y&&s.appendMap(y,i)}else l.maybeStep(u.step);if(u.selection)return a=s?u.selection.map(s.slice(i)):u.selection,o=new h(this.items.slice(0,r).append(d.reverse().concat(f)),this.eventCount-1),!1},this.items.length,0),{remaining:o,transform:l,selection:a}}addTransform(t,e,r,s){let i=[],l=this.eventCount,a=this.items,o=!s&&a.length?a.get(a.length-1):null;for(let d=0;d<t.steps.length;d++){let u=t.steps[d].invert(t.docs[d]),c=new g(t.mapping.maps[d],u,e),m;(m=o&&o.merge(c))&&(c=m,d?i.pop():a=a.slice(0,a.length-1)),i.push(c),e&&(l++,e=void 0),s||(o=c)}let f=l-r.depth;return f>fe&&(a=pe(a,f),l-=f),new h(a.append(i),l)}remapping(t,e){let r=new Y;return this.items.forEach((s,i)=>{let l=s.mirrorOffset!=null&&i-s.mirrorOffset>=t?r.maps.length-s.mirrorOffset:void 0;r.appendMap(s.map,l)},t,e),r}addMaps(t){return this.eventCount==0?this:new h(this.items.append(t.map(e=>new g(e))),this.eventCount)}rebased(t,e){if(!this.eventCount)return this;let r=[],s=Math.max(0,this.items.length-e),i=t.mapping,l=t.steps.length,a=this.eventCount;this.items.forEach(c=>{c.selection&&a--},s);let o=e;this.items.forEach(c=>{let m=i.getMirror(--o);if(m==null)return;l=Math.min(l,m);let y=i.maps[m];if(c.step){let B=t.steps[m].invert(t.docs[m]),I=c.selection&&c.selection.map(i.slice(o+1,m));I&&a++,r.push(new g(y,B,I))}else r.push(new g(y))},s);let f=[];for(let c=e;c<l;c++)f.push(new g(i.maps[c]));let d=this.items.slice(0,s).append(f).append(r),u=new h(d,a);return u.emptyItemCount()>oe&&(u=u.compress(this.items.length-r.length)),u}emptyItemCount(){let t=0;return this.items.forEach(e=>{e.step||t++}),t}compress(t=this.items.length){let e=this.remapping(0,t),r=e.maps.length,s=[],i=0;return this.items.forEach((l,a)=>{if(a>=t)s.push(l),l.selection&&i++;else if(l.step){let o=l.step.map(e.slice(r)),f=o&&o.getMap();if(r--,f&&e.appendMap(f,r),o){let d=l.selection&&l.selection.map(e.slice(r));d&&i++;let u=new g(f.invert(),o,d),c,m=s.length-1;(c=s.length&&s[m].merge(u))?s[m]=c:s.push(u)}}else l.map&&r--},this.items.length,0),new h(R.from(s.reverse()),i)}}h.empty=new h(R.empty,0);function pe(n,t){let e;return n.forEach((r,s)=>{if(r.selection&&t--==0)return e=s,!1}),n.slice(e)}class g{constructor(t,e,r,s){this.map=t,this.step=e,this.selection=r,this.mirrorOffset=s}merge(t){if(this.step&&t.step&&!t.selection){let e=t.step.merge(this.step);if(e)return new g(e.getMap().invert(),e,this.selection)}}}class v{constructor(t,e,r,s,i){this.done=t,this.undone=e,this.prevRanges=r,this.prevTime=s,this.prevComposition=i}}const fe=20;function ue(n,t,e,r){let s=e.getMeta(C),i;if(s)return s.historyState;e.getMeta(me)&&(n=new v(n.done,n.undone,null,0,-1));let l=e.getMeta("appendedTransaction");if(e.steps.length==0)return n;if(l&&l.getMeta(C))return l.getMeta(C).redo?new v(n.done.addTransform(e,void 0,r,x(t)),n.undone,O(e.mapping.maps),n.prevTime,n.prevComposition):new v(n.done,n.undone.addTransform(e,void 0,r,x(t)),null,n.prevTime,n.prevComposition);if(e.getMeta("addToHistory")!==!1&&!(l&&l.getMeta("addToHistory")===!1)){let a=e.getMeta("composition"),o=n.prevTime==0||!l&&n.prevComposition!=a&&(n.prevTime<(e.time||0)-r.newGroupDelay||!ce(e,n.prevRanges)),f=l?M(n.prevRanges,e.mapping):O(e.mapping.maps);return new v(n.done.addTransform(e,o?t.selection.getBookmark():void 0,r,x(t)),h.empty,f,e.time,a??n.prevComposition)}else return(i=e.getMeta("rebased"))?new v(n.done.rebased(e,i),n.undone.rebased(e,i),M(n.prevRanges,e.mapping),n.prevTime,n.prevComposition):new v(n.done.addMaps(e.mapping.maps),n.undone.addMaps(e.mapping.maps),M(n.prevRanges,e.mapping),n.prevTime,n.prevComposition)}function ce(n,t){if(!t)return!1;if(!n.docChanged)return!0;let e=!1;return n.mapping.maps[0].forEach((r,s)=>{for(let i=0;i<t.length;i+=2)r<=t[i+1]&&s>=t[i]&&(e=!0)}),e}function O(n){let t=[];for(let e=n.length-1;e>=0&&t.length==0;e--)n[e].forEach((r,s,i,l)=>t.push(i,l));return t}function M(n,t){if(!n)return null;let e=[];for(let r=0;r<n.length;r+=2){let s=t.map(n[r],1),i=t.map(n[r+1],-1);s<=i&&e.push(s,i)}return e}function de(n,t,e){let r=x(t),s=C.get(t).spec.config,i=(e?n.undone:n.done).popEvent(t,r);if(!i)return null;let l=i.selection.resolve(i.transform.doc),a=(e?n.done:n.undone).addTransform(i.transform,t.selection.getBookmark(),s,r),o=new v(e?a:i.remaining,e?i.remaining:a,null,0,-1);return i.transform.setSelection(l).setMeta(C,{redo:e,historyState:o})}let b=!1,D=null;function x(n){let t=n.plugins;if(D!=t){b=!1,D=t;for(let e=0;e<t.length;e++)if(t[e].spec.historyPreserveItems){b=!0;break}}return b}const C=new F("history"),me=new F("closeHistory");function be(n={}){return n={depth:n.depth||100,newGroupDelay:n.newGroupDelay||500},new E({key:C,state:{init(){return new v(h.empty,h.empty,null,0,-1)},apply(t,e,r){return ue(e,r,t,n)}},config:n,props:{handleDOMEvents:{beforeinput(t,e){let r=e.inputType,s=r=="historyUndo"?he:r=="historyRedo"?ge:null;return s?(e.preventDefault(),s(t.state,t.dispatch)):!1}}}})}function z(n,t){return(e,r)=>{let s=C.getState(e);if(!s||(n?s.undone:s.done).eventCount==0)return!1;if(r){let i=de(s,e,n);i&&r(t?i.scrollIntoView():i)}return!0}}const he=z(!1,!0),ge=z(!0,!0);export{$ as c,Me as g,be as h,Te as i,Se as k,_ as n,xe as p,ge as r,he as u};
//# sourceMappingURL=f3crnwkkooc1qt8j.js.map
