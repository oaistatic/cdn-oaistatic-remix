import{d as Ze,n as pe,j as v,r as w,bD as Bt,J as Mt,K as Dt,ak as Tt,a as yt}from"./lj2b9v3ilohzzubf.js";import{d as K,S as W,D as L,E as D,c as Y,A as qe,n as ie,F as Ot,V as Ee,P as Se,g as Qe,i as ee,R as Ye,G as Xe,W as be,h as Nt,u as Gt,z as Rt,a as Te,I as It,x as Wt,J as _t,p as Ht,K as jt,L as q,N as ye,O as Vt,Q as Ft,U as Pt,X as Ut,Y as Kt,Z as Jt,_ as $t,$ as zt,a0 as Zt,a1 as qt,a2 as ce,a3 as Qt,a4 as Yt}from"./d0x5lx8xixrjk0pv.js";import{l8 as Xt,gJ as et,l9 as en,_ as tn}from"./m2xe8hrs3fe8d0zo.js";import{B as nn,G as rn,y as on,z as sn,x as ln,J as an,A as cn,K as fn,u as dn,v as un,M as hn,O as mn,w as gn,Q as pn}from"./kw65gi29br04gd1a.js";import{e as Cn,Z as xn,f as wn,C as fe,h as An,T as En}from"./ebqgulhtfje716f3.js";import{s as Sn,v as bn,a as kn,m as tt,g as vn,b as de,T as Ln,c as Bn,A as Oe,u as Mn,i as Dn,C as Tn,d as yn}from"./g8w2kber3a8a5est.js";import{ad as On,aJ as Nn}from"./np8fo7dxv82gt6zv.js";import{c as Gn}from"./gqnam2sy724kjmf0.js";import{u as nt}from"./s9y9foxsyodvojf2.js";import"./utt1v4s8vubsyl62.js";import"./b1tx0o5lec5l1zgg.js";import"./d3oipwmaenjajggo.js";import"./eqmc2le0pqjq22bn.js";import"./fzrn137102spawew.js";import"./okjoaa5a857mns87.js";import"./n985yc0bql5eas8a.js";import"./nuho9o392xhbz80e.js";import"./cqi95yj4q81x7ujl.js";import"./esgrmde1rv71b2bn.js";import"./ih9daw890a94om4n.js";import"./dsellp5bliow2765.js";import"./l30wv3e9u4mghwbs.js";const Ce=K.define(),rt=W.define({create:()=>null,update:(e,t)=>{const n=t.effects.find(i=>i.is(Ce));return n?n.value:e}}),Rn=e=>L.line({class:"!bg-[Highlight]"}).range(e),In=e=>L.line({class:"streaming-line-overlay before:content-['*'] before:bg-white/50 dark:before:bg-gray-750/50"}).range(e),Wn=W.define({create:()=>L.none,update:(e,t)=>{e=e.map(t.changes);const n=t.state.field(rt);if(n==null)return L.none;const i=t.state.doc,o=n+1;if(o>i.lines)return L.none;const r=i.line(o),s=Rn(r.from),l=Array.from({length:i.lines-o},(f,c)=>In(i.line(o+1+c).from));return L.set([s,...l])},provide:e=>D.decorations.from(e)}),_n=e=>[rt.init(()=>e),Wn];function Hn(e){return e.toString().length}function jn(e,t,n){return i=>{if(!i.docChanged)return i;const o=Hn(i.state.doc);if(o<=e)return i;n&&t&&Xt(n,t);const r=i.state.doc.sliceString(0,e),s=i.startState.update({changes:{from:0,to:i.startState.doc.length,insert:r}});return et.logEvent(Ze.canvasCodemirrorMaxLength,{maxLength:e,newLength:o}),[s]}}function Vn(e,t,n){return[Y.transactionFilter.of(jn(n,e,t))]}const ot=qe.define();function Fn(){return D.updateListener.of(e=>{if(!e.docChanged||e.state.readOnly)return;const t=e.state.doc;t.length>0&&t.sliceString(t.length-1)!==`
`&&e.view.dispatch({changes:{from:t.length,to:t.length,insert:`
`},annotations:ot.of(!0)})})}class S{constructor(t,n,i,o){this.fromA=t,this.toA=n,this.fromB=i,this.toB=o}offset(t,n=t){return new S(this.fromA+t,this.toA+t,this.fromB+n,this.toB+n)}}function P(e,t,n,i,o,r){if(e==i)return[];let s=ke(e,t,n,i,o,r),l=ve(e,t+s,n,i,o+s,r);t+=s,n-=l,o+=s,r-=l;let f=n-t,c=r-o;if(!f||!c)return[new S(t,n,o,r)];if(f>c){let d=e.slice(t,n).indexOf(i.slice(o,r));if(d>-1)return[new S(t,t+d,o,o),new S(t+d+c,n,r,r)]}else if(c>f){let d=i.slice(o,r).indexOf(e.slice(t,n));if(d>-1)return[new S(t,t,o,o+d),new S(n,n,o+d+f,r)]}if(f==1||c==1)return[new S(t,n,o,r)];let a=lt(e,t,n,i,o,r);if(a){let[d,u,h]=a;return P(e,t,d,i,o,u).concat(P(e,d+h,n,i,u+h,r))}return Pn(e,t,n,i,o,r)}let Q=1e9;function Pn(e,t,n,i,o,r){let s=n-t,l=r-o;if(Q<1e9&&Math.min(s,l)>Q*16)return Math.min(s,l)>Q*64?[new S(t,n,o,r)]:Ne(e,t,n,i,o,r);let f=Math.ceil((s+l)/2);ue.reset(f),he.reset(f);let c=(h,g)=>e.charCodeAt(t+h)==i.charCodeAt(o+g),a=(h,g)=>e.charCodeAt(n-h-1)==i.charCodeAt(r-g-1),d=(s-l)%2!=0?he:null,u=d?null:ue;for(let h=0;h<f;h++){if(h>Q)return Ne(e,t,n,i,o,r);let g=ue.advance(h,s,l,f,d,!1,c)||he.advance(h,s,l,f,u,!0,a);if(g)return Un(e,t,n,t+g[0],i,o,r,o+g[1])}return[new S(t,n,o,r)]}class it{vec=[];len;start;end;reset(t){this.len=t<<1;for(let n=0;n<this.len;n++)this.vec[n]=-1;this.vec[t+1]=0,this.start=this.end=0}advance(t,n,i,o,r,s,l){for(let f=-t+this.start;f<=t-this.end;f+=2){let c=o+f,a=f==-t||f!=t&&this.vec[c-1]<this.vec[c+1]?this.vec[c+1]:this.vec[c-1]+1,d=a-f;for(;a<n&&d<i&&l(a,d);)a++,d++;if(this.vec[c]=a,a>n)this.end+=2;else if(d>i)this.start+=2;else if(r){let u=o+(n-i)-f;if(u>=0&&u<this.len&&r.vec[u]!=-1)if(s){let h=r.vec[u];if(h>=n-a)return[h,o+h-u]}else{let h=n-r.vec[u];if(a>=h)return[a,d]}}}return null}}const ue=new it,he=new it;function Un(e,t,n,i,o,r,s,l){let f=!1;return!$(e,i)&&++i==n&&(f=!0),!$(o,l)&&++l==s&&(f=!0),f?[new S(t,n,r,s)]:P(e,t,i,o,r,l).concat(P(e,i,n,o,l,s))}function st(e,t){let n=1,i=Math.min(e,t);for(;n<i;)n=n<<1;return n}function ke(e,t,n,i,o,r){if(t==n||t==r||e.charCodeAt(t)!=i.charCodeAt(o))return 0;let s=st(n-t,r-o);for(let l=t,f=o;;){let c=l+s,a=f+s;if(c>n||a>r||e.slice(l,c)!=i.slice(f,a)){if(s==1)return l-t-($(e,l)?0:1);s=s>>1}else{if(c==n||a==r)return c-t;l=c,f=a}}}function ve(e,t,n,i,o,r){if(t==n||o==r||e.charCodeAt(n-1)!=i.charCodeAt(r-1))return 0;let s=st(n-t,r-o);for(let l=n,f=r;;){let c=l-s,a=f-s;if(c<t||a<o||e.slice(c,l)!=i.slice(a,f)){if(s==1)return n-l-($(e,l)?0:1);s=s>>1}else{if(c==t||a==o)return n-c;l=c,f=a}}}function xe(e,t,n,i,o,r,s,l){let f=i.slice(o,r),c=null;for(;;){if(c||s<l)return c;for(let a=t+s;;){$(e,a)||a++;let d=a+s;if($(e,d)||(d+=d==a+1?1:-1),d>=n)break;let u=e.slice(a,d),h=-1;for(;(h=f.indexOf(u,h+1))!=-1;){let g=ke(e,d,n,i,o+h+u.length,r),p=ve(e,t,a,i,o,o+h),m=u.length+g+p;(!c||c[2]<m)&&(c=[a-p,o+h-p,m])}a=d}if(l<0)return c;s=s>>1}}function lt(e,t,n,i,o,r){let s=n-t,l=r-o;if(s<l){let f=lt(i,o,r,e,t,n);return f&&[f[1],f[0],f[2]]}return s<4||l*2<s?null:xe(e,t,n,i,o,r,Math.floor(s/4),-1)}function Ne(e,t,n,i,o,r){let s=n-t,l=r-o,f;if(s<l){let u=xe(i,o,r,e,t,n,Math.floor(s/6),50);f=u&&[u[1],u[0],u[2]]}else f=xe(e,t,n,i,o,r,Math.floor(l/6),50);if(!f)return[new S(t,n,o,r)];let[c,a,d]=f;return P(e,t,c,i,o,a).concat(P(e,c+d,n,i,a+d,r))}function at(e,t){for(let n=1;n<e.length;n++){let i=e[n-1],o=e[n];i.toA>o.fromA-t&&i.toB>o.fromB-t&&(e[n-1]=new S(i.fromA,o.toA,i.fromB,o.toB),e.splice(n--,1))}}function Kn(e,t,n){for(;;){at(n,1);let i=!1;for(let o=0;o<n.length;o++){let r=n[o],s,l;(s=ke(e,r.fromA,r.toA,t,r.fromB,r.toB))&&(r=n[o]=new S(r.fromA+s,r.toA,r.fromB+s,r.toB)),(l=ve(e,r.fromA,r.toA,t,r.fromB,r.toB))&&(r=n[o]=new S(r.fromA,r.toA-l,r.fromB,r.toB-l));let f=r.toA-r.fromA,c=r.toB-r.fromB;if(f&&c)continue;let a=r.fromA-(o?n[o-1].toA:0),d=(o<n.length-1?n[o+1].fromA:e.length)-r.toA;if(!a||!d)continue;let u=f?e.slice(r.fromA,r.toA):t.slice(r.fromB,r.toB);a<=u.length&&e.slice(r.fromA-a,r.fromA)==u.slice(u.length-a)?(n[o]=new S(r.fromA-a,r.toA-a,r.fromB-a,r.toB-a),i=!0):d<=u.length&&e.slice(r.toA,r.toA+d)==u.slice(0,d)&&(n[o]=new S(r.fromA+d,r.toA+d,r.fromB+d,r.toB+d),i=!0)}if(!i)break}return n}function Jn(e,t,n){for(let i=0,o=0;o<e.length;o++){let r=e[o],s=r.toA-r.fromA,l=r.toB-r.fromB;if(s&&l||s>3||l>3){let f=o==e.length-1?t.length:e[o+1].fromA,c=r.fromA-i,a=f-r.toA,d=Re(t,r.fromA,Math.min(c,5)),u=Ge(t,r.toA,Math.min(a,5)),h=r.fromA-d,g=u-r.toA;if(!s||!l){let p=Math.max(s,l),[m,x,C]=s?[t,r.fromA,r.toA]:[n,r.fromB,r.toB];h&&g&&(p>h&&t.slice(d,r.fromA)==m.slice(C-h,C)?(r=e[o]=new S(d,d+s,r.fromB-h,r.toB-h),d=r.fromA,u=Ge(t,r.toA,Math.min(f-r.toA,5))):p>g&&t.slice(r.toA,u)==m.slice(x,x+g)&&(r=e[o]=new S(u-s,u,r.fromB+g,r.toB+g),u=r.toA,d=Re(t,r.fromA,Math.min(r.fromA-i,5))),h=r.fromA-d,g=u-r.toA)}if(h||g)r=e[o]=new S(r.fromA-h,r.toA+g,r.fromB-h,r.toB+g);else if(s){if(!l){let p=We(t,r.fromA,r.toA),m,x=p<0?-1:Ie(t,r.toA,r.fromA);p>-1&&(m=p-r.fromA)<=a&&t.slice(r.fromA,p)==t.slice(r.toA,r.toA+m)?r=e[o]=r.offset(m):x>-1&&(m=r.toA-x)>=c&&n.slice(r.fromA-m,r.fromA)==n.slice(x,r.toA)&&(r=e[o]=r.offset(-m))}}else{let p=We(n,r.fromB,r.toB),m,x=p<0?-1:Ie(n,r.toB,r.fromB);p>-1&&(m=p-r.fromB)<=a&&n.slice(r.fromB,p)==n.slice(r.toB,r.toB+m)?r=e[o]=r.offset(m):x>-1&&(m=r.toB-x)>=c&&n.slice(r.fromB-m,r.fromB)==n.slice(x,r.toB)&&(r=e[o]=r.offset(-m))}i=r.toA}}return at(e,3),e}let F;try{F=new RegExp("[\\p{Alphabetic}\\p{Number}]","u")}catch{}function ct(e){return e>48&&e<58||e>64&&e<91||e>96&&e<123}function ft(e,t){if(t==e.length)return 0;let n=e.charCodeAt(t);return n<192?ct(n)?1:0:F?!ut(n)||t==e.length-1?F.test(String.fromCharCode(n))?1:0:F.test(e.slice(t,t+2))?2:0:0}function dt(e,t){if(!t)return 0;let n=e.charCodeAt(t-1);return n<192?ct(n)?1:0:F?!ht(n)||t==1?F.test(String.fromCharCode(n))?1:0:F.test(e.slice(t-2,t))?2:0:0}function Ge(e,t,n){if(t==e.length||!dt(e,t))return t;for(let i=t,o=t+n;;){let r=ft(e,i);if(!r)return i;if(i+=r,i>o)return t}}function Re(e,t,n){if(!t||!ft(e,t))return t;for(let i=t,o=t-n;;){let r=dt(e,i);if(!r)return i;if(i-=r,i<o)return t}}function Ie(e,t,n){for(;t!=n;t--)if(e.charCodeAt(t-1)==10)return t;return-1}function We(e,t,n){for(;t!=n;t++)if(e.charCodeAt(t)==10)return t;return-1}const ut=e=>e>=55296&&e<=56319,ht=e=>e>=56320&&e<=57343;function $(e,t){return!t||t==e.length||!ut(e.charCodeAt(t-1))||!ht(e.charCodeAt(t))}function $n(e,t,n){return Q=(n?.scanLimit??1e9)>>1,Kn(e,t,P(e,0,e.length,t,0,t.length))}function mt(e,t,n){return Jn($n(e,t,n),e,t)}function zn(e){const{start:t,end:n}=e.positionBefore,{start:i,end:o}=e.positionAfter;return new S(t,n,i,o)}class te{constructor(t,n,i,o,r){this.changes=t,this.fromA=n,this.toA=i,this.fromB=o,this.toB=r}offset(t,n){return t||n?new te(this.changes,this.fromA+t,this.toA+t,this.fromB+n,this.toB+n):this}get endA(){return Math.max(this.fromA,this.toA)}get endB(){return Math.max(this.fromB,this.toB)}static buildFromTextdocDiff(t){const i=t.edits.map(zn);return i.sort((r,s)=>r.fromA-s.fromA),we(i,ie.of(t.contentBefore.split(`
`)),ie.of(t.contentAfter.split(`
`)),0,0)}static build(t,n,i){const o=mt(t.toString(),n.toString(),i);return we(o,t,n,0,0)}static updateA(t,n,i,o,r){return Fe(Ve(t,o,!0,i.length),t,n,i,r)}static updateB(t,n,i,o,r){return Fe(Ve(t,o,!1,n.length),t,n,i,r)}}function _e(e,t,n,i){let o=n.lineAt(e),r=i.lineAt(t);return o.to==e&&r.to==t&&e<n.length&&t<i.length?[e+1,t+1]:[o.from,r.from]}function He(e,t,n,i){let o=n.lineAt(e),r=i.lineAt(t);return o.from==e&&r.from==t?[e,t]:[o.to+1,r.to+1]}function we(e,t,n,i,o){let r=[];for(let s=0;s<e.length;s++){let l=e[s],[f,c]=_e(l.fromA+i,l.fromB+o,t,n),[a,d]=He(l.toA+i,l.toB+o,t,n),u=[l.offset(-f+i,-c+o)];for(;s<e.length-1;){let h=e[s+1],[g,p]=_e(h.fromA+i,h.fromB+o,t,n);if(g>a+1&&p>d+1)break;u.push(h.offset(-f+i,-c+o)),[a,d]=He(h.toA+i,h.toB+o,t,n),s++}r.push(new te(u,f,Math.max(f,a),c,Math.max(c,d)))}return r}const re=1e3;function je(e,t,n,i){let o=0,r=e.length;for(;;){if(o==r){let a=0,d=0;o&&({toA:a,toB:d}=e[o-1]);let u=t-(n?a:d);return[a+u,d+u]}let s=o+r>>1,l=e[s],[f,c]=n?[l.fromA,l.toA]:[l.fromB,l.toB];if(f>t)r=s;else if(c<=t)o=s+1;else return i?[l.fromA,l.fromB]:[l.toA,l.toB]}}function Ve(e,t,n,i){let o=[];return t.iterChangedRanges((r,s,l,f)=>{let c=0,a=n?t.length:i,d=0,u=n?i:t.length;r>re&&([c,d]=je(e,r-re,n,!0)),s<t.length-re&&([a,u]=je(e,s+re,n,!1));let h=f-l-(s-r),g,[p,m]=n?[h,0]:[0,h];o.length&&(g=o[o.length-1]).toA>=c?o[o.length-1]={fromA:g.fromA,fromB:g.fromB,toA:a,toB:u,diffA:g.diffA+p,diffB:g.diffB+m}:o.push({fromA:c,toA:a,fromB:d,toB:u,diffA:p,diffB:m})}),o}function Fe(e,t,n,i,o){if(!e.length)return t;let r=[];for(let s=0,l=0,f=0,c=0;;s++){let a=s==e.length?null:e[s],d=a?a.fromA+l:n.length,u=a?a.fromB+f:i.length;for(;c<t.length;){let m=t[c];if(m.toA+l>d||m.toB+f>u)break;r.push(m.offset(l,f)),c++}if(!a)break;let h=a.toA+l+a.diffA,g=a.toB+f+a.diffB,p=mt(n.sliceString(d,h),i.sliceString(u,g),o);for(let m of we(p,n,i,d,u))r.push(m);for(l+=a.diffA,f+=a.diffB;c<t.length;){let m=t[c];if(m.fromA+l>h&&m.fromB+f>g)break;c++}}return r}const U=Ot.define({combine:e=>e[0]}),gt=K.define(),G=W.define({create(){return null},update(e,t){for(let n of t.effects)n.is(gt)&&(e=n.value);return e}}),Zn="bg-red-100 dark:bg-red-600/30",qn="bg-green-100 dark:bg-green-600/30",Le=Ee.fromClass(class{deco;gutter;constructor(e){({deco:this.deco,gutter:this.gutter}=Ke(e))}update(e){(e.docChanged||e.viewportChanged||Qn(e.startState,e.state)||Yn(e.startState,e.state))&&({deco:this.deco,gutter:this.gutter}=Ke(e.view))}},{decorations:e=>e.deco});Se.low(Qe({class:"cm-changeGutter",markers:e=>e.plugin(Le)?.gutter||Ye.empty}));function Qn(e,t){return e.field(G,!1)!=t.field(G,!1)}function Yn(e,t){return e.facet(U)!=t.facet(U)}const Pe=L.line({class:`cm-changedLine ${qn}`}),Xn=L.mark({class:"cm-changedText"}),er=L.mark({tagName:"ins",class:"cm-insertedLine"}),tr=L.mark({tagName:"del",class:"cm-deletedLine"}),Ue=new class extends Xe{elementClass="cm-changedLineGutter"};function nr(e,t,n,i,o,r){let s=n?e.fromA:e.fromB,l=n?e.toA:e.toB,f=0;if(s!=l){o.add(s,s,Pe),o.add(s,l,n?tr:er),r&&r.add(s,s,Ue);for(let c=t.iterRange(s,l-1),a=s;!c.next().done;){if(c.lineBreak){a++,o.add(a,a,Pe),r&&r.add(a,a,Ue);continue}let d=a+c.value.length;if(i)for(;f<e.changes.length;){let u=e.changes[f],h=s+(n?u.fromA:u.fromB),g=s+(n?u.toA:u.toB),p=Math.max(a,h),m=Math.min(d,g);if(p<m&&o.add(p,m,Xn),g<d)f++;else break}a=d}}}function Ke(e){let t=e.state.field(G),{side:n,highlightChanges:i,markGutter:o}=e.state.facet(U),r=n=="a",s=new ee,l=o?new ee:null,{from:f,to:c}=e.viewport;for(let a of t){if((r?a.fromA:a.fromB)>=c)break;(r?a.toA:a.toB)>f&&nr(a,e.state.doc,r,i,s,l)}return{deco:s.finish(),gutter:l&&l.finish()}}const rr=K.define({map:(e,t)=>e.map(t)});W.define({create:()=>L.none,update:(e,t)=>{for(let n of t.effects)if(n.is(rr))return n.value;return e.map(t.changes)},provide:e=>D.decorations.from(e)});const Ae=K.define({map:(e,t)=>t.mapPos(e)});class or extends be{constructor(t){super(),this.lines=t}eq(t){return this.lines==t.lines}toDOM(t){let n=document.createElement("div");return n.className="cm-collapsedLines",n.textContent="⦚ "+t.state.phrase("$ unchanged lines",this.lines)+" ⦚",n.addEventListener("click",i=>{let o=t.posAtDOM(i.target);t.dispatch({effects:Ae.of(o)});let{side:r,sibling:s}=t.state.facet(U);s&&s().dispatch({effects:Ae.of(ir(o,t.state.field(G),r=="a"))})}),n}ignoreEvent(t){return t instanceof MouseEvent}get estimatedHeight(){return 27}}function ir(e,t,n){let i=0,o=0;for(let r=0;;r++){let s=r<t.length?t[r]:null;if(!s||(n?s.fromA:s.fromB)>=e)return o+(e-i);[i,o]=n?[s.toA,s.toB]:[s.toB,s.toA]}}const sr=W.define({create(){return L.none},update(e,t){e=e.map(t.changes);for(let n of t.effects)n.is(Ae)&&(e=e.update({filter:i=>i!=n.value}));return e},provide:e=>D.decorations.from(e)});function lr({margin:e=3,minSize:t=4}){return sr.init(n=>ar(n,e,t))}function ar(e,t,n){let i=new ee,o=e.facet(U).side=="a",r=e.field(G),s=1;for(let l=0;;l++){let f=l<r.length?r[l]:null,c=l?s+t:1,a=f?e.doc.lineAt(o?f.fromA:f.fromB).number-1-t:e.doc.lines,d=a-c+1;if(d>=n&&i.add(e.doc.line(c).from,e.doc.line(a).to,L.replace({widget:new or(d),block:!0})),!f)break;s=e.doc.lineAt(Math.min(e.doc.length,o?f.toA:f.toB)).number}return i.finish()}D.styleModule.of(new Nt({".cm-mergeView":{overflowY:"auto"},".cm-mergeViewEditors":{display:"flex",alignItems:"stretch"},".cm-mergeViewEditor":{flexGrow:1,flexBasis:0,overflow:"hidden"},".cm-merge-revert":{width:"1.6em",flexGrow:0,flexShrink:0,position:"relative"},".cm-merge-revert button":{position:"absolute",display:"block",width:"100%",boxSizing:"border-box",textAlign:"center",background:"none",border:"none",font:"inherit",cursor:"pointer"}}));const cr=D.baseTheme({".cm-mergeView & .cm-scroller, .cm-mergeView &":{height:"auto !important",overflowY:"visible !important"},"&light.cm-merge-a .cm-changedText, &light .cm-deletedChunk .cm-deletedText":{background:"linear-gradient(#ee443366, #ee443366) bottom/100% 2px no-repeat"},"&dark.cm-merge-a .cm-changedText, &dark .cm-deletedChunk .cm-deletedText":{background:"linear-gradient(#ffaa9966, #ffaa9966) bottom/100% 2px no-repeat"},"&light.cm-merge-b .cm-changedText":{background:"linear-gradient(#22bb2266, #22bb2266) bottom/100% 2px no-repeat"},"&dark.cm-merge-b .cm-changedText":{background:"linear-gradient(#88ff8866, #88ff8866) bottom/100% 2px no-repeat"},".cm-insertedLine, .cm-deletedLine":{textDecoration:"none"},".cm-deletedChunk":{paddingLeft:"6px","& .cm-chunkButtons":{position:"absolute",insetInlineEnd:"5px"},"& button":{border:"none",cursor:"pointer",color:"white",margin:"0 2px",borderRadius:"3px","&[name=accept]":{background:"#2a2"},"&[name=reject]":{background:"#d43"}}},".cm-collapsedLines":{padding:"5px 5px 5px 10px",cursor:"pointer"},"&light .cm-collapsedLines":{color:"#444",background:"linear-gradient(to bottom, transparent 0, #f3f3f3 30%, #f3f3f3 70%, transparent 100%)"},"&dark .cm-collapsedLines":{color:"#ddd",background:"linear-gradient(to bottom, transparent 0, #222 30%, #222 70%, transparent 100%)"},".cm-changeGutter":{width:"3px",paddingLeft:"1px"},"&light.cm-merge-a .cm-changedLineGutter, &light .cm-deletedLineGutter":{background:"#e43"},"&dark.cm-merge-a .cm-changedLineGutter, &dark .cm-deletedLineGutter":{background:"#fa9"},"&light.cm-merge-b .cm-changedLineGutter":{background:"#2b2"},"&dark.cm-merge-b .cm-changedLineGutter":{background:"#8f8"}}),me="unknown",fr=new class extends Xe{elementClass="cm-deletedLineGutter"},dr=Se.low(Qe({class:"cm-changeGutter",markers:e=>e.plugin(Le)?.gutter||Ye.empty,widgetMarker:(e,t)=>t instanceof Ct?fr:null}));function ur(e){let t=ie.of(e.textdocDiff.contentBefore.split(`
`));return[Se.low(Le),pr(e.language),cr,D.editorAttributes.of({class:"cm-merge-b"}),U.of({highlightChanges:e.highlightChanges!==!1,markGutter:e.gutter!==!1,syntaxHighlightDeletions:e.syntaxHighlightDeletions!==!1,mergeControls:e.mergeControls!==!1,side:"b"}),se.init(()=>t),e.gutter!==!1?dr:[],e.collapseUnchanged?lr(e.collapseUnchanged):[],G.init(()=>te.buildFromTextdocDiff(e.textdocDiff))]}const pt=K.define(),se=W.define({create:()=>ie.empty,update(e,t){for(let n of t.effects)n.is(pt)&&(e=n.value.doc);return e}}),Z=new WeakMap;class Ct extends be{constructor(t){super(),this.buildDOM=t}dom=null;eq(t){return this.dom==t.dom}toDOM(t){return this.dom||(this.dom=this.buildDOM(t))}}function hr(e,t,n){if(Z.has(t.changes)){const r=pe(Z.get(t.changes)).get(n?.name??me);if(r)return r}let i=r=>{let{highlightChanges:s,syntaxHighlightDeletions:l,mergeControls:f}=e.facet(U),c=r.state.field(se).sliceString(t.fromA,t.endA),a=document.createElement("div");if(a.className=`cm-deletedChunk ${Zn}`,f){let m=a.appendChild(document.createElement("div"));m.className="cm-chunkButtons";let x=m.appendChild(document.createElement("button"));x.name="accept",x.textContent=e.phrase("Accept"),x.onmousedown=A=>{A.preventDefault(),mr(r,r.posAtDOM(a))};let C=m.appendChild(document.createElement("button"));C.name="reject",C.textContent=e.phrase("Reject"),C.onmousedown=A=>{A.preventDefault(),gr(r,r.posAtDOM(a))}}let d=a.appendChild(document.createElement("del")),u=t.changes,h=0,g=!1;function p(m,x,C){for(let A=m;A<x;){let E=x,y=C+(g?" cm-deletedText":""),T=!1;if(s&&h<u.length){let M=Math.max(0,g?u[h].toA:u[h].fromA);M<=E&&(E=M,g&&h++,T=!0)}if(E>A){let M=document.createTextNode(c.slice(A,E));if(y){let O=d.appendChild(document.createElement("span"));O.className=y,O.appendChild(M)}else d.appendChild(M)}A=E,T&&(g=!g)}}if(l&&n){let m=n.parser.parse(c),x=0;nn(m,{style:C=>rn(e,C)},(C,A,E)=>{C>x&&p(x,C,""),p(C,A,E),x=A}),p(x,c.length,"")}else p(0,c.length,"");return a},o=L.widget({block:!0,side:-1,widget:new Ct(i)});return Z.has(t.changes)?pe(Z.get(t.changes)).set(n?.name??me,o):Z.set(t.changes,new Map([[n?.name??me,o]])),o}function mr(e,t){let{state:n}=e,i=t??n.selection.main.head,o=e.state.field(G).find(f=>f.fromB<=i&&f.endB>=i);if(!o)return!1;let r=e.state.sliceDoc(o.fromB,Math.max(o.fromB,o.toB-1)),s=e.state.field(se);o.fromB!=o.toB&&o.toA<=s.length&&(r+=e.state.lineBreak);let l=Gt.of({from:o.fromA,to:Math.min(s.length,o.toA),insert:r},s.length);return e.dispatch({effects:pt.of({doc:l.apply(s),changes:l}),userEvent:"accept"}),!0}function gr(e,t){let{state:n}=e,i=t??n.selection.main.head,o=n.field(G).find(l=>l.fromB<=i&&l.endB>=i);if(!o)return!1;let s=n.field(se).sliceString(o.fromA,Math.max(o.fromA,o.toA-1));return o.fromA!=o.toA&&o.toB<=n.doc.length&&(s+=n.lineBreak),e.dispatch({changes:{from:o.fromB,to:Math.min(n.doc.length,o.toB),insert:s},userEvent:"revert"}),!0}function Je(e,t){let n=new ee;for(let i of e.field(G))n.add(i.fromB,i.fromB,hr(e,i,t));return n.finish()}const pr=e=>W.define({create:t=>Je(t,e),update(t,n){return n.state.field(G,!1)!=n.startState.field(G,!1)?Je(n.state,e):t},provide:t=>D.decorations.from(t)}),xt=K.define(),oe=W.define({create:()=>{},update(e,t){for(let n of t.effects)if(n.is(xt))return n.value;return e}});class Cr extends be{toDOM(){const t=document.createElement("span");return t.className=Sn.modelCursor,t}}const xr=Ee.fromClass(class{decorations;constructor(e){this.decorations=this.buildDecorations(e)}update(e){(e.docChanged||e.viewportChanged||e.state.field(oe)!==e.startState.field(oe))&&(this.decorations=this.buildDecorations(e.view))}buildDecorations(e){const t=new ee,n=e.state.field(oe);if(!n)return L.none;const{doc:i}=e.state,{modelCursorPosition:o,modelSelectionPositionRange:r}=n;if(o!=null)o>=0&&o<=i.length&&t.add(o,o,L.widget({widget:new Cr,side:1}));else if(r!=null){const{start:s,end:l}=r;s>=0&&l<=i.length&&s<l&&t.add(s,l,L.mark({class:`${Cn} !bg-[Highlight]`}))}return t.finish()}},{decorations:e=>e.decorations}),wr=e=>[oe.init(()=>e),xr],le=K.define(),Be=W.define({create(){return null},update(e,t){for(const n of t.effects)if(n.is(le))return n.value;return e}});function wt(e,t){const{selectionStart:n,selectionEnd:i}=t,[o,r]=n.from>i.from?[i.from,n.to]:[n.from,i.to];e.dispatch({selection:Te.create([Te.range(o,r)]),effects:le.of(t)})}function Ar(e,t){wt(e,{selectionStart:t,selectionEnd:t}),e.focus();const i=()=>{e.dispatch({effects:le.of(null)}),window.removeEventListener("mouseup",i)};return window.addEventListener("mouseup",i),!0}function Er(e,t){const n=e.state.field(Be);if(n){const i={...n,selectionEnd:t};wt(e,i)}return!0}const Sr=Ee.fromClass(class{constructor(e){this.view=e,this.updateCursor()}update(e){e.transactions.some(t=>t.effects.some(n=>n.is(le)))&&this.updateCursor()}updateCursor(){this.view.state.field(Be)?this.view.dom.classList.add("cm-line-number-dragging"):this.view.dom.classList.remove("cm-line-number-dragging")}}),br=D.theme({".cm-gutters":{cursor:"default"},"&.cm-line-number-dragging .cm-gutters":{cursor:"text"}});function kr(){return[Be,Sr,br,Rt({domEventHandlers:{mousedown:Ar,mousemove:Er}})]}const $e=qe.define();function At(e,t){return e==null?[]:ur({highlightChanges:!1,gutter:!1,syntaxHighlightDeletions:!0,mergeControls:!1,language:t,textdocDiff:e})}function ge(e,t,n){const i=e.reconfigure(At(t,n??null));if(t==null)return[i];const o=te.buildFromTextdocDiff(t);return[i,gt.of(o)]}const vr=({currentlyStreamingLineIndex:e,value:t,textdocDiff:n,placeholderContent:i,languageCompartment:o,languageCompartmentInit:r,editableCompartment:s,readOnlyCompartment:l,editableInit:f,handleChange:c,extensionsProp:a,editorTheme:d,comments:u,maxLength:h=en,intl:g,toaster:p,modelCursor:m,unifiedMergeViewCompartment:x})=>{const C=[It(i),Vn(g,p,h),on(),o.of(r??[]),s.of([D.editable.of(f)]),l.of([Y.readOnly.of(!f)]),Wt(),Y.allowMultipleSelections.of(!0),sn(),ln(an,{fallback:!0}),cn(),kr(),_t(),fn({markerDOM:A=>{const E=document.createElement("span"),y=Gn.createRoot(E),T=A?v.jsx(On,{className:"icon-sm text-token-text-tertiary"}):v.jsx(Nn,{className:"icon-sm text-token-text-tertiary"});return y.render(T),E}}),wr(m),x.of(At(n,r?.language??null)),...a??[],Ht.of([...dn,...un,...hn,...mn,...gn,pn]),d,jt(u),Fn(),_n(e??null),D.updateListener.of(c),D.domEventHandlers({paste(A){const E=A.clipboardData?.getData("text/plain");E!=null&&et.logEvent(Ze.canvasCodemirrorPaste,{textLength:E.length})}})];return Y.create({doc:t,extensions:C})};function Lr({state:e,parent:t,onUpdateState:n}){const i=(o,r)=>{r.update(o);const s=r.state;n(s)};return new D({state:e,parent:t,dispatchTransactions:i})}const Br="_codemirror_f34te_1",Mr={codemirror:Br},Dr=bn({settings:{background:"var(--main-surface-primary)"}}),ze=e=>e?Dr:kn,Tr=e=>{const[t]=w.useState(()=>new q),{resolvedTheme:n}=Bt(),i=n==="dark";w.useEffect(()=>{e.current?.dispatch({effects:t.reconfigure(ze(i))})},[i,t,e]);const[o]=w.useState(()=>t.of(ze(i)));return o},X=({id:e,children:t,comments:n,commentingOn:i,currentlyStreamingLineIndex:o,hoveredCommentId:r,focusedCommentId:s,placeholder:l="",readonlyReason:f,language:c,value:a,textdocDiff:d,extensions:u,onChange:h,editorRef:g,width:p,modelCursor:m})=>{const x=w.useRef(null),C=w.useRef(null),A=Mt(),E=Dt(),[y,T]=w.useState(null),M=w.useRef(null),[{width:O},H]=nt(),[R]=w.useState(()=>new q),[j]=w.useState(()=>new q),[_]=w.useState(()=>new q),[B]=w.useState(()=>new q),V=w.useRef(h);V.current=h;const I=w.useCallback(({docChanged:b,state:k,transactions:J})=>{for(const N of J)if(N.annotation($e)===!0||N.annotation(ot)===!0)return;if(k.doc.sliceString(k.doc.length-1)===`
`&&b){const N=k.doc.toString();M.current=N,V.current?.(k)}},[]),ae=async b=>b?await vn(b):null,z=w.useCallback(async b=>{const k=await ae(b);k&&C.current?.dispatch({effects:[R.reconfigure(k),...ge(B,d,k?.language)]})},[R,B]),bt=Tr(C),kt=w.useCallback(b=>{if(b===M.current){M.current=null;return}const{current:k}=C;if(!k)return;const J=k.state.doc,N=c!=null?de(c):null,Lt=k.state.update({changes:{from:0,to:J.length,insert:b},effects:[ye.of(n??[]),Ce.of(o??null),...N!=null?[R.reconfigure(N)]:[],...ge(B,d,N?.language)],annotations:$e.of(!0)});k.update([Lt])},[n,o,c,R,d,B]);w.useImperativeHandle(g,()=>({UNSAFE_setValue:kt,codeViewRef:C})),w.useEffect(()=>{z(c)},[c,z]),w.useEffect(()=>{const b=c==null?null:de(c);C.current?.dispatch({effects:ge(B,d,b?.language)})},[B,d]);const ne=f?.isReadonly===!0;w.useEffect(()=>{C.current?.dispatch({effects:[j.reconfigure(D.editable.of(!ne)),_.reconfigure(Y.readOnly.of(ne))]})},[ne,j,_]),w.useEffect(()=>{(i==null||Vt(i))&&C.current?.dispatch({effects:Ft.of(i??null)})},[i]),w.useEffect(()=>{C.current?.dispatch({effects:ye.of(n??[])})},[n]),w.useEffect(()=>{C.current?.dispatch({effects:Pt.of(r)})},[r]),w.useEffect(()=>{C.current?.dispatch({effects:Ut.of(s)})},[s]),w.useEffect(()=>{C.current?.dispatch({effects:xt.of(m)})},[m]),w.useEffect(()=>{C.current?.dispatch({effects:Ce.of(o??null)})},[o]),w.useEffect(()=>{const b=x.current;if(b==null)return;const k=c==null?null:de(c),J=vr({currentlyStreamingLineIndex:o,value:a,placeholderContent:l,editableCompartment:j,readOnlyCompartment:_,editableInit:!ne,languageCompartment:R,languageCompartmentInit:k??null,handleChange:I,extensionsProp:u,editorTheme:bt,intl:A,toaster:E,comments:n??[],modelCursor:m,textdocDiff:d,unifiedMergeViewCompartment:B});T(J);const N=Lr({state:J,parent:b,onUpdateState:T});return C.current=N,()=>{N.destroy()}},[e,u,l]);const vt=w.useCallback(()=>C.current,[C]),Me=[],De=[];return w.Children.forEach(t,b=>{if(!w.isValidElement(b))return;const{type:k}=b;if(k===St)Me.push(b);else if(k===Et)De.push(b);else throw new Error("Invalid Codemirror child: "+JSON.stringify(k))}),v.jsx(Kt.Provider,{value:vt,children:v.jsx(Jt.Provider,{value:y,children:v.jsxs($t.Provider,{value:O,children:[v.jsxs("div",{className:"relative z-0 flex h-full max-w-full",children:[v.jsx("div",{id:e,className:Tt(Mr.codemirror,xn.composer,"flex h-full w-full flex-col items-stretch"),ref:tt(x,H),style:{width:p}}),De]}),Me]})})})},Et=({children:e})=>e,St=({children:e})=>e;X.EditorChildren=Et;X.ContextChildren=St;function yr(e,t){const n=e.doc.lineAt(t.from);return t.from===n.from&&t.to-1===n.to}function Or(e){const t=e.dom.querySelector(".cm-gutters");return t?t.offsetWidth:0}const Nr=({onAddComment:e,isWaitingForCommentResponse:t=!1})=>{const n=zt(),i=Zt(),o=qt(),r=w.useCallback(l=>{const{height:f,width:c}=l,a=n();if(!i||!a)return null;const d=i.selection.asSingle();if(d.ranges.length===0)return null;const u=d.ranges[0],{empty:h,to:g}=u;let{head:p}=u;const{platform:m}=tn();p=m==="web"?p:g;const x=p===g;let C=p;if(x&&yr(i,u)&&(C-=1),h)return null;const{left:A,top:E,bottom:y}=a.contentDOM.getBoundingClientRect(),{left:T,top:M,bottom:O}=pe(a.coordsAtPos(C,x?-1:1)),H=Or(a);function R(){if(x)return Math.max(T-A+H-c,H);let B=T-A+H;return B+c>o&&(B=-(c-o)),B}function j(B){const V=f*2,I=B.contentHeight-(O-y)>V&&window.innerHeight-O>V,ae=O-E+8,z=M-E-f-8;return x&&I||z<0?{top:ae,aboveOrBelow:Oe.BELOW}:{top:z,aboveOrBelow:Oe.ABOVE}}const _=j(a);return{left:R(),top:_.top,aboveOrBelow:_.aboveOrBelow,toolbarSize:l}},[i,n,o]),s=w.useCallback(()=>n()?.dom??null,[n]);return v.jsx(Ln,{onAddComment:e,isWaitingForCommentResponse:t,toolbarType:Bn.CODE,getToolbarPosition:r,getEditorDom:s,getSelectionRange:()=>{const l=n();if(!l)return null;const{state:f}=l,c=f.selection.asSingle();if(c.ranges.length===0)return null;const a=c.ranges[0],{from:d,to:u}=a;return d==null||u==null?null:{from:d,to:u,sourceFrom:d,sourceTo:u}}})};function Gr({diff:e}){return Mn(e?.edits??[]),null}function Rr(e,t,n){const i=n?yn():0;return e<=1e3-i?e-(t?An:0):e-(t?En:0)}const oo=({comments:e,currentlyStreamingLineIndex:t,isWaitingForCommentResponse:n=!1,readonlyReason:i,isRequestActive:o=!1,language:r,value:s,textdocDiff:l,onAcceleratorsExpandedChange:f,onAddComment:c,onAcceptComment:a,onDismissComment:d,onChange:u,onCancelRequest:h,getStableCommentId:g=yt,commentsMode:p=fe.ENABLED,hideToolbar:m,hideAccelerators:x=!1,onSubmitAccelerator:C,modelCursor:A})=>{const E=w.useRef(null),[{width:y},T]=nt(),M=w.useRef(null),O=e.length>0,H=M.current,R=Rr(y,O,Dn(H)??!1),j=ce(({commentingOn:I})=>I),_=ce(({hoveredCommentId:I})=>I),B=ce(({focusedCommentId:I})=>I);w.useEffect(()=>{E.current?.UNSAFE_setValue(s||"")},[s]);const V=y-R;return v.jsx("div",{className:wn.code,ref:tt(T,M),children:v.jsxs(X,{id:"codemirror",comments:p===fe.ALL_HIDDEN?void 0:e,commentingOn:j,currentlyStreamingLineIndex:t,hoveredCommentId:_,focusedCommentId:B,language:r,readonlyReason:i,onChange:u,value:s,textdocDiff:l,editorRef:E,width:R,modelCursor:A,children:[v.jsxs(X.EditorChildren,{children:[!m&&v.jsx(Nr,{onAddComment:c,isWaitingForCommentResponse:n}),p!==fe.ALL_HIDDEN&&v.jsx("div",{className:O?"mr-4":"",children:v.jsx(Tn,{getStableCommentId:g,availableWidth:V,comments:e,commentsMode:p,onAddComment:c,onAcceptComment:a,onDismissComment:d,isWaitingForCommentResponse:n,isRequestActive:o,disableBlockComments:!0})})]}),v.jsxs(X.ContextChildren,{children:[l&&v.jsx(Gr,{diff:l}),!x&&v.jsx(Qt,{isRequestActive:o,readonlyReason:i,onSubmit:C,onCancel:h,actions:Yt,onExpandedChange:f})]})]})})};export{oo as CodeComposer};
//# sourceMappingURL=o8u1y8lkgrc39f4q.js.map
