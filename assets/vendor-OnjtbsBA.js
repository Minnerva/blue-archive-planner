function aa(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ye={},zn=[],yt=()=>{},Rp=()=>!1,mr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),la=t=>t.startsWith("onUpdate:"),Le=Object.assign,ca=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ap=Object.prototype.hasOwnProperty,re=(t,e)=>Ap.call(t,e),K=Array.isArray,Gn=t=>vr(t)==="[object Map]",Bu=t=>vr(t)==="[object Set]",Q=t=>typeof t=="function",Pe=t=>typeof t=="string",ds=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Hu=t=>(Ee(t)||Q(t))&&Q(t.then)&&Q(t.catch),Wu=Object.prototype.toString,vr=t=>Wu.call(t),Pp=t=>vr(t).slice(8,-1),ju=t=>vr(t)==="[object Object]",ua=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ki=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Np=/-(\w)/g,Ct=yr(t=>t.replace(Np,(e,n)=>n?n.toUpperCase():"")),Op=/\B([A-Z])/g,fs=yr(t=>t.replace(Op,"-$1").toLowerCase()),Er=yr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kr=yr(t=>t?`on${Er(t)}`:""),Rn=(t,e)=>!Object.is(t,e),qr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$i=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},kp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ml;const bo=()=>Ml||(Ml=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ha(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Pe(s)?Lp(s):ha(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Pe(t)||Ee(t))return t}const xp=/;(?![^(]*\))/g,Mp=/:([^]+)/,Dp=/\/\*[^]*?\*\//g;function Lp(t){const e={};return t.replace(Dp,"").split(xp).forEach(n=>{if(n){const s=n.split(Mp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function da(t){let e="";if(Pe(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=da(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Up=aa(Fp);function Vu(t){return!!t||t===""}const NT=t=>Pe(t)?t:t==null?"":K(t)||Ee(t)&&(t.toString===Wu||!Q(t.toString))?JSON.stringify(t,zu,2):String(t),zu=(t,e)=>e&&e.__v_isRef?zu(t,e.value):Gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Yr(s,r)+" =>"]=i,n),{})}:Bu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Yr(n))}:ds(e)?Yr(e):Ee(e)&&!K(e)&&!ju(e)?String(e):e,Yr=(t,e="")=>{var n;return ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let st;class $p{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Bp(t,e=st){e&&e.active&&e.effects.push(t)}function Hp(){return st}const fa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Gu=t=>(t.w&on)>0,Ku=t=>(t.n&on)>0,Wp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=on},jp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Gu(i)&&!Ku(i)?i.delete(t):e[n++]=i,i.w&=~on,i.n&=~on}e.length=n}},wo=new WeakMap;let Os=0,on=1;const Co=30;let rt;const Cn=Symbol(""),Io=Symbol("");class pa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bp(this,s)}run(){if(!this.active)return this.fn();let e=rt,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rt,rt=this,Xt=!0,on=1<<++Os,Os<=Co?Wp(this):Dl(this),this.fn()}finally{Os<=Co&&jp(this),on=1<<--Os,rt=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&(Dl(this),this.onStop&&this.onStop(),this.active=!1)}}function Dl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const qu=[];function ps(){qu.push(Xt),Xt=!1}function _s(){const t=qu.pop();Xt=t===void 0?!0:t}function Ke(t,e,n){if(Xt&&rt){let s=wo.get(t);s||wo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=fa()),Yu(i)}}function Yu(t,e){let n=!1;Os<=Co?Ku(t)||(t.n|=on,n=!Gu(t)):n=!t.has(rt),n&&(t.add(rt),rt.deps.push(t))}function Dt(t,e,n,s,i,r){const o=wo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!ds(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?ua(n)&&a.push(o.get("length")):(a.push(o.get(Cn)),Gn(t)&&a.push(o.get(Io)));break;case"delete":K(t)||(a.push(o.get(Cn)),Gn(t)&&a.push(o.get(Io)));break;case"set":Gn(t)&&a.push(o.get(Cn));break}if(a.length===1)a[0]&&To(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);To(fa(l))}}function To(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&Ll(s);for(const s of n)s.computed||Ll(s)}function Ll(t,e){(t!==rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Vp=aa("__proto__,__v_isRef,__isVue"),Qu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ds)),Fl=zp();function zp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)Ke(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ps();const s=ue(this)[e].apply(this,n);return _s(),s}}),t}function Gp(t){const e=ue(this);return Ke(e,"has",t),e.hasOwnProperty(t)}class Xu{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?r_:th:r?eh:Zu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=K(e);if(!i){if(o&&re(Fl,n))return Reflect.get(Fl,n,s);if(n==="hasOwnProperty")return Gp}const a=Reflect.get(e,n,s);return(ds(n)?Qu.has(n):Vp(n))||(i||Ke(e,"get",n),r)?a:qe(a)?o&&ua(n)?a:a.value:Ee(a)?i?sh(a):ai(a):a}}class Ju extends Xu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=ts(r);if(!Bi(s)&&!ts(s)&&(r=ue(r),s=ue(s)),!K(e)&&qe(r)&&!qe(s))return l?!1:(r.value=s,!0)}const o=K(e)&&ua(n)?Number(n)<e.length:re(e,n),a=Reflect.set(e,n,s,i);return e===ue(i)&&(o?Rn(s,r)&&Dt(e,"set",n,s):Dt(e,"add",n,s)),a}deleteProperty(e,n){const s=re(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Dt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!ds(n)||!Qu.has(n))&&Ke(e,"has",n),s}ownKeys(e){return Ke(e,"iterate",K(e)?"length":Cn),Reflect.ownKeys(e)}}class Kp extends Xu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qp=new Ju,Yp=new Kp,Qp=new Ju(!0),_a=t=>t,br=t=>Reflect.getPrototypeOf(t);function Ei(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(Rn(e,r)&&Ke(i,"get",e),Ke(i,"get",r));const{has:o}=br(i),a=s?_a:n?va:Vs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function bi(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(Rn(t,i)&&Ke(s,"has",t),Ke(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function wi(t,e=!1){return t=t.__v_raw,!e&&Ke(ue(t),"iterate",Cn),Reflect.get(t,"size",t)}function Ul(t){t=ue(t);const e=ue(this);return br(e).has.call(e,t)||(e.add(t),Dt(e,"add",t,t)),this}function $l(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=br(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Rn(e,o)&&Dt(n,"set",t,e):Dt(n,"add",t,e),this}function Bl(t){const e=ue(this),{has:n,get:s}=br(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Dt(e,"delete",t,void 0),r}function Hl(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Dt(t,"clear",void 0,void 0),n}function Ci(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),l=e?_a:t?va:Vs;return!t&&Ke(a,"iterate",Cn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ii(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=Gn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?_a:e?va:Vs;return!e&&Ke(r,"iterate",l?Io:Cn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ht(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xp(){const t={get(r){return Ei(this,r)},get size(){return wi(this)},has:bi,add:Ul,set:$l,delete:Bl,clear:Hl,forEach:Ci(!1,!1)},e={get(r){return Ei(this,r,!1,!0)},get size(){return wi(this)},has:bi,add:Ul,set:$l,delete:Bl,clear:Hl,forEach:Ci(!1,!0)},n={get(r){return Ei(this,r,!0)},get size(){return wi(this,!0)},has(r){return bi.call(this,r,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:Ci(!0,!1)},s={get(r){return Ei(this,r,!0,!0)},get size(){return wi(this,!0)},has(r){return bi.call(this,r,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:Ci(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ii(r,!1,!1),n[r]=Ii(r,!0,!1),e[r]=Ii(r,!1,!0),s[r]=Ii(r,!0,!0)}),[t,n,e,s]}const[Jp,Zp,e_,t_]=Xp();function ga(t,e){const n=e?t?t_:e_:t?Zp:Jp;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(re(n,i)&&i in s?n:s,i,r)}const n_={get:ga(!1,!1)},s_={get:ga(!1,!0)},i_={get:ga(!0,!1)},Zu=new WeakMap,eh=new WeakMap,th=new WeakMap,r_=new WeakMap;function o_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(t){return t.__v_skip||!Object.isExtensible(t)?0:o_(Pp(t))}function ai(t){return ts(t)?t:ma(t,!1,qp,n_,Zu)}function nh(t){return ma(t,!1,Qp,s_,eh)}function sh(t){return ma(t,!0,Yp,i_,th)}function ma(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=a_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Kn(t){return ts(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function ts(t){return!!(t&&t.__v_isReadonly)}function Bi(t){return!!(t&&t.__v_isShallow)}function ih(t){return Kn(t)||ts(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function rh(t){return $i(t,"__v_skip",!0),t}const Vs=t=>Ee(t)?ai(t):t,va=t=>Ee(t)?sh(t):t;function oh(t){Xt&&rt&&(t=ue(t),Yu(t.dep||(t.dep=fa())))}function ah(t,e){t=ue(t);const n=t.dep;n&&To(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function l_(t){return lh(t,!1)}function c_(t){return lh(t,!0)}function lh(t,e){return qe(t)?t:new u_(t,e)}class u_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Vs(e)}get value(){return oh(this),this._value}set value(e){const n=this.__v_isShallow||Bi(e)||ts(e);e=n?e:ue(e),Rn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vs(e),ah(this))}}function qn(t){return qe(t)?t.value:t}const h_={get:(t,e,n)=>qn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return qe(i)&&!qe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ch(t){return Kn(t)?t:new Proxy(t,h_)}class d_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new pa(e,()=>{this._dirty||(this._dirty=!0,ah(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return oh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function f_(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=yt):(s=t.get,i=t.set),new d_(s,i,r||!i,n)}function Jt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){wr(r,e,n)}return i}function ht(t,e,n,s){if(Q(t)){const r=Jt(t,e,n,s);return r&&Hu(r)&&r.catch(o=>{wr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}function wr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,a]);return}}p_(t,n,i,s)}function p_(t,e,n,s=!0){console.error(t)}let zs=!1,So=!1;const Ue=[];let vt=0;const Yn=[];let Nt=null,vn=0;const uh=Promise.resolve();let ya=null;function hh(t){const e=ya||uh;return t?e.then(this?t.bind(this):t):e}function __(t){let e=vt+1,n=Ue.length;for(;e<n;){const s=e+n>>>1,i=Ue[s],r=Gs(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Ea(t){(!Ue.length||!Ue.includes(t,zs&&t.allowRecurse?vt+1:vt))&&(t.id==null?Ue.push(t):Ue.splice(__(t.id),0,t),dh())}function dh(){!zs&&!So&&(So=!0,ya=uh.then(ph))}function g_(t){const e=Ue.indexOf(t);e>vt&&Ue.splice(e,1)}function m_(t){K(t)?Yn.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?vn+1:vn))&&Yn.push(t),dh()}function Wl(t,e,n=zs?vt+1:0){for(;n<Ue.length;n++){const s=Ue[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ue.splice(n,1),n--,s()}}}function fh(t){if(Yn.length){const e=[...new Set(Yn)];if(Yn.length=0,Nt){Nt.push(...e);return}for(Nt=e,Nt.sort((n,s)=>Gs(n)-Gs(s)),vn=0;vn<Nt.length;vn++)Nt[vn]();Nt=null,vn=0}}const Gs=t=>t.id==null?1/0:t.id,v_=(t,e)=>{const n=Gs(t)-Gs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ph(t){So=!1,zs=!0,Ue.sort(v_);try{for(vt=0;vt<Ue.length;vt++){const e=Ue[vt];e&&e.active!==!1&&Jt(e,null,14)}}finally{vt=0,Ue.length=0,fh(),zs=!1,ya=null,(Ue.length||Yn.length)&&ph()}}function y_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ye;d&&(i=n.map(_=>Pe(_)?_.trim():_)),h&&(i=n.map(kp))}let a,l=s[a=Kr(e)]||s[a=Kr(Ct(e))];!l&&r&&(l=s[a=Kr(fs(e))]),l&&ht(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ht(c,t,6,i)}}function _h(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=_h(c,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ee(t)&&s.set(t,null),null):(K(r)?r.forEach(l=>o[l]=null):Le(o,r),Ee(t)&&s.set(t,o),o)}function Cr(t,e){return!t||!mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,fs(e))||re(t,e))}let He=null,gh=null;function Hi(t){const e=He;return He=t,gh=t&&t.type.__scopeId||null,e}function E_(t,e=He,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Zl(-1);const r=Hi(e);let o;try{o=t(...i)}finally{Hi(r),s._d&&Zl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:v,inheritAttrs:m}=t;let N,L;const F=Hi(t);try{if(n.shapeFlag&4){const $=i||s,ae=$;N=mt(u.call(ae,$,h,r,_,d,v)),L=l}else{const $=e;N=mt($.length>1?$(r,{attrs:l,slots:a,emit:c}):$(r,null)),L=e.props?l:b_(l)}}catch($){Ls.length=0,wr($,t,1),N=Ve(an)}let B=N;if(L&&m!==!1){const $=Object.keys(L),{shapeFlag:ae}=B;$.length&&ae&7&&(o&&$.some(la)&&(L=w_(L,o)),B=ns(B,L))}return n.dirs&&(B=ns(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),N=B,Hi(F),N}const b_=t=>{let e;for(const n in t)(n==="class"||n==="style"||mr(n))&&((e||(e={}))[n]=t[n]);return e},w_=(t,e)=>{const n={};for(const s in t)(!la(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function C_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?jl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Cr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?jl(s,o,c):!0:!!o;return!1}function jl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Cr(n,r))return!0}return!1}function I_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mh="components";function OT(t,e){return S_(mh,t,!0,e)||t}const T_=Symbol.for("v-ndc");function S_(t,e,n=!0,s=!1){const i=He||De;if(i){const r=i.type;if(t===mh){const a=vg(r,!1);if(a&&(a===e||a===Ct(e)||a===Er(Ct(e))))return r}const o=Vl(i[t]||r[t],e)||Vl(i.appContext[t],e);return!o&&s?r:o}}function Vl(t,e){return t&&(t[e]||t[Ct(e)]||t[Er(Ct(e))])}const R_=t=>t.__isSuspense;function A_(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):m_(t)}const Ti={};function Qn(t,e,n){return vh(t,e,n)}function vh(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ye){var a;const l=Hp()===((a=De)==null?void 0:a.scope)?De:null;let c,u=!1,h=!1;if(qe(t)?(c=()=>t.value,u=Bi(t)):Kn(t)?(c=()=>t,s=!0):K(t)?(h=!0,u=t.some($=>Kn($)||Bi($)),c=()=>t.map($=>{if(qe($))return $.value;if(Kn($))return jn($);if(Q($))return Jt($,l,2)})):Q(t)?e?c=()=>Jt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),ht(t,l,3,[_])}:c=yt,e&&s){const $=c;c=()=>jn($())}let d,_=$=>{d=F.onStop=()=>{Jt($,l,4),d=F.onStop=void 0}},v;if(qs)if(_=yt,e?n&&ht(e,l,3,[c(),h?[]:void 0,_]):c(),i==="sync"){const $=bg();v=$.__watcherHandles||($.__watcherHandles=[])}else return yt;let m=h?new Array(t.length).fill(Ti):Ti;const N=()=>{if(F.active)if(e){const $=F.run();(s||u||(h?$.some((ae,le)=>Rn(ae,m[le])):Rn($,m)))&&(d&&d(),ht(e,l,3,[$,m===Ti?void 0:h&&m[0]===Ti?[]:m,_]),m=$)}else F.run()};N.allowRecurse=!!e;let L;i==="sync"?L=N:i==="post"?L=()=>je(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),L=()=>Ea(N));const F=new pa(c,L);e?n?N():m=F.run():i==="post"?je(F.run.bind(F),l&&l.suspense):F.run();const B=()=>{F.stop(),l&&l.scope&&ca(l.scope.effects,F)};return v&&v.push(B),B}function P_(t,e,n){const s=this.proxy,i=Pe(t)?t.includes(".")?yh(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=De;ss(this);const a=vh(i,r.bind(s),n);return o?ss(o):In(),a}function yh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function jn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))jn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)jn(t[n],e);else if(Bu(t)||Gn(t))t.forEach(n=>{jn(n,e)});else if(ju(t))for(const n in t)jn(t[n],e);return t}function pn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ps(),ht(l,n,8,[t.el,a,t,e]),_s())}}/*! #__NO_SIDE_EFFECTS__ */function Eh(t,e){return Q(t)?Le({name:t.name},e,{setup:t}):t}const Ms=t=>!!t.type.__asyncLoader,bh=t=>t.type.__isKeepAlive;function N_(t,e){wh(t,"a",e)}function O_(t,e){wh(t,"da",e)}function wh(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ir(e,s,n),n){let i=n.parent;for(;i&&i.parent;)bh(i.parent.vnode)&&k_(s,e,n,i),i=i.parent}}function k_(t,e,n,s){const i=Ir(e,t,s,!0);Ch(()=>{ca(s[e],i)},n)}function Ir(t,e,n=De,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ps(),ss(n);const a=ht(e,n,t,o);return In(),_s(),a});return s?i.unshift(r):i.push(r),r}}const Bt=t=>(e,n=De)=>(!qs||t==="sp")&&Ir(t,(...s)=>e(...s),n),x_=Bt("bm"),M_=Bt("m"),D_=Bt("bu"),L_=Bt("u"),F_=Bt("bum"),Ch=Bt("um"),U_=Bt("sp"),$_=Bt("rtg"),B_=Bt("rtc");function H_(t,e=De){Ir("ec",t,e)}function kT(t,e,n,s){let i;const r=n&&n[s];if(K(t)||Pe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function xT(t,e,n={},s,i){if(He.isCE||He.parent&&Ms(He.parent)&&He.parent.isCE)return e!=="default"&&(n.name=e),Ve("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),xh();const o=r&&Ih(r(n)),a=Dh(it,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Ih(t){return t.some(e=>Vi(e)?!(e.type===an||e.type===it&&!Ih(e.children)):!0)?t:null}const Ro=t=>t?Uh(t)?Ta(t)||t.proxy:Ro(t.parent):null,Ds=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ro(t.parent),$root:t=>Ro(t.root),$emit:t=>t.emit,$options:t=>ba(t),$forceUpdate:t=>t.f||(t.f=()=>Ea(t.update)),$nextTick:t=>t.n||(t.n=hh.bind(t.proxy)),$watch:t=>P_.bind(t)}),Xr=(t,e)=>t!==ye&&!t.__isScriptSetup&&re(t,e),W_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xr(s,e))return o[e]=1,s[e];if(i!==ye&&re(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&re(c,e))return o[e]=3,r[e];if(n!==ye&&re(n,e))return o[e]=4,n[e];Ao&&(o[e]=0)}}const u=Ds[e];let h,d;if(u)return e==="$attrs"&&Ke(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&re(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,re(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xr(i,e)?(i[e]=n,!0):s!==ye&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ye&&re(t,o)||Xr(e,o)||(a=r[0])&&re(a,o)||re(s,o)||re(Ds,o)||re(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zl(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ao=!0;function j_(t){const e=ba(t),n=t.proxy,s=t.ctx;Ao=!1,e.beforeCreate&&Gl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:v,activated:m,deactivated:N,beforeDestroy:L,beforeUnmount:F,destroyed:B,unmounted:$,render:ae,renderTracked:le,renderTriggered:Ie,errorCaptured:Ne,serverPrefetch:Se,expose:ce,inheritAttrs:te,components:et,directives:Je,filters:V}=e;if(c&&V_(c,s,null),o)for(const P in o){const w=o[P];Q(w)&&(s[P]=w.bind(n))}if(i){const P=i.call(n,n);Ee(P)&&(t.data=ai(P))}if(Ao=!0,r)for(const P in r){const w=r[P],j=Q(w)?w.bind(n,n):Q(w.get)?w.get.bind(n,n):yt,z=!Q(w)&&Q(w.set)?w.set.bind(n):yt,ne=ot({get:j,set:z});Object.defineProperty(s,P,{enumerable:!0,configurable:!0,get:()=>ne.value,set:se=>ne.value=se})}if(a)for(const P in a)Th(a[P],s,n,P);if(l){const P=Q(l)?l.call(n):l;Reflect.ownKeys(P).forEach(w=>{xi(w,P[w])})}u&&Gl(u,t,"c");function T(P,w){K(w)?w.forEach(j=>P(j.bind(n))):w&&P(w.bind(n))}if(T(x_,h),T(M_,d),T(D_,_),T(L_,v),T(N_,m),T(O_,N),T(H_,Ne),T(B_,le),T($_,Ie),T(F_,F),T(Ch,$),T(U_,Se),K(ce))if(ce.length){const P=t.exposed||(t.exposed={});ce.forEach(w=>{Object.defineProperty(P,w,{get:()=>n[w],set:j=>n[w]=j})})}else t.exposed||(t.exposed={});ae&&t.render===yt&&(t.render=ae),te!=null&&(t.inheritAttrs=te),et&&(t.components=et),Je&&(t.directives=Je)}function V_(t,e,n=yt){K(t)&&(t=Po(t));for(const s in t){const i=t[s];let r;Ee(i)?"default"in i?r=Et(i.from||s,i.default,!0):r=Et(i.from||s):r=Et(i),qe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Gl(t,e,n){ht(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Th(t,e,n,s){const i=s.includes(".")?yh(n,s):()=>n[s];if(Pe(t)){const r=e[t];Q(r)&&Qn(i,r)}else if(Q(t))Qn(i,t.bind(n));else if(Ee(t))if(K(t))t.forEach(r=>Th(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&Qn(i,r,t)}}function ba(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Wi(l,c,o,!0)),Wi(l,e,o)),Ee(e)&&r.set(e,l),l}function Wi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Wi(t,r,n,!0),i&&i.forEach(o=>Wi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=z_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const z_={data:Kl,props:ql,emits:ql,methods:ks,computed:ks,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:ks,directives:ks,watch:K_,provide:Kl,inject:G_};function Kl(t,e){return e?t?function(){return Le(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function G_(t,e){return ks(Po(t),Po(e))}function Po(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function ks(t,e){return t?Le(Object.create(null),t,e):e}function ql(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Le(Object.create(null),zl(t),zl(e??{})):e}function K_(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const s in e)n[s]=Be(t[s],e[s]);return n}function Sh(){return{app:null,config:{isNativeTag:Rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let q_=0;function Y_(t,e){return function(s,i=null){Q(s)||(s=Le({},s)),i!=null&&!Ee(i)&&(i=null);const r=Sh(),o=new WeakSet;let a=!1;const l=r.app={_uid:q_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:wg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ve(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ta(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){ji=l;try{return c()}finally{ji=null}}};return l}}let ji=null;function xi(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function Et(t,e,n=!1){const s=De||He;if(s||ji){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ji._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s&&s.proxy):e}}function Q_(t,e,n,s=!1){const i={},r={};$i(r,Sr,1),t.propsDefaults=Object.create(null),Rh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:nh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function X_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Cr(t.emitsOptions,d))continue;const _=e[d];if(l)if(re(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const v=Ct(d);i[v]=No(l,a,v,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Rh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=fs(h))===h||!re(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=No(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!re(e,h))&&(delete r[h],c=!0)}c&&Dt(t,"set","$attrs")}function Rh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ki(l))continue;const c=e[l];let u;i&&re(i,u=Ct(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Cr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ue(n),c=a||ye;for(let u=0;u<r.length;u++){const h=r[u];n[h]=No(i,l,h,c[h],t,!re(c,h))}}return o}function No(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(ss(i),s=c[n]=l.call(null,e),In())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===fs(n))&&(s=!0))}return s}function Ah(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=h=>{l=!0;const[d,_]=Ah(h,e,!0);Le(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ee(t)&&s.set(t,zn),zn;if(K(r))for(let u=0;u<r.length;u++){const h=Ct(r[u]);Yl(h)&&(o[h]=ye)}else if(r)for(const u in r){const h=Ct(u);if(Yl(h)){const d=r[u],_=o[h]=K(d)||Q(d)?{type:d}:Le({},d);if(_){const v=Jl(Boolean,_.type),m=Jl(String,_.type);_[0]=v>-1,_[1]=m<0||v<m,(v>-1||re(_,"default"))&&a.push(h)}}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function Yl(t){return t[0]!=="$"}function Ql(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Xl(t,e){return Ql(t)===Ql(e)}function Jl(t,e){return K(e)?e.findIndex(n=>Xl(n,t)):Q(e)&&Xl(e,t)?0:-1}const Ph=t=>t[0]==="_"||t==="$stable",wa=t=>K(t)?t.map(mt):[mt(t)],J_=(t,e,n)=>{if(e._n)return e;const s=E_((...i)=>wa(e(...i)),n);return s._c=!1,s},Nh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ph(i))continue;const r=t[i];if(Q(r))e[i]=J_(i,r,s);else if(r!=null){const o=wa(r);e[i]=()=>o}}},Oh=(t,e)=>{const n=wa(e);t.slots.default=()=>n},Z_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),$i(e,"_",n)):Nh(e,t.slots={})}else t.slots={},e&&Oh(t,e);$i(t.slots,Sr,1)},eg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Le(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Nh(e,i)),o=e}else e&&(Oh(t,e),o={default:1});if(r)for(const a in i)!Ph(a)&&o[a]==null&&delete i[a]};function Oo(t,e,n,s,i=!1){if(K(t)){t.forEach((d,_)=>Oo(d,e&&(K(e)?e[_]:e),n,s,i));return}if(Ms(s)&&!i)return;const r=s.shapeFlag&4?Ta(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Pe(c)?(u[c]=null,re(h,c)&&(h[c]=null)):qe(c)&&(c.value=null)),Q(l))Jt(l,a,12,[o,u]);else{const d=Pe(l),_=qe(l);if(d||_){const v=()=>{if(t.f){const m=d?re(h,l)?h[l]:u[l]:l.value;i?K(m)&&ca(m,r):K(m)?m.includes(r)||m.push(r):d?(u[l]=[r],re(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,re(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,je(v,n)):v()}}}const je=A_;function tg(t){return ng(t)}function ng(t,e){const n=bo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=yt,insertStaticContent:v}=t,m=(f,p,g,y=null,b=null,C=null,D=!1,A=null,O=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ts(f,p)&&(y=E(f),se(f,b,C,!0),f=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:I,ref:H,shapeFlag:U}=p;switch(I){case Tr:N(f,p,g,y);break;case an:L(f,p,g,y);break;case Jr:f==null&&F(p,g,y,D);break;case it:et(f,p,g,y,b,C,D,A,O);break;default:U&1?ae(f,p,g,y,b,C,D,A,O):U&6?Je(f,p,g,y,b,C,D,A,O):(U&64||U&128)&&I.process(f,p,g,y,b,C,D,A,O,R)}H!=null&&b&&Oo(H,f&&f.ref,C,p||f,!p)},N=(f,p,g,y)=>{if(f==null)s(p.el=a(p.children),g,y);else{const b=p.el=f.el;p.children!==f.children&&c(b,p.children)}},L=(f,p,g,y)=>{f==null?s(p.el=l(p.children||""),g,y):p.el=f.el},F=(f,p,g,y)=>{[f.el,f.anchor]=v(f.children,p,g,y,f.el,f.anchor)},B=({el:f,anchor:p},g,y)=>{let b;for(;f&&f!==p;)b=d(f),s(f,g,y),f=b;s(p,g,y)},$=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},ae=(f,p,g,y,b,C,D,A,O)=>{D=D||p.type==="svg",f==null?le(p,g,y,b,C,D,A,O):Se(f,p,b,C,D,A,O)},le=(f,p,g,y,b,C,D,A)=>{let O,I;const{type:H,props:U,shapeFlag:W,transition:Y,dirs:ie}=f;if(O=f.el=o(f.type,C,U&&U.is,U),W&8?u(O,f.children):W&16&&Ne(f.children,O,null,y,b,C&&H!=="foreignObject",D,A),ie&&pn(f,null,y,"created"),Ie(O,f,f.scopeId,D,y),U){for(const de in U)de!=="value"&&!ki(de)&&r(O,de,null,U[de],C,f.children,y,b,we);"value"in U&&r(O,"value",null,U.value),(I=U.onVnodeBeforeMount)&&gt(I,y,f)}ie&&pn(f,null,y,"beforeMount");const _e=sg(b,Y);_e&&Y.beforeEnter(O),s(O,p,g),((I=U&&U.onVnodeMounted)||_e||ie)&&je(()=>{I&&gt(I,y,f),_e&&Y.enter(O),ie&&pn(f,null,y,"mounted")},b)},Ie=(f,p,g,y,b)=>{if(g&&_(f,g),y)for(let C=0;C<y.length;C++)_(f,y[C]);if(b){let C=b.subTree;if(p===C){const D=b.vnode;Ie(f,D,D.scopeId,D.slotScopeIds,b.parent)}}},Ne=(f,p,g,y,b,C,D,A,O=0)=>{for(let I=O;I<f.length;I++){const H=f[I]=A?Vt(f[I]):mt(f[I]);m(null,H,p,g,y,b,C,D,A)}},Se=(f,p,g,y,b,C,D)=>{const A=p.el=f.el;let{patchFlag:O,dynamicChildren:I,dirs:H}=p;O|=f.patchFlag&16;const U=f.props||ye,W=p.props||ye;let Y;g&&_n(g,!1),(Y=W.onVnodeBeforeUpdate)&&gt(Y,g,p,f),H&&pn(p,f,g,"beforeUpdate"),g&&_n(g,!0);const ie=b&&p.type!=="foreignObject";if(I?ce(f.dynamicChildren,I,A,g,y,ie,C):D||w(f,p,A,null,g,y,ie,C,!1),O>0){if(O&16)te(A,p,U,W,g,y,b);else if(O&2&&U.class!==W.class&&r(A,"class",null,W.class,b),O&4&&r(A,"style",U.style,W.style,b),O&8){const _e=p.dynamicProps;for(let de=0;de<_e.length;de++){const Te=_e[de],nt=U[Te],Ln=W[Te];(Ln!==nt||Te==="value")&&r(A,Te,nt,Ln,b,f.children,g,y,we)}}O&1&&f.children!==p.children&&u(A,p.children)}else!D&&I==null&&te(A,p,U,W,g,y,b);((Y=W.onVnodeUpdated)||H)&&je(()=>{Y&&gt(Y,g,p,f),H&&pn(p,f,g,"updated")},y)},ce=(f,p,g,y,b,C,D)=>{for(let A=0;A<p.length;A++){const O=f[A],I=p[A],H=O.el&&(O.type===it||!Ts(O,I)||O.shapeFlag&70)?h(O.el):g;m(O,I,H,null,y,b,C,D,!0)}},te=(f,p,g,y,b,C,D)=>{if(g!==y){if(g!==ye)for(const A in g)!ki(A)&&!(A in y)&&r(f,A,g[A],null,D,p.children,b,C,we);for(const A in y){if(ki(A))continue;const O=y[A],I=g[A];O!==I&&A!=="value"&&r(f,A,I,O,D,p.children,b,C,we)}"value"in y&&r(f,"value",g.value,y.value)}},et=(f,p,g,y,b,C,D,A,O)=>{const I=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:W,slotScopeIds:Y}=p;Y&&(A=A?A.concat(Y):Y),f==null?(s(I,g,y),s(H,g,y),Ne(p.children,g,H,b,C,D,A,O)):U>0&&U&64&&W&&f.dynamicChildren?(ce(f.dynamicChildren,W,g,b,C,D,A),(p.key!=null||b&&p===b.subTree)&&kh(f,p,!0)):w(f,p,g,H,b,C,D,A,O)},Je=(f,p,g,y,b,C,D,A,O)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?b.ctx.activate(p,g,y,D,O):V(p,g,y,b,C,D,O):k(f,p,O)},V=(f,p,g,y,b,C,D)=>{const A=f.component=fg(f,y,b);if(bh(f)&&(A.ctx.renderer=R),pg(A),A.asyncDep){if(b&&b.registerDep(A,T),!f.el){const O=A.subTree=Ve(an);L(null,O,p,g)}return}T(A,f,p,g,b,C,D)},k=(f,p,g)=>{const y=p.component=f.component;if(C_(f,p,g))if(y.asyncDep&&!y.asyncResolved){P(y,p,g);return}else y.next=p,g_(y.update),y.update();else p.el=f.el,y.vnode=p},T=(f,p,g,y,b,C,D)=>{const A=()=>{if(f.isMounted){let{next:H,bu:U,u:W,parent:Y,vnode:ie}=f,_e=H,de;_n(f,!1),H?(H.el=ie.el,P(f,H,D)):H=ie,U&&qr(U),(de=H.props&&H.props.onVnodeBeforeUpdate)&&gt(de,Y,H,ie),_n(f,!0);const Te=Qr(f),nt=f.subTree;f.subTree=Te,m(nt,Te,h(nt.el),E(nt),f,b,C),H.el=Te.el,_e===null&&I_(f,Te.el),W&&je(W,b),(de=H.props&&H.props.onVnodeUpdated)&&je(()=>gt(de,Y,H,ie),b)}else{let H;const{el:U,props:W}=p,{bm:Y,m:ie,parent:_e}=f,de=Ms(p);if(_n(f,!1),Y&&qr(Y),!de&&(H=W&&W.onVnodeBeforeMount)&&gt(H,_e,p),_n(f,!0),U&&X){const Te=()=>{f.subTree=Qr(f),X(U,f.subTree,f,b,null)};de?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=Qr(f);m(null,Te,g,y,f,b,C),p.el=Te.el}if(ie&&je(ie,b),!de&&(H=W&&W.onVnodeMounted)){const Te=p;je(()=>gt(H,_e,Te),b)}(p.shapeFlag&256||_e&&Ms(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&je(f.a,b),f.isMounted=!0,p=g=y=null}},O=f.effect=new pa(A,()=>Ea(I),f.scope),I=f.update=()=>O.run();I.id=f.uid,_n(f,!0),I()},P=(f,p,g)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,X_(f,p.props,y,g),eg(f,p.children,g),ps(),Wl(f),_s()},w=(f,p,g,y,b,C,D,A,O=!1)=>{const I=f&&f.children,H=f?f.shapeFlag:0,U=p.children,{patchFlag:W,shapeFlag:Y}=p;if(W>0){if(W&128){z(I,U,g,y,b,C,D,A,O);return}else if(W&256){j(I,U,g,y,b,C,D,A,O);return}}Y&8?(H&16&&we(I,b,C),U!==I&&u(g,U)):H&16?Y&16?z(I,U,g,y,b,C,D,A,O):we(I,b,C,!0):(H&8&&u(g,""),Y&16&&Ne(U,g,y,b,C,D,A,O))},j=(f,p,g,y,b,C,D,A,O)=>{f=f||zn,p=p||zn;const I=f.length,H=p.length,U=Math.min(I,H);let W;for(W=0;W<U;W++){const Y=p[W]=O?Vt(p[W]):mt(p[W]);m(f[W],Y,g,null,b,C,D,A,O)}I>H?we(f,b,C,!0,!1,U):Ne(p,g,y,b,C,D,A,O,U)},z=(f,p,g,y,b,C,D,A,O)=>{let I=0;const H=p.length;let U=f.length-1,W=H-1;for(;I<=U&&I<=W;){const Y=f[I],ie=p[I]=O?Vt(p[I]):mt(p[I]);if(Ts(Y,ie))m(Y,ie,g,null,b,C,D,A,O);else break;I++}for(;I<=U&&I<=W;){const Y=f[U],ie=p[W]=O?Vt(p[W]):mt(p[W]);if(Ts(Y,ie))m(Y,ie,g,null,b,C,D,A,O);else break;U--,W--}if(I>U){if(I<=W){const Y=W+1,ie=Y<H?p[Y].el:y;for(;I<=W;)m(null,p[I]=O?Vt(p[I]):mt(p[I]),g,ie,b,C,D,A,O),I++}}else if(I>W)for(;I<=U;)se(f[I],b,C,!0),I++;else{const Y=I,ie=I,_e=new Map;for(I=ie;I<=W;I++){const Ze=p[I]=O?Vt(p[I]):mt(p[I]);Ze.key!=null&&_e.set(Ze.key,I)}let de,Te=0;const nt=W-ie+1;let Ln=!1,Ol=0;const Is=new Array(nt);for(I=0;I<nt;I++)Is[I]=0;for(I=Y;I<=U;I++){const Ze=f[I];if(Te>=nt){se(Ze,b,C,!0);continue}let _t;if(Ze.key!=null)_t=_e.get(Ze.key);else for(de=ie;de<=W;de++)if(Is[de-ie]===0&&Ts(Ze,p[de])){_t=de;break}_t===void 0?se(Ze,b,C,!0):(Is[_t-ie]=I+1,_t>=Ol?Ol=_t:Ln=!0,m(Ze,p[_t],g,null,b,C,D,A,O),Te++)}const kl=Ln?ig(Is):zn;for(de=kl.length-1,I=nt-1;I>=0;I--){const Ze=ie+I,_t=p[Ze],xl=Ze+1<H?p[Ze+1].el:y;Is[I]===0?m(null,_t,g,xl,b,C,D,A,O):Ln&&(de<0||I!==kl[de]?ne(_t,g,xl,2):de--)}}},ne=(f,p,g,y,b=null)=>{const{el:C,type:D,transition:A,children:O,shapeFlag:I}=f;if(I&6){ne(f.component.subTree,p,g,y);return}if(I&128){f.suspense.move(p,g,y);return}if(I&64){D.move(f,p,g,R);return}if(D===it){s(C,p,g);for(let U=0;U<O.length;U++)ne(O[U],p,g,y);s(f.anchor,p,g);return}if(D===Jr){B(f,p,g);return}if(y!==2&&I&1&&A)if(y===0)A.beforeEnter(C),s(C,p,g),je(()=>A.enter(C),b);else{const{leave:U,delayLeave:W,afterLeave:Y}=A,ie=()=>s(C,p,g),_e=()=>{U(C,()=>{ie(),Y&&Y()})};W?W(C,ie,_e):_e()}else s(C,p,g)},se=(f,p,g,y=!1,b=!1)=>{const{type:C,props:D,ref:A,children:O,dynamicChildren:I,shapeFlag:H,patchFlag:U,dirs:W}=f;if(A!=null&&Oo(A,null,g,f,!0),H&256){p.ctx.deactivate(f);return}const Y=H&1&&W,ie=!Ms(f);let _e;if(ie&&(_e=D&&D.onVnodeBeforeUnmount)&&gt(_e,p,f),H&6)Me(f.component,g,y);else{if(H&128){f.suspense.unmount(g,y);return}Y&&pn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,b,R,y):I&&(C!==it||U>0&&U&64)?we(I,p,g,!1,!0):(C===it&&U&384||!b&&H&16)&&we(O,p,g),y&&me(f)}(ie&&(_e=D&&D.onVnodeUnmounted)||Y)&&je(()=>{_e&&gt(_e,p,f),Y&&pn(f,null,p,"unmounted")},g)},me=f=>{const{type:p,el:g,anchor:y,transition:b}=f;if(p===it){be(g,y);return}if(p===Jr){$(f);return}const C=()=>{i(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:D,delayLeave:A}=b,O=()=>D(g,C);A?A(f.el,C,O):O()}else C()},be=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Me=(f,p,g)=>{const{bum:y,scope:b,update:C,subTree:D,um:A}=f;y&&qr(y),b.stop(),C&&(C.active=!1,se(D,f,p,g)),A&&je(A,p),je(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},we=(f,p,g,y=!1,b=!1,C=0)=>{for(let D=C;D<f.length;D++)se(f[D],p,g,y,b)},E=f=>f.shapeFlag&6?E(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),x=(f,p,g)=>{f==null?p._vnode&&se(p._vnode,null,null,!0):m(p._vnode||null,f,p,null,null,null,g),Wl(),fh(),p._vnode=f},R={p:m,um:se,m:ne,r:me,mt:V,mc:Ne,pc:w,pbc:ce,n:E,o:t};let M,X;return e&&([M,X]=e(R)),{render:x,hydrate:M,createApp:Y_(x,M)}}function _n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kh(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Vt(i[r]),a.el=o.el),n||kh(o,a)),a.type===Tr&&(a.el=o.el)}}function ig(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const rg=t=>t.__isTeleport,it=Symbol.for("v-fgt"),Tr=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),Jr=Symbol.for("v-stc"),Ls=[];let lt=null;function xh(t=!1){Ls.push(lt=t?null:[])}function og(){Ls.pop(),lt=Ls[Ls.length-1]||null}let Ks=1;function Zl(t){Ks+=t}function Mh(t){return t.dynamicChildren=Ks>0?lt||zn:null,og(),Ks>0&&lt&&lt.push(t),t}function MT(t,e,n,s,i,r){return Mh(Fh(t,e,n,s,i,r,!0))}function Dh(t,e,n,s,i){return Mh(Ve(t,e,n,s,i,!0))}function Vi(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const Sr="__vInternal",Lh=({key:t})=>t??null,Mi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pe(t)||qe(t)||Q(t)?{i:He,r:t,k:e,f:!!n}:t:null);function Fh(t,e=null,n=null,s=0,i=null,r=t===it?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lh(e),ref:e&&Mi(e),scopeId:gh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:He};return a?(Ca(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Pe(n)?8:16),Ks>0&&!o&&lt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&lt.push(l),l}const Ve=ag;function ag(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===T_)&&(t=an),Vi(t)){const a=ns(t,e,!0);return n&&Ca(a,n),Ks>0&&!r&&lt&&(a.shapeFlag&6?lt[lt.indexOf(t)]=a:lt.push(a)),a.patchFlag|=-2,a}if(yg(t)&&(t=t.__vccOpts),e){e=lg(e);let{class:a,style:l}=e;a&&!Pe(a)&&(e.class=da(a)),Ee(l)&&(ih(l)&&!K(l)&&(l=Le({},l)),e.style=ha(l))}const o=Pe(t)?1:R_(t)?128:rg(t)?64:Ee(t)?4:Q(t)?2:0;return Fh(t,e,n,s,i,o,r,!0)}function lg(t){return t?ih(t)||Sr in t?Le({},t):t:null}function ns(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?ug(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Lh(a),ref:e&&e.ref?n&&i?K(i)?i.concat(Mi(e)):[i,Mi(e)]:Mi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ns(t.ssContent),ssFallback:t.ssFallback&&ns(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function cg(t=" ",e=0){return Ve(Tr,null,t,e)}function DT(t="",e=!1){return e?(xh(),Dh(an,null,t)):Ve(an,null,t)}function mt(t){return t==null||typeof t=="boolean"?Ve(an):K(t)?Ve(it,null,t.slice()):typeof t=="object"?Vt(t):Ve(Tr,null,String(t))}function Vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ns(t)}function Ca(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ca(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Sr in e)?e._ctx=He:i===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[cg(e)]):n=8);t.children=e,t.shapeFlag|=n}function ug(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=da([e.class,s.class]));else if(i==="style")e.style=ha([e.style,s.style]);else if(mr(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function gt(t,e,n,s=null){ht(t,e,7,[n,s])}const hg=Sh();let dg=0;function fg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||hg,r={uid:dg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ah(s,i),emitsOptions:_h(s,i),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=y_.bind(null,r),t.ce&&t.ce(r),r}let De=null,Ia,Fn,ec="__VUE_INSTANCE_SETTERS__";(Fn=bo()[ec])||(Fn=bo()[ec]=[]),Fn.push(t=>De=t),Ia=t=>{Fn.length>1?Fn.forEach(e=>e(t)):Fn[0](t)};const ss=t=>{Ia(t),t.scope.on()},In=()=>{De&&De.scope.off(),Ia(null)};function Uh(t){return t.vnode.shapeFlag&4}let qs=!1;function pg(t,e=!1){qs=e;const{props:n,children:s}=t.vnode,i=Uh(t);Q_(t,n,i,e),Z_(t,s);const r=i?_g(t,e):void 0;return qs=!1,r}function _g(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rh(new Proxy(t.ctx,W_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?mg(t):null;ss(t),ps();const r=Jt(s,t,0,[t.props,i]);if(_s(),In(),Hu(r)){if(r.then(In,In),e)return r.then(o=>{tc(t,o,e)}).catch(o=>{wr(o,t,0)});t.asyncDep=r}else tc(t,r,e)}else $h(t,e)}function tc(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=ch(e)),$h(t,n)}let nc;function $h(t,e,n){const s=t.type;if(!t.render){if(!e&&nc&&!s.render){const i=s.template||ba(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Le(Le({isCustomElement:r,delimiters:a},o),l);s.render=nc(i,c)}}t.render=s.render||yt}{ss(t),ps();try{j_(t)}finally{_s(),In()}}}function gg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ke(t,"get","$attrs"),e[n]}}))}function mg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return gg(t)},slots:t.slots,emit:t.emit,expose:e}}function Ta(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ch(rh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ds)return Ds[n](t)},has(e,n){return n in e||n in Ds}}))}function vg(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function yg(t){return Q(t)&&"__vccOpts"in t}const ot=(t,e)=>f_(t,e,qs);function Bh(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!K(e)?Vi(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vi(n)&&(n=[n]),Ve(t,e,n))}const Eg=Symbol.for("v-scx"),bg=()=>Et(Eg),wg="3.3.13",Cg="http://www.w3.org/2000/svg",yn=typeof document<"u"?document:null,sc=yn&&yn.createElement("template"),Ig={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?yn.createElementNS(Cg,t):yn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{sc.innerHTML=s?`<svg>${t}</svg>`:t;const a=sc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Tg=Symbol("_vtc");function Sg(t,e,n){const s=t[Tg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rg=Symbol("_vod"),Ag=Symbol("");function Pg(t,e,n){const s=t.style,i=Pe(n);if(n&&!i){if(e&&!Pe(e))for(const r in e)n[r]==null&&ko(s,r,"");for(const r in n)ko(s,r,n[r])}else{const r=s.display;if(i){if(e!==n){const o=s[Ag];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");Rg in t&&(s.display=r)}}const ic=/\s*!important$/;function ko(t,e,n){if(K(n))n.forEach(s=>ko(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ng(t,e);ic.test(n)?t.setProperty(fs(s),n.replace(ic,""),"important"):t[s]=n}}const rc=["Webkit","Moz","ms"],Zr={};function Ng(t,e){const n=Zr[e];if(n)return n;let s=Ct(e);if(s!=="filter"&&s in t)return Zr[e]=s;s=Er(s);for(let i=0;i<rc.length;i++){const r=rc[i]+s;if(r in t)return Zr[e]=r}return e}const oc="http://www.w3.org/1999/xlink";function Og(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(oc,e.slice(6,e.length)):t.setAttributeNS(oc,e,n);else{const r=Up(e);n==null||r&&!Vu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function kg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Vu(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function xg(t,e,n,s){t.addEventListener(e,n,s)}function Mg(t,e,n,s){t.removeEventListener(e,n,s)}const ac=Symbol("_vei");function Dg(t,e,n,s,i=null){const r=t[ac]||(t[ac]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Lg(e);if(s){const c=r[e]=$g(s,i);xg(t,a,c,l)}else o&&(Mg(t,a,o,l),r[e]=void 0)}}const lc=/(?:Once|Passive|Capture)$/;function Lg(t){let e;if(lc.test(t)){e={};let s;for(;s=t.match(lc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}let eo=0;const Fg=Promise.resolve(),Ug=()=>eo||(Fg.then(()=>eo=0),eo=Date.now());function $g(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(Bg(s,n.value),e,5,[s])};return n.value=t,n.attached=Ug(),n}function Bg(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const cc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Hg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Sg(t,s,i):e==="style"?Pg(t,n,s):mr(e)?la(e)||Dg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wg(t,e,s,i))?kg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Og(t,e,s,i))};function Wg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&cc(e)&&Q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return cc(e)&&Pe(n)?!1:e in t}const jg=Le({patchProp:Hg},Ig);let uc;function Vg(){return uc||(uc=tg(jg))}const LT=(...t)=>{const e=Vg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=zg(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zg(t){return Pe(t)?document.querySelector(t):t}function Gg(){return Hh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Hh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Kg=typeof Proxy=="function",qg="devtools-plugin:setup",Yg="plugin:settings:set";let Un,xo;function Qg(){var t;return Un!==void 0||(typeof window<"u"&&window.performance?(Un=!0,xo=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Un=!0,xo=global.perf_hooks.performance):Un=!1),Un}function Xg(){return Qg()?xo.now():Date.now()}class Jg{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return Xg()}},n&&n.on(Yg,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Zg(t,e){const n=t,s=Hh(),i=Gg(),r=Kg&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(qg,t,e);else{const o=r?new Jg(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Wh="store";function FT(t){return t===void 0&&(t=null),Et(t!==null?t:Wh)}function gs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function em(t){return t!==null&&typeof t=="object"}function tm(t){return t&&typeof t.then=="function"}function nm(t,e){return function(){return t(e)}}function jh(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Vh(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Rr(t,n,[],t._modules.root,!0),Sa(t,n,e)}function Sa(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};gs(i,function(o,a){r[a]=nm(o,t),Object.defineProperty(t.getters,a,{get:function(){return r[a]()},enumerable:!0})}),t._state=ai({data:e}),t.strict&&am(t),s&&n&&t._withCommit(function(){s.data=null})}function Rr(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=Ra(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=sm(t,o,n);s.forEachMutation(function(u,h){var d=o+h;im(t,d,u,c)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,_=u.handler||u;rm(t,d,_,c)}),s.forEachGetter(function(u,h){var d=o+h;om(t,d,u,c)}),s.forEachChild(function(u,h){Rr(t,e,n.concat(h),u,i)})}function sm(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var l=zi(r,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:s?t.commit:function(r,o,a){var l=zi(r,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return zh(t,e)}},state:{get:function(){return Ra(t.state,n)}}}),i}function zh(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function im(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function rm(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return tm(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function om(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function am(t){Qn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Ra(t,e){return e.reduce(function(n,s){return n[s]},t)}function zi(t,e,n){return em(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var lm="vuex bindings",hc="vuex:mutations",to="vuex:actions",$n="vuex",cm=0;function um(t,e){Zg({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[lm]},function(n){n.addTimelineLayer({id:hc,label:"Vuex Mutations",color:dc}),n.addTimelineLayer({id:to,label:"Vuex Actions",color:dc}),n.addInspector({id:$n,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===$n)if(s.filter){var i=[];Yh(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[qh(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===$n){var i=s.nodeId;zh(e,i),s.state=fm(_m(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===$n){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree($n),n.sendInspectorState($n),n.addTimelineEvent({layerId:hc,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=cm++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:to,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:to,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var dc=8702998,hm=6710886,dm=16777215,Gh={label:"namespaced",textColor:dm,backgroundColor:hm};function Kh(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function qh(t,e){return{id:e||"root",label:Kh(e),tags:t.namespaced?[Gh]:[],children:Object.keys(t._children).map(function(n){return qh(t._children[n],e+n+"/")})}}function Yh(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Gh]:[]}),Object.keys(e._children).forEach(function(i){Yh(t,e._children[i],n,s+i+"/")})}function fm(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=pm(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Kh(o):o,editable:!1,value:Mo(function(){return r[o]})}})}return i}function pm(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=Mo(function(){return t[n]})}else e[n]=Mo(function(){return t[n]})}),e}function _m(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Mo(t){try{return t()}catch(e){return e}}var pt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Qh={namespaced:{configurable:!0}};Qh.namespaced.get=function(){return!!this._rawModule.namespaced};pt.prototype.addChild=function(e,n){this._children[e]=n};pt.prototype.removeChild=function(e){delete this._children[e]};pt.prototype.getChild=function(e){return this._children[e]};pt.prototype.hasChild=function(e){return e in this._children};pt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};pt.prototype.forEachChild=function(e){gs(this._children,e)};pt.prototype.forEachGetter=function(e){this._rawModule.getters&&gs(this._rawModule.getters,e)};pt.prototype.forEachAction=function(e){this._rawModule.actions&&gs(this._rawModule.actions,e)};pt.prototype.forEachMutation=function(e){this._rawModule.mutations&&gs(this._rawModule.mutations,e)};Object.defineProperties(pt.prototype,Qh);var xn=function(e){this.register([],e,!1)};xn.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};xn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};xn.prototype.update=function(e){Xh([],this.root,e)};xn.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new pt(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&gs(n.modules,function(a,l){i.register(e.concat(l),a,s)})};xn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};xn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Xh(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Xh(t.concat(s),e.getChild(s),n.modules[s])}}function UT(t){return new Qe(t)}var Qe=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new xn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(d,_){return l.call(o,d,_)},this.commit=function(d,_,v){return c.call(o,d,_,v)},this.strict=i;var u=this._modules.root.state;Rr(this,u,[],this._modules.root),Sa(this,u),s.forEach(function(h){return h(n)})},Aa={state:{configurable:!0}};Qe.prototype.install=function(e,n){e.provide(n||Wh,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&um(e,this)};Aa.state.get=function(){return this._state.data};Aa.state.set=function(t){};Qe.prototype.commit=function(e,n,s){var i=this,r=zi(e,n,s),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};Qe.prototype.dispatch=function(e,n){var s=this,i=zi(e,n),r=i.type,o=i.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(d){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(a,s.state,d)})}catch{}h(d)})})}};Qe.prototype.subscribe=function(e,n){return jh(e,this._subscribers,n)};Qe.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return jh(s,this._actionSubscribers,n)};Qe.prototype.watch=function(e,n,s){var i=this;return Qn(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Qe.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Qe.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Rr(this,this.state,e,this._modules.get(e),s.preserveState),Sa(this,this.state)};Qe.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Ra(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Vh(this)};Qe.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Qe.prototype.hotUpdate=function(e){this._modules.update(e),Vh(this,!0)};Qe.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Qe.prototype,Aa);var Jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ed={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Jh,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",a="minute",l="hour",c="day",u="week",h="month",d="quarter",_="year",v="date",m="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(V){var k=["th","st","nd","rd"],T=V%100;return"["+V+(k[(T-20)%10]||k[T]||k[0])+"]"}},B=function(V,k,T){var P=String(V);return!P||P.length>=k?V:""+Array(k+1-P.length).join(T)+V},$={s:B,z:function(V){var k=-V.utcOffset(),T=Math.abs(k),P=Math.floor(T/60),w=T%60;return(k<=0?"+":"-")+B(P,2,"0")+":"+B(w,2,"0")},m:function V(k,T){if(k.date()<T.date())return-V(T,k);var P=12*(T.year()-k.year())+(T.month()-k.month()),w=k.clone().add(P,h),j=T-w<0,z=k.clone().add(P+(j?-1:1),h);return+(-(P+(T-w)/(j?w-z:z-w))||0)},a:function(V){return V<0?Math.ceil(V)||0:Math.floor(V)},p:function(V){return{M:h,y:_,w:u,d:c,D:v,h:l,m:a,s:o,ms:r,Q:d}[V]||String(V||"").toLowerCase().replace(/s$/,"")},u:function(V){return V===void 0}},ae="en",le={};le[ae]=F;var Ie="$isDayjsObject",Ne=function(V){return V instanceof et||!(!V||!V[Ie])},Se=function V(k,T,P){var w;if(!k)return ae;if(typeof k=="string"){var j=k.toLowerCase();le[j]&&(w=j),T&&(le[j]=T,w=j);var z=k.split("-");if(!w&&z.length>1)return V(z[0])}else{var ne=k.name;le[ne]=k,w=ne}return!P&&w&&(ae=w),w||!P&&ae},ce=function(V,k){if(Ne(V))return V.clone();var T=typeof k=="object"?k:{};return T.date=V,T.args=arguments,new et(T)},te=$;te.l=Se,te.i=Ne,te.w=function(V,k){return ce(V,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var et=function(){function V(T){this.$L=Se(T.locale,null,!0),this.parse(T),this.$x=this.$x||T.x||{},this[Ie]=!0}var k=V.prototype;return k.parse=function(T){this.$d=function(P){var w=P.date,j=P.utc;if(w===null)return new Date(NaN);if(te.u(w))return new Date;if(w instanceof Date)return new Date(w);if(typeof w=="string"&&!/Z$/i.test(w)){var z=w.match(N);if(z){var ne=z[2]-1||0,se=(z[7]||"0").substring(0,3);return j?new Date(Date.UTC(z[1],ne,z[3]||1,z[4]||0,z[5]||0,z[6]||0,se)):new Date(z[1],ne,z[3]||1,z[4]||0,z[5]||0,z[6]||0,se)}}return new Date(w)}(T),this.init()},k.init=function(){var T=this.$d;this.$y=T.getFullYear(),this.$M=T.getMonth(),this.$D=T.getDate(),this.$W=T.getDay(),this.$H=T.getHours(),this.$m=T.getMinutes(),this.$s=T.getSeconds(),this.$ms=T.getMilliseconds()},k.$utils=function(){return te},k.isValid=function(){return this.$d.toString()!==m},k.isSame=function(T,P){var w=ce(T);return this.startOf(P)<=w&&w<=this.endOf(P)},k.isAfter=function(T,P){return ce(T)<this.startOf(P)},k.isBefore=function(T,P){return this.endOf(P)<ce(T)},k.$g=function(T,P,w){return te.u(T)?this[P]:this.set(w,T)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(T,P){var w=this,j=!!te.u(P)||P,z=te.p(T),ne=function(R,M){var X=te.w(w.$u?Date.UTC(w.$y,M,R):new Date(w.$y,M,R),w);return j?X:X.endOf(c)},se=function(R,M){return te.w(w.toDate()[R].apply(w.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(M)),w)},me=this.$W,be=this.$M,Me=this.$D,we="set"+(this.$u?"UTC":"");switch(z){case _:return j?ne(1,0):ne(31,11);case h:return j?ne(1,be):ne(0,be+1);case u:var E=this.$locale().weekStart||0,x=(me<E?me+7:me)-E;return ne(j?Me-x:Me+(6-x),be);case c:case v:return se(we+"Hours",0);case l:return se(we+"Minutes",1);case a:return se(we+"Seconds",2);case o:return se(we+"Milliseconds",3);default:return this.clone()}},k.endOf=function(T){return this.startOf(T,!1)},k.$set=function(T,P){var w,j=te.p(T),z="set"+(this.$u?"UTC":""),ne=(w={},w[c]=z+"Date",w[v]=z+"Date",w[h]=z+"Month",w[_]=z+"FullYear",w[l]=z+"Hours",w[a]=z+"Minutes",w[o]=z+"Seconds",w[r]=z+"Milliseconds",w)[j],se=j===c?this.$D+(P-this.$W):P;if(j===h||j===_){var me=this.clone().set(v,1);me.$d[ne](se),me.init(),this.$d=me.set(v,Math.min(this.$D,me.daysInMonth())).$d}else ne&&this.$d[ne](se);return this.init(),this},k.set=function(T,P){return this.clone().$set(T,P)},k.get=function(T){return this[te.p(T)]()},k.add=function(T,P){var w,j=this;T=Number(T);var z=te.p(P),ne=function(be){var Me=ce(j);return te.w(Me.date(Me.date()+Math.round(be*T)),j)};if(z===h)return this.set(h,this.$M+T);if(z===_)return this.set(_,this.$y+T);if(z===c)return ne(1);if(z===u)return ne(7);var se=(w={},w[a]=s,w[l]=i,w[o]=n,w)[z]||1,me=this.$d.getTime()+T*se;return te.w(me,this)},k.subtract=function(T,P){return this.add(-1*T,P)},k.format=function(T){var P=this,w=this.$locale();if(!this.isValid())return w.invalidDate||m;var j=T||"YYYY-MM-DDTHH:mm:ssZ",z=te.z(this),ne=this.$H,se=this.$m,me=this.$M,be=w.weekdays,Me=w.months,we=w.meridiem,E=function(M,X,f,p){return M&&(M[X]||M(P,j))||f[X].slice(0,p)},x=function(M){return te.s(ne%12||12,M,"0")},R=we||function(M,X,f){var p=M<12?"AM":"PM";return f?p.toLowerCase():p};return j.replace(L,function(M,X){return X||function(f){switch(f){case"YY":return String(P.$y).slice(-2);case"YYYY":return te.s(P.$y,4,"0");case"M":return me+1;case"MM":return te.s(me+1,2,"0");case"MMM":return E(w.monthsShort,me,Me,3);case"MMMM":return E(Me,me);case"D":return P.$D;case"DD":return te.s(P.$D,2,"0");case"d":return String(P.$W);case"dd":return E(w.weekdaysMin,P.$W,be,2);case"ddd":return E(w.weekdaysShort,P.$W,be,3);case"dddd":return be[P.$W];case"H":return String(ne);case"HH":return te.s(ne,2,"0");case"h":return x(1);case"hh":return x(2);case"a":return R(ne,se,!0);case"A":return R(ne,se,!1);case"m":return String(se);case"mm":return te.s(se,2,"0");case"s":return String(P.$s);case"ss":return te.s(P.$s,2,"0");case"SSS":return te.s(P.$ms,3,"0");case"Z":return z}return null}(M)||z.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(T,P,w){var j,z=this,ne=te.p(P),se=ce(T),me=(se.utcOffset()-this.utcOffset())*s,be=this-se,Me=function(){return te.m(z,se)};switch(ne){case _:j=Me()/12;break;case h:j=Me();break;case d:j=Me()/3;break;case u:j=(be-me)/6048e5;break;case c:j=(be-me)/864e5;break;case l:j=be/i;break;case a:j=be/s;break;case o:j=be/n;break;default:j=be}return w?j:te.a(j)},k.daysInMonth=function(){return this.endOf(h).$D},k.$locale=function(){return le[this.$L]},k.locale=function(T,P){if(!T)return this.$L;var w=this.clone(),j=Se(T,P,!0);return j&&(w.$L=j),w},k.clone=function(){return te.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},V}(),Je=et.prototype;return ce.prototype=Je,[["$ms",r],["$s",o],["$m",a],["$H",l],["$W",c],["$M",h],["$y",_],["$D",v]].forEach(function(V){Je[V[1]]=function(k){return this.$g(k,V[0],V[1])}}),ce.extend=function(V,k){return V.$i||(V(k,et,ce),V.$i=!0),ce},ce.locale=Se,ce.isDayjs=Ne,ce.unix=function(V){return ce(1e3*V)},ce.en=le[ae],ce.Ls=le,ce.p={},ce})})(ed);var gm=ed.exports;const $T=Zh(gm);var td={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Jh,function(){var n="minute",s=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(r,o,a){var l=o.prototype;a.utc=function(m){var N={date:m,utc:!0,args:arguments};return new o(N)},l.utc=function(m){var N=a(this.toDate(),{locale:this.$L,utc:!0});return m?N.add(this.utcOffset(),n):N},l.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var c=l.parse;l.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),c.call(this,m)};var u=l.init;l.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else u.call(this)};var h=l.utcOffset;l.utcOffset=function(m,N){var L=this.$utils().u;if(L(m))return this.$u?0:L(this.$offset)?h.call(this):this.$offset;if(typeof m=="string"&&(m=function(ae){ae===void 0&&(ae="");var le=ae.match(s);if(!le)return null;var Ie=(""+le[0]).match(i)||["-",0,0],Ne=Ie[0],Se=60*+Ie[1]+ +Ie[2];return Se===0?0:Ne==="+"?Se:-Se}(m),m===null))return this;var F=Math.abs(m)<=16?60*m:m,B=this;if(N)return B.$offset=F,B.$u=m===0,B;if(m!==0){var $=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(B=this.local().add(F+$,n)).$offset=F,B.$x.$localOffset=$}else B=this.utc();return B};var d=l.format;l.format=function(m){var N=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,N)},l.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var _=l.toDate;l.toDate=function(m){return m==="s"&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():_.call(this)};var v=l.diff;l.diff=function(m,N,L){if(m&&this.$u===m.$u)return v.call(this,m,N,L);var F=this.local(),B=a(m).local();return v.call(F,B,N,L)}}})})(td);var mm=td.exports;const BT=Zh(mm);var fc={};/**
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
 */const nd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw ms(e)},ms=function(t){return new Error("Firebase Database ("+nd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const sd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new ym;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ym extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const id=function(t){const e=sd(t);return Pa.encodeByteArray(e,!0)},Gi=function(t){return id(t).replace(/\./g,"")},Ki=function(t){try{return Pa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Em(t){return rd(void 0,t)}function rd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bm(n)||(t[n]=rd(t[n],e[n]));return t}function bm(t){return t!=="__proto__"}/**
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
 */function wm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cm=()=>wm().__FIREBASE_DEFAULTS__,Im=()=>{if(typeof process>"u"||typeof fc>"u")return;const t=fc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ki(t[1]);return e&&JSON.parse(e)},Na=()=>{try{return Cm()||Im()||Tm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},od=t=>{var e,n;return(n=(e=Na())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sm=t=>{const e=od(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ad=()=>{var t;return(t=Na())===null||t===void 0?void 0:t.config},ld=t=>{var e;return(e=Na())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ar{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Rm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gi(JSON.stringify(n)),Gi(JSON.stringify(o)),a].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Am(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pm(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ud(){return nd.NODE_ADMIN===!0}function Nm(){try{return typeof indexedDB=="object"}catch{return!1}}function Om(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const km="FirebaseError";class fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=km,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xm(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fn(i,a,s)}}function xm(t,e){return t.replace(Mm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Mm=/\{\$([^}]+)}/g;/**
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
 */function Ys(t){return JSON.parse(t)}function Re(t){return JSON.stringify(t)}/**
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
 */const hd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ys(Ki(r[0])||""),n=Ys(Ki(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Dm=function(t){const e=hd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Lm=function(t){const e=hd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function St(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function is(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Do(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Yi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(pc(r)&&pc(o)){if(!Yi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function pc(t){return t!==null&&typeof t=="object"}/**
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
 */function vs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Fm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Um(t,e){const n=new $m(t,e);return n.subscribe.bind(n)}class $m{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Bm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=no),i.error===void 0&&(i.error=no),i.complete===void 0&&(i.complete=no);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function no(){}function Pr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Hm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class Wm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ar;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vm(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jm(t){return t===gn?void 0:t}function Vm(t){return t.instantiationMode==="EAGER"}/**
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
 */class zm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Gm={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Km=fe.INFO,qm={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Ym=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=qm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=Km,this._logHandler=Ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Qm=(t,e)=>e.some(n=>t instanceof n);let _c,gc;function Xm(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jm(){return gc||(gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dd=new WeakMap,Lo=new WeakMap,fd=new WeakMap,so=new WeakMap,xa=new WeakMap;function Zm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dd.set(n,t)}).catch(()=>{}),xa.set(e,t),e}function ev(t){if(Lo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Lo.set(t,e)}let Fo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tv(t){Fo=t(Fo)}function nv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(io(this),e,...n);return fd.set(s,e.sort?e.sort():[e]),Zt(s)}:Jm().includes(t)?function(...e){return t.apply(io(this),e),Zt(dd.get(this))}:function(...e){return Zt(t.apply(io(this),e))}}function sv(t){return typeof t=="function"?nv(t):(t instanceof IDBTransaction&&ev(t),Qm(t,Xm())?new Proxy(t,Fo):t)}function Zt(t){if(t instanceof IDBRequest)return Zm(t);if(so.has(t))return so.get(t);const e=sv(t);return e!==t&&(so.set(t,e),xa.set(e,t)),e}const io=t=>xa.get(t);function iv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const rv=["get","getKey","getAll","getAllKeys","count"],ov=["put","add","delete","clear"],ro=new Map;function mc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ro.get(e))return ro.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ov.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ro.set(e,r),r}tv(t=>({...t,get:(e,n,s)=>mc(e,n)||t.get(e,n,s),has:(e,n)=>!!mc(e,n)||t.has(e,n)}));/**
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
 */class av{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uo="@firebase/app",vc="0.9.25";/**
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
 */const Pn=new ka("@firebase/app"),cv="@firebase/app-compat",uv="@firebase/analytics-compat",hv="@firebase/analytics",dv="@firebase/app-check-compat",fv="@firebase/app-check",pv="@firebase/auth",_v="@firebase/auth-compat",gv="@firebase/database",mv="@firebase/database-compat",vv="@firebase/functions",yv="@firebase/functions-compat",Ev="@firebase/installations",bv="@firebase/installations-compat",wv="@firebase/messaging",Cv="@firebase/messaging-compat",Iv="@firebase/performance",Tv="@firebase/performance-compat",Sv="@firebase/remote-config",Rv="@firebase/remote-config-compat",Av="@firebase/storage",Pv="@firebase/storage-compat",Nv="@firebase/firestore",Ov="@firebase/firestore-compat",kv="firebase",xv="10.7.1";/**
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
 */const $o="[DEFAULT]",Mv={[Uo]:"fire-core",[cv]:"fire-core-compat",[hv]:"fire-analytics",[uv]:"fire-analytics-compat",[fv]:"fire-app-check",[dv]:"fire-app-check-compat",[pv]:"fire-auth",[_v]:"fire-auth-compat",[gv]:"fire-rtdb",[mv]:"fire-rtdb-compat",[vv]:"fire-fn",[yv]:"fire-fn-compat",[Ev]:"fire-iid",[bv]:"fire-iid-compat",[wv]:"fire-fcm",[Cv]:"fire-fcm-compat",[Iv]:"fire-perf",[Tv]:"fire-perf-compat",[Sv]:"fire-rc",[Rv]:"fire-rc-compat",[Av]:"fire-gcs",[Pv]:"fire-gcs-compat",[Nv]:"fire-fst",[Ov]:"fire-fst-compat","fire-js":"fire-js",[kv]:"fire-js-all"};/**
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
 */const Qi=new Map,Bo=new Map;function Dv(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(Bo.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Bo.set(e,t);for(const n of Qi.values())Dv(n,t);return!0}function Ma(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Lv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},en=new li("app","Firebase",Lv);/**
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
 */class Fv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=xv;function Uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$o,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw en.create("bad-app-name",{appName:String(i)});if(n||(n=ad()),!n)throw en.create("no-options");const r=Qi.get(i);if(r){if(Yi(n,r.options)&&Yi(s,r.config))return r;throw en.create("duplicate-app",{appName:i})}const o=new zm(i);for(const l of Bo.values())o.addComponent(l);const a=new Fv(n,s,o);return Qi.set(i,a),a}function pd(t=$o){const e=Qi.get(t);if(!e&&t===$o&&ad())return Uv();if(!e)throw en.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=Mv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}rs(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $v="firebase-heartbeat-database",Bv=1,Qs="firebase-heartbeat-store";let oo=null;function _d(){return oo||(oo=iv($v,Bv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qs)}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),oo}async function Hv(t){try{return await(await _d()).transaction(Qs).objectStore(Qs).get(gd(t))}catch(e){if(e instanceof fn)Pn.warn(e.message);else{const n=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function yc(t,e){try{const s=(await _d()).transaction(Qs,"readwrite");await s.objectStore(Qs).put(e,gd(t)),await s.done}catch(n){if(n instanceof fn)Pn.warn(n.message);else{const s=en.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(s.message)}}}function gd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wv=1024,jv=30*24*60*60*1e3;class Vv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ec();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ec(),{heartbeatsToSend:s,unsentEntries:i}=zv(this._heartbeatsCache.heartbeats),r=Gi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ec(){return new Date().toISOString().substring(0,10)}function zv(t,e=Wv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),bc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Gv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nm()?Om().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bc(t){return Gi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Kv(t){rs(new An("platform-logger",e=>new av(e),"PRIVATE")),rs(new An("heartbeat",e=>new Vv(e),"PRIVATE")),tn(Uo,vc,t),tn(Uo,vc,"esm2017"),tn("fire-js","")}Kv("");var qv="firebase",Yv="10.7.1";/**
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
 */tn(qv,Yv,"app");function Da(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function md(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qv=md,vd=new li("auth","Firebase",md());/**
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
 */const Xi=new ka("@firebase/auth");function Xv(t,...e){Xi.logLevel<=fe.WARN&&Xi.warn(`Auth (${ys}): ${t}`,...e)}function Di(t,...e){Xi.logLevel<=fe.ERROR&&Xi.error(`Auth (${ys}): ${t}`,...e)}/**
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
 */function It(t,...e){throw La(t,...e)}function bt(t,...e){return La(t,...e)}function yd(t,e,n){const s=Object.assign(Object.assign({},Qv()),{[e]:n});return new li("auth","Firebase",s).create(e,{appName:t.name})}function Jv(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&It(t,"argument-error"),yd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function La(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return vd.create(t,...e)}function q(t,e,...n){if(!t)throw La(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Di(e),new Error(e)}function Ut(t,e){t||kt(e)}/**
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
 */function Ho(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zv(){return wc()==="http:"||wc()==="https:"}function wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ey(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zv()||Am()||"connection"in navigator)?navigator.onLine:!0}function ty(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Oa()||cd()}get(){return ey()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fa(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ed{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ny={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sy=new ci(3e4,6e4);function Ua(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,s,i={}){return bd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=vs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ed.fetch()(wd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function bd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ny),e);try{const i=new ry(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Si(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Si(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Si(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yd(t,u,c);It(t,u)}}catch(i){if(i instanceof fn)throw i;It(t,"network-request-failed",{message:String(i)})}}async function iy(t,e,n,s,i={}){const r=await Es(t,e,n,s,i);return"mfaPendingCredential"in r&&It(t,"multi-factor-auth-required",{_serverResponse:r}),r}function wd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Fa(t.config,i):`${t.config.apiScheme}://${i}`}class ry{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bt(this.auth,"network-request-failed")),sy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Si(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=bt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function oy(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function ay(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ly(t,e=!1){const n=Xe(t),s=await n.getIdToken(e),i=$a(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Fs(ao(i.auth_time)),issuedAtTime:Fs(ao(i.iat)),expirationTime:Fs(ao(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ao(t){return Number(t)*1e3}function $a(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ki(n);return i?JSON.parse(i):(Di("Failed to decode base64 JWT payload"),null)}catch(i){return Di("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cy(t){const e=$a(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof fn&&uy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function uy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ji(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Xs(t,ay(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?py(r.providerUserInfo):[],a=fy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Cd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function dy(t){const e=Xe(t);await Ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function py(t){return t.map(e=>{var{providerId:n}=e,s=Da(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function _y(t,e){const n=await bd(t,{},async()=>{const s=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=wd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ed.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gy(t,e){return Es(t,"POST","/v2/accounts:revokeToken",Ua(t,e))}/**
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
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await _y(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Js;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Wt(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Da(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ly(this,e)}reload(){return dy(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ji(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xs(this,oy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,L=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:$,isAnonymous:ae,providerData:le,stsTokenManager:Ie}=n;q(B&&Ie,e,"internal-error");const Ne=Js.fromJSON(this.name,Ie);q(typeof B=="string",e,"internal-error"),Wt(h,e.name),Wt(d,e.name),q(typeof $=="boolean",e,"internal-error"),q(typeof ae=="boolean",e,"internal-error"),Wt(_,e.name),Wt(v,e.name),Wt(m,e.name),Wt(N,e.name),Wt(L,e.name),Wt(F,e.name);const Se=new Tn({uid:B,auth:e,email:d,emailVerified:$,displayName:h,isAnonymous:ae,photoURL:v,phoneNumber:_,tenantId:m,stsTokenManager:Ne,createdAt:L,lastLoginAt:F});return le&&Array.isArray(le)&&(Se.providerData=le.map(ce=>Object.assign({},ce))),N&&(Se._redirectEventId=N),Se}static async _fromIdTokenResponse(e,n,s=!1){const i=new Js;i.updateFromServerResponse(n);const r=new Tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ji(r),r}}/**
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
 */const Cc=new Map;function xt(t){Ut(t instanceof Function,"Expected a class definition");let e=Cc.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cc.set(t,e),e)}/**
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
 */class Id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Id.type="NONE";const Ic=Id;/**
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
 */function Li(t,e,n){return`firebase:${t}:${e}:${n}`}class Xn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Li(this.userKey,i.apiKey,r),this.fullPersistenceKey=Li("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xn(xt(Ic),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||xt(Ic);const o=Li(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Tn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Xn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Xn(r,e,s))}}/**
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
 */function Tc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Td(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pd(e))return"Blackberry";if(Nd(e))return"Webos";if(Ba(e))return"Safari";if((e.includes("chrome/")||Sd(e))&&!e.includes("edge/"))return"Chrome";if(Ad(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Td(t=$e()){return/firefox\//i.test(t)}function Ba(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sd(t=$e()){return/crios\//i.test(t)}function Rd(t=$e()){return/iemobile/i.test(t)}function Ad(t=$e()){return/android/i.test(t)}function Pd(t=$e()){return/blackberry/i.test(t)}function Nd(t=$e()){return/webos/i.test(t)}function Or(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function my(t=$e()){var e;return Or(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vy(){return Pm()&&document.documentMode===10}function Od(t=$e()){return Or(t)||Ad(t)||Nd(t)||Pd(t)||/windows phone/i.test(t)||Rd(t)}function yy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function kd(t,e=[]){let n;switch(t){case"Browser":n=Tc($e());break;case"Worker":n=`${Tc($e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${s}`}/**
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
 */class Ey{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function by(t,e={}){return Es(t,"GET","/v2/passwordPolicy",Ua(t,e))}/**
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
 */const wy=6;class Cy{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Iy{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sc(this),this.idTokenSubscription=new Sc(this),this.beforeStateQueue=new Ey(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Xn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ji(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ty()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await by(this),n=new Cy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await gy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Xn.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kr(t){return Xe(t)}class Sc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Um(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Ty(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Sy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=bt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Ty().appendChild(s)})}function Ry(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ay(t,e){const n=Ma(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Yi(r,e??{}))return i;It(i,"already-initialized")}return n.initialize({options:e})}function Py(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ny(t,e,n){const s=kr(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=xd(e),{host:o,port:a}=Oy(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ky()}function xd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Oy(t){const e=xd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Rc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Rc(o)}}}function Rc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ky(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
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
 */async function Jn(t,e){return iy(t,"POST","/v1/accounts:signInWithIdp",Ua(t,e))}/**
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
 */const xy="http://localhost";class Nn extends Md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Da(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Nn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Jn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:xy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vs(n)}return e}}/**
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
 */class Ha{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ui extends Ha{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gt extends ui{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
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
 */class Kt extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kt.credential(n,s)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
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
 */class qt extends ui{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Yt extends ui{constructor(){super("twitter.com")}static credential(e,n){return Nn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
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
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Tn._fromIdTokenResponse(e,s,i),o=Ac(s);return new os({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Ac(s);return new os({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Ac(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zi extends fn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Zi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Zi(e,n,s,i)}}function Dd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Zi._fromErrorAndOperation(t,r,e,s):r})}async function My(t,e,n=!1){const s=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",s)}/**
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
 */async function Dy(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Xs(t,Dd(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=$a(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),os._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&It(s,"user-mismatch"),r}}/**
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
 */async function Ly(t,e,n=!1){const s="signIn",i=await Dd(t,s,e),r=await os._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Fy(t,e,n,s){return Xe(t).onIdTokenChanged(e,n,s)}function Uy(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function HT(t){return Xe(t).signOut()}const er="__sak";/**
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
 */class Ld{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(er,"1"),this.storage.removeItem(er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $y(){const t=$e();return Ba(t)||Or(t)}const By=1e3,Hy=10;class Fd extends Ld{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$y()&&yy(),this.fallbackToPolling=Od(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);vy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hy):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},By)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fd.type="LOCAL";const Wy=Fd;/**
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
 */class Ud extends Ld{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ud.type="SESSION";const $d=Ud;/**
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
 */function jy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new xr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await jy(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xr.receivers=[];/**
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
 */function Wa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Wa("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wt(){return window}function zy(t){wt().location.href=t}/**
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
 */function Bd(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function Gy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ky(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qy(){return Bd()?self:null}/**
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
 */const Hd="firebaseLocalStorageDb",Yy=1,tr="firebaseLocalStorage",Wd="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mr(t,e){return t.transaction([tr],e?"readwrite":"readonly").objectStore(tr)}function Qy(){const t=indexedDB.deleteDatabase(Hd);return new hi(t).toPromise()}function Wo(){const t=indexedDB.open(Hd,Yy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(tr,{keyPath:Wd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(tr)?e(s):(s.close(),await Qy(),e(await Wo()))})})}async function Pc(t,e,n){const s=Mr(t,!0).put({[Wd]:e,value:n});return new hi(s).toPromise()}async function Xy(t,e){const n=Mr(t,!1).get(e),s=await new hi(n).toPromise();return s===void 0?null:s.value}function Nc(t,e){const n=Mr(t,!0).delete(e);return new hi(n).toPromise()}const Jy=800,Zy=3;class jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Zy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xr._getInstance(qy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gy(),!this.activeServiceWorker)return;this.sender=new Vy(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ky()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wo();return await Pc(e,er,"1"),await Nc(e,er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Xy(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Mr(i,!1).getAll();return new hi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jd.type="LOCAL";const eE=jd;new ci(3e4,6e4);/**
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
 */function Vd(t,e){return e?xt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ja extends Md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tE(t){return Ly(t.auth,new ja(t),t.bypassAuthState)}function nE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Dy(n,new ja(t),t.bypassAuthState)}async function sE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),My(n,new ja(t),t.bypassAuthState)}/**
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
 */class zd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tE;case"linkViaPopup":case"linkViaRedirect":return sE;case"reauthViaPopup":case"reauthViaRedirect":return nE;default:It(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iE=new ci(2e3,1e4);async function WT(t,e,n){const s=kr(t);Jv(t,e,Ha);const i=Vd(s,n);return new En(s,"signInViaPopup",e,i).executeNotNull()}class En extends zd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iE.get())};e()}}En.currentPopupAction=null;/**
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
 */const rE="pendingRedirect",Fi=new Map;class oE extends zd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Fi.get(this.auth._key());if(!e){try{const s=await aE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Fi.set(this.auth._key(),e)}return this.bypassAuthState||Fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aE(t,e){const n=uE(e),s=cE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function lE(t,e){Fi.set(t._key(),e)}function cE(t){return xt(t._redirectPersistence)}function uE(t){return Li(rE,t.config.apiKey,t.name)}async function hE(t,e,n=!1){const s=kr(t),i=Vd(s,e),o=await new oE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const dE=10*60*1e3;class fE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Gd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oc(e))}saveEventToCache(e){this.cachedEventUids.add(Oc(e)),this.lastProcessedEventTime=Date.now()}}function Oc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gd(t);default:return!1}}/**
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
 */async function _E(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
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
 */const gE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mE=/^https?/;async function vE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _E(t);for(const n of e)try{if(yE(n))return}catch{}It(t,"unauthorized-domain")}function yE(t){const e=Ho(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!mE.test(n))return!1;if(gE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const EE=new ci(3e4,6e4);function kc(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bE(t){return new Promise((e,n)=>{var s,i,r;function o(){kc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kc(),n(bt(t,"network-request-failed"))},timeout:EE.get()})}if(!((i=(s=wt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=wt().gapi)===null||r===void 0)&&r.load)o();else{const a=Ry("iframefcb");return wt()[a]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},Sy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ui=null,e})}let Ui=null;function wE(t){return Ui=Ui||bE(t),Ui}/**
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
 */const CE=new ci(5e3,15e3),IE="__/auth/iframe",TE="emulator/auth/iframe",SE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AE(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fa(e,TE):`https://${t.config.authDomain}/${IE}`,s={apiKey:e.apiKey,appName:t.name,v:ys},i=RE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${vs(s).slice(1)}`}async function PE(t){const e=await wE(t),n=wt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:AE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=wt().setTimeout(()=>{r(o)},CE.get());function l(){wt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const NE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OE=500,kE=600,xE="_blank",ME="http://localhost";class xc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DE(t,e,n,s=OE,i=kE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=$e().toLowerCase();n&&(a=Sd(c)?xE:n),Td(c)&&(e=e||ME,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,v])=>`${d}${_}=${v},`,"");if(my(c)&&a!=="_self")return LE(e||"",a),new xc(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new xc(h)}function LE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const FE="__/auth/handler",UE="emulator/auth/handler",$E=encodeURIComponent("fac");async function Mc(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ys,eventId:i};if(e instanceof Ha){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Do(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ui){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${$E}=${encodeURIComponent(l)}`:"";return`${BE(t)}?${vs(a).slice(1)}${c}`}function BE({config:t}){return t.emulator?Fa(t,UE):`https://${t.authDomain}/${FE}`}/**
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
 */const lo="webStorageSupport";class HE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$d,this._completeRedirectFn=hE,this._overrideRedirectResult=lE}async _openPopup(e,n,s,i){var r;Ut((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Mc(e,n,s,Ho(),i);return DE(e,o,Wa())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Mc(e,n,s,Ho(),i);return zy(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await PE(e),s=new fE(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lo,{type:lo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[lo];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Od()||Ba()||Or()}}const WE=HE;var Dc="@firebase/auth",Lc="1.5.1";/**
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
 */class jE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zE(t){rs(new An("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kd(t)},c=new Iy(s,i,r,l);return Py(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rs(new An("auth-internal",e=>{const n=kr(e.getProvider("auth").getImmediate());return(s=>new jE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Dc,Lc,VE(t)),tn(Dc,Lc,"esm2017")}/**
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
 */const GE=5*60,KE=ld("authIdTokenMaxAge")||GE;let Fc=null;const qE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>KE)return;const i=n==null?void 0:n.token;Fc!==i&&(Fc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jT(t=pd()){const e=Ma(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ay(t,{popupRedirectResolver:WE,persistence:[eE,Wy,$d]}),s=ld("authTokenSyncURL");if(s){const r=qE(s);Uy(n,r,()=>r(n.currentUser)),Fy(n,o=>r(o))}const i=od("auth");return i&&Ny(n,`http://${i}`),n}zE("Browser");var Uc={};const $c="@firebase/database",Bc="1.0.2";/**
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
 */let Kd="";function YE(t){Kd=t}/**
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
 */class QE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ys(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class XE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const qd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QE(e)}}catch{}return new XE},bn=qd("localStorage"),jo=qd("sessionStorage");/**
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
 */const Zn=new ka("@firebase/database"),JE=function(){let t=1;return function(){return t++}}(),Yd=function(t){const e=Hm(t),n=new Fm;n.update(e);const s=n.digest();return Pa.encodeByteArray(s)},di=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=di.apply(null,s):typeof s=="object"?e+=Re(s):e+=s,e+=" "}return e};let Sn=null,Hc=!0;const ZE=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zn.logLevel=fe.VERBOSE,Sn=Zn.log.bind(Zn),e&&jo.set("logging_enabled",!0)):typeof t=="function"?Sn=t:(Sn=null,jo.remove("logging_enabled"))},Fe=function(...t){if(Hc===!0&&(Hc=!1,Sn===null&&jo.get("logging_enabled")===!0&&ZE(!0)),Sn){const e=di.apply(null,t);Sn(e)}},fi=function(t){return function(...e){Fe(t,...e)}},Vo=function(...t){const e="FIREBASE INTERNAL ERROR: "+di(...t);Zn.error(e)},$t=function(...t){const e=`FIREBASE FATAL ERROR: ${di(...t)}`;throw Zn.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+di(...t);Zn.warn(e)},eb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Va=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ln="[MIN_NAME]",cn="[MAX_NAME]",bs=function(t,e){if(t===e)return 0;if(t===ln||e===cn)return-1;if(e===ln||t===cn)return 1;{const n=Wc(t),s=Wc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},nb=function(t,e){return t===e?0:t<e?-1:1},Ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Re(e))},za=function(t){if(typeof t!="object"||t===null)return Re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Re(e[s]),n+=":",n+=za(t[e[s]]);return n+="}",n},Qd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xd=function(t){S(!Va(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},sb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ib=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ob=new RegExp("^-?(0*)\\d{1,10}$"),ab=-2147483648,lb=2147483647,Wc=function(t){if(ob.test(t)){const e=Number(t);if(e>=ab&&e<=lb)return e}return null},ws=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},cb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ub{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class hb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class es{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}es.OWNER="owner";/**
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
 */const Ga="5",Jd="v",Zd="s",ef="r",tf="f",nf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sf="ls",rf="p",zo="ac",of="websocket",af="long_polling";/**
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
 */class lf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function db(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cf(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===of)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===af)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);db(t)&&(n.ns=t.namespace);const i=[];return Ye(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class fb{constructor(){this.counters_={}}incrementCounter(e,n=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Em(this.counters_)}}/**
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
 */const co={},uo={};function Ka(t){const e=t.toString();return co[e]||(co[e]=new fb),co[e]}function pb(t,e){const n=t.toString();return uo[n]||(uo[n]=e()),uo[n]}/**
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
 */class _b{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ws(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const jc="start",gb="close",mb="pLPCommand",vb="pRTLPCB",uf="id",hf="pw",df="ser",yb="cb",Eb="seg",bb="ts",wb="d",Cb="dframe",ff=1870,pf=30,Ib=ff-pf,Tb=25e3,Sb=3e4;class Vn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fi(e),this.stats_=Ka(n),this.urlFn=l=>(this.appCheckToken&&(l[zo]=this.appCheckToken),cf(n,af,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _b(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sb)),tb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jc)this.id=a,this.password=l;else if(o===gb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[jc]="t",s[df]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Jd]=Ga,this.transportSessionId&&(s[Zd]=this.transportSessionId),this.lastSessionId&&(s[sf]=this.lastSessionId),this.applicationId&&(s[rf]=this.applicationId),this.appCheckToken&&(s[zo]=this.appCheckToken),typeof location<"u"&&location.hostname&&nf.test(location.hostname)&&(s[ef]=tf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vn.forceAllow_=!0}static forceDisallow(){Vn.forceDisallow_=!0}static isAvailable(){return Vn.forceAllow_?!0:!Vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sb()&&!ib()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=id(n),i=Qd(s,Ib);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Cb]="t",s[uf]=e,s[hf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JE(),window[mb+this.uniqueCallbackIdentifier]=e,window[vb+this.uniqueCallbackIdentifier]=n,this.myIFrame=qa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uf]=this.myID,e[hf]=this.myPW,e[df]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pf+s.length<=ff;){const o=this.pendingSegs.shift();s=s+"&"+Eb+i+"="+o.seg+"&"+bb+i+"="+o.ts+"&"+wb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Tb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Rb=16384,Ab=45e3;let nr=null;typeof MozWebSocket<"u"?nr=MozWebSocket:typeof WebSocket<"u"&&(nr=WebSocket);class at{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fi(this.connId),this.stats_=Ka(n),this.connURL=at.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Jd]=Ga,typeof location<"u"&&location.hostname&&nf.test(location.hostname)&&(o[ef]=tf),n&&(o[Zd]=n),s&&(o[sf]=s),i&&(o[zo]=i),r&&(o[rf]=r),cf(e,of,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bn.set("previous_websocket_failure",!0);try{let s;ud(),this.mySock=new nr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&nr!==null&&!at.forceDisallow_}static previouslyFailed(){return bn.isInMemoryStorage||bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ys(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qd(n,Rb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ab))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class Zs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Vn,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let s=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[at];else{const i=this.transports_=[];for(const r of Zs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Zs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zs.globalTransportInitialized_=!1;/**
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
 */const Pb=6e4,Nb=5e3,Ob=10*1024,kb=100*1024,ho="t",Vc="d",xb="s",zc="r",Mb="e",Gc="o",Kc="a",qc="n",Yc="p",Db="h";class Lb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fi("c:"+this.id+":"),this.transportManager_=new Zs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ob?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ho in e){const n=e[ho];n===Kc?this.upgradeIfSecondaryHealthy_():n===zc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ss("t",e),s=Ss("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ss("t",e),s=Ss("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ss(ho,e);if(Vc in e){const s=e[Vc];if(n===Db){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===qc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xb?this.onConnectionShutdown_(s):n===zc?this.onReset_(s):n===Mb?Vo("Server Error: "+s):n===Gc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ga!==s&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Nb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class _f{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class gf{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class sr extends gf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new sr}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Qc=32,Xc=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new pe("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function un(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function mf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Fb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function Ae(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new pe(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=J(t),s=J(e);if(n===null)return e;if(n===s)return We(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ya(t,e){if(un(t)!==un(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ct(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(un(t)>un(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ub{constructor(e,n){this.errorPrefix_=n,this.parts_=vf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Nr(this.parts_[s]);Ef(this)}}function $b(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nr(e),Ef(t)}function Bb(t){const e=t.parts_.pop();t.byteLength_-=Nr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ef(t){if(t.byteLength_>Xc)throw new Error(t.errorPrefix_+"has a key path longer than "+Xc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qc+") or object contains a cycle "+mn(t))}function mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Qa extends gf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Qa}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Rs=1e3,Hb=60*5*1e3,Jc=30*1e3,Wb=1.3,jb=3e4,Vb="server_kill",Zc=3;class Lt extends _f{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Lt.nextPersistentConnectionId_++,this.log_=fi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rs,this.maxReconnectDelay_=Hb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ud())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Re(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ar,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Lt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&St(e,"w")){const s=is(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Dm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vo("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jb&&(this.reconnectDelay_=Rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Lb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ge(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Vb)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ge(h),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Do(this.interruptReasons_)&&(this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>za(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zc&&(this.reconnectDelay_=Jc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Kd.replace(/\./g,"-")]=1,Oa()?e["framework.cordova"]=1:cd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sr.getInstance().currentlyOnline();return Do(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0;Lt.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class Dr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(ln,e),i=new ee(ln,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
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
 */let Ri;class bf extends Dr{static get __EMPTY_NODE(){return Ri}static set __EMPTY_NODE(e){Ri=e}compare(e,n){return bs(e.name,n.name)}isDefinedOn(e){throw ms("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(cn,Ri)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Ri)}toString(){return".key"}}const Ft=new bf;/**
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
 */class Ai{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ke.RED,this.left=i??ze.EMPTY_NODE,this.right=r??ze.EMPTY_NODE}copy(e,n,s,i,r){return new ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class zb{copy(e,n,s,i,r){return this}insert(e,n,s){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ai(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ai(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ai(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ai(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new zb;/**
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
 */function Gb(t,e){return bs(t.name,e.name)}function Xa(t,e){return bs(t,e)}/**
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
 */let Go;function Kb(t){Go=t}const wf=function(t){return typeof t=="number"?"number:"+Xd(t):"string:"+t},Cf=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else S(t===Go||t.isEmpty(),"priority of unexpected type.");S(t===Go||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let eu;class Oe{constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cf(this.priorityNode_)}static set __childrenNodeConstructor(e){eu=e}static get __childrenNodeConstructor(){return eu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:J(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||un(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xd(this.value_):e+=this.value_,this.lazyHash_=Yd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(n),r=Oe.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let If,Tf;function qb(t){If=t}function Yb(t){Tf=t}class Qb extends Dr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?bs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(cn,new Oe("[PRIORITY-POST]",Tf))}makePost(e,n){const s=If(e);return new ee(n,new Oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ce=new Qb;/**
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
 */const Xb=Math.log(2);class Jb{constructor(e){const n=r=>parseInt(Math.log(r)/Xb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ir=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ke(d,h.node,ke.BLACK,null,null);{const _=parseInt(u/2,10)+l,v=i(l,_),m=i(_+1,c);return h=t[_],d=n?n(h):h,new ke(d,h.node,ke.BLACK,v,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(v,m){const N=h-v,L=h;h-=v;const F=i(N+1,L),B=t[N],$=n?n(B):B;_(new ke($,B.node,m,null,F))},_=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const m=l.nextBitIsOne(),N=Math.pow(2,l.count-(v+1));m?d(N,ke.BLACK):(d(N,ke.BLACK),d(N,ke.RED))}return u},o=new Jb(t.length),a=r(o);return new ze(s||e,a)};/**
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
 */let fo;const Bn={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Bn&&Ce,"ChildrenNode.ts has not been loaded"),fo=fo||new Mt({".priority":Bn},{".priority":Ce}),fo}get(e){const n=is(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Ft,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ir(s,e.getCompare()):a=Bn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Mt(u,c)}addToIndexes(e,n){const s=qi(this.indexes_,(i,r)=>{const o=is(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===Bn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ir(a,o.getCompare())}else return Bn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new Mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=qi(this.indexes_,i=>{if(i===Bn)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new Mt(s,this.indexSet_)}}/**
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
 */let As;class G{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Cf(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return As||(As=new G(new ze(Xa),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||As}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?As:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?As:this.priorityNode_;return new G(i,o,r)}}updateChild(e,n){const s=J(e);if(s===null)return n;{S(J(e)!==".priority"||un(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ge(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),s++,r&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wf(this.getPriority().val())+":"),this.forEachChild(Ce,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Yd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pi?-1:0}withIndex(e){if(e===Ft||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ft||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ce),i=n.getIterator(Ce);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ft?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zb extends G{constructor(){super(new ze(Xa),G.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const pi=new Zb;Object.defineProperties(ee,{MIN:{value:new ee(ln,G.EMPTY_NODE)},MAX:{value:new ee(cn,pi)}});bf.__EMPTY_NODE=G.EMPTY_NODE;Oe.__childrenNodeConstructor=G;Kb(pi);Yb(pi);/**
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
 */const ew=!0;function xe(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,xe(e))}if(!(t instanceof Array)&&ew){const n=[];let s=!1;if(Ye(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return G.EMPTY_NODE;const r=ir(n,Gb,o=>o.name,Xa);if(s){const o=ir(n,Ce.getCompare());return new G(r,xe(e),new Mt({".priority":o},{".priority":Ce}))}else return new G(r,xe(e),Mt.Default)}else{let n=G.EMPTY_NODE;return Ye(t,(s,i)=>{if(St(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}qb(xe);/**
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
 */class Ja extends Dr{constructor(e){super(),this.indexPath_=e,S(!Z(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?bs(e.name,n.name):r}makePost(e,n){const s=xe(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,pi);return new ee(cn,e)}toString(){return vf(this.indexPath_,0).join("/")}}/**
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
 */class tw extends Dr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?bs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=xe(e);return new ee(n,s)}toString(){return".value"}}const Sf=new tw;/**
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
 */function Rf(t){return{type:"value",snapshotNode:t}}function as(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ei(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ti(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function nw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Za{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ei(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(as(n,s)):o.trackChildChange(ti(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ce,(i,r)=>{n.hasChild(i)||s.trackChildChange(ei(i,r))}),n.isLeafNode()||n.forEachChild(Ce,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ti(i,r,o))}else s.trackChildChange(as(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ni{constructor(e){this.indexedFilter_=new Za(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ni.getStartPost_(e),this.endPost_=ni.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ee(n,s))||(s=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const r=this;return n.forEachChild(Ce,(o,a)=>{r.matches(new ee(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class sw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ni(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ee(n,s))||(s=G.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new ee(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ti(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ei(n,h));const m=a.updateImmediateChild(n,G.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(as(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ei(c.name,c.node)),r.trackChildChange(as(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,G.EMPTY_NODE)):e}}/**
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
 */class el{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ln}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new el;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function iw(t){return t.loadsAllData()?new Za(t.getIndex()):t.hasLimit()?new sw(t):new ni(t)}function rw(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function ow(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function aw(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Ko(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function lw(t,e,n){let s;return t.index_===Ft||n?s=Ko(t,e,n):s=Ko(t,e,ln),s.endBeforeSet_=!0,s}function Af(t,e){const n=t.copy();return n.index_=e,n}function tu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===Sf?n="$value":t.index_===Ft?n="$key":(S(t.index_ instanceof Ja,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
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
 */class rr extends _f{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=fi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=rr.getListenId_(e,s),a={};this.listens_[o]=a;const l=tu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),is(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=rr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=tu(e._queryParams),s=e._path.toString(),i=new Ar;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ys(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class cw{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function or(){return{value:null,children:new Map}}function Pf(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=J(e);t.children.has(s)||t.children.set(s,or());const i=t.children.get(s);e=ge(e),Pf(i,e,n)}}function qo(t,e,n){t.value!==null?n(e,t.value):uw(t,(s,i)=>{const r=new pe(e.toString()+"/"+s);qo(i,r,n)})}function uw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class hw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const su=10*1e3,dw=30*1e3,fw=5*60*1e3;class pw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hw(e);const s=su+(dw-su)*Math.random();Us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ye(e,(i,r)=>{r>0&&St(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Us(this.reportStats_.bind(this),Math.floor(Math.random()*2*fw))}}/**
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
 */var ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ut||(ut={}));function Nf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ar{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ut.ACK_USER_WRITE,this.source=Nf()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new ar(oe(),n,this.revert)}}else return S(J(this.path)===e,"operationForChild called for unrelated child."),new ar(ge(this.path),this.affectedTree,this.revert)}}/**
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
 */class si{constructor(e,n){this.source=e,this.path=n,this.type=ut.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new si(this.source,oe()):new si(this.source,ge(this.path))}}/**
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
 */class On{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ut.OVERWRITE}operationForChild(e){return Z(this.path)?new On(this.source,oe(),this.snap.getImmediateChild(e)):new On(this.source,ge(this.path),this.snap)}}/**
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
 */class ii{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ut.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new On(this.source,oe(),n.value):new ii(this.source,oe(),n)}else return S(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ii(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class hn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _w{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gw(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(nw(o.childName,o.snapshotNode))}),Ps(t,i,"child_removed",e,s,n),Ps(t,i,"child_added",e,s,n),Ps(t,i,"child_moved",r,s,n),Ps(t,i,"child_changed",e,s,n),Ps(t,i,"value",e,s,n),i}function Ps(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>vw(t,a,l)),o.forEach(a=>{const l=mw(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function mw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vw(t,e,n){if(e.childName==null||n.childName==null)throw ms("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Lr(t,e){return{eventCache:t,serverCache:e}}function $s(t,e,n,s){return Lr(new hn(e,n,s),t.serverCache)}function Of(t,e,n,s){return Lr(t.eventCache,new hn(e,n,s))}function lr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let po;const yw=()=>(po||(po=new ze(nb)),po);class ve{constructor(e,n=yw()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return Ye(e,(s,i)=>{n=n.set(new pe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(Z(e))return null;{const s=J(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ge(e),n);return r!=null?{path:Ae(new pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(ge(e)):new ve(null)}}set(e,n){if(Z(e))return new ve(n,this.children);{const s=J(e),r=(this.children.get(s)||new ve(null)).set(ge(e),n),o=this.children.insert(s,r);return new ve(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const i=s.remove(ge(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ve(null):new ve(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(ge(e)):null}}setTree(e,n){if(Z(e))return n;{const s=J(e),r=(this.children.get(s)||new ve(null)).setTree(ge(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ve(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ae(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Z(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(ge(e),Ae(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(Z(e))return this;{this.value&&s(n,this.value);const i=J(e),r=this.children.get(i);return r?r.foreachOnPath_(ge(e),Ae(n,i),s):new ve(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ae(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new ve(null))}}function Bs(t,e,n){if(Z(e))return new dt(new ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=We(i,e);return r=r.updateChild(o,n),new dt(t.writeTree_.set(i,r))}else{const i=new ve(n),r=t.writeTree_.setTree(e,i);return new dt(r)}}}function iu(t,e,n){let s=t;return Ye(n,(i,r)=>{s=Bs(s,Ae(e,i),r)}),s}function ru(t,e){if(Z(e))return dt.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new dt(n)}}function Yo(t,e){return Mn(t,e)!=null}function Mn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function ou(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function nn(t,e){if(Z(e))return t;{const n=Mn(t,e);return n!=null?new dt(new ve(n)):new dt(t.writeTree_.subtree(e))}}function Qo(t){return t.writeTree_.isEmpty()}function ls(t,e){return kf(oe(),t.writeTree_,e)}function kf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=kf(Ae(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ae(t,".priority"),s)),n}}/**
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
 */function Fr(t,e){return Lf(e,t)}function Ew(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Bs(t.visibleWrites,e,n)),t.lastWriteId=s}function bw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ww(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Cw(a,s.path)?i=!1:ct(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Iw(t),!0;if(s.snap)t.visibleWrites=ru(t.visibleWrites,s.path);else{const a=s.children;Ye(a,l=>{t.visibleWrites=ru(t.visibleWrites,Ae(s.path,l))})}return!0}else return!1}function Cw(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(Ae(t.path,n),e))return!0;return!1}function Iw(t){t.visibleWrites=xf(t.allWrites,Tw,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Tw(t){return t.visible}function xf(t,e,n){let s=dt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ct(n,o)?(a=We(n,o),s=Bs(s,a,r.snap)):ct(o,n)&&(a=We(o,n),s=Bs(s,oe(),r.snap.getChild(a)));else if(r.children){if(ct(n,o))a=We(n,o),s=iu(s,a,r.children);else if(ct(o,n))if(a=We(o,n),Z(a))s=iu(s,oe(),r.children);else{const l=is(r.children,J(a));if(l){const c=l.getChild(ge(a));s=Bs(s,oe(),c)}}}else throw ms("WriteRecord should have .snap or .children")}}return s}function Mf(t,e,n,s,i){if(!s&&!i){const r=Mn(t.visibleWrites,e);if(r!=null)return r;{const o=nn(t.visibleWrites,e);if(Qo(o))return n;if(n==null&&!Yo(o,oe()))return null;{const a=n||G.EMPTY_NODE;return ls(o,a)}}}else{const r=nn(t.visibleWrites,e);if(!i&&Qo(r))return n;if(!i&&n==null&&!Yo(r,oe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},a=xf(t.allWrites,o,e),l=n||G.EMPTY_NODE;return ls(a,l)}}}function Sw(t,e,n){let s=G.EMPTY_NODE;const i=Mn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=nn(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=ls(nn(r,new pe(o)),a);s=s.updateImmediateChild(o,l)}),ou(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=nn(t.visibleWrites,e);return ou(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rw(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ae(e,n);if(Yo(t.visibleWrites,r))return null;{const o=nn(t.visibleWrites,r);return Qo(o)?i.getChild(n):ls(o,i.getChild(n))}}function Aw(t,e,n,s){const i=Ae(e,n),r=Mn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=nn(t.visibleWrites,i);return ls(o,s.getNode().getImmediateChild(n))}else return null}function Pw(t,e){return Mn(t.visibleWrites,e)}function Nw(t,e,n,s,i,r,o){let a;const l=nn(t.visibleWrites,e),c=Mn(l,oe());if(c!=null)a=c;else if(n!=null)a=ls(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Ow(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function cr(t,e,n,s){return Mf(t.writeTree,t.treePath,e,n,s)}function sl(t,e){return Sw(t.writeTree,t.treePath,e)}function au(t,e,n,s){return Rw(t.writeTree,t.treePath,e,n,s)}function ur(t,e){return Pw(t.writeTree,Ae(t.treePath,e))}function kw(t,e,n,s,i,r){return Nw(t.writeTree,t.treePath,e,n,s,i,r)}function il(t,e,n){return Aw(t.writeTree,t.treePath,e,n)}function Df(t,e){return Lf(Ae(t.treePath,e),t.writeTree)}function Lf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class xw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ti(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ei(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,as(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ti(s,e.snapshotNode,i.oldSnap));else throw ms("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Mw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ff=new Mw;class rl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return il(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kn(this.viewCache_),r=kw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Dw(t){return{filter:t}}function Lw(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fw(t,e,n,s,i){const r=new xw;let o,a;if(n.type===ut.OVERWRITE){const c=n;c.source.fromUser?o=Xo(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=hr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ut.MERGE){const c=n;c.source.fromUser?o=$w(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Jo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ut.ACK_USER_WRITE){const c=n;c.revert?o=Ww(t,e,c.path,s,i,r):o=Bw(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ut.LISTEN_COMPLETE)o=Hw(t,e,n.path,s,r);else throw ms("Unknown operation type: "+n.type);const l=r.getChanges();return Uw(e,o,l),{viewCache:o,changes:l}}function Uw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=lr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Rf(lr(e)))}}function Uf(t,e,n,s,i,r){const o=e.eventCache;if(ur(s,n)!=null)return e;{let a,l;if(Z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kn(e),u=c instanceof G?c:G.EMPTY_NODE,h=sl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=cr(s,kn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=J(n);if(c===".priority"){S(un(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=au(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ge(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=au(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=il(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return $s(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function hr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=J(n);if(!l.isCompleteForPath(n)&&un(n)>1)return e;const v=ge(n),N=l.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),_,N,v,Ff,null)}const h=Of(e,c,l.isFullyInitialized()||Z(n),u.filtersNodes()),d=new rl(i,h,r);return Uf(t,h,n,i,d,a)}function Xo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new rl(i,e,r);if(Z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=$s(e,c,!0,t.filter.filtersNodes());else{const h=J(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=$s(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ge(n),_=a.getNode().getImmediateChild(h);let v;if(Z(d))v=s;else{const m=u.getCompleteChild(h);m!=null?mf(d)===".priority"&&m.getChild(yf(d)).isEmpty()?v=m:v=m.updateChild(d,s):v=G.EMPTY_NODE}if(_.equals(v))l=e;else{const m=t.filter.updateChild(a.getNode(),h,v,d,u,o);l=$s(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function lu(t,e){return t.eventCache.isCompleteForChild(e)}function $w(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ae(n,l);lu(e,J(u))&&(a=Xo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ae(n,l);lu(e,J(u))||(a=Xo(t,a,u,c,i,r,o))}),a}function cu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Jo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Z(n)?c=s:c=new ve(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=cu(t,_,d);l=hr(t,l,new pe(h),v,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),m=cu(t,v,d);l=hr(t,l,new pe(h),m,i,r,o,a)}}),l}function Bw(t,e,n,s,i,r,o){if(ur(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return hr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Z(n)){let c=new ve(null);return l.getNode().forEachChild(Ft,(u,h)=>{c=c.set(new pe(u),h)}),Jo(t,e,n,c,i,r,a,o)}else return e}else{let c=new ve(null);return s.foreach((u,h)=>{const d=Ae(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Jo(t,e,n,c,i,r,a,o)}}function Hw(t,e,n,s,i){const r=e.serverCache,o=Of(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return Uf(t,o,n,s,Ff,i)}function Ww(t,e,n,s,i,r){let o;if(ur(s,n)!=null)return e;{const a=new rl(s,e,i),l=e.eventCache.getNode();let c;if(Z(n)||J(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=cr(s,kn(e));else{const h=e.serverCache.getNode();S(h instanceof G,"serverChildren would be complete if leaf node"),u=sl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=J(n);let h=il(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ge(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,G.EMPTY_NODE,ge(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cr(s,kn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ur(s,oe())!=null,$s(e,c,o,t.filter.filtersNodes())}}/**
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
 */class jw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Za(s.getIndex()),r=iw(s);this.processor_=Dw(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(G.EMPTY_NODE,a.getNode(),null),u=new hn(l,o.isFullyInitialized(),i.filtersNodes()),h=new hn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Lr(h,u),this.eventGenerator_=new _w(this.query_)}get query(){return this.query_}}function Vw(t){return t.viewCache_.serverCache.getNode()}function zw(t){return lr(t.viewCache_)}function Gw(t,e){const n=kn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function uu(t){return t.eventRegistrations_.length===0}function Kw(t,e){t.eventRegistrations_.push(e)}function hu(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function du(t,e,n,s){e.type===ut.MERGE&&e.source.queryId!==null&&(S(kn(t.viewCache_),"We should always have a full cache before handling merges"),S(lr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Fw(t.processor_,i,e,n,s);return Lw(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$f(t,r.changes,r.viewCache.eventCache.getNode(),null)}function qw(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(r,o)=>{s.push(as(r,o))}),n.isFullyInitialized()&&s.push(Rf(n.getNode())),$f(t,s,n.getNode(),e)}function $f(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return gw(t.eventGenerator_,e,n,i)}/**
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
 */let dr;class Bf{constructor(){this.views=new Map}}function Yw(t){S(!dr,"__referenceConstructor has already been defined"),dr=t}function Qw(){return S(dr,"Reference.ts has not been loaded"),dr}function Xw(t){return t.views.size===0}function ol(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),du(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(du(o,e,n,s));return r}}function Hf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=cr(n,i?s:null),l=!1;a?l=!0:s instanceof G?(a=sl(n,s),l=!1):(a=G.EMPTY_NODE,l=!1);const c=Lr(new hn(a,l,!1),new hn(s,i,!1));return new jw(e,c)}return o}function Jw(t,e,n,s,i,r){const o=Hf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Kw(o,n),qw(o,n)}function Zw(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=dn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(hu(c,n,s)),uu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(hu(l,n,s)),uu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!dn(t)&&r.push(new(Qw())(e._repo,e._path)),{removed:r,events:o}}function Wf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function sn(t,e){let n=null;for(const s of t.views.values())n=n||Gw(s,e);return n}function jf(t,e){if(e._queryParams.loadsAllData())return Ur(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Vf(t,e){return jf(t,e)!=null}function dn(t){return Ur(t)!=null}function Ur(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let fr;function eC(t){S(!fr,"__referenceConstructor has already been defined"),fr=t}function tC(){return S(fr,"Reference.ts has not been loaded"),fr}let nC=1;class fu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=Ow(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zf(t,e,n,s,i){return Ew(t.pendingWriteTree_,e,n,s,i),i?gi(t,new On(Nf(),e,n)):[]}function wn(t,e,n=!1){const s=bw(t.pendingWriteTree_,e);if(ww(t.pendingWriteTree_,e)){let r=new ve(null);return s.snap!=null?r=r.set(oe(),!0):Ye(s.children,o=>{r=r.set(new pe(o),!0)}),gi(t,new ar(s.path,r,n))}else return[]}function _i(t,e,n){return gi(t,new On(tl(),e,n))}function sC(t,e,n){const s=ve.fromObject(n);return gi(t,new ii(tl(),e,s))}function iC(t,e){return gi(t,new si(tl(),e))}function rC(t,e,n){const s=ll(t,n);if(s){const i=cl(s),r=i.path,o=i.queryId,a=We(r,e),l=new si(nl(o),a);return ul(t,r,l)}else return[]}function pr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Vf(o,e))){const l=Zw(o,e,n,s);Xw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>dn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=lC(d);for(let v=0;v<_.length;++v){const m=_[v],N=m.query,L=Yf(t,m);t.listenProvider_.startListening(Hs(N),ri(t,N),L.hashFn,L.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Hs(e),null):c.forEach(d=>{const _=t.queryToTagMap.get($r(d));t.listenProvider_.stopListening(Hs(d),_)}))}cC(t,c)}return a}function Gf(t,e,n,s){const i=ll(t,s);if(i!=null){const r=cl(i),o=r.path,a=r.queryId,l=We(o,e),c=new On(nl(a),l,n);return ul(t,o,c)}else return[]}function oC(t,e,n,s){const i=ll(t,s);if(i){const r=cl(i),o=r.path,a=r.queryId,l=We(o,e),c=ve.fromObject(n),u=new ii(nl(a),l,c);return ul(t,o,u)}else return[]}function Zo(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const v=We(d,i);r=r||sn(_,v),o=o||dn(_)});let a=t.syncPointTree_.get(i);a?(o=o||dn(a),r=r||sn(a,oe())):(a=new Bf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const m=sn(v,oe());m&&(r=r.updateImmediateChild(_,m))}));const c=Vf(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=$r(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=uC();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Fr(t.pendingWriteTree_,i);let h=Jw(a,e,n,u,r,l);if(!c&&!o&&!s){const d=jf(a,e);h=h.concat(hC(t,e,d))}return h}function al(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),c=sn(a,l);if(c)return c});return Mf(i,e,r,n,!0)}function aC(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=We(c,n);s=s||sn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||sn(i,oe()):(i=new Bf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new hn(s,!0,!1):null,a=Fr(t.pendingWriteTree_,e._path),l=Hf(i,e,a,r?o.getNode():G.EMPTY_NODE,r);return zw(l)}function gi(t,e){return Kf(e,t.syncPointTree_,null,Fr(t.pendingWriteTree_,oe()))}function Kf(t,e,n,s){if(Z(t.path))return qf(t,e,n,s);{const i=e.get(oe());n==null&&i!=null&&(n=sn(i,oe()));let r=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Df(s,o);r=r.concat(Kf(a,l,c,u))}return i&&(r=r.concat(ol(i,t,s,n))),r}}function qf(t,e,n,s){const i=e.get(oe());n==null&&i!=null&&(n=sn(i,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Df(s,o),u=t.operationForChild(o);u&&(r=r.concat(qf(u,a,l,c)))}),i&&(r=r.concat(ol(i,t,s,n))),r}function Yf(t,e){const n=e.query,s=ri(t,n);return{hashFn:()=>(Vw(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?rC(t,n._path,s):iC(t,n._path);{const r=rb(i,n);return pr(t,n,null,r)}}}}function ri(t,e){const n=$r(e);return t.queryToTagMap.get(n)}function $r(t){return t._path.toString()+"$"+t._queryIdentifier}function ll(t,e){return t.tagToQueryMap.get(e)}function cl(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function ul(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Fr(t.pendingWriteTree_,e);return ol(s,n,i,null)}function lC(t){return t.fold((e,n,s)=>{if(n&&dn(n))return[Ur(n)];{let i=[];return n&&(i=Wf(n)),Ye(s,(r,o)=>{i=i.concat(o)}),i}})}function Hs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tC())(t._repo,t._path):t}function cC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=$r(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function uC(){return nC++}function hC(t,e,n){const s=e._path,i=ri(t,e),r=Yf(t,n),o=t.listenProvider_.startListening(Hs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)S(!dn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Z(c)&&u&&dn(u))return[Ur(u).query];{let d=[];return u&&(d=d.concat(Wf(u).map(_=>_.query))),Ye(h,(_,v)=>{d=d.concat(v)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Hs(u),ri(t,u))}}return o}/**
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
 */class hl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hl(n)}node(){return this.node_}}class dl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ae(this.path_,e);return new dl(this.syncTree_,n)}node(){return al(this.syncTree_,this.path_)}}const dC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pu=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pC(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},pC=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},_C=function(t,e,n,s){return fl(e,new dl(n,t),s)},Qf=function(t,e,n){return fl(t,new hl(e),n)};function fl(t,e,n){const s=t.getPriority().val(),i=pu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=pu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Oe(a,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Oe(i))),o.forEachChild(Ce,(a,l)=>{const c=fl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class pl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function _l(t,e){let n=e instanceof pe?e:new pe(e),s=t,i=J(n);for(;i!==null;){const r=is(s.node.children,i)||{children:{},childCount:0};s=new pl(i,s,r),n=ge(n),i=J(n)}return s}function Cs(t){return t.node.value}function Xf(t,e){t.node.value=e,ea(t)}function Jf(t){return t.node.childCount>0}function gC(t){return Cs(t)===void 0&&!Jf(t)}function Br(t,e){Ye(t.node.children,(n,s)=>{e(new pl(n,t,s))})}function Zf(t,e,n,s){n&&!s&&e(t),Br(t,i=>{Zf(i,e,!0,s)}),n&&s&&e(t)}function mC(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function mi(t){return new pe(t.parent===null?t.name:mi(t.parent)+"/"+t.name)}function ea(t){t.parent!==null&&vC(t.parent,t.name,t)}function vC(t,e,n){const s=gC(n),i=St(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ea(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ea(t))}/**
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
 */const yC=/[\[\].#$\/\u0000-\u001F\u007F]/,EC=/[\[\].#$\u0000-\u001F\u007F]/,_o=10*1024*1024,gl=function(t){return typeof t=="string"&&t.length!==0&&!yC.test(t)},ep=function(t){return typeof t=="string"&&t.length!==0&&!EC.test(t)},bC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ep(t)},_u=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Va(t)||t&&typeof t=="object"&&St(t,".sv")},Hr=function(t,e,n,s){s&&e===void 0||ml(Pr(t,"value"),e,n)},ml=function(t,e,n){const s=n instanceof pe?new Ub(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mn(s));if(typeof e=="function")throw new Error(t+"contains a function "+mn(s)+" with contents = "+e.toString());if(Va(e))throw new Error(t+"contains "+e.toString()+" "+mn(s));if(typeof e=="string"&&e.length>_o/3&&Nr(e)>_o)throw new Error(t+"contains a string greater than "+_o+" utf8 bytes "+mn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ye(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!gl(o)))throw new Error(t+" contains an invalid key ("+o+") "+mn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$b(s,o),ml(t,a,s),Bb(s)}),i&&r)throw new Error(t+' contains ".value" child '+mn(s)+" in addition to actual children.")}},vl=function(t,e,n,s){if(!(s&&n===void 0)&&!gl(n))throw new Error(Pr(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},yl=function(t,e,n,s){if(!(s&&n===void 0)&&!ep(n))throw new Error(Pr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yl(t,e,n,s)},CC=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},IC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bC(n))throw new Error(Pr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class TC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function El(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ya(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function tp(t,e,n){El(t,n),np(t,s=>Ya(s,e))}function Tt(t,e,n){El(t,n),np(t,s=>ct(s,e)||ct(e,s))}function np(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(SC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function SC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Sn&&Fe("event: "+n.toString()),ws(s)}}}/**
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
 */const RC="repo_interrupt",AC=25;class PC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=or(),this.transactionQueueTree_=new pl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NC(t,e,n){if(t.stats_=Ka(t.repoInfo_),t.forceRestClient_||cb())t.server_=new rr(t.repoInfo_,(s,i,r,o)=>{gu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Lt(t.repoInfo_,e,(s,i,r,o)=>{gu(t,s,i,r,o)},s=>{mu(t,s)},s=>{kC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=pb(t.repoInfo_,()=>new pw(t.stats_,t.server_)),t.infoData_=new cw,t.infoSyncTree_=new fu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=_i(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wl(t,"connected",!1),t.serverSyncTree_=new fu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Tt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function OC(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bl(t){return dC({timestamp:OC(t)})}function gu(t,e,n,s,i){t.dataUpdateCount++;const r=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=qi(n,c=>xe(c));o=oC(t.serverSyncTree_,r,l,i)}else{const l=xe(n);o=Gf(t.serverSyncTree_,r,l,i)}else if(s){const l=qi(n,c=>xe(c));o=sC(t.serverSyncTree_,r,l)}else{const l=xe(n);o=_i(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=jr(t,r)),Tt(t.eventQueue_,a,o)}function mu(t,e){wl(t,"connected",e),e===!1&&DC(t)}function kC(t,e){Ye(e,(n,s)=>{wl(t,n,s)})}function wl(t,e,n){const s=new pe("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=_i(t.infoSyncTree_,s,i);Tt(t.eventQueue_,s,r)}function sp(t){return t.nextWriteId_++}function xC(t,e,n){const s=aC(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());Zo(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_i(t.serverSyncTree_,e._path,r);else{const a=ri(t.serverSyncTree_,e);o=Gf(t.serverSyncTree_,e._path,r,a)}return Tt(t.eventQueue_,e._path,o),pr(t.serverSyncTree_,e,n,null,!0),r},i=>(Wr(t,"get for query "+Re(e)+" failed: "+i),Promise.reject(new Error(i))))}function MC(t,e,n,s,i){Wr(t,"set",{path:e.toString(),value:n,priority:s});const r=bl(t),o=xe(n,s),a=al(t.serverSyncTree_,e),l=Qf(o,a,r),c=sp(t),u=zf(t.serverSyncTree_,e,l,c,!0);El(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const v=d==="ok";v||Ge("set at "+e+" failed: "+d);const m=wn(t.serverSyncTree_,c,!v);Tt(t.eventQueue_,e,m),UC(t,i,d,_)});const h=lp(t,e);jr(t,h),Tt(t.eventQueue_,h,[])}function DC(t){Wr(t,"onDisconnectEvents");const e=bl(t),n=or();qo(t.onDisconnect_,oe(),(i,r)=>{const o=_C(i,r,t.serverSyncTree_,e);Pf(n,i,o)});let s=[];qo(n,oe(),(i,r)=>{s=s.concat(_i(t.serverSyncTree_,i,r));const o=lp(t,i);jr(t,o)}),t.onDisconnect_=or(),Tt(t.eventQueue_,oe(),s)}function LC(t,e,n){let s;J(e._path)===".info"?s=Zo(t.infoSyncTree_,e,n):s=Zo(t.serverSyncTree_,e,n),tp(t.eventQueue_,e._path,s)}function vu(t,e,n){let s;J(e._path)===".info"?s=pr(t.infoSyncTree_,e,n):s=pr(t.serverSyncTree_,e,n),tp(t.eventQueue_,e._path,s)}function FC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RC)}function Wr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function UC(t,e,n,s){e&&ws(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ip(t,e,n){return al(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function Cl(t,e=t.transactionQueueTree_){if(e||Vr(t,e),Cs(e)){const n=op(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$C(t,mi(e),n)}else Jf(e)&&Br(e,n=>{Cl(t,n)})}function $C(t,e,n){const s=n.map(c=>c.currentWriteId),i=ip(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=We(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(wn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Vr(t,_l(t.transactionQueueTree_,e)),Cl(t,t.transactionQueueTree_),Tt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)ws(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}jr(t,e)}},o)}function jr(t,e){const n=rp(t,e),s=mi(n),i=op(t,n);return BC(t,i,s),s}function BC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=We(n,l.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=AC)u=!0,h="maxretry",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ip(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){ml("transaction failed: Data returned ",_,l.path);let v=xe(_);typeof _=="object"&&_!=null&&St(_,".priority")||(v=v.updatePriority(d.getPriority()));const N=l.currentWriteId,L=bl(t),F=Qf(v,d,L);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=F,l.currentWriteId=sp(t),o.splice(o.indexOf(N),1),i=i.concat(zf(t.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(wn(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(wn(t.serverSyncTree_,l.currentWriteId,!0))}Tt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Vr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ws(s[a]);Cl(t,t.transactionQueueTree_)}function rp(t,e){let n,s=t.transactionQueueTree_;for(n=J(e);n!==null&&Cs(s)===void 0;)s=_l(s,n),e=ge(e),n=J(e);return s}function op(t,e){const n=[];return ap(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ap(t,e,n){const s=Cs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Br(e,i=>{ap(t,i,n)})}function Vr(t,e){const n=Cs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Xf(e,n.length>0?n:void 0)}Br(e,s=>{Vr(t,s)})}function lp(t,e){const n=mi(rp(t,e)),s=_l(t.transactionQueueTree_,e);return mC(s,i=>{go(t,i)}),go(t,s),Zf(s,i=>{go(t,i)}),n}function go(t,e){const n=Cs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xf(e,void 0):n.length=r+1,Tt(t.eventQueue_,mi(e),i);for(let o=0;o<s.length;o++)ws(s[o])}}/**
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
 */function HC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function WC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const yu=function(t,e){const n=jC(t),s=n.namespace;n.domain==="firebase.com"&&$t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new pe(n.pathString)}},jC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=HC(t.substring(u,h)));const d=WC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class cp{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class up{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class hp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Rt{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Z(this._path)?null:mf(this._path)}get ref(){return new At(this._repo,this._path)}get _queryIdentifier(){const e=nu(this._queryParams),n=za(e);return n==="{}"?"default":n}get _queryObject(){return nu(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof Rt))return!1;const n=this._repo===e._repo,s=Ya(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Fb(this._path)}}function dp(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function vi(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Ft){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ln)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==cn)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Ce){if(e!=null&&!_u(e)||n!=null&&!_u(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof Ja||t.getIndex()===Sf,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Il(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class At extends Rt{constructor(e,n){super(e,n,new el,!1)}get parent(){const e=yf(this._path);return e===null?null:new At(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=_r(this.ref,e);return new cs(this._node.getChild(n),s,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new cs(i,_r(this.ref,s),Ce)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function VT(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?_r(t._root,e):t._root}function _r(t,e){return t=Xe(t),J(t._path)===null?wC("child","path",e,!1):yl("child","path",e,!1),new At(t._repo,Ae(t._path,e))}function zT(t,e){t=Xe(t),CC("set",t._path),Hr("set",e,t._path,!1);const n=new Ar;return MC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function GT(t){t=Xe(t);const e=new hp(()=>{}),n=new zr(e);return xC(t._repo,t,n).then(s=>new cs(s,new At(t._repo,t._path),t._queryParams.getIndex()))}class zr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new cp("value",this,new cs(e.snapshotNode,new At(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new up(this,e,n):null}matches(e){return e instanceof zr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Tl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new up(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const s=_r(new At(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new cp(e.type,this,new cs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Tl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function VC(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{vu(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new hp(n,r||void 0),a=e==="value"?new zr(o):new Tl(e,o);return LC(t._repo,t,a),()=>vu(t._repo,t,a)}function KT(t,e,n,s){return VC(t,"value",e,n,s)}class Dn{}class zC extends Dn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Hr("endAt",this._value,e._path,!0);const n=Ko(e._queryParams,this._value,this._key);if(Il(n),vi(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Rt(e._repo,e._path,n,e._orderByCalled)}}function qT(t,e){return vl("endAt","key",e,!0),new zC(t,e)}class GC extends Dn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Hr("endBefore",this._value,e._path,!1);const n=lw(e._queryParams,this._value,this._key);if(Il(n),vi(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Rt(e._repo,e._path,n,e._orderByCalled)}}function YT(t,e){return vl("endBefore","key",e,!0),new GC(t,e)}class KC extends Dn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Hr("startAt",this._value,e._path,!0);const n=aw(e._queryParams,this._value,this._key);if(Il(n),vi(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Rt(e._repo,e._path,n,e._orderByCalled)}}function QT(t=null,e){return vl("startAt","key",e,!0),new KC(t,e)}class qC extends Dn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Rt(e._repo,e._path,rw(e._queryParams,this._limit),e._orderByCalled)}}function XT(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new qC(t)}class YC extends Dn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Rt(e._repo,e._path,ow(e._queryParams,this._limit),e._orderByCalled)}}function JT(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new YC(t)}class QC extends Dn{constructor(e){super(),this._path=e}_apply(e){dp(e,"orderByChild");const n=new pe(this._path);if(Z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Ja(n),i=Af(e._queryParams,s);return vi(i),new Rt(e._repo,e._path,i,!0)}}function ZT(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return yl("orderByChild","path",t,!1),new QC(t)}class XC extends Dn{_apply(e){dp(e,"orderByKey");const n=Af(e._queryParams,Ft);return vi(n),new Rt(e._repo,e._path,n,!0)}}function eS(){return new XC}function tS(t,...e){let n=Xe(t);for(const s of e)n=s._apply(n);return n}Yw(At);eC(At);/**
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
 */const JC="FIREBASE_DATABASE_EMULATOR_HOST",ta={};let ZC=!1;function eI(t,e,n,s){t.repoInfo_=new lf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function tI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=yu(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Uc&&(c=Uc[JC]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=yu(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new es(es.OWNER):new hb(t.name,t.options,e);IC("Invalid Firebase Database URL",o),Z(o.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const h=sI(a,t,u,new ub(t.name,n));return new iI(h,t)}function nI(t,e){const n=ta[e];(!n||n[t.key]!==t)&&$t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),FC(t),delete n[t.key]}function sI(t,e,n,s){let i=ta[e.name];i||(i={},ta[e.name]=i);let r=i[t.toURLString()];return r&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new PC(t,ZC,n,s),i[t.toURLString()]=r,r}class iI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new At(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$t("Cannot call "+e+" on a deleted database.")}}function nS(t=pd(),e){const n=Ma(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Sm("database");s&&rI(n,...s)}return n}function rI(t,e,n,s={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$t("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&$t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new es(es.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Rm(s.mockUserToken,t.app.options.projectId);r=new es(o)}eI(i,e,n,r)}/**
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
 */function oI(t){YE(ys),rs(new An("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return tI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn($c,Bc,t),tn($c,Bc,"esm2017")}Lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oI();/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Wn=typeof window<"u";function aI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function mo(t,e){const n={};for(const s in e){const i=e[s];n[s]=ft(i)?i.map(t):t(i)}return n}const Ws=()=>{},ft=Array.isArray,lI=/\/$/,cI=t=>t.replace(lI,"");function vo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=fI(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function uI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Eu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&us(e.matched[s],n.matched[i])&&fp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dI(t[n],e[n]))return!1;return!0}function dI(t,e){return ft(t)?bu(t,e):ft(e)?bu(e,t):t===e}function bu(t,e){return ft(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function fI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var oi;(function(t){t.pop="pop",t.push="push"})(oi||(oi={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function pI(t){if(!t)if(Wn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cI(t)}const _I=/^[^#]+#/;function gI(t,e){return t.replace(_I,"#")+e}function mI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function vI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=mI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wu(t,e){return(history.state?history.state.position-e:-1)+t}const na=new Map;function yI(t,e){na.set(t,e)}function EI(t){const e=na.get(t);return na.delete(t),e}let bI=()=>location.protocol+"//"+location.host;function pp(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Eu(l,"")}return Eu(n,t)+s+i}function wI(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=pp(t,location),v=n.value,m=e.value;let N=0;if(d){if(n.value=_,e.value=d,o&&o===v){o=null;return}N=m?d.position-m.position:0}else s(_);i.forEach(L=>{L(n.value,v,{delta:N,type:oi.pop,direction:N?N>0?js.forward:js.back:js.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const v=i.indexOf(d);v>-1&&i.splice(v,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:Gr()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Cu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Gr():null}}function CI(t){const{history:e,location:n}=window,s={value:pp(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:bI()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=he({},e.state,Cu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=he({},i.value,e.state,{forward:l,scroll:Gr()});r(u.current,u,!0);const h=he({},Cu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function sS(t){t=pI(t);const e=CI(t),n=wI(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=he({location:"",base:t,go:s,createHref:gI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function II(t){return typeof t=="string"||t&&typeof t=="object"}function _p(t){return typeof t=="string"||typeof t=="symbol"}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gp=Symbol("");var Iu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Iu||(Iu={}));function hs(t,e){return he(new Error,{type:t,[gp]:!0},e)}function Pt(t,e){return t instanceof Error&&gp in t&&(e==null||!!(t.type&e))}const Tu="[^/]+?",TI={sensitive:!1,strict:!1,start:!0,end:!0},SI=/[.+*?^${}()[\]/\\]/g;function RI(t,e){const n=he({},TI,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(SI,"\\$&"),_+=40;else if(d.type===1){const{value:v,repeatable:m,optional:N,regexp:L}=d;r.push({name:v,repeatable:m,optional:N});const F=L||Tu;if(F!==Tu){_+=10;try{new RegExp(`(${F})`)}catch($){throw new Error(`Invalid custom RegExp for param "${v}" (${F}): `+$.message)}}let B=m?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(B=N&&c.length<2?`(?:/${B})`:"/"+B),N&&(B+="?"),i+=B,_+=20,N&&(_+=-8),m&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",v=r[d-1];h[v.name]=_&&v.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:v,repeatable:m,optional:N}=_,L=v in c?c[v]:"";if(ft(L)&&!m)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const F=ft(L)?L.join("/"):L;if(!F)if(N)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function AI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function PI(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=AI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Su(s))return 1;if(Su(i))return-1}return i.length-s.length}function Su(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NI={type:0,value:""},OI=/[a-zA-Z0-9_]/;function kI(t){if(!t)return[[]];if(t==="/")return[[NI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:OI.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function xI(t,e,n){const s=RI(kI(t.path),n),i=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function MI(t,e){const n=[],s=new Map;e=Pu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,v=DI(u);v.aliasOf=d&&d.record;const m=Pu(e,u),N=[v];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of B)N.push(he({},v,{components:d?d.record.components:v.components,path:$,aliasOf:d?d.record:v}))}let L,F;for(const B of N){const{path:$}=B;if(h&&$[0]!=="/"){const ae=h.record.path,le=ae[ae.length-1]==="/"?"":"/";B.path=h.record.path+($&&le+$)}if(L=xI(B,h,m),d?d.alias.push(L):(F=F||L,F!==L&&F.alias.push(L),_&&u.name&&!Au(L)&&o(u.name)),v.children){const ae=v.children;for(let le=0;le<ae.length;le++)r(ae[le],L,d&&d.children[le])}d=d||L,(L.record.components&&Object.keys(L.record.components).length||L.record.name||L.record.redirect)&&l(L)}return F?()=>{o(F)}:Ws}function o(u){if(_p(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&PI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!mp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Au(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},v,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw hs(1,{location:u});m=d.record.name,_=he(Ru(h.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),u.params&&Ru(u.params,d.keys.map(F=>F.name))),v=d.stringify(_)}else if("path"in u)v=u.path,d=n.find(F=>F.re.test(v)),d&&(_=d.parse(v),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!d)throw hs(1,{location:u,currentLocation:h});m=d.record.name,_=he({},h.params,u.params),v=d.stringify(_)}const N=[];let L=d;for(;L;)N.unshift(L.record),L=L.parent;return{name:m,path:v,params:_,matched:N,meta:FI(N)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ru(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function DI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function LI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Au(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FI(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Pu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function mp(t,e){return e.children.some(n=>n===t||mp(t,n))}const vp=/#/g,UI=/&/g,$I=/\//g,BI=/=/g,HI=/\?/g,yp=/\+/g,WI=/%5B/g,jI=/%5D/g,Ep=/%5E/g,VI=/%60/g,bp=/%7B/g,zI=/%7C/g,wp=/%7D/g,GI=/%20/g;function Sl(t){return encodeURI(""+t).replace(zI,"|").replace(WI,"[").replace(jI,"]")}function KI(t){return Sl(t).replace(bp,"{").replace(wp,"}").replace(Ep,"^")}function sa(t){return Sl(t).replace(yp,"%2B").replace(GI,"+").replace(vp,"%23").replace(UI,"%26").replace(VI,"`").replace(bp,"{").replace(wp,"}").replace(Ep,"^")}function qI(t){return sa(t).replace(BI,"%3D")}function YI(t){return Sl(t).replace(vp,"%23").replace(HI,"%3F")}function QI(t){return t==null?"":YI(t).replace($I,"%2F")}function gr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function XI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(yp," "),o=r.indexOf("="),a=gr(o<0?r:r.slice(0,o)),l=o<0?null:gr(r.slice(o+1));if(a in e){let c=e[a];ft(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Nu(t){let e="";for(let n in t){const s=t[n];if(n=qI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ft(s)?s.map(r=>r&&sa(r)):[s&&sa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function JI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ft(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ZI=Symbol(""),Ou=Symbol(""),Rl=Symbol(""),Cp=Symbol(""),ia=Symbol("");function Ns(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(hs(4,{from:n,to:e})):h instanceof Error?a(h):II(h)?a(hs(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function yo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(eT(a)){const c=(a.__vccOpts||a)[e];c&&i.push(zt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=aI(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&zt(d,n,s,r,o)()}))}}return i}function eT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ku(t){const e=Et(Rl),n=Et(Cp),s=ot(()=>e.resolve(qn(t.to))),i=ot(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(us.bind(null,u));if(d>-1)return d;const _=xu(l[c-2]);return c>1&&xu(u)===_&&h[h.length-1].path!==_?h.findIndex(us.bind(null,l[c-2])):d}),r=ot(()=>i.value>-1&&iT(n.params,s.value.params)),o=ot(()=>i.value>-1&&i.value===n.matched.length-1&&fp(n.params,s.value.params));function a(l={}){return sT(l)?e[qn(t.replace)?"replace":"push"](qn(t.to)).catch(Ws):Promise.resolve()}return{route:s,href:ot(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const tT=Eh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ku,setup(t,{slots:e}){const n=ai(ku(t)),{options:s}=Et(Rl),i=ot(()=>({[Mu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Bh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),nT=tT;function sT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iT(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ft(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function xu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mu=(t,e,n)=>t??e??n,rT=Eh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Et(ia),i=ot(()=>t.route||s.value),r=Et(Ou,0),o=ot(()=>{let c=qn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ot(()=>i.value.matched[o.value]);xi(Ou,ot(()=>o.value+1)),xi(ZI,a),xi(ia,i);const l=l_();return Qn(()=>[l.value,a.value,t.name],([c,u,h],[d,_,v])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!us(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Du(n.default,{Component:d,route:c});const _=h.props[u],v=_?_===!0?c.params:typeof _=="function"?_(c):_:null,N=Bh(d,he({},v,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Du(n.default,{Component:N,route:c})||N}}});function Du(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oT=rT;function iS(t){const e=MI(t.routes,t),n=t.parseQuery||XI,s=t.stringifyQuery||Nu,i=t.history,r=Ns(),o=Ns(),a=Ns(),l=c_(jt);let c=jt;Wn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=mo.bind(null,E=>""+E),h=mo.bind(null,QI),d=mo.bind(null,gr);function _(E,x){let R,M;return _p(E)?(R=e.getRecordMatcher(E),M=x):M=E,e.addRoute(M,R)}function v(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function m(){return e.getRoutes().map(E=>E.record)}function N(E){return!!e.getRecordMatcher(E)}function L(E,x){if(x=he({},x||l.value),typeof E=="string"){const g=vo(n,E,x.path),y=e.resolve({path:g.path},x),b=i.createHref(g.fullPath);return he(g,y,{params:d(y.params),hash:gr(g.hash),redirectedFrom:void 0,href:b})}let R;if("path"in E)R=he({},E,{path:vo(n,E.path,x.path).path});else{const g=he({},E.params);for(const y in g)g[y]==null&&delete g[y];R=he({},E,{params:h(g)}),x.params=h(x.params)}const M=e.resolve(R,x),X=E.hash||"";M.params=u(d(M.params));const f=uI(s,he({},E,{hash:KI(X),path:M.path})),p=i.createHref(f);return he({fullPath:f,hash:X,query:s===Nu?JI(E.query):E.query||{}},M,{redirectedFrom:void 0,href:p})}function F(E){return typeof E=="string"?vo(n,E,l.value.path):he({},E)}function B(E,x){if(c!==E)return hs(8,{from:x,to:E})}function $(E){return Ie(E)}function ae(E){return $(he(F(E),{replace:!0}))}function le(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:R}=x;let M=typeof R=="function"?R(E):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),he({query:E.query,hash:E.hash,params:"path"in M?{}:E.params},M)}}function Ie(E,x){const R=c=L(E),M=l.value,X=E.state,f=E.force,p=E.replace===!0,g=le(R);if(g)return Ie(he(F(g),{state:typeof g=="object"?he({},X,g.state):X,force:f,replace:p}),x||R);const y=R;y.redirectedFrom=x;let b;return!f&&hI(s,M,R)&&(b=hs(16,{to:y,from:M}),ne(M,M,!0,!1)),(b?Promise.resolve(b):ce(y,M)).catch(C=>Pt(C)?Pt(C,2)?C:z(C):w(C,y,M)).then(C=>{if(C){if(Pt(C,2))return Ie(he({replace:p},F(C.to),{state:typeof C.to=="object"?he({},X,C.to.state):X,force:f}),x||y)}else C=et(y,M,!0,p,X);return te(y,M,C),C})}function Ne(E,x){const R=B(E,x);return R?Promise.reject(R):Promise.resolve()}function Se(E){const x=be.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function ce(E,x){let R;const[M,X,f]=aT(E,x);R=yo(M.reverse(),"beforeRouteLeave",E,x);for(const g of M)g.leaveGuards.forEach(y=>{R.push(zt(y,E,x))});const p=Ne.bind(null,E,x);return R.push(p),we(R).then(()=>{R=[];for(const g of r.list())R.push(zt(g,E,x));return R.push(p),we(R)}).then(()=>{R=yo(X,"beforeRouteUpdate",E,x);for(const g of X)g.updateGuards.forEach(y=>{R.push(zt(y,E,x))});return R.push(p),we(R)}).then(()=>{R=[];for(const g of f)if(g.beforeEnter)if(ft(g.beforeEnter))for(const y of g.beforeEnter)R.push(zt(y,E,x));else R.push(zt(g.beforeEnter,E,x));return R.push(p),we(R)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),R=yo(f,"beforeRouteEnter",E,x),R.push(p),we(R))).then(()=>{R=[];for(const g of o.list())R.push(zt(g,E,x));return R.push(p),we(R)}).catch(g=>Pt(g,8)?g:Promise.reject(g))}function te(E,x,R){a.list().forEach(M=>Se(()=>M(E,x,R)))}function et(E,x,R,M,X){const f=B(E,x);if(f)return f;const p=x===jt,g=Wn?history.state:{};R&&(M||p?i.replace(E.fullPath,he({scroll:p&&g&&g.scroll},X)):i.push(E.fullPath,X)),l.value=E,ne(E,x,R,p),z()}let Je;function V(){Je||(Je=i.listen((E,x,R)=>{if(!Me.listening)return;const M=L(E),X=le(M);if(X){Ie(he(X,{replace:!0}),M).catch(Ws);return}c=M;const f=l.value;Wn&&yI(wu(f.fullPath,R.delta),Gr()),ce(M,f).catch(p=>Pt(p,12)?p:Pt(p,2)?(Ie(p.to,M).then(g=>{Pt(g,20)&&!R.delta&&R.type===oi.pop&&i.go(-1,!1)}).catch(Ws),Promise.reject()):(R.delta&&i.go(-R.delta,!1),w(p,M,f))).then(p=>{p=p||et(M,f,!1),p&&(R.delta&&!Pt(p,8)?i.go(-R.delta,!1):R.type===oi.pop&&Pt(p,20)&&i.go(-1,!1)),te(M,f,p)}).catch(Ws)}))}let k=Ns(),T=Ns(),P;function w(E,x,R){z(E);const M=T.list();return M.length?M.forEach(X=>X(E,x,R)):console.error(E),Promise.reject(E)}function j(){return P&&l.value!==jt?Promise.resolve():new Promise((E,x)=>{k.add([E,x])})}function z(E){return P||(P=!E,V(),k.list().forEach(([x,R])=>E?R(E):x()),k.reset()),E}function ne(E,x,R,M){const{scrollBehavior:X}=t;if(!Wn||!X)return Promise.resolve();const f=!R&&EI(wu(E.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return hh().then(()=>X(E,x,f)).then(p=>p&&vI(p)).catch(p=>w(p,E,x))}const se=E=>i.go(E);let me;const be=new Set,Me={currentRoute:l,listening:!0,addRoute:_,removeRoute:v,hasRoute:N,getRoutes:m,resolve:L,options:t,push:$,replace:ae,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:T.add,isReady:j,install(E){const x=this;E.component("RouterLink",nT),E.component("RouterView",oT),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>qn(l)}),Wn&&!me&&l.value===jt&&(me=!0,$(i.location).catch(X=>{}));const R={};for(const X in jt)Object.defineProperty(R,X,{get:()=>l.value[X],enumerable:!0});E.provide(Rl,x),E.provide(Cp,nh(R)),E.provide(ia,l);const M=E.unmount;be.add(E),E.unmount=function(){be.delete(E),be.size<1&&(c=jt,Je&&Je(),Je=null,l.value=jt,me=!1,P=!1),M()}}};function we(E){return E.reduce((x,R)=>x.then(()=>Se(R)),Promise.resolve())}return Me}function aT(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>us(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>us(c,l))||i.push(l))}return[n,s,i]}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function yi(t){return t+.5|0}const Qt=(t,e,n)=>Math.max(Math.min(t,n),e);function xs(t){return Qt(yi(t*2.55),0,255)}function rn(t){return Qt(yi(t*255),0,255)}function Ot(t){return Qt(yi(t/2.55)/100,0,1)}function Lu(t){return Qt(yi(t*100),0,100)}const tt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ra=[..."0123456789ABCDEF"],lT=t=>ra[t&15],cT=t=>ra[(t&240)>>4]+ra[t&15],Pi=t=>(t&240)>>4===(t&15),uT=t=>Pi(t.r)&&Pi(t.g)&&Pi(t.b)&&Pi(t.a);function hT(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&tt[t[1]]*17,g:255&tt[t[2]]*17,b:255&tt[t[3]]*17,a:e===5?tt[t[4]]*17:255}:(e===7||e===9)&&(n={r:tt[t[1]]<<4|tt[t[2]],g:tt[t[3]]<<4|tt[t[4]],b:tt[t[5]]<<4|tt[t[6]],a:e===9?tt[t[7]]<<4|tt[t[8]]:255})),n}const dT=(t,e)=>t<255?e(t):"";function fT(t){var e=uT(t)?lT:cT;return t?"#"+e(t.r)+e(t.g)+e(t.b)+dT(t.a,e):void 0}const pT=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ip(t,e,n){const s=e*Math.min(n,1-n),i=(r,o=(r+t/30)%12)=>n-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function _T(t,e,n){const s=(i,r=(i+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function gT(t,e,n){const s=Ip(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)s[i]*=1-e-n,s[i]+=e;return s}function mT(t,e,n,s,i){return t===i?(e-n)/s+(e<n?6:0):e===i?(n-t)/s+2:(t-e)/s+4}function Al(t){const n=t.r/255,s=t.g/255,i=t.b/255,r=Math.max(n,s,i),o=Math.min(n,s,i),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=mT(n,s,i,u,r),l=l*60+.5),[l|0,c||0,a]}function Pl(t,e,n,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,s)).map(rn)}function Nl(t,e,n){return Pl(Ip,t,e,n)}function vT(t,e,n){return Pl(gT,t,e,n)}function yT(t,e,n){return Pl(_T,t,e,n)}function Tp(t){return(t%360+360)%360}function ET(t){const e=pT.exec(t);let n=255,s;if(!e)return;e[5]!==s&&(n=e[6]?xs(+e[5]):rn(+e[5]));const i=Tp(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?s=vT(i,r,o):e[1]==="hsv"?s=yT(i,r,o):s=Nl(i,r,o),{r:s[0],g:s[1],b:s[2],a:n}}function bT(t,e){var n=Al(t);n[0]=Tp(n[0]+e),n=Nl(n),t.r=n[0],t.g=n[1],t.b=n[2]}function wT(t){if(!t)return;const e=Al(t),n=e[0],s=Lu(e[1]),i=Lu(e[2]);return t.a<255?`hsla(${n}, ${s}%, ${i}%, ${Ot(t.a)})`:`hsl(${n}, ${s}%, ${i}%)`}const Fu={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Uu={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function CT(){const t={},e=Object.keys(Uu),n=Object.keys(Fu);let s,i,r,o,a;for(s=0;s<e.length;s++){for(o=a=e[s],i=0;i<n.length;i++)r=n[i],a=a.replace(r,Fu[r]);r=parseInt(Uu[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Ni;function IT(t){Ni||(Ni=CT(),Ni.transparent=[0,0,0,0]);const e=Ni[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const TT=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ST(t){const e=TT.exec(t);let n=255,s,i,r;if(e){if(e[7]!==s){const o=+e[7];n=e[8]?xs(o):Qt(o*255,0,255)}return s=+e[1],i=+e[3],r=+e[5],s=255&(e[2]?xs(s):Qt(s,0,255)),i=255&(e[4]?xs(i):Qt(i,0,255)),r=255&(e[6]?xs(r):Qt(r,0,255)),{r:s,g:i,b:r,a:n}}}function RT(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Ot(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Eo=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Hn=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function AT(t,e,n){const s=Hn(Ot(t.r)),i=Hn(Ot(t.g)),r=Hn(Ot(t.b));return{r:rn(Eo(s+n*(Hn(Ot(e.r))-s))),g:rn(Eo(i+n*(Hn(Ot(e.g))-i))),b:rn(Eo(r+n*(Hn(Ot(e.b))-r))),a:t.a+n*(e.a-t.a)}}function Oi(t,e,n){if(t){let s=Al(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*n,e===0?360:1)),s=Nl(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function Sp(t,e){return t&&Object.assign(e||{},t)}function $u(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=rn(t[3]))):(e=Sp(t,{r:0,g:0,b:0,a:1}),e.a=rn(e.a)),e}function PT(t){return t.charAt(0)==="r"?ST(t):ET(t)}class oa{constructor(e){if(e instanceof oa)return e;const n=typeof e;let s;n==="object"?s=$u(e):n==="string"&&(s=hT(e)||IT(e)||PT(e)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var e=Sp(this._rgb);return e&&(e.a=Ot(e.a)),e}set rgb(e){this._rgb=$u(e)}rgbString(){return this._valid?RT(this._rgb):void 0}hexString(){return this._valid?fT(this._rgb):void 0}hslString(){return this._valid?wT(this._rgb):void 0}mix(e,n){if(e){const s=this.rgb,i=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,l=s.a-i.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,s.r=255&c*s.r+r*i.r+.5,s.g=255&c*s.g+r*i.g+.5,s.b=255&c*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(e,n){return e&&(this._rgb=AT(this._rgb,e._rgb,n)),this}clone(){return new oa(this.rgb)}alpha(e){return this._rgb.a=rn(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=yi(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Oi(this._rgb,2,e),this}darken(e){return Oi(this._rgb,2,-e),this}saturate(e){return Oi(this._rgb,1,e),this}desaturate(e){return Oi(this._rgb,1,-e),this}rotate(e){return bT(this._rgb,e),this}}export{qT as A,JT as B,oa as C,XT as D,tS as E,it as F,Kt as G,UT as H,xT as I,da as J,l_ as K,E_ as L,Dh as M,cg as N,Qn as O,M_ as P,kT as Q,ai as R,iS as S,sS as T,LT as U,MT as a,Fh as b,ot as c,qn as d,DT as e,HT as f,jT as g,$T as h,BT as i,Uv as j,nS as k,Ve as l,VT as m,_r as n,xh as o,GT as p,KT as q,OT as r,WT as s,NT as t,FT as u,zT as v,eS as w,ZT as x,YT as y,QT as z};
