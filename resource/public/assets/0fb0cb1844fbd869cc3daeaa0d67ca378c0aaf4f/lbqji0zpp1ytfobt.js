import{df as p,dg as v,eV as b,eW as M,eX as N}from"./gqmy69lfum1xn3in.js";import"./i4z8naqcr3t3djqa.js";function P(s,w,h){var i;return p(this,void 0,void 0,function(){var o,c,l,d,n,g=this;return v(this,function(u){switch(u.label){case 0:return b()?[2,[]]:(o=M(),c=(i=w.enabledMiddleware)!==null&&i!==void 0?i:{},l=Object.entries(c).filter(function(r){r[0];var e=r[1];return e}).map(function(r){var e=r[0];return e}),d=l.map(function(r){return p(g,void 0,void 0,function(){var e,a,m,f;return v(this,function(t){switch(t.label){case 0:e=r.replace("@segment/",""),a=e,h&&(a=btoa(e).replace(/=/g,"")),m="".concat(o,"/middleware/").concat(a,"/latest/").concat(a,".js.gz"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,N(m)];case 2:return t.sent(),[2,window["".concat(e,"Middleware")]];case 3:return f=t.sent(),s.log("error",f),s.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}})})}),[4,Promise.all(d)]);case 1:return n=u.sent(),n=n.filter(Boolean),[2,n]}})})}export{P as remoteMiddlewares};
//# sourceMappingURL=lbqji0zpp1ytfobt.js.map
