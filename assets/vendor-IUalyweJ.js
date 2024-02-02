/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ga(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Ee={},rs=[],ot=()=>{},f_=()=>!1,Ur=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ka=t=>t.startsWith("onUpdate:"),Fe=Object.assign,qa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},p_=Object.prototype.hasOwnProperty,ae=(t,e)=>p_.call(t,e),q=Array.isArray,os=t=>wi(t)==="[object Map]",Br=t=>wi(t)==="[object Set]",Tl=t=>wi(t)==="[object Date]",Q=t=>typeof t=="function",Oe=t=>typeof t=="string",fn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",qh=t=>(me(t)||Q(t))&&Q(t.then)&&Q(t.catch),zh=Object.prototype.toString,wi=t=>zh.call(t),g_=t=>wi(t).slice(8,-1),Yh=t=>wi(t)==="[object Object]",za=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yi=Ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},__=/-(\w)/g,At=Vr(t=>t.replace(__,(e,n)=>n?n.toUpperCase():"")),m_=/\B([A-Z])/g,Is=Vr(t=>t.replace(m_,"-$1").toLowerCase()),Wr=Vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),wo=Vr(t=>t?`on${Wr(t)}`:""),pn=(t,e)=>!Object.is(t,e),Qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ir=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ya=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sl;const Qh=()=>Sl||(Sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qa(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?E_(s):Qa(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Oe(t)||me(t))return t}const y_=/;(?![^(]*\))/g,v_=/:([^]+)/,w_=/\/\*[^]*?\*\//g;function E_(t){const e={};return t.replace(w_,"").split(y_).forEach(n=>{if(n){const s=n.split(v_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ja(t){let e="";if(Oe(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=Ja(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const b_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",I_=Ga(b_);function Jh(t){return!!t||t===""}function C_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ti(t[s],e[s]);return n}function ti(t,e){if(t===e)return!0;let n=Tl(t),s=Tl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=fn(t),s=fn(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?C_(t,e):!1;if(n=me(t),s=me(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ti(t[o],e[o]))return!1}}return String(t)===String(e)}function T_(t,e){return t.findIndex(n=>ti(n,e))}const rA=t=>Oe(t)?t:t==null?"":q(t)||me(t)&&(t.toString===zh||!Q(t.toString))?JSON.stringify(t,Xh,2):String(t),Xh=(t,e)=>e&&e.__v_isRef?Xh(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Eo(s,r)+" =>"]=i,n),{})}:Br(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Eo(n))}:fn(e)?Eo(e):me(e)&&!q(e)&&!Yh(e)?String(e):e,Eo=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ut;class Zh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ut,!e&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ut;try{return ut=this,e()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function S_(t){return new Zh(t)}function R_(t,e=ut){e&&e.active&&e.effects.push(t)}function A_(){return ut}let Dn;class Xa{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,R_(this,i)}get dirty(){if(this._dirtyLevel===1){Kn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(P_(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),qn()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=rn,n=Dn;try{return rn=!0,Dn=this,this._runnings++,Rl(this),this.fn()}finally{Al(this),this._runnings--,Dn=n,rn=e}}stop(){var e;this.active&&(Rl(this),Al(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function P_(t){return t.value}function Rl(t){t._trackId++,t._depsLength=0}function Al(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ed(t.deps[e],t);t.deps.length=t._depsLength}}function ed(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let rn=!0,ea=0;const td=[];function Kn(){td.push(rn),rn=!1}function qn(){const t=td.pop();rn=t===void 0?!0:t}function Za(){ea++}function ec(){for(ea--;!ea&&ta.length;)ta.shift()()}function nd(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&ed(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ta=[];function sd(t,e,n){Za();for(const s of t.keys())if(s._dirtyLevel<e&&t.get(s)===s._trackId){const i=s._dirtyLevel;s._dirtyLevel=e,i===0&&(s._shouldSchedule=!0,s.trigger())}id(t),ec()}function id(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,ta.push(e.scheduler))}const rd=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},na=new WeakMap,Ln=Symbol(""),sa=Symbol("");function Qe(t,e,n){if(rn&&Dn){let s=na.get(t);s||na.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=rd(()=>s.delete(n))),nd(Dn,i)}}function Bt(t,e,n,s,i,r){const o=na.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!fn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?za(n)&&a.push(o.get("length")):(a.push(o.get(Ln)),os(t)&&a.push(o.get(sa)));break;case"delete":q(t)||(a.push(o.get(Ln)),os(t)&&a.push(o.get(sa)));break;case"set":os(t)&&a.push(o.get(Ln));break}Za();for(const c of a)c&&sd(c,2);ec()}const O_=Ga("__proto__,__v_isRef,__isVue"),od=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn)),Pl=N_();function N_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)Qe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Kn(),Za();const s=ue(this)[e].apply(this,n);return ec(),qn(),s}}),t}function k_(t){const e=ue(this);return Qe(e,"has",t),e.hasOwnProperty(t)}class ad{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?G_:hd:r?ud:ld).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=q(e);if(!i){if(o&&ae(Pl,n))return Reflect.get(Pl,n,s);if(n==="hasOwnProperty")return k_}const a=Reflect.get(e,n,s);return(fn(n)?od.has(n):O_(n))||(i||Qe(e,"get",n),r)?a:Je(a)?o&&za(n)?a:a.value:me(a)?i?fd(a):Ei(a):a}}class cd extends ad{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const c=gs(r);if(!rr(s)&&!gs(s)&&(r=ue(r),s=ue(s)),!q(e)&&Je(r)&&!Je(s))return c?!1:(r.value=s,!0)}const o=q(e)&&za(n)?Number(n)<e.length:ae(e,n),a=Reflect.set(e,n,s,i);return e===ue(i)&&(o?pn(s,r)&&Bt(e,"set",n,s):Bt(e,"add",n,s)),a}deleteProperty(e,n){const s=ae(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Bt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!fn(n)||!od.has(n))&&Qe(e,"has",n),s}ownKeys(e){return Qe(e,"iterate",q(e)?"length":Ln),Reflect.ownKeys(e)}}class x_ extends ad{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const M_=new cd,D_=new x_,L_=new cd(!0),tc=t=>t,Hr=t=>Reflect.getPrototypeOf(t);function Fi(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(pn(e,r)&&Qe(i,"get",e),Qe(i,"get",r));const{has:o}=Hr(i),a=s?tc:n?ic:ni;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function $i(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(pn(t,i)&&Qe(s,"has",t),Qe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ui(t,e=!1){return t=t.__v_raw,!e&&Qe(ue(t),"iterate",Ln),Reflect.get(t,"size",t)}function Ol(t){t=ue(t);const e=ue(this);return Hr(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function Nl(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=Hr(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?pn(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function kl(t){const e=ue(this),{has:n,get:s}=Hr(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Bt(e,"delete",t,void 0),r}function xl(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function Bi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),c=e?tc:t?ic:ni;return!t&&Qe(a,"iterate",Ln),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Vi(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=os(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?tc:e?ic:ni;return!e&&Qe(r,"iterate",c?sa:Ln),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function F_(){const t={get(r){return Fi(this,r)},get size(){return Ui(this)},has:$i,add:Ol,set:Nl,delete:kl,clear:xl,forEach:Bi(!1,!1)},e={get(r){return Fi(this,r,!1,!0)},get size(){return Ui(this)},has:$i,add:Ol,set:Nl,delete:kl,clear:xl,forEach:Bi(!1,!0)},n={get(r){return Fi(this,r,!0)},get size(){return Ui(this,!0)},has(r){return $i.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Bi(!0,!1)},s={get(r){return Fi(this,r,!0,!0)},get size(){return Ui(this,!0)},has(r){return $i.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vi(r,!1,!1),n[r]=Vi(r,!0,!1),e[r]=Vi(r,!1,!0),s[r]=Vi(r,!0,!0)}),[t,n,e,s]}const[$_,U_,B_,V_]=F_();function nc(t,e){const n=e?t?V_:B_:t?U_:$_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const W_={get:nc(!1,!1)},H_={get:nc(!1,!0)},j_={get:nc(!0,!1)},ld=new WeakMap,ud=new WeakMap,hd=new WeakMap,G_=new WeakMap;function K_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function q_(t){return t.__v_skip||!Object.isExtensible(t)?0:K_(g_(t))}function Ei(t){return gs(t)?t:sc(t,!1,M_,W_,ld)}function dd(t){return sc(t,!1,L_,H_,ud)}function fd(t){return sc(t,!0,D_,j_,hd)}function sc(t,e,n,s,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=q_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function as(t){return gs(t)?as(t.__v_raw):!!(t&&t.__v_isReactive)}function gs(t){return!!(t&&t.__v_isReadonly)}function rr(t){return!!(t&&t.__v_isShallow)}function pd(t){return as(t)||gs(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function gd(t){return ir(t,"__v_skip",!0),t}const ni=t=>me(t)?Ei(t):t,ic=t=>me(t)?fd(t):t;class _d{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Xa(()=>e(this._value),()=>Ji(this,1),()=>this.dep&&id(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return(!e._cacheable||e.effect.dirty)&&pn(e._value,e._value=e.effect.run())&&Ji(e,2),md(e),e.effect._dirtyLevel>=1&&Ji(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function z_(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=ot):(s=t.get,i=t.set),new _d(s,i,r||!i,n)}function md(t){rn&&Dn&&(t=ue(t),nd(Dn,t.dep||(t.dep=rd(()=>t.dep=void 0,t instanceof _d?t:void 0))))}function Ji(t,e=2,n){t=ue(t);const s=t.dep;s&&sd(s,e)}function Je(t){return!!(t&&t.__v_isRef===!0)}function Y_(t){return yd(t,!1)}function Q_(t){return yd(t,!0)}function yd(t,e){return Je(t)?t:new J_(t,e)}class J_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:ni(e)}get value(){return md(this),this._value}set value(e){const n=this.__v_isShallow||rr(e)||gs(e);e=n?e:ue(e),pn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),Ji(this,2))}}function cs(t){return Je(t)?t.value:t}const X_={get:(t,e,n)=>cs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Je(i)&&!Je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function vd(t){return as(t)?t:new Proxy(t,X_)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function on(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){jr(r,e,n)}return i}function _t(t,e,n,s){if(Q(t)){const r=on(t,e,n,s);return r&&qh(r)&&r.catch(o=>{jr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(_t(t[r],e,n,s));return i}function jr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){on(c,null,10,[t,o,a]);return}}Z_(t,n,i,s)}function Z_(t,e,n,s=!0){console.error(t)}let si=!1,ia=!1;const Be=[];let Ct=0;const ls=[];let Yt=null,Pn=0;const wd=Promise.resolve();let rc=null;function oc(t){const e=rc||wd;return t?e.then(this?t.bind(this):t):e}function em(t){let e=Ct+1,n=Be.length;for(;e<n;){const s=e+n>>>1,i=Be[s],r=ii(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ac(t){(!Be.length||!Be.includes(t,si&&t.allowRecurse?Ct+1:Ct))&&(t.id==null?Be.push(t):Be.splice(em(t.id),0,t),Ed())}function Ed(){!si&&!ia&&(ia=!0,rc=wd.then(Id))}function tm(t){const e=Be.indexOf(t);e>Ct&&Be.splice(e,1)}function nm(t){q(t)?ls.push(...t):(!Yt||!Yt.includes(t,t.allowRecurse?Pn+1:Pn))&&ls.push(t),Ed()}function Ml(t,e,n=si?Ct+1:0){for(;n<Be.length;n++){const s=Be[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Be.splice(n,1),n--,s()}}}function bd(t){if(ls.length){const e=[...new Set(ls)].sort((n,s)=>ii(n)-ii(s));if(ls.length=0,Yt){Yt.push(...e);return}for(Yt=e,Pn=0;Pn<Yt.length;Pn++)Yt[Pn]();Yt=null,Pn=0}}const ii=t=>t.id==null?1/0:t.id,sm=(t,e)=>{const n=ii(t)-ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Id(t){ia=!1,si=!0,Be.sort(sm);try{for(Ct=0;Ct<Be.length;Ct++){const e=Be[Ct];e&&e.active!==!1&&on(e,null,14)}}finally{Ct=0,Be.length=0,bd(),si=!1,rc=null,(Be.length||ls.length)&&Id()}}function im(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ee;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ee;d&&(i=n.map(g=>Oe(g)?g.trim():g)),h&&(i=n.map(Ya))}let a,c=s[a=wo(e)]||s[a=wo(At(e))];!c&&r&&(c=s[a=wo(Is(e))]),c&&_t(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(l,t,6,i)}}function Cd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const c=l=>{const u=Cd(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(me(t)&&s.set(t,null),null):(q(r)?r.forEach(c=>o[c]=null):Fe(o,r),me(t)&&s.set(t,o),o)}function Gr(t,e){return!t||!Ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Is(e))||ae(t,e))}let De=null,Td=null;function or(t){const e=De;return De=t,Td=t&&t.type.__scopeId||null,e}function rm(t,e=De,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Gl(-1);const r=or(e);let o;try{o=t(...i)}finally{or(r),s._d&&Gl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function bo(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:y}=t;let R,x;const U=or(t);try{if(n.shapeFlag&4){const J=i||s,oe=J;R=It(u.call(oe,J,h,r,g,d,m)),x=c}else{const J=e;R=It(J.length>1?J(r,{attrs:c,slots:a,emit:l}):J(r,null)),x=e.props?c:om(c)}}catch(J){Ks.length=0,jr(J,t,1),R=Ke(gn)}let $=R;if(x&&y!==!1){const J=Object.keys(x),{shapeFlag:oe}=$;J.length&&oe&7&&(o&&J.some(Ka)&&(x=am(x,o)),$=_s($,x))}return n.dirs&&($=_s($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),R=$,or(U),R}const om=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ur(n))&&((e||(e={}))[n]=t[n]);return e},am=(t,e)=>{const n={};for(const s in t)(!Ka(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function cm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Dl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Gr(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Dl(s,o,l):!0:!!o;return!1}function Dl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Gr(n,r))return!0}return!1}function lm({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Sd="components";function oA(t,e){return hm(Sd,t,!0,e)||t}const um=Symbol.for("v-ndc");function hm(t,e,n=!0,s=!1){const i=De||Ve;if(i){const r=i.type;if(t===Sd){const a=ry(r,!1);if(a&&(a===e||a===At(e)||a===Wr(At(e))))return r}const o=Ll(i[t]||r[t],e)||Ll(i.appContext[t],e);return!o&&s?r:o}}function Ll(t,e){return t&&(t[e]||t[At(e)]||t[Wr(At(e))])}const dm=t=>t.__isSuspense;function fm(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):nm(t)}const pm=Symbol.for("v-scx"),gm=()=>Tt(pm),Wi={};function us(t,e,n){return Rd(t,e,n)}function Rd(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=Ee){if(e&&r){const B=e;e=(...ye)=>{B(...ye),oe()}}const c=Ve,l=B=>s===!0?B:On(B,s===!1?1:void 0);let u,h=!1,d=!1;if(Je(t)?(u=()=>t.value,h=rr(t)):as(t)?(u=()=>l(t),h=!0):q(t)?(d=!0,h=t.some(B=>as(B)||rr(B)),u=()=>t.map(B=>{if(Je(B))return B.value;if(as(B))return l(B);if(Q(B))return on(B,c,2)})):Q(t)?e?u=()=>on(t,c,2):u=()=>(g&&g(),_t(t,c,3,[m])):u=ot,e&&s){const B=u;u=()=>On(B())}let g,m=B=>{g=$.onStop=()=>{on(B,c,4),g=$.onStop=void 0}},y;if(Yr)if(m=ot,e?n&&_t(e,c,3,[u(),d?[]:void 0,m]):u(),i==="sync"){const B=gm();y=B.__watcherHandles||(B.__watcherHandles=[])}else return ot;let R=d?new Array(t.length).fill(Wi):Wi;const x=()=>{if(!(!$.active||!$.dirty))if(e){const B=$.run();(s||h||(d?B.some((ye,Se)=>pn(ye,R[Se])):pn(B,R)))&&(g&&g(),_t(e,c,3,[B,R===Wi?void 0:d&&R[0]===Wi?[]:R,m]),R=B)}else $.run()};x.allowRecurse=!!e;let U;i==="sync"?U=x:i==="post"?U=()=>Ge(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),U=()=>ac(x));const $=new Xa(u,ot,U),J=A_(),oe=()=>{$.stop(),J&&qa(J.effects,$)};return e?n?x():R=$.run():i==="post"?Ge($.run.bind($),c&&c.suspense):$.run(),y&&y.push(oe),oe}function _m(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?Ad(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=bi(this),a=Rd(i,r.bind(s),n);return o(),a}function Ad(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function On(t,e,n=0,s){if(!me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Je(t))On(t.value,e,n,s);else if(q(t))for(let i=0;i<t.length;i++)On(t[i],e,n,s);else if(Br(t)||os(t))t.forEach(i=>{On(i,e,n,s)});else if(Yh(t))for(const i in t)On(t[i],e,n,s);return t}function aA(t,e){if(De===null)return t;const n=Qr(De)||De.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=Ee]=e[i];r&&(Q(r)&&(r={mounted:r,updated:r}),r.deep&&On(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Tn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Kn(),_t(c,n,8,[t.el,a,t,e]),qn())}}/*! #__NO_SIDE_EFFECTS__ */function Pd(t,e){return Q(t)?Fe({name:t.name},e,{setup:t}):t}const js=t=>!!t.type.__asyncLoader,Od=t=>t.type.__isKeepAlive;function mm(t,e){Nd(t,"a",e)}function ym(t,e){Nd(t,"da",e)}function Nd(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Kr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Od(i.parent.vnode)&&vm(s,e,n,i),i=i.parent}}function vm(t,e,n,s){const i=Kr(e,t,s,!0);kd(()=>{qa(s[e],i)},n)}function Kr(t,e,n=Ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Kn();const a=bi(n),c=_t(e,n,t,o);return a(),qn(),c});return s?i.unshift(r):i.push(r),r}}const Gt=t=>(e,n=Ve)=>(!Yr||t==="sp")&&Kr(t,(...s)=>e(...s),n),wm=Gt("bm"),Em=Gt("m"),bm=Gt("bu"),Im=Gt("u"),Cm=Gt("bum"),kd=Gt("um"),Tm=Gt("sp"),Sm=Gt("rtg"),Rm=Gt("rtc");function Am(t,e=Ve){Kr("ec",t,e)}function cA(t,e,n,s){let i;const r=n&&n[s];if(q(t)||Oe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function lA(t,e,n={},s,i){if(De.isCE||De.parent&&js(De.parent)&&De.parent.isCE)return e!=="default"&&(n.name=e),Ke("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Hd();const o=r&&xd(r(n)),a=Gd(ht,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function xd(t){return t.some(e=>lr(e)?!(e.type===gn||e.type===ht&&!xd(e.children)):!0)?t:null}const ra=t=>t?zd(t)?Qr(t)||t.proxy:ra(t.parent):null,Gs=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ra(t.parent),$root:t=>ra(t.root),$emit:t=>t.emit,$options:t=>cc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ac(t.update)}),$nextTick:t=>t.n||(t.n=oc.bind(t.proxy)),$watch:t=>_m.bind(t)}),Io=(t,e)=>t!==Ee&&!t.__isScriptSetup&&ae(t,e),Pm={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Io(s,e))return o[e]=1,s[e];if(i!==Ee&&ae(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,r[e];if(n!==Ee&&ae(n,e))return o[e]=4,n[e];oa&&(o[e]=0)}}const u=Gs[e];let h,d;if(u)return e==="$attrs"&&Qe(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Io(i,e)?(i[e]=n,!0):s!==Ee&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ee&&ae(t,o)||Io(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(Gs,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fl(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oa=!0;function Om(t){const e=cc(t),n=t.proxy,s=t.ctx;oa=!1,e.beforeCreate&&$l(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:y,deactivated:R,beforeDestroy:x,beforeUnmount:U,destroyed:$,unmounted:J,render:oe,renderTracked:B,renderTriggered:ye,errorCaptured:Se,serverPrefetch:Re,expose:le,inheritAttrs:ne,components:st,directives:et,filters:j}=e;if(l&&Nm(l,s,null),o)for(const P in o){const b=o[P];Q(b)&&(s[P]=b.bind(n))}if(i){const P=i.call(n,n);me(P)&&(t.data=Ei(P))}if(oa=!0,r)for(const P in r){const b=r[P],W=Q(b)?b.bind(n,n):Q(b.get)?b.get.bind(n,n):ot,G=!Q(b)&&Q(b.set)?b.set.bind(n):ot,se=rt({get:W,set:G});Object.defineProperty(s,P,{enumerable:!0,configurable:!0,get:()=>se.value,set:ie=>se.value=ie})}if(a)for(const P in a)Md(a[P],s,n,P);if(c){const P=Q(c)?c.call(n):c;Reflect.ownKeys(P).forEach(b=>{Xi(b,P[b])})}u&&$l(u,t,"c");function C(P,b){q(b)?b.forEach(W=>P(W.bind(n))):b&&P(b.bind(n))}if(C(wm,h),C(Em,d),C(bm,g),C(Im,m),C(mm,y),C(ym,R),C(Am,Se),C(Rm,B),C(Sm,ye),C(Cm,U),C(kd,J),C(Tm,Re),q(le))if(le.length){const P=t.exposed||(t.exposed={});le.forEach(b=>{Object.defineProperty(P,b,{get:()=>n[b],set:W=>n[b]=W})})}else t.exposed||(t.exposed={});oe&&t.render===ot&&(t.render=oe),ne!=null&&(t.inheritAttrs=ne),st&&(t.components=st),et&&(t.directives=et)}function Nm(t,e,n=ot){q(t)&&(t=aa(t));for(const s in t){const i=t[s];let r;me(i)?"default"in i?r=Tt(i.from||s,i.default,!0):r=Tt(i.from||s):r=Tt(i),Je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function $l(t,e,n){_t(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Md(t,e,n,s){const i=s.includes(".")?Ad(n,s):()=>n[s];if(Oe(t)){const r=e[t];Q(r)&&us(i,r)}else if(Q(t))us(i,t.bind(n));else if(me(t))if(q(t))t.forEach(r=>Md(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&us(i,r,t)}}function cc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>ar(c,l,o,!0)),ar(c,e,o)),me(e)&&r.set(e,c),c}function ar(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ar(t,r,n,!0),i&&i.forEach(o=>ar(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=km[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const km={data:Ul,props:Bl,emits:Bl,methods:Bs,computed:Bs,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Bs,directives:Bs,watch:Mm,provide:Ul,inject:xm};function Ul(t,e){return e?t?function(){return Fe(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function xm(t,e){return Bs(aa(t),aa(e))}function aa(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?Fe(Object.create(null),t,e):e}function Bl(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:Fe(Object.create(null),Fl(t),Fl(e??{})):e}function Mm(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=He(t[s],e[s]);return n}function Dd(){return{app:null,config:{isNativeTag:f_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dm=0;function Lm(t,e){return function(s,i=null){Q(s)||(s=Fe({},s)),i!=null&&!me(i)&&(i=null);const r=Dd(),o=new WeakSet;let a=!1;const c=r.app={_uid:Dm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ay,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=Ke(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Qr(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){cr=c;try{return l()}finally{cr=null}}};return c}}let cr=null;function Xi(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function Tt(t,e,n=!1){const s=Ve||De;if(s||cr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:cr._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s&&s.proxy):e}}function Fm(t,e,n,s=!1){const i={},r={};ir(r,zr,1),t.propsDefaults=Object.create(null),Ld(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:dd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function $m(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Gr(t.emitsOptions,d))continue;const g=e[d];if(c)if(ae(r,d))g!==r[d]&&(r[d]=g,l=!0);else{const m=At(d);i[m]=ca(c,a,m,g,t,!1)}else g!==r[d]&&(r[d]=g,l=!0)}}}else{Ld(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Is(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ca(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ae(e,h))&&(delete r[h],l=!0)}l&&Bt(t,"set","$attrs")}function Ld(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Yi(c))continue;const l=e[c];let u;i&&ae(i,u=At(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Gr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ue(n),l=a||Ee;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ca(i,c,h,l[h],t,!ae(l,h))}}return o}function ca(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=i;if(n in l)s=l[n];else{const u=bi(i);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Is(n))&&(s=!0))}return s}function Fd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!Q(t)){const u=h=>{c=!0;const[d,g]=Fd(h,e,!0);Fe(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return me(t)&&s.set(t,rs),rs;if(q(r))for(let u=0;u<r.length;u++){const h=At(r[u]);Vl(h)&&(o[h]=Ee)}else if(r)for(const u in r){const h=At(u);if(Vl(h)){const d=r[u],g=o[h]=q(d)||Q(d)?{type:d}:Fe({},d);if(g){const m=jl(Boolean,g.type),y=jl(String,g.type);g[0]=m>-1,g[1]=y<0||m<y,(m>-1||ae(g,"default"))&&a.push(h)}}}const l=[o,a];return me(t)&&s.set(t,l),l}function Vl(t){return t[0]!=="$"}function Wl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hl(t,e){return Wl(t)===Wl(e)}function jl(t,e){return q(e)?e.findIndex(n=>Hl(n,t)):Q(e)&&Hl(e,t)?0:-1}const $d=t=>t[0]==="_"||t==="$stable",lc=t=>q(t)?t.map(It):[It(t)],Um=(t,e,n)=>{if(e._n)return e;const s=rm((...i)=>lc(e(...i)),n);return s._c=!1,s},Ud=(t,e,n)=>{const s=t._ctx;for(const i in t){if($d(i))continue;const r=t[i];if(Q(r))e[i]=Um(i,r,s);else if(r!=null){const o=lc(r);e[i]=()=>o}}},Bd=(t,e)=>{const n=lc(e);t.slots.default=()=>n},Bm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),ir(e,"_",n)):Ud(e,t.slots={})}else t.slots={},e&&Bd(t,e);ir(t.slots,zr,1)},Vm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Fe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Ud(e,i)),o=e}else e&&(Bd(t,e),o={default:1});if(r)for(const a in i)!$d(a)&&o[a]==null&&delete i[a]};function la(t,e,n,s,i=!1){if(q(t)){t.forEach((d,g)=>la(d,e&&(q(e)?e[g]:e),n,s,i));return}if(js(s)&&!i)return;const r=s.shapeFlag&4?Qr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Oe(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Je(l)&&(l.value=null)),Q(c))on(c,a,12,[o,u]);else{const d=Oe(c),g=Je(c),m=t.f;if(d||g){const y=()=>{if(m){const R=d?ae(h,c)?h[c]:u[c]:c.value;i?q(R)&&qa(R,r):q(R)?R.includes(r)||R.push(r):d?(u[c]=[r],ae(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};i||m?y():(y.id=-1,Ge(y,n))}}}const Ge=fm;function Wm(t){return Hm(t)}function Hm(t,e){const n=Qh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=ot,insertStaticContent:m}=t,y=(f,p,_,E=null,w=null,A=null,D=void 0,S=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!xs(f,p)&&(E=v(f),ie(f,w,A,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:I,ref:F,shapeFlag:H}=p;switch(I){case qr:R(f,p,_,E);break;case gn:x(f,p,_,E);break;case To:f==null&&U(p,_,E,D);break;case ht:st(f,p,_,E,w,A,D,S,N);break;default:H&1?oe(f,p,_,E,w,A,D,S,N):H&6?et(f,p,_,E,w,A,D,S,N):(H&64||H&128)&&I.process(f,p,_,E,w,A,D,S,N,k)}F!=null&&w&&la(F,f&&f.ref,A,p||f,!p)},R=(f,p,_,E)=>{if(f==null)s(p.el=a(p.children),_,E);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},x=(f,p,_,E)=>{f==null?s(p.el=c(p.children||""),_,E):p.el=f.el},U=(f,p,_,E)=>{[f.el,f.anchor]=m(f.children,p,_,E,f.el,f.anchor)},$=({el:f,anchor:p},_,E)=>{let w;for(;f&&f!==p;)w=d(f),s(f,_,E),f=w;s(p,_,E)},J=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},oe=(f,p,_,E,w,A,D,S,N)=>{p.type==="svg"?D="svg":p.type==="math"&&(D="mathml"),f==null?B(p,_,E,w,A,D,S,N):Re(f,p,w,A,D,S,N)},B=(f,p,_,E,w,A,D,S)=>{let N,I;const{props:F,shapeFlag:H,transition:V,dirs:Y}=f;if(N=f.el=o(f.type,A,F&&F.is,F),H&8?u(N,f.children):H&16&&Se(f.children,N,null,E,w,Co(f,A),D,S),Y&&Tn(f,null,E,"created"),ye(N,f,f.scopeId,D,E),F){for(const fe in F)fe!=="value"&&!Yi(fe)&&r(N,fe,null,F[fe],A,f.children,E,w,Ce);"value"in F&&r(N,"value",null,F.value,A),(I=F.onVnodeBeforeMount)&&bt(I,E,f)}Y&&Tn(f,null,E,"beforeMount");const re=jm(w,V);re&&V.beforeEnter(N),s(N,p,_),((I=F&&F.onVnodeMounted)||re||Y)&&Ge(()=>{I&&bt(I,E,f),re&&V.enter(N),Y&&Tn(f,null,E,"mounted")},w)},ye=(f,p,_,E,w)=>{if(_&&g(f,_),E)for(let A=0;A<E.length;A++)g(f,E[A]);if(w){let A=w.subTree;if(p===A){const D=w.vnode;ye(f,D,D.scopeId,D.slotScopeIds,w.parent)}}},Se=(f,p,_,E,w,A,D,S,N=0)=>{for(let I=N;I<f.length;I++){const F=f[I]=S?Qt(f[I]):It(f[I]);y(null,F,p,_,E,w,A,D,S)}},Re=(f,p,_,E,w,A,D)=>{const S=p.el=f.el;let{patchFlag:N,dynamicChildren:I,dirs:F}=p;N|=f.patchFlag&16;const H=f.props||Ee,V=p.props||Ee;let Y;if(_&&Sn(_,!1),(Y=V.onVnodeBeforeUpdate)&&bt(Y,_,p,f),F&&Tn(p,f,_,"beforeUpdate"),_&&Sn(_,!0),I?le(f.dynamicChildren,I,S,_,E,Co(p,w),A):D||b(f,p,S,null,_,E,Co(p,w),A,!1),N>0){if(N&16)ne(S,p,H,V,_,E,w);else if(N&2&&H.class!==V.class&&r(S,"class",null,V.class,w),N&4&&r(S,"style",H.style,V.style,w),N&8){const re=p.dynamicProps;for(let fe=0;fe<re.length;fe++){const be=re[fe],Ne=H[be],lt=V[be];(lt!==Ne||be==="value")&&r(S,be,Ne,lt,w,f.children,_,E,Ce)}}N&1&&f.children!==p.children&&u(S,p.children)}else!D&&I==null&&ne(S,p,H,V,_,E,w);((Y=V.onVnodeUpdated)||F)&&Ge(()=>{Y&&bt(Y,_,p,f),F&&Tn(p,f,_,"updated")},E)},le=(f,p,_,E,w,A,D)=>{for(let S=0;S<p.length;S++){const N=f[S],I=p[S],F=N.el&&(N.type===ht||!xs(N,I)||N.shapeFlag&70)?h(N.el):_;y(N,I,F,null,E,w,A,D,!0)}},ne=(f,p,_,E,w,A,D)=>{if(_!==E){if(_!==Ee)for(const S in _)!Yi(S)&&!(S in E)&&r(f,S,_[S],null,D,p.children,w,A,Ce);for(const S in E){if(Yi(S))continue;const N=E[S],I=_[S];N!==I&&S!=="value"&&r(f,S,I,N,D,p.children,w,A,Ce)}"value"in E&&r(f,"value",_.value,E.value,D)}},st=(f,p,_,E,w,A,D,S,N)=>{const I=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:H,dynamicChildren:V,slotScopeIds:Y}=p;Y&&(S=S?S.concat(Y):Y),f==null?(s(I,_,E),s(F,_,E),Se(p.children||[],_,F,w,A,D,S,N)):H>0&&H&64&&V&&f.dynamicChildren?(le(f.dynamicChildren,V,_,w,A,D,S),(p.key!=null||w&&p===w.subTree)&&Vd(f,p,!0)):b(f,p,_,F,w,A,D,S,N)},et=(f,p,_,E,w,A,D,S,N)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?w.ctx.activate(p,_,E,D,N):j(p,_,E,w,A,D,N):L(f,p,N)},j=(f,p,_,E,w,A,D)=>{const S=f.component=ey(f,E,w);if(Od(f)&&(S.ctx.renderer=k),ty(S),S.asyncDep){if(w&&w.registerDep(S,C),!f.el){const N=S.subTree=Ke(gn);x(null,N,p,_)}}else C(S,f,p,_,w,A,D)},L=(f,p,_)=>{const E=p.component=f.component;if(cm(f,p,_))if(E.asyncDep&&!E.asyncResolved){P(E,p,_);return}else E.next=p,tm(E.update),E.effect.dirty=!0,E.update();else p.el=f.el,E.vnode=p},C=(f,p,_,E,w,A,D)=>{const S=()=>{if(f.isMounted){let{next:F,bu:H,u:V,parent:Y,vnode:re}=f;{const Xn=Wd(f);if(Xn){F&&(F.el=re.el,P(f,F,D)),Xn.asyncDep.then(()=>{f.isUnmounted||S()});return}}let fe=F,be;Sn(f,!1),F?(F.el=re.el,P(f,F,D)):F=re,H&&Qi(H),(be=F.props&&F.props.onVnodeBeforeUpdate)&&bt(be,Y,F,re),Sn(f,!0);const Ne=bo(f),lt=f.subTree;f.subTree=Ne,y(lt,Ne,h(lt.el),v(lt),f,w,A),F.el=Ne.el,fe===null&&lm(f,Ne.el),V&&Ge(V,w),(be=F.props&&F.props.onVnodeUpdated)&&Ge(()=>bt(be,Y,F,re),w)}else{let F;const{el:H,props:V}=p,{bm:Y,m:re,parent:fe}=f,be=js(p);if(Sn(f,!1),Y&&Qi(Y),!be&&(F=V&&V.onVnodeBeforeMount)&&bt(F,fe,p),Sn(f,!0),H&&he){const Ne=()=>{f.subTree=bo(f),he(H,f.subTree,f,w,null)};be?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ne()):Ne()}else{const Ne=f.subTree=bo(f);y(null,Ne,_,E,f,w,A),p.el=Ne.el}if(re&&Ge(re,w),!be&&(F=V&&V.onVnodeMounted)){const Ne=p;Ge(()=>bt(F,fe,Ne),w)}(p.shapeFlag&256||fe&&js(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Ge(f.a,w),f.isMounted=!0,p=_=E=null}},N=f.effect=new Xa(S,ot,()=>ac(I),f.scope),I=f.update=()=>{N.dirty&&N.run()};I.id=f.uid,Sn(f,!0),I()},P=(f,p,_)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,$m(f,p.props,E,_),Vm(f,p.children,_),Kn(),Ml(f),qn()},b=(f,p,_,E,w,A,D,S,N=!1)=>{const I=f&&f.children,F=f?f.shapeFlag:0,H=p.children,{patchFlag:V,shapeFlag:Y}=p;if(V>0){if(V&128){G(I,H,_,E,w,A,D,S,N);return}else if(V&256){W(I,H,_,E,w,A,D,S,N);return}}Y&8?(F&16&&Ce(I,w,A),H!==I&&u(_,H)):F&16?Y&16?G(I,H,_,E,w,A,D,S,N):Ce(I,w,A,!0):(F&8&&u(_,""),Y&16&&Se(H,_,E,w,A,D,S,N))},W=(f,p,_,E,w,A,D,S,N)=>{f=f||rs,p=p||rs;const I=f.length,F=p.length,H=Math.min(I,F);let V;for(V=0;V<H;V++){const Y=p[V]=N?Qt(p[V]):It(p[V]);y(f[V],Y,_,null,w,A,D,S,N)}I>F?Ce(f,w,A,!0,!1,H):Se(p,_,E,w,A,D,S,N,H)},G=(f,p,_,E,w,A,D,S,N)=>{let I=0;const F=p.length;let H=f.length-1,V=F-1;for(;I<=H&&I<=V;){const Y=f[I],re=p[I]=N?Qt(p[I]):It(p[I]);if(xs(Y,re))y(Y,re,_,null,w,A,D,S,N);else break;I++}for(;I<=H&&I<=V;){const Y=f[H],re=p[V]=N?Qt(p[V]):It(p[V]);if(xs(Y,re))y(Y,re,_,null,w,A,D,S,N);else break;H--,V--}if(I>H){if(I<=V){const Y=V+1,re=Y<F?p[Y].el:E;for(;I<=V;)y(null,p[I]=N?Qt(p[I]):It(p[I]),_,re,w,A,D,S,N),I++}}else if(I>V)for(;I<=H;)ie(f[I],w,A,!0),I++;else{const Y=I,re=I,fe=new Map;for(I=re;I<=V;I++){const tt=p[I]=N?Qt(p[I]):It(p[I]);tt.key!=null&&fe.set(tt.key,I)}let be,Ne=0;const lt=V-re+1;let Xn=!1,bl=0;const ks=new Array(lt);for(I=0;I<lt;I++)ks[I]=0;for(I=Y;I<=H;I++){const tt=f[I];if(Ne>=lt){ie(tt,w,A,!0);continue}let Et;if(tt.key!=null)Et=fe.get(tt.key);else for(be=re;be<=V;be++)if(ks[be-re]===0&&xs(tt,p[be])){Et=be;break}Et===void 0?ie(tt,w,A,!0):(ks[Et-re]=I+1,Et>=bl?bl=Et:Xn=!0,y(tt,p[Et],_,null,w,A,D,S,N),Ne++)}const Il=Xn?Gm(ks):rs;for(be=Il.length-1,I=lt-1;I>=0;I--){const tt=re+I,Et=p[tt],Cl=tt+1<F?p[tt+1].el:E;ks[I]===0?y(null,Et,_,Cl,w,A,D,S,N):Xn&&(be<0||I!==Il[be]?se(Et,_,Cl,2):be--)}}},se=(f,p,_,E,w=null)=>{const{el:A,type:D,transition:S,children:N,shapeFlag:I}=f;if(I&6){se(f.component.subTree,p,_,E);return}if(I&128){f.suspense.move(p,_,E);return}if(I&64){D.move(f,p,_,k);return}if(D===ht){s(A,p,_);for(let H=0;H<N.length;H++)se(N[H],p,_,E);s(f.anchor,p,_);return}if(D===To){$(f,p,_);return}if(E!==2&&I&1&&S)if(E===0)S.beforeEnter(A),s(A,p,_),Ge(()=>S.enter(A),w);else{const{leave:H,delayLeave:V,afterLeave:Y}=S,re=()=>s(A,p,_),fe=()=>{H(A,()=>{re(),Y&&Y()})};V?V(A,re,fe):fe()}else s(A,p,_)},ie=(f,p,_,E=!1,w=!1)=>{const{type:A,props:D,ref:S,children:N,dynamicChildren:I,shapeFlag:F,patchFlag:H,dirs:V}=f;if(S!=null&&la(S,null,_,f,!0),F&256){p.ctx.deactivate(f);return}const Y=F&1&&V,re=!js(f);let fe;if(re&&(fe=D&&D.onVnodeBeforeUnmount)&&bt(fe,p,f),F&6)Le(f.component,_,E);else{if(F&128){f.suspense.unmount(_,E);return}Y&&Tn(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,_,w,k,E):I&&(A!==ht||H>0&&H&64)?Ce(I,p,_,!1,!0):(A===ht&&H&384||!w&&F&16)&&Ce(N,p,_),E&&ve(f)}(re&&(fe=D&&D.onVnodeUnmounted)||Y)&&Ge(()=>{fe&&bt(fe,p,f),Y&&Tn(f,null,p,"unmounted")},_)},ve=f=>{const{type:p,el:_,anchor:E,transition:w}=f;if(p===ht){Ie(_,E);return}if(p===To){J(f);return}const A=()=>{i(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:S}=w,N=()=>D(_,A);S?S(f.el,A,N):N()}else A()},Ie=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Le=(f,p,_)=>{const{bum:E,scope:w,update:A,subTree:D,um:S}=f;E&&Qi(E),w.stop(),A&&(A.active=!1,ie(D,f,p,_)),S&&Ge(S,p),Ge(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ce=(f,p,_,E=!1,w=!1,A=0)=>{for(let D=A;D<f.length;D++)ie(f[D],p,_,E,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let M=!1;const O=(f,p,_)=>{f==null?p._vnode&&ie(p._vnode,null,null,!0):y(p._vnode||null,f,p,null,null,null,_),M||(M=!0,Ml(),bd(),M=!1),p._vnode=f},k={p:y,um:ie,m:se,r:ve,mt:j,mc:Se,pc:b,pbc:le,n:v,o:t};let X,he;return e&&([X,he]=e(k)),{render:O,hydrate:X,createApp:Lm(O,X)}}function Co({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vd(t,e,n=!1){const s=t.children,i=e.children;if(q(s)&&q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Qt(i[r]),a.el=o.el),n||Vd(o,a)),a.type===qr&&(a.el=o.el)}}function Gm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Wd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wd(e)}const Km=t=>t.__isTeleport,ht=Symbol.for("v-fgt"),qr=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),Ks=[];let ft=null;function Hd(t=!1){Ks.push(ft=t?null:[])}function qm(){Ks.pop(),ft=Ks[Ks.length-1]||null}let ri=1;function Gl(t){ri+=t}function jd(t){return t.dynamicChildren=ri>0?ft||rs:null,qm(),ri>0&&ft&&ft.push(t),t}function uA(t,e,n,s,i,r){return jd(qd(t,e,n,s,i,r,!0))}function Gd(t,e,n,s,i){return jd(Ke(t,e,n,s,i,!0))}function lr(t){return t?t.__v_isVNode===!0:!1}function xs(t,e){return t.type===e.type&&t.key===e.key}const zr="__vInternal",Kd=({key:t})=>t??null,Zi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||Je(t)||Q(t)?{i:De,r:t,k:e,f:!!n}:t:null);function qd(t,e=null,n=null,s=0,i=null,r=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kd(e),ref:e&&Zi(e),scopeId:Td,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return a?(uc(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),ri>0&&!o&&ft&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ft.push(c),c}const Ke=zm;function zm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===um)&&(t=gn),lr(t)){const a=_s(t,e,!0);return n&&uc(a,n),ri>0&&!r&&ft&&(a.shapeFlag&6?ft[ft.indexOf(t)]=a:ft.push(a)),a.patchFlag|=-2,a}if(oy(t)&&(t=t.__vccOpts),e){e=Ym(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=Ja(a)),me(c)&&(pd(c)&&!q(c)&&(c=Fe({},c)),e.style=Qa(c))}const o=Oe(t)?1:dm(t)?128:Km(t)?64:me(t)?4:Q(t)?2:0;return qd(t,e,n,s,i,o,r,!0)}function Ym(t){return t?pd(t)||zr in t?Fe({},t):t:null}function _s(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Jm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kd(a),ref:e&&e.ref?n&&i?q(i)?i.concat(Zi(e)):[i,Zi(e)]:Zi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_s(t.ssContent),ssFallback:t.ssFallback&&_s(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Qm(t=" ",e=0){return Ke(qr,null,t,e)}function hA(t="",e=!1){return e?(Hd(),Gd(gn,null,t)):Ke(gn,null,t)}function It(t){return t==null||typeof t=="boolean"?Ke(gn):q(t)?Ke(ht,null,t.slice()):typeof t=="object"?Qt(t):Ke(qr,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_s(t)}function uc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),uc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(zr in e)?e._ctx=De:i===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:De},n=32):(e=String(e),s&64?(n=16,e=[Qm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ja([e.class,s.class]));else if(i==="style")e.style=Qa([e.style,s.style]);else if(Ur(i)){const r=e[i],o=s[i];o&&r!==o&&!(q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bt(t,e,n,s=null){_t(t,e,7,[n,s])}const Xm=Dd();let Zm=0;function ey(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Xm,r={uid:Zm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fd(s,i),emitsOptions:Cd(s,i),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=im.bind(null,r),t.ce&&t.ce(r),r}let Ve=null,ur,ua;{const t=Qh(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ur=e("__VUE_INSTANCE_SETTERS__",n=>Ve=n),ua=e("__VUE_SSR_SETTERS__",n=>Yr=n)}const bi=t=>{const e=Ve;return ur(t),t.scope.on(),()=>{t.scope.off(),ur(e)}},Kl=()=>{Ve&&Ve.scope.off(),ur(null)};function zd(t){return t.vnode.shapeFlag&4}let Yr=!1;function ty(t,e=!1){e&&ua(e);const{props:n,children:s}=t.vnode,i=zd(t);Fm(t,n,i,e),Bm(t,s);const r=i?ny(t,e):void 0;return e&&ua(!1),r}function ny(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gd(new Proxy(t.ctx,Pm));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?iy(t):null,r=bi(t);Kn();const o=on(s,t,0,[t.props,i]);if(qn(),r(),qh(o)){if(o.then(Kl,Kl),e)return o.then(a=>{ql(t,a,e)}).catch(a=>{jr(a,t,0)});t.asyncDep=o}else ql(t,o,e)}else Yd(t,e)}function ql(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=vd(e)),Yd(t,n)}let zl;function Yd(t,e,n){const s=t.type;if(!t.render){if(!e&&zl&&!s.render){const i=s.template||cc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Fe(Fe({isCustomElement:r,delimiters:a},o),c);s.render=zl(i,l)}}t.render=s.render||ot}{const i=bi(t);Kn();try{Om(t)}finally{qn(),i()}}}function sy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Qe(t,"get","$attrs"),e[n]}}))}function iy(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return sy(t)},slots:t.slots,emit:t.emit,expose:e}}function Qr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vd(gd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}}))}function ry(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function oy(t){return Q(t)&&"__vccOpts"in t}const rt=(t,e)=>z_(t,e,Yr);function Qd(t,e,n){const s=arguments.length;return s===2?me(e)&&!q(e)?lr(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&lr(n)&&(n=[n]),Ke(t,e,n))}const ay="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const cy="http://www.w3.org/2000/svg",ly="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,Yl=Jt&&Jt.createElement("template"),uy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Jt.createElementNS(cy,t):e==="mathml"?Jt.createElementNS(ly,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Yl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Yl.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hy=Symbol("_vtc");function dy(t,e,n){const s=t[hy];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hc=Symbol("_vod"),dA={beforeMount(t,{value:e},{transition:n}){t[hc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ms(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ms(t,!0),s.enter(t)):s.leave(t,()=>{Ms(t,!1)}):Ms(t,e))},beforeUnmount(t,{value:e}){Ms(t,e)}};function Ms(t,e){t.style.display=e?t[hc]:"none"}const fy=Symbol("");function py(t,e,n){const s=t.style,i=s.display,r=Oe(n);if(n&&!r){if(e&&!Oe(e))for(const o in e)n[o]==null&&ha(s,o,"");for(const o in n)ha(s,o,n[o])}else if(r){if(e!==n){const o=s[fy];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");hc in t&&(s.display=i)}const Ql=/\s*!important$/;function ha(t,e,n){if(q(n))n.forEach(s=>ha(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gy(t,e);Ql.test(n)?t.setProperty(Is(s),n.replace(Ql,""),"important"):t[s]=n}}const Jl=["Webkit","Moz","ms"],So={};function gy(t,e){const n=So[e];if(n)return n;let s=At(e);if(s!=="filter"&&s in t)return So[e]=s;s=Wr(s);for(let i=0;i<Jl.length;i++){const r=Jl[i]+s;if(r in t)return So[e]=r}return e}const Xl="http://www.w3.org/1999/xlink";function _y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xl,e.slice(6,e.length)):t.setAttributeNS(Xl,e,n);else{const r=I_(e);n==null||r&&!Jh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function my(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Jh(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Jd(t,e,n,s){t.addEventListener(e,n,s)}function yy(t,e,n,s){t.removeEventListener(e,n,s)}const Zl=Symbol("_vei");function vy(t,e,n,s,i=null){const r=t[Zl]||(t[Zl]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=wy(e);if(s){const l=r[e]=Iy(s,i);Jd(t,a,l,c)}else o&&(yy(t,a,o,c),r[e]=void 0)}}const eu=/(?:Once|Passive|Capture)$/;function wy(t){let e;if(eu.test(t)){e={};let s;for(;s=t.match(eu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}let Ro=0;const Ey=Promise.resolve(),by=()=>Ro||(Ey.then(()=>Ro=0),Ro=Date.now());function Iy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;_t(Cy(s,n.value),e,5,[s])};return n.value=t,n.attached=by(),n}function Cy(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const tu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ty=(t,e,n,s,i,r,o,a,c)=>{const l=i==="svg";e==="class"?dy(t,s,l):e==="style"?py(t,n,s):Ur(e)?Ka(e)||vy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sy(t,e,s,l))?my(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_y(t,e,s,l))};function Sy(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&tu(e)&&Q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return tu(e)&&Oe(n)?!1:e in t}const nu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>Qi(e,n):e},Ao=Symbol("_assign"),fA={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Br(e);Jd(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ya(hr(o)):hr(o));t[Ao](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,oc(()=>{t._assigning=!1})}),t[Ao]=nu(s)},mounted(t,{value:e,oldValue:n,modifiers:{number:s}}){su(t,e,n,s)},beforeUpdate(t,e,n){t[Ao]=nu(n)},updated(t,{value:e,oldValue:n,modifiers:{number:s}}){t._assigning||su(t,e,n,s)}};function su(t,e,n,s){const i=t.multiple,r=q(e);if(!(i&&!r&&!Br(e))&&!(r&&ti(e,n))){for(let o=0,a=t.options.length;o<a;o++){const c=t.options[o],l=hr(c);if(i)if(r){const u=typeof l;u==="string"||u==="number"?c.selected=e.includes(s?Ya(l):l):c.selected=T_(e,l)>-1}else c.selected=e.has(l);else if(ti(hr(c),e)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!i&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function hr(t){return"_value"in t?t._value:t.value}const Ry=["ctrl","shift","alt","meta"],Ay={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ry.some(n=>t[`${n}Key`]&&!e.includes(n))},pA=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Ay[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Py=Fe({patchProp:Ty},uy);let iu;function Oy(){return iu||(iu=Wm(Py))}const gA=(...t)=>{const e=Oy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=ky(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Ny(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ny(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ky(t){return Oe(t)?document.querySelector(t):t}function xy(){return Xd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Xd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const My=typeof Proxy=="function",Dy="devtools-plugin:setup",Ly="plugin:settings:set";let Zn,da;function Fy(){var t;return Zn!==void 0||(typeof window<"u"&&window.performance?(Zn=!0,da=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Zn=!0,da=global.perf_hooks.performance):Zn=!1),Zn}function $y(){return Fy()?da.now():Date.now()}class Uy{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return $y()}},n&&n.on(Ly,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function By(t,e){const n=t,s=Xd(),i=xy(),r=My&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(Dy,t,e);else{const o=r?new Uy(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Zd="store";function _A(t){return t===void 0&&(t=null),Tt(t!==null?t:Zd)}function Cs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Vy(t){return t!==null&&typeof t=="object"}function Wy(t){return t&&typeof t.then=="function"}function Hy(t,e){return function(){return t(e)}}function ef(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function tf(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Jr(t,n,[],t._modules.root,!0),dc(t,n,e)}function dc(t,e,n){var s=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={},a={},c=S_(!0);c.run(function(){Cs(r,function(l,u){o[u]=Hy(l,t),a[u]=rt(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Ei({data:e}),t._scope=c,t.strict&&zy(t),s&&n&&t._withCommit(function(){s.data=null}),i&&i.stop()}function Jr(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=fc(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=jy(t,o,n);s.forEachMutation(function(u,h){var d=o+h;Gy(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;Ky(t,d,g,l)}),s.forEachGetter(function(u,h){var d=o+h;qy(t,d,u,l)}),s.forEachChild(function(u,h){Jr(t,e,n.concat(h),u,i)})}function jy(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var c=dr(r,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(r,o,a){var c=dr(r,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return nf(t,e)}},state:{get:function(){return fc(t.state,n)}}}),i}function nf(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Gy(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function Ky(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return Wy(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function qy(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function zy(t){us(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function fc(t,e){return e.reduce(function(n,s){return n[s]},t)}function dr(t,e,n){return Vy(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Yy="vuex bindings",ru="vuex:mutations",Po="vuex:actions",es="vuex",Qy=0;function Jy(t,e){By({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Yy]},function(n){n.addTimelineLayer({id:ru,label:"Vuex Mutations",color:ou}),n.addTimelineLayer({id:Po,label:"Vuex Actions",color:ou}),n.addInspector({id:es,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===es)if(s.filter){var i=[];af(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[of(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===es){var i=s.nodeId;nf(e,i),s.state=ev(nv(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===es){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(es),n.sendInspectorState(es),n.addTimelineEvent({layerId:ru,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=Qy++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Po,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Po,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var ou=8702998,Xy=6710886,Zy=16777215,sf={label:"namespaced",textColor:Zy,backgroundColor:Xy};function rf(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function of(t,e){return{id:e||"root",label:rf(e),tags:t.namespaced?[sf]:[],children:Object.keys(t._children).map(function(n){return of(t._children[n],e+n+"/")})}}function af(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[sf]:[]}),Object.keys(e._children).forEach(function(i){af(t,e._children[i],n,s+i+"/")})}function ev(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=tv(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?rf(o):o,editable:!1,value:fa(function(){return r[o]})}})}return i}function tv(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=fa(function(){return t[n]})}else e[n]=fa(function(){return t[n]})}),e}function nv(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function fa(t){try{return t()}catch(e){return e}}var wt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},cf={namespaced:{configurable:!0}};cf.namespaced.get=function(){return!!this._rawModule.namespaced};wt.prototype.addChild=function(e,n){this._children[e]=n};wt.prototype.removeChild=function(e){delete this._children[e]};wt.prototype.getChild=function(e){return this._children[e]};wt.prototype.hasChild=function(e){return e in this._children};wt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};wt.prototype.forEachChild=function(e){Cs(this._children,e)};wt.prototype.forEachGetter=function(e){this._rawModule.getters&&Cs(this._rawModule.getters,e)};wt.prototype.forEachAction=function(e){this._rawModule.actions&&Cs(this._rawModule.actions,e)};wt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Cs(this._rawModule.mutations,e)};Object.defineProperties(wt.prototype,cf);var zn=function(e){this.register([],e,!1)};zn.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};zn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};zn.prototype.update=function(e){lf([],this.root,e)};zn.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new wt(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&Cs(n.modules,function(a,c){i.register(e.concat(c),a,s)})};zn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};zn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function lf(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;lf(t.concat(s),e.getChild(s),n.modules[s])}}function mA(t){return new Ze(t)}var Ze=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new zn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,m){return l.call(o,d,g,m)},this.strict=i;var u=this._modules.root.state;Jr(this,u,[],this._modules.root),dc(this,u),s.forEach(function(h){return h(n)})},pc={state:{configurable:!0}};Ze.prototype.install=function(e,n){e.provide(n||Zd,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Jy(e,this)};pc.state.get=function(){return this._state.data};pc.state.set=function(t){};Ze.prototype.commit=function(e,n,s){var i=this,r=dr(e,n,s),o=r.type,a=r.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};Ze.prototype.dispatch=function(e,n){var s=this,i=dr(e,n),r=i.type,o=i.payload,a={type:r,payload:o},c=this._actions[r];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,d)})}catch{}h(d)})})}};Ze.prototype.subscribe=function(e,n){return ef(e,this._subscribers,n)};Ze.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return ef(s,this._actionSubscribers,n)};Ze.prototype.watch=function(e,n,s){var i=this;return us(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Ze.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ze.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Jr(this,this.state,e,this._modules.get(e),s.preserveState),dc(this,this.state)};Ze.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=fc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),tf(this)};Ze.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ze.prototype.hotUpdate=function(e){this._modules.update(e),tf(this,!0)};Ze.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ze.prototype,pc);var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var df={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(uf,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",d="quarter",g="year",m="date",y="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(j){var L=["th","st","nd","rd"],C=j%100;return"["+j+(L[(C-20)%10]||L[C]||L[0])+"]"}},$=function(j,L,C){var P=String(j);return!P||P.length>=L?j:""+Array(L+1-P.length).join(C)+j},J={s:$,z:function(j){var L=-j.utcOffset(),C=Math.abs(L),P=Math.floor(C/60),b=C%60;return(L<=0?"+":"-")+$(P,2,"0")+":"+$(b,2,"0")},m:function j(L,C){if(L.date()<C.date())return-j(C,L);var P=12*(C.year()-L.year())+(C.month()-L.month()),b=L.clone().add(P,h),W=C-b<0,G=L.clone().add(P+(W?-1:1),h);return+(-(P+(C-b)/(W?b-G:G-b))||0)},a:function(j){return j<0?Math.ceil(j)||0:Math.floor(j)},p:function(j){return{M:h,y:g,w:u,d:l,D:m,h:c,m:a,s:o,ms:r,Q:d}[j]||String(j||"").toLowerCase().replace(/s$/,"")},u:function(j){return j===void 0}},oe="en",B={};B[oe]=U;var ye="$isDayjsObject",Se=function(j){return j instanceof st||!(!j||!j[ye])},Re=function j(L,C,P){var b;if(!L)return oe;if(typeof L=="string"){var W=L.toLowerCase();B[W]&&(b=W),C&&(B[W]=C,b=W);var G=L.split("-");if(!b&&G.length>1)return j(G[0])}else{var se=L.name;B[se]=L,b=se}return!P&&b&&(oe=b),b||!P&&oe},le=function(j,L){if(Se(j))return j.clone();var C=typeof L=="object"?L:{};return C.date=j,C.args=arguments,new st(C)},ne=J;ne.l=Re,ne.i=Se,ne.w=function(j,L){return le(j,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var st=function(){function j(C){this.$L=Re(C.locale,null,!0),this.parse(C),this.$x=this.$x||C.x||{},this[ye]=!0}var L=j.prototype;return L.parse=function(C){this.$d=function(P){var b=P.date,W=P.utc;if(b===null)return new Date(NaN);if(ne.u(b))return new Date;if(b instanceof Date)return new Date(b);if(typeof b=="string"&&!/Z$/i.test(b)){var G=b.match(R);if(G){var se=G[2]-1||0,ie=(G[7]||"0").substring(0,3);return W?new Date(Date.UTC(G[1],se,G[3]||1,G[4]||0,G[5]||0,G[6]||0,ie)):new Date(G[1],se,G[3]||1,G[4]||0,G[5]||0,G[6]||0,ie)}}return new Date(b)}(C),this.init()},L.init=function(){var C=this.$d;this.$y=C.getFullYear(),this.$M=C.getMonth(),this.$D=C.getDate(),this.$W=C.getDay(),this.$H=C.getHours(),this.$m=C.getMinutes(),this.$s=C.getSeconds(),this.$ms=C.getMilliseconds()},L.$utils=function(){return ne},L.isValid=function(){return this.$d.toString()!==y},L.isSame=function(C,P){var b=le(C);return this.startOf(P)<=b&&b<=this.endOf(P)},L.isAfter=function(C,P){return le(C)<this.startOf(P)},L.isBefore=function(C,P){return this.endOf(P)<le(C)},L.$g=function(C,P,b){return ne.u(C)?this[P]:this.set(b,C)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(C,P){var b=this,W=!!ne.u(P)||P,G=ne.p(C),se=function(O,k){var X=ne.w(b.$u?Date.UTC(b.$y,k,O):new Date(b.$y,k,O),b);return W?X:X.endOf(l)},ie=function(O,k){return ne.w(b.toDate()[O].apply(b.toDate("s"),(W?[0,0,0,0]:[23,59,59,999]).slice(k)),b)},ve=this.$W,Ie=this.$M,Le=this.$D,Ce="set"+(this.$u?"UTC":"");switch(G){case g:return W?se(1,0):se(31,11);case h:return W?se(1,Ie):se(0,Ie+1);case u:var v=this.$locale().weekStart||0,M=(ve<v?ve+7:ve)-v;return se(W?Le-M:Le+(6-M),Ie);case l:case m:return ie(Ce+"Hours",0);case c:return ie(Ce+"Minutes",1);case a:return ie(Ce+"Seconds",2);case o:return ie(Ce+"Milliseconds",3);default:return this.clone()}},L.endOf=function(C){return this.startOf(C,!1)},L.$set=function(C,P){var b,W=ne.p(C),G="set"+(this.$u?"UTC":""),se=(b={},b[l]=G+"Date",b[m]=G+"Date",b[h]=G+"Month",b[g]=G+"FullYear",b[c]=G+"Hours",b[a]=G+"Minutes",b[o]=G+"Seconds",b[r]=G+"Milliseconds",b)[W],ie=W===l?this.$D+(P-this.$W):P;if(W===h||W===g){var ve=this.clone().set(m,1);ve.$d[se](ie),ve.init(),this.$d=ve.set(m,Math.min(this.$D,ve.daysInMonth())).$d}else se&&this.$d[se](ie);return this.init(),this},L.set=function(C,P){return this.clone().$set(C,P)},L.get=function(C){return this[ne.p(C)]()},L.add=function(C,P){var b,W=this;C=Number(C);var G=ne.p(P),se=function(Ie){var Le=le(W);return ne.w(Le.date(Le.date()+Math.round(Ie*C)),W)};if(G===h)return this.set(h,this.$M+C);if(G===g)return this.set(g,this.$y+C);if(G===l)return se(1);if(G===u)return se(7);var ie=(b={},b[a]=s,b[c]=i,b[o]=n,b)[G]||1,ve=this.$d.getTime()+C*ie;return ne.w(ve,this)},L.subtract=function(C,P){return this.add(-1*C,P)},L.format=function(C){var P=this,b=this.$locale();if(!this.isValid())return b.invalidDate||y;var W=C||"YYYY-MM-DDTHH:mm:ssZ",G=ne.z(this),se=this.$H,ie=this.$m,ve=this.$M,Ie=b.weekdays,Le=b.months,Ce=b.meridiem,v=function(k,X,he,f){return k&&(k[X]||k(P,W))||he[X].slice(0,f)},M=function(k){return ne.s(se%12||12,k,"0")},O=Ce||function(k,X,he){var f=k<12?"AM":"PM";return he?f.toLowerCase():f};return W.replace(x,function(k,X){return X||function(he){switch(he){case"YY":return String(P.$y).slice(-2);case"YYYY":return ne.s(P.$y,4,"0");case"M":return ve+1;case"MM":return ne.s(ve+1,2,"0");case"MMM":return v(b.monthsShort,ve,Le,3);case"MMMM":return v(Le,ve);case"D":return P.$D;case"DD":return ne.s(P.$D,2,"0");case"d":return String(P.$W);case"dd":return v(b.weekdaysMin,P.$W,Ie,2);case"ddd":return v(b.weekdaysShort,P.$W,Ie,3);case"dddd":return Ie[P.$W];case"H":return String(se);case"HH":return ne.s(se,2,"0");case"h":return M(1);case"hh":return M(2);case"a":return O(se,ie,!0);case"A":return O(se,ie,!1);case"m":return String(ie);case"mm":return ne.s(ie,2,"0");case"s":return String(P.$s);case"ss":return ne.s(P.$s,2,"0");case"SSS":return ne.s(P.$ms,3,"0");case"Z":return G}return null}(k)||G.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(C,P,b){var W,G=this,se=ne.p(P),ie=le(C),ve=(ie.utcOffset()-this.utcOffset())*s,Ie=this-ie,Le=function(){return ne.m(G,ie)};switch(se){case g:W=Le()/12;break;case h:W=Le();break;case d:W=Le()/3;break;case u:W=(Ie-ve)/6048e5;break;case l:W=(Ie-ve)/864e5;break;case c:W=Ie/i;break;case a:W=Ie/s;break;case o:W=Ie/n;break;default:W=Ie}return b?W:ne.a(W)},L.daysInMonth=function(){return this.endOf(h).$D},L.$locale=function(){return B[this.$L]},L.locale=function(C,P){if(!C)return this.$L;var b=this.clone(),W=Re(C,P,!0);return W&&(b.$L=W),b},L.clone=function(){return ne.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},j}(),et=st.prototype;return le.prototype=et,[["$ms",r],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",g],["$D",m]].forEach(function(j){et[j[1]]=function(L){return this.$g(L,j[0],j[1])}}),le.extend=function(j,L){return j.$i||(j(L,st,le),j.$i=!0),le},le.locale=Re,le.isDayjs=Se,le.unix=function(j){return le(1e3*j)},le.en=B[oe],le.Ls=B,le.p={},le})})(df);var sv=df.exports;const yA=hf(sv);var ff={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(uf,function(){var n="minute",s=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(r,o,a){var c=o.prototype;a.utc=function(y){var R={date:y,utc:!0,args:arguments};return new o(R)},c.utc=function(y){var R=a(this.toDate(),{locale:this.$L,utc:!0});return y?R.add(this.utcOffset(),n):R},c.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var l=c.parse;c.parse=function(y){y.utc&&(this.$u=!0),this.$utils().u(y.$offset)||(this.$offset=y.$offset),l.call(this,y)};var u=c.init;c.init=function(){if(this.$u){var y=this.$d;this.$y=y.getUTCFullYear(),this.$M=y.getUTCMonth(),this.$D=y.getUTCDate(),this.$W=y.getUTCDay(),this.$H=y.getUTCHours(),this.$m=y.getUTCMinutes(),this.$s=y.getUTCSeconds(),this.$ms=y.getUTCMilliseconds()}else u.call(this)};var h=c.utcOffset;c.utcOffset=function(y,R){var x=this.$utils().u;if(x(y))return this.$u?0:x(this.$offset)?h.call(this):this.$offset;if(typeof y=="string"&&(y=function(oe){oe===void 0&&(oe="");var B=oe.match(s);if(!B)return null;var ye=(""+B[0]).match(i)||["-",0,0],Se=ye[0],Re=60*+ye[1]+ +ye[2];return Re===0?0:Se==="+"?Re:-Re}(y),y===null))return this;var U=Math.abs(y)<=16?60*y:y,$=this;if(R)return $.$offset=U,$.$u=y===0,$;if(y!==0){var J=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();($=this.local().add(U+J,n)).$offset=U,$.$x.$localOffset=J}else $=this.utc();return $};var d=c.format;c.format=function(y){var R=y||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,R)},c.valueOf=function(){var y=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*y},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var g=c.toDate;c.toDate=function(y){return y==="s"&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():g.call(this)};var m=c.diff;c.diff=function(y,R,x){if(y&&this.$u===y.$u)return m.call(this,y,R,x);var U=this.local(),$=a(y).local();return m.call(U,$,R,x)}}})})(ff);var iv=ff.exports;const vA=hf(iv);var au={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Ts(e)},Ts=function(t){return new Error("Firebase Database ("+pf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new ov;const d=r<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ov extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _f=function(t){const e=gf(t);return gc.encodeByteArray(e,!0)},fr=function(t){return _f(t).replace(/\./g,"")},pr=function(t){try{return gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t){return mf(void 0,t)}function mf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cv(n)||(t[n]=mf(t[n],e[n]));return t}function cv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=()=>lv().__FIREBASE_DEFAULTS__,hv=()=>{if(typeof process>"u"||typeof au>"u")return;const t=au.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pr(t[1]);return e&&JSON.parse(e)},_c=()=>{try{return uv()||hv()||dv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yf=t=>{var e,n;return(n=(e=_c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fv=t=>{const e=yf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vf=()=>{var t;return(t=_c())===null||t===void 0?void 0:t.config},wf=t=>{var e;return(e=_c())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fr(JSON.stringify(n)),fr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Ef(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gv(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function If(){return pf.NODE_ADMIN===!0}function Cf(){try{return typeof indexedDB=="object"}catch{return!1}}function Tf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function _v(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="FirebaseError";class Nt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mv,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nt(i,a,s)}}function yv(t,e){return t.replace(vv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=oi(pr(r[0])||""),n=oi(pr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},wv=function(t){const e=Sf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ev=function(t){const e=Sf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ms(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ai(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(cu(r)&&cu(o)){if(!ai(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function cu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Iv(t,e){const n=new Cv(t,e);return n.subscribe.bind(n)}class Cv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Tv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Oo),i.error===void 0&&(i.error=Oo),i.complete===void 0&&(i.complete=Oo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oo(){}function Zr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=1e3,Av=2,Pv=4*60*60*1e3,Ov=.5;function lu(t,e=Rv,n=Av){const s=e*Math.pow(n,t),i=Math.round(Ov*s*(Math.random()-.5)*2);return Math.min(Pv,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class yt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xv(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kv(t){return t===Rn?void 0:t}function xv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Dv={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Lv=pe.INFO,Fv={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},$v=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Fv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class to{constructor(e){this.name=e,this._logLevel=Lv,this._logHandler=$v,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Uv=(t,e)=>e.some(n=>t instanceof n);let uu,hu;function Bv(){return uu||(uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vv(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rf=new WeakMap,ga=new WeakMap,Af=new WeakMap,No=new WeakMap,yc=new WeakMap;function Wv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(an(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rf.set(n,t)}).catch(()=>{}),yc.set(e,t),e}function Hv(t){if(ga.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ga.set(t,e)}let _a={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Af.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jv(t){_a=t(_a)}function Gv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ko(this),e,...n);return Af.set(s,e.sort?e.sort():[e]),an(s)}:Vv().includes(t)?function(...e){return t.apply(ko(this),e),an(Rf.get(this))}:function(...e){return an(t.apply(ko(this),e))}}function Kv(t){return typeof t=="function"?Gv(t):(t instanceof IDBTransaction&&Hv(t),Uv(t,Bv())?new Proxy(t,_a):t)}function an(t){if(t instanceof IDBRequest)return Wv(t);if(No.has(t))return No.get(t);const e=Kv(t);return e!==t&&(No.set(t,e),yc.set(e,t)),e}const ko=t=>yc.get(t);function qv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=an(o);return s&&o.addEventListener("upgradeneeded",c=>{s(an(o.result),c.oldVersion,c.newVersion,an(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const zv=["get","getKey","getAll","getAllKeys","count"],Yv=["put","add","delete","clear"],xo=new Map;function du(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xo.get(e))return xo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Yv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||zv.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return xo.set(e,r),r}jv(t=>({...t,get:(e,n,s)=>du(e,n)||t.get(e,n,s),has:(e,n)=>!!du(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ma="@firebase/app",fu="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new to("@firebase/app"),Xv="@firebase/app-compat",Zv="@firebase/analytics-compat",ew="@firebase/analytics",tw="@firebase/app-check-compat",nw="@firebase/app-check",sw="@firebase/auth",iw="@firebase/auth-compat",rw="@firebase/database",ow="@firebase/database-compat",aw="@firebase/functions",cw="@firebase/functions-compat",lw="@firebase/installations",uw="@firebase/installations-compat",hw="@firebase/messaging",dw="@firebase/messaging-compat",fw="@firebase/performance",pw="@firebase/performance-compat",gw="@firebase/remote-config",_w="@firebase/remote-config-compat",mw="@firebase/storage",yw="@firebase/storage-compat",vw="@firebase/firestore",ww="@firebase/firestore-compat",Ew="firebase",bw="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="[DEFAULT]",Iw={[ma]:"fire-core",[Xv]:"fire-core-compat",[ew]:"fire-analytics",[Zv]:"fire-analytics-compat",[nw]:"fire-app-check",[tw]:"fire-app-check-compat",[sw]:"fire-auth",[iw]:"fire-auth-compat",[rw]:"fire-rtdb",[ow]:"fire-rtdb-compat",[aw]:"fire-fn",[cw]:"fire-fn-compat",[lw]:"fire-iid",[uw]:"fire-iid-compat",[hw]:"fire-fcm",[dw]:"fire-fcm-compat",[fw]:"fire-perf",[pw]:"fire-perf-compat",[gw]:"fire-rc",[_w]:"fire-rc-compat",[mw]:"fire-gcs",[yw]:"fire-gcs-compat",[vw]:"fire-fst",[ww]:"fire-fst-compat","fire-js":"fire-js",[Ew]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,va=new Map;function Cw(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pt(t){const e=t.name;if(va.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,t);for(const n of _r.values())Cw(n,t);return!0}function Qn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cn=new Yn("app","Firebase",Tw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=bw;function Rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ya,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=vf()),!n)throw cn.create("no-options");const r=_r.get(i);if(r){if(ai(n,r.options)&&ai(s,r.config))return r;throw cn.create("duplicate-app",{appName:i})}const o=new Mv(i);for(const c of va.values())o.addComponent(c);const a=new Sw(n,s,o);return _r.set(i,a),a}function vc(t=ya){const e=_r.get(t);if(!e&&t===ya&&vf())return Rw();if(!e)throw cn.create("no-app",{appName:t});return e}function at(t,e,n){var s;let i=(s=Iw[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}Pt(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="firebase-heartbeat-database",Pw=1,ci="firebase-heartbeat-store";let Mo=null;function Pf(){return Mo||(Mo=qv(Aw,Pw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),Mo}async function Ow(t){try{return await(await Pf()).transaction(ci).objectStore(ci).get(Of(t))}catch(e){if(e instanceof Nt)Un.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function pu(t,e){try{const s=(await Pf()).transaction(ci,"readwrite");await s.objectStore(ci).put(e,Of(t)),await s.done}catch(n){if(n instanceof Nt)Un.warn(n.message);else{const s=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(s.message)}}}function Of(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=1024,kw=30*24*60*60*1e3;class xw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gu(),{heartbeatsToSend:s,unsentEntries:i}=Mw(this._heartbeatsCache.heartbeats),r=fr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gu(){return new Date().toISOString().substring(0,10)}function Mw(t,e=Nw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),_u(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_u(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Dw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cf()?Tf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ow(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _u(t){return fr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){Pt(new yt("platform-logger",e=>new Qv(e),"PRIVATE")),Pt(new yt("heartbeat",e=>new xw(e),"PRIVATE")),at(ma,fu,t),at(ma,fu,"esm2017"),at("fire-js","")}Lw("");var Fw="firebase",$w="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(Fw,$w,"app");const Uw=(t,e)=>e.some(n=>t instanceof n);let mu,yu;function Bw(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vw(){return yu||(yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nf=new WeakMap,wa=new WeakMap,kf=new WeakMap,Do=new WeakMap,wc=new WeakMap;function Ww(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ln(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nf.set(n,t)}).catch(()=>{}),wc.set(e,t),e}function Hw(t){if(wa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});wa.set(t,e)}let Ea={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jw(t){Ea=t(Ea)}function Gw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lo(this),e,...n);return kf.set(s,e.sort?e.sort():[e]),ln(s)}:Vw().includes(t)?function(...e){return t.apply(Lo(this),e),ln(Nf.get(this))}:function(...e){return ln(t.apply(Lo(this),e))}}function Kw(t){return typeof t=="function"?Gw(t):(t instanceof IDBTransaction&&Hw(t),Uw(t,Bw())?new Proxy(t,Ea):t)}function ln(t){if(t instanceof IDBRequest)return Ww(t);if(Do.has(t))return Do.get(t);const e=Kw(t);return e!==t&&(Do.set(t,e),wc.set(e,t)),e}const Lo=t=>wc.get(t);function qw(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ln(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const zw=["get","getKey","getAll","getAllKeys","count"],Yw=["put","add","delete","clear"],Fo=new Map;function vu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fo.get(e))return Fo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Yw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||zw.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Fo.set(e,r),r}jw(t=>({...t,get:(e,n,s)=>vu(e,n)||t.get(e,n,s),has:(e,n)=>!!vu(e,n)||t.has(e,n)}));const xf="@firebase/installations",Ec="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=1e4,Df=`w:${Ec}`,Lf="FIS_v2",Qw="https://firebaseinstallations.googleapis.com/v1",Jw=60*60*1e3,Xw="installations",Zw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bn=new Yn(Xw,Zw,eE);function Ff(t){return t instanceof Nt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f({projectId:t}){return`${Qw}/projects/${t}/installations`}function Uf(t){return{token:t.token,requestStatus:2,expiresIn:nE(t.expiresIn),creationTime:Date.now()}}async function Bf(t,e){const s=(await e.json()).error;return Bn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Vf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tE(t,{refreshToken:e}){const n=Vf(t);return n.append("Authorization",sE(e)),n}async function Wf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nE(t){return Number(t.replace("s","000"))}function sE(t){return`${Lf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=$f(t),i=Vf(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Lf,appId:t.appId,sdkVersion:Df},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Wf(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Uf(l.authToken)}}else throw await Bf("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=/^[cdef][\w-]{21}$/,ba="";function aE(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cE(t);return oE.test(n)?n:ba}catch{return ba}}function cE(t){return rE(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map;function Gf(t,e){const n=no(t);Kf(n,e),lE(n,e)}function Kf(t,e){const n=jf.get(t);if(n)for(const s of n)s(e)}function lE(t,e){const n=uE();n&&n.postMessage({key:t,fid:e}),hE()}let Nn=null;function uE(){return!Nn&&"BroadcastChannel"in self&&(Nn=new BroadcastChannel("[Firebase] FID Change"),Nn.onmessage=t=>{Kf(t.data.key,t.data.fid)}),Nn}function hE(){jf.size===0&&Nn&&(Nn.close(),Nn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebase-installations-database",fE=1,Vn="firebase-installations-store";let $o=null;function bc(){return $o||($o=qw(dE,fE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vn)}}})),$o}async function mr(t,e){const n=no(t),i=(await bc()).transaction(Vn,"readwrite"),r=i.objectStore(Vn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Gf(t,e.fid),e}async function qf(t){const e=no(t),s=(await bc()).transaction(Vn,"readwrite");await s.objectStore(Vn).delete(e),await s.done}async function so(t,e){const n=no(t),i=(await bc()).transaction(Vn,"readwrite"),r=i.objectStore(Vn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Gf(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t){let e;const n=await so(t.appConfig,s=>{const i=pE(s),r=gE(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===ba?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pE(t){const e=t||{fid:aE(),registrationStatus:0};return zf(e)}function gE(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Bn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=_E(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mE(t)}:{installationEntry:e}}async function _E(t,e){try{const n=await iE(t,e);return mr(t.appConfig,n)}catch(n){throw Ff(n)&&n.customData.serverCode===409?await qf(t.appConfig):await mr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mE(t){let e=await wu(t.appConfig);for(;e.registrationStatus===1;)await Hf(100),e=await wu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ic(t);return s||n}return e}function wu(t){return so(t,e=>{if(!e)throw Bn.create("installation-not-found");return zf(e)})}function zf(t){return yE(t)?{fid:t.fid,registrationStatus:0}:t}function yE(t){return t.registrationStatus===1&&t.registrationTime+Mf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE({appConfig:t,heartbeatServiceProvider:e},n){const s=wE(t,n),i=tE(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Df,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Wf(()=>fetch(s,a));if(c.ok){const l=await c.json();return Uf(l)}else throw await Bf("Generate Auth Token",c)}function wE(t,{fid:e}){return`${$f(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(t,e=!1){let n;const s=await so(t.appConfig,r=>{if(!Yf(r))throw Bn.create("not-registered");const o=r.authToken;if(!e&&IE(o))return r;if(o.requestStatus===1)return n=EE(t,e),r;{if(!navigator.onLine)throw Bn.create("app-offline");const a=TE(r);return n=bE(t,a),a}});return n?await n:s.authToken}async function EE(t,e){let n=await Eu(t.appConfig);for(;n.authToken.requestStatus===1;)await Hf(100),n=await Eu(t.appConfig);const s=n.authToken;return s.requestStatus===0?Cc(t,e):s}function Eu(t){return so(t,e=>{if(!Yf(e))throw Bn.create("not-registered");const n=e.authToken;return SE(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bE(t,e){try{const n=await vE(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await mr(t.appConfig,s),n}catch(n){if(Ff(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mr(t.appConfig,s)}throw n}}function Yf(t){return t!==void 0&&t.registrationStatus===2}function IE(t){return t.requestStatus===2&&!CE(t)}function CE(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jw}function TE(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function SE(t){return t.requestStatus===1&&t.requestTime+Mf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(t){const e=t,{installationEntry:n,registrationPromise:s}=await Ic(e);return s?s.catch(console.error):Cc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(t,e=!1){const n=t;return await PE(n),(await Cc(n,e)).token}async function PE(t){const{registrationPromise:e}=await Ic(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t){if(!t||!t.options)throw Uo("App Configuration");if(!t.name)throw Uo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uo(t){return Bn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="installations",NE="installations-internal",kE=t=>{const e=t.getProvider("app").getImmediate(),n=OE(e),s=Qn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xE=t=>{const e=t.getProvider("app").getImmediate(),n=Qn(e,Qf).getImmediate();return{getId:()=>RE(n),getToken:i=>AE(n,i)}};function ME(){Pt(new yt(Qf,kE,"PUBLIC")),Pt(new yt(NE,xE,"PRIVATE"))}ME();at(xf,Ec);at(xf,Ec,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="analytics",DE="firebase_id",LE="origin",FE=60*1e3,$E="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new to("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new Yn("analytics","Analytics",UE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){if(!t.startsWith(Tc)){const e=nt.create("invalid-gtag-resource",{gtagURL:t});return ze.warn(e.message),""}return t}function Jf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function VE(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function WE(t,e){const n=VE("firebase-js-sdk-policy",{createScriptURL:BE}),s=document.createElement("script"),i=`${Tc}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function HE(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function jE(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await Jf(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){ze.error(a)}t("config",i,r)}async function GE(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Jf(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){ze.error(r)}}function KE(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await GE(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await jE(t,e,n,s,a,c)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){ze.error(a)}}return i}function qE(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=KE(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function zE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Tc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=30,QE=1e3;class JE{constructor(e={},n=QE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Xf=new JE;function XE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ZE(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:XE(s)},r=$E.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function eb(t,e=Xf,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw nt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw nt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sb;return setTimeout(async()=>{a.abort()},n!==void 0?n:FE),Zf({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Zf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Xf){var r;const{appId:o,measurementId:a}=t;try{await tb(s,e)}catch(c){if(a)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await ZE(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!nb(l)){if(i.deleteThrottleMetadata(o),a)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?lu(n,i.intervalMillis,YE):lu(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),ze.debug(`Calling attemptFetch again in ${u} millis`),Zf(t,h,s,i)}}function tb(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nb(t){if(!(t instanceof Nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ib(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(){if(Cf())try{await Tf()}catch(t){return ze.warn(nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ze.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ob(t,e,n,s,i,r,o){var a;const c=eb(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ze.error(g)),e.push(c);const l=rb().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);zE(r)||WE(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[LE]="firebase",d.update=!0,h!=null&&(d[DE]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.app=e}_delete(){return delete qs[this.app.options.appId],Promise.resolve()}}let qs={},bu=[];const Iu={};let Bo="dataLayer",cb="gtag",Cu,ep,Tu=!1;function lb(){const t=[];if(Ef()&&t.push("This is a browser extension environment."),_v()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:e});ze.warn(n.message)}}function ub(t,e,n){lb();const s=t.options.appId;if(!s)throw nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(qs[s]!=null)throw nt.create("already-exists",{id:s});if(!Tu){HE(Bo);const{wrappedGtag:r,gtagCore:o}=qE(qs,bu,Iu,Bo,cb);ep=r,Cu=o,Tu=!0}return qs[s]=ob(t,bu,Iu,e,Cu,Bo,n),new ab(t)}function wA(t=vc()){t=$e(t);const e=Qn(t,yr);return e.isInitialized()?e.getImmediate():hb(t)}function hb(t,e={}){const n=Qn(t,yr);if(n.isInitialized()){const i=n.getImmediate();if(ai(e,n.getOptions()))return i;throw nt.create("already-initialized")}return n.initialize({options:e})}function db(t,e,n,s){t=$e(t),ib(ep,qs[t.app.options.appId],e,n,s).catch(i=>ze.error(i))}const Su="@firebase/analytics",Ru="0.10.0";function fb(){Pt(new yt(yr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ub(s,i,n)},"PUBLIC")),Pt(new yt("analytics-internal",t,"PRIVATE")),at(Su,Ru),at(Su,Ru,"esm2017");function t(e){try{const n=e.getProvider(yr).getImmediate();return{logEvent:(s,i,r)=>db(n,s,i,r)}}catch(n){throw nt.create("interop-component-reg-failed",{reason:n})}}}fb();function Sc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function tp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pb=tp,np=new Yn("auth","Firebase",tp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new to("@firebase/auth");function gb(t,...e){vr.logLevel<=pe.WARN&&vr.warn(`Auth (${Rs}): ${t}`,...e)}function er(t,...e){vr.logLevel<=pe.ERROR&&vr.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw Rc(t,...e)}function St(t,...e){return Rc(t,...e)}function sp(t,e,n){const s=Object.assign(Object.assign({},pb()),{[e]:n});return new Yn("auth","Firebase",s).create(e,{appName:t.name})}function _b(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ct(t,"argument-error"),sp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return np.create(t,...e)}function z(t,e,...n){if(!t)throw Rc(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function Ht(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mb(){return Au()==="http:"||Au()==="https:"}function Au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mb()||Ef()||"connection"in navigator)?navigator.onLine:!0}function vb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=mc()||bf()}get(){return yb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=new Ii(3e4,6e4);function En(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bn(t,e,n,s,i={}){return rp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ss(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ip.fetch()(op(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function rp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},wb),e);try{const i=new Ib(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Hi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw sp(t,u,l);ct(t,u)}}catch(i){if(i instanceof Nt)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function Ci(t,e,n,s,i={}){const r=await bn(t,e,n,s,i);return"mfaPendingCredential"in r&&ct(t,"multi-factor-auth-required",{_serverResponse:r}),r}function op(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ac(t.config,i):`${t.config.apiScheme}://${i}`}function bb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ib{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(St(this.auth,"network-request-failed")),Eb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=St(t,e,s);return i.customData._tokenResponse=n,i}function Pu(t){return t!==void 0&&t.enterprise!==void 0}class Cb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Tb(t,e){return bn(t,"GET","/v2/recaptchaConfig",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e){return bn(t,"POST","/v1/accounts:delete",e)}async function Rb(t,e){return bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ab(t,e=!1){const n=$e(t),s=await n.getIdToken(e),i=Pc(s);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:zs(Vo(i.auth_time)),issuedAtTime:zs(Vo(i.iat)),expirationTime:zs(Vo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Vo(t){return Number(t)*1e3}function Pc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const i=pr(n);return i?JSON.parse(i):(er("Failed to decode base64 JWT payload"),null)}catch(i){return er("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pb(t){const e=Pc(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nt&&Ob(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ob({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await li(t,Rb(n,{idToken:s}));z(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Mb(r.providerUserInfo):[],a=xb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ap(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function kb(t){const e=$e(t);await wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xb(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Mb(t){return t.map(e=>{var{providerId:n}=e,s=Sc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e){const n=await rp(t,{},async()=>{const s=Ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=op(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ip.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lb(t,e){return bn(t,"POST","/v2/accounts:revokeToken",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Db(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ui;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ap(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ab(this,e)}reload(){return kb(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,Sb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:J,isAnonymous:oe,providerData:B,stsTokenManager:ye}=n;z($&&ye,e,"internal-error");const Se=ui.fromJSON(this.name,ye);z(typeof $=="string",e,"internal-error"),qt(h,e.name),qt(d,e.name),z(typeof J=="boolean",e,"internal-error"),z(typeof oe=="boolean",e,"internal-error"),qt(g,e.name),qt(m,e.name),qt(y,e.name),qt(R,e.name),qt(x,e.name),qt(U,e.name);const Re=new Fn({uid:$,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:oe,photoURL:m,phoneNumber:g,tenantId:y,stsTokenManager:Se,createdAt:x,lastLoginAt:U});return B&&Array.isArray(B)&&(Re.providerData=B.map(le=>Object.assign({},le))),R&&(Re._redirectEventId=R),Re}static async _fromIdTokenResponse(e,n,s=!1){const i=new ui;i.updateFromServerResponse(n);const r=new Fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await wr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map;function $t(t){Ht(t instanceof Function,"Expected a class definition");let e=Ou.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ou.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cp.type="NONE";const Nu=cp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=tr(this.userKey,i.apiKey,r),this.fullPersistenceKey=tr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hs($t(Nu),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||$t(Nu);const o=tr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Fn._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new hs(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new hs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fp(e))return"Blackberry";if(pp(e))return"Webos";if(Oc(e))return"Safari";if((e.includes("chrome/")||up(e))&&!e.includes("edge/"))return"Chrome";if(dp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function lp(t=We()){return/firefox\//i.test(t)}function Oc(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function up(t=We()){return/crios\//i.test(t)}function hp(t=We()){return/iemobile/i.test(t)}function dp(t=We()){return/android/i.test(t)}function fp(t=We()){return/blackberry/i.test(t)}function pp(t=We()){return/webos/i.test(t)}function io(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fb(t=We()){var e;return io(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $b(){return gv()&&document.documentMode===10}function gp(t=We()){return io(t)||dp(t)||pp(t)||fp(t)||/windows phone/i.test(t)||hp(t)}function Ub(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t,e=[]){let n;switch(t){case"Browser":n=ku(We());break;case"Worker":n=`${ku(We())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e={}){return bn(t,"GET","/v2/passwordPolicy",En(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=6;class Hb{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Wb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.beforeStateQueue=new Bb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=np,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vb(this),n=new Hb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Lb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_p(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function In(t){return $e(t)}class xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iv(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=St("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Gb().appendChild(s)})}function Kb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qb="https://www.google.com/recaptcha/enterprise.js?render=",zb="recaptcha-enterprise",Yb="NO_RECAPTCHA";class Qb{constructor(e){this.type=zb,this.auth=In(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Tb(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Cb(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Pu(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(Yb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Pu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}mp(qb+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Mu(t,e,n,s=!1){const i=new Qb(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ca(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Mu(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Mu(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e){const n=Qn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ai(r,e??{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function Xb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zb(t,e,n){const s=In(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=yp(e),{host:o,port:a}=eI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tI()}function yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eI(t){const e=yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Du(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Du(o)}}}function Du(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function nI(t,e){return bn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e){return Ci(t,"POST","/v1/accounts:signInWithPassword",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e){return Ci(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}async function rI(t,e){return Ci(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Nc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new hi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ca(e,n,"signInWithPassword",sI);case"emailLink":return iI(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ca(e,s,"signUpPassword",nI);case"emailLink":return rI(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Ci(t,"POST","/v1/accounts:signInWithIdp",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="http://localhost";class Wn extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Sc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Wn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:oI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ss(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cI(t){const e=Vs(Ws(t)).link,n=e?Vs(Ws(e)).deep_link_id:null,s=Vs(Ws(t)).deep_link_id;return(s?Vs(Ws(s)).link:null)||s||n||e||t}class kc{constructor(e){var n,s,i,r,o,a;const c=Vs(Ws(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=aI((i=c.mode)!==null&&i!==void 0?i:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cI(e);try{return new kc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return hi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=kc.parseLink(n);return z(s,"argument-error"),hi._fromEmailAndCode(e,s.code,s.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends xc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ti{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return en.credential(n,s)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ti{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ti{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return Ci(t,"POST","/v1/accounts:signUp",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Fn._fromIdTokenResponse(e,s,i),o=Lu(s);return new Hn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Lu(s);return new Hn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Lu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Nt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Er.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Er(e,n,s,i)}}function vp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Er._fromErrorAndOperation(t,r,e,s):r})}async function uI(t,e,n=!1){const s=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await li(t,vp(s,i,e,t),n);z(r.idToken,s,"internal-error");const o=Pc(r.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),Hn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ct(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t,e,n=!1){const s="signIn",i=await vp(t,s,e),r=await Hn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function dI(t,e){return wp(In(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(t){const e=In(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function EA(t,e,n){const s=In(t),o=await Ca(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ep(t),c}),a=await Hn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function bA(t,e,n){return dI($e(t),As.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ep(t),s})}function fI(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function pI(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function IA(t){return $e(t).signOut()}const br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){const t=We();return Oc(t)||io(t)}const _I=1e3,mI=10;class Ip extends bp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gI()&&Ub(),this.fallbackToPolling=gp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);$b()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ip.type="LOCAL";const yI=Ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends bp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cp.type="SESSION";const Tp=Cp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ro(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await vI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ro.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Mc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function EI(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function bI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function II(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CI(){return Sp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="firebaseLocalStorageDb",TI=1,Ir="firebaseLocalStorage",Ap="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oo(t,e){return t.transaction([Ir],e?"readwrite":"readonly").objectStore(Ir)}function SI(){const t=indexedDB.deleteDatabase(Rp);return new Si(t).toPromise()}function Ta(){const t=indexedDB.open(Rp,TI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ir,{keyPath:Ap})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ir)?e(s):(s.close(),await SI(),e(await Ta()))})})}async function Fu(t,e,n){const s=oo(t,!0).put({[Ap]:e,value:n});return new Si(s).toPromise()}async function RI(t,e){const n=oo(t,!1).get(e),s=await new Si(n).toPromise();return s===void 0?null:s.value}function $u(t,e){const n=oo(t,!0).delete(e);return new Si(n).toPromise()}const AI=800,PI=3;class Pp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>PI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ro._getInstance(CI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bI(),!this.activeServiceWorker)return;this.sender=new wI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||II()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await Fu(e,br,"1"),await $u(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>RI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$u(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=oo(i,!1).getAll();return new Si(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pp.type="LOCAL";const OI=Pp;new Ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e){return e?$t(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NI(t){return wp(t.auth,new Dc(t),t.bypassAuthState)}function kI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),hI(n,new Dc(t),t.bypassAuthState)}async function xI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),uI(n,new Dc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NI;case"linkViaPopup":case"linkViaRedirect":return xI;case"reauthViaPopup":case"reauthViaRedirect":return kI;default:ct(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new Ii(2e3,1e4);async function CA(t,e,n){const s=In(t);_b(t,e,xc);const i=Op(s,n);return new kn(s,"signInViaPopup",e,i).executeNotNull()}class kn extends Np{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MI.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="pendingRedirect",nr=new Map;class LI extends Np{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const s=await FI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FI(t,e){const n=BI(e),s=UI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function $I(t,e){nr.set(t._key(),e)}function UI(t){return $t(t._redirectPersistence)}function BI(t){return tr(DI,t.config.apiKey,t.name)}async function VI(t,e,n=!1){const s=In(t),i=Op(s,e),o=await new LI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=10*60*1e3;class HI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!kp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uu(e))}saveEventToCache(e){this.cachedEventUids.add(Uu(e)),this.lastProcessedEventTime=Date.now()}}function Uu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t,e={}){return bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function zI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GI(t);for(const n of e)try{if(YI(n))return}catch{}ct(t,"unauthorized-domain")}function YI(t){const e=Ia(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!qI.test(n))return!1;if(KI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new Ii(3e4,6e4);function Bu(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JI(t){return new Promise((e,n)=>{var s,i,r;function o(){Bu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bu(),n(St(t,"network-request-failed"))},timeout:QI.get()})}if(!((i=(s=Rt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Rt().gapi)===null||r===void 0)&&r.load)o();else{const a=Kb("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},mp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw sr=null,e})}let sr=null;function XI(t){return sr=sr||JI(t),sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new Ii(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iC(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ac(e,tC):`https://${t.config.authDomain}/${eC}`,s={apiKey:e.apiKey,appName:t.name,v:Rs},i=sC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ss(s).slice(1)}`}async function rC(t){const e=await XI(t),n=Rt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:iC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),a=Rt().setTimeout(()=>{r(o)},ZI.get());function c(){Rt().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aC=500,cC=600,lC="_blank",uC="http://localhost";class Vu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hC(t,e,n,s=aC,i=cC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oC),{width:s.toString(),height:i.toString(),top:r,left:o}),l=We().toLowerCase();n&&(a=up(l)?lC:n),lp(l)&&(e=e||uC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(Fb(l)&&a!=="_self")return dC(e||"",a),new Vu(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Vu(h)}function dC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="__/auth/handler",pC="emulator/auth/handler",gC=encodeURIComponent("fac");async function Wu(t,e,n,s,i,r){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Rs,eventId:i};if(e instanceof xc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ti){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${gC}=${encodeURIComponent(c)}`:"";return`${_C(t)}?${Ss(a).slice(1)}${l}`}function _C({config:t}){return t.emulator?Ac(t,pC):`https://${t.authDomain}/${fC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="webStorageSupport";class mC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tp,this._completeRedirectFn=VI,this._overrideRedirectResult=$I}async _openPopup(e,n,s,i){var r;Ht((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Wu(e,n,s,Ia(),i);return hC(e,o,Mc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Wu(e,n,s,Ia(),i);return EI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rC(e),s=new HI(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wo,{type:Wo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Wo];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gp()||Oc()||io()}}const yC=mC;var Hu="@firebase/auth",ju="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function EC(t){Pt(new yt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_p(t)},l=new jb(s,i,r,c);return Xb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Pt(new yt("auth-internal",e=>{const n=In(e.getProvider("auth").getImmediate());return(s=>new vC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Hu,ju,wC(t)),at(Hu,ju,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=5*60,IC=wf("authIdTokenMaxAge")||bC;let Gu=null;const CC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>IC)return;const i=n==null?void 0:n.token;Gu!==i&&(Gu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TA(t=vc()){const e=Qn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jb(t,{popupRedirectResolver:yC,persistence:[OI,yI,Tp]}),s=wf("authTokenSyncURL");if(s){const r=CC(s);pI(n,r,()=>r(n.currentUser)),fI(n,o=>r(o))}const i=yf("auth");return i&&Zb(n,`http://${i}`),n}EC("Browser");var Ku={};const qu="@firebase/database",zu="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xp="";function TC(t){xp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SC(e)}}catch{}return new RC},xn=Mp("localStorage"),Sa=Mp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new to("@firebase/database"),AC=function(){let t=1;return function(){return t++}}(),Dp=function(t){const e=Sv(t),n=new bv;n.update(e);const s=n.digest();return gc.encodeByteArray(s)},Ri=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ri.apply(null,s):typeof s=="object"?e+=Ae(s):e+=s,e+=" "}return e};let $n=null,Yu=!0;const PC=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fs.logLevel=pe.VERBOSE,$n=fs.log.bind(fs),e&&Sa.set("logging_enabled",!0)):typeof t=="function"?$n=t:($n=null,Sa.remove("logging_enabled"))},Ue=function(...t){if(Yu===!0&&(Yu=!1,$n===null&&Sa.get("logging_enabled")===!0&&PC(!0)),$n){const e=Ri.apply(null,t);$n(e)}},Ai=function(t){return function(...e){Ue(t,...e)}},Ra=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ri(...t);fs.error(e)},jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ri(...t)}`;throw fs.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+Ri(...t);fs.warn(e)},OC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},NC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_n="[MIN_NAME]",mn="[MAX_NAME]",Ps=function(t,e){if(t===e)return 0;if(t===_n||e===mn)return-1;if(e===_n||t===mn)return 1;{const n=Qu(t),s=Qu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},kC=function(t,e){return t===e?0:t<e?-1:1},Ds=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},Fc=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ae(e[s]),n+=":",n+=Fc(t[e[s]]);return n+="}",n},Lp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fp=function(t){T(!Lc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},xC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const LC=new RegExp("^-?(0*)\\d{1,10}$"),FC=-2147483648,$C=2147483647,Qu=function(t){if(LC.test(t)){const e=Number(t);if(e>=FC&&e<=$C)return e}return null},Os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},UC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ys=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class ps{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ps.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="5",$p="v",Up="s",Bp="r",Vp="f",Wp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hp="ls",jp="p",Aa="ac",Gp="websocket",Kp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function WC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zp(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Gp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Kp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WC(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return av(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={},jo={};function Uc(t){const e=t.toString();return Ho[e]||(Ho[e]=new HC),Ho[e]}function jC(t,e){const n=t.toString();return jo[n]||(jo[n]=e()),jo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Os(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="start",KC="close",qC="pLPCommand",zC="pRTLPCB",Yp="id",Qp="pw",Jp="ser",YC="cb",QC="seg",JC="ts",XC="d",ZC="dframe",Xp=1870,Zp=30,eT=Xp-Zp,tT=25e3,nT=3e4;class is{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ai(e),this.stats_=Uc(n),this.urlFn=c=>(this.appCheckToken&&(c[Aa]=this.appCheckToken),zp(n,Kp,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new GC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nT)),NC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bc((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ju)this.id=a,this.password=c;else if(o===KC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ju]="t",s[Jp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[YC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[$p]=$c,this.transportSessionId&&(s[Up]=this.transportSessionId),this.lastSessionId&&(s[Hp]=this.lastSessionId),this.applicationId&&(s[jp]=this.applicationId),this.appCheckToken&&(s[Aa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wp.test(location.hostname)&&(s[Bp]=Vp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){is.forceAllow_=!0}static forceDisallow(){is.forceDisallow_=!0}static isAvailable(){return is.forceAllow_?!0:!is.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xC()&&!MC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_f(n),i=Lp(s,eT);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[ZC]="t",s[Yp]=e,s[Qp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=AC(),window[qC+this.uniqueCallbackIdentifier]=e,window[zC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yp]=this.myID,e[Qp]=this.myPW,e[Jp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zp+s.length<=Xp;){const o=this.pendingSegs.shift();s=s+"&"+QC+i+"="+o.seg+"&"+JC+i+"="+o.ts+"&"+XC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(tT)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=16384,iT=45e3;let Cr=null;typeof MozWebSocket<"u"?Cr=MozWebSocket:typeof WebSocket<"u"&&(Cr=WebSocket);class dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ai(this.connId),this.stats_=Uc(n),this.connURL=dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[$p]=$c,typeof location<"u"&&location.hostname&&Wp.test(location.hostname)&&(o[Bp]=Vp),n&&(o[Up]=n),s&&(o[Hp]=s),i&&(o[Aa]=i),r&&(o[jp]=r),zp(e,Gp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xn.set("previous_websocket_failure",!0);try{let s;If(),this.mySock=new Cr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Cr!==null&&!dt.forceDisallow_}static previouslyFailed(){return xn.isInMemoryStorage||xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=oi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lp(n,sT);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[is,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let s=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dt];else{const i=this.transports_=[];for(const r of di.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);di.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}di.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=6e4,oT=5e3,aT=10*1024,cT=100*1024,Go="t",Xu="d",lT="s",Zu="r",uT="e",eh="o",th="a",nh="n",sh="p",hT="h";class dT{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ai("c:"+this.id+":"),this.transportManager_=new di(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Go in e){const n=e[Go];n===th?this.upgradeIfSecondaryHealthy_():n===Zu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===eh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ds("t",e),s=Ds("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:th,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ds("t",e),s=Ds("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ds(Go,e);if(Xu in e){const s=e[Xu];if(n===hT){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lT?this.onConnectionShutdown_(s):n===Zu?this.onReset_(s):n===uT?Ra("Server Error: "+s):n===eh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ra("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$c!==s&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends tg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=32,rh=768;class ge{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new ge("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yn(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ge(t.pieces_,e)}function ng(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function sg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ig(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ge(e,0)}function Pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ge)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ge(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return je(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vc(t,e){if(yn(t)!==yn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function pt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(yn(t)>yn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class pT{constructor(e,n){this.errorPrefix_=n,this.parts_=sg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=eo(this.parts_[s]);rg(this)}}function gT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=eo(e),rg(t)}function _T(t){const e=t.parts_.pop();t.byteLength_-=eo(e),t.parts_.length>0&&(t.byteLength_-=1)}function rg(t){if(t.byteLength_>rh)throw new Error(t.errorPrefix_+"has a key path longer than "+rh+" bytes ("+t.byteLength_+").");if(t.parts_.length>ih)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ih+") or object contains a cycle "+An(t))}function An(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends tg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wc}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=1e3,mT=60*5*1e3,oh=30*1e3,yT=1.3,vT=3e4,wT="server_kill",ah=3;class Vt extends eg{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Vt.nextPersistentConnectionId_++,this.log_=Ai("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ls,this.maxReconnectDelay_=mT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!If())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ae(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Xr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Vt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const s=ms(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ev(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ra("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vT&&(this.reconnectDelay_=Ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new dT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ye(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(wT)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ye(h),c())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pa(this.interruptReasons_)&&(this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Fc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ge(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ah&&(this.reconnectDelay_=oh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ah&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xp.replace(/\./g,"-")]=1,mc()?e["framework.cordova"]=1:bf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tr.getInstance().currentlyOnline();return pa(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(_n,e),i=new te(_n,n);return this.compare(s,i)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;class og extends ao{static get __EMPTY_NODE(){return ji}static set __EMPTY_NODE(e){ji=e}compare(e,n){return Ps(e.name,n.name)}isDefinedOn(e){throw Ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(mn,ji)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,ji)}toString(){return".key"}}const Wt=new og;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??xe.RED,this.left=i??qe.EMPTY_NODE,this.right=r??qe.EMPTY_NODE}copy(e,n,s,i,r){return new xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class ET{copy(e,n,s,i,r){return this}insert(e,n,s){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gi(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new ET;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t,e){return Ps(t.name,e.name)}function Hc(t,e){return Ps(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;function IT(t){Pa=t}const ag=function(t){return typeof t=="number"?"number:"+Fp(t):"string:"+t},cg=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else T(t===Pa||t.isEmpty(),"priority of unexpected type.");T(t===Pa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;class ke{constructor(e,n=ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cg(this.priorityNode_)}static set __childrenNodeConstructor(e){ch=e}static get __childrenNodeConstructor(){return ch}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:Z(e)===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||yn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ag(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fp(this.value_):e+=this.value_,this.lazyHash_=Dp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ke.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ke.VALUE_TYPE_ORDER.indexOf(n),r=ke.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lg,ug;function CT(t){lg=t}function TT(t){ug=t}class ST extends ao{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ps(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(mn,new ke("[PRIORITY-POST]",ug))}makePost(e,n){const s=lg(e);return new te(n,new ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new ST;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=Math.log(2);class AT{constructor(e){const n=r=>parseInt(Math.log(r)/RT,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sr=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new xe(d,h.node,xe.BLACK,null,null);{const g=parseInt(u/2,10)+c,m=i(c,g),y=i(g+1,l);return h=t[g],d=n?n(h):h,new xe(d,h.node,xe.BLACK,m,y)}},r=function(c){let l=null,u=null,h=t.length;const d=function(m,y){const R=h-m,x=h;h-=m;const U=i(R+1,x),$=t[R],J=n?n($):$;g(new xe(J,$.node,y,null,U))},g=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),R=Math.pow(2,c.count-(m+1));y?d(R,xe.BLACK):(d(R,xe.BLACK),d(R,xe.RED))}return u},o=new AT(t.length),a=r(o);return new qe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;const ts={};class Ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ts&&Te,"ChildrenNode.ts has not been loaded"),Ko=Ko||new Ut({".priority":ts},{".priority":Te}),Ko}get(e){const n=ms(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Sr(s,e.getCompare()):a=ts;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Ut(u,l)}addToIndexes(e,n){const s=gr(this.indexes_,(i,r)=>{const o=ms(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===ts)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(te.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Sr(a,o.getCompare())}else return ts;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new te(e.name,a))),c.insert(e,e.node)}});return new Ut(s,this.indexSet_)}removeFromIndexes(e,n){const s=gr(this.indexes_,i=>{if(i===ts)return i;{const r=n.get(e.name);return r?i.remove(new te(e.name,r)):i}});return new Ut(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class K{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&cg(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fs||(Fs=new K(new qe(Hc),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fs}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fs:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Fs:this.priorityNode_;return new K(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{T(Z(e)!==".priority"||yn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),s++,r&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ag(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Dp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pi?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),i=n.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PT extends K{constructor(){super(new qe(Hc),K.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Pi=new PT;Object.defineProperties(te,{MIN:{value:new te(_n,K.EMPTY_NODE)},MAX:{value:new te(mn,Pi)}});og.__EMPTY_NODE=K.EMPTY_NODE;ke.__childrenNodeConstructor=K;IT(Pi);TT(Pi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=!0;function Me(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ke(n,Me(e))}if(!(t instanceof Array)&&OT){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Me(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new te(o,c)))}}),n.length===0)return K.EMPTY_NODE;const r=Sr(n,bT,o=>o.name,Hc);if(s){const o=Sr(n,Te.getCompare());return new K(r,Me(e),new Ut({".priority":o},{".priority":Te}))}else return new K(r,Me(e),Ut.Default)}else{let n=K.EMPTY_NODE;return Xe(t,(s,i)=>{if(kt(t,s)&&s.substring(0,1)!=="."){const r=Me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Me(e))}}CT(Me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends ao{constructor(e){super(),this.indexPath_=e,T(!ee(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ps(e.name,n.name):r}makePost(e,n){const s=Me(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Pi);return new te(mn,e)}toString(){return sg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT extends ao{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ps(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=Me(e);return new te(n,s)}toString(){return".value"}}const hg=new NT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){return{type:"value",snapshotNode:t}}function ys(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function pi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(fi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ys(n,s)):o.trackChildChange(pi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,r)=>{n.hasChild(i)||s.trackChildChange(fi(i,r))}),n.isLeafNode()||n.forEachChild(Te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(pi(i,r,o))}else s.trackChildChange(ys(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.indexedFilter_=new Gc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gi.getStartPost_(e),this.endPost_=gi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new te(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const r=this;return n.forEachChild(Te,(o,a)=>{r.matches(new te(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new gi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new te(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const c=new te(n,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,c);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(pi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(fi(n,h));const y=a.updateImmediateChild(n,K.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ys(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(fi(l.name,l.node)),r.trackChildChange(ys(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(l.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_n}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Kc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function MT(t){return t.loadsAllData()?new Gc(t.getIndex()):t.hasLimit()?new xT(t):new gi(t)}function DT(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function LT(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function FT(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Oa(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function $T(t,e,n){let s;return t.index_===Wt||n?s=Oa(t,e,n):s=Oa(t,e,_n),s.endBeforeSet_=!0,s}function fg(t,e){const n=t.copy();return n.index_=e,n}function lh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===hg?n="$value":t.index_===Wt?n="$key":(T(t.index_ instanceof jc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends eg{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ai("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rr.getListenId_(e,s),a={};this.listens_[o]=a;const c=lh(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),ms(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=Rr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=lh(e._queryParams),s=e._path.toString(),i=new Xr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ss(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=oi(a.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(){return{value:null,children:new Map}}function pg(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,Ar());const i=t.children.get(s);e=_e(e),pg(i,e,n)}}function Na(t,e,n){t.value!==null?n(e,t.value):BT(t,(s,i)=>{const r=new ge(e.toString()+"/"+s);Na(i,r,n)})}function BT(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=10*1e3,WT=30*1e3,HT=5*60*1e3;class jT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VT(e);const s=hh+(WT-hh)*Math.random();Ys(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(i,r)=>{r>0&&kt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*HT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function gg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=gt.ACK_USER_WRITE,this.source=gg()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ge(e));return new Pr(ce(),n,this.revert)}}else return T(Z(this.path)===e,"operationForChild called for unrelated child."),new Pr(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.source=e,this.path=n,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new _i(this.source,ce()):new _i(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=gt.OVERWRITE}operationForChild(e){return ee(this.path)?new jn(this.source,ce(),this.snap.getImmediateChild(e)):new jn(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=gt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new ge(e));return n.isEmpty()?null:n.value?new jn(this.source,ce(),n.value):new mi(this.source,ce(),n)}else return T(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mi(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function KT(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(kT(o.childName,o.snapshotNode))}),$s(t,i,"child_removed",e,s,n),$s(t,i,"child_added",e,s,n),$s(t,i,"child_moved",r,s,n),$s(t,i,"child_changed",e,s,n),$s(t,i,"value",e,s,n),i}function $s(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>zT(t,a,c)),o.forEach(a=>{const c=qT(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function qT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zT(t,e,n){if(e.childName==null||n.childName==null)throw Ts("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e){return{eventCache:t,serverCache:e}}function Qs(t,e,n,s){return co(new vn(e,n,s),t.serverCache)}function _g(t,e,n,s){return co(t.eventCache,new vn(e,n,s))}function Or(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;const YT=()=>(qo||(qo=new qe(kC)),qo);class we{constructor(e,n=YT()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Xe(e,(s,i)=>{n=n.set(new ge(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ee(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(_e(e),n);return r!=null?{path:Pe(new ge(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new we(null)}}set(e,n){if(ee(e))return new we(n,this.children);{const s=Z(e),r=(this.children.get(s)||new we(null)).set(_e(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(_e(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(ee(e))return n;{const s=Z(e),r=(this.children.get(s)||new we(null)).setTree(_e(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ee(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),Pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(ee(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(_e(e),Pe(n,i),s):new we(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.writeTree_=e}static empty(){return new mt(new we(null))}}function Js(t,e,n){if(ee(e))return new mt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new mt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new mt(r)}}}function dh(t,e,n){let s=t;return Xe(n,(i,r)=>{s=Js(s,Pe(e,i),r)}),s}function fh(t,e){if(ee(e))return mt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new mt(n)}}function ka(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function ph(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,i)=>{e.push(new te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new te(s,i.value))}),e}function un(t,e){if(ee(e))return t;{const n=Jn(t,e);return n!=null?new mt(new we(n)):new mt(t.writeTree_.subtree(e))}}function xa(t){return t.writeTree_.isEmpty()}function vs(t,e){return mg(ce(),t.writeTree_,e)}function mg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=mg(Pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t,e){return Eg(e,t)}function QT(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Js(t.visibleWrites,e,n)),t.lastWriteId=s}function JT(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function XT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ZT(a,s.path)?i=!1:pt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return eS(t),!0;if(s.snap)t.visibleWrites=fh(t.visibleWrites,s.path);else{const a=s.children;Xe(a,c=>{t.visibleWrites=fh(t.visibleWrites,Pe(s.path,c))})}return!0}else return!1}function ZT(t,e){if(t.snap)return pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pt(Pe(t.path,n),e))return!0;return!1}function eS(t){t.visibleWrites=yg(t.allWrites,tS,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tS(t){return t.visible}function yg(t,e,n){let s=mt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)pt(n,o)?(a=je(n,o),s=Js(s,a,r.snap)):pt(o,n)&&(a=je(o,n),s=Js(s,ce(),r.snap.getChild(a)));else if(r.children){if(pt(n,o))a=je(n,o),s=dh(s,a,r.children);else if(pt(o,n))if(a=je(o,n),ee(a))s=dh(s,ce(),r.children);else{const c=ms(r.children,Z(a));if(c){const l=c.getChild(_e(a));s=Js(s,ce(),l)}}}else throw Ts("WriteRecord should have .snap or .children")}}return s}function vg(t,e,n,s,i){if(!s&&!i){const r=Jn(t.visibleWrites,e);if(r!=null)return r;{const o=un(t.visibleWrites,e);if(xa(o))return n;if(n==null&&!ka(o,ce()))return null;{const a=n||K.EMPTY_NODE;return vs(o,a)}}}else{const r=un(t.visibleWrites,e);if(!i&&xa(r))return n;if(!i&&n==null&&!ka(r,ce()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(pt(l.path,e)||pt(e,l.path))},a=yg(t.allWrites,o,e),c=n||K.EMPTY_NODE;return vs(a,c)}}}function nS(t,e,n){let s=K.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=un(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const c=vs(un(r,new ge(o)),a);s=s.updateImmediateChild(o,c)}),ph(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=un(t.visibleWrites,e);return ph(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function sS(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Pe(e,n);if(ka(t.visibleWrites,r))return null;{const o=un(t.visibleWrites,r);return xa(o)?i.getChild(n):vs(o,i.getChild(n))}}function iS(t,e,n,s){const i=Pe(e,n),r=Jn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=un(t.visibleWrites,i);return vs(o,s.getNode().getImmediateChild(n))}else return null}function rS(t,e){return Jn(t.visibleWrites,e)}function oS(t,e,n,s,i,r,o){let a;const c=un(t.visibleWrites,e),l=Jn(c,ce());if(l!=null)a=l;else if(n!=null)a=vs(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function aS(){return{visibleWrites:mt.empty(),allWrites:[],lastWriteId:-1}}function Nr(t,e,n,s){return vg(t.writeTree,t.treePath,e,n,s)}function Yc(t,e){return nS(t.writeTree,t.treePath,e)}function gh(t,e,n,s){return sS(t.writeTree,t.treePath,e,n,s)}function kr(t,e){return rS(t.writeTree,Pe(t.treePath,e))}function cS(t,e,n,s,i,r){return oS(t.writeTree,t.treePath,e,n,s,i,r)}function Qc(t,e,n){return iS(t.writeTree,t.treePath,e,n)}function wg(t,e){return Eg(Pe(t.treePath,e),t.writeTree)}function Eg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,pi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,fi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ys(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,pi(s,e.snapshotNode,i.oldSnap));else throw Ts("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const bg=new uS;class Jc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),r=cS(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t){return{filter:t}}function dS(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fS(t,e,n,s,i){const r=new lS;let o,a;if(n.type===gt.OVERWRITE){const l=n;l.source.fromUser?o=Ma(t,e,l.path,l.snap,s,i,r):(T(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ee(l.path),o=xr(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===gt.MERGE){const l=n;l.source.fromUser?o=gS(t,e,l.path,l.children,s,i,r):(T(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Da(t,e,l.path,l.children,s,i,a,r))}else if(n.type===gt.ACK_USER_WRITE){const l=n;l.revert?o=yS(t,e,l.path,s,i,r):o=_S(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===gt.LISTEN_COMPLETE)o=mS(t,e,n.path,s,r);else throw Ts("Unknown operation type: "+n.type);const c=r.getChanges();return pS(e,o,c),{viewCache:o,changes:c}}function pS(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Or(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(dg(Or(e)))}}function Ig(t,e,n,s,i,r){const o=e.eventCache;if(kr(s,n)!=null)return e;{let a,c;if(ee(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Gn(e),u=l instanceof K?l:K.EMPTY_NODE,h=Yc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Nr(s,Gn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=Z(n);if(l===".priority"){T(yn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=gh(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=_e(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=gh(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Qc(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Qs(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function xr(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),g,null)}else{const g=Z(n);if(!c.isCompleteForPath(n)&&yn(n)>1)return e;const m=_e(n),R=c.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?l=u.updatePriority(c.getNode(),R):l=u.updateChild(c.getNode(),g,R,m,bg,null)}const h=_g(e,l,c.isFullyInitialized()||ee(n),u.filtersNodes()),d=new Jc(i,h,r);return Ig(t,h,n,i,d,a)}function Ma(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new Jc(i,e,r);if(ee(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Qs(e,l,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=Qs(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=_e(n),g=a.getNode().getImmediateChild(h);let m;if(ee(d))m=s;else{const y=u.getCompleteChild(h);y!=null?ng(d)===".priority"&&y.getChild(ig(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=K.EMPTY_NODE}if(g.equals(m))c=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);c=Qs(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function _h(t,e){return t.eventCache.isCompleteForChild(e)}function gS(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Pe(n,c);_h(e,Z(u))&&(a=Ma(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Pe(n,c);_h(e,Z(u))||(a=Ma(t,a,u,l,i,r,o))}),a}function mh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Da(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ee(n)?l=s:l=new we(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=mh(t,g,d);c=xr(t,c,new ge(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),y=mh(t,m,d);c=xr(t,c,new ge(h),y,i,r,o,a)}}),c}function _S(t,e,n,s,i,r,o){if(kr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return xr(t,e,n,c.getNode().getChild(n),i,r,a,o);if(ee(n)){let l=new we(null);return c.getNode().forEachChild(Wt,(u,h)=>{l=l.set(new ge(u),h)}),Da(t,e,n,l,i,r,a,o)}else return e}else{let l=new we(null);return s.foreach((u,h)=>{const d=Pe(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Da(t,e,n,l,i,r,a,o)}}function mS(t,e,n,s,i){const r=e.serverCache,o=_g(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return Ig(t,o,n,s,bg,i)}function yS(t,e,n,s,i,r){let o;if(kr(s,n)!=null)return e;{const a=new Jc(s,e,i),c=e.eventCache.getNode();let l;if(ee(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Nr(s,Gn(e));else{const h=e.serverCache.getNode();T(h instanceof K,"serverChildren would be complete if leaf node"),u=Yc(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=Z(n);let h=Qc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,_e(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,K.EMPTY_NODE,_e(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nr(s,Gn(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||kr(s,ce())!=null,Qs(e,l,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Gc(s.getIndex()),r=MT(s);this.processor_=hS(r);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(K.EMPTY_NODE,a.getNode(),null),u=new vn(c,o.isFullyInitialized(),i.filtersNodes()),h=new vn(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=co(h,u),this.eventGenerator_=new GT(this.query_)}get query(){return this.query_}}function wS(t){return t.viewCache_.serverCache.getNode()}function ES(t){return Or(t.viewCache_)}function bS(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function yh(t){return t.eventRegistrations_.length===0}function IS(t,e){t.eventRegistrations_.push(e)}function vh(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function wh(t,e,n,s){e.type===gt.MERGE&&e.source.queryId!==null&&(T(Gn(t.viewCache_),"We should always have a full cache before handling merges"),T(Or(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=fS(t.processor_,i,e,n,s);return dS(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Cg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function CS(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(r,o)=>{s.push(ys(r,o))}),n.isFullyInitialized()&&s.push(dg(n.getNode())),Cg(t,s,n.getNode(),e)}function Cg(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return KT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;class Tg{constructor(){this.views=new Map}}function TS(t){T(!Mr,"__referenceConstructor has already been defined"),Mr=t}function SS(){return T(Mr,"Reference.ts has not been loaded"),Mr}function RS(t){return t.views.size===0}function Xc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),wh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(wh(o,e,n,s));return r}}function Sg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Nr(n,i?s:null),c=!1;a?c=!0:s instanceof K?(a=Yc(n,s),c=!1):(a=K.EMPTY_NODE,c=!1);const l=co(new vn(a,c,!1),new vn(s,i,!1));return new vS(e,l)}return o}function AS(t,e,n,s,i,r){const o=Sg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),IS(o,n),CS(o,n)}function PS(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=wn(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(vh(l,n,s)),yh(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(vh(c,n,s)),yh(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!wn(t)&&r.push(new(SS())(e._repo,e._path)),{removed:r,events:o}}function Rg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hn(t,e){let n=null;for(const s of t.views.values())n=n||bS(s,e);return n}function Ag(t,e){if(e._queryParams.loadsAllData())return uo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Pg(t,e){return Ag(t,e)!=null}function wn(t){return uo(t)!=null}function uo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr;function OS(t){T(!Dr,"__referenceConstructor has already been defined"),Dr=t}function NS(){return T(Dr,"Reference.ts has not been loaded"),Dr}let kS=1;class Eh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=aS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Og(t,e,n,s,i){return QT(t.pendingWriteTree_,e,n,s,i),i?Ni(t,new jn(gg(),e,n)):[]}function Mn(t,e,n=!1){const s=JT(t.pendingWriteTree_,e);if(XT(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ce(),!0):Xe(s.children,o=>{r=r.set(new ge(o),!0)}),Ni(t,new Pr(s.path,r,n))}else return[]}function Oi(t,e,n){return Ni(t,new jn(qc(),e,n))}function xS(t,e,n){const s=we.fromObject(n);return Ni(t,new mi(qc(),e,s))}function MS(t,e){return Ni(t,new _i(qc(),e))}function DS(t,e,n){const s=el(t,n);if(s){const i=tl(s),r=i.path,o=i.queryId,a=je(r,e),c=new _i(zc(o),a);return nl(t,r,c)}else return[]}function Lr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Pg(o,e))){const c=PS(o,e,n,s);RS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>wn(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=$S(d);for(let m=0;m<g.length;++m){const y=g[m],R=y.query,x=Mg(t,y);t.listenProvider_.startListening(Xs(R),yi(t,R),x.hashFn,x.onComplete)}}}!h&&l.length>0&&!s&&(u?t.listenProvider_.stopListening(Xs(e),null):l.forEach(d=>{const g=t.queryToTagMap.get(ho(d));t.listenProvider_.stopListening(Xs(d),g)}))}US(t,l)}return a}function Ng(t,e,n,s){const i=el(t,s);if(i!=null){const r=tl(i),o=r.path,a=r.queryId,c=je(o,e),l=new jn(zc(a),c,n);return nl(t,o,l)}else return[]}function LS(t,e,n,s){const i=el(t,s);if(i){const r=tl(i),o=r.path,a=r.queryId,c=je(o,e),l=we.fromObject(n),u=new mi(zc(a),c,l);return nl(t,o,u)}else return[]}function La(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const m=je(d,i);r=r||hn(g,m),o=o||wn(g)});let a=t.syncPointTree_.get(i);a?(o=o||wn(a),r=r||hn(a,ce())):(a=new Tg,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=K.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const y=hn(m,ce());y&&(r=r.updateImmediateChild(g,y))}));const l=Pg(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=ho(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=BS();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=lo(t.pendingWriteTree_,i);let h=AS(a,e,n,u,r,c);if(!l&&!o&&!s){const d=Ag(a,e);h=h.concat(VS(t,e,d))}return h}function Zc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=je(o,e),l=hn(a,c);if(l)return l});return vg(i,e,r,n,!0)}function FS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(l,u)=>{const h=je(l,n);s=s||hn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||hn(i,ce()):(i=new Tg,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new vn(s,!0,!1):null,a=lo(t.pendingWriteTree_,e._path),c=Sg(i,e,a,r?o.getNode():K.EMPTY_NODE,r);return ES(c)}function Ni(t,e){return kg(e,t.syncPointTree_,null,lo(t.pendingWriteTree_,ce()))}function kg(t,e,n,s){if(ee(t.path))return xg(t,e,n,s);{const i=e.get(ce());n==null&&i!=null&&(n=hn(i,ce()));let r=[];const o=Z(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=wg(s,o);r=r.concat(kg(a,c,l,u))}return i&&(r=r.concat(Xc(i,t,s,n))),r}}function xg(t,e,n,s){const i=e.get(ce());n==null&&i!=null&&(n=hn(i,ce()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=wg(s,o),u=t.operationForChild(o);u&&(r=r.concat(xg(u,a,c,l)))}),i&&(r=r.concat(Xc(i,t,s,n))),r}function Mg(t,e){const n=e.query,s=yi(t,n);return{hashFn:()=>(wS(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?DS(t,n._path,s):MS(t,n._path);{const r=DC(i,n);return Lr(t,n,null,r)}}}}function yi(t,e){const n=ho(e);return t.queryToTagMap.get(n)}function ho(t){return t._path.toString()+"$"+t._queryIdentifier}function el(t,e){return t.tagToQueryMap.get(e)}function tl(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ge(t.substr(0,e))}}function nl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=lo(t.pendingWriteTree_,e);return Xc(s,n,i,null)}function $S(t){return t.fold((e,n,s)=>{if(n&&wn(n))return[uo(n)];{let i=[];return n&&(i=Rg(n)),Xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Xs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(NS())(t._repo,t._path):t}function US(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ho(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function BS(){return kS++}function VS(t,e,n){const s=e._path,i=yi(t,e),r=Mg(t,n),o=t.listenProvider_.startListening(Xs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!ee(l)&&u&&wn(u))return[uo(u).query];{let d=[];return u&&(d=d.concat(Rg(u).map(g=>g.query))),Xe(h,(g,m)=>{d=d.concat(m)}),d}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(Xs(u),yi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sl(n)}node(){return this.node_}}class il{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new il(this.syncTree_,n)}node(){return Zc(this.syncTree_,this.path_)}}const WS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bh=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jS(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},jS=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},GS=function(t,e,n,s){return rl(e,new il(n,t),s)},Dg=function(t,e,n){return rl(t,new sl(e),n)};function rl(t,e,n){const s=t.getPriority().val(),i=bh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=bh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ke(a,Me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ke(i))),o.forEachChild(Te,(a,c)=>{const l=rl(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function al(t,e){let n=e instanceof ge?e:new ge(e),s=t,i=Z(n);for(;i!==null;){const r=ms(s.node.children,i)||{children:{},childCount:0};s=new ol(i,s,r),n=_e(n),i=Z(n)}return s}function Ns(t){return t.node.value}function Lg(t,e){t.node.value=e,Fa(t)}function Fg(t){return t.node.childCount>0}function KS(t){return Ns(t)===void 0&&!Fg(t)}function fo(t,e){Xe(t.node.children,(n,s)=>{e(new ol(n,t,s))})}function $g(t,e,n,s){n&&!s&&e(t),fo(t,i=>{$g(i,e,!0,s)}),n&&s&&e(t)}function qS(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ki(t){return new ge(t.parent===null?t.name:ki(t.parent)+"/"+t.name)}function Fa(t){t.parent!==null&&zS(t.parent,t.name,t)}function zS(t,e,n){const s=KS(n),i=kt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Fa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=/[\[\].#$\/\u0000-\u001F\u007F]/,QS=/[\[\].#$\u0000-\u001F\u007F]/,zo=10*1024*1024,cl=function(t){return typeof t=="string"&&t.length!==0&&!YS.test(t)},Ug=function(t){return typeof t=="string"&&t.length!==0&&!QS.test(t)},JS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ug(t)},Ih=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Lc(t)||t&&typeof t=="object"&&kt(t,".sv")},xi=function(t,e,n,s){s&&e===void 0||ll(Zr(t,"value"),e,n)},ll=function(t,e,n){const s=n instanceof ge?new pT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+An(s));if(typeof e=="function")throw new Error(t+"contains a function "+An(s)+" with contents = "+e.toString());if(Lc(e))throw new Error(t+"contains "+e.toString()+" "+An(s));if(typeof e=="string"&&e.length>zo/3&&eo(e)>zo)throw new Error(t+"contains a string greater than "+zo+" utf8 bytes "+An(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!cl(o)))throw new Error(t+" contains an invalid key ("+o+") "+An(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gT(s,o),ll(t,a,s),_T(s)}),i&&r)throw new Error(t+' contains ".value" child '+An(s)+" in addition to actual children.")}},po=function(t,e,n,s){if(!(s&&n===void 0)&&!cl(n))throw new Error(Zr(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ul=function(t,e,n,s){if(!(s&&n===void 0)&&!Ug(n))throw new Error(Zr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ul(t,e,n,s)},ZS=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},e0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JS(n))throw new Error(Zr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Vc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Bg(t,e,n){hl(t,n),Vg(t,s=>Vc(s,e))}function Ot(t,e,n){hl(t,n),Vg(t,s=>pt(s,e)||pt(e,s))}function Vg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(n0(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function n0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();$n&&Ue("event: "+n.toString()),Os(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="repo_interrupt",i0=25;class r0{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new t0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ar(),this.transactionQueueTree_=new ol,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function o0(t,e,n){if(t.stats_=Uc(t.repoInfo_),t.forceRestClient_||UC())t.server_=new Rr(t.repoInfo_,(s,i,r,o)=>{Ch(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Th(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(s,i,r,o)=>{Ch(t,s,i,r,o)},s=>{Th(t,s)},s=>{c0(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=jC(t.repoInfo_,()=>new jT(t.stats_,t.server_)),t.infoData_=new UT,t.infoSyncTree_=new Eh({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Oi(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fl(t,"connected",!1),t.serverSyncTree_=new Eh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Ot(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function a0(t){const n=t.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dl(t){return WS({timestamp:a0(t)})}function Ch(t,e,n,s,i){t.dataUpdateCount++;const r=new ge(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=gr(n,l=>Me(l));o=LS(t.serverSyncTree_,r,c,i)}else{const c=Me(n);o=Ng(t.serverSyncTree_,r,c,i)}else if(s){const c=gr(n,l=>Me(l));o=xS(t.serverSyncTree_,r,c)}else{const c=Me(n);o=Oi(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=_o(t,r)),Ot(t.eventQueue_,a,o)}function Th(t,e){fl(t,"connected",e),e===!1&&h0(t)}function c0(t,e){Xe(e,(n,s)=>{fl(t,n,s)})}function fl(t,e,n){const s=new ge("/.info/"+e),i=Me(n);t.infoData_.updateSnapshot(s,i);const r=Oi(t.infoSyncTree_,s,i);Ot(t.eventQueue_,s,r)}function Wg(t){return t.nextWriteId_++}function l0(t,e,n){const s=FS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Me(i).withIndex(e._queryParams.getIndex());La(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Oi(t.serverSyncTree_,e._path,r);else{const a=yi(t.serverSyncTree_,e);o=Ng(t.serverSyncTree_,e._path,r,a)}return Ot(t.eventQueue_,e._path,o),Lr(t.serverSyncTree_,e,n,null,!0),r},i=>(go(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function u0(t,e,n,s,i){go(t,"set",{path:e.toString(),value:n,priority:s});const r=dl(t),o=Me(n,s),a=Zc(t.serverSyncTree_,e),c=Dg(o,a,r),l=Wg(t),u=Og(t.serverSyncTree_,e,c,l,!0);hl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const m=d==="ok";m||Ye("set at "+e+" failed: "+d);const y=Mn(t.serverSyncTree_,l,!m);Ot(t.eventQueue_,e,y),p0(t,i,d,g)});const h=qg(t,e);_o(t,h),Ot(t.eventQueue_,h,[])}function h0(t){go(t,"onDisconnectEvents");const e=dl(t),n=Ar();Na(t.onDisconnect_,ce(),(i,r)=>{const o=GS(i,r,t.serverSyncTree_,e);pg(n,i,o)});let s=[];Na(n,ce(),(i,r)=>{s=s.concat(Oi(t.serverSyncTree_,i,r));const o=qg(t,i);_o(t,o)}),t.onDisconnect_=Ar(),Ot(t.eventQueue_,ce(),s)}function d0(t,e,n){let s;Z(e._path)===".info"?s=La(t.infoSyncTree_,e,n):s=La(t.serverSyncTree_,e,n),Bg(t.eventQueue_,e._path,s)}function $a(t,e,n){let s;Z(e._path)===".info"?s=Lr(t.infoSyncTree_,e,n):s=Lr(t.serverSyncTree_,e,n),Bg(t.eventQueue_,e._path,s)}function f0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(s0)}function go(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function p0(t,e,n,s){e&&Os(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Hg(t,e,n){return Zc(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function pl(t,e=t.transactionQueueTree_){if(e||mo(t,e),Ns(e)){const n=Gg(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&g0(t,ki(e),n)}else Fg(e)&&fo(e,n=>{pl(t,n)})}function g0(t,e,n){const s=n.map(l=>l.currentWriteId),i=Hg(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{go(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Mn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();mo(t,al(t.transactionQueueTree_,e)),pl(t,t.transactionQueueTree_),Ot(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Os(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ye("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}_o(t,e)}},o)}function _o(t,e){const n=jg(t,e),s=ki(n),i=Gg(t,n);return _0(t,i,s),s}function _0(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=je(n,c.path);let u=!1,h;if(T(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Mn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=i0)u=!0,h="maxretry",i=i.concat(Mn(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Hg(t,c.path,o);c.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){ll("transaction failed: Data returned ",g,c.path);let m=Me(g);typeof g=="object"&&g!=null&&kt(g,".priority")||(m=m.updatePriority(d.getPriority()));const R=c.currentWriteId,x=dl(t),U=Dg(m,d,x);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=U,c.currentWriteId=Wg(t),o.splice(o.indexOf(R),1),i=i.concat(Og(t.serverSyncTree_,c.path,U,c.currentWriteId,c.applyLocally)),i=i.concat(Mn(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat(Mn(t.serverSyncTree_,c.currentWriteId,!0))}Ot(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}mo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Os(s[a]);pl(t,t.transactionQueueTree_)}function jg(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&Ns(s)===void 0;)s=al(s,n),e=_e(e),n=Z(e);return s}function Gg(t,e){const n=[];return Kg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Kg(t,e,n){const s=Ns(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);fo(e,i=>{Kg(t,i,n)})}function mo(t,e){const n=Ns(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Lg(e,n.length>0?n:void 0)}fo(e,s=>{mo(t,s)})}function qg(t,e){const n=ki(jg(t,e)),s=al(t.transactionQueueTree_,e);return qS(s,i=>{Yo(t,i)}),Yo(t,s),$g(s,i=>{Yo(t,i)}),n}function Yo(t,e){const n=Ns(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Lg(e,void 0):n.length=r+1,Ot(t.eventQueue_,ki(e),i);for(let o=0;o<s.length;o++)Os(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function y0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sh=function(t,e){const n=v0(t),s=n.namespace;n.domain==="firebase.com"&&jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ge(n.pathString)}},v0=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=m0(t.substring(u,h)));const d=y0(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const g=e.slice(0,l);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class Yg{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ee(this._path)?null:ng(this._path)}get ref(){return new Mt(this._repo,this._path)}get _queryIdentifier(){const e=uh(this._queryParams),n=Fc(e);return n==="{}"?"default":n}get _queryObject(){return uh(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof xt))return!1;const n=this._repo===e._repo,s=Vc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fT(this._path)}}function Qg(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Mi(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Wt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==_n)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==mn)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Te){if(e!=null&&!Ih(e)||n!=null&&!Ih(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof jc||t.getIndex()===hg,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function _l(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Mt extends xt{constructor(e,n){super(e,n,new Kc,!1)}get parent(){const e=ig(this._path);return e===null?null:new Mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ws{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ge(e),s=Fr(this.ref,e);return new ws(this._node.getChild(n),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ws(i,Fr(this.ref,s),Te)))}hasChild(e){const n=new ge(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function SA(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?Fr(t._root,e):t._root}function Fr(t,e){return t=$e(t),Z(t._path)===null?XS("child","path",e,!1):ul("child","path",e,!1),new Mt(t._repo,Pe(t._path,e))}function RA(t,e){t=$e(t),ZS("set",t._path),xi("set",e,t._path,!1);const n=new Xr;return u0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function AA(t){t=$e(t);const e=new gl(()=>{}),n=new Di(e);return l0(t._repo,t,n).then(s=>new ws(s,new Mt(t._repo,t._path),t._queryParams.getIndex()))}class Di{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new zg("value",this,new ws(e.snapshotNode,new Mt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Yg(this,e,n):null}matches(e){return e instanceof Di?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class yo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Yg(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=Fr(new Mt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new zg(e.type,this,new ws(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof yo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function w0(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,l=(u,h)=>{$a(t._repo,t,a),c(u,h)};l.userCallback=n.userCallback,l.context=n.context,n=l}const o=new gl(n,r||void 0),a=e==="value"?new Di(o):new yo(e,o);return d0(t._repo,t,a),()=>$a(t._repo,t,a)}function PA(t,e,n,s){return w0(t,"value",e,n,s)}function OA(t,e,n){let s=null;const i=n?new gl(n):null;e==="value"?s=new Di(i):e&&(s=new yo(e,i)),$a(t._repo,t,s)}class Cn{}class Jg extends Cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){xi("endAt",this._value,e._path,!0);const n=Oa(e._queryParams,this._value,this._key);if(_l(n),Mi(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function NA(t,e){return po("endAt","key",e,!0),new Jg(t,e)}class E0 extends Cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){xi("endBefore",this._value,e._path,!1);const n=$T(e._queryParams,this._value,this._key);if(_l(n),Mi(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function kA(t,e){return po("endBefore","key",e,!0),new E0(t,e)}class Xg extends Cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){xi("startAt",this._value,e._path,!0);const n=FT(e._queryParams,this._value,this._key);if(_l(n),Mi(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function xA(t=null,e){return po("startAt","key",e,!0),new Xg(t,e)}class b0 extends Cn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new xt(e._repo,e._path,DT(e._queryParams,this._limit),e._orderByCalled)}}function MA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new b0(t)}class I0 extends Cn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new xt(e._repo,e._path,LT(e._queryParams,this._limit),e._orderByCalled)}}function DA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new I0(t)}class C0 extends Cn{constructor(e){super(),this._path=e}_apply(e){Qg(e,"orderByChild");const n=new ge(this._path);if(ee(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new jc(n),i=fg(e._queryParams,s);return Mi(i),new xt(e._repo,e._path,i,!0)}}function LA(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ul("orderByChild","path",t,!1),new C0(t)}class T0 extends Cn{_apply(e){Qg(e,"orderByKey");const n=fg(e._queryParams,Wt);return Mi(n),new xt(e._repo,e._path,n,!0)}}function FA(){return new T0}class S0 extends Cn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(xi("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Jg(this._value,this._key)._apply(new Xg(this._value,this._key)._apply(e))}}function $A(t,e){return po("equalTo","key",e,!0),new S0(t,e)}function UA(t,...e){let n=$e(t);for(const s of e)n=s._apply(n);return n}TS(Mt);OS(Mt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="FIREBASE_DATABASE_EMULATOR_HOST",Ua={};let A0=!1;function P0(t,e,n,s){t.repoInfo_=new qp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function O0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sh(r,i),a=o.repoInfo,c,l;typeof process<"u"&&Ku&&(l=Ku[R0]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Sh(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new ps(ps.OWNER):new VC(t.name,t.options,e);e0("Invalid Firebase Database URL",o),ee(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=k0(a,t,u,new BC(t.name,n));return new x0(h,t)}function N0(t,e){const n=Ua[e];(!n||n[t.key]!==t)&&jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),f0(t),delete n[t.key]}function k0(t,e,n,s){let i=Ua[e.name];i||(i={},Ua[e.name]=i);let r=i[t.toURLString()];return r&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new r0(t,A0,n,s),i[t.toURLString()]=r,r}class x0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(o0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mt(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(N0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function BA(t=vc(),e){const n=Qn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=fv("database");s&&M0(n,...s)}return n}function M0(t,e,n,s={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ps(ps.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:pv(s.mockUserToken,t.app.options.projectId);r=new ps(o)}P0(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){TC(Rs),Pt(new yt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return O0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),at(qu,zu,t),at(qu,zu,"esm2017")}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};D0();/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ss=typeof window<"u";function L0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const de=Object.assign;function Qo(t,e){const n={};for(const s in e){const i=e[s];n[s]=vt(i)?i.map(t):t(i)}return n}const Zs=()=>{},vt=Array.isArray,F0=/\/$/,$0=t=>t.replace(F0,"");function Jo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=W0(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function U0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function B0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Es(e.matched[s],n.matched[i])&&Zg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!V0(t[n],e[n]))return!1;return!0}function V0(t,e){return vt(t)?Ah(t,e):vt(e)?Ah(e,t):t===e}function Ah(t,e){return vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function W0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var vi;(function(t){t.pop="pop",t.push="push"})(vi||(vi={}));var ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ei||(ei={}));function H0(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$0(t)}const j0=/^[^#]+#/;function G0(t,e){return t.replace(j0,"#")+e}function K0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const vo=()=>({left:window.pageXOffset,top:window.pageYOffset});function q0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=K0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ph(t,e){return(history.state?history.state.position-e:-1)+t}const Ba=new Map;function z0(t,e){Ba.set(t,e)}function Y0(t){const e=Ba.get(t);return Ba.delete(t),e}let Q0=()=>location.protocol+"//"+location.host;function e_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Rh(c,"")}return Rh(n,t)+s+i}function J0(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const g=e_(t,location),m=n.value,y=e.value;let R=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}R=y?d.position-y.position:0}else s(g);i.forEach(x=>{x(n.value,m,{delta:R,type:vi.pop,direction:R?R>0?ei.forward:ei.back:ei.unknown})})};function c(){o=n.value}function l(d){i.push(d);const g=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(de({},d.state,{scroll:vo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Oh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?vo():null}}function X0(t){const{history:e,location:n}=window,s={value:e_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Q0()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=de({},e.state,Oh(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=de({},i.value,e.state,{forward:c,scroll:vo()});r(u.current,u,!0);const h=de({},Oh(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function VA(t){t=H0(t);const e=X0(t),n=J0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=de({location:"",base:t,go:s,createHref:G0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Z0(t){return typeof t=="string"||t&&typeof t=="object"}function t_(t){return typeof t=="string"||typeof t=="symbol"}const zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},n_=Symbol("");var Nh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nh||(Nh={}));function bs(t,e){return de(new Error,{type:t,[n_]:!0},e)}function Dt(t,e){return t instanceof Error&&n_ in t&&(e==null||!!(t.type&e))}const kh="[^/]+?",eR={sensitive:!1,strict:!1,start:!0,end:!0},tR=/[.+*?^${}()[\]/\\]/g;function nR(t,e){const n=de({},eR,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(tR,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:y,optional:R,regexp:x}=d;r.push({name:m,repeatable:y,optional:R});const U=x||kh;if(U!==kh){g+=10;try{new RegExp(`(${U})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${m}" (${U}): `+J.message)}}let $=y?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||($=R&&l.length<2?`(?:/${$})`:"/"+$),R&&($+="?"),i+=$,g+=20,R&&(g+=-8),y&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=r[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:y,optional:R}=g,x=m in l?l[m]:"";if(vt(x)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const U=vt(x)?x.join("/"):x;if(!U)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=U}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function sR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function iR(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=sR(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(xh(s))return 1;if(xh(i))return-1}return i.length-s.length}function xh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rR={type:0,value:""},oR=/[a-zA-Z0-9_]/;function aR(t){if(!t)return[[]];if(t==="/")return[[rR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:oR.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function cR(t,e,n){const s=nR(aR(t.path),n),i=de(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function lR(t,e){const n=[],s=new Map;e=Lh({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const g=!d,m=uR(u);m.aliasOf=d&&d.record;const y=Lh(e,u),R=[m];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of $)R.push(de({},m,{components:d?d.record.components:m.components,path:J,aliasOf:d?d.record:m}))}let x,U;for(const $ of R){const{path:J}=$;if(h&&J[0]!=="/"){const oe=h.record.path,B=oe[oe.length-1]==="/"?"":"/";$.path=h.record.path+(J&&B+J)}if(x=cR($,h,y),d?d.alias.push(x):(U=U||x,U!==x&&U.alias.push(x),g&&u.name&&!Dh(x)&&o(u.name)),m.children){const oe=m.children;for(let B=0;B<oe.length;B++)r(oe[B],x,d&&d.children[B])}d=d||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return U?()=>{o(U)}:Zs}function o(u){if(t_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&iR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!s_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Dh(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw bs(1,{location:u});y=d.record.name,g=de(Mh(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Mh(u.params,d.keys.map(U=>U.name))),m=d.stringify(g)}else if("path"in u)m=u.path,d=n.find(U=>U.re.test(m)),d&&(g=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw bs(1,{location:u,currentLocation:h});y=d.record.name,g=de({},h.params,u.params),m=d.stringify(g)}const R=[];let x=d;for(;x;)R.unshift(x.record),x=x.parent;return{name:y,path:m,params:g,matched:R,meta:dR(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Mh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function uR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Dh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dR(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Lh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function s_(t,e){return e.children.some(n=>n===t||s_(t,n))}const i_=/#/g,fR=/&/g,pR=/\//g,gR=/=/g,_R=/\?/g,r_=/\+/g,mR=/%5B/g,yR=/%5D/g,o_=/%5E/g,vR=/%60/g,a_=/%7B/g,wR=/%7C/g,c_=/%7D/g,ER=/%20/g;function ml(t){return encodeURI(""+t).replace(wR,"|").replace(mR,"[").replace(yR,"]")}function bR(t){return ml(t).replace(a_,"{").replace(c_,"}").replace(o_,"^")}function Va(t){return ml(t).replace(r_,"%2B").replace(ER,"+").replace(i_,"%23").replace(fR,"%26").replace(vR,"`").replace(a_,"{").replace(c_,"}").replace(o_,"^")}function IR(t){return Va(t).replace(gR,"%3D")}function CR(t){return ml(t).replace(i_,"%23").replace(_R,"%3F")}function TR(t){return t==null?"":CR(t).replace(pR,"%2F")}function $r(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SR(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(r_," "),o=r.indexOf("="),a=$r(o<0?r:r.slice(0,o)),c=o<0?null:$r(r.slice(o+1));if(a in e){let l=e[a];vt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Fh(t){let e="";for(let n in t){const s=t[n];if(n=IR(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(vt(s)?s.map(r=>r&&Va(r)):[s&&Va(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function RR(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=vt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const AR=Symbol(""),$h=Symbol(""),yl=Symbol(""),l_=Symbol(""),Wa=Symbol("");function Us(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(bs(4,{from:n,to:e})):h instanceof Error?a(h):Z0(h)?a(bs(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Xo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(PR(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Xt(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=L0(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Xt(d,n,s,r,o)()}))}}return i}function PR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uh(t){const e=Tt(yl),n=Tt(l_),s=rt(()=>e.resolve(cs(t.to))),i=rt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Es.bind(null,u));if(d>-1)return d;const g=Bh(c[l-2]);return l>1&&Bh(u)===g&&h[h.length-1].path!==g?h.findIndex(Es.bind(null,c[l-2])):d}),r=rt(()=>i.value>-1&&xR(n.params,s.value.params)),o=rt(()=>i.value>-1&&i.value===n.matched.length-1&&Zg(n.params,s.value.params));function a(c={}){return kR(c)?e[cs(t.replace)?"replace":"push"](cs(t.to)).catch(Zs):Promise.resolve()}return{route:s,href:rt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const OR=Pd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uh,setup(t,{slots:e}){const n=Ei(Uh(t)),{options:s}=Tt(yl),i=rt(()=>({[Vh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Vh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Qd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),NR=OR;function kR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!vt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Bh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vh=(t,e,n)=>t??e??n,MR=Pd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Tt(Wa),i=rt(()=>t.route||s.value),r=Tt($h,0),o=rt(()=>{let l=cs(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=rt(()=>i.value.matched[o.value]);Xi($h,rt(()=>o.value+1)),Xi(AR,a),Xi(Wa,i);const c=Y_();return us(()=>[c.value,a.value,t.name],([l,u,h],[d,g,m])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Es(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Wh(n.default,{Component:d,route:l});const g=h.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=Qd(d,de({},m,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Wh(n.default,{Component:R,route:l})||R}}});function Wh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const DR=MR;function WA(t){const e=lR(t.routes,t),n=t.parseQuery||SR,s=t.stringifyQuery||Fh,i=t.history,r=Us(),o=Us(),a=Us(),c=Q_(zt);let l=zt;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Qo.bind(null,v=>""+v),h=Qo.bind(null,TR),d=Qo.bind(null,$r);function g(v,M){let O,k;return t_(v)?(O=e.getRecordMatcher(v),k=M):k=v,e.addRoute(k,O)}function m(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function y(){return e.getRoutes().map(v=>v.record)}function R(v){return!!e.getRecordMatcher(v)}function x(v,M){if(M=de({},M||c.value),typeof v=="string"){const p=Jo(n,v,M.path),_=e.resolve({path:p.path},M),E=i.createHref(p.fullPath);return de(p,_,{params:d(_.params),hash:$r(p.hash),redirectedFrom:void 0,href:E})}let O;if("path"in v)O=de({},v,{path:Jo(n,v.path,M.path).path});else{const p=de({},v.params);for(const _ in p)p[_]==null&&delete p[_];O=de({},v,{params:h(p)}),M.params=h(M.params)}const k=e.resolve(O,M),X=v.hash||"";k.params=u(d(k.params));const he=U0(s,de({},v,{hash:bR(X),path:k.path})),f=i.createHref(he);return de({fullPath:he,hash:X,query:s===Fh?RR(v.query):v.query||{}},k,{redirectedFrom:void 0,href:f})}function U(v){return typeof v=="string"?Jo(n,v,c.value.path):de({},v)}function $(v,M){if(l!==v)return bs(8,{from:M,to:v})}function J(v){return ye(v)}function oe(v){return J(de(U(v),{replace:!0}))}function B(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:O}=M;let k=typeof O=="function"?O(v):O;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=U(k):{path:k},k.params={}),de({query:v.query,hash:v.hash,params:"path"in k?{}:v.params},k)}}function ye(v,M){const O=l=x(v),k=c.value,X=v.state,he=v.force,f=v.replace===!0,p=B(O);if(p)return ye(de(U(p),{state:typeof p=="object"?de({},X,p.state):X,force:he,replace:f}),M||O);const _=O;_.redirectedFrom=M;let E;return!he&&B0(s,k,O)&&(E=bs(16,{to:_,from:k}),se(k,k,!0,!1)),(E?Promise.resolve(E):le(_,k)).catch(w=>Dt(w)?Dt(w,2)?w:G(w):b(w,_,k)).then(w=>{if(w){if(Dt(w,2))return ye(de({replace:f},U(w.to),{state:typeof w.to=="object"?de({},X,w.to.state):X,force:he}),M||_)}else w=st(_,k,!0,f,X);return ne(_,k,w),w})}function Se(v,M){const O=$(v,M);return O?Promise.reject(O):Promise.resolve()}function Re(v){const M=Ie.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function le(v,M){let O;const[k,X,he]=LR(v,M);O=Xo(k.reverse(),"beforeRouteLeave",v,M);for(const p of k)p.leaveGuards.forEach(_=>{O.push(Xt(_,v,M))});const f=Se.bind(null,v,M);return O.push(f),Ce(O).then(()=>{O=[];for(const p of r.list())O.push(Xt(p,v,M));return O.push(f),Ce(O)}).then(()=>{O=Xo(X,"beforeRouteUpdate",v,M);for(const p of X)p.updateGuards.forEach(_=>{O.push(Xt(_,v,M))});return O.push(f),Ce(O)}).then(()=>{O=[];for(const p of he)if(p.beforeEnter)if(vt(p.beforeEnter))for(const _ of p.beforeEnter)O.push(Xt(_,v,M));else O.push(Xt(p.beforeEnter,v,M));return O.push(f),Ce(O)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),O=Xo(he,"beforeRouteEnter",v,M),O.push(f),Ce(O))).then(()=>{O=[];for(const p of o.list())O.push(Xt(p,v,M));return O.push(f),Ce(O)}).catch(p=>Dt(p,8)?p:Promise.reject(p))}function ne(v,M,O){a.list().forEach(k=>Re(()=>k(v,M,O)))}function st(v,M,O,k,X){const he=$(v,M);if(he)return he;const f=M===zt,p=ss?history.state:{};O&&(k||f?i.replace(v.fullPath,de({scroll:f&&p&&p.scroll},X)):i.push(v.fullPath,X)),c.value=v,se(v,M,O,f),G()}let et;function j(){et||(et=i.listen((v,M,O)=>{if(!Le.listening)return;const k=x(v),X=B(k);if(X){ye(de(X,{replace:!0}),k).catch(Zs);return}l=k;const he=c.value;ss&&z0(Ph(he.fullPath,O.delta),vo()),le(k,he).catch(f=>Dt(f,12)?f:Dt(f,2)?(ye(f.to,k).then(p=>{Dt(p,20)&&!O.delta&&O.type===vi.pop&&i.go(-1,!1)}).catch(Zs),Promise.reject()):(O.delta&&i.go(-O.delta,!1),b(f,k,he))).then(f=>{f=f||st(k,he,!1),f&&(O.delta&&!Dt(f,8)?i.go(-O.delta,!1):O.type===vi.pop&&Dt(f,20)&&i.go(-1,!1)),ne(k,he,f)}).catch(Zs)}))}let L=Us(),C=Us(),P;function b(v,M,O){G(v);const k=C.list();return k.length?k.forEach(X=>X(v,M,O)):console.error(v),Promise.reject(v)}function W(){return P&&c.value!==zt?Promise.resolve():new Promise((v,M)=>{L.add([v,M])})}function G(v){return P||(P=!v,j(),L.list().forEach(([M,O])=>v?O(v):M()),L.reset()),v}function se(v,M,O,k){const{scrollBehavior:X}=t;if(!ss||!X)return Promise.resolve();const he=!O&&Y0(Ph(v.fullPath,0))||(k||!O)&&history.state&&history.state.scroll||null;return oc().then(()=>X(v,M,he)).then(f=>f&&q0(f)).catch(f=>b(f,v,M))}const ie=v=>i.go(v);let ve;const Ie=new Set,Le={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:R,getRoutes:y,resolve:x,options:t,push:J,replace:oe,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:C.add,isReady:W,install(v){const M=this;v.component("RouterLink",NR),v.component("RouterView",DR),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>cs(c)}),ss&&!ve&&c.value===zt&&(ve=!0,J(i.location).catch(X=>{}));const O={};for(const X in zt)Object.defineProperty(O,X,{get:()=>c.value[X],enumerable:!0});v.provide(yl,M),v.provide(l_,dd(O)),v.provide(Wa,c);const k=v.unmount;Ie.add(v),v.unmount=function(){Ie.delete(v),Ie.size<1&&(l=zt,et&&et(),et=null,c.value=zt,ve=!1,P=!1),k()}}};function Ce(v){return v.reduce((M,O)=>M.then(()=>Re(O)),Promise.resolve())}return Le}function LR(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>Es(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Es(l,c))||i.push(c))}return[n,s,i]}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Li(t){return t+.5|0}const sn=(t,e,n)=>Math.max(Math.min(t,n),e);function Hs(t){return sn(Li(t*2.55),0,255)}function dn(t){return sn(Li(t*255),0,255)}function Lt(t){return sn(Li(t/2.55)/100,0,1)}function Hh(t){return sn(Li(t*100),0,100)}const it={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ha=[..."0123456789ABCDEF"],FR=t=>Ha[t&15],$R=t=>Ha[(t&240)>>4]+Ha[t&15],Ki=t=>(t&240)>>4===(t&15),UR=t=>Ki(t.r)&&Ki(t.g)&&Ki(t.b)&&Ki(t.a);function BR(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&it[t[1]]*17,g:255&it[t[2]]*17,b:255&it[t[3]]*17,a:e===5?it[t[4]]*17:255}:(e===7||e===9)&&(n={r:it[t[1]]<<4|it[t[2]],g:it[t[3]]<<4|it[t[4]],b:it[t[5]]<<4|it[t[6]],a:e===9?it[t[7]]<<4|it[t[8]]:255})),n}const VR=(t,e)=>t<255?e(t):"";function WR(t){var e=UR(t)?FR:$R;return t?"#"+e(t.r)+e(t.g)+e(t.b)+VR(t.a,e):void 0}const HR=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function u_(t,e,n){const s=e*Math.min(n,1-n),i=(r,o=(r+t/30)%12)=>n-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function jR(t,e,n){const s=(i,r=(i+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function GR(t,e,n){const s=u_(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)s[i]*=1-e-n,s[i]+=e;return s}function KR(t,e,n,s,i){return t===i?(e-n)/s+(e<n?6:0):e===i?(n-t)/s+2:(t-e)/s+4}function vl(t){const n=t.r/255,s=t.g/255,i=t.b/255,r=Math.max(n,s,i),o=Math.min(n,s,i),a=(r+o)/2;let c,l,u;return r!==o&&(u=r-o,l=a>.5?u/(2-r-o):u/(r+o),c=KR(n,s,i,u,r),c=c*60+.5),[c|0,l||0,a]}function wl(t,e,n,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,s)).map(dn)}function El(t,e,n){return wl(u_,t,e,n)}function qR(t,e,n){return wl(GR,t,e,n)}function zR(t,e,n){return wl(jR,t,e,n)}function h_(t){return(t%360+360)%360}function YR(t){const e=HR.exec(t);let n=255,s;if(!e)return;e[5]!==s&&(n=e[6]?Hs(+e[5]):dn(+e[5]));const i=h_(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?s=qR(i,r,o):e[1]==="hsv"?s=zR(i,r,o):s=El(i,r,o),{r:s[0],g:s[1],b:s[2],a:n}}function QR(t,e){var n=vl(t);n[0]=h_(n[0]+e),n=El(n),t.r=n[0],t.g=n[1],t.b=n[2]}function JR(t){if(!t)return;const e=vl(t),n=e[0],s=Hh(e[1]),i=Hh(e[2]);return t.a<255?`hsla(${n}, ${s}%, ${i}%, ${Lt(t.a)})`:`hsl(${n}, ${s}%, ${i}%)`}const jh={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Gh={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function XR(){const t={},e=Object.keys(Gh),n=Object.keys(jh);let s,i,r,o,a;for(s=0;s<e.length;s++){for(o=a=e[s],i=0;i<n.length;i++)r=n[i],a=a.replace(r,jh[r]);r=parseInt(Gh[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let qi;function ZR(t){qi||(qi=XR(),qi.transparent=[0,0,0,0]);const e=qi[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const eA=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function tA(t){const e=eA.exec(t);let n=255,s,i,r;if(e){if(e[7]!==s){const o=+e[7];n=e[8]?Hs(o):sn(o*255,0,255)}return s=+e[1],i=+e[3],r=+e[5],s=255&(e[2]?Hs(s):sn(s,0,255)),i=255&(e[4]?Hs(i):sn(i,0,255)),r=255&(e[6]?Hs(r):sn(r,0,255)),{r:s,g:i,b:r,a:n}}}function nA(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Lt(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Zo=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,ns=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function sA(t,e,n){const s=ns(Lt(t.r)),i=ns(Lt(t.g)),r=ns(Lt(t.b));return{r:dn(Zo(s+n*(ns(Lt(e.r))-s))),g:dn(Zo(i+n*(ns(Lt(e.g))-i))),b:dn(Zo(r+n*(ns(Lt(e.b))-r))),a:t.a+n*(e.a-t.a)}}function zi(t,e,n){if(t){let s=vl(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*n,e===0?360:1)),s=El(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function d_(t,e){return t&&Object.assign(e||{},t)}function Kh(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=dn(t[3]))):(e=d_(t,{r:0,g:0,b:0,a:1}),e.a=dn(e.a)),e}function iA(t){return t.charAt(0)==="r"?tA(t):YR(t)}class ja{constructor(e){if(e instanceof ja)return e;const n=typeof e;let s;n==="object"?s=Kh(e):n==="string"&&(s=BR(e)||ZR(e)||iA(e)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var e=d_(this._rgb);return e&&(e.a=Lt(e.a)),e}set rgb(e){this._rgb=Kh(e)}rgbString(){return this._valid?nA(this._rgb):void 0}hexString(){return this._valid?WR(this._rgb):void 0}hslString(){return this._valid?JR(this._rgb):void 0}mix(e,n){if(e){const s=this.rgb,i=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,c=s.a-i.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,s.r=255&l*s.r+r*i.r+.5,s.g=255&l*s.g+r*i.g+.5,s.b=255&l*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(e,n){return e&&(this._rgb=sA(this._rgb,e._rgb,n)),this}clone(){return new ja(this.rgb)}alpha(e){return this._rgb.a=dn(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Li(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return zi(this._rgb,2,e),this}darken(e){return zi(this._rgb,2,-e),this}saturate(e){return zi(this._rgb,1,e),this}desaturate(e){return zi(this._rgb,1,-e),this}rotate(e){return QR(this._rgb,e),this}}export{WA as $,xA as A,kA as B,ja as C,NA as D,DA as E,ht as F,MA as G,OA as H,mA as I,lA as J,Ja as K,Y_ as L,Gd as M,rm as N,Qm as O,pA as P,bA as Q,en as R,CA as S,EA as T,cA as U,aA as V,dA as W,us as X,Em as Y,Ei as Z,fA as _,uA as a,VA as a0,gA as a1,qd as b,rt as c,cs as d,hA as e,yA as f,TA as g,vA as h,Rw as i,BA as j,wA as k,Ke as l,AA as m,Fr as n,Hd as o,SA as p,PA as q,oA as r,IA as s,rA as t,_A as u,RA as v,UA as w,FA as x,LA as y,$A as z};
