import{L as a}from"./j7ocp5n7egtujhh4.js";import{s,t as r,L as n,e as i,f as o,g as P,j as p,c as Q}from"./eoe6mnhnmv9fg37o.js";import"./b0crfrak97mklwk7.js";import"./e9yuj0ll30e3kmlx.js";import"./mhi0wfvgf6n45t1b.js";import"./ihoxwwe79kyl4jef.js";import"./ogeaiwpkr6sm1oz0.js";import"./ckzt1z3opco67c10.js";import"./fq0451of3h9o57hb.js";import"./hlvgw9oyg882c45o.js";import"./e3hecsyr6ickw1bt.js";import"./z8pqu5q32w1jenu1.js";import"./i3rqszi2jft06oon.js";import"./mn3d10go6s4oyp47.js";import"./fzrn137102spawew.js";import"./gf188augm5itvpd3.js";import"./mry9hax8k6o56kk4.js";import"./h6q6kaq8zg1ta889.js";import"./ej09qo1vmp718kgv.js";const c=s({String:r.string,Number:r.number,"True False":r.bool,PropertyName:r.propertyName,Null:r.null,",":r.separator,"[ ]":r.squareBracket,"{ }":r.brace}),m=a.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[c],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),w=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const e=g(O,t.state.doc);return[{from:e,message:O.message,severity:"error",to:e}]}return[]};function g(t,O){let e;return(e=t.message.match(/at position (\d+)/))?Math.min(+e[1],O.length):(e=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+e[1]).from+ +e[2]-1,O.length):0}const u=n.define({name:"json",parser:m.configure({props:[i.add({Object:o({except:/^\s*\}/}),Array:o({except:/^\s*\]/})}),P.add({"Object Array":p})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function x(){return new Q(u)}export{x as json,u as jsonLanguage,w as jsonParseLinter};
//# sourceMappingURL=o5ozeszu9vxam604.js.map
