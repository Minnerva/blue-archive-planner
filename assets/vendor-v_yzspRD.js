/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ma(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const be={},ts=[],ot=()=>{},Xg=()=>!1,Pr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Da=t=>t.startsWith("onUpdate:"),Fe=Object.assign,La=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jg=Object.prototype.hasOwnProperty,ae=(t,e)=>Jg.call(t,e),K=Array.isArray,ns=t=>fi(t)==="[object Map]",Nr=t=>fi(t)==="[object Set]",fl=t=>fi(t)==="[object Date]",Q=t=>typeof t=="function",Ne=t=>typeof t=="string",fn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",Mh=t=>(me(t)||Q(t))&&Q(t.then)&&Q(t.catch),Dh=Object.prototype.toString,fi=t=>Dh.call(t),Zg=t=>fi(t).slice(8,-1),Lh=t=>fi(t)==="[object Object]",Fa=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ui=Ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},e_=/-(\w)/g,Rt=Or(t=>t.replace(e_,(e,n)=>n?n.toUpperCase():"")),t_=/\B([A-Z])/g,ws=Or(t=>t.replace(t_,"-$1").toLowerCase()),kr=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),uo=Or(t=>t?`on${kr(t)}`:""),pn=(t,e)=>!Object.is(t,e),Bi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$a=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pl;const Fh=()=>pl||(pl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ua(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ne(s)?r_(s):Ua(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ne(t)||me(t))return t}const n_=/;(?![^(]*\))/g,s_=/:([^]+)/,i_=/\/\*[^]*?\*\//g;function r_(t){const e={};return t.replace(i_,"").split(n_).forEach(n=>{if(n){const s=n.split(s_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ba(t){let e="";if(Ne(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=Ba(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const o_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a_=Ma(o_);function $h(t){return!!t||t===""}function c_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ys(t[s],e[s]);return n}function Ys(t,e){if(t===e)return!0;let n=fl(t),s=fl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=fn(t),s=fn(e),n||s)return t===e;if(n=K(t),s=K(e),n||s)return n&&s?c_(t,e):!1;if(n=me(t),s=me(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ys(t[o],e[o]))return!1}}return String(t)===String(e)}function l_(t,e){return t.findIndex(n=>Ys(n,e))}const OR=t=>Ne(t)?t:t==null?"":K(t)||me(t)&&(t.toString===Dh||!Q(t.toString))?JSON.stringify(t,Uh,2):String(t),Uh=(t,e)=>e&&e.__v_isRef?Uh(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ho(s,r)+" =>"]=i,n),{})}:Nr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ho(n))}:fn(e)?ho(e):me(e)&&!K(e)&&!Lh(e)?String(e):e,ho=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lt;class Bh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=lt;try{return lt=this,e()}finally{lt=n}}}on(){lt=this}off(){lt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function u_(t){return new Bh(t)}function h_(t,e=lt){e&&e.active&&e.effects.push(t)}function d_(){return lt}let On;class Va{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,h_(this,i)}get dirty(){if(this._dirtyLevel===1){Vn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(f_(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Hn()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=rn,n=On;try{return rn=!0,On=this,this._runnings++,gl(this),this.fn()}finally{_l(this),this._runnings--,On=n,rn=e}}stop(){var e;this.active&&(gl(this),_l(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function f_(t){return t.value}function gl(t){t._trackId++,t._depsLength=0}function _l(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Vh(t.deps[e],t);t.deps.length=t._depsLength}}function Vh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let rn=!0,Go=0;const Hh=[];function Vn(){Hh.push(rn),rn=!1}function Hn(){const t=Hh.pop();rn=t===void 0?!0:t}function Ha(){Go++}function Wa(){for(Go--;!Go&&zo.length;)zo.shift()()}function Wh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Vh(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const zo=[];function jh(t,e,n){Ha();for(const s of t.keys())if(s._dirtyLevel<e&&t.get(s)===s._trackId){const i=s._dirtyLevel;s._dirtyLevel=e,i===0&&(s._shouldSchedule=!0,s.trigger())}Gh(t),Wa()}function Gh(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,zo.push(e.scheduler))}const zh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ko=new WeakMap,kn=Symbol(""),qo=Symbol("");function Qe(t,e,n){if(rn&&On){let s=Ko.get(t);s||Ko.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=zh(()=>s.delete(n))),Wh(On,i)}}function Bt(t,e,n,s,i,r){const o=Ko.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!fn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Fa(n)&&a.push(o.get("length")):(a.push(o.get(kn)),ns(t)&&a.push(o.get(qo)));break;case"delete":K(t)||(a.push(o.get(kn)),ns(t)&&a.push(o.get(qo)));break;case"set":ns(t)&&a.push(o.get(kn));break}Ha();for(const c of a)c&&jh(c,2);Wa()}const p_=Ma("__proto__,__v_isRef,__isVue"),Kh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn)),ml=g_();function g_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)Qe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vn(),Ha();const s=ue(this)[e].apply(this,n);return Wa(),Hn(),s}}),t}function __(t){const e=ue(this);return Qe(e,"has",t),e.hasOwnProperty(t)}class qh{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?P_:Jh:r?Xh:Qh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=K(e);if(!i){if(o&&ae(ml,n))return Reflect.get(ml,n,s);if(n==="hasOwnProperty")return __}const a=Reflect.get(e,n,s);return(fn(n)?Kh.has(n):p_(n))||(i||Qe(e,"get",n),r)?a:Xe(a)?o&&Fa(n)?a:a.value:me(a)?i?ed(a):pi(a):a}}class Yh extends qh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const c=hs(r);if(!Yi(s)&&!hs(s)&&(r=ue(r),s=ue(s)),!K(e)&&Xe(r)&&!Xe(s))return c?!1:(r.value=s,!0)}const o=K(e)&&Fa(n)?Number(n)<e.length:ae(e,n),a=Reflect.set(e,n,s,i);return e===ue(i)&&(o?pn(s,r)&&Bt(e,"set",n,s):Bt(e,"add",n,s)),a}deleteProperty(e,n){const s=ae(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Bt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!fn(n)||!Kh.has(n))&&Qe(e,"has",n),s}ownKeys(e){return Qe(e,"iterate",K(e)?"length":kn),Reflect.ownKeys(e)}}class m_ extends qh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const y_=new Yh,v_=new m_,w_=new Yh(!0),ja=t=>t,xr=t=>Reflect.getPrototypeOf(t);function Ri(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(pn(e,r)&&Qe(i,"get",e),Qe(i,"get",r));const{has:o}=xr(i),a=s?ja:n?Ka:Qs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ai(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(pn(t,i)&&Qe(s,"has",t),Qe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Pi(t,e=!1){return t=t.__v_raw,!e&&Qe(ue(t),"iterate",kn),Reflect.get(t,"size",t)}function yl(t){t=ue(t);const e=ue(this);return xr(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function vl(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=xr(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?pn(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function wl(t){const e=ue(this),{has:n,get:s}=xr(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Bt(e,"delete",t,void 0),r}function bl(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function Ni(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),c=e?ja:t?Ka:Qs;return!t&&Qe(a,"iterate",kn),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Oi(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=ns(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?ja:e?Ka:Qs;return!e&&Qe(r,"iterate",c?qo:kn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function zt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function b_(){const t={get(r){return Ri(this,r)},get size(){return Pi(this)},has:Ai,add:yl,set:vl,delete:wl,clear:bl,forEach:Ni(!1,!1)},e={get(r){return Ri(this,r,!1,!0)},get size(){return Pi(this)},has:Ai,add:yl,set:vl,delete:wl,clear:bl,forEach:Ni(!1,!0)},n={get(r){return Ri(this,r,!0)},get size(){return Pi(this,!0)},has(r){return Ai.call(this,r,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:Ni(!0,!1)},s={get(r){return Ri(this,r,!0,!0)},get size(){return Pi(this,!0)},has(r){return Ai.call(this,r,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Oi(r,!1,!1),n[r]=Oi(r,!0,!1),e[r]=Oi(r,!1,!0),s[r]=Oi(r,!0,!0)}),[t,n,e,s]}const[E_,I_,C_,T_]=b_();function Ga(t,e){const n=e?t?T_:C_:t?I_:E_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const S_={get:Ga(!1,!1)},R_={get:Ga(!1,!0)},A_={get:Ga(!0,!1)},Qh=new WeakMap,Xh=new WeakMap,Jh=new WeakMap,P_=new WeakMap;function N_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function O_(t){return t.__v_skip||!Object.isExtensible(t)?0:N_(Zg(t))}function pi(t){return hs(t)?t:za(t,!1,y_,S_,Qh)}function Zh(t){return za(t,!1,w_,R_,Xh)}function ed(t){return za(t,!0,v_,A_,Jh)}function za(t,e,n,s,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=O_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ss(t){return hs(t)?ss(t.__v_raw):!!(t&&t.__v_isReactive)}function hs(t){return!!(t&&t.__v_isReadonly)}function Yi(t){return!!(t&&t.__v_isShallow)}function td(t){return ss(t)||hs(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function nd(t){return qi(t,"__v_skip",!0),t}const Qs=t=>me(t)?pi(t):t,Ka=t=>me(t)?ed(t):t;class sd{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Va(()=>e(this._value),()=>Vi(this,1),()=>this.dep&&Gh(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return(!e._cacheable||e.effect.dirty)&&pn(e._value,e._value=e.effect.run())&&Vi(e,2),id(e),e.effect._dirtyLevel>=1&&Vi(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function k_(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=ot):(s=t.get,i=t.set),new sd(s,i,r||!i,n)}function id(t){rn&&On&&(t=ue(t),Wh(On,t.dep||(t.dep=zh(()=>t.dep=void 0,t instanceof sd?t:void 0))))}function Vi(t,e=2,n){t=ue(t);const s=t.dep;s&&jh(s,e)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function x_(t){return rd(t,!1)}function M_(t){return rd(t,!0)}function rd(t,e){return Xe(t)?t:new D_(t,e)}class D_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Qs(e)}get value(){return id(this),this._value}set value(e){const n=this.__v_isShallow||Yi(e)||hs(e);e=n?e:ue(e),pn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qs(e),Vi(this,2))}}function is(t){return Xe(t)?t.value:t}const L_={get:(t,e,n)=>is(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Xe(i)&&!Xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function od(t){return ss(t)?t:new Proxy(t,L_)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function on(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Mr(r,e,n)}return i}function gt(t,e,n,s){if(Q(t)){const r=on(t,e,n,s);return r&&Mh(r)&&r.catch(o=>{Mr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(gt(t[r],e,n,s));return i}function Mr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){on(c,null,10,[t,o,a]);return}}F_(t,n,i,s)}function F_(t,e,n,s=!0){console.error(t)}let Xs=!1,Yo=!1;const Ue=[];let It=0;const rs=[];let Yt=null,Tn=0;const ad=Promise.resolve();let qa=null;function Ya(t){const e=qa||ad;return t?e.then(this?t.bind(this):t):e}function $_(t){let e=It+1,n=Ue.length;for(;e<n;){const s=e+n>>>1,i=Ue[s],r=Js(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Qa(t){(!Ue.length||!Ue.includes(t,Xs&&t.allowRecurse?It+1:It))&&(t.id==null?Ue.push(t):Ue.splice($_(t.id),0,t),cd())}function cd(){!Xs&&!Yo&&(Yo=!0,qa=ad.then(ud))}function U_(t){const e=Ue.indexOf(t);e>It&&Ue.splice(e,1)}function B_(t){K(t)?rs.push(...t):(!Yt||!Yt.includes(t,t.allowRecurse?Tn+1:Tn))&&rs.push(t),cd()}function El(t,e,n=Xs?It+1:0){for(;n<Ue.length;n++){const s=Ue[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ue.splice(n,1),n--,s()}}}function ld(t){if(rs.length){const e=[...new Set(rs)].sort((n,s)=>Js(n)-Js(s));if(rs.length=0,Yt){Yt.push(...e);return}for(Yt=e,Tn=0;Tn<Yt.length;Tn++)Yt[Tn]();Yt=null,Tn=0}}const Js=t=>t.id==null?1/0:t.id,V_=(t,e)=>{const n=Js(t)-Js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ud(t){Yo=!1,Xs=!0,Ue.sort(V_);try{for(It=0;It<Ue.length;It++){const e=Ue[It];e&&e.active!==!1&&on(e,null,14)}}finally{It=0,Ue.length=0,ld(),Xs=!1,qa=null,(Ue.length||rs.length)&&ud()}}function H_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||be;d&&(i=n.map(g=>Ne(g)?g.trim():g)),h&&(i=n.map($a))}let a,c=s[a=uo(e)]||s[a=uo(Rt(e))];!c&&r&&(c=s[a=uo(ws(e))]),c&&gt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(l,t,6,i)}}function hd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const c=l=>{const u=hd(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(me(t)&&s.set(t,null),null):(K(r)?r.forEach(c=>o[c]=null):Fe(o,r),me(t)&&s.set(t,o),o)}function Dr(t,e){return!t||!Pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,ws(e))||ae(t,e))}let De=null,dd=null;function Qi(t){const e=De;return De=t,dd=t&&t.type.__scopeId||null,e}function W_(t,e=De,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&xl(-1);const r=Qi(e);let o;try{o=t(...i)}finally{Qi(r),s._d&&xl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fo(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:y}=t;let R,x;const U=Qi(t);try{if(n.shapeFlag&4){const X=i||s,oe=X;R=Et(u.call(oe,X,h,r,g,d,m)),x=c}else{const X=e;R=Et(X.length>1?X(r,{attrs:c,slots:a,emit:l}):X(r,null)),x=e.props?c:j_(c)}}catch(X){Bs.length=0,Mr(X,t,1),R=ze(gn)}let $=R;if(x&&y!==!1){const X=Object.keys(x),{shapeFlag:oe}=$;X.length&&oe&7&&(o&&X.some(Da)&&(x=G_(x,o)),$=ds($,x))}return n.dirs&&($=ds($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),R=$,Qi(U),R}const j_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pr(n))&&((e||(e={}))[n]=t[n]);return e},G_=(t,e)=>{const n={};for(const s in t)(!Da(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function z_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Il(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Dr(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Il(s,o,l):!0:!!o;return!1}function Il(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Dr(n,r))return!0}return!1}function K_({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const fd="components";function kR(t,e){return Y_(fd,t,!0,e)||t}const q_=Symbol.for("v-ndc");function Y_(t,e,n=!0,s=!1){const i=De||Be;if(i){const r=i.type;if(t===fd){const a=Wm(r,!1);if(a&&(a===e||a===Rt(e)||a===kr(Rt(e))))return r}const o=Cl(i[t]||r[t],e)||Cl(i.appContext[t],e);return!o&&s?r:o}}function Cl(t,e){return t&&(t[e]||t[Rt(e)]||t[kr(Rt(e))])}const Q_=t=>t.__isSuspense;function X_(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):B_(t)}const J_=Symbol.for("v-scx"),Z_=()=>Ct(J_),ki={};function os(t,e,n){return pd(t,e,n)}function pd(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=be){if(e&&r){const B=e;e=(...ye)=>{B(...ye),oe()}}const c=Be,l=B=>s===!0?B:Sn(B,s===!1?1:void 0);let u,h=!1,d=!1;if(Xe(t)?(u=()=>t.value,h=Yi(t)):ss(t)?(u=()=>l(t),h=!0):K(t)?(d=!0,h=t.some(B=>ss(B)||Yi(B)),u=()=>t.map(B=>{if(Xe(B))return B.value;if(ss(B))return l(B);if(Q(B))return on(B,c,2)})):Q(t)?e?u=()=>on(t,c,2):u=()=>(g&&g(),gt(t,c,3,[m])):u=ot,e&&s){const B=u;u=()=>Sn(B())}let g,m=B=>{g=$.onStop=()=>{on(B,c,4),g=$.onStop=void 0}},y;if(Ur)if(m=ot,e?n&&gt(e,c,3,[u(),d?[]:void 0,m]):u(),i==="sync"){const B=Z_();y=B.__watcherHandles||(B.__watcherHandles=[])}else return ot;let R=d?new Array(t.length).fill(ki):ki;const x=()=>{if(!(!$.active||!$.dirty))if(e){const B=$.run();(s||h||(d?B.some((ye,Se)=>pn(ye,R[Se])):pn(B,R)))&&(g&&g(),gt(e,c,3,[B,R===ki?void 0:d&&R[0]===ki?[]:R,m]),R=B)}else $.run()};x.allowRecurse=!!e;let U;i==="sync"?U=x:i==="post"?U=()=>Ge(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),U=()=>Qa(x));const $=new Va(u,ot,U),X=d_(),oe=()=>{$.stop(),X&&La(X.effects,$)};return e?n?x():R=$.run():i==="post"?Ge($.run.bind($),c&&c.suspense):$.run(),y&&y.push(oe),oe}function em(t,e,n){const s=this.proxy,i=Ne(t)?t.includes(".")?gd(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=gi(this),a=pd(i,r.bind(s),n);return o(),a}function gd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Sn(t,e,n=0,s){if(!me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Xe(t))Sn(t.value,e,n,s);else if(K(t))for(let i=0;i<t.length;i++)Sn(t[i],e,n,s);else if(Nr(t)||ns(t))t.forEach(i=>{Sn(i,e,n,s)});else if(Lh(t))for(const i in t)Sn(t[i],e,n,s);return t}function xR(t,e){if(De===null)return t;const n=Br(De)||De.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=be]=e[i];r&&(Q(r)&&(r={mounted:r,updated:r}),r.deep&&Sn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function bn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Vn(),gt(c,n,8,[t.el,a,t,e]),Hn())}}/*! #__NO_SIDE_EFFECTS__ */function _d(t,e){return Q(t)?Fe({name:t.name},e,{setup:t}):t}const $s=t=>!!t.type.__asyncLoader,md=t=>t.type.__isKeepAlive;function tm(t,e){yd(t,"a",e)}function nm(t,e){yd(t,"da",e)}function yd(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Lr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)md(i.parent.vnode)&&sm(s,e,n,i),i=i.parent}}function sm(t,e,n,s){const i=Lr(e,t,s,!0);vd(()=>{La(s[e],i)},n)}function Lr(t,e,n=Be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vn();const a=gi(n),c=gt(e,n,t,o);return a(),Hn(),c});return s?i.unshift(r):i.push(r),r}}const Gt=t=>(e,n=Be)=>(!Ur||t==="sp")&&Lr(t,(...s)=>e(...s),n),im=Gt("bm"),rm=Gt("m"),om=Gt("bu"),am=Gt("u"),cm=Gt("bum"),vd=Gt("um"),lm=Gt("sp"),um=Gt("rtg"),hm=Gt("rtc");function dm(t,e=Be){Lr("ec",t,e)}function MR(t,e,n,s){let i;const r=n&&n[s];if(K(t)||Ne(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function DR(t,e,n={},s,i){if(De.isCE||De.parent&&$s(De.parent)&&De.parent.isCE)return e!=="default"&&(n.name=e),ze("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Nd();const o=r&&wd(r(n)),a=kd(ut,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function wd(t){return t.some(e=>Zi(e)?!(e.type===gn||e.type===ut&&!wd(e.children)):!0)?t:null}const Qo=t=>t?Dd(t)?Br(t)||t.proxy:Qo(t.parent):null,Us=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qo(t.parent),$root:t=>Qo(t.root),$emit:t=>t.emit,$options:t=>Xa(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Qa(t.update)}),$nextTick:t=>t.n||(t.n=Ya.bind(t.proxy)),$watch:t=>em.bind(t)}),po=(t,e)=>t!==be&&!t.__isScriptSetup&&ae(t,e),fm={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(po(s,e))return o[e]=1,s[e];if(i!==be&&ae(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,r[e];if(n!==be&&ae(n,e))return o[e]=4,n[e];Xo&&(o[e]=0)}}const u=Us[e];let h,d;if(u)return e==="$attrs"&&Qe(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return po(i,e)?(i[e]=n,!0):s!==be&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==be&&ae(t,o)||po(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(Us,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tl(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xo=!0;function pm(t){const e=Xa(t),n=t.proxy,s=t.ctx;Xo=!1,e.beforeCreate&&Sl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:y,deactivated:R,beforeDestroy:x,beforeUnmount:U,destroyed:$,unmounted:X,render:oe,renderTracked:B,renderTriggered:ye,errorCaptured:Se,serverPrefetch:Re,expose:le,inheritAttrs:ne,components:st,directives:et,filters:j}=e;if(l&&gm(l,s,null),o)for(const P in o){const E=o[P];Q(E)&&(s[P]=E.bind(n))}if(i){const P=i.call(n,n);me(P)&&(t.data=pi(P))}if(Xo=!0,r)for(const P in r){const E=r[P],H=Q(E)?E.bind(n,n):Q(E.get)?E.get.bind(n,n):ot,G=!Q(E)&&Q(E.set)?E.set.bind(n):ot,se=rt({get:H,set:G});Object.defineProperty(s,P,{enumerable:!0,configurable:!0,get:()=>se.value,set:ie=>se.value=ie})}if(a)for(const P in a)bd(a[P],s,n,P);if(c){const P=Q(c)?c.call(n):c;Reflect.ownKeys(P).forEach(E=>{Hi(E,P[E])})}u&&Sl(u,t,"c");function C(P,E){K(E)?E.forEach(H=>P(H.bind(n))):E&&P(E.bind(n))}if(C(im,h),C(rm,d),C(om,g),C(am,m),C(tm,y),C(nm,R),C(dm,Se),C(hm,B),C(um,ye),C(cm,U),C(vd,X),C(lm,Re),K(le))if(le.length){const P=t.exposed||(t.exposed={});le.forEach(E=>{Object.defineProperty(P,E,{get:()=>n[E],set:H=>n[E]=H})})}else t.exposed||(t.exposed={});oe&&t.render===ot&&(t.render=oe),ne!=null&&(t.inheritAttrs=ne),st&&(t.components=st),et&&(t.directives=et)}function gm(t,e,n=ot){K(t)&&(t=Jo(t));for(const s in t){const i=t[s];let r;me(i)?"default"in i?r=Ct(i.from||s,i.default,!0):r=Ct(i.from||s):r=Ct(i),Xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Sl(t,e,n){gt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function bd(t,e,n,s){const i=s.includes(".")?gd(n,s):()=>n[s];if(Ne(t)){const r=e[t];Q(r)&&os(i,r)}else if(Q(t))os(i,t.bind(n));else if(me(t))if(K(t))t.forEach(r=>bd(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&os(i,r,t)}}function Xa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>Xi(c,l,o,!0)),Xi(c,e,o)),me(e)&&r.set(e,c),c}function Xi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Xi(t,r,n,!0),i&&i.forEach(o=>Xi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=_m[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _m={data:Rl,props:Al,emits:Al,methods:Ls,computed:Ls,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Ls,directives:Ls,watch:ym,provide:Rl,inject:mm};function Rl(t,e){return e?t?function(){return Fe(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function mm(t,e){return Ls(Jo(t),Jo(e))}function Jo(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Ls(t,e){return t?Fe(Object.create(null),t,e):e}function Al(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Fe(Object.create(null),Tl(t),Tl(e??{})):e}function ym(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function Ed(){return{app:null,config:{isNativeTag:Xg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vm=0;function wm(t,e){return function(s,i=null){Q(s)||(s=Fe({},s)),i!=null&&!me(i)&&(i=null);const r=Ed(),o=new WeakSet;let a=!1;const c=r.app={_uid:vm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Gm,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=ze(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Br(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){Ji=c;try{return l()}finally{Ji=null}}};return c}}let Ji=null;function Hi(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function Ct(t,e,n=!1){const s=Be||De;if(s||Ji){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ji._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s&&s.proxy):e}}function bm(t,e,n,s=!1){const i={},r={};qi(r,$r,1),t.propsDefaults=Object.create(null),Id(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Zh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Em(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Dr(t.emitsOptions,d))continue;const g=e[d];if(c)if(ae(r,d))g!==r[d]&&(r[d]=g,l=!0);else{const m=Rt(d);i[m]=Zo(c,a,m,g,t,!1)}else g!==r[d]&&(r[d]=g,l=!0)}}}else{Id(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=ws(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Zo(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ae(e,h))&&(delete r[h],l=!0)}l&&Bt(t,"set","$attrs")}function Id(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ui(c))continue;const l=e[c];let u;i&&ae(i,u=Rt(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Dr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ue(n),l=a||be;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Zo(i,c,h,l[h],t,!ae(l,h))}}return o}function Zo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=i;if(n in l)s=l[n];else{const u=gi(i);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ws(n))&&(s=!0))}return s}function Cd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!Q(t)){const u=h=>{c=!0;const[d,g]=Cd(h,e,!0);Fe(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return me(t)&&s.set(t,ts),ts;if(K(r))for(let u=0;u<r.length;u++){const h=Rt(r[u]);Pl(h)&&(o[h]=be)}else if(r)for(const u in r){const h=Rt(u);if(Pl(h)){const d=r[u],g=o[h]=K(d)||Q(d)?{type:d}:Fe({},d);if(g){const m=kl(Boolean,g.type),y=kl(String,g.type);g[0]=m>-1,g[1]=y<0||m<y,(m>-1||ae(g,"default"))&&a.push(h)}}}const l=[o,a];return me(t)&&s.set(t,l),l}function Pl(t){return t[0]!=="$"}function Nl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ol(t,e){return Nl(t)===Nl(e)}function kl(t,e){return K(e)?e.findIndex(n=>Ol(n,t)):Q(e)&&Ol(e,t)?0:-1}const Td=t=>t[0]==="_"||t==="$stable",Ja=t=>K(t)?t.map(Et):[Et(t)],Im=(t,e,n)=>{if(e._n)return e;const s=W_((...i)=>Ja(e(...i)),n);return s._c=!1,s},Sd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Td(i))continue;const r=t[i];if(Q(r))e[i]=Im(i,r,s);else if(r!=null){const o=Ja(r);e[i]=()=>o}}},Rd=(t,e)=>{const n=Ja(e);t.slots.default=()=>n},Cm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),qi(e,"_",n)):Sd(e,t.slots={})}else t.slots={},e&&Rd(t,e);qi(t.slots,$r,1)},Tm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Fe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Sd(e,i)),o=e}else e&&(Rd(t,e),o={default:1});if(r)for(const a in i)!Td(a)&&o[a]==null&&delete i[a]};function ea(t,e,n,s,i=!1){if(K(t)){t.forEach((d,g)=>ea(d,e&&(K(e)?e[g]:e),n,s,i));return}if($s(s)&&!i)return;const r=s.shapeFlag&4?Br(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Xe(l)&&(l.value=null)),Q(c))on(c,a,12,[o,u]);else{const d=Ne(c),g=Xe(c),m=t.f;if(d||g){const y=()=>{if(m){const R=d?ae(h,c)?h[c]:u[c]:c.value;i?K(R)&&La(R,r):K(R)?R.includes(r)||R.push(r):d?(u[c]=[r],ae(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};i||m?y():(y.id=-1,Ge(y,n))}}}const Ge=X_;function Sm(t){return Rm(t)}function Rm(t,e){const n=Fh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=ot,insertStaticContent:m}=t,y=(f,p,_,b=null,w=null,A=null,D=void 0,S=null,O=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ns(f,p)&&(b=v(f),ie(f,w,A,!0),f=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:I,ref:F,shapeFlag:W}=p;switch(I){case Fr:R(f,p,_,b);break;case gn:x(f,p,_,b);break;case _o:f==null&&U(p,_,b,D);break;case ut:st(f,p,_,b,w,A,D,S,O);break;default:W&1?oe(f,p,_,b,w,A,D,S,O):W&6?et(f,p,_,b,w,A,D,S,O):(W&64||W&128)&&I.process(f,p,_,b,w,A,D,S,O,k)}F!=null&&w&&ea(F,f&&f.ref,A,p||f,!p)},R=(f,p,_,b)=>{if(f==null)s(p.el=a(p.children),_,b);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},x=(f,p,_,b)=>{f==null?s(p.el=c(p.children||""),_,b):p.el=f.el},U=(f,p,_,b)=>{[f.el,f.anchor]=m(f.children,p,_,b,f.el,f.anchor)},$=({el:f,anchor:p},_,b)=>{let w;for(;f&&f!==p;)w=d(f),s(f,_,b),f=w;s(p,_,b)},X=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},oe=(f,p,_,b,w,A,D,S,O)=>{p.type==="svg"?D="svg":p.type==="math"&&(D="mathml"),f==null?B(p,_,b,w,A,D,S,O):Re(f,p,w,A,D,S,O)},B=(f,p,_,b,w,A,D,S)=>{let O,I;const{props:F,shapeFlag:W,transition:V,dirs:q}=f;if(O=f.el=o(f.type,A,F&&F.is,F),W&8?u(O,f.children):W&16&&Se(f.children,O,null,b,w,go(f,A),D,S),q&&bn(f,null,b,"created"),ye(O,f,f.scopeId,D,b),F){for(const fe in F)fe!=="value"&&!Ui(fe)&&r(O,fe,null,F[fe],A,f.children,b,w,Ce);"value"in F&&r(O,"value",null,F.value,A),(I=F.onVnodeBeforeMount)&&bt(I,b,f)}q&&bn(f,null,b,"beforeMount");const re=Am(w,V);re&&V.beforeEnter(O),s(O,p,_),((I=F&&F.onVnodeMounted)||re||q)&&Ge(()=>{I&&bt(I,b,f),re&&V.enter(O),q&&bn(f,null,b,"mounted")},w)},ye=(f,p,_,b,w)=>{if(_&&g(f,_),b)for(let A=0;A<b.length;A++)g(f,b[A]);if(w){let A=w.subTree;if(p===A){const D=w.vnode;ye(f,D,D.scopeId,D.slotScopeIds,w.parent)}}},Se=(f,p,_,b,w,A,D,S,O=0)=>{for(let I=O;I<f.length;I++){const F=f[I]=S?Qt(f[I]):Et(f[I]);y(null,F,p,_,b,w,A,D,S)}},Re=(f,p,_,b,w,A,D)=>{const S=p.el=f.el;let{patchFlag:O,dynamicChildren:I,dirs:F}=p;O|=f.patchFlag&16;const W=f.props||be,V=p.props||be;let q;if(_&&En(_,!1),(q=V.onVnodeBeforeUpdate)&&bt(q,_,p,f),F&&bn(p,f,_,"beforeUpdate"),_&&En(_,!0),I?le(f.dynamicChildren,I,S,_,b,go(p,w),A):D||E(f,p,S,null,_,b,go(p,w),A,!1),O>0){if(O&16)ne(S,p,W,V,_,b,w);else if(O&2&&W.class!==V.class&&r(S,"class",null,V.class,w),O&4&&r(S,"style",W.style,V.style,w),O&8){const re=p.dynamicProps;for(let fe=0;fe<re.length;fe++){const Ee=re[fe],Oe=W[Ee],ct=V[Ee];(ct!==Oe||Ee==="value")&&r(S,Ee,Oe,ct,w,f.children,_,b,Ce)}}O&1&&f.children!==p.children&&u(S,p.children)}else!D&&I==null&&ne(S,p,W,V,_,b,w);((q=V.onVnodeUpdated)||F)&&Ge(()=>{q&&bt(q,_,p,f),F&&bn(p,f,_,"updated")},b)},le=(f,p,_,b,w,A,D)=>{for(let S=0;S<p.length;S++){const O=f[S],I=p[S],F=O.el&&(O.type===ut||!Ns(O,I)||O.shapeFlag&70)?h(O.el):_;y(O,I,F,null,b,w,A,D,!0)}},ne=(f,p,_,b,w,A,D)=>{if(_!==b){if(_!==be)for(const S in _)!Ui(S)&&!(S in b)&&r(f,S,_[S],null,D,p.children,w,A,Ce);for(const S in b){if(Ui(S))continue;const O=b[S],I=_[S];O!==I&&S!=="value"&&r(f,S,I,O,D,p.children,w,A,Ce)}"value"in b&&r(f,"value",_.value,b.value,D)}},st=(f,p,_,b,w,A,D,S,O)=>{const I=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:W,dynamicChildren:V,slotScopeIds:q}=p;q&&(S=S?S.concat(q):q),f==null?(s(I,_,b),s(F,_,b),Se(p.children||[],_,F,w,A,D,S,O)):W>0&&W&64&&V&&f.dynamicChildren?(le(f.dynamicChildren,V,_,w,A,D,S),(p.key!=null||w&&p===w.subTree)&&Ad(f,p,!0)):E(f,p,_,F,w,A,D,S,O)},et=(f,p,_,b,w,A,D,S,O)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?w.ctx.activate(p,_,b,D,O):j(p,_,b,w,A,D,O):L(f,p,O)},j=(f,p,_,b,w,A,D)=>{const S=f.component=$m(f,b,w);if(md(f)&&(S.ctx.renderer=k),Um(S),S.asyncDep){if(w&&w.registerDep(S,C),!f.el){const O=S.subTree=ze(gn);x(null,O,p,_)}}else C(S,f,p,_,w,A,D)},L=(f,p,_)=>{const b=p.component=f.component;if(z_(f,p,_))if(b.asyncDep&&!b.asyncResolved){P(b,p,_);return}else b.next=p,U_(b.update),b.effect.dirty=!0,b.update();else p.el=f.el,b.vnode=p},C=(f,p,_,b,w,A,D)=>{const S=()=>{if(f.isMounted){let{next:F,bu:W,u:V,parent:q,vnode:re}=f;{const qn=Pd(f);if(qn){F&&(F.el=re.el,P(f,F,D)),qn.asyncDep.then(()=>{f.isUnmounted||S()});return}}let fe=F,Ee;En(f,!1),F?(F.el=re.el,P(f,F,D)):F=re,W&&Bi(W),(Ee=F.props&&F.props.onVnodeBeforeUpdate)&&bt(Ee,q,F,re),En(f,!0);const Oe=fo(f),ct=f.subTree;f.subTree=Oe,y(ct,Oe,h(ct.el),v(ct),f,w,A),F.el=Oe.el,fe===null&&K_(f,Oe.el),V&&Ge(V,w),(Ee=F.props&&F.props.onVnodeUpdated)&&Ge(()=>bt(Ee,q,F,re),w)}else{let F;const{el:W,props:V}=p,{bm:q,m:re,parent:fe}=f,Ee=$s(p);if(En(f,!1),q&&Bi(q),!Ee&&(F=V&&V.onVnodeBeforeMount)&&bt(F,fe,p),En(f,!0),W&&he){const Oe=()=>{f.subTree=fo(f),he(W,f.subTree,f,w,null)};Ee?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Oe()):Oe()}else{const Oe=f.subTree=fo(f);y(null,Oe,_,b,f,w,A),p.el=Oe.el}if(re&&Ge(re,w),!Ee&&(F=V&&V.onVnodeMounted)){const Oe=p;Ge(()=>bt(F,fe,Oe),w)}(p.shapeFlag&256||fe&&$s(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Ge(f.a,w),f.isMounted=!0,p=_=b=null}},O=f.effect=new Va(S,ot,()=>Qa(I),f.scope),I=f.update=()=>{O.dirty&&O.run()};I.id=f.uid,En(f,!0),I()},P=(f,p,_)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,Em(f,p.props,b,_),Tm(f,p.children,_),Vn(),El(f),Hn()},E=(f,p,_,b,w,A,D,S,O=!1)=>{const I=f&&f.children,F=f?f.shapeFlag:0,W=p.children,{patchFlag:V,shapeFlag:q}=p;if(V>0){if(V&128){G(I,W,_,b,w,A,D,S,O);return}else if(V&256){H(I,W,_,b,w,A,D,S,O);return}}q&8?(F&16&&Ce(I,w,A),W!==I&&u(_,W)):F&16?q&16?G(I,W,_,b,w,A,D,S,O):Ce(I,w,A,!0):(F&8&&u(_,""),q&16&&Se(W,_,b,w,A,D,S,O))},H=(f,p,_,b,w,A,D,S,O)=>{f=f||ts,p=p||ts;const I=f.length,F=p.length,W=Math.min(I,F);let V;for(V=0;V<W;V++){const q=p[V]=O?Qt(p[V]):Et(p[V]);y(f[V],q,_,null,w,A,D,S,O)}I>F?Ce(f,w,A,!0,!1,W):Se(p,_,b,w,A,D,S,O,W)},G=(f,p,_,b,w,A,D,S,O)=>{let I=0;const F=p.length;let W=f.length-1,V=F-1;for(;I<=W&&I<=V;){const q=f[I],re=p[I]=O?Qt(p[I]):Et(p[I]);if(Ns(q,re))y(q,re,_,null,w,A,D,S,O);else break;I++}for(;I<=W&&I<=V;){const q=f[W],re=p[V]=O?Qt(p[V]):Et(p[V]);if(Ns(q,re))y(q,re,_,null,w,A,D,S,O);else break;W--,V--}if(I>W){if(I<=V){const q=V+1,re=q<F?p[q].el:b;for(;I<=V;)y(null,p[I]=O?Qt(p[I]):Et(p[I]),_,re,w,A,D,S,O),I++}}else if(I>V)for(;I<=W;)ie(f[I],w,A,!0),I++;else{const q=I,re=I,fe=new Map;for(I=re;I<=V;I++){const tt=p[I]=O?Qt(p[I]):Et(p[I]);tt.key!=null&&fe.set(tt.key,I)}let Ee,Oe=0;const ct=V-re+1;let qn=!1,ul=0;const Ps=new Array(ct);for(I=0;I<ct;I++)Ps[I]=0;for(I=q;I<=W;I++){const tt=f[I];if(Oe>=ct){ie(tt,w,A,!0);continue}let wt;if(tt.key!=null)wt=fe.get(tt.key);else for(Ee=re;Ee<=V;Ee++)if(Ps[Ee-re]===0&&Ns(tt,p[Ee])){wt=Ee;break}wt===void 0?ie(tt,w,A,!0):(Ps[wt-re]=I+1,wt>=ul?ul=wt:qn=!0,y(tt,p[wt],_,null,w,A,D,S,O),Oe++)}const hl=qn?Pm(Ps):ts;for(Ee=hl.length-1,I=ct-1;I>=0;I--){const tt=re+I,wt=p[tt],dl=tt+1<F?p[tt+1].el:b;Ps[I]===0?y(null,wt,_,dl,w,A,D,S,O):qn&&(Ee<0||I!==hl[Ee]?se(wt,_,dl,2):Ee--)}}},se=(f,p,_,b,w=null)=>{const{el:A,type:D,transition:S,children:O,shapeFlag:I}=f;if(I&6){se(f.component.subTree,p,_,b);return}if(I&128){f.suspense.move(p,_,b);return}if(I&64){D.move(f,p,_,k);return}if(D===ut){s(A,p,_);for(let W=0;W<O.length;W++)se(O[W],p,_,b);s(f.anchor,p,_);return}if(D===_o){$(f,p,_);return}if(b!==2&&I&1&&S)if(b===0)S.beforeEnter(A),s(A,p,_),Ge(()=>S.enter(A),w);else{const{leave:W,delayLeave:V,afterLeave:q}=S,re=()=>s(A,p,_),fe=()=>{W(A,()=>{re(),q&&q()})};V?V(A,re,fe):fe()}else s(A,p,_)},ie=(f,p,_,b=!1,w=!1)=>{const{type:A,props:D,ref:S,children:O,dynamicChildren:I,shapeFlag:F,patchFlag:W,dirs:V}=f;if(S!=null&&ea(S,null,_,f,!0),F&256){p.ctx.deactivate(f);return}const q=F&1&&V,re=!$s(f);let fe;if(re&&(fe=D&&D.onVnodeBeforeUnmount)&&bt(fe,p,f),F&6)Le(f.component,_,b);else{if(F&128){f.suspense.unmount(_,b);return}q&&bn(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,_,w,k,b):I&&(A!==ut||W>0&&W&64)?Ce(I,p,_,!1,!0):(A===ut&&W&384||!w&&F&16)&&Ce(O,p,_),b&&ve(f)}(re&&(fe=D&&D.onVnodeUnmounted)||q)&&Ge(()=>{fe&&bt(fe,p,f),q&&bn(f,null,p,"unmounted")},_)},ve=f=>{const{type:p,el:_,anchor:b,transition:w}=f;if(p===ut){Ie(_,b);return}if(p===_o){X(f);return}const A=()=>{i(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:S}=w,O=()=>D(_,A);S?S(f.el,A,O):O()}else A()},Ie=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Le=(f,p,_)=>{const{bum:b,scope:w,update:A,subTree:D,um:S}=f;b&&Bi(b),w.stop(),A&&(A.active=!1,ie(D,f,p,_)),S&&Ge(S,p),Ge(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ce=(f,p,_,b=!1,w=!1,A=0)=>{for(let D=A;D<f.length;D++)ie(f[D],p,_,b,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let M=!1;const N=(f,p,_)=>{f==null?p._vnode&&ie(p._vnode,null,null,!0):y(p._vnode||null,f,p,null,null,null,_),M||(M=!0,El(),ld(),M=!1),p._vnode=f},k={p:y,um:ie,m:se,r:ve,mt:j,mc:Se,pc:E,pbc:le,n:v,o:t};let J,he;return e&&([J,he]=e(k)),{render:N,hydrate:J,createApp:wm(N,J)}}function go({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function En({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Am(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ad(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Qt(i[r]),a.el=o.el),n||Ad(o,a)),a.type===Fr&&(a.el=o.el)}}function Pm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Pd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pd(e)}const Nm=t=>t.__isTeleport,ut=Symbol.for("v-fgt"),Fr=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),Bs=[];let dt=null;function Nd(t=!1){Bs.push(dt=t?null:[])}function Om(){Bs.pop(),dt=Bs[Bs.length-1]||null}let Zs=1;function xl(t){Zs+=t}function Od(t){return t.dynamicChildren=Zs>0?dt||ts:null,Om(),Zs>0&&dt&&dt.push(t),t}function LR(t,e,n,s,i,r){return Od(Md(t,e,n,s,i,r,!0))}function kd(t,e,n,s,i){return Od(ze(t,e,n,s,i,!0))}function Zi(t){return t?t.__v_isVNode===!0:!1}function Ns(t,e){return t.type===e.type&&t.key===e.key}const $r="__vInternal",xd=({key:t})=>t??null,Wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||Xe(t)||Q(t)?{i:De,r:t,k:e,f:!!n}:t:null);function Md(t,e=null,n=null,s=0,i=null,r=t===ut?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xd(e),ref:e&&Wi(e),scopeId:dd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return a?(Za(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Zs>0&&!o&&dt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&dt.push(c),c}const ze=km;function km(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===q_)&&(t=gn),Zi(t)){const a=ds(t,e,!0);return n&&Za(a,n),Zs>0&&!r&&dt&&(a.shapeFlag&6?dt[dt.indexOf(t)]=a:dt.push(a)),a.patchFlag|=-2,a}if(jm(t)&&(t=t.__vccOpts),e){e=xm(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=Ba(a)),me(c)&&(td(c)&&!K(c)&&(c=Fe({},c)),e.style=Ua(c))}const o=Ne(t)?1:Q_(t)?128:Nm(t)?64:me(t)?4:Q(t)?2:0;return Md(t,e,n,s,i,o,r,!0)}function xm(t){return t?td(t)||$r in t?Fe({},t):t:null}function ds(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Dm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xd(a),ref:e&&e.ref?n&&i?K(i)?i.concat(Wi(e)):[i,Wi(e)]:Wi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mm(t=" ",e=0){return ze(Fr,null,t,e)}function FR(t="",e=!1){return e?(Nd(),kd(gn,null,t)):ze(gn,null,t)}function Et(t){return t==null||typeof t=="boolean"?ze(gn):K(t)?ze(ut,null,t.slice()):typeof t=="object"?Qt(t):ze(Fr,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function Za(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Za(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!($r in e)?e._ctx=De:i===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:De},n=32):(e=String(e),s&64?(n=16,e=[Mm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ba([e.class,s.class]));else if(i==="style")e.style=Ua([e.style,s.style]);else if(Pr(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bt(t,e,n,s=null){gt(t,e,7,[n,s])}const Lm=Ed();let Fm=0;function $m(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Lm,r={uid:Fm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cd(s,i),emitsOptions:hd(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=H_.bind(null,r),t.ce&&t.ce(r),r}let Be=null,er,ta;{const t=Fh(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};er=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),ta=e("__VUE_SSR_SETTERS__",n=>Ur=n)}const gi=t=>{const e=Be;return er(t),t.scope.on(),()=>{t.scope.off(),er(e)}},Ml=()=>{Be&&Be.scope.off(),er(null)};function Dd(t){return t.vnode.shapeFlag&4}let Ur=!1;function Um(t,e=!1){e&&ta(e);const{props:n,children:s}=t.vnode,i=Dd(t);bm(t,n,i,e),Cm(t,s);const r=i?Bm(t,e):void 0;return e&&ta(!1),r}function Bm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=nd(new Proxy(t.ctx,fm));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Hm(t):null,r=gi(t);Vn();const o=on(s,t,0,[t.props,i]);if(Hn(),r(),Mh(o)){if(o.then(Ml,Ml),e)return o.then(a=>{Dl(t,a,e)}).catch(a=>{Mr(a,t,0)});t.asyncDep=o}else Dl(t,o,e)}else Ld(t,e)}function Dl(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=od(e)),Ld(t,n)}let Ll;function Ld(t,e,n){const s=t.type;if(!t.render){if(!e&&Ll&&!s.render){const i=s.template||Xa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Fe(Fe({isCustomElement:r,delimiters:a},o),c);s.render=Ll(i,l)}}t.render=s.render||ot}{const i=gi(t);Vn();try{pm(t)}finally{Hn(),i()}}}function Vm(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Qe(t,"get","$attrs"),e[n]}}))}function Hm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Vm(t)},slots:t.slots,emit:t.emit,expose:e}}function Br(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(od(nd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Us)return Us[n](t)},has(e,n){return n in e||n in Us}}))}function Wm(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function jm(t){return Q(t)&&"__vccOpts"in t}const rt=(t,e)=>k_(t,e,Ur);function Fd(t,e,n){const s=arguments.length;return s===2?me(e)&&!K(e)?Zi(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zi(n)&&(n=[n]),ze(t,e,n))}const Gm="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const zm="http://www.w3.org/2000/svg",Km="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,Fl=Xt&&Xt.createElement("template"),qm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Xt.createElementNS(zm,t):e==="mathml"?Xt.createElementNS(Km,t):Xt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Fl.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ym=Symbol("_vtc");function Qm(t,e,n){const s=t[Ym];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xm=Symbol("_vod"),Jm=Symbol("");function Zm(t,e,n){const s=t.style,i=s.display,r=Ne(n);if(n&&!r){if(e&&!Ne(e))for(const o in e)n[o]==null&&na(s,o,"");for(const o in n)na(s,o,n[o])}else if(r){if(e!==n){const o=s[Jm];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");Xm in t&&(s.display=i)}const $l=/\s*!important$/;function na(t,e,n){if(K(n))n.forEach(s=>na(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ey(t,e);$l.test(n)?t.setProperty(ws(s),n.replace($l,""),"important"):t[s]=n}}const Ul=["Webkit","Moz","ms"],mo={};function ey(t,e){const n=mo[e];if(n)return n;let s=Rt(e);if(s!=="filter"&&s in t)return mo[e]=s;s=kr(s);for(let i=0;i<Ul.length;i++){const r=Ul[i]+s;if(r in t)return mo[e]=r}return e}const Bl="http://www.w3.org/1999/xlink";function ty(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bl,e.slice(6,e.length)):t.setAttributeNS(Bl,e,n);else{const r=a_(e);n==null||r&&!$h(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ny(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=$h(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function $d(t,e,n,s){t.addEventListener(e,n,s)}function sy(t,e,n,s){t.removeEventListener(e,n,s)}const Vl=Symbol("_vei");function iy(t,e,n,s,i=null){const r=t[Vl]||(t[Vl]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=ry(e);if(s){const l=r[e]=cy(s,i);$d(t,a,l,c)}else o&&(sy(t,a,o,c),r[e]=void 0)}}const Hl=/(?:Once|Passive|Capture)$/;function ry(t){let e;if(Hl.test(t)){e={};let s;for(;s=t.match(Hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ws(t.slice(2)),e]}let yo=0;const oy=Promise.resolve(),ay=()=>yo||(oy.then(()=>yo=0),yo=Date.now());function cy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gt(ly(s,n.value),e,5,[s])};return n.value=t,n.attached=ay(),n}function ly(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Wl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uy=(t,e,n,s,i,r,o,a,c)=>{const l=i==="svg";e==="class"?Qm(t,s,l):e==="style"?Zm(t,n,s):Pr(e)?Da(e)||iy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hy(t,e,s,l))?ny(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ty(t,e,s,l))};function hy(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wl(e)&&Q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Wl(e)&&Ne(n)?!1:e in t}const jl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Bi(e,n):e},vo=Symbol("_assign"),$R={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Nr(e);$d(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$a(tr(o)):tr(o));t[vo](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Ya(()=>{t._assigning=!1})}),t[vo]=jl(s)},mounted(t,{value:e,oldValue:n,modifiers:{number:s}}){Gl(t,e,n,s)},beforeUpdate(t,e,n){t[vo]=jl(n)},updated(t,{value:e,oldValue:n,modifiers:{number:s}}){t._assigning||Gl(t,e,n,s)}};function Gl(t,e,n,s){const i=t.multiple,r=K(e);if(!(i&&!r&&!Nr(e))&&!(r&&Ys(e,n))){for(let o=0,a=t.options.length;o<a;o++){const c=t.options[o],l=tr(c);if(i)if(r){const u=typeof l;u==="string"||u==="number"?c.selected=e.includes(s?$a(l):l):c.selected=l_(e,l)>-1}else c.selected=e.has(l);else if(Ys(tr(c),e)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!i&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function tr(t){return"_value"in t?t._value:t.value}const dy=Fe({patchProp:uy},qm);let zl;function fy(){return zl||(zl=Sm(dy))}const UR=(...t)=>{const e=fy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=gy(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,py(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function py(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gy(t){return Ne(t)?document.querySelector(t):t}function _y(){return Ud().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ud(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const my=typeof Proxy=="function",yy="devtools-plugin:setup",vy="plugin:settings:set";let Yn,sa;function wy(){var t;return Yn!==void 0||(typeof window<"u"&&window.performance?(Yn=!0,sa=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Yn=!0,sa=global.perf_hooks.performance):Yn=!1),Yn}function by(){return wy()?sa.now():Date.now()}class Ey{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return by()}},n&&n.on(vy,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Iy(t,e){const n=t,s=Ud(),i=_y(),r=my&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(yy,t,e);else{const o=r?new Ey(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Bd="store";function BR(t){return t===void 0&&(t=null),Ct(t!==null?t:Bd)}function bs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Cy(t){return t!==null&&typeof t=="object"}function Ty(t){return t&&typeof t.then=="function"}function Sy(t,e){return function(){return t(e)}}function Vd(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Hd(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Vr(t,n,[],t._modules.root,!0),ec(t,n,e)}function ec(t,e,n){var s=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={},a={},c=u_(!0);c.run(function(){bs(r,function(l,u){o[u]=Sy(l,t),a[u]=rt(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=pi({data:e}),t._scope=c,t.strict&&Oy(t),s&&n&&t._withCommit(function(){s.data=null}),i&&i.stop()}function Vr(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=tc(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=Ry(t,o,n);s.forEachMutation(function(u,h){var d=o+h;Ay(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;Py(t,d,g,l)}),s.forEachGetter(function(u,h){var d=o+h;Ny(t,d,u,l)}),s.forEachChild(function(u,h){Vr(t,e,n.concat(h),u,i)})}function Ry(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var c=nr(r,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(r,o,a){var c=nr(r,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return Wd(t,e)}},state:{get:function(){return tc(t.state,n)}}}),i}function Wd(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Ay(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function Py(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return Ty(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Ny(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function Oy(t){os(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function tc(t,e){return e.reduce(function(n,s){return n[s]},t)}function nr(t,e,n){return Cy(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var ky="vuex bindings",Kl="vuex:mutations",wo="vuex:actions",Qn="vuex",xy=0;function My(t,e){Iy({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ky]},function(n){n.addTimelineLayer({id:Kl,label:"Vuex Mutations",color:ql}),n.addTimelineLayer({id:wo,label:"Vuex Actions",color:ql}),n.addInspector({id:Qn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Qn)if(s.filter){var i=[];Kd(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[zd(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Qn){var i=s.nodeId;Wd(e,i),s.state=Fy(Uy(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Qn){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Qn),n.sendInspectorState(Qn),n.addTimelineEvent({layerId:Kl,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=xy++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:wo,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:wo,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var ql=8702998,Dy=6710886,Ly=16777215,jd={label:"namespaced",textColor:Ly,backgroundColor:Dy};function Gd(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function zd(t,e){return{id:e||"root",label:Gd(e),tags:t.namespaced?[jd]:[],children:Object.keys(t._children).map(function(n){return zd(t._children[n],e+n+"/")})}}function Kd(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[jd]:[]}),Object.keys(e._children).forEach(function(i){Kd(t,e._children[i],n,s+i+"/")})}function Fy(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=$y(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Gd(o):o,editable:!1,value:ia(function(){return r[o]})}})}return i}function $y(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=ia(function(){return t[n]})}else e[n]=ia(function(){return t[n]})}),e}function Uy(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ia(t){try{return t()}catch(e){return e}}var vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},qd={namespaced:{configurable:!0}};qd.namespaced.get=function(){return!!this._rawModule.namespaced};vt.prototype.addChild=function(e,n){this._children[e]=n};vt.prototype.removeChild=function(e){delete this._children[e]};vt.prototype.getChild=function(e){return this._children[e]};vt.prototype.hasChild=function(e){return e in this._children};vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};vt.prototype.forEachChild=function(e){bs(this._children,e)};vt.prototype.forEachGetter=function(e){this._rawModule.getters&&bs(this._rawModule.getters,e)};vt.prototype.forEachAction=function(e){this._rawModule.actions&&bs(this._rawModule.actions,e)};vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&bs(this._rawModule.mutations,e)};Object.defineProperties(vt.prototype,qd);var Wn=function(e){this.register([],e,!1)};Wn.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Wn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};Wn.prototype.update=function(e){Yd([],this.root,e)};Wn.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new vt(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&bs(n.modules,function(a,c){i.register(e.concat(c),a,s)})};Wn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};Wn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Yd(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Yd(t.concat(s),e.getChild(s),n.modules[s])}}function VR(t){return new Ze(t)}var Ze=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Wn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,m){return l.call(o,d,g,m)},this.strict=i;var u=this._modules.root.state;Vr(this,u,[],this._modules.root),ec(this,u),s.forEach(function(h){return h(n)})},nc={state:{configurable:!0}};Ze.prototype.install=function(e,n){e.provide(n||Bd,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&My(e,this)};nc.state.get=function(){return this._state.data};nc.state.set=function(t){};Ze.prototype.commit=function(e,n,s){var i=this,r=nr(e,n,s),o=r.type,a=r.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};Ze.prototype.dispatch=function(e,n){var s=this,i=nr(e,n),r=i.type,o=i.payload,a={type:r,payload:o},c=this._actions[r];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,d)})}catch{}h(d)})})}};Ze.prototype.subscribe=function(e,n){return Vd(e,this._subscribers,n)};Ze.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Vd(s,this._actionSubscribers,n)};Ze.prototype.watch=function(e,n,s){var i=this;return os(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Ze.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ze.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Vr(this,this.state,e,this._modules.get(e),s.preserveState),ec(this,this.state)};Ze.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=tc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Hd(this)};Ze.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ze.prototype.hotUpdate=function(e){this._modules.update(e),Hd(this,!0)};Ze.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ze.prototype,nc);var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jd={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Qd,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",d="quarter",g="year",m="date",y="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(j){var L=["th","st","nd","rd"],C=j%100;return"["+j+(L[(C-20)%10]||L[C]||L[0])+"]"}},$=function(j,L,C){var P=String(j);return!P||P.length>=L?j:""+Array(L+1-P.length).join(C)+j},X={s:$,z:function(j){var L=-j.utcOffset(),C=Math.abs(L),P=Math.floor(C/60),E=C%60;return(L<=0?"+":"-")+$(P,2,"0")+":"+$(E,2,"0")},m:function j(L,C){if(L.date()<C.date())return-j(C,L);var P=12*(C.year()-L.year())+(C.month()-L.month()),E=L.clone().add(P,h),H=C-E<0,G=L.clone().add(P+(H?-1:1),h);return+(-(P+(C-E)/(H?E-G:G-E))||0)},a:function(j){return j<0?Math.ceil(j)||0:Math.floor(j)},p:function(j){return{M:h,y:g,w:u,d:l,D:m,h:c,m:a,s:o,ms:r,Q:d}[j]||String(j||"").toLowerCase().replace(/s$/,"")},u:function(j){return j===void 0}},oe="en",B={};B[oe]=U;var ye="$isDayjsObject",Se=function(j){return j instanceof st||!(!j||!j[ye])},Re=function j(L,C,P){var E;if(!L)return oe;if(typeof L=="string"){var H=L.toLowerCase();B[H]&&(E=H),C&&(B[H]=C,E=H);var G=L.split("-");if(!E&&G.length>1)return j(G[0])}else{var se=L.name;B[se]=L,E=se}return!P&&E&&(oe=E),E||!P&&oe},le=function(j,L){if(Se(j))return j.clone();var C=typeof L=="object"?L:{};return C.date=j,C.args=arguments,new st(C)},ne=X;ne.l=Re,ne.i=Se,ne.w=function(j,L){return le(j,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var st=function(){function j(C){this.$L=Re(C.locale,null,!0),this.parse(C),this.$x=this.$x||C.x||{},this[ye]=!0}var L=j.prototype;return L.parse=function(C){this.$d=function(P){var E=P.date,H=P.utc;if(E===null)return new Date(NaN);if(ne.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var G=E.match(R);if(G){var se=G[2]-1||0,ie=(G[7]||"0").substring(0,3);return H?new Date(Date.UTC(G[1],se,G[3]||1,G[4]||0,G[5]||0,G[6]||0,ie)):new Date(G[1],se,G[3]||1,G[4]||0,G[5]||0,G[6]||0,ie)}}return new Date(E)}(C),this.init()},L.init=function(){var C=this.$d;this.$y=C.getFullYear(),this.$M=C.getMonth(),this.$D=C.getDate(),this.$W=C.getDay(),this.$H=C.getHours(),this.$m=C.getMinutes(),this.$s=C.getSeconds(),this.$ms=C.getMilliseconds()},L.$utils=function(){return ne},L.isValid=function(){return this.$d.toString()!==y},L.isSame=function(C,P){var E=le(C);return this.startOf(P)<=E&&E<=this.endOf(P)},L.isAfter=function(C,P){return le(C)<this.startOf(P)},L.isBefore=function(C,P){return this.endOf(P)<le(C)},L.$g=function(C,P,E){return ne.u(C)?this[P]:this.set(E,C)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(C,P){var E=this,H=!!ne.u(P)||P,G=ne.p(C),se=function(N,k){var J=ne.w(E.$u?Date.UTC(E.$y,k,N):new Date(E.$y,k,N),E);return H?J:J.endOf(l)},ie=function(N,k){return ne.w(E.toDate()[N].apply(E.toDate("s"),(H?[0,0,0,0]:[23,59,59,999]).slice(k)),E)},ve=this.$W,Ie=this.$M,Le=this.$D,Ce="set"+(this.$u?"UTC":"");switch(G){case g:return H?se(1,0):se(31,11);case h:return H?se(1,Ie):se(0,Ie+1);case u:var v=this.$locale().weekStart||0,M=(ve<v?ve+7:ve)-v;return se(H?Le-M:Le+(6-M),Ie);case l:case m:return ie(Ce+"Hours",0);case c:return ie(Ce+"Minutes",1);case a:return ie(Ce+"Seconds",2);case o:return ie(Ce+"Milliseconds",3);default:return this.clone()}},L.endOf=function(C){return this.startOf(C,!1)},L.$set=function(C,P){var E,H=ne.p(C),G="set"+(this.$u?"UTC":""),se=(E={},E[l]=G+"Date",E[m]=G+"Date",E[h]=G+"Month",E[g]=G+"FullYear",E[c]=G+"Hours",E[a]=G+"Minutes",E[o]=G+"Seconds",E[r]=G+"Milliseconds",E)[H],ie=H===l?this.$D+(P-this.$W):P;if(H===h||H===g){var ve=this.clone().set(m,1);ve.$d[se](ie),ve.init(),this.$d=ve.set(m,Math.min(this.$D,ve.daysInMonth())).$d}else se&&this.$d[se](ie);return this.init(),this},L.set=function(C,P){return this.clone().$set(C,P)},L.get=function(C){return this[ne.p(C)]()},L.add=function(C,P){var E,H=this;C=Number(C);var G=ne.p(P),se=function(Ie){var Le=le(H);return ne.w(Le.date(Le.date()+Math.round(Ie*C)),H)};if(G===h)return this.set(h,this.$M+C);if(G===g)return this.set(g,this.$y+C);if(G===l)return se(1);if(G===u)return se(7);var ie=(E={},E[a]=s,E[c]=i,E[o]=n,E)[G]||1,ve=this.$d.getTime()+C*ie;return ne.w(ve,this)},L.subtract=function(C,P){return this.add(-1*C,P)},L.format=function(C){var P=this,E=this.$locale();if(!this.isValid())return E.invalidDate||y;var H=C||"YYYY-MM-DDTHH:mm:ssZ",G=ne.z(this),se=this.$H,ie=this.$m,ve=this.$M,Ie=E.weekdays,Le=E.months,Ce=E.meridiem,v=function(k,J,he,f){return k&&(k[J]||k(P,H))||he[J].slice(0,f)},M=function(k){return ne.s(se%12||12,k,"0")},N=Ce||function(k,J,he){var f=k<12?"AM":"PM";return he?f.toLowerCase():f};return H.replace(x,function(k,J){return J||function(he){switch(he){case"YY":return String(P.$y).slice(-2);case"YYYY":return ne.s(P.$y,4,"0");case"M":return ve+1;case"MM":return ne.s(ve+1,2,"0");case"MMM":return v(E.monthsShort,ve,Le,3);case"MMMM":return v(Le,ve);case"D":return P.$D;case"DD":return ne.s(P.$D,2,"0");case"d":return String(P.$W);case"dd":return v(E.weekdaysMin,P.$W,Ie,2);case"ddd":return v(E.weekdaysShort,P.$W,Ie,3);case"dddd":return Ie[P.$W];case"H":return String(se);case"HH":return ne.s(se,2,"0");case"h":return M(1);case"hh":return M(2);case"a":return N(se,ie,!0);case"A":return N(se,ie,!1);case"m":return String(ie);case"mm":return ne.s(ie,2,"0");case"s":return String(P.$s);case"ss":return ne.s(P.$s,2,"0");case"SSS":return ne.s(P.$ms,3,"0");case"Z":return G}return null}(k)||G.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(C,P,E){var H,G=this,se=ne.p(P),ie=le(C),ve=(ie.utcOffset()-this.utcOffset())*s,Ie=this-ie,Le=function(){return ne.m(G,ie)};switch(se){case g:H=Le()/12;break;case h:H=Le();break;case d:H=Le()/3;break;case u:H=(Ie-ve)/6048e5;break;case l:H=(Ie-ve)/864e5;break;case c:H=Ie/i;break;case a:H=Ie/s;break;case o:H=Ie/n;break;default:H=Ie}return E?H:ne.a(H)},L.daysInMonth=function(){return this.endOf(h).$D},L.$locale=function(){return B[this.$L]},L.locale=function(C,P){if(!C)return this.$L;var E=this.clone(),H=Re(C,P,!0);return H&&(E.$L=H),E},L.clone=function(){return ne.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},j}(),et=st.prototype;return le.prototype=et,[["$ms",r],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",g],["$D",m]].forEach(function(j){et[j[1]]=function(L){return this.$g(L,j[0],j[1])}}),le.extend=function(j,L){return j.$i||(j(L,st,le),j.$i=!0),le},le.locale=Re,le.isDayjs=Se,le.unix=function(j){return le(1e3*j)},le.en=B[oe],le.Ls=B,le.p={},le})})(Jd);var By=Jd.exports;const HR=Xd(By);var Zd={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Qd,function(){var n="minute",s=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(r,o,a){var c=o.prototype;a.utc=function(y){var R={date:y,utc:!0,args:arguments};return new o(R)},c.utc=function(y){var R=a(this.toDate(),{locale:this.$L,utc:!0});return y?R.add(this.utcOffset(),n):R},c.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var l=c.parse;c.parse=function(y){y.utc&&(this.$u=!0),this.$utils().u(y.$offset)||(this.$offset=y.$offset),l.call(this,y)};var u=c.init;c.init=function(){if(this.$u){var y=this.$d;this.$y=y.getUTCFullYear(),this.$M=y.getUTCMonth(),this.$D=y.getUTCDate(),this.$W=y.getUTCDay(),this.$H=y.getUTCHours(),this.$m=y.getUTCMinutes(),this.$s=y.getUTCSeconds(),this.$ms=y.getUTCMilliseconds()}else u.call(this)};var h=c.utcOffset;c.utcOffset=function(y,R){var x=this.$utils().u;if(x(y))return this.$u?0:x(this.$offset)?h.call(this):this.$offset;if(typeof y=="string"&&(y=function(oe){oe===void 0&&(oe="");var B=oe.match(s);if(!B)return null;var ye=(""+B[0]).match(i)||["-",0,0],Se=ye[0],Re=60*+ye[1]+ +ye[2];return Re===0?0:Se==="+"?Re:-Re}(y),y===null))return this;var U=Math.abs(y)<=16?60*y:y,$=this;if(R)return $.$offset=U,$.$u=y===0,$;if(y!==0){var X=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();($=this.local().add(U+X,n)).$offset=U,$.$x.$localOffset=X}else $=this.utc();return $};var d=c.format;c.format=function(y){var R=y||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,R)},c.valueOf=function(){var y=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*y},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var g=c.toDate;c.toDate=function(y){return y==="s"&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():g.call(this)};var m=c.diff;c.diff=function(y,R,x){if(y&&this.$u===y.$u)return m.call(this,y,R,x);var U=this.local(),$=a(y).local();return m.call(U,$,R,x)}}})})(Zd);var Vy=Zd.exports;const WR=Xd(Vy);var Yl={};/**
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
 */const ef={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Es(e)},Es=function(t){return new Error("Firebase Database ("+ef.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const tf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new Wy;const d=r<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nf=function(t){const e=tf(t);return sc.encodeByteArray(e,!0)},sr=function(t){return nf(t).replace(/\./g,"")},ir=function(t){try{return sc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jy(t){return sf(void 0,t)}function sf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Gy(n)||(t[n]=sf(t[n],e[n]));return t}function Gy(t){return t!=="__proto__"}/**
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
 */function zy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ky=()=>zy().__FIREBASE_DEFAULTS__,qy=()=>{if(typeof process>"u"||typeof Yl>"u")return;const t=Yl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ir(t[1]);return e&&JSON.parse(e)},ic=()=>{try{return Ky()||qy()||Yy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rf=t=>{var e,n;return(n=(e=ic())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qy=t=>{const e=rf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},of=()=>{var t;return(t=ic())===null||t===void 0?void 0:t.config},af=t=>{var e;return(e=ic())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Hr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Xy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sr(JSON.stringify(n)),sr(JSON.stringify(o)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function cf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jy(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uf(){return ef.NODE_ADMIN===!0}function hf(){try{return typeof indexedDB=="object"}catch{return!1}}function df(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Zy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ev="FirebaseError";class Ot extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ev,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jn.prototype.create)}}class jn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?tv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,s)}}function tv(t,e){return t.replace(nv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const nv=/\{\$([^}]+)}/g;/**
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
 */function ei(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
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
 */const ff=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ei(ir(r[0])||""),n=ei(ir(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sv=function(t){const e=ff(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iv=function(t){const e=ff(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ra(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ql(r)&&Ql(o)){if(!ti(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ql(t){return t!==null&&typeof t=="object"}/**
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
 */function Is(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class rv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ov(t,e){const n=new av(t,e);return n.subscribe.bind(n)}class av{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");cv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=bo),i.error===void 0&&(i.error=bo),i.complete===void 0&&(i.complete=bo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bo(){}function Wr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const lv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const uv=1e3,hv=2,dv=4*60*60*1e3,fv=.5;function Xl(t,e=uv,n=hv){const s=e*Math.pow(n,t),i=Math.round(fv*s*(Math.random()-.5)*2);return Math.min(dv,s+i)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const In="[DEFAULT]";/**
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
 */class pv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Hr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_v(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gv(t){return t===In?void 0:t}function _v(t){return t.instantiationMode==="EAGER"}/**
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
 */class mv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const yv={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},vv=pe.INFO,wv={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},bv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=wv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gr{constructor(e){this.name=e,this._logLevel=vv,this._logHandler=bv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Ev=(t,e)=>e.some(n=>t instanceof n);let Jl,Zl;function Iv(){return Jl||(Jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cv(){return Zl||(Zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pf=new WeakMap,oa=new WeakMap,gf=new WeakMap,Eo=new WeakMap,oc=new WeakMap;function Tv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(an(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pf.set(n,t)}).catch(()=>{}),oc.set(e,t),e}function Sv(t){if(oa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});oa.set(t,e)}let aa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rv(t){aa=t(aa)}function Av(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Io(this),e,...n);return gf.set(s,e.sort?e.sort():[e]),an(s)}:Cv().includes(t)?function(...e){return t.apply(Io(this),e),an(pf.get(this))}:function(...e){return an(t.apply(Io(this),e))}}function Pv(t){return typeof t=="function"?Av(t):(t instanceof IDBTransaction&&Sv(t),Ev(t,Iv())?new Proxy(t,aa):t)}function an(t){if(t instanceof IDBRequest)return Tv(t);if(Eo.has(t))return Eo.get(t);const e=Pv(t);return e!==t&&(Eo.set(t,e),oc.set(e,t)),e}const Io=t=>oc.get(t);function Nv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=an(o);return s&&o.addEventListener("upgradeneeded",c=>{s(an(o.result),c.oldVersion,c.newVersion,an(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ov=["get","getKey","getAll","getAllKeys","count"],kv=["put","add","delete","clear"],Co=new Map;function eu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Co.get(e))return Co.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=kv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ov.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Co.set(e,r),r}Rv(t=>({...t,get:(e,n,s)=>eu(e,n)||t.get(e,n,s),has:(e,n)=>!!eu(e,n)||t.has(e,n)}));/**
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
 */class xv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Mv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ca="@firebase/app",tu="0.9.26";/**
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
 */const Dn=new Gr("@firebase/app"),Dv="@firebase/app-compat",Lv="@firebase/analytics-compat",Fv="@firebase/analytics",$v="@firebase/app-check-compat",Uv="@firebase/app-check",Bv="@firebase/auth",Vv="@firebase/auth-compat",Hv="@firebase/database",Wv="@firebase/database-compat",jv="@firebase/functions",Gv="@firebase/functions-compat",zv="@firebase/installations",Kv="@firebase/installations-compat",qv="@firebase/messaging",Yv="@firebase/messaging-compat",Qv="@firebase/performance",Xv="@firebase/performance-compat",Jv="@firebase/remote-config",Zv="@firebase/remote-config-compat",ew="@firebase/storage",tw="@firebase/storage-compat",nw="@firebase/firestore",sw="@firebase/firestore-compat",iw="firebase",rw="10.7.2";/**
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
 */const la="[DEFAULT]",ow={[ca]:"fire-core",[Dv]:"fire-core-compat",[Fv]:"fire-analytics",[Lv]:"fire-analytics-compat",[Uv]:"fire-app-check",[$v]:"fire-app-check-compat",[Bv]:"fire-auth",[Vv]:"fire-auth-compat",[Hv]:"fire-rtdb",[Wv]:"fire-rtdb-compat",[jv]:"fire-fn",[Gv]:"fire-fn-compat",[zv]:"fire-iid",[Kv]:"fire-iid-compat",[qv]:"fire-fcm",[Yv]:"fire-fcm-compat",[Qv]:"fire-perf",[Xv]:"fire-perf-compat",[Jv]:"fire-rc",[Zv]:"fire-rc-compat",[ew]:"fire-gcs",[tw]:"fire-gcs-compat",[nw]:"fire-fst",[sw]:"fire-fst-compat","fire-js":"fire-js",[iw]:"fire-js-all"};/**
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
 */const or=new Map,ua=new Map;function aw(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(ua.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;ua.set(e,t);for(const n of or.values())aw(n,t);return!0}function Gn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cn=new jn("app","Firebase",cw);/**
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
 */class lw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Cs=rw;function uw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:la,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=of()),!n)throw cn.create("no-options");const r=or.get(i);if(r){if(ti(n,r.options)&&ti(s,r.config))return r;throw cn.create("duplicate-app",{appName:i})}const o=new mv(i);for(const c of ua.values())o.addComponent(c);const a=new lw(n,s,o);return or.set(i,a),a}function ac(t=la){const e=or.get(t);if(!e&&t===la&&of())return uw();if(!e)throw cn.create("no-app",{appName:t});return e}function at(t,e,n){var s;let i=(s=ow[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(a.join(" "));return}At(new mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hw="firebase-heartbeat-database",dw=1,ni="firebase-heartbeat-store";let To=null;function _f(){return To||(To=Nv(hw,dw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),To}async function fw(t){try{return await(await _f()).transaction(ni).objectStore(ni).get(mf(t))}catch(e){if(e instanceof Ot)Dn.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function nu(t,e){try{const s=(await _f()).transaction(ni,"readwrite");await s.objectStore(ni).put(e,mf(t)),await s.done}catch(n){if(n instanceof Ot)Dn.warn(n.message);else{const s=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(s.message)}}}function mf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pw=1024,gw=30*24*60*60*1e3;class _w{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=su();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=su(),{heartbeatsToSend:s,unsentEntries:i}=mw(this._heartbeatsCache.heartbeats),r=sr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function su(){return new Date().toISOString().substring(0,10)}function mw(t,e=pw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),iu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hf()?df().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iu(t){return sr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vw(t){At(new mt("platform-logger",e=>new xv(e),"PRIVATE")),At(new mt("heartbeat",e=>new _w(e),"PRIVATE")),at(ca,tu,t),at(ca,tu,"esm2017"),at("fire-js","")}vw("");var ww="firebase",bw="10.7.2";/**
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
 */at(ww,bw,"app");const Ew=(t,e)=>e.some(n=>t instanceof n);let ru,ou;function Iw(){return ru||(ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cw(){return ou||(ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yf=new WeakMap,ha=new WeakMap,vf=new WeakMap,So=new WeakMap,cc=new WeakMap;function Tw(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ln(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yf.set(n,t)}).catch(()=>{}),cc.set(e,t),e}function Sw(t){if(ha.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ha.set(t,e)}let da={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rw(t){da=t(da)}function Aw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ro(this),e,...n);return vf.set(s,e.sort?e.sort():[e]),ln(s)}:Cw().includes(t)?function(...e){return t.apply(Ro(this),e),ln(yf.get(this))}:function(...e){return ln(t.apply(Ro(this),e))}}function Pw(t){return typeof t=="function"?Aw(t):(t instanceof IDBTransaction&&Sw(t),Ew(t,Iw())?new Proxy(t,da):t)}function ln(t){if(t instanceof IDBRequest)return Tw(t);if(So.has(t))return So.get(t);const e=Pw(t);return e!==t&&(So.set(t,e),cc.set(e,t)),e}const Ro=t=>cc.get(t);function Nw(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ln(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ln(o.result),c.oldVersion,c.newVersion,ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ow=["get","getKey","getAll","getAllKeys","count"],kw=["put","add","delete","clear"],Ao=new Map;function au(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=kw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ow.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ao.set(e,r),r}Rw(t=>({...t,get:(e,n,s)=>au(e,n)||t.get(e,n,s),has:(e,n)=>!!au(e,n)||t.has(e,n)}));const wf="@firebase/installations",lc="0.6.4";/**
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
 */const bf=1e4,Ef=`w:${lc}`,If="FIS_v2",xw="https://firebaseinstallations.googleapis.com/v1",Mw=60*60*1e3,Dw="installations",Lw="Installations";/**
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
 */const Fw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ln=new jn(Dw,Lw,Fw);function Cf(t){return t instanceof Ot&&t.code.includes("request-failed")}/**
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
 */function Tf({projectId:t}){return`${xw}/projects/${t}/installations`}function Sf(t){return{token:t.token,requestStatus:2,expiresIn:Uw(t.expiresIn),creationTime:Date.now()}}async function Rf(t,e){const s=(await e.json()).error;return Ln.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Af({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $w(t,{refreshToken:e}){const n=Af(t);return n.append("Authorization",Bw(e)),n}async function Pf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Uw(t){return Number(t.replace("s","000"))}function Bw(t){return`${If} ${t}`}/**
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
 */async function Vw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Tf(t),i=Af(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:If,appId:t.appId,sdkVersion:Ef},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Pf(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Sf(l.authToken)}}else throw await Rf("Create Installation",c)}/**
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
 */function Nf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Hw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ww=/^[cdef][\w-]{21}$/,fa="";function jw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Gw(t);return Ww.test(n)?n:fa}catch{return fa}}function Gw(t){return Hw(t).substr(0,22)}/**
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
 */function zr(t){return`${t.appName}!${t.appId}`}/**
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
 */const Of=new Map;function kf(t,e){const n=zr(t);xf(n,e),zw(n,e)}function xf(t,e){const n=Of.get(t);if(n)for(const s of n)s(e)}function zw(t,e){const n=Kw();n&&n.postMessage({key:t,fid:e}),qw()}let Rn=null;function Kw(){return!Rn&&"BroadcastChannel"in self&&(Rn=new BroadcastChannel("[Firebase] FID Change"),Rn.onmessage=t=>{xf(t.data.key,t.data.fid)}),Rn}function qw(){Of.size===0&&Rn&&(Rn.close(),Rn=null)}/**
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
 */const Yw="firebase-installations-database",Qw=1,Fn="firebase-installations-store";let Po=null;function uc(){return Po||(Po=Nw(Yw,Qw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fn)}}})),Po}async function ar(t,e){const n=zr(t),i=(await uc()).transaction(Fn,"readwrite"),r=i.objectStore(Fn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&kf(t,e.fid),e}async function Mf(t){const e=zr(t),s=(await uc()).transaction(Fn,"readwrite");await s.objectStore(Fn).delete(e),await s.done}async function Kr(t,e){const n=zr(t),i=(await uc()).transaction(Fn,"readwrite"),r=i.objectStore(Fn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&kf(t,a.fid),a}/**
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
 */async function hc(t){let e;const n=await Kr(t.appConfig,s=>{const i=Xw(s),r=Jw(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===fa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Xw(t){const e=t||{fid:jw(),registrationStatus:0};return Df(e)}function Jw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ln.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Zw(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eb(t)}:{installationEntry:e}}async function Zw(t,e){try{const n=await Vw(t,e);return ar(t.appConfig,n)}catch(n){throw Cf(n)&&n.customData.serverCode===409?await Mf(t.appConfig):await ar(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eb(t){let e=await cu(t.appConfig);for(;e.registrationStatus===1;)await Nf(100),e=await cu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await hc(t);return s||n}return e}function cu(t){return Kr(t,e=>{if(!e)throw Ln.create("installation-not-found");return Df(e)})}function Df(t){return tb(t)?{fid:t.fid,registrationStatus:0}:t}function tb(t){return t.registrationStatus===1&&t.registrationTime+bf<Date.now()}/**
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
 */async function nb({appConfig:t,heartbeatServiceProvider:e},n){const s=sb(t,n),i=$w(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ef,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Pf(()=>fetch(s,a));if(c.ok){const l=await c.json();return Sf(l)}else throw await Rf("Generate Auth Token",c)}function sb(t,{fid:e}){return`${Tf(t)}/${e}/authTokens:generate`}/**
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
 */async function dc(t,e=!1){let n;const s=await Kr(t.appConfig,r=>{if(!Lf(r))throw Ln.create("not-registered");const o=r.authToken;if(!e&&ob(o))return r;if(o.requestStatus===1)return n=ib(t,e),r;{if(!navigator.onLine)throw Ln.create("app-offline");const a=cb(r);return n=rb(t,a),a}});return n?await n:s.authToken}async function ib(t,e){let n=await lu(t.appConfig);for(;n.authToken.requestStatus===1;)await Nf(100),n=await lu(t.appConfig);const s=n.authToken;return s.requestStatus===0?dc(t,e):s}function lu(t){return Kr(t,e=>{if(!Lf(e))throw Ln.create("not-registered");const n=e.authToken;return lb(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function rb(t,e){try{const n=await nb(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ar(t.appConfig,s),n}catch(n){if(Cf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ar(t.appConfig,s)}throw n}}function Lf(t){return t!==void 0&&t.registrationStatus===2}function ob(t){return t.requestStatus===2&&!ab(t)}function ab(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Mw}function cb(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function lb(t){return t.requestStatus===1&&t.requestTime+bf<Date.now()}/**
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
 */async function ub(t){const e=t,{installationEntry:n,registrationPromise:s}=await hc(e);return s?s.catch(console.error):dc(e).catch(console.error),n.fid}/**
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
 */async function hb(t,e=!1){const n=t;return await db(n),(await dc(n,e)).token}async function db(t){const{registrationPromise:e}=await hc(t);e&&await e}/**
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
 */function fb(t){if(!t||!t.options)throw No("App Configuration");if(!t.name)throw No("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw No(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function No(t){return Ln.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ff="installations",pb="installations-internal",gb=t=>{const e=t.getProvider("app").getImmediate(),n=fb(e),s=Gn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},_b=t=>{const e=t.getProvider("app").getImmediate(),n=Gn(e,Ff).getImmediate();return{getId:()=>ub(n),getToken:i=>hb(n,i)}};function mb(){At(new mt(Ff,gb,"PUBLIC")),At(new mt(pb,_b,"PRIVATE"))}mb();at(wf,lc);at(wf,lc,"esm2017");/**
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
 */const cr="analytics",yb="firebase_id",vb="origin",wb=60*1e3,bb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fc="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new Gr("@firebase/analytics");/**
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
 */const Eb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new jn("analytics","Analytics",Eb);/**
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
 */function Ib(t){if(!t.startsWith(fc)){const e=nt.create("invalid-gtag-resource",{gtagURL:t});return qe.warn(e.message),""}return t}function $f(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Cb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Tb(t,e){const n=Cb("firebase-js-sdk-policy",{createScriptURL:Ib}),s=document.createElement("script"),i=`${fc}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Sb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Rb(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await $f(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){qe.error(a)}t("config",i,r)}async function Ab(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await $f(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){qe.error(r)}}function Pb(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await Ab(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await Rb(t,e,n,s,a,c)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){qe.error(a)}}return i}function Nb(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Pb(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Ob(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(fc)&&n.src.includes(t))return n;return null}/**
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
 */const kb=30,xb=1e3;class Mb{constructor(e={},n=xb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Uf=new Mb;function Db(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Lb(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Db(s)},r=bb.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Fb(t,e=Uf,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw nt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw nt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Bb;return setTimeout(async()=>{a.abort()},n!==void 0?n:wb),Bf({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Bf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Uf){var r;const{appId:o,measurementId:a}=t;try{await $b(s,e)}catch(c){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Lb(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Ub(l)){if(i.deleteThrottleMetadata(o),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Xl(n,i.intervalMillis,kb):Xl(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),qe.debug(`Calling attemptFetch again in ${u} millis`),Bf(t,h,s,i)}}function $b(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ub(t){if(!(t instanceof Ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Bb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Vb(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function Hb(){if(hf())try{await df()}catch(t){return qe.warn(nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qe.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Wb(t,e,n,s,i,r,o){var a;const c=Fb(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>qe.error(g)),e.push(c);const l=Hb().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);Ob(r)||Tb(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[vb]="firebase",d.update=!0,h!=null&&(d[yb]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class jb{constructor(e){this.app=e}_delete(){return delete Vs[this.app.options.appId],Promise.resolve()}}let Vs={},uu=[];const hu={};let Oo="dataLayer",Gb="gtag",du,Vf,fu=!1;function zb(){const t=[];if(cf()&&t.push("This is a browser extension environment."),Zy()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:e});qe.warn(n.message)}}function Kb(t,e,n){zb();const s=t.options.appId;if(!s)throw nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(Vs[s]!=null)throw nt.create("already-exists",{id:s});if(!fu){Sb(Oo);const{wrappedGtag:r,gtagCore:o}=Nb(Vs,uu,hu,Oo,Gb);Vf=r,du=o,fu=!0}return Vs[s]=Wb(t,uu,hu,e,du,Oo,n),new jb(t)}function jR(t=ac()){t=He(t);const e=Gn(t,cr);return e.isInitialized()?e.getImmediate():qb(t)}function qb(t,e={}){const n=Gn(t,cr);if(n.isInitialized()){const i=n.getImmediate();if(ti(e,n.getOptions()))return i;throw nt.create("already-initialized")}return n.initialize({options:e})}function Yb(t,e,n,s){t=He(t),Vb(Vf,Vs[t.app.options.appId],e,n,s).catch(i=>qe.error(i))}const pu="@firebase/analytics",gu="0.10.0";function Qb(){At(new mt(cr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Kb(s,i,n)},"PUBLIC")),At(new mt("analytics-internal",t,"PRIVATE")),at(pu,gu),at(pu,gu,"esm2017");function t(e){try{const n=e.getProvider(cr).getImmediate();return{logEvent:(s,i,r)=>Yb(n,s,i,r)}}catch(n){throw nt.create("interop-component-reg-failed",{reason:n})}}}Qb();function pc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Hf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xb=Hf,Wf=new jn("auth","Firebase",Hf());/**
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
 */const lr=new Gr("@firebase/auth");function Jb(t,...e){lr.logLevel<=pe.WARN&&lr.warn(`Auth (${Cs}): ${t}`,...e)}function ji(t,...e){lr.logLevel<=pe.ERROR&&lr.error(`Auth (${Cs}): ${t}`,...e)}/**
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
 */function Pt(t,...e){throw gc(t,...e)}function Tt(t,...e){return gc(t,...e)}function jf(t,e,n){const s=Object.assign(Object.assign({},Xb()),{[e]:n});return new jn("auth","Firebase",s).create(e,{appName:t.name})}function Zb(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Pt(t,"argument-error"),jf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Wf.create(t,...e)}function Y(t,e,...n){if(!t)throw gc(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ji(e),new Error(e)}function Wt(t,e){t||Ft(e)}/**
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
 */function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eE(){return _u()==="http:"||_u()==="https:"}function _u(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eE()||cf()||"connection"in navigator)?navigator.onLine:!0}function nE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=rc()||lf()}get(){return tE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _c(t,e){Wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iE=new _i(3e4,6e4);function mc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ts(t,e,n,s,i={}){return zf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Is(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Gf.fetch()(Kf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function zf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},sE),e);try{const i=new oE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw jf(t,u,l);Pt(t,u)}}catch(i){if(i instanceof Ot)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function rE(t,e,n,s,i={}){const r=await Ts(t,e,n,s,i);return"mfaPendingCredential"in r&&Pt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Kf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?_c(t.config,i):`${t.config.apiScheme}://${i}`}class oE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Tt(this.auth,"network-request-failed")),iE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Tt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function aE(t,e){return Ts(t,"POST","/v1/accounts:delete",e)}async function cE(t,e){return Ts(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lE(t,e=!1){const n=He(t),s=await n.getIdToken(e),i=yc(s);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Hs(ko(i.auth_time)),issuedAtTime:Hs(ko(i.iat)),expirationTime:Hs(ko(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ko(t){return Number(t)*1e3}function yc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ji("JWT malformed, contained fewer than 3 sections"),null;try{const i=ir(n);return i?JSON.parse(i):(ji("Failed to decode base64 JWT payload"),null)}catch(i){return ji("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uE(t){const e=yc(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ot&&hE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function hE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ur(t){var e;const n=t.auth,s=await t.getIdToken(),i=await si(t,cE(n,{idToken:s}));Y(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?gE(r.providerUserInfo):[],a=pE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function fE(t){const e=He(t);await ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function gE(t){return t.map(e=>{var{providerId:n}=e,s=pc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function _E(t,e){const n=await zf(t,{},async()=>{const s=Is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Kf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mE(t,e){return Ts(t,"POST","/v2/accounts:revokeToken",mc(t,e))}/**
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
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await _E(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ii;return s&&(Y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function Kt(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lE(this,e)}reload(){return fE(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ur(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await si(this,aE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:X,isAnonymous:oe,providerData:B,stsTokenManager:ye}=n;Y($&&ye,e,"internal-error");const Se=ii.fromJSON(this.name,ye);Y(typeof $=="string",e,"internal-error"),Kt(h,e.name),Kt(d,e.name),Y(typeof X=="boolean",e,"internal-error"),Y(typeof oe=="boolean",e,"internal-error"),Kt(g,e.name),Kt(m,e.name),Kt(y,e.name),Kt(R,e.name),Kt(x,e.name),Kt(U,e.name);const Re=new xn({uid:$,auth:e,email:d,emailVerified:X,displayName:h,isAnonymous:oe,photoURL:m,phoneNumber:g,tenantId:y,stsTokenManager:Se,createdAt:x,lastLoginAt:U});return B&&Array.isArray(B)&&(Re.providerData=B.map(le=>Object.assign({},le))),R&&(Re._redirectEventId=R),Re}static async _fromIdTokenResponse(e,n,s=!1){const i=new ii;i.updateFromServerResponse(n);const r=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ur(r),r}}/**
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
 */const mu=new Map;function $t(t){Wt(t instanceof Function,"Expected a class definition");let e=mu.get(t);return e?(Wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mu.set(t,e),e)}/**
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
 */class Yf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yf.type="NONE";const yu=Yf;/**
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
 */function Gi(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Gi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Gi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new as($t(yu),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||$t(yu);const o=Gi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=xn._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new as(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new as(r,e,s))}}/**
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
 */function vu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ep(e))return"Blackberry";if(tp(e))return"Webos";if(vc(e))return"Safari";if((e.includes("chrome/")||Xf(e))&&!e.includes("edge/"))return"Chrome";if(Zf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qf(t=Ve()){return/firefox\//i.test(t)}function vc(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xf(t=Ve()){return/crios\//i.test(t)}function Jf(t=Ve()){return/iemobile/i.test(t)}function Zf(t=Ve()){return/android/i.test(t)}function ep(t=Ve()){return/blackberry/i.test(t)}function tp(t=Ve()){return/webos/i.test(t)}function qr(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yE(t=Ve()){var e;return qr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vE(){return Jy()&&document.documentMode===10}function np(t=Ve()){return qr(t)||Zf(t)||tp(t)||ep(t)||/windows phone/i.test(t)||Jf(t)}function wE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function sp(t,e=[]){let n;switch(t){case"Browser":n=vu(Ve());break;case"Worker":n=`${vu(Ve())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${s}`}/**
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
 */class bE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function EE(t,e={}){return Ts(t,"GET","/v2/passwordPolicy",mc(t,e))}/**
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
 */const IE=6;class CE{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:IE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class TE{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wu(this),this.idTokenSubscription=new wu(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ur(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EE(this),n=new CE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await mE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return He(t)}class wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ov(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function SE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Tt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",SE().appendChild(s)})}function AE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function PE(t,e){const n=Gn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ti(r,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function NE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function OE(t,e,n){const s=Yr(t);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=ip(e),{host:o,port:a}=kE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xE()}function ip(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kE(t){const e=ip(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:bu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:bu(o)}}}function bu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}/**
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
 */async function cs(t,e){return rE(t,"POST","/v1/accounts:signInWithIdp",mc(t,e))}/**
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
 */const ME="http://localhost";class $n extends rp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=pc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new $n(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,cs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:ME,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Is(n)}return e}}/**
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
 */class wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zt extends mi{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
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
 */class en extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return en.credential(n,s)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class tn extends mi{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends mi{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await xn._fromIdTokenResponse(e,s,i),o=Eu(s);return new ps({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Eu(s);return new ps({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Eu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hr extends Ot{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new hr(e,n,s,i)}}function op(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(t,r,e,s):r})}async function DE(t,e,n=!1){const s=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",s)}/**
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
 */async function LE(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await si(t,op(s,i,e,t),n);Y(r.idToken,s,"internal-error");const o=yc(r.idToken);Y(o,s,"internal-error");const{sub:a}=o;return Y(t.uid===a,s,"user-mismatch"),ps._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Pt(s,"user-mismatch"),r}}/**
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
 */async function FE(t,e,n=!1){const s="signIn",i=await op(t,s,e),r=await ps._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function $E(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function UE(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function GR(t){return He(t).signOut()}const dr="__sak";/**
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
 */class ap{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dr,"1"),this.storage.removeItem(dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function BE(){const t=Ve();return vc(t)||qr(t)}const VE=1e3,HE=10;class cp extends ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BE()&&wE(),this.fallbackToPolling=np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);vE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,HE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},VE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cp.type="LOCAL";const WE=cp;/**
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
 */class lp extends ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lp.type="SESSION";const up=lp;/**
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
 */function jE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Qr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await jE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qr.receivers=[];/**
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
 */function bc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class GE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=bc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function St(){return window}function zE(t){St().location.href=t}/**
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
 */function hp(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function KE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YE(){return hp()?self:null}/**
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
 */const dp="firebaseLocalStorageDb",QE=1,fr="firebaseLocalStorage",fp="fbase_key";class yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xr(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function XE(){const t=indexedDB.deleteDatabase(dp);return new yi(t).toPromise()}function ga(){const t=indexedDB.open(dp,QE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fr,{keyPath:fp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fr)?e(s):(s.close(),await XE(),e(await ga()))})})}async function Iu(t,e,n){const s=Xr(t,!0).put({[fp]:e,value:n});return new yi(s).toPromise()}async function JE(t,e){const n=Xr(t,!1).get(e),s=await new yi(n).toPromise();return s===void 0?null:s.value}function Cu(t,e){const n=Xr(t,!0).delete(e);return new yi(n).toPromise()}const ZE=800,eI=3;class pp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ga(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>eI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qr._getInstance(YE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KE(),!this.activeServiceWorker)return;this.sender=new GE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ga();return await Iu(e,dr,"1"),await Cu(e,dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Iu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>JE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Xr(i,!1).getAll();return new yi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pp.type="LOCAL";const tI=pp;new _i(3e4,6e4);/**
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
 */function gp(t,e){return e?$t(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ec extends rp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nI(t){return FE(t.auth,new Ec(t),t.bypassAuthState)}function sI(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),LE(n,new Ec(t),t.bypassAuthState)}async function iI(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),DE(n,new Ec(t),t.bypassAuthState)}/**
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
 */class _p{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nI;case"linkViaPopup":case"linkViaRedirect":return iI;case"reauthViaPopup":case"reauthViaRedirect":return sI;default:Pt(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rI=new _i(2e3,1e4);async function zR(t,e,n){const s=Yr(t);Zb(t,e,wc);const i=gp(s,n);return new An(s,"signInViaPopup",e,i).executeNotNull()}class An extends _p{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rI.get())};e()}}An.currentPopupAction=null;/**
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
 */const oI="pendingRedirect",zi=new Map;class aI extends _p{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const s=await cI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cI(t,e){const n=hI(e),s=uI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function lI(t,e){zi.set(t._key(),e)}function uI(t){return $t(t._redirectPersistence)}function hI(t){return Gi(oI,t.config.apiKey,t.name)}async function dI(t,e,n=!1){const s=Yr(t),i=gp(s,e),o=await new aI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const fI=10*60*1e3;class pI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!mp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tu(e))}saveEventToCache(e){this.cachedEventUids.add(Tu(e)),this.lastProcessedEventTime=Date.now()}}function Tu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mp(t);default:return!1}}/**
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
 */async function _I(t,e={}){return Ts(t,"GET","/v1/projects",e)}/**
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
 */const mI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yI=/^https?/;async function vI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _I(t);for(const n of e)try{if(wI(n))return}catch{}Pt(t,"unauthorized-domain")}function wI(t){const e=pa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!yI.test(n))return!1;if(mI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const bI=new _i(3e4,6e4);function Su(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EI(t){return new Promise((e,n)=>{var s,i,r;function o(){Su(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Su(),n(Tt(t,"network-request-failed"))},timeout:bI.get()})}if(!((i=(s=St().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=St().gapi)===null||r===void 0)&&r.load)o();else{const a=AE("iframefcb");return St()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},RE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ki=null,e})}let Ki=null;function II(t){return Ki=Ki||EI(t),Ki}/**
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
 */const CI=new _i(5e3,15e3),TI="__/auth/iframe",SI="emulator/auth/iframe",RI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PI(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_c(e,SI):`https://${t.config.authDomain}/${TI}`,s={apiKey:e.apiKey,appName:t.name,v:Cs},i=AI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Is(s).slice(1)}`}async function NI(t){const e=await II(t),n=St().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:PI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=St().setTimeout(()=>{r(o)},CI.get());function c(){St().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kI=500,xI=600,MI="_blank",DI="http://localhost";class Ru{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LI(t,e,n,s=kI,i=xI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},OI),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Ve().toLowerCase();n&&(a=Xf(l)?MI:n),Qf(l)&&(e=e||DI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(yE(l)&&a!=="_self")return FI(e||"",a),new Ru(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new Ru(h)}function FI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const $I="__/auth/handler",UI="emulator/auth/handler",BI=encodeURIComponent("fac");async function Au(t,e,n,s,i,r){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Cs,eventId:i};if(e instanceof wc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ra(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${BI}=${encodeURIComponent(c)}`:"";return`${VI(t)}?${Is(a).slice(1)}${l}`}function VI({config:t}){return t.emulator?_c(t,UI):`https://${t.authDomain}/${$I}`}/**
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
 */const xo="webStorageSupport";class HI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=up,this._completeRedirectFn=dI,this._overrideRedirectResult=lI}async _openPopup(e,n,s,i){var r;Wt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Au(e,n,s,pa(),i);return LI(e,o,bc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Au(e,n,s,pa(),i);return zE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Wt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await NI(e),s=new pI(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xo,{type:xo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[xo];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return np()||vc()||qr()}}const WI=HI;var Pu="@firebase/auth",Nu="1.5.1";/**
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
 */class jI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zI(t){At(new mt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sp(t)},l=new TE(s,i,r,c);return NE(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),At(new mt("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(s=>new jI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Pu,Nu,GI(t)),at(Pu,Nu,"esm2017")}/**
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
 */const KI=5*60,qI=af("authIdTokenMaxAge")||KI;let Ou=null;const YI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qI)return;const i=n==null?void 0:n.token;Ou!==i&&(Ou=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KR(t=ac()){const e=Gn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PE(t,{popupRedirectResolver:WI,persistence:[tI,WE,up]}),s=af("authTokenSyncURL");if(s){const r=YI(s);UE(n,r,()=>r(n.currentUser)),$E(n,o=>r(o))}const i=rf("auth");return i&&OE(n,`http://${i}`),n}zI("Browser");var ku={};const xu="@firebase/database",Mu="1.0.2";/**
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
 */let yp="";function QI(t){yp=t}/**
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
 */class XI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ei(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class JI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const vp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new XI(e)}}catch{}return new JI},Pn=vp("localStorage"),_a=vp("sessionStorage");/**
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
 */const ls=new Gr("@firebase/database"),ZI=function(){let t=1;return function(){return t++}}(),wp=function(t){const e=lv(t),n=new rv;n.update(e);const s=n.digest();return sc.encodeByteArray(s)},vi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=vi.apply(null,s):typeof s=="object"?e+=Ae(s):e+=s,e+=" "}return e};let Mn=null,Du=!0;const eC=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ls.logLevel=pe.VERBOSE,Mn=ls.log.bind(ls),e&&_a.set("logging_enabled",!0)):typeof t=="function"?Mn=t:(Mn=null,_a.remove("logging_enabled"))},$e=function(...t){if(Du===!0&&(Du=!1,Mn===null&&_a.get("logging_enabled")===!0&&eC(!0)),Mn){const e=vi.apply(null,t);Mn(e)}},wi=function(t){return function(...e){$e(t,...e)}},ma=function(...t){const e="FIREBASE INTERNAL ERROR: "+vi(...t);ls.error(e)},jt=function(...t){const e=`FIREBASE FATAL ERROR: ${vi(...t)}`;throw ls.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+vi(...t);ls.warn(e)},tC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ic=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},nC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_n="[MIN_NAME]",mn="[MAX_NAME]",Ss=function(t,e){if(t===e)return 0;if(t===_n||e===mn)return-1;if(e===_n||t===mn)return 1;{const n=Lu(t),s=Lu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},sC=function(t,e){return t===e?0:t<e?-1:1},Os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},Cc=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ae(e[s]),n+=":",n+=Cc(t[e[s]]);return n+="}",n},bp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ep=function(t){T(!Ic(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},iC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const aC=new RegExp("^-?(0*)\\d{1,10}$"),cC=-2147483648,lC=2147483647,Lu=function(t){if(aC.test(t)){const e=Number(t);if(e>=cC&&e<=lC)return e}return null},Rs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},uC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class us{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}us.OWNER="owner";/**
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
 */const Tc="5",Ip="v",Cp="s",Tp="r",Sp="f",Rp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ap="ls",Pp="p",ya="ac",Np="websocket",Op="long_polling";/**
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
 */class kp{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xp(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Np)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Op)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fC(t)&&(n.ns=t.namespace);const i=[];return Je(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class pC{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jy(this.counters_)}}/**
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
 */const Mo={},Do={};function Sc(t){const e=t.toString();return Mo[e]||(Mo[e]=new pC),Mo[e]}function gC(t,e){const n=t.toString();return Do[n]||(Do[n]=e()),Do[n]}/**
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
 */class _C{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Rs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fu="start",mC="close",yC="pLPCommand",vC="pRTLPCB",Mp="id",Dp="pw",Lp="ser",wC="cb",bC="seg",EC="ts",IC="d",CC="dframe",Fp=1870,$p=30,TC=Fp-$p,SC=25e3,RC=3e4;class es{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wi(e),this.stats_=Sc(n),this.urlFn=c=>(this.appCheckToken&&(c[ya]=this.appCheckToken),xp(n,Op,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _C(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RC)),nC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rc((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fu)this.id=a,this.password=c;else if(o===mC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Fu]="t",s[Lp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[wC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ip]=Tc,this.transportSessionId&&(s[Cp]=this.transportSessionId),this.lastSessionId&&(s[Ap]=this.lastSessionId),this.applicationId&&(s[Pp]=this.applicationId),this.appCheckToken&&(s[ya]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rp.test(location.hostname)&&(s[Tp]=Sp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iC()&&!rC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=nf(n),i=bp(s,TC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[CC]="t",s[Mp]=e,s[Dp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ZI(),window[yC+this.uniqueCallbackIdentifier]=e,window[vC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$e("frame writing exception"),a.stack&&$e(a.stack),$e(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mp]=this.myID,e[Dp]=this.myPW,e[Lp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$p+s.length<=Fp;){const o=this.pendingSegs.shift();s=s+"&"+bC+i+"="+o.seg+"&"+EC+i+"="+o.ts+"&"+IC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(SC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const AC=16384,PC=45e3;let pr=null;typeof MozWebSocket<"u"?pr=MozWebSocket:typeof WebSocket<"u"&&(pr=WebSocket);class ht{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wi(this.connId),this.stats_=Sc(n),this.connURL=ht.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ip]=Tc,typeof location<"u"&&location.hostname&&Rp.test(location.hostname)&&(o[Tp]=Sp),n&&(o[Cp]=n),s&&(o[Ap]=s),i&&(o[ya]=i),r&&(o[Pp]=r),xp(e,Np,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let s;uf(),this.mySock=new pr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pr!==null&&!ht.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ei(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=bp(n,AC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(PC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
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
 */class ri{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[es,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ht&&ht.isAvailable();let s=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ht];else{const i=this.transports_=[];for(const r of ri.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ri.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ri.globalTransportInitialized_=!1;/**
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
 */const NC=6e4,OC=5e3,kC=10*1024,xC=100*1024,Lo="t",$u="d",MC="s",Uu="r",DC="e",Bu="o",Vu="a",Hu="n",Wu="p",LC="h";class FC{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wi("c:"+this.id+":"),this.transportManager_=new ri(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lo in e){const n=e[Lo];n===Vu?this.upgradeIfSecondaryHealthy_():n===Uu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Os("t",e),s=Os("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Os("t",e),s=Os("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Os(Lo,e);if($u in e){const s=e[$u];if(n===LC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Hu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===MC?this.onConnectionShutdown_(s):n===Uu?this.onReset_(s):n===DC?ma("Server Error: "+s):n===Bu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ma("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Tc!==s&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(OC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Up{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Bp{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class gr extends Bp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ju=32,Gu=768;class ge{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new ge("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yn(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ge(t.pieces_,e)}function Vp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $C(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Wp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ge(e,0)}function Pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ge)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ge(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return je(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ac(t,e){if(yn(t)!==yn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ft(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(yn(t)>yn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class UC{constructor(e,n){this.errorPrefix_=n,this.parts_=Hp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=jr(this.parts_[s]);jp(this)}}function BC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jr(e),jp(t)}function VC(t){const e=t.parts_.pop();t.byteLength_-=jr(e),t.parts_.length>0&&(t.byteLength_-=1)}function jp(t){if(t.byteLength_>Gu)throw new Error(t.errorPrefix_+"has a key path longer than "+Gu+" bytes ("+t.byteLength_+").");if(t.parts_.length>ju)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ju+") or object contains a cycle "+Cn(t))}function Cn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Pc extends Bp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Pc}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ks=1e3,HC=60*5*1e3,zu=30*1e3,WC=1.3,jC=3e4,GC="server_kill",Ku=3;class Vt extends Up{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Vt.nextPersistentConnectionId_++,this.log_=wi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ks,this.maxReconnectDelay_=HC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!uf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ae(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Hr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Vt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const s=fs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ma("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jC&&(this.reconnectDelay_=ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new FC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ye(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(GC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ye(h),c())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ra(this.interruptReasons_)&&(this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Cc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ge(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){$e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ku&&(this.reconnectDelay_=zu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ku&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yp.replace(/\./g,"-")]=1,rc()?e["framework.cordova"]=1:lf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gr.getInstance().currentlyOnline();return ra(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
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
 */class Jr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(_n,e),i=new te(_n,n);return this.compare(s,i)!==0}minPost(){return te.MIN}}/**
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
 */let Mi;class Gp extends Jr{static get __EMPTY_NODE(){return Mi}static set __EMPTY_NODE(e){Mi=e}compare(e,n){return Ss(e.name,n.name)}isDefinedOn(e){throw Es("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(mn,Mi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Mi)}toString(){return".key"}}const Ht=new Gp;/**
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
 */class Di{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??xe.RED,this.left=i??Ke.EMPTY_NODE,this.right=r??Ke.EMPTY_NODE}copy(e,n,s,i,r){return new xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class zC{copy(e,n,s,i,r){return this}insert(e,n,s){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Di(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Di(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Di(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Di(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new zC;/**
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
 */function KC(t,e){return Ss(t.name,e.name)}function Nc(t,e){return Ss(t,e)}/**
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
 */let va;function qC(t){va=t}const zp=function(t){return typeof t=="number"?"number:"+Ep(t):"string:"+t},Kp=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else T(t===va||t.isEmpty(),"priority of unexpected type.");T(t===va||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let qu;class ke{constructor(e,n=ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Kp(this.priorityNode_)}static set __childrenNodeConstructor(e){qu=e}static get __childrenNodeConstructor(){return qu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:Z(e)===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||yn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ep(this.value_):e+=this.value_,this.lazyHash_=wp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ke.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ke.VALUE_TYPE_ORDER.indexOf(n),r=ke.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qp,Yp;function YC(t){qp=t}function QC(t){Yp=t}class XC extends Jr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ss(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(mn,new ke("[PRIORITY-POST]",Yp))}makePost(e,n){const s=qp(e);return new te(n,new ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new XC;/**
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
 */const JC=Math.log(2);class ZC{constructor(e){const n=r=>parseInt(Math.log(r)/JC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _r=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new xe(d,h.node,xe.BLACK,null,null);{const g=parseInt(u/2,10)+c,m=i(c,g),y=i(g+1,l);return h=t[g],d=n?n(h):h,new xe(d,h.node,xe.BLACK,m,y)}},r=function(c){let l=null,u=null,h=t.length;const d=function(m,y){const R=h-m,x=h;h-=m;const U=i(R+1,x),$=t[R],X=n?n($):$;g(new xe(X,$.node,y,null,U))},g=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),R=Math.pow(2,c.count-(m+1));y?d(R,xe.BLACK):(d(R,xe.BLACK),d(R,xe.RED))}return u},o=new ZC(t.length),a=r(o);return new Ke(s||e,a)};/**
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
 */let Fo;const Xn={};class Ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Xn&&Te,"ChildrenNode.ts has not been loaded"),Fo=Fo||new Ut({".priority":Xn},{".priority":Te}),Fo}get(e){const n=fs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=_r(s,e.getCompare()):a=Xn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Ut(u,l)}addToIndexes(e,n){const s=rr(this.indexes_,(i,r)=>{const o=fs(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===Xn)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(te.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),_r(a,o.getCompare())}else return Xn;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new te(e.name,a))),c.insert(e,e.node)}});return new Ut(s,this.indexSet_)}removeFromIndexes(e,n){const s=rr(this.indexes_,i=>{if(i===Xn)return i;{const r=n.get(e.name);return r?i.remove(new te(e.name,r)):i}});return new Ut(s,this.indexSet_)}}/**
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
 */let xs;class z{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Kp(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xs||(xs=new z(new Ke(Nc),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xs}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xs:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?xs:this.priorityNode_;return new z(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{T(Z(e)!==".priority"||yn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),s++,r&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zp(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bi?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),i=n.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eT extends z{constructor(){super(new Ke(Nc),z.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const bi=new eT;Object.defineProperties(te,{MIN:{value:new te(_n,z.EMPTY_NODE)},MAX:{value:new te(mn,bi)}});Gp.__EMPTY_NODE=z.EMPTY_NODE;ke.__childrenNodeConstructor=z;qC(bi);QC(bi);/**
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
 */const tT=!0;function Me(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ke(n,Me(e))}if(!(t instanceof Array)&&tT){const n=[];let s=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Me(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new te(o,c)))}}),n.length===0)return z.EMPTY_NODE;const r=_r(n,KC,o=>o.name,Nc);if(s){const o=_r(n,Te.getCompare());return new z(r,Me(e),new Ut({".priority":o},{".priority":Te}))}else return new z(r,Me(e),Ut.Default)}else{let n=z.EMPTY_NODE;return Je(t,(s,i)=>{if(kt(t,s)&&s.substring(0,1)!=="."){const r=Me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Me(e))}}YC(Me);/**
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
 */class Oc extends Jr{constructor(e){super(),this.indexPath_=e,T(!ee(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ss(e.name,n.name):r}makePost(e,n){const s=Me(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,bi);return new te(mn,e)}toString(){return Hp(this.indexPath_,0).join("/")}}/**
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
 */class nT extends Jr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ss(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=Me(e);return new te(n,s)}toString(){return".value"}}const Qp=new nT;/**
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
 */function Xp(t){return{type:"value",snapshotNode:t}}function gs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function oi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ai(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class kc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(oi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gs(n,s)):o.trackChildChange(ai(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,r)=>{n.hasChild(i)||s.trackChildChange(oi(i,r))}),n.isLeafNode()||n.forEachChild(Te,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ai(i,r,o))}else s.trackChildChange(gs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ci{constructor(e){this.indexedFilter_=new kc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ci.getStartPost_(e),this.endPost_=ci.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new te(n,s))||(s=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const r=this;return n.forEachChild(Te,(o,a)=>{r.matches(new te(o,a))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class iT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ci(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new te(n,s))||(s=z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const c=new te(n,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,c);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ai(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(oi(n,h));const y=a.updateImmediateChild(n,z.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(gs(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(oi(l.name,l.node)),r.trackChildChange(gs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(l.name,z.EMPTY_NODE)):e}}/**
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
 */class xc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_n}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new xc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rT(t){return t.loadsAllData()?new kc(t.getIndex()):t.hasLimit()?new iT(t):new ci(t)}function oT(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function aT(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function cT(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function wa(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function lT(t,e,n){let s;return t.index_===Ht||n?s=wa(t,e,n):s=wa(t,e,_n),s.endBeforeSet_=!0,s}function Jp(t,e){const n=t.copy();return n.index_=e,n}function Yu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===Qp?n="$value":t.index_===Ht?n="$key":(T(t.index_ instanceof Oc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
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
 */class mr extends Up{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=wi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=mr.getListenId_(e,s),a={};this.listens_[o]=a;const c=Yu(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),fs(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=mr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Yu(e._queryParams),s=e._path.toString(),i=new Hr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Is(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ei(a.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class uT{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function yr(){return{value:null,children:new Map}}function Zp(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,yr());const i=t.children.get(s);e=_e(e),Zp(i,e,n)}}function ba(t,e,n){t.value!==null?n(e,t.value):hT(t,(s,i)=>{const r=new ge(e.toString()+"/"+s);ba(i,r,n)})}function hT(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class dT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Xu=10*1e3,fT=30*1e3,pT=5*60*1e3;class gT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dT(e);const s=Xu+(fT-Xu)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(i,r)=>{r>0&&kt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*pT))}}/**
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
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function eg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Dc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class vr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=pt.ACK_USER_WRITE,this.source=eg()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ge(e));return new vr(ce(),n,this.revert)}}else return T(Z(this.path)===e,"operationForChild called for unrelated child."),new vr(_e(this.path),this.affectedTree,this.revert)}}/**
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
 */class li{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new li(this.source,ce()):new li(this.source,_e(this.path))}}/**
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
 */class Un{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=pt.OVERWRITE}operationForChild(e){return ee(this.path)?new Un(this.source,ce(),this.snap.getImmediateChild(e)):new Un(this.source,_e(this.path),this.snap)}}/**
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
 */class ui{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=pt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new ge(e));return n.isEmpty()?null:n.value?new Un(this.source,ce(),n.value):new ui(this.source,ce(),n)}else return T(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class _T{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mT(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(sT(o.childName,o.snapshotNode))}),Ms(t,i,"child_removed",e,s,n),Ms(t,i,"child_added",e,s,n),Ms(t,i,"child_moved",r,s,n),Ms(t,i,"child_changed",e,s,n),Ms(t,i,"value",e,s,n),i}function Ms(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>vT(t,a,c)),o.forEach(a=>{const c=yT(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function yT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vT(t,e,n){if(e.childName==null||n.childName==null)throw Es("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Zr(t,e){return{eventCache:t,serverCache:e}}function js(t,e,n,s){return Zr(new vn(e,n,s),t.serverCache)}function tg(t,e,n,s){return Zr(t.eventCache,new vn(e,n,s))}function wr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let $o;const wT=()=>($o||($o=new Ke(sC)),$o);class we{constructor(e,n=wT()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Je(e,(s,i)=>{n=n.set(new ge(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ee(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(_e(e),n);return r!=null?{path:Pe(new ge(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new we(null)}}set(e,n){if(ee(e))return new we(n,this.children);{const s=Z(e),r=(this.children.get(s)||new we(null)).set(_e(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(_e(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(ee(e))return n;{const s=Z(e),r=(this.children.get(s)||new we(null)).setTree(_e(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ee(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),Pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(ee(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(_e(e),Pe(n,i),s):new we(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new we(null))}}function Gs(t,e,n){if(ee(e))return new _t(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new _t(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new _t(r)}}}function Ju(t,e,n){let s=t;return Je(n,(i,r)=>{s=Gs(s,Pe(e,i),r)}),s}function Zu(t,e){if(ee(e))return _t.empty();{const n=t.writeTree_.setTree(e,new we(null));return new _t(n)}}function Ea(t,e){return zn(t,e)!=null}function zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function eh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,i)=>{e.push(new te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new te(s,i.value))}),e}function un(t,e){if(ee(e))return t;{const n=zn(t,e);return n!=null?new _t(new we(n)):new _t(t.writeTree_.subtree(e))}}function Ia(t){return t.writeTree_.isEmpty()}function _s(t,e){return ng(ce(),t.writeTree_,e)}function ng(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ng(Pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Pe(t,".priority"),s)),n}}/**
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
 */function eo(t,e){return og(e,t)}function bT(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Gs(t.visibleWrites,e,n)),t.lastWriteId=s}function ET(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function IT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&CT(a,s.path)?i=!1:ft(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return TT(t),!0;if(s.snap)t.visibleWrites=Zu(t.visibleWrites,s.path);else{const a=s.children;Je(a,c=>{t.visibleWrites=Zu(t.visibleWrites,Pe(s.path,c))})}return!0}else return!1}function CT(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(Pe(t.path,n),e))return!0;return!1}function TT(t){t.visibleWrites=sg(t.allWrites,ST,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ST(t){return t.visible}function sg(t,e,n){let s=_t.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ft(n,o)?(a=je(n,o),s=Gs(s,a,r.snap)):ft(o,n)&&(a=je(o,n),s=Gs(s,ce(),r.snap.getChild(a)));else if(r.children){if(ft(n,o))a=je(n,o),s=Ju(s,a,r.children);else if(ft(o,n))if(a=je(o,n),ee(a))s=Ju(s,ce(),r.children);else{const c=fs(r.children,Z(a));if(c){const l=c.getChild(_e(a));s=Gs(s,ce(),l)}}}else throw Es("WriteRecord should have .snap or .children")}}return s}function ig(t,e,n,s,i){if(!s&&!i){const r=zn(t.visibleWrites,e);if(r!=null)return r;{const o=un(t.visibleWrites,e);if(Ia(o))return n;if(n==null&&!Ea(o,ce()))return null;{const a=n||z.EMPTY_NODE;return _s(o,a)}}}else{const r=un(t.visibleWrites,e);if(!i&&Ia(r))return n;if(!i&&n==null&&!Ea(r,ce()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(ft(l.path,e)||ft(e,l.path))},a=sg(t.allWrites,o,e),c=n||z.EMPTY_NODE;return _s(a,c)}}}function RT(t,e,n){let s=z.EMPTY_NODE;const i=zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=un(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const c=_s(un(r,new ge(o)),a);s=s.updateImmediateChild(o,c)}),eh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=un(t.visibleWrites,e);return eh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function AT(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Pe(e,n);if(Ea(t.visibleWrites,r))return null;{const o=un(t.visibleWrites,r);return Ia(o)?i.getChild(n):_s(o,i.getChild(n))}}function PT(t,e,n,s){const i=Pe(e,n),r=zn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=un(t.visibleWrites,i);return _s(o,s.getNode().getImmediateChild(n))}else return null}function NT(t,e){return zn(t.visibleWrites,e)}function OT(t,e,n,s,i,r,o){let a;const c=un(t.visibleWrites,e),l=zn(c,ce());if(l!=null)a=l;else if(n!=null)a=_s(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function kT(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function br(t,e,n,s){return ig(t.writeTree,t.treePath,e,n,s)}function Lc(t,e){return RT(t.writeTree,t.treePath,e)}function th(t,e,n,s){return AT(t.writeTree,t.treePath,e,n,s)}function Er(t,e){return NT(t.writeTree,Pe(t.treePath,e))}function xT(t,e,n,s,i,r){return OT(t.writeTree,t.treePath,e,n,s,i,r)}function Fc(t,e,n){return PT(t.writeTree,t.treePath,e,n)}function rg(t,e){return og(Pe(t.treePath,e),t.writeTree)}function og(t,e){return{treePath:t,writeTree:e}}/**
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
 */class MT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ai(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,oi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,gs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ai(s,e.snapshotNode,i.oldSnap));else throw Es("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class DT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ag=new DT;class $c{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bn(this.viewCache_),r=xT(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function LT(t){return{filter:t}}function FT(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $T(t,e,n,s,i){const r=new MT;let o,a;if(n.type===pt.OVERWRITE){const l=n;l.source.fromUser?o=Ca(t,e,l.path,l.snap,s,i,r):(T(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ee(l.path),o=Ir(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===pt.MERGE){const l=n;l.source.fromUser?o=BT(t,e,l.path,l.children,s,i,r):(T(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ta(t,e,l.path,l.children,s,i,a,r))}else if(n.type===pt.ACK_USER_WRITE){const l=n;l.revert?o=WT(t,e,l.path,s,i,r):o=VT(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===pt.LISTEN_COMPLETE)o=HT(t,e,n.path,s,r);else throw Es("Unknown operation type: "+n.type);const c=r.getChanges();return UT(e,o,c),{viewCache:o,changes:c}}function UT(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Xp(wr(e)))}}function cg(t,e,n,s,i,r){const o=e.eventCache;if(Er(s,n)!=null)return e;{let a,c;if(ee(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Bn(e),u=l instanceof z?l:z.EMPTY_NODE,h=Lc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=br(s,Bn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=Z(n);if(l===".priority"){T(yn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=th(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=_e(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=th(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Fc(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return js(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Ir(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),g,null)}else{const g=Z(n);if(!c.isCompleteForPath(n)&&yn(n)>1)return e;const m=_e(n),R=c.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?l=u.updatePriority(c.getNode(),R):l=u.updateChild(c.getNode(),g,R,m,ag,null)}const h=tg(e,l,c.isFullyInitialized()||ee(n),u.filtersNodes()),d=new $c(i,h,r);return cg(t,h,n,i,d,a)}function Ca(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new $c(i,e,r);if(ee(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=js(e,l,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=js(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=_e(n),g=a.getNode().getImmediateChild(h);let m;if(ee(d))m=s;else{const y=u.getCompleteChild(h);y!=null?Vp(d)===".priority"&&y.getChild(Wp(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=z.EMPTY_NODE}if(g.equals(m))c=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);c=js(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function nh(t,e){return t.eventCache.isCompleteForChild(e)}function BT(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Pe(n,c);nh(e,Z(u))&&(a=Ca(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Pe(n,c);nh(e,Z(u))||(a=Ca(t,a,u,l,i,r,o))}),a}function sh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ta(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ee(n)?l=s:l=new we(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=sh(t,g,d);c=Ir(t,c,new ge(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),y=sh(t,m,d);c=Ir(t,c,new ge(h),y,i,r,o,a)}}),c}function VT(t,e,n,s,i,r,o){if(Er(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ir(t,e,n,c.getNode().getChild(n),i,r,a,o);if(ee(n)){let l=new we(null);return c.getNode().forEachChild(Ht,(u,h)=>{l=l.set(new ge(u),h)}),Ta(t,e,n,l,i,r,a,o)}else return e}else{let l=new we(null);return s.foreach((u,h)=>{const d=Pe(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Ta(t,e,n,l,i,r,a,o)}}function HT(t,e,n,s,i){const r=e.serverCache,o=tg(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return cg(t,o,n,s,ag,i)}function WT(t,e,n,s,i,r){let o;if(Er(s,n)!=null)return e;{const a=new $c(s,e,i),c=e.eventCache.getNode();let l;if(ee(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=br(s,Bn(e));else{const h=e.serverCache.getNode();T(h instanceof z,"serverChildren would be complete if leaf node"),u=Lc(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=Z(n);let h=Fc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,_e(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,z.EMPTY_NODE,_e(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=br(s,Bn(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Er(s,ce())!=null,js(e,l,o,t.filter.filtersNodes())}}/**
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
 */class jT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new kc(s.getIndex()),r=rT(s);this.processor_=LT(r);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(z.EMPTY_NODE,a.getNode(),null),u=new vn(c,o.isFullyInitialized(),i.filtersNodes()),h=new vn(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zr(h,u),this.eventGenerator_=new _T(this.query_)}get query(){return this.query_}}function GT(t){return t.viewCache_.serverCache.getNode()}function zT(t){return wr(t.viewCache_)}function KT(t,e){const n=Bn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function ih(t){return t.eventRegistrations_.length===0}function qT(t,e){t.eventRegistrations_.push(e)}function rh(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function oh(t,e,n,s){e.type===pt.MERGE&&e.source.queryId!==null&&(T(Bn(t.viewCache_),"We should always have a full cache before handling merges"),T(wr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=$T(t.processor_,i,e,n,s);return FT(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function YT(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(r,o)=>{s.push(gs(r,o))}),n.isFullyInitialized()&&s.push(Xp(n.getNode())),lg(t,s,n.getNode(),e)}function lg(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return mT(t.eventGenerator_,e,n,i)}/**
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
 */let Cr;class ug{constructor(){this.views=new Map}}function QT(t){T(!Cr,"__referenceConstructor has already been defined"),Cr=t}function XT(){return T(Cr,"Reference.ts has not been loaded"),Cr}function JT(t){return t.views.size===0}function Uc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),oh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(oh(o,e,n,s));return r}}function hg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=br(n,i?s:null),c=!1;a?c=!0:s instanceof z?(a=Lc(n,s),c=!1):(a=z.EMPTY_NODE,c=!1);const l=Zr(new vn(a,c,!1),new vn(s,i,!1));return new jT(e,l)}return o}function ZT(t,e,n,s,i,r){const o=hg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),qT(o,n),YT(o,n)}function eS(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=wn(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(rh(l,n,s)),ih(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(rh(c,n,s)),ih(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!wn(t)&&r.push(new(XT())(e._repo,e._path)),{removed:r,events:o}}function dg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hn(t,e){let n=null;for(const s of t.views.values())n=n||KT(s,e);return n}function fg(t,e){if(e._queryParams.loadsAllData())return to(t);{const s=e._queryIdentifier;return t.views.get(s)}}function pg(t,e){return fg(t,e)!=null}function wn(t){return to(t)!=null}function to(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Tr;function tS(t){T(!Tr,"__referenceConstructor has already been defined"),Tr=t}function nS(){return T(Tr,"Reference.ts has not been loaded"),Tr}let sS=1;class ah{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=kT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gg(t,e,n,s,i){return bT(t.pendingWriteTree_,e,n,s,i),i?Ii(t,new Un(eg(),e,n)):[]}function Nn(t,e,n=!1){const s=ET(t.pendingWriteTree_,e);if(IT(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ce(),!0):Je(s.children,o=>{r=r.set(new ge(o),!0)}),Ii(t,new vr(s.path,r,n))}else return[]}function Ei(t,e,n){return Ii(t,new Un(Mc(),e,n))}function iS(t,e,n){const s=we.fromObject(n);return Ii(t,new ui(Mc(),e,s))}function rS(t,e){return Ii(t,new li(Mc(),e))}function oS(t,e,n){const s=Vc(t,n);if(s){const i=Hc(s),r=i.path,o=i.queryId,a=je(r,e),c=new li(Dc(o),a);return Wc(t,r,c)}else return[]}function Sr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||pg(o,e))){const c=eS(o,e,n,s);JT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>wn(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=lS(d);for(let m=0;m<g.length;++m){const y=g[m],R=y.query,x=vg(t,y);t.listenProvider_.startListening(zs(R),hi(t,R),x.hashFn,x.onComplete)}}}!h&&l.length>0&&!s&&(u?t.listenProvider_.stopListening(zs(e),null):l.forEach(d=>{const g=t.queryToTagMap.get(no(d));t.listenProvider_.stopListening(zs(d),g)}))}uS(t,l)}return a}function _g(t,e,n,s){const i=Vc(t,s);if(i!=null){const r=Hc(i),o=r.path,a=r.queryId,c=je(o,e),l=new Un(Dc(a),c,n);return Wc(t,o,l)}else return[]}function aS(t,e,n,s){const i=Vc(t,s);if(i){const r=Hc(i),o=r.path,a=r.queryId,c=je(o,e),l=we.fromObject(n),u=new ui(Dc(a),c,l);return Wc(t,o,u)}else return[]}function Sa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const m=je(d,i);r=r||hn(g,m),o=o||wn(g)});let a=t.syncPointTree_.get(i);a?(o=o||wn(a),r=r||hn(a,ce())):(a=new ug,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const y=hn(m,ce());y&&(r=r.updateImmediateChild(g,y))}));const l=pg(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=no(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=hS();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=eo(t.pendingWriteTree_,i);let h=ZT(a,e,n,u,r,c);if(!l&&!o&&!s){const d=fg(a,e);h=h.concat(dS(t,e,d))}return h}function Bc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=je(o,e),l=hn(a,c);if(l)return l});return ig(i,e,r,n,!0)}function cS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(l,u)=>{const h=je(l,n);s=s||hn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||hn(i,ce()):(i=new ug,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new vn(s,!0,!1):null,a=eo(t.pendingWriteTree_,e._path),c=hg(i,e,a,r?o.getNode():z.EMPTY_NODE,r);return zT(c)}function Ii(t,e){return mg(e,t.syncPointTree_,null,eo(t.pendingWriteTree_,ce()))}function mg(t,e,n,s){if(ee(t.path))return yg(t,e,n,s);{const i=e.get(ce());n==null&&i!=null&&(n=hn(i,ce()));let r=[];const o=Z(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=rg(s,o);r=r.concat(mg(a,c,l,u))}return i&&(r=r.concat(Uc(i,t,s,n))),r}}function yg(t,e,n,s){const i=e.get(ce());n==null&&i!=null&&(n=hn(i,ce()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=rg(s,o),u=t.operationForChild(o);u&&(r=r.concat(yg(u,a,c,l)))}),i&&(r=r.concat(Uc(i,t,s,n))),r}function vg(t,e){const n=e.query,s=hi(t,n);return{hashFn:()=>(GT(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?oS(t,n._path,s):rS(t,n._path);{const r=oC(i,n);return Sr(t,n,null,r)}}}}function hi(t,e){const n=no(e);return t.queryToTagMap.get(n)}function no(t){return t._path.toString()+"$"+t._queryIdentifier}function Vc(t,e){return t.tagToQueryMap.get(e)}function Hc(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ge(t.substr(0,e))}}function Wc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=eo(t.pendingWriteTree_,e);return Uc(s,n,i,null)}function lS(t){return t.fold((e,n,s)=>{if(n&&wn(n))return[to(n)];{let i=[];return n&&(i=dg(n)),Je(s,(r,o)=>{i=i.concat(o)}),i}})}function zs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nS())(t._repo,t._path):t}function uS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=no(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function hS(){return sS++}function dS(t,e,n){const s=e._path,i=hi(t,e),r=vg(t,n),o=t.listenProvider_.startListening(zs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!ee(l)&&u&&wn(u))return[to(u).query];{let d=[];return u&&(d=d.concat(dg(u).map(g=>g.query))),Je(h,(g,m)=>{d=d.concat(m)}),d}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(zs(u),hi(t,u))}}return o}/**
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
 */class jc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jc(n)}node(){return this.node_}}class Gc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new Gc(this.syncTree_,n)}node(){return Bc(this.syncTree_,this.path_)}}const fS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ch=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gS(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},gS=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},_S=function(t,e,n,s){return zc(e,new Gc(n,t),s)},wg=function(t,e,n){return zc(t,new jc(e),n)};function zc(t,e,n){const s=t.getPriority().val(),i=ch(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ch(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ke(a,Me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ke(i))),o.forEachChild(Te,(a,c)=>{const l=zc(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Kc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function qc(t,e){let n=e instanceof ge?e:new ge(e),s=t,i=Z(n);for(;i!==null;){const r=fs(s.node.children,i)||{children:{},childCount:0};s=new Kc(i,s,r),n=_e(n),i=Z(n)}return s}function As(t){return t.node.value}function bg(t,e){t.node.value=e,Ra(t)}function Eg(t){return t.node.childCount>0}function mS(t){return As(t)===void 0&&!Eg(t)}function so(t,e){Je(t.node.children,(n,s)=>{e(new Kc(n,t,s))})}function Ig(t,e,n,s){n&&!s&&e(t),so(t,i=>{Ig(i,e,!0,s)}),n&&s&&e(t)}function yS(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ci(t){return new ge(t.parent===null?t.name:Ci(t.parent)+"/"+t.name)}function Ra(t){t.parent!==null&&vS(t.parent,t.name,t)}function vS(t,e,n){const s=mS(n),i=kt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ra(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ra(t))}/**
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
 */const wS=/[\[\].#$\/\u0000-\u001F\u007F]/,bS=/[\[\].#$\u0000-\u001F\u007F]/,Uo=10*1024*1024,Yc=function(t){return typeof t=="string"&&t.length!==0&&!wS.test(t)},Cg=function(t){return typeof t=="string"&&t.length!==0&&!bS.test(t)},ES=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cg(t)},lh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ic(t)||t&&typeof t=="object"&&kt(t,".sv")},io=function(t,e,n,s){s&&e===void 0||Qc(Wr(t,"value"),e,n)},Qc=function(t,e,n){const s=n instanceof ge?new UC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Cn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Cn(s)+" with contents = "+e.toString());if(Ic(e))throw new Error(t+"contains "+e.toString()+" "+Cn(s));if(typeof e=="string"&&e.length>Uo/3&&jr(e)>Uo)throw new Error(t+"contains a string greater than "+Uo+" utf8 bytes "+Cn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Yc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Cn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);BC(s,o),Qc(t,a,s),VC(s)}),i&&r)throw new Error(t+' contains ".value" child '+Cn(s)+" in addition to actual children.")}},Xc=function(t,e,n,s){if(!(s&&n===void 0)&&!Yc(n))throw new Error(Wr(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Jc=function(t,e,n,s){if(!(s&&n===void 0)&&!Cg(n))throw new Error(Wr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jc(t,e,n,s)},CS=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},TS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ES(n))throw new Error(Wr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class SS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zc(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ac(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Tg(t,e,n){Zc(t,n),Sg(t,s=>Ac(s,e))}function Nt(t,e,n){Zc(t,n),Sg(t,s=>ft(s,e)||ft(e,s))}function Sg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(RS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Mn&&$e("event: "+n.toString()),Rs(s)}}}/**
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
 */const AS="repo_interrupt",PS=25;class NS{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yr(),this.transactionQueueTree_=new Kc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OS(t,e,n){if(t.stats_=Sc(t.repoInfo_),t.forceRestClient_||uC())t.server_=new mr(t.repoInfo_,(s,i,r,o)=>{uh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(s,i,r,o)=>{uh(t,s,i,r,o)},s=>{hh(t,s)},s=>{xS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=gC(t.repoInfo_,()=>new gT(t.stats_,t.server_)),t.infoData_=new uT,t.infoSyncTree_=new ah({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Ei(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),tl(t,"connected",!1),t.serverSyncTree_=new ah({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Nt(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function kS(t){const n=t.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function el(t){return fS({timestamp:kS(t)})}function uh(t,e,n,s,i){t.dataUpdateCount++;const r=new ge(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=rr(n,l=>Me(l));o=aS(t.serverSyncTree_,r,c,i)}else{const c=Me(n);o=_g(t.serverSyncTree_,r,c,i)}else if(s){const c=rr(n,l=>Me(l));o=iS(t.serverSyncTree_,r,c)}else{const c=Me(n);o=Ei(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=oo(t,r)),Nt(t.eventQueue_,a,o)}function hh(t,e){tl(t,"connected",e),e===!1&&LS(t)}function xS(t,e){Je(e,(n,s)=>{tl(t,n,s)})}function tl(t,e,n){const s=new ge("/.info/"+e),i=Me(n);t.infoData_.updateSnapshot(s,i);const r=Ei(t.infoSyncTree_,s,i);Nt(t.eventQueue_,s,r)}function Rg(t){return t.nextWriteId_++}function MS(t,e,n){const s=cS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Me(i).withIndex(e._queryParams.getIndex());Sa(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ei(t.serverSyncTree_,e._path,r);else{const a=hi(t.serverSyncTree_,e);o=_g(t.serverSyncTree_,e._path,r,a)}return Nt(t.eventQueue_,e._path,o),Sr(t.serverSyncTree_,e,n,null,!0),r},i=>(ro(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function DS(t,e,n,s,i){ro(t,"set",{path:e.toString(),value:n,priority:s});const r=el(t),o=Me(n,s),a=Bc(t.serverSyncTree_,e),c=wg(o,a,r),l=Rg(t),u=gg(t.serverSyncTree_,e,c,l,!0);Zc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const m=d==="ok";m||Ye("set at "+e+" failed: "+d);const y=Nn(t.serverSyncTree_,l,!m);Nt(t.eventQueue_,e,y),US(t,i,d,g)});const h=kg(t,e);oo(t,h),Nt(t.eventQueue_,h,[])}function LS(t){ro(t,"onDisconnectEvents");const e=el(t),n=yr();ba(t.onDisconnect_,ce(),(i,r)=>{const o=_S(i,r,t.serverSyncTree_,e);Zp(n,i,o)});let s=[];ba(n,ce(),(i,r)=>{s=s.concat(Ei(t.serverSyncTree_,i,r));const o=kg(t,i);oo(t,o)}),t.onDisconnect_=yr(),Nt(t.eventQueue_,ce(),s)}function FS(t,e,n){let s;Z(e._path)===".info"?s=Sa(t.infoSyncTree_,e,n):s=Sa(t.serverSyncTree_,e,n),Tg(t.eventQueue_,e._path,s)}function dh(t,e,n){let s;Z(e._path)===".info"?s=Sr(t.infoSyncTree_,e,n):s=Sr(t.serverSyncTree_,e,n),Tg(t.eventQueue_,e._path,s)}function $S(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AS)}function ro(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$e(n,...e)}function US(t,e,n,s){e&&Rs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ag(t,e,n){return Bc(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function nl(t,e=t.transactionQueueTree_){if(e||ao(t,e),As(e)){const n=Ng(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&BS(t,Ci(e),n)}else Eg(e)&&so(e,n=>{nl(t,n)})}function BS(t,e,n){const s=n.map(l=>l.currentWriteId),i=Ag(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{ro(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Nn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ao(t,qc(t.transactionQueueTree_,e)),nl(t,t.transactionQueueTree_),Nt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Rs(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ye("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}oo(t,e)}},o)}function oo(t,e){const n=Pg(t,e),s=Ci(n),i=Ng(t,n);return VS(t,i,s),s}function VS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=je(n,c.path);let u=!1,h;if(T(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Nn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=PS)u=!0,h="maxretry",i=i.concat(Nn(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Ag(t,c.path,o);c.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){Qc("transaction failed: Data returned ",g,c.path);let m=Me(g);typeof g=="object"&&g!=null&&kt(g,".priority")||(m=m.updatePriority(d.getPriority()));const R=c.currentWriteId,x=el(t),U=wg(m,d,x);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=U,c.currentWriteId=Rg(t),o.splice(o.indexOf(R),1),i=i.concat(gg(t.serverSyncTree_,c.path,U,c.currentWriteId,c.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat(Nn(t.serverSyncTree_,c.currentWriteId,!0))}Nt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ao(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Rs(s[a]);nl(t,t.transactionQueueTree_)}function Pg(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&As(s)===void 0;)s=qc(s,n),e=_e(e),n=Z(e);return s}function Ng(t,e){const n=[];return Og(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Og(t,e,n){const s=As(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);so(e,i=>{Og(t,i,n)})}function ao(t,e){const n=As(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,bg(e,n.length>0?n:void 0)}so(e,s=>{ao(t,s)})}function kg(t,e){const n=Ci(Pg(t,e)),s=qc(t.transactionQueueTree_,e);return yS(s,i=>{Bo(t,i)}),Bo(t,s),Ig(s,i=>{Bo(t,i)}),n}function Bo(t,e){const n=As(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?bg(e,void 0):n.length=r+1,Nt(t.eventQueue_,Ci(e),i);for(let o=0;o<s.length;o++)Rs(s[o])}}/**
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
 */function HS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function WS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const fh=function(t,e){const n=jS(t),s=n.namespace;n.domain==="firebase.com"&&jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ge(n.pathString)}},jS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=HS(t.substring(u,h)));const d=WS(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const g=e.slice(0,l);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class xg{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class Mg{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Dg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xt{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ee(this._path)?null:Vp(this._path)}get ref(){return new Mt(this._repo,this._path)}get _queryIdentifier(){const e=Qu(this._queryParams),n=Cc(e);return n==="{}"?"default":n}get _queryObject(){return Qu(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof xt))return!1;const n=this._repo===e._repo,s=Ac(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$C(this._path)}}function Lg(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Ti(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Ht){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==_n)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==mn)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Te){if(e!=null&&!lh(e)||n!=null&&!lh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof Oc||t.getIndex()===Qp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function sl(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Mt extends xt{constructor(e,n){super(e,n,new xc,!1)}get parent(){const e=Wp(this._path);return e===null?null:new Mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ge(e),s=Rr(this.ref,e);return new ms(this._node.getChild(n),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ms(i,Rr(this.ref,s),Te)))}hasChild(e){const n=new ge(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qR(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?Rr(t._root,e):t._root}function Rr(t,e){return t=He(t),Z(t._path)===null?IS("child","path",e,!1):Jc("child","path",e,!1),new Mt(t._repo,Pe(t._path,e))}function YR(t,e){t=He(t),CS("set",t._path),io("set",e,t._path,!1);const n=new Hr;return DS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function QR(t){t=He(t);const e=new Dg(()=>{}),n=new co(e);return MS(t._repo,t,n).then(s=>new ms(s,new Mt(t._repo,t._path),t._queryParams.getIndex()))}class co{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xg("value",this,new ms(e.snapshotNode,new Mt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mg(this,e,n):null}matches(e){return e instanceof co?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class il{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mg(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=Rr(new Mt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new xg(e.type,this,new ms(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof il?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function GS(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,l=(u,h)=>{dh(t._repo,t,a),c(u,h)};l.userCallback=n.userCallback,l.context=n.context,n=l}const o=new Dg(n,r||void 0),a=e==="value"?new co(o):new il(e,o);return FS(t._repo,t,a),()=>dh(t._repo,t,a)}function XR(t,e,n,s){return GS(t,"value",e,n,s)}class Kn{}class zS extends Kn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){io("endAt",this._value,e._path,!0);const n=wa(e._queryParams,this._value,this._key);if(sl(n),Ti(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function JR(t,e){return Xc("endAt","key",e,!0),new zS(t,e)}class KS extends Kn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){io("endBefore",this._value,e._path,!1);const n=lT(e._queryParams,this._value,this._key);if(sl(n),Ti(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function ZR(t,e){return Xc("endBefore","key",e,!0),new KS(t,e)}class qS extends Kn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){io("startAt",this._value,e._path,!0);const n=cT(e._queryParams,this._value,this._key);if(sl(n),Ti(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function eA(t=null,e){return Xc("startAt","key",e,!0),new qS(t,e)}class YS extends Kn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new xt(e._repo,e._path,oT(e._queryParams,this._limit),e._orderByCalled)}}function tA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new YS(t)}class QS extends Kn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new xt(e._repo,e._path,aT(e._queryParams,this._limit),e._orderByCalled)}}function nA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new QS(t)}class XS extends Kn{constructor(e){super(),this._path=e}_apply(e){Lg(e,"orderByChild");const n=new ge(this._path);if(ee(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Oc(n),i=Jp(e._queryParams,s);return Ti(i),new xt(e._repo,e._path,i,!0)}}function sA(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Jc("orderByChild","path",t,!1),new XS(t)}class JS extends Kn{_apply(e){Lg(e,"orderByKey");const n=Jp(e._queryParams,Ht);return Ti(n),new xt(e._repo,e._path,n,!0)}}function iA(){return new JS}function rA(t,...e){let n=He(t);for(const s of e)n=s._apply(n);return n}QT(Mt);tS(Mt);/**
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
 */const ZS="FIREBASE_DATABASE_EMULATOR_HOST",Aa={};let e0=!1;function t0(t,e,n,s){t.repoInfo_=new kp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function n0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fh(r,i),a=o.repoInfo,c,l;typeof process<"u"&&ku&&(l=ku[ZS]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=fh(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new us(us.OWNER):new dC(t.name,t.options,e);TS("Invalid Firebase Database URL",o),ee(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=i0(a,t,u,new hC(t.name,n));return new r0(h,t)}function s0(t,e){const n=Aa[e];(!n||n[t.key]!==t)&&jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$S(t),delete n[t.key]}function i0(t,e,n,s){let i=Aa[e.name];i||(i={},Aa[e.name]=i);let r=i[t.toURLString()];return r&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new NS(t,e0,n,s),i[t.toURLString()]=r,r}class r0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mt(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(s0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function oA(t=ac(),e){const n=Gn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Qy("database");s&&o0(n,...s)}return n}function o0(t,e,n,s={}){t=He(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new us(us.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Xy(s.mockUserToken,t.app.options.projectId);r=new us(o)}t0(i,e,n,r)}/**
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
 */function a0(t){QI(Cs),At(new mt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return n0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),at(xu,Mu,t),at(xu,Mu,"esm2017")}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};a0();/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zn=typeof window<"u";function c0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const de=Object.assign;function Vo(t,e){const n={};for(const s in e){const i=e[s];n[s]=yt(i)?i.map(t):t(i)}return n}const Ks=()=>{},yt=Array.isArray,l0=/\/$/,u0=t=>t.replace(l0,"");function Ho(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=p0(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function h0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ph(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function d0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ys(e.matched[s],n.matched[i])&&Fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!f0(t[n],e[n]))return!1;return!0}function f0(t,e){return yt(t)?gh(t,e):yt(e)?gh(e,t):t===e}function gh(t,e){return yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function p0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var di;(function(t){t.pop="pop",t.push="push"})(di||(di={}));var qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qs||(qs={}));function g0(t){if(!t)if(Zn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u0(t)}const _0=/^[^#]+#/;function m0(t,e){return t.replace(_0,"#")+e}function y0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const lo=()=>({left:window.pageXOffset,top:window.pageYOffset});function v0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=y0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _h(t,e){return(history.state?history.state.position-e:-1)+t}const Pa=new Map;function w0(t,e){Pa.set(t,e)}function b0(t){const e=Pa.get(t);return Pa.delete(t),e}let E0=()=>location.protocol+"//"+location.host;function $g(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ph(c,"")}return ph(n,t)+s+i}function I0(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const g=$g(t,location),m=n.value,y=e.value;let R=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}R=y?d.position-y.position:0}else s(g);i.forEach(x=>{x(n.value,m,{delta:R,type:di.pop,direction:R?R>0?qs.forward:qs.back:qs.unknown})})};function c(){o=n.value}function l(d){i.push(d);const g=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(de({},d.state,{scroll:lo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function mh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?lo():null}}function C0(t){const{history:e,location:n}=window,s={value:$g(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:E0()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=de({},e.state,mh(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=de({},i.value,e.state,{forward:c,scroll:lo()});r(u.current,u,!0);const h=de({},mh(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function aA(t){t=g0(t);const e=C0(t),n=I0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=de({location:"",base:t,go:s,createHref:m0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function T0(t){return typeof t=="string"||t&&typeof t=="object"}function Ug(t){return typeof t=="string"||typeof t=="symbol"}const qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bg=Symbol("");var yh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yh||(yh={}));function vs(t,e){return de(new Error,{type:t,[Bg]:!0},e)}function Dt(t,e){return t instanceof Error&&Bg in t&&(e==null||!!(t.type&e))}const vh="[^/]+?",S0={sensitive:!1,strict:!1,start:!0,end:!0},R0=/[.+*?^${}()[\]/\\]/g;function A0(t,e){const n=de({},S0,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(R0,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:y,optional:R,regexp:x}=d;r.push({name:m,repeatable:y,optional:R});const U=x||vh;if(U!==vh){g+=10;try{new RegExp(`(${U})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${m}" (${U}): `+X.message)}}let $=y?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||($=R&&l.length<2?`(?:/${$})`:"/"+$),R&&($+="?"),i+=$,g+=20,R&&(g+=-8),y&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=r[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:y,optional:R}=g,x=m in l?l[m]:"";if(yt(x)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const U=yt(x)?x.join("/"):x;if(!U)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=U}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function P0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function N0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=P0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wh(s))return 1;if(wh(i))return-1}return i.length-s.length}function wh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const O0={type:0,value:""},k0=/[a-zA-Z0-9_]/;function x0(t){if(!t)return[[]];if(t==="/")return[[O0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:k0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function M0(t,e,n){const s=A0(x0(t.path),n),i=de(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function D0(t,e){const n=[],s=new Map;e=Ih({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const g=!d,m=L0(u);m.aliasOf=d&&d.record;const y=Ih(e,u),R=[m];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const X of $)R.push(de({},m,{components:d?d.record.components:m.components,path:X,aliasOf:d?d.record:m}))}let x,U;for(const $ of R){const{path:X}=$;if(h&&X[0]!=="/"){const oe=h.record.path,B=oe[oe.length-1]==="/"?"":"/";$.path=h.record.path+(X&&B+X)}if(x=M0($,h,y),d?d.alias.push(x):(U=U||x,U!==x&&U.alias.push(x),g&&u.name&&!Eh(x)&&o(u.name)),m.children){const oe=m.children;for(let B=0;B<oe.length;B++)r(oe[B],x,d&&d.children[B])}d=d||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return U?()=>{o(U)}:Ks}function o(u){if(Ug(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&N0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Vg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Eh(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw vs(1,{location:u});y=d.record.name,g=de(bh(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&bh(u.params,d.keys.map(U=>U.name))),m=d.stringify(g)}else if("path"in u)m=u.path,d=n.find(U=>U.re.test(m)),d&&(g=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw vs(1,{location:u,currentLocation:h});y=d.record.name,g=de({},h.params,u.params),m=d.stringify(g)}const R=[];let x=d;for(;x;)R.unshift(x.record),x=x.parent;return{name:y,path:m,params:g,matched:R,meta:$0(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function bh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function L0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:F0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function F0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Eh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $0(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Ih(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Vg(t,e){return e.children.some(n=>n===t||Vg(t,n))}const Hg=/#/g,U0=/&/g,B0=/\//g,V0=/=/g,H0=/\?/g,Wg=/\+/g,W0=/%5B/g,j0=/%5D/g,jg=/%5E/g,G0=/%60/g,Gg=/%7B/g,z0=/%7C/g,zg=/%7D/g,K0=/%20/g;function rl(t){return encodeURI(""+t).replace(z0,"|").replace(W0,"[").replace(j0,"]")}function q0(t){return rl(t).replace(Gg,"{").replace(zg,"}").replace(jg,"^")}function Na(t){return rl(t).replace(Wg,"%2B").replace(K0,"+").replace(Hg,"%23").replace(U0,"%26").replace(G0,"`").replace(Gg,"{").replace(zg,"}").replace(jg,"^")}function Y0(t){return Na(t).replace(V0,"%3D")}function Q0(t){return rl(t).replace(Hg,"%23").replace(H0,"%3F")}function X0(t){return t==null?"":Q0(t).replace(B0,"%2F")}function Ar(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function J0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Wg," "),o=r.indexOf("="),a=Ar(o<0?r:r.slice(0,o)),c=o<0?null:Ar(r.slice(o+1));if(a in e){let l=e[a];yt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ch(t){let e="";for(let n in t){const s=t[n];if(n=Y0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(yt(s)?s.map(r=>r&&Na(r)):[s&&Na(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Z0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=yt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const eR=Symbol(""),Th=Symbol(""),ol=Symbol(""),Kg=Symbol(""),Oa=Symbol("");function Ds(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Jt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(vs(4,{from:n,to:e})):h instanceof Error?a(h):T0(h)?a(vs(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Wo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(tR(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Jt(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=c0(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Jt(d,n,s,r,o)()}))}}return i}function tR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sh(t){const e=Ct(ol),n=Ct(Kg),s=rt(()=>e.resolve(is(t.to))),i=rt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ys.bind(null,u));if(d>-1)return d;const g=Rh(c[l-2]);return l>1&&Rh(u)===g&&h[h.length-1].path!==g?h.findIndex(ys.bind(null,c[l-2])):d}),r=rt(()=>i.value>-1&&rR(n.params,s.value.params)),o=rt(()=>i.value>-1&&i.value===n.matched.length-1&&Fg(n.params,s.value.params));function a(c={}){return iR(c)?e[is(t.replace)?"replace":"push"](is(t.to)).catch(Ks):Promise.resolve()}return{route:s,href:rt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const nR=_d({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sh,setup(t,{slots:e}){const n=pi(Sh(t)),{options:s}=Ct(ol),i=rt(()=>({[Ah(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ah(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Fd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),sR=nR;function iR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!yt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Rh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ah=(t,e,n)=>t??e??n,oR=_d({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ct(Oa),i=rt(()=>t.route||s.value),r=Ct(Th,0),o=rt(()=>{let l=is(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=rt(()=>i.value.matched[o.value]);Hi(Th,rt(()=>o.value+1)),Hi(eR,a),Hi(Oa,i);const c=x_();return os(()=>[c.value,a.value,t.name],([l,u,h],[d,g,m])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!ys(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ph(n.default,{Component:d,route:l});const g=h.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=Fd(d,de({},m,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ph(n.default,{Component:R,route:l})||R}}});function Ph(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const aR=oR;function cA(t){const e=D0(t.routes,t),n=t.parseQuery||J0,s=t.stringifyQuery||Ch,i=t.history,r=Ds(),o=Ds(),a=Ds(),c=M_(qt);let l=qt;Zn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vo.bind(null,v=>""+v),h=Vo.bind(null,X0),d=Vo.bind(null,Ar);function g(v,M){let N,k;return Ug(v)?(N=e.getRecordMatcher(v),k=M):k=v,e.addRoute(k,N)}function m(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function y(){return e.getRoutes().map(v=>v.record)}function R(v){return!!e.getRecordMatcher(v)}function x(v,M){if(M=de({},M||c.value),typeof v=="string"){const p=Ho(n,v,M.path),_=e.resolve({path:p.path},M),b=i.createHref(p.fullPath);return de(p,_,{params:d(_.params),hash:Ar(p.hash),redirectedFrom:void 0,href:b})}let N;if("path"in v)N=de({},v,{path:Ho(n,v.path,M.path).path});else{const p=de({},v.params);for(const _ in p)p[_]==null&&delete p[_];N=de({},v,{params:h(p)}),M.params=h(M.params)}const k=e.resolve(N,M),J=v.hash||"";k.params=u(d(k.params));const he=h0(s,de({},v,{hash:q0(J),path:k.path})),f=i.createHref(he);return de({fullPath:he,hash:J,query:s===Ch?Z0(v.query):v.query||{}},k,{redirectedFrom:void 0,href:f})}function U(v){return typeof v=="string"?Ho(n,v,c.value.path):de({},v)}function $(v,M){if(l!==v)return vs(8,{from:M,to:v})}function X(v){return ye(v)}function oe(v){return X(de(U(v),{replace:!0}))}function B(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let k=typeof N=="function"?N(v):N;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=U(k):{path:k},k.params={}),de({query:v.query,hash:v.hash,params:"path"in k?{}:v.params},k)}}function ye(v,M){const N=l=x(v),k=c.value,J=v.state,he=v.force,f=v.replace===!0,p=B(N);if(p)return ye(de(U(p),{state:typeof p=="object"?de({},J,p.state):J,force:he,replace:f}),M||N);const _=N;_.redirectedFrom=M;let b;return!he&&d0(s,k,N)&&(b=vs(16,{to:_,from:k}),se(k,k,!0,!1)),(b?Promise.resolve(b):le(_,k)).catch(w=>Dt(w)?Dt(w,2)?w:G(w):E(w,_,k)).then(w=>{if(w){if(Dt(w,2))return ye(de({replace:f},U(w.to),{state:typeof w.to=="object"?de({},J,w.to.state):J,force:he}),M||_)}else w=st(_,k,!0,f,J);return ne(_,k,w),w})}function Se(v,M){const N=$(v,M);return N?Promise.reject(N):Promise.resolve()}function Re(v){const M=Ie.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function le(v,M){let N;const[k,J,he]=cR(v,M);N=Wo(k.reverse(),"beforeRouteLeave",v,M);for(const p of k)p.leaveGuards.forEach(_=>{N.push(Jt(_,v,M))});const f=Se.bind(null,v,M);return N.push(f),Ce(N).then(()=>{N=[];for(const p of r.list())N.push(Jt(p,v,M));return N.push(f),Ce(N)}).then(()=>{N=Wo(J,"beforeRouteUpdate",v,M);for(const p of J)p.updateGuards.forEach(_=>{N.push(Jt(_,v,M))});return N.push(f),Ce(N)}).then(()=>{N=[];for(const p of he)if(p.beforeEnter)if(yt(p.beforeEnter))for(const _ of p.beforeEnter)N.push(Jt(_,v,M));else N.push(Jt(p.beforeEnter,v,M));return N.push(f),Ce(N)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),N=Wo(he,"beforeRouteEnter",v,M),N.push(f),Ce(N))).then(()=>{N=[];for(const p of o.list())N.push(Jt(p,v,M));return N.push(f),Ce(N)}).catch(p=>Dt(p,8)?p:Promise.reject(p))}function ne(v,M,N){a.list().forEach(k=>Re(()=>k(v,M,N)))}function st(v,M,N,k,J){const he=$(v,M);if(he)return he;const f=M===qt,p=Zn?history.state:{};N&&(k||f?i.replace(v.fullPath,de({scroll:f&&p&&p.scroll},J)):i.push(v.fullPath,J)),c.value=v,se(v,M,N,f),G()}let et;function j(){et||(et=i.listen((v,M,N)=>{if(!Le.listening)return;const k=x(v),J=B(k);if(J){ye(de(J,{replace:!0}),k).catch(Ks);return}l=k;const he=c.value;Zn&&w0(_h(he.fullPath,N.delta),lo()),le(k,he).catch(f=>Dt(f,12)?f:Dt(f,2)?(ye(f.to,k).then(p=>{Dt(p,20)&&!N.delta&&N.type===di.pop&&i.go(-1,!1)}).catch(Ks),Promise.reject()):(N.delta&&i.go(-N.delta,!1),E(f,k,he))).then(f=>{f=f||st(k,he,!1),f&&(N.delta&&!Dt(f,8)?i.go(-N.delta,!1):N.type===di.pop&&Dt(f,20)&&i.go(-1,!1)),ne(k,he,f)}).catch(Ks)}))}let L=Ds(),C=Ds(),P;function E(v,M,N){G(v);const k=C.list();return k.length?k.forEach(J=>J(v,M,N)):console.error(v),Promise.reject(v)}function H(){return P&&c.value!==qt?Promise.resolve():new Promise((v,M)=>{L.add([v,M])})}function G(v){return P||(P=!v,j(),L.list().forEach(([M,N])=>v?N(v):M()),L.reset()),v}function se(v,M,N,k){const{scrollBehavior:J}=t;if(!Zn||!J)return Promise.resolve();const he=!N&&b0(_h(v.fullPath,0))||(k||!N)&&history.state&&history.state.scroll||null;return Ya().then(()=>J(v,M,he)).then(f=>f&&v0(f)).catch(f=>E(f,v,M))}const ie=v=>i.go(v);let ve;const Ie=new Set,Le={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:R,getRoutes:y,resolve:x,options:t,push:X,replace:oe,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:C.add,isReady:H,install(v){const M=this;v.component("RouterLink",sR),v.component("RouterView",aR),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>is(c)}),Zn&&!ve&&c.value===qt&&(ve=!0,X(i.location).catch(J=>{}));const N={};for(const J in qt)Object.defineProperty(N,J,{get:()=>c.value[J],enumerable:!0});v.provide(ol,M),v.provide(Kg,Zh(N)),v.provide(Oa,c);const k=v.unmount;Ie.add(v),v.unmount=function(){Ie.delete(v),Ie.size<1&&(l=qt,et&&et(),et=null,c.value=qt,ve=!1,P=!1),k()}}};function Ce(v){return v.reduce((M,N)=>M.then(()=>Re(N)),Promise.resolve())}return Le}function cR(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>ys(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ys(l,c))||i.push(c))}return[n,s,i]}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Si(t){return t+.5|0}const sn=(t,e,n)=>Math.max(Math.min(t,n),e);function Fs(t){return sn(Si(t*2.55),0,255)}function dn(t){return sn(Si(t*255),0,255)}function Lt(t){return sn(Si(t/2.55)/100,0,1)}function Nh(t){return sn(Si(t*100),0,100)}const it={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ka=[..."0123456789ABCDEF"],lR=t=>ka[t&15],uR=t=>ka[(t&240)>>4]+ka[t&15],Li=t=>(t&240)>>4===(t&15),hR=t=>Li(t.r)&&Li(t.g)&&Li(t.b)&&Li(t.a);function dR(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&it[t[1]]*17,g:255&it[t[2]]*17,b:255&it[t[3]]*17,a:e===5?it[t[4]]*17:255}:(e===7||e===9)&&(n={r:it[t[1]]<<4|it[t[2]],g:it[t[3]]<<4|it[t[4]],b:it[t[5]]<<4|it[t[6]],a:e===9?it[t[7]]<<4|it[t[8]]:255})),n}const fR=(t,e)=>t<255?e(t):"";function pR(t){var e=hR(t)?lR:uR;return t?"#"+e(t.r)+e(t.g)+e(t.b)+fR(t.a,e):void 0}const gR=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function qg(t,e,n){const s=e*Math.min(n,1-n),i=(r,o=(r+t/30)%12)=>n-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function _R(t,e,n){const s=(i,r=(i+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function mR(t,e,n){const s=qg(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)s[i]*=1-e-n,s[i]+=e;return s}function yR(t,e,n,s,i){return t===i?(e-n)/s+(e<n?6:0):e===i?(n-t)/s+2:(t-e)/s+4}function al(t){const n=t.r/255,s=t.g/255,i=t.b/255,r=Math.max(n,s,i),o=Math.min(n,s,i),a=(r+o)/2;let c,l,u;return r!==o&&(u=r-o,l=a>.5?u/(2-r-o):u/(r+o),c=yR(n,s,i,u,r),c=c*60+.5),[c|0,l||0,a]}function cl(t,e,n,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,s)).map(dn)}function ll(t,e,n){return cl(qg,t,e,n)}function vR(t,e,n){return cl(mR,t,e,n)}function wR(t,e,n){return cl(_R,t,e,n)}function Yg(t){return(t%360+360)%360}function bR(t){const e=gR.exec(t);let n=255,s;if(!e)return;e[5]!==s&&(n=e[6]?Fs(+e[5]):dn(+e[5]));const i=Yg(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?s=vR(i,r,o):e[1]==="hsv"?s=wR(i,r,o):s=ll(i,r,o),{r:s[0],g:s[1],b:s[2],a:n}}function ER(t,e){var n=al(t);n[0]=Yg(n[0]+e),n=ll(n),t.r=n[0],t.g=n[1],t.b=n[2]}function IR(t){if(!t)return;const e=al(t),n=e[0],s=Nh(e[1]),i=Nh(e[2]);return t.a<255?`hsla(${n}, ${s}%, ${i}%, ${Lt(t.a)})`:`hsl(${n}, ${s}%, ${i}%)`}const Oh={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},kh={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function CR(){const t={},e=Object.keys(kh),n=Object.keys(Oh);let s,i,r,o,a;for(s=0;s<e.length;s++){for(o=a=e[s],i=0;i<n.length;i++)r=n[i],a=a.replace(r,Oh[r]);r=parseInt(kh[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Fi;function TR(t){Fi||(Fi=CR(),Fi.transparent=[0,0,0,0]);const e=Fi[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const SR=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function RR(t){const e=SR.exec(t);let n=255,s,i,r;if(e){if(e[7]!==s){const o=+e[7];n=e[8]?Fs(o):sn(o*255,0,255)}return s=+e[1],i=+e[3],r=+e[5],s=255&(e[2]?Fs(s):sn(s,0,255)),i=255&(e[4]?Fs(i):sn(i,0,255)),r=255&(e[6]?Fs(r):sn(r,0,255)),{r:s,g:i,b:r,a:n}}}function AR(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Lt(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const jo=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Jn=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function PR(t,e,n){const s=Jn(Lt(t.r)),i=Jn(Lt(t.g)),r=Jn(Lt(t.b));return{r:dn(jo(s+n*(Jn(Lt(e.r))-s))),g:dn(jo(i+n*(Jn(Lt(e.g))-i))),b:dn(jo(r+n*(Jn(Lt(e.b))-r))),a:t.a+n*(e.a-t.a)}}function $i(t,e,n){if(t){let s=al(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*n,e===0?360:1)),s=ll(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function Qg(t,e){return t&&Object.assign(e||{},t)}function xh(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=dn(t[3]))):(e=Qg(t,{r:0,g:0,b:0,a:1}),e.a=dn(e.a)),e}function NR(t){return t.charAt(0)==="r"?RR(t):bR(t)}class xa{constructor(e){if(e instanceof xa)return e;const n=typeof e;let s;n==="object"?s=xh(e):n==="string"&&(s=dR(e)||TR(e)||NR(e)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var e=Qg(this._rgb);return e&&(e.a=Lt(e.a)),e}set rgb(e){this._rgb=xh(e)}rgbString(){return this._valid?AR(this._rgb):void 0}hexString(){return this._valid?pR(this._rgb):void 0}hslString(){return this._valid?IR(this._rgb):void 0}mix(e,n){if(e){const s=this.rgb,i=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,c=s.a-i.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,s.r=255&l*s.r+r*i.r+.5,s.g=255&l*s.g+r*i.g+.5,s.b=255&l*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(e,n){return e&&(this._rgb=PR(this._rgb,e._rgb,n)),this}clone(){return new xa(this.rgb)}alpha(e){return this._rgb.a=dn(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Si(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return $i(this._rgb,2,e),this}darken(e){return $i(this._rgb,2,-e),this}saturate(e){return $i(this._rgb,1,e),this}desaturate(e){return $i(this._rgb,1,-e),this}rotate(e){return ER(this._rgb,e),this}}export{ZR as A,JR as B,xa as C,nA as D,tA as E,ut as F,en as G,rA as H,VR as I,DR as J,Ba as K,x_ as L,W_ as M,kd as N,Mm as O,os as P,rm as Q,MR as R,pi as S,xR as T,$R as U,cA as V,aA as W,UR as X,LR as a,Md as b,rt as c,is as d,FR as e,GR as f,KR as g,HR as h,WR as i,uw as j,oA as k,jR as l,ze as m,QR as n,Nd as o,Rr as p,qR as q,kR as r,zR as s,OR as t,BR as u,XR as v,YR as w,iA as x,sA as y,eA as z};
