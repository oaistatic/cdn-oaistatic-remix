import{cx as f,cy as v,e7 as I,e6 as D,eQ as R,cz as _,eR as b,eS as P,cr as p,eT as N,eU as F,eV as y,e5 as L,eW as j,eE as S,eX as C,eY as Q,eZ as B,e_ as W,e$ as T,f0 as U,f1 as V}from"./elatgogjtv7nqe0m.js";import{i as G}from"./okkj3my0355ooax9.js";import"./cr91oy4eihkrvo1z.js";function E(i){return i.toLowerCase().replace(".","").replace(/\s+/g,"-")}function k(i,t){return t===void 0&&(t=!1),t?btoa(i).replace(/=/g,""):void 0}function X(i){return("Integration"in i?i.Integration:i).prototype.name}function Y(i,t,n){var e,a;try{var r=((a=(e=window?.performance)===null||e===void 0?void 0:e.getEntriesByName(i,"resource"))!==null&&a!==void 0?a:[])[0];r&&t.stats.gauge("legacy_destination_time",Math.round(r.duration),_([n],r.duration<100?["cached"]:[],!0))}catch{}}function Z(i,t,n){var e;if("Integration"in i){var a={user:function(){return n.user()},addIntegration:function(){}};i(a),e=i.Integration}else e=i;var r=new e(t);return r.analytics=n,r}function $(i,t,n,e){return f(this,void 0,void 0,function(){var a,r,s,u,o,d;return v(this,function(c){switch(c.label){case 0:a=E(t),r=k(a,e),s=D(),u="".concat(s,"/integrations/").concat(r??a,"/").concat(n,"/").concat(r??a,".dynamic.js.gz"),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,I(u)];case 2:return c.sent(),Y(u,i,t),[3,4];case 3:throw o=c.sent(),i.stats.gauge("legacy_destination_time",-1,["plugin:".concat(t),"failed"]),o;case 4:return d=window["".concat(a,"Deps")],[4,Promise.all(d.map(function(g){return I(s+g+".gz")}))];case 5:return c.sent(),window["".concat(a,"Loader")](),[2,window["".concat(a,"Integration")]]}})})}function H(i,t,n){return f(this,void 0,void 0,function(){var e,a,r,s;return v(this,function(u){return e=D(),a=E(i),r=k(i,n),s="".concat(e,"/integrations/").concat(r??a,"/").concat(t,"/").concat(r??a,".dynamic.js.gz"),[2,R(s)]})})}function J(i){var t,n,e,a;return(a=(n=(t=i?.versionSettings)===null||t===void 0?void 0:t.override)!==null&&n!==void 0?n:(e=i?.versionSettings)===null||e===void 0?void 0:e.version)!==null&&a!==void 0?a:"latest"}var K=function(i,t){var n,e=t.type,a=t.bundlingStatus,r=t.versionSettings,s=a!=="unbundled"&&(e==="browser"||((n=r?.componentTypes)===null||n===void 0?void 0:n.includes("browser")));return!i.startsWith("Segment")&&i!=="Iterable"&&s},q=function(i,t){var n=t.All===!1&&t[i]===void 0;return t[i]===!1||n};function x(i,t){return f(this,void 0,void 0,function(){var n,e=this;return v(this,function(a){switch(a.label){case 0:return n=[],P()?[2,t]:[4,C(function(){return t.length>0&&U()},function(){return f(e,void 0,void 0,function(){var r,s,u;return v(this,function(o){switch(o.label){case 0:return r=t.pop(),r?[4,T(r,i)]:[2];case 1:return s=o.sent(),u=s instanceof V,u||n.push(r),[2]}})})})];case 1:return a.sent(),n.map(function(r){return t.pushWithBackoff(r)}),[2,t]}})})}var tt=function(){function i(t,n,e,a,r,s){a===void 0&&(a={});var u=this;this.options={},this.type="destination",this.middleware=[],this.initializePromise=Q(),this.flushing=!1,this.name=t,this.version=n,this.settings=p({},a),this.disableAutoISOConversion=r.disableAutoISOConversion||!1,this.integrationSource=s,this.settings.type&&this.settings.type==="browser"&&delete this.settings.type,this.initializePromise.promise.then(function(o){return u._initialized=o},function(){}),this.options=r,this.buffer=r.disableClientPersistence?new B(4,[]):new W(4,"".concat(e,":dest-").concat(t)),this.scheduleFlush()}return i.prototype.isLoaded=function(){return!!this._ready},i.prototype.ready=function(){var t=this;return this.initializePromise.promise.then(function(){var n;return(n=t.onReady)!==null&&n!==void 0?n:Promise.resolve()})},i.prototype.load=function(t,n){var e;return f(this,void 0,void 0,function(){var a,r,s=this;return v(this,function(u){switch(u.label){case 0:return this._ready||this.onReady!==void 0?[2]:(e=this.integrationSource)!==null&&e!==void 0?(r=e,[3,3]):[3,1];case 1:return[4,$(t,this.name,this.version,this.options.obfuscate)];case 2:r=u.sent(),u.label=3;case 3:a=r,this.integration=Z(a,this.settings,n),this.onReady=new Promise(function(o){var d=function(){s._ready=!0,o(!0)};s.integration.once("ready",d)}),this.integration.on("initialize",function(){s.initializePromise.resolve(!0)});try{b(t,{integrationName:this.name,methodName:"initialize",type:"classic"}),this.integration.initialize()}catch(o){throw b(t,{integrationName:this.name,methodName:"initialize",type:"classic",didError:!0}),this.initializePromise.resolve(!1),o}return[2]}})})},i.prototype.unload=function(t,n){return H(this.name,this.version,this.options.obfuscate)},i.prototype.addMiddleware=function(){for(var t,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];this.middleware=(t=this.middleware).concat.apply(t,n)},i.prototype.shouldBuffer=function(t){return t.event.type!=="page"&&(P()||this._ready!==!0||this._initialized!==!0)},i.prototype.send=function(t,n,e){var a,r;return f(this,void 0,void 0,function(){var s,u,o,d,c,g;return v(this,function(h){switch(h.label){case 0:return this.shouldBuffer(t)?(this.buffer.push(t),this.scheduleFlush(),[2,t]):(s=(r=(a=this.options)===null||a===void 0?void 0:a.plan)===null||r===void 0?void 0:r.track,u=t.event.event,s&&u&&this.name!=="Segment.io"&&(o=s[u],G(s,o)?t.updateEvent("integrations",p(p({},t.event.integrations),o?.integrations)):(t.updateEvent("integrations",p(p({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new N({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"}))),o?.enabled&&o?.integrations[this.name]===!1&&t.cancel(new N({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"}))),[4,F(this.name,t.event,this.middleware)]);case 1:if(d=h.sent(),d===null)return[2,t];c=new n(d,{traverse:!this.disableAutoISOConversion}),b(t,{integrationName:this.name,methodName:e,type:"classic"}),h.label=2;case 2:return h.trys.push([2,5,,6]),this.integration?[4,this.integration.invoke.call(this.integration,e,c)]:[3,4];case 3:h.sent(),h.label=4;case 4:return[3,6];case 5:throw g=h.sent(),b(t,{integrationName:this.name,methodName:e,type:"classic",didError:!0}),g;case 6:return[2,t]}})})},i.prototype.track=function(t){return f(this,void 0,void 0,function(){return v(this,function(n){return[2,this.send(t,y.Track,"track")]})})},i.prototype.page=function(t){var n;return f(this,void 0,void 0,function(){return v(this,function(e){switch(e.label){case 0:return!((n=this.integration)===null||n===void 0)&&n._assumesPageview&&!this._initialized&&this.integration.initialize(),[4,this.initializePromise.promise];case 1:return e.sent(),[2,this.send(t,y.Page,"page")]}})})},i.prototype.identify=function(t){return f(this,void 0,void 0,function(){return v(this,function(n){return[2,this.send(t,y.Identify,"identify")]})})},i.prototype.alias=function(t){return f(this,void 0,void 0,function(){return v(this,function(n){return[2,this.send(t,y.Alias,"alias")]})})},i.prototype.group=function(t){return f(this,void 0,void 0,function(){return v(this,function(n){return[2,this.send(t,y.Group,"group")]})})},i.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout(function(){return f(t,void 0,void 0,function(){var n;return v(this,function(e){switch(e.label){case 0:return P()||this._ready!==!0||this._initialized!==!0?(this.scheduleFlush(),[2]):(this.flushing=!0,n=this,[4,x(this,this.buffer)]);case 1:return n.buffer=e.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}})})},Math.random()*5e3)},i}();function rt(i,t,n,e,a,r){var s,u;if(n===void 0&&(n={}),e===void 0&&(e={}),L())return[];t.plan&&(e=e??{},e.plan=t.plan);var o=(u=(s=t.middlewareSettings)===null||s===void 0?void 0:s.routingRules)!==null&&u!==void 0?u:[],d=t.integrations,c=e.integrations,g=j(t,e??{}),h=r?.reduce(function(l,w){var m;return p(p({},l),(m={},m[X(w)]=w,m))},{}),O=new Set(_(_([],Object.keys(d).filter(function(l){return K(l,d[l])}),!0),Object.keys(h||{}).filter(function(l){return S(d[l])||S(c?.[l])}),!0));return Array.from(O).filter(function(l){return!q(l,n)}).map(function(l){var w=d[l],m=J(w),z=new tt(l,m,i,g[l],e,h?.[l]),A=o.filter(function(M){return M.destinationName===l});return A.length>0&&a&&z.addMiddleware(a),z})}export{tt as LegacyDestination,rt as ajsDestinations};
//# sourceMappingURL=evckruxybqchq1ao.js.map
