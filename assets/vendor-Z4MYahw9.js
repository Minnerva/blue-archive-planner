function Wo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ae={},$n=[],ft=()=>{},gp=()=>!1,Gi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),jo=t=>t.startsWith("onUpdate:"),we=Object.assign,Vo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mp=Object.prototype.hasOwnProperty,q=(t,e)=>mp.call(t,e),$=Array.isArray,Bn=t=>Yi(t)==="[object Map]",yu=t=>Yi(t)==="[object Set]",H=t=>typeof t=="function",ge=t=>typeof t=="string",rs=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",vu=t=>(ce(t)||H(t))&&H(t.then)&&H(t.catch),wu=Object.prototype.toString,Yi=t=>wu.call(t),yp=t=>Yi(t).slice(8,-1),Iu=t=>Yi(t)==="[object Object]",zo=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vp=/-(\w)/g,gt=Qi(t=>t.replace(vp,(e,n)=>n?n.toUpperCase():"")),wp=/\B([A-Z])/g,os=Qi(t=>t.replace(wp,"-$1").toLowerCase()),Ji=Qi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ir=Qi(t=>t?`on${Ji(t)}`:""),pn=(t,e)=>!Object.is(t,e),Er=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ei=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ip=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rc;const Zr=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ko(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?Cp(s):Ko(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||ce(t))return t}const Ep=/;(?![^(]*\))/g,bp=/:([^]+)/,Tp=/\/\*[^]*?\*\//g;function Cp(t){const e={};return t.replace(Tp,"").split(Ep).forEach(n=>{if(n){const s=n.split(bp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qo(t){let e="";if(ge(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=qo(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rp=Wo(Sp);function Eu(t){return!!t||t===""}const eS=t=>ge(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===wu||!H(t.toString))?JSON.stringify(t,bu,2):String(t),bu=(t,e)=>e&&e.__v_isRef?bu(t,e.value):Bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[br(s,r)+" =>"]=i,n),{})}:yu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>br(n))}:rs(e)?br(e):ce(e)&&!$(e)&&!Iu(e)?String(e):e,br=(t,e="")=>{var n;return rs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ke;class Ap{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Op(t,e=Ke){e&&e.active&&e.effects.push(t)}function Np(){return Ke}const Go=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Tu=t=>(t.w&Jt)>0,Cu=t=>(t.n&Jt)>0,Pp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},kp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Tu(i)&&!Cu(i)?i.delete(t):e[n++]=i,i.w&=~Jt,i.n&=~Jt}e.length=n}},eo=new WeakMap;let Cs=0,Jt=1;const to=30;let qe;const un=Symbol(""),no=Symbol("");class Yo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Op(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=zt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,zt=!0,Jt=1<<++Cs,Cs<=to?Pp(this):oc(this),this.fn()}finally{Cs<=to&&kp(this),Jt=1<<--Cs,qe=this.parent,zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(oc(this),this.onStop&&this.onStop(),this.active=!1)}}function oc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zt=!0;const Su=[];function as(){Su.push(zt),zt=!1}function cs(){const t=Su.pop();zt=t===void 0?!0:t}function De(t,e,n){if(zt&&qe){let s=eo.get(t);s||eo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Go()),Ru(i)}}function Ru(t,e){let n=!1;Cs<=to?Cu(t)||(t.n|=Jt,n=!Tu(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function St(t,e,n,s,i,r){const o=eo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!rs(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?zo(n)&&a.push(o.get("length")):(a.push(o.get(un)),Bn(t)&&a.push(o.get(no)));break;case"delete":$(t)||(a.push(o.get(un)),Bn(t)&&a.push(o.get(no)));break;case"set":Bn(t)&&a.push(o.get(un));break}if(a.length===1)a[0]&&so(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);so(Go(c))}}function so(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&ac(s);for(const s of n)s.computed||ac(s)}function ac(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Dp=Wo("__proto__,__v_isRef,__isVue"),Au=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rs)),cc=Mp();function Mp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=G(this);for(let r=0,o=this.length;r<o;r++)De(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){as();const s=G(this)[e].apply(this,n);return cs(),s}}),t}function xp(t){const e=G(this);return De(e,"has",t),e.hasOwnProperty(t)}class Ou{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Gp:Du:r?ku:Pu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!i){if(o&&q(cc,n))return Reflect.get(cc,n,s);if(n==="hasOwnProperty")return xp}const a=Reflect.get(e,n,s);return(rs(n)?Au.has(n):Dp(n))||(i||De(e,"get",n),r)?a:Me(a)?o&&zo(n)?a:a.value:ce(a)?i?xu(a):Qs(a):a}}class Nu extends Ou{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const c=Qn(r);if(!bi(s)&&!Qn(s)&&(r=G(r),s=G(s)),!$(e)&&Me(r)&&!Me(s))return c?!1:(r.value=s,!0)}const o=$(e)&&zo(n)?Number(n)<e.length:q(e,n),a=Reflect.set(e,n,s,i);return e===G(i)&&(o?pn(s,r)&&St(e,"set",n,s):St(e,"add",n,s)),a}deleteProperty(e,n){const s=q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&St(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!rs(n)||!Au.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",$(e)?"length":un),Reflect.ownKeys(e)}}class Lp extends Ou{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fp=new Nu,Up=new Lp,$p=new Nu(!0),Qo=t=>t,Xi=t=>Reflect.getPrototypeOf(t);function ri(t,e,n=!1,s=!1){t=t.__v_raw;const i=G(t),r=G(e);n||(pn(e,r)&&De(i,"get",e),De(i,"get",r));const{has:o}=Xi(i),a=s?Qo:n?Zo:Ls;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function oi(t,e=!1){const n=this.__v_raw,s=G(n),i=G(t);return e||(pn(t,i)&&De(s,"has",t),De(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ai(t,e=!1){return t=t.__v_raw,!e&&De(G(t),"iterate",un),Reflect.get(t,"size",t)}function lc(t){t=G(t);const e=G(this);return Xi(e).has.call(e,t)||(e.add(t),St(e,"add",t,t)),this}function uc(t,e){e=G(e);const n=G(this),{has:s,get:i}=Xi(n);let r=s.call(n,t);r||(t=G(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?pn(e,o)&&St(n,"set",t,e):St(n,"add",t,e),this}function hc(t){const e=G(this),{has:n,get:s}=Xi(e);let i=n.call(e,t);i||(t=G(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&St(e,"delete",t,void 0),r}function dc(){const t=G(this),e=t.size!==0,n=t.clear();return e&&St(t,"clear",void 0,void 0),n}function ci(t,e){return function(s,i){const r=this,o=r.__v_raw,a=G(o),c=e?Qo:t?Zo:Ls;return!t&&De(a,"iterate",un),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function li(t,e,n){return function(...s){const i=this.__v_raw,r=G(i),o=Bn(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?Qo:e?Zo:Ls;return!e&&De(r,"iterate",c?no:un),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Lt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bp(){const t={get(r){return ri(this,r)},get size(){return ai(this)},has:oi,add:lc,set:uc,delete:hc,clear:dc,forEach:ci(!1,!1)},e={get(r){return ri(this,r,!1,!0)},get size(){return ai(this)},has:oi,add:lc,set:uc,delete:hc,clear:dc,forEach:ci(!1,!0)},n={get(r){return ri(this,r,!0)},get size(){return ai(this,!0)},has(r){return oi.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:ci(!0,!1)},s={get(r){return ri(this,r,!0,!0)},get size(){return ai(this,!0)},has(r){return oi.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:ci(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=li(r,!1,!1),n[r]=li(r,!0,!1),e[r]=li(r,!1,!0),s[r]=li(r,!0,!0)}),[t,n,e,s]}const[Hp,Wp,jp,Vp]=Bp();function Jo(t,e){const n=e?t?Vp:jp:t?Wp:Hp;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const zp={get:Jo(!1,!1)},Kp={get:Jo(!1,!0)},qp={get:Jo(!0,!1)},Pu=new WeakMap,ku=new WeakMap,Du=new WeakMap,Gp=new WeakMap;function Yp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qp(t){return t.__v_skip||!Object.isExtensible(t)?0:Yp(yp(t))}function Qs(t){return Qn(t)?t:Xo(t,!1,Fp,zp,Pu)}function Mu(t){return Xo(t,!1,$p,Kp,ku)}function xu(t){return Xo(t,!0,Up,qp,Du)}function Xo(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Qp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Hn(t){return Qn(t)?Hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qn(t){return!!(t&&t.__v_isReadonly)}function bi(t){return!!(t&&t.__v_isShallow)}function Lu(t){return Hn(t)||Qn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Fu(t){return Ei(t,"__v_skip",!0),t}const Ls=t=>ce(t)?Qs(t):t,Zo=t=>ce(t)?xu(t):t;function Uu(t){zt&&qe&&(t=G(t),Ru(t.dep||(t.dep=Go())))}function $u(t,e){t=G(t);const n=t.dep;n&&so(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Jp(t){return Bu(t,!1)}function Xp(t){return Bu(t,!0)}function Bu(t,e){return Me(t)?t:new Zp(t,e)}class Zp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Ls(e)}get value(){return Uu(this),this._value}set value(e){const n=this.__v_isShallow||bi(e)||Qn(e);e=n?e:G(e),pn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ls(e),$u(this))}}function Wn(t){return Me(t)?t.value:t}const e_={get:(t,e,n)=>Wn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Hu(t){return Hn(t)?t:new Proxy(t,e_)}class t_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Yo(e,()=>{this._dirty||(this._dirty=!0,$u(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=G(this);return Uu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function n_(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=ft):(s=t.get,i=t.set),new t_(s,i,r||!i,n)}function Kt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Zi(r,e,n)}return i}function Ze(t,e,n,s){if(H(t)){const r=Kt(t,e,n,s);return r&&vu(r)&&r.catch(o=>{Zi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ze(t[r],e,n,s));return i}function Zi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Kt(c,null,10,[t,o,a]);return}}s_(t,n,i,s)}function s_(t,e,n,s=!0){console.error(t)}let Fs=!1,io=!1;const be=[];let ht=0;const jn=[];let It=null,rn=0;const Wu=Promise.resolve();let ea=null;function ju(t){const e=ea||Wu;return t?e.then(this?t.bind(this):t):e}function i_(t){let e=ht+1,n=be.length;for(;e<n;){const s=e+n>>>1,i=be[s],r=Us(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ta(t){(!be.length||!be.includes(t,Fs&&t.allowRecurse?ht+1:ht))&&(t.id==null?be.push(t):be.splice(i_(t.id),0,t),Vu())}function Vu(){!Fs&&!io&&(io=!0,ea=Wu.then(Ku))}function r_(t){const e=be.indexOf(t);e>ht&&be.splice(e,1)}function o_(t){$(t)?jn.push(...t):(!It||!It.includes(t,t.allowRecurse?rn+1:rn))&&jn.push(t),Vu()}function fc(t,e,n=Fs?ht+1:0){for(;n<be.length;n++){const s=be[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;be.splice(n,1),n--,s()}}}function zu(t){if(jn.length){const e=[...new Set(jn)];if(jn.length=0,It){It.push(...e);return}for(It=e,It.sort((n,s)=>Us(n)-Us(s)),rn=0;rn<It.length;rn++)It[rn]();It=null,rn=0}}const Us=t=>t.id==null?1/0:t.id,a_=(t,e)=>{const n=Us(t)-Us(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ku(t){io=!1,Fs=!0,be.sort(a_);try{for(ht=0;ht<be.length;ht++){const e=be[ht];e&&e.active!==!1&&Kt(e,null,14)}}finally{ht=0,be.length=0,zu(),Fs=!1,ea=null,(be.length||jn.length)&&Ku()}}function c_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ae;d&&(i=n.map(_=>ge(_)?_.trim():_)),h&&(i=n.map(Ip))}let a,c=s[a=Ir(e)]||s[a=Ir(gt(e))];!c&&r&&(c=s[a=Ir(os(e))]),c&&Ze(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ze(l,t,6,i)}}function qu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=qu(l,e,!0);u&&(a=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ce(t)&&s.set(t,null),null):($(r)?r.forEach(c=>o[c]=null):we(o,r),ce(t)&&s.set(t,o),o)}function er(t,e){return!t||!Gi(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,os(e))||q(t,e))}let Qe=null,Gu=null;function Ti(t){const e=Qe;return Qe=t,Gu=t&&t.type.__scopeId||null,e}function l_(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Tc(-1);const r=Ti(e);let o;try{o=t(...i)}finally{Ti(r),s._d&&Tc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Tr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:_,ctx:v,inheritAttrs:C}=t;let P,k;const D=Ti(t);try{if(n.shapeFlag&4){const x=i||s,le=x;P=ut(u.call(le,x,h,r,_,d,v)),k=c}else{const x=e;P=ut(x.length>1?x(r,{attrs:c,slots:a,emit:l}):x(r,null)),k=e.props?c:u_(c)}}catch(x){As.length=0,Zi(x,t,1),P=He($s)}let W=P;if(k&&C!==!1){const x=Object.keys(k),{shapeFlag:le}=W;x.length&&le&7&&(o&&x.some(jo)&&(k=h_(k,o)),W=Jn(W,k))}return n.dirs&&(W=Jn(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),P=W,Ti(D),P}const u_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gi(n))&&((e||(e={}))[n]=t[n]);return e},h_=(t,e)=>{const n={};for(const s in t)(!jo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function d_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?pc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!er(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?pc(s,o,l):!0:!!o;return!1}function pc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!er(n,r))return!0}return!1}function f_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yu="components";function tS(t,e){return __(Yu,t,!0,e)||t}const p_=Symbol.for("v-ndc");function __(t,e,n=!0,s=!1){const i=Qe||ye;if(i){const r=i.type;if(t===Yu){const a=ag(r,!1);if(a&&(a===e||a===gt(e)||a===Ji(gt(e))))return r}const o=_c(i[t]||r[t],e)||_c(i.appContext[t],e);return!o&&s?r:o}}function _c(t,e){return t&&(t[e]||t[gt(e)]||t[Ji(gt(e))])}const g_=t=>t.__isSuspense;function m_(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):o_(t)}const ui={};function Vn(t,e,n){return Qu(t,e,n)}function Qu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){var a;const c=Np()===((a=ye)==null?void 0:a.scope)?ye:null;let l,u=!1,h=!1;if(Me(t)?(l=()=>t.value,u=bi(t)):Hn(t)?(l=()=>t,s=!0):$(t)?(h=!0,u=t.some(x=>Hn(x)||bi(x)),l=()=>t.map(x=>{if(Me(x))return x.value;if(Hn(x))return Ln(x);if(H(x))return Kt(x,c,2)})):H(t)?e?l=()=>Kt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Ze(t,c,3,[_])}:l=ft,e&&s){const x=l;l=()=>Ln(x())}let d,_=x=>{d=D.onStop=()=>{Kt(x,c,4),d=D.onStop=void 0}},v;if(Hs)if(_=ft,e?n&&Ze(e,c,3,[l(),h?[]:void 0,_]):l(),i==="sync"){const x=ug();v=x.__watcherHandles||(x.__watcherHandles=[])}else return ft;let C=h?new Array(t.length).fill(ui):ui;const P=()=>{if(D.active)if(e){const x=D.run();(s||u||(h?x.some((le,ue)=>pn(le,C[ue])):pn(x,C)))&&(d&&d(),Ze(e,c,3,[x,C===ui?void 0:h&&C[0]===ui?[]:C,_]),C=x)}else D.run()};P.allowRecurse=!!e;let k;i==="sync"?k=P:i==="post"?k=()=>Oe(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),k=()=>ta(P));const D=new Yo(l,k);e?n?P():C=D.run():i==="post"?Oe(D.run.bind(D),c&&c.suspense):D.run();const W=()=>{D.stop(),c&&c.scope&&Vo(c.scope.effects,D)};return v&&v.push(W),W}function y_(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?Ju(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=ye;Xn(this);const a=Qu(i,r.bind(s),n);return o?Xn(o):hn(),a}function Ju(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ln(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))Ln(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if(yu(t)||Bn(t))t.forEach(n=>{Ln(n,e)});else if(Iu(t))for(const n in t)Ln(t[n],e);return t}function en(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(as(),Ze(c,n,8,[t.el,a,t,e]),cs())}}/*! #__NO_SIDE_EFFECTS__ */function Xu(t,e){return H(t)?we({name:t.name},e,{setup:t}):t}const _i=t=>!!t.type.__asyncLoader,Zu=t=>t.type.__isKeepAlive;function v_(t,e){eh(t,"a",e)}function w_(t,e){eh(t,"da",e)}function eh(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(tr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Zu(i.parent.vnode)&&I_(s,e,n,i),i=i.parent}}function I_(t,e,n,s){const i=tr(e,t,s,!0);th(()=>{Vo(s[e],i)},n)}function tr(t,e,n=ye,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;as(),Xn(n);const a=Ze(e,n,t,o);return hn(),cs(),a});return s?i.unshift(r):i.push(r),r}}const kt=t=>(e,n=ye)=>(!Hs||t==="sp")&&tr(t,(...s)=>e(...s),n),E_=kt("bm"),b_=kt("m"),T_=kt("bu"),C_=kt("u"),S_=kt("bum"),th=kt("um"),R_=kt("sp"),A_=kt("rtg"),O_=kt("rtc");function N_(t,e=ye){tr("ec",t,e)}const ro=t=>t?fh(t)?oa(t)||t.proxy:ro(t.parent):null,Rs=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ro(t.parent),$root:t=>ro(t.root),$emit:t=>t.emit,$options:t=>na(t),$forceUpdate:t=>t.f||(t.f=()=>ta(t.update)),$nextTick:t=>t.n||(t.n=ju.bind(t.proxy)),$watch:t=>y_.bind(t)}),Cr=(t,e)=>t!==ae&&!t.__isScriptSetup&&q(t,e),P_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Cr(s,e))return o[e]=1,s[e];if(i!==ae&&q(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,r[e];if(n!==ae&&q(n,e))return o[e]=4,n[e];oo&&(o[e]=0)}}const u=Rs[e];let h,d;if(u)return e==="$attrs"&&De(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&q(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Cr(i,e)?(i[e]=n,!0):s!==ae&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&q(t,o)||Cr(e,o)||(a=r[0])&&q(a,o)||q(s,o)||q(Rs,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gc(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oo=!0;function k_(t){const e=na(t),n=t.proxy,s=t.ctx;oo=!1,e.beforeCreate&&mc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:v,activated:C,deactivated:P,beforeDestroy:k,beforeUnmount:D,destroyed:W,unmounted:x,render:le,renderTracked:ue,renderTriggered:Re,errorCaptured:$e,serverPrefetch:rt,expose:Be,inheritAttrs:Mt,components:Zt,directives:ot,filters:ms}=e;if(l&&D_(l,s,null),o)for(const ne in o){const Y=o[ne];H(Y)&&(s[ne]=Y.bind(n))}if(i){const ne=i.call(n,n);ce(ne)&&(t.data=Qs(ne))}if(oo=!0,r)for(const ne in r){const Y=r[ne],vt=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):ft,xt=!H(Y)&&H(Y.set)?Y.set.bind(n):ft,at=Ge({get:vt,set:xt});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ae=>at.value=Ae})}if(a)for(const ne in a)nh(a[ne],s,n,ne);if(c){const ne=H(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Y=>{gi(Y,ne[Y])})}u&&mc(u,t,"c");function fe(ne,Y){$(Y)?Y.forEach(vt=>ne(vt.bind(n))):Y&&ne(Y.bind(n))}if(fe(E_,h),fe(b_,d),fe(T_,_),fe(C_,v),fe(v_,C),fe(w_,P),fe(N_,$e),fe(O_,ue),fe(A_,Re),fe(S_,D),fe(th,x),fe(R_,rt),$(Be))if(Be.length){const ne=t.exposed||(t.exposed={});Be.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:vt=>n[Y]=vt})})}else t.exposed||(t.exposed={});le&&t.render===ft&&(t.render=le),Mt!=null&&(t.inheritAttrs=Mt),Zt&&(t.components=Zt),ot&&(t.directives=ot)}function D_(t,e,n=ft){$(t)&&(t=ao(t));for(const s in t){const i=t[s];let r;ce(i)?"default"in i?r=et(i.from||s,i.default,!0):r=et(i.from||s):r=et(i),Me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function mc(t,e,n){Ze($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function nh(t,e,n,s){const i=s.includes(".")?Ju(n,s):()=>n[s];if(ge(t)){const r=e[t];H(r)&&Vn(i,r)}else if(H(t))Vn(i,t.bind(n));else if(ce(t))if($(t))t.forEach(r=>nh(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&Vn(i,r,t)}}function na(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>Ci(c,l,o,!0)),Ci(c,e,o)),ce(e)&&r.set(e,c),c}function Ci(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ci(t,r,n,!0),i&&i.forEach(o=>Ci(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=M_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const M_={data:yc,props:vc,emits:vc,methods:Ss,computed:Ss,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Ss,directives:Ss,watch:L_,provide:yc,inject:x_};function yc(t,e){return e?t?function(){return we(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function x_(t,e){return Ss(ao(t),ao(e))}function ao(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Ss(t,e){return t?we(Object.create(null),t,e):e}function vc(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:we(Object.create(null),gc(t),gc(e??{})):e}function L_(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const s in e)n[s]=Se(t[s],e[s]);return n}function sh(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let F_=0;function U_(t,e){return function(s,i=null){H(s)||(s=we({},s)),i!=null&&!ce(i)&&(i=null);const r=sh(),o=new WeakSet;let a=!1;const c=r.app={_uid:F_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:hg,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const d=He(s,i);return d.appContext=r,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,oa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){Si=c;try{return l()}finally{Si=null}}};return c}}let Si=null;function gi(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function et(t,e,n=!1){const s=ye||Qe;if(s||Si){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Si._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function $_(t,e,n,s=!1){const i={},r={};Ei(r,sr,1),t.propsDefaults=Object.create(null),ih(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Mu(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function B_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=G(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(er(t.emitsOptions,d))continue;const _=e[d];if(c)if(q(r,d))_!==r[d]&&(r[d]=_,l=!0);else{const v=gt(d);i[v]=co(c,a,v,_,t,!1)}else _!==r[d]&&(r[d]=_,l=!0)}}}else{ih(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!q(e,h)&&((u=os(h))===h||!q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=co(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!q(e,h))&&(delete r[h],l=!0)}l&&St(t,"set","$attrs")}function ih(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pi(c))continue;const l=e[c];let u;i&&q(i,u=gt(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:er(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=G(n),l=a||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=co(i,c,h,l[h],t,!q(l,h))}}return o}function co(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(Xn(i),s=l[n]=c.call(null,e),hn())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===os(n))&&(s=!0))}return s}function rh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!H(t)){const u=h=>{c=!0;const[d,_]=rh(h,e,!0);we(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ce(t)&&s.set(t,$n),$n;if($(r))for(let u=0;u<r.length;u++){const h=gt(r[u]);wc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=gt(u);if(wc(h)){const d=r[u],_=o[h]=$(d)||H(d)?{type:d}:we({},d);if(_){const v=bc(Boolean,_.type),C=bc(String,_.type);_[0]=v>-1,_[1]=C<0||v<C,(v>-1||q(_,"default"))&&a.push(h)}}}const l=[o,a];return ce(t)&&s.set(t,l),l}function wc(t){return t[0]!=="$"}function Ic(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ec(t,e){return Ic(t)===Ic(e)}function bc(t,e){return $(e)?e.findIndex(n=>Ec(n,t)):H(e)&&Ec(e,t)?0:-1}const oh=t=>t[0]==="_"||t==="$stable",sa=t=>$(t)?t.map(ut):[ut(t)],H_=(t,e,n)=>{if(e._n)return e;const s=l_((...i)=>sa(e(...i)),n);return s._c=!1,s},ah=(t,e,n)=>{const s=t._ctx;for(const i in t){if(oh(i))continue;const r=t[i];if(H(r))e[i]=H_(i,r,s);else if(r!=null){const o=sa(r);e[i]=()=>o}}},ch=(t,e)=>{const n=sa(e);t.slots.default=()=>n},W_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),Ei(e,"_",n)):ah(e,t.slots={})}else t.slots={},e&&ch(t,e);Ei(t.slots,sr,1)},j_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(we(i,e),!n&&a===1&&delete i._):(r=!e.$stable,ah(e,i)),o=e}else e&&(ch(t,e),o={default:1});if(r)for(const a in i)!oh(a)&&o[a]==null&&delete i[a]};function lo(t,e,n,s,i=!1){if($(t)){t.forEach((d,_)=>lo(d,e&&($(e)?e[_]:e),n,s,i));return}if(_i(s)&&!i)return;const r=s.shapeFlag&4?oa(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ge(l)?(u[l]=null,q(h,l)&&(h[l]=null)):Me(l)&&(l.value=null)),H(c))Kt(c,a,12,[o,u]);else{const d=ge(c),_=Me(c);if(d||_){const v=()=>{if(t.f){const C=d?q(h,c)?h[c]:u[c]:c.value;i?$(C)&&Vo(C,r):$(C)?C.includes(r)||C.push(r):d?(u[c]=[r],q(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,q(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Oe(v,n)):v()}}}const Oe=m_;function V_(t){return z_(t)}function z_(t,e){const n=Zr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=ft,insertStaticContent:v}=t,C=(f,p,g,m=null,w=null,I=null,A=!1,b=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!vs(f,p)&&(m=y(f),Ae(f,w,I,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:L,shapeFlag:N}=p;switch(E){case nr:P(f,p,g,m);break;case $s:k(f,p,g,m);break;case Sr:f==null&&D(p,g,m,A);break;case Et:Zt(f,p,g,m,w,I,A,b,T);break;default:N&1?le(f,p,g,m,w,I,A,b,T):N&6?ot(f,p,g,m,w,I,A,b,T):(N&64||N&128)&&E.process(f,p,g,m,w,I,A,b,T,S)}L!=null&&w&&lo(L,f&&f.ref,I,p||f,!p)},P=(f,p,g,m)=>{if(f==null)s(p.el=a(p.children),g,m);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},k=(f,p,g,m)=>{f==null?s(p.el=c(p.children||""),g,m):p.el=f.el},D=(f,p,g,m)=>{[f.el,f.anchor]=v(f.children,p,g,m,f.el,f.anchor)},W=({el:f,anchor:p},g,m)=>{let w;for(;f&&f!==p;)w=d(f),s(f,g,m),f=w;s(p,g,m)},x=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},le=(f,p,g,m,w,I,A,b,T)=>{A=A||p.type==="svg",f==null?ue(p,g,m,w,I,A,b,T):rt(f,p,w,I,A,b,T)},ue=(f,p,g,m,w,I,A,b)=>{let T,E;const{type:L,props:N,shapeFlag:F,transition:B,dirs:j}=f;if(T=f.el=o(f.type,I,N&&N.is,N),F&8?u(T,f.children):F&16&&$e(f.children,T,null,m,w,I&&L!=="foreignObject",A,b),j&&en(f,null,m,"created"),Re(T,f,f.scopeId,A,m),N){for(const Z in N)Z!=="value"&&!pi(Z)&&r(T,Z,null,N[Z],I,f.children,m,w,Ie);"value"in N&&r(T,"value",null,N.value),(E=N.onVnodeBeforeMount)&&lt(E,m,f)}j&&en(f,null,m,"beforeMount");const se=K_(w,B);se&&B.beforeEnter(T),s(T,p,g),((E=N&&N.onVnodeMounted)||se||j)&&Oe(()=>{E&&lt(E,m,f),se&&B.enter(T),j&&en(f,null,m,"mounted")},w)},Re=(f,p,g,m,w)=>{if(g&&_(f,g),m)for(let I=0;I<m.length;I++)_(f,m[I]);if(w){let I=w.subTree;if(p===I){const A=w.vnode;Re(f,A,A.scopeId,A.slotScopeIds,w.parent)}}},$e=(f,p,g,m,w,I,A,b,T=0)=>{for(let E=T;E<f.length;E++){const L=f[E]=b?$t(f[E]):ut(f[E]);C(null,L,p,g,m,w,I,A,b)}},rt=(f,p,g,m,w,I,A)=>{const b=p.el=f.el;let{patchFlag:T,dynamicChildren:E,dirs:L}=p;T|=f.patchFlag&16;const N=f.props||ae,F=p.props||ae;let B;g&&tn(g,!1),(B=F.onVnodeBeforeUpdate)&&lt(B,g,p,f),L&&en(p,f,g,"beforeUpdate"),g&&tn(g,!0);const j=w&&p.type!=="foreignObject";if(E?Be(f.dynamicChildren,E,b,g,m,j,I):A||Y(f,p,b,null,g,m,j,I,!1),T>0){if(T&16)Mt(b,p,N,F,g,m,w);else if(T&2&&N.class!==F.class&&r(b,"class",null,F.class,w),T&4&&r(b,"style",N.style,F.style,w),T&8){const se=p.dynamicProps;for(let Z=0;Z<se.length;Z++){const he=se[Z],ze=N[he],Nn=F[he];(Nn!==ze||he==="value")&&r(b,he,ze,Nn,w,f.children,g,m,Ie)}}T&1&&f.children!==p.children&&u(b,p.children)}else!A&&E==null&&Mt(b,p,N,F,g,m,w);((B=F.onVnodeUpdated)||L)&&Oe(()=>{B&&lt(B,g,p,f),L&&en(p,f,g,"updated")},m)},Be=(f,p,g,m,w,I,A)=>{for(let b=0;b<p.length;b++){const T=f[b],E=p[b],L=T.el&&(T.type===Et||!vs(T,E)||T.shapeFlag&70)?h(T.el):g;C(T,E,L,null,m,w,I,A,!0)}},Mt=(f,p,g,m,w,I,A)=>{if(g!==m){if(g!==ae)for(const b in g)!pi(b)&&!(b in m)&&r(f,b,g[b],null,A,p.children,w,I,Ie);for(const b in m){if(pi(b))continue;const T=m[b],E=g[b];T!==E&&b!=="value"&&r(f,b,E,T,A,p.children,w,I,Ie)}"value"in m&&r(f,"value",g.value,m.value)}},Zt=(f,p,g,m,w,I,A,b,T)=>{const E=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:B}=p;B&&(b=b?b.concat(B):B),f==null?(s(E,g,m),s(L,g,m),$e(p.children,g,L,w,I,A,b,T)):N>0&&N&64&&F&&f.dynamicChildren?(Be(f.dynamicChildren,F,g,w,I,A,b),(p.key!=null||w&&p===w.subTree)&&lh(f,p,!0)):Y(f,p,g,L,w,I,A,b,T)},ot=(f,p,g,m,w,I,A,b,T)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?w.ctx.activate(p,g,m,A,T):ms(p,g,m,w,I,A,T):Rn(f,p,T)},ms=(f,p,g,m,w,I,A)=>{const b=f.component=ng(f,m,w);if(Zu(f)&&(b.ctx.renderer=S),sg(b),b.asyncDep){if(w&&w.registerDep(b,fe),!f.el){const T=b.subTree=He($s);k(null,T,p,g)}return}fe(b,f,p,g,w,I,A)},Rn=(f,p,g)=>{const m=p.component=f.component;if(d_(f,p,g))if(m.asyncDep&&!m.asyncResolved){ne(m,p,g);return}else m.next=p,r_(m.update),m.update();else p.el=f.el,m.vnode=p},fe=(f,p,g,m,w,I,A)=>{const b=()=>{if(f.isMounted){let{next:L,bu:N,u:F,parent:B,vnode:j}=f,se=L,Z;tn(f,!1),L?(L.el=j.el,ne(f,L,A)):L=j,N&&Er(N),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&lt(Z,B,L,j),tn(f,!0);const he=Tr(f),ze=f.subTree;f.subTree=he,C(ze,he,h(ze.el),y(ze),f,w,I),L.el=he.el,se===null&&f_(f,he.el),F&&Oe(F,w),(Z=L.props&&L.props.onVnodeUpdated)&&Oe(()=>lt(Z,B,L,j),w)}else{let L;const{el:N,props:F}=p,{bm:B,m:j,parent:se}=f,Z=_i(p);if(tn(f,!1),B&&Er(B),!Z&&(L=F&&F.onVnodeBeforeMount)&&lt(L,se,p),tn(f,!0),N&&Q){const he=()=>{f.subTree=Tr(f),Q(N,f.subTree,f,w,null)};Z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&he()):he()}else{const he=f.subTree=Tr(f);C(null,he,g,m,f,w,I),p.el=he.el}if(j&&Oe(j,w),!Z&&(L=F&&F.onVnodeMounted)){const he=p;Oe(()=>lt(L,se,he),w)}(p.shapeFlag&256||se&&_i(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Oe(f.a,w),f.isMounted=!0,p=g=m=null}},T=f.effect=new Yo(b,()=>ta(E),f.scope),E=f.update=()=>T.run();E.id=f.uid,tn(f,!0),E()},ne=(f,p,g)=>{p.component=f;const m=f.vnode.props;f.vnode=p,f.next=null,B_(f,p.props,m,g),j_(f,p.children,g),as(),fc(f),cs()},Y=(f,p,g,m,w,I,A,b,T=!1)=>{const E=f&&f.children,L=f?f.shapeFlag:0,N=p.children,{patchFlag:F,shapeFlag:B}=p;if(F>0){if(F&128){xt(E,N,g,m,w,I,A,b,T);return}else if(F&256){vt(E,N,g,m,w,I,A,b,T);return}}B&8?(L&16&&Ie(E,w,I),N!==E&&u(g,N)):L&16?B&16?xt(E,N,g,m,w,I,A,b,T):Ie(E,w,I,!0):(L&8&&u(g,""),B&16&&$e(N,g,m,w,I,A,b,T))},vt=(f,p,g,m,w,I,A,b,T)=>{f=f||$n,p=p||$n;const E=f.length,L=p.length,N=Math.min(E,L);let F;for(F=0;F<N;F++){const B=p[F]=T?$t(p[F]):ut(p[F]);C(f[F],B,g,null,w,I,A,b,T)}E>L?Ie(f,w,I,!0,!1,N):$e(p,g,m,w,I,A,b,T,N)},xt=(f,p,g,m,w,I,A,b,T)=>{let E=0;const L=p.length;let N=f.length-1,F=L-1;for(;E<=N&&E<=F;){const B=f[E],j=p[E]=T?$t(p[E]):ut(p[E]);if(vs(B,j))C(B,j,g,null,w,I,A,b,T);else break;E++}for(;E<=N&&E<=F;){const B=f[N],j=p[F]=T?$t(p[F]):ut(p[F]);if(vs(B,j))C(B,j,g,null,w,I,A,b,T);else break;N--,F--}if(E>N){if(E<=F){const B=F+1,j=B<L?p[B].el:m;for(;E<=F;)C(null,p[E]=T?$t(p[E]):ut(p[E]),g,j,w,I,A,b,T),E++}}else if(E>F)for(;E<=N;)Ae(f[E],w,I,!0),E++;else{const B=E,j=E,se=new Map;for(E=j;E<=F;E++){const Le=p[E]=T?$t(p[E]):ut(p[E]);Le.key!=null&&se.set(Le.key,E)}let Z,he=0;const ze=F-j+1;let Nn=!1,nc=0;const ys=new Array(ze);for(E=0;E<ze;E++)ys[E]=0;for(E=B;E<=N;E++){const Le=f[E];if(he>=ze){Ae(Le,w,I,!0);continue}let ct;if(Le.key!=null)ct=se.get(Le.key);else for(Z=j;Z<=F;Z++)if(ys[Z-j]===0&&vs(Le,p[Z])){ct=Z;break}ct===void 0?Ae(Le,w,I,!0):(ys[ct-j]=E+1,ct>=nc?nc=ct:Nn=!0,C(Le,p[ct],g,null,w,I,A,b,T),he++)}const sc=Nn?q_(ys):$n;for(Z=sc.length-1,E=ze-1;E>=0;E--){const Le=j+E,ct=p[Le],ic=Le+1<L?p[Le+1].el:m;ys[E]===0?C(null,ct,g,ic,w,I,A,b,T):Nn&&(Z<0||E!==sc[Z]?at(ct,g,ic,2):Z--)}}},at=(f,p,g,m,w=null)=>{const{el:I,type:A,transition:b,children:T,shapeFlag:E}=f;if(E&6){at(f.component.subTree,p,g,m);return}if(E&128){f.suspense.move(p,g,m);return}if(E&64){A.move(f,p,g,S);return}if(A===Et){s(I,p,g);for(let N=0;N<T.length;N++)at(T[N],p,g,m);s(f.anchor,p,g);return}if(A===Sr){W(f,p,g);return}if(m!==2&&E&1&&b)if(m===0)b.beforeEnter(I),s(I,p,g),Oe(()=>b.enter(I),w);else{const{leave:N,delayLeave:F,afterLeave:B}=b,j=()=>s(I,p,g),se=()=>{N(I,()=>{j(),B&&B()})};F?F(I,j,se):se()}else s(I,p,g)},Ae=(f,p,g,m=!1,w=!1)=>{const{type:I,props:A,ref:b,children:T,dynamicChildren:E,shapeFlag:L,patchFlag:N,dirs:F}=f;if(b!=null&&lo(b,null,g,f,!0),L&256){p.ctx.deactivate(f);return}const B=L&1&&F,j=!_i(f);let se;if(j&&(se=A&&A.onVnodeBeforeUnmount)&&lt(se,p,f),L&6)ii(f.component,g,m);else{if(L&128){f.suspense.unmount(g,m);return}B&&en(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,g,w,S,m):E&&(I!==Et||N>0&&N&64)?Ie(E,p,g,!1,!0):(I===Et&&N&384||!w&&L&16)&&Ie(T,p,g),m&&An(f)}(j&&(se=A&&A.onVnodeUnmounted)||B)&&Oe(()=>{se&&lt(se,p,f),B&&en(f,null,p,"unmounted")},g)},An=f=>{const{type:p,el:g,anchor:m,transition:w}=f;if(p===Et){On(g,m);return}if(p===Sr){x(f);return}const I=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:b}=w,T=()=>A(g,I);b?b(f.el,I,T):T()}else I()},On=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},ii=(f,p,g)=>{const{bum:m,scope:w,update:I,subTree:A,um:b}=f;m&&Er(m),w.stop(),I&&(I.active=!1,Ae(A,f,p,g)),b&&Oe(b,p),Oe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ie=(f,p,g,m=!1,w=!1,I=0)=>{for(let A=I;A<f.length;A++)Ae(f[A],p,g,m,w)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),O=(f,p,g)=>{f==null?p._vnode&&Ae(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),fc(),zu(),p._vnode=f},S={p:C,um:Ae,m:at,r:An,mt:ms,mc:$e,pc:Y,pbc:Be,n:y,o:t};let M,Q;return e&&([M,Q]=e(S)),{render:O,hydrate:M,createApp:U_(O,M)}}function tn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function K_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lh(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=$t(i[r]),a.el=o.el),n||lh(o,a)),a.type===nr&&(a.el=o.el)}}function q_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const G_=t=>t.__isTeleport,Et=Symbol.for("v-fgt"),nr=Symbol.for("v-txt"),$s=Symbol.for("v-cmt"),Sr=Symbol.for("v-stc"),As=[];let Je=null;function nS(t=!1){As.push(Je=t?null:[])}function Y_(){As.pop(),Je=As[As.length-1]||null}let Bs=1;function Tc(t){Bs+=t}function uh(t){return t.dynamicChildren=Bs>0?Je||$n:null,Y_(),Bs>0&&Je&&Je.push(t),t}function sS(t,e,n,s,i,r){return uh(dh(t,e,n,s,i,r,!0))}function iS(t,e,n,s,i){return uh(He(t,e,n,s,i,!0))}function uo(t){return t?t.__v_isVNode===!0:!1}function vs(t,e){return t.type===e.type&&t.key===e.key}const sr="__vInternal",hh=({key:t})=>t??null,mi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||Me(t)||H(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function dh(t,e=null,n=null,s=0,i=null,r=t===Et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hh(e),ref:e&&mi(e),scopeId:Gu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(ia(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),Bs>0&&!o&&Je&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Je.push(c),c}const He=Q_;function Q_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===p_)&&(t=$s),uo(t)){const a=Jn(t,e,!0);return n&&ia(a,n),Bs>0&&!r&&Je&&(a.shapeFlag&6?Je[Je.indexOf(t)]=a:Je.push(a)),a.patchFlag|=-2,a}if(cg(t)&&(t=t.__vccOpts),e){e=J_(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=qo(a)),ce(c)&&(Lu(c)&&!$(c)&&(c=we({},c)),e.style=Ko(c))}const o=ge(t)?1:g_(t)?128:G_(t)?64:ce(t)?4:H(t)?2:0;return dh(t,e,n,s,i,o,r,!0)}function J_(t){return t?Lu(t)||sr in t?we({},t):t:null}function Jn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Z_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hh(a),ref:e&&e.ref?n&&i?$(i)?i.concat(mi(e)):[i,mi(e)]:mi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function X_(t=" ",e=0){return He(nr,null,t,e)}function ut(t){return t==null||typeof t=="boolean"?He($s):$(t)?He(Et,null,t.slice()):typeof t=="object"?$t(t):He(nr,null,String(t))}function $t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jn(t)}function ia(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ia(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(sr in e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[X_(e)]):n=8);t.children=e,t.shapeFlag|=n}function Z_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=qo([e.class,s.class]));else if(i==="style")e.style=Ko([e.style,s.style]);else if(Gi(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){Ze(t,e,7,[n,s])}const eg=sh();let tg=0;function ng(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||eg,r={uid:tg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rh(s,i),emitsOptions:qu(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=c_.bind(null,r),t.ce&&t.ce(r),r}let ye=null,ra,Pn,Cc="__VUE_INSTANCE_SETTERS__";(Pn=Zr()[Cc])||(Pn=Zr()[Cc]=[]),Pn.push(t=>ye=t),ra=t=>{Pn.length>1?Pn.forEach(e=>e(t)):Pn[0](t)};const Xn=t=>{ra(t),t.scope.on()},hn=()=>{ye&&ye.scope.off(),ra(null)};function fh(t){return t.vnode.shapeFlag&4}let Hs=!1;function sg(t,e=!1){Hs=e;const{props:n,children:s}=t.vnode,i=fh(t);$_(t,n,i,e),W_(t,s);const r=i?ig(t,e):void 0;return Hs=!1,r}function ig(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fu(new Proxy(t.ctx,P_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?og(t):null;Xn(t),as();const r=Kt(s,t,0,[t.props,i]);if(cs(),hn(),vu(r)){if(r.then(hn,hn),e)return r.then(o=>{Sc(t,o,e)}).catch(o=>{Zi(o,t,0)});t.asyncDep=r}else Sc(t,r,e)}else ph(t,e)}function Sc(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Hu(e)),ph(t,n)}let Rc;function ph(t,e,n){const s=t.type;if(!t.render){if(!e&&Rc&&!s.render){const i=s.template||na(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=we(we({isCustomElement:r,delimiters:a},o),c);s.render=Rc(i,l)}}t.render=s.render||ft}{Xn(t),as();try{k_(t)}finally{cs(),hn()}}}function rg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}}))}function og(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rg(t)},slots:t.slots,emit:t.emit,expose:e}}function oa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hu(Fu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rs)return Rs[n](t)},has(e,n){return n in e||n in Rs}}))}function ag(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function cg(t){return H(t)&&"__vccOpts"in t}const Ge=(t,e)=>n_(t,e,Hs);function _h(t,e,n){const s=arguments.length;return s===2?ce(e)&&!$(e)?uo(e)?He(t,null,[e]):He(t,e):He(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&uo(n)&&(n=[n]),He(t,e,n))}const lg=Symbol.for("v-scx"),ug=()=>et(lg),hg="3.3.13",dg="http://www.w3.org/2000/svg",on=typeof document<"u"?document:null,Ac=on&&on.createElement("template"),fg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?on.createElementNS(dg,t):on.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ac.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ac.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pg=Symbol("_vtc");function _g(t,e,n){const s=t[pg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gg=Symbol("_vod"),mg=Symbol("");function yg(t,e,n){const s=t.style,i=ge(n);if(n&&!i){if(e&&!ge(e))for(const r in e)n[r]==null&&ho(s,r,"");for(const r in n)ho(s,r,n[r])}else{const r=s.display;if(i){if(e!==n){const o=s[mg];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");gg in t&&(s.display=r)}}const Oc=/\s*!important$/;function ho(t,e,n){if($(n))n.forEach(s=>ho(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=vg(t,e);Oc.test(n)?t.setProperty(os(s),n.replace(Oc,""),"important"):t[s]=n}}const Nc=["Webkit","Moz","ms"],Rr={};function vg(t,e){const n=Rr[e];if(n)return n;let s=gt(e);if(s!=="filter"&&s in t)return Rr[e]=s;s=Ji(s);for(let i=0;i<Nc.length;i++){const r=Nc[i]+s;if(r in t)return Rr[e]=r}return e}const Pc="http://www.w3.org/1999/xlink";function wg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pc,e.slice(6,e.length)):t.setAttributeNS(Pc,e,n);else{const r=Rp(e);n==null||r&&!Eu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ig(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Eu(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Eg(t,e,n,s){t.addEventListener(e,n,s)}function bg(t,e,n,s){t.removeEventListener(e,n,s)}const kc=Symbol("_vei");function Tg(t,e,n,s,i=null){const r=t[kc]||(t[kc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=Cg(e);if(s){const l=r[e]=Ag(s,i);Eg(t,a,l,c)}else o&&(bg(t,a,o,c),r[e]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function Cg(t){let e;if(Dc.test(t)){e={};let s;for(;s=t.match(Dc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let Ar=0;const Sg=Promise.resolve(),Rg=()=>Ar||(Sg.then(()=>Ar=0),Ar=Date.now());function Ag(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ze(Og(s,n.value),e,5,[s])};return n.value=t,n.attached=Rg(),n}function Og(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Mc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ng=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?_g(t,s,i):e==="style"?yg(t,n,s):Gi(e)?jo(e)||Tg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pg(t,e,s,i))?Ig(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),wg(t,e,s,i))};function Pg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mc(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Mc(e)&&ge(n)?!1:e in t}const kg=we({patchProp:Ng},fg);let xc;function Dg(){return xc||(xc=V_(kg))}const rS=(...t)=>{const e=Dg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Mg(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mg(t){return ge(t)?document.querySelector(t):t}function xg(){return gh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function gh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Lg=typeof Proxy=="function",Fg="devtools-plugin:setup",Ug="plugin:settings:set";let kn,fo;function $g(){var t;return kn!==void 0||(typeof window<"u"&&window.performance?(kn=!0,fo=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(kn=!0,fo=global.perf_hooks.performance):kn=!1),kn}function Bg(){return $g()?fo.now():Date.now()}class Hg{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return Bg()}},n&&n.on(Ug,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Wg(t,e){const n=t,s=gh(),i=xg(),r=Lg&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(Fg,t,e);else{const o=r?new Hg(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var mh="store";function oS(t){return t===void 0&&(t=null),et(t!==null?t:mh)}function ls(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function jg(t){return t!==null&&typeof t=="object"}function Vg(t){return t&&typeof t.then=="function"}function zg(t,e){return function(){return t(e)}}function yh(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function vh(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ir(t,n,[],t._modules.root,!0),aa(t,n,e)}function aa(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};ls(i,function(o,a){r[a]=zg(o,t),Object.defineProperty(t.getters,a,{get:function(){return r[a]()},enumerable:!0})}),t._state=Qs({data:e}),t.strict&&Qg(t),s&&n&&t._withCommit(function(){s.data=null})}function ir(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=ca(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=Kg(t,o,n);s.forEachMutation(function(u,h){var d=o+h;qg(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,_=u.handler||u;Gg(t,d,_,l)}),s.forEachGetter(function(u,h){var d=o+h;Yg(t,d,u,l)}),s.forEachChild(function(u,h){ir(t,e,n.concat(h),u,i)})}function Kg(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var c=Ri(r,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(r,o,a){var c=Ri(r,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return wh(t,e)}},state:{get:function(){return ca(t.state,n)}}}),i}function wh(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function qg(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function Gg(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return Vg(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Yg(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function Qg(t){Vn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function ca(t,e){return e.reduce(function(n,s){return n[s]},t)}function Ri(t,e,n){return jg(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Jg="vuex bindings",Lc="vuex:mutations",Or="vuex:actions",Dn="vuex",Xg=0;function Zg(t,e){Wg({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Jg]},function(n){n.addTimelineLayer({id:Lc,label:"Vuex Mutations",color:Fc}),n.addTimelineLayer({id:Or,label:"Vuex Actions",color:Fc}),n.addInspector({id:Dn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Dn)if(s.filter){var i=[];Th(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[bh(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Dn){var i=s.nodeId;wh(e,i),s.state=nm(im(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Dn){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Dn),n.sendInspectorState(Dn),n.addTimelineEvent({layerId:Lc,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=Xg++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Or,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Or,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Fc=8702998,em=6710886,tm=16777215,Ih={label:"namespaced",textColor:tm,backgroundColor:em};function Eh(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function bh(t,e){return{id:e||"root",label:Eh(e),tags:t.namespaced?[Ih]:[],children:Object.keys(t._children).map(function(n){return bh(t._children[n],e+n+"/")})}}function Th(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Ih]:[]}),Object.keys(e._children).forEach(function(i){Th(t,e._children[i],n,s+i+"/")})}function nm(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=sm(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Eh(o):o,editable:!1,value:po(function(){return r[o]})}})}return i}function sm(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=po(function(){return t[n]})}else e[n]=po(function(){return t[n]})}),e}function im(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function po(t){try{return t()}catch(e){return e}}var it=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Ch={namespaced:{configurable:!0}};Ch.namespaced.get=function(){return!!this._rawModule.namespaced};it.prototype.addChild=function(e,n){this._children[e]=n};it.prototype.removeChild=function(e){delete this._children[e]};it.prototype.getChild=function(e){return this._children[e]};it.prototype.hasChild=function(e){return e in this._children};it.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};it.prototype.forEachChild=function(e){ls(this._children,e)};it.prototype.forEachGetter=function(e){this._rawModule.getters&&ls(this._rawModule.getters,e)};it.prototype.forEachAction=function(e){this._rawModule.actions&&ls(this._rawModule.actions,e)};it.prototype.forEachMutation=function(e){this._rawModule.mutations&&ls(this._rawModule.mutations,e)};Object.defineProperties(it.prototype,Ch);var En=function(e){this.register([],e,!1)};En.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};En.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};En.prototype.update=function(e){Sh([],this.root,e)};En.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new it(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&ls(n.modules,function(a,c){i.register(e.concat(c),a,s)})};En.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};En.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Sh(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Sh(t.concat(s),e.getChild(s),n.modules[s])}}function aS(t){return new xe(t)}var xe=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new En(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,_){return c.call(o,d,_)},this.commit=function(d,_,v){return l.call(o,d,_,v)},this.strict=i;var u=this._modules.root.state;ir(this,u,[],this._modules.root),aa(this,u),s.forEach(function(h){return h(n)})},la={state:{configurable:!0}};xe.prototype.install=function(e,n){e.provide(n||mh,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Zg(e,this)};la.state.get=function(){return this._state.data};la.state.set=function(t){};xe.prototype.commit=function(e,n,s){var i=this,r=Ri(e,n,s),o=r.type,a=r.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};xe.prototype.dispatch=function(e,n){var s=this,i=Ri(e,n),r=i.type,o=i.payload,a={type:r,payload:o},c=this._actions[r];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(a,s.state,d)})}catch{}h(d)})})}};xe.prototype.subscribe=function(e,n){return yh(e,this._subscribers,n)};xe.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return yh(s,this._actionSubscribers,n)};xe.prototype.watch=function(e,n,s){var i=this;return Vn(function(){return e(i.state,i.getters)},n,Object.assign({},s))};xe.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};xe.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ir(this,this.state,e,this._modules.get(e),s.preserveState),aa(this,this.state)};xe.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=ca(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),vh(this)};xe.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};xe.prototype.hotUpdate=function(e){this._modules.update(e),vh(this,!0)};xe.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(xe.prototype,la);var Uc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw us(e)},us=function(t){return new Error("Firebase Database ("+Rh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ah(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new om;const d=r<<2|a>>4;if(s.push(d),l!==64){const _=a<<4&240|l>>2;if(s.push(_),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class om extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oh=function(t){const e=Ah(t);return ua.encodeByteArray(e,!0)},Ai=function(t){return Oh(t).replace(/\./g,"")},Oi=function(t){try{return ua.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){return Nh(void 0,t)}function Nh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cm(n)||(t[n]=Nh(t[n],e[n]));return t}function cm(t){return t!=="__proto__"}/**
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
 */function lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const um=()=>lm().__FIREBASE_DEFAULTS__,hm=()=>{if(typeof process>"u"||typeof Uc>"u")return;const t=Uc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oi(t[1]);return e&&JSON.parse(e)},ha=()=>{try{return um()||hm()||dm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ph=t=>{var e,n;return(n=(e=ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fm=t=>{const e=Ph(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kh=()=>{var t;return(t=ha())===null||t===void 0?void 0:t.config},Dh=t=>{var e;return(e=ha())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function pm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ai(JSON.stringify(n)),Ai(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function da(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Mh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _m(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lh(){return Rh.NODE_ADMIN===!0}function Fh(){try{return typeof indexedDB=="object"}catch{return!1}}function Uh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function gm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="FirebaseError";class yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mm,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ym(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yt(i,a,s)}}function ym(t,e){return t.replace(vm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $h=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ws(Oi(r[0])||""),n=Ws(Oi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},wm=function(t){const e=$h(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Im=function(t){const e=$h(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _o(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ni(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function js(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($c(r)&&$c(o)){if(!js(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $c(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Em{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function bm(t,e){const n=new Tm(t,e);return n.subscribe.bind(n)}class Tm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Nr),i.error===void 0&&(i.error=Nr),i.complete===void 0&&(i.complete=Nr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nr(){}function fa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,R(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},or=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Rm=1e3,Am=2,Om=4*60*60*1e3,Nm=.5;function Bc(t,e=Rm,n=Am){const s=e*Math.pow(n,t),i=Math.round(Nm*s*(Math.random()-.5)*2);return Math.min(Om,s+i)}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class nt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Pm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dm(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:km(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function km(t){return t===nn?void 0:t}function Dm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const xm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Lm=ee.INFO,Fm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Um=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Fm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ar{constructor(e){this.name=e,this._logLevel=Lm,this._logHandler=Um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const $m=(t,e)=>e.some(n=>t instanceof n);let Hc,Wc;function Bm(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hm(){return Wc||(Wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bh=new WeakMap,go=new WeakMap,Hh=new WeakMap,Pr=new WeakMap,pa=new WeakMap;function Wm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bh.set(n,t)}).catch(()=>{}),pa.set(e,t),e}function jm(t){if(go.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});go.set(t,e)}let mo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return go.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vm(t){mo=t(mo)}function zm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(kr(this),e,...n);return Hh.set(s,e.sort?e.sort():[e]),qt(s)}:Hm().includes(t)?function(...e){return t.apply(kr(this),e),qt(Bh.get(this))}:function(...e){return qt(t.apply(kr(this),e))}}function Km(t){return typeof t=="function"?zm(t):(t instanceof IDBTransaction&&jm(t),$m(t,Bm())?new Proxy(t,mo):t)}function qt(t){if(t instanceof IDBRequest)return Wm(t);if(Pr.has(t))return Pr.get(t);const e=Km(t);return e!==t&&(Pr.set(t,e),pa.set(e,t)),e}const kr=t=>pa.get(t);function qm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=qt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(qt(o.result),c.oldVersion,c.newVersion,qt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gm=["get","getKey","getAll","getAllKeys","count"],Ym=["put","add","delete","clear"],Dr=new Map;function jc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ym.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Gm.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Dr.set(e,r),r}Vm(t=>({...t,get:(e,n,s)=>jc(e,n)||t.get(e,n,s),has:(e,n)=>!!jc(e,n)||t.has(e,n)}));/**
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
 */class Qm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",Vc="0.9.25";/**
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
 */const _n=new ar("@firebase/app"),Xm="@firebase/app-compat",Zm="@firebase/analytics-compat",ey="@firebase/analytics",ty="@firebase/app-check-compat",ny="@firebase/app-check",sy="@firebase/auth",iy="@firebase/auth-compat",ry="@firebase/database",oy="@firebase/database-compat",ay="@firebase/functions",cy="@firebase/functions-compat",ly="@firebase/installations",uy="@firebase/installations-compat",hy="@firebase/messaging",dy="@firebase/messaging-compat",fy="@firebase/performance",py="@firebase/performance-compat",_y="@firebase/remote-config",gy="@firebase/remote-config-compat",my="@firebase/storage",yy="@firebase/storage-compat",vy="@firebase/firestore",wy="@firebase/firestore-compat",Iy="firebase",Ey="10.7.1";/**
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
 */const vo="[DEFAULT]",by={[yo]:"fire-core",[Xm]:"fire-core-compat",[ey]:"fire-analytics",[Zm]:"fire-analytics-compat",[ny]:"fire-app-check",[ty]:"fire-app-check-compat",[sy]:"fire-auth",[iy]:"fire-auth-compat",[ry]:"fire-rtdb",[oy]:"fire-rtdb-compat",[ay]:"fire-fn",[cy]:"fire-fn-compat",[ly]:"fire-iid",[uy]:"fire-iid-compat",[hy]:"fire-fcm",[dy]:"fire-fcm-compat",[fy]:"fire-perf",[py]:"fire-perf-compat",[_y]:"fire-rc",[gy]:"fire-rc-compat",[my]:"fire-gcs",[yy]:"fire-gcs-compat",[vy]:"fire-fst",[wy]:"fire-fst-compat","fire-js":"fire-js",[Iy]:"fire-js-all"};/**
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
 */const Pi=new Map,wo=new Map;function Ty(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mt(t){const e=t.name;if(wo.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;wo.set(e,t);for(const n of Pi.values())Ty(n,t);return!0}function Tn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new bn("app","Firebase",Cy);/**
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
 */class Sy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=Ey;function Ry(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:vo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=kh()),!n)throw Gt.create("no-options");const r=Pi.get(i);if(r){if(js(n,r.options)&&js(s,r.config))return r;throw Gt.create("duplicate-app",{appName:i})}const o=new Mm(i);for(const c of wo.values())o.addComponent(c);const a=new Sy(n,s,o);return Pi.set(i,a),a}function _a(t=vo){const e=Pi.get(t);if(!e&&t===vo&&kh())return Ry();if(!e)throw Gt.create("no-app",{appName:t});return e}function je(t,e,n){var s;let i=(s=by[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(a.join(" "));return}mt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ay="firebase-heartbeat-database",Oy=1,Vs="firebase-heartbeat-store";let Mr=null;function Wh(){return Mr||(Mr=qm(Ay,Oy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vs)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Mr}async function Ny(t){try{return await(await Wh()).transaction(Vs).objectStore(Vs).get(jh(t))}catch(e){if(e instanceof yt)_n.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function zc(t,e){try{const s=(await Wh()).transaction(Vs,"readwrite");await s.objectStore(Vs).put(e,jh(t)),await s.done}catch(n){if(n instanceof yt)_n.warn(n.message);else{const s=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(s.message)}}}function jh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Py=1024,ky=30*24*60*60*1e3;class Dy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ky}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kc(),{heartbeatsToSend:s,unsentEntries:i}=My(this._heartbeatsCache.heartbeats),r=Ai(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Kc(){return new Date().toISOString().substring(0,10)}function My(t,e=Py){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fh()?Uh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ny(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qc(t){return Ai(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ly(t){mt(new nt("platform-logger",e=>new Qm(e),"PRIVATE")),mt(new nt("heartbeat",e=>new Dy(e),"PRIVATE")),je(yo,Vc,t),je(yo,Vc,"esm2017"),je("fire-js","")}Ly("");var Fy="firebase",Uy="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(Fy,Uy,"app");const $y=(t,e)=>e.some(n=>t instanceof n);let Gc,Yc;function By(){return Gc||(Gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hy(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,Io=new WeakMap,zh=new WeakMap,xr=new WeakMap,ga=new WeakMap;function Wy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Yt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vh.set(n,t)}).catch(()=>{}),ga.set(e,t),e}function jy(t){if(Io.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Io.set(t,e)}let Eo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Io.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vy(t){Eo=t(Eo)}function zy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lr(this),e,...n);return zh.set(s,e.sort?e.sort():[e]),Yt(s)}:Hy().includes(t)?function(...e){return t.apply(Lr(this),e),Yt(Vh.get(this))}:function(...e){return Yt(t.apply(Lr(this),e))}}function Ky(t){return typeof t=="function"?zy(t):(t instanceof IDBTransaction&&jy(t),$y(t,By())?new Proxy(t,Eo):t)}function Yt(t){if(t instanceof IDBRequest)return Wy(t);if(xr.has(t))return xr.get(t);const e=Ky(t);return e!==t&&(xr.set(t,e),ga.set(e,t)),e}const Lr=t=>ga.get(t);function qy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Yt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Yt(o.result),c.oldVersion,c.newVersion,Yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Gy=["get","getKey","getAll","getAllKeys","count"],Yy=["put","add","delete","clear"],Fr=new Map;function Qc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fr.get(e))return Fr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Yy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Gy.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Fr.set(e,r),r}Vy(t=>({...t,get:(e,n,s)=>Qc(e,n)||t.get(e,n,s),has:(e,n)=>!!Qc(e,n)||t.has(e,n)}));const Kh="@firebase/installations",ma="0.6.4";/**
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
 */const qh=1e4,Gh=`w:${ma}`,Yh="FIS_v2",Qy="https://firebaseinstallations.googleapis.com/v1",Jy=60*60*1e3,Xy="installations",Zy="Installations";/**
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
 */const ev={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gn=new bn(Xy,Zy,ev);function Qh(t){return t instanceof yt&&t.code.includes("request-failed")}/**
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
 */function Jh({projectId:t}){return`${Qy}/projects/${t}/installations`}function Xh(t){return{token:t.token,requestStatus:2,expiresIn:nv(t.expiresIn),creationTime:Date.now()}}async function Zh(t,e){const s=(await e.json()).error;return gn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ed({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tv(t,{refreshToken:e}){const n=ed(t);return n.append("Authorization",sv(e)),n}async function td(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nv(t){return Number(t.replace("s","000"))}function sv(t){return`${Yh} ${t}`}/**
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
 */async function iv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Jh(t),i=ed(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Yh,appId:t.appId,sdkVersion:Gh},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await td(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Xh(l.authToken)}}else throw await Zh("Create Installation",c)}/**
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
 */function nd(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function rv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ov=/^[cdef][\w-]{21}$/,bo="";function av(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cv(t);return ov.test(n)?n:bo}catch{return bo}}function cv(t){return rv(t).substr(0,22)}/**
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
 */function cr(t){return`${t.appName}!${t.appId}`}/**
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
 */const sd=new Map;function id(t,e){const n=cr(t);rd(n,e),lv(n,e)}function rd(t,e){const n=sd.get(t);if(n)for(const s of n)s(e)}function lv(t,e){const n=uv();n&&n.postMessage({key:t,fid:e}),hv()}let an=null;function uv(){return!an&&"BroadcastChannel"in self&&(an=new BroadcastChannel("[Firebase] FID Change"),an.onmessage=t=>{rd(t.data.key,t.data.fid)}),an}function hv(){sd.size===0&&an&&(an.close(),an=null)}/**
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
 */const dv="firebase-installations-database",fv=1,mn="firebase-installations-store";let Ur=null;function ya(){return Ur||(Ur=qy(dv,fv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mn)}}})),Ur}async function ki(t,e){const n=cr(t),i=(await ya()).transaction(mn,"readwrite"),r=i.objectStore(mn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&id(t,e.fid),e}async function od(t){const e=cr(t),s=(await ya()).transaction(mn,"readwrite");await s.objectStore(mn).delete(e),await s.done}async function lr(t,e){const n=cr(t),i=(await ya()).transaction(mn,"readwrite"),r=i.objectStore(mn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&id(t,a.fid),a}/**
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
 */async function va(t){let e;const n=await lr(t.appConfig,s=>{const i=pv(s),r=_v(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===bo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pv(t){const e=t||{fid:av(),registrationStatus:0};return ad(e)}function _v(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(gn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=gv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mv(t)}:{installationEntry:e}}async function gv(t,e){try{const n=await iv(t,e);return ki(t.appConfig,n)}catch(n){throw Qh(n)&&n.customData.serverCode===409?await od(t.appConfig):await ki(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mv(t){let e=await Jc(t.appConfig);for(;e.registrationStatus===1;)await nd(100),e=await Jc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await va(t);return s||n}return e}function Jc(t){return lr(t,e=>{if(!e)throw gn.create("installation-not-found");return ad(e)})}function ad(t){return yv(t)?{fid:t.fid,registrationStatus:0}:t}function yv(t){return t.registrationStatus===1&&t.registrationTime+qh<Date.now()}/**
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
 */async function vv({appConfig:t,heartbeatServiceProvider:e},n){const s=wv(t,n),i=tv(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Gh,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await td(()=>fetch(s,a));if(c.ok){const l=await c.json();return Xh(l)}else throw await Zh("Generate Auth Token",c)}function wv(t,{fid:e}){return`${Jh(t)}/${e}/authTokens:generate`}/**
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
 */async function wa(t,e=!1){let n;const s=await lr(t.appConfig,r=>{if(!cd(r))throw gn.create("not-registered");const o=r.authToken;if(!e&&bv(o))return r;if(o.requestStatus===1)return n=Iv(t,e),r;{if(!navigator.onLine)throw gn.create("app-offline");const a=Cv(r);return n=Ev(t,a),a}});return n?await n:s.authToken}async function Iv(t,e){let n=await Xc(t.appConfig);for(;n.authToken.requestStatus===1;)await nd(100),n=await Xc(t.appConfig);const s=n.authToken;return s.requestStatus===0?wa(t,e):s}function Xc(t){return lr(t,e=>{if(!cd(e))throw gn.create("not-registered");const n=e.authToken;return Sv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ev(t,e){try{const n=await vv(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ki(t.appConfig,s),n}catch(n){if(Qh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await od(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ki(t.appConfig,s)}throw n}}function cd(t){return t!==void 0&&t.registrationStatus===2}function bv(t){return t.requestStatus===2&&!Tv(t)}function Tv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jy}function Cv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Sv(t){return t.requestStatus===1&&t.requestTime+qh<Date.now()}/**
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
 */async function Rv(t){const e=t,{installationEntry:n,registrationPromise:s}=await va(e);return s?s.catch(console.error):wa(e).catch(console.error),n.fid}/**
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
 */async function Av(t,e=!1){const n=t;return await Ov(n),(await wa(n,e)).token}async function Ov(t){const{registrationPromise:e}=await va(t);e&&await e}/**
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
 */function Nv(t){if(!t||!t.options)throw $r("App Configuration");if(!t.name)throw $r("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $r(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $r(t){return gn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="installations",Pv="installations-internal",kv=t=>{const e=t.getProvider("app").getImmediate(),n=Nv(e),s=Tn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Dv=t=>{const e=t.getProvider("app").getImmediate(),n=Tn(e,ld).getImmediate();return{getId:()=>Rv(n),getToken:i=>Av(n,i)}};function Mv(){mt(new nt(ld,kv,"PUBLIC")),mt(new nt(Pv,Dv,"PRIVATE"))}Mv();je(Kh,ma);je(Kh,ma,"esm2017");/**
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
 */const Di="analytics",xv="firebase_id",Lv="origin",Fv=60*1e3,Uv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ia="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pe=new ar("@firebase/analytics");/**
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
 */const $v={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fe=new bn("analytics","Analytics",$v);/**
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
 */function Bv(t){if(!t.startsWith(Ia)){const e=Fe.create("invalid-gtag-resource",{gtagURL:t});return Pe.warn(e.message),""}return t}function ud(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Hv(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Wv(t,e){const n=Hv("firebase-js-sdk-policy",{createScriptURL:Bv}),s=document.createElement("script"),i=`${Ia}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function jv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Vv(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await ud(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){Pe.error(a)}t("config",i,r)}async function zv(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ud(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Pe.error(r)}}function Kv(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await zv(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await Vv(t,e,n,s,a,c)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){Pe.error(a)}}return i}function qv(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Kv(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Gv(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ia)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=30,Qv=1e3;class Jv{constructor(e={},n=Qv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hd=new Jv;function Xv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Zv(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Xv(s)},r=Uv.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Fe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ew(t,e=hd,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Fe.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Fe.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sw;return setTimeout(async()=>{a.abort()},n!==void 0?n:Fv),dd({appId:s,apiKey:i,measurementId:r},o,a,e)}async function dd(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=hd){var r;const{appId:o,measurementId:a}=t;try{await tw(s,e)}catch(c){if(a)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Zv(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!nw(l)){if(i.deleteThrottleMetadata(o),a)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Bc(n,i.intervalMillis,Yv):Bc(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Pe.debug(`Calling attemptFetch again in ${u} millis`),dd(t,h,s,i)}}function tw(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Fe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nw(t){if(!(t instanceof yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iw(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(){if(Fh())try{await Uh()}catch(t){return Pe.warn(Fe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Pe.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ow(t,e,n,s,i,r,o){var a;const c=ew(t);c.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Pe.error(_)),e.push(c);const l=rw().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([c,l]);Gv(r)||Wv(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Lv]="firebase",d.update=!0,h!=null&&(d[xv]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class aw{constructor(e){this.app=e}_delete(){return delete Os[this.app.options.appId],Promise.resolve()}}let Os={},Zc=[];const el={};let Br="dataLayer",cw="gtag",tl,fd,nl=!1;function lw(){const t=[];if(Mh()&&t.push("This is a browser extension environment."),gm()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Fe.create("invalid-analytics-context",{errorInfo:e});Pe.warn(n.message)}}function uw(t,e,n){lw();const s=t.options.appId;if(!s)throw Fe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fe.create("no-api-key");if(Os[s]!=null)throw Fe.create("already-exists",{id:s});if(!nl){jv(Br);const{wrappedGtag:r,gtagCore:o}=qv(Os,Zc,el,Br,cw);fd=r,tl=o,nl=!0}return Os[s]=ow(t,Zc,el,e,tl,Br,n),new aw(t)}function cS(t=_a()){t=Ue(t);const e=Tn(t,Di);return e.isInitialized()?e.getImmediate():hw(t)}function hw(t,e={}){const n=Tn(t,Di);if(n.isInitialized()){const i=n.getImmediate();if(js(e,n.getOptions()))return i;throw Fe.create("already-initialized")}return n.initialize({options:e})}function dw(t,e,n,s){t=Ue(t),iw(fd,Os[t.app.options.appId],e,n,s).catch(i=>Pe.error(i))}const sl="@firebase/analytics",il="0.10.0";function fw(){mt(new nt(Di,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return uw(s,i,n)},"PUBLIC")),mt(new nt("analytics-internal",t,"PRIVATE")),je(sl,il),je(sl,il,"esm2017");function t(e){try{const n=e.getProvider(Di).getImmediate();return{logEvent:(s,i,r)=>dw(n,s,i,r)}}catch(n){throw Fe.create("interop-component-reg-failed",{reason:n})}}}fw();function Ea(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function pd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pw=pd,_d=new bn("auth","Firebase",pd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new ar("@firebase/auth");function _w(t,...e){Mi.logLevel<=ee.WARN&&Mi.warn(`Auth (${ds}): ${t}`,...e)}function yi(t,...e){Mi.logLevel<=ee.ERROR&&Mi.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw ba(t,...e)}function pt(t,...e){return ba(t,...e)}function gw(t,e,n){const s=Object.assign(Object.assign({},pw()),{[e]:n});return new bn("auth","Firebase",s).create(e,{appName:t.name})}function ba(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return _d.create(t,...e)}function U(t,e,...n){if(!t)throw ba(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yi(e),new Error(e)}function Ot(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mw(){return rl()==="http:"||rl()==="https:"}function rl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mw()||Mh()||"connection"in navigator)?navigator.onLine:!0}function vw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=da()||xh()}get(){return yw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new Js(3e4,6e4);function Ca(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fs(t,e,n,s,i={}){return md(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=hs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gd.fetch()(yd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function md(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ww),e);try{const i=new bw(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gw(t,u,l);At(t,u)}}catch(i){if(i instanceof yt)throw i;At(t,"network-request-failed",{message:String(i)})}}async function Ew(t,e,n,s,i={}){const r=await fs(t,e,n,s,i);return"mfaPendingCredential"in r&&At(t,"multi-factor-auth-required",{_serverResponse:r}),r}function yd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ta(t.config,i):`${t.config.apiScheme}://${i}`}class bw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(pt(this.auth,"network-request-failed")),Iw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=pt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function Cw(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sw(t,e=!1){const n=Ue(t),s=await n.getIdToken(e),i=Sa(s);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ns(Hr(i.auth_time)),issuedAtTime:Ns(Hr(i.iat)),expirationTime:Ns(Hr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Hr(t){return Number(t)*1e3}function Sa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oi(n);return i?JSON.parse(i):(yi("Failed to decode base64 JWT payload"),null)}catch(i){return yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rw(t){const e=Sa(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yt&&Aw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Aw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await zs(t,Cw(n,{idToken:s}));U(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?kw(r.providerUserInfo):[],a=Pw(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new vd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Nw(t){const e=Ue(t);await xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function kw(t){return t.map(e=>{var{providerId:n}=e,s=Ea(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(t,e){const n=await md(t,{},async()=>{const s=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=yd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mw(t,e){return fs(t,"POST","/v2/accounts:revokeToken",Ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Dw(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ks;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ea(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ow(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await zs(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sw(this,e)}reload(){return Nw(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await xi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zs(this,Tw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:W,emailVerified:x,isAnonymous:le,providerData:ue,stsTokenManager:Re}=n;U(W&&Re,e,"internal-error");const $e=Ks.fromJSON(this.name,Re);U(typeof W=="string",e,"internal-error"),Ft(h,e.name),Ft(d,e.name),U(typeof x=="boolean",e,"internal-error"),U(typeof le=="boolean",e,"internal-error"),Ft(_,e.name),Ft(v,e.name),Ft(C,e.name),Ft(P,e.name),Ft(k,e.name),Ft(D,e.name);const rt=new dn({uid:W,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:le,photoURL:v,phoneNumber:_,tenantId:C,stsTokenManager:$e,createdAt:k,lastLoginAt:D});return ue&&Array.isArray(ue)&&(rt.providerData=ue.map(Be=>Object.assign({},Be))),P&&(rt._redirectEventId=P),rt}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ks;i.updateFromServerResponse(n);const r=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await xi(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map;function Tt(t){Ot(t instanceof Function,"Expected a class definition");let e=ol.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ol.set(t,e),e)}/**
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
 */class wd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wd.type="NONE";const al=wd;/**
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
 */function vi(t,e,n){return`firebase:${t}:${e}:${n}`}class zn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=vi(this.userKey,i.apiKey,r),this.fullPersistenceKey=vi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new zn(Tt(al),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Tt(al);const o=vi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=dn._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new zn(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new zn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Id(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cd(e))return"Blackberry";if(Sd(e))return"Webos";if(Ra(e))return"Safari";if((e.includes("chrome/")||Ed(e))&&!e.includes("edge/"))return"Chrome";if(Td(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Id(t=Ce()){return/firefox\//i.test(t)}function Ra(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ed(t=Ce()){return/crios\//i.test(t)}function bd(t=Ce()){return/iemobile/i.test(t)}function Td(t=Ce()){return/android/i.test(t)}function Cd(t=Ce()){return/blackberry/i.test(t)}function Sd(t=Ce()){return/webos/i.test(t)}function ur(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xw(t=Ce()){var e;return ur(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lw(){return _m()&&document.documentMode===10}function Rd(t=Ce()){return ur(t)||Td(t)||Sd(t)||Cd(t)||/windows phone/i.test(t)||bd(t)}function Fw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e=[]){let n;switch(t){case"Browser":n=cl(Ce());break;case"Worker":n=`${cl(Ce())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${s}`}/**
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
 */class Uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function $w(t,e={}){return fs(t,"GET","/v2/passwordPolicy",Ca(t,e))}/**
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
 */const Bw=6;class Hw{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Bw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ll(this),this.idTokenSubscription=new ll(this),this.beforeStateQueue=new Uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $w(this),n=new Hw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Mw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ad(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_w(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Aa(t){return Ue(t)}class ll{constructor(e){this.auth=e,this.observer=null,this.addObserver=bm(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Vw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=pt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",jw().appendChild(s)})}function zw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e){const n=Tn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(js(r,e??{}))return i;At(i,"already-initialized")}return n.initialize({options:e})}function qw(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Gw(t,e,n){const s=Aa(t);U(s._canInitEmulator,s,"emulator-config-failed"),U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Od(e),{host:o,port:a}=Yw(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Qw()}function Od(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yw(t){const e=Od(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ul(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ul(o)}}}function ul(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e){return Ew(t,"POST","/v1/accounts:signInWithIdp",Ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="http://localhost";class yn extends Nd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ea(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new yn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Kn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}buildRequest(){const e={requestUri:Jw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xs extends Pd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Xs{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Wt.credential(n,s)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Xs{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Xs{constructor(){super("twitter.com")}static credential(e,n){return yn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Vt.credential(n,s)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await dn._fromIdTokenResponse(e,s,i),o=hl(s);return new es({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=hl(s);return new es({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function hl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends yt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Li.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Li(e,n,s,i)}}function kd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Li._fromErrorAndOperation(t,r,e,s):r})}async function Xw(t,e,n=!1){const s=await zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return es._forOperation(t,"link",s)}/**
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
 */async function Zw(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await zs(t,kd(s,i,e,t),n);U(r.idToken,s,"internal-error");const o=Sa(r.idToken);U(o,s,"internal-error");const{sub:a}=o;return U(t.uid===a,s,"user-mismatch"),es._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&At(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e,n=!1){const s="signIn",i=await kd(t,s,e),r=await es._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function tI(t,e,n,s){return Ue(t).onIdTokenChanged(e,n,s)}function nI(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}const Fi="__sak";/**
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
 */class Dd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fi,"1"),this.storage.removeItem(Fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){const t=Ce();return Ra(t)||ur(t)}const iI=1e3,rI=10;class Md extends Dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sI()&&Fw(),this.fallbackToPolling=Rd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Lw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Md.type="LOCAL";const oI=Md;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends Dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xd.type="SESSION";const Ld=xd;/**
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
 */function aI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new hr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await aI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Oa("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function lI(t){_t().location.href=t}/**
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
 */function Fd(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function uI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dI(){return Fd()?self:null}/**
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
 */const Ud="firebaseLocalStorageDb",fI=1,Ui="firebaseLocalStorage",$d="fbase_key";class Zs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dr(t,e){return t.transaction([Ui],e?"readwrite":"readonly").objectStore(Ui)}function pI(){const t=indexedDB.deleteDatabase(Ud);return new Zs(t).toPromise()}function Co(){const t=indexedDB.open(Ud,fI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ui,{keyPath:$d})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ui)?e(s):(s.close(),await pI(),e(await Co()))})})}async function dl(t,e,n){const s=dr(t,!0).put({[$d]:e,value:n});return new Zs(s).toPromise()}async function _I(t,e){const n=dr(t,!1).get(e),s=await new Zs(n).toPromise();return s===void 0?null:s.value}function fl(t,e){const n=dr(t,!0).delete(e);return new Zs(n).toPromise()}const gI=800,mI=3;class Bd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Co(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>mI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hr._getInstance(dI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uI(),!this.activeServiceWorker)return;this.sender=new cI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Co();return await dl(e,Fi,"1"),await fl(e,Fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_I(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=dr(i,!1).getAll();return new Zs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bd.type="LOCAL";const yI=Bd;new Js(3e4,6e4);/**
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
 */function vI(t,e){return e?Tt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Na extends Nd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wI(t){return eI(t.auth,new Na(t),t.bypassAuthState)}function II(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Zw(n,new Na(t),t.bypassAuthState)}async function EI(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Xw(n,new Na(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wI;case"linkViaPopup":case"linkViaRedirect":return EI;case"reauthViaPopup":case"reauthViaRedirect":return II;default:At(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new Js(2e3,1e4);class Fn extends Hd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=Oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bI.get())};e()}}Fn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="pendingRedirect",wi=new Map;class CI extends Hd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wi.get(this.auth._key());if(!e){try{const s=await SI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wi.set(this.auth._key(),e)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SI(t,e){const n=OI(e),s=AI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function RI(t,e){wi.set(t._key(),e)}function AI(t){return Tt(t._redirectPersistence)}function OI(t){return vi(TI,t.config.apiKey,t.name)}async function NI(t,e,n=!1){const s=Aa(t),i=vI(s,e),o=await new CI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=10*60*1e3;class kI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PI&&this.cachedEventUids.clear(),this.cachedEventUids.has(pl(e))}saveEventToCache(e){this.cachedEventUids.add(pl(e)),this.lastProcessedEventTime=Date.now()}}function pl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LI=/^https?/;async function FI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MI(t);for(const n of e)try{if(UI(n))return}catch{}At(t,"unauthorized-domain")}function UI(t){const e=To(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!LI.test(n))return!1;if(xI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const $I=new Js(3e4,6e4);function _l(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BI(t){return new Promise((e,n)=>{var s,i,r;function o(){_l(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_l(),n(pt(t,"network-request-failed"))},timeout:$I.get()})}if(!((i=(s=_t().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=_t().gapi)===null||r===void 0)&&r.load)o();else{const a=zw("iframefcb");return _t()[a]=()=>{gapi.load?o():n(pt(t,"network-request-failed"))},Vw(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ii=null,e})}let Ii=null;function HI(t){return Ii=Ii||BI(t),Ii}/**
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
 */const WI=new Js(5e3,15e3),jI="__/auth/iframe",VI="emulator/auth/iframe",zI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qI(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ta(e,VI):`https://${t.config.authDomain}/${jI}`,s={apiKey:e.apiKey,appName:t.name,v:ds},i=KI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${hs(s).slice(1)}`}async function GI(t){const e=await HI(t),n=_t().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:qI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=pt(t,"network-request-failed"),a=_t().setTimeout(()=>{r(o)},WI.get());function c(){_t().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const YI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QI=500,JI=600,XI="_blank",ZI="http://localhost";class gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eE(t,e,n,s=QI,i=JI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},YI),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Ce().toLowerCase();n&&(a=Ed(l)?XI:n),Id(l)&&(e=e||ZI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[_,v])=>`${d}${_}=${v},`,"");if(xw(l)&&a!=="_self")return tE(e||"",a),new gl(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new gl(h)}function tE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const nE="__/auth/handler",sE="emulator/auth/handler",iE=encodeURIComponent("fac");async function ml(t,e,n,s,i,r){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ds,eventId:i};if(e instanceof Pd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_o(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Xs){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${iE}=${encodeURIComponent(c)}`:"";return`${rE(t)}?${hs(a).slice(1)}${l}`}function rE({config:t}){return t.emulator?Ta(t,sE):`https://${t.authDomain}/${nE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="webStorageSupport";class oE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ld,this._completeRedirectFn=NI,this._overrideRedirectResult=RI}async _openPopup(e,n,s,i){var r;Ot((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ml(e,n,s,To(),i);return eE(e,o,Oa())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ml(e,n,s,To(),i);return lI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await GI(e),s=new kI(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wr,{type:Wr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Wr];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rd()||Ra()||ur()}}const aE=oE;var yl="@firebase/auth",vl="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uE(t){mt(new nt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ad(t)},l=new Ww(s,i,r,c);return qw(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),mt(new nt("auth-internal",e=>{const n=Aa(e.getProvider("auth").getImmediate());return(s=>new cE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(yl,vl,lE(t)),je(yl,vl,"esm2017")}/**
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
 */const hE=5*60,dE=Dh("authIdTokenMaxAge")||hE;let wl=null;const fE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>dE)return;const i=n==null?void 0:n.token;wl!==i&&(wl=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lS(t=_a()){const e=Tn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Kw(t,{popupRedirectResolver:aE,persistence:[yI,oI,Ld]}),s=Dh("authTokenSyncURL");if(s){const r=fE(s);nI(n,r,()=>r(n.currentUser)),tI(n,o=>r(o))}const i=Ph("auth");return i&&Gw(n,`http://${i}`),n}uE("Browser");var Il={};const El="@firebase/database",bl="1.0.2";/**
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
 */let jd="";function pE(t){jd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _E(e)}}catch{}return new gE},cn=Vd("localStorage"),So=Vd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new ar("@firebase/database"),mE=function(){let t=1;return function(){return t++}}(),zd=function(t){const e=Sm(t),n=new Em;n.update(e);const s=n.digest();return ua.encodeByteArray(s)},ei=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ei.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let fn=null,Tl=!0;const yE=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(qn.logLevel=ee.VERBOSE,fn=qn.log.bind(qn),e&&So.set("logging_enabled",!0)):typeof t=="function"?fn=t:(fn=null,So.remove("logging_enabled"))},Ee=function(...t){if(Tl===!0&&(Tl=!1,fn===null&&So.get("logging_enabled")===!0&&yE(!0)),fn){const e=ei.apply(null,t);fn(e)}},ti=function(t){return function(...e){Ee(t,...e)}},Ro=function(...t){const e="FIREBASE INTERNAL ERROR: "+ei(...t);qn.error(e)},Nt=function(...t){const e=`FIREBASE FATAL ERROR: ${ei(...t)}`;throw qn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+ei(...t);qn.warn(e)},vE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ts="[MIN_NAME]",vn="[MAX_NAME]",ps=function(t,e){if(t===e)return 0;if(t===ts||e===vn)return-1;if(e===ts||t===vn)return 1;{const n=Cl(t),s=Cl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},IE=function(t,e){return t===e?0:t<e?-1:1},ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Pa=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=Pa(t[e[s]]);return n+="}",n},qd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gd=function(t){R(!Kd(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},EE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},TE=new RegExp("^-?(0*)\\d{1,10}$"),CE=-2147483648,SE=2147483647,Cl=function(t){if(TE.test(t)){const e=Number(t);if(e>=CE&&e<=SE)return e}return null},_s=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},RE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ps=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class AE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Gn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="5",Yd="v",Qd="s",Jd="r",Xd="f",Zd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ef="ls",tf="p",Ao="ac",nf="websocket",sf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function of(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let s;if(e===nf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NE(t)&&(n.ns=t.namespace);const i=[];return Ve(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.counters_={}}incrementCounter(e,n=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return am(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={},Vr={};function Da(t){const e=t.toString();return jr[e]||(jr[e]=new PE),jr[e]}function kE(t,e){const n=t.toString();return Vr[n]||(Vr[n]=e()),Vr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_s(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="start",ME="close",xE="pLPCommand",LE="pRTLPCB",af="id",cf="pw",lf="ser",FE="cb",UE="seg",$E="ts",BE="d",HE="dframe",uf=1870,hf=30,WE=uf-hf,jE=25e3,VE=3e4;class Un{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Da(n),this.urlFn=c=>(this.appCheckToken&&(c[Ao]=this.appCheckToken),of(n,sf,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VE)),wE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ma((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sl)this.id=a,this.password=c;else if(o===ME)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Sl]="t",s[lf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[FE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Yd]=ka,this.transportSessionId&&(s[Qd]=this.transportSessionId),this.lastSessionId&&(s[ef]=this.lastSessionId),this.applicationId&&(s[tf]=this.applicationId),this.appCheckToken&&(s[Ao]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zd.test(location.hostname)&&(s[Jd]=Xd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Un.forceAllow_=!0}static forceDisallow(){Un.forceDisallow_=!0}static isAvailable(){return Un.forceAllow_?!0:!Un.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EE()&&!bE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Oh(n),i=qd(s,WE);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[HE]="t",s[af]=e,s[cf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ma{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mE(),window[xE+this.uniqueCallbackIdentifier]=e,window[LE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ma.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ee("frame writing exception"),a.stack&&Ee(a.stack),Ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[af]=this.myID,e[cf]=this.myPW,e[lf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hf+s.length<=uf;){const o=this.pendingSegs.shift();s=s+"&"+UE+i+"="+o.seg+"&"+$E+i+"="+o.ts+"&"+BE+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(jE)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=16384,KE=45e3;let $i=null;typeof MozWebSocket<"u"?$i=MozWebSocket:typeof WebSocket<"u"&&($i=WebSocket);class Ye{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Da(n),this.connURL=Ye.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Yd]=ka,typeof location<"u"&&location.hostname&&Zd.test(location.hostname)&&(o[Jd]=Xd),n&&(o[Qd]=n),s&&(o[ef]=s),i&&(o[Ao]=i),r&&(o[tf]=r),of(e,nf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cn.set("previous_websocket_failure",!0);try{let s;Lh(),this.mySock=new $i(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$i!==null&&!Ye.forceDisallow_}static previouslyFailed(){return cn.isInMemoryStorage||cn.get("previous_websocket_failure")===!0}markConnectionHealthy(){cn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qd(n,zE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Un,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ye&&Ye.isAvailable();let s=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of qs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);qs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=6e4,GE=5e3,YE=10*1024,QE=100*1024,zr="t",Rl="d",JE="s",Al="r",XE="e",Ol="o",Nl="a",Pl="n",kl="p",ZE="h";class eb{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new qs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ps(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zr in e){const n=e[zr];n===Nl?this.upgradeIfSecondaryHealthy_():n===Al?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ol&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ws(zr,e);if(Rl in e){const s=e[Rl];if(n===ZE){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JE?this.onConnectionShutdown_(s):n===Al?this.onReset_(s):n===XE?Ro("Server Error: "+s):n===Ol?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ro("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ka!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ps(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ps(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends ff{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!da()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bi}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=32,Ml=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new oe("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xt(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function pf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _f(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return We(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function mf(t,e){if(Xt(t)!==Xt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Xt(t)>Xt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class nb{constructor(e,n){this.errorPrefix_=n,this.parts_=_f(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=or(this.parts_[s]);yf(this)}}function sb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=or(e),yf(t)}function ib(t){const e=t.parts_.pop();t.byteLength_-=or(e),t.parts_.length>0&&(t.byteLength_-=1)}function yf(t){if(t.byteLength_>Ml)throw new Error(t.errorPrefix_+"has a key path longer than "+Ml+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dl+") or object contains a cycle "+sn(t))}function sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends ff{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new xa}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=1e3,rb=60*5*1e3,xl=30*1e3,ob=1.3,ab=3e4,cb="server_kill",Ll=3;class Rt extends df{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Rt.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Is,this.maxReconnectDelay_=rb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Lh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new rr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Rt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dt(e,"w")){const s=Zn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Im(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ro("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ab&&(this.reconnectDelay_=Is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ob)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new eb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(cb)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),c())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_o(this.interruptReasons_)&&(this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Pa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ll&&(this.reconnectDelay_=xl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ll&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jd.replace(/\./g,"-")]=1,da()?e["framework.cordova"]=1:xh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bi.getInstance().currentlyOnline();return _o(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0;Rt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(ts,e),i=new K(ts,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class vf extends fr{static get __EMPTY_NODE(){return di}static set __EMPTY_NODE(e){di=e}compare(e,n){return ps(e.name,n.name)}isDefinedOn(e){throw us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(vn,di)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,di)}toString(){return".key"}}const Yn=new vf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Ne.EMPTY_NODE,this.right=r??Ne.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class lb{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ne{constructor(e,n=Ne.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ne(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fi(this.root_,null,this.comparator_,!0,e)}}Ne.EMPTY_NODE=new lb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t,e){return ps(t.name,e.name)}function La(t,e){return ps(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;function hb(t){Oo=t}const wf=function(t){return typeof t=="number"?"number:"+Gd(t):"string:"+t},If=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dt(e,".sv"),"Priority must be a string or number.")}else R(t===Oo||t.isEmpty(),"priority of unexpected type.");R(t===Oo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),If(this.priorityNode_)}static set __childrenNodeConstructor(e){Fl=e}static get __childrenNodeConstructor(){return Fl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:V(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(R(s!==".priority"||Xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gd(this.value_):e+=this.value_,this.lazyHash_=zd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return R(i>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ef,bf;function db(t){Ef=t}function fb(t){bf=t}class pb extends fr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ps(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(vn,new pe("[PRIORITY-POST]",bf))}makePost(e,n){const s=Ef(e);return new K(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new pb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=Math.log(2);class gb{constructor(e){const n=r=>parseInt(Math.log(r)/_b,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Hi=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new _e(d,h.node,_e.BLACK,null,null);{const _=parseInt(u/2,10)+c,v=i(c,_),C=i(_+1,l);return h=t[_],d=n?n(h):h,new _e(d,h.node,_e.BLACK,v,C)}},r=function(c){let l=null,u=null,h=t.length;const d=function(v,C){const P=h-v,k=h;h-=v;const D=i(P+1,k),W=t[P],x=n?n(W):W;_(new _e(x,W.node,C,null,D))},_=function(v){l?(l.left=v,l=v):(u=v,l=v)};for(let v=0;v<c.count;++v){const C=c.nextBitIsOne(),P=Math.pow(2,c.count-(v+1));C?d(P,_e.BLACK):(d(P,_e.BLACK),d(P,_e.RED))}return u},o=new gb(t.length),a=r(o);return new Ne(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;const Mn={};class Ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Mn&&Te,"ChildrenNode.ts has not been loaded"),Kr=Kr||new Ct({".priority":Mn},{".priority":Te}),Kr}get(e){const n=Zn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ne?n:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Hi(s,e.getCompare()):a=Mn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Ct(u,l)}addToIndexes(e,n){const s=Ni(this.indexes_,(i,r)=>{const o=Zn(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),i===Mn)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(K.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Hi(a,o.getCompare())}else return Mn;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new K(e.name,a))),c.insert(e,e.node)}});return new Ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ni(this.indexes_,i=>{if(i===Mn)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new Ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class J{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&If(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Es||(Es=new J(new Ne(La),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Es:this.priorityNode_;return new J(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{R(V(e)!==".priority"||Xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(re(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),s++,r&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wf(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":zd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ni?-1:0}withIndex(e){if(e===Yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),i=n.getIterator(Te);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yn?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mb extends J{constructor(){super(new Ne(La),J.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const ni=new mb;Object.defineProperties(K,{MIN:{value:new K(ts,J.EMPTY_NODE)},MAX:{value:new K(vn,ni)}});vf.__EMPTY_NODE=J.EMPTY_NODE;pe.__childrenNodeConstructor=J;hb(ni);fb(ni);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=!0;function me(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,me(e))}if(!(t instanceof Array)&&yb){const n=[];let s=!1;if(Ve(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=me(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new K(o,c)))}}),n.length===0)return J.EMPTY_NODE;const r=Hi(n,ub,o=>o.name,La);if(s){const o=Hi(n,Te.getCompare());return new J(r,me(e),new Ct({".priority":o},{".priority":Te}))}else return new J(r,me(e),Ct.Default)}else{let n=J.EMPTY_NODE;return Ve(t,(s,i)=>{if(Dt(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}db(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb extends fr{constructor(e){super(),this.indexPath_=e,R(!z(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ps(e.name,n.name):r}makePost(e,n){const s=me(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,ni);return new K(vn,e)}toString(){return _f(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb extends fr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ps(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=me(e);return new K(n,s)}toString(){return".value"}}const Ib=new wb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){return{type:"value",snapshotNode:t}}function bb(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Tb(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ul(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Cb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ts}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Fa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $l(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Te?n="$priority":t.index_===Ib?n="$value":t.index_===Yn?n="$key":(R(t.index_ instanceof vb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Bl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends df{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ti("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wi.getListenId_(e,s),a={};this.listens_[o]=a;const c=$l(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Zn(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const s=Wi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=$l(e._queryParams),s=e._path.toString(),i=new rr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ws(a.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return{value:null,children:new Map}}function Tf(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,ji());const i=t.children.get(s);e=re(e),Tf(i,e,n)}}function No(t,e,n){t.value!==null?n(e,t.value):Rb(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);No(i,r,n)})}function Rb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ve(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=10*1e3,Ob=30*1e3,Nb=5*60*1e3;class Pb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ab(e);const s=Hl+(Ob-Hl)*Math.random();Ps(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ve(e,(i,r)=>{r>0&&Dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ps(this.reportStats_.bind(this),Math.floor(Math.random()*2*Nb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function Cf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dt.ACK_USER_WRITE,this.source=Cf()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Vi(te(),n,this.revert)}}else return R(V(this.path)===e,"operationForChild called for unrelated child."),new Vi(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dt.OVERWRITE}operationForChild(e){return z(this.path)?new wn(this.source,te(),this.snap.getImmediateChild(e)):new wn(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new wn(this.source,te(),n.value):new Gs(this.source,te(),n)}else return R(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gs(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function kb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cb(o.childName,o.snapshotNode))}),bs(t,i,"child_removed",e,s,n),bs(t,i,"child_added",e,s,n),bs(t,i,"child_moved",r,s,n),bs(t,i,"child_changed",e,s,n),bs(t,i,"value",e,s,n),i}function bs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>Mb(t,a,c)),o.forEach(a=>{const c=Db(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Db(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Mb(t,e,n){if(e.childName==null||n.childName==null)throw us("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t,e){return{eventCache:t,serverCache:e}}function ks(t,e,n,s){return Af(new Ua(e,n,s),t.serverCache)}function Of(t,e,n,s){return Af(t.eventCache,new Ua(e,n,s))}function Po(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function In(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr;const xb=()=>(qr||(qr=new Ne(IE)),qr);class ie{constructor(e,n=xb()){this.value=e,this.children=n}static fromObject(e){let n=new ie(null);return Ve(e,(s,i)=>{n=n.set(new oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(z(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:de(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(re(e)):new ie(null)}}set(e,n){if(z(e))return new ie(n,this.children);{const s=V(e),r=(this.children.get(s)||new ie(null)).set(re(e),n),o=this.children.insert(s,r);return new ie(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(re(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ie(null):new ie(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(re(e)):null}}setTree(e,n){if(z(e))return n;{const s=V(e),r=(this.children.get(s)||new ie(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ie(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(re(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(re(e),de(n,i),s):new ie(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new ie(null))}}function Ds(t,e,n){if(z(e))return new tt(new ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=We(i,e);return r=r.updateChild(o,n),new tt(t.writeTree_.set(i,r))}else{const i=new ie(n),r=t.writeTree_.setTree(e,i);return new tt(r)}}}function Wl(t,e,n){let s=t;return Ve(n,(i,r)=>{s=Ds(s,de(e,i),r)}),s}function jl(t,e){if(z(e))return tt.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new tt(n)}}function ko(t,e){return Cn(t,e)!=null}function Cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function Vl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function Qt(t,e){if(z(e))return t;{const n=Cn(t,e);return n!=null?new tt(new ie(n)):new tt(t.writeTree_.subtree(e))}}function Do(t){return t.writeTree_.isEmpty()}function ns(t,e){return Nf(te(),t.writeTree_,e)}function Nf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Nf(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e){return Lf(e,t)}function Lb(t,e,n,s,i){R(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ds(t.visibleWrites,e,n)),t.lastWriteId=s}function Fb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ub(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$b(a,s.path)?i=!1:Xe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Bb(t),!0;if(s.snap)t.visibleWrites=jl(t.visibleWrites,s.path);else{const a=s.children;Ve(a,c=>{t.visibleWrites=jl(t.visibleWrites,de(s.path,c))})}return!0}else return!1}function $b(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(de(t.path,n),e))return!0;return!1}function Bb(t){t.visibleWrites=kf(t.allWrites,Hb,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Hb(t){return t.visible}function kf(t,e,n){let s=tt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Xe(n,o)?(a=We(n,o),s=Ds(s,a,r.snap)):Xe(o,n)&&(a=We(o,n),s=Ds(s,te(),r.snap.getChild(a)));else if(r.children){if(Xe(n,o))a=We(n,o),s=Wl(s,a,r.children);else if(Xe(o,n))if(a=We(o,n),z(a))s=Wl(s,te(),r.children);else{const c=Zn(r.children,V(a));if(c){const l=c.getChild(re(a));s=Ds(s,te(),l)}}}else throw us("WriteRecord should have .snap or .children")}}return s}function Df(t,e,n,s,i){if(!s&&!i){const r=Cn(t.visibleWrites,e);if(r!=null)return r;{const o=Qt(t.visibleWrites,e);if(Do(o))return n;if(n==null&&!ko(o,te()))return null;{const a=n||J.EMPTY_NODE;return ns(o,a)}}}else{const r=Qt(t.visibleWrites,e);if(!i&&Do(r))return n;if(!i&&n==null&&!ko(r,te()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Xe(l.path,e)||Xe(e,l.path))},a=kf(t.allWrites,o,e),c=n||J.EMPTY_NODE;return ns(a,c)}}}function Wb(t,e,n){let s=J.EMPTY_NODE;const i=Cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Qt(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const c=ns(Qt(r,new oe(o)),a);s=s.updateImmediateChild(o,c)}),Vl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Qt(t.visibleWrites,e);return Vl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function jb(t,e,n,s,i){R(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(ko(t.visibleWrites,r))return null;{const o=Qt(t.visibleWrites,r);return Do(o)?i.getChild(n):ns(o,i.getChild(n))}}function Vb(t,e,n,s){const i=de(e,n),r=Cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Qt(t.visibleWrites,i);return ns(o,s.getNode().getImmediateChild(n))}else return null}function zb(t,e){return Cn(t.visibleWrites,e)}function Kb(t,e,n,s,i,r,o){let a;const c=Qt(t.visibleWrites,e),l=Cn(c,te());if(l!=null)a=l;else if(n!=null)a=ns(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function qb(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function Mo(t,e,n,s){return Df(t.writeTree,t.treePath,e,n,s)}function Mf(t,e){return Wb(t.writeTree,t.treePath,e)}function zl(t,e,n,s){return jb(t.writeTree,t.treePath,e,n,s)}function zi(t,e){return zb(t.writeTree,de(t.treePath,e))}function Gb(t,e,n,s,i,r){return Kb(t.writeTree,t.treePath,e,n,s,i,r)}function $a(t,e,n){return Vb(t.writeTree,t.treePath,e,n)}function xf(t,e){return Lf(de(t.treePath,e),t.writeTree)}function Lf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ul(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Tb(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bb(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ul(s,e.snapshotNode,i.oldSnap));else throw us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ff=new Qb;class Ba{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ua(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $a(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:In(this.viewCache_),r=Gb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function Jb(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Xb(t,e,n,s,i){const r=new Yb;let o,a;if(n.type===dt.OVERWRITE){const l=n;l.source.fromUser?o=xo(t,e,l.path,l.snap,s,i,r):(R(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!z(l.path),o=Ki(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===dt.MERGE){const l=n;l.source.fromUser?o=eT(t,e,l.path,l.children,s,i,r):(R(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Lo(t,e,l.path,l.children,s,i,a,r))}else if(n.type===dt.ACK_USER_WRITE){const l=n;l.revert?o=sT(t,e,l.path,s,i,r):o=tT(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===dt.LISTEN_COMPLETE)o=nT(t,e,n.path,s,r);else throw us("Unknown operation type: "+n.type);const c=r.getChanges();return Zb(e,o,c),{viewCache:o,changes:c}}function Zb(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Po(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Eb(Po(e)))}}function Uf(t,e,n,s,i,r){const o=e.eventCache;if(zi(s,n)!=null)return e;{let a,c;if(z(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=In(e),u=l instanceof J?l:J.EMPTY_NODE,h=Mf(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Mo(s,In(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=V(n);if(l===".priority"){R(Xt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=zl(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=re(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=zl(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=$a(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return ks(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Ki(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),_,null)}else{const _=V(n);if(!c.isCompleteForPath(n)&&Xt(n)>1)return e;const v=re(n),P=c.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?l=u.updatePriority(c.getNode(),P):l=u.updateChild(c.getNode(),_,P,v,Ff,null)}const h=Of(e,l,c.isFullyInitialized()||z(n),u.filtersNodes()),d=new Ba(i,h,r);return Uf(t,h,n,i,d,a)}function xo(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new Ba(i,e,r);if(z(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ks(e,l,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=ks(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=re(n),_=a.getNode().getImmediateChild(h);let v;if(z(d))v=s;else{const C=u.getCompleteChild(h);C!=null?pf(d)===".priority"&&C.getChild(gf(d)).isEmpty()?v=C:v=C.updateChild(d,s):v=J.EMPTY_NODE}if(_.equals(v))c=e;else{const C=t.filter.updateChild(a.getNode(),h,v,d,u,o);c=ks(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Kl(t,e){return t.eventCache.isCompleteForChild(e)}function eT(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=de(n,c);Kl(e,V(u))&&(a=xo(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=de(n,c);Kl(e,V(u))||(a=xo(t,a,u,l,i,r,o))}),a}function ql(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Lo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;z(n)?l=s:l=new ie(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=ql(t,_,d);c=Ki(t,c,new oe(h),v,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),C=ql(t,v,d);c=Ki(t,c,new oe(h),C,i,r,o,a)}}),c}function tT(t,e,n,s,i,r,o){if(zi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ki(t,e,n,c.getNode().getChild(n),i,r,a,o);if(z(n)){let l=new ie(null);return c.getNode().forEachChild(Yn,(u,h)=>{l=l.set(new oe(u),h)}),Lo(t,e,n,l,i,r,a,o)}else return e}else{let l=new ie(null);return s.foreach((u,h)=>{const d=de(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Lo(t,e,n,l,i,r,a,o)}}function nT(t,e,n,s,i){const r=e.serverCache,o=Of(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return Uf(t,o,n,s,Ff,i)}function sT(t,e,n,s,i,r){let o;if(zi(s,n)!=null)return e;{const a=new Ba(s,e,i),c=e.eventCache.getNode();let l;if(z(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Mo(s,In(e));else{const h=e.serverCache.getNode();R(h instanceof J,"serverChildren would be complete if leaf node"),u=Mf(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=V(n);let h=$a(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,re(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,J.EMPTY_NODE,re(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mo(s,In(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||zi(s,te())!=null,ks(e,l,o,t.filter.filtersNodes())}}function iT(t,e){const n=In(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Gl(t,e,n,s){e.type===dt.MERGE&&e.source.queryId!==null&&(R(In(t.viewCache_),"We should always have a full cache before handling merges"),R(Po(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Xb(t.processor_,i,e,n,s);return Jb(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,rT(t,r.changes,r.viewCache.eventCache.getNode(),null)}function rT(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return kb(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl;function oT(t){R(!Yl,"__referenceConstructor has already been defined"),Yl=t}function Ha(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return R(r!=null,"SyncTree gave us an op for an invalid query."),Gl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Gl(o,e,n,s));return r}}function Wa(t,e){let n=null;for(const s of t.views.values())n=n||iT(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;function aT(t){R(!Ql,"__referenceConstructor has already been defined"),Ql=t}class Jl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=qb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $f(t,e,n,s,i){return Lb(t.pendingWriteTree_,e,n,s,i),i?_r(t,new wn(Cf(),e,n)):[]}function ln(t,e,n=!1){const s=Fb(t.pendingWriteTree_,e);if(Ub(t.pendingWriteTree_,e)){let r=new ie(null);return s.snap!=null?r=r.set(te(),!0):Ve(s.children,o=>{r=r.set(new oe(o),!0)}),_r(t,new Vi(s.path,r,n))}else return[]}function pr(t,e,n){return _r(t,new wn(Sf(),e,n))}function cT(t,e,n){const s=ie.fromObject(n);return _r(t,new Gs(Sf(),e,s))}function lT(t,e,n,s){const i=Wf(t,s);if(i!=null){const r=jf(i),o=r.path,a=r.queryId,c=We(o,e),l=new wn(Rf(a),c,n);return Vf(t,o,l)}else return[]}function uT(t,e,n,s){const i=Wf(t,s);if(i){const r=jf(i),o=r.path,a=r.queryId,c=We(o,e),l=ie.fromObject(n),u=new Gs(Rf(a),c,l);return Vf(t,o,u)}else return[]}function ja(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=We(o,e),l=Wa(a,c);if(l)return l});return Df(i,e,r,n,!0)}function _r(t,e){return Bf(e,t.syncPointTree_,null,Pf(t.pendingWriteTree_,te()))}function Bf(t,e,n,s){if(z(t.path))return Hf(t,e,n,s);{const i=e.get(te());n==null&&i!=null&&(n=Wa(i,te()));let r=[];const o=V(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=xf(s,o);r=r.concat(Bf(a,c,l,u))}return i&&(r=r.concat(Ha(i,t,s,n))),r}}function Hf(t,e,n,s){const i=e.get(te());n==null&&i!=null&&(n=Wa(i,te()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=xf(s,o),u=t.operationForChild(o);u&&(r=r.concat(Hf(u,a,c,l)))}),i&&(r=r.concat(Ha(i,t,s,n))),r}function Wf(t,e){return t.tagToQueryMap.get(e)}function jf(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Vf(t,e,n){const s=t.syncPointTree_.get(e);R(s,"Missing sync point for query tag that we're tracking");const i=Pf(t.pendingWriteTree_,e);return Ha(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Va(n)}node(){return this.node_}}class za{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new za(this.syncTree_,n)}node(){return ja(this.syncTree_,this.path_)}}const hT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xl=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fT(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},fT=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&R(!1,"Unexpected increment value: "+s);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},pT=function(t,e,n,s){return Ka(e,new za(n,t),s)},zf=function(t,e,n){return Ka(t,new Va(e),n)};function Ka(t,e,n){const s=t.getPriority().val(),i=Xl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Xl(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new pe(a,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(Te,(a,c)=>{const l=Ka(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ga(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=V(n);for(;i!==null;){const r=Zn(s.node.children,i)||{children:{},childCount:0};s=new qa(i,s,r),n=re(n),i=V(n)}return s}function gs(t){return t.node.value}function Kf(t,e){t.node.value=e,Fo(t)}function qf(t){return t.node.childCount>0}function _T(t){return gs(t)===void 0&&!qf(t)}function gr(t,e){Ve(t.node.children,(n,s)=>{e(new qa(n,t,s))})}function Gf(t,e,n,s){n&&!s&&e(t),gr(t,i=>{Gf(i,e,!0,s)}),n&&s&&e(t)}function gT(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function si(t){return new oe(t.parent===null?t.name:si(t.parent)+"/"+t.name)}function Fo(t){t.parent!==null&&mT(t.parent,t.name,t)}function mT(t,e,n){const s=_T(n),i=Dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Fo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Fo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=/[\[\].#$\/\u0000-\u001F\u007F]/,vT=/[\[\].#$\u0000-\u001F\u007F]/,Gr=10*1024*1024,Yf=function(t){return typeof t=="string"&&t.length!==0&&!yT.test(t)},Qf=function(t){return typeof t=="string"&&t.length!==0&&!vT.test(t)},wT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qf(t)},IT=function(t,e,n,s){s&&e===void 0||Ya(fa(t,"value"),e,n)},Ya=function(t,e,n){const s=n instanceof oe?new nb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+sn(s));if(typeof e=="function")throw new Error(t+"contains a function "+sn(s)+" with contents = "+e.toString());if(Kd(e))throw new Error(t+"contains "+e.toString()+" "+sn(s));if(typeof e=="string"&&e.length>Gr/3&&or(e)>Gr)throw new Error(t+"contains a string greater than "+Gr+" utf8 bytes "+sn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ve(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Yf(o)))throw new Error(t+" contains an invalid key ("+o+") "+sn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sb(s,o),Ya(t,a,s),ib(s)}),i&&r)throw new Error(t+' contains ".value" child '+sn(s)+" in addition to actual children.")}},Jf=function(t,e,n,s){if(!(s&&n===void 0)&&!Qf(n))throw new Error(fa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ET=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jf(t,e,n,s)},bT=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},TT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wT(n))throw new Error(fa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xf(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!mf(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Pt(t,e,n){Xf(t,n),ST(t,s=>Xe(s,e)||Xe(e,s))}function ST(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(RT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();fn&&Ee("event: "+n.toString()),_s(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="repo_interrupt",OT=25;class NT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ji(),this.transactionQueueTree_=new qa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PT(t,e,n){if(t.stats_=Da(t.repoInfo_),t.forceRestClient_||RE())t.server_=new Wi(t.repoInfo_,(s,i,r,o)=>{Zl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>eu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Rt(t.repoInfo_,e,(s,i,r,o)=>{Zl(t,s,i,r,o)},s=>{eu(t,s)},s=>{DT(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=kE(t.repoInfo_,()=>new Pb(t.stats_,t.server_)),t.infoData_=new Sb,t.infoSyncTree_=new Jl({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=pr(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ja(t,"connected",!1),t.serverSyncTree_=new Jl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Pt(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function kT(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qa(t){return hT({timestamp:kT(t)})}function Zl(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ni(n,l=>me(l));o=uT(t.serverSyncTree_,r,c,i)}else{const c=me(n);o=lT(t.serverSyncTree_,r,c,i)}else if(s){const c=Ni(n,l=>me(l));o=cT(t.serverSyncTree_,r,c)}else{const c=me(n);o=pr(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=mr(t,r)),Pt(t.eventQueue_,a,o)}function eu(t,e){Ja(t,"connected",e),e===!1&&xT(t)}function DT(t,e){Ve(e,(n,s)=>{Ja(t,n,s)})}function Ja(t,e,n){const s=new oe("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=pr(t.infoSyncTree_,s,i);Pt(t.eventQueue_,s,r)}function Zf(t){return t.nextWriteId_++}function MT(t,e,n,s,i){Xa(t,"set",{path:e.toString(),value:n,priority:s});const r=Qa(t),o=me(n,s),a=ja(t.serverSyncTree_,e),c=zf(o,a,r),l=Zf(t),u=$f(t.serverSyncTree_,e,c,l,!0);Xf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const v=d==="ok";v||ke("set at "+e+" failed: "+d);const C=ln(t.serverSyncTree_,l,!v);Pt(t.eventQueue_,e,C),FT(t,i,d,_)});const h=ip(t,e);mr(t,h),Pt(t.eventQueue_,h,[])}function xT(t){Xa(t,"onDisconnectEvents");const e=Qa(t),n=ji();No(t.onDisconnect_,te(),(i,r)=>{const o=pT(i,r,t.serverSyncTree_,e);Tf(n,i,o)});let s=[];No(n,te(),(i,r)=>{s=s.concat(pr(t.serverSyncTree_,i,r));const o=ip(t,i);mr(t,o)}),t.onDisconnect_=ji(),Pt(t.eventQueue_,te(),s)}function LT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AT)}function Xa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function FT(t,e,n,s){e&&_s(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ep(t,e,n){return ja(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function Za(t,e=t.transactionQueueTree_){if(e||yr(t,e),gs(e)){const n=np(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&UT(t,si(e),n)}else qf(e)&&gr(e,n=>{Za(t,n)})}function UT(t,e,n){const s=n.map(l=>l.currentWriteId),i=ep(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=We(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Xa(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ln(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();yr(t,Ga(t.transactionQueueTree_,e)),Za(t,t.transactionQueueTree_),Pt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)_s(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}mr(t,e)}},o)}function mr(t,e){const n=tp(t,e),s=si(n),i=np(t,n);return $T(t,i,s),s}function $T(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=We(n,c.path);let u=!1,h;if(R(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(ln(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=OT)u=!0,h="maxretry",i=i.concat(ln(t.serverSyncTree_,c.currentWriteId,!0));else{const d=ep(t,c.path,o);c.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Ya("transaction failed: Data returned ",_,c.path);let v=me(_);typeof _=="object"&&_!=null&&Dt(_,".priority")||(v=v.updatePriority(d.getPriority()));const P=c.currentWriteId,k=Qa(t),D=zf(v,d,k);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=D,c.currentWriteId=Zf(t),o.splice(o.indexOf(P),1),i=i.concat($f(t.serverSyncTree_,c.path,D,c.currentWriteId,c.applyLocally)),i=i.concat(ln(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(ln(t.serverSyncTree_,c.currentWriteId,!0))}Pt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}yr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)_s(s[a]);Za(t,t.transactionQueueTree_)}function tp(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&gs(s)===void 0;)s=Ga(s,n),e=re(e),n=V(e);return s}function np(t,e){const n=[];return sp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function sp(t,e,n){const s=gs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);gr(e,i=>{sp(t,i,n)})}function yr(t,e){const n=gs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Kf(e,n.length>0?n:void 0)}gr(e,s=>{yr(t,s)})}function ip(t,e){const n=si(tp(t,e)),s=Ga(t.transactionQueueTree_,e);return gT(s,i=>{Yr(t,i)}),Yr(t,s),Gf(s,i=>{Yr(t,i)}),n}function Yr(t,e){const n=gs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ln(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Kf(e,void 0):n.length=r+1,Pt(t.eventQueue_,si(e),i);for(let o=0;o<s.length;o++)_s(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function HT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const tu=function(t,e){const n=WT(t),s=n.namespace;n.domain==="firebase.com"&&Nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},WT=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=BT(t.substring(u,h)));const d=HT(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const _=e.slice(0,l);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:pf(this._path)}get ref(){return new Sn(this._repo,this._path)}get _queryIdentifier(){const e=Bl(this._queryParams),n=Pa(e);return n==="{}"?"default":n}get _queryObject(){return Bl(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof ec))return!1;const n=this._repo===e._repo,s=mf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+tb(this._path)}}class Sn extends ec{constructor(e,n){super(e,n,new Fa,!1)}get parent(){const e=gf(this._path);return e===null?null:new Sn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function uS(t,e){return t=Ue(t),t._checkNotDeleted("ref"),e!==void 0?jT(t._root,e):t._root}function jT(t,e){return t=Ue(t),V(t._path)===null?ET("child","path",e,!1):Jf("child","path",e,!1),new Sn(t._repo,de(t._path,e))}function hS(t,e){t=Ue(t),bT("set",t._path),IT("set",e,t._path,!1);const n=new rr;return MT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}oT(Sn);aT(Sn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="FIREBASE_DATABASE_EMULATOR_HOST",Uo={};let zT=!1;function KT(t,e,n,s){t.repoInfo_=new rf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function qT(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=tu(r,i),a=o.repoInfo,c,l;typeof process<"u"&&Il&&(l=Il[VT]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=tu(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Gn(Gn.OWNER):new OE(t.name,t.options,e);TT("Invalid Firebase Database URL",o),z(o.path)||Nt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=YT(a,t,u,new AE(t.name,n));return new QT(h,t)}function GT(t,e){const n=Uo[e];(!n||n[t.key]!==t)&&Nt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LT(t),delete n[t.key]}function YT(t,e,n,s){let i=Uo[e.name];i||(i={},Uo[e.name]=i);let r=i[t.toURLString()];return r&&Nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new NT(t,zT,n,s),i[t.toURLString()]=r,r}class QT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(GT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nt("Cannot call "+e+" on a deleted database.")}}function dS(t=_a(),e){const n=Tn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=fm("database");s&&JT(n,...s)}return n}function JT(t,e,n,s={}){t=Ue(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Nt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Gn(Gn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:pm(s.mockUserToken,t.app.options.projectId);r=new Gn(o)}KT(i,e,n,r)}/**
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
 */function XT(t){pE(ds),mt(new nt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return qT(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),je(El,bl,t),je(El,bl,"esm2017")}Rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};XT();/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xn=typeof window<"u";function ZT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Qr(t,e){const n={};for(const s in e){const i=e[s];n[s]=st(i)?i.map(t):t(i)}return n}const Ms=()=>{},st=Array.isArray,eC=/\/$/,tC=t=>t.replace(eC,"");function Jr(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=rC(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function nC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sC(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ss(e.matched[s],n.matched[i])&&rp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iC(t[n],e[n]))return!1;return!0}function iC(t,e){return st(t)?su(t,e):st(e)?su(e,t):t===e}function su(t,e){return st(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function rC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Ys;(function(t){t.pop="pop",t.push="push"})(Ys||(Ys={}));var xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xs||(xs={}));function oC(t){if(!t)if(xn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tC(t)}const aC=/^[^#]+#/;function cC(t,e){return t.replace(aC,"#")+e}function lC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const vr=()=>({left:window.pageXOffset,top:window.pageYOffset});function uC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=lC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function iu(t,e){return(history.state?history.state.position-e:-1)+t}const $o=new Map;function hC(t,e){$o.set(t,e)}function dC(t){const e=$o.get(t);return $o.delete(t),e}let fC=()=>location.protocol+"//"+location.host;function op(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),nu(c,"")}return nu(n,t)+s+i}function pC(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=op(t,location),v=n.value,C=e.value;let P=0;if(d){if(n.value=_,e.value=d,o&&o===v){o=null;return}P=C?d.position-C.position:0}else s(_);i.forEach(k=>{k(n.value,v,{delta:P,type:Ys.pop,direction:P?P>0?xs.forward:xs.back:xs.unknown})})};function c(){o=n.value}function l(d){i.push(d);const _=()=>{const v=i.indexOf(d);v>-1&&i.splice(v,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(X({},d.state,{scroll:vr()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function ru(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?vr():null}}function _C(t){const{history:e,location:n}=window,s={value:op(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:fC()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(c,l){const u=X({},e.state,ru(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=X({},i.value,e.state,{forward:c,scroll:vr()});r(u.current,u,!0);const h=X({},ru(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function fS(t){t=oC(t);const e=_C(t),n=pC(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=X({location:"",base:t,go:s,createHref:cC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function gC(t){return typeof t=="string"||t&&typeof t=="object"}function ap(t){return typeof t=="string"||typeof t=="symbol"}const Ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cp=Symbol("");var ou;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ou||(ou={}));function is(t,e){return X(new Error,{type:t,[cp]:!0},e)}function wt(t,e){return t instanceof Error&&cp in t&&(e==null||!!(t.type&e))}const au="[^/]+?",mC={sensitive:!1,strict:!1,start:!0,end:!0},yC=/[.+*?^${}()[\]/\\]/g;function vC(t,e){const n=X({},mC,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(yC,"\\$&"),_+=40;else if(d.type===1){const{value:v,repeatable:C,optional:P,regexp:k}=d;r.push({name:v,repeatable:C,optional:P});const D=k||au;if(D!==au){_+=10;try{new RegExp(`(${D})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${v}" (${D}): `+x.message)}}let W=C?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(W=P&&l.length<2?`(?:/${W})`:"/"+W),P&&(W+="?"),i+=W,_+=20,P&&(_+=-8),C&&(_+=-20),D===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",v=r[d-1];h[v.name]=_&&v.repeatable?_.split("/"):_}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:v,repeatable:C,optional:P}=_,k=v in l?l[v]:"";if(st(k)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const D=st(k)?k.join("/"):k;if(!D)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=D}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function wC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function IC(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=wC(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(cu(s))return 1;if(cu(i))return-1}return i.length-s.length}function cu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const EC={type:0,value:""},bC=/[a-zA-Z0-9_]/;function TC(t){if(!t)return[[]];if(t==="/")return[[EC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:bC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function CC(t,e,n){const s=vC(TC(t.path),n),i=X(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function SC(t,e){const n=[],s=new Map;e=hu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,v=RC(u);v.aliasOf=d&&d.record;const C=hu(e,u),P=[v];if("alias"in u){const W=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of W)P.push(X({},v,{components:d?d.record.components:v.components,path:x,aliasOf:d?d.record:v}))}let k,D;for(const W of P){const{path:x}=W;if(h&&x[0]!=="/"){const le=h.record.path,ue=le[le.length-1]==="/"?"":"/";W.path=h.record.path+(x&&ue+x)}if(k=CC(W,h,C),d?d.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),_&&u.name&&!uu(k)&&o(u.name)),v.children){const le=v.children;for(let ue=0;ue<le.length;ue++)r(le[ue],k,d&&d.children[ue])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return D?()=>{o(D)}:Ms}function o(u){if(ap(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&IC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!lp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!uu(u)&&s.set(u.record.name,u)}function l(u,h){let d,_={},v,C;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw is(1,{location:u});C=d.record.name,_=X(lu(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&lu(u.params,d.keys.map(D=>D.name))),v=d.stringify(_)}else if("path"in u)v=u.path,d=n.find(D=>D.re.test(v)),d&&(_=d.parse(v),C=d.record.name);else{if(d=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw is(1,{location:u,currentLocation:h});C=d.record.name,_=X({},h.params,u.params),v=d.stringify(_)}const P=[];let k=d;for(;k;)P.unshift(k.record),k=k.parent;return{name:C,path:v,params:_,matched:P,meta:OC(P)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function lu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function RC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:AC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function AC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function uu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OC(t){return t.reduce((e,n)=>X(e,n.meta),{})}function hu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function lp(t,e){return e.children.some(n=>n===t||lp(t,n))}const up=/#/g,NC=/&/g,PC=/\//g,kC=/=/g,DC=/\?/g,hp=/\+/g,MC=/%5B/g,xC=/%5D/g,dp=/%5E/g,LC=/%60/g,fp=/%7B/g,FC=/%7C/g,pp=/%7D/g,UC=/%20/g;function tc(t){return encodeURI(""+t).replace(FC,"|").replace(MC,"[").replace(xC,"]")}function $C(t){return tc(t).replace(fp,"{").replace(pp,"}").replace(dp,"^")}function Bo(t){return tc(t).replace(hp,"%2B").replace(UC,"+").replace(up,"%23").replace(NC,"%26").replace(LC,"`").replace(fp,"{").replace(pp,"}").replace(dp,"^")}function BC(t){return Bo(t).replace(kC,"%3D")}function HC(t){return tc(t).replace(up,"%23").replace(DC,"%3F")}function WC(t){return t==null?"":HC(t).replace(PC,"%2F")}function qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(hp," "),o=r.indexOf("="),a=qi(o<0?r:r.slice(0,o)),c=o<0?null:qi(r.slice(o+1));if(a in e){let l=e[a];st(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function du(t){let e="";for(let n in t){const s=t[n];if(n=BC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(st(s)?s.map(r=>r&&Bo(r)):[s&&Bo(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function VC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=st(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const zC=Symbol(""),fu=Symbol(""),wr=Symbol(""),_p=Symbol(""),Ho=Symbol("");function Ts(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(is(4,{from:n,to:e})):h instanceof Error?a(h):gC(h)?a(is(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Xr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(KC(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Bt(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=ZT(l)?l.default:l;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Bt(d,n,s,r,o)()}))}}return i}function KC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pu(t){const e=et(wr),n=et(_p),s=Ge(()=>e.resolve(Wn(t.to))),i=Ge(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ss.bind(null,u));if(d>-1)return d;const _=_u(c[l-2]);return l>1&&_u(u)===_&&h[h.length-1].path!==_?h.findIndex(ss.bind(null,c[l-2])):d}),r=Ge(()=>i.value>-1&&QC(n.params,s.value.params)),o=Ge(()=>i.value>-1&&i.value===n.matched.length-1&&rp(n.params,s.value.params));function a(c={}){return YC(c)?e[Wn(t.replace)?"replace":"push"](Wn(t.to)).catch(Ms):Promise.resolve()}return{route:s,href:Ge(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const qC=Xu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pu,setup(t,{slots:e}){const n=Qs(pu(t)),{options:s}=et(wr),i=Ge(()=>({[gu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:_h("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),GC=qC;function YC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!st(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function _u(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gu=(t,e,n)=>t??e??n,JC=Xu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=et(Ho),i=Ge(()=>t.route||s.value),r=et(fu,0),o=Ge(()=>{let l=Wn(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ge(()=>i.value.matched[o.value]);gi(fu,Ge(()=>o.value+1)),gi(zC,a),gi(Ho,i);const c=Jp();return Vn(()=>[c.value,a.value,t.name],([l,u,h],[d,_,v])=>{u&&(u.instances[h]=l,_&&_!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!ss(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return mu(n.default,{Component:d,route:l});const _=h.props[u],v=_?_===!0?l.params:typeof _=="function"?_(l):_:null,P=_h(d,X({},v,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return mu(n.default,{Component:P,route:l})||P}}});function mu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const XC=JC;function pS(t){const e=SC(t.routes,t),n=t.parseQuery||jC,s=t.stringifyQuery||du,i=t.history,r=Ts(),o=Ts(),a=Ts(),c=Xp(Ut);let l=Ut;xn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Qr.bind(null,y=>""+y),h=Qr.bind(null,WC),d=Qr.bind(null,qi);function _(y,O){let S,M;return ap(y)?(S=e.getRecordMatcher(y),M=O):M=y,e.addRoute(M,S)}function v(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function C(){return e.getRoutes().map(y=>y.record)}function P(y){return!!e.getRecordMatcher(y)}function k(y,O){if(O=X({},O||c.value),typeof y=="string"){const g=Jr(n,y,O.path),m=e.resolve({path:g.path},O),w=i.createHref(g.fullPath);return X(g,m,{params:d(m.params),hash:qi(g.hash),redirectedFrom:void 0,href:w})}let S;if("path"in y)S=X({},y,{path:Jr(n,y.path,O.path).path});else{const g=X({},y.params);for(const m in g)g[m]==null&&delete g[m];S=X({},y,{params:h(g)}),O.params=h(O.params)}const M=e.resolve(S,O),Q=y.hash||"";M.params=u(d(M.params));const f=nC(s,X({},y,{hash:$C(Q),path:M.path})),p=i.createHref(f);return X({fullPath:f,hash:Q,query:s===du?VC(y.query):y.query||{}},M,{redirectedFrom:void 0,href:p})}function D(y){return typeof y=="string"?Jr(n,y,c.value.path):X({},y)}function W(y,O){if(l!==y)return is(8,{from:O,to:y})}function x(y){return Re(y)}function le(y){return x(X(D(y),{replace:!0}))}function ue(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:S}=O;let M=typeof S=="function"?S(y):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=D(M):{path:M},M.params={}),X({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function Re(y,O){const S=l=k(y),M=c.value,Q=y.state,f=y.force,p=y.replace===!0,g=ue(S);if(g)return Re(X(D(g),{state:typeof g=="object"?X({},Q,g.state):Q,force:f,replace:p}),O||S);const m=S;m.redirectedFrom=O;let w;return!f&&sC(s,M,S)&&(w=is(16,{to:m,from:M}),at(M,M,!0,!1)),(w?Promise.resolve(w):Be(m,M)).catch(I=>wt(I)?wt(I,2)?I:xt(I):Y(I,m,M)).then(I=>{if(I){if(wt(I,2))return Re(X({replace:p},D(I.to),{state:typeof I.to=="object"?X({},Q,I.to.state):Q,force:f}),O||m)}else I=Zt(m,M,!0,p,Q);return Mt(m,M,I),I})}function $e(y,O){const S=W(y,O);return S?Promise.reject(S):Promise.resolve()}function rt(y){const O=On.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function Be(y,O){let S;const[M,Q,f]=ZC(y,O);S=Xr(M.reverse(),"beforeRouteLeave",y,O);for(const g of M)g.leaveGuards.forEach(m=>{S.push(Bt(m,y,O))});const p=$e.bind(null,y,O);return S.push(p),Ie(S).then(()=>{S=[];for(const g of r.list())S.push(Bt(g,y,O));return S.push(p),Ie(S)}).then(()=>{S=Xr(Q,"beforeRouteUpdate",y,O);for(const g of Q)g.updateGuards.forEach(m=>{S.push(Bt(m,y,O))});return S.push(p),Ie(S)}).then(()=>{S=[];for(const g of f)if(g.beforeEnter)if(st(g.beforeEnter))for(const m of g.beforeEnter)S.push(Bt(m,y,O));else S.push(Bt(g.beforeEnter,y,O));return S.push(p),Ie(S)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),S=Xr(f,"beforeRouteEnter",y,O),S.push(p),Ie(S))).then(()=>{S=[];for(const g of o.list())S.push(Bt(g,y,O));return S.push(p),Ie(S)}).catch(g=>wt(g,8)?g:Promise.reject(g))}function Mt(y,O,S){a.list().forEach(M=>rt(()=>M(y,O,S)))}function Zt(y,O,S,M,Q){const f=W(y,O);if(f)return f;const p=O===Ut,g=xn?history.state:{};S&&(M||p?i.replace(y.fullPath,X({scroll:p&&g&&g.scroll},Q)):i.push(y.fullPath,Q)),c.value=y,at(y,O,S,p),xt()}let ot;function ms(){ot||(ot=i.listen((y,O,S)=>{if(!ii.listening)return;const M=k(y),Q=ue(M);if(Q){Re(X(Q,{replace:!0}),M).catch(Ms);return}l=M;const f=c.value;xn&&hC(iu(f.fullPath,S.delta),vr()),Be(M,f).catch(p=>wt(p,12)?p:wt(p,2)?(Re(p.to,M).then(g=>{wt(g,20)&&!S.delta&&S.type===Ys.pop&&i.go(-1,!1)}).catch(Ms),Promise.reject()):(S.delta&&i.go(-S.delta,!1),Y(p,M,f))).then(p=>{p=p||Zt(M,f,!1),p&&(S.delta&&!wt(p,8)?i.go(-S.delta,!1):S.type===Ys.pop&&wt(p,20)&&i.go(-1,!1)),Mt(M,f,p)}).catch(Ms)}))}let Rn=Ts(),fe=Ts(),ne;function Y(y,O,S){xt(y);const M=fe.list();return M.length?M.forEach(Q=>Q(y,O,S)):console.error(y),Promise.reject(y)}function vt(){return ne&&c.value!==Ut?Promise.resolve():new Promise((y,O)=>{Rn.add([y,O])})}function xt(y){return ne||(ne=!y,ms(),Rn.list().forEach(([O,S])=>y?S(y):O()),Rn.reset()),y}function at(y,O,S,M){const{scrollBehavior:Q}=t;if(!xn||!Q)return Promise.resolve();const f=!S&&dC(iu(y.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return ju().then(()=>Q(y,O,f)).then(p=>p&&uC(p)).catch(p=>Y(p,y,O))}const Ae=y=>i.go(y);let An;const On=new Set,ii={currentRoute:c,listening:!0,addRoute:_,removeRoute:v,hasRoute:P,getRoutes:C,resolve:k,options:t,push:x,replace:le,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:vt,install(y){const O=this;y.component("RouterLink",GC),y.component("RouterView",XC),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Wn(c)}),xn&&!An&&c.value===Ut&&(An=!0,x(i.location).catch(Q=>{}));const S={};for(const Q in Ut)Object.defineProperty(S,Q,{get:()=>c.value[Q],enumerable:!0});y.provide(wr,O),y.provide(_p,Mu(S)),y.provide(Ho,c);const M=y.unmount;On.add(y),y.unmount=function(){On.delete(y),On.size<1&&(l=Ut,ot&&ot(),ot=null,c.value=Ut,An=!1,ne=!1),M()}}};function Ie(y){return y.reduce((O,S)=>O.then(()=>rt(S)),Promise.resolve())}return ii}function ZC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>ss(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ss(l,c))||i.push(c))}return[n,s,i]}function _S(){return et(wr)}export{Et as F,Wt as G,lS as a,dS as b,Ge as c,tS as d,iS as e,aS as f,cS as g,_S as h,Ry as i,sS as j,He as k,dh as l,Wn as m,X_ as n,nS as o,pS as p,fS as q,uS as r,hS as s,eS as t,oS as u,rS as v,l_ as w};
