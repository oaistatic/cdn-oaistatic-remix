import{cD as c}from"./dr7d3iwdkso0acad.js";function $(u,r,e,L){var d=-1,x=u==null?0:u.length;for(L&&x&&(e=u[++d]);++d<x;)e=r(e,u[d],d,u);return e}var h=$;function E(u){return function(r){return u?.[r]}}var S=E,W=S,_={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},M=W(_),z=M,Z=z,w=c,D=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,I="\\u0300-\\u036f",k="\\ufe20-\\ufe2f",N="\\u20d0-\\u20ff",j=I+k+N,y="["+j+"]",T=RegExp(y,"g");function H(u){return u=w(u),u&&u.replace(D,Z).replace(T,"")}var P=H,G=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function J(u){return u.match(G)||[]}var V=J,Y=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function B(u){return Y.test(u)}var q=B,i="\\ud800-\\udfff",F="\\u0300-\\u036f",K="\\ufe20-\\ufe2f",Q="\\u20d0-\\u20ff",X=F+K+Q,t="\\u2700-\\u27bf",b="a-z\\xdf-\\xf6\\xf8-\\xff",u0="\\xac\\xb1\\xd7\\xf7",r0="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",e0="\\u2000-\\u206f",a0=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",g="A-Z\\xc0-\\xd6\\xd8-\\xde",d0="\\ufe0e\\ufe0f",p=u0+r0+e0+a0,R="['’]",f="["+p+"]",x0="["+X+"]",v="\\d+",f0="["+t+"]",A="["+b+"]",l="[^"+i+p+v+t+b+g+"]",o0="\\ud83c[\\udffb-\\udfff]",n0="(?:"+x0+"|"+o0+")",s0="[^"+i+"]",C="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",a="["+g+"]",c0="\\u200d",o="(?:"+A+"|"+l+")",i0="(?:"+a+"|"+l+")",n="(?:"+R+"(?:d|ll|m|re|s|t|ve))?",s="(?:"+R+"(?:D|LL|M|RE|S|T|VE))?",U=n0+"?",m="["+d0+"]?",t0="(?:"+c0+"(?:"+[s0,C,O].join("|")+")"+m+U+")*",b0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",g0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",p0=m+U+t0,R0="(?:"+[f0,C,O].join("|")+")"+p0,v0=RegExp([a+"?"+A+"+"+n+"(?="+[f,a,"$"].join("|")+")",i0+"+"+s+"(?="+[f,a+o,"$"].join("|")+")",a+"?"+o+"+"+n,a+"+"+s,g0,b0,v,R0].join("|"),"g");function A0(u){return u.match(v0)||[]}var l0=A0,C0=V,O0=q,U0=c,m0=l0;function L0(u,r,e){return u=U0(u),r=e?void 0:r,r===void 0?O0(u)?m0(u):C0(u):u.match(r)||[]}var $0=L0,h0=h,E0=P,S0=$0,W0="['’]",_0=RegExp(W0,"g");function M0(u){return function(r){return h0(S0(E0(r).replace(_0,"")),u,"")}}var Z0=M0;export{Z0 as _};
//# sourceMappingURL=lfp6adav7v8mkqdp.js.map
