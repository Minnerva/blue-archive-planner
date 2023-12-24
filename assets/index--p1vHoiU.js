import{d as $,u as A,c as ee,o as d,a as h,b as n,g as I,G as ce,s as ie,e as de,i as pe,f as fe,h as te,r as M,j as T,k as ae,l as W,F as Y,m as H,n as ve,p as he,q as _e,C as J,L as ye,t as me,P as be,v as ge,w as xe,x as $e,y as U,z as De,A as P,B as w,D as F,E as V,H as R,I as Z,J as Me,K as Ye,M as Ce}from"./vendor-WSsOEQUn.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const se="/users",Q="/blue-archive-currencies",Ue=c=>(c&&c[0]==="/"&&(c=c.substring(1)),`/gacha-tracker-online/${c||""}`),we=(c,l,i)=>{let o=-1;return c.forEach((s,r)=>{if(s[l]===i)return o=r,r}),o},Fe=(c,l,i)=>{const o=we(c,l,i);return o>-1?c[o]:!1},N=c=>$(`${c} 00:00:00`),ke={class:"w-full h-12 md:px-8 sm:px-6 px-4 sticky top-0 border-b border-neutral-300"},Se={class:"flex h-full items-center"},Pe=n("div",{class:"flex-none w-14"},"Logo",-1),Ne=n("div",{class:"flex-1"},"Menu",-1),Ie={class:"flex-none w-20"},Ae={__name:"Nav",setup(c){const l=A(),i=ee(()=>l.state.user),o=()=>{const r=I(),p=new ce;ie(r,p).then(b=>{}).catch(b=>{console.log(b)})},s=()=>{const r=I();de(r).then(p=>{}).catch(p=>{console.log(p)})};return(r,p)=>(d(),h("div",ke,[n("div",Se,[Pe,Ne,n("div",Ie,[i.value?(d(),h("button",{key:1,onClick:s,class:"bg-white w-full p-1 border rounded-lg"},"Sign Out")):(d(),h("button",{key:0,onClick:o,class:"bg-white w-full p-1 border rounded-lg"},"Sign In"))])])]))}},Le={__name:"App",setup(c){const l=A(),o=pe({apiKey:"AIzaSyB8hRY_mV19i_4K-Mno7Sn8FpOJGEIvDKM",authDomain:"gacha-tracker-online.firebaseapp.com",projectId:"gacha-tracker-online",storageBucket:"gacha-tracker-online.appspot.com",messagingSenderId:"395636017581",appId:"1:395636017581:web:2f03e7f80569c9a537b924",measurementId:"G-HW1B3NSFH8",databaseURL:"https://gacha-tracker-online-default-rtdb.asia-southeast1.firebasedatabase.app/"});fe(o);const s=I(o),r=te(o);return s.onAuthStateChanged(p=>{if(!s.currentUser)console.log("Sign Out"),l.commit("setUser",!1);else{const b=`${se}/${s.currentUser.uid}`,x=M(r,b);T(x,L=>{const _=L.val();_||H(M(r,b),{in_game_name:"",email:s.currentUser.email,active:!1}),l.commit("setUser",_)})}}),(p,b)=>{const x=ae("router-view");return d(),h(Y,null,[W(Ae),W(x)],64)}}},Ee=ve({state:{user:!1},mutations:{setUser(c,l){c.user=l?{...l}:!1}}}),Be={class:"w-full py-3 md:px-8 sm:px-6 px-4"},Oe={key:0},Ve={__name:"Main",setup(c){const l=A(),i=ee(()=>l.state.user);return(o,s)=>{const r=ae("router-view");return d(),h("div",Be,[i.value?(d(),h(Y,{key:0},[i.value.active?(d(),he(r,{key:1})):(d(),h("div",Oe,"Please contact Minnerva to activate your account."))],64)):_e("",!0)])}}},Re={class:"text-3xl font-bold text-center"},Te={class:"mt-3 border border-gray-300 rounded-xl"},He=n("div",{class:"h-8 bg-slate-300 rounded-t-xl"},null,-1),je={class:"bg-white rounded-b-xl"},Ge={class:"p-2"},Ke=["value"],qe=["value"],ze=["value"],We=n("br",null,null,-1),Je=["placeholder"],Ze=["placeholder"],Qe=n("br",null,null,-1),X="chart",Xe={__name:"Index",setup(c){J.register(ye,me,be,ge,xe,$e);const l=A();let i=null;const o=U($()),s=U([]),r=$().year(),p=$().month()+1,b=$().date(),x=o.value.daysInMonth(),L=12e3/x,_=U({pyroxene:0,free_pull:0}),k=I(),S=te(),u=U({date:"",pyroxene:void 0,free_pull:void 0}),D=U({years:[],months:[],dates:[]});for(let e=r;e>=2022;e--){let t={value:e,label:e};D.value.years.push(t),r===e&&(u.value.year=e)}for(let e=1;e<=12;e++){let t={value:e,label:e<=9?`0${e}`:e};D.value.months.push(t),p===e&&(u.value.month=e)}for(let e=1;e<=x;e++){let t={value:e,label:e<=9?`0${e}`:e};D.value.dates.push(t),b===e&&(u.value.date=e)}const j=()=>{const e=l.state.user;e.blue_archive&&e.blue_archive.currency&&(_.value.pyroxene=e.blue_archive.currency.pyroxene,_.value.free_pull=e.blue_archive.currency.free_pull)};j();const re=()=>{if(k.currentUser){const e=$(`${u.value.year}-${u.value.month}-${u.value.date}`),t=`${Q}/${k.currentUser.uid}/${e.format("YYYY-MM")}`,a={pyroxene:u.value.pyroxene,free_pull:u.value.free_pull,day:e.format("YYYY-MM-DD")};isNaN(a.pyroxene)&&(a.pyroxene=_.value?_.value.pyroxene:0),isNaN(a.free_pull)&&(a.free_pull=_.value?_.value.free_pull:0);let y=-1;s.value.forEach((f,v)=>{if(f.day===e.format("YYYY-MM-DD"))return y=v,!1}),y<=-1?s.value.push(a):s.value.splice(y,1,a),H(M(S,t),s.value);const g=`${se}/${k.currentUser.uid}`,m=M(S,g);T(m,f=>{const v=f.val();if(!v)window.alert("No user data found!!");else{if(!v.blue_archive)v.blue_archive={currency:a};else{const C=N(a.day);N(v.blue_archive.currency.day).diff(C,"day")<=0&&(v.blue_archive={currency:a})}H(M(S,g),v),l.commit("setUser",v)}}),u.value.pyroxene=void 0,u.value.free_pull=void 0,j(),E()}},G=(e,t)=>{const a=`${Q}/${k.currentUser.uid}/${e}-${t}`,y=M(S,a);T(y,g=>{let m=g.val()||[];m=m.filter(f=>f),m.sort((f,v)=>f.day>v.day?1:f.day<v.day?-1:0),s.value=[...m],E()})};G(r,p);const ne=()=>{let e=o.value.year(),t=o.value.month()+1-1;t<=0&&(t=12,e--),K(e,t)},oe=()=>{let e=o.value.year(),t=o.value.month()+1+1;t>12&&(t=1,e++),K(e,t)},K=(e,t)=>{o.value=$(`${e}-${t}-01`),G(e,t)},E=()=>{const e=[],t=[],a=[],y=l.state.user;let g=0,m=null;y.blue_archive&&y.blue_archive.currency&&(g=y.blue_archive.currency.pyroxene+y.blue_archive.currency.free_pull*120,m=N(y.blue_archive.currency.day));for(let f=1;f<=x;f++){const v=`${f}`.length===1?`0${f}`:f,C=`${o.value.format("YYYY-MM")}-${v}`,q=N(`${C}`);e.push(C);let B=0;const O=Fe(s.value,"day",C);O?(B=O.pyroxene+O.free_pull*120,t.push(B)):t.push(null);const z=m.diff(q,"day");if(g<=0||z>0)a.push(null);else{const ue=Math.floor(z*-1*L+g);a.push(ue)}}i.data.labels=e,i.data.datasets[0].data=t,i.data.datasets[1].data=a,i.update()},le=()=>{i=new J(document.querySelector(`#${X}`),{type:"line",data:{labels:[],datasets:[{data:[],borderColor:"#00D8FB",backgroundColor:"#FFFFFF"},{data:[],borderColor:"#FFE9F2",backgroundColor:"#FFFFFF"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{autoSkip:!0,maxTicksLimit:10}},y:{beginAtZero:!0}}}})};return De(()=>{le(),E()}),(e,t)=>(d(),h(Y,null,[n("div",Re,[n("span",{onClick:ne},"prev "),n("span",null,P(o.value.format("YYYY-MM")),1),n("span",{onClick:oe}," next")]),n("div",{class:"flex justify-center"},[n("div",{class:"w-full max-w-3xl h-72"},[n("canvas",{id:X})])]),n("div",Te,[He,n("div",je,[n("div",Ge,[n("label",null,[w(" Year: "),F(n("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>u.value.year=a)},[(d(!0),h(Y,null,R(D.value.years,a=>(d(),h("option",{value:a.value},P(a.label),9,Ke))),256))],512),[[V,u.value.year]])]),n("label",null,[w(" Month: "),F(n("select",{"onUpdate:modelValue":t[1]||(t[1]=a=>u.value.month=a)},[(d(!0),h(Y,null,R(D.value.months,a=>(d(),h("option",{value:a.value},P(a.label),9,qe))),256))],512),[[V,u.value.month]])]),n("label",null,[w(" Date: "),F(n("select",{"onUpdate:modelValue":t[2]||(t[2]=a=>u.value.date=a)},[(d(!0),h(Y,null,R(D.value.dates,a=>(d(),h("option",{value:a.value},P(a.label),9,ze))),256))],512),[[V,u.value.date]])]),We,n("label",null,[w(" Pyroxenes: "),F(n("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=a=>u.value.pyroxene=a),placeholder:_.value.pyroxene},null,8,Je),[[Z,u.value.pyroxene]])]),n("label",null,[w(" Free Pulls (Ticket): "),F(n("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=a=>u.value.free_pull=a),placeholder:_.value.free_pull},null,8,Ze),[[Z,u.value.free_pull]])]),Qe,n("button",{onClick:re},"Save")])])])],64))}},et=Me({history:Ye(),routes:[{path:Ue(""),component:Ve,children:[{path:"",component:Xe}]}]});Ce(Le).use(Ee).use(et).mount("#app");