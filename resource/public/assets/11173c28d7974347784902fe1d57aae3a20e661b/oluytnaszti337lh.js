import{r as c,a as O,c as L,v as T,j as P}from"./nqo5y2f0dorhrqsr.js";import{g5 as B,g6 as k,gh as A,gi as E,eI as b,F,f as I,bv as U,J as Q,gj as H,ek as Z,be as $,u as q,cg as K}from"./dh0yl0m9q337gmci.js";import{S as z}from"./l35pvk6j2ug7fgbc.js";import{S as _}from"./oe9cfjaq1efams39.js";import{gV as D,bT as G,gW as J}from"./ktiwgucld5a8s55m.js";import{A as N}from"./c6ttvc5iok520ou8.js";const W=e=>c.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z",fill:"currentColor"}));function X({audioAssetPointer:e,conversationId:t}){const r=O(),[o,s]=c.useState(!1),a=c.useRef(!0),[l,m]=c.useState(void 0),n=c.useRef(null),i=B(),h=k(f=>f.isPlaying&&f.sourceUrl===l),d=c.useCallback(()=>{const f=A();if(f)n.current?n.current.then(()=>{f.stop(),n.current=null}):f.stop();else return},[]);c.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),c.useEffect(()=>()=>{E().isPlaying&&d()},[d]);const g=c.useCallback(async()=>{if(!i||!a.current)return;s(!0);const{url:f}=await N.fetch(r,{asset:e,conversationId:t});s(!1),m(f),i.changeSource(f),n.current=i.play()},[e,t,i,r]);return{togglePlayback:c.useCallback(()=>{if(i)h?d():(b.messagePlayback.click(),g());else return},[h,g,i,d]),isPlaying:h,isLoading:o}}class Y{capacity;cache;dispose;constructor({capacity:t,dispose:r}){this.capacity=t,this.cache=new Map,this.dispose=r}get(t){if(!this.cache.has(t))return null;const r=this.cache.get(t);return this.cache.delete(t),this.cache.set(t,r),r}set(t,r){if(this.cache.has(t)){this.cache.delete(t),this.cache.set(t,r);return}if(this.cache.size>=this.capacity){const o=this.cache.keys().next().value;this.delete(o)}this.cache.set(t,r)}delete(t){const r=this.cache.get(t);this.cache.delete(t),this.dispose&&this.dispose(r)}}function ee({conversationId:e,messageId:t}){const[r,o]=c.useState(!1),s=c.useRef({isMediaSourceAvailable:v(),mediaSourceFormat:M()??"n/a",playPromise:null,shouldAbortQueuedPlayback:!1}).current,a=L(),l=F(),{voiceName:m}=D(),n=`${e}.${t}.${m}`,i=B(),h=k(u=>u.isPlaying&&u.sourceUrl===y.get(n)?.src),d=c.useCallback(async()=>{if(!i)return;o(!0);const u={isMediaSourceAvailable:s.isMediaSourceAvailable,format:s.mediaSourceFormat};try{const S=await te({key:n,message_id:t,conversation_id:e,voice:m,onStreamingError:R=>{b.readAloud.error(R,u),o(!1),l.danger(a.formatMessage(w.playbackError,{error:R.message}))},onStreamingStart:()=>{o(!1)}});if(s.shouldAbortQueuedPlayback){s.shouldAbortQueuedPlayback=!1;return}i.changeSource(S),s.playPromise=i.play()}catch(S){b.readAloud.error(S,u),o(!1),l.danger(a.formatMessage(w.playbackError,{error:S.message}))}},[i,s,n,t,e,m,l,a]),g=c.useCallback(()=>{const u=A();u&&(s.playPromise?s.playPromise.then(()=>{u.stop(),s.playPromise=null}):u.stop())},[s]),p=c.useCallback(()=>{const u=A();u&&(u.state.isPlaying&&u.state.sourceUrl===y.get(n)?.src?g():(b.readAloud.click({isMediaSourceAvailable:s.isMediaSourceAvailable,format:s.mediaSourceFormat}),d()))},[n,s,d,g]);c.useEffect(()=>{r&&h&&o(!1)},[r,h]);const f=c.useRef(n);return c.useEffect(()=>{f.current=n}),c.useEffect(()=>(s.shouldAbortQueuedPlayback=!1,()=>{const u=E();u.isPlaying&&u.sourceUrl===y.get(f.current)?.src?g():s.shouldAbortQueuedPlayback=!0}),[s,g]),{togglePlayback:p,isPlaying:h,isLoading:r}}async function V({message_id:e,conversation_id:t,voice:r}){const o=await Q.synthesize({message_id:e,conversation_id:t,voice:r,format:M()}),s=o.headers.get("content-type")??"audio/aac";return{response:o,format:s}}async function te(e){return v()?se(e):ae(e)}async function ae({key:e,...t}){const r=y.get(e);if(r?.blob)return r.src;const{response:o,format:s}=await V(t),a=await o.arrayBuffer(),l=new Blob([a],{type:s}),m=x({key:e,src:URL.createObjectURL(l),format:s,blob:l});return y.set(e,m),m.src}async function se({key:e,onStreamingError:t,onStreamingStart:r,...o}){let s=y.get(e);s?.streaming&&(y.delete(e),s=null);let a,l;const m=oe(),n=new m;if(s)a=s,a.src=URL.createObjectURL(n);else{const{format:d,response:g}=await V(o);l=g,a=x({key:e,src:URL.createObjectURL(n),format:d})}const i=re(a.id),h={sourceopen:async()=>{i("sourceopen");const d=n.addSourceBuffer(a.format),g=async()=>{d.updating&&await new Promise(p=>d.addEventListener("updateend",p,{once:!0}))};if(a.segments.length&&!a.streaming){i("streaming from cache"),a.streaming=!0,r();for(const p of a.segments)d.appendBuffer(p),await g();n.readyState==="open"&&n.endOfStream(),a.streaming=!1,i("done streaming from cache");return}if(l){i("fetching audio");try{const p=l.body?.getReader();if(!p)return;for(;y.get(e)?.id===a.id;){const{done:f,value:u}=await p.read();if(f){i("done streaming"),a.streaming=!1,n.readyState==="open"&&n.endOfStream();break}if(!Array.from(n.sourceBuffers).includes(d)){i("stop streaming, source buffer removed"),a.streaming=!1;break}a.streaming||(i("start streaming"),a.streaming=!0,r()),d.appendBuffer(u),a.segments.push(u),await g()}}catch(p){if(i("error while streaming",p),a.streaming=!1,n.readyState==="open")try{n.endOfStream("network")}catch(f){b.readAloud.error(f)}y.delete(e),t(p)}}},sourceclose:()=>{i("sourceclose"),a.streaming&&(a.streaming=!1,y.get(e)?.id===a.id&&(i("sourceclosed while streaming, cleaning up cache"),y.delete(e)))},sourceended:U};for(const[d,g]of Object.entries(h))n.addEventListener(d,()=>{try{return g()}catch(p){b.readAloud.error(p)}});return y.set(e,a),a.src}const w=I({playbackError:{id:"useVoiceReadAloudAudio.playbackError",defaultMessage:"Failed to play message"}}),re=e=>U;function oe(){return v()?window.MediaSource:null}function v(){return!!M()}function M(){if("MediaSource"in window){const e=t=>H(t)&&MediaSource.isTypeSupported(t);if(e("audio/aac"))return"aac";if(e("audio/mpeg"))return"mp3";if(e("audio/ogg"))return"ogg"}}const x=e=>({id:T(),segments:[],streaming:!1,...e}),y=new Y({capacity:50,dispose:e=>{URL.revokeObjectURL(e.src)}}),pe=c.memo(function(t){const r=q("1923022511")?.value,o=Z(t.conversationId),{errCode:s}=G(t.message);if(!r||!o||s)return null;const a=$.getAudioAssetPointers(t.message.message)[0];return a?P.jsx(ne,{audioAssetPointer:a,conversationId:o}):P.jsx(ie,{...t,conversationId:o})});function ne({audioAssetPointer:e,conversationId:t}){const{isLoading:r,isPlaying:o,togglePlayback:s}=X({audioAssetPointer:e,conversationId:t});return P.jsx(j,{onClick:s,isPlaying:o,isLoading:r,playText:C.replay,playIcon:_})}function ie({conversationId:e,message:t}){const{isLoading:r,isPlaying:o,togglePlayback:s}=ee({conversationId:e,messageId:t.message.id});return P.jsx(j,{onClick:s,isPlaying:o,isLoading:r,playText:C.play,playIcon:W})}function j({onClick:e,isPlaying:t,isLoading:r,playText:o,playIcon:s}){let a,l;const m=L();return r?(a=K,l=C.loading):t?(a=z,l=C.stop):(a=s,l=o),P.jsx(J,{icon:a,label:l?m.formatMessage(l):void 0,disabled:r,onClick:e,style:t||r?{visibility:"visible"}:void 0,testId:"voice-play-turn-action-button"})}const C={replay:{id:"VoiceReadOutLoudButton.replay",defaultMessage:"Replay",description:"The tooltip for the replay button"},play:{id:"VoiceReadOutLoudButton.play",defaultMessage:"Read aloud",description:"The tooltip for the read aloud button"},stop:{id:"VoiceReadOutLoudButton.stop",defaultMessage:"Stop",description:"The tooltip for the stop button"},loading:{id:"VoiceReadOutLoudButton.loading",defaultMessage:"Loading",description:"The tooltip for the spinner"}};export{j as PlayButton,ne as VoiceMessagePlaybackButton,pe as VoicePlayButton,ie as VoiceReadAloudButton};
//# sourceMappingURL=oluytnaszti337lh.js.map
