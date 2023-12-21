(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function zo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ae={},Bn=[],pt=()=>{},Tp=()=>!1,Yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qo=t=>t.startsWith("onUpdate:"),we=Object.assign,Go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cp=Object.prototype.hasOwnProperty,q=(t,e)=>Cp.call(t,e),$=Array.isArray,Hn=t=>Qi(t)==="[object Map]",Tu=t=>Qi(t)==="[object Set]",H=t=>typeof t=="function",ge=t=>typeof t=="string",rs=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Cu=t=>(ce(t)||H(t))&&H(t.then)&&H(t.catch),Su=Object.prototype.toString,Qi=t=>Su.call(t),Sp=t=>Qi(t).slice(8,-1),Ru=t=>Qi(t)==="[object Object]",Yo=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ji=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rp=/-(\w)/g,mt=Ji(t=>t.replace(Rp,(e,n)=>n?n.toUpperCase():"")),Ap=/\B([A-Z])/g,os=Ji(t=>t.replace(Ap,"-$1").toLowerCase()),Xi=Ji(t=>t.charAt(0).toUpperCase()+t.slice(1)),Er=Ji(t=>t?`on${Xi(t)}`:""),_n=(t,e)=>!Object.is(t,e),Tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Op=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hc;const to=()=>hc||(hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qo(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?Dp(s):Qo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||ce(t))return t}const Np=/;(?![^(]*\))/g,Pp=/:([^]+)/,kp=/\/\*[^]*?\*\//g;function Dp(t){const e={};return t.replace(kp,"").split(Np).forEach(n=>{if(n){const s=n.split(Pp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jo(t){let e="";if(ge(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Jo(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xp=zo(Mp);function Au(t){return!!t||t===""}const Lp=t=>ge(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===Su||!H(t.toString))?JSON.stringify(t,Ou,2):String(t),Ou=(t,e)=>e&&e.__v_isRef?Ou(t,e.value):Hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Cr(s,r)+" =>"]=i,n),{})}:Tu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cr(n))}:rs(e)?Cr(e):ce(e)&&!$(e)&&!Ru(e)?String(e):e,Cr=(t,e="")=>{var n;return rs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let qe;class Fp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qe,!e&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qe;try{return qe=this,e()}finally{qe=n}}}on(){qe=this}off(){qe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Up(t,e=qe){e&&e.active&&e.effects.push(t)}function $p(){return qe}const Xo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nu=t=>(t.w&Jt)>0,Pu=t=>(t.n&Jt)>0,Bp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},Hp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Nu(i)&&!Pu(i)?i.delete(t):e[n++]=i,i.w&=~Jt,i.n&=~Jt}e.length=n}},no=new WeakMap;let Cs=0,Jt=1;const so=30;let Ge;const un=Symbol(""),io=Symbol("");class Zo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Up(this,s)}run(){if(!this.active)return this.fn();let e=Ge,n=Kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ge,Ge=this,Kt=!0,Jt=1<<++Cs,Cs<=so?Bp(this):dc(this),this.fn()}finally{Cs<=so&&Hp(this),Jt=1<<--Cs,Ge=this.parent,Kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(dc(this),this.onStop&&this.onStop(),this.active=!1)}}function dc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kt=!0;const ku=[];function as(){ku.push(Kt),Kt=!1}function cs(){const t=ku.pop();Kt=t===void 0?!0:t}function Me(t,e,n){if(Kt&&Ge){let s=no.get(t);s||no.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Xo()),Du(i)}}function Du(t,e){let n=!1;Cs<=so?Pu(t)||(t.n|=Jt,n=!Nu(t)):n=!t.has(Ge),n&&(t.add(Ge),Ge.deps.push(t))}function Rt(t,e,n,s,i,r){const o=no.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!rs(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Yo(n)&&a.push(o.get("length")):(a.push(o.get(un)),Hn(t)&&a.push(o.get(io)));break;case"delete":$(t)||(a.push(o.get(un)),Hn(t)&&a.push(o.get(io)));break;case"set":Hn(t)&&a.push(o.get(un));break}if(a.length===1)a[0]&&ro(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ro(Xo(c))}}function ro(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&fc(s);for(const s of n)s.computed||fc(s)}function fc(t,e){(t!==Ge||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wp=zo("__proto__,__v_isRef,__isVue"),Mu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rs)),pc=jp();function jp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=G(this);for(let r=0,o=this.length;r<o;r++)Me(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){as();const s=G(this)[e].apply(this,n);return cs(),s}}),t}function Vp(t){const e=G(this);return Me(e,"has",t),e.hasOwnProperty(t)}class xu{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?s_:$u:r?Uu:Fu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!i){if(o&&q(pc,n))return Reflect.get(pc,n,s);if(n==="hasOwnProperty")return Vp}const a=Reflect.get(e,n,s);return(rs(n)?Mu.has(n):Wp(n))||(i||Me(e,"get",n),r)?a:xe(a)?o&&Yo(n)?a:a.value:ce(a)?i?Hu(a):Qs(a):a}}class Lu extends xu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const c=Qn(r);if(!Ei(s)&&!Qn(s)&&(r=G(r),s=G(s)),!$(e)&&xe(r)&&!xe(s))return c?!1:(r.value=s,!0)}const o=$(e)&&Yo(n)?Number(n)<e.length:q(e,n),a=Reflect.set(e,n,s,i);return e===G(i)&&(o?_n(s,r)&&Rt(e,"set",n,s):Rt(e,"add",n,s)),a}deleteProperty(e,n){const s=q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Rt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!rs(n)||!Mu.has(n))&&Me(e,"has",n),s}ownKeys(e){return Me(e,"iterate",$(e)?"length":un),Reflect.ownKeys(e)}}class Kp extends xu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zp=new Lu,qp=new Kp,Gp=new Lu(!0),ea=t=>t,Zi=t=>Reflect.getPrototypeOf(t);function ri(t,e,n=!1,s=!1){t=t.__v_raw;const i=G(t),r=G(e);n||(_n(e,r)&&Me(i,"get",e),Me(i,"get",r));const{has:o}=Zi(i),a=s?ea:n?sa:Ls;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function oi(t,e=!1){const n=this.__v_raw,s=G(n),i=G(t);return e||(_n(t,i)&&Me(s,"has",t),Me(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ai(t,e=!1){return t=t.__v_raw,!e&&Me(G(t),"iterate",un),Reflect.get(t,"size",t)}function _c(t){t=G(t);const e=G(this);return Zi(e).has.call(e,t)||(e.add(t),Rt(e,"add",t,t)),this}function gc(t,e){e=G(e);const n=G(this),{has:s,get:i}=Zi(n);let r=s.call(n,t);r||(t=G(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?_n(e,o)&&Rt(n,"set",t,e):Rt(n,"add",t,e),this}function mc(t){const e=G(this),{has:n,get:s}=Zi(e);let i=n.call(e,t);i||(t=G(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Rt(e,"delete",t,void 0),r}function yc(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Rt(t,"clear",void 0,void 0),n}function ci(t,e){return function(s,i){const r=this,o=r.__v_raw,a=G(o),c=e?ea:t?sa:Ls;return!t&&Me(a,"iterate",un),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function li(t,e,n){return function(...s){const i=this.__v_raw,r=G(i),o=Hn(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?ea:e?sa:Ls;return!e&&Me(r,"iterate",c?io:un),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ft(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yp(){const t={get(r){return ri(this,r)},get size(){return ai(this)},has:oi,add:_c,set:gc,delete:mc,clear:yc,forEach:ci(!1,!1)},e={get(r){return ri(this,r,!1,!0)},get size(){return ai(this)},has:oi,add:_c,set:gc,delete:mc,clear:yc,forEach:ci(!1,!0)},n={get(r){return ri(this,r,!0)},get size(){return ai(this,!0)},has(r){return oi.call(this,r,!0)},add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear"),forEach:ci(!0,!1)},s={get(r){return ri(this,r,!0,!0)},get size(){return ai(this,!0)},has(r){return oi.call(this,r,!0)},add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear"),forEach:ci(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=li(r,!1,!1),n[r]=li(r,!0,!1),e[r]=li(r,!1,!0),s[r]=li(r,!0,!0)}),[t,n,e,s]}const[Qp,Jp,Xp,Zp]=Yp();function ta(t,e){const n=e?t?Zp:Xp:t?Jp:Qp;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const e_={get:ta(!1,!1)},t_={get:ta(!1,!0)},n_={get:ta(!0,!1)},Fu=new WeakMap,Uu=new WeakMap,$u=new WeakMap,s_=new WeakMap;function i_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function r_(t){return t.__v_skip||!Object.isExtensible(t)?0:i_(Sp(t))}function Qs(t){return Qn(t)?t:na(t,!1,zp,e_,Fu)}function Bu(t){return na(t,!1,Gp,t_,Uu)}function Hu(t){return na(t,!0,qp,n_,$u)}function na(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=r_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Wn(t){return Qn(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qn(t){return!!(t&&t.__v_isReadonly)}function Ei(t){return!!(t&&t.__v_isShallow)}function Wu(t){return Wn(t)||Qn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function ju(t){return bi(t,"__v_skip",!0),t}const Ls=t=>ce(t)?Qs(t):t,sa=t=>ce(t)?Hu(t):t;function Vu(t){Kt&&Ge&&(t=G(t),Du(t.dep||(t.dep=Xo())))}function Ku(t,e){t=G(t);const n=t.dep;n&&ro(n)}function xe(t){return!!(t&&t.__v_isRef===!0)}function o_(t){return zu(t,!1)}function a_(t){return zu(t,!0)}function zu(t,e){return xe(t)?t:new c_(t,e)}class c_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Ls(e)}get value(){return Vu(this),this._value}set value(e){const n=this.__v_isShallow||Ei(e)||Qn(e);e=n?e:G(e),_n(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ls(e),Ku(this))}}function hn(t){return xe(t)?t.value:t}const l_={get:(t,e,n)=>hn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function qu(t){return Wn(t)?t:new Proxy(t,l_)}class u_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zo(e,()=>{this._dirty||(this._dirty=!0,Ku(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=G(this);return Vu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function h_(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=pt):(s=t.get,i=t.set),new u_(s,i,r||!i,n)}function zt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){er(r,e,n)}return i}function Ze(t,e,n,s){if(H(t)){const r=zt(t,e,n,s);return r&&Cu(r)&&r.catch(o=>{er(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ze(t[r],e,n,s));return i}function er(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){zt(c,null,10,[t,o,a]);return}}d_(t,n,i,s)}function d_(t,e,n,s=!0){console.error(t)}let Fs=!1,oo=!1;const Ee=[];let dt=0;const jn=[];let bt=null,rn=0;const Gu=Promise.resolve();let ia=null;function Yu(t){const e=ia||Gu;return t?e.then(this?t.bind(this):t):e}function f_(t){let e=dt+1,n=Ee.length;for(;e<n;){const s=e+n>>>1,i=Ee[s],r=Us(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ra(t){(!Ee.length||!Ee.includes(t,Fs&&t.allowRecurse?dt+1:dt))&&(t.id==null?Ee.push(t):Ee.splice(f_(t.id),0,t),Qu())}function Qu(){!Fs&&!oo&&(oo=!0,ia=Gu.then(Xu))}function p_(t){const e=Ee.indexOf(t);e>dt&&Ee.splice(e,1)}function __(t){$(t)?jn.push(...t):(!bt||!bt.includes(t,t.allowRecurse?rn+1:rn))&&jn.push(t),Qu()}function vc(t,e,n=Fs?dt+1:0){for(;n<Ee.length;n++){const s=Ee[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ee.splice(n,1),n--,s()}}}function Ju(t){if(jn.length){const e=[...new Set(jn)];if(jn.length=0,bt){bt.push(...e);return}for(bt=e,bt.sort((n,s)=>Us(n)-Us(s)),rn=0;rn<bt.length;rn++)bt[rn]();bt=null,rn=0}}const Us=t=>t.id==null?1/0:t.id,g_=(t,e)=>{const n=Us(t)-Us(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Xu(t){oo=!1,Fs=!0,Ee.sort(g_);try{for(dt=0;dt<Ee.length;dt++){const e=Ee[dt];e&&e.active!==!1&&zt(e,null,14)}}finally{dt=0,Ee.length=0,Ju(),Fs=!1,ia=null,(Ee.length||jn.length)&&Xu()}}function m_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ae;d&&(i=n.map(_=>ge(_)?_.trim():_)),h&&(i=n.map(Op))}let a,c=s[a=Er(e)]||s[a=Er(mt(e))];!c&&r&&(c=s[a=Er(os(e))]),c&&Ze(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ze(l,t,6,i)}}function Zu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=Zu(l,e,!0);u&&(a=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ce(t)&&s.set(t,null),null):($(r)?r.forEach(c=>o[c]=null):we(o,r),ce(t)&&s.set(t,o),o)}function tr(t,e){return!t||!Yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,os(e))||q(t,e))}let Qe=null,eh=null;function Ti(t){const e=Qe;return Qe=t,eh=t&&t.type.__scopeId||null,e}function th(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Nc(-1);const r=Ti(e);let o;try{o=t(...i)}finally{Ti(r),s._d&&Nc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Sr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:_,ctx:v,inheritAttrs:C}=t;let P,k;const D=Ti(t);try{if(n.shapeFlag&4){const x=i||s,le=x;P=ht(u.call(le,x,h,r,_,d,v)),k=c}else{const x=e;P=ht(x.length>1?x(r,{attrs:c,slots:a,emit:l}):x(r,null)),k=e.props?c:y_(c)}}catch(x){As.length=0,er(x,t,1),P=Ne($s)}let W=P;if(k&&C!==!1){const x=Object.keys(k),{shapeFlag:le}=W;x.length&&le&7&&(o&&x.some(qo)&&(k=v_(k,o)),W=Jn(W,k))}return n.dirs&&(W=Jn(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),P=W,Ti(D),P}const y_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yi(n))&&((e||(e={}))[n]=t[n]);return e},v_=(t,e)=>{const n={};for(const s in t)(!qo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function w_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?wc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!tr(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wc(s,o,l):!0:!!o;return!1}function wc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!tr(n,r))return!0}return!1}function I_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nh="components";function ao(t,e){return E_(nh,t,!0,e)||t}const b_=Symbol.for("v-ndc");function E_(t,e,n=!0,s=!1){const i=Qe||ye;if(i){const r=i.type;if(t===nh){const a=_g(r,!1);if(a&&(a===e||a===mt(e)||a===Xi(mt(e))))return r}const o=Ic(i[t]||r[t],e)||Ic(i.appContext[t],e);return!o&&s?r:o}}function Ic(t,e){return t&&(t[e]||t[mt(e)]||t[Xi(mt(e))])}const T_=t=>t.__isSuspense;function C_(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):__(t)}const ui={};function Vn(t,e,n){return sh(t,e,n)}function sh(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){var a;const c=$p()===((a=ye)==null?void 0:a.scope)?ye:null;let l,u=!1,h=!1;if(xe(t)?(l=()=>t.value,u=Ei(t)):Wn(t)?(l=()=>t,s=!0):$(t)?(h=!0,u=t.some(x=>Wn(x)||Ei(x)),l=()=>t.map(x=>{if(xe(x))return x.value;if(Wn(x))return Fn(x);if(H(x))return zt(x,c,2)})):H(t)?e?l=()=>zt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ze(t,c,3,[_])}:l=pt,e&&s){const x=l;l=()=>Fn(x())}let d,_=x=>{d=D.onStop=()=>{zt(x,c,4),d=D.onStop=void 0}},v;if(Hs)if(_=pt,e?n&&Ze(e,c,3,[l(),h?[]:void 0,_]):l(),i==="sync"){const x=yg();v=x.__watcherHandles||(x.__watcherHandles=[])}else return pt;let C=h?new Array(t.length).fill(ui):ui;const P=()=>{if(D.active)if(e){const x=D.run();(s||u||(h?x.some((le,ue)=>_n(le,C[ue])):_n(x,C)))&&(d&&d(),Ze(e,c,3,[x,C===ui?void 0:h&&C[0]===ui?[]:C,_]),C=x)}else D.run()};P.allowRecurse=!!e;let k;i==="sync"?k=P:i==="post"?k=()=>Oe(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),k=()=>ra(P));const D=new Zo(l,k);e?n?P():C=D.run():i==="post"?Oe(D.run.bind(D),c&&c.suspense):D.run();const W=()=>{D.stop(),c&&c.scope&&Go(c.scope.effects,D)};return v&&v.push(W),W}function S_(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?ih(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=ye;Xn(this);const a=sh(i,r.bind(s),n);return o?Xn(o):dn(),a}function ih(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Fn(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))Fn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Fn(t[n],e);else if(Tu(t)||Hn(t))t.forEach(n=>{Fn(n,e)});else if(Ru(t))for(const n in t)Fn(t[n],e);return t}function en(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(as(),Ze(c,n,8,[t.el,a,t,e]),cs())}}/*! #__NO_SIDE_EFFECTS__ */function rh(t,e){return H(t)?we({name:t.name},e,{setup:t}):t}const _i=t=>!!t.type.__asyncLoader,oh=t=>t.type.__isKeepAlive;function R_(t,e){ah(t,"a",e)}function A_(t,e){ah(t,"da",e)}function ah(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(nr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)oh(i.parent.vnode)&&O_(s,e,n,i),i=i.parent}}function O_(t,e,n,s){const i=nr(e,t,s,!0);ch(()=>{Go(s[e],i)},n)}function nr(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;as(),Xn(n);const a=Ze(e,n,t,o);return dn(),cs(),a});return s?i.unshift(r):i.push(r),r}}const Dt=t=>(e,n=ye)=>(!Hs||t==="sp")&&nr(t,(...s)=>e(...s),n),N_=Dt("bm"),P_=Dt("m"),k_=Dt("bu"),D_=Dt("u"),M_=Dt("bum"),ch=Dt("um"),x_=Dt("sp"),L_=Dt("rtg"),F_=Dt("rtc");function U_(t,e=ye){nr("ec",t,e)}const co=t=>t?wh(t)?ha(t)||t.proxy:co(t.parent):null,Rs=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>co(t.parent),$root:t=>co(t.root),$emit:t=>t.emit,$options:t=>oa(t),$forceUpdate:t=>t.f||(t.f=()=>ra(t.update)),$nextTick:t=>t.n||(t.n=Yu.bind(t.proxy)),$watch:t=>S_.bind(t)}),Rr=(t,e)=>t!==ae&&!t.__isScriptSetup&&q(t,e),$_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Rr(s,e))return o[e]=1,s[e];if(i!==ae&&q(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,r[e];if(n!==ae&&q(n,e))return o[e]=4,n[e];lo&&(o[e]=0)}}const u=Rs[e];let h,d;if(u)return e==="$attrs"&&Me(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&q(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Rr(i,e)?(i[e]=n,!0):s!==ae&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&q(t,o)||Rr(e,o)||(a=r[0])&&q(a,o)||q(s,o)||q(Rs,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bc(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lo=!0;function B_(t){const e=oa(t),n=t.proxy,s=t.ctx;lo=!1,e.beforeCreate&&Ec(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:v,activated:C,deactivated:P,beforeDestroy:k,beforeUnmount:D,destroyed:W,unmounted:x,render:le,renderTracked:ue,renderTriggered:Re,errorCaptured:Be,serverPrefetch:rt,expose:He,inheritAttrs:xt,components:Zt,directives:ot,filters:ms}=e;if(l&&H_(l,s,null),o)for(const ne in o){const Y=o[ne];H(Y)&&(s[ne]=Y.bind(n))}if(i){const ne=i.call(n,n);ce(ne)&&(t.data=Qs(ne))}if(lo=!0,r)for(const ne in r){const Y=r[ne],wt=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):pt,Lt=!H(Y)&&H(Y.set)?Y.set.bind(n):pt,at=We({get:wt,set:Lt});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ae=>at.value=Ae})}if(a)for(const ne in a)lh(a[ne],s,n,ne);if(c){const ne=H(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Y=>{gi(Y,ne[Y])})}u&&Ec(u,t,"c");function fe(ne,Y){$(Y)?Y.forEach(wt=>ne(wt.bind(n))):Y&&ne(Y.bind(n))}if(fe(N_,h),fe(P_,d),fe(k_,_),fe(D_,v),fe(R_,C),fe(A_,P),fe(U_,Be),fe(F_,ue),fe(L_,Re),fe(M_,D),fe(ch,x),fe(x_,rt),$(He))if(He.length){const ne=t.exposed||(t.exposed={});He.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:wt=>n[Y]=wt})})}else t.exposed||(t.exposed={});le&&t.render===pt&&(t.render=le),xt!=null&&(t.inheritAttrs=xt),Zt&&(t.components=Zt),ot&&(t.directives=ot)}function H_(t,e,n=pt){$(t)&&(t=uo(t));for(const s in t){const i=t[s];let r;ce(i)?"default"in i?r=et(i.from||s,i.default,!0):r=et(i.from||s):r=et(i),xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Ec(t,e,n){Ze($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function lh(t,e,n,s){const i=s.includes(".")?ih(n,s):()=>n[s];if(ge(t)){const r=e[t];H(r)&&Vn(i,r)}else if(H(t))Vn(i,t.bind(n));else if(ce(t))if($(t))t.forEach(r=>lh(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&Vn(i,r,t)}}function oa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>Ci(c,l,o,!0)),Ci(c,e,o)),ce(e)&&r.set(e,c),c}function Ci(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ci(t,r,n,!0),i&&i.forEach(o=>Ci(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=W_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const W_={data:Tc,props:Cc,emits:Cc,methods:Ss,computed:Ss,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Ss,directives:Ss,watch:V_,provide:Tc,inject:j_};function Tc(t,e){return e?t?function(){return we(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function j_(t,e){return Ss(uo(t),uo(e))}function uo(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Ss(t,e){return t?we(Object.create(null),t,e):e}function Cc(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:we(Object.create(null),bc(t),bc(e??{})):e}function V_(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const s in e)n[s]=Se(t[s],e[s]);return n}function uh(){return{app:null,config:{isNativeTag:Tp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let K_=0;function z_(t,e){return function(s,i=null){H(s)||(s=we({},s)),i!=null&&!ce(i)&&(i=null);const r=uh(),o=new WeakSet;let a=!1;const c=r.app={_uid:K_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:vg,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=Ne(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ha(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){Si=c;try{return l()}finally{Si=null}}};return c}}let Si=null;function gi(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function et(t,e,n=!1){const s=ye||Qe;if(s||Si){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Si._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function q_(t,e,n,s=!1){const i={},r={};bi(r,rr,1),t.propsDefaults=Object.create(null),hh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Bu(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function G_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=G(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(tr(t.emitsOptions,d))continue;const _=e[d];if(c)if(q(r,d))_!==r[d]&&(r[d]=_,l=!0);else{const v=mt(d);i[v]=ho(c,a,v,_,t,!1)}else _!==r[d]&&(r[d]=_,l=!0)}}}else{hh(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!q(e,h)&&((u=os(h))===h||!q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ho(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!q(e,h))&&(delete r[h],l=!0)}l&&Rt(t,"set","$attrs")}function hh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pi(c))continue;const l=e[c];let u;i&&q(i,u=mt(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:tr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=G(n),l=a||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ho(i,c,h,l[h],t,!q(l,h))}}return o}function ho(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Xn(i),s=l[n]=c.call(null,e),dn())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===os(n))&&(s=!0))}return s}function dh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!H(t)){const u=h=>{c=!0;const[d,_]=dh(h,e,!0);we(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ce(t)&&s.set(t,Bn),Bn;if($(r))for(let u=0;u<r.length;u++){const h=mt(r[u]);Sc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=mt(u);if(Sc(h)){const d=r[u],_=o[h]=$(d)||H(d)?{type:d}:we({},d);if(_){const v=Oc(Boolean,_.type),C=Oc(String,_.type);_[0]=v>-1,_[1]=C<0||v<C,(v>-1||q(_,"default"))&&a.push(h)}}}const l=[o,a];return ce(t)&&s.set(t,l),l}function Sc(t){return t[0]!=="$"}function Rc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ac(t,e){return Rc(t)===Rc(e)}function Oc(t,e){return $(e)?e.findIndex(n=>Ac(n,t)):H(e)&&Ac(e,t)?0:-1}const fh=t=>t[0]==="_"||t==="$stable",aa=t=>$(t)?t.map(ht):[ht(t)],Y_=(t,e,n)=>{if(e._n)return e;const s=th((...i)=>aa(e(...i)),n);return s._c=!1,s},ph=(t,e,n)=>{const s=t._ctx;for(const i in t){if(fh(i))continue;const r=t[i];if(H(r))e[i]=Y_(i,r,s);else if(r!=null){const o=aa(r);e[i]=()=>o}}},_h=(t,e)=>{const n=aa(e);t.slots.default=()=>n},Q_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),bi(e,"_",n)):ph(e,t.slots={})}else t.slots={},e&&_h(t,e);bi(t.slots,rr,1)},J_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(we(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ph(e,i)),o=e}else e&&(_h(t,e),o={default:1});if(r)for(const a in i)!fh(a)&&o[a]==null&&delete i[a]};function fo(t,e,n,s,i=!1){if($(t)){t.forEach((d,_)=>fo(d,e&&($(e)?e[_]:e),n,s,i));return}if(_i(s)&&!i)return;const r=s.shapeFlag&4?ha(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ge(l)?(u[l]=null,q(h,l)&&(h[l]=null)):xe(l)&&(l.value=null)),H(c))zt(c,a,12,[o,u]);else{const d=ge(c),_=xe(c);if(d||_){const v=()=>{if(t.f){const C=d?q(h,c)?h[c]:u[c]:c.value;i?$(C)&&Go(C,r):$(C)?C.includes(r)||C.push(r):d?(u[c]=[r],q(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,q(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Oe(v,n)):v()}}}const Oe=C_;function X_(t){return Z_(t)}function Z_(t,e){const n=to();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=pt,insertStaticContent:v}=t,C=(f,p,g,m=null,w=null,I=null,A=!1,E=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!vs(f,p)&&(m=y(f),Ae(f,w,I,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:b,ref:L,shapeFlag:N}=p;switch(b){case sr:P(f,p,g,m);break;case $s:k(f,p,g,m);break;case Ar:f==null&&D(p,g,m,A);break;case ut:Zt(f,p,g,m,w,I,A,E,T);break;default:N&1?le(f,p,g,m,w,I,A,E,T):N&6?ot(f,p,g,m,w,I,A,E,T):(N&64||N&128)&&b.process(f,p,g,m,w,I,A,E,T,S)}L!=null&&w&&fo(L,f&&f.ref,I,p||f,!p)},P=(f,p,g,m)=>{if(f==null)s(p.el=a(p.children),g,m);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},k=(f,p,g,m)=>{f==null?s(p.el=c(p.children||""),g,m):p.el=f.el},D=(f,p,g,m)=>{[f.el,f.anchor]=v(f.children,p,g,m,f.el,f.anchor)},W=({el:f,anchor:p},g,m)=>{let w;for(;f&&f!==p;)w=d(f),s(f,g,m),f=w;s(p,g,m)},x=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},le=(f,p,g,m,w,I,A,E,T)=>{A=A||p.type==="svg",f==null?ue(p,g,m,w,I,A,E,T):rt(f,p,w,I,A,E,T)},ue=(f,p,g,m,w,I,A,E)=>{let T,b;const{type:L,props:N,shapeFlag:F,transition:B,dirs:j}=f;if(T=f.el=o(f.type,I,N&&N.is,N),F&8?u(T,f.children):F&16&&Be(f.children,T,null,m,w,I&&L!=="foreignObject",A,E),j&&en(f,null,m,"created"),Re(T,f,f.scopeId,A,m),N){for(const Z in N)Z!=="value"&&!pi(Z)&&r(T,Z,null,N[Z],I,f.children,m,w,Ie);"value"in N&&r(T,"value",null,N.value),(b=N.onVnodeBeforeMount)&&lt(b,m,f)}j&&en(f,null,m,"beforeMount");const se=eg(w,B);se&&B.beforeEnter(T),s(T,p,g),((b=N&&N.onVnodeMounted)||se||j)&&Oe(()=>{b&&lt(b,m,f),se&&B.enter(T),j&&en(f,null,m,"mounted")},w)},Re=(f,p,g,m,w)=>{if(g&&_(f,g),m)for(let I=0;I<m.length;I++)_(f,m[I]);if(w){let I=w.subTree;if(p===I){const A=w.vnode;Re(f,A,A.scopeId,A.slotScopeIds,w.parent)}}},Be=(f,p,g,m,w,I,A,E,T=0)=>{for(let b=T;b<f.length;b++){const L=f[b]=E?Bt(f[b]):ht(f[b]);C(null,L,p,g,m,w,I,A,E)}},rt=(f,p,g,m,w,I,A)=>{const E=p.el=f.el;let{patchFlag:T,dynamicChildren:b,dirs:L}=p;T|=f.patchFlag&16;const N=f.props||ae,F=p.props||ae;let B;g&&tn(g,!1),(B=F.onVnodeBeforeUpdate)&&lt(B,g,p,f),L&&en(p,f,g,"beforeUpdate"),g&&tn(g,!0);const j=w&&p.type!=="foreignObject";if(b?He(f.dynamicChildren,b,E,g,m,j,I):A||Y(f,p,E,null,g,m,j,I,!1),T>0){if(T&16)xt(E,p,N,F,g,m,w);else if(T&2&&N.class!==F.class&&r(E,"class",null,F.class,w),T&4&&r(E,"style",N.style,F.style,w),T&8){const se=p.dynamicProps;for(let Z=0;Z<se.length;Z++){const he=se[Z],ze=N[he],Pn=F[he];(Pn!==ze||he==="value")&&r(E,he,ze,Pn,w,f.children,g,m,Ie)}}T&1&&f.children!==p.children&&u(E,p.children)}else!A&&b==null&&xt(E,p,N,F,g,m,w);((B=F.onVnodeUpdated)||L)&&Oe(()=>{B&&lt(B,g,p,f),L&&en(p,f,g,"updated")},m)},He=(f,p,g,m,w,I,A)=>{for(let E=0;E<p.length;E++){const T=f[E],b=p[E],L=T.el&&(T.type===ut||!vs(T,b)||T.shapeFlag&70)?h(T.el):g;C(T,b,L,null,m,w,I,A,!0)}},xt=(f,p,g,m,w,I,A)=>{if(g!==m){if(g!==ae)for(const E in g)!pi(E)&&!(E in m)&&r(f,E,g[E],null,A,p.children,w,I,Ie);for(const E in m){if(pi(E))continue;const T=m[E],b=g[E];T!==b&&E!=="value"&&r(f,E,b,T,A,p.children,w,I,Ie)}"value"in m&&r(f,"value",g.value,m.value)}},Zt=(f,p,g,m,w,I,A,E,T)=>{const b=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:B}=p;B&&(E=E?E.concat(B):B),f==null?(s(b,g,m),s(L,g,m),Be(p.children,g,L,w,I,A,E,T)):N>0&&N&64&&F&&f.dynamicChildren?(He(f.dynamicChildren,F,g,w,I,A,E),(p.key!=null||w&&p===w.subTree)&&gh(f,p,!0)):Y(f,p,g,L,w,I,A,E,T)},ot=(f,p,g,m,w,I,A,E,T)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?w.ctx.activate(p,g,m,A,T):ms(p,g,m,w,I,A,T):An(f,p,T)},ms=(f,p,g,m,w,I,A)=>{const E=f.component=ug(f,m,w);if(oh(f)&&(E.ctx.renderer=S),hg(E),E.asyncDep){if(w&&w.registerDep(E,fe),!f.el){const T=E.subTree=Ne($s);k(null,T,p,g)}return}fe(E,f,p,g,w,I,A)},An=(f,p,g)=>{const m=p.component=f.component;if(w_(f,p,g))if(m.asyncDep&&!m.asyncResolved){ne(m,p,g);return}else m.next=p,p_(m.update),m.update();else p.el=f.el,m.vnode=p},fe=(f,p,g,m,w,I,A)=>{const E=()=>{if(f.isMounted){let{next:L,bu:N,u:F,parent:B,vnode:j}=f,se=L,Z;tn(f,!1),L?(L.el=j.el,ne(f,L,A)):L=j,N&&Tr(N),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&lt(Z,B,L,j),tn(f,!0);const he=Sr(f),ze=f.subTree;f.subTree=he,C(ze,he,h(ze.el),y(ze),f,w,I),L.el=he.el,se===null&&I_(f,he.el),F&&Oe(F,w),(Z=L.props&&L.props.onVnodeUpdated)&&Oe(()=>lt(Z,B,L,j),w)}else{let L;const{el:N,props:F}=p,{bm:B,m:j,parent:se}=f,Z=_i(p);if(tn(f,!1),B&&Tr(B),!Z&&(L=F&&F.onVnodeBeforeMount)&&lt(L,se,p),tn(f,!0),N&&Q){const he=()=>{f.subTree=Sr(f),Q(N,f.subTree,f,w,null)};Z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&he()):he()}else{const he=f.subTree=Sr(f);C(null,he,g,m,f,w,I),p.el=he.el}if(j&&Oe(j,w),!Z&&(L=F&&F.onVnodeMounted)){const he=p;Oe(()=>lt(L,se,he),w)}(p.shapeFlag&256||se&&_i(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Oe(f.a,w),f.isMounted=!0,p=g=m=null}},T=f.effect=new Zo(E,()=>ra(b),f.scope),b=f.update=()=>T.run();b.id=f.uid,tn(f,!0),b()},ne=(f,p,g)=>{p.component=f;const m=f.vnode.props;f.vnode=p,f.next=null,G_(f,p.props,m,g),J_(f,p.children,g),as(),vc(f),cs()},Y=(f,p,g,m,w,I,A,E,T=!1)=>{const b=f&&f.children,L=f?f.shapeFlag:0,N=p.children,{patchFlag:F,shapeFlag:B}=p;if(F>0){if(F&128){Lt(b,N,g,m,w,I,A,E,T);return}else if(F&256){wt(b,N,g,m,w,I,A,E,T);return}}B&8?(L&16&&Ie(b,w,I),N!==b&&u(g,N)):L&16?B&16?Lt(b,N,g,m,w,I,A,E,T):Ie(b,w,I,!0):(L&8&&u(g,""),B&16&&Be(N,g,m,w,I,A,E,T))},wt=(f,p,g,m,w,I,A,E,T)=>{f=f||Bn,p=p||Bn;const b=f.length,L=p.length,N=Math.min(b,L);let F;for(F=0;F<N;F++){const B=p[F]=T?Bt(p[F]):ht(p[F]);C(f[F],B,g,null,w,I,A,E,T)}b>L?Ie(f,w,I,!0,!1,N):Be(p,g,m,w,I,A,E,T,N)},Lt=(f,p,g,m,w,I,A,E,T)=>{let b=0;const L=p.length;let N=f.length-1,F=L-1;for(;b<=N&&b<=F;){const B=f[b],j=p[b]=T?Bt(p[b]):ht(p[b]);if(vs(B,j))C(B,j,g,null,w,I,A,E,T);else break;b++}for(;b<=N&&b<=F;){const B=f[N],j=p[F]=T?Bt(p[F]):ht(p[F]);if(vs(B,j))C(B,j,g,null,w,I,A,E,T);else break;N--,F--}if(b>N){if(b<=F){const B=F+1,j=B<L?p[B].el:m;for(;b<=F;)C(null,p[b]=T?Bt(p[b]):ht(p[b]),g,j,w,I,A,E,T),b++}}else if(b>F)for(;b<=N;)Ae(f[b],w,I,!0),b++;else{const B=b,j=b,se=new Map;for(b=j;b<=F;b++){const Fe=p[b]=T?Bt(p[b]):ht(p[b]);Fe.key!=null&&se.set(Fe.key,b)}let Z,he=0;const ze=F-j+1;let Pn=!1,cc=0;const ys=new Array(ze);for(b=0;b<ze;b++)ys[b]=0;for(b=B;b<=N;b++){const Fe=f[b];if(he>=ze){Ae(Fe,w,I,!0);continue}let ct;if(Fe.key!=null)ct=se.get(Fe.key);else for(Z=j;Z<=F;Z++)if(ys[Z-j]===0&&vs(Fe,p[Z])){ct=Z;break}ct===void 0?Ae(Fe,w,I,!0):(ys[ct-j]=b+1,ct>=cc?cc=ct:Pn=!0,C(Fe,p[ct],g,null,w,I,A,E,T),he++)}const lc=Pn?tg(ys):Bn;for(Z=lc.length-1,b=ze-1;b>=0;b--){const Fe=j+b,ct=p[Fe],uc=Fe+1<L?p[Fe+1].el:m;ys[b]===0?C(null,ct,g,uc,w,I,A,E,T):Pn&&(Z<0||b!==lc[Z]?at(ct,g,uc,2):Z--)}}},at=(f,p,g,m,w=null)=>{const{el:I,type:A,transition:E,children:T,shapeFlag:b}=f;if(b&6){at(f.component.subTree,p,g,m);return}if(b&128){f.suspense.move(p,g,m);return}if(b&64){A.move(f,p,g,S);return}if(A===ut){s(I,p,g);for(let N=0;N<T.length;N++)at(T[N],p,g,m);s(f.anchor,p,g);return}if(A===Ar){W(f,p,g);return}if(m!==2&&b&1&&E)if(m===0)E.beforeEnter(I),s(I,p,g),Oe(()=>E.enter(I),w);else{const{leave:N,delayLeave:F,afterLeave:B}=E,j=()=>s(I,p,g),se=()=>{N(I,()=>{j(),B&&B()})};F?F(I,j,se):se()}else s(I,p,g)},Ae=(f,p,g,m=!1,w=!1)=>{const{type:I,props:A,ref:E,children:T,dynamicChildren:b,shapeFlag:L,patchFlag:N,dirs:F}=f;if(E!=null&&fo(E,null,g,f,!0),L&256){p.ctx.deactivate(f);return}const B=L&1&&F,j=!_i(f);let se;if(j&&(se=A&&A.onVnodeBeforeUnmount)&&lt(se,p,f),L&6)ii(f.component,g,m);else{if(L&128){f.suspense.unmount(g,m);return}B&&en(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,g,w,S,m):b&&(I!==ut||N>0&&N&64)?Ie(b,p,g,!1,!0):(I===ut&&N&384||!w&&L&16)&&Ie(T,p,g),m&&On(f)}(j&&(se=A&&A.onVnodeUnmounted)||B)&&Oe(()=>{se&&lt(se,p,f),B&&en(f,null,p,"unmounted")},g)},On=f=>{const{type:p,el:g,anchor:m,transition:w}=f;if(p===ut){Nn(g,m);return}if(p===Ar){x(f);return}const I=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:E}=w,T=()=>A(g,I);E?E(f.el,I,T):T()}else I()},Nn=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},ii=(f,p,g)=>{const{bum:m,scope:w,update:I,subTree:A,um:E}=f;m&&Tr(m),w.stop(),I&&(I.active=!1,Ae(A,f,p,g)),E&&Oe(E,p),Oe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ie=(f,p,g,m=!1,w=!1,I=0)=>{for(let A=I;A<f.length;A++)Ae(f[A],p,g,m,w)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),O=(f,p,g)=>{f==null?p._vnode&&Ae(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),vc(),Ju(),p._vnode=f},S={p:C,um:Ae,m:at,r:On,mt:ms,mc:Be,pc:Y,pbc:He,n:y,o:t};let M,Q;return e&&([M,Q]=e(S)),{render:O,hydrate:M,createApp:z_(O,M)}}function tn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function eg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gh(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Bt(i[r]),a.el=o.el),n||gh(o,a)),a.type===sr&&(a.el=o.el)}}function tg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const ng=t=>t.__isTeleport,ut=Symbol.for("v-fgt"),sr=Symbol.for("v-txt"),$s=Symbol.for("v-cmt"),Ar=Symbol.for("v-stc"),As=[];let Je=null;function ir(t=!1){As.push(Je=t?null:[])}function sg(){As.pop(),Je=As[As.length-1]||null}let Bs=1;function Nc(t){Bs+=t}function mh(t){return t.dynamicChildren=Bs>0?Je||Bn:null,sg(),Bs>0&&Je&&Je.push(t),t}function ca(t,e,n,s,i,r){return mh(Ri(t,e,n,s,i,r,!0))}function ig(t,e,n,s,i){return mh(Ne(t,e,n,s,i,!0))}function po(t){return t?t.__v_isVNode===!0:!1}function vs(t,e){return t.type===e.type&&t.key===e.key}const rr="__vInternal",yh=({key:t})=>t??null,mi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||xe(t)||H(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function Ri(t,e=null,n=null,s=0,i=null,r=t===ut?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yh(e),ref:e&&mi(e),scopeId:eh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(la(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),Bs>0&&!o&&Je&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Je.push(c),c}const Ne=rg;function rg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===b_)&&(t=$s),po(t)){const a=Jn(t,e,!0);return n&&la(a,n),Bs>0&&!r&&Je&&(a.shapeFlag&6?Je[Je.indexOf(t)]=a:Je.push(a)),a.patchFlag|=-2,a}if(gg(t)&&(t=t.__vccOpts),e){e=og(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=Jo(a)),ce(c)&&(Wu(c)&&!$(c)&&(c=we({},c)),e.style=Qo(c))}const o=ge(t)?1:T_(t)?128:ng(t)?64:ce(t)?4:H(t)?2:0;return Ri(t,e,n,s,i,o,r,!0)}function og(t){return t?Wu(t)||rr in t?we({},t):t:null}function Jn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?ag(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yh(a),ref:e&&e.ref?n&&i?$(i)?i.concat(mi(e)):[i,mi(e)]:mi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vh(t=" ",e=0){return Ne(sr,null,t,e)}function ht(t){return t==null||typeof t=="boolean"?Ne($s):$(t)?Ne(ut,null,t.slice()):typeof t=="object"?Bt(t):Ne(sr,null,String(t))}function Bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jn(t)}function la(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),la(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(rr in e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[vh(e)]):n=8);t.children=e,t.shapeFlag|=n}function ag(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Jo([e.class,s.class]));else if(i==="style")e.style=Qo([e.style,s.style]);else if(Yi(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){Ze(t,e,7,[n,s])}const cg=uh();let lg=0;function ug(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||cg,r={uid:lg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dh(s,i),emitsOptions:Zu(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=m_.bind(null,r),t.ce&&t.ce(r),r}let ye=null,ua,kn,Pc="__VUE_INSTANCE_SETTERS__";(kn=to()[Pc])||(kn=to()[Pc]=[]),kn.push(t=>ye=t),ua=t=>{kn.length>1?kn.forEach(e=>e(t)):kn[0](t)};const Xn=t=>{ua(t),t.scope.on()},dn=()=>{ye&&ye.scope.off(),ua(null)};function wh(t){return t.vnode.shapeFlag&4}let Hs=!1;function hg(t,e=!1){Hs=e;const{props:n,children:s}=t.vnode,i=wh(t);q_(t,n,i,e),Q_(t,s);const r=i?dg(t,e):void 0;return Hs=!1,r}function dg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ju(new Proxy(t.ctx,$_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?pg(t):null;Xn(t),as();const r=zt(s,t,0,[t.props,i]);if(cs(),dn(),Cu(r)){if(r.then(dn,dn),e)return r.then(o=>{kc(t,o,e)}).catch(o=>{er(o,t,0)});t.asyncDep=r}else kc(t,r,e)}else Ih(t,e)}function kc(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=qu(e)),Ih(t,n)}let Dc;function Ih(t,e,n){const s=t.type;if(!t.render){if(!e&&Dc&&!s.render){const i=s.template||oa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=we(we({isCustomElement:r,delimiters:a},o),c);s.render=Dc(i,l)}}t.render=s.render||pt}{Xn(t),as();try{B_(t)}finally{cs(),dn()}}}function fg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}}))}function pg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return fg(t)},slots:t.slots,emit:t.emit,expose:e}}function ha(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qu(ju(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rs)return Rs[n](t)},has(e,n){return n in e||n in Rs}}))}function _g(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function gg(t){return H(t)&&"__vccOpts"in t}const We=(t,e)=>h_(t,e,Hs);function bh(t,e,n){const s=arguments.length;return s===2?ce(e)&&!$(e)?po(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&po(n)&&(n=[n]),Ne(t,e,n))}const mg=Symbol.for("v-scx"),yg=()=>et(mg),vg="3.3.13",wg="http://www.w3.org/2000/svg",on=typeof document<"u"?document:null,Mc=on&&on.createElement("template"),Ig={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?on.createElementNS(wg,t):on.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Mc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Mc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bg=Symbol("_vtc");function Eg(t,e,n){const s=t[bg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tg=Symbol("_vod"),Cg=Symbol("");function Sg(t,e,n){const s=t.style,i=ge(n);if(n&&!i){if(e&&!ge(e))for(const r in e)n[r]==null&&_o(s,r,"");for(const r in n)_o(s,r,n[r])}else{const r=s.display;if(i){if(e!==n){const o=s[Cg];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");Tg in t&&(s.display=r)}}const xc=/\s*!important$/;function _o(t,e,n){if($(n))n.forEach(s=>_o(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rg(t,e);xc.test(n)?t.setProperty(os(s),n.replace(xc,""),"important"):t[s]=n}}const Lc=["Webkit","Moz","ms"],Or={};function Rg(t,e){const n=Or[e];if(n)return n;let s=mt(e);if(s!=="filter"&&s in t)return Or[e]=s;s=Xi(s);for(let i=0;i<Lc.length;i++){const r=Lc[i]+s;if(r in t)return Or[e]=r}return e}const Fc="http://www.w3.org/1999/xlink";function Ag(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fc,e.slice(6,e.length)):t.setAttributeNS(Fc,e,n);else{const r=xp(e);n==null||r&&!Au(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Og(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Au(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ng(t,e,n,s){t.addEventListener(e,n,s)}function Pg(t,e,n,s){t.removeEventListener(e,n,s)}const Uc=Symbol("_vei");function kg(t,e,n,s,i=null){const r=t[Uc]||(t[Uc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=Dg(e);if(s){const l=r[e]=Lg(s,i);Ng(t,a,l,c)}else o&&(Pg(t,a,o,c),r[e]=void 0)}}const $c=/(?:Once|Passive|Capture)$/;function Dg(t){let e;if($c.test(t)){e={};let s;for(;s=t.match($c);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let Nr=0;const Mg=Promise.resolve(),xg=()=>Nr||(Mg.then(()=>Nr=0),Nr=Date.now());function Lg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ze(Fg(s,n.value),e,5,[s])};return n.value=t,n.attached=xg(),n}function Fg(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Bc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ug=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?Eg(t,s,i):e==="style"?Sg(t,n,s):Yi(e)?qo(e)||kg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$g(t,e,s,i))?Og(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ag(t,e,s,i))};function $g(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bc(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Bc(e)&&ge(n)?!1:e in t}const Bg=we({patchProp:Ug},Ig);let Hc;function Hg(){return Hc||(Hc=X_(Bg))}const Wg=(...t)=>{const e=Hg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=jg(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function jg(t){return ge(t)?document.querySelector(t):t}function Vg(){return Eh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Eh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Kg=typeof Proxy=="function",zg="devtools-plugin:setup",qg="plugin:settings:set";let Dn,go;function Gg(){var t;return Dn!==void 0||(typeof window<"u"&&window.performance?(Dn=!0,go=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Dn=!0,go=global.perf_hooks.performance):Dn=!1),Dn}function Yg(){return Gg()?go.now():Date.now()}class Qg{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return Yg()}},n&&n.on(qg,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Jg(t,e){const n=t,s=Eh(),i=Vg(),r=Kg&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(zg,t,e);else{const o=r?new Qg(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Th="store";function Xg(t){return t===void 0&&(t=null),et(t!==null?t:Th)}function ls(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Zg(t){return t!==null&&typeof t=="object"}function em(t){return t&&typeof t.then=="function"}function tm(t,e){return function(){return t(e)}}function Ch(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Sh(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;or(t,n,[],t._modules.root,!0),da(t,n,e)}function da(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};ls(i,function(o,a){r[a]=tm(o,t),Object.defineProperty(t.getters,a,{get:function(){return r[a]()},enumerable:!0})}),t._state=Qs({data:e}),t.strict&&om(t),s&&n&&t._withCommit(function(){s.data=null})}function or(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=fa(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=nm(t,o,n);s.forEachMutation(function(u,h){var d=o+h;sm(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,_=u.handler||u;im(t,d,_,l)}),s.forEachGetter(function(u,h){var d=o+h;rm(t,d,u,l)}),s.forEachChild(function(u,h){or(t,e,n.concat(h),u,i)})}function nm(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var c=Ai(r,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(r,o,a){var c=Ai(r,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return Rh(t,e)}},state:{get:function(){return fa(t.state,n)}}}),i}function Rh(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function sm(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function im(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return em(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function rm(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function om(t){Vn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function fa(t,e){return e.reduce(function(n,s){return n[s]},t)}function Ai(t,e,n){return Zg(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var am="vuex bindings",Wc="vuex:mutations",Pr="vuex:actions",Mn="vuex",cm=0;function lm(t,e){Jg({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[am]},function(n){n.addTimelineLayer({id:Wc,label:"Vuex Mutations",color:jc}),n.addTimelineLayer({id:Pr,label:"Vuex Actions",color:jc}),n.addInspector({id:Mn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Mn)if(s.filter){var i=[];Ph(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Nh(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Mn){var i=s.nodeId;Rh(e,i),s.state=dm(pm(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Mn){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Mn),n.sendInspectorState(Mn),n.addTimelineEvent({layerId:Wc,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=cm++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Pr,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Pr,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var jc=8702998,um=6710886,hm=16777215,Ah={label:"namespaced",textColor:hm,backgroundColor:um};function Oh(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Nh(t,e){return{id:e||"root",label:Oh(e),tags:t.namespaced?[Ah]:[],children:Object.keys(t._children).map(function(n){return Nh(t._children[n],e+n+"/")})}}function Ph(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Ah]:[]}),Object.keys(e._children).forEach(function(i){Ph(t,e._children[i],n,s+i+"/")})}function dm(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=fm(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Oh(o):o,editable:!1,value:mo(function(){return r[o]})}})}return i}function fm(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=mo(function(){return t[n]})}else e[n]=mo(function(){return t[n]})}),e}function pm(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function mo(t){try{return t()}catch(e){return e}}var it=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},kh={namespaced:{configurable:!0}};kh.namespaced.get=function(){return!!this._rawModule.namespaced};it.prototype.addChild=function(e,n){this._children[e]=n};it.prototype.removeChild=function(e){delete this._children[e]};it.prototype.getChild=function(e){return this._children[e]};it.prototype.hasChild=function(e){return e in this._children};it.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};it.prototype.forEachChild=function(e){ls(this._children,e)};it.prototype.forEachGetter=function(e){this._rawModule.getters&&ls(this._rawModule.getters,e)};it.prototype.forEachAction=function(e){this._rawModule.actions&&ls(this._rawModule.actions,e)};it.prototype.forEachMutation=function(e){this._rawModule.mutations&&ls(this._rawModule.mutations,e)};Object.defineProperties(it.prototype,kh);var En=function(e){this.register([],e,!1)};En.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};En.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};En.prototype.update=function(e){Dh([],this.root,e)};En.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new it(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&ls(n.modules,function(a,c){i.register(e.concat(c),a,s)})};En.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};En.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Dh(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Dh(t.concat(s),e.getChild(s),n.modules[s])}}function _m(t){return new Le(t)}var Le=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new En(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,_){return c.call(o,d,_)},this.commit=function(d,_,v){return l.call(o,d,_,v)},this.strict=i;var u=this._modules.root.state;or(this,u,[],this._modules.root),da(this,u),s.forEach(function(h){return h(n)})},pa={state:{configurable:!0}};Le.prototype.install=function(e,n){e.provide(n||Th,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&lm(e,this)};pa.state.get=function(){return this._state.data};pa.state.set=function(t){};Le.prototype.commit=function(e,n,s){var i=this,r=Ai(e,n,s),o=r.type,a=r.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};Le.prototype.dispatch=function(e,n){var s=this,i=Ai(e,n),r=i.type,o=i.payload,a={type:r,payload:o},c=this._actions[r];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(a,s.state,d)})}catch{}h(d)})})}};Le.prototype.subscribe=function(e,n){return Ch(e,this._subscribers,n)};Le.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Ch(s,this._actionSubscribers,n)};Le.prototype.watch=function(e,n,s){var i=this;return Vn(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Le.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Le.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),or(this,this.state,e,this._modules.get(e),s.preserveState),da(this,this.state)};Le.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=fa(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Sh(this)};Le.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Le.prototype.hotUpdate=function(e){this._modules.update(e),Sh(this,!0)};Le.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Le.prototype,pa);var Vc={};/**
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
 */const Mh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw us(e)},us=function(t){return new Error("Firebase Database ("+Mh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new mm;const d=r<<2|a>>4;if(s.push(d),l!==64){const _=a<<4&240|l>>2;if(s.push(_),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lh=function(t){const e=xh(t);return _a.encodeByteArray(e,!0)},Oi=function(t){return Lh(t).replace(/\./g,"")},Ni=function(t){try{return _a.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ym(t){return Fh(void 0,t)}function Fh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vm(n)||(t[n]=Fh(t[n],e[n]));return t}function vm(t){return t!=="__proto__"}/**
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
 */const Im=()=>wm().__FIREBASE_DEFAULTS__,bm=()=>{if(typeof process>"u"||typeof Vc>"u")return;const t=Vc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Em=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ni(t[1]);return e&&JSON.parse(e)},ga=()=>{try{return Im()||bm()||Em()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uh=t=>{var e,n;return(n=(e=ga())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tm=t=>{const e=Uh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},$h=()=>{var t;return(t=ga())===null||t===void 0?void 0:t.config},Bh=t=>{var e;return(e=ga())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ar{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Cm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Oi(JSON.stringify(n)),Oi(JSON.stringify(o)),a].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ma(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Hh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sm(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jh(){return Mh.NODE_ADMIN===!0}function Vh(){try{return typeof indexedDB=="object"}catch{return!1}}function Kh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Rm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Am="FirebaseError";class vt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Am,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}}class Tn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Om(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vt(i,a,s)}}function Om(t,e){return t.replace(Nm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Nm=/\{\$([^}]+)}/g;/**
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
 */function Ws(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const zh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ws(Ni(r[0])||""),n=Ws(Ni(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Pm=function(t){const e=zh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},km=function(t){const e=zh(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function js(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Kc(r)&&Kc(o)){if(!js(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Kc(t){return t!==null&&typeof t=="object"}/**
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
 */function hs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Dm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Mm(t,e){const n=new xm(t,e);return n.subscribe.bind(n)}class xm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Lm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=kr),i.error===void 0&&(i.error=kr),i.complete===void 0&&(i.complete=kr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kr(){}function ya(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Fm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,R(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Um=1e3,$m=2,Bm=4*60*60*1e3,Hm=.5;function zc(t,e=Um,n=$m){const s=e*Math.pow(n,t),i=Math.round(Hm*s*(Math.random()-.5)*2);return Math.min(Bm,s+i)}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class nt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class Wm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ar;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vm(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jm(t){return t===nn?void 0:t}function Vm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Km{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const zm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},qm=ee.INFO,Gm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ym=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Gm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lr{constructor(e){this.name=e,this._logLevel=qm,this._logHandler=Ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Qm=(t,e)=>e.some(n=>t instanceof n);let qc,Gc;function Jm(){return qc||(qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xm(){return Gc||(Gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qh=new WeakMap,vo=new WeakMap,Gh=new WeakMap,Dr=new WeakMap,va=new WeakMap;function Zm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qh.set(n,t)}).catch(()=>{}),va.set(e,t),e}function ey(t){if(vo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});vo.set(t,e)}let wo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ty(t){wo=t(wo)}function ny(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Mr(this),e,...n);return Gh.set(s,e.sort?e.sort():[e]),qt(s)}:Xm().includes(t)?function(...e){return t.apply(Mr(this),e),qt(qh.get(this))}:function(...e){return qt(t.apply(Mr(this),e))}}function sy(t){return typeof t=="function"?ny(t):(t instanceof IDBTransaction&&ey(t),Qm(t,Jm())?new Proxy(t,wo):t)}function qt(t){if(t instanceof IDBRequest)return Zm(t);if(Dr.has(t))return Dr.get(t);const e=sy(t);return e!==t&&(Dr.set(t,e),va.set(e,t)),e}const Mr=t=>va.get(t);function iy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=qt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(qt(o.result),c.oldVersion,c.newVersion,qt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ry=["get","getKey","getAll","getAllKeys","count"],oy=["put","add","delete","clear"],xr=new Map;function Yc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xr.get(e))return xr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=oy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ry.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return xr.set(e,r),r}ty(t=>({...t,get:(e,n,s)=>Yc(e,n)||t.get(e,n,s),has:(e,n)=>!!Yc(e,n)||t.has(e,n)}));/**
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
 */class ay{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function cy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Io="@firebase/app",Qc="0.9.25";/**
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
 */const gn=new lr("@firebase/app"),ly="@firebase/app-compat",uy="@firebase/analytics-compat",hy="@firebase/analytics",dy="@firebase/app-check-compat",fy="@firebase/app-check",py="@firebase/auth",_y="@firebase/auth-compat",gy="@firebase/database",my="@firebase/database-compat",yy="@firebase/functions",vy="@firebase/functions-compat",wy="@firebase/installations",Iy="@firebase/installations-compat",by="@firebase/messaging",Ey="@firebase/messaging-compat",Ty="@firebase/performance",Cy="@firebase/performance-compat",Sy="@firebase/remote-config",Ry="@firebase/remote-config-compat",Ay="@firebase/storage",Oy="@firebase/storage-compat",Ny="@firebase/firestore",Py="@firebase/firestore-compat",ky="firebase",Dy="10.7.1";/**
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
 */const bo="[DEFAULT]",My={[Io]:"fire-core",[ly]:"fire-core-compat",[hy]:"fire-analytics",[uy]:"fire-analytics-compat",[fy]:"fire-app-check",[dy]:"fire-app-check-compat",[py]:"fire-auth",[_y]:"fire-auth-compat",[gy]:"fire-rtdb",[my]:"fire-rtdb-compat",[yy]:"fire-fn",[vy]:"fire-fn-compat",[wy]:"fire-iid",[Iy]:"fire-iid-compat",[by]:"fire-fcm",[Ey]:"fire-fcm-compat",[Ty]:"fire-perf",[Cy]:"fire-perf-compat",[Sy]:"fire-rc",[Ry]:"fire-rc-compat",[Ay]:"fire-gcs",[Oy]:"fire-gcs-compat",[Ny]:"fire-fst",[Py]:"fire-fst-compat","fire-js":"fire-js",[ky]:"fire-js-all"};/**
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
 */const ki=new Map,Eo=new Map;function xy(t,e){try{t.container.addComponent(e)}catch(n){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yt(t){const e=t.name;if(Eo.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,t);for(const n of ki.values())xy(n,t);return!0}function Cn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ly={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new Tn("app","Firebase",Ly);/**
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
 */class Fy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=Dy;function Yh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=$h()),!n)throw Gt.create("no-options");const r=ki.get(i);if(r){if(js(n,r.options)&&js(s,r.config))return r;throw Gt.create("duplicate-app",{appName:i})}const o=new Km(i);for(const c of Eo.values())o.addComponent(c);const a=new Fy(n,s,o);return ki.set(i,a),a}function wa(t=bo){const e=ki.get(t);if(!e&&t===bo&&$h())return Yh();if(!e)throw Gt.create("no-app",{appName:t});return e}function Ve(t,e,n){var s;let i=(s=My[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(a.join(" "));return}yt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Uy="firebase-heartbeat-database",$y=1,Vs="firebase-heartbeat-store";let Lr=null;function Qh(){return Lr||(Lr=iy(Uy,$y,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vs)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Lr}async function By(t){try{return await(await Qh()).transaction(Vs).objectStore(Vs).get(Jh(t))}catch(e){if(e instanceof vt)gn.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(n.message)}}}async function Jc(t,e){try{const s=(await Qh()).transaction(Vs,"readwrite");await s.objectStore(Vs).put(e,Jh(t)),await s.done}catch(n){if(n instanceof vt)gn.warn(n.message);else{const s=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gn.warn(s.message)}}}function Jh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hy=1024,Wy=30*24*60*60*1e3;class jy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ky(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Wy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xc(),{heartbeatsToSend:s,unsentEntries:i}=Vy(this._heartbeatsCache.heartbeats),r=Oi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Xc(){return new Date().toISOString().substring(0,10)}function Vy(t,e=Hy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Zc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ky{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vh()?Kh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await By(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zc(t){return Oi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zy(t){yt(new nt("platform-logger",e=>new ay(e),"PRIVATE")),yt(new nt("heartbeat",e=>new jy(e),"PRIVATE")),Ve(Io,Qc,t),Ve(Io,Qc,"esm2017"),Ve("fire-js","")}zy("");var qy="firebase",Gy="10.7.1";/**
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
 */Ve(qy,Gy,"app");const Yy=(t,e)=>e.some(n=>t instanceof n);let el,tl;function Qy(){return el||(el=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jy(){return tl||(tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xh=new WeakMap,To=new WeakMap,Zh=new WeakMap,Fr=new WeakMap,Ia=new WeakMap;function Xy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Yt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xh.set(n,t)}).catch(()=>{}),Ia.set(e,t),e}function Zy(t){if(To.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});To.set(t,e)}let Co={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return To.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ev(t){Co=t(Co)}function tv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ur(this),e,...n);return Zh.set(s,e.sort?e.sort():[e]),Yt(s)}:Jy().includes(t)?function(...e){return t.apply(Ur(this),e),Yt(Xh.get(this))}:function(...e){return Yt(t.apply(Ur(this),e))}}function nv(t){return typeof t=="function"?tv(t):(t instanceof IDBTransaction&&Zy(t),Yy(t,Qy())?new Proxy(t,Co):t)}function Yt(t){if(t instanceof IDBRequest)return Xy(t);if(Fr.has(t))return Fr.get(t);const e=nv(t);return e!==t&&(Fr.set(t,e),Ia.set(e,t)),e}const Ur=t=>Ia.get(t);function sv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Yt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Yt(o.result),c.oldVersion,c.newVersion,Yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const iv=["get","getKey","getAll","getAllKeys","count"],rv=["put","add","delete","clear"],$r=new Map;function nl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($r.get(e))return $r.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=rv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||iv.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return $r.set(e,r),r}ev(t=>({...t,get:(e,n,s)=>nl(e,n)||t.get(e,n,s),has:(e,n)=>!!nl(e,n)||t.has(e,n)}));const ed="@firebase/installations",ba="0.6.4";/**
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
 */const td=1e4,nd=`w:${ba}`,sd="FIS_v2",ov="https://firebaseinstallations.googleapis.com/v1",av=60*60*1e3,cv="installations",lv="Installations";/**
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
 */const uv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mn=new Tn(cv,lv,uv);function id(t){return t instanceof vt&&t.code.includes("request-failed")}/**
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
 */function rd({projectId:t}){return`${ov}/projects/${t}/installations`}function od(t){return{token:t.token,requestStatus:2,expiresIn:dv(t.expiresIn),creationTime:Date.now()}}async function ad(t,e){const s=(await e.json()).error;return mn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function cd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hv(t,{refreshToken:e}){const n=cd(t);return n.append("Authorization",fv(e)),n}async function ld(t){const e=await t();return e.status>=500&&e.status<600?t():e}function dv(t){return Number(t.replace("s","000"))}function fv(t){return`${sd} ${t}`}/**
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
 */async function pv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=rd(t),i=cd(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:sd,appId:t.appId,sdkVersion:nd},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ld(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:od(l.authToken)}}else throw await ad("Create Installation",c)}/**
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
 */function ud(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function _v(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gv=/^[cdef][\w-]{21}$/,So="";function mv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=yv(t);return gv.test(n)?n:So}catch{return So}}function yv(t){return _v(t).substr(0,22)}/**
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
 */function ur(t){return`${t.appName}!${t.appId}`}/**
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
 */const hd=new Map;function dd(t,e){const n=ur(t);fd(n,e),vv(n,e)}function fd(t,e){const n=hd.get(t);if(n)for(const s of n)s(e)}function vv(t,e){const n=wv();n&&n.postMessage({key:t,fid:e}),Iv()}let an=null;function wv(){return!an&&"BroadcastChannel"in self&&(an=new BroadcastChannel("[Firebase] FID Change"),an.onmessage=t=>{fd(t.data.key,t.data.fid)}),an}function Iv(){hd.size===0&&an&&(an.close(),an=null)}/**
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
 */const bv="firebase-installations-database",Ev=1,yn="firebase-installations-store";let Br=null;function Ea(){return Br||(Br=sv(bv,Ev,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yn)}}})),Br}async function Di(t,e){const n=ur(t),i=(await Ea()).transaction(yn,"readwrite"),r=i.objectStore(yn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&dd(t,e.fid),e}async function pd(t){const e=ur(t),s=(await Ea()).transaction(yn,"readwrite");await s.objectStore(yn).delete(e),await s.done}async function hr(t,e){const n=ur(t),i=(await Ea()).transaction(yn,"readwrite"),r=i.objectStore(yn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&dd(t,a.fid),a}/**
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
 */async function Ta(t){let e;const n=await hr(t.appConfig,s=>{const i=Tv(s),r=Cv(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===So?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Tv(t){const e=t||{fid:mv(),registrationStatus:0};return _d(e)}function Cv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(mn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Sv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Rv(t)}:{installationEntry:e}}async function Sv(t,e){try{const n=await pv(t,e);return Di(t.appConfig,n)}catch(n){throw id(n)&&n.customData.serverCode===409?await pd(t.appConfig):await Di(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Rv(t){let e=await sl(t.appConfig);for(;e.registrationStatus===1;)await ud(100),e=await sl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ta(t);return s||n}return e}function sl(t){return hr(t,e=>{if(!e)throw mn.create("installation-not-found");return _d(e)})}function _d(t){return Av(t)?{fid:t.fid,registrationStatus:0}:t}function Av(t){return t.registrationStatus===1&&t.registrationTime+td<Date.now()}/**
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
 */async function Ov({appConfig:t,heartbeatServiceProvider:e},n){const s=Nv(t,n),i=hv(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:nd,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ld(()=>fetch(s,a));if(c.ok){const l=await c.json();return od(l)}else throw await ad("Generate Auth Token",c)}function Nv(t,{fid:e}){return`${rd(t)}/${e}/authTokens:generate`}/**
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
 */async function Ca(t,e=!1){let n;const s=await hr(t.appConfig,r=>{if(!gd(r))throw mn.create("not-registered");const o=r.authToken;if(!e&&Dv(o))return r;if(o.requestStatus===1)return n=Pv(t,e),r;{if(!navigator.onLine)throw mn.create("app-offline");const a=xv(r);return n=kv(t,a),a}});return n?await n:s.authToken}async function Pv(t,e){let n=await il(t.appConfig);for(;n.authToken.requestStatus===1;)await ud(100),n=await il(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ca(t,e):s}function il(t){return hr(t,e=>{if(!gd(e))throw mn.create("not-registered");const n=e.authToken;return Lv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kv(t,e){try{const n=await Ov(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Di(t.appConfig,s),n}catch(n){if(id(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pd(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Di(t.appConfig,s)}throw n}}function gd(t){return t!==void 0&&t.registrationStatus===2}function Dv(t){return t.requestStatus===2&&!Mv(t)}function Mv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+av}function xv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Lv(t){return t.requestStatus===1&&t.requestTime+td<Date.now()}/**
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
 */async function Fv(t){const e=t,{installationEntry:n,registrationPromise:s}=await Ta(e);return s?s.catch(console.error):Ca(e).catch(console.error),n.fid}/**
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
 */async function Uv(t,e=!1){const n=t;return await $v(n),(await Ca(n,e)).token}async function $v(t){const{registrationPromise:e}=await Ta(t);e&&await e}/**
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
 */function Bv(t){if(!t||!t.options)throw Hr("App Configuration");if(!t.name)throw Hr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hr(t){return mn.create("missing-app-config-values",{valueName:t})}/**
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
 */const md="installations",Hv="installations-internal",Wv=t=>{const e=t.getProvider("app").getImmediate(),n=Bv(e),s=Cn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},jv=t=>{const e=t.getProvider("app").getImmediate(),n=Cn(e,md).getImmediate();return{getId:()=>Fv(n),getToken:i=>Uv(n,i)}};function Vv(){yt(new nt(md,Wv,"PUBLIC")),yt(new nt(Hv,jv,"PRIVATE"))}Vv();Ve(ed,ba);Ve(ed,ba,"esm2017");/**
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
 */const Mi="analytics",Kv="firebase_id",zv="origin",qv=60*1e3,Gv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sa="https://www.googletagmanager.com/gtag/js";/**
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
 */const ke=new lr("@firebase/analytics");/**
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
 */const Yv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ue=new Tn("analytics","Analytics",Yv);/**
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
 */function Qv(t){if(!t.startsWith(Sa)){const e=Ue.create("invalid-gtag-resource",{gtagURL:t});return ke.warn(e.message),""}return t}function yd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Jv(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Xv(t,e){const n=Jv("firebase-js-sdk-policy",{createScriptURL:Qv}),s=document.createElement("script"),i=`${Sa}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Zv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ew(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await yd(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){ke.error(a)}t("config",i,r)}async function tw(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await yd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){ke.error(r)}}function nw(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await tw(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await ew(t,e,n,s,a,c)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){ke.error(a)}}return i}function sw(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=nw(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function iw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sa)&&n.src.includes(t))return n;return null}/**
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
 */const rw=30,ow=1e3;class aw{constructor(e={},n=ow){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vd=new aw;function cw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function lw(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:cw(s)},r=Gv.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ue.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function uw(t,e=vd,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Ue.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Ue.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new fw;return setTimeout(async()=>{a.abort()},n!==void 0?n:qv),wd({appId:s,apiKey:i,measurementId:r},o,a,e)}async function wd(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=vd){var r;const{appId:o,measurementId:a}=t;try{await hw(s,e)}catch(c){if(a)return ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await lw(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!dw(l)){if(i.deleteThrottleMetadata(o),a)return ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?zc(n,i.intervalMillis,rw):zc(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),ke.debug(`Calling attemptFetch again in ${u} millis`),wd(t,h,s,i)}}function hw(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Ue.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function dw(t){if(!(t instanceof vt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class fw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pw(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function _w(){if(Vh())try{await Kh()}catch(t){return ke.warn(Ue.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ke.warn(Ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gw(t,e,n,s,i,r,o){var a;const c=uw(t);c.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&ke.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>ke.error(_)),e.push(c);const l=_w().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([c,l]);iw(r)||Xv(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[zv]="firebase",d.update=!0,h!=null&&(d[Kv]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class mw{constructor(e){this.app=e}_delete(){return delete Os[this.app.options.appId],Promise.resolve()}}let Os={},rl=[];const ol={};let Wr="dataLayer",yw="gtag",al,Id,cl=!1;function vw(){const t=[];if(Hh()&&t.push("This is a browser extension environment."),Rm()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Ue.create("invalid-analytics-context",{errorInfo:e});ke.warn(n.message)}}function ww(t,e,n){vw();const s=t.options.appId;if(!s)throw Ue.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ue.create("no-api-key");if(Os[s]!=null)throw Ue.create("already-exists",{id:s});if(!cl){Zv(Wr);const{wrappedGtag:r,gtagCore:o}=sw(Os,rl,ol,Wr,yw);Id=r,al=o,cl=!0}return Os[s]=gw(t,rl,ol,e,al,Wr,n),new mw(t)}function Iw(t=wa()){t=$e(t);const e=Cn(t,Mi);return e.isInitialized()?e.getImmediate():bw(t)}function bw(t,e={}){const n=Cn(t,Mi);if(n.isInitialized()){const i=n.getImmediate();if(js(e,n.getOptions()))return i;throw Ue.create("already-initialized")}return n.initialize({options:e})}function Ew(t,e,n,s){t=$e(t),pw(Id,Os[t.app.options.appId],e,n,s).catch(i=>ke.error(i))}const ll="@firebase/analytics",ul="0.10.0";function Tw(){yt(new nt(Mi,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ww(s,i,n)},"PUBLIC")),yt(new nt("analytics-internal",t,"PRIVATE")),Ve(ll,ul),Ve(ll,ul,"esm2017");function t(e){try{const n=e.getProvider(Mi).getImmediate();return{logEvent:(s,i,r)=>Ew(n,s,i,r)}}catch(n){throw Ue.create("interop-component-reg-failed",{reason:n})}}}Tw();function Ra(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function bd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cw=bd,Ed=new Tn("auth","Firebase",bd());/**
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
 */const xi=new lr("@firebase/auth");function Sw(t,...e){xi.logLevel<=ee.WARN&&xi.warn(`Auth (${ds}): ${t}`,...e)}function yi(t,...e){xi.logLevel<=ee.ERROR&&xi.error(`Auth (${ds}): ${t}`,...e)}/**
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
 */function Ot(t,...e){throw Aa(t,...e)}function _t(t,...e){return Aa(t,...e)}function Rw(t,e,n){const s=Object.assign(Object.assign({},Cw()),{[e]:n});return new Tn("auth","Firebase",s).create(e,{appName:t.name})}function Aa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ed.create(t,...e)}function U(t,e,...n){if(!t)throw Aa(e,...n)}function Tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yi(e),new Error(e)}function Nt(t,e){t||Tt(e)}/**
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
 */function Ro(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Aw(){return hl()==="http:"||hl()==="https:"}function hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Aw()||Hh()||"connection"in navigator)?navigator.onLine:!0}function Nw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Js{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nt(n>e,"Short delay should be less than long delay!"),this.isMobile=ma()||Wh()}get(){return Ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oa(t,e){Nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Td{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Pw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kw=new Js(3e4,6e4);function Na(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fs(t,e,n,s,i={}){return Cd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=hs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Td.fetch()(Sd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Cd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Pw),e);try{const i=new Mw(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Rw(t,u,l);Ot(t,u)}}catch(i){if(i instanceof vt)throw i;Ot(t,"network-request-failed",{message:String(i)})}}async function Dw(t,e,n,s,i={}){const r=await fs(t,e,n,s,i);return"mfaPendingCredential"in r&&Ot(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Sd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Oa(t.config,i):`${t.config.apiScheme}://${i}`}class Mw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(_t(this.auth,"network-request-failed")),kw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=_t(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function xw(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function Lw(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fw(t,e=!1){const n=$e(t),s=await n.getIdToken(e),i=Pa(s);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ns(jr(i.auth_time)),issuedAtTime:Ns(jr(i.iat)),expirationTime:Ns(jr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function jr(t){return Number(t)*1e3}function Pa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ni(n);return i?JSON.parse(i):(yi("Failed to decode base64 JWT payload"),null)}catch(i){return yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Uw(t){const e=Pa(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vt&&$w(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function $w({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Bw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Li(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ks(t,Lw(n,{idToken:s}));U(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?jw(r.providerUserInfo):[],a=Ww(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Rd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Hw(t){const e=$e(t);await Li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ww(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function jw(t){return t.map(e=>{var{providerId:n}=e,s=Ra(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Vw(t,e){const n=await Cd(t,{},async()=>{const s=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Sd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Td.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Kw(t,e){return fs(t,"POST","/v2/accounts:revokeToken",Na(t,e))}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Vw(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new zs;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
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
 */function Ut(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ra(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Rd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fw(this,e)}reload(){return Hw(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Li(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ks(this,xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:W,emailVerified:x,isAnonymous:le,providerData:ue,stsTokenManager:Re}=n;U(W&&Re,e,"internal-error");const Be=zs.fromJSON(this.name,Re);U(typeof W=="string",e,"internal-error"),Ut(h,e.name),Ut(d,e.name),U(typeof x=="boolean",e,"internal-error"),U(typeof le=="boolean",e,"internal-error"),Ut(_,e.name),Ut(v,e.name),Ut(C,e.name),Ut(P,e.name),Ut(k,e.name),Ut(D,e.name);const rt=new fn({uid:W,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:le,photoURL:v,phoneNumber:_,tenantId:C,stsTokenManager:Be,createdAt:k,lastLoginAt:D});return ue&&Array.isArray(ue)&&(rt.providerData=ue.map(He=>Object.assign({},He))),P&&(rt._redirectEventId=P),rt}static async _fromIdTokenResponse(e,n,s=!1){const i=new zs;i.updateFromServerResponse(n);const r=new fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Li(r),r}}/**
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
 */const dl=new Map;function Ct(t){Nt(t instanceof Function,"Expected a class definition");let e=dl.get(t);return e?(Nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dl.set(t,e),e)}/**
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
 */class Ad{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ad.type="NONE";const fl=Ad;/**
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
 */function vi(t,e,n){return`firebase:${t}:${e}:${n}`}class Kn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=vi(this.userKey,i.apiKey,r),this.fullPersistenceKey=vi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Kn(Ct(fl),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Ct(fl);const o=vi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=fn._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Kn(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Kn(r,e,s))}}/**
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
 */function pl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dd(e))return"Blackberry";if(Md(e))return"Webos";if(ka(e))return"Safari";if((e.includes("chrome/")||Nd(e))&&!e.includes("edge/"))return"Chrome";if(kd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Od(t=Ce()){return/firefox\//i.test(t)}function ka(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nd(t=Ce()){return/crios\//i.test(t)}function Pd(t=Ce()){return/iemobile/i.test(t)}function kd(t=Ce()){return/android/i.test(t)}function Dd(t=Ce()){return/blackberry/i.test(t)}function Md(t=Ce()){return/webos/i.test(t)}function dr(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zw(t=Ce()){var e;return dr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qw(){return Sm()&&document.documentMode===10}function xd(t=Ce()){return dr(t)||kd(t)||Md(t)||Dd(t)||/windows phone/i.test(t)||Pd(t)}function Gw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ld(t,e=[]){let n;switch(t){case"Browser":n=pl(Ce());break;case"Worker":n=`${pl(Ce())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${s}`}/**
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
 */class Yw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Qw(t,e={}){return fs(t,"GET","/v2/passwordPolicy",Na(t,e))}/**
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
 */const Jw=6;class Xw{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Jw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Zw{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _l(this),this.idTokenSubscription=new _l(this),this.beforeStateQueue=new Yw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ed,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Li(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qw(this),n=new Xw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Kw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Da(t){return $e(t)}class _l{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mm(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function eI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=_t("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",eI().appendChild(s)})}function nI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sI(t,e){const n=Cn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(js(r,e??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function iI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rI(t,e,n){const s=Da(t);U(s._canInitEmulator,s,"emulator-config-failed"),U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Fd(e),{host:o,port:a}=oI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||aI()}function Fd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oI(t){const e=Fd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:gl(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:gl(o)}}}function gl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ud{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,n){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}/**
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
 */async function zn(t,e){return Dw(t,"POST","/v1/accounts:signInWithIdp",Na(t,e))}/**
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
 */const cI="http://localhost";class vn extends Ud{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ra(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new vn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,zn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:cI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hs(n)}return e}}/**
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
 */class $d{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xs extends $d{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wt extends Xs{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
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
 */class Et extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Et.credential(n,s)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
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
 */class jt extends Xs{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class Vt extends Xs{constructor(){super("twitter.com")}static credential(e,n){return vn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Vt.credential(n,s)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await fn._fromIdTokenResponse(e,s,i),o=ml(s);return new es({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ml(s);return new es({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ml(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fi extends vt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Fi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Fi(e,n,s,i)}}function Bd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Fi._fromErrorAndOperation(t,r,e,s):r})}async function lI(t,e,n=!1){const s=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return es._forOperation(t,"link",s)}/**
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
 */async function uI(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ks(t,Bd(s,i,e,t),n);U(r.idToken,s,"internal-error");const o=Pa(r.idToken);U(o,s,"internal-error");const{sub:a}=o;return U(t.uid===a,s,"user-mismatch"),es._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ot(s,"user-mismatch"),r}}/**
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
 */async function hI(t,e,n=!1){const s="signIn",i=await Bd(t,s,e),r=await es._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function dI(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function fI(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}const Ui="__sak";/**
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
 */class Hd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pI(){const t=Ce();return ka(t)||dr(t)}const _I=1e3,gI=10;class Wd extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pI()&&Gw(),this.fallbackToPolling=xd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);qw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wd.type="LOCAL";const mI=Wd;/**
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
 */class jd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jd.type="SESSION";const Vd=jd;/**
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
 */function yI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new fr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await yI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fr.receivers=[];/**
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
 */function Ma(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Ma("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gt(){return window}function wI(t){gt().location.href=t}/**
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
 */function Kd(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function II(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function EI(){return Kd()?self:null}/**
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
 */const zd="firebaseLocalStorageDb",TI=1,$i="firebaseLocalStorage",qd="fbase_key";class Zs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pr(t,e){return t.transaction([$i],e?"readwrite":"readonly").objectStore($i)}function CI(){const t=indexedDB.deleteDatabase(zd);return new Zs(t).toPromise()}function Ao(){const t=indexedDB.open(zd,TI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore($i,{keyPath:qd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains($i)?e(s):(s.close(),await CI(),e(await Ao()))})})}async function yl(t,e,n){const s=pr(t,!0).put({[qd]:e,value:n});return new Zs(s).toPromise()}async function SI(t,e){const n=pr(t,!1).get(e),s=await new Zs(n).toPromise();return s===void 0?null:s.value}function vl(t,e){const n=pr(t,!0).delete(e);return new Zs(n).toPromise()}const RI=800,AI=3;class Gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ao(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>AI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fr._getInstance(EI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await II(),!this.activeServiceWorker)return;this.sender=new vI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ao();return await yl(e,Ui,"1"),await vl(e,Ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>yl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>SI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=pr(i,!1).getAll();return new Zs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gd.type="LOCAL";const OI=Gd;new Js(3e4,6e4);/**
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
 */function NI(t,e){return e?Ct(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xa extends Ud{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PI(t){return hI(t.auth,new xa(t),t.bypassAuthState)}function kI(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),uI(n,new xa(t),t.bypassAuthState)}async function DI(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),lI(n,new xa(t),t.bypassAuthState)}/**
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
 */class Yd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PI;case"linkViaPopup":case"linkViaRedirect":return DI;case"reauthViaPopup":case"reauthViaRedirect":return kI;default:Ot(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MI=new Js(2e3,1e4);class Un extends Yd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=Ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MI.get())};e()}}Un.currentPopupAction=null;/**
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
 */const xI="pendingRedirect",wi=new Map;class LI extends Yd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const s=await FI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FI(t,e){const n=BI(e),s=$I(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function UI(t,e){wi.set(t._key(),e)}function $I(t){return Ct(t._redirectPersistence)}function BI(t){return vi(xI,t.config.apiKey,t.name)}async function HI(t,e,n=!1){const s=Da(t),i=NI(s,e),o=await new LI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const WI=10*60*1e3;class jI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Qd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qd(t);default:return!1}}/**
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
 */async function KI(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
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
 */const zI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function GI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KI(t);for(const n of e)try{if(YI(n))return}catch{}Ot(t,"unauthorized-domain")}function YI(t){const e=Ro(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!qI.test(n))return!1;if(zI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const QI=new Js(3e4,6e4);function Il(){const t=gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JI(t){return new Promise((e,n)=>{var s,i,r;function o(){Il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Il(),n(_t(t,"network-request-failed"))},timeout:QI.get()})}if(!((i=(s=gt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=gt().gapi)===null||r===void 0)&&r.load)o();else{const a=nI("iframefcb");return gt()[a]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},tI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ii=null,e})}let Ii=null;function XI(t){return Ii=Ii||JI(t),Ii}/**
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
 */const ZI=new Js(5e3,15e3),eb="__/auth/iframe",tb="emulator/auth/iframe",nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ib(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oa(e,tb):`https://${t.config.authDomain}/${eb}`,s={apiKey:e.apiKey,appName:t.name,v:ds},i=sb.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${hs(s).slice(1)}`}async function rb(t){const e=await XI(t),n=gt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:ib(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=gt().setTimeout(()=>{r(o)},ZI.get());function c(){gt().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ab=500,cb=600,lb="_blank",ub="http://localhost";class bl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hb(t,e,n,s=ab,i=cb){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ob),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Ce().toLowerCase();n&&(a=Nd(l)?lb:n),Od(l)&&(e=e||ub,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[_,v])=>`${d}${_}=${v},`,"");if(zw(l)&&a!=="_self")return db(e||"",a),new bl(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new bl(h)}function db(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fb="__/auth/handler",pb="emulator/auth/handler",_b=encodeURIComponent("fac");async function El(t,e,n,s,i,r){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ds,eventId:i};if(e instanceof $d){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Xs){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${_b}=${encodeURIComponent(c)}`:"";return`${gb(t)}?${hs(a).slice(1)}${l}`}function gb({config:t}){return t.emulator?Oa(t,pb):`https://${t.authDomain}/${fb}`}/**
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
 */const Vr="webStorageSupport";class mb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vd,this._completeRedirectFn=HI,this._overrideRedirectResult=UI}async _openPopup(e,n,s,i){var r;Nt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await El(e,n,s,Ro(),i);return hb(e,o,Ma())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await El(e,n,s,Ro(),i);return wI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Nt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rb(e),s=new jI(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vr,{type:Vr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Vr];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xd()||ka()||dr()}}const yb=mb;var Tl="@firebase/auth",Cl="1.5.1";/**
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
 */class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ib(t){yt(new nt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ld(t)},l=new Zw(s,i,r,c);return iI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),yt(new nt("auth-internal",e=>{const n=Da(e.getProvider("auth").getImmediate());return(s=>new vb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(Tl,Cl,wb(t)),Ve(Tl,Cl,"esm2017")}/**
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
 */const bb=5*60,Eb=Bh("authIdTokenMaxAge")||bb;let Sl=null;const Tb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Eb)return;const i=n==null?void 0:n.token;Sl!==i&&(Sl=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cb(t=wa()){const e=Cn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sI(t,{popupRedirectResolver:yb,persistence:[OI,mI,Vd]}),s=Bh("authTokenSyncURL");if(s){const r=Tb(s);fI(n,r,()=>r(n.currentUser)),dI(n,o=>r(o))}const i=Uh("auth");return i&&rI(n,`http://${i}`),n}Ib("Browser");var Rl={};const Al="@firebase/database",Ol="1.0.2";/**
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
 */let Jd="";function Sb(t){Jd=t}/**
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
 */class Rb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ab{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Xd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Rb(e)}}catch{}return new Ab},cn=Xd("localStorage"),Oo=Xd("sessionStorage");/**
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
 */const qn=new lr("@firebase/database"),Ob=function(){let t=1;return function(){return t++}}(),Zd=function(t){const e=Fm(t),n=new Dm;n.update(e);const s=n.digest();return _a.encodeByteArray(s)},ei=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ei.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let pn=null,Nl=!0;const Nb=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(qn.logLevel=ee.VERBOSE,pn=qn.log.bind(qn),e&&Oo.set("logging_enabled",!0)):typeof t=="function"?pn=t:(pn=null,Oo.remove("logging_enabled"))},be=function(...t){if(Nl===!0&&(Nl=!1,pn===null&&Oo.get("logging_enabled")===!0&&Nb(!0)),pn){const e=ei.apply(null,t);pn(e)}},ti=function(t){return function(...e){be(t,...e)}},No=function(...t){const e="FIREBASE INTERNAL ERROR: "+ei(...t);qn.error(e)},Pt=function(...t){const e=`FIREBASE FATAL ERROR: ${ei(...t)}`;throw qn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+ei(...t);qn.warn(e)},Pb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ef=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ts="[MIN_NAME]",wn="[MAX_NAME]",ps=function(t,e){if(t===e)return 0;if(t===ts||e===wn)return-1;if(e===ts||t===wn)return 1;{const n=Pl(t),s=Pl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Db=function(t,e){return t===e?0:t<e?-1:1},ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},La=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=La(t[e[s]]);return n+="}",n},tf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nf=function(t){R(!ef(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Mb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Lb=new RegExp("^-?(0*)\\d{1,10}$"),Fb=-2147483648,Ub=2147483647,Pl=function(t){if(Lb.test(t)){const e=Number(t);if(e>=Fb&&e<=Ub)return e}return null},_s=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},$b=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ps=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Bb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Hb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class Gn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gn.OWNER="owner";/**
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
 */const Fa="5",sf="v",rf="s",of="r",af="f",cf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lf="ls",uf="p",Po="ac",hf="websocket",df="long_polling";/**
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
 */class ff{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Wb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pf(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let s;if(e===hf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===df)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Wb(t)&&(n.ns=t.namespace);const i=[];return Ke(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class jb{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ym(this.counters_)}}/**
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
 */const Kr={},zr={};function Ua(t){const e=t.toString();return Kr[e]||(Kr[e]=new jb),Kr[e]}function Vb(t,e){const n=t.toString();return zr[n]||(zr[n]=e()),zr[n]}/**
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
 */class Kb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_s(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const kl="start",zb="close",qb="pLPCommand",Gb="pRTLPCB",_f="id",gf="pw",mf="ser",Yb="cb",Qb="seg",Jb="ts",Xb="d",Zb="dframe",yf=1870,vf=30,eE=yf-vf,tE=25e3,nE=3e4;class $n{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Ua(n),this.urlFn=c=>(this.appCheckToken&&(c[Po]=this.appCheckToken),pf(n,df,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Kb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nE)),kb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $a((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===kl)this.id=a,this.password=c;else if(o===zb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[kl]="t",s[mf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Yb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sf]=Fa,this.transportSessionId&&(s[rf]=this.transportSessionId),this.lastSessionId&&(s[lf]=this.lastSessionId),this.applicationId&&(s[uf]=this.applicationId),this.appCheckToken&&(s[Po]=this.appCheckToken),typeof location<"u"&&location.hostname&&cf.test(location.hostname)&&(s[of]=af);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$n.forceAllow_=!0}static forceDisallow(){$n.forceDisallow_=!0}static isAvailable(){return $n.forceAllow_?!0:!$n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Mb()&&!xb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lh(n),i=tf(s,eE);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Zb]="t",s[_f]=e,s[gf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $a{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ob(),window[qb+this.uniqueCallbackIdentifier]=e,window[Gb+this.uniqueCallbackIdentifier]=n,this.myIFrame=$a.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_f]=this.myID,e[gf]=this.myPW,e[mf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vf+s.length<=yf;){const o=this.pendingSegs.shift();s=s+"&"+Qb+i+"="+o.seg+"&"+Jb+i+"="+o.ts+"&"+Xb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(tE)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const sE=16384,iE=45e3;let Bi=null;typeof MozWebSocket<"u"?Bi=MozWebSocket:typeof WebSocket<"u"&&(Bi=WebSocket);class Ye{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Ua(n),this.connURL=Ye.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[sf]=Fa,typeof location<"u"&&location.hostname&&cf.test(location.hostname)&&(o[of]=af),n&&(o[rf]=n),s&&(o[lf]=s),i&&(o[Po]=i),r&&(o[uf]=r),pf(e,hf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cn.set("previous_websocket_failure",!0);try{let s;jh(),this.mySock=new Bi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Bi!==null&&!Ye.forceDisallow_}static previouslyFailed(){return cn.isInMemoryStorage||cn.get("previous_websocket_failure")===!0}markConnectionHealthy(){cn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tf(n,sE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
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
 */class qs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$n,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ye&&Ye.isAvailable();let s=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of qs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);qs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qs.globalTransportInitialized_=!1;/**
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
 */const rE=6e4,oE=5e3,aE=10*1024,cE=100*1024,qr="t",Dl="d",lE="s",Ml="r",uE="e",xl="o",Ll="a",Fl="n",Ul="p",hE="h";class dE{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new qs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ps(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qr in e){const n=e[qr];n===Ll?this.upgradeIfSecondaryHealthy_():n===Ml?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ul,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ll,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ws(qr,e);if(Dl in e){const s=e[Dl];if(n===hE){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lE?this.onConnectionShutdown_(s):n===Ml?this.onReset_(s):n===uE?No("Server Error: "+s):n===xl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):No("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fa!==s&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ps(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ps(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ul,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class wf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class If{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Hi extends If{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ma()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hi}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $l=32,Bl=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new oe("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xt(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function bf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ef(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Tf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return je(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Cf(t,e){if(Xt(t)!==Xt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Xt(t)>Xt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class pE{constructor(e,n){this.errorPrefix_=n,this.parts_=Ef(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=cr(this.parts_[s]);Sf(this)}}function _E(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cr(e),Sf(t)}function gE(t){const e=t.parts_.pop();t.byteLength_-=cr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sf(t){if(t.byteLength_>Bl)throw new Error(t.errorPrefix_+"has a key path longer than "+Bl+" bytes ("+t.byteLength_+").");if(t.parts_.length>$l)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$l+") or object contains a cycle "+sn(t))}function sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ba extends If{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ba}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Is=1e3,mE=60*5*1e3,Hl=30*1e3,yE=1.3,vE=3e4,wE="server_kill",Wl=3;class At extends wf{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=At.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Is,this.maxReconnectDelay_=mE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!jh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ba.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ar,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;At.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const s=Zn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||km(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Pm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):No("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vE&&(this.reconnectDelay_=Is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+At.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new dE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{De(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(wE)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&De(h),c())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yo(this.interruptReasons_)&&(this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>La(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wl&&(this.reconnectDelay_=Hl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Jd.replace(/\./g,"-")]=1,ma()?e["framework.cordova"]=1:Wh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hi.getInstance().currentlyOnline();return yo(this.interruptReasons_)&&e}}At.nextPersistentConnectionId_=0;At.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class _r{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(ts,e),i=new z(ts,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
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
 */let di;class Rf extends _r{static get __EMPTY_NODE(){return di}static set __EMPTY_NODE(e){di=e}compare(e,n){return ps(e.name,n.name)}isDefinedOn(e){throw us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(wn,di)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,di)}toString(){return".key"}}const Yn=new Rf;/**
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
 */class fi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Pe.EMPTY_NODE,this.right=r??Pe.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class IE{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pe{constructor(e,n=Pe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fi(this.root_,null,this.comparator_,!0,e)}}Pe.EMPTY_NODE=new IE;/**
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
 */function bE(t,e){return ps(t.name,e.name)}function Ha(t,e){return ps(t,e)}/**
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
 */let ko;function EE(t){ko=t}const Af=function(t){return typeof t=="number"?"number:"+nf(t):"string:"+t},Of=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else R(t===ko||t.isEmpty(),"priority of unexpected type.");R(t===ko||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jl;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Of(this.priorityNode_)}static set __childrenNodeConstructor(e){jl=e}static get __childrenNodeConstructor(){return jl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:V(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(R(s!==".priority"||Xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Af(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nf(this.value_):e+=this.value_,this.lazyHash_=Zd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return R(i>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nf,Pf;function TE(t){Nf=t}function CE(t){Pf=t}class SE extends _r{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ps(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(wn,new pe("[PRIORITY-POST]",Pf))}makePost(e,n){const s=Nf(e);return new z(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new SE;/**
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
 */const RE=Math.log(2);class AE{constructor(e){const n=r=>parseInt(Math.log(r)/RE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wi=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const _=parseInt(u/2,10)+c,v=i(c,_),C=i(_+1,l);return h=t[_],d=n?n(h):h,new _e(d,h.node,_e.BLACK,v,C)}},r=function(c){let l=null,u=null,h=t.length;const d=function(v,C){const P=h-v,k=h;h-=v;const D=i(P+1,k),W=t[P],x=n?n(W):W;_(new _e(x,W.node,C,null,D))},_=function(v){l?(l.left=v,l=v):(u=v,l=v)};for(let v=0;v<c.count;++v){const C=c.nextBitIsOne(),P=Math.pow(2,c.count-(v+1));C?d(P,_e.BLACK):(d(P,_e.BLACK),d(P,_e.RED))}return u},o=new AE(t.length),a=r(o);return new Pe(s||e,a)};/**
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
 */let Gr;const xn={};class St{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(xn&&Te,"ChildrenNode.ts has not been loaded"),Gr=Gr||new St({".priority":xn},{".priority":Te}),Gr}get(e){const n=Zn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pe?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Wi(s,e.getCompare()):a=xn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new St(u,l)}addToIndexes(e,n){const s=Pi(this.indexes_,(i,r)=>{const o=Zn(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),i===xn)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(z.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Wi(a,o.getCompare())}else return xn;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new z(e.name,a))),c.insert(e,e.node)}});return new St(s,this.indexSet_)}removeFromIndexes(e,n){const s=Pi(this.indexes_,i=>{if(i===xn)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new St(s,this.indexSet_)}}/**
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
 */let bs;class J{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Of(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bs||(bs=new J(new Pe(Ha),null,St.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bs}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bs:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?bs:this.priorityNode_;return new J(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{R(V(e)!==".priority"||Xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),s++,r&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Af(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Zd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ni?-1:0}withIndex(e){if(e===Yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),i=n.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yn?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OE extends J{constructor(){super(new Pe(Ha),J.EMPTY_NODE,St.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const ni=new OE;Object.defineProperties(z,{MIN:{value:new z(ts,J.EMPTY_NODE)},MAX:{value:new z(wn,ni)}});Rf.__EMPTY_NODE=J.EMPTY_NODE;pe.__childrenNodeConstructor=J;EE(ni);CE(ni);/**
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
 */const NE=!0;function me(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,me(e))}if(!(t instanceof Array)&&NE){const n=[];let s=!1;if(Ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=me(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new z(o,c)))}}),n.length===0)return J.EMPTY_NODE;const r=Wi(n,bE,o=>o.name,Ha);if(s){const o=Wi(n,Te.getCompare());return new J(r,me(e),new St({".priority":o},{".priority":Te}))}else return new J(r,me(e),St.Default)}else{let n=J.EMPTY_NODE;return Ke(t,(s,i)=>{if(Mt(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}TE(me);/**
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
 */class PE extends _r{constructor(e){super(),this.indexPath_=e,R(!K(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ps(e.name,n.name):r}makePost(e,n){const s=me(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,ni);return new z(wn,e)}toString(){return Ef(this.indexPath_,0).join("/")}}/**
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
 */class kE extends _r{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ps(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=me(e);return new z(n,s)}toString(){return".value"}}const DE=new kE;/**
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
 */function ME(t){return{type:"value",snapshotNode:t}}function xE(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function LE(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function FE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Wa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ts}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Wa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===DE?n="$value":t.index_===Yn?n="$key":(R(t.index_ instanceof PE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
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
 */class ji extends wf{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ti("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ji.getListenId_(e,s),a={};this.listens_[o]=a;const c=Kl(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Zn(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=ji.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Kl(e._queryParams),s=e._path.toString(),i=new ar;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ws(a.responseText)}catch{De("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class UE{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Vi(){return{value:null,children:new Map}}function kf(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,Vi());const i=t.children.get(s);e=re(e),kf(i,e,n)}}function Do(t,e,n){t.value!==null?n(e,t.value):$E(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Do(i,r,n)})}function $E(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class BE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ke(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ql=10*1e3,HE=30*1e3,WE=5*60*1e3;class jE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BE(e);const s=ql+(HE-ql)*Math.random();Ps(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ke(e,(i,r)=>{r>0&&Mt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ps(this.reportStats_.bind(this),Math.floor(Math.random()*2*WE))}}/**
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
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function Df(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ki{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ft.ACK_USER_WRITE,this.source=Df()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Ki(te(),n,this.revert)}}else return R(V(this.path)===e,"operationForChild called for unrelated child."),new Ki(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class In{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ft.OVERWRITE}operationForChild(e){return K(this.path)?new In(this.source,te(),this.snap.getImmediateChild(e)):new In(this.source,re(this.path),this.snap)}}/**
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
 */class Gs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ft.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new In(this.source,te(),n.value):new Gs(this.source,te(),n)}else return R(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gs(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ja{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function VE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(FE(o.childName,o.snapshotNode))}),Es(t,i,"child_removed",e,s,n),Es(t,i,"child_added",e,s,n),Es(t,i,"child_moved",r,s,n),Es(t,i,"child_changed",e,s,n),Es(t,i,"value",e,s,n),i}function Es(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>zE(t,a,c)),o.forEach(a=>{const c=KE(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function KE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zE(t,e,n){if(e.childName==null||n.childName==null)throw us("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Lf(t,e){return{eventCache:t,serverCache:e}}function ks(t,e,n,s){return Lf(new ja(e,n,s),t.serverCache)}function Ff(t,e,n,s){return Lf(t.eventCache,new ja(e,n,s))}function Mo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yr;const qE=()=>(Yr||(Yr=new Pe(Db)),Yr);class ie{constructor(e,n=qE()){this.value=e,this.children=n}static fromObject(e){let n=new ie(null);return Ke(e,(s,i)=>{n=n.set(new oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(K(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:de(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new ie(null)}}set(e,n){if(K(e))return new ie(n,this.children);{const s=V(e),r=(this.children.get(s)||new ie(null)).set(re(e),n),o=this.children.insert(s,r);return new ie(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ie(null):new ie(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(K(e))return n;{const s=V(e),r=(this.children.get(s)||new ie(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ie(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(re(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),de(n,i),s):new ie(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new ie(null))}}function Ds(t,e,n){if(K(e))return new tt(new ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new tt(t.writeTree_.set(i,r))}else{const i=new ie(n),r=t.writeTree_.setTree(e,i);return new tt(r)}}}function Gl(t,e,n){let s=t;return Ke(n,(i,r)=>{s=Ds(s,de(e,i),r)}),s}function Yl(t,e){if(K(e))return tt.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new tt(n)}}function xo(t,e){return Sn(t,e)!=null}function Sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Ql(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function Qt(t,e){if(K(e))return t;{const n=Sn(t,e);return n!=null?new tt(new ie(n)):new tt(t.writeTree_.subtree(e))}}function Lo(t){return t.writeTree_.isEmpty()}function ns(t,e){return Uf(te(),t.writeTree_,e)}function Uf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Uf(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
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
 */function $f(t,e){return Vf(e,t)}function GE(t,e,n,s,i){R(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ds(t.visibleWrites,e,n)),t.lastWriteId=s}function YE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function QE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JE(a,s.path)?i=!1:Xe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return XE(t),!0;if(s.snap)t.visibleWrites=Yl(t.visibleWrites,s.path);else{const a=s.children;Ke(a,c=>{t.visibleWrites=Yl(t.visibleWrites,de(s.path,c))})}return!0}else return!1}function JE(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(de(t.path,n),e))return!0;return!1}function XE(t){t.visibleWrites=Bf(t.allWrites,ZE,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZE(t){return t.visible}function Bf(t,e,n){let s=tt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Xe(n,o)?(a=je(n,o),s=Ds(s,a,r.snap)):Xe(o,n)&&(a=je(o,n),s=Ds(s,te(),r.snap.getChild(a)));else if(r.children){if(Xe(n,o))a=je(n,o),s=Gl(s,a,r.children);else if(Xe(o,n))if(a=je(o,n),K(a))s=Gl(s,te(),r.children);else{const c=Zn(r.children,V(a));if(c){const l=c.getChild(re(a));s=Ds(s,te(),l)}}}else throw us("WriteRecord should have .snap or .children")}}return s}function Hf(t,e,n,s,i){if(!s&&!i){const r=Sn(t.visibleWrites,e);if(r!=null)return r;{const o=Qt(t.visibleWrites,e);if(Lo(o))return n;if(n==null&&!xo(o,te()))return null;{const a=n||J.EMPTY_NODE;return ns(o,a)}}}else{const r=Qt(t.visibleWrites,e);if(!i&&Lo(r))return n;if(!i&&n==null&&!xo(r,te()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Xe(l.path,e)||Xe(e,l.path))},a=Bf(t.allWrites,o,e),c=n||J.EMPTY_NODE;return ns(a,c)}}}function eT(t,e,n){let s=J.EMPTY_NODE;const i=Sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Qt(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const c=ns(Qt(r,new oe(o)),a);s=s.updateImmediateChild(o,c)}),Ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Qt(t.visibleWrites,e);return Ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function tT(t,e,n,s,i){R(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(xo(t.visibleWrites,r))return null;{const o=Qt(t.visibleWrites,r);return Lo(o)?i.getChild(n):ns(o,i.getChild(n))}}function nT(t,e,n,s){const i=de(e,n),r=Sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Qt(t.visibleWrites,i);return ns(o,s.getNode().getImmediateChild(n))}else return null}function sT(t,e){return Sn(t.visibleWrites,e)}function iT(t,e,n,s,i,r,o){let a;const c=Qt(t.visibleWrites,e),l=Sn(c,te());if(l!=null)a=l;else if(n!=null)a=ns(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function rT(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function Fo(t,e,n,s){return Hf(t.writeTree,t.treePath,e,n,s)}function Wf(t,e){return eT(t.writeTree,t.treePath,e)}function Jl(t,e,n,s){return tT(t.writeTree,t.treePath,e,n,s)}function zi(t,e){return sT(t.writeTree,de(t.treePath,e))}function oT(t,e,n,s,i,r){return iT(t.writeTree,t.treePath,e,n,s,i,r)}function Va(t,e,n){return nT(t.writeTree,t.treePath,e,n)}function jf(t,e){return Vf(de(t.treePath,e),t.writeTree)}function Vf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class aT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Vl(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,LE(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,xE(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Vl(s,e.snapshotNode,i.oldSnap));else throw us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class cT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Kf=new cT;class Ka{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ja(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Va(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bn(this.viewCache_),r=oT(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function lT(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uT(t,e,n,s,i){const r=new aT;let o,a;if(n.type===ft.OVERWRITE){const l=n;l.source.fromUser?o=Uo(t,e,l.path,l.snap,s,i,r):(R(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!K(l.path),o=qi(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===ft.MERGE){const l=n;l.source.fromUser?o=dT(t,e,l.path,l.children,s,i,r):(R(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=$o(t,e,l.path,l.children,s,i,a,r))}else if(n.type===ft.ACK_USER_WRITE){const l=n;l.revert?o=_T(t,e,l.path,s,i,r):o=fT(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===ft.LISTEN_COMPLETE)o=pT(t,e,n.path,s,r);else throw us("Unknown operation type: "+n.type);const c=r.getChanges();return hT(e,o,c),{viewCache:o,changes:c}}function hT(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Mo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ME(Mo(e)))}}function zf(t,e,n,s,i,r){const o=e.eventCache;if(zi(s,n)!=null)return e;{let a,c;if(K(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=bn(e),u=l instanceof J?l:J.EMPTY_NODE,h=Wf(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Fo(s,bn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=V(n);if(l===".priority"){R(Xt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Jl(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=re(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Jl(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Va(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return ks(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function qi(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),_,null)}else{const _=V(n);if(!c.isCompleteForPath(n)&&Xt(n)>1)return e;const v=re(n),P=c.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?l=u.updatePriority(c.getNode(),P):l=u.updateChild(c.getNode(),_,P,v,Kf,null)}const h=Ff(e,l,c.isFullyInitialized()||K(n),u.filtersNodes()),d=new Ka(i,h,r);return zf(t,h,n,i,d,a)}function Uo(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new Ka(i,e,r);if(K(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ks(e,l,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=ks(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=re(n),_=a.getNode().getImmediateChild(h);let v;if(K(d))v=s;else{const C=u.getCompleteChild(h);C!=null?bf(d)===".priority"&&C.getChild(Tf(d)).isEmpty()?v=C:v=C.updateChild(d,s):v=J.EMPTY_NODE}if(_.equals(v))c=e;else{const C=t.filter.updateChild(a.getNode(),h,v,d,u,o);c=ks(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Xl(t,e){return t.eventCache.isCompleteForChild(e)}function dT(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=de(n,c);Xl(e,V(u))&&(a=Uo(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=de(n,c);Xl(e,V(u))||(a=Uo(t,a,u,l,i,r,o))}),a}function Zl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $o(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;K(n)?l=s:l=new ie(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=Zl(t,_,d);c=qi(t,c,new oe(h),v,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),C=Zl(t,v,d);c=qi(t,c,new oe(h),C,i,r,o,a)}}),c}function fT(t,e,n,s,i,r,o){if(zi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(K(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return qi(t,e,n,c.getNode().getChild(n),i,r,a,o);if(K(n)){let l=new ie(null);return c.getNode().forEachChild(Yn,(u,h)=>{l=l.set(new oe(u),h)}),$o(t,e,n,l,i,r,a,o)}else return e}else{let l=new ie(null);return s.foreach((u,h)=>{const d=de(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),$o(t,e,n,l,i,r,a,o)}}function pT(t,e,n,s,i){const r=e.serverCache,o=Ff(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return zf(t,o,n,s,Kf,i)}function _T(t,e,n,s,i,r){let o;if(zi(s,n)!=null)return e;{const a=new Ka(s,e,i),c=e.eventCache.getNode();let l;if(K(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Fo(s,bn(e));else{const h=e.serverCache.getNode();R(h instanceof J,"serverChildren would be complete if leaf node"),u=Wf(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=V(n);let h=Va(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,re(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,J.EMPTY_NODE,re(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fo(s,bn(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||zi(s,te())!=null,ks(e,l,o,t.filter.filtersNodes())}}function gT(t,e){const n=bn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function eu(t,e,n,s){e.type===ft.MERGE&&e.source.queryId!==null&&(R(bn(t.viewCache_),"We should always have a full cache before handling merges"),R(Mo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=uT(t.processor_,i,e,n,s);return lT(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,mT(t,r.changes,r.viewCache.eventCache.getNode(),null)}function mT(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return VE(t.eventGenerator_,e,n,i)}/**
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
 */let tu;function yT(t){R(!tu,"__referenceConstructor has already been defined"),tu=t}function za(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return R(r!=null,"SyncTree gave us an op for an invalid query."),eu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(eu(o,e,n,s));return r}}function qa(t,e){let n=null;for(const s of t.views.values())n=n||gT(s,e);return n}/**
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
 */let nu;function vT(t){R(!nu,"__referenceConstructor has already been defined"),nu=t}class su{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=rT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qf(t,e,n,s,i){return GE(t.pendingWriteTree_,e,n,s,i),i?mr(t,new In(Df(),e,n)):[]}function ln(t,e,n=!1){const s=YE(t.pendingWriteTree_,e);if(QE(t.pendingWriteTree_,e)){let r=new ie(null);return s.snap!=null?r=r.set(te(),!0):Ke(s.children,o=>{r=r.set(new oe(o),!0)}),mr(t,new Ki(s.path,r,n))}else return[]}function gr(t,e,n){return mr(t,new In(Mf(),e,n))}function wT(t,e,n){const s=ie.fromObject(n);return mr(t,new Gs(Mf(),e,s))}function IT(t,e,n,s){const i=Qf(t,s);if(i!=null){const r=Jf(i),o=r.path,a=r.queryId,c=je(o,e),l=new In(xf(a),c,n);return Xf(t,o,l)}else return[]}function bT(t,e,n,s){const i=Qf(t,s);if(i){const r=Jf(i),o=r.path,a=r.queryId,c=je(o,e),l=ie.fromObject(n),u=new Gs(xf(a),c,l);return Xf(t,o,u)}else return[]}function Ga(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=je(o,e),l=qa(a,c);if(l)return l});return Hf(i,e,r,n,!0)}function mr(t,e){return Gf(e,t.syncPointTree_,null,$f(t.pendingWriteTree_,te()))}function Gf(t,e,n,s){if(K(t.path))return Yf(t,e,n,s);{const i=e.get(te());n==null&&i!=null&&(n=qa(i,te()));let r=[];const o=V(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=jf(s,o);r=r.concat(Gf(a,c,l,u))}return i&&(r=r.concat(za(i,t,s,n))),r}}function Yf(t,e,n,s){const i=e.get(te());n==null&&i!=null&&(n=qa(i,te()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=jf(s,o),u=t.operationForChild(o);u&&(r=r.concat(Yf(u,a,c,l)))}),i&&(r=r.concat(za(i,t,s,n))),r}function Qf(t,e){return t.tagToQueryMap.get(e)}function Jf(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Xf(t,e,n){const s=t.syncPointTree_.get(e);R(s,"Missing sync point for query tag that we're tracking");const i=$f(t.pendingWriteTree_,e);return za(s,n,i,null)}/**
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
 */class Ya{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ya(n)}node(){return this.node_}}class Qa{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Qa(this.syncTree_,n)}node(){return Ga(this.syncTree_,this.path_)}}const ET=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},iu=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return CT(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},CT=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&R(!1,"Unexpected increment value: "+s);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ST=function(t,e,n,s){return Ja(e,new Qa(n,t),s)},Zf=function(t,e,n){return Ja(t,new Ya(e),n)};function Ja(t,e,n){const s=t.getPriority().val(),i=iu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=iu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new pe(a,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(Te,(a,c)=>{const l=Ja(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Xa{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Za(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=V(n);for(;i!==null;){const r=Zn(s.node.children,i)||{children:{},childCount:0};s=new Xa(i,s,r),n=re(n),i=V(n)}return s}function gs(t){return t.node.value}function ep(t,e){t.node.value=e,Bo(t)}function tp(t){return t.node.childCount>0}function RT(t){return gs(t)===void 0&&!tp(t)}function yr(t,e){Ke(t.node.children,(n,s)=>{e(new Xa(n,t,s))})}function np(t,e,n,s){n&&!s&&e(t),yr(t,i=>{np(i,e,!0,s)}),n&&s&&e(t)}function AT(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function si(t){return new oe(t.parent===null?t.name:si(t.parent)+"/"+t.name)}function Bo(t){t.parent!==null&&OT(t.parent,t.name,t)}function OT(t,e,n){const s=RT(n),i=Mt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Bo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Bo(t))}/**
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
 */const NT=/[\[\].#$\/\u0000-\u001F\u007F]/,PT=/[\[\].#$\u0000-\u001F\u007F]/,Qr=10*1024*1024,sp=function(t){return typeof t=="string"&&t.length!==0&&!NT.test(t)},ip=function(t){return typeof t=="string"&&t.length!==0&&!PT.test(t)},kT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ip(t)},DT=function(t,e,n,s){s&&e===void 0||ec(ya(t,"value"),e,n)},ec=function(t,e,n){const s=n instanceof oe?new pE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+sn(s));if(typeof e=="function")throw new Error(t+"contains a function "+sn(s)+" with contents = "+e.toString());if(ef(e))throw new Error(t+"contains "+e.toString()+" "+sn(s));if(typeof e=="string"&&e.length>Qr/3&&cr(e)>Qr)throw new Error(t+"contains a string greater than "+Qr+" utf8 bytes "+sn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!sp(o)))throw new Error(t+" contains an invalid key ("+o+") "+sn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_E(s,o),ec(t,a,s),gE(s)}),i&&r)throw new Error(t+' contains ".value" child '+sn(s)+" in addition to actual children.")}},rp=function(t,e,n,s){if(!(s&&n===void 0)&&!ip(n))throw new Error(ya(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rp(t,e,n,s)},xT=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},LT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kT(n))throw new Error(ya(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class FT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function op(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Cf(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function kt(t,e,n){op(t,n),UT(t,s=>Xe(s,e)||Xe(e,s))}function UT(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?($T(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $T(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();pn&&be("event: "+n.toString()),_s(s)}}}/**
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
 */const BT="repo_interrupt",HT=25;class WT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vi(),this.transactionQueueTree_=new Xa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jT(t,e,n){if(t.stats_=Ua(t.repoInfo_),t.forceRestClient_||$b())t.server_=new ji(t.repoInfo_,(s,i,r,o)=>{ru(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ou(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new At(t.repoInfo_,e,(s,i,r,o)=>{ru(t,s,i,r,o)},s=>{ou(t,s)},s=>{KT(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Vb(t.repoInfo_,()=>new jE(t.stats_,t.server_)),t.infoData_=new UE,t.infoSyncTree_=new su({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=gr(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nc(t,"connected",!1),t.serverSyncTree_=new su({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);kt(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function VT(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tc(t){return ET({timestamp:VT(t)})}function ru(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Pi(n,l=>me(l));o=bT(t.serverSyncTree_,r,c,i)}else{const c=me(n);o=IT(t.serverSyncTree_,r,c,i)}else if(s){const c=Pi(n,l=>me(l));o=wT(t.serverSyncTree_,r,c)}else{const c=me(n);o=gr(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=vr(t,r)),kt(t.eventQueue_,a,o)}function ou(t,e){nc(t,"connected",e),e===!1&&qT(t)}function KT(t,e){Ke(e,(n,s)=>{nc(t,n,s)})}function nc(t,e,n){const s=new oe("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=gr(t.infoSyncTree_,s,i);kt(t.eventQueue_,s,r)}function ap(t){return t.nextWriteId_++}function zT(t,e,n,s,i){sc(t,"set",{path:e.toString(),value:n,priority:s});const r=tc(t),o=me(n,s),a=Ga(t.serverSyncTree_,e),c=Zf(o,a,r),l=ap(t),u=qf(t.serverSyncTree_,e,c,l,!0);op(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const v=d==="ok";v||De("set at "+e+" failed: "+d);const C=ln(t.serverSyncTree_,l,!v);kt(t.eventQueue_,e,C),YT(t,i,d,_)});const h=dp(t,e);vr(t,h),kt(t.eventQueue_,h,[])}function qT(t){sc(t,"onDisconnectEvents");const e=tc(t),n=Vi();Do(t.onDisconnect_,te(),(i,r)=>{const o=ST(i,r,t.serverSyncTree_,e);kf(n,i,o)});let s=[];Do(n,te(),(i,r)=>{s=s.concat(gr(t.serverSyncTree_,i,r));const o=dp(t,i);vr(t,o)}),t.onDisconnect_=Vi(),kt(t.eventQueue_,te(),s)}function GT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BT)}function sc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function YT(t,e,n,s){e&&_s(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function cp(t,e,n){return Ga(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function ic(t,e=t.transactionQueueTree_){if(e||wr(t,e),gs(e)){const n=up(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&QT(t,si(e),n)}else tp(e)&&yr(e,n=>{ic(t,n)})}function QT(t,e,n){const s=n.map(l=>l.currentWriteId),i=cp(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{sc(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ln(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();wr(t,Za(t.transactionQueueTree_,e)),ic(t,t.transactionQueueTree_),kt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)_s(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{De("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}vr(t,e)}},o)}function vr(t,e){const n=lp(t,e),s=si(n),i=up(t,n);return JT(t,i,s),s}function JT(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=je(n,c.path);let u=!1,h;if(R(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(ln(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=HT)u=!0,h="maxretry",i=i.concat(ln(t.serverSyncTree_,c.currentWriteId,!0));else{const d=cp(t,c.path,o);c.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){ec("transaction failed: Data returned ",_,c.path);let v=me(_);typeof _=="object"&&_!=null&&Mt(_,".priority")||(v=v.updatePriority(d.getPriority()));const P=c.currentWriteId,k=tc(t),D=Zf(v,d,k);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=D,c.currentWriteId=ap(t),o.splice(o.indexOf(P),1),i=i.concat(qf(t.serverSyncTree_,c.path,D,c.currentWriteId,c.applyLocally)),i=i.concat(ln(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(ln(t.serverSyncTree_,c.currentWriteId,!0))}kt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}wr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)_s(s[a]);ic(t,t.transactionQueueTree_)}function lp(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&gs(s)===void 0;)s=Za(s,n),e=re(e),n=V(e);return s}function up(t,e){const n=[];return hp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function hp(t,e,n){const s=gs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);yr(e,i=>{hp(t,i,n)})}function wr(t,e){const n=gs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ep(e,n.length>0?n:void 0)}yr(e,s=>{wr(t,s)})}function dp(t,e){const n=si(lp(t,e)),s=Za(t.transactionQueueTree_,e);return AT(s,i=>{Jr(t,i)}),Jr(t,s),np(s,i=>{Jr(t,i)}),n}function Jr(t,e){const n=gs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ln(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ep(e,void 0):n.length=r+1,kt(t.eventQueue_,si(e),i);for(let o=0;o<s.length;o++)_s(s[o])}}/**
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
 */function XT(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const au=function(t,e){const n=eC(t),s=n.namespace;n.domain==="firebase.com"&&Pt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Pt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Pb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ff(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},eC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=XT(t.substring(u,h)));const d=ZT(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const _=e.slice(0,l);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class rc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:bf(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=zl(this._queryParams),n=La(e);return n==="{}"?"default":n}get _queryObject(){return zl(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof rc))return!1;const n=this._repo===e._repo,s=Cf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fE(this._path)}}class Rn extends rc{constructor(e,n){super(e,n,new Wa,!1)}get parent(){const e=Tf(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function tC(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?nC(t._root,e):t._root}function nC(t,e){return t=$e(t),V(t._path)===null?MT("child","path",e,!1):rp("child","path",e,!1),new Rn(t._repo,de(t._path,e))}function sC(t,e){t=$e(t),xT("set",t._path),DT("set",e,t._path,!1);const n=new ar;return zT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}yT(Rn);vT(Rn);/**
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
 */const iC="FIREBASE_DATABASE_EMULATOR_HOST",Ho={};let rC=!1;function oC(t,e,n,s){t.repoInfo_=new ff(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function aC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Pt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=au(r,i),a=o.repoInfo,c,l;typeof process<"u"&&Rl&&(l=Rl[iC]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=au(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Gn(Gn.OWNER):new Hb(t.name,t.options,e);LT("Invalid Firebase Database URL",o),K(o.path)||Pt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=lC(a,t,u,new Bb(t.name,n));return new uC(h,t)}function cC(t,e){const n=Ho[e];(!n||n[t.key]!==t)&&Pt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),GT(t),delete n[t.key]}function lC(t,e,n,s){let i=Ho[e.name];i||(i={},Ho[e.name]=i);let r=i[t.toURLString()];return r&&Pt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new WT(t,rC,n,s),i[t.toURLString()]=r,r}class uC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pt("Cannot call "+e+" on a deleted database.")}}function hC(t=wa(),e){const n=Cn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Tm("database");s&&dC(n,...s)}return n}function dC(t,e,n,s={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Pt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Pt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Gn(Gn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Cm(s.mockUserToken,t.app.options.projectId);r=new Gn(o)}oC(i,e,n,r)}/**
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
 */function fC(t){Sb(ds),yt(new nt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return aC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ve(Al,Ol,t),Ve(Al,Ol,"esm2017")}At.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};At.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fC();const oc=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},pC={__name:"App",setup(t){const e=Xg();We(()=>e.state.user);const s=Yh({apiKey:"AIzaSyB8hRY_mV19i_4K-Mno7Sn8FpOJGEIvDKM",authDomain:"gacha-tracker-online.firebaseapp.com",projectId:"gacha-tracker-online",storageBucket:"gacha-tracker-online.appspot.com",messagingSenderId:"395636017581",appId:"1:395636017581:web:2f03e7f80569c9a537b924",measurementId:"G-HW1B3NSFH8",databaseURL:"https://gacha-tracker-online-default-rtdb.asia-southeast1.firebasedatabase.app/"});Iw(s);const i=Cb(s);i.onAuthStateChanged(o=>{e.commit("setUser",o)}),i.currentUser,new Et;const r=hC(s);return i.currentUser&&sC(tC(r,`/users/${i.currentUser.uid}`),{in_game_name:"Minnerva",date:{first_name:"A",last_name:["T","B"]}}),(o,a)=>{const c=ao("router-view");return ir(),ig(c)}}},_C=oc(pC,[["__scopeId","data-v-7382db92"]]),gC=_m({state:{user:!1},mutations:{setUser(t,e){t.user=e}}}),Wo=t=>(t&&t[0]==="/"&&(t=t.substring(1)),`/gacha-tracker-online/${t||""}`);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ln=typeof window<"u";function mC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Xr(t,e){const n={};for(const s in e){const i=e[s];n[s]=st(i)?i.map(t):t(i)}return n}const Ms=()=>{},st=Array.isArray,yC=/\/$/,vC=t=>t.replace(yC,"");function Zr(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=EC(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function wC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function IC(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ss(e.matched[s],n.matched[i])&&fp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bC(t[n],e[n]))return!1;return!0}function bC(t,e){return st(t)?lu(t,e):st(e)?lu(e,t):t===e}function lu(t,e){return st(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function EC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Ys;(function(t){t.pop="pop",t.push="push"})(Ys||(Ys={}));var xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xs||(xs={}));function TC(t){if(!t)if(Ln){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vC(t)}const CC=/^[^#]+#/;function SC(t,e){return t.replace(CC,"#")+e}function RC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ir=()=>({left:window.pageXOffset,top:window.pageYOffset});function AC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=RC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uu(t,e){return(history.state?history.state.position-e:-1)+t}const jo=new Map;function OC(t,e){jo.set(t,e)}function NC(t){const e=jo.get(t);return jo.delete(t),e}let PC=()=>location.protocol+"//"+location.host;function pp(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),cu(c,"")}return cu(n,t)+s+i}function kC(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=pp(t,location),v=n.value,C=e.value;let P=0;if(d){if(n.value=_,e.value=d,o&&o===v){o=null;return}P=C?d.position-C.position:0}else s(_);i.forEach(k=>{k(n.value,v,{delta:P,type:Ys.pop,direction:P?P>0?xs.forward:xs.back:xs.unknown})})};function c(){o=n.value}function l(d){i.push(d);const _=()=>{const v=i.indexOf(d);v>-1&&i.splice(v,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(X({},d.state,{scroll:Ir()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function hu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ir():null}}function DC(t){const{history:e,location:n}=window,s={value:pp(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:PC()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(c,l){const u=X({},e.state,hu(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=X({},i.value,e.state,{forward:c,scroll:Ir()});r(u.current,u,!0);const h=X({},hu(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function MC(t){t=TC(t);const e=DC(t),n=kC(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=X({location:"",base:t,go:s,createHref:SC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function xC(t){return typeof t=="string"||t&&typeof t=="object"}function _p(t){return typeof t=="string"||typeof t=="symbol"}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gp=Symbol("");var du;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(du||(du={}));function is(t,e){return X(new Error,{type:t,[gp]:!0},e)}function It(t,e){return t instanceof Error&&gp in t&&(e==null||!!(t.type&e))}const fu="[^/]+?",LC={sensitive:!1,strict:!1,start:!0,end:!0},FC=/[.+*?^${}()[\]/\\]/g;function UC(t,e){const n=X({},LC,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(FC,"\\$&"),_+=40;else if(d.type===1){const{value:v,repeatable:C,optional:P,regexp:k}=d;r.push({name:v,repeatable:C,optional:P});const D=k||fu;if(D!==fu){_+=10;try{new RegExp(`(${D})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${v}" (${D}): `+x.message)}}let W=C?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(W=P&&l.length<2?`(?:/${W})`:"/"+W),P&&(W+="?"),i+=W,_+=20,P&&(_+=-8),C&&(_+=-20),D===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",v=r[d-1];h[v.name]=_&&v.repeatable?_.split("/"):_}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:v,repeatable:C,optional:P}=_,k=v in l?l[v]:"";if(st(k)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const D=st(k)?k.join("/"):k;if(!D)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=D}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function $C(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function BC(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=$C(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(pu(s))return 1;if(pu(i))return-1}return i.length-s.length}function pu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const HC={type:0,value:""},WC=/[a-zA-Z0-9_]/;function jC(t){if(!t)return[[]];if(t==="/")return[[HC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:WC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function VC(t,e,n){const s=UC(jC(t.path),n),i=X(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function KC(t,e){const n=[],s=new Map;e=mu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,v=zC(u);v.aliasOf=d&&d.record;const C=mu(e,u),P=[v];if("alias"in u){const W=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of W)P.push(X({},v,{components:d?d.record.components:v.components,path:x,aliasOf:d?d.record:v}))}let k,D;for(const W of P){const{path:x}=W;if(h&&x[0]!=="/"){const le=h.record.path,ue=le[le.length-1]==="/"?"":"/";W.path=h.record.path+(x&&ue+x)}if(k=VC(W,h,C),d?d.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),_&&u.name&&!gu(k)&&o(u.name)),v.children){const le=v.children;for(let ue=0;ue<le.length;ue++)r(le[ue],k,d&&d.children[ue])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return D?()=>{o(D)}:Ms}function o(u){if(_p(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&BC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!mp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gu(u)&&s.set(u.record.name,u)}function l(u,h){let d,_={},v,C;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw is(1,{location:u});C=d.record.name,_=X(_u(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&_u(u.params,d.keys.map(D=>D.name))),v=d.stringify(_)}else if("path"in u)v=u.path,d=n.find(D=>D.re.test(v)),d&&(_=d.parse(v),C=d.record.name);else{if(d=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw is(1,{location:u,currentLocation:h});C=d.record.name,_=X({},h.params,u.params),v=d.stringify(_)}const P=[];let k=d;for(;k;)P.unshift(k.record),k=k.parent;return{name:C,path:v,params:_,matched:P,meta:GC(P)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function _u(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function zC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function gu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function GC(t){return t.reduce((e,n)=>X(e,n.meta),{})}function mu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function mp(t,e){return e.children.some(n=>n===t||mp(t,n))}const yp=/#/g,YC=/&/g,QC=/\//g,JC=/=/g,XC=/\?/g,vp=/\+/g,ZC=/%5B/g,eS=/%5D/g,wp=/%5E/g,tS=/%60/g,Ip=/%7B/g,nS=/%7C/g,bp=/%7D/g,sS=/%20/g;function ac(t){return encodeURI(""+t).replace(nS,"|").replace(ZC,"[").replace(eS,"]")}function iS(t){return ac(t).replace(Ip,"{").replace(bp,"}").replace(wp,"^")}function Vo(t){return ac(t).replace(vp,"%2B").replace(sS,"+").replace(yp,"%23").replace(YC,"%26").replace(tS,"`").replace(Ip,"{").replace(bp,"}").replace(wp,"^")}function rS(t){return Vo(t).replace(JC,"%3D")}function oS(t){return ac(t).replace(yp,"%23").replace(XC,"%3F")}function aS(t){return t==null?"":oS(t).replace(QC,"%2F")}function Gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function cS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(vp," "),o=r.indexOf("="),a=Gi(o<0?r:r.slice(0,o)),c=o<0?null:Gi(r.slice(o+1));if(a in e){let l=e[a];st(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function yu(t){let e="";for(let n in t){const s=t[n];if(n=rS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(st(s)?s.map(r=>r&&Vo(r)):[s&&Vo(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function lS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=st(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const uS=Symbol(""),vu=Symbol(""),br=Symbol(""),Ep=Symbol(""),Ko=Symbol("");function Ts(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ht(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(is(4,{from:n,to:e})):h instanceof Error?a(h):xC(h)?a(is(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function eo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(hS(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Ht(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=mC(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ht(d,n,s,r,o)()}))}}return i}function hS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wu(t){const e=et(br),n=et(Ep),s=We(()=>e.resolve(hn(t.to))),i=We(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ss.bind(null,u));if(d>-1)return d;const _=Iu(c[l-2]);return l>1&&Iu(u)===_&&h[h.length-1].path!==_?h.findIndex(ss.bind(null,c[l-2])):d}),r=We(()=>i.value>-1&&_S(n.params,s.value.params)),o=We(()=>i.value>-1&&i.value===n.matched.length-1&&fp(n.params,s.value.params));function a(c={}){return pS(c)?e[hn(t.replace)?"replace":"push"](hn(t.to)).catch(Ms):Promise.resolve()}return{route:s,href:We(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const dS=rh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wu,setup(t,{slots:e}){const n=Qs(wu(t)),{options:s}=et(br),i=We(()=>({[bu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:bh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),fS=dS;function pS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _S(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!st(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Iu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bu=(t,e,n)=>t??e??n,gS=rh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=et(Ko),i=We(()=>t.route||s.value),r=et(vu,0),o=We(()=>{let l=hn(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=We(()=>i.value.matched[o.value]);gi(vu,We(()=>o.value+1)),gi(uS,a),gi(Ko,i);const c=o_();return Vn(()=>[c.value,a.value,t.name],([l,u,h],[d,_,v])=>{u&&(u.instances[h]=l,_&&_!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!ss(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Eu(n.default,{Component:d,route:l});const _=h.props[u],v=_?_===!0?l.params:typeof _=="function"?_(l):_:null,P=bh(d,X({},v,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Eu(n.default,{Component:P,route:l})||P}}});function Eu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mS=gS;function yS(t){const e=KC(t.routes,t),n=t.parseQuery||cS,s=t.stringifyQuery||yu,i=t.history,r=Ts(),o=Ts(),a=Ts(),c=a_($t);let l=$t;Ln&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xr.bind(null,y=>""+y),h=Xr.bind(null,aS),d=Xr.bind(null,Gi);function _(y,O){let S,M;return _p(y)?(S=e.getRecordMatcher(y),M=O):M=y,e.addRoute(M,S)}function v(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function C(){return e.getRoutes().map(y=>y.record)}function P(y){return!!e.getRecordMatcher(y)}function k(y,O){if(O=X({},O||c.value),typeof y=="string"){const g=Zr(n,y,O.path),m=e.resolve({path:g.path},O),w=i.createHref(g.fullPath);return X(g,m,{params:d(m.params),hash:Gi(g.hash),redirectedFrom:void 0,href:w})}let S;if("path"in y)S=X({},y,{path:Zr(n,y.path,O.path).path});else{const g=X({},y.params);for(const m in g)g[m]==null&&delete g[m];S=X({},y,{params:h(g)}),O.params=h(O.params)}const M=e.resolve(S,O),Q=y.hash||"";M.params=u(d(M.params));const f=wC(s,X({},y,{hash:iS(Q),path:M.path})),p=i.createHref(f);return X({fullPath:f,hash:Q,query:s===yu?lS(y.query):y.query||{}},M,{redirectedFrom:void 0,href:p})}function D(y){return typeof y=="string"?Zr(n,y,c.value.path):X({},y)}function W(y,O){if(l!==y)return is(8,{from:O,to:y})}function x(y){return Re(y)}function le(y){return x(X(D(y),{replace:!0}))}function ue(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:S}=O;let M=typeof S=="function"?S(y):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=D(M):{path:M},M.params={}),X({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function Re(y,O){const S=l=k(y),M=c.value,Q=y.state,f=y.force,p=y.replace===!0,g=ue(S);if(g)return Re(X(D(g),{state:typeof g=="object"?X({},Q,g.state):Q,force:f,replace:p}),O||S);const m=S;m.redirectedFrom=O;let w;return!f&&IC(s,M,S)&&(w=is(16,{to:m,from:M}),at(M,M,!0,!1)),(w?Promise.resolve(w):He(m,M)).catch(I=>It(I)?It(I,2)?I:Lt(I):Y(I,m,M)).then(I=>{if(I){if(It(I,2))return Re(X({replace:p},D(I.to),{state:typeof I.to=="object"?X({},Q,I.to.state):Q,force:f}),O||m)}else I=Zt(m,M,!0,p,Q);return xt(m,M,I),I})}function Be(y,O){const S=W(y,O);return S?Promise.reject(S):Promise.resolve()}function rt(y){const O=Nn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function He(y,O){let S;const[M,Q,f]=vS(y,O);S=eo(M.reverse(),"beforeRouteLeave",y,O);for(const g of M)g.leaveGuards.forEach(m=>{S.push(Ht(m,y,O))});const p=Be.bind(null,y,O);return S.push(p),Ie(S).then(()=>{S=[];for(const g of r.list())S.push(Ht(g,y,O));return S.push(p),Ie(S)}).then(()=>{S=eo(Q,"beforeRouteUpdate",y,O);for(const g of Q)g.updateGuards.forEach(m=>{S.push(Ht(m,y,O))});return S.push(p),Ie(S)}).then(()=>{S=[];for(const g of f)if(g.beforeEnter)if(st(g.beforeEnter))for(const m of g.beforeEnter)S.push(Ht(m,y,O));else S.push(Ht(g.beforeEnter,y,O));return S.push(p),Ie(S)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),S=eo(f,"beforeRouteEnter",y,O),S.push(p),Ie(S))).then(()=>{S=[];for(const g of o.list())S.push(Ht(g,y,O));return S.push(p),Ie(S)}).catch(g=>It(g,8)?g:Promise.reject(g))}function xt(y,O,S){a.list().forEach(M=>rt(()=>M(y,O,S)))}function Zt(y,O,S,M,Q){const f=W(y,O);if(f)return f;const p=O===$t,g=Ln?history.state:{};S&&(M||p?i.replace(y.fullPath,X({scroll:p&&g&&g.scroll},Q)):i.push(y.fullPath,Q)),c.value=y,at(y,O,S,p),Lt()}let ot;function ms(){ot||(ot=i.listen((y,O,S)=>{if(!ii.listening)return;const M=k(y),Q=ue(M);if(Q){Re(X(Q,{replace:!0}),M).catch(Ms);return}l=M;const f=c.value;Ln&&OC(uu(f.fullPath,S.delta),Ir()),He(M,f).catch(p=>It(p,12)?p:It(p,2)?(Re(p.to,M).then(g=>{It(g,20)&&!S.delta&&S.type===Ys.pop&&i.go(-1,!1)}).catch(Ms),Promise.reject()):(S.delta&&i.go(-S.delta,!1),Y(p,M,f))).then(p=>{p=p||Zt(M,f,!1),p&&(S.delta&&!It(p,8)?i.go(-S.delta,!1):S.type===Ys.pop&&It(p,20)&&i.go(-1,!1)),xt(M,f,p)}).catch(Ms)}))}let An=Ts(),fe=Ts(),ne;function Y(y,O,S){Lt(y);const M=fe.list();return M.length?M.forEach(Q=>Q(y,O,S)):console.error(y),Promise.reject(y)}function wt(){return ne&&c.value!==$t?Promise.resolve():new Promise((y,O)=>{An.add([y,O])})}function Lt(y){return ne||(ne=!y,ms(),An.list().forEach(([O,S])=>y?S(y):O()),An.reset()),y}function at(y,O,S,M){const{scrollBehavior:Q}=t;if(!Ln||!Q)return Promise.resolve();const f=!S&&NC(uu(y.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return Yu().then(()=>Q(y,O,f)).then(p=>p&&AC(p)).catch(p=>Y(p,y,O))}const Ae=y=>i.go(y);let On;const Nn=new Set,ii={currentRoute:c,listening:!0,addRoute:_,removeRoute:v,hasRoute:P,getRoutes:C,resolve:k,options:t,push:x,replace:le,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:wt,install(y){const O=this;y.component("RouterLink",fS),y.component("RouterView",mS),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>hn(c)}),Ln&&!On&&c.value===$t&&(On=!0,x(i.location).catch(Q=>{}));const S={};for(const Q in $t)Object.defineProperty(S,Q,{get:()=>c.value[Q],enumerable:!0});y.provide(br,O),y.provide(Ep,Bu(S)),y.provide(Ko,c);const M=y.unmount;Nn.add(y),y.unmount=function(){Nn.delete(y),Nn.size<1&&(l=$t,ot&&ot(),ot=null,c.value=$t,On=!1,ne=!1),M()}}};function Ie(y){return y.reduce((O,S)=>O.then(()=>rt(S)),Promise.resolve())}return ii}function vS(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>ss(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ss(l,c))||i.push(c))}return[n,s,i]}function wS(){return et(br)}const IS={__name:"Main",setup(t){const e=wS();console.log(Wo());const n=()=>{e.back()};return(s,i)=>{const r=ao("router-link"),o=ao("router-view");return ir(),ca(ut,null,[Ne(r,{to:"/gacha-tracker-online/test"},{default:th(()=>[vh("/users/eduardo")]),_:1}),Ri("button",{onClick:n},"Back"),Ri("h2",null,Lp(hn(Wo)("hello")),1),Ne(o)],64)}}},bS={};function ES(t,e){return ir(),ca("h1",null,"Hello World")}const TS=oc(bS,[["render",ES]]),CS={};function SS(t,e){return ir(),ca("h1",null,"Test")}const RS=oc(CS,[["render",SS]]),AS=yS({history:MC(),routes:[{path:Wo(""),component:IS,children:[{path:"",component:TS},{path:"test",component:RS}]}]});Wg(_C).use(gC).use(AS).mount("#app");
