import{r as T,X as U,l as f,bg as Ze,Z as z,R as Ke,m as he,aK as Vt,dX as zt,a0 as Re,cX as Gt,cY as Yt,cZ as Wt,e5 as Jt,b as vt,h as Xt,fy as et,d4 as tt,a as Ct,dh as Qt,dN as Zt}from"./j51q469vqqyswwq0.js";import{eg as Kt,fj as en,jq as tn,aj as Tt,jr as de,js as X,j8 as nt,c as pe,N as Q,ft as O,ig as ge,Y as nn,jt as ve,ju as yt,fw as Z,jv as sn,jh as xt,hT as Et,jf as on,as as N,bU as rn,cr as an,jw as un,jx as ln,jy as A,jz as cn,i7 as wt,jA as fn,jB as dn,e as mn,jC as hn,jD as pn,jE as gn,fi as vn,hQ as Cn,fe as Tn,hR as yn,fg as xn,cG as En,jF as wn,jG as bn,at as st,jH as Sn,jI as Mn,fx as In,jJ as An,jK as Dn,jL as ot,jM as G}from"./obfv3y06hphbdxag.js";import{C as kn,s as W,g as Ln,t as Nn,v as jn,w as Rn,x as _n,y as On}from"./ovwigcku86ragnxi.js";import{c as Pn,C as qn}from"./lmfc6edgha63avo3.js";import{C as Ce,g as Hn,S as B,f as $n,h as rt}from"./bfi2qll50pbh4h3p.js";import{m as J}from"./duhba84pe3ongyzk.js";import{D as Un}from"./gus2j5ro61xmirsv.js";import{bI as Fn,af as Bn,a2 as Vn,bK as zn,bL as Gn,az as Yn,y as Wn}from"./nakmlpxnz8km92cm.js";import{i as Jn}from"./d9jesqc65i8agh08.js";import{j as Xn,p as Qn,T as Zn,z as Kn,d as es}from"./bhohgwthir2krdjp.js";import{L as ts,g as ns,h as ss,i as os}from"./1sbljp6832i8csyf.js";import{P as rs}from"./egu4x3uf3rb117kx.js";import{q as as,r as is}from"./eq1a948h5ja80igb.js";import{u as us}from"./d5jeudtnsdovgtm7.js";var Ae=(t=>(t.Close="close",t.Loaded="loaded",t.Streaming="streaming",t.Download="download",t))(Ae||{});const ls=({isTextdocStreaming:t,isRequestActive:e,value:n,comments:s})=>{const[o,r]=T.useState(!1);return T.useEffect(()=>{t&&o&&(r(!1),Ce.reset())},[n,s]),T.useEffect(()=>{e||(r(!1),Ce.reset())},[e]),[o,r]};function cs({onClickRestore:t,onClickResetLatest:e}){const n=U();return f.jsx(J.div,{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{bounce:0,duration:.24},className:"absolute bottom-0 left-0 z-30 w-full items-center border-t border-gray-100 bg-token-main-surface-primary p-6 shadow-[0_-4px_32px_rgba(0,0,0,0.08)] @container dark:border-token-border-xlight dark:shadow-[0_-4px_32px_rgba(0,0,0,0.12)] lg:border-l",children:f.jsxs("div",{className:"mx-auto flex max-w-[48rem] flex-col flex-wrap justify-center gap-5 @2xl:flex-row @2xl:justify-between",children:[f.jsxs("div",{className:"flex flex-col px-2 text-center @2xl:text-start",children:[f.jsx("span",{className:"text-md text-wrap font-semibold",children:n.formatMessage({id:"gt23pb",defaultMessage:"You are viewing a previous version"})}),f.jsx("span",{className:"text-wrap text-sm text-token-text-secondary",children:n.formatMessage({id:"sAlUJn",defaultMessage:"Restore this version to make edits"})})]}),f.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[f.jsx(Ze,{as:"button",color:"primary",onClick:t,children:n.formatMessage({id:"+cddAb",defaultMessage:"Restore this version"})}),f.jsx(Ze,{as:"button",color:"secondary",onClick:e,children:n.formatMessage({id:"qCD3eu",defaultMessage:"Back to latest version"})})]})]})})}const fs={type:"spring",damping:35,stiffness:300},ds=({clientThreadId:t,turn:e})=>{const n=Kt(),s=en(e.messages);return f.jsxs(J.div,{className:"absolute left-0 right-0 top-0 z-10 -translate-y-full",children:[f.jsx(J.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 bg-vert-light-gradient dark:bg-vert-dark-gradient"}),f.jsx(J.div,{className:"flex items-center px-6 py-2",initial:{opacity:.75,translateX:-50,translateY:"100%"},animate:{opacity:1,translateX:0,translateY:"0"},exit:{opacity:0,translateY:20},transition:fs,children:f.jsx(kn,{clientThreadId:t,onChangeItemInView:z,onRequestCompletion:async o=>z(o),onRequestMoreCompletions:z,groupedMessagesToRender:s,allGroupedMessages:s,isEditing:!1,isUserTurn:!0,turnIndex:0,isCompletionRequestInProgress:!1,isFeedbackEnabled:!1,isFinalTurn:!1,hasActiveRequest:n,showEditButton:!1,handleEnterEdit:z,handleExitEdit:z})})]},"user-message")},ms=({clientThreadId:t})=>{const e=Xn(t),n=Qn(t,e),{lastUserTurn:s,lastAssistantTurn:o}=T.useMemo(()=>{let a=null,i=null;for(let l=n.length-1;l>0;l--){const u=n[l];if(!a&&u.role===Ke.User?a=u:!i&&u.role===Ke.Assistant&&(i=u),a&&i)break}return{lastUserTurn:a,lastAssistantTurn:i}},[n]),r=s&&!o?.messages.find(({message:a})=>a.recipient?.startsWith(tn));return f.jsx(Tt,{initial:!1,children:r&&f.jsx(ds,{turn:s,clientThreadId:t})})},hs=({isRequestActive:t=!1,clientThreadId:e,onCancel:n,onSubmit:s,onSubmitAccelerator:o,acceleratorActions:r=[]})=>{const[a,i]=T.useState(""),[l,u]=T.useState(!0),c=U(),d=()=>{s?.(a),i("")},p=g=>{const{metaKey:h,shiftKey:m,key:C}=g;C==="Enter"&&a.trim()&&!(m||h)&&(d(),g.preventDefault())};return f.jsxs("div",{className:"relative mb-3 flex max-w-2xl flex-1 justify-center",children:[f.jsx(ms,{clientThreadId:e}),f.jsx("div",{className:"flex flex-auto items-start",children:f.jsx("div",{className:he("mx-6 flex min-h-12 flex-auto items-center bg-[#f4f4f4] py-1 pl-6 pr-2 dark:bg-token-main-surface-secondary",{"rounded-full":l,"rounded-2xl":!l}),children:f.jsxs("div",{className:"relative flex flex-auto items-center self-stretch",children:[f.jsx(Jn,{placeholder:c.formatMessage({id:"zrUbTJ",defaultMessage:"Ask ChatGPT to edit"}),disabled:t,value:a,className:"w-full resize-none border-0 bg-transparent p-0 text-token-text-primary outline-0 placeholder:text-token-text-secondary focus:ring-0 focus-visible:ring-0",maxRows:4,onChange:({target:{value:g}})=>i(g),onKeyDown:p,onHeightChange:(g,{rowHeight:h})=>u(Math.floor(g/h)<=1)}),a?f.jsx(J.button,{className:he("dark h-8 w-8 rounded-full bg-token-main-surface-primary text-center dark:bg-token-main-surface-primary",{"self-end":!l}),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",duration:.1},onMouseDown:()=>d(),children:f.jsx(Fn,{className:"h-8 w-8 text-token-text-primary"})}):(r?.length??0)>0&&f.jsx(Hn,{disableHint:!0,isEmbeddedInPromptArea:!0,isRequestActive:t,actions:r,onCancel:n,onSubmit:o,right:0,bottom:4})]})})})]})};function j(){}j.prototype={diff:function(e,n){var s,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=o.callback;typeof o=="function"&&(r=o,o={});var a=this;function i(v){return v=a.postProcess(v,o),r?(setTimeout(function(){r(v)},0),!0):v}e=this.castInput(e,o),n=this.castInput(n,o),e=this.removeEmpty(this.tokenize(e,o)),n=this.removeEmpty(this.tokenize(n,o));var l=n.length,u=e.length,c=1,d=l+u;o.maxEditLength!=null&&(d=Math.min(d,o.maxEditLength));var p=(s=o.timeout)!==null&&s!==void 0?s:1/0,g=Date.now()+p,h=[{oldPos:-1,lastComponent:void 0}],m=this.extractCommon(h[0],n,e,0,o);if(h[0].oldPos+1>=u&&m+1>=l)return i(at(a,h[0].lastComponent,n,e,a.useLongestToken));var C=-1/0,x=1/0;function E(){for(var v=Math.max(C,-c);v<=Math.min(x,c);v+=2){var M=void 0,b=h[v-1],R=h[v+1];b&&(h[v-1]=void 0);var q=!1;if(R){var H=R.oldPos-v;q=R&&0<=H&&H<l}var D=b&&b.oldPos+1<u;if(!q&&!D){h[v]=void 0;continue}if(!D||q&&b.oldPos<R.oldPos?M=a.addToPath(R,!0,!1,0,o):M=a.addToPath(b,!1,!0,1,o),m=a.extractCommon(M,n,e,v,o),M.oldPos+1>=u&&m+1>=l)return i(at(a,M.lastComponent,n,e,a.useLongestToken));h[v]=M,M.oldPos+1>=u&&(x=Math.min(x,v-1)),m+1>=l&&(C=Math.max(C,v+1))}c++}if(r)(function v(){setTimeout(function(){if(c>d||Date.now()>g)return r();E()||v()},0)})();else for(;c<=d&&Date.now()<=g;){var S=E();if(S)return S}},addToPath:function(e,n,s,o,r){var a=e.lastComponent;return a&&!r.oneChangePerToken&&a.added===n&&a.removed===s?{oldPos:e.oldPos+o,lastComponent:{count:a.count+1,added:n,removed:s,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+o,lastComponent:{count:1,added:n,removed:s,previousComponent:a}}},extractCommon:function(e,n,s,o,r){for(var a=n.length,i=s.length,l=e.oldPos,u=l-o,c=0;u+1<a&&l+1<i&&this.equals(s[l+1],n[u+1],r);)u++,l++,c++,r.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return c&&!r.oneChangePerToken&&(e.lastComponent={count:c,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=l,u},equals:function(e,n,s){return s.comparator?s.comparator(e,n):e===n||s.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],s=0;s<e.length;s++)e[s]&&n.push(e[s]);return n},castInput:function(e){return e},tokenize:function(e){return Array.from(e)},join:function(e){return e.join("")},postProcess:function(e){return e}};function at(t,e,n,s,o){for(var r=[],a;e;)r.push(e),a=e.previousComponent,delete e.previousComponent,e=a;r.reverse();for(var i=0,l=r.length,u=0,c=0;i<l;i++){var d=r[i];if(d.removed)d.value=t.join(s.slice(c,c+d.count)),c+=d.count;else{if(!d.added&&o){var p=n.slice(u,u+d.count);p=p.map(function(g,h){var m=s[c+h];return m.length>g.length?m:g}),d.value=t.join(p)}else d.value=t.join(n.slice(u,u+d.count));u+=d.count,d.added||(c+=d.count)}}return r}function it(t,e){var n;for(n=0;n<t.length&&n<e.length;n++)if(t[n]!=e[n])return t.slice(0,n);return t.slice(0,n)}function ut(t,e){var n;if(!t||!e||t[t.length-1]!=e[e.length-1])return"";for(n=0;n<t.length&&n<e.length;n++)if(t[t.length-(n+1)]!=e[e.length-(n+1)])return t.slice(-n);return t.slice(-n)}function De(t,e,n){if(t.slice(0,e.length)!=e)throw Error("string ".concat(JSON.stringify(t)," doesn't start with prefix ").concat(JSON.stringify(e),"; this is a bug"));return n+t.slice(e.length)}function ke(t,e,n){if(!e)return t+n;if(t.slice(-e.length)!=e)throw Error("string ".concat(JSON.stringify(t)," doesn't end with suffix ").concat(JSON.stringify(e),"; this is a bug"));return t.slice(0,-e.length)+n}function Y(t,e){return De(t,e,"")}function fe(t,e){return ke(t,e,"")}function lt(t,e){return e.slice(0,ps(t,e))}function ps(t,e){var n=0;t.length>e.length&&(n=t.length-e.length);var s=e.length;t.length<e.length&&(s=t.length);var o=Array(s),r=0;o[0]=0;for(var a=1;a<s;a++){for(e[a]==e[r]?o[a]=o[r]:o[a]=r;r>0&&e[a]!=e[r];)r=o[r];e[a]==e[r]&&r++}r=0;for(var i=n;i<t.length;i++){for(;r>0&&t[i]!=e[r];)r=o[r];t[i]==e[r]&&r++}return r}var Te="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",gs=new RegExp("[".concat(Te,"]+|\\s+|[^").concat(Te,"]"),"ug"),ye=new j;ye.equals=function(t,e,n){return n.ignoreCase&&(t=t.toLowerCase(),e=e.toLowerCase()),t.trim()===e.trim()};ye.tokenize=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;if(e.intlSegmenter){if(e.intlSegmenter.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=Array.from(e.intlSegmenter.segment(t),function(r){return r.segment})}else n=t.match(gs)||[];var s=[],o=null;return n.forEach(function(r){/\s/.test(r)?o==null?s.push(r):s.push(s.pop()+r):/\s/.test(o)?s[s.length-1]==o?s.push(s.pop()+r):s.push(o+r):s.push(r),o=r}),s};ye.join=function(t){return t.map(function(e,n){return n==0?e:e.replace(/^\s+/,"")}).join("")};ye.postProcess=function(t,e){if(!t||e.oneChangePerToken)return t;var n=null,s=null,o=null;return t.forEach(function(r){r.added?s=r:r.removed?o=r:((s||o)&&ct(n,o,s,r),n=r,s=null,o=null)}),(s||o)&&ct(n,o,s,null),t};function ct(t,e,n,s){if(e&&n){var o=e.value.match(/^\s*/)[0],r=e.value.match(/\s*$/)[0],a=n.value.match(/^\s*/)[0],i=n.value.match(/\s*$/)[0];if(t){var l=it(o,a);t.value=ke(t.value,a,l),e.value=Y(e.value,l),n.value=Y(n.value,l)}if(s){var u=ut(r,i);s.value=De(s.value,i,u),e.value=fe(e.value,u),n.value=fe(n.value,u)}}else if(n)t&&(n.value=n.value.replace(/^\s*/,"")),s&&(s.value=s.value.replace(/^\s*/,""));else if(t&&s){var c=s.value.match(/^\s*/)[0],d=e.value.match(/^\s*/)[0],p=e.value.match(/\s*$/)[0],g=it(c,d);e.value=Y(e.value,g);var h=ut(Y(c,g),p);e.value=fe(e.value,h),s.value=De(s.value,c,h),t.value=ke(t.value,c,c.slice(0,c.length-h.length))}else if(s){var m=s.value.match(/^\s*/)[0],C=e.value.match(/\s*$/)[0],x=lt(C,m);e.value=fe(e.value,x)}else if(t){var E=t.value.match(/\s*$/)[0],S=e.value.match(/^\s*/)[0],v=lt(E,S);e.value=Y(e.value,v)}}var vs=new j;vs.tokenize=function(t){var e=new RegExp("(\\r?\\n)|[".concat(Te,"]+|[^\\S\\n\\r]+|[^").concat(Te,"]"),"ug");return t.match(e)||[]};var xe=new j;xe.tokenize=function(t,e){e.stripTrailingCr&&(t=t.replace(/\r\n/g,`
`));var n=[],s=t.split(/(\n|\r\n)/);s[s.length-1]||s.pop();for(var o=0;o<s.length;o++){var r=s[o];o%2&&!e.newlineIsToken?n[n.length-1]+=r:n.push(r)}return n};xe.equals=function(t,e,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),e.endsWith(`
`)&&(e=e.slice(0,-1))),j.prototype.equals.call(this,t,e,n)};function Cs(t,e,n){return xe.diff(t,e,n)}var Ts=new j;Ts.tokenize=function(t){return t.split(/(\S.+?[.!?])(?=\s+|$)/)};var ys=new j;ys.tokenize=function(t){return t.split(/([{}:;,]|\s+)/)};function Le(t){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Le(t)}var K=new j;K.useLongestToken=!0;K.tokenize=xe.tokenize;K.castInput=function(t,e){var n=e.undefinedReplacement,s=e.stringifyReplacer,o=s===void 0?function(r,a){return typeof a>"u"?n:a}:s;return typeof t=="string"?t:JSON.stringify(Ne(t,null,null,o),o,"  ")};K.equals=function(t,e,n){return j.prototype.equals.call(K,t.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"),n)};function Ne(t,e,n,s,o){e=e||[],n=n||[],s&&(t=s(o,t));var r;for(r=0;r<e.length;r+=1)if(e[r]===t)return n[r];var a;if(Object.prototype.toString.call(t)==="[object Array]"){for(e.push(t),a=new Array(t.length),n.push(a),r=0;r<t.length;r+=1)a[r]=Ne(t[r],e,n,s,o);return e.pop(),n.pop(),a}if(t&&t.toJSON&&(t=t.toJSON()),Le(t)==="object"&&t!==null){e.push(t),a={},n.push(a);var i=[],l;for(l in t)Object.prototype.hasOwnProperty.call(t,l)&&i.push(l);for(i.sort(),r=0;r<i.length;r+=1)l=i[r],a[l]=Ne(t[l],e,n,s,l);e.pop(),n.pop()}else a=t;return a}var je=new j;je.tokenize=function(t){return t.slice()};je.join=je.removeEmpty=function(t){return t};var me=(t=>(t.ADDED="added",t.REMOVED="removed",t.UNCHANGED="unchanged",t))(me||{});function _e(t){if(t==="")return 0;const e=t.split(`
`).length;return t.endsWith(`
`)?e-1:e}function xs(t,e){return Cs(t,e,{newlineIsToken:!0}).map(s=>({count:s.count??_e(s.value),value:s.value,type:s.added?"added":s.removed?"removed":"unchanged"}))}function Es(t){let e="";for(const{type:n,value:s}of t)(n==="added"||n==="unchanged")&&(e+=s);return e}function ws(t,e){const n=_e(e),s=Ms(t,n);return{changes:xs(s,e),numLinesDiffed:n}}function bs(t){const e=[...t],n=[],s=[];for(;e.length>0;){const o=e[e.length-1];if(o.type===me.REMOVED)e.pop(),o.type===me.REMOVED&&n.unshift(o);else if(o.type===me.ADDED)e.pop(),s.unshift(o);else break}return{prunedChanges:[...e,...s],prunedRemovedChanges:n}}function Ss(t,e){const{changes:n,numLinesDiffed:s}=ws(t,e),{prunedChanges:o,prunedRemovedChanges:r}=bs(n),a=Es(o),i=r.map(u=>u.value).join(`
`),l=bt(t,s,"start");return{content:a+i+l,numLinesDiffed:_e(a)}}function Ms(t,e){if(e<=0)return"";let n=0,s=t.length;for(let o=0;o<t.length;o++)if(t[o]===`
`&&(n++,n===e)){s=o+1;break}return t.substring(0,s)}function bt(t,e,n="start"){if(e<=0)return t;if(n==="start"){let a=0;for(let i=0;i<t.length;i++)if(t[i]===`
`&&(a++,a===e))return t.substring(i+1);return""}let s=0,o=-1;const r=t.endsWith(`
`)?e+1:e;for(let a=t.length-1;a>=0;a--)if(t[a]===`
`&&(s++,s===r)){o=a;break}return o===-1?"":t.substring(0,o+1)}function Is(t,e){const n=t?.type??de.LOADING,s=t?.content??"",o=!!t?.isPartial;if(!X(n)||e==null||!o||t?.isRewriting!==!0)return{content:s,currentlyStreamingLineIndex:null};const r=bt(s,1,"end");if(r==="")return{content:e.content,currentlyStreamingLineIndex:0};const a=Ss(e.content,r);return{content:a.content,currentlyStreamingLineIndex:a.numLinesDiffed}}function As(t,e){const n=new Set(t.map(i=>i.id)),s=new Set(e.map(i=>i.id)),o=t.filter(i=>!s.has(i.id)).map(i=>({...i,diffStatus:nt.REMOVED})),r=e.filter(i=>!n.has(i.id)).map(i=>({...i,diffStatus:nt.ADDED})),a=t.filter(i=>s.has(i.id));return o.concat(r,a)}function Ds({textdocVersion:t}){const e=U(),n=Vt(),[s,o]=T.useState(!1),r=zt(),a=T.useRef(t?.content??"");T.useEffect(()=>{a.current=t?.content??""},[t]);const i=l=>{s||(r(()=>{O.logButtonClick(ge.COPY,{contentLength:a.current.length,textdocType:t?.type}),nn(a.current,n,l)},0),o(!0),r(()=>o(!1),2e3))};return f.jsx(pe,{label:e.formatMessage(ks.copy),children:f.jsx(Q,{icon:s?Bn:Vn,onClick:i})})}const ks=Re({copy:{id:"rbIYfo",defaultMessage:"Copy"}});function Ls({textdocId:t,version:e,isHistorical:n,isShowingChanges:s,latestVersionInt:o,nextVersion:r,previousVersion:a,onHoverPrevious:i,textdocType:l}){const u=U(),c=e==null||e===1,d=e!=null&&e>1;return c&&!n?null:f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx(pe,{label:d&&u.formatMessage({id:"PoD5+8",defaultMessage:"Previous version"}),children:f.jsx(Q,{disabled:!d,icon:zn,onMouseOver:i,onClick:()=>{O.logButtonClick(ge.HISTORY_PREVIOUS,{textdocType:l}),t&&e&&d&&ve(t,{beforeVersion:e},s&&a!=null?a:void 0)}})}),f.jsx(pe,{label:n&&u.formatMessage({id:"PJ8YVJ",defaultMessage:"Next version"}),children:f.jsx(Q,{disabled:!n,icon:Gn,onClick:()=>{O.logButtonClick(ge.HISTORY_NEXT,{textdocType:l}),n&&(r?ve(t,{version:r},s?r:void 0):s&&o?yt(t,o,null):Z(t))}})})]})}function Ns({textdocId:t,history:e,version:n,isShowingChanges:s,onMouseEnter:o}){const r=U(),[a,i]=T.useState(!1),l=()=>{e?ve(t,e):Z(t)},u=(n?.versionInt??0)>1,c=()=>{n?.versionInt!=null&&yt(t,n.versionInt,e)},d=()=>{i(!0),o?.()},p=()=>{i(!1)};return f.jsx(pe,{label:u&&r.formatMessage(s?ft.hideChanges:ft.showChanges),children:f.jsx(Q,{icon:Yn,disabled:!u,onClick:s?l:c,onMouseEnter:d,onMouseLeave:p,className:he("transition-colors",{"!bg-blue-400/20 !text-blue-400 transition-colors":a&&s,"!bg-blue-400/15 !text-blue-400 transition-colors":!a&&s})})})}const ft=Re({done:{id:"0MCBfo",defaultMessage:"Done"},showChanges:{id:"3jMGNS",defaultMessage:"Show changes"},hideChanges:{id:"HWiQSk",defaultMessage:"Hide changes"}}),js=800,Rs=100,dt=100,_s=({textdocId:t,isHistoricalVersion:e,nextHistoricalTextdocVersion:n,previousHistoricalTextdocVersion:s,textdocVersion:o,readonlyReason:r,history:a,latestVersionInt:i,hasDebug:l,contentWidth:u,isEmbedded:c,isPersisting:d,isShowChangesFeatureEnabled:p,isShowingChanges:g,hideHistoryActions:h=!1,prefetchHistoricalTextdocVersion:m,restoreHistoricalTextdocVersion:C,setShowDebugView:x,onClose:E})=>{const S=sn(o?.title??""),[{width:v},M]=xt(),b=u-v-Rs-dt>0,R=Et();return f.jsxs(W.Header,{children:[f.jsxs("div",{className:"flex flex-1 items-center leading-[0]",children:[f.jsx(W.CloseButton,{onClick:E}),b&&f.jsx("div",{className:"flex flex-row items-center gap-2.5",children:f.jsx(W.Title,{style:{maxWidth:u-v-dt},children:S||f.jsx("div",{className:"w-52",children:f.jsx(rs,{lines:1,size:"base",width:100,widthVariance:0})})})}),d&&f.jsx(on,{size:12,className:"pl-2 text-token-text-secondary"})]}),f.jsxs("div",{className:"flex select-none items-center gap-2 leading-[0]",ref:M,children:[f.jsxs("div",{className:he("flex items-center gap-2 transition-opacity duration-500",r===N.Streaming&&"pointer-events-none opacity-0"),children:[l&&u>js&&f.jsx(Q,{icon:Wn,onClick:()=>x(q=>!q)}),!h&&f.jsx(Ls,{textdocId:t,isHistorical:e,isShowingChanges:g,version:o?.versionInt,previousVersion:s?.versionInt,nextVersion:n?.versionInt,readonlyReason:r,onHoverPrevious:m,onClickRestore:C,textdocType:o?.type,latestVersionInt:i}),!h&&p&&f.jsx(Ns,{textdocId:t,history:a,version:o,isShowingChanges:g,onMouseEnter:()=>{o?.versionInt&&R(t,o.versionInt),m()}}),f.jsx(Ds,{textdocVersion:o})]}),!c&&f.jsx(ts,{})]})]})},Os=/\s/,Ps=30;function mt(t,e){const n=t.indexOf(e);return n===-1?!1:t.indexOf(e,n+e.length)===-1}function P(t,e){return Os.test(t[e])}function ht(t,e,n=!1){if(e===0||n&&P(t,e-1))return e;for(;e>0&&P(t,e-1);)e--;for(;e>0&&!P(t,e-1);)e--;return P(t,e)&&e++,e}function pt(t,e,n=!1){if(e===t.length||n&&P(t,e))return e;for(;e<t.length&&P(t,e);)e++;for(;e<t.length&&!P(t,e);)e++;return P(t,e-1)&&e--,e}function qs(t,e,n=!0,s=Ps){if(t.start<0||t.end>e.length||t.start>t.end)throw new Error("Invalid commentSourceRange provided.");const o=e.substring(t.start,t.end);let r=t.start,a=t.end;n&&(r=ht(e,r,!0),a=pt(e,a,!0));let i=e.substring(r,t.start),l=e.substring(t.end,a),u=`${i}${o}${l}`;if(mt(e,u)&&(s==null||u.length>=s))return{before:i,after:l,allSurrounding:u};let c=r,d=a,p=!0;for(;p&&(s==null||u.length<s);){let g=!1;const h=c>0?ht(e,c):c;h<c&&(c=h,g=!0);const m=d<e.length?pt(e,d):d;if(m>d&&(d=m,g=!0),g){const C=e.substring(c,t.start),x=e.substring(t.end,d),E=`${C}${o}${x}`;if(mt(e,E)&&(s==null||E.length>=s))return{before:C,after:x,allSurrounding:E};i=C,l=x,u=E}else p=!1}return{before:i,after:l,allSurrounding:u}}const ee="# Context",te="# Instructions";function ne(t,e,n){if(e==null||n==null)return`The user is referring to the entire text of "${t}".`;const s=`
## Selected Text
The user has selected this text in "${t}" in particular:
${e}
`.trim();return n.allSurrounding===e?s:`
${s}

## Surrounding Context
Here is the surrounding context:
${n.allSurrounding}
`.trim()}function St(t,e){return t==null||e==null?"entire document":t===e.allSurrounding?"selected text":"surrounding context"}function Mt(t){return`For the update pattern, create a regex which exactly matches the ${t}. Edit just this string in order to fullfill the user's request. NEVER rewrite the entire document. Instead, ALWAYS edit ONLY the ${t}. The only exception to this rule is if the ${t} includes markdown lists or tables. In that case, fully rewrite the document using ".*" as the regex update pattern.`.trim()}function Hs(t,e,n,s){if(!X(e)&&n&&s){const o=St(n,s);return`
${ee}
The user requests that you directly edit the document.

${ne(t,n,s)}

${te}
Use the update_textdoc tool to make this edit. ${Mt(o)}`.trim()}return`
${ee}
The user requests that you directly edit the document.

${ne(t,n,s)}

${te}
Use the update_textdoc tool to make this edit. You MUST fully rewrite the entire document by using ".*" as the update regex pattern.`.trim()}function $s(t,e,n){return`
${ee}
The user requests that you add comments about some text.

${ne(t,e,n)}

${te}
Do not respond to the user's question directly, just leave comments.`.trim()}function Us(t,e){return X(t)?e==="entire document"?` If you choose to update the ${e}, you MUST fully rewrite the ${e} by using ".*" as the update regex pattern.`:` If you choose to update the ${e}, you MUST fully rewrite the entire document by using ".*" as the update regex pattern. When you do so, ONLY modify the ${e} and rewrite other sections exactly as is, except for parts that must change based on this update`:e==="entire document"?"":` If you choose to update the ${e}, follow these instructions: ${Mt(e)}`}function Fs(t,e,n,s){const o=St(n,s),r=Us(e,o);return`
${ee}
${ne(t,n,s)}

${te}
The user would like you perform one of the following actions:
- Update the ${o} via the \`update_textdoc\` tool.${r}
- Explain the selected text via chat, or answer a general question about the selected text (no tool call required).
- Comment on the ${o} with feedback via the \`comment_textdoc\` tool. This should only be used if the user very explicitly asks for feedback, critique, or comments.

Based on the user's request, choose the appropriate action.
`.trim()}function Bs(t,e,n){return`
${ee}
${ne(t,e,n)}

${te}
The user would like you to create a new textdoc.
`.trim()}function Vs(t,e,n,s=null,o=null){switch(n){case B.ASK:return Fs(t,e,s,o);case B.CREATE_TEXTDOC:return Bs(t,s,o);case B.EDIT:return Hs(t,e,s,o);case B.COMMENT:return $s(t,s,o)}}function zs(t){const e=as(),n=Ln(t),s=is(t)??e.id,o=Nn({clientThreadId:t});return async function(r){const a=new rn,i=Zn.getThreadCurrentLeafId(t),l=performance.now(),u=await Gt(),[c,d,p]=await Promise.all([Yt.getEnforcementToken(u),an.getEnforcementToken(u),Wt.getEnforcementToken(u)]);o({model:s,completionType:Jt.Next,parentNodeId:i,metadata:{eventSource:"mouse"},completionMetadata:{conversationMode:n},chatReq:u,arkoseToken:c??null,turnstileToken:d??null,proofToken:p??null,preflightTime:performance.now()-l,appendMessages:r,turnTracker:a})}}function Gs(t){switch(t){case A.ACCELERATOR:case A.ACCEPT_COMMENT:return!0;case A.ASK_CHATGPT:case A.FULL_SCREEN_SUBMIT:return!1}}function Ys(t,e){switch(e){case A.ASK_CHATGPT:case A.ACCEPT_COMMENT:case A.FULL_SCREEN_SUBMIT:return t.formatMessage(Js.askChatGPT);case A.ACCELERATOR:return}}const Ws=(t,e)=>{const n=zs(t),s=U();return T.useCallback(({content:o,sourceRange:r,action:a,userMessageType:i,acceleratorMetadata:l,selectionMetadata:u})=>{if(e?.versionInt==null)return;const{textdocId:c,type:d,versionInt:p,content:g}=e;let h,m=null;r&&(h=g.slice(r.start,r.end),m=qs(r,g)),n([un([o],{canvas:{textdoc_id:c,textdoc_type:d,version:p,textdoc_content_length:g.length,user_message_type:i,accelerator_metadata:l,selection_metadata:u},is_visually_hidden_from_conversation:Gs(i),targeted_reply:h,targeted_reply_label:Ys(s,i),open_in_canvas_view:{type:"canvas_textdoc",id:c}}),ln([Vs(c,d,a,h,m)],{exclude_after_next_user_message:!0})])},[n,s,e])},Js=Re({askChatGPT:{id:"h5ANdM",defaultMessage:"Asked ChatGPT"}});function Xs(t){const e=/\[([^\]]+)\]\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)/gi,n=new Set,s=t.matchAll(e);for(const o of s){const r=o[2];try{let a=r;a.startsWith("www.")&&(a="http://"+r),new URL(a),n.add(r)}catch{}}return n}const Qs=async({lastVersion:t,textdocId:e,content:n,comments:s})=>{const o=cn(s,n);return(await vt.safePost("/textdoc/{textdoc_id}",{parameters:{path:{textdoc_id:e}},requestBody:{version:t,content:n,comments:o}})).version},Zs=()=>{const t=T.useRef([]),e=T.useRef(null),{mutateAsync:n,isPending:s}=Xt({mutationKey:["canvas","textdoc","persist"],mutationFn:Qs});return[T.useCallback(async(r,a,i)=>{const l=new AbortController,c=(async()=>{const[h]=t.current;try{await h?.promise}catch(m){O.logError("Saving document",m)}if(!l.signal.aborted)try{const m=Math.max(e.current??0,r.versionInt??wt);let C="";try{et(a)?C=a():C=a}catch(v){O.logError("Serializing document",v)}let x=[];try{et(i)?x=i():x=i}catch(v){O.logError("Adjusting comments",v)}const{textdocId:E}=r;fn({textdocId:E,basedOnVersionInt:m,content:C,comments:x});const S=await n({textdocId:E,lastVersion:m,content:C,comments:x});dn({textdocId:E,basedOnVersionInt:m,newVersion:S}),e.current=S}catch(m){O.logError("Error saving document",m)}finally{t.current.shift()}})(),d={abort:()=>l.abort(),promise:c},[p,g]=t.current;return g&&(g.abort(),t.current=p?[p]:[]),t.current=p?[p,d]:[d],c},[n]),t,s]},Ks=3e3,eo=t=>{const[e,n,s]=Zs(),o=U(),r=T.useRef(null),a=T.useCallback(mn(e,Ks,{leading:!1}),[e]),i=hn(t);return T.useEffect(()=>{if(!i)return;const u=tt(window,{pagehide:()=>a.flush(),beforeunload:d=>{a.flush(),d.returnValue=o.formatMessage({id:"QZrKwi",defaultMessage:"You have a canvas save in progress."})}}),c=tt(document,{visibilitychange:()=>a.flush(),keydown:()=>{r.current="keyboard"},mousemove:()=>{r.current!=="mouse"&&a.flush(),r.current="mouse"}});return()=>{r.current=null,c(),u()}},[o,i,a]),T.useEffect(()=>()=>{a.flush()},[t,a]),pn(async()=>{await a.flush(),await Promise.allSettled(n.current?.map(({promise:u})=>u)??[])}),[T.useCallback((u,c,d)=>{const{textdocId:p}=u;return gn(p),a(u,c,d)},[a]),a.flush,s||i]};function to(t,e,n){const s=Ct(),o=n!=null&&e!=null,{data:r,error:a,fetchNextPage:i,hasNextPage:l,isFetching:u}=Qt(gt(t,e,o)),c=T.useCallback(async()=>{const m=e!=null;await s.prefetchInfiniteQuery(gt(t,e,m))},[s,t,e]);T.useEffect(()=>{const m=e;return()=>{s.removeQueries({queryKey:It(t,m),exact:!0})}},[s,t,e]);const[d,p,g,h]=T.useMemo(()=>{if(r&&n){const C=r.pages.flatMap(E=>E),x=C.findIndex(E=>"beforeVersion"in n?(E.versionInt??wt)<n.beforeVersion:E.versionInt===n.version);if(x!==-1)return[x===C.length-1,C[x],x>0?C[x-1]:null,x<C.length-1?C[x+1]:null]}const m=r?.pages.flatMap(C=>C)??[];return[!0,null,null,m.length===0?null:m[0]]},[r,n]);return T.useEffect(()=>{!u&&o&&l&&d&&i()},[u,o,l,d,i]),T.useEffect(()=>{!p&&a&&Z(t)},[p,a,t]),{historicalTextdocVersion:p,nextHistoricalTextdocVersion:g,prefetchHistoricalTextdocVersion:c,previousHistoricalTextdocVersion:h}}function It(t,e=null){return["textdocHistory",t,e]}function gt(t,e,n=!0){return{queryKey:It(t,e),queryFn:({pageParam:s})=>no(t,s),initialPageParam:e??void 0,getNextPageParam:s=>{const o=vn(s)?.versionInt;if(o&&o>1)return o},enabled:n,staleTime:1/0,retry:2}}async function no(t,e){return e===void 0?[]:(await vt.safeGet("/textdoc/{textdoc_id}/history",{parameters:{path:{textdoc_id:t},query:{before_version:e}}})).previous_doc_states.map(({id:s,version:o,textdoc_type:r,title:a,content:i,updated_at:l,comments:u})=>({textdocId:s,versionInt:o,messageId:null,title:a,type:Cn(r),content:i,createdAt:Tn(l),comments:yn(u,i)}))}const yo=({isFullScreen:t=!1,isEmbedded:e=!1,hideHeader:n=!1,readonlyReason:s,clientThreadId:o,focusedTextdoc:r,onClose:a,isAnimating:i=!1,width:l})=>{const{textdocId:u,history:c,showChangesAtVersion:d=null}=r,[p,g,h]=eo(u),{targetedContent:m}=xn(),C=ns(),[x,E]=T.useState(!1),S=ss(u),v=os(),M=Kn(o),b=En(M),[R,q]=xt(),H=wn(),{data:D,isLoading:At}=bn(u,H?d:null),_=S?.versions??[],Oe=_[0]?.versionInt,{historicalTextdocVersion:se,nextHistoricalTextdocVersion:Dt,previousHistoricalTextdocVersion:Pe,prefetchHistoricalTextdocVersion:kt}=to(u,Oe,c),Lt=Et();T.useEffect(()=>{Ce.reset()},[u]),T.useEffect(()=>{S?.metadata?.textdocId&&st().sendMessage({type:Ae.Loaded})},[S?.metadata?.textdocId]);const qe=_.length>0?_[_.length-1]:null,Ee=_.length>1?_[_.length-2]:null,He=es(o),{restoreHistoricalTextdocVersion:$e,optimisticRestoredTextdocVersion:Nt}=Sn(He,qe,se),V=c!=null,w=V?se:qe,oe=H&&d!=null,re=Ws(o,w),Ue=i||!H?null:D,ae=(()=>{if(i)return[];const y=w?.comments.filter(L=>L.status!==Dn.DISMISSED)??[];return w==null?y:!oe&&se!=null?se.comments:!oe||D==null?y:D.contentBefore!==D.contentAfter?[]:As(D.commentsBefore,D.commentsAfter)})(),ie=w?.type??de.LOADING,$=!!w?.isPartial,jt=$n(v);T.useEffect(()=>{_.length===0&&!v&&jt&&a?.()},[_.length,v]);const Rt=!!s&&s!==N.OldVersion,we=$&&!!w?.isRewriting,_t=$&&!!w?.isCreation,{content:ue,currentlyStreamingLineIndex:Fe}=D?.contentBefore!=null&&!X(ie)?{content:D.contentBefore,currentlyStreamingLineIndex:null}:Is(w,Ee),Ot=us(He,Array.from(Xs(ue))),[le,be]=ls({value:ue,isRequestActive:b,isTextdocStreaming:$,comments:ae}),Be=Mn(w),Ve=$||b||le||h;T.useEffect(()=>{st().sendMessage({type:Ae.Streaming,streaming:Ve})},[Ve]);const Pt=({getSerializedDocument:y,getAdjustedComments:k})=>{w&&p(w,y,k)},qt=y=>{if(!w)return;const k=y.doc.toString();p(w,k,y.field(Pn,!1)??[])},ze=(y,k,L,F)=>{be(!0),re({action:k,content:y,userMessageType:A.ASK_CHATGPT,sourceRange:L,selectionMetadata:{selection_type:F,selection_position_range:L}})},Ge=({id:y})=>{Be(y,ot.DISMISS),Ce.reset()},Ye=async y=>{be(!0);const{id:k,at:L,content:F}=y;if(await Be(k,ot.ACCEPT)===!1)return be(!1);re({content:F,userMessageType:A.ACCEPT_COMMENT,sourceRange:L,action:B.EDIT,selectionMetadata:{selection_type:rt.SELECTION,selection_position_range:L}})},Se=(y,k,L)=>{const{action:F}=L;re({action:F,content:k,sourceRange:y,userMessageType:A.ACCELERATOR,acceleratorMetadata:{action:F,id:L.id,prompt:k},selectionMetadata:y!=null?{selection_type:rt.SELECTION,selection_position_range:y}:void 0})},Ht=y=>{re({action:B.EDIT,content:y,userMessageType:A.FULL_SCREEN_SUBMIT})},$t=Zt(),Ut=Ct(),Ft=In(({resolveTempCommentId:y})=>y),We=y=>Ft[y]||y,Me=()=>_n({clientThreadId:o,currentRequestId:M,queryClient:Ut,isHistoryAndTrainingDisabled:$t}),Bt=()=>{c?ve(u,c):Z(u)};let I=s;V?I=N.OldVersion:oe?I=N.ShowingChanges:Nt!=null?I=N.Restoring:($||b)&&(I=N.Streaming);let ce=null;const Je=i||I!=null||le,Xe=()=>{if(i&&ae.length>0)return G.ALL_HIDDEN;if(I==null)return G.ENABLED;switch(I){case N.Streaming:return G.ENABLED;case N.ShowingChanges:case N.OldVersion:return G.COMMENTS_READONLY;default:return G.ALL_HIDDEN}},Qe=t||i;let Ie=[];switch(ie){case de.LOADING:ce=f.jsx(On,{});break;case de.DOCUMENT:ce=f.jsx(Rn,{value:ue,comments:ae,previousValue:Ee?.content,previousComments:Ee?.comments,isRewriting:we,isAnimatingFromPreview:i,getStableCommentId:We,diff:Ue,isRequestActive:b,isDisabled:I!=null||v,isWaitingForCommentResponse:le,hideAccelerators:Qe,hideToolbar:Je,hideEditOverlay:i,commentsMode:Xe(),readonlyReason:I,onBlur:g,onSave:g,onChange:Pt,onCancelRequest:Me,targetedContent:m,onAddComment:ze,onAcceptComment:Ye,onDismissComment:Ge,onSubmitAccelerator:Se,onExitShowChanges:Bt,safeUrls:Ot,width:l,modelCursor:$&&!we?w?.modelCursor:void 0,shouldResetSelection:w?.versionInt===1}),Ie=Un;break;default:X(ie)&&(ce=f.jsx(jn,{id:"codemirror",getStableCommentId:We,language:An(ie),value:ue,comments:ae,hideAccelerators:Qe,commentsMode:Xe(),hideToolbar:Je,onSubmitAccelerator:Se,currentlyStreamingLineIndex:Fe??null,readonlyReason:I,isRequestActive:b,isWaitingForCommentResponse:le,onChange:qt,onCancelRequest:Me,onAddComment:ze,onDismissComment:Ge,onAcceptComment:Ye,textdocDiff:Ue??void 0,modelCursor:$&&Fe==null?w?.modelCursor:void 0}),Ie=qn)}return f.jsxs(W,{children:[!n&&f.jsx(_s,{textdocId:u,isHistoricalVersion:V,nextHistoricalTextdocVersion:Dt,previousHistoricalTextdocVersion:Pe,textdocVersion:w,readonlyReason:I,history:c,hasDebug:C,contentWidth:R.width,isEmbedded:e,isPersisting:h,isShowChangesFeatureEnabled:H,isShowingChanges:oe,latestVersionInt:Oe,hideHistoryActions:I===N.QueryParam,prefetchHistoricalTextdocVersion:()=>{kt();const y=Pe?.versionInt;y!=null&&Lt(u,y)},restoreHistoricalTextdocVersion:$e,setShowDebugView:E,onClose:()=>{O.logButtonClick(ge.CLOSE_TEXTDOC,{textdocType:w?.type}),a?.()}}),f.jsxs(W.Content,{ref:q,scrollToBottomMode:_t?"bottom":"top",shouldScrollToTop:we,isLoading:At,children:[!1,ce]}),f.jsx(Tt,{children:V&&!Rt&&f.jsx(cs,{onClickRestore:$e,onClickResetLatest:()=>Z(u)})}),t&&!V&&f.jsx("div",{className:"relative flex items-center justify-center pb-3",children:f.jsx(hs,{isRequestActive:b,clientThreadId:o,onSubmitAccelerator:Se,onSubmit:Ht,onCancel:Me,acceleratorActions:Ie})})]})};export{Ae as C,yo as T};
//# sourceMappingURL=jyeov9j6lj5zpvy7.js.map
