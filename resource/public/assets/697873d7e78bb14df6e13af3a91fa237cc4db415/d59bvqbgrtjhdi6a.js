const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mi0n1zuulc5hfoak.js","assets/dfm2yceao9m2ilo9.js","assets/root-mg58v26q.css","assets/mwxmeau2u615h9c2.js","assets/o7wih49jz3zkdcav.js","assets/conversation-small-ile61fj8.css","assets/ccrdffu4uq6bo5k0.js","assets/huty6yhsfwt7jiw2.js","assets/gb721j76lu290i1c.js","assets/c3pv0g5u6p31bd14.js","assets/oj002yr1cv5905d0.js","assets/c1bxciuqfnnvqhe5.js","assets/fzrn137102spawew.js","assets/zbtw2a6a3r9x82tu.js","assets/crgpn8kp0lsek69a.js","assets/j3jvaqmbweoz0uvu.js","assets/mnx8lkd7acwrn154.js","assets/of3zireqs833qyjf.js","assets/cd36cothr8dhzrpa.js","assets/bxtmne5t08tiqbbn.js","assets/icsetizh7sglpchc.js","assets/is-scrollable-element-i34sjb0l.css","assets/hpknzrbnr0xira7i.js","assets/f6hms767mvgd5wdn.js","assets/code-composer-ne11stli.css","assets/i9ofl7f6pruoduz6.js","assets/n6gnvof0n1jgnn4r.js","assets/1cu4giinz347vps2.js","assets/hosf99hnjct48rri.js","assets/jvve8ngqim0sf320.js","assets/hlo8cl07ylvwwy6v.js","assets/document-composer-ofhzvcxp.css"])))=>i.map(i=>d[i]);
import{m as l,aE as D,aJ as ae,r as $,ee as K,L as ue,ba as ce,K as fe,hs as me,bc as ve,b3 as ee,b4 as ne,i as he,g as pe,hw as de,hp as ye}from"./dfm2yceao9m2ilo9.js";import{m as H}from"./ccrdffu4uq6bo5k0.js";import{aQ as ge,ky as Ee,kz as De,bA as Ce,kA as xe,h_ as Oe,aF as we,kB as Ie,N as Ne,cn as te,kC as _e,co as re,kD as Ae,cK as Te,cl as be,cm as Re}from"./o7wih49jz3zkdcav.js";import{B as je}from"./f6hms767mvgd5wdn.js";import{P as se}from"./j3jvaqmbweoz0uvu.js";const ke="py-[0.108em]",ze="selection-highlight",Ln={code:`${ke} bg-[Highlight]`,document:`${ze} bg-[Highlight]`},oe={code:"flex justify-start pt-2 h-full",document:"flex h-full justify-center"},Mn="shadow-xl",Le={blockCommentHover:"z-[-1]",collapsedComment:"z-0",composer:"z-10",expandedComment:"z-10",chatOverlay:"z-20",commentGutter:"z-20",expandedCommentHovered:"z-30",expandedCommentFocused:"z-40",toolbar:"z-50",commentComposer:"z-50",textdocDiffLoadingOverlay:"z-[60]",acceleratorsOverlay:"z-[60]",accelerators:"z-[70]"},Hn="text-blue-400 disabled:text-blue-400 bg-blue-400/15 focus-visible:bg-blue-400/15 enabled:hover:bg-blue-400/20 disabled:opacity-40";function Me({className:e,zIndexKey:n,onClick:t}){return l.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:D("absolute inset-0",e,Le[n]),onClick:t})}function He({zIndexKey:e,onClick:n}){return l.jsx(Me,{zIndexKey:e,onClick:n,className:"bg-gray-50/50 dark:bg-black/50"})}const Se=({onScroll:e})=>(Ee(({scrollTop:n})=>{e?.(n)}),null),Pe=({shouldScrollToTop:e})=>{const n=De();return $.useEffect(()=>{e===!0&&n({behavior:"smooth"})},[e,n]),null},Be=()=>{const e=Ce();$.useEffect(()=>{e({behavior:"smooth"})},[e]);const[n]=xe();return n?null:l.jsx("button",{onClick:()=>e({behavior:"smooth"}),className:"absolute bottom-5 right-1/2 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary bg-clip-padding text-token-text-secondary",children:l.jsx(Oe,{className:"icon-md text-token-text-primary"})})},Fe=ae.section`w-full h-full flex flex-col popover bg-token-main-surface-primary`,Ge=({children:e,onScroll:n,shouldScrollToTop:t,scrollToBottomMode:r="top",isLoading:o=!1,disableScroll:s=!1},i)=>l.jsxs("main",{className:"relative flex min-h-0 flex-auto flex-grow flex-col",ref:i,children:[l.jsx(ge,{children:o&&l.jsx(He,{zIndexKey:"textdocDiffLoadingOverlay"})}),!s&&l.jsxs(je,{followButtonClassName:"hidden",initialScrollBehavior:"auto",className:"h-full",mode:r,children:[e,r==="bottom"&&l.jsx(Be,{}),l.jsx(Se,{onScroll:n}),l.jsx(Pe,{shouldScrollToTop:t})]}),s&&l.jsx("div",{children:e})]}),$e=$.forwardRef(Ge);function qe({className:e,children:n}){return K()?l.jsx(we,{leading:!0,type:"primary",className:D(e,"top-0 z-[1] h-[var(--screen-thread-header-min-height,60px)] flex-none px-3.5"),children:l.jsx("div",{className:"flex items-center justify-between gap-4",children:n})}):l.jsx("header",{className:D(e,"flex h-14 flex-none items-center justify-between gap-4 px-3"),children:n})}function Xe({className:e,children:n}){const t=K();return l.jsx("h2",{className:D(e,"ml-2.5 truncate",t?"text-[17px] font-medium leading-[30px] text-token-text-secondary":"text-lg text-gray-700 dark:text-token-text-secondary"),children:n})}const Je=({onClick:e})=>{const n=ue(),r=Ie()?ve:me;return l.jsx(ce,{label:n.formatMessage(Ue.close),children:l.jsx(Ne,{icon:r,onClick:e})})},j=({children:e})=>l.jsx(Fe,{children:e});j.Title=Xe;j.CloseButton=Je;j.Header=qe;j.Content=$e;const Ue=fe({close:{id:"Bix/Kd",defaultMessage:"Close"}}),Ve=ee(()=>ne(()=>import("./mi0n1zuulc5hfoak.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])).then(e=>e.CodeComposer),{loading:()=>l.jsx("div",{className:oe.code,children:l.jsx("div",{className:"h-full w-full px-4",children:l.jsx(se,{lines:20})})})}),Sn=e=>l.jsx(Ve,{...e});var ie=(e=>(e.javascript="javascript",e.typescript="typescript",e.bash="bash",e.zsh="zsh",e.html="html",e.css="css",e.python="python",e.json="json",e.sql="sql",e.go="go",e.yaml="yaml",e.java="java",e.rust="rust",e.cpp="cpp",e.swift="swift",e.php="php",e.xml="xml",e.ruby="ruby",e.haskell="haskell",e.kotlin="kotlin",e.csharp="csharp",e.c="c",e.objectivec="objectivec",e.r="r",e.lua="lua",e.dart="dart",e.scala="scala",e.perl="perl",e.commonlisp="commonlisp",e.clojure="clojure",e.ocaml="ocaml",e.powershell="powershell",e.verilog="verilog",e.dockerfile="dockerfile",e.vue="vue",e.other="other",e))(ie||{});function Pn(e){if(te(e))switch(e){case re.CODE_REACT:return"typescript";default:return _e(e.replace(/^code\//,""),Object.values(ie),"other")}}var We=(e=>(e.ALL_HIDDEN="all_hidden",e.COMMENTS_READONLY="comments_readonly",e.ENABLED="enabled",e))(We||{}),Ye=he;function Qe(e){return typeof e=="function"?e:Ye}var Ze=Qe,Ke=de,en=Ze,nn=ye,tn=9007199254740991,M=4294967295,rn=Math.min;function sn(e,n){if(e=nn(e),e<1||e>tn)return[];var t=M,r=rn(e,M);n=en(n),e-=M;for(var o=Ke(r,n);++t<e;)n(t);return o}var on=sn;const ln=pe(on),Bn=({gap:e,padding:n=4})=>l.jsx(H.div,{className:D("grid h-full max-w-full flex-1 grid-cols-3 items-center"),style:{gap:e,padding:n},children:ln(3,t=>l.jsx(H.div,{className:"dark:bg-white-400 aspect-square rounded-full bg-gray-400",animate:{translateY:["0%","-50%","0%","0%","0%"]},style:{translateX:.5,width:3,height:3},transition:{repeat:1/0,type:"keyframes",delay:t/10,duration:.7}},t))}),an=36,Fn=-24,un=280,cn=un+an,Gn=40;var fn=(e=>(e.COLLAPSED="collapsed",e.EXPANDED="expanded",e))(fn||{});const U=775,mn=580,vn=36,hn=18,pn=({isPreview:e=!1})=>{const[{width:n},t]=Ae(),r=Te(),o=n>=U+cn?U:mn,s=e&&r?hn:vn;return l.jsx("div",{className:D(oe.document,"mt-4"),ref:t,style:{margin:`0 ${s}px`},children:l.jsx("div",{style:{width:o},children:l.jsx(se,{lines:20})})})},dn=ee(()=>ne(()=>import("./i9ofl7f6pruoduz6.js"),__vite__mapDeps([25,1,2,19,18,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,26,27,28,29,30,23,31])).then(e=>e.DocumentComposer),{loading:pn}),$n=e=>l.jsx(dn,{...e});function p(){}p.prototype={diff:function(n,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=o.callback;typeof o=="function"&&(s=o,o={});var i=this;function a(m){return m=i.postProcess(m,o),s?(setTimeout(function(){s(m)},0),!0):m}n=this.castInput(n,o),t=this.castInput(t,o),n=this.removeEmpty(this.tokenize(n,o)),t=this.removeEmpty(this.tokenize(t,o));var u=t.length,c=n.length,f=1,v=u+c;o.maxEditLength!=null&&(v=Math.min(v,o.maxEditLength));var g=(r=o.timeout)!==null&&r!==void 0?r:1/0,y=Date.now()+g,h=[{oldPos:-1,lastComponent:void 0}],d=this.extractCommon(h[0],t,n,0,o);if(h[0].oldPos+1>=c&&d+1>=u)return a(V(i,h[0].lastComponent,t,n,i.useLongestToken));var C=-1/0,x=1/0;function _(){for(var m=Math.max(C,-f);m<=Math.min(x,f);m+=2){var E=void 0,O=h[m-1],w=h[m+1];O&&(h[m-1]=void 0);var L=!1;if(w){var X=w.oldPos-m;L=w&&0<=X&&X<u}var J=O&&O.oldPos+1<c;if(!L&&!J){h[m]=void 0;continue}if(!J||L&&O.oldPos<w.oldPos?E=i.addToPath(w,!0,!1,0,o):E=i.addToPath(O,!1,!0,1,o),d=i.extractCommon(E,t,n,m,o),E.oldPos+1>=c&&d+1>=u)return a(V(i,E.lastComponent,t,n,i.useLongestToken));h[m]=E,E.oldPos+1>=c&&(x=Math.min(x,m-1)),d+1>=u&&(C=Math.max(C,m+1))}f++}if(s)(function m(){setTimeout(function(){if(f>v||Date.now()>y)return s();_()||m()},0)})();else for(;f<=v&&Date.now()<=y;){var A=_();if(A)return A}},addToPath:function(n,t,r,o,s){var i=n.lastComponent;return i&&!s.oneChangePerToken&&i.added===t&&i.removed===r?{oldPos:n.oldPos+o,lastComponent:{count:i.count+1,added:t,removed:r,previousComponent:i.previousComponent}}:{oldPos:n.oldPos+o,lastComponent:{count:1,added:t,removed:r,previousComponent:i}}},extractCommon:function(n,t,r,o,s){for(var i=t.length,a=r.length,u=n.oldPos,c=u-o,f=0;c+1<i&&u+1<a&&this.equals(r[u+1],t[c+1],s);)c++,u++,f++,s.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return f&&!s.oneChangePerToken&&(n.lastComponent={count:f,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=u,c},equals:function(n,t,r){return r.comparator?r.comparator(n,t):n===t||r.ignoreCase&&n.toLowerCase()===t.toLowerCase()},removeEmpty:function(n){for(var t=[],r=0;r<n.length;r++)n[r]&&t.push(n[r]);return t},castInput:function(n){return n},tokenize:function(n){return Array.from(n)},join:function(n){return n.join("")},postProcess:function(n){return n}};function V(e,n,t,r,o){for(var s=[],i;n;)s.push(n),i=n.previousComponent,delete n.previousComponent,n=i;s.reverse();for(var a=0,u=s.length,c=0,f=0;a<u;a++){var v=s[a];if(v.removed)v.value=e.join(r.slice(f,f+v.count)),f+=v.count;else{if(!v.added&&o){var g=t.slice(c,c+v.count);g=g.map(function(y,h){var d=r[f+h];return d.length>y.length?d:y}),v.value=e.join(g)}else v.value=e.join(t.slice(c,c+v.count));c+=v.count,v.added||(f+=v.count)}}return s}function W(e,n){var t;for(t=0;t<e.length&&t<n.length;t++)if(e[t]!=n[t])return e.slice(0,t);return e.slice(0,t)}function Y(e,n){var t;if(!e||!n||e[e.length-1]!=n[n.length-1])return"";for(t=0;t<e.length&&t<n.length;t++)if(e[e.length-(t+1)]!=n[n.length-(t+1)])return e.slice(-t);return e.slice(-t)}function S(e,n,t){if(e.slice(0,n.length)!=n)throw Error("string ".concat(JSON.stringify(e)," doesn't start with prefix ").concat(JSON.stringify(n),"; this is a bug"));return t+e.slice(n.length)}function P(e,n,t){if(!n)return e+t;if(e.slice(-n.length)!=n)throw Error("string ".concat(JSON.stringify(e)," doesn't end with suffix ").concat(JSON.stringify(n),"; this is a bug"));return e.slice(0,-n.length)+t}function I(e,n){return S(e,n,"")}function T(e,n){return P(e,n,"")}function Q(e,n){return n.slice(0,yn(e,n))}function yn(e,n){var t=0;e.length>n.length&&(t=e.length-n.length);var r=n.length;e.length<n.length&&(r=e.length);var o=Array(r),s=0;o[0]=0;for(var i=1;i<r;i++){for(n[i]==n[s]?o[i]=o[s]:o[i]=s;s>0&&n[i]!=n[s];)s=o[s];n[i]==n[s]&&s++}s=0;for(var a=t;a<e.length;a++){for(;s>0&&e[a]!=n[s];)s=o[s];e[a]==n[s]&&s++}return s}var R="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",gn=new RegExp("[".concat(R,"]+|\\s+|[^").concat(R,"]"),"ug"),k=new p;k.equals=function(e,n,t){return t.ignoreCase&&(e=e.toLowerCase(),n=n.toLowerCase()),e.trim()===n.trim()};k.tokenize=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t;if(n.intlSegmenter){if(n.intlSegmenter.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');t=Array.from(n.intlSegmenter.segment(e),function(s){return s.segment})}else t=e.match(gn)||[];var r=[],o=null;return t.forEach(function(s){/\s/.test(s)?o==null?r.push(s):r.push(r.pop()+s):/\s/.test(o)?r[r.length-1]==o?r.push(r.pop()+s):r.push(o+s):r.push(s),o=s}),r};k.join=function(e){return e.map(function(n,t){return t==0?n:n.replace(/^\s+/,"")}).join("")};k.postProcess=function(e,n){if(!e||n.oneChangePerToken)return e;var t=null,r=null,o=null;return e.forEach(function(s){s.added?r=s:s.removed?o=s:((r||o)&&Z(t,o,r,s),t=s,r=null,o=null)}),(r||o)&&Z(t,o,r,null),e};function Z(e,n,t,r){if(n&&t){var o=n.value.match(/^\s*/)[0],s=n.value.match(/\s*$/)[0],i=t.value.match(/^\s*/)[0],a=t.value.match(/\s*$/)[0];if(e){var u=W(o,i);e.value=P(e.value,i,u),n.value=I(n.value,u),t.value=I(t.value,u)}if(r){var c=Y(s,a);r.value=S(r.value,a,c),n.value=T(n.value,c),t.value=T(t.value,c)}}else if(t)e&&(t.value=t.value.replace(/^\s*/,"")),r&&(r.value=r.value.replace(/^\s*/,""));else if(e&&r){var f=r.value.match(/^\s*/)[0],v=n.value.match(/^\s*/)[0],g=n.value.match(/\s*$/)[0],y=W(f,v);n.value=I(n.value,y);var h=Y(I(f,y),g);n.value=T(n.value,h),r.value=S(r.value,f,h),e.value=P(e.value,f,f.slice(0,f.length-h.length))}else if(r){var d=r.value.match(/^\s*/)[0],C=n.value.match(/\s*$/)[0],x=Q(C,d);n.value=T(n.value,x)}else if(e){var _=e.value.match(/\s*$/)[0],A=n.value.match(/^\s*/)[0],m=Q(_,A);n.value=I(n.value,m)}}var En=new p;En.tokenize=function(e){var n=new RegExp("(\\r?\\n)|[".concat(R,"]+|[^\\S\\n\\r]+|[^").concat(R,"]"),"ug");return e.match(n)||[]};var z=new p;z.tokenize=function(e,n){n.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));var t=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(var o=0;o<r.length;o++){var s=r[o];o%2&&!n.newlineIsToken?t[t.length-1]+=s:t.push(s)}return t};z.equals=function(e,n,t){return t.ignoreWhitespace?((!t.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!t.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):t.ignoreNewlineAtEof&&!t.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),p.prototype.equals.call(this,e,n,t)};function Dn(e,n,t){return z.diff(e,n,t)}var Cn=new p;Cn.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)};var xn=new p;xn.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},B(e)}var N=new p;N.useLongestToken=!0;N.tokenize=z.tokenize;N.castInput=function(e,n){var t=n.undefinedReplacement,r=n.stringifyReplacer,o=r===void 0?function(s,i){return typeof i>"u"?t:i}:r;return typeof e=="string"?e:JSON.stringify(F(e,null,null,o),o,"  ")};N.equals=function(e,n,t){return p.prototype.equals.call(N,e.replace(/,([\r\n])/g,"$1"),n.replace(/,([\r\n])/g,"$1"),t)};function F(e,n,t,r,o){n=n||[],t=t||[],r&&(e=r(o,e));var s;for(s=0;s<n.length;s+=1)if(n[s]===e)return t[s];var i;if(Object.prototype.toString.call(e)==="[object Array]"){for(n.push(e),i=new Array(e.length),t.push(i),s=0;s<e.length;s+=1)i[s]=F(e[s],n,t,r,o);return n.pop(),t.pop(),i}if(e&&e.toJSON&&(e=e.toJSON()),B(e)==="object"&&e!==null){n.push(e),i={},t.push(i);var a=[],u;for(u in e)Object.prototype.hasOwnProperty.call(e,u)&&a.push(u);for(a.sort(),s=0;s<a.length;s+=1)u=a[s],i[u]=F(e[u],n,t,r,u);n.pop(),t.pop()}else i=e;return i}var G=new p;G.tokenize=function(e){return e.slice()};G.join=G.removeEmpty=function(e){return e};var b=(e=>(e.ADDED="added",e.REMOVED="removed",e.UNCHANGED="unchanged",e))(b||{});function q(e){if(e==="")return 0;const n=e.split(`
`).length;return e.endsWith(`
`)?n-1:n}function On(e,n){return Dn(e,n,{newlineIsToken:!0}).map(r=>({count:r.count??q(r.value),value:r.value,type:r.added?"added":r.removed?"removed":"unchanged"}))}function wn(e){let n="";for(const{type:t,value:r}of e)(t==="added"||t==="unchanged")&&(n+=r);return n}function In(e,n){const t=q(n),r=An(e,t);return{changes:On(r,n),numLinesDiffed:t}}function Nn(e){const n=[...e],t=[],r=[];for(;n.length>0;){const o=n[n.length-1];if(o.type===b.REMOVED)n.pop(),o.type===b.REMOVED&&t.unshift(o);else if(o.type===b.ADDED)n.pop(),r.unshift(o);else break}return{prunedChanges:[...n,...r],prunedRemovedChanges:t}}function _n(e,n){const{changes:t,numLinesDiffed:r}=In(e,n),{prunedChanges:o,prunedRemovedChanges:s}=Nn(t),i=wn(o),a=s.map(c=>c.value).join(`
`),u=le(e,r,"start");return{content:i+a+u,numLinesDiffed:q(i)}}function An(e,n){if(n<=0)return"";let t=0,r=e.length;for(let o=0;o<e.length;o++)if(e[o]===`
`&&(t++,t===n)){r=o+1;break}return e.substring(0,r)}function le(e,n,t="start"){if(n<=0)return e;if(t==="start"){let i=0;for(let a=0;a<e.length;a++)if(e[a]===`
`&&(i++,i===n))return e.substring(a+1);return""}let r=0,o=-1;const s=e.endsWith(`
`)?n+1:n;for(let i=e.length-1;i>=0;i--)if(e[i]===`
`&&(r++,r===s)){o=i;break}return o===-1?"":e.substring(0,o+1)}function qn(e,n){const t=e?.type??re.LOADING,r=e?.content??"",o=be(e);if(!te(t)||n==null||!o||!Re(e))return{content:r,currentlyStreamingLineIndex:null};const s=le(r,1,"end");if(s==="")return{content:n.content,currentlyStreamingLineIndex:0};const i=_n(n.content,s);return{content:i.content,currentlyStreamingLineIndex:i.numLinesDiffed}}class Tn{constructor(n){this.params=n}get isReadonly(){return Object.values(this.params).some(n=>!!n)}get isHistoricalVersion(){return!!this.params.isHistoricalVersion}get isStreaming(){return!!this.params.isStreaming}get isRestoring(){return!!this.params.isRestoring}get isShowingChanges(){return!!this.params.isShowingChanges}get isReadonlyFromQueryParam(){return!!this.params.isReadonlyFromQueryParam}}const Xn=e=>new Tn(e);export{Sn as A,We as C,pn as D,un as E,fn as G,Ln as H,He as L,hn as M,Hn as N,Me as O,Bn as T,Le as Z,Pn as a,$n as b,j as c,Xn as d,ke as e,oe as f,qn as g,Gn as h,cn as i,ie as j,Mn as k,an as l,ze as m,Fn as n,vn as o,U as p,mn as q};
//# sourceMappingURL=d59bvqbgrtjhdi6a.js.map
