import{u as U,c as me,o as _,a as m,b as r,d as y,t as w,e as G,g as ue,G as Te,s as Fe,f as Oe,h as D,i as Ve,j as Ee,k as j,l as Ge,r as Le,m as f,F as q,n as X,p as je,q as qe,v as Ce,w as Ke,x as ze,y as We,z as ve,A as Je,B as Ze,D as Qe,E as Xe,H as et,I as tt,J as de,K as N,L as k,M as C,N as De,O as J,P as Ae,Q as pe,R as fe,S as st,T as at,U as nt,V as ot}from"./vendor-BQVWAgHc.js";import{C as we}from"./chart.js-ddEKr6i1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const rt="/gacha-tracker-online/assets/logo-QuR3q7Cb.png",it={class:"w-full h-12 bg-white shadow md:px-4 sm:px-6 px-4 sticky top-0 z-10"},lt={class:"flex h-full items-center"},ct={class:"flex-none w-14"},ut=["src"],dt={class:"flex-1 flex justify-end items-center"},_t=["title"],mt={class:"w-20"},pt={__name:"Nav",setup(e){const t=U(),a=me(()=>t.state.user),s=()=>{const o=ue(),i=new Te;Fe(o,i).then(l=>{}).catch(l=>{console.log(l)})},n=()=>{const o=ue();Oe(o).then(i=>{}).catch(i=>{console.log(i)})};return(o,i)=>(_(),m("div",it,[r("div",lt,[r("div",ct,[r("img",{src:y(rt)},null,8,ut)]),r("div",dt,[a.value?(_(),m("span",{key:0,class:"mr-3 truncate max-w-52",title:a.value.ign},w(a.value.ign),9,_t)):G("",!0),r("div",mt,[a.value?(_(),m("button",{key:1,onClick:n,class:"bg-white w-full p-1 border rounded-lg"},"Sign Out")):(_(),m("button",{key:0,onClick:s,class:"bg-white w-full p-1 border rounded-lg"},"Sign In"))])])])]))}},ft={__name:"App",setup(e){D.extend(Ve);const t=U(),s=Ee({apiKey:"AIzaSyB8hRY_mV19i_4K-Mno7Sn8FpOJGEIvDKM",authDomain:"gacha-tracker-online.firebaseapp.com",projectId:"gacha-tracker-online",storageBucket:"gacha-tracker-online.appspot.com",messagingSenderId:"395636017581",appId:"1:395636017581:web:2f03e7f80569c9a537b924",measurementId:"G-HW1B3NSFH8",databaseURL:"https://gacha-tracker-online-default-rtdb.asia-southeast1.firebasedatabase.app/"}),n=ue(s);return j(s),Ge(s),n.onAuthStateChanged(async o=>{if(!o&&t.state.user)window.location.reload();else if(!o)t.commit("setUser",!1);else{t.commit("setUID",o.uid);let i={};const l=D.utc().format("YYYY-MM-DD HH:mm:ss");t.dispatch("setUserListen",c=>{t.state.user||(c?(i={...c},i.last_signed_in_at=l):i={ign:"",active:!1,created_at:l,last_signed_in_at:l},t.dispatch("saveUser",i)),c&&t.commit("setUser",c)})}}),(o,i)=>{const l=Le("router-view");return _(),m(q,null,[f(pt),f(l)],64)}}},yt=e=>(e&&e[0]==="/"&&(e=e.substring(1)),`/gacha-tracker-online/${e||""}`),ht=(e,t)=>{let a=-1;const s=Object.keys(t);return e.forEach((n,o)=>{const i=[];if(s.forEach(l=>{n[l]===t[l]&&i.push(!0)}),i.length===s.length)return a=o,o}),a},gt=(e,t)=>e.filter(a=>{let s=[];for(let n in t)s.push(t[n]===a[n]);return s.every(n=>n)}),bt=(e,t)=>{const a=[];for(let s in e)a.push(e[s]);return gt(a,t)},Ye=(e,t)=>{const a=ht(e,t);return a>-1?e[a]:!1},R=e=>D(`${e} 00:00:00`),Z=({pyroxene:e,free_pull:t})=>Math.floor(e/120)+t,kt=e=>Math.floor(e/200),xe=e=>new Intl.NumberFormat("en-US",{}).format(e),vt=async e=>{const t=j();try{const s=(await qe(je(X(t),e))).val();return s||!1}catch(a){console.error(a)}},wt=(e,t)=>{const a=j(),s=X(a,e);Ce(s,n=>{const o=n.val();t(o)})},E=(e,t)=>{const a=j();Ke(X(a,e),t)},O=(e,t,a={})=>{a.filters||(a.filters=[]);const s=j(),n=[];let o=null;switch(a.order){case"child":n.push(We(a.order_key));break;case"key":n.push(ze());break;case"value":n.push(orderByValue(a.order_key));break}a.filters.forEach(i=>{switch(i.type){case"first":n.push(Xe(i.value));break;case"last":n.push(Qe(i.value));break;case"between":a.order==="key"&&(n.push(ve(i.start)),n.push(Ze(i.end)));break;case"endBefore":a.order==="key"&&n.push(Je(i.value));break;case"startAt":a.order==="key"&&n.push(ve(i.value));break}}),o=et(X(s,e),...n),Ce(o,i=>t(i.val()))},xt={namespaced:!0,state:{DB_PATH_BA_BANNER_PULL:"/ba-banner-pull",banner_pull:!1,listGetUpcomingListener:!1},mutations:{setBannerPull(e,t){e.banner_pull=t?{...t}:!1}},getters:{find:e=>t=>{const a=e.banner_pull[t];return a||null}},actions:{save({state:e,rootState:t},{key:a,data:s}){E(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}/${a}`,s)},delete({state:e,rootState:t},a){E(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}/${a}`,null)},setGetUpcomingRecordsListen({state:e,rootState:t},a){const{listGetUpcomingListener:s}=e;s&&(s.off(),e.listGetUpcomingListener=!1),e.listLatestListener=O(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}`,a,{order:"key",filters:[{type:"startAt",value:"2023-12-00"}]})}}},$t={namespaced:!0,state:{DB_PATH_BA_CURRENCY_OWN:"/ba-currency-own",listGetListener:!1,listLatestListener:!1,listLatestBeforeMonthListener:!1},actions:{save({state:e,rootState:t},{key:a,data:s}){E(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}/${a}`,s)},setGetRecordsListen({state:e,rootState:t},{year:a,month:s,callback:n}){const{listGetListener:o}=e;o&&(o.off(),e.listGetListener=!1),e.listLatestListener=O(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,n,{order:"key",filters:[{type:"between",start:`${a}-${s}-00`,end:`${a}-${s}-99`}]})},setGetLatestRecordListen({state:e,rootState:t},a){const{listLatestListener:s}=e;s&&(s.off(),e.listLatestListener=!1),e.listLatestListener=O(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,a,{filters:[{type:"last",value:1}]})},setGetLatestBeforeMonthListener({state:e,rootState:t},{year:a,month:s,callback:n}){const{listLatestBeforeMonthListener:o}=e;o&&(o.off(),e.listLatestBeforeMonthListener=!1),e.listLatestBeforeMonthListener=O(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,n,{order:"key",filters:[{type:"endBefore",value:`${a}-${s}-00`},{type:"last",value:1}]})}}},Bt={namespaced:!0,state:{DB_PATH_BA_CURRENCY_USE:"/ba-currency-use",listGetListener:!1},actions:{save({state:e,rootState:t},{key:a,data:s}){E(`${e.DB_PATH_BA_CURRENCY_USE}/${t.uid}/${a}`,s)},setGetRecordsListen({state:e,rootState:t},{year:a,month:s,callback:n}){const{listGetListener:o}=e;o&&(o.off(),e.listGetListener=!1),e.listLatestListener=O(`${e.DB_PATH_BA_CURRENCY_USE}/${t.uid}`,n,{order:"key",filters:[{type:"between",start:`${a}-${s}-00`,end:`${a}-${s}-99`}]})}}},Lt={"ba-banner-pull":xt,"ba-currency-own":$t,"ba-currency-use":Bt},Ct=tt({state:{DB_PATH_USER:"/users",DB_PATH_BLUE_ARCHIVE_CURRENCY:"/blue-archive-currencies",user:!1,uid:!1},mutations:{setUser(e,t){e.user=t?{...t}:!1},setUID(e,t){e.uid=t||!1}},actions:{findUser({state:e}){return vt(`${e.DB_PATH_USER}/${e.uid}`)},setUserListen({state:e},t){wt(`${e.DB_PATH_USER}/${e.uid}`,a=>t(a))},async saveUser({state:e},t){await E(`${e.DB_PATH_USER}/${e.uid}`,t)}},modules:Lt}),Dt={class:"relative shadow bg-white rounded-sm"},F={__name:"Card",props:{noPadding:{type:Boolean,default:!1}},setup(e){return(t,a)=>(_(),m("div",Dt,[de(t.$slots,"cover"),r("div",{class:N({"p-3":!e.noPadding})},[de(t.$slots,"body")],2)]))}},At=(e,t)=>{const a=e.__vccOpts||e;for(const[s,n]of t)a[s]=n;return a},Yt={class:"relative"},Mt=["src","title"],Rt=["placeholder","type","value"],Ut={__name:"Base",props:{danger:{type:Boolean,default:!1},icon:{},iconTitle:{},modelValue:{},type:{default:"text"},placeholder:{default:""},onChange:{type:Function,default(){return()=>{}}}},emits:["update:modelValue"],setup(e){const t=e,a=()=>{const{danger:s}=t;return s?["border-danger"]:["border-primary"]};return(s,n)=>(_(),m("div",Yt,[e.icon?(_(),m("img",{key:0,class:"absolute w-8 max-h-5 inset-y-0 m-auto z-10",src:e.icon,title:e.iconTitle},null,8,Mt)):G("",!0),r("input",{class:N(["w-full h-7 border-2 drop-shadow-sm focus:outline-0",[{"pl-4":!e.icon,"pl-9":e.icon},a()]]),placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:n[0]||(n[0]=o=>s.$emit("update:modelValue",o.target.value)),onChange:n[1]||(n[1]=(...o)=>e.onChange&&e.onChange(...o))},null,42,Rt)]))}},V=At(Ut,[["__scopeId","data-v-1d9c3069"]]),Me={__name:"Base",props:{primary:Boolean,danger:Boolean,onClick:Function},setup(e){const t=e,a=()=>({"border-2":!t.primary&&!t.danger,"text-white":t.primary||t.danger,"bg-primary":t.primary,"bg-danger":t.danger});return(s,n)=>(_(),m("button",{class:N(["rounded w-full h-8 select-none",[a()]]),onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},[de(s.$slots,"default")],2))}},Nt={class:"w-full py-3 md:px-8 sm:px-6 px-4"},Pt={key:0},St={class:"grid grid-cols-2 gap-4"},Ht={class:"col-span-full md:col-span-1"},It={key:1},Tt={__name:"Main",setup(e){const t=U(),a=me(()=>t.state.user),s=k(""),n=()=>{const{user:o}=t.state;o.ign=s,t.dispatch("saveUser",o)};return(o,i)=>{const l=Le("router-view");return _(),m("div",Nt,[a.value?(_(),m(q,{key:0},[a.value.ign?a.value.active?(_(),De(l,{key:2})):(_(),m("div",It,"Please contact Minnerva to activate your account.")):(_(),m("div",Pt,[f(F,null,{body:C(()=>[r("div",St,[r("label",Ht,[J(" Input your IGN or Discord Name: "),f(V,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c)},null,8,["modelValue"])]),f(Me,{class:"col-span-full md:col-start-1 md:col-end-2","on-click":n,primary:""},{default:C(()=>[J("Submit")]),_:1})])]),_:1})]))],64)):G("",!0)])}}},Ft="/gacha-tracker-online/assets/akane-bunny-icon-gfOjhgOr.webp",Ot="/gacha-tracker-online/assets/asuna-bunny-icon-oF1effRe.webp",Vt="/gacha-tracker-online/assets/hanako-swimsuit-icon-s2k28dzI.webp",Et="/gacha-tracker-online/assets/hare-camping-icon-xHKeVTgU.webp",Gt="/gacha-tracker-online/assets/haruna-tracksuit-icon-C3yJc6jX.webp",jt="/gacha-tracker-online/assets/himari-icon-NnOzyjRg.webp",qt="/gacha-tracker-online/assets/hina-swimsuit-icon-3-IoiTOU.webp",Kt="/gacha-tracker-online/assets/hinata-swimsuit-icon-Vx2yAU8s.webp",zt="/gacha-tracker-online/assets/iori-swimsuit-icon-5HfIKnaa.webp",Wt="/gacha-tracker-online/assets/karin-bunny-icon-z90yfVlX.webp",Jt="/gacha-tracker-online/assets/kayoko-new-year-icon-lEZ08tqZ.webp",Zt="/gacha-tracker-online/assets/kikyou-icon-OCtBoToh.webp",Qt="/gacha-tracker-online/assets/kotama-camping-icon-j0Rln9bx.webp",Xt="/gacha-tracker-online/assets/mari-tracksuit-icon-IfCWZ2Vl.webp",es="/gacha-tracker-online/assets/mimori-swimsuit-icon-ICDRkuj4.webp",ts="/gacha-tracker-online/assets/misaka-mikoto-icon-t-m5DYfT.webp",ss="/gacha-tracker-online/assets/miyako-swimsuit-icon-9NTUwO2x.webp",as="/gacha-tracker-online/assets/neru-bunny-icon-QPIKLGG6.webp",ns="/gacha-tracker-online/assets/nonomi-swimsuit-icon-Yyj40vp2.webp",os="/gacha-tracker-online/assets/renge-icon-nMq9xxcQ.webp",rs="/gacha-tracker-online/assets/saki-swimsuit-icon-y07xpALf.webp",is="/gacha-tracker-online/assets/shiroko-swimsuit-icon-gmc76iBJ.webp",ls="/gacha-tracker-online/assets/shokuhou-misaki-icon-r8ShdIbR.webp",cs="/gacha-tracker-online/assets/ui-swimsuit-icon-Y8SkXBci.webp",us="/gacha-tracker-online/assets/wakamo-swimsuit-icon-aFL8264u.webp",ds="/gacha-tracker-online/assets/yukari-icon-lJbTFHeZ.webp",_s="/gacha-tracker-online/assets/yuuka-tracksuit-icon-obYhk5gg.webp";let _e=[{name:"Akane",alter:"Bunny"},{name:"Asuna",alter:"Bunny"},{name:"Hanako",alter:"Swimsuit"},{name:"Hare",alter:"Camping"},{name:"Haruna",alter:"Tracksuit"},{name:"Himari",alter:""},{name:"Hina",alter:"Swimsuit"},{name:"Hinata",alter:"Swimsuit"},{name:"Iori",alter:"Swimsuit"},{name:"Karin",alter:"Bunny"},{name:"Kayoko",alter:"New Year"},{name:"Kikyou",alter:""},{name:"Kotama",alter:"Camping"},{name:"Mari",alter:"Tracksuit"},{name:"Mimori",alter:"Swimsuit"},{name:"Misaka Mikoto",alter:""},{name:"Miyako",alter:"Swimsuit"},{name:"Neru",alter:"Bunny"},{name:"Nonomi",alter:"Swimsuit"},{name:"Renge",alter:""},{name:"Saki",alter:"Swimsuit"},{name:"Shiroko",alter:"Swimsuit"},{name:"Shokuhou Misaki",alter:""},{name:"Ui",alter:"Swimsuit"},{name:"Wakamo",alter:"Swimsuit"},{name:"Yukari",alter:""},{name:"Yuuka",alter:"Tracksuit"}];_e=_e.map(e=>(e.full_name=e.alter?`${e.name} (${e.alter})`:e.name,e.key=e.full_name.replace(/[()]/g,"").replace(/\s/g,"-").toLocaleLowerCase(),e.icon=new URL(Object.assign({"/src/assets/students/akane-bunny-icon.webp":Ft,"/src/assets/students/asuna-bunny-icon.webp":Ot,"/src/assets/students/hanako-swimsuit-icon.webp":Vt,"/src/assets/students/hare-camping-icon.webp":Et,"/src/assets/students/haruna-tracksuit-icon.webp":Gt,"/src/assets/students/himari-icon.webp":jt,"/src/assets/students/hina-swimsuit-icon.webp":qt,"/src/assets/students/hinata-swimsuit-icon.webp":Kt,"/src/assets/students/iori-swimsuit-icon.webp":zt,"/src/assets/students/karin-bunny-icon.webp":Wt,"/src/assets/students/kayoko-new-year-icon.webp":Jt,"/src/assets/students/kikyou-icon.webp":Zt,"/src/assets/students/kotama-camping-icon.webp":Qt,"/src/assets/students/mari-tracksuit-icon.webp":Xt,"/src/assets/students/mimori-swimsuit-icon.webp":es,"/src/assets/students/misaka-mikoto-icon.webp":ts,"/src/assets/students/miyako-swimsuit-icon.webp":ss,"/src/assets/students/neru-bunny-icon.webp":as,"/src/assets/students/nonomi-swimsuit-icon.webp":ns,"/src/assets/students/renge-icon.webp":os,"/src/assets/students/saki-swimsuit-icon.webp":rs,"/src/assets/students/shiroko-swimsuit-icon.webp":is,"/src/assets/students/shokuhou-misaki-icon.webp":ls,"/src/assets/students/ui-swimsuit-icon.webp":cs,"/src/assets/students/wakamo-swimsuit-icon.webp":us,"/src/assets/students/yukari-icon.webp":ds,"/src/assets/students/yuuka-tracksuit-icon.webp":_s})[`/src/assets/students/${e.key}-icon.webp`],import.meta.url).href,e));const Re=_e,Ue="/gacha-tracker-online/assets/pyroxene-gBHgCIjf.webp",Ne="/gacha-tracker-online/assets/recruitment-ticket-NiO_EDI9.webp",$e="chart",ms={__name:"LineChart",props:{labels:{type:Array,required:!0},data:{type:Array,required:!0},pullBanners:{type:Array,default(){return[]}}},setup(e,{expose:t}){const a=e;let s=null;const n={};Ae(a,()=>{o()}),we.register({id:"default",afterDatasetsDraw(l){const c=l.getDatasetMeta(0).data;if(c.length>0){const{ctx:h}=l,$=14*l.currentDevicePixelRatio,P=16*l.currentDevicePixelRatio;c.forEach(({$context:ee},B)=>{const A=l.getDatasetMeta(1).data[B],S=ee.raw,K=A.$context.raw;if((S||K)&&a.pullBanners[B]){const te=S?c[B].x:A.x,se=S?c[B].y:A.y;a.pullBanners[B].forEach((z,d)=>{const u=Ye(Re,{key:z.student_key});if(u){if(!n[u.key]){const p=new Image($,P);p.src=u.icon,n[u.key]=p}h.drawImage(n[u.key],te-$/2,se-(-10+d*-1*P),$,P)}})}})}}});const o=()=>{s.data.labels=a.labels,a.data.forEach((l,c)=>{s.data.datasets[c].data=l}),s.update()},i=()=>{s=new we(document.querySelector(`#${$e}`),{type:"line",data:{labels:[],datasets:[{data:[],borderColor:"#00D8FB",backgroundColor:"#FFFFFF"},{data:[],borderColor:"#FFE9F2",backgroundColor:"#FFFFFF"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},animation:{},scales:{x:{ticks:{autoSkip:!0,maxTicksLimit:10}},y:{beginAtZero:!0}}}})};return pe(()=>{i()}),t({updateChart:o}),(l,c)=>(_(),m("canvas",{id:$e}))}},ps={class:"flex items-center"},fs=["src","title"],W={__name:"HistorySub",props:{icon:{required:!0},iconTitle:{},own:{required:!0},diff:{}},setup(e){const t=s=>{if(s>0)return"text-success";if(s<0)return"text-danger"},a=s=>`(${s>=0?"+":""}${xe(s)})`;return(s,n)=>(_(),m("div",ps,[r("img",{class:"w-8 mr-2",src:e.icon,title:e.iconTitle},null,8,fs),r("span",null,w(y(xe)(e.own)),1),e.diff&&e.diff!==0?(_(),m("span",{key:0,class:N(["ml-1 text-xs",t(e.diff)])},w(a(e.diff)),3)):G("",!0)]))}},Pe="/gacha-tracker-online/assets/icon-pulls-PmRtrI9p.png",ys="/gacha-tracker-online/assets/icon-3-stars-unit-G8a83jjO.png",hs={class:"grid grid-cols-2 gap-3"},gs={class:"col-span-1 border-r"},bs={class:"col-span-1"},ks={__name:"History",props:{item:{required:!0}},setup(e){const t=k(D()),a=s=>s===t.value.format("YYYY-MM-DD")?["text-primary","font-bold"]:[];return(s,n)=>(_(),m("div",hs,[r("div",{class:N(["col-span-2",a(e.item.date)])},w(e.item.date),3),r("div",gs,[f(W,{icon:y(Ue),"icon-title":"Pyroxene",own:e.item.pyroxene,diff:e.item.diff_pyroxene},null,8,["icon","own","diff"]),f(W,{icon:y(Ne),"icon-title":"Pull Ticket",own:e.item.free_pull,diff:e.item.diff_free_pull},null,8,["icon","own","diff"])]),r("div",bs,[f(W,{icon:y(Pe),"icon-title":"Total Pull",own:y(Z)(e.item)},null,8,["icon","own"]),f(W,{icon:y(ys),"icon-title":"Spark",own:y(kt)(y(Z)(e.item))},null,8,["icon","own"])])]))}},vs={class:"flow-root"},ws={class:"divide-y divide-gray-200 dark:divide-gray-700"},xs={key:0,class:"py-3 sm:py-4"},$s={__name:"History",props:{items:{required:!0}},setup(e){return(t,a)=>(_(),m("div",vs,[r("ul",ws,[!e.items||e.items.length<=0?(_(),m("li",xs,"No record found.")):(_(!0),m(q,{key:1},fe(e.items,s=>(_(),m("li",{key:s.date,class:"py-3 sm:py-4"},[f(ks,{item:s},null,8,["item"])]))),128))])]))}};let Q=[{date:"2023-09-26",duration:7,student_key:"kayoko-new-year"},{date:"2024-01-09",duration:7,student_key:"hina-swimsuit"},{date:"2024-01-09",duration:7,student_key:"iori-swimsuit"},{date:"2023-12-26",duration:14,student_key:"miyako-swimsuit"},{date:"2023-12-26",duration:14,student_key:"saki-swimsuit"},{date:"2024-01-16",duration:7,student_key:"shiroko-swimsuit"},{date:"2024-01-16",duration:7,student_key:"nonomi-swimsuit"},{date:"2024-01-16",duration:7,student_key:"wakamo-swimsuit"},{date:"2024-01-23",duration:9,student_key:"ui-swimsuit"},{date:"2024-01-23",duration:9,student_key:"hinata-swimsuit"},{date:"2024-02-01",duration:7,student_key:"hanako-swimsuit"},{date:"2024-02-15",duration:7,student_key:"mimori-swimsuit"},{date:"2024-03-16",duration:12,student_key:"haruna-tracksuit"},{date:"2024-03-16",duration:12,student_key:"yuuka-tracksuit"},{date:"2024-03-16",duration:12,student_key:"mari-tracksuit"},{date:"2024-04-18",duration:14,student_key:"misaka-mikoto"},{date:"2024-04-18",duration:14,student_key:"shokuhou-misaki"},{date:"2024-05-02",duration:8,student_key:"yukari"},{date:"2024-05-16",duration:14,student_key:"renge"},{date:"2024-05-16",duration:14,student_key:"kikyou"},{date:"2024-05-30",duration:7,student_key:"himari"},{date:"2024-06-13",duration:7,student_key:"karin-bunny"},{date:"2024-06-13",duration:7,student_key:"neru-bunny"},{date:"2024-06-13",duration:7,student_key:"akane-bunny"},{date:"2024-06-13",duration:7,student_key:"asuna-bunny"},{date:"2024-06-20",duration:14,student_key:"hare-camping"},{date:"2024-06-20",duration:14,student_key:"kotama-camping"}];Q=Q.map(e=>(e.key=`${e.date}-${e.student_key}`,e));Q.sort((e,t)=>e.date>t.date?1:e.date<t.date?-1:0);const Bs=Q,Ls={class:"grid grid-cols-10 gap-3 md:items-center"},Cs={class:"col-span-2 lg:col-span-2"},Ds=["src","title"],As={class:"col-span-8 lg:col-span-8"},Ys={__name:"Banner",props:{item:{required:!0},bannerPull:{}},setup(e){const t=e,a=U(),s=k(null),n=Ye(Re,{key:t.item.student_key});Ae(t,()=>{o()});const o=()=>{const c=a.getters["ba-banner-pull/find"](t.item.key);s.value=c?c.pull:null},i=()=>t.item.diff<=0?" - Live":` - ${t.item.diff} days`,l=()=>{const{item:c}=t,h=c.key;!s.value||s.value<=0?(a.dispatch("ba-banner-pull/delete",h),s.value=null):a.dispatch("ba-banner-pull/save",{key:h,data:{date:c.date,student_key:c.student_key,pull:s.value}})};return pe(()=>{o()}),(c,h)=>(_(),m("div",Ls,[r("div",Cs,[r("img",{src:y(n).icon,title:y(n).full_name},null,8,Ds)]),r("div",As,[r("div",null,w(e.item.date)+w(i()),1),r("div",null,w(y(n).full_name),1),r("div",null,[f(V,{modelValue:s.value,"onUpdate:modelValue":h[0]||(h[0]=$=>s.value=$),modelModifiers:{number:!0},placeholder:"200",icon:y(Pe),"icon-title":"Pull",type:"number","on-change":l},null,8,["modelValue","icon"])])])]))}},Ms={class:"flow-root"},Rs={class:"divide-y divide-gray-200 dark:divide-gray-700"},Us={key:0,class:"py-3 sm:py-4"},Ns={__name:"Banner",setup(e){const t=U(),a=me(()=>t.state["ba-banner-pull"].banner_pull),s=R(D().format("YYYY-MM-DD")),n=Bs.map(o=>{const i=R(o.date);return o.diff=i.diff(s,"day"),o}).filter(o=>o.diff>o.duration*-1);return(o,i)=>(_(),m("div",Ms,[r("ul",Rs,[y(n).length<=0?(_(),m("li",Us,"No banner found.")):(_(!0),m(q,{key:1},fe(y(n),l=>(_(),m("li",{key:l.key,class:"py-3 sm:py-4"},[f(Ys,{item:l,"banner-pull":a.value[l.key]},null,8,["item","banner-pull"])]))),128))])]))}},Ps="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/chevron-left?f=classic&s=solid%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20d='M9.4%20233.4c-12.5%2012.5-12.5%2032.8%200%2045.3l192%20192c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L77.3%20256%20246.6%2086.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200l-192%20192z'/%3e%3c/svg%3e",Ss="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/chevron-right?f=classic&s=solid%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20d='M310.6%20233.4c12.5%2012.5%2012.5%2032.8%200%2045.3l-192%20192c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3L242.7%20256%2073.4%2086.6c-12.5-12.5-12.5-32.8%200-45.3s32.8-12.5%2045.3%200l192%20192z'/%3e%3c/svg%3e",Hs="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/calendar?f=classic&s=regular&pc=%252300d8fb%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%2300d8fb'%20d='M152%2024c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V64H64C28.7%2064%200%2092.7%200%20128v16%2048V448c0%2035.3%2028.7%2064%2064%2064H384c35.3%200%2064-28.7%2064-64V192%20144%20128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V64H152V24zM48%20192H400V448c0%208.8-7.2%2016-16%2016H64c-8.8%200-16-7.2-16-16V192z'/%3e%3c/svg%3e",Is="/gacha-tracker-online/assets/mika-portrait-iOc64siT.webp",Ts={class:"grid grid-cols-10 gap-4"},Fs={class:"col-span-full md:col-span-8"},Os={class:"flex justify-center text-center"},Vs=["src"],Es={class:"mx-4 text-xl md:text-3xl font-bold"},Gs=["src"],js={class:"flex justify-center"},qs={class:"w-full h-72"},Ks={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},zs={class:"grid grid-cols-2 gap-0"},Ws=["onClick"],Js={class:"grid grid-cols-4 gap-4 p-3"},Zs={class:"col-span-full"},Qs={class:"col-span-full"},Xs={class:"col-span-full"},ea={class:"col-span-full md:col-start-2 md:col-end-4 mt-4"},ta=r("div",{class:"h-10 text-md0 md:text-xl font-bold border-b"},"History",-1),sa=r("div",{class:"h-10 text-md0 md:text-xl font-bold border-b"},"Upcoming Banners",-1),aa={class:"col-span-full md:col-span-full xl:col-span-2 grid items-center content-end"},na={class:"text-center"},oa=["src"],Be=12e3/30,ra={__name:"Index",setup(e){const t=U(),a=k([{key:"record",label:"Record"},{key:"use",label:"Use"}]),s=k("record"),n=k(D()),o=k([]),i=k([]),l=k({date:"",pyroxene:0,free_pull:0}),c=st({day:n.value.format("YYYY-MM-DD"),pyroxene:void 0,free_pull:void 0}),h=k({labels:[],data:[],pull_banners:[]}),$=d=>{if(d.key!==s.value)return["hover:text-gray-600","hover:border-gray-300","dark:hover:text-gray-300"];if(d.key==="record")return["font-bold","border-primary","text-primary"];if(d.key==="use")return["font-bold","border-danger","text-danger"]},P=d=>{s.value!==d&&(c.day=D().format("YYYY-MM-DD"),c.pyroxene=void 0,c.free_pull=void 0,s.value=d)},ee=()=>{t.dispatch("ba-currency-own/setGetLatestRecordListen",d=>{if(d){const u=Object.keys(d);u.length>0&&(l.value={date:u[0],...d[u[0]]})}})},B=(d,u)=>{t.dispatch("ba-currency-own/setGetLatestBeforeMonthListener",{year:d,month:u,callback:p=>{const x=[];let g=[],H=0;o.value&&(g=Object.keys(o.value),g.reverse(),H=g.length);for(let b=0;b<H;b++){const L=o.value[g[b]];let v=o.value[g[b+1]];const Y={date:g[b],pyroxene:L.pyroxene,free_pull:L.free_pull,diff_pyroxene:null,diff_free_pull:null};!v&&p&&(v=p[Object.keys(p)[0]]),v&&(Y.diff_pyroxene=L.pyroxene-v.pyroxene,Y.diff_free_pull=L.free_pull-v.free_pull),x.push(Y)}i.value=x}})},A=(d,u)=>{t.dispatch("ba-currency-own/setGetRecordsListen",{year:d,month:u,callback:p=>{o.value=p,z(),B(d,u)}})},S=()=>{t.dispatch("ba-banner-pull/setGetUpcomingRecordsListen",d=>{t.commit("ba-banner-pull/setBannerPull",d)})},K=d=>{n.value=d,A(d.format("YYYY"),d.format("MM"))},te=()=>{const d=n.value.add(-1,"month").startOf("month");K(d)},se=()=>{const d=n.value.add(1,"month").startOf("month");K(d)},ye=async()=>{const d=R(c.day),u={pyroxene:c.pyroxene,free_pull:c.free_pull};s.value==="record"?(isNaN(u.pyroxene)&&(u.pyroxene=l.value?l.value.pyroxene:0),isNaN(u.free_pull)&&(u.free_pull=l.value?l.value.free_pull:0),t.dispatch("ba-currency-own/save",{key:d.format("YYYY-MM-DD"),data:u})):s.value==="use"?(isNaN(u.pyroxene)&&(u.pyroxene=0),isNaN(u.free_pull)&&(u.free_pull=0),t.dispatch("ba-currency-use/save",{key:d.format("YYYY-MM-DD"),data:u})):console.error("Form Active Key is invalid."),c.pyroxene=void 0,c.free_pull=void 0,z()},z=()=>{const d=[],u=[],p=[],x=l.value?R(l.value.date):!1,g=t.state["ba-banner-pull"].banner_pull,H=Object.keys(g);let b=!1,L=!1;const v=[],Y=n.value.startOf("month"),Se=n.value.endOf("month"),He=Y.diff(Se,"day")*-1+1;for(let ae=0;ae<He;ae++){const I=Y.add(ae,"day"),ne=I.format("YYYY-MM-DD"),oe=o.value?o.value[ne]:!1;let he=null,ge=null;if(oe&&(he=Z({pyroxene:oe.pyroxene,free_pull:oe.free_pull})),x){const be=x.diff(I,"day");be<=0&&(b===!1?b=be*-1*Be+l.value.pyroxene:b+=Be,g&&(L||(H.forEach(re=>{const T=g[re],M=R(T.date),ie=M.diff(x,"day"),le=M.startOf("month"),ce=I.startOf("month"),Ie=le.diff(ce,"month");ie>0&&Ie<0&&(b-=T.pull*120)}),L=!0),H.forEach(re=>{const T=g[re],M=R(T.date),ie=M.diff(x,"day"),le=M.diff(I,"day"),ce=M.diff(I,"month");ie>0&&ce===0&&le===0&&(b-=T.pull*120)})),ge=Z({pyroxene:b,free_pull:l.value.free_pull}));const ke=bt(g,{date:ne});ke.length<=0?v.push(null):v.push(ke)}d.push(ne),u.push(he),p.push(ge)}h.value.labels=d,h.value.data=[u,p],h.value.pull_banners=v};return pe(()=>{ee(),S(),A(n.value.format("YYYY"),n.value.format("MM"))}),(d,u)=>(_(),m("div",Ts,[r("div",Fs,[r("div",Os,[r("img",{src:y(Ps),class:"cursor-pointer select-none",onClick:te},null,8,Vs),r("span",Es,w(n.value.format("YYYY-MM")),1),r("img",{src:y(Ss),class:"cursor-pointer select-none",onClick:se},null,8,Gs)]),r("div",js,[r("div",qs,[h.value.labels?(_(),De(ms,{key:0,labels:h.value.labels,data:h.value.data,"pull-banners":h.value.pull_banners},null,8,["labels","data","pull-banners"])):G("",!0)])])]),f(F,{class:"max-h-72 col-span-full md:col-span-2"},{body:C(()=>[J(" TBD ")]),_:1}),f(F,{class:"max-h-72 col-span-full md:col-span-2","no-padding":""},{body:C(()=>[r("div",Ks,[r("ul",zs,[(_(!0),m(q,null,fe(a.value,p=>(_(),m("li",{key:p.key,class:"col-span-auto"},[r("div",{class:N(["p-3 border-b-2 border-transparent rounded-t-lg cursor-pointer",$(p)]),onClick:x=>P(p.key)},w(p.label),11,Ws)]))),128))])]),r("div",Js,[r("div",Zs,[f(V,{modelValue:c.day,"onUpdate:modelValue":u[0]||(u[0]=p=>c.day=p),icon:y(Hs),"icon-title":"Date",type:"date",danger:s.value==="use"},null,8,["modelValue","icon","danger"])]),r("div",Qs,[f(V,{modelValue:c.pyroxene,"onUpdate:modelValue":u[1]||(u[1]=p=>c.pyroxene=p),modelModifiers:{number:!0},placeholder:s.value==="record"?l.value.pyroxene:"0",icon:y(Ue),"icon-title":"Pyroxene",type:"number",danger:s.value==="use"},null,8,["modelValue","placeholder","icon","danger"])]),r("div",Xs,[f(V,{modelValue:c.free_pull,"onUpdate:modelValue":u[2]||(u[2]=p=>c.free_pull=p),modelModifiers:{number:!0},placeholder:s.value==="record"?l.value.free_pull:"0",icon:y(Ne),"icon-title":"Free Pull",type:"number",danger:s.value==="use"},null,8,["modelValue","placeholder","icon","danger"])]),r("div",ea,[f(Me,{"on-click":ye,primary:s.value==="record",danger:s.value==="use"},{default:C(()=>[J(" Save ")]),_:1},8,["primary","danger"])])])]),_:1}),f(F,{class:"col-span-full md:col-span-4 xl:col-span-3"},{body:C(()=>[ta,f($s,{class:"max-h-56 overflow-auto pr-2",items:i.value},null,8,["items"])]),_:1}),f(F,{class:"col-span-full overflow-auto md:col-span-4 xl:col-span-3"},{body:C(()=>[sa,f(Ns,{class:"max-h-56 overflow-auto pr-2"})]),_:1}),r("div",aa,[r("div",na,[r("img",{class:"inline-block max-w-36",src:y(Is),title:"My Wife!!!"},null,8,oa)])])]))}},ia=at({history:nt(),routes:[{path:yt(""),component:Tt,children:[{path:"",component:ra}]}]});ot(ft).use(Ct).use(ia).mount("#app");