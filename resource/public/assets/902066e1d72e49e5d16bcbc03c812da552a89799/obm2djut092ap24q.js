import{ex as k,ey as x}from"./j51q469vqqyswwq0.js";import"./nakmlpxnz8km92cm.js";function f(a,s){return Object.keys(s).reduce(function(e,i){if(i.startsWith(a)){var r=i.substr(a.length);e[r]=s[i]}return e},{})}function q(a,s){var e=document.createElement("a");e.href=s;var i=e.search.slice(1),r=i.split("&").reduce(function(o,P){var j=P.split("="),b=j[0],S=j[1];return o[b]=k(S),o},{}),t=[],p=r.ajs_uid,c=r.ajs_event,m=r.ajs_aid,n=x(a.options.useQueryString)?a.options.useQueryString:{},u=n.aid,l=u===void 0?/.+/:u,_=n.uid,y=_===void 0?/.+/:_;if(m){var d=Array.isArray(r.ajs_aid)?r.ajs_aid[0]:r.ajs_aid;l.test(d)&&a.setAnonymousId(d)}if(p){var v=Array.isArray(r.ajs_uid)?r.ajs_uid[0]:r.ajs_uid;if(y.test(v)){var A=f("ajs_trait_",r);t.push(a.identify(v,A))}}if(c){var h=Array.isArray(r.ajs_event)?r.ajs_event[0]:r.ajs_event,g=f("ajs_prop_",r);t.push(a.track(h,g))}return Promise.all(t)}export{q as queryString};
//# sourceMappingURL=obm2djut092ap24q.js.map
