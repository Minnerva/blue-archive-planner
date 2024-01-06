function Ma(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const we={},ts=[],It=()=>{},Kg=()=>!1,Nr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Da=t=>t.startsWith("onUpdate:"),Le=Object.assign,La=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gg=Object.prototype.hasOwnProperty,re=(t,e)=>Gg.call(t,e),K=Array.isArray,ns=t=>mi(t)==="[object Map]",Or=t=>mi(t)==="[object Set]",hl=t=>mi(t)==="[object Date]",Q=t=>typeof t=="function",Pe=t=>typeof t=="string",dn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",kh=t=>(me(t)||Q(t))&&Q(t.then)&&Q(t.catch),xh=Object.prototype.toString,mi=t=>xh.call(t),qg=t=>mi(t).slice(8,-1),Mh=t=>mi(t)==="[object Object]",Fa=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wi=Ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yg=/-(\w)/g,Rt=kr(t=>t.replace(Yg,(e,n)=>n?n.toUpperCase():"")),Qg=/\B([A-Z])/g,bs=kr(t=>t.replace(Qg,"-$1").toLowerCase()),xr=kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ho=kr(t=>t?`on${xr(t)}`:""),Dn=(t,e)=>!Object.is(t,e),ji=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Dh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dl;const zo=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $a(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Pe(s)?e_(s):$a(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Pe(t)||me(t))return t}const Xg=/;(?![^(]*\))/g,Jg=/:([^]+)/,Zg=/\/\*[^]*?\*\//g;function e_(t){const e={};return t.replace(Zg,"").split(Xg).forEach(n=>{if(n){const s=n.split(Jg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ua(t){let e="";if(Pe(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=Ua(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const t_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n_=Ma(t_);function Lh(t){return!!t||t===""}function s_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Mr(t[s],e[s]);return n}function Mr(t,e){if(t===e)return!0;let n=hl(t),s=hl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=dn(t),s=dn(e),n||s)return t===e;if(n=K(t),s=K(e),n||s)return n&&s?s_(t,e):!1;if(n=me(t),s=me(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Mr(t[o],e[o]))return!1}}return String(t)===String(e)}function i_(t,e){return t.findIndex(n=>Mr(n,e))}const SR=t=>Pe(t)?t:t==null?"":K(t)||me(t)&&(t.toString===xh||!Q(t.toString))?JSON.stringify(t,Fh,2):String(t),Fh=(t,e)=>e&&e.__v_isRef?Fh(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[fo(s,r)+" =>"]=i,n),{})}:Or(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fo(n))}:dn(e)?fo(e):me(e)&&!K(e)&&!Mh(e)?String(e):e,fo=(t,e="")=>{var n;return dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let ot;class r_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ot,!e&&ot&&(this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){ot=this}off(){ot=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function o_(t,e=ot){e&&e.active&&e.effects.push(t)}function a_(){return ot}const Ba=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$h=t=>(t.w&fn)>0,Uh=t=>(t.n&fn)>0,c_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=fn},l_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];$h(i)&&!Uh(i)?i.delete(t):e[n++]=i,i.w&=~fn,i.n&=~fn}e.length=n}},Ko=new WeakMap;let Us=0,fn=1;const Go=30;let ct;const On=Symbol(""),qo=Symbol("");class Ha{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,o_(this,s)}run(){if(!this.active)return this.fn();let e=ct,n=sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,sn=!0,fn=1<<++Us,Us<=Go?c_(this):fl(this),this.fn()}finally{Us<=Go&&l_(this),fn=1<<--Us,ct=this.parent,sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(fl(this),this.onStop&&this.onStop(),this.active=!1)}}function fl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let sn=!0;const Bh=[];function Es(){Bh.push(sn),sn=!1}function Is(){const t=Bh.pop();sn=t===void 0?!0:t}function Ye(t,e,n){if(sn&&ct){let s=Ko.get(t);s||Ko.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ba()),Hh(i)}}function Hh(t,e){let n=!1;Us<=Go?Uh(t)||(t.n|=fn,n=!$h(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function Ht(t,e,n,s,i,r){const o=Ko.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!dn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Fa(n)&&a.push(o.get("length")):(a.push(o.get(On)),ns(t)&&a.push(o.get(qo)));break;case"delete":K(t)||(a.push(o.get(On)),ns(t)&&a.push(o.get(qo)));break;case"set":ns(t)&&a.push(o.get(On));break}if(a.length===1)a[0]&&Yo(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Yo(Ba(c))}}function Yo(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&pl(s);for(const s of n)s.computed||pl(s)}function pl(t,e){(t!==ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const u_=Ma("__proto__,__v_isRef,__isVue"),Wh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dn)),gl=h_();function h_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)Ye(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Es();const s=ue(this)[e].apply(this,n);return Is(),s}}),t}function d_(t){const e=ue(this);return Ye(e,"has",t),e.hasOwnProperty(t)}class jh{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?T_:Gh:r?Kh:zh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=K(e);if(!i){if(o&&re(gl,n))return Reflect.get(gl,n,s);if(n==="hasOwnProperty")return d_}const a=Reflect.get(e,n,s);return(dn(n)?Wh.has(n):u_(n))||(i||Ye(e,"get",n),r)?a:Qe(a)?o&&Fa(n)?a:a.value:me(a)?i?Yh(a):yi(a):a}}class Vh extends jh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const c=hs(r);if(!Xi(s)&&!hs(s)&&(r=ue(r),s=ue(s)),!K(e)&&Qe(r)&&!Qe(s))return c?!1:(r.value=s,!0)}const o=K(e)&&Fa(n)?Number(n)<e.length:re(e,n),a=Reflect.set(e,n,s,i);return e===ue(i)&&(o?Dn(s,r)&&Ht(e,"set",n,s):Ht(e,"add",n,s)),a}deleteProperty(e,n){const s=re(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Ht(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!dn(n)||!Wh.has(n))&&Ye(e,"has",n),s}ownKeys(e){return Ye(e,"iterate",K(e)?"length":On),Reflect.ownKeys(e)}}class f_ extends jh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const p_=new Vh,g_=new f_,__=new Vh(!0),Wa=t=>t,Dr=t=>Reflect.getPrototypeOf(t);function Ni(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(Dn(e,r)&&Ye(i,"get",e),Ye(i,"get",r));const{has:o}=Dr(i),a=s?Wa:n?za:Zs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Oi(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(Dn(t,i)&&Ye(s,"has",t),Ye(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ki(t,e=!1){return t=t.__v_raw,!e&&Ye(ue(t),"iterate",On),Reflect.get(t,"size",t)}function _l(t){t=ue(t);const e=ue(this);return Dr(e).has.call(e,t)||(e.add(t),Ht(e,"add",t,t)),this}function ml(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=Dr(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Dn(e,o)&&Ht(n,"set",t,e):Ht(n,"add",t,e),this}function yl(t){const e=ue(this),{has:n,get:s}=Dr(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ht(e,"delete",t,void 0),r}function vl(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Ht(t,"clear",void 0,void 0),n}function xi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),c=e?Wa:t?za:Zs;return!t&&Ye(a,"iterate",On),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Mi(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=ns(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Wa:e?za:Zs;return!e&&Ye(r,"iterate",c?qo:On),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Gt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function m_(){const t={get(r){return Ni(this,r)},get size(){return ki(this)},has:Oi,add:_l,set:ml,delete:yl,clear:vl,forEach:xi(!1,!1)},e={get(r){return Ni(this,r,!1,!0)},get size(){return ki(this)},has:Oi,add:_l,set:ml,delete:yl,clear:vl,forEach:xi(!1,!0)},n={get(r){return Ni(this,r,!0)},get size(){return ki(this,!0)},has(r){return Oi.call(this,r,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:xi(!0,!1)},s={get(r){return Ni(this,r,!0,!0)},get size(){return ki(this,!0)},has(r){return Oi.call(this,r,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Mi(r,!1,!1),n[r]=Mi(r,!0,!1),e[r]=Mi(r,!1,!0),s[r]=Mi(r,!0,!0)}),[t,n,e,s]}const[y_,v_,w_,b_]=m_();function ja(t,e){const n=e?t?b_:w_:t?v_:y_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(re(n,i)&&i in s?n:s,i,r)}const E_={get:ja(!1,!1)},I_={get:ja(!1,!0)},C_={get:ja(!0,!1)},zh=new WeakMap,Kh=new WeakMap,Gh=new WeakMap,T_=new WeakMap;function S_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function R_(t){return t.__v_skip||!Object.isExtensible(t)?0:S_(qg(t))}function yi(t){return hs(t)?t:Va(t,!1,p_,E_,zh)}function qh(t){return Va(t,!1,__,I_,Kh)}function Yh(t){return Va(t,!0,g_,C_,Gh)}function Va(t,e,n,s,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=R_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ss(t){return hs(t)?ss(t.__v_raw):!!(t&&t.__v_isReactive)}function hs(t){return!!(t&&t.__v_isReadonly)}function Xi(t){return!!(t&&t.__v_isShallow)}function Qh(t){return ss(t)||hs(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Xh(t){return Qi(t,"__v_skip",!0),t}const Zs=t=>me(t)?yi(t):t,za=t=>me(t)?Yh(t):t;function Jh(t){sn&&ct&&(t=ue(t),Hh(t.dep||(t.dep=Ba())))}function Zh(t,e){t=ue(t);const n=t.dep;n&&Yo(n)}function Qe(t){return!!(t&&t.__v_isRef===!0)}function A_(t){return ed(t,!1)}function P_(t){return ed(t,!0)}function ed(t,e){return Qe(t)?t:new N_(t,e)}class N_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Zs(e)}get value(){return Jh(this),this._value}set value(e){const n=this.__v_isShallow||Xi(e)||hs(e);e=n?e:ue(e),Dn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zs(e),Zh(this))}}function is(t){return Qe(t)?t.value:t}const O_={get:(t,e,n)=>is(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Qe(i)&&!Qe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function td(t){return ss(t)?t:new Proxy(t,O_)}class k_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ha(e,()=>{this._dirty||(this._dirty=!0,Zh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return Jh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function x_(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=It):(s=t.get,i=t.set),new k_(s,i,r||!i,n)}function rn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Lr(r,e,n)}return i}function pt(t,e,n,s){if(Q(t)){const r=rn(t,e,n,s);return r&&kh(r)&&r.catch(o=>{Lr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(pt(t[r],e,n,s));return i}function Lr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){rn(c,null,10,[t,o,a]);return}}M_(t,n,i,s)}function M_(t,e,n,s=!0){console.error(t)}let ei=!1,Qo=!1;const $e=[];let Et=0;const rs=[];let Lt=null,Cn=0;const nd=Promise.resolve();let Ka=null;function sd(t){const e=Ka||nd;return t?e.then(this?t.bind(this):t):e}function D_(t){let e=Et+1,n=$e.length;for(;e<n;){const s=e+n>>>1,i=$e[s],r=ti(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Ga(t){(!$e.length||!$e.includes(t,ei&&t.allowRecurse?Et+1:Et))&&(t.id==null?$e.push(t):$e.splice(D_(t.id),0,t),id())}function id(){!ei&&!Qo&&(Qo=!0,Ka=nd.then(od))}function L_(t){const e=$e.indexOf(t);e>Et&&$e.splice(e,1)}function F_(t){K(t)?rs.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?Cn+1:Cn))&&rs.push(t),id()}function wl(t,e,n=ei?Et+1:0){for(;n<$e.length;n++){const s=$e[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;$e.splice(n,1),n--,s()}}}function rd(t){if(rs.length){const e=[...new Set(rs)];if(rs.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,s)=>ti(n)-ti(s)),Cn=0;Cn<Lt.length;Cn++)Lt[Cn]();Lt=null,Cn=0}}const ti=t=>t.id==null?1/0:t.id,$_=(t,e)=>{const n=ti(t)-ti(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function od(t){Qo=!1,ei=!0,$e.sort($_);try{for(Et=0;Et<$e.length;Et++){const e=$e[Et];e&&e.active!==!1&&rn(e,null,14)}}finally{Et=0,$e.length=0,rd(),ei=!1,Ka=null,($e.length||rs.length)&&od()}}function U_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||we;d&&(i=n.map(g=>Pe(g)?g.trim():g)),h&&(i=n.map(Dh))}let a,c=s[a=ho(e)]||s[a=ho(Rt(e))];!c&&r&&(c=s[a=ho(bs(e))]),c&&pt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(l,t,6,i)}}function ad(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const c=l=>{const u=ad(l,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(me(t)&&s.set(t,null),null):(K(r)?r.forEach(c=>o[c]=null):Le(o,r),me(t)&&s.set(t,o),o)}function Fr(t,e){return!t||!Nr(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,bs(e))||re(t,e))}let Ue=null,cd=null;function Ji(t){const e=Ue;return Ue=t,cd=t&&t.type.__scopeId||null,e}function B_(t,e=Ue,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ol(-1);const r=Ji(e);let o;try{o=t(...i)}finally{Ji(r),s._d&&Ol(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function po(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:m}=t;let N,L;const F=Ji(t);try{if(n.shapeFlag&4){const U=i||s,ae=U;N=bt(u.call(ae,U,h,r,g,d,y)),L=c}else{const U=e;N=bt(U.length>1?U(r,{attrs:c,slots:a,emit:l}):U(r,null)),L=e.props?c:H_(c)}}catch(U){Vs.length=0,Lr(U,t,1),N=ze(pn)}let B=N;if(L&&m!==!1){const U=Object.keys(L),{shapeFlag:ae}=B;U.length&&ae&7&&(o&&U.some(Da)&&(L=W_(L,o)),B=ds(B,L))}return n.dirs&&(B=ds(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),N=B,Ji(F),N}const H_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nr(n))&&((e||(e={}))[n]=t[n]);return e},W_=(t,e)=>{const n={};for(const s in t)(!Da(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function j_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?bl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Fr(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?bl(s,o,l):!0:!!o;return!1}function bl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Fr(n,r))return!0}return!1}function V_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ld="components";function RR(t,e){return K_(ld,t,!0,e)||t}const z_=Symbol.for("v-ndc");function K_(t,e,n=!0,s=!1){const i=Ue||De;if(i){const r=i.type;if(t===ld){const a=$m(r,!1);if(a&&(a===e||a===Rt(e)||a===xr(Rt(e))))return r}const o=El(i[t]||r[t],e)||El(i.appContext[t],e);return!o&&s?r:o}}function El(t,e){return t&&(t[e]||t[Rt(e)]||t[xr(Rt(e))])}const G_=t=>t.__isSuspense;function q_(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):F_(t)}const Di={};function os(t,e,n){return ud(t,e,n)}function ud(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=we){var a;const c=a_()===((a=De)==null?void 0:a.scope)?De:null;let l,u=!1,h=!1;if(Qe(t)?(l=()=>t.value,u=Xi(t)):ss(t)?(l=()=>t,s=!0):K(t)?(h=!0,u=t.some(U=>ss(U)||Xi(U)),l=()=>t.map(U=>{if(Qe(U))return U.value;if(ss(U))return Sn(U);if(Q(U))return rn(U,c,2)})):Q(t)?e?l=()=>rn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),pt(t,c,3,[g])}:l=It,e&&s){const U=l;l=()=>Sn(U())}let d,g=U=>{d=F.onStop=()=>{rn(U,c,4),d=F.onStop=void 0}},y;if(si)if(g=It,e?n&&pt(e,c,3,[l(),h?[]:void 0,g]):l(),i==="sync"){const U=Hm();y=U.__watcherHandles||(U.__watcherHandles=[])}else return It;let m=h?new Array(t.length).fill(Di):Di;const N=()=>{if(F.active)if(e){const U=F.run();(s||u||(h?U.some((ae,ce)=>Dn(ae,m[ce])):Dn(U,m)))&&(d&&d(),pt(e,c,3,[U,m===Di?void 0:h&&m[0]===Di?[]:m,g]),m=U)}else F.run()};N.allowRecurse=!!e;let L;i==="sync"?L=N:i==="post"?L=()=>Ve(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),L=()=>Ga(N));const F=new Ha(l,L);e?n?N():m=F.run():i==="post"?Ve(F.run.bind(F),c&&c.suspense):F.run();const B=()=>{F.stop(),c&&c.scope&&La(c.scope.effects,F)};return y&&y.push(B),B}function Y_(t,e,n){const s=this.proxy,i=Pe(t)?t.includes(".")?hd(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=De;fs(this);const a=ud(i,r.bind(s),n);return o?fs(o):kn(),a}function hd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Sn(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Qe(t))Sn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Sn(t[n],e);else if(Or(t)||ns(t))t.forEach(n=>{Sn(n,e)});else if(Mh(t))for(const n in t)Sn(t[n],e);return t}function AR(t,e){const n=Ue;if(n===null)return t;const s=Hr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=we]=e[r];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&Sn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function wn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Es(),pt(c,n,8,[t.el,a,t,e]),Is())}}/*! #__NO_SIDE_EFFECTS__ */function dd(t,e){return Q(t)?Le({name:t.name},e,{setup:t}):t}const Ws=t=>!!t.type.__asyncLoader,fd=t=>t.type.__isKeepAlive;function Q_(t,e){pd(t,"a",e)}function X_(t,e){pd(t,"da",e)}function pd(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($r(e,s,n),n){let i=n.parent;for(;i&&i.parent;)fd(i.parent.vnode)&&J_(s,e,n,i),i=i.parent}}function J_(t,e,n,s){const i=$r(e,t,s,!0);gd(()=>{La(s[e],i)},n)}function $r(t,e,n=De,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Es(),fs(n);const a=pt(e,n,t,o);return kn(),Is(),a});return s?i.unshift(r):i.push(r),r}}const Kt=t=>(e,n=De)=>(!si||t==="sp")&&$r(t,(...s)=>e(...s),n),Z_=Kt("bm"),em=Kt("m"),tm=Kt("bu"),nm=Kt("u"),sm=Kt("bum"),gd=Kt("um"),im=Kt("sp"),rm=Kt("rtg"),om=Kt("rtc");function am(t,e=De){$r("ec",t,e)}function PR(t,e,n,s){let i;const r=n&&n[s];if(K(t)||Pe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function NR(t,e,n={},s,i){if(Ue.isCE||Ue.parent&&Ws(Ue.parent)&&Ue.parent.isCE)return e!=="default"&&(n.name=e),ze("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Td();const o=r&&_d(r(n)),a=Rd(at,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function _d(t){return t.some(e=>tr(e)?!(e.type===pn||e.type===at&&!_d(e.children)):!0)?t:null}const Xo=t=>t?Nd(t)?Hr(t)||t.proxy:Xo(t.parent):null,js=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xo(t.parent),$root:t=>Xo(t.root),$emit:t=>t.emit,$options:t=>qa(t),$forceUpdate:t=>t.f||(t.f=()=>Ga(t.update)),$nextTick:t=>t.n||(t.n=sd.bind(t.proxy)),$watch:t=>Y_.bind(t)}),go=(t,e)=>t!==we&&!t.__isScriptSetup&&re(t,e),cm={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(go(s,e))return o[e]=1,s[e];if(i!==we&&re(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&re(l,e))return o[e]=3,r[e];if(n!==we&&re(n,e))return o[e]=4,n[e];Jo&&(o[e]=0)}}const u=js[e];let h,d;if(u)return e==="$attrs"&&Ye(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&re(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,re(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return go(i,e)?(i[e]=n,!0):s!==we&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==we&&re(t,o)||go(e,o)||(a=r[0])&&re(a,o)||re(s,o)||re(js,o)||re(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Il(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jo=!0;function lm(t){const e=qa(t),n=t.proxy,s=t.ctx;Jo=!1,e.beforeCreate&&Cl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:m,deactivated:N,beforeDestroy:L,beforeUnmount:F,destroyed:B,unmounted:U,render:ae,renderTracked:ce,renderTriggered:Ce,errorCaptured:Ne,serverPrefetch:Se,expose:le,inheritAttrs:te,components:nt,directives:Ze,filters:V}=e;if(l&&um(l,s,null),o)for(const P in o){const E=o[P];Q(E)&&(s[P]=E.bind(n))}if(i){const P=i.call(n,n);me(P)&&(t.data=yi(P))}if(Jo=!0,r)for(const P in r){const E=r[P],j=Q(E)?E.bind(n,n):Q(E.get)?E.get.bind(n,n):It,z=!Q(E)&&Q(E.set)?E.set.bind(n):It,ne=lt({get:j,set:z});Object.defineProperty(s,P,{enumerable:!0,configurable:!0,get:()=>ne.value,set:se=>ne.value=se})}if(a)for(const P in a)md(a[P],s,n,P);if(c){const P=Q(c)?c.call(n):c;Reflect.ownKeys(P).forEach(E=>{Vi(E,P[E])})}u&&Cl(u,t,"c");function T(P,E){K(E)?E.forEach(j=>P(j.bind(n))):E&&P(E.bind(n))}if(T(Z_,h),T(em,d),T(tm,g),T(nm,y),T(Q_,m),T(X_,N),T(am,Ne),T(om,ce),T(rm,Ce),T(sm,F),T(gd,U),T(im,Se),K(le))if(le.length){const P=t.exposed||(t.exposed={});le.forEach(E=>{Object.defineProperty(P,E,{get:()=>n[E],set:j=>n[E]=j})})}else t.exposed||(t.exposed={});ae&&t.render===It&&(t.render=ae),te!=null&&(t.inheritAttrs=te),nt&&(t.components=nt),Ze&&(t.directives=Ze)}function um(t,e,n=It){K(t)&&(t=Zo(t));for(const s in t){const i=t[s];let r;me(i)?"default"in i?r=Ct(i.from||s,i.default,!0):r=Ct(i.from||s):r=Ct(i),Qe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Cl(t,e,n){pt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function md(t,e,n,s){const i=s.includes(".")?hd(n,s):()=>n[s];if(Pe(t)){const r=e[t];Q(r)&&os(i,r)}else if(Q(t))os(i,t.bind(n));else if(me(t))if(K(t))t.forEach(r=>md(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&os(i,r,t)}}function qa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>Zi(c,l,o,!0)),Zi(c,e,o)),me(e)&&r.set(e,c),c}function Zi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Zi(t,r,n,!0),i&&i.forEach(o=>Zi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=hm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const hm={data:Tl,props:Sl,emits:Sl,methods:Bs,computed:Bs,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Bs,directives:Bs,watch:fm,provide:Tl,inject:dm};function Tl(t,e){return e?t?function(){return Le(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function dm(t,e){return Bs(Zo(t),Zo(e))}function Zo(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?Le(Object.create(null),t,e):e}function Sl(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Le(Object.create(null),Il(t),Il(e??{})):e}function fm(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function yd(){return{app:null,config:{isNativeTag:Kg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pm=0;function gm(t,e){return function(s,i=null){Q(s)||(s=Le({},s)),i!=null&&!me(i)&&(i=null);const r=yd(),o=new WeakSet;let a=!1;const c=r.app={_uid:pm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Wm,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=ze(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Hr(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){er=c;try{return l()}finally{er=null}}};return c}}let er=null;function Vi(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function Ct(t,e,n=!1){const s=De||Ue;if(s||er){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:er._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s&&s.proxy):e}}function _m(t,e,n,s=!1){const i={},r={};Qi(r,Br,1),t.propsDefaults=Object.create(null),vd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:qh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function mm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Fr(t.emitsOptions,d))continue;const g=e[d];if(c)if(re(r,d))g!==r[d]&&(r[d]=g,l=!0);else{const y=Rt(d);i[y]=ea(c,a,y,g,t,!1)}else g!==r[d]&&(r[d]=g,l=!0)}}}else{vd(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=bs(h))===h||!re(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ea(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!re(e,h))&&(delete r[h],l=!0)}l&&Ht(t,"set","$attrs")}function vd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Wi(c))continue;const l=e[c];let u;i&&re(i,u=Rt(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Fr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ue(n),l=a||we;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ea(i,c,h,l[h],t,!re(l,h))}}return o}function ea(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(fs(i),s=l[n]=c.call(null,e),kn())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===bs(n))&&(s=!0))}return s}function wd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!Q(t)){const u=h=>{c=!0;const[d,g]=wd(h,e,!0);Le(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return me(t)&&s.set(t,ts),ts;if(K(r))for(let u=0;u<r.length;u++){const h=Rt(r[u]);Rl(h)&&(o[h]=we)}else if(r)for(const u in r){const h=Rt(u);if(Rl(h)){const d=r[u],g=o[h]=K(d)||Q(d)?{type:d}:Le({},d);if(g){const y=Nl(Boolean,g.type),m=Nl(String,g.type);g[0]=y>-1,g[1]=m<0||y<m,(y>-1||re(g,"default"))&&a.push(h)}}}const l=[o,a];return me(t)&&s.set(t,l),l}function Rl(t){return t[0]!=="$"}function Al(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Pl(t,e){return Al(t)===Al(e)}function Nl(t,e){return K(e)?e.findIndex(n=>Pl(n,t)):Q(e)&&Pl(e,t)?0:-1}const bd=t=>t[0]==="_"||t==="$stable",Ya=t=>K(t)?t.map(bt):[bt(t)],ym=(t,e,n)=>{if(e._n)return e;const s=B_((...i)=>Ya(e(...i)),n);return s._c=!1,s},Ed=(t,e,n)=>{const s=t._ctx;for(const i in t){if(bd(i))continue;const r=t[i];if(Q(r))e[i]=ym(i,r,s);else if(r!=null){const o=Ya(r);e[i]=()=>o}}},Id=(t,e)=>{const n=Ya(e);t.slots.default=()=>n},vm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Qi(e,"_",n)):Ed(e,t.slots={})}else t.slots={},e&&Id(t,e);Qi(t.slots,Br,1)},wm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Le(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Ed(e,i)),o=e}else e&&(Id(t,e),o={default:1});if(r)for(const a in i)!bd(a)&&o[a]==null&&delete i[a]};function ta(t,e,n,s,i=!1){if(K(t)){t.forEach((d,g)=>ta(d,e&&(K(e)?e[g]:e),n,s,i));return}if(Ws(s)&&!i)return;const r=s.shapeFlag&4?Hr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,re(h,l)&&(h[l]=null)):Qe(l)&&(l.value=null)),Q(c))rn(c,a,12,[o,u]);else{const d=Pe(c),g=Qe(c);if(d||g){const y=()=>{if(t.f){const m=d?re(h,c)?h[c]:u[c]:c.value;i?K(m)&&La(m,r):K(m)?m.includes(r)||m.push(r):d?(u[c]=[r],re(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,re(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ve(y,n)):y()}}}const Ve=q_;function bm(t){return Em(t)}function Em(t,e){const n=zo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=It,insertStaticContent:y}=t,m=(f,p,_,v=null,b=null,I=null,D=!1,A=null,O=!!p.dynamicChildren)=>{if(f===p)return;f&&!xs(f,p)&&(v=w(f),se(f,b,I,!0),f=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:C,ref:H,shapeFlag:$}=p;switch(C){case Ur:N(f,p,_,v);break;case pn:L(f,p,_,v);break;case _o:f==null&&F(p,_,v,D);break;case at:nt(f,p,_,v,b,I,D,A,O);break;default:$&1?ae(f,p,_,v,b,I,D,A,O):$&6?Ze(f,p,_,v,b,I,D,A,O):($&64||$&128)&&C.process(f,p,_,v,b,I,D,A,O,R)}H!=null&&b&&ta(H,f&&f.ref,I,p||f,!p)},N=(f,p,_,v)=>{if(f==null)s(p.el=a(p.children),_,v);else{const b=p.el=f.el;p.children!==f.children&&l(b,p.children)}},L=(f,p,_,v)=>{f==null?s(p.el=c(p.children||""),_,v):p.el=f.el},F=(f,p,_,v)=>{[f.el,f.anchor]=y(f.children,p,_,v,f.el,f.anchor)},B=({el:f,anchor:p},_,v)=>{let b;for(;f&&f!==p;)b=d(f),s(f,_,v),f=b;s(p,_,v)},U=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},ae=(f,p,_,v,b,I,D,A,O)=>{D=D||p.type==="svg",f==null?ce(p,_,v,b,I,D,A,O):Se(f,p,b,I,D,A,O)},ce=(f,p,_,v,b,I,D,A)=>{let O,C;const{type:H,props:$,shapeFlag:W,transition:Y,dirs:ie}=f;if(O=f.el=o(f.type,I,$&&$.is,$),W&8?u(O,f.children):W&16&&Ne(f.children,O,null,v,b,I&&H!=="foreignObject",D,A),ie&&wn(f,null,v,"created"),Ce(O,f,f.scopeId,D,v),$){for(const de in $)de!=="value"&&!Wi(de)&&r(O,de,null,$[de],I,f.children,v,b,Ee);"value"in $&&r(O,"value",null,$.value),(C=$.onVnodeBeforeMount)&&wt(C,v,f)}ie&&wn(f,null,v,"beforeMount");const ge=Im(b,Y);ge&&Y.beforeEnter(O),s(O,p,_),((C=$&&$.onVnodeMounted)||ge||ie)&&Ve(()=>{C&&wt(C,v,f),ge&&Y.enter(O),ie&&wn(f,null,v,"mounted")},b)},Ce=(f,p,_,v,b)=>{if(_&&g(f,_),v)for(let I=0;I<v.length;I++)g(f,v[I]);if(b){let I=b.subTree;if(p===I){const D=b.vnode;Ce(f,D,D.scopeId,D.slotScopeIds,b.parent)}}},Ne=(f,p,_,v,b,I,D,A,O=0)=>{for(let C=O;C<f.length;C++){const H=f[C]=A?Qt(f[C]):bt(f[C]);m(null,H,p,_,v,b,I,D,A)}},Se=(f,p,_,v,b,I,D)=>{const A=p.el=f.el;let{patchFlag:O,dynamicChildren:C,dirs:H}=p;O|=f.patchFlag&16;const $=f.props||we,W=p.props||we;let Y;_&&bn(_,!1),(Y=W.onVnodeBeforeUpdate)&&wt(Y,_,p,f),H&&wn(p,f,_,"beforeUpdate"),_&&bn(_,!0);const ie=b&&p.type!=="foreignObject";if(C?le(f.dynamicChildren,C,A,_,v,ie,I):D||E(f,p,A,null,_,v,ie,I,!1),O>0){if(O&16)te(A,p,$,W,_,v,b);else if(O&2&&$.class!==W.class&&r(A,"class",null,W.class,b),O&4&&r(A,"style",$.style,W.style,b),O&8){const ge=p.dynamicProps;for(let de=0;de<ge.length;de++){const Te=ge[de],rt=$[Te],Gn=W[Te];(Gn!==rt||Te==="value")&&r(A,Te,rt,Gn,b,f.children,_,v,Ee)}}O&1&&f.children!==p.children&&u(A,p.children)}else!D&&C==null&&te(A,p,$,W,_,v,b);((Y=W.onVnodeUpdated)||H)&&Ve(()=>{Y&&wt(Y,_,p,f),H&&wn(p,f,_,"updated")},v)},le=(f,p,_,v,b,I,D)=>{for(let A=0;A<p.length;A++){const O=f[A],C=p[A],H=O.el&&(O.type===at||!xs(O,C)||O.shapeFlag&70)?h(O.el):_;m(O,C,H,null,v,b,I,D,!0)}},te=(f,p,_,v,b,I,D)=>{if(_!==v){if(_!==we)for(const A in _)!Wi(A)&&!(A in v)&&r(f,A,_[A],null,D,p.children,b,I,Ee);for(const A in v){if(Wi(A))continue;const O=v[A],C=_[A];O!==C&&A!=="value"&&r(f,A,C,O,D,p.children,b,I,Ee)}"value"in v&&r(f,"value",_.value,v.value)}},nt=(f,p,_,v,b,I,D,A,O)=>{const C=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Y}=p;Y&&(A=A?A.concat(Y):Y),f==null?(s(C,_,v),s(H,_,v),Ne(p.children,_,H,b,I,D,A,O)):$>0&&$&64&&W&&f.dynamicChildren?(le(f.dynamicChildren,W,_,b,I,D,A),(p.key!=null||b&&p===b.subTree)&&Cd(f,p,!0)):E(f,p,_,H,b,I,D,A,O)},Ze=(f,p,_,v,b,I,D,A,O)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?b.ctx.activate(p,_,v,D,O):V(p,_,v,b,I,D,O):k(f,p,O)},V=(f,p,_,v,b,I,D)=>{const A=f.component=xm(f,v,b);if(fd(f)&&(A.ctx.renderer=R),Mm(A),A.asyncDep){if(b&&b.registerDep(A,T),!f.el){const O=A.subTree=ze(pn);L(null,O,p,_)}return}T(A,f,p,_,b,I,D)},k=(f,p,_)=>{const v=p.component=f.component;if(j_(f,p,_))if(v.asyncDep&&!v.asyncResolved){P(v,p,_);return}else v.next=p,L_(v.update),v.update();else p.el=f.el,v.vnode=p},T=(f,p,_,v,b,I,D)=>{const A=()=>{if(f.isMounted){let{next:H,bu:$,u:W,parent:Y,vnode:ie}=f,ge=H,de;bn(f,!1),H?(H.el=ie.el,P(f,H,D)):H=ie,$&&ji($),(de=H.props&&H.props.onVnodeBeforeUpdate)&&wt(de,Y,H,ie),bn(f,!0);const Te=po(f),rt=f.subTree;f.subTree=Te,m(rt,Te,h(rt.el),w(rt),f,b,I),H.el=Te.el,ge===null&&V_(f,Te.el),W&&Ve(W,b),(de=H.props&&H.props.onVnodeUpdated)&&Ve(()=>wt(de,Y,H,ie),b)}else{let H;const{el:$,props:W}=p,{bm:Y,m:ie,parent:ge}=f,de=Ws(p);if(bn(f,!1),Y&&ji(Y),!de&&(H=W&&W.onVnodeBeforeMount)&&wt(H,ge,p),bn(f,!0),$&&X){const Te=()=>{f.subTree=po(f),X($,f.subTree,f,b,null)};de?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=po(f);m(null,Te,_,v,f,b,I),p.el=Te.el}if(ie&&Ve(ie,b),!de&&(H=W&&W.onVnodeMounted)){const Te=p;Ve(()=>wt(H,ge,Te),b)}(p.shapeFlag&256||ge&&Ws(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&Ve(f.a,b),f.isMounted=!0,p=_=v=null}},O=f.effect=new Ha(A,()=>Ga(C),f.scope),C=f.update=()=>O.run();C.id=f.uid,bn(f,!0),C()},P=(f,p,_)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,mm(f,p.props,v,_),wm(f,p.children,_),Es(),wl(f),Is()},E=(f,p,_,v,b,I,D,A,O=!1)=>{const C=f&&f.children,H=f?f.shapeFlag:0,$=p.children,{patchFlag:W,shapeFlag:Y}=p;if(W>0){if(W&128){z(C,$,_,v,b,I,D,A,O);return}else if(W&256){j(C,$,_,v,b,I,D,A,O);return}}Y&8?(H&16&&Ee(C,b,I),$!==C&&u(_,$)):H&16?Y&16?z(C,$,_,v,b,I,D,A,O):Ee(C,b,I,!0):(H&8&&u(_,""),Y&16&&Ne($,_,v,b,I,D,A,O))},j=(f,p,_,v,b,I,D,A,O)=>{f=f||ts,p=p||ts;const C=f.length,H=p.length,$=Math.min(C,H);let W;for(W=0;W<$;W++){const Y=p[W]=O?Qt(p[W]):bt(p[W]);m(f[W],Y,_,null,b,I,D,A,O)}C>H?Ee(f,b,I,!0,!1,$):Ne(p,_,v,b,I,D,A,O,$)},z=(f,p,_,v,b,I,D,A,O)=>{let C=0;const H=p.length;let $=f.length-1,W=H-1;for(;C<=$&&C<=W;){const Y=f[C],ie=p[C]=O?Qt(p[C]):bt(p[C]);if(xs(Y,ie))m(Y,ie,_,null,b,I,D,A,O);else break;C++}for(;C<=$&&C<=W;){const Y=f[$],ie=p[W]=O?Qt(p[W]):bt(p[W]);if(xs(Y,ie))m(Y,ie,_,null,b,I,D,A,O);else break;$--,W--}if(C>$){if(C<=W){const Y=W+1,ie=Y<H?p[Y].el:v;for(;C<=W;)m(null,p[C]=O?Qt(p[C]):bt(p[C]),_,ie,b,I,D,A,O),C++}}else if(C>W)for(;C<=$;)se(f[C],b,I,!0),C++;else{const Y=C,ie=C,ge=new Map;for(C=ie;C<=W;C++){const et=p[C]=O?Qt(p[C]):bt(p[C]);et.key!=null&&ge.set(et.key,C)}let de,Te=0;const rt=W-ie+1;let Gn=!1,cl=0;const ks=new Array(rt);for(C=0;C<rt;C++)ks[C]=0;for(C=Y;C<=$;C++){const et=f[C];if(Te>=rt){se(et,b,I,!0);continue}let vt;if(et.key!=null)vt=ge.get(et.key);else for(de=ie;de<=W;de++)if(ks[de-ie]===0&&xs(et,p[de])){vt=de;break}vt===void 0?se(et,b,I,!0):(ks[vt-ie]=C+1,vt>=cl?cl=vt:Gn=!0,m(et,p[vt],_,null,b,I,D,A,O),Te++)}const ll=Gn?Cm(ks):ts;for(de=ll.length-1,C=rt-1;C>=0;C--){const et=ie+C,vt=p[et],ul=et+1<H?p[et+1].el:v;ks[C]===0?m(null,vt,_,ul,b,I,D,A,O):Gn&&(de<0||C!==ll[de]?ne(vt,_,ul,2):de--)}}},ne=(f,p,_,v,b=null)=>{const{el:I,type:D,transition:A,children:O,shapeFlag:C}=f;if(C&6){ne(f.component.subTree,p,_,v);return}if(C&128){f.suspense.move(p,_,v);return}if(C&64){D.move(f,p,_,R);return}if(D===at){s(I,p,_);for(let $=0;$<O.length;$++)ne(O[$],p,_,v);s(f.anchor,p,_);return}if(D===_o){B(f,p,_);return}if(v!==2&&C&1&&A)if(v===0)A.beforeEnter(I),s(I,p,_),Ve(()=>A.enter(I),b);else{const{leave:$,delayLeave:W,afterLeave:Y}=A,ie=()=>s(I,p,_),ge=()=>{$(I,()=>{ie(),Y&&Y()})};W?W(I,ie,ge):ge()}else s(I,p,_)},se=(f,p,_,v=!1,b=!1)=>{const{type:I,props:D,ref:A,children:O,dynamicChildren:C,shapeFlag:H,patchFlag:$,dirs:W}=f;if(A!=null&&ta(A,null,_,f,!0),H&256){p.ctx.deactivate(f);return}const Y=H&1&&W,ie=!Ws(f);let ge;if(ie&&(ge=D&&D.onVnodeBeforeUnmount)&&wt(ge,p,f),H&6)Me(f.component,_,v);else{if(H&128){f.suspense.unmount(_,v);return}Y&&wn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,_,b,R,v):C&&(I!==at||$>0&&$&64)?Ee(C,p,_,!1,!0):(I===at&&$&384||!b&&H&16)&&Ee(O,p,_),v&&ye(f)}(ie&&(ge=D&&D.onVnodeUnmounted)||Y)&&Ve(()=>{ge&&wt(ge,p,f),Y&&wn(f,null,p,"unmounted")},_)},ye=f=>{const{type:p,el:_,anchor:v,transition:b}=f;if(p===at){be(_,v);return}if(p===_o){U(f);return}const I=()=>{i(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:D,delayLeave:A}=b,O=()=>D(_,I);A?A(f.el,I,O):O()}else I()},be=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Me=(f,p,_)=>{const{bum:v,scope:b,update:I,subTree:D,um:A}=f;v&&ji(v),b.stop(),I&&(I.active=!1,se(D,f,p,_)),A&&Ve(A,p),Ve(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ee=(f,p,_,v=!1,b=!1,I=0)=>{for(let D=I;D<f.length;D++)se(f[D],p,_,v,b)},w=f=>f.shapeFlag&6?w(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),x=(f,p,_)=>{f==null?p._vnode&&se(p._vnode,null,null,!0):m(p._vnode||null,f,p,null,null,null,_),wl(),rd(),p._vnode=f},R={p:m,um:se,m:ne,r:ye,mt:V,mc:Ne,pc:E,pbc:le,n:w,o:t};let M,X;return e&&([M,X]=e(R)),{render:x,hydrate:M,createApp:gm(x,M)}}function bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Im(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cd(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Qt(i[r]),a.el=o.el),n||Cd(o,a)),a.type===Ur&&(a.el=o.el)}}function Cm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Tm=t=>t.__isTeleport,at=Symbol.for("v-fgt"),Ur=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),Vs=[];let ht=null;function Td(t=!1){Vs.push(ht=t?null:[])}function Sm(){Vs.pop(),ht=Vs[Vs.length-1]||null}let ni=1;function Ol(t){ni+=t}function Sd(t){return t.dynamicChildren=ni>0?ht||ts:null,Sm(),ni>0&&ht&&ht.push(t),t}function OR(t,e,n,s,i,r){return Sd(Pd(t,e,n,s,i,r,!0))}function Rd(t,e,n,s,i){return Sd(ze(t,e,n,s,i,!0))}function tr(t){return t?t.__v_isVNode===!0:!1}function xs(t,e){return t.type===e.type&&t.key===e.key}const Br="__vInternal",Ad=({key:t})=>t??null,zi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pe(t)||Qe(t)||Q(t)?{i:Ue,r:t,k:e,f:!!n}:t:null);function Pd(t,e=null,n=null,s=0,i=null,r=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ad(e),ref:e&&zi(e),scopeId:cd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ue};return a?(Qa(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),ni>0&&!o&&ht&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ht.push(c),c}const ze=Rm;function Rm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===z_)&&(t=pn),tr(t)){const a=ds(t,e,!0);return n&&Qa(a,n),ni>0&&!r&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag|=-2,a}if(Um(t)&&(t=t.__vccOpts),e){e=Am(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=Ua(a)),me(c)&&(Qh(c)&&!K(c)&&(c=Le({},c)),e.style=$a(c))}const o=Pe(t)?1:G_(t)?128:Tm(t)?64:me(t)?4:Q(t)?2:0;return Pd(t,e,n,s,i,o,r,!0)}function Am(t){return t?Qh(t)||Br in t?Le({},t):t:null}function ds(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Nm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ad(a),ref:e&&e.ref?n&&i?K(i)?i.concat(zi(e)):[i,zi(e)]:zi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Pm(t=" ",e=0){return ze(Ur,null,t,e)}function kR(t="",e=!1){return e?(Td(),Rd(pn,null,t)):ze(pn,null,t)}function bt(t){return t==null||typeof t=="boolean"?ze(pn):K(t)?ze(at,null,t.slice()):typeof t=="object"?Qt(t):ze(Ur,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function Qa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Qa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Br in e)?e._ctx=Ue:i===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),s&64?(n=16,e=[Pm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ua([e.class,s.class]));else if(i==="style")e.style=$a([e.style,s.style]);else if(Nr(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function wt(t,e,n,s=null){pt(t,e,7,[n,s])}const Om=yd();let km=0;function xm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Om,r={uid:km++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new r_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(s,i),emitsOptions:ad(s,i),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=U_.bind(null,r),t.ce&&t.ce(r),r}let De=null,Xa,qn,kl="__VUE_INSTANCE_SETTERS__";(qn=zo()[kl])||(qn=zo()[kl]=[]),qn.push(t=>De=t),Xa=t=>{qn.length>1?qn.forEach(e=>e(t)):qn[0](t)};const fs=t=>{Xa(t),t.scope.on()},kn=()=>{De&&De.scope.off(),Xa(null)};function Nd(t){return t.vnode.shapeFlag&4}let si=!1;function Mm(t,e=!1){si=e;const{props:n,children:s}=t.vnode,i=Nd(t);_m(t,n,i,e),vm(t,s);const r=i?Dm(t,e):void 0;return si=!1,r}function Dm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xh(new Proxy(t.ctx,cm));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Fm(t):null;fs(t),Es();const r=rn(s,t,0,[t.props,i]);if(Is(),kn(),kh(r)){if(r.then(kn,kn),e)return r.then(o=>{xl(t,o,e)}).catch(o=>{Lr(o,t,0)});t.asyncDep=r}else xl(t,r,e)}else Od(t,e)}function xl(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=td(e)),Od(t,n)}let Ml;function Od(t,e,n){const s=t.type;if(!t.render){if(!e&&Ml&&!s.render){const i=s.template||qa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Le(Le({isCustomElement:r,delimiters:a},o),c);s.render=Ml(i,l)}}t.render=s.render||It}{fs(t),Es();try{lm(t)}finally{Is(),kn()}}}function Lm(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ye(t,"get","$attrs"),e[n]}}))}function Fm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Lm(t)},slots:t.slots,emit:t.emit,expose:e}}function Hr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(td(Xh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}}))}function $m(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function Um(t){return Q(t)&&"__vccOpts"in t}const lt=(t,e)=>x_(t,e,si);function kd(t,e,n){const s=arguments.length;return s===2?me(e)&&!K(e)?tr(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&tr(n)&&(n=[n]),ze(t,e,n))}const Bm=Symbol.for("v-scx"),Hm=()=>Ct(Bm),Wm="3.3.13",jm="http://www.w3.org/2000/svg",Tn=typeof document<"u"?document:null,Dl=Tn&&Tn.createElement("template"),Vm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Tn.createElementNS(jm,t):Tn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Dl.innerHTML=s?`<svg>${t}</svg>`:t;const a=Dl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zm=Symbol("_vtc");function Km(t,e,n){const s=t[zm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gm=Symbol("_vod"),qm=Symbol("");function Ym(t,e,n){const s=t.style,i=Pe(n);if(n&&!i){if(e&&!Pe(e))for(const r in e)n[r]==null&&na(s,r,"");for(const r in n)na(s,r,n[r])}else{const r=s.display;if(i){if(e!==n){const o=s[qm];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");Gm in t&&(s.display=r)}}const Ll=/\s*!important$/;function na(t,e,n){if(K(n))n.forEach(s=>na(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Qm(t,e);Ll.test(n)?t.setProperty(bs(s),n.replace(Ll,""),"important"):t[s]=n}}const Fl=["Webkit","Moz","ms"],mo={};function Qm(t,e){const n=mo[e];if(n)return n;let s=Rt(e);if(s!=="filter"&&s in t)return mo[e]=s;s=xr(s);for(let i=0;i<Fl.length;i++){const r=Fl[i]+s;if(r in t)return mo[e]=r}return e}const $l="http://www.w3.org/1999/xlink";function Xm(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($l,e.slice(6,e.length)):t.setAttributeNS($l,e,n);else{const r=n_(e);n==null||r&&!Lh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Jm(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lh(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function xd(t,e,n,s){t.addEventListener(e,n,s)}function Zm(t,e,n,s){t.removeEventListener(e,n,s)}const Ul=Symbol("_vei");function ey(t,e,n,s,i=null){const r=t[Ul]||(t[Ul]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=ty(e);if(s){const l=r[e]=iy(s,i);xd(t,a,l,c)}else o&&(Zm(t,a,o,c),r[e]=void 0)}}const Bl=/(?:Once|Passive|Capture)$/;function ty(t){let e;if(Bl.test(t)){e={};let s;for(;s=t.match(Bl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bs(t.slice(2)),e]}let yo=0;const ny=Promise.resolve(),sy=()=>yo||(ny.then(()=>yo=0),yo=Date.now());function iy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(ry(s,n.value),e,5,[s])};return n.value=t,n.attached=sy(),n}function ry(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,oy=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?Km(t,s,i):e==="style"?Ym(t,n,s):Nr(e)?Da(e)||ey(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ay(t,e,s,i))?Jm(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Xm(t,e,s,i))};function ay(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hl(e)&&Q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Hl(e)&&Pe(n)?!1:e in t}const Wl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>ji(e,n):e},vo=Symbol("_assign"),xR={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Or(e);xd(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Dh(nr(o)):nr(o));t[vo](t.multiple?i?new Set(r):r:r[0])}),t[vo]=Wl(s)},mounted(t,{value:e}){jl(t,e)},beforeUpdate(t,e,n){t[vo]=Wl(n)},updated(t,{value:e}){jl(t,e)}};function jl(t,e){const n=t.multiple;if(!(n&&!K(e)&&!Or(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=nr(r);if(n)K(e)?r.selected=i_(e,o)>-1:r.selected=e.has(o);else if(Mr(nr(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function nr(t){return"_value"in t?t._value:t.value}const cy=Le({patchProp:oy},Vm);let Vl;function ly(){return Vl||(Vl=bm(cy))}const MR=(...t)=>{const e=ly().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=uy(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function uy(t){return Pe(t)?document.querySelector(t):t}function hy(){return Md().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Md(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const dy=typeof Proxy=="function",fy="devtools-plugin:setup",py="plugin:settings:set";let Yn,sa;function gy(){var t;return Yn!==void 0||(typeof window<"u"&&window.performance?(Yn=!0,sa=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Yn=!0,sa=global.perf_hooks.performance):Yn=!1),Yn}function _y(){return gy()?sa.now():Date.now()}class my{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return _y()}},n&&n.on(py,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function yy(t,e){const n=t,s=Md(),i=hy(),r=dy&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(fy,t,e);else{const o=r?new my(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Dd="store";function DR(t){return t===void 0&&(t=null),Ct(t!==null?t:Dd)}function Cs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function vy(t){return t!==null&&typeof t=="object"}function wy(t){return t&&typeof t.then=="function"}function by(t,e){return function(){return t(e)}}function Ld(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Fd(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Wr(t,n,[],t._modules.root,!0),Ja(t,n,e)}function Ja(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};Cs(i,function(o,a){r[a]=by(o,t),Object.defineProperty(t.getters,a,{get:function(){return r[a]()},enumerable:!0})}),t._state=yi({data:e}),t.strict&&Sy(t),s&&n&&t._withCommit(function(){s.data=null})}function Wr(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=Za(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=Ey(t,o,n);s.forEachMutation(function(u,h){var d=o+h;Iy(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;Cy(t,d,g,l)}),s.forEachGetter(function(u,h){var d=o+h;Ty(t,d,u,l)}),s.forEachChild(function(u,h){Wr(t,e,n.concat(h),u,i)})}function Ey(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var c=sr(r,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(r,o,a){var c=sr(r,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return $d(t,e)}},state:{get:function(){return Za(t.state,n)}}}),i}function $d(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Iy(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function Cy(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return wy(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Ty(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function Sy(t){os(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Za(t,e){return e.reduce(function(n,s){return n[s]},t)}function sr(t,e,n){return vy(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Ry="vuex bindings",zl="vuex:mutations",wo="vuex:actions",Qn="vuex",Ay=0;function Py(t,e){yy({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Ry]},function(n){n.addTimelineLayer({id:zl,label:"Vuex Mutations",color:Kl}),n.addTimelineLayer({id:wo,label:"Vuex Actions",color:Kl}),n.addInspector({id:Qn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Qn)if(s.filter){var i=[];Wd(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Hd(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Qn){var i=s.nodeId;$d(e,i),s.state=ky(My(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Qn){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Qn),n.sendInspectorState(Qn),n.addTimelineEvent({layerId:zl,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=Ay++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:wo,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:wo,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Kl=8702998,Ny=6710886,Oy=16777215,Ud={label:"namespaced",textColor:Oy,backgroundColor:Ny};function Bd(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Hd(t,e){return{id:e||"root",label:Bd(e),tags:t.namespaced?[Ud]:[],children:Object.keys(t._children).map(function(n){return Hd(t._children[n],e+n+"/")})}}function Wd(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Ud]:[]}),Object.keys(e._children).forEach(function(i){Wd(t,e._children[i],n,s+i+"/")})}function ky(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=xy(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Bd(o):o,editable:!1,value:ia(function(){return r[o]})}})}return i}function xy(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=ia(function(){return t[n]})}else e[n]=ia(function(){return t[n]})}),e}function My(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ia(t){try{return t()}catch(e){return e}}var yt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},jd={namespaced:{configurable:!0}};jd.namespaced.get=function(){return!!this._rawModule.namespaced};yt.prototype.addChild=function(e,n){this._children[e]=n};yt.prototype.removeChild=function(e){delete this._children[e]};yt.prototype.getChild=function(e){return this._children[e]};yt.prototype.hasChild=function(e){return e in this._children};yt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};yt.prototype.forEachChild=function(e){Cs(this._children,e)};yt.prototype.forEachGetter=function(e){this._rawModule.getters&&Cs(this._rawModule.getters,e)};yt.prototype.forEachAction=function(e){this._rawModule.actions&&Cs(this._rawModule.actions,e)};yt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Cs(this._rawModule.mutations,e)};Object.defineProperties(yt.prototype,jd);var Wn=function(e){this.register([],e,!1)};Wn.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Wn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};Wn.prototype.update=function(e){Vd([],this.root,e)};Wn.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new yt(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&Cs(n.modules,function(a,c){i.register(e.concat(c),a,s)})};Wn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};Wn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Vd(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Vd(t.concat(s),e.getChild(s),n.modules[s])}}function LR(t){return new Je(t)}var Je=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Wn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,y){return l.call(o,d,g,y)},this.strict=i;var u=this._modules.root.state;Wr(this,u,[],this._modules.root),Ja(this,u),s.forEach(function(h){return h(n)})},ec={state:{configurable:!0}};Je.prototype.install=function(e,n){e.provide(n||Dd,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Py(e,this)};ec.state.get=function(){return this._state.data};ec.state.set=function(t){};Je.prototype.commit=function(e,n,s){var i=this,r=sr(e,n,s),o=r.type,a=r.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};Je.prototype.dispatch=function(e,n){var s=this,i=sr(e,n),r=i.type,o=i.payload,a={type:r,payload:o},c=this._actions[r];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,d)})}catch{}h(d)})})}};Je.prototype.subscribe=function(e,n){return Ld(e,this._subscribers,n)};Je.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Ld(s,this._actionSubscribers,n)};Je.prototype.watch=function(e,n,s){var i=this;return os(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Je.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Je.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Wr(this,this.state,e,this._modules.get(e),s.preserveState),Ja(this,this.state)};Je.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Za(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Fd(this)};Je.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Je.prototype.hotUpdate=function(e){this._modules.update(e),Fd(this,!0)};Je.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Je.prototype,ec);var zd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gd={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(zd,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",d="quarter",g="year",y="date",m="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(V){var k=["th","st","nd","rd"],T=V%100;return"["+V+(k[(T-20)%10]||k[T]||k[0])+"]"}},B=function(V,k,T){var P=String(V);return!P||P.length>=k?V:""+Array(k+1-P.length).join(T)+V},U={s:B,z:function(V){var k=-V.utcOffset(),T=Math.abs(k),P=Math.floor(T/60),E=T%60;return(k<=0?"+":"-")+B(P,2,"0")+":"+B(E,2,"0")},m:function V(k,T){if(k.date()<T.date())return-V(T,k);var P=12*(T.year()-k.year())+(T.month()-k.month()),E=k.clone().add(P,h),j=T-E<0,z=k.clone().add(P+(j?-1:1),h);return+(-(P+(T-E)/(j?E-z:z-E))||0)},a:function(V){return V<0?Math.ceil(V)||0:Math.floor(V)},p:function(V){return{M:h,y:g,w:u,d:l,D:y,h:c,m:a,s:o,ms:r,Q:d}[V]||String(V||"").toLowerCase().replace(/s$/,"")},u:function(V){return V===void 0}},ae="en",ce={};ce[ae]=F;var Ce="$isDayjsObject",Ne=function(V){return V instanceof nt||!(!V||!V[Ce])},Se=function V(k,T,P){var E;if(!k)return ae;if(typeof k=="string"){var j=k.toLowerCase();ce[j]&&(E=j),T&&(ce[j]=T,E=j);var z=k.split("-");if(!E&&z.length>1)return V(z[0])}else{var ne=k.name;ce[ne]=k,E=ne}return!P&&E&&(ae=E),E||!P&&ae},le=function(V,k){if(Ne(V))return V.clone();var T=typeof k=="object"?k:{};return T.date=V,T.args=arguments,new nt(T)},te=U;te.l=Se,te.i=Ne,te.w=function(V,k){return le(V,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var nt=function(){function V(T){this.$L=Se(T.locale,null,!0),this.parse(T),this.$x=this.$x||T.x||{},this[Ce]=!0}var k=V.prototype;return k.parse=function(T){this.$d=function(P){var E=P.date,j=P.utc;if(E===null)return new Date(NaN);if(te.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var z=E.match(N);if(z){var ne=z[2]-1||0,se=(z[7]||"0").substring(0,3);return j?new Date(Date.UTC(z[1],ne,z[3]||1,z[4]||0,z[5]||0,z[6]||0,se)):new Date(z[1],ne,z[3]||1,z[4]||0,z[5]||0,z[6]||0,se)}}return new Date(E)}(T),this.init()},k.init=function(){var T=this.$d;this.$y=T.getFullYear(),this.$M=T.getMonth(),this.$D=T.getDate(),this.$W=T.getDay(),this.$H=T.getHours(),this.$m=T.getMinutes(),this.$s=T.getSeconds(),this.$ms=T.getMilliseconds()},k.$utils=function(){return te},k.isValid=function(){return this.$d.toString()!==m},k.isSame=function(T,P){var E=le(T);return this.startOf(P)<=E&&E<=this.endOf(P)},k.isAfter=function(T,P){return le(T)<this.startOf(P)},k.isBefore=function(T,P){return this.endOf(P)<le(T)},k.$g=function(T,P,E){return te.u(T)?this[P]:this.set(E,T)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(T,P){var E=this,j=!!te.u(P)||P,z=te.p(T),ne=function(R,M){var X=te.w(E.$u?Date.UTC(E.$y,M,R):new Date(E.$y,M,R),E);return j?X:X.endOf(l)},se=function(R,M){return te.w(E.toDate()[R].apply(E.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(M)),E)},ye=this.$W,be=this.$M,Me=this.$D,Ee="set"+(this.$u?"UTC":"");switch(z){case g:return j?ne(1,0):ne(31,11);case h:return j?ne(1,be):ne(0,be+1);case u:var w=this.$locale().weekStart||0,x=(ye<w?ye+7:ye)-w;return ne(j?Me-x:Me+(6-x),be);case l:case y:return se(Ee+"Hours",0);case c:return se(Ee+"Minutes",1);case a:return se(Ee+"Seconds",2);case o:return se(Ee+"Milliseconds",3);default:return this.clone()}},k.endOf=function(T){return this.startOf(T,!1)},k.$set=function(T,P){var E,j=te.p(T),z="set"+(this.$u?"UTC":""),ne=(E={},E[l]=z+"Date",E[y]=z+"Date",E[h]=z+"Month",E[g]=z+"FullYear",E[c]=z+"Hours",E[a]=z+"Minutes",E[o]=z+"Seconds",E[r]=z+"Milliseconds",E)[j],se=j===l?this.$D+(P-this.$W):P;if(j===h||j===g){var ye=this.clone().set(y,1);ye.$d[ne](se),ye.init(),this.$d=ye.set(y,Math.min(this.$D,ye.daysInMonth())).$d}else ne&&this.$d[ne](se);return this.init(),this},k.set=function(T,P){return this.clone().$set(T,P)},k.get=function(T){return this[te.p(T)]()},k.add=function(T,P){var E,j=this;T=Number(T);var z=te.p(P),ne=function(be){var Me=le(j);return te.w(Me.date(Me.date()+Math.round(be*T)),j)};if(z===h)return this.set(h,this.$M+T);if(z===g)return this.set(g,this.$y+T);if(z===l)return ne(1);if(z===u)return ne(7);var se=(E={},E[a]=s,E[c]=i,E[o]=n,E)[z]||1,ye=this.$d.getTime()+T*se;return te.w(ye,this)},k.subtract=function(T,P){return this.add(-1*T,P)},k.format=function(T){var P=this,E=this.$locale();if(!this.isValid())return E.invalidDate||m;var j=T||"YYYY-MM-DDTHH:mm:ssZ",z=te.z(this),ne=this.$H,se=this.$m,ye=this.$M,be=E.weekdays,Me=E.months,Ee=E.meridiem,w=function(M,X,f,p){return M&&(M[X]||M(P,j))||f[X].slice(0,p)},x=function(M){return te.s(ne%12||12,M,"0")},R=Ee||function(M,X,f){var p=M<12?"AM":"PM";return f?p.toLowerCase():p};return j.replace(L,function(M,X){return X||function(f){switch(f){case"YY":return String(P.$y).slice(-2);case"YYYY":return te.s(P.$y,4,"0");case"M":return ye+1;case"MM":return te.s(ye+1,2,"0");case"MMM":return w(E.monthsShort,ye,Me,3);case"MMMM":return w(Me,ye);case"D":return P.$D;case"DD":return te.s(P.$D,2,"0");case"d":return String(P.$W);case"dd":return w(E.weekdaysMin,P.$W,be,2);case"ddd":return w(E.weekdaysShort,P.$W,be,3);case"dddd":return be[P.$W];case"H":return String(ne);case"HH":return te.s(ne,2,"0");case"h":return x(1);case"hh":return x(2);case"a":return R(ne,se,!0);case"A":return R(ne,se,!1);case"m":return String(se);case"mm":return te.s(se,2,"0");case"s":return String(P.$s);case"ss":return te.s(P.$s,2,"0");case"SSS":return te.s(P.$ms,3,"0");case"Z":return z}return null}(M)||z.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(T,P,E){var j,z=this,ne=te.p(P),se=le(T),ye=(se.utcOffset()-this.utcOffset())*s,be=this-se,Me=function(){return te.m(z,se)};switch(ne){case g:j=Me()/12;break;case h:j=Me();break;case d:j=Me()/3;break;case u:j=(be-ye)/6048e5;break;case l:j=(be-ye)/864e5;break;case c:j=be/i;break;case a:j=be/s;break;case o:j=be/n;break;default:j=be}return E?j:te.a(j)},k.daysInMonth=function(){return this.endOf(h).$D},k.$locale=function(){return ce[this.$L]},k.locale=function(T,P){if(!T)return this.$L;var E=this.clone(),j=Se(T,P,!0);return j&&(E.$L=j),E},k.clone=function(){return te.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},V}(),Ze=nt.prototype;return le.prototype=Ze,[["$ms",r],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",g],["$D",y]].forEach(function(V){Ze[V[1]]=function(k){return this.$g(k,V[0],V[1])}}),le.extend=function(V,k){return V.$i||(V(k,nt,le),V.$i=!0),le},le.locale=Se,le.isDayjs=Ne,le.unix=function(V){return le(1e3*V)},le.en=ce[ae],le.Ls=ce,le.p={},le})})(Gd);var Dy=Gd.exports;const FR=Kd(Dy);var qd={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(zd,function(){var n="minute",s=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(r,o,a){var c=o.prototype;a.utc=function(m){var N={date:m,utc:!0,args:arguments};return new o(N)},c.utc=function(m){var N=a(this.toDate(),{locale:this.$L,utc:!0});return m?N.add(this.utcOffset(),n):N},c.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var l=c.parse;c.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),l.call(this,m)};var u=c.init;c.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else u.call(this)};var h=c.utcOffset;c.utcOffset=function(m,N){var L=this.$utils().u;if(L(m))return this.$u?0:L(this.$offset)?h.call(this):this.$offset;if(typeof m=="string"&&(m=function(ae){ae===void 0&&(ae="");var ce=ae.match(s);if(!ce)return null;var Ce=(""+ce[0]).match(i)||["-",0,0],Ne=Ce[0],Se=60*+Ce[1]+ +Ce[2];return Se===0?0:Ne==="+"?Se:-Se}(m),m===null))return this;var F=Math.abs(m)<=16?60*m:m,B=this;if(N)return B.$offset=F,B.$u=m===0,B;if(m!==0){var U=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(B=this.local().add(F+U,n)).$offset=F,B.$x.$localOffset=U}else B=this.utc();return B};var d=c.format;c.format=function(m){var N=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,N)},c.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var g=c.toDate;c.toDate=function(m){return m==="s"&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():g.call(this)};var y=c.diff;c.diff=function(m,N,L){if(m&&this.$u===m.$u)return y.call(this,m,N,L);var F=this.local(),B=a(m).local();return y.call(F,B,N,L)}}})})(qd);var Ly=qd.exports;const $R=Kd(Ly);var Gl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Ts(e)},Ts=function(t){return new Error("Firebase Database ("+Yd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new $y;const d=r<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $y extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xd=function(t){const e=Qd(t);return tc.encodeByteArray(e,!0)},ir=function(t){return Xd(t).replace(/\./g,"")},rr=function(t){try{return tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){return Jd(void 0,t)}function Jd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!By(n)||(t[n]=Jd(t[n],e[n]));return t}function By(t){return t!=="__proto__"}/**
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
 */function Hy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wy=()=>Hy().__FIREBASE_DEFAULTS__,jy=()=>{if(typeof process>"u"||typeof Gl>"u")return;const t=Gl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rr(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return Wy()||jy()||Vy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zd=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zy=t=>{const e=Zd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ef=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},tf=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ky(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ir(JSON.stringify(n)),ir(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function nf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gy(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rf(){return Yd.NODE_ADMIN===!0}function of(){try{return typeof indexedDB=="object"}catch{return!1}}function af(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function qy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="FirebaseError";class Ot extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Yy,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jn.prototype.create)}}class jn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Qy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,s)}}function Qy(t,e){return t.replace(Xy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Xy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){return JSON.parse(t)}function Re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ii(rr(r[0])||""),n=ii(rr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Jy=function(t){const e=cf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Zy=function(t){const e=cf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ps(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ra(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function or(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ql(r)&&ql(o)){if(!ri(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ql(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function tv(t,e){const n=new nv(t,e);return n.subscribe.bind(n)}class nv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=bo),i.error===void 0&&(i.error=bo),i.complete===void 0&&(i.complete=bo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bo(){}function Vr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const rv=1e3,ov=2,av=4*60*60*1e3,cv=.5;function Yl(t,e=rv,n=ov){const s=e*Math.pow(n,t),i=Math.round(cv*s*(Math.random()-.5)*2);return Math.min(av,s+i)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class _t{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const En="[DEFAULT]";/**
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
 */class lv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hv(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uv(t){return t===En?void 0:t}function hv(t){return t.instantiationMode==="EAGER"}/**
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
 */class dv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const fv={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},pv=fe.INFO,gv={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},_v=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=gv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kr{constructor(e){this.name=e,this._logLevel=pv,this._logHandler=_v,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const mv=(t,e)=>e.some(n=>t instanceof n);let Ql,Xl;function yv(){return Ql||(Ql=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vv(){return Xl||(Xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lf=new WeakMap,oa=new WeakMap,uf=new WeakMap,Eo=new WeakMap,ic=new WeakMap;function wv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(on(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lf.set(n,t)}).catch(()=>{}),ic.set(e,t),e}function bv(t){if(oa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});oa.set(t,e)}let aa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ev(t){aa=t(aa)}function Iv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Io(this),e,...n);return uf.set(s,e.sort?e.sort():[e]),on(s)}:vv().includes(t)?function(...e){return t.apply(Io(this),e),on(lf.get(this))}:function(...e){return on(t.apply(Io(this),e))}}function Cv(t){return typeof t=="function"?Iv(t):(t instanceof IDBTransaction&&bv(t),mv(t,yv())?new Proxy(t,aa):t)}function on(t){if(t instanceof IDBRequest)return wv(t);if(Eo.has(t))return Eo.get(t);const e=Cv(t);return e!==t&&(Eo.set(t,e),ic.set(e,t)),e}const Io=t=>ic.get(t);function Tv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=on(o);return s&&o.addEventListener("upgradeneeded",c=>{s(on(o.result),c.oldVersion,c.newVersion,on(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Sv=["get","getKey","getAll","getAllKeys","count"],Rv=["put","add","delete","clear"],Co=new Map;function Jl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Co.get(e))return Co.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Rv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sv.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Co.set(e,r),r}Ev(t=>({...t,get:(e,n,s)=>Jl(e,n)||t.get(e,n,s),has:(e,n)=>!!Jl(e,n)||t.has(e,n)}));/**
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
 */class Av{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Pv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ca="@firebase/app",Zl="0.9.25";/**
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
 */const Ln=new Kr("@firebase/app"),Nv="@firebase/app-compat",Ov="@firebase/analytics-compat",kv="@firebase/analytics",xv="@firebase/app-check-compat",Mv="@firebase/app-check",Dv="@firebase/auth",Lv="@firebase/auth-compat",Fv="@firebase/database",$v="@firebase/database-compat",Uv="@firebase/functions",Bv="@firebase/functions-compat",Hv="@firebase/installations",Wv="@firebase/installations-compat",jv="@firebase/messaging",Vv="@firebase/messaging-compat",zv="@firebase/performance",Kv="@firebase/performance-compat",Gv="@firebase/remote-config",qv="@firebase/remote-config-compat",Yv="@firebase/storage",Qv="@firebase/storage-compat",Xv="@firebase/firestore",Jv="@firebase/firestore-compat",Zv="firebase",ew="10.7.1";/**
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
 */const la="[DEFAULT]",tw={[ca]:"fire-core",[Nv]:"fire-core-compat",[kv]:"fire-analytics",[Ov]:"fire-analytics-compat",[Mv]:"fire-app-check",[xv]:"fire-app-check-compat",[Dv]:"fire-auth",[Lv]:"fire-auth-compat",[Fv]:"fire-rtdb",[$v]:"fire-rtdb-compat",[Uv]:"fire-fn",[Bv]:"fire-fn-compat",[Hv]:"fire-iid",[Wv]:"fire-iid-compat",[jv]:"fire-fcm",[Vv]:"fire-fcm-compat",[zv]:"fire-perf",[Kv]:"fire-perf-compat",[Gv]:"fire-rc",[qv]:"fire-rc-compat",[Yv]:"fire-gcs",[Qv]:"fire-gcs-compat",[Xv]:"fire-fst",[Jv]:"fire-fst-compat","fire-js":"fire-js",[Zv]:"fire-js-all"};/**
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
 */const ar=new Map,ua=new Map;function nw(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function At(t){const e=t.name;if(ua.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;ua.set(e,t);for(const n of ar.values())nw(n,t);return!0}function Vn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const sw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new jn("app","Firebase",sw);/**
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
 */class iw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=ew;function rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:la,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=ef()),!n)throw an.create("no-options");const r=ar.get(i);if(r){if(ri(n,r.options)&&ri(s,r.config))return r;throw an.create("duplicate-app",{appName:i})}const o=new dv(i);for(const c of ua.values())o.addComponent(c);const a=new iw(n,s,o);return ar.set(i,a),a}function rc(t=la){const e=ar.get(t);if(!e&&t===la&&ef())return rw();if(!e)throw an.create("no-app",{appName:t});return e}function it(t,e,n){var s;let i=(s=tw[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(a.join(" "));return}At(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ow="firebase-heartbeat-database",aw=1,oi="firebase-heartbeat-store";let To=null;function hf(){return To||(To=Tv(ow,aw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oi)}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),To}async function cw(t){try{return await(await hf()).transaction(oi).objectStore(oi).get(df(t))}catch(e){if(e instanceof Ot)Ln.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function eu(t,e){try{const s=(await hf()).transaction(oi,"readwrite");await s.objectStore(oi).put(e,df(t)),await s.done}catch(n){if(n instanceof Ot)Ln.warn(n.message);else{const s=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(s.message)}}}function df(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lw=1024,uw=30*24*60*60*1e3;class hw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=uw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tu(),{heartbeatsToSend:s,unsentEntries:i}=dw(this._heartbeatsCache.heartbeats),r=ir(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function tu(){return new Date().toISOString().substring(0,10)}function dw(t,e=lw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),nu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return of()?af().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nu(t){return ir(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pw(t){At(new _t("platform-logger",e=>new Av(e),"PRIVATE")),At(new _t("heartbeat",e=>new hw(e),"PRIVATE")),it(ca,Zl,t),it(ca,Zl,"esm2017"),it("fire-js","")}pw("");var gw="firebase",_w="10.7.1";/**
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
 */it(gw,_w,"app");const mw=(t,e)=>e.some(n=>t instanceof n);let su,iu;function yw(){return su||(su=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return iu||(iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ff=new WeakMap,ha=new WeakMap,pf=new WeakMap,So=new WeakMap,oc=new WeakMap;function ww(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(cn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ff.set(n,t)}).catch(()=>{}),oc.set(e,t),e}function bw(t){if(ha.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ha.set(t,e)}let da={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ew(t){da=t(da)}function Iw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ro(this),e,...n);return pf.set(s,e.sort?e.sort():[e]),cn(s)}:vw().includes(t)?function(...e){return t.apply(Ro(this),e),cn(ff.get(this))}:function(...e){return cn(t.apply(Ro(this),e))}}function Cw(t){return typeof t=="function"?Iw(t):(t instanceof IDBTransaction&&bw(t),mw(t,yw())?new Proxy(t,da):t)}function cn(t){if(t instanceof IDBRequest)return ww(t);if(So.has(t))return So.get(t);const e=Cw(t);return e!==t&&(So.set(t,e),oc.set(e,t)),e}const Ro=t=>oc.get(t);function Tw(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=cn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(cn(o.result),c.oldVersion,c.newVersion,cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Sw=["get","getKey","getAll","getAllKeys","count"],Rw=["put","add","delete","clear"],Ao=new Map;function ru(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Rw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sw.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ao.set(e,r),r}Ew(t=>({...t,get:(e,n,s)=>ru(e,n)||t.get(e,n,s),has:(e,n)=>!!ru(e,n)||t.has(e,n)}));const gf="@firebase/installations",ac="0.6.4";/**
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
 */const _f=1e4,mf=`w:${ac}`,yf="FIS_v2",Aw="https://firebaseinstallations.googleapis.com/v1",Pw=60*60*1e3,Nw="installations",Ow="Installations";/**
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
 */const kw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fn=new jn(Nw,Ow,kw);function vf(t){return t instanceof Ot&&t.code.includes("request-failed")}/**
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
 */function wf({projectId:t}){return`${Aw}/projects/${t}/installations`}function bf(t){return{token:t.token,requestStatus:2,expiresIn:Mw(t.expiresIn),creationTime:Date.now()}}async function Ef(t,e){const s=(await e.json()).error;return Fn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function If({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xw(t,{refreshToken:e}){const n=If(t);return n.append("Authorization",Dw(e)),n}async function Cf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Mw(t){return Number(t.replace("s","000"))}function Dw(t){return`${yf} ${t}`}/**
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
 */async function Lw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=wf(t),i=If(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:yf,appId:t.appId,sdkVersion:mf},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Cf(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:bf(l.authToken)}}else throw await Ef("Create Installation",c)}/**
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
 */function Tf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Fw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const $w=/^[cdef][\w-]{21}$/,fa="";function Uw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Bw(t);return $w.test(n)?n:fa}catch{return fa}}function Bw(t){return Fw(t).substr(0,22)}/**
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
 */function Gr(t){return`${t.appName}!${t.appId}`}/**
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
 */const Sf=new Map;function Rf(t,e){const n=Gr(t);Af(n,e),Hw(n,e)}function Af(t,e){const n=Sf.get(t);if(n)for(const s of n)s(e)}function Hw(t,e){const n=Ww();n&&n.postMessage({key:t,fid:e}),jw()}let Rn=null;function Ww(){return!Rn&&"BroadcastChannel"in self&&(Rn=new BroadcastChannel("[Firebase] FID Change"),Rn.onmessage=t=>{Af(t.data.key,t.data.fid)}),Rn}function jw(){Sf.size===0&&Rn&&(Rn.close(),Rn=null)}/**
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
 */const Vw="firebase-installations-database",zw=1,$n="firebase-installations-store";let Po=null;function cc(){return Po||(Po=Tw(Vw,zw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($n)}}})),Po}async function cr(t,e){const n=Gr(t),i=(await cc()).transaction($n,"readwrite"),r=i.objectStore($n),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Rf(t,e.fid),e}async function Pf(t){const e=Gr(t),s=(await cc()).transaction($n,"readwrite");await s.objectStore($n).delete(e),await s.done}async function qr(t,e){const n=Gr(t),i=(await cc()).transaction($n,"readwrite"),r=i.objectStore($n),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Rf(t,a.fid),a}/**
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
 */async function lc(t){let e;const n=await qr(t.appConfig,s=>{const i=Kw(s),r=Gw(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===fa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Kw(t){const e=t||{fid:Uw(),registrationStatus:0};return Nf(e)}function Gw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=qw(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Yw(t)}:{installationEntry:e}}async function qw(t,e){try{const n=await Lw(t,e);return cr(t.appConfig,n)}catch(n){throw vf(n)&&n.customData.serverCode===409?await Pf(t.appConfig):await cr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Yw(t){let e=await ou(t.appConfig);for(;e.registrationStatus===1;)await Tf(100),e=await ou(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await lc(t);return s||n}return e}function ou(t){return qr(t,e=>{if(!e)throw Fn.create("installation-not-found");return Nf(e)})}function Nf(t){return Qw(t)?{fid:t.fid,registrationStatus:0}:t}function Qw(t){return t.registrationStatus===1&&t.registrationTime+_f<Date.now()}/**
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
 */async function Xw({appConfig:t,heartbeatServiceProvider:e},n){const s=Jw(t,n),i=xw(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:mf,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Cf(()=>fetch(s,a));if(c.ok){const l=await c.json();return bf(l)}else throw await Ef("Generate Auth Token",c)}function Jw(t,{fid:e}){return`${wf(t)}/${e}/authTokens:generate`}/**
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
 */async function uc(t,e=!1){let n;const s=await qr(t.appConfig,r=>{if(!Of(r))throw Fn.create("not-registered");const o=r.authToken;if(!e&&tb(o))return r;if(o.requestStatus===1)return n=Zw(t,e),r;{if(!navigator.onLine)throw Fn.create("app-offline");const a=sb(r);return n=eb(t,a),a}});return n?await n:s.authToken}async function Zw(t,e){let n=await au(t.appConfig);for(;n.authToken.requestStatus===1;)await Tf(100),n=await au(t.appConfig);const s=n.authToken;return s.requestStatus===0?uc(t,e):s}function au(t){return qr(t,e=>{if(!Of(e))throw Fn.create("not-registered");const n=e.authToken;return ib(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eb(t,e){try{const n=await Xw(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await cr(t.appConfig,s),n}catch(n){if(vf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await cr(t.appConfig,s)}throw n}}function Of(t){return t!==void 0&&t.registrationStatus===2}function tb(t){return t.requestStatus===2&&!nb(t)}function nb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Pw}function sb(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ib(t){return t.requestStatus===1&&t.requestTime+_f<Date.now()}/**
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
 */async function rb(t){const e=t,{installationEntry:n,registrationPromise:s}=await lc(e);return s?s.catch(console.error):uc(e).catch(console.error),n.fid}/**
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
 */async function ob(t,e=!1){const n=t;return await ab(n),(await uc(n,e)).token}async function ab(t){const{registrationPromise:e}=await lc(t);e&&await e}/**
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
 */function cb(t){if(!t||!t.options)throw No("App Configuration");if(!t.name)throw No("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw No(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function No(t){return Fn.create("missing-app-config-values",{valueName:t})}/**
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
 */const kf="installations",lb="installations-internal",ub=t=>{const e=t.getProvider("app").getImmediate(),n=cb(e),s=Vn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},hb=t=>{const e=t.getProvider("app").getImmediate(),n=Vn(e,kf).getImmediate();return{getId:()=>rb(n),getToken:i=>ob(n,i)}};function db(){At(new _t(kf,ub,"PUBLIC")),At(new _t(lb,hb,"PRIVATE"))}db();it(gf,ac);it(gf,ac,"esm2017");/**
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
 */const lr="analytics",fb="firebase_id",pb="origin",gb=60*1e3,_b="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ge=new Kr("@firebase/analytics");/**
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
 */const mb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tt=new jn("analytics","Analytics",mb);/**
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
 */function yb(t){if(!t.startsWith(hc)){const e=tt.create("invalid-gtag-resource",{gtagURL:t});return Ge.warn(e.message),""}return t}function xf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function vb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function wb(t,e){const n=vb("firebase-js-sdk-policy",{createScriptURL:yb}),s=document.createElement("script"),i=`${hc}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function bb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Eb(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await xf(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){Ge.error(a)}t("config",i,r)}async function Ib(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await xf(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Ge.error(r)}}function Cb(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await Ib(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await Eb(t,e,n,s,a,c)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){Ge.error(a)}}return i}function Tb(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Cb(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Sb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hc)&&n.src.includes(t))return n;return null}/**
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
 */const Rb=30,Ab=1e3;class Pb{constructor(e={},n=Ab){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Mf=new Pb;function Nb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ob(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Nb(s)},r=_b.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw tt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function kb(t,e=Mf,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw tt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw tt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Db;return setTimeout(async()=>{a.abort()},n!==void 0?n:gb),Df({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Df(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Mf){var r;const{appId:o,measurementId:a}=t;try{await xb(s,e)}catch(c){if(a)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Ob(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Mb(l)){if(i.deleteThrottleMetadata(o),a)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Yl(n,i.intervalMillis,Rb):Yl(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Ge.debug(`Calling attemptFetch again in ${u} millis`),Df(t,h,s,i)}}function xb(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Mb(t){if(!(t instanceof Ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Db{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Lb(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function Fb(){if(of())try{await af()}catch(t){return Ge.warn(tt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ge.warn(tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $b(t,e,n,s,i,r,o){var a;const c=kb(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ge.error(g)),e.push(c);const l=Fb().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);Sb(r)||wb(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[pb]="firebase",d.update=!0,h!=null&&(d[fb]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class Ub{constructor(e){this.app=e}_delete(){return delete zs[this.app.options.appId],Promise.resolve()}}let zs={},cu=[];const lu={};let Oo="dataLayer",Bb="gtag",uu,Lf,hu=!1;function Hb(){const t=[];if(nf()&&t.push("This is a browser extension environment."),qy()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=tt.create("invalid-analytics-context",{errorInfo:e});Ge.warn(n.message)}}function Wb(t,e,n){Hb();const s=t.options.appId;if(!s)throw tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tt.create("no-api-key");if(zs[s]!=null)throw tt.create("already-exists",{id:s});if(!hu){bb(Oo);const{wrappedGtag:r,gtagCore:o}=Tb(zs,cu,lu,Oo,Bb);Lf=r,uu=o,hu=!0}return zs[s]=$b(t,cu,lu,e,uu,Oo,n),new Ub(t)}function UR(t=rc()){t=He(t);const e=Vn(t,lr);return e.isInitialized()?e.getImmediate():jb(t)}function jb(t,e={}){const n=Vn(t,lr);if(n.isInitialized()){const i=n.getImmediate();if(ri(e,n.getOptions()))return i;throw tt.create("already-initialized")}return n.initialize({options:e})}function Vb(t,e,n,s){t=He(t),Lb(Lf,zs[t.app.options.appId],e,n,s).catch(i=>Ge.error(i))}const du="@firebase/analytics",fu="0.10.0";function zb(){At(new _t(lr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Wb(s,i,n)},"PUBLIC")),At(new _t("analytics-internal",t,"PRIVATE")),it(du,fu),it(du,fu,"esm2017");function t(e){try{const n=e.getProvider(lr).getImmediate();return{logEvent:(s,i,r)=>Vb(n,s,i,r)}}catch(n){throw tt.create("interop-component-reg-failed",{reason:n})}}}zb();function dc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ff(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kb=Ff,$f=new jn("auth","Firebase",Ff());/**
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
 */const ur=new Kr("@firebase/auth");function Gb(t,...e){ur.logLevel<=fe.WARN&&ur.warn(`Auth (${Rs}): ${t}`,...e)}function Ki(t,...e){ur.logLevel<=fe.ERROR&&ur.error(`Auth (${Rs}): ${t}`,...e)}/**
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
 */function Pt(t,...e){throw fc(t,...e)}function Tt(t,...e){return fc(t,...e)}function Uf(t,e,n){const s=Object.assign(Object.assign({},Kb()),{[e]:n});return new jn("auth","Firebase",s).create(e,{appName:t.name})}function qb(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Pt(t,"argument-error"),Uf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return $f.create(t,...e)}function q(t,e,...n){if(!t)throw fc(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ki(e),new Error(e)}function Vt(t,e){t||$t(e)}/**
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
 */function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yb(){return pu()==="http:"||pu()==="https:"}function pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yb()||nf()||"connection"in navigator)?navigator.onLine:!0}function Xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=sc()||sf()}get(){return Qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pc(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zb=new vi(3e4,6e4);function gc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function As(t,e,n,s,i={}){return Hf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ss(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Bf.fetch()(Wf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Hf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jb),e);try{const i=new tE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Li(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Li(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Li(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Uf(t,u,l);Pt(t,u)}}catch(i){if(i instanceof Ot)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function eE(t,e,n,s,i={}){const r=await As(t,e,n,s,i);return"mfaPendingCredential"in r&&Pt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Wf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?pc(t.config,i):`${t.config.apiScheme}://${i}`}class tE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Tt(this.auth,"network-request-failed")),Zb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Tt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function nE(t,e){return As(t,"POST","/v1/accounts:delete",e)}async function sE(t,e){return As(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iE(t,e=!1){const n=He(t),s=await n.getIdToken(e),i=_c(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ks(ko(i.auth_time)),issuedAtTime:Ks(ko(i.iat)),expirationTime:Ks(ko(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ko(t){return Number(t)*1e3}function _c(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ki("JWT malformed, contained fewer than 3 sections"),null;try{const i=rr(n);return i?JSON.parse(i):(Ki("Failed to decode base64 JWT payload"),null)}catch(i){return Ki("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rE(t){const e=_c(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ai(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ot&&oE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function oE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ai(t,sE(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?uE(r.providerUserInfo):[],a=lE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cE(t){const e=He(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function uE(t){return t.map(e=>{var{providerId:n}=e,s=dc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function hE(t,e){const n=await Hf(t,{},async()=>{const s=Ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Wf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dE(t,e){return As(t,"POST","/v2/accounts:revokeToken",gc(t,e))}/**
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
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await hE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ci;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function qt(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=dc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ai(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iE(this,e)}reload(){return cE(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ai(this,nE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:U,isAnonymous:ae,providerData:ce,stsTokenManager:Ce}=n;q(B&&Ce,e,"internal-error");const Ne=ci.fromJSON(this.name,Ce);q(typeof B=="string",e,"internal-error"),qt(h,e.name),qt(d,e.name),q(typeof U=="boolean",e,"internal-error"),q(typeof ae=="boolean",e,"internal-error"),qt(g,e.name),qt(y,e.name),qt(m,e.name),qt(N,e.name),qt(L,e.name),qt(F,e.name);const Se=new xn({uid:B,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:ae,photoURL:y,phoneNumber:g,tenantId:m,stsTokenManager:Ne,createdAt:L,lastLoginAt:F});return ce&&Array.isArray(ce)&&(Se.providerData=ce.map(le=>Object.assign({},le))),N&&(Se._redirectEventId=N),Se}static async _fromIdTokenResponse(e,n,s=!1){const i=new ci;i.updateFromServerResponse(n);const r=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await hr(r),r}}/**
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
 */const gu=new Map;function Ut(t){Vt(t instanceof Function,"Expected a class definition");let e=gu.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gu.set(t,e),e)}/**
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
 */class Vf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vf.type="NONE";const _u=Vf;/**
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
 */function Gi(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Gi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Gi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new as(Ut(_u),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Ut(_u);const o=Gi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=xn._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new as(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new as(r,e,s))}}/**
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
 */function mu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yf(e))return"Blackberry";if(Qf(e))return"Webos";if(mc(e))return"Safari";if((e.includes("chrome/")||Kf(e))&&!e.includes("edge/"))return"Chrome";if(qf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zf(t=Be()){return/firefox\//i.test(t)}function mc(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kf(t=Be()){return/crios\//i.test(t)}function Gf(t=Be()){return/iemobile/i.test(t)}function qf(t=Be()){return/android/i.test(t)}function Yf(t=Be()){return/blackberry/i.test(t)}function Qf(t=Be()){return/webos/i.test(t)}function Yr(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fE(t=Be()){var e;return Yr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pE(){return Gy()&&document.documentMode===10}function Xf(t=Be()){return Yr(t)||qf(t)||Qf(t)||Yf(t)||/windows phone/i.test(t)||Gf(t)}function gE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jf(t,e=[]){let n;switch(t){case"Browser":n=mu(Be());break;case"Worker":n=`${mu(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${s}`}/**
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
 */class _E{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function mE(t,e={}){return As(t,"GET","/v2/passwordPolicy",gc(t,e))}/**
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
 */const yE=6;class vE{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class wE{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yu(this),this.idTokenSubscription=new yu(this),this.beforeStateQueue=new _E(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mE(this),n=new vE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await dE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qr(t){return He(t)}class yu{constructor(e){this.auth=e,this.observer=null,this.addObserver=tv(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function bE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function EE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Tt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",bE().appendChild(s)})}function IE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function CE(t,e){const n=Vn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ri(r,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function TE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function SE(t,e,n){const s=Qr(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Zf(e),{host:o,port:a}=RE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||AE()}function Zf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RE(t){const e=Zf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:vu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:vu(o)}}}function vu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ep{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
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
 */async function cs(t,e){return eE(t,"POST","/v1/accounts:signInWithIdp",gc(t,e))}/**
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
 */const PE="http://localhost";class Un extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=dc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Un(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,cs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:PE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ss(n)}return e}}/**
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
 */class yc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wi extends yc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jt extends wi{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
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
 */class Zt extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Un._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zt.credential(n,s)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
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
 */class en extends wi{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
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
 */class tn extends wi{constructor(){super("twitter.com")}static credential(e,n){return Un._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return tn.credential(n,s)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
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
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await xn._fromIdTokenResponse(e,s,i),o=wu(s);return new gs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=wu(s);return new gs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function wu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dr extends Ot{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,dr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new dr(e,n,s,i)}}function tp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?dr._fromErrorAndOperation(t,r,e,s):r})}async function NE(t,e,n=!1){const s=await ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",s)}/**
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
 */async function OE(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ai(t,tp(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=_c(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),gs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Pt(s,"user-mismatch"),r}}/**
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
 */async function kE(t,e,n=!1){const s="signIn",i=await tp(t,s,e),r=await gs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function xE(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function ME(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function BR(t){return He(t).signOut()}const fr="__sak";/**
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
 */class np{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fr,"1"),this.storage.removeItem(fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function DE(){const t=Be();return mc(t)||Yr(t)}const LE=1e3,FE=10;class sp extends np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DE()&&gE(),this.fallbackToPolling=Xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);pE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},LE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sp.type="LOCAL";const $E=sp;/**
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
 */class ip extends np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ip.type="SESSION";const rp=ip;/**
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
 */function UE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Xr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await UE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xr.receivers=[];/**
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
 */function vc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=vc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function St(){return window}function HE(t){St().location.href=t}/**
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
 */function op(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function WE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VE(){return op()?self:null}/**
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
 */const ap="firebaseLocalStorageDb",zE=1,pr="firebaseLocalStorage",cp="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jr(t,e){return t.transaction([pr],e?"readwrite":"readonly").objectStore(pr)}function KE(){const t=indexedDB.deleteDatabase(ap);return new bi(t).toPromise()}function ga(){const t=indexedDB.open(ap,zE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(pr,{keyPath:cp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(pr)?e(s):(s.close(),await KE(),e(await ga()))})})}async function bu(t,e,n){const s=Jr(t,!0).put({[cp]:e,value:n});return new bi(s).toPromise()}async function GE(t,e){const n=Jr(t,!1).get(e),s=await new bi(n).toPromise();return s===void 0?null:s.value}function Eu(t,e){const n=Jr(t,!0).delete(e);return new bi(n).toPromise()}const qE=800,YE=3;class lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ga(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>YE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return op()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xr._getInstance(VE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WE(),!this.activeServiceWorker)return;this.sender=new BE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ga();return await bu(e,fr,"1"),await Eu(e,fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>bu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>GE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Jr(i,!1).getAll();return new bi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lp.type="LOCAL";const QE=lp;new vi(3e4,6e4);/**
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
 */function up(t,e){return e?Ut(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wc extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XE(t){return kE(t.auth,new wc(t),t.bypassAuthState)}function JE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),OE(n,new wc(t),t.bypassAuthState)}async function ZE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),NE(n,new wc(t),t.bypassAuthState)}/**
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
 */class hp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XE;case"linkViaPopup":case"linkViaRedirect":return ZE;case"reauthViaPopup":case"reauthViaRedirect":return JE;default:Pt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eI=new vi(2e3,1e4);async function HR(t,e,n){const s=Qr(t);qb(t,e,yc);const i=up(s,n);return new An(s,"signInViaPopup",e,i).executeNotNull()}class An extends hp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eI.get())};e()}}An.currentPopupAction=null;/**
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
 */const tI="pendingRedirect",qi=new Map;class nI extends hp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=qi.get(this.auth._key());if(!e){try{const s=await sI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}qi.set(this.auth._key(),e)}return this.bypassAuthState||qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sI(t,e){const n=oI(e),s=rI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function iI(t,e){qi.set(t._key(),e)}function rI(t){return Ut(t._redirectPersistence)}function oI(t){return Gi(tI,t.config.apiKey,t.name)}async function aI(t,e,n=!1){const s=Qr(t),i=up(s,e),o=await new nI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const cI=10*60*1e3;class lI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Iu(e))}saveEventToCache(e){this.cachedEventUids.add(Iu(e)),this.lastProcessedEventTime=Date.now()}}function Iu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dp(t);default:return!1}}/**
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
 */async function hI(t,e={}){return As(t,"GET","/v1/projects",e)}/**
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
 */const dI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fI=/^https?/;async function pI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hI(t);for(const n of e)try{if(gI(n))return}catch{}Pt(t,"unauthorized-domain")}function gI(t){const e=pa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fI.test(n))return!1;if(dI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const _I=new vi(3e4,6e4);function Cu(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mI(t){return new Promise((e,n)=>{var s,i,r;function o(){Cu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cu(),n(Tt(t,"network-request-failed"))},timeout:_I.get()})}if(!((i=(s=St().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=St().gapi)===null||r===void 0)&&r.load)o();else{const a=IE("iframefcb");return St()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},EE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Yi=null,e})}let Yi=null;function yI(t){return Yi=Yi||mI(t),Yi}/**
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
 */const vI=new vi(5e3,15e3),wI="__/auth/iframe",bI="emulator/auth/iframe",EI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},II=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CI(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pc(e,bI):`https://${t.config.authDomain}/${wI}`,s={apiKey:e.apiKey,appName:t.name,v:Rs},i=II.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ss(s).slice(1)}`}async function TI(t){const e=await yI(t),n=St().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:CI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=St().setTimeout(()=>{r(o)},vI.get());function c(){St().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const SI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RI=500,AI=600,PI="_blank",NI="http://localhost";class Tu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OI(t,e,n,s=RI,i=AI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},SI),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Be().toLowerCase();n&&(a=Kf(l)?PI:n),zf(l)&&(e=e||NI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(fE(l)&&a!=="_self")return kI(e||"",a),new Tu(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Tu(h)}function kI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const xI="__/auth/handler",MI="emulator/auth/handler",DI=encodeURIComponent("fac");async function Su(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Rs,eventId:i};if(e instanceof yc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ra(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof wi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${DI}=${encodeURIComponent(c)}`:"";return`${LI(t)}?${Ss(a).slice(1)}${l}`}function LI({config:t}){return t.emulator?pc(t,MI):`https://${t.authDomain}/${xI}`}/**
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
 */const xo="webStorageSupport";class FI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rp,this._completeRedirectFn=aI,this._overrideRedirectResult=iI}async _openPopup(e,n,s,i){var r;Vt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Su(e,n,s,pa(),i);return OI(e,o,vc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Su(e,n,s,pa(),i);return HE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await TI(e),s=new lI(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xo,{type:xo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[xo];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xf()||mc()||Yr()}}const $I=FI;var Ru="@firebase/auth",Au="1.5.1";/**
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
 */class UI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HI(t){At(new _t("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jf(t)},l=new wE(s,i,r,c);return TE(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),At(new _t("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(s=>new UI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(Ru,Au,BI(t)),it(Ru,Au,"esm2017")}/**
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
 */const WI=5*60,jI=tf("authIdTokenMaxAge")||WI;let Pu=null;const VI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jI)return;const i=n==null?void 0:n.token;Pu!==i&&(Pu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WR(t=rc()){const e=Vn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CE(t,{popupRedirectResolver:$I,persistence:[QE,$E,rp]}),s=tf("authTokenSyncURL");if(s){const r=VI(s);ME(n,r,()=>r(n.currentUser)),xE(n,o=>r(o))}const i=Zd("auth");return i&&SE(n,`http://${i}`),n}HI("Browser");var Nu={};const Ou="@firebase/database",ku="1.0.2";/**
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
 */let fp="";function zI(t){fp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ii(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KI(e)}}catch{}return new GI},Pn=pp("localStorage"),_a=pp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Kr("@firebase/database"),qI=function(){let t=1;return function(){return t++}}(),gp=function(t){const e=iv(t),n=new ev;n.update(e);const s=n.digest();return tc.encodeByteArray(s)},Ei=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ei.apply(null,s):typeof s=="object"?e+=Re(s):e+=s,e+=" "}return e};let Mn=null,xu=!0;const YI=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ls.logLevel=fe.VERBOSE,Mn=ls.log.bind(ls),e&&_a.set("logging_enabled",!0)):typeof t=="function"?Mn=t:(Mn=null,_a.remove("logging_enabled"))},Fe=function(...t){if(xu===!0&&(xu=!1,Mn===null&&_a.get("logging_enabled")===!0&&YI(!0)),Mn){const e=Ei.apply(null,t);Mn(e)}},Ii=function(t){return function(...e){Fe(t,...e)}},ma=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ei(...t);ls.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ei(...t)}`;throw ls.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+Ei(...t);ls.warn(e)},QI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gn="[MIN_NAME]",_n="[MAX_NAME]",Ps=function(t,e){if(t===e)return 0;if(t===gn||e===_n)return-1;if(e===gn||t===_n)return 1;{const n=Mu(t),s=Mu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},JI=function(t,e){return t===e?0:t<e?-1:1},Ms=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Re(e))},Ec=function(t){if(typeof t!="object"||t===null)return Re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Re(e[s]),n+=":",n+=Ec(t[e[s]]);return n+="}",n},_p=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mp=function(t){S(!bc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ZI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const nC=new RegExp("^-?(0*)\\d{1,10}$"),sC=-2147483648,iC=2147483647,Mu=function(t){if(nC.test(t)){const e=Number(t);if(e>=sC&&e<=iC)return e}return null},Ns=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},rC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class us{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}us.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="5",yp="v",vp="s",wp="r",bp="f",Ep=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ip="ls",Cp="p",ya="ac",Tp="websocket",Sp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function cC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ap(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Tp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Sp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cC(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Uy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo={},Do={};function Cc(t){const e=t.toString();return Mo[e]||(Mo[e]=new lC),Mo[e]}function uC(t,e){const n=t.toString();return Do[n]||(Do[n]=e()),Do[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ns(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="start",dC="close",fC="pLPCommand",pC="pRTLPCB",Pp="id",Np="pw",Op="ser",gC="cb",_C="seg",mC="ts",yC="d",vC="dframe",kp=1870,xp=30,wC=kp-xp,bC=25e3,EC=3e4;class es{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ii(e),this.stats_=Cc(n),this.urlFn=c=>(this.appCheckToken&&(c[ya]=this.appCheckToken),Ap(n,Sp,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EC)),XI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tc((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Du)this.id=a,this.password=c;else if(o===dC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Du]="t",s[Op]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[gC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[yp]=Ic,this.transportSessionId&&(s[vp]=this.transportSessionId),this.lastSessionId&&(s[Ip]=this.lastSessionId),this.applicationId&&(s[Cp]=this.applicationId),this.appCheckToken&&(s[ya]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ep.test(location.hostname)&&(s[wp]=bp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZI()&&!eC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Xd(n),i=_p(s,wC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[vC]="t",s[Pp]=e,s[Np]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qI(),window[fC+this.uniqueCallbackIdentifier]=e,window[pC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pp]=this.myID,e[Np]=this.myPW,e[Op]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xp+s.length<=kp;){const o=this.pendingSegs.shift();s=s+"&"+_C+i+"="+o.seg+"&"+mC+i+"="+o.ts+"&"+yC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(bC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=16384,CC=45e3;let gr=null;typeof MozWebSocket<"u"?gr=MozWebSocket:typeof WebSocket<"u"&&(gr=WebSocket);class ut{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ii(this.connId),this.stats_=Cc(n),this.connURL=ut.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[yp]=Ic,typeof location<"u"&&location.hostname&&Ep.test(location.hostname)&&(o[wp]=bp),n&&(o[vp]=n),s&&(o[Ip]=s),i&&(o[ya]=i),r&&(o[Cp]=r),Ap(e,Tp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let s;rf(),this.mySock=new gr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gr!==null&&!ut.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ii(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_p(n,IC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[es,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ut&&ut.isAvailable();let s=n&&!ut.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ut];else{const i=this.transports_=[];for(const r of li.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);li.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}li.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=6e4,SC=5e3,RC=10*1024,AC=100*1024,Lo="t",Lu="d",PC="s",Fu="r",NC="e",$u="o",Uu="a",Bu="n",Hu="p",OC="h";class kC{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ii("c:"+this.id+":"),this.transportManager_=new li(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lo in e){const n=e[Lo];n===Uu?this.upgradeIfSecondaryHealthy_():n===Fu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$u&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ms("t",e),s=Ms("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ms("t",e),s=Ms("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ms(Lo,e);if(Lu in e){const s=e[Lu];if(n===OC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PC?this.onConnectionShutdown_(s):n===Fu?this.onReset_(s):n===NC?ma("Server Error: "+s):n===$u?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ma("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ic!==s&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Gs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Dp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _r}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=32,ju=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new pe("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mn(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function Lp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $p(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function Ae(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new pe(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=J(t),s=J(e);if(n===null)return e;if(n===s)return je(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sc(t,e){if(mn(t)!==mn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function dt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(mn(t)>mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class MC{constructor(e,n){this.errorPrefix_=n,this.parts_=Fp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zr(this.parts_[s]);Up(this)}}function DC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zr(e),Up(t)}function LC(t){const e=t.parts_.pop();t.byteLength_-=zr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Up(t){if(t.byteLength_>ju)throw new Error(t.errorPrefix_+"has a key path longer than "+ju+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wu+") or object contains a cycle "+In(t))}function In(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends Dp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Rc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=1e3,FC=60*5*1e3,Vu=30*1e3,$C=1.3,UC=3e4,BC="server_kill",zu=3;class Wt extends Mp{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Wt.nextPersistentConnectionId_++,this.log_=Ii("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ds,this.maxReconnectDelay_=FC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!rf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_r.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Re(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new jr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Wt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const s=ps(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Jy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ma("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UC&&(this.reconnectDelay_=Ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$C)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new kC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{qe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(BC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qe(h),c())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ra(this.interruptReasons_)&&(this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ec(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zu&&(this.reconnectDelay_=Vu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fp.replace(/\./g,"-")]=1,sc()?e["framework.cordova"]=1:sf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_r.getInstance().currentlyOnline();return ra(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(gn,e),i=new ee(gn,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;class Bp extends Zr{static get __EMPTY_NODE(){return Fi}static set __EMPTY_NODE(e){Fi=e}compare(e,n){return Ps(e.name,n.name)}isDefinedOn(e){throw Ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(_n,Fi)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Fi)}toString(){return".key"}}const jt=new Bp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ke.RED,this.left=i??Ke.EMPTY_NODE,this.right=r??Ke.EMPTY_NODE}copy(e,n,s,i,r){return new ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class HC{copy(e,n,s,i,r){return this}insert(e,n,s){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $i(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $i(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $i(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $i(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new HC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t,e){return Ps(t.name,e.name)}function Ac(t,e){return Ps(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;function jC(t){va=t}const Hp=function(t){return typeof t=="number"?"number:"+mp(t):"string:"+t},Wp=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else S(t===va||t.isEmpty(),"priority of unexpected type.");S(t===va||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku;class Oe{constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wp(this.priorityNode_)}static set __childrenNodeConstructor(e){Ku=e}static get __childrenNodeConstructor(){return Ku}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:J(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Hp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mp(this.value_):e+=this.value_,this.lazyHash_=gp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(n),r=Oe.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jp,Vp;function VC(t){jp=t}function zC(t){Vp=t}class KC extends Zr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ps(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(_n,new Oe("[PRIORITY-POST]",Vp))}makePost(e,n){const s=jp(e);return new ee(n,new Oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new KC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=Math.log(2);class qC{constructor(e){const n=r=>parseInt(Math.log(r)/GC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mr=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new ke(d,h.node,ke.BLACK,null,null);{const g=parseInt(u/2,10)+c,y=i(c,g),m=i(g+1,l);return h=t[g],d=n?n(h):h,new ke(d,h.node,ke.BLACK,y,m)}},r=function(c){let l=null,u=null,h=t.length;const d=function(y,m){const N=h-y,L=h;h-=y;const F=i(N+1,L),B=t[N],U=n?n(B):B;g(new ke(U,B.node,m,null,F))},g=function(y){l?(l.left=y,l=y):(u=y,l=y)};for(let y=0;y<c.count;++y){const m=c.nextBitIsOne(),N=Math.pow(2,c.count-(y+1));m?d(N,ke.BLACK):(d(N,ke.BLACK),d(N,ke.RED))}return u},o=new qC(t.length),a=r(o);return new Ke(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;const Xn={};class Bt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Xn&&Ie,"ChildrenNode.ts has not been loaded"),Fo=Fo||new Bt({".priority":Xn},{".priority":Ie}),Fo}get(e){const n=ps(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=mr(s,e.getCompare()):a=Xn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Bt(u,l)}addToIndexes(e,n){const s=or(this.indexes_,(i,r)=>{const o=ps(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===Xn)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ee.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),mr(a,o.getCompare())}else return Xn;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new ee(e.name,a))),c.insert(e,e.node)}});return new Bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=or(this.indexes_,i=>{if(i===Xn)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new Bt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class G{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Wp(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ls||(Ls=new G(new Ke(Ac),null,Bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ls:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ls:this.priorityNode_;return new G(i,o,r)}}updateChild(e,n){const s=J(e);if(s===null)return n;{S(J(e)!==".priority"||mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Hp(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ci?-1:0}withIndex(e){if(e===jt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jt?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YC extends G{constructor(){super(new Ke(Ac),G.EMPTY_NODE,Bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Ci=new YC;Object.defineProperties(ee,{MIN:{value:new ee(gn,G.EMPTY_NODE)},MAX:{value:new ee(_n,Ci)}});Bp.__EMPTY_NODE=G.EMPTY_NODE;Oe.__childrenNodeConstructor=G;jC(Ci);zC(Ci);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=!0;function xe(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,xe(e))}if(!(t instanceof Array)&&QC){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=xe(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ee(o,c)))}}),n.length===0)return G.EMPTY_NODE;const r=mr(n,WC,o=>o.name,Ac);if(s){const o=mr(n,Ie.getCompare());return new G(r,xe(e),new Bt({".priority":o},{".priority":Ie}))}else return new G(r,xe(e),Bt.Default)}else{let n=G.EMPTY_NODE;return Xe(t,(s,i)=>{if(kt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}VC(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Zr{constructor(e){super(),this.indexPath_=e,S(!Z(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ps(e.name,n.name):r}makePost(e,n){const s=xe(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Ci);return new ee(_n,e)}toString(){return Fp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC extends Zr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ps(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=xe(e);return new ee(n,s)}toString(){return".value"}}const zp=new XC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){return{type:"value",snapshotNode:t}}function _s(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ui(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ui(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_s(n,s)):o.trackChildChange(hi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(ui(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(hi(i,r,o))}else s.trackChildChange(_s(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.indexedFilter_=new Nc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=di.getStartPost_(e),this.endPost_=di.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ee(n,s))||(s=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new ee(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new di(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ee(n,s))||(s=G.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const c=new ee(n,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,c);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(hi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ui(n,h));const m=a.updateImmediateChild(n,G.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(_s(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(ui(l.name,l.node)),r.trackChildChange(_s(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(l.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_n}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Oc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eT(t){return t.loadsAllData()?new Nc(t.getIndex()):t.hasLimit()?new ZC(t):new di(t)}function tT(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function nT(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function sT(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function wa(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function iT(t,e,n){let s;return t.index_===jt||n?s=wa(t,e,n):s=wa(t,e,gn),s.endBeforeSet_=!0,s}function Gp(t,e){const n=t.copy();return n.index_=e,n}function Gu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===zp?n="$value":t.index_===jt?n="$key":(S(t.index_ instanceof Pc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Mp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ii("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=yr.getListenId_(e,s),a={};this.listens_[o]=a;const c=Gu(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),ps(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=yr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Gu(e._queryParams),s=e._path.toString(),i=new jr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ss(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ii(a.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(){return{value:null,children:new Map}}function qp(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=J(e);t.children.has(s)||t.children.set(s,vr());const i=t.children.get(s);e=_e(e),qp(i,e,n)}}function ba(t,e,n){t.value!==null?n(e,t.value):oT(t,(s,i)=>{const r=new pe(e.toString()+"/"+s);ba(i,r,n)})}function oT(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=10*1e3,cT=30*1e3,lT=5*60*1e3;class uT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new aT(e);const s=Yu+(cT-Yu)*Math.random();Gs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(i,r)=>{r>0&&kt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Gs(this.reportStats_.bind(this),Math.floor(Math.random()*2*lT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function Yp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ft.ACK_USER_WRITE,this.source=Yp()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new wr(oe(),n,this.revert)}}else return S(J(this.path)===e,"operationForChild called for unrelated child."),new wr(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new fi(this.source,oe()):new fi(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ft.OVERWRITE}operationForChild(e){return Z(this.path)?new Bn(this.source,oe(),this.snap.getImmediateChild(e)):new Bn(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ft.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new Bn(this.source,oe(),n.value):new pi(this.source,oe(),n)}else return S(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pi(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dT(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(JC(o.childName,o.snapshotNode))}),Fs(t,i,"child_removed",e,s,n),Fs(t,i,"child_added",e,s,n),Fs(t,i,"child_moved",r,s,n),Fs(t,i,"child_changed",e,s,n),Fs(t,i,"value",e,s,n),i}function Fs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>pT(t,a,c)),o.forEach(a=>{const c=fT(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function fT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function pT(t,e,n){if(e.childName==null||n.childName==null)throw Ts("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e){return{eventCache:t,serverCache:e}}function qs(t,e,n,s){return eo(new yn(e,n,s),t.serverCache)}function Qp(t,e,n,s){return eo(t.eventCache,new yn(e,n,s))}function br(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;const gT=()=>($o||($o=new Ke(JI)),$o);class ve{constructor(e,n=gT()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return Xe(e,(s,i)=>{n=n.set(new pe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(Z(e))return null;{const s=J(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(_e(e),n);return r!=null?{path:Ae(new pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new ve(null)}}set(e,n){if(Z(e))return new ve(n,this.children);{const s=J(e),r=(this.children.get(s)||new ve(null)).set(_e(e),n),o=this.children.insert(s,r);return new ve(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const i=s.remove(_e(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ve(null):new ve(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(Z(e))return n;{const s=J(e),r=(this.children.get(s)||new ve(null)).setTree(_e(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ve(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ae(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Z(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),Ae(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(Z(e))return this;{this.value&&s(n,this.value);const i=J(e),r=this.children.get(i);return r?r.foreachOnPath_(_e(e),Ae(n,i),s):new ve(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ae(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new ve(null))}}function Ys(t,e,n){if(Z(e))return new gt(new ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new gt(t.writeTree_.set(i,r))}else{const i=new ve(n),r=t.writeTree_.setTree(e,i);return new gt(r)}}}function Qu(t,e,n){let s=t;return Xe(n,(i,r)=>{s=Ys(s,Ae(e,i),r)}),s}function Xu(t,e){if(Z(e))return gt.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new gt(n)}}function Ea(t,e){return zn(t,e)!=null}function zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Ju(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function ln(t,e){if(Z(e))return t;{const n=zn(t,e);return n!=null?new gt(new ve(n)):new gt(t.writeTree_.subtree(e))}}function Ia(t){return t.writeTree_.isEmpty()}function ms(t,e){return Xp(oe(),t.writeTree_,e)}function Xp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Xp(Ae(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ae(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e){return tg(e,t)}function _T(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ys(t.visibleWrites,e,n)),t.lastWriteId=s}function mT(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function yT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&vT(a,s.path)?i=!1:dt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return wT(t),!0;if(s.snap)t.visibleWrites=Xu(t.visibleWrites,s.path);else{const a=s.children;Xe(a,c=>{t.visibleWrites=Xu(t.visibleWrites,Ae(s.path,c))})}return!0}else return!1}function vT(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(Ae(t.path,n),e))return!0;return!1}function wT(t){t.visibleWrites=Jp(t.allWrites,bT,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function bT(t){return t.visible}function Jp(t,e,n){let s=gt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)dt(n,o)?(a=je(n,o),s=Ys(s,a,r.snap)):dt(o,n)&&(a=je(o,n),s=Ys(s,oe(),r.snap.getChild(a)));else if(r.children){if(dt(n,o))a=je(n,o),s=Qu(s,a,r.children);else if(dt(o,n))if(a=je(o,n),Z(a))s=Qu(s,oe(),r.children);else{const c=ps(r.children,J(a));if(c){const l=c.getChild(_e(a));s=Ys(s,oe(),l)}}}else throw Ts("WriteRecord should have .snap or .children")}}return s}function Zp(t,e,n,s,i){if(!s&&!i){const r=zn(t.visibleWrites,e);if(r!=null)return r;{const o=ln(t.visibleWrites,e);if(Ia(o))return n;if(n==null&&!Ea(o,oe()))return null;{const a=n||G.EMPTY_NODE;return ms(o,a)}}}else{const r=ln(t.visibleWrites,e);if(!i&&Ia(r))return n;if(!i&&n==null&&!Ea(r,oe()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(dt(l.path,e)||dt(e,l.path))},a=Jp(t.allWrites,o,e),c=n||G.EMPTY_NODE;return ms(a,c)}}}function ET(t,e,n){let s=G.EMPTY_NODE;const i=zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ln(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const c=ms(ln(r,new pe(o)),a);s=s.updateImmediateChild(o,c)}),Ju(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ln(t.visibleWrites,e);return Ju(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function IT(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ae(e,n);if(Ea(t.visibleWrites,r))return null;{const o=ln(t.visibleWrites,r);return Ia(o)?i.getChild(n):ms(o,i.getChild(n))}}function CT(t,e,n,s){const i=Ae(e,n),r=zn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ln(t.visibleWrites,i);return ms(o,s.getNode().getImmediateChild(n))}else return null}function TT(t,e){return zn(t.visibleWrites,e)}function ST(t,e,n,s,i,r,o){let a;const c=ln(t.visibleWrites,e),l=zn(c,oe());if(l!=null)a=l;else if(n!=null)a=ms(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function RT(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function Er(t,e,n,s){return Zp(t.writeTree,t.treePath,e,n,s)}function Mc(t,e){return ET(t.writeTree,t.treePath,e)}function Zu(t,e,n,s){return IT(t.writeTree,t.treePath,e,n,s)}function Ir(t,e){return TT(t.writeTree,Ae(t.treePath,e))}function AT(t,e,n,s,i,r){return ST(t.writeTree,t.treePath,e,n,s,i,r)}function Dc(t,e,n){return CT(t.writeTree,t.treePath,e,n)}function eg(t,e){return tg(Ae(t.treePath,e),t.writeTree)}function tg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,hi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ui(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,_s(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,hi(s,e.snapshotNode,i.oldSnap));else throw Ts("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ng=new NT;class Lc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hn(this.viewCache_),r=AT(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t){return{filter:t}}function kT(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xT(t,e,n,s,i){const r=new PT;let o,a;if(n.type===ft.OVERWRITE){const l=n;l.source.fromUser?o=Ca(t,e,l.path,l.snap,s,i,r):(S(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Z(l.path),o=Cr(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===ft.MERGE){const l=n;l.source.fromUser?o=DT(t,e,l.path,l.children,s,i,r):(S(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ta(t,e,l.path,l.children,s,i,a,r))}else if(n.type===ft.ACK_USER_WRITE){const l=n;l.revert?o=$T(t,e,l.path,s,i,r):o=LT(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===ft.LISTEN_COMPLETE)o=FT(t,e,n.path,s,r);else throw Ts("Unknown operation type: "+n.type);const c=r.getChanges();return MT(e,o,c),{viewCache:o,changes:c}}function MT(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=br(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Kp(br(e)))}}function sg(t,e,n,s,i,r){const o=e.eventCache;if(Ir(s,n)!=null)return e;{let a,c;if(Z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Hn(e),u=l instanceof G?l:G.EMPTY_NODE,h=Mc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Er(s,Hn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=J(n);if(l===".priority"){S(mn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Zu(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=_e(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Zu(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Dc(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return qs(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function Cr(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),g,null)}else{const g=J(n);if(!c.isCompleteForPath(n)&&mn(n)>1)return e;const y=_e(n),N=c.getNode().getImmediateChild(g).updateChild(y,s);g===".priority"?l=u.updatePriority(c.getNode(),N):l=u.updateChild(c.getNode(),g,N,y,ng,null)}const h=Qp(e,l,c.isFullyInitialized()||Z(n),u.filtersNodes()),d=new Lc(i,h,r);return sg(t,h,n,i,d,a)}function Ca(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new Lc(i,e,r);if(Z(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=qs(e,l,!0,t.filter.filtersNodes());else{const h=J(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=qs(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=_e(n),g=a.getNode().getImmediateChild(h);let y;if(Z(d))y=s;else{const m=u.getCompleteChild(h);m!=null?Lp(d)===".priority"&&m.getChild($p(d)).isEmpty()?y=m:y=m.updateChild(d,s):y=G.EMPTY_NODE}if(g.equals(y))c=e;else{const m=t.filter.updateChild(a.getNode(),h,y,d,u,o);c=qs(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function eh(t,e){return t.eventCache.isCompleteForChild(e)}function DT(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Ae(n,c);eh(e,J(u))&&(a=Ca(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Ae(n,c);eh(e,J(u))||(a=Ca(t,a,u,l,i,r,o))}),a}function th(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ta(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;Z(n)?l=s:l=new ve(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),y=th(t,g,d);c=Cr(t,c,new pe(h),y,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const y=e.serverCache.getNode().getImmediateChild(h),m=th(t,y,d);c=Cr(t,c,new pe(h),m,i,r,o,a)}}),c}function LT(t,e,n,s,i,r,o){if(Ir(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Cr(t,e,n,c.getNode().getChild(n),i,r,a,o);if(Z(n)){let l=new ve(null);return c.getNode().forEachChild(jt,(u,h)=>{l=l.set(new pe(u),h)}),Ta(t,e,n,l,i,r,a,o)}else return e}else{let l=new ve(null);return s.foreach((u,h)=>{const d=Ae(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Ta(t,e,n,l,i,r,a,o)}}function FT(t,e,n,s,i){const r=e.serverCache,o=Qp(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return sg(t,o,n,s,ng,i)}function $T(t,e,n,s,i,r){let o;if(Ir(s,n)!=null)return e;{const a=new Lc(s,e,i),c=e.eventCache.getNode();let l;if(Z(n)||J(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Er(s,Hn(e));else{const h=e.serverCache.getNode();S(h instanceof G,"serverChildren would be complete if leaf node"),u=Mc(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=J(n);let h=Dc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,_e(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,G.EMPTY_NODE,_e(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Er(s,Hn(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ir(s,oe())!=null,qs(e,l,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Nc(s.getIndex()),r=eT(s);this.processor_=OT(r);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(G.EMPTY_NODE,a.getNode(),null),u=new yn(c,o.isFullyInitialized(),i.filtersNodes()),h=new yn(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=eo(h,u),this.eventGenerator_=new hT(this.query_)}get query(){return this.query_}}function BT(t){return t.viewCache_.serverCache.getNode()}function HT(t){return br(t.viewCache_)}function WT(t,e){const n=Hn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function nh(t){return t.eventRegistrations_.length===0}function jT(t,e){t.eventRegistrations_.push(e)}function sh(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ih(t,e,n,s){e.type===ft.MERGE&&e.source.queryId!==null&&(S(Hn(t.viewCache_),"We should always have a full cache before handling merges"),S(br(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=xT(t.processor_,i,e,n,s);return kT(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ig(t,r.changes,r.viewCache.eventCache.getNode(),null)}function VT(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(_s(r,o))}),n.isFullyInitialized()&&s.push(Kp(n.getNode())),ig(t,s,n.getNode(),e)}function ig(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return dT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;class rg{constructor(){this.views=new Map}}function zT(t){S(!Tr,"__referenceConstructor has already been defined"),Tr=t}function KT(){return S(Tr,"Reference.ts has not been loaded"),Tr}function GT(t){return t.views.size===0}function Fc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),ih(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ih(o,e,n,s));return r}}function og(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Er(n,i?s:null),c=!1;a?c=!0:s instanceof G?(a=Mc(n,s),c=!1):(a=G.EMPTY_NODE,c=!1);const l=eo(new yn(a,c,!1),new yn(s,i,!1));return new UT(e,l)}return o}function qT(t,e,n,s,i,r){const o=og(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jT(o,n),VT(o,n)}function YT(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=vn(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(sh(l,n,s)),nh(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(sh(c,n,s)),nh(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!vn(t)&&r.push(new(KT())(e._repo,e._path)),{removed:r,events:o}}function ag(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function un(t,e){let n=null;for(const s of t.views.values())n=n||WT(s,e);return n}function cg(t,e){if(e._queryParams.loadsAllData())return no(t);{const s=e._queryIdentifier;return t.views.get(s)}}function lg(t,e){return cg(t,e)!=null}function vn(t){return no(t)!=null}function no(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr;function QT(t){S(!Sr,"__referenceConstructor has already been defined"),Sr=t}function XT(){return S(Sr,"Reference.ts has not been loaded"),Sr}let JT=1;class rh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=RT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ug(t,e,n,s,i){return _T(t.pendingWriteTree_,e,n,s,i),i?Si(t,new Bn(Yp(),e,n)):[]}function Nn(t,e,n=!1){const s=mT(t.pendingWriteTree_,e);if(yT(t.pendingWriteTree_,e)){let r=new ve(null);return s.snap!=null?r=r.set(oe(),!0):Xe(s.children,o=>{r=r.set(new pe(o),!0)}),Si(t,new wr(s.path,r,n))}else return[]}function Ti(t,e,n){return Si(t,new Bn(kc(),e,n))}function ZT(t,e,n){const s=ve.fromObject(n);return Si(t,new pi(kc(),e,s))}function eS(t,e){return Si(t,new fi(kc(),e))}function tS(t,e,n){const s=Uc(t,n);if(s){const i=Bc(s),r=i.path,o=i.queryId,a=je(r,e),c=new fi(xc(o),a);return Hc(t,r,c)}else return[]}function Rr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||lg(o,e))){const c=YT(o,e,n,s);GT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>vn(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=iS(d);for(let y=0;y<g.length;++y){const m=g[y],N=m.query,L=pg(t,m);t.listenProvider_.startListening(Qs(N),gi(t,N),L.hashFn,L.onComplete)}}}!h&&l.length>0&&!s&&(u?t.listenProvider_.stopListening(Qs(e),null):l.forEach(d=>{const g=t.queryToTagMap.get(so(d));t.listenProvider_.stopListening(Qs(d),g)}))}rS(t,l)}return a}function hg(t,e,n,s){const i=Uc(t,s);if(i!=null){const r=Bc(i),o=r.path,a=r.queryId,c=je(o,e),l=new Bn(xc(a),c,n);return Hc(t,o,l)}else return[]}function nS(t,e,n,s){const i=Uc(t,s);if(i){const r=Bc(i),o=r.path,a=r.queryId,c=je(o,e),l=ve.fromObject(n),u=new pi(xc(a),c,l);return Hc(t,o,u)}else return[]}function Sa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const y=je(d,i);r=r||un(g,y),o=o||vn(g)});let a=t.syncPointTree_.get(i);a?(o=o||vn(a),r=r||un(a,oe())):(a=new rg,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const m=un(y,oe());m&&(r=r.updateImmediateChild(g,m))}));const l=lg(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=so(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=oS();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=to(t.pendingWriteTree_,i);let h=qT(a,e,n,u,r,c);if(!l&&!o&&!s){const d=cg(a,e);h=h.concat(aS(t,e,d))}return h}function $c(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=je(o,e),l=un(a,c);if(l)return l});return Zp(i,e,r,n,!0)}function sS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(l,u)=>{const h=je(l,n);s=s||un(u,h)});let i=t.syncPointTree_.get(n);i?s=s||un(i,oe()):(i=new rg,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new yn(s,!0,!1):null,a=to(t.pendingWriteTree_,e._path),c=og(i,e,a,r?o.getNode():G.EMPTY_NODE,r);return HT(c)}function Si(t,e){return dg(e,t.syncPointTree_,null,to(t.pendingWriteTree_,oe()))}function dg(t,e,n,s){if(Z(t.path))return fg(t,e,n,s);{const i=e.get(oe());n==null&&i!=null&&(n=un(i,oe()));let r=[];const o=J(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=eg(s,o);r=r.concat(dg(a,c,l,u))}return i&&(r=r.concat(Fc(i,t,s,n))),r}}function fg(t,e,n,s){const i=e.get(oe());n==null&&i!=null&&(n=un(i,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=eg(s,o),u=t.operationForChild(o);u&&(r=r.concat(fg(u,a,c,l)))}),i&&(r=r.concat(Fc(i,t,s,n))),r}function pg(t,e){const n=e.query,s=gi(t,n);return{hashFn:()=>(BT(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?tS(t,n._path,s):eS(t,n._path);{const r=tC(i,n);return Rr(t,n,null,r)}}}}function gi(t,e){const n=so(e);return t.queryToTagMap.get(n)}function so(t){return t._path.toString()+"$"+t._queryIdentifier}function Uc(t,e){return t.tagToQueryMap.get(e)}function Bc(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function Hc(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=to(t.pendingWriteTree_,e);return Fc(s,n,i,null)}function iS(t){return t.fold((e,n,s)=>{if(n&&vn(n))return[no(n)];{let i=[];return n&&(i=ag(n)),Xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Qs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(XT())(t._repo,t._path):t}function rS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=so(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function oS(){return JT++}function aS(t,e,n){const s=e._path,i=gi(t,e),r=pg(t,n),o=t.listenProvider_.startListening(Qs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)S(!vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!Z(l)&&u&&vn(u))return[no(u).query];{let d=[];return u&&(d=d.concat(ag(u).map(g=>g.query))),Xe(h,(g,y)=>{d=d.concat(y)}),d}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(Qs(u),gi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wc(n)}node(){return this.node_}}class jc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ae(this.path_,e);return new jc(this.syncTree_,n)}node(){return $c(this.syncTree_,this.path_)}}const cS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},oh=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uS(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},uS=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},hS=function(t,e,n,s){return Vc(e,new jc(n,t),s)},gg=function(t,e,n){return Vc(t,new Wc(e),n)};function Vc(t,e,n){const s=t.getPriority().val(),i=oh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=oh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Oe(a,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Oe(i))),o.forEachChild(Ie,(a,c)=>{const l=Vc(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Kc(t,e){let n=e instanceof pe?e:new pe(e),s=t,i=J(n);for(;i!==null;){const r=ps(s.node.children,i)||{children:{},childCount:0};s=new zc(i,s,r),n=_e(n),i=J(n)}return s}function Os(t){return t.node.value}function _g(t,e){t.node.value=e,Ra(t)}function mg(t){return t.node.childCount>0}function dS(t){return Os(t)===void 0&&!mg(t)}function io(t,e){Xe(t.node.children,(n,s)=>{e(new zc(n,t,s))})}function yg(t,e,n,s){n&&!s&&e(t),io(t,i=>{yg(i,e,!0,s)}),n&&s&&e(t)}function fS(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ri(t){return new pe(t.parent===null?t.name:Ri(t.parent)+"/"+t.name)}function Ra(t){t.parent!==null&&pS(t.parent,t.name,t)}function pS(t,e,n){const s=dS(n),i=kt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ra(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ra(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=/[\[\].#$\/\u0000-\u001F\u007F]/,_S=/[\[\].#$\u0000-\u001F\u007F]/,Uo=10*1024*1024,Gc=function(t){return typeof t=="string"&&t.length!==0&&!gS.test(t)},vg=function(t){return typeof t=="string"&&t.length!==0&&!_S.test(t)},mS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vg(t)},ah=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!bc(t)||t&&typeof t=="object"&&kt(t,".sv")},ro=function(t,e,n,s){s&&e===void 0||qc(Vr(t,"value"),e,n)},qc=function(t,e,n){const s=n instanceof pe?new MC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+In(s));if(typeof e=="function")throw new Error(t+"contains a function "+In(s)+" with contents = "+e.toString());if(bc(e))throw new Error(t+"contains "+e.toString()+" "+In(s));if(typeof e=="string"&&e.length>Uo/3&&zr(e)>Uo)throw new Error(t+"contains a string greater than "+Uo+" utf8 bytes "+In(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Gc(o)))throw new Error(t+" contains an invalid key ("+o+") "+In(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DC(s,o),qc(t,a,s),LC(s)}),i&&r)throw new Error(t+' contains ".value" child '+In(s)+" in addition to actual children.")}},Yc=function(t,e,n,s){if(!(s&&n===void 0)&&!Gc(n))throw new Error(Vr(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Qc=function(t,e,n,s){if(!(s&&n===void 0)&&!vg(n))throw new Error(Vr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qc(t,e,n,s)},vS=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},wS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mS(n))throw new Error(Vr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xc(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Sc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function wg(t,e,n){Xc(t,n),bg(t,s=>Sc(s,e))}function Nt(t,e,n){Xc(t,n),bg(t,s=>dt(s,e)||dt(e,s))}function bg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ES(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ES(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Mn&&Fe("event: "+n.toString()),Ns(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="repo_interrupt",CS=25;class TS{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vr(),this.transactionQueueTree_=new zc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SS(t,e,n){if(t.stats_=Cc(t.repoInfo_),t.forceRestClient_||rC())t.server_=new yr(t.repoInfo_,(s,i,r,o)=>{ch(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>lh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(s,i,r,o)=>{ch(t,s,i,r,o)},s=>{lh(t,s)},s=>{AS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=uC(t.repoInfo_,()=>new uT(t.stats_,t.server_)),t.infoData_=new rT,t.infoSyncTree_=new rh({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Ti(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zc(t,"connected",!1),t.serverSyncTree_=new rh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Nt(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function RS(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jc(t){return cS({timestamp:RS(t)})}function ch(t,e,n,s,i){t.dataUpdateCount++;const r=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=or(n,l=>xe(l));o=nS(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=hg(t.serverSyncTree_,r,c,i)}else if(s){const c=or(n,l=>xe(l));o=ZT(t.serverSyncTree_,r,c)}else{const c=xe(n);o=Ti(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=ao(t,r)),Nt(t.eventQueue_,a,o)}function lh(t,e){Zc(t,"connected",e),e===!1&&OS(t)}function AS(t,e){Xe(e,(n,s)=>{Zc(t,n,s)})}function Zc(t,e,n){const s=new pe("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=Ti(t.infoSyncTree_,s,i);Nt(t.eventQueue_,s,r)}function Eg(t){return t.nextWriteId_++}function PS(t,e,n){const s=sS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());Sa(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ti(t.serverSyncTree_,e._path,r);else{const a=gi(t.serverSyncTree_,e);o=hg(t.serverSyncTree_,e._path,r,a)}return Nt(t.eventQueue_,e._path,o),Rr(t.serverSyncTree_,e,n,null,!0),r},i=>(oo(t,"get for query "+Re(e)+" failed: "+i),Promise.reject(new Error(i))))}function NS(t,e,n,s,i){oo(t,"set",{path:e.toString(),value:n,priority:s});const r=Jc(t),o=xe(n,s),a=$c(t.serverSyncTree_,e),c=gg(o,a,r),l=Eg(t),u=ug(t.serverSyncTree_,e,c,l,!0);Xc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const y=d==="ok";y||qe("set at "+e+" failed: "+d);const m=Nn(t.serverSyncTree_,l,!y);Nt(t.eventQueue_,e,m),MS(t,i,d,g)});const h=Rg(t,e);ao(t,h),Nt(t.eventQueue_,h,[])}function OS(t){oo(t,"onDisconnectEvents");const e=Jc(t),n=vr();ba(t.onDisconnect_,oe(),(i,r)=>{const o=hS(i,r,t.serverSyncTree_,e);qp(n,i,o)});let s=[];ba(n,oe(),(i,r)=>{s=s.concat(Ti(t.serverSyncTree_,i,r));const o=Rg(t,i);ao(t,o)}),t.onDisconnect_=vr(),Nt(t.eventQueue_,oe(),s)}function kS(t,e,n){let s;J(e._path)===".info"?s=Sa(t.infoSyncTree_,e,n):s=Sa(t.serverSyncTree_,e,n),wg(t.eventQueue_,e._path,s)}function uh(t,e,n){let s;J(e._path)===".info"?s=Rr(t.infoSyncTree_,e,n):s=Rr(t.serverSyncTree_,e,n),wg(t.eventQueue_,e._path,s)}function xS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(IS)}function oo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function MS(t,e,n,s){e&&Ns(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ig(t,e,n){return $c(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function el(t,e=t.transactionQueueTree_){if(e||co(t,e),Os(e)){const n=Tg(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&DS(t,Ri(e),n)}else mg(e)&&io(e,n=>{el(t,n)})}function DS(t,e,n){const s=n.map(l=>l.currentWriteId),i=Ig(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{oo(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Nn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();co(t,Kc(t.transactionQueueTree_,e)),el(t,t.transactionQueueTree_),Nt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ns(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qe("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}ao(t,e)}},o)}function ao(t,e){const n=Cg(t,e),s=Ri(n),i=Tg(t,n);return LS(t,i,s),s}function LS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=je(n,c.path);let u=!1,h;if(S(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Nn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=CS)u=!0,h="maxretry",i=i.concat(Nn(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Ig(t,c.path,o);c.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){qc("transaction failed: Data returned ",g,c.path);let y=xe(g);typeof g=="object"&&g!=null&&kt(g,".priority")||(y=y.updatePriority(d.getPriority()));const N=c.currentWriteId,L=Jc(t),F=gg(y,d,L);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=F,c.currentWriteId=Eg(t),o.splice(o.indexOf(N),1),i=i.concat(ug(t.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(Nn(t.serverSyncTree_,c.currentWriteId,!0))}Nt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}co(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ns(s[a]);el(t,t.transactionQueueTree_)}function Cg(t,e){let n,s=t.transactionQueueTree_;for(n=J(e);n!==null&&Os(s)===void 0;)s=Kc(s,n),e=_e(e),n=J(e);return s}function Tg(t,e){const n=[];return Sg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Sg(t,e,n){const s=Os(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);io(e,i=>{Sg(t,i,n)})}function co(t,e){const n=Os(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_g(e,n.length>0?n:void 0)}io(e,s=>{co(t,s)})}function Rg(t,e){const n=Ri(Cg(t,e)),s=Kc(t.transactionQueueTree_,e);return fS(s,i=>{Bo(t,i)}),Bo(t,s),yg(s,i=>{Bo(t,i)}),n}function Bo(t,e){const n=Os(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_g(e,void 0):n.length=r+1,Nt(t.eventQueue_,Ri(e),i);for(let o=0;o<s.length;o++)Ns(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $S(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const hh=function(t,e){const n=US(t),s=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new pe(n.pathString)}},US=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=FS(t.substring(u,h)));const d=$S(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const g=e.slice(0,l);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class Pg{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xt{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Z(this._path)?null:Lp(this._path)}get ref(){return new Mt(this._repo,this._path)}get _queryIdentifier(){const e=qu(this._queryParams),n=Ec(e);return n==="{}"?"default":n}get _queryObject(){return qu(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof xt))return!1;const n=this._repo===e._repo,s=Sc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xC(this._path)}}function Og(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Ai(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===jt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==gn)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==_n)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Ie){if(e!=null&&!ah(e)||n!=null&&!ah(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof Pc||t.getIndex()===zp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function tl(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Mt extends xt{constructor(e,n){super(e,n,new Oc,!1)}get parent(){const e=$p(this._path);return e===null?null:new Mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ys{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=Ar(this.ref,e);return new ys(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ys(i,Ar(this.ref,s),Ie)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jR(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?Ar(t._root,e):t._root}function Ar(t,e){return t=He(t),J(t._path)===null?yS("child","path",e,!1):Qc("child","path",e,!1),new Mt(t._repo,Ae(t._path,e))}function VR(t,e){t=He(t),vS("set",t._path),ro("set",e,t._path,!1);const n=new jr;return NS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function zR(t){t=He(t);const e=new Ng(()=>{}),n=new lo(e);return PS(t._repo,t,n).then(s=>new ys(s,new Mt(t._repo,t._path),t._queryParams.getIndex()))}class lo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Ag("value",this,new ys(e.snapshotNode,new Mt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pg(this,e,n):null}matches(e){return e instanceof lo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class nl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pg(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const s=Ar(new Mt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ag(e.type,this,new ys(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof nl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function BS(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,l=(u,h)=>{uh(t._repo,t,a),c(u,h)};l.userCallback=n.userCallback,l.context=n.context,n=l}const o=new Ng(n,r||void 0),a=e==="value"?new lo(o):new nl(e,o);return kS(t._repo,t,a),()=>uh(t._repo,t,a)}function KR(t,e,n,s){return BS(t,"value",e,n,s)}class Kn{}class HS extends Kn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){ro("endAt",this._value,e._path,!0);const n=wa(e._queryParams,this._value,this._key);if(tl(n),Ai(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function GR(t,e){return Yc("endAt","key",e,!0),new HS(t,e)}class WS extends Kn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){ro("endBefore",this._value,e._path,!1);const n=iT(e._queryParams,this._value,this._key);if(tl(n),Ai(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function qR(t,e){return Yc("endBefore","key",e,!0),new WS(t,e)}class jS extends Kn{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){ro("startAt",this._value,e._path,!0);const n=sT(e._queryParams,this._value,this._key);if(tl(n),Ai(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new xt(e._repo,e._path,n,e._orderByCalled)}}function YR(t=null,e){return Yc("startAt","key",e,!0),new jS(t,e)}class VS extends Kn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new xt(e._repo,e._path,tT(e._queryParams,this._limit),e._orderByCalled)}}function QR(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new VS(t)}class zS extends Kn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new xt(e._repo,e._path,nT(e._queryParams,this._limit),e._orderByCalled)}}function XR(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new zS(t)}class KS extends Kn{constructor(e){super(),this._path=e}_apply(e){Og(e,"orderByChild");const n=new pe(this._path);if(Z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Pc(n),i=Gp(e._queryParams,s);return Ai(i),new xt(e._repo,e._path,i,!0)}}function JR(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Qc("orderByChild","path",t,!1),new KS(t)}class GS extends Kn{_apply(e){Og(e,"orderByKey");const n=Gp(e._queryParams,jt);return Ai(n),new xt(e._repo,e._path,n,!0)}}function ZR(){return new GS}function eA(t,...e){let n=He(t);for(const s of e)n=s._apply(n);return n}zT(Mt);QT(Mt);/**
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
 */const qS="FIREBASE_DATABASE_EMULATOR_HOST",Aa={};let YS=!1;function QS(t,e,n,s){t.repoInfo_=new Rp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function XS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hh(r,i),a=o.repoInfo,c,l;typeof process<"u"&&Nu&&(l=Nu[qS]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=hh(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new us(us.OWNER):new aC(t.name,t.options,e);wS("Invalid Firebase Database URL",o),Z(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ZS(a,t,u,new oC(t.name,n));return new e0(h,t)}function JS(t,e){const n=Aa[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xS(t),delete n[t.key]}function ZS(t,e,n,s){let i=Aa[e.name];i||(i={},Aa[e.name]=i);let r=i[t.toURLString()];return r&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new TS(t,YS,n,s),i[t.toURLString()]=r,r}class e0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mt(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function tA(t=rc(),e){const n=Vn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=zy("database");s&&t0(n,...s)}return n}function t0(t,e,n,s={}){t=He(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new us(us.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Ky(s.mockUserToken,t.app.options.projectId);r=new us(o)}QS(i,e,n,r)}/**
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
 */function n0(t){zI(Rs),At(new _t("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return XS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),it(Ou,ku,t),it(Ou,ku,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};n0();/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zn=typeof window<"u";function s0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ho(t,e){const n={};for(const s in e){const i=e[s];n[s]=mt(i)?i.map(t):t(i)}return n}const Xs=()=>{},mt=Array.isArray,i0=/\/$/,r0=t=>t.replace(i0,"");function Wo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=l0(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function o0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function a0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&vs(e.matched[s],n.matched[i])&&kg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function kg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!c0(t[n],e[n]))return!1;return!0}function c0(t,e){return mt(t)?fh(t,e):mt(e)?fh(e,t):t===e}function fh(t,e){return mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function l0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var Js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Js||(Js={}));function u0(t){if(!t)if(Zn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),r0(t)}const h0=/^[^#]+#/;function d0(t,e){return t.replace(h0,"#")+e}function f0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const uo=()=>({left:window.pageXOffset,top:window.pageYOffset});function p0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=f0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ph(t,e){return(history.state?history.state.position-e:-1)+t}const Pa=new Map;function g0(t,e){Pa.set(t,e)}function _0(t){const e=Pa.get(t);return Pa.delete(t),e}let m0=()=>location.protocol+"//"+location.host;function xg(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),dh(c,"")}return dh(n,t)+s+i}function y0(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const g=xg(t,location),y=n.value,m=e.value;let N=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}N=m?d.position-m.position:0}else s(g);i.forEach(L=>{L(n.value,y,{delta:N,type:_i.pop,direction:N?N>0?Js.forward:Js.back:Js.unknown})})};function c(){o=n.value}function l(d){i.push(d);const g=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:uo()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function gh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?uo():null}}function v0(t){const{history:e,location:n}=window,s={value:xg(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:m0()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=he({},e.state,gh(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=he({},i.value,e.state,{forward:c,scroll:uo()});r(u.current,u,!0);const h=he({},gh(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function nA(t){t=u0(t);const e=v0(t),n=y0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=he({location:"",base:t,go:s,createHref:d0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function w0(t){return typeof t=="string"||t&&typeof t=="object"}function Mg(t){return typeof t=="string"||typeof t=="symbol"}const Yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dg=Symbol("");var _h;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_h||(_h={}));function ws(t,e){return he(new Error,{type:t,[Dg]:!0},e)}function Dt(t,e){return t instanceof Error&&Dg in t&&(e==null||!!(t.type&e))}const mh="[^/]+?",b0={sensitive:!1,strict:!1,start:!0,end:!0},E0=/[.+*?^${}()[\]/\\]/g;function I0(t,e){const n=he({},b0,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(E0,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:m,optional:N,regexp:L}=d;r.push({name:y,repeatable:m,optional:N});const F=L||mh;if(F!==mh){g+=10;try{new RegExp(`(${F})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${y}" (${F}): `+U.message)}}let B=m?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(B=N&&l.length<2?`(?:/${B})`:"/"+B),N&&(B+="?"),i+=B,g+=20,N&&(g+=-8),m&&(g+=-20),F===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=r[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:m,optional:N}=g,L=y in l?l[y]:"";if(mt(L)&&!m)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const F=mt(L)?L.join("/"):L;if(!F)if(N)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function C0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function T0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=C0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(yh(s))return 1;if(yh(i))return-1}return i.length-s.length}function yh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const S0={type:0,value:""},R0=/[a-zA-Z0-9_]/;function A0(t){if(!t)return[[]];if(t==="/")return[[S0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:R0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function P0(t,e,n){const s=I0(A0(t.path),n),i=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function N0(t,e){const n=[],s=new Map;e=bh({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const g=!d,y=O0(u);y.aliasOf=d&&d.record;const m=bh(e,u),N=[y];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of B)N.push(he({},y,{components:d?d.record.components:y.components,path:U,aliasOf:d?d.record:y}))}let L,F;for(const B of N){const{path:U}=B;if(h&&U[0]!=="/"){const ae=h.record.path,ce=ae[ae.length-1]==="/"?"":"/";B.path=h.record.path+(U&&ce+U)}if(L=P0(B,h,m),d?d.alias.push(L):(F=F||L,F!==L&&F.alias.push(L),g&&u.name&&!wh(L)&&o(u.name)),y.children){const ae=y.children;for(let ce=0;ce<ae.length;ce++)r(ae[ce],L,d&&d.children[ce])}d=d||L,(L.record.components&&Object.keys(L.record.components).length||L.record.name||L.record.redirect)&&c(L)}return F?()=>{o(F)}:Xs}function o(u){if(Mg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&T0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Lg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wh(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},y,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ws(1,{location:u});m=d.record.name,g=he(vh(h.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),u.params&&vh(u.params,d.keys.map(F=>F.name))),y=d.stringify(g)}else if("path"in u)y=u.path,d=n.find(F=>F.re.test(y)),d&&(g=d.parse(y),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!d)throw ws(1,{location:u,currentLocation:h});m=d.record.name,g=he({},h.params,u.params),y=d.stringify(g)}const N=[];let L=d;for(;L;)N.unshift(L.record),L=L.parent;return{name:m,path:y,params:g,matched:N,meta:x0(N)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function vh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function O0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:k0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function k0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function wh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function x0(t){return t.reduce((e,n)=>he(e,n.meta),{})}function bh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Lg(t,e){return e.children.some(n=>n===t||Lg(t,n))}const Fg=/#/g,M0=/&/g,D0=/\//g,L0=/=/g,F0=/\?/g,$g=/\+/g,$0=/%5B/g,U0=/%5D/g,Ug=/%5E/g,B0=/%60/g,Bg=/%7B/g,H0=/%7C/g,Hg=/%7D/g,W0=/%20/g;function sl(t){return encodeURI(""+t).replace(H0,"|").replace($0,"[").replace(U0,"]")}function j0(t){return sl(t).replace(Bg,"{").replace(Hg,"}").replace(Ug,"^")}function Na(t){return sl(t).replace($g,"%2B").replace(W0,"+").replace(Fg,"%23").replace(M0,"%26").replace(B0,"`").replace(Bg,"{").replace(Hg,"}").replace(Ug,"^")}function V0(t){return Na(t).replace(L0,"%3D")}function z0(t){return sl(t).replace(Fg,"%23").replace(F0,"%3F")}function K0(t){return t==null?"":z0(t).replace(D0,"%2F")}function Pr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function G0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace($g," "),o=r.indexOf("="),a=Pr(o<0?r:r.slice(0,o)),c=o<0?null:Pr(r.slice(o+1));if(a in e){let l=e[a];mt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Eh(t){let e="";for(let n in t){const s=t[n];if(n=V0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(mt(s)?s.map(r=>r&&Na(r)):[s&&Na(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function q0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=mt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Y0=Symbol(""),Ih=Symbol(""),il=Symbol(""),Wg=Symbol(""),Oa=Symbol("");function $s(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ws(4,{from:n,to:e})):h instanceof Error?a(h):w0(h)?a(ws(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function jo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Q0(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Xt(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=s0(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Xt(d,n,s,r,o)()}))}}return i}function Q0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ch(t){const e=Ct(il),n=Ct(Wg),s=lt(()=>e.resolve(is(t.to))),i=lt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(vs.bind(null,u));if(d>-1)return d;const g=Th(c[l-2]);return l>1&&Th(u)===g&&h[h.length-1].path!==g?h.findIndex(vs.bind(null,c[l-2])):d}),r=lt(()=>i.value>-1&&eR(n.params,s.value.params)),o=lt(()=>i.value>-1&&i.value===n.matched.length-1&&kg(n.params,s.value.params));function a(c={}){return Z0(c)?e[is(t.replace)?"replace":"push"](is(t.to)).catch(Xs):Promise.resolve()}return{route:s,href:lt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const X0=dd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ch,setup(t,{slots:e}){const n=yi(Ch(t)),{options:s}=Ct(il),i=lt(()=>({[Sh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Sh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:kd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),J0=X0;function Z0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!mt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Th(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sh=(t,e,n)=>t??e??n,tR=dd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ct(Oa),i=lt(()=>t.route||s.value),r=Ct(Ih,0),o=lt(()=>{let l=is(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=lt(()=>i.value.matched[o.value]);Vi(Ih,lt(()=>o.value+1)),Vi(Y0,a),Vi(Oa,i);const c=A_();return os(()=>[c.value,a.value,t.name],([l,u,h],[d,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!vs(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Rh(n.default,{Component:d,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,N=kd(d,he({},y,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Rh(n.default,{Component:N,route:l})||N}}});function Rh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nR=tR;function sA(t){const e=N0(t.routes,t),n=t.parseQuery||G0,s=t.stringifyQuery||Eh,i=t.history,r=$s(),o=$s(),a=$s(),c=P_(Yt);let l=Yt;Zn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ho.bind(null,w=>""+w),h=Ho.bind(null,K0),d=Ho.bind(null,Pr);function g(w,x){let R,M;return Mg(w)?(R=e.getRecordMatcher(w),M=x):M=w,e.addRoute(M,R)}function y(w){const x=e.getRecordMatcher(w);x&&e.removeRoute(x)}function m(){return e.getRoutes().map(w=>w.record)}function N(w){return!!e.getRecordMatcher(w)}function L(w,x){if(x=he({},x||c.value),typeof w=="string"){const _=Wo(n,w,x.path),v=e.resolve({path:_.path},x),b=i.createHref(_.fullPath);return he(_,v,{params:d(v.params),hash:Pr(_.hash),redirectedFrom:void 0,href:b})}let R;if("path"in w)R=he({},w,{path:Wo(n,w.path,x.path).path});else{const _=he({},w.params);for(const v in _)_[v]==null&&delete _[v];R=he({},w,{params:h(_)}),x.params=h(x.params)}const M=e.resolve(R,x),X=w.hash||"";M.params=u(d(M.params));const f=o0(s,he({},w,{hash:j0(X),path:M.path})),p=i.createHref(f);return he({fullPath:f,hash:X,query:s===Eh?q0(w.query):w.query||{}},M,{redirectedFrom:void 0,href:p})}function F(w){return typeof w=="string"?Wo(n,w,c.value.path):he({},w)}function B(w,x){if(l!==w)return ws(8,{from:x,to:w})}function U(w){return Ce(w)}function ae(w){return U(he(F(w),{replace:!0}))}function ce(w){const x=w.matched[w.matched.length-1];if(x&&x.redirect){const{redirect:R}=x;let M=typeof R=="function"?R(w):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),he({query:w.query,hash:w.hash,params:"path"in M?{}:w.params},M)}}function Ce(w,x){const R=l=L(w),M=c.value,X=w.state,f=w.force,p=w.replace===!0,_=ce(R);if(_)return Ce(he(F(_),{state:typeof _=="object"?he({},X,_.state):X,force:f,replace:p}),x||R);const v=R;v.redirectedFrom=x;let b;return!f&&a0(s,M,R)&&(b=ws(16,{to:v,from:M}),ne(M,M,!0,!1)),(b?Promise.resolve(b):le(v,M)).catch(I=>Dt(I)?Dt(I,2)?I:z(I):E(I,v,M)).then(I=>{if(I){if(Dt(I,2))return Ce(he({replace:p},F(I.to),{state:typeof I.to=="object"?he({},X,I.to.state):X,force:f}),x||v)}else I=nt(v,M,!0,p,X);return te(v,M,I),I})}function Ne(w,x){const R=B(w,x);return R?Promise.reject(R):Promise.resolve()}function Se(w){const x=be.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(w):w()}function le(w,x){let R;const[M,X,f]=sR(w,x);R=jo(M.reverse(),"beforeRouteLeave",w,x);for(const _ of M)_.leaveGuards.forEach(v=>{R.push(Xt(v,w,x))});const p=Ne.bind(null,w,x);return R.push(p),Ee(R).then(()=>{R=[];for(const _ of r.list())R.push(Xt(_,w,x));return R.push(p),Ee(R)}).then(()=>{R=jo(X,"beforeRouteUpdate",w,x);for(const _ of X)_.updateGuards.forEach(v=>{R.push(Xt(v,w,x))});return R.push(p),Ee(R)}).then(()=>{R=[];for(const _ of f)if(_.beforeEnter)if(mt(_.beforeEnter))for(const v of _.beforeEnter)R.push(Xt(v,w,x));else R.push(Xt(_.beforeEnter,w,x));return R.push(p),Ee(R)}).then(()=>(w.matched.forEach(_=>_.enterCallbacks={}),R=jo(f,"beforeRouteEnter",w,x),R.push(p),Ee(R))).then(()=>{R=[];for(const _ of o.list())R.push(Xt(_,w,x));return R.push(p),Ee(R)}).catch(_=>Dt(_,8)?_:Promise.reject(_))}function te(w,x,R){a.list().forEach(M=>Se(()=>M(w,x,R)))}function nt(w,x,R,M,X){const f=B(w,x);if(f)return f;const p=x===Yt,_=Zn?history.state:{};R&&(M||p?i.replace(w.fullPath,he({scroll:p&&_&&_.scroll},X)):i.push(w.fullPath,X)),c.value=w,ne(w,x,R,p),z()}let Ze;function V(){Ze||(Ze=i.listen((w,x,R)=>{if(!Me.listening)return;const M=L(w),X=ce(M);if(X){Ce(he(X,{replace:!0}),M).catch(Xs);return}l=M;const f=c.value;Zn&&g0(ph(f.fullPath,R.delta),uo()),le(M,f).catch(p=>Dt(p,12)?p:Dt(p,2)?(Ce(p.to,M).then(_=>{Dt(_,20)&&!R.delta&&R.type===_i.pop&&i.go(-1,!1)}).catch(Xs),Promise.reject()):(R.delta&&i.go(-R.delta,!1),E(p,M,f))).then(p=>{p=p||nt(M,f,!1),p&&(R.delta&&!Dt(p,8)?i.go(-R.delta,!1):R.type===_i.pop&&Dt(p,20)&&i.go(-1,!1)),te(M,f,p)}).catch(Xs)}))}let k=$s(),T=$s(),P;function E(w,x,R){z(w);const M=T.list();return M.length?M.forEach(X=>X(w,x,R)):console.error(w),Promise.reject(w)}function j(){return P&&c.value!==Yt?Promise.resolve():new Promise((w,x)=>{k.add([w,x])})}function z(w){return P||(P=!w,V(),k.list().forEach(([x,R])=>w?R(w):x()),k.reset()),w}function ne(w,x,R,M){const{scrollBehavior:X}=t;if(!Zn||!X)return Promise.resolve();const f=!R&&_0(ph(w.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return sd().then(()=>X(w,x,f)).then(p=>p&&p0(p)).catch(p=>E(p,w,x))}const se=w=>i.go(w);let ye;const be=new Set,Me={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:N,getRoutes:m,resolve:L,options:t,push:U,replace:ae,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:T.add,isReady:j,install(w){const x=this;w.component("RouterLink",J0),w.component("RouterView",nR),w.config.globalProperties.$router=x,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>is(c)}),Zn&&!ye&&c.value===Yt&&(ye=!0,U(i.location).catch(X=>{}));const R={};for(const X in Yt)Object.defineProperty(R,X,{get:()=>c.value[X],enumerable:!0});w.provide(il,x),w.provide(Wg,qh(R)),w.provide(Oa,c);const M=w.unmount;be.add(w),w.unmount=function(){be.delete(w),be.size<1&&(l=Yt,Ze&&Ze(),Ze=null,c.value=Yt,ye=!1,P=!1),M()}}};function Ee(w){return w.reduce((x,R)=>x.then(()=>Se(R)),Promise.resolve())}return Me}function sR(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>vs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>vs(l,c))||i.push(c))}return[n,s,i]}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Pi(t){return t+.5|0}const nn=(t,e,n)=>Math.max(Math.min(t,n),e);function Hs(t){return nn(Pi(t*2.55),0,255)}function hn(t){return nn(Pi(t*255),0,255)}function Ft(t){return nn(Pi(t/2.55)/100,0,1)}function Ah(t){return nn(Pi(t*100),0,100)}const st={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ka=[..."0123456789ABCDEF"],iR=t=>ka[t&15],rR=t=>ka[(t&240)>>4]+ka[t&15],Ui=t=>(t&240)>>4===(t&15),oR=t=>Ui(t.r)&&Ui(t.g)&&Ui(t.b)&&Ui(t.a);function aR(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&st[t[1]]*17,g:255&st[t[2]]*17,b:255&st[t[3]]*17,a:e===5?st[t[4]]*17:255}:(e===7||e===9)&&(n={r:st[t[1]]<<4|st[t[2]],g:st[t[3]]<<4|st[t[4]],b:st[t[5]]<<4|st[t[6]],a:e===9?st[t[7]]<<4|st[t[8]]:255})),n}const cR=(t,e)=>t<255?e(t):"";function lR(t){var e=oR(t)?iR:rR;return t?"#"+e(t.r)+e(t.g)+e(t.b)+cR(t.a,e):void 0}const uR=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function jg(t,e,n){const s=e*Math.min(n,1-n),i=(r,o=(r+t/30)%12)=>n-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function hR(t,e,n){const s=(i,r=(i+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function dR(t,e,n){const s=jg(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)s[i]*=1-e-n,s[i]+=e;return s}function fR(t,e,n,s,i){return t===i?(e-n)/s+(e<n?6:0):e===i?(n-t)/s+2:(t-e)/s+4}function rl(t){const n=t.r/255,s=t.g/255,i=t.b/255,r=Math.max(n,s,i),o=Math.min(n,s,i),a=(r+o)/2;let c,l,u;return r!==o&&(u=r-o,l=a>.5?u/(2-r-o):u/(r+o),c=fR(n,s,i,u,r),c=c*60+.5),[c|0,l||0,a]}function ol(t,e,n,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,s)).map(hn)}function al(t,e,n){return ol(jg,t,e,n)}function pR(t,e,n){return ol(dR,t,e,n)}function gR(t,e,n){return ol(hR,t,e,n)}function Vg(t){return(t%360+360)%360}function _R(t){const e=uR.exec(t);let n=255,s;if(!e)return;e[5]!==s&&(n=e[6]?Hs(+e[5]):hn(+e[5]));const i=Vg(+e[2]),r=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?s=pR(i,r,o):e[1]==="hsv"?s=gR(i,r,o):s=al(i,r,o),{r:s[0],g:s[1],b:s[2],a:n}}function mR(t,e){var n=rl(t);n[0]=Vg(n[0]+e),n=al(n),t.r=n[0],t.g=n[1],t.b=n[2]}function yR(t){if(!t)return;const e=rl(t),n=e[0],s=Ah(e[1]),i=Ah(e[2]);return t.a<255?`hsla(${n}, ${s}%, ${i}%, ${Ft(t.a)})`:`hsl(${n}, ${s}%, ${i}%)`}const Ph={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Nh={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function vR(){const t={},e=Object.keys(Nh),n=Object.keys(Ph);let s,i,r,o,a;for(s=0;s<e.length;s++){for(o=a=e[s],i=0;i<n.length;i++)r=n[i],a=a.replace(r,Ph[r]);r=parseInt(Nh[o],16),t[a]=[r>>16&255,r>>8&255,r&255]}return t}let Bi;function wR(t){Bi||(Bi=vR(),Bi.transparent=[0,0,0,0]);const e=Bi[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const bR=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ER(t){const e=bR.exec(t);let n=255,s,i,r;if(e){if(e[7]!==s){const o=+e[7];n=e[8]?Hs(o):nn(o*255,0,255)}return s=+e[1],i=+e[3],r=+e[5],s=255&(e[2]?Hs(s):nn(s,0,255)),i=255&(e[4]?Hs(i):nn(i,0,255)),r=255&(e[6]?Hs(r):nn(r,0,255)),{r:s,g:i,b:r,a:n}}}function IR(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Ft(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Vo=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Jn=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function CR(t,e,n){const s=Jn(Ft(t.r)),i=Jn(Ft(t.g)),r=Jn(Ft(t.b));return{r:hn(Vo(s+n*(Jn(Ft(e.r))-s))),g:hn(Vo(i+n*(Jn(Ft(e.g))-i))),b:hn(Vo(r+n*(Jn(Ft(e.b))-r))),a:t.a+n*(e.a-t.a)}}function Hi(t,e,n){if(t){let s=rl(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*n,e===0?360:1)),s=al(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function zg(t,e){return t&&Object.assign(e||{},t)}function Oh(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=hn(t[3]))):(e=zg(t,{r:0,g:0,b:0,a:1}),e.a=hn(e.a)),e}function TR(t){return t.charAt(0)==="r"?ER(t):_R(t)}class xa{constructor(e){if(e instanceof xa)return e;const n=typeof e;let s;n==="object"?s=Oh(e):n==="string"&&(s=aR(e)||wR(e)||TR(e)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var e=zg(this._rgb);return e&&(e.a=Ft(e.a)),e}set rgb(e){this._rgb=Oh(e)}rgbString(){return this._valid?IR(this._rgb):void 0}hexString(){return this._valid?lR(this._rgb):void 0}hslString(){return this._valid?yR(this._rgb):void 0}mix(e,n){if(e){const s=this.rgb,i=e.rgb;let r;const o=n===r?.5:n,a=2*o-1,c=s.a-i.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,s.r=255&l*s.r+r*i.r+.5,s.g=255&l*s.g+r*i.g+.5,s.b=255&l*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(e,n){return e&&(this._rgb=CR(this._rgb,e._rgb,n)),this}clone(){return new xa(this.rgb)}alpha(e){return this._rgb.a=hn(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Pi(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Hi(this._rgb,2,e),this}darken(e){return Hi(this._rgb,2,-e),this}saturate(e){return Hi(this._rgb,1,e),this}desaturate(e){return Hi(this._rgb,1,-e),this}rotate(e){return mR(this._rgb,e),this}}export{qR as A,GR as B,xa as C,XR as D,QR as E,at as F,Zt as G,eA as H,LR as I,NR as J,Ua as K,A_ as L,B_ as M,Rd as N,Pm as O,os as P,em as Q,PR as R,yi as S,AR as T,xR as U,sA as V,nA as W,MR as X,OR as a,Pd as b,lt as c,is as d,kR as e,BR as f,WR as g,FR as h,$R as i,rw as j,tA as k,UR as l,ze as m,jR as n,Td as o,Ar as p,zR as q,RR as r,HR as s,SR as t,DR as u,KR as v,VR as w,ZR as x,JR as y,YR as z};
