import{r,c as Sn,g as zn,j as p,M as N,ac as Ln}from"./i8w88cc8b3gds516.js";import{y as Nn,dB as Un,cW as Bn,ha as On,bU as Vn,fg as T,bR as jn,dr as qn,v as Wn,d5 as Gn,hb as Hn,bd as Xn,gY as $n,h4 as Kn,e9 as Q,bM as An,an as Yn,$ as cn,cl as Zn,dg as Jn,D as Qn,bn as un,dn as ne,b5 as ee}from"./eh26o1l35t2fnjj4.js";import{kD as te,eD as yn,fU as oe,l8 as ae,l9 as Cn,la as se,j as ie,lb as re,fE as le,c4 as ce,bq as ue,hd as dn,hb as fn,lc as de,ib as fe}from"./jg63sxiyqeyvfv9f.js";import{u as me}from"./c414ph1neqej00ws.js";import{a as I,u as wn,b as ve,c as ge,d as pe,s as H,V as X,g as he,e as be,f as _n,X as xe}from"./nuayrtjqlytdp7eo.js";const Se=()=>{const e=Nn(),n=r.useCallback(()=>I.getState().isVoiceModeActive,[]);return r.useMemo(()=>new Proxy(e,{get(t,i){const a=t[i];return n()||i==="closeAll"?a:()=>{}}}),[n,e])},Ae=()=>{const e=Un()&&Bn,n=Vn("1359128927")?.value;return async()=>{if(e&&n)return await On();try{const t=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),i=await navigator.mediaDevices.enumerateDevices();return t.getTracks().forEach(s=>s.stop()),i.some(s=>s.kind==="audioinput"&&s.label!=="")}catch(t){if(!te(t))throw t;return!1}}};function Rt(e){return{conversation_id:e.serverThreadId,parent_message_id:e.parentMessageId,model_slug:e.modelSlug,model_slug_advanced:e.isAdvancedMode?e.modelSlug:void 0,voice_mode:e.isAdvancedMode?"advanced":"standard",eventSource:e.eventSource,clientThreadId:e.clientThreadId,gizmo_id:e.gizmoId,voice:e.voice}}function ye({requestMicPermissions:e}={requestMicPermissions:!1}){const n=Sn(),t=Se(),{voiceName:i,voiceMainLanguage:a}=yn(),s=wn(o=>o.isVoiceModeActive),l=ve(),{room:m}=ge(),v=pe(),h=Ae(),b=n.formatMessage({id:"useVoiceModeButtonAction.error",defaultMessage:"Failed to start voice mode"}),f=r.useCallback(async()=>{l&&(await m?.disconnect(),H(null),I.setState(o=>{o.server.remoteState=X.Halted}))},[l,m]);return{startVoiceMode:r.useCallback(async o=>{l&&(await m?.disconnect(),H(null)),e&&await h();const x=await he("audioinput");I.setState(A=>{A.audioInputDevice=x,A.isVoiceModeActive=!0,A.voiceMode=o.voice_mode,A.server.remoteState=X.Connecting});const d=performance.now(),c=[8,4,4,4,12].map(A=>Math.floor(Math.random()*Math.pow(10,A)).toString(16).padStart(A,"0").toUpperCase()).join("-");try{T.livekit.connectCalled();const A=await v({conversation_id:o.conversation_id??null,requested_voice_mode:o.voice_mode??null,gizmo_id:o.gizmo_id??null,voice:o.voice},o.eventSource),{default_voice_mode:g,modes:S,chatreq:w}=A;performance.mark("livekit.start"),performance.mark("voice_mode.start");const{eventSource:C,voice:M,clientThreadId:O,voice_mode:V,model_slug:j,model_slug_advanced:R,gizmo_id:q,...z}=o,k=S.find(G=>G.mode===g)?.default_model_slug??o.model_slug,W=g==="advanced"?k:void 0,F=w?await jn.getEnforcementToken(w):null,D=await be.getVoiceToken({...z,voice:M??i,language_code:a,voice_session_id:c,timezone_offset_min:new Date().getTimezoneOffset(),voice_mode:g,model_slug:k,model_slug_advanced:W,chatreq_token:w?.token},o.eventSource,F);D&&D.token&&D.url&&D.e2ee_key&&(oe.setState({lastVoiceSessionStartTime:new Date}),H({conversationId:o.conversation_id??o.clientThreadId,voiceSessionId:c,voiceMode:D.voice_mode_decision.voice_mode,credentials:{...D,e2eeKey:D.e2ee_key}})),performance.mark("livekit.end"),T.livekit.success({durationMs:performance.measure("livekit","livekit.start","livekit.end").duration.toFixed(0),voice_session_id:c}),T.connectionLatency.success({durationMs:performance.now()-d})}catch(A){const g=ae(I.getState());throw T.livekit.failure(A,{...g,voice_session_id:c,eventSource:o.eventSource,voice:o.voice??"(undefined)",requested_voice_mode:o.voice_mode??"(undefined)",model_slug:o.model_slug,gizmo_id:o.gizmo_id??"(undefined)"}),_n.debug("failed to get voice token",A),I.setState(S=>{S.server.remoteState=X.Halted}),T.connectionLatency.failure({durationMs:performance.now()-d}),t.danger(b),A}},[h,b,v,l,e,m,t,a,i]),stopVoiceMode:f,isConnected:l,isVoiceModeActive:s}}const Ce=2,we=({viewport:e,canvasSize:n,shouldMeasurePerf:t,source:i})=>{const a=r.useRef({}),s=r.useCallback(l=>{const m=l.getExtension("WEBGL_debug_renderer_info");m&&(a.current.vendor=l.getParameter(m.UNMASKED_VENDOR_WEBGL),a.current.renderer=l.getParameter(m.UNMASKED_RENDERER_WEBGL))},[]);return r.useEffect(()=>{const l={vendor:a.current.vendor??"(unavailable)",renderer:a.current.renderer??"(unavailable)",width:e[0],height:e[1],canvasWidth:n[0],canvasHeight:n[1],dpr:window.devicePixelRatio,source:i};!qn(l,a)&&t&&(a.current=l,Cn(Ce).then(v=>{T.bloop.performance({...l,fps:v})}))},[n,t,e,i]),s},_e=.25,De=3,mn=28,$=55,K=200,vn=1.1,Te=({viewport:e,initialScale:n,shouldCalibrate:t})=>{const[i,a]=r.useState(n),s=r.useRef(void 0),l=r.useRef(void 0),m=r.useRef(void 0),v=r.useRef("down"),h=r.useCallback(()=>{const b=v.current==="up"?De:_e;Cn(b).then(f=>{if(f<mn){v.current="down";const u=Math.max(f,1),o=Math.sqrt(u/mn);a(x=>x*o),l.current=window.setTimeout(h,K)}else if(m.current){const u=f>=$,o=f>=m.current*vn;if(u||o)v.current="up",a(x=>x*vn),l.current=window.setTimeout(h,K);else if(f<$){v.current="down";const x=Math.sqrt(f/$);a(d=>d*x)}}m.current=f})},[]);return r.useEffect(()=>{const[b,f]=e,[u,o]=s.current??[];return t&&(u!==b||o!==f)&&(s.current=e,clearTimeout(l.current),a(n),l.current=window.setTimeout(h,K)),()=>{clearTimeout(l.current)}},[t,h,n,e]),i},Me=60,B=Math.floor(1e3/Me);var Re=Wn,ke=Gn;function Fe(e){return ke(e)&&Re(e)}var Ee=Fe,Pe=Hn,Ie=Xn,ze=$n,Le=Kn,Ne=Ee,Ue=Math.max;function Be(e){if(!(e&&e.length))return[];var n=0;return e=Pe(e,function(t){if(Ne(t))return n=Ue(t.length,n),!0}),Le(n,function(t){return Ie(e,ze(t))})}var Oe=Be,Ve=se,je=Oe,qe=Ve(je),We=qe;const Y=zn(We),nn=240,Dn=2048,Tn=new Array(nn).fill(0),Ge=e=>{const n=xe(e,{bands:nn,updateInterval:B,loPass:0,hiPass:400,analyserOptions:{fftSize:Dn}});return n.length===0?Tn:n},en=e=>{const{magnitudes:n,binCount:t,gainMultiplier:i}=e;if(n.length===0)return new Array(t).fill(0);const a=Math.ceil(n.length/t),s=[];for(let l=0;l<n.length;l+=a){const m=Math.min(l+a,n.length),v=n.slice(l,m).sort((u,o)=>u-o),h=Math.floor(v.length/2);let b;v.length%2===0?b=(v[h-1]+v[h])/2:b=v[h],b=Math.abs(b),b*=i;const f=b/(b+1);s.push(f)}return s},Mn=(e,n)=>{const t=n.sampleRate,i=e.length,a=n.bandCount,s=n.binCount,l=n.gainMultipliers;if(l.length!==a)throw new Error("gainMultipliers must have length equal to bandCount");const m=i*2,v=t/m,h=e.map((x,d)=>d*v),b=20,f=t/2,u=new Array(a+1).fill(0).map((x,d)=>b*Math.pow(f/b,d/a)),o=new Array(a).fill(null).map(()=>[]);for(let x=0;x<h.length;x+=1)for(let d=0;d<a;d+=1)if(h[x]>=u[d]&&h[x]<u[d+1]){o[d].push(e[x]);break}for(let x=0;x<a;x+=1){const d=o[x],c=l[x];o[x]=en({magnitudes:d,binCount:s,gainMultiplier:c})}return o},gn=60,Rn=48e3,He=1,Xe=2,$e=40,Ke=2;function pn({time:e,timeConstant:n}){return 1-Math.exp(-e/n)}function hn(e,n){const t=n[1]-n[0];return n[0]+e*t}const Z=e=>{if(!Array.isArray(e)||e.length!==2||typeof e[0]!="number"||typeof e[1]!="number")throw new Error("zip failed - received a value that is not a [number, number] tuple")},Ye=e=>{const{prevAudioData:n,prevCumulativeAudioData:t,deltaTimeS:i,audioDataRaw:a}=e,s=a.map(u=>u*i*gn*He),l=pn({time:i,timeConstant:Xe}),m=Y(n,s).map(u=>(Z(u),hn(l,u))),v=a.map(u=>u*i*gn*$e),h=Y(t,v).map(u=>(Z(u),u[0]+u[1])),b=pn({time:i,timeConstant:Ke}),f=Y(t,h).map(u=>(Z(u),hn(b,u)));return{audioData:m,cumulativeAudioData:f}},kt=(e,n)=>{const t=Ge(e),i=Mn(t,{sampleRate:Rn,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),a=en({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:i,cumulativeMagnitude:a}};function Ze(e){const n=r.useRef(e);n.current=e;const[t,i]=r.useState(null),a=r.useCallback(s=>{i(s)},[]);return Q(()=>{const s=new ResizeObserver(l=>{for(const m of l)n.current(m)});return t&&s.observe(t),()=>{s.disconnect()}},[t]),a}const E=_n.createChild("GLCanvas");function Je({className:e,vert:n,frag:t,Behaviors:i,onViewportUpdate:a,onRenderComplete:s,onGlAvailable:l,onCanvasSizeUpdate:m,scale:v}){const h=r.useRef(null),b=r.useRef(null),[f,u]=r.useState(null),[o,x]=r.useState(),d=r.useRef(ie(g=>{const{width:S,height:w}=g.contentRect,C=Math.floor(Math.min(S??0,w??0));u(C),a?.({width:C,height:C})},100)),c=Ze(d.current);if(Q(()=>{const g=h.current,{width:S,height:w}=g??{};if(g&&f!=null&&S&&w){const C=g.getContext("webgl2",{premultipliedAlpha:!0});C?x(C):E.error("webgl2 context not supported")}},[f]),Q(()=>{if(!o)return;const g=o.createProgram(),S=o.createShader(o.VERTEX_SHADER),w=o.createShader(o.FRAGMENT_SHADER);if(!g){E.debug("failed to create program");return}if(!S||!w){E.debug("failed to create shaders",S,w);return}let C="";if(o.shaderSource(S,n),o.compileShader(S),C+=`vertShader:
${o.getShaderInfoLog(S)}
`,o.attachShader(g,S),o.shaderSource(w,t),o.compileShader(w),C+=`fragShader:
${o.getShaderInfoLog(w)}
`,o.attachShader(g,w),o.linkProgram(g),o.useProgram(g),C+=o.getProgramInfoLog(g),!o.getProgramParameter(g,o.LINK_STATUS))throw`Could not compile WebGL program. 

${C}`;b.current=g,E.debug("program created"),l?.(o,g);const M=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);return M&&(o.waitSync(M,0,o.TIMEOUT_IGNORED),s?.()),()=>{E.debug("cleaning up"),b.current=null,o.detachShader(g,S),o.detachShader(g,w),o.deleteShader(S),o.deleteShader(w),o.deleteProgram(g)}},[o,t,n]),f!=null&&o&&h.current){const g=h.current,S=f*window.devicePixelRatio*(v??1);g.width=S,g.height=S,o.viewport(0,0,S,S),m?.({width:S,height:S})}const A=b.current;return p.jsxs("div",{className:e,ref:c,children:[p.jsx("canvas",{ref:h,style:{width:f??void 0,height:f??void 0}},f),o&&A&&i&&p.jsx(i,{ctx:o,program:A})]})}function Qe({GLUniformsSetter:e,textureImage:n,textureName:t,variablesRef:i,className:a,vert:s,frag:l,onViewportUpdate:m,onRenderComplete:v,onGlAvailable:h,onCanvasSizeUpdate:b,scale:f}){const u=r.useRef(void 0),o=r.useCallback(async(c,A)=>{if(u.current=new e(c,A),n&&t){const g=c.createTexture();c.bindTexture(c.TEXTURE_2D,g),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.LINEAR),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.LINEAR),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,n);const S=c.getUniformLocation(A,t);c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,g),c.uniform1i(S,0)}h?.(c,A)},[e,n,t,h]),x=r.useRef(void 0),d=r.useCallback(()=>{u.current&&i.current&&u.current.setVariablesAndRender(i.current),x.current=requestAnimationFrame(d)},[i]);return r.useEffect(()=>(d(),()=>{x.current&&cancelAnimationFrame(x.current)}),[d]),p.jsx(Je,{className:a,vert:s,frag:l,onViewportUpdate:m,onRenderComplete:v,onGlAvailable:o,onCanvasSizeUpdate:b,scale:f,Behaviors:()=>null})}const nt="webp",et=512,tt=512,ot="srgb",at=3,st="uchar",it=72,rt=!1,lt=8,ct=!1,ut=!1,dt="{{.assetPrefix}}/assets/noise-watercolor-m3j88gni.webp",ft={format:nt,width:et,height:tt,space:ot,channels:at,depth:st,density:it,isProgressive:rt,paletteBitDepth:lt,hasProfile:ct,hasAlpha:ut,src:dt};let kn;const U=new window.Image;U.crossOrigin="anonymous";U.src=ft.src;U.onload=()=>{kn=U};var mt=`#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)
#define NUM_OCTAVES (4)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

float triangle(float t, float p) {
  return 2.0 * abs(t / p - floor(t / p + 0.5));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float silkySmooth(float t, float k) {
  return atan(k * sin((t - 0.5) * pi)) / atan(k) * 0.5 + 0.5;
}

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float fixedSpring(float t, float d) {
  float s = mix(
    1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t),
    1.0,
    scaled(0.0, 1.0, t)
  );
  return s * (1.0 - t) + t;
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) *
  (1.0 - t) *
  exp(-2.71828182846 * 2.0 * t) *
  t *
  10.0;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(ivec2 st) {
  return random(vec2(st));
}

float random(float p) {
  return random(vec2(p));
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdArc(vec2 p, vec2 sca, vec2 scb, float ra, float rb) {
  p *= mat2(sca.x, sca.y, -sca.y, sca.x);
  p.x = abs(p.x);
  return scb.y * p.x > scb.x * p.y
    ? length(p - ra * scb) - rb
    : abs(length(p) - ra) - rb;
}

float arc(vec2 st, float startAngle, float length, float radius, float width) {
  return sdArc(
    st,
    vec2(sin(startAngle), cos(startAngle)),
    vec2(sin(length), cos(length)),
    radius,
    width
  );
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
  
  return max(base + blend - vec3(1.0), vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
  return blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fade_xyz.z
  );
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

/**
 * End new code for colored orb
 */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isDarkMode /**
 * new bool
 */
) {
  float midRadius = 0.12; 
  float maxRadius = 0.3; 
  float t1 = 1.0; 
  float gamma = 3.0; 
  float omega = pi / 2.0; 

  
  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    
    float t_prime = args.time / t1;
    
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    
    float adjustedTime = args.time - t1;
    
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  
  float distance = length(args.st) - radius;

  
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha);

  
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applyIdleStateLegacy(ColoredSDF sdf, SDFArgs args, bool isDarkMode) {
  float connectedLinearAnimation = scaled(0.0, 2.0, args.duration);
  float connectedAnimation = fixedSpring(connectedLinearAnimation, 0.96);
  float circleSize =
    mix(
      pow(scaled(0.0, 3.0, args.time), 2.0) * 0.75 + 0.1,
      1.0,
      connectedAnimation
    ) *
    0.33;
  vec2 rotatedCoords = rotate(
    args.st,
    -args.time * pi -
      connectedAnimation * pi * 2.0 -
      pi * 2.0 * 5.0 * silkySmooth(scaled(0.0, 5.0, args.time), 2.0)
  );

  float strokeWidth = mix(circleSize / 2.0, circleSize, connectedAnimation);
  float connecting = abs(length(args.st) - circleSize) - strokeWidth;

  float connected = length(args.st) - circleSize;
  float idleDist = mix(connecting, connected, connectedAnimation);

  float d = min(sdf.distance, idleDist);
  sdf.distance = mix(sdf.distance, d, args.amount);
  float angle = atan(rotatedCoords.y, rotatedCoords.x);
  float alpha = mix(
    min(1.0, scaled(-pi, pi, angle)),
    1.0,
    connectedLinearAnimation
  );

  float spinningCircleDist =
    length(
      rotatedCoords -
        vec2(-mix(circleSize, strokeWidth, connectedAnimation), 0.0)
    ) -
    strokeWidth;

  alpha = min(
    1.0,
    max(
      alpha,
      smoothstep(0.005, 0.0, spinningCircleDist) + connectedAnimation * 4.0
    )
  );

  sdf.color = mix(
    sdf.color,
    vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha),
    args.amount
  );
  return sdf;
}

ColoredSDF applyListenState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  float listenTimestamp, /* new */
  float touchDownTimestamp, /* new */
  float touchUpTimestamp, /* new */
  bool fadeBloopWhileListening /* new */
) {
  float breathingSequence = sin(args.time) * 0.5 + 0.5;
  float entryAnimation = fixedSpring(scaled(0.0, 3.0, args.duration), 0.9);

  float touch =
    fixedSpring(scaled(0.0, 1.0, args.time - touchDownTimestamp), 0.99) -
    fixedSpring(scaled(0.0, 0.8, args.time - touchUpTimestamp), 1.0);

  float listenAnimation = clamp(
    spring(scaled(0.0, 0.9, args.duration), 1.0),
    0.0,
    1.0
  );
  float radius = 0.0;
  float smoothlevel = micLevel;
  float l1 = smoothlevel;
  radius = 0.38 + l1 * 0.05 + breathingSequence * 0.03;
  radius *= 1.0 - (1.0 - entryAnimation) * 0.25;

  float ring = 10000.0;

  
  if (touch > 0.0) {
    touch = min(touch, listenAnimation); 
    float arcWidth = radius * 0.1;

    
    radius -= touch * arcWidth * 2.3;
    
    radius = min(
      radius,
      mix(radius, args.mainRadius - arcWidth * 2.3 - l1 * 0.01, touch)
    );

    float startAngle = 0.0;
    float arcLengthTouch =
      smoothstep(0.04, 1.0, touch) * pi * (1.0 - arcWidth / 3.0 / radius);

    float arcLength = 0.0;
    float radiusTouch =
      radius * fixedSpring(scaled(0.0, 1.0, args.duration), 1.0) * args.amount +
      l1 * 0.01;

    radiusTouch +=
      arcWidth * 1.3 * mix(-1.0, 1.0, smoothstep(0.0, 0.12, touch));

    float ringRadius = 0.0;
    arcLength = arcLengthTouch;
    ringRadius = radiusTouch;
    startAngle = pi / 2.0 - (args.time - touchDownTimestamp) / 2.0;

    ring = arc(args.st, startAngle, arcLength, ringRadius, arcWidth); 
  }

  float d = length(args.st) - radius;

  d = min(d, ring);

  sdf.distance = mix(sdf.distance, d, args.amount);

  if (fadeBloopWhileListening) {
    
    sdf.color.a = mix(
      sdf.color.a,
      mix(1.0, 1.0 - l1 * 0.6, listenAnimation),
      args.amount
    );
  } else {
    sdf.color.a = 1.0;
  }

  return sdf;
}

ColoredSDF applyThinkState(ColoredSDF sdf, SDFArgs args) {
  float d = 1000.0; 
  int count = 5; 
  float entryAnimation = spring(scaled(0.0, 1.0, args.duration), 1.0);

  float thinkingDotEntryAnimation = spring(
    scaled(0.1, 1.1, args.duration),
    1.0
  );
  float thinkingDotRadius =
    mix(0.2, 0.06, thinkingDotEntryAnimation) * args.amount;

  
  args.st.x -= thinkingDotRadius * 0.5 * thinkingDotEntryAnimation;

  for (int i = 0; i < count; i++) {
    float f = float(float(i) + 0.5) / float(count); 
    float a =
      -f * pi * 2.0 +
      args.time / 3.0 +
      spring(scaled(0.0, 10.0, args.duration), 1.0) * pi / 2.0;
    float ringRadi = args.mainRadius * 0.45 * entryAnimation;

    
    ringRadi -=
      (sin(
        entryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 3.0 -
          silkySmooth(args.time / 4.0, 2.0) * pi * 1.0
      ) *
        0.5 +
        0.5) *
      args.mainRadius *
      0.1;

    vec2 pos = vec2(cos(a), sin(a)) * ringRadi;
    float dd = length(args.st - pos) - args.mainRadius * 0.5;

    
    d = opSmoothUnion(
      d,
      dd,
      0.03 * scaled(0.0, 10.0, args.duration) + 0.8 * (1.0 - entryAnimation)
    );

    
    float dotAngle = f * pi * 2.0;
    float dotRingRadius =
      (sin(
        thinkingDotEntryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 0.1 * pi * 4.0
      ) *
        0.5 +
        0.5) *
      thinkingDotRadius *
      0.3;
    vec2 dotPos =
      vec2(-args.mainRadius, args.mainRadius) * 0.8 * thinkingDotEntryAnimation;
    vec2 dotOffset =
      vec2(cos(dotAngle + args.time), sin(dotAngle + args.time)) *
      dotRingRadius;
    float dotD = length(args.st - dotPos - dotOffset) - thinkingDotRadius * 0.8;
    d = opSmoothUnion(
      d,
      dotD,
      (1.0 - min(thinkingDotEntryAnimation, args.amount)) * thinkingDotRadius
    );
  }
  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  int barCount = 4;
  for (int i = 0; i < barCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.44;
    float h = w;

    
    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0); 
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));

  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applyListenAndSpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  vec4 avgMag,
  vec4 cumulativeAudio,
  int binCount,
  vec3 bloopColorMain,
  vec3 bloopColorLow,
  vec3 bloopColorMid,
  vec3 bloopColorHigh,
  sampler2D uTextureNoise,
  bool listening,
  bool isAdvancedBloop
) {
  float entryAnimation = fixedSpring(scaled(0.0, 2.0, args.duration), 0.92);

  
  
  float radius =
    (listening ? 0.37 : 0.43) * (1.0 - (1.0 - entryAnimation) * 0.25) +
    micLevel * 0.065;

  
  
  
  float maxDisplacement = 0.01;

  
  float oscillationPeriod = 4.0;
  
  float displacementOffset =
    maxDisplacement * sin(2.0 * pi / oscillationPeriod * args.time);
  
  vec2 adjusted_st = args.st - vec2(0.0, displacementOffset);

  
  if (!isAdvancedBloop) {
    sdf.color = mix(sdf.color, vec4(bloopColorMain, 1.0), args.amount);
    sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);
    return sdf;
  }

  
  
  vec4 uAudioAverage = avgMag;
  vec4 uCumulativeAudio = cumulativeAudio;

  
  float scaleFactor = 1.0 / (2.0 * radius);
  vec2 uv = adjusted_st * scaleFactor + 0.5;
  uv.y = 1.0 - uv.y;

  
  float noiseScale = 1.25; 
  float windSpeed = 0.075; 
  float warpPower = 0.19; 
  float waterColorNoiseScale = 18.0; 
  float waterColorNoiseStrength = 0.01; 
  float textureNoiseScale = 1.0; 
  float textureNoiseStrength = 0.08; 
  float verticalOffset = 0.09; 
  float waveSpread = 1.0; 
  float layer1Amplitude = 1.0; 
  float layer1Frequency = 1.0; 
  float layer2Amplitude = 1.0; 
  float layer2Frequency = 1.0; 
  float layer3Amplitude = 1.0; 
  float layer3Frequency = 1.0; 
  float fbmStrength = 1.0; 
  float fbmPowerDamping = 0.55; 
  float overallSoundScale = 1.0; 
  float blurRadius = 1.0;
  float timescale = 1.0;

  
  float time = args.time * timescale * 0.85;

  vec3 sinOffsets = vec3(
    uCumulativeAudio.x * 0.15 * overallSoundScale,
    -uCumulativeAudio.y * 0.5 * overallSoundScale,
    uCumulativeAudio.z * 1.5 * overallSoundScale
  );
  verticalOffset += 1.0 - waveSpread;

  
  float noiseX = cnoise(
    vec3(
      uv * 1.0 + vec2(0.0, 74.8572),
      (time + uCumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
    )
  );
  float noiseY = cnoise(
    vec3(
      uv * 1.0 + vec2(203.91282, 10.0),
      (time + uCumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
    )
  );

  uv += vec2(noiseX * 2.0, noiseY) * warpPower;

  
  float noiseA =
    cnoise(vec3(uv * waterColorNoiseScale + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(
      vec3(uv * waterColorNoiseScale * 2.2 + vec2(723.937, 0.0), time * 0.4)
    ) *
      0.5;
  uv += noiseA * waterColorNoiseStrength;
  uv.y -= verticalOffset;

  
  vec2 textureUv = uv * textureNoiseScale;
  float textureSampleR0 = texture(uTextureNoise, textureUv).r;
  float textureSampleG0 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp0 =
    mix(
      textureSampleR0 - 0.5,
      textureSampleG0 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(63.861 + uCumulativeAudio.x * 0.05, 368.937);
  float textureSampleR1 = texture(uTextureNoise, textureUv).r;
  float textureSampleG1 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp1 =
    mix(
      textureSampleR1 - 0.5,
      textureSampleG1 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(272.861, 829.937 + uCumulativeAudio.y * 0.1);
  textureUv += vec2(180.302 - uCumulativeAudio.z * 0.1, 819.871);
  float textureSampleR3 = texture(uTextureNoise, textureUv).r;
  float textureSampleG3 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp3 =
    mix(
      textureSampleR3 - 0.5,
      textureSampleG3 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  uv += textureNoiseDisp0;

  
  vec2 st = uv * noiseScale;

  vec2 q = vec2(0.0);
  q.x = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.a * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.x * 0.136 * overallSoundScale)
  );

  vec2 r = vec2(0.0);
  r.x = fbm(
    st +
      1.0 * q +
      vec2(0.3, 9.2) +
      0.15 * (time + uCumulativeAudio.y * 0.234 * overallSoundScale)
  );
  r.y = fbm(
    st +
      1.0 * q +
      vec2(8.3, 0.8) +
      0.126 * (time + uCumulativeAudio.z * 0.165 * overallSoundScale)
  );

  float f = fbm(st + r - q);
  float fullFbm = (f + 0.6 * f * f + 0.7 * f + 0.5) * 0.5;
  fullFbm = pow(fullFbm, fbmPowerDamping);
  fullFbm *= fbmStrength;

  
  blurRadius = blurRadius * 1.5;
  vec2 snUv =
    (uv + vec2((fullFbm - 0.5) * 1.2) + vec2(0.0, 0.025) + textureNoiseDisp0) *
    vec2(layer1Frequency, 1.0);
  float sn =
    noise(
      snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)
    ) *
    2.0 *
    layer1Amplitude;
  float sn2 = smoothstep(
    sn - 1.2 * blurRadius,
    sn + 1.2 * blurRadius,
    (snUv.y - 0.5 * waveSpread) *
      (5.0 - uAudioAverage.x * 0.1 * overallSoundScale * 0.5) +
      0.5
  );

  vec2 snUvBis =
    (uv + vec2((fullFbm - 0.5) * 0.85) + vec2(0.0, 0.025) + textureNoiseDisp1) *
    vec2(layer2Frequency, 1.0);
  float snBis =
    noise(
      snUvBis * 4.0 +
        vec2(
          sin(sinOffsets.y * 0.15) * 2.4 + 293.0,
          time * 1.0 + sinOffsets.y * 0.5
        )
    ) *
    2.0 *
    layer2Amplitude;
  float sn2Bis = smoothstep(
    snBis - (0.9 + uAudioAverage.y * 0.4 * overallSoundScale) * blurRadius,
    snBis + (0.9 + uAudioAverage.y * 0.8 * overallSoundScale) * blurRadius,
    (snUvBis.y - 0.6 * waveSpread) * (5.0 - uAudioAverage.y * 0.75) + 0.5
  );

  vec2 snUvThird =
    (uv + vec2((fullFbm - 0.5) * 1.1) + textureNoiseDisp3) *
    vec2(layer3Frequency, 1.0);
  float snThird =
    noise(
      snUvThird * 6.0 +
        vec2(
          sin(sinOffsets.z * 0.1) * 2.4 + 153.0,
          time * 1.2 + sinOffsets.z * 0.8
        )
    ) *
    2.0 *
    layer3Amplitude;
  float sn2Third = smoothstep(
    snThird - 0.7 * blurRadius,
    snThird + 0.7 * blurRadius,
    (snUvThird.y - 0.9 * waveSpread) * 6.0 + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  
  vec3 sinColor;
  sinColor = blendLinearBurn_13_5(bloopColorMain, bloopColorLow, 1.0 - sn2);
  sinColor = blendLinearBurn_13_5(
    sinColor,
    mix(bloopColorMain, bloopColorMid, 1.0 - sn2Bis),
    sn2
  );
  sinColor = mix(
    sinColor,
    mix(bloopColorMain, bloopColorHigh, 1.0 - sn2Third),
    sn2 * sn2Bis
  );

  
  sdf.color = mix(sdf.color, vec4(sinColor, 1), args.amount);

  
  sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);

  return sdf;
}

float micSdf(vec2 st, float muted) {
  float d = 100.0;
  float strokeWidth = 0.03;
  vec2 elementSize = vec2(0.12, 0.26);
  vec2 elementPos = vec2(0.0, elementSize.y * 0.585);
  float element = sdRoundedBox(
    st - elementPos,
    elementSize,
    vec4(min(elementSize.x, elementSize.y))
  );
  element = element - strokeWidth;
  d = min(d, element);

  vec2 standSize = elementSize * 2.2;
  vec2 standPos = vec2(elementPos.x, elementPos.y - 0.05);
  st.y += 0.08;
  float ta = -pi / 2.0; 
  float tb = pi / 2.0; 
  float w = 0.0;
  float stand = sdArc(
    st - standPos,
    vec2(sin(ta), cos(ta)),
    vec2(sin(tb), cos(tb)),
    standSize.x,
    w
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(standSize.x, 0.06), vec2(standSize.x, 0.0))
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(-standSize.x, 0.06), vec2(-standSize.x, 0.0))
  );

  float foot = sdSegment(
    st - standPos,
    vec2(0.0, -standSize.x),
    vec2(0.0, -standSize.x * 1.66)
  );
  foot = min(
    foot,
    sdSegment(
      st - standPos,
      vec2(-standSize.x * 0.68, -standSize.x * 1.66),
      vec2(standSize.x * 0.68, -standSize.x * 1.66)
    )
  );
  stand = min(stand, foot);

  d = min(d, abs(stand) - strokeWidth);

  return d;
}

ColoredSDF applyBottomAlignedBarsAndMicState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float micLevel,
  bool isDarkMode
) {
  float d = 1000.0;
  int barCount = 5;
  int loopCount = barCount;
  if (args.amount == 0.0) {
    loopCount = 1; 
  }
  for (int i = 0; i < loopCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.42;
    float h = w;

    
    float entryDuration = 1.8;
    float entryAnimation =
      fixedSpring(scaled(0.0, entryDuration, args.duration), 0.94) *
      args.amount;
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.x *= entryAnimation;

    if (i == 0) {
      float micScale = mix(6.0 - micLevel * 2.0, 6.0, args.amount);
      float yOffset = w * 2.0;
      d =
        micSdf(
          (args.st - pos + vec2(-w * 0.15 * args.amount, yOffset)) * micScale,
          1.0 - args.amount
        ) /
        micScale;
    } else {
      
      h += avgMag[i - 1] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1) * 0.7;
      h = mix(w, h, smoothstep(0.8, 1.0, entryAnimation));

      float bubbleInDur = 0.5;
      float bubbleOutDur = 0.4;

      
      float bubbleEffect =
        fixedSpring(
          scaled(
            f / 4.0,
            f / 4.0 + bubbleInDur,
            args.duration - entryDuration / 8.0
          ),
          1.0
        ) *
        pow(
          1.0 -
            scaled(
              f / 8.0 + bubbleInDur / 8.0,
              f / 4.0 + bubbleInDur / 8.0 + bubbleOutDur,
              args.duration - entryDuration / 8.0
            ),
          2.0
        );

      h += bubbleEffect * min(h, w);

      
      w *= args.amount;
      h *= args.amount;

      h = min(h, 0.23); 

      pos.y -= 0.25;
      pos.y += h;
      pos.y += bubbleEffect * w * 0.5;

      float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
      d = min(d, dd);
    }
  }

  sdf.distance = d; 
  sdf.color = mix(
    sdf.color,
    isDarkMode
      ? vec4(1.0)
      : vec4(0.0, 0.0, 0.0, 1.0),
    args.amount
  );
  return sdf;
}

ColoredSDF applyHaltState(ColoredSDF sdf, SDFArgs args) {
  
  float radius = mix(
    0.4,
    mix(0.4, 0.45, args.amount),
    sin(args.time * 0.25) * 0.5 + 0.5
  );
  float strokeWidth = mix(radius / 2.0, 0.02, args.amount);

  
  radius -= strokeWidth;

  radius *= mix(0.7, 1.0, args.amount);
  float circle = abs(length(args.st) - radius) - strokeWidth;

  sdf.distance = mix(sdf.distance, circle, args.amount);
  sdf.color.a = mix(sdf.color.a, pow(0.8, 2.2), scaled(0.5, 1.0, args.amount));
  return sdf;
}

vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return blendNormal(base, blend) * opacity + base * (1.0 - opacity);
}

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float micLevel;
  float touchDownTimestamp;
  float touchUpTimestamp;
  float stateListen;
  float listenTimestamp;
  float stateThink;
  float thinkTimestamp;
  float stateSpeak;
  float speakTimestamp;
  float readyTimestamp;
  float stateHalt;
  float haltTimestamp;
  float stateFailedToConnect;
  float failedToConnectTimestamp;
  vec4 avgMag;
  vec4 cumulativeAudio;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isDarkMode;
  bool fadeBloopWhileListening;
  bool isNewBloop;
  bool isAdvancedBloop;
  vec3 bloopColorMain;
  vec3 bloopColorLow;
  vec3 bloopColorMid;
  vec3 bloopColorHigh;
} ubo; 

uniform sampler2D uTextureNoise; 

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;

  SDFArgs idleArgs = args;
  SDFArgs listenArgs = args;
  SDFArgs thinkArgs = args;
  SDFArgs speakArgs = args;
  SDFArgs haltArgs = args;
  SDFArgs failedToConnectArgs = args;

  idleArgs.amount = 1.0;
  listenArgs.amount = ubo.stateListen;
  thinkArgs.amount = ubo.stateThink;
  speakArgs.amount = ubo.stateSpeak;
  haltArgs.amount = ubo.stateHalt;
  failedToConnectArgs.amount = ubo.stateFailedToConnect;

  idleArgs.duration = ubo.time - ubo.readyTimestamp;
  listenArgs.duration = ubo.time - ubo.listenTimestamp;
  thinkArgs.duration = ubo.time - ubo.thinkTimestamp;
  speakArgs.duration = ubo.time - ubo.speakTimestamp;
  haltArgs.duration = ubo.time - ubo.haltTimestamp;
  failedToConnectArgs.duration = ubo.time - ubo.failedToConnectTimestamp;

  if (ubo.isNewBloop) {
    sdf = applyIdleState(sdf, idleArgs, ubo.isDarkMode);
  } else {
    sdf = applyIdleStateLegacy(sdf, idleArgs, ubo.isDarkMode);
  }

  if (failedToConnectArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, failedToConnectArgs);
  }

  if (listenArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      if (speakArgs.amount > 0.0) {
        listenArgs.amount = 1.0;
      }

      
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        true,
        ubo.isAdvancedBloop
      );
    } else {
      sdf = applyListenState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.listenTimestamp,
        ubo.touchDownTimestamp,
        ubo.touchUpTimestamp,
        ubo.fadeBloopWhileListening
      );
    }
  }

  if (thinkArgs.amount > 0.0) {
    sdf = applyThinkState(sdf, thinkArgs);
  }

  if (speakArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        speakArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        false,
        ubo.isAdvancedBloop
      );
    } else {
      float silenceDuration = ubo.time - ubo.silenceTimestamp;
      sdf = applySpeakState(
        sdf,
        speakArgs,
        ubo.avgMag,
        ubo.silenceAmount,
        silenceDuration
      );
    }
  }

  if (haltArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, haltArgs);
  }

  float clampingTolerance = 0.0075 / ubo.screenScaleFactor;
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  if (!ubo.isNewBloop) {
    alpha *= scaled(0.0, 1.0, ubo.time);
  }
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`,vt=`#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`;class tn{#o;#i;#n;#a=[];#s={};#e;#t;static#r="BlorbUniformsObject";constructor(n,t){this.#n=n;const i=n.getUniformBlockIndex(t,tn.#r),a=n.getActiveUniformBlockParameter(t,i,n.UNIFORM_BLOCK_DATA_SIZE);this.#e=n.createBuffer(),n.bindBuffer(n.UNIFORM_BUFFER,this.#e),n.bufferData(n.UNIFORM_BUFFER,a,n.DYNAMIC_DRAW);const s=0;n.bindBufferBase(n.UNIFORM_BUFFER,s,this.#e),n.uniformBlockBinding(t,i,s);const l=n.getActiveUniformBlockParameter(t,i,n.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);this.#a=[],this.#s={};for(let m=0;m<l.length;m++){const v=l[m],h=n.getActiveUniform(t,v);if(!h)throw new Error("No uniformInfo for index "+v);let b=h.name;b=b.replace(/\[0\]$/,"");const f=n.getActiveUniforms(t,[v],n.UNIFORM_OFFSET)[0];this.#a.push(b),this.#s[b]=f}this.#t=new ArrayBuffer(a),this.#o=new Float32Array(this.#t),this.#i=new Int32Array(this.#t)}setVariablesAndRender(n){for(const t of this.#a){const[,i]=t.split("."),s=this.#s[t]/4,l=n[i];typeof l=="number"?this.#o[s]=l:typeof l=="boolean"?this.#i[s]=l?1:0:Array.isArray(l)&&this.#o.set(l,s)}this.#n.bindBuffer(this.#n.UNIFORM_BUFFER,this.#e),this.#n.bufferSubData(this.#n.UNIFORM_BUFFER,0,this.#t),this.#n.drawArrays(this.#n.TRIANGLE_STRIP,0,6)}}function y(e){const n=e.replace("#",""),t=parseInt(n.substring(0,2),16)/255,i=parseInt(n.substring(2,4),16)/255,a=parseInt(n.substring(4,6),16)/255;return new Float32Array([t,i,a])}const J={BLUE:{bloopColorMain:y("#DCF7FF"),bloopColorLow:y("#0181FE"),bloopColorMid:y("#A4EFFF"),bloopColorHigh:y("#FFFDEF")},DARK_BLUE:{bloopColorMain:y("#DAF5FF"),bloopColorLow:y("#0066CC"),bloopColorMid:y("#2EC6F5"),bloopColorHigh:y("#72EAF5")},GREYSCALE:{bloopColorMain:y("#D7D7D7"),bloopColorLow:y("#303030"),bloopColorMid:y("#989898"),bloopColorHigh:y("#FFFFFF")},WHITE:{bloopColorMain:y("#FFFFFF"),bloopColorLow:y("#FFFFFF"),bloopColorMid:y("#FFFFFF"),bloopColorHigh:y("#FFFFFF")},BLACK:{bloopColorMain:y("#000000"),bloopColorLow:y("#000000"),bloopColorMid:y("#000000"),bloopColorHigh:y("#000000")}},gt=e=>{const n=An();return e?J.BLUE:n?J.WHITE:J.BLACK},bn=[300,300],pt={bands:4,loPass:0,hiPass:400},ht=e=>{const n=t=>{let s=1-Math.max(-100,Math.min(-10,t))*-1/100;return s=Math.sqrt(s),s};return e.map(t=>t===-1/0?0:n(t))};function Fn(e,n){const[t,i]=r.useState([]),a=r.useRef(void 0);return r.useEffect(()=>{if(!e)return;if(!a.current){const f=new AudioContext,u=f.createMediaElementSource(e),o=f.createAnalyser();u.connect(o),o.connect(f.destination),a.current={audioContext:f,mediaElementAudioSourceNode:u,analyserNode:o}}const{analyserNode:s,audioContext:l}=a.current,m=s?.frequencyBinCount??0,v=new Float32Array(m),b=setInterval(()=>{if(!s)return;s.getFloatFrequencyData(v);let f=v.slice(n.loPass,n.hiPass);const u=ht(f),o=Math.ceil(u.length/n.bands),x=[];for(let d=0;d<n.bands;d++){const c=u.slice(d*o,(d+1)*o).reduce((A,g)=>A+g,0);x.push(c/o)}i(x)},n.updateInterval);return()=>{clearInterval(b),l&&l.close()}},[e,n.bands,n.hiPass,n.loPass,n.updateInterval]),t}const bt=e=>{const n=Fn(e,{bands:nn,updateInterval:B,loPass:0,hiPass:400,analyserOptions:{fftSize:Dn}});return n.length===0?Tn:n},xt=(e,n)=>{const t=bt(e),i=Mn(t,{sampleRate:Rn,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),a=en({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:i,cumulativeMagnitude:a}},St=e=>{const[n,t]=r.useState({audioData:[0,0,0,0],cumulativeAudioData:[0,0,0,0]}),i=r.useRef([0,0,0,0]),a=r.useRef(void 0),s=r.useRef(performance.now()),{bandMagnitudes:l,cumulativeMagnitude:m}=xt(e,{bands:3,bins:1,gainMultipliers:[10,1,1]});i.current=[...l,m].flat();const v=r.useCallback(()=>{const h=performance.now(),b=(h-s.current)/1e3;s.current=h;const f=i.current,{audioData:u,cumulativeAudioData:o}=n,x=Ye({deltaTimeS:b,audioDataRaw:f,prevAudioData:u,prevCumulativeAudioData:o});t(x)},[n]);return r.useEffect(()=>(a.current||(a.current=window.setInterval(v,B)),()=>{clearInterval(a.current),a.current=void 0}),[v]),n};function En({url:e,readyToPlay:n}){const t=r.useRef(void 0);return r.useEffect(()=>(t.current||(t.current=document.createElement("audio")),()=>{t.current?.remove()}),[]),r.useEffect(()=>{e&&t.current&&t.current.src!==e&&n&&(t.current.crossOrigin="anonymous",t.current.src=e,t.current.play())},[n,e]),t.current}function At({className:e,url:n}){const[t,i]=r.useState(!1),a=En({url:n,readyToPlay:t}),s=Fn(a,pt),l=r.useMemo(()=>[0,0,0,0],[]);return p.jsx(Pn,{className:e,isAdvanced:!1,avgMag:s,cumulativeAudioData:l,onRenderComplete:()=>i(!0)})}function yt({className:e,url:n}){const[t,i]=r.useState(!1),a=En({url:n,readyToPlay:t}),s=St(a),{audioData:l,cumulativeAudioData:m}=s;return p.jsx(Pn,{className:e,isAdvanced:!0,avgMag:l,cumulativeAudioData:m,onRenderComplete:()=>i(!0)})}const Pn=({className:e,avgMag:n,cumulativeAudioData:t,isAdvanced:i,onRenderComplete:a})=>{const s=An(),l=r.useMemo(()=>performance.now()/1e3,[]),m=r.useMemo(()=>performance.now()/1e3,[]),v=r.useRef(void 0),[h,b]=r.useState(bn),{canvasSizeRef:f,handleCanvasSizeUpdate:u}=re(bn),o=r.useCallback(S=>{b([S.width,S.height])},[]),[x,d]=r.useState(performance.now()/1e3);r.useEffect(()=>{const S=setInterval(()=>{d(performance.now()/1e3)},B);return()=>clearInterval(S)},[]);const c=gt(i),A=we({viewport:h,canvasSize:f.current,shouldMeasurePerf:!0,source:"VoicePicker"}),g=Te({shouldCalibrate:!0,viewport:h,initialScale:1});return v.current={time:x,micLevel:0,stateListen:0,listenTimestamp:0,stateThink:0,thinkTimestamp:0,stateSpeak:1,speakTimestamp:m,readyTimestamp:l,stateHalt:0,haltTimestamp:0,touchDownTimestamp:0,touchUpTimestamp:0,stateFailedToConnect:0,failedToConnectTimestamp:0,avgMag:n,cumulativeAudio:t,isNewBloop:!0,isAdvancedBloop:i,bloopColorMain:Array.from(c.bloopColorMain),bloopColorLow:Array.from(c.bloopColorLow),bloopColorMid:Array.from(c.bloopColorMid),bloopColorHigh:Array.from(c.bloopColorHigh),isDarkMode:s,screenScaleFactor:window.devicePixelRatio,viewport:h,silenceAmount:0,silenceTimestamp:0,fadeBloopWhileListening:!1},p.jsx(Qe,{className:Yn("flex items-center justify-center",e),variablesRef:v,onViewportUpdate:o,onRenderComplete:a,textureImage:kn,textureName:"uTextureNoise",onGlAvailable:A,onCanvasSizeUpdate:u,scale:g,GLUniformsSetter:tn,vert:vt,frag:mt})},Ct={offscreenLeft:{x:"-24rem",opacity:0},left:{x:"-12rem",opacity:.5},center:{x:"0",opacity:1},right:{x:"12rem",opacity:.5},offscreenRight:{x:"24rem",opacity:0}};function Ft({conversationId:e,onClose:n,cameFromNux:t=!1,initialVoiceName:i}){const{voiceName:a}=yn(),s=le(),[l,m]=r.useState(!1),v=cn.getGizmoId(e),[h,b]=r.useState(!1),[f,u]=r.useState(!1);r.useEffect(()=>{requestAnimationFrame(()=>b(!0))},[]);const[o,x]=r.useState(!1),[d,c]=r.useState(null);r.useEffect(()=>{if(s.length>0){const _=s.findIndex(ln=>ln.voice===(i||a));_>=0?c(_):c(2),x(!0)}},[s,a,i]);const A=d!=null?(d-2+s.length)%s.length:0,g=d!=null?(d-1+s.length)%s.length:1,S=d!=null?(d+1)%s.length:3,w=d!=null?(d+2)%s.length:4,C=s[d??0],M=s[A],O=s[g],V=s[S],j=s[w],R=_=>{c(_)},{stopVoiceMode:q,startVoiceMode:z}=ye({requestMicPermissions:t}),L=ce(e),{setValue:k}=me(Zn.VoiceName),W=wn(_=>_.voiceMode),F=t&&!v?"advanced":W,D=r.useCallback(async()=>{u(!t),setTimeout(async()=>{m(!0);const _=d!=null?s[d]?.voice:s[0]?.voice;if(t||_!==a){t||T.voiceSelected.click({action:"changed",voice:_}),k(_),await q(),ue(`/?model=${L??dn}`);try{await z({conversation_id:void 0,model_slug:L??dn,eventSource:"voice_picker",voice_mode:F,voice:_,clientThreadId:Jn(),gizmo_id:cn.getGizmoId(e)})}catch(In){Qn.addError(`Failed to start voice mode after voice picker: ${In}`)}}else T.voiceSelected.click({action:"kept",voice:a});m(!1),n()},fn)},[t,e,a,L,n,d,k,z,q,F,s]),G=()=>{u(!0),setTimeout(n,fn)};de({setSelectedVoiceIndex:c,prevVoiceIndex:g,nextVoiceIndex:S});const[on,an]=r.useState(!1),sn=_=>{_==="prev"?R(g):_==="next"&&R(S),an(!0),setTimeout(()=>{an(!1)},175)},rn=r.useMemo(()=>({className:"h-max min-h-bloop w-max min-w-bloop",url:C?.preview_url}),[C?.preview_url]);return!o||d==null?p.jsx("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full bg-token-main-surface-primary"}):p.jsxs("div",{className:`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-800 ${h&&!f?"opacity-100":"opacity-0"}`,children:[p.jsx("h1",{className:"mb-8 mt-36 text-3xl font-semibold",children:p.jsx(N,{id:"2whyE9",defaultMessage:"Choose a voice"})}),p.jsx("div",{className:"flex h-full w-full items-center justify-center",children:C?t&&!v||F==="advanced"?p.jsx(yt,{...rn}):p.jsx(At,{...rn}):null}),p.jsx("div",{className:"mb-8 flex items-center justify-between text-center",children:p.jsxs("div",{className:"relative flex h-24 w-48",children:[p.jsx(P,{voice:M,variant:"offscreenLeft"},M?.name),p.jsx(P,{voice:O,variant:"left",onClick:()=>R(g)},O?.name),p.jsx(xn,{direction:"prev",onClick:()=>sn("prev"),isFading:on}),p.jsx(P,{voice:C,variant:"center"},C?.name),p.jsx(xn,{direction:"next",onClick:()=>sn("next"),isFading:on}),p.jsx(P,{voice:V,variant:"right",onClick:()=>R(S)},V?.name),p.jsx(P,{voice:j,variant:"offscreenRight"},j?.name),p.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-52 transform bg-gradient-to-r from-[var(--main-surface-background)] to-transparent"}),p.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-52 transform bg-gradient-to-l from-[var(--main-surface-background)] to-transparent"}),p.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-96 transform bg-white dark:bg-gray-800"}),p.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-96 transform bg-white dark:bg-gray-800"})]})}),p.jsxs("div",{className:"mb-36 flex flex-col space-y-3",children:[p.jsx(un,{className:"w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold text-white",onClick:D,children:l?p.jsx(ne,{}):C?.voice===a&&!t?p.jsx(N,{id:"MyKAgb",defaultMessage:"Done"}):p.jsx(N,{id:"7+3LaJ",defaultMessage:"Start new chat"})}),p.jsx(un,{className:"w-52 rounded-full px-20 py-3 font-semibold text-black dark:text-white",color:"ghost",onClick:G,children:p.jsx(N,{id:"dUn4Wd",defaultMessage:"Cancel"})})]})]})}function P({voice:e,variant:n,onClick:t}){return p.jsxs(Ln.button,{onClick:t,className:"absolute flex w-48 select-none flex-col items-center justify-center",variants:Ct,animate:n,initial:n,transition:{duration:.25,ease:"easeInOut"},children:[p.jsx("p",{className:`text-lg ${n==="center"?"font-semibold":""}`,children:e?.name}),p.jsx("p",{className:"text-sm text-gray-600 dark:text-[var(--text-secondary)]",children:e?.description})]})}function xn({direction:e,onClick:n,isFading:t}){const i=e==="prev"?fe:ee,a=Sn(),s=e==="prev"?a.formatMessage({id:"ajuz05",defaultMessage:"Previous voice"}):a.formatMessage({id:"Dr8wrw",defaultMessage:"Next voice"});return p.jsx("button",{className:`duration-175 absolute ${e==="prev"?"-left-4":"-right-4"} top-2 z-50 transition-opacity ${t?"opacity-20":"opacity-100"}`,onClick:n,"aria-label":s,children:p.jsx(i,{className:"h-6 w-6 text-token-text-quaternary hover:text-token-text-secondary"})})}export{B,Qe as G,Ft as V,ye as a,Ae as b,kt as c,gt as d,we as e,Te as f,Rt as g,tn as h,mt as i,kn as n,Ye as s,Se as u,vt as v};
//# sourceMappingURL=lrmvad4oj50obtfz.js.map
