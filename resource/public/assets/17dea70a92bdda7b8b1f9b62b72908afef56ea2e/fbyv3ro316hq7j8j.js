import{cp as a}from"./dr7d3iwdkso0acad.js";import{i as c}from"./okkj3my0355ooax9.js";import"./nk93elwanh2qmq79.js";function l(r,u){var i,n;if(!r||!Object.keys(r))return{};var o=r.integrations?Object.keys(r.integrations).filter(function(e){return r.integrations[e]===!1}):[],s=[];return((i=u.remotePlugins)!==null&&i!==void 0?i:[]).forEach(function(e){o.forEach(function(t){e.creationName==t&&s.push(e.name)})}),((n=u.remotePlugins)!==null&&n!==void 0?n:[]).reduce(function(e,t){return t.settings.subscriptions&&s.includes(t.name)&&t.settings.subscriptions.forEach(function(f){return e["".concat(t.name," ").concat(f.partnerAction)]=!1}),e},{})}function v(r,u){function i(n){var o=r,s=n.event.event;if(o&&s){var e=o[s];if(c(o,e)){var t=l(e,u);n.updateEvent("integrations",a(a(a({},n.event.integrations),e?.integrations),t))}else return n.updateEvent("integrations",a(a({},n.event.integrations),{All:!1,"Segment.io":!0})),n}return n}return{name:"Schema Filter",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},type:"before",page:i,alias:i,track:i,identify:i,group:i}}export{v as schemaFilter};
//# sourceMappingURL=fbyv3ro316hq7j8j.js.map
