import{d as qe,n as Ce,m as v,r as x,cd as Bt,G as Mt,H as Dt,aD as Tt,a as yt}from"./813n9w6xsthevnqe.js";import{d as K,S as H,D as L,E as M,c as Y,A as Qe,n as le,F as Ot,V as Se,P as be,g as Ye,i as ee,R as Xe,G as et,W as ke,h as Nt,u as Gt,z as Rt,a as ye,I as It,x as Wt,J as Ht,p as _t,K as jt,L as q,N as Oe,O as Vt,Q as Ft,U as Pt,X as Ut,Y as Kt,Z as $t,_ as zt,$ as Jt,a0 as Zt,a1 as qt,a2 as fe,a3 as Qt,a4 as Yt}from"./b0ncijgdv55x7cx7.js";import{jG as Xt,b1 as tt,jH as en,g as tn}from"./cvslyloecw0ll845.js";import{B as nn,G as rn,y as on,z as sn,x as ln,J as an,A as cn,K as fn,u as dn,v as un,M as hn,O as mn,w as gn,Q as pn}from"./co0bxytn8se92wfi.js";import{d as Cn,Z as xn,e as wn,C as de,f as An,T as En}from"./n4jwwbpp24n48g2l.js";import{s as Sn,v as bn,a as kn,m as nt,g as vn,b as ue,T as Ln,c as Bn,A as Ne,u as Mn,i as Dn,C as Tn,d as yn}from"./k8dwmf7k3rlg8mfo.js";import{ad as On,aG as Nn}from"./h2ot8b85cve7rfg1.js";import{c as Gn}from"./o5wvzd1k9ecpkqax.js";import{u as rt}from"./dnxvfdkv3wpqe4lg.js";import"./do3noacblfokxtip.js";import"./jx5htwp11i31meja.js";import"./dxnvgfyxk4ygc2um.js";import"./nucaizes6lp9j669.js";import"./fzrn137102spawew.js";import"./l3hejy9jng0abm4k.js";import"./kkpy24kni3zeqpn6.js";import"./mppcxblfy674yzt1.js";import"./jyg5rovtxsh6127n.js";import"./hipcbn5pmczpttr7.js";import"./ho8zf22m1x99cwrp.js";import"./mfcm71bp7ug1edw3.js";import"./oxlk5gr8t0v1j2yx.js";const xe=K.define(),ot=H.define({create:()=>null,update:(e,t)=>{const n=t.effects.find(i=>i.is(xe));return n?n.value:e}}),Rn=e=>L.line({class:"!bg-[Highlight]"}).range(e),In=e=>L.line({class:"streaming-line-overlay before:content-['*'] before:bg-white/50 dark:before:bg-gray-750/50"}).range(e),Wn=H.define({create:()=>L.none,update:(e,t)=>{e=e.map(t.changes);const n=t.state.field(ot);if(n==null)return L.none;const i=t.state.doc,o=n+1;if(o>i.lines)return L.none;const r=i.line(o),s=Rn(r.from),a=Array.from({length:i.lines-o},(c,f)=>In(i.line(o+1+f).from));return L.set([s,...a])},provide:e=>M.decorations.from(e)}),Hn=e=>[ot.init(()=>e),Wn];function _n(e){return e.toString().length}function jn(e,t,n){return i=>{if(!i.docChanged)return i;const o=_n(i.state.doc);if(o<=e)return i;n&&t&&Xt(n,t);const r=i.state.doc.sliceString(0,e),s=i.startState.update({changes:{from:0,to:i.startState.doc.length,insert:r}});return tt.logEvent(qe.canvasCodemirrorMaxLength,{maxLength:e,newLength:o}),[s]}}function Vn(e,t,n){return[Y.transactionFilter.of(jn(n,e,t))]}const it=Qe.define();function Fn(){return M.updateListener.of(e=>{if(!e.docChanged||e.state.readOnly)return;const t=e.state.doc;t.length>0&&t.sliceString(t.length-1)!==`
`&&e.view.dispatch({changes:{from:t.length,to:t.length,insert:`
`},annotations:it.of(!0)})})}class E{constructor(t,n,i,o){this.fromA=t,this.toA=n,this.fromB=i,this.toB=o}offset(t,n=t){return new E(this.fromA+t,this.toA+t,this.fromB+n,this.toB+n)}}function P(e,t,n,i,o,r){if(e==i)return[];let s=ve(e,t,n,i,o,r),a=Le(e,t+s,n,i,o+s,r);t+=s,n-=a,o+=s,r-=a;let c=n-t,f=r-o;if(!c||!f)return[new E(t,n,o,r)];if(c>f){let d=e.slice(t,n).indexOf(i.slice(o,r));if(d>-1)return[new E(t,t+d,o,o),new E(t+d+f,n,r,r)]}else if(f>c){let d=i.slice(o,r).indexOf(e.slice(t,n));if(d>-1)return[new E(t,t,o,o+d),new E(n,n,o+d+c,r)]}if(c==1||f==1)return[new E(t,n,o,r)];let l=at(e,t,n,i,o,r);if(l){let[d,u,h]=l;return P(e,t,d,i,o,u).concat(P(e,d+h,n,i,u+h,r))}return Pn(e,t,n,i,o,r)}let Q=1e9;function Pn(e,t,n,i,o,r){let s=n-t,a=r-o;if(Q<1e9&&Math.min(s,a)>Q*16)return Math.min(s,a)>Q*64?[new E(t,n,o,r)]:Ge(e,t,n,i,o,r);let c=Math.ceil((s+a)/2);he.reset(c),me.reset(c);let f=(h,g)=>e.charCodeAt(t+h)==i.charCodeAt(o+g),l=(h,g)=>e.charCodeAt(n-h-1)==i.charCodeAt(r-g-1),d=(s-a)%2!=0?me:null,u=d?null:he;for(let h=0;h<c;h++){if(h>Q)return Ge(e,t,n,i,o,r);let g=he.advance(h,s,a,c,d,!1,f)||me.advance(h,s,a,c,u,!0,l);if(g)return Un(e,t,n,t+g[0],i,o,r,o+g[1])}return[new E(t,n,o,r)]}class st{vec=[];len;start;end;reset(t){this.len=t<<1;for(let n=0;n<this.len;n++)this.vec[n]=-1;this.vec[t+1]=0,this.start=this.end=0}advance(t,n,i,o,r,s,a){for(let c=-t+this.start;c<=t-this.end;c+=2){let f=o+c,l=c==-t||c!=t&&this.vec[f-1]<this.vec[f+1]?this.vec[f+1]:this.vec[f-1]+1,d=l-c;for(;l<n&&d<i&&a(l,d);)l++,d++;if(this.vec[f]=l,l>n)this.end+=2;else if(d>i)this.start+=2;else if(r){let u=o+(n-i)-c;if(u>=0&&u<this.len&&r.vec[u]!=-1)if(s){let h=r.vec[u];if(h>=n-l)return[h,o+h-u]}else{let h=n-r.vec[u];if(l>=h)return[l,d]}}}return null}}const he=new st,me=new st;function Un(e,t,n,i,o,r,s,a){let c=!1;return!J(e,i)&&++i==n&&(c=!0),!J(o,a)&&++a==s&&(c=!0),c?[new E(t,n,r,s)]:P(e,t,i,o,r,a).concat(P(e,i,n,o,a,s))}function lt(e,t){let n=1,i=Math.min(e,t);for(;n<i;)n=n<<1;return n}function ve(e,t,n,i,o,r){if(t==n||t==r||e.charCodeAt(t)!=i.charCodeAt(o))return 0;let s=lt(n-t,r-o);for(let a=t,c=o;;){let f=a+s,l=c+s;if(f>n||l>r||e.slice(a,f)!=i.slice(c,l)){if(s==1)return a-t-(J(e,a)?0:1);s=s>>1}else{if(f==n||l==r)return f-t;a=f,c=l}}}function Le(e,t,n,i,o,r){if(t==n||o==r||e.charCodeAt(n-1)!=i.charCodeAt(r-1))return 0;let s=lt(n-t,r-o);for(let a=n,c=r;;){let f=a-s,l=c-s;if(f<t||l<o||e.slice(f,a)!=i.slice(l,c)){if(s==1)return n-a-(J(e,a)?0:1);s=s>>1}else{if(f==t||l==o)return n-f;a=f,c=l}}}function we(e,t,n,i,o,r,s,a){let c=i.slice(o,r),f=null;for(;;){if(f||s<a)return f;for(let l=t+s;;){J(e,l)||l++;let d=l+s;if(J(e,d)||(d+=d==l+1?1:-1),d>=n)break;let u=e.slice(l,d),h=-1;for(;(h=c.indexOf(u,h+1))!=-1;){let g=ve(e,d,n,i,o+h+u.length,r),p=Le(e,t,l,i,o,o+h),m=u.length+g+p;(!f||f[2]<m)&&(f=[l-p,o+h-p,m])}l=d}if(a<0)return f;s=s>>1}}function at(e,t,n,i,o,r){let s=n-t,a=r-o;if(s<a){let c=at(i,o,r,e,t,n);return c&&[c[1],c[0],c[2]]}return s<4||a*2<s?null:we(e,t,n,i,o,r,Math.floor(s/4),-1)}function Ge(e,t,n,i,o,r){let s=n-t,a=r-o,c;if(s<a){let u=we(i,o,r,e,t,n,Math.floor(s/6),50);c=u&&[u[1],u[0],u[2]]}else c=we(e,t,n,i,o,r,Math.floor(a/6),50);if(!c)return[new E(t,n,o,r)];let[f,l,d]=c;return P(e,t,f,i,o,l).concat(P(e,f+d,n,i,l+d,r))}function ct(e,t){for(let n=1;n<e.length;n++){let i=e[n-1],o=e[n];i.toA>o.fromA-t&&i.toB>o.fromB-t&&(e[n-1]=new E(i.fromA,o.toA,i.fromB,o.toB),e.splice(n--,1))}}function Kn(e,t,n){for(;;){ct(n,1);let i=!1;for(let o=0;o<n.length;o++){let r=n[o],s,a;(s=ve(e,r.fromA,r.toA,t,r.fromB,r.toB))&&(r=n[o]=new E(r.fromA+s,r.toA,r.fromB+s,r.toB)),(a=Le(e,r.fromA,r.toA,t,r.fromB,r.toB))&&(r=n[o]=new E(r.fromA,r.toA-a,r.fromB,r.toB-a));let c=r.toA-r.fromA,f=r.toB-r.fromB;if(c&&f)continue;let l=r.fromA-(o?n[o-1].toA:0),d=(o<n.length-1?n[o+1].fromA:e.length)-r.toA;if(!l||!d)continue;let u=c?e.slice(r.fromA,r.toA):t.slice(r.fromB,r.toB);l<=u.length&&e.slice(r.fromA-l,r.fromA)==u.slice(u.length-l)?(n[o]=new E(r.fromA-l,r.toA-l,r.fromB-l,r.toB-l),i=!0):d<=u.length&&e.slice(r.toA,r.toA+d)==u.slice(0,d)&&(n[o]=new E(r.fromA+d,r.toA+d,r.fromB+d,r.toB+d),i=!0)}if(!i)break}return n}function $n(e,t,n){for(let i=0,o=0;o<e.length;o++){let r=e[o],s=r.toA-r.fromA,a=r.toB-r.fromB;if(s&&a||s>3||a>3){let c=o==e.length-1?t.length:e[o+1].fromA,f=r.fromA-i,l=c-r.toA,d=Ie(t,r.fromA,Math.min(f,5)),u=Re(t,r.toA,Math.min(l,5)),h=r.fromA-d,g=u-r.toA;if(!s||!a){let p=Math.max(s,a),[m,w,C]=s?[t,r.fromA,r.toA]:[n,r.fromB,r.toB];h&&g&&(p>h&&t.slice(d,r.fromA)==m.slice(C-h,C)?(r=e[o]=new E(d,d+s,r.fromB-h,r.toB-h),d=r.fromA,u=Re(t,r.toA,Math.min(c-r.toA,5))):p>g&&t.slice(r.toA,u)==m.slice(w,w+g)&&(r=e[o]=new E(u-s,u,r.fromB+g,r.toB+g),u=r.toA,d=Ie(t,r.fromA,Math.min(r.fromA-i,5))),h=r.fromA-d,g=u-r.toA)}if(h||g)r=e[o]=new E(r.fromA-h,r.toA+g,r.fromB-h,r.toB+g);else if(s){if(!a){let p=He(t,r.fromA,r.toA),m,w=p<0?-1:We(t,r.toA,r.fromA);p>-1&&(m=p-r.fromA)<=l&&t.slice(r.fromA,p)==t.slice(r.toA,r.toA+m)?r=e[o]=r.offset(m):w>-1&&(m=r.toA-w)>=f&&n.slice(r.fromA-m,r.fromA)==n.slice(w,r.toA)&&(r=e[o]=r.offset(-m))}}else{let p=He(n,r.fromB,r.toB),m,w=p<0?-1:We(n,r.toB,r.fromB);p>-1&&(m=p-r.fromB)<=l&&n.slice(r.fromB,p)==n.slice(r.toB,r.toB+m)?r=e[o]=r.offset(m):w>-1&&(m=r.toB-w)>=f&&n.slice(r.fromB-m,r.fromB)==n.slice(w,r.toB)&&(r=e[o]=r.offset(-m))}i=r.toA}}return ct(e,3),e}let F;try{F=new RegExp("[\\p{Alphabetic}\\p{Number}]","u")}catch{}function ft(e){return e>48&&e<58||e>64&&e<91||e>96&&e<123}function dt(e,t){if(t==e.length)return 0;let n=e.charCodeAt(t);return n<192?ft(n)?1:0:F?!ht(n)||t==e.length-1?F.test(String.fromCharCode(n))?1:0:F.test(e.slice(t,t+2))?2:0:0}function ut(e,t){if(!t)return 0;let n=e.charCodeAt(t-1);return n<192?ft(n)?1:0:F?!mt(n)||t==1?F.test(String.fromCharCode(n))?1:0:F.test(e.slice(t-2,t))?2:0:0}function Re(e,t,n){if(t==e.length||!ut(e,t))return t;for(let i=t,o=t+n;;){let r=dt(e,i);if(!r)return i;if(i+=r,i>o)return t}}function Ie(e,t,n){if(!t||!dt(e,t))return t;for(let i=t,o=t-n;;){let r=ut(e,i);if(!r)return i;if(i-=r,i<o)return t}}function We(e,t,n){for(;t!=n;t--)if(e.charCodeAt(t-1)==10)return t;return-1}function He(e,t,n){for(;t!=n;t++)if(e.charCodeAt(t)==10)return t;return-1}const ht=e=>e>=55296&&e<=56319,mt=e=>e>=56320&&e<=57343;function J(e,t){return!t||t==e.length||!ht(e.charCodeAt(t-1))||!mt(e.charCodeAt(t))}function zn(e,t,n){return Q=(n?.scanLimit??1e9)>>1,Kn(e,t,P(e,0,e.length,t,0,t.length))}function gt(e,t,n){return $n(zn(e,t,n),e,t)}function Jn(e){const{start:t,end:n}=e.positionBefore,{start:i,end:o}=e.positionAfter;return new E(t,n,i,o)}class te{constructor(t,n,i,o,r){this.changes=t,this.fromA=n,this.toA=i,this.fromB=o,this.toB=r}offset(t,n){return t||n?new te(this.changes,this.fromA+t,this.toA+t,this.fromB+n,this.toB+n):this}get endA(){return Math.max(this.fromA,this.toA)}get endB(){return Math.max(this.fromB,this.toB)}static buildFromTextdocDiff(t){const i=t.edits.map(Jn);return i.sort((r,s)=>r.fromA-s.fromA),Ae(i,le.of(t.contentBefore.split(`
`)),le.of(t.contentAfter.split(`
`)),0,0)}static build(t,n,i){const o=gt(t.toString(),n.toString(),i);return Ae(o,t,n,0,0)}static updateA(t,n,i,o,r){return Pe(Fe(t,o,!0,i.length),t,n,i,r)}static updateB(t,n,i,o,r){return Pe(Fe(t,o,!1,n.length),t,n,i,r)}}function _e(e,t,n,i){let o=n.lineAt(e),r=i.lineAt(t);return o.to==e&&r.to==t&&e<n.length&&t<i.length?[e+1,t+1]:[o.from,r.from]}function je(e,t,n,i){let o=n.lineAt(e),r=i.lineAt(t);return o.from==e&&r.from==t?[e,t]:[o.to+1,r.to+1]}function Ae(e,t,n,i,o){let r=[];for(let s=0;s<e.length;s++){let a=e[s],[c,f]=_e(a.fromA+i,a.fromB+o,t,n),[l,d]=je(a.toA+i,a.toB+o,t,n),u=[a.offset(-c+i,-f+o)];for(;s<e.length-1;){let h=e[s+1],[g,p]=_e(h.fromA+i,h.fromB+o,t,n);if(g>l+1&&p>d+1)break;u.push(h.offset(-c+i,-f+o)),[l,d]=je(h.toA+i,h.toB+o,t,n),s++}r.push(new te(u,c,Math.max(c,l),f,Math.max(f,d)))}return r}const ie=1e3;function Ve(e,t,n,i){let o=0,r=e.length;for(;;){if(o==r){let l=0,d=0;o&&({toA:l,toB:d}=e[o-1]);let u=t-(n?l:d);return[l+u,d+u]}let s=o+r>>1,a=e[s],[c,f]=n?[a.fromA,a.toA]:[a.fromB,a.toB];if(c>t)r=s;else if(f<=t)o=s+1;else return i?[a.fromA,a.fromB]:[a.toA,a.toB]}}function Fe(e,t,n,i){let o=[];return t.iterChangedRanges((r,s,a,c)=>{let f=0,l=n?t.length:i,d=0,u=n?i:t.length;r>ie&&([f,d]=Ve(e,r-ie,n,!0)),s<t.length-ie&&([l,u]=Ve(e,s+ie,n,!1));let h=c-a-(s-r),g,[p,m]=n?[h,0]:[0,h];o.length&&(g=o[o.length-1]).toA>=f?o[o.length-1]={fromA:g.fromA,fromB:g.fromB,toA:l,toB:u,diffA:g.diffA+p,diffB:g.diffB+m}:o.push({fromA:f,toA:l,fromB:d,toB:u,diffA:p,diffB:m})}),o}function Pe(e,t,n,i,o){if(!e.length)return t;let r=[];for(let s=0,a=0,c=0,f=0;;s++){let l=s==e.length?null:e[s],d=l?l.fromA+a:n.length,u=l?l.fromB+c:i.length;for(;f<t.length;){let m=t[f];if(m.toA+a>d||m.toB+c>u)break;r.push(m.offset(a,c)),f++}if(!l)break;let h=l.toA+a+l.diffA,g=l.toB+c+l.diffB,p=gt(n.sliceString(d,h),i.sliceString(u,g),o);for(let m of Ae(p,n,i,d,u))r.push(m);for(a+=l.diffA,c+=l.diffB;f<t.length;){let m=t[f];if(m.fromA+a>h&&m.fromB+c>g)break;f++}}return r}const U=Ot.define({combine:e=>e[0]}),pt=K.define(),G=H.define({create(){return null},update(e,t){for(let n of t.effects)n.is(pt)&&(e=n.value);return e}}),Zn="bg-red-100 dark:bg-red-600/30",qn="bg-green-100 dark:bg-green-600/30",Be=Se.fromClass(class{deco;gutter;constructor(e){({deco:this.deco,gutter:this.gutter}=$e(e))}update(e){(e.docChanged||e.viewportChanged||Qn(e.startState,e.state)||Yn(e.startState,e.state))&&({deco:this.deco,gutter:this.gutter}=$e(e.view))}},{decorations:e=>e.deco});be.low(Ye({class:"cm-changeGutter",markers:e=>e.plugin(Be)?.gutter||Xe.empty}));function Qn(e,t){return e.field(G,!1)!=t.field(G,!1)}function Yn(e,t){return e.facet(U)!=t.facet(U)}const Ue=L.line({class:`cm-changedLine ${qn}`}),Xn=L.mark({class:"cm-changedText"}),er=L.mark({tagName:"ins",class:"cm-insertedLine"}),tr=L.mark({tagName:"del",class:"cm-deletedLine"}),Ke=new class extends et{elementClass="cm-changedLineGutter"};function nr(e,t,n,i,o,r){let s=n?e.fromA:e.fromB,a=n?e.toA:e.toB,c=0;if(s!=a){o.add(s,s,Ue),o.add(s,a,n?tr:er),r&&r.add(s,s,Ke);for(let f=t.iterRange(s,a-1),l=s;!f.next().done;){if(f.lineBreak){l++,o.add(l,l,Ue),r&&r.add(l,l,Ke);continue}let d=l+f.value.length;if(i)for(;c<e.changes.length;){let u=e.changes[c],h=s+(n?u.fromA:u.fromB),g=s+(n?u.toA:u.toB),p=Math.max(l,h),m=Math.min(d,g);if(p<m&&o.add(p,m,Xn),g<d)c++;else break}l=d}}}function $e(e){let t=e.state.field(G),{side:n,highlightChanges:i,markGutter:o}=e.state.facet(U),r=n=="a",s=new ee,a=o?new ee:null,{from:c,to:f}=e.viewport;for(let l of t){if((r?l.fromA:l.fromB)>=f)break;(r?l.toA:l.toB)>c&&nr(l,e.state.doc,r,i,s,a)}return{deco:s.finish(),gutter:a&&a.finish()}}const rr=K.define({map:(e,t)=>e.map(t)});H.define({create:()=>L.none,update:(e,t)=>{for(let n of t.effects)if(n.is(rr))return n.value;return e.map(t.changes)},provide:e=>M.decorations.from(e)});const Ee=K.define({map:(e,t)=>t.mapPos(e)});class or extends ke{constructor(t){super(),this.lines=t}eq(t){return this.lines==t.lines}toDOM(t){let n=document.createElement("div");return n.className="cm-collapsedLines",n.textContent="⦚ "+t.state.phrase("$ unchanged lines",this.lines)+" ⦚",n.addEventListener("click",i=>{let o=t.posAtDOM(i.target);t.dispatch({effects:Ee.of(o)});let{side:r,sibling:s}=t.state.facet(U);s&&s().dispatch({effects:Ee.of(ir(o,t.state.field(G),r=="a"))})}),n}ignoreEvent(t){return t instanceof MouseEvent}get estimatedHeight(){return 27}}function ir(e,t,n){let i=0,o=0;for(let r=0;;r++){let s=r<t.length?t[r]:null;if(!s||(n?s.fromA:s.fromB)>=e)return o+(e-i);[i,o]=n?[s.toA,s.toB]:[s.toB,s.toA]}}const sr=H.define({create(){return L.none},update(e,t){e=e.map(t.changes);for(let n of t.effects)n.is(Ee)&&(e=e.update({filter:i=>i!=n.value}));return e},provide:e=>M.decorations.from(e)});function lr({margin:e=3,minSize:t=4}){return sr.init(n=>ar(n,e,t))}function ar(e,t,n){let i=new ee,o=e.facet(U).side=="a",r=e.field(G),s=1;for(let a=0;;a++){let c=a<r.length?r[a]:null,f=a?s+t:1,l=c?e.doc.lineAt(o?c.fromA:c.fromB).number-1-t:e.doc.lines,d=l-f+1;if(d>=n&&i.add(e.doc.line(f).from,e.doc.line(l).to,L.replace({widget:new or(d),block:!0})),!c)break;s=e.doc.lineAt(Math.min(e.doc.length,o?c.toA:c.toB)).number}return i.finish()}M.styleModule.of(new Nt({".cm-mergeView":{overflowY:"auto"},".cm-mergeViewEditors":{display:"flex",alignItems:"stretch"},".cm-mergeViewEditor":{flexGrow:1,flexBasis:0,overflow:"hidden"},".cm-merge-revert":{width:"1.6em",flexGrow:0,flexShrink:0,position:"relative"},".cm-merge-revert button":{position:"absolute",display:"block",width:"100%",boxSizing:"border-box",textAlign:"center",background:"none",border:"none",font:"inherit",cursor:"pointer"}}));const cr=M.baseTheme({".cm-mergeView & .cm-scroller, .cm-mergeView &":{height:"auto !important",overflowY:"visible !important"},"&light.cm-merge-a .cm-changedText, &light .cm-deletedChunk .cm-deletedText":{background:"linear-gradient(#ee443366, #ee443366) bottom/100% 2px no-repeat"},"&dark.cm-merge-a .cm-changedText, &dark .cm-deletedChunk .cm-deletedText":{background:"linear-gradient(#ffaa9966, #ffaa9966) bottom/100% 2px no-repeat"},"&light.cm-merge-b .cm-changedText":{background:"linear-gradient(#22bb2266, #22bb2266) bottom/100% 2px no-repeat"},"&dark.cm-merge-b .cm-changedText":{background:"linear-gradient(#88ff8866, #88ff8866) bottom/100% 2px no-repeat"},".cm-insertedLine, .cm-deletedLine":{textDecoration:"none"},".cm-deletedChunk":{paddingLeft:"6px","& .cm-chunkButtons":{position:"absolute",insetInlineEnd:"5px"},"& button":{border:"none",cursor:"pointer",color:"white",margin:"0 2px",borderRadius:"3px","&[name=accept]":{background:"#2a2"},"&[name=reject]":{background:"#d43"}}},".cm-collapsedLines":{padding:"5px 5px 5px 10px",cursor:"pointer"},"&light .cm-collapsedLines":{color:"#444",background:"linear-gradient(to bottom, transparent 0, #f3f3f3 30%, #f3f3f3 70%, transparent 100%)"},"&dark .cm-collapsedLines":{color:"#ddd",background:"linear-gradient(to bottom, transparent 0, #222 30%, #222 70%, transparent 100%)"},".cm-changeGutter":{width:"3px",paddingLeft:"1px"},"&light.cm-merge-a .cm-changedLineGutter, &light .cm-deletedLineGutter":{background:"#e43"},"&dark.cm-merge-a .cm-changedLineGutter, &dark .cm-deletedLineGutter":{background:"#fa9"},"&light.cm-merge-b .cm-changedLineGutter":{background:"#2b2"},"&dark.cm-merge-b .cm-changedLineGutter":{background:"#8f8"}}),ge="unknown",fr=new class extends et{elementClass="cm-deletedLineGutter"},dr=be.low(Ye({class:"cm-changeGutter",markers:e=>e.plugin(Be)?.gutter||Xe.empty,widgetMarker:(e,t)=>t instanceof xt?fr:null}));function ur(e){let t=le.of(e.textdocDiff.contentBefore.split(`
`));return[be.low(Be),pr(e.language),cr,M.editorAttributes.of({class:"cm-merge-b"}),U.of({highlightChanges:e.highlightChanges!==!1,markGutter:e.gutter!==!1,syntaxHighlightDeletions:e.syntaxHighlightDeletions!==!1,mergeControls:e.mergeControls!==!1,side:"b"}),ae.init(()=>t),e.gutter!==!1?dr:[],e.collapseUnchanged?lr(e.collapseUnchanged):[],G.init(()=>te.buildFromTextdocDiff(e.textdocDiff))]}const Ct=K.define(),ae=H.define({create:()=>le.empty,update(e,t){for(let n of t.effects)n.is(Ct)&&(e=n.value.doc);return e}}),Z=new WeakMap;class xt extends ke{constructor(t){super(),this.buildDOM=t}dom=null;eq(t){return this.dom==t.dom}toDOM(t){return this.dom||(this.dom=this.buildDOM(t))}}function hr(e,t,n){if(Z.has(t.changes)){const r=Ce(Z.get(t.changes)).get(n?.name??ge);if(r)return r}let i=r=>{let{highlightChanges:s,syntaxHighlightDeletions:a,mergeControls:c}=e.facet(U),f=r.state.field(ae).sliceString(t.fromA,t.endA),l=document.createElement("div");if(l.className=`cm-deletedChunk ${Zn}`,c){let m=l.appendChild(document.createElement("div"));m.className="cm-chunkButtons";let w=m.appendChild(document.createElement("button"));w.name="accept",w.textContent=e.phrase("Accept"),w.onmousedown=A=>{A.preventDefault(),mr(r,r.posAtDOM(l))};let C=m.appendChild(document.createElement("button"));C.name="reject",C.textContent=e.phrase("Reject"),C.onmousedown=A=>{A.preventDefault(),gr(r,r.posAtDOM(l))}}let d=l.appendChild(document.createElement("del")),u=t.changes,h=0,g=!1;function p(m,w,C){for(let A=m;A<w;){let S=w,D=C+(g?" cm-deletedText":""),T=!1;if(s&&h<u.length){let B=Math.max(0,g?u[h].toA:u[h].fromA);B<=S&&(S=B,g&&h++,T=!0)}if(S>A){let B=document.createTextNode(f.slice(A,S));if(D){let I=d.appendChild(document.createElement("span"));I.className=D,I.appendChild(B)}else d.appendChild(B)}A=S,T&&(g=!g)}}if(a&&n){let m=n.parser.parse(f),w=0;nn(m,{style:C=>rn(e,C)},(C,A,S)=>{C>w&&p(w,C,""),p(C,A,S),w=A}),p(w,f.length,"")}else p(0,f.length,"");return l},o=L.widget({block:!0,side:-1,widget:new xt(i)});return Z.has(t.changes)?Ce(Z.get(t.changes)).set(n?.name??ge,o):Z.set(t.changes,new Map([[n?.name??ge,o]])),o}function mr(e,t){let{state:n}=e,i=t??n.selection.main.head,o=e.state.field(G).find(c=>c.fromB<=i&&c.endB>=i);if(!o)return!1;let r=e.state.sliceDoc(o.fromB,Math.max(o.fromB,o.toB-1)),s=e.state.field(ae);o.fromB!=o.toB&&o.toA<=s.length&&(r+=e.state.lineBreak);let a=Gt.of({from:o.fromA,to:Math.min(s.length,o.toA),insert:r},s.length);return e.dispatch({effects:Ct.of({doc:a.apply(s),changes:a}),userEvent:"accept"}),!0}function gr(e,t){let{state:n}=e,i=t??n.selection.main.head,o=n.field(G).find(a=>a.fromB<=i&&a.endB>=i);if(!o)return!1;let s=n.field(ae).sliceString(o.fromA,Math.max(o.fromA,o.toA-1));return o.fromA!=o.toA&&o.toB<=n.doc.length&&(s+=n.lineBreak),e.dispatch({changes:{from:o.fromB,to:Math.min(n.doc.length,o.toB),insert:s},userEvent:"revert"}),!0}function ze(e,t){let n=new ee;for(let i of e.field(G))n.add(i.fromB,i.fromB,hr(e,i,t));return n.finish()}const pr=e=>H.define({create:t=>ze(t,e),update(t,n){return n.state.field(G,!1)!=n.startState.field(G,!1)?ze(n.state,e):t},provide:t=>M.decorations.from(t)}),wt=K.define(),se=H.define({create:()=>{},update(e,t){for(let n of t.effects)if(n.is(wt))return n.value;return e}});class Cr extends ke{toDOM(){const t=document.createElement("span");return t.className=Sn.modelCursor,t}}const xr=Se.fromClass(class{decorations;constructor(e){this.decorations=this.buildDecorations(e)}update(e){(e.docChanged||e.viewportChanged||e.state.field(se)!==e.startState.field(se))&&(this.decorations=this.buildDecorations(e.view))}buildDecorations(e){const t=new ee,n=e.state.field(se);if(!n)return L.none;const{doc:i}=e.state,{modelCursorPosition:o,modelSelectionPositionRange:r}=n;if(o!=null)o>=0&&o<=i.length&&t.add(o,o,L.widget({widget:new Cr,side:1}));else if(r!=null){const{start:s,end:a}=r;s>=0&&a<=i.length&&s<a&&t.add(s,a,L.mark({class:`${Cn} !bg-[Highlight]`}))}return t.finish()}},{decorations:e=>e.decorations}),wr=e=>[se.init(()=>e),xr],ce=K.define(),Me=H.define({create(){return null},update(e,t){for(const n of t.effects)if(n.is(ce))return n.value;return e}});function At(e,t){const{selectionStart:n,selectionEnd:i}=t,[o,r]=n.from>i.from?[i.from,n.to]:[n.from,i.to];e.dispatch({selection:ye.create([ye.range(o,r)]),effects:ce.of(t)})}function Ar(e,t){At(e,{selectionStart:t,selectionEnd:t}),e.focus();const i=()=>{e.dispatch({effects:ce.of(null)}),window.removeEventListener("mouseup",i)};return window.addEventListener("mouseup",i),!0}function Er(e,t){const n=e.state.field(Me);if(n){const i={...n,selectionEnd:t};At(e,i)}return!0}const Sr=Se.fromClass(class{constructor(e){this.view=e,this.updateCursor()}update(e){e.transactions.some(t=>t.effects.some(n=>n.is(ce)))&&this.updateCursor()}updateCursor(){this.view.state.field(Me)?this.view.dom.classList.add("cm-line-number-dragging"):this.view.dom.classList.remove("cm-line-number-dragging")}}),br=M.theme({".cm-gutters":{cursor:"default"},"&.cm-line-number-dragging .cm-gutters":{cursor:"text"}});function kr(){return[Me,Sr,br,Rt({domEventHandlers:{mousedown:Ar,mousemove:Er}})]}const Je=Qe.define();function Et(e,t){return e==null?[]:ur({highlightChanges:!1,gutter:!1,syntaxHighlightDeletions:!0,mergeControls:!1,language:t,textdocDiff:e})}function pe(e,t,n){const i=e.reconfigure(Et(t,n??null));if(t==null)return[i];const o=te.buildFromTextdocDiff(t);return[i,pt.of(o)]}const vr=({currentlyStreamingLineIndex:e,value:t,textdocDiff:n,placeholderContent:i,languageCompartment:o,languageCompartmentInit:r,editableCompartment:s,readOnlyCompartment:a,editableInit:c,handleChange:f,extensionsProp:l,editorTheme:d,comments:u,maxLength:h=en,intl:g,toaster:p,modelCursor:m,unifiedMergeViewCompartment:w})=>{const C=[It(i),Vn(g,p,h),on(),o.of(r??[]),s.of([M.editable.of(c)]),a.of([Y.readOnly.of(!c)]),Wt(),Y.allowMultipleSelections.of(!0),sn(),ln(an,{fallback:!0}),cn(),kr(),Ht(),fn({markerDOM:A=>{const S=document.createElement("span"),D=Gn.createRoot(S),T=A?v.jsx(On,{className:"icon-sm text-token-text-tertiary"}):v.jsx(Nn,{className:"icon-sm text-token-text-tertiary"});return D.render(T),S}}),wr(m),w.of(Et(n,r?.language??null)),...l??[],_t.of([...dn,...un,...hn,...mn,...gn,pn]),d,jt(u),Fn(),Hn(e??null),M.updateListener.of(f),M.domEventHandlers({paste(A){const S=A.clipboardData?.getData("text/plain");S!=null&&tt.logEvent(qe.canvasCodemirrorPaste,{textLength:S.length})}})];return Y.create({doc:t,extensions:C})};function Lr({state:e,parent:t,onUpdateState:n}){const i=(o,r)=>{r.update(o);const s=r.state;n(s)};return new M({state:e,parent:t,dispatchTransactions:i})}const Br="_codemirror_f34te_1",Mr={codemirror:Br},Dr=bn({settings:{background:"var(--main-surface-primary)"}}),Ze=e=>e?Dr:kn,Tr=e=>{const[t]=x.useState(()=>new q),{resolvedTheme:n}=Bt(),i=n==="dark";x.useEffect(()=>{e.current?.dispatch({effects:t.reconfigure(Ze(i))})},[i,t,e]);const[o]=x.useState(()=>t.of(Ze(i)));return o},X=({id:e,children:t,comments:n,commentingOn:i,currentlyStreamingLineIndex:o,hoveredCommentId:r,focusedCommentId:s,placeholder:a="",readonlyReason:c,language:f,value:l,textdocDiff:d,extensions:u,onChange:h,editorRef:g,width:p,modelCursor:m})=>{const w=x.useRef(null),C=x.useRef(null),A=Mt(),S=Dt(),[D,T]=x.useState(null),B=x.useRef(null),[{width:I},_]=rt(),[O]=x.useState(()=>new q),[j]=x.useState(()=>new q),[V]=x.useState(()=>new q),[y]=x.useState(()=>new q),R=x.useRef(h);R.current=h;const $=x.useCallback(({docChanged:b,state:k,transactions:z})=>{for(const N of z)if(N.annotation(Je)===!0||N.annotation(it)===!0)return;if(k.doc.sliceString(k.doc.length-1)===`
`&&b){const N=k.doc.toString();B.current=N,R.current?.(k)}},[]),W=async b=>b?await vn(b):null,ne=x.useCallback(async b=>{const k=await W(b);k&&C.current?.dispatch({effects:[O.reconfigure(k),...pe(y,d,k?.language)]})},[O,y]),re=Tr(C),kt=x.useCallback(b=>{if(b===B.current){B.current=null;return}const{current:k}=C;if(!k)return;const z=k.state.doc,N=f!=null?ue(f):null,Lt=k.state.update({changes:{from:0,to:z.length,insert:b},effects:[Oe.of(n??[]),xe.of(o??null),...N!=null?[O.reconfigure(N)]:[],...pe(y,d,N?.language)],annotations:Je.of(!0)});k.update([Lt])},[n,o,f,O,d,y]);x.useImperativeHandle(g,()=>({UNSAFE_setValue:kt,codeViewRef:C})),x.useEffect(()=>{ne(f)},[f,ne]),x.useEffect(()=>{const b=f==null?null:ue(f);C.current?.dispatch({effects:pe(y,d,b?.language)})},[y,d]);const oe=c?.isReadonly===!0;x.useEffect(()=>{C.current?.dispatch({effects:[j.reconfigure(M.editable.of(!oe)),V.reconfigure(Y.readOnly.of(oe))]})},[oe,j,V]),x.useEffect(()=>{(i==null||Vt(i))&&C.current?.dispatch({effects:Ft.of(i??null)})},[i]),x.useEffect(()=>{C.current?.dispatch({effects:Oe.of(n??[])})},[n]),x.useEffect(()=>{C.current?.dispatch({effects:Pt.of(r)})},[r]),x.useEffect(()=>{C.current?.dispatch({effects:Ut.of(s)})},[s]),x.useEffect(()=>{C.current?.dispatch({effects:wt.of(m)})},[m]),x.useEffect(()=>{C.current?.dispatch({effects:xe.of(o??null)})},[o]),x.useEffect(()=>{const b=w.current;if(b==null)return;const k=f==null?null:ue(f),z=vr({currentlyStreamingLineIndex:o,value:l,placeholderContent:a,editableCompartment:j,readOnlyCompartment:V,editableInit:!oe,languageCompartment:O,languageCompartmentInit:k??null,handleChange:$,extensionsProp:u,editorTheme:re,intl:A,toaster:S,comments:n??[],modelCursor:m,textdocDiff:d,unifiedMergeViewCompartment:y});T(z);const N=Lr({state:z,parent:b,onUpdateState:T});return C.current=N,()=>{N.destroy()}},[e,u,a]);const vt=x.useCallback(()=>C.current,[C]),De=[],Te=[];return x.Children.forEach(t,b=>{if(!x.isValidElement(b))return;const{type:k}=b;if(k===bt)De.push(b);else if(k===St)Te.push(b);else throw new Error("Invalid Codemirror child: "+JSON.stringify(k))}),v.jsx(Kt.Provider,{value:vt,children:v.jsx($t.Provider,{value:D,children:v.jsxs(zt.Provider,{value:I,children:[v.jsxs("div",{className:"relative z-0 flex h-full max-w-full",children:[v.jsx("div",{id:e,className:Tt(Mr.codemirror,xn.composer,"flex h-full w-full flex-col items-stretch"),ref:nt(w,_),style:{width:p}}),Te]}),De]})})})},St=({children:e})=>e,bt=({children:e})=>e;X.EditorChildren=St;X.ContextChildren=bt;function yr(e,t){const n=e.doc.lineAt(t.from);return t.from===n.from&&t.to-1===n.to}function Or(e){const t=e.dom.querySelector(".cm-gutters");return t?t.offsetWidth:0}const Nr=({onAddComment:e,isSendDisabled:t=!1,isWaitingForCommentResponse:n=!1})=>{const i=Jt(),o=Zt(),r=qt(),s=x.useCallback(c=>{const{height:f,width:l}=c,d=i();if(!o||!d)return null;const u=o.selection.asSingle();if(u.ranges.length===0)return null;const h=u.ranges[0],{empty:g,to:p}=h;let{head:m}=h;const{platform:w}=tn();m=w==="web"?m:p;const C=m===p;let A=m;if(C&&yr(o,h)&&(A-=1),g)return null;const{left:S,top:D,bottom:T}=d.contentDOM.getBoundingClientRect(),{left:B,top:I,bottom:_}=Ce(d.coordsAtPos(A,C?-1:1)),O=Or(d);function j(){if(C)return Math.max(B-S+O-l,O);let R=B-S+O;return R+l>r&&(R=-(l-r)),R}function V(R){const $=f*2,W=R.contentHeight-(_-T)>$&&window.innerHeight-_>$,ne=_-D+8,re=I-D-f-8;return C&&W||re<0?{top:ne,aboveOrBelow:Ne.BELOW}:{top:re,aboveOrBelow:Ne.ABOVE}}const y=V(d);return{left:j(),top:y.top,aboveOrBelow:y.aboveOrBelow,toolbarSize:c}},[o,i,r]),a=x.useCallback(()=>i()?.dom??null,[i]);return v.jsx(Ln,{onAddComment:e,isWaitingForCommentResponse:n,isSendDisabled:t,toolbarType:Bn.CODE,getToolbarPosition:s,getEditorDom:a,getSelectionRange:()=>{const c=i();if(!c)return null;const{state:f}=c,l=f.selection.asSingle();if(l.ranges.length===0)return null;const d=l.ranges[0],{from:u,to:h}=d;return u==null||h==null?null:{from:u,to:h,sourceFrom:u,sourceTo:h}}})};function Gr({diff:e}){return Mn(e?.edits??[]),null}function Rr(e,t,n){const i=n?yn():0;return e<=1e3-i?e-(t?An:0):e-(t?En:0)}const oo=({comments:e,currentlyStreamingLineIndex:t,isWaitingForCommentResponse:n=!1,isSendDisabled:i=!1,readonlyReason:o,isRequestActive:r=!1,language:s,value:a,textdocDiff:c,onAcceleratorsExpandedChange:f,onAddComment:l,onAcceptComment:d,onDismissComment:u,onChange:h,onCancelRequest:g,getStableCommentId:p=yt,commentsMode:m=de.ENABLED,hideToolbar:w,hideAccelerators:C=!1,onSubmitAccelerator:A,modelCursor:S})=>{const D=x.useRef(null),[{width:T},B]=rt(),I=x.useRef(null),_=e.length>0,O=I.current,j=Rr(T,_,Dn(O)??!1),V=fe(({commentingOn:W})=>W),y=fe(({hoveredCommentId:W})=>W),R=fe(({focusedCommentId:W})=>W);x.useEffect(()=>{D.current?.UNSAFE_setValue(a||"")},[a]);const $=T-j;return v.jsx("div",{className:wn.code,ref:nt(B,I),children:v.jsxs(X,{id:"codemirror",comments:m===de.ALL_HIDDEN?void 0:e,commentingOn:V,currentlyStreamingLineIndex:t,hoveredCommentId:y,focusedCommentId:R,language:s,readonlyReason:o,onChange:h,value:a,textdocDiff:c,editorRef:D,width:j,modelCursor:S,children:[v.jsxs(X.EditorChildren,{children:[!w&&v.jsx(Nr,{onAddComment:l,isSendDisabled:i,isWaitingForCommentResponse:n}),m!==de.ALL_HIDDEN&&v.jsx("div",{className:_?"mr-4":"",children:v.jsx(Tn,{getStableCommentId:p,availableWidth:$,comments:e,commentsMode:m,onAddComment:l,onAcceptComment:d,onDismissComment:u,isWaitingForCommentResponse:n,isRequestActive:r,disableBlockComments:!0})})]}),v.jsxs(X.ContextChildren,{children:[c&&v.jsx(Gr,{diff:c}),!C&&v.jsx(Qt,{isRequestActive:r,readonlyReason:o,onSubmit:A,onCancel:g,actions:Yt,onExpandedChange:f})]})]})})};export{oo as CodeComposer};
//# sourceMappingURL=epzzumov4chb7crm.js.map
