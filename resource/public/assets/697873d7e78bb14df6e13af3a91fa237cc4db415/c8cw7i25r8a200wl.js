import{aI as R}from"./dfm2yceao9m2ilo9.js";var ie=Object.defineProperty,D=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,G=(u,l,s)=>l in u?ie(u,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[l]=s,z=(u,l)=>{for(var s in l||(l={}))Y.call(l,s)&&G(u,s,l[s]);if(D)for(var s of D(l))V.call(l,s)&&G(u,s,l[s]);return u},U=(u,l)=>{var s={};for(var c in u)Y.call(u,c)&&l.indexOf(c)<0&&(s[c]=u[c]);if(u!=null&&D)for(var c of D(u))l.indexOf(c)<0&&V.call(u,c)&&(s[c]=u[c]);return s};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var y;(u=>{const l=class d{constructor(e,n,t,r){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<d.MIN_VERSION||e>d.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let o=[];for(let i=0;i<this.size;i++)o.push(!1);for(let i=0;i<this.size;i++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(t);if(this.drawCodewords(a),r==-1){let i=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const f=this.getPenaltyScore();f<i&&(r=m,i=f),this.applyMask(m)}}g(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(e,n){const t=u.QrSegment.makeSegments(e);return d.encodeSegments(t,n)}static encodeBinary(e,n){const t=u.QrSegment.makeBytes(e);return d.encodeSegments([t],n)}static encodeSegments(e,n,t=1,r=40,o=-1,a=!0){if(!(d.MIN_VERSION<=t&&t<=r&&r<=d.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let i,m;for(i=t;;i++){const E=d.getNumDataCodewords(i,n)*8,p=A.getTotalBits(e,i);if(p<=E){m=p;break}if(i>=r)throw new RangeError("Data too long")}for(const E of[d.Ecc.MEDIUM,d.Ecc.QUARTILE,d.Ecc.HIGH])a&&m<=d.getNumDataCodewords(i,E)*8&&(n=E);let f=[];for(const E of e){s(E.mode.modeBits,4,f),s(E.numChars,E.mode.numCharCountBits(i),f);for(const p of E.getData())f.push(p)}g(f.length==m);const P=d.getNumDataCodewords(i,n)*8;g(f.length<=P),s(0,Math.min(4,P-f.length),f),s(0,(8-f.length%8)%8,f),g(f.length%8==0);for(let E=236;f.length<P;E^=253)s(E,8,f);let M=[];for(;M.length*8<f.length;)M.push(0);return f.forEach((E,p)=>M[p>>>3]|=E<<7-(p&7)),new d(i,n,M,o)}getModule(e,n){return 0<=e&&e<this.size&&0<=n&&n<this.size&&this.modules[n][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),n=e.length;for(let t=0;t<n;t++)for(let r=0;r<n;r++)t==0&&r==0||t==0&&r==n-1||t==n-1&&r==0||this.drawAlignmentPattern(e[t],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const n=this.errorCorrectionLevel.formatBits<<3|e;let t=n;for(let o=0;o<10;o++)t=t<<1^(t>>>9)*1335;const r=(n<<10|t)^21522;g(r>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,c(r,o));this.setFunctionModule(8,7,c(r,6)),this.setFunctionModule(8,8,c(r,7)),this.setFunctionModule(7,8,c(r,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,c(r,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,c(r,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,c(r,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;const n=this.version<<12|e;g(n>>>18==0);for(let t=0;t<18;t++){const r=c(n,t),o=this.size-11+t%3,a=Math.floor(t/3);this.setFunctionModule(o,a,r),this.setFunctionModule(a,o,r)}}drawFinderPattern(e,n){for(let t=-4;t<=4;t++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(t)),a=e+r,i=n+t;0<=a&&a<this.size&&0<=i&&i<this.size&&this.setFunctionModule(a,i,o!=2&&o!=4)}}drawAlignmentPattern(e,n){for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,n+t,Math.max(Math.abs(r),Math.abs(t))!=1)}setFunctionModule(e,n,t){this.modules[n][e]=t,this.isFunction[n][e]=!0}addEccAndInterleave(e){const n=this.version,t=this.errorCorrectionLevel;if(e.length!=d.getNumDataCodewords(n,t))throw new RangeError("Invalid argument");const r=d.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][n],o=d.ECC_CODEWORDS_PER_BLOCK[t.ordinal][n],a=Math.floor(d.getNumRawDataModules(n)/8),i=r-a%r,m=Math.floor(a/r);let f=[];const P=d.reedSolomonComputeDivisor(o);for(let E=0,p=0;E<r;E++){let I=e.slice(p,p+m-o+(E<i?0:1));p+=I.length;const F=d.reedSolomonComputeRemainder(I,P);E<i&&I.push(0),f.push(I.concat(F))}let M=[];for(let E=0;E<f[0].length;E++)f.forEach((p,I)=>{(E!=m-o||I>=i)&&M.push(p[E])});return g(M.length==a),M}drawCodewords(e){if(e.length!=Math.floor(d.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let r=0;r<this.size;r++)for(let o=0;o<2;o++){const a=t-o,m=(t+1&2)==0?this.size-1-r:r;!this.isFunction[m][a]&&n<e.length*8&&(this.modules[m][a]=c(e[n>>>3],7-(n&7)),n++)}}g(n==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let n=0;n<this.size;n++)for(let t=0;t<this.size;t++){let r;switch(e){case 0:r=(t+n)%2==0;break;case 1:r=n%2==0;break;case 2:r=t%3==0;break;case 3:r=(t+n)%3==0;break;case 4:r=(Math.floor(t/3)+Math.floor(n/2))%2==0;break;case 5:r=t*n%2+t*n%3==0;break;case 6:r=(t*n%2+t*n%3)%2==0;break;case 7:r=((t+n)%2+t*n%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[n][t]&&r&&(this.modules[n][t]=!this.modules[n][t])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let a=!1,i=0,m=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[o][f]==a?(i++,i==5?e+=d.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,m),a||(e+=this.finderPenaltyCountPatterns(m)*d.PENALTY_N3),a=this.modules[o][f],i=1);e+=this.finderPenaltyTerminateAndCount(a,i,m)*d.PENALTY_N3}for(let o=0;o<this.size;o++){let a=!1,i=0,m=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][o]==a?(i++,i==5?e+=d.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,m),a||(e+=this.finderPenaltyCountPatterns(m)*d.PENALTY_N3),a=this.modules[f][o],i=1);e+=this.finderPenaltyTerminateAndCount(a,i,m)*d.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let a=0;a<this.size-1;a++){const i=this.modules[o][a];i==this.modules[o][a+1]&&i==this.modules[o+1][a]&&i==this.modules[o+1][a+1]&&(e+=d.PENALTY_N2)}let n=0;for(const o of this.modules)n=o.reduce((a,i)=>a+(i?1:0),n);const t=this.size*this.size,r=Math.ceil(Math.abs(n*20-t*10)/t)-1;return g(0<=r&&r<=9),e+=r*d.PENALTY_N4,g(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,n=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let t=[6];for(let r=this.size-7;t.length<e;r-=n)t.splice(1,0,r);return t}}static getNumRawDataModules(e){if(e<d.MIN_VERSION||e>d.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return g(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(d.getNumRawDataModules(e)/8)-d.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*d.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let n=[];for(let r=0;r<e-1;r++)n.push(0);n.push(1);let t=1;for(let r=0;r<e;r++){for(let o=0;o<n.length;o++)n[o]=d.reedSolomonMultiply(n[o],t),o+1<n.length&&(n[o]^=n[o+1]);t=d.reedSolomonMultiply(t,2)}return n}static reedSolomonComputeRemainder(e,n){let t=n.map(r=>0);for(const r of e){const o=r^t.shift();t.push(0),n.forEach((a,i)=>t[i]^=d.reedSolomonMultiply(a,o))}return t}static reedSolomonMultiply(e,n){if(e>>>8||n>>>8)throw new RangeError("Byte out of range");let t=0;for(let r=7;r>=0;r--)t=t<<1^(t>>>7)*285,t^=(n>>>r&1)*e;return g(t>>>8==0),t}finderPenaltyCountPatterns(e){const n=e[1];g(n<=this.size*3);const t=n>0&&e[2]==n&&e[3]==n*3&&e[4]==n&&e[5]==n;return(t&&e[0]>=n*4&&e[6]>=n?1:0)+(t&&e[6]>=n*4&&e[0]>=n?1:0)}finderPenaltyTerminateAndCount(e,n,t){return e&&(this.finderPenaltyAddHistory(n,t),n=0),n+=this.size,this.finderPenaltyAddHistory(n,t),this.finderPenaltyCountPatterns(t)}finderPenaltyAddHistory(e,n){n[0]==0&&(e+=this.size),n.pop(),n.unshift(e)}};l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],u.QrCode=l;function s(C,e,n){if(e<0||e>31||C>>>e)throw new RangeError("Value out of range");for(let t=e-1;t>=0;t--)n.push(C>>>t&1)}function c(C,e){return(C>>>e&1)!=0}function g(C){if(!C)throw new Error("Assertion error")}const h=class w{constructor(e,n,t){if(this.mode=e,this.numChars=n,this.bitData=t,n<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}static makeBytes(e){let n=[];for(const t of e)s(t,8,n);return new w(w.Mode.BYTE,e.length,n)}static makeNumeric(e){if(!w.isNumeric(e))throw new RangeError("String contains non-numeric characters");let n=[];for(let t=0;t<e.length;){const r=Math.min(e.length-t,3);s(parseInt(e.substring(t,t+r),10),r*3+1,n),t+=r}return new w(w.Mode.NUMERIC,e.length,n)}static makeAlphanumeric(e){if(!w.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let n=[],t;for(t=0;t+2<=e.length;t+=2){let r=w.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))*45;r+=w.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),s(r,11,n)}return t<e.length&&s(w.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new w(w.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return e==""?[]:w.isNumeric(e)?[w.makeNumeric(e)]:w.isAlphanumeric(e)?[w.makeAlphanumeric(e)]:[w.makeBytes(w.toUtf8ByteArray(e))]}static makeEci(e){let n=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)s(e,8,n);else if(e<16384)s(2,2,n),s(e,14,n);else if(e<1e6)s(6,3,n),s(e,21,n);else throw new RangeError("ECI assignment value out of range");return new w(w.Mode.ECI,0,n)}static isNumeric(e){return w.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return w.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,n){let t=0;for(const r of e){const o=r.mode.numCharCountBits(n);if(r.numChars>=1<<o)return 1/0;t+=4+o+r.bitData.length}return t}static toUtf8ByteArray(e){e=encodeURI(e);let n=[];for(let t=0;t<e.length;t++)e.charAt(t)!="%"?n.push(e.charCodeAt(t)):(n.push(parseInt(e.substring(t+1,t+3),16)),t+=2);return n}};h.NUMERIC_REGEX=/^[0-9]*$/,h.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,h.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let A=h;u.QrSegment=h})(y||(y={}));(u=>{(l=>{const s=class{constructor(g,h){this.ordinal=g,this.formatBits=h}};s.LOW=new s(0,1),s.MEDIUM=new s(1,0),s.QUARTILE=new s(2,3),s.HIGH=new s(3,2),l.Ecc=s})(u.QrCode||(u.QrCode={}))})(y||(y={}));(u=>{(l=>{const s=class{constructor(g,h){this.modeBits=g,this.numBitsCharCount=h}numCharCountBits(g){return this.numBitsCharCount[Math.floor((g+7)/17)]}};s.NUMERIC=new s(1,[10,12,14]),s.ALPHANUMERIC=new s(2,[9,11,13]),s.BYTE=new s(4,[8,16,16]),s.KANJI=new s(8,[8,10,12]),s.ECI=new s(7,[0,0,0]),l.Mode=s})(u.QrSegment||(u.QrSegment={}))})(y||(y={}));var O=y;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var le={L:O.QrCode.Ecc.LOW,M:O.QrCode.Ecc.MEDIUM,Q:O.QrCode.Ecc.QUARTILE,H:O.QrCode.Ecc.HIGH},x=128,X="L",K="#FFFFFF",W="#000000",j=!1,Z=1,ae=4,ce=0,ue=.1;function J(u,l=0){const s=[];return u.forEach(function(c,g){let h=null;c.forEach(function(A,C){if(!A&&h!==null){s.push(`M${h+l} ${g+l}h${C-h}v1H${h+l}z`),h=null;return}if(C===c.length-1){if(!A)return;h===null?s.push(`M${C+l},${g+l} h1v1H${C+l}z`):s.push(`M${h+l},${g+l} h${C+1-h}v1H${h+l}z`);return}A&&h===null&&(h=C)})}),s.join("")}function q(u,l){return u.slice().map((s,c)=>c<l.y||c>=l.y+l.h?s:s.map((g,h)=>h<l.x||h>=l.x+l.w?g:!1))}function he(u,l,s,c){if(c==null)return null;const g=u.length+s*2,h=Math.floor(l*ue),A=g/l,C=(c.width||h)*A,e=(c.height||h)*A,n=c.x==null?u.length/2-C/2:c.x*A,t=c.y==null?u.length/2-e/2:c.y*A,r=c.opacity==null?1:c.opacity;let o=null;if(c.excavate){let i=Math.floor(n),m=Math.floor(t),f=Math.ceil(C+n-i),P=Math.ceil(e+t-m);o={x:i,y:m,w:f,h:P}}const a=c.crossOrigin;return{x:n,y:t,h:e,w:C,excavation:o,opacity:r,crossOrigin:a}}function fe(u,l){return l!=null?Math.max(Math.floor(l),0):u?ae:ce}function ee({value:u,level:l,minVersion:s,includeMargin:c,marginSize:g,imageSettings:h,size:A}){let C=R.useMemo(()=>{const o=O.QrSegment.makeSegments(u);return O.QrCode.encodeSegments(o,le[l],s)},[u,l,s]);const{cells:e,margin:n,numCells:t,calculatedImageSettings:r}=R.useMemo(()=>{let o=C.getModules();const a=fe(c,g),i=o.length+a*2,m=he(o,A,a,h);return{cells:o,margin:a,numCells:i,calculatedImageSettings:m}},[C,A,h,c,g]);return{qrcode:C,margin:n,cells:e,numCells:t,calculatedImageSettings:r}}var de=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),me=R.forwardRef(function(l,s){const c=l,{value:g,size:h=x,level:A=X,bgColor:C=K,fgColor:e=W,includeMargin:n=j,minVersion:t=Z,marginSize:r,imageSettings:o}=c,i=U(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","marginSize","imageSettings"]),{style:m}=i,f=U(i,["style"]),P=o?.src,M=R.useRef(null),E=R.useRef(null),p=R.useCallback(S=>{M.current=S,typeof s=="function"?s(S):s&&(s.current=S)},[s]),[I,F]=R.useState(!1),{margin:L,cells:T,numCells:B,calculatedImageSettings:N}=ee({value:g,level:A,minVersion:t,includeMargin:n,marginSize:r,imageSettings:o,size:h});R.useEffect(()=>{if(M.current!=null){const S=M.current,v=S.getContext("2d");if(!v)return;let Q=T;const b=E.current,k=N!=null&&b!==null&&b.complete&&b.naturalHeight!==0&&b.naturalWidth!==0;k&&N.excavation!=null&&(Q=q(T,N.excavation));const H=window.devicePixelRatio||1;S.height=S.width=h*H;const $=h/B*H;v.scale($,$),v.fillStyle=C,v.fillRect(0,0,B,B),v.fillStyle=e,de?v.fill(new Path2D(J(Q,L))):T.forEach(function(ne,re){ne.forEach(function(oe,se){oe&&v.fillRect(se+L,re+L,1,1)})}),N&&(v.globalAlpha=N.opacity),k&&v.drawImage(b,N.x+L,N.y+L,N.w,N.h)}}),R.useEffect(()=>{F(!1)},[P]);const te=z({height:h,width:h},m);let _=null;return P!=null&&(_=R.createElement("img",{src:P,key:P,style:{display:"none"},onLoad:()=>{F(!0)},ref:E,crossOrigin:N?.crossOrigin})),R.createElement(R.Fragment,null,R.createElement("canvas",z({style:te,height:h,width:h,ref:p,role:"img"},f)),_)});me.displayName="QRCodeCanvas";var ge=R.forwardRef(function(l,s){const c=l,{value:g,size:h=x,level:A=X,bgColor:C=K,fgColor:e=W,includeMargin:n=j,minVersion:t=Z,title:r,marginSize:o,imageSettings:a}=c,i=U(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","title","marginSize","imageSettings"]),{margin:m,cells:f,numCells:P,calculatedImageSettings:M}=ee({value:g,level:A,minVersion:t,includeMargin:n,marginSize:o,imageSettings:a,size:h});let E=f,p=null;a!=null&&M!=null&&(M.excavation!=null&&(E=q(f,M.excavation)),p=R.createElement("image",{href:a.src,height:M.h,width:M.w,x:M.x+m,y:M.y+m,preserveAspectRatio:"none",opacity:M.opacity,crossOrigin:M.crossOrigin}));const I=J(E,m);return R.createElement("svg",z({height:h,width:h,viewBox:`0 0 ${P} ${P}`,ref:s,role:"img"},i),!!r&&R.createElement("title",null,r),R.createElement("path",{fill:C,d:`M0,0 h${P}v${P}H0z`,shapeRendering:"crispEdges"}),R.createElement("path",{fill:e,d:I,shapeRendering:"crispEdges"}),p)});ge.displayName="QRCodeSVG";export{me as QRCodeCanvas,ge as QRCodeSVG};
//# sourceMappingURL=c8cw7i25r8a200wl.js.map