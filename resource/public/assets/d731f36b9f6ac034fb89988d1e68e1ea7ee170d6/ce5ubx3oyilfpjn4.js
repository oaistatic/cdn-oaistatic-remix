import{c3 as a}from"./mc2tj3xhtcshtn61.js";import{i as c}from"./okkj3my0355ooax9.js";import"./i7de8yvdg4jlu6h0.js";import"./lklglvrzltpv3f05.js";function l(r,u){var n,i;if(!r||!Object.keys(r))return{};var o=r.integrations?Object.keys(r.integrations).filter(function(e){return r.integrations[e]===!1}):[],s=[];return((n=u.remotePlugins)!==null&&n!==void 0?n:[]).forEach(function(e){o.forEach(function(t){e.creationName==t&&s.push(e.name)})}),((i=u.remotePlugins)!==null&&i!==void 0?i:[]).reduce(function(e,t){return t.settings.subscriptions&&s.includes(t.name)&&t.settings.subscriptions.forEach(function(f){return e["".concat(t.name," ").concat(f.partnerAction)]=!1}),e},{})}function b(r,u){function n(i){var o=r,s=i.event.event;if(o&&s){var e=o[s];if(c(o,e)){var t=l(e,u);i.updateEvent("integrations",a(a(a({},i.event.integrations),e?.integrations),t))}else return i.updateEvent("integrations",a(a({},i.event.integrations),{All:!1,"Segment.io":!0})),i}return i}return{name:"Schema Filter",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},type:"before",page:n,alias:n,track:n,identify:n,group:n}}export{b as schemaFilter};
//# sourceMappingURL=ce5ubx3oyilfpjn4.js.map
