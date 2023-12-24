import{d as x,u as P,c as R,o as p,a as h,b as o,G as ue,s as ce,e as ie,i as de,g as pe,f as fe,h as ee,r as D,j as T,k as te,l as W,F as M,m as H,n as ve,p as he,q as _e,C as J,L as me,t as ye,P as be,v as ge,w as xe,x as $e,y as U,z as De,A as Me,B as A,D as F,E as w,H as O,I as V,J as Z,K as Ye,M as Ce,N as Ue}from"./vendor-A8w4dy_q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function d(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=d(s);fetch(s.href,n)}})();const ae="/users",Q="/blue-archive-currencies",Fe=u=>(u&&u[0]==="/"&&(u=u.substring(1)),`/gacha-tracker-online/${u||""}`),we=(u,t,d)=>{let l=-1;return u.forEach((s,n)=>{if(s[t]===d)return l=n,n}),l},ke=(u,t,d)=>{const l=we(u,t,d);return l>-1?u[l]:!1},N=u=>x(`${u} 00:00:00`),Se={class:"w-full h-12 md:px-8 sm:px-6 px-4 sticky top-0 border-b border-neutral-300"},Ae={class:"flex h-full items-center"},Ne=o("div",{class:"flex-none w-14"},"Logo",-1),Pe=o("div",{class:"flex-1"},"Menu",-1),Ie={class:"flex-none w-20"},Le={__name:"Nav",setup(u){const t=P(),d=R(()=>t.state.auth),l=()=>{const n=new ue;ce(t.state.auth,n).then(i=>{}).catch(i=>{console.log(i)})},s=()=>{ie(t.state.auth).then(n=>{}).catch(n=>{console.log(n)})};return(n,i)=>(p(),h("div",Se,[o("div",Ae,[Ne,Pe,o("div",Ie,[d.value.currentUser?(p(),h("button",{key:1,onClick:s,class:"bg-white w-full p-1 border rounded-lg"},"Sign Out")):(p(),h("button",{key:0,onClick:l,class:"bg-white w-full p-1 border rounded-lg"},"Sign In"))])])]))}},Ee={__name:"App",setup(u){const t=P(),l=de({apiKey:"AIzaSyB8hRY_mV19i_4K-Mno7Sn8FpOJGEIvDKM",authDomain:"gacha-tracker-online.firebaseapp.com",projectId:"gacha-tracker-online",storageBucket:"gacha-tracker-online.appspot.com",messagingSenderId:"395636017581",appId:"1:395636017581:web:2f03e7f80569c9a537b924",measurementId:"G-HW1B3NSFH8",databaseURL:"https://gacha-tracker-online-default-rtdb.asia-southeast1.firebasedatabase.app/"});t.commit("setFirebase",l),pe(l);const s=fe(l);return t.commit("setAuth",s),s.onAuthStateChanged(n=>{if(t.commit("setAuth",s),!s.currentUser)console.log("Sign Out"),t.commit("setAuth",!1),t.commit("setUser",!1);else{const i=`${ae}/${s.currentUser.uid}`,g=ee(l),I=D(g,i);T(I,Y=>{const k=Y.val();k||H(D(g,i),{in_game_name:"",email:s.currentUser.email,active:!1}),t.commit("setUser",k)})}}),(n,i)=>{const g=te("router-view");return p(),h(M,null,[W(Le),W(g)],64)}}},Be=ve({state:{firebase:!1,auth:!1,user:!1},mutations:{setFirebase(u,t){u.firebase=t},setAuth(u,t){u.auth=t?{...t}:!1},setUser(u,t){u.user=t?{...t}:!1}}}),Oe={class:"w-full py-3 md:px-8 sm:px-6 px-4"},Ve={key:0},Re={__name:"Main",setup(u){const t=P(),d=R(()=>t.state.auth),l=R(()=>t.state.user);return(s,n)=>{const i=te("router-view");return p(),h("div",Oe,[d.value.currentUser&&l.value?(p(),h(M,{key:0},[l.value.active?(p(),he(i,{key:1})):(p(),h("div",Ve,"Please contact Minnerva to activate your account."))],64)):_e("",!0)])}}},Te={class:"text-3xl font-bold text-center"},He={class:"mt-3 border border-gray-300 rounded-xl"},je=o("div",{class:"h-8 bg-slate-300 rounded-t-xl"},null,-1),Ge={class:"bg-white rounded-b-xl"},Ke={class:"p-2"},qe=["value"],ze=["value"],We=["value"],Je=o("br",null,null,-1),Ze=["placeholder"],Qe=["placeholder"],Xe=o("br",null,null,-1),X="chart",et={__name:"Index",setup(u){J.register(me,ye,be,ge,xe,$e);const t=P();let d=null;const l=U(x()),s=U([]),n=De(t.state.auth),i=x().year(),g=x().month()+1,I=x().date(),Y=l.value.daysInMonth(),k=12e3/Y,y=U({pyroxene:0,free_pull:0}),S=ee(t.state.firebase),c=U({date:"",pyroxene:void 0,free_pull:void 0}),$=U({years:[],months:[],dates:[]});for(let e=i;e>=2022;e--){let a={value:e,label:e};$.value.years.push(a),i===e&&(c.value.year=e)}for(let e=1;e<=12;e++){let a={value:e,label:e<=9?`0${e}`:e};$.value.months.push(a),g===e&&(c.value.month=e)}for(let e=1;e<=Y;e++){let a={value:e,label:e<=9?`0${e}`:e};$.value.dates.push(a),I===e&&(c.value.date=e)}const j=()=>{const e=t.state.user;e.blue_archive&&e.blue_archive.currency&&(y.value.pyroxene=e.blue_archive.currency.pyroxene,y.value.free_pull=e.blue_archive.currency.free_pull)};j();const se=()=>{if(n.currentUser){const e=x(`${c.value.year}-${c.value.month}-${c.value.date}`),a=`${Q}/${n.currentUser.uid}/${e.format("YYYY-MM")}`,r={pyroxene:c.value.pyroxene,free_pull:c.value.free_pull,day:e.format("YYYY-MM-DD")};isNaN(r.pyroxene)&&(r.pyroxene=y.value?y.value.pyroxene:0),isNaN(r.free_pull)&&(r.free_pull=y.value?y.value.free_pull:0);let _=-1;s.value.forEach((f,v)=>{if(f.day===e.format("YYYY-MM-DD"))return _=v,!1}),_<=-1?s.value.push(r):s.value.splice(_,1,r),H(D(S,a),s.value);const b=`${ae}/${n.currentUser.uid}`,m=D(S,b);T(m,f=>{const v=f.val();if(!v)window.alert("No user data found!!");else{if(!v.blue_archive)v.blue_archive={currency:r};else{const C=N(r.day);N(v.blue_archive.currency.day).diff(C,"day")<=0&&(v.blue_archive={currency:r})}H(D(S,b),v),t.commit("setUser",v)}}),c.value.pyroxene=void 0,c.value.free_pull=void 0,j(),L()}},G=(e,a)=>{const r=`${Q}/${n.currentUser.uid}/${e}-${a}`,_=D(S,r);T(_,b=>{let m=b.val()||[];m=m.filter(f=>f),m.sort((f,v)=>f.day>v.day?1:f.day<v.day?-1:0),s.value=[...m],L()})};G(i,g);const re=()=>{let e=l.value.year(),a=l.value.month()+1-1;a<=0&&(a=12,e--),K(e,a)},ne=()=>{let e=l.value.year(),a=l.value.month()+1+1;a>12&&(a=1,e++),K(e,a)},K=(e,a)=>{l.value=x(`${e}-${a}-01`),G(e,a)},L=()=>{const e=[],a=[],r=[],_=t.state.user;let b=0,m=null;_.blue_archive&&_.blue_archive.currency&&(b=_.blue_archive.currency.pyroxene+_.blue_archive.currency.free_pull*120,m=N(_.blue_archive.currency.day));for(let f=1;f<=Y;f++){const v=`${f}`.length===1?`0${f}`:f,C=`${l.value.format("YYYY-MM")}-${v}`,q=N(`${C}`);e.push(C);let E=0;const B=ke(s.value,"day",C);B?(E=B.pyroxene+B.free_pull*120,a.push(E)):a.push(null);const z=m.diff(q,"day");if(b<=0||z>0)r.push(null);else{const le=Math.floor(z*-1*k+b);r.push(le)}}d.data.labels=e,d.data.datasets[0].data=a,d.data.datasets[1].data=r,d.update()},oe=()=>{d=new J(document.querySelector(`#${X}`),{type:"line",data:{labels:[],datasets:[{data:[],borderColor:"#00D8FB",backgroundColor:"#FFFFFF"},{data:[],borderColor:"#FFE9F2",backgroundColor:"#FFFFFF"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{autoSkip:!0,maxTicksLimit:10}},y:{beginAtZero:!0}}}})};return Me(()=>{oe(),L()}),(e,a)=>(p(),h(M,null,[o("div",Te,[o("span",{onClick:re},"prev "),o("span",null,A(l.value.format("YYYY-MM")),1),o("span",{onClick:ne}," next")]),o("div",{class:"flex justify-center"},[o("div",{class:"w-full max-w-3xl h-72"},[o("canvas",{id:X})])]),o("div",He,[je,o("div",Ge,[o("div",Ke,[o("label",null,[F(" Year: "),w(o("select",{"onUpdate:modelValue":a[0]||(a[0]=r=>c.value.year=r)},[(p(!0),h(M,null,V($.value.years,r=>(p(),h("option",{value:r.value},A(r.label),9,qe))),256))],512),[[O,c.value.year]])]),o("label",null,[F(" Month: "),w(o("select",{"onUpdate:modelValue":a[1]||(a[1]=r=>c.value.month=r)},[(p(!0),h(M,null,V($.value.months,r=>(p(),h("option",{value:r.value},A(r.label),9,ze))),256))],512),[[O,c.value.month]])]),o("label",null,[F(" Date: "),w(o("select",{"onUpdate:modelValue":a[2]||(a[2]=r=>c.value.date=r)},[(p(!0),h(M,null,V($.value.dates,r=>(p(),h("option",{value:r.value},A(r.label),9,We))),256))],512),[[O,c.value.date]])]),Je,o("label",null,[F(" Pyroxenes: "),w(o("input",{type:"number","onUpdate:modelValue":a[3]||(a[3]=r=>c.value.pyroxene=r),placeholder:y.value.pyroxene},null,8,Ze),[[Z,c.value.pyroxene]])]),o("label",null,[F(" Free Pulls (Ticket): "),w(o("input",{type:"number","onUpdate:modelValue":a[4]||(a[4]=r=>c.value.free_pull=r),placeholder:y.value.free_pull},null,8,Qe),[[Z,c.value.free_pull]])]),Xe,o("button",{onClick:se},"Save")])])])],64))}},tt=Ye({history:Ce(),routes:[{path:Fe(""),component:Re,children:[{path:"",component:et}]}]});Ue(Ee).use(Be).use(tt).mount("#app");
