const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/fcdrks0ouvw9u57v.js","assets/lklglvrzltpv3f05.js","assets/fd2dbp4703zscgzb.js","assets/mc2tj3xhtcshtn61.js","assets/i7de8yvdg4jlu6h0.js","assets/root-f8d4ml68.css","assets/conversation-small-bez2bigx.css","assets/cyqh5pewhk34cwzb.js","assets/ijwsqx5b9y4rlvqu.js","assets/d197qvlrpr6mqktk.js","assets/0zwkq4p4h5hlkinb.js","assets/jc4qhfyefqno02a7.js","assets/fzrn137102spawew.js","assets/j9pn3dpqp3dnyeg5.js","assets/jwqmomqwr7i8vy2f.js","assets/edmhw3acfg18izr2.js","assets/lr2wtvbk3k0uolp8.js","assets/her703xpukd09f8l.js","assets/m6qfyo1shxzv2awp.js","assets/k3hicc8rbwef28my.js","assets/0670zcpdwddatbsz.js","assets/iyucb65m5mf5t47b.js","assets/ewvr8phh35r8k6q6.js","assets/is-scrollable-element-i34sjb0l.css","assets/cvnnwrmw3zqz8rlo.js","assets/dk013urovhoijlg9.js","assets/code-composer-idex3gld.css","assets/jjkb4o5j6wkqkrjx.js","assets/o19d65cmx6gz28gg.js","assets/gnczzx7ny1m7kx41.js","assets/iyxdgxkbt16roiwe.js","assets/abozueg8vww9ac5s.js","assets/c2l8elqoquxr1hzw.js","assets/document-composer-ofhzvcxp.css"])))=>i.map(i=>d[i]);
import{j as a,ac as S,r as $,ad as ue,c as ce,g as fe}from"./lklglvrzltpv3f05.js";import{aw as C,az as me,dW as K,bg as ve,f as he,gF as pe,bi as de,aV as ee,aW as ne,i as ye,gI as ge}from"./i7de8yvdg4jlu6h0.js";import{jS as Ee,jT as Ce,bF as De,jU as xe,ht as Oe,aM as we,cM as te,N as Ie,cu as re,jV as Ne,cv as se,j4 as _e,jW as Te,cs as Ae,ct as je}from"./mc2tj3xhtcshtn61.js";import{B as be}from"./dk013urovhoijlg9.js";import{P as oe}from"./her703xpukd09f8l.js";const Re="py-[0.108em]",Me="selection-highlight",kn={code:`${Re} bg-[Highlight]`,document:`${Me} bg-[Highlight]`},ie={code:"flex justify-start pt-2 h-full",document:"flex h-full justify-center"},zn="shadow-xl",ke={blockCommentHover:"z-[-1]",collapsedComment:"z-0",composer:"z-10",expandedComment:"z-10",chatOverlay:"z-20",commentGutter:"z-20",expandedCommentHovered:"z-30",expandedCommentFocused:"z-40",toolbar:"z-50",commentComposer:"z-50",textdocDiffLoadingOverlay:"z-[60]",acceleratorsOverlay:"z-[60]",accelerators:"z-[70]"},Ln="text-blue-400 disabled:text-blue-400 bg-blue-400/15 focus-visible:bg-blue-400/15 enabled:hover:bg-blue-400/20 disabled:opacity-40";function ze({className:e,zIndexKey:n,onClick:t}){return a.jsx(S.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:C("absolute inset-0",e,ke[n]),onClick:t})}function Le({zIndexKey:e,onClick:n}){return a.jsx(ze,{zIndexKey:e,onClick:n,className:"bg-gray-50/50 dark:bg-black/50"})}const Se=({onScroll:e})=>(Ee(({scrollTop:n})=>{e?.(n)}),null),He=({shouldScrollToTop:e})=>{const n=Ce();return $.useEffect(()=>{e===!0&&n({behavior:"smooth"})},[e,n]),null},Pe=()=>{const e=De();$.useEffect(()=>{e({behavior:"smooth"})},[e]);const[n]=xe();return n?null:a.jsx("button",{onClick:()=>e({behavior:"smooth"}),className:"absolute bottom-5 right-1/2 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary bg-clip-padding text-token-text-secondary",children:a.jsx(Oe,{className:"icon-md text-token-text-primary"})})},Be=me.section`w-full h-full flex flex-col popover bg-token-main-surface-primary`,Fe=({children:e,onScroll:n,shouldScrollToTop:t,scrollToBottomMode:r="top",isLoading:o=!1,disableScroll:s=!1},i)=>a.jsxs("main",{className:"relative flex min-h-0 flex-auto flex-grow flex-col",ref:i,children:[a.jsx(ue,{children:o&&a.jsx(Le,{zIndexKey:"textdocDiffLoadingOverlay"})}),!s&&a.jsxs(be,{followButtonClassName:"hidden",initialScrollBehavior:"auto",className:"h-full",mode:r,children:[e,r==="bottom"&&a.jsx(Pe,{}),a.jsx(Se,{onScroll:n}),a.jsx(He,{shouldScrollToTop:t})]}),s&&a.jsx("div",{children:e})]}),Ge=$.forwardRef(Fe);function $e({className:e,children:n}){return K()?a.jsx(we,{leading:!0,type:"primary",name:"canvas-header",className:C(e,"sticky top-0 z-[1] h-[var(--screen-thread-header-min-height,60px)] flex-none px-3.5"),children:a.jsx("div",{className:"flex items-center justify-between gap-4",children:n})}):a.jsx("header",{className:C(e,"flex h-14 flex-none items-center justify-between gap-4 px-3"),children:n})}function qe({className:e,children:n}){const t=K();return a.jsx("h2",{className:C(e,"ml-2.5 truncate",t?"text-[17px] font-medium leading-[30px] text-token-text-secondary":"text-lg text-gray-700 dark:text-token-text-secondary"),children:n})}const Ve=({onClick:e})=>{const n=ce(),r=te()?pe:de;return a.jsx(ve,{label:n.formatMessage(Xe.close),children:a.jsx(Ie,{icon:r,onClick:e})})},R=({children:e})=>a.jsx(Be,{children:e});R.Title=qe;R.CloseButton=Ve;R.Header=$e;R.Content=Ge;const Xe=he({close:{id:"Bix/Kd",defaultMessage:"Close"}}),Ue=ee(()=>ne(()=>import("./fcdrks0ouvw9u57v.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then(e=>e.CodeComposer),{loading:()=>a.jsx("div",{className:ie.code,children:a.jsx("div",{className:"h-full w-full px-4",children:a.jsx(oe,{lines:20})})})}),Sn=e=>a.jsx(Ue,{...e});var ae=(e=>(e.javascript="javascript",e.typescript="typescript",e.bash="bash",e.zsh="zsh",e.html="html",e.css="css",e.python="python",e.json="json",e.sql="sql",e.go="go",e.yaml="yaml",e.java="java",e.rust="rust",e.cpp="cpp",e.swift="swift",e.php="php",e.xml="xml",e.ruby="ruby",e.haskell="haskell",e.kotlin="kotlin",e.csharp="csharp",e.c="c",e.objectivec="objectivec",e.r="r",e.lua="lua",e.dart="dart",e.scala="scala",e.perl="perl",e.commonlisp="commonlisp",e.clojure="clojure",e.ocaml="ocaml",e.powershell="powershell",e.verilog="verilog",e.dockerfile="dockerfile",e.vue="vue",e.other="other",e))(ae||{});function Hn(e){if(re(e))switch(e){case se.CODE_REACT:return"typescript";default:return Ne(e.replace(/^code\//,""),Object.values(ae),"other")}}var Je=(e=>(e.ALL_HIDDEN="all_hidden",e.COMMENTS_READONLY="comments_readonly",e.ENABLED="enabled",e))(Je||{}),We=ye;function Ye(e){return typeof e=="function"?e:We}var Ze=Ye,Qe=ge,Ke=Ze,en=_e,nn=9007199254740991,L=4294967295,tn=Math.min;function rn(e,n){if(e=en(e),e<1||e>nn)return[];var t=L,r=tn(e,L);n=Ke(n),e-=L;for(var o=Qe(r,n);++t<e;)n(t);return o}var sn=rn;const on=fe(sn),Pn=({gap:e,padding:n=4,size:t=3})=>a.jsx(S.div,{className:C("grid h-full max-w-full flex-1 grid-cols-3 items-center"),style:{gap:e,padding:n},children:on(3,r=>a.jsx(S.div,{className:"dark:bg-white-400 aspect-square rounded-full bg-gray-400",animate:{translateY:["0%","-50%","0%","0%","0%"]},style:{translateX:.5,width:t,height:t},transition:{repeat:1/0,type:"keyframes",delay:r/10,duration:.7}},r))}),an=36,Bn=-24,ln=280,un=ln+an,Fn=40;var cn=(e=>(e.COLLAPSED="collapsed",e.EXPANDED="expanded",e))(cn||{});const U=775,fn=580,mn=36,vn=18,hn=()=>{const[{width:e},n]=Te(),t=te(),r=e>=U+un?U:fn,o=t?vn:mn;return a.jsx("div",{className:C(ie.document,"mt-4"),ref:n,style:{margin:`0 ${o}px`},children:a.jsx("div",{style:{width:r},children:a.jsx(oe,{lines:20})})})},pn=ee(()=>ne(()=>import("./jjkb4o5j6wkqkrjx.js"),__vite__mapDeps([27,1,21,4,5,20,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22,23,28,29,30,31,32,25,33])).then(e=>e.DocumentComposer),{loading:hn}),Gn=e=>a.jsx(pn,{...e});function p(){}p.prototype={diff:function(n,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=o.callback;typeof o=="function"&&(s=o,o={});var i=this;function l(m){return m=i.postProcess(m,o),s?(setTimeout(function(){s(m)},0),!0):m}n=this.castInput(n,o),t=this.castInput(t,o),n=this.removeEmpty(this.tokenize(n,o)),t=this.removeEmpty(this.tokenize(t,o));var u=t.length,c=n.length,f=1,v=u+c;o.maxEditLength!=null&&(v=Math.min(v,o.maxEditLength));var g=(r=o.timeout)!==null&&r!==void 0?r:1/0,y=Date.now()+g,h=[{oldPos:-1,lastComponent:void 0}],d=this.extractCommon(h[0],t,n,0,o);if(h[0].oldPos+1>=c&&d+1>=u)return l(J(i,h[0].lastComponent,t,n,i.useLongestToken));var D=-1/0,x=1/0;function _(){for(var m=Math.max(D,-f);m<=Math.min(x,f);m+=2){var E=void 0,O=h[m-1],w=h[m+1];O&&(h[m-1]=void 0);var z=!1;if(w){var V=w.oldPos-m;z=w&&0<=V&&V<u}var X=O&&O.oldPos+1<c;if(!z&&!X){h[m]=void 0;continue}if(!X||z&&O.oldPos<w.oldPos?E=i.addToPath(w,!0,!1,0,o):E=i.addToPath(O,!1,!0,1,o),d=i.extractCommon(E,t,n,m,o),E.oldPos+1>=c&&d+1>=u)return l(J(i,E.lastComponent,t,n,i.useLongestToken));h[m]=E,E.oldPos+1>=c&&(x=Math.min(x,m-1)),d+1>=u&&(D=Math.max(D,m+1))}f++}if(s)(function m(){setTimeout(function(){if(f>v||Date.now()>y)return s();_()||m()},0)})();else for(;f<=v&&Date.now()<=y;){var T=_();if(T)return T}},addToPath:function(n,t,r,o,s){var i=n.lastComponent;return i&&!s.oneChangePerToken&&i.added===t&&i.removed===r?{oldPos:n.oldPos+o,lastComponent:{count:i.count+1,added:t,removed:r,previousComponent:i.previousComponent}}:{oldPos:n.oldPos+o,lastComponent:{count:1,added:t,removed:r,previousComponent:i}}},extractCommon:function(n,t,r,o,s){for(var i=t.length,l=r.length,u=n.oldPos,c=u-o,f=0;c+1<i&&u+1<l&&this.equals(r[u+1],t[c+1],s);)c++,u++,f++,s.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return f&&!s.oneChangePerToken&&(n.lastComponent={count:f,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=u,c},equals:function(n,t,r){return r.comparator?r.comparator(n,t):n===t||r.ignoreCase&&n.toLowerCase()===t.toLowerCase()},removeEmpty:function(n){for(var t=[],r=0;r<n.length;r++)n[r]&&t.push(n[r]);return t},castInput:function(n){return n},tokenize:function(n){return Array.from(n)},join:function(n){return n.join("")},postProcess:function(n){return n}};function J(e,n,t,r,o){for(var s=[],i;n;)s.push(n),i=n.previousComponent,delete n.previousComponent,n=i;s.reverse();for(var l=0,u=s.length,c=0,f=0;l<u;l++){var v=s[l];if(v.removed)v.value=e.join(r.slice(f,f+v.count)),f+=v.count;else{if(!v.added&&o){var g=t.slice(c,c+v.count);g=g.map(function(y,h){var d=r[f+h];return d.length>y.length?d:y}),v.value=e.join(g)}else v.value=e.join(t.slice(c,c+v.count));c+=v.count,v.added||(f+=v.count)}}return s}function W(e,n){var t;for(t=0;t<e.length&&t<n.length;t++)if(e[t]!=n[t])return e.slice(0,t);return e.slice(0,t)}function Y(e,n){var t;if(!e||!n||e[e.length-1]!=n[n.length-1])return"";for(t=0;t<e.length&&t<n.length;t++)if(e[e.length-(t+1)]!=n[n.length-(t+1)])return e.slice(-t);return e.slice(-t)}function H(e,n,t){if(e.slice(0,n.length)!=n)throw Error("string ".concat(JSON.stringify(e)," doesn't start with prefix ").concat(JSON.stringify(n),"; this is a bug"));return t+e.slice(n.length)}function P(e,n,t){if(!n)return e+t;if(e.slice(-n.length)!=n)throw Error("string ".concat(JSON.stringify(e)," doesn't end with suffix ").concat(JSON.stringify(n),"; this is a bug"));return e.slice(0,-n.length)+t}function I(e,n){return H(e,n,"")}function A(e,n){return P(e,n,"")}function Z(e,n){return n.slice(0,dn(e,n))}function dn(e,n){var t=0;e.length>n.length&&(t=e.length-n.length);var r=n.length;e.length<n.length&&(r=e.length);var o=Array(r),s=0;o[0]=0;for(var i=1;i<r;i++){for(n[i]==n[s]?o[i]=o[s]:o[i]=s;s>0&&n[i]!=n[s];)s=o[s];n[i]==n[s]&&s++}s=0;for(var l=t;l<e.length;l++){for(;s>0&&e[l]!=n[s];)s=o[s];e[l]==n[s]&&s++}return s}var b="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",yn=new RegExp("[".concat(b,"]+|\\s+|[^").concat(b,"]"),"ug"),M=new p;M.equals=function(e,n,t){return t.ignoreCase&&(e=e.toLowerCase(),n=n.toLowerCase()),e.trim()===n.trim()};M.tokenize=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t;if(n.intlSegmenter){if(n.intlSegmenter.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');t=Array.from(n.intlSegmenter.segment(e),function(s){return s.segment})}else t=e.match(yn)||[];var r=[],o=null;return t.forEach(function(s){/\s/.test(s)?o==null?r.push(s):r.push(r.pop()+s):/\s/.test(o)?r[r.length-1]==o?r.push(r.pop()+s):r.push(o+s):r.push(s),o=s}),r};M.join=function(e){return e.map(function(n,t){return t==0?n:n.replace(/^\s+/,"")}).join("")};M.postProcess=function(e,n){if(!e||n.oneChangePerToken)return e;var t=null,r=null,o=null;return e.forEach(function(s){s.added?r=s:s.removed?o=s:((r||o)&&Q(t,o,r,s),t=s,r=null,o=null)}),(r||o)&&Q(t,o,r,null),e};function Q(e,n,t,r){if(n&&t){var o=n.value.match(/^\s*/)[0],s=n.value.match(/\s*$/)[0],i=t.value.match(/^\s*/)[0],l=t.value.match(/\s*$/)[0];if(e){var u=W(o,i);e.value=P(e.value,i,u),n.value=I(n.value,u),t.value=I(t.value,u)}if(r){var c=Y(s,l);r.value=H(r.value,l,c),n.value=A(n.value,c),t.value=A(t.value,c)}}else if(t)e&&(t.value=t.value.replace(/^\s*/,"")),r&&(r.value=r.value.replace(/^\s*/,""));else if(e&&r){var f=r.value.match(/^\s*/)[0],v=n.value.match(/^\s*/)[0],g=n.value.match(/\s*$/)[0],y=W(f,v);n.value=I(n.value,y);var h=Y(I(f,y),g);n.value=A(n.value,h),r.value=H(r.value,f,h),e.value=P(e.value,f,f.slice(0,f.length-h.length))}else if(r){var d=r.value.match(/^\s*/)[0],D=n.value.match(/\s*$/)[0],x=Z(D,d);n.value=A(n.value,x)}else if(e){var _=e.value.match(/\s*$/)[0],T=n.value.match(/^\s*/)[0],m=Z(_,T);n.value=I(n.value,m)}}var gn=new p;gn.tokenize=function(e){var n=new RegExp("(\\r?\\n)|[".concat(b,"]+|[^\\S\\n\\r]+|[^").concat(b,"]"),"ug");return e.match(n)||[]};var k=new p;k.tokenize=function(e,n){n.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));var t=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(var o=0;o<r.length;o++){var s=r[o];o%2&&!n.newlineIsToken?t[t.length-1]+=s:t.push(s)}return t};k.equals=function(e,n,t){return t.ignoreWhitespace?((!t.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!t.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):t.ignoreNewlineAtEof&&!t.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),p.prototype.equals.call(this,e,n,t)};function En(e,n,t){return k.diff(e,n,t)}var Cn=new p;Cn.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)};var Dn=new p;Dn.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},B(e)}var N=new p;N.useLongestToken=!0;N.tokenize=k.tokenize;N.castInput=function(e,n){var t=n.undefinedReplacement,r=n.stringifyReplacer,o=r===void 0?function(s,i){return typeof i>"u"?t:i}:r;return typeof e=="string"?e:JSON.stringify(F(e,null,null,o),o,"  ")};N.equals=function(e,n,t){return p.prototype.equals.call(N,e.replace(/,([\r\n])/g,"$1"),n.replace(/,([\r\n])/g,"$1"),t)};function F(e,n,t,r,o){n=n||[],t=t||[],r&&(e=r(o,e));var s;for(s=0;s<n.length;s+=1)if(n[s]===e)return t[s];var i;if(Object.prototype.toString.call(e)==="[object Array]"){for(n.push(e),i=new Array(e.length),t.push(i),s=0;s<e.length;s+=1)i[s]=F(e[s],n,t,r,o);return n.pop(),t.pop(),i}if(e&&e.toJSON&&(e=e.toJSON()),B(e)==="object"&&e!==null){n.push(e),i={},t.push(i);var l=[],u;for(u in e)Object.prototype.hasOwnProperty.call(e,u)&&l.push(u);for(l.sort(),s=0;s<l.length;s+=1)u=l[s],i[u]=F(e[u],n,t,r,u);n.pop(),t.pop()}else i=e;return i}var G=new p;G.tokenize=function(e){return e.slice()};G.join=G.removeEmpty=function(e){return e};var j=(e=>(e.ADDED="added",e.REMOVED="removed",e.UNCHANGED="unchanged",e))(j||{});function q(e){if(e==="")return 0;const n=e.split(`
`).length;return e.endsWith(`
`)?n-1:n}function xn(e,n){return En(e,n,{newlineIsToken:!0}).map(r=>({count:r.count??q(r.value),value:r.value,type:r.added?"added":r.removed?"removed":"unchanged"}))}function On(e){let n="";for(const{type:t,value:r}of e)(t==="added"||t==="unchanged")&&(n+=r);return n}function wn(e,n){const t=q(n),r=_n(e,t);return{changes:xn(r,n),numLinesDiffed:t}}function In(e){const n=[...e],t=[],r=[];for(;n.length>0;){const o=n[n.length-1];if(o.type===j.REMOVED)n.pop(),o.type===j.REMOVED&&t.unshift(o);else if(o.type===j.ADDED)n.pop(),r.unshift(o);else break}return{prunedChanges:[...n,...r],prunedRemovedChanges:t}}function Nn(e,n){const{changes:t,numLinesDiffed:r}=wn(e,n),{prunedChanges:o,prunedRemovedChanges:s}=In(t),i=On(o),l=s.map(c=>c.value).join(`
`),u=le(e,r,"start");return{content:i+l+u,numLinesDiffed:q(i)}}function _n(e,n){if(n<=0)return"";let t=0,r=e.length;for(let o=0;o<e.length;o++)if(e[o]===`
`&&(t++,t===n)){r=o+1;break}return e.substring(0,r)}function le(e,n,t="start"){if(n<=0)return e;if(t==="start"){let i=0;for(let l=0;l<e.length;l++)if(e[l]===`
`&&(i++,i===n))return e.substring(l+1);return""}let r=0,o=-1;const s=e.endsWith(`
`)?n+1:n;for(let i=e.length-1;i>=0;i--)if(e[i]===`
`&&(r++,r===s)){o=i;break}return o===-1?"":e.substring(0,o+1)}function $n(e,n){const t=e?.type??se.LOADING,r=e?.content??"",o=Ae(e);if(!re(t)||n==null||!o||!je(e))return{content:r,currentlyStreamingLineIndex:null};const s=le(r,1,"end");if(s==="")return{content:n.content,currentlyStreamingLineIndex:0};const i=Nn(n.content,s);return{content:i.content,currentlyStreamingLineIndex:i.numLinesDiffed}}class Tn{constructor(n){this.params=n}get isReadonly(){return Object.values(this.params).some(n=>!!n)}get isHistoricalVersion(){return!!this.params.isHistoricalVersion}get isStreaming(){return!!this.params.isStreaming}get isRestoring(){return!!this.params.isRestoring}get isShowingChanges(){return!!this.params.isShowingChanges}get isReadonlyFromQueryParam(){return!!this.params.isReadonlyFromQueryParam}}const qn=e=>new Tn(e);export{Sn as A,Je as C,hn as D,ln as E,cn as G,kn as H,Le as L,vn as M,Ln as N,ze as O,Pn as T,ke as Z,Hn as a,Gn as b,R as c,qn as d,Re as e,ie as f,$n as g,Fn as h,un as i,ae as j,zn as k,an as l,Me as m,mn as n,U as o,fn as p,Bn as q};
//# sourceMappingURL=osdidhr501p466t6.js.map