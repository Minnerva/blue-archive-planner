import{u as R,c as se,o as i,a as u,b as l,d as _,t as B,e as P,g as U,G as he,s as ye,f as ve,h as w,i as ge,j as be,k as D,r as oe,l as p,F as E,m as S,n as we,p as xe,q as ne,v as $e,w as ke,x as Le,y as Ce,z as Be,A as De,B as Ae,D as Me,E as Fe,H as Ie,I as Y,J as H,K as $,L as C,M as Re,N as O,O as Pe,P as ae,Q as Se,R as He,S as Ne,T as Ve,U as Ue}from"./vendor-OnjtbsBA.js";import{C as J,L as Ye,a as Oe,P as Te,b as Ee,c as Ge,p as je}from"./chart.js-Uii3J8Sj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const qe="/gacha-tracker-online/assets/logo-QuR3q7Cb.png",ze={class:"w-full h-12 shadow md:px-4 sm:px-6 px-4 sticky top-0"},We={class:"flex h-full items-center"},Ke={class:"flex-none w-14"},Je=["src"],Qe={class:"flex-1 flex justify-end items-center"},Ze=["title"],Xe={class:"w-20"},et={__name:"Nav",setup(e){const t=R(),s=se(()=>t.state.user),o=()=>{const a=U(),r=new he;ye(a,r).then(m=>{}).catch(m=>{console.log(m)})},n=()=>{const a=U();ve(a).then(r=>{}).catch(r=>{console.log(r)})};return(a,r)=>(i(),u("div",ze,[l("div",We,[l("div",Ke,[l("img",{src:_(qe)},null,8,Je)]),l("div",Qe,[s.value?(i(),u("span",{key:0,class:"mr-3 truncate max-w-52",title:s.value.ign},B(s.value.ign),9,Ze)):P("",!0),l("div",Xe,[s.value?(i(),u("button",{key:1,onClick:n,class:"bg-white w-full p-1 border rounded-lg"},"Sign Out")):(i(),u("button",{key:0,onClick:o,class:"bg-white w-full p-1 border rounded-lg"},"Sign In"))])])])]))}},re=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s},tt={__name:"App",setup(e){w.extend(ge);const t=R(),o=be({apiKey:"AIzaSyB8hRY_mV19i_4K-Mno7Sn8FpOJGEIvDKM",authDomain:"gacha-tracker-online.firebaseapp.com",projectId:"gacha-tracker-online",storageBucket:"gacha-tracker-online.appspot.com",messagingSenderId:"395636017581",appId:"1:395636017581:web:2f03e7f80569c9a537b924",measurementId:"G-HW1B3NSFH8",databaseURL:"https://gacha-tracker-online-default-rtdb.asia-southeast1.firebasedatabase.app/"}),n=U(o);return D(o),n.onAuthStateChanged(async a=>{if(!a&&t.state.user)window.location.reload();else if(!a)t.commit("setUser",!1);else{t.commit("setUID",a.uid);let r={};const m=w.utc().format("YYYY-MM-DD HH:mm:ss");t.dispatch("setUserListen",f=>{t.state.user||(f?(r={...f},r.last_signed_in_at=m):r={ign:"",active:!0,created_at:m,last_signed_in_at:m},t.dispatch("saveUser",r)),f&&t.commit("setUser",f)})}}),(a,r)=>{const m=oe("router-view");return i(),u(E,null,[p(et),p(m)],64)}}},st=e=>(e&&e[0]==="/"&&(e=e.substring(1)),`/gacha-tracker-online/${e||""}`),Q=e=>w(`${e} 00:00:00`),Z=e=>Math.floor(e/120),X=({pyroxene:e,free_pull:t})=>Math.floor(e/120)+t,ot=e=>Math.floor(e/200),ee=e=>new Intl.NumberFormat("en-US",{}).format(e),nt=async e=>{const t=D();try{const o=(await xe(we(S(t),e))).val();return o||!1}catch(s){console.error(s)}},at=(e,t)=>{const s=D(),o=S(s,e);ne(o,n=>{const a=n.val();t(a)})},le=(e,t)=>{const s=D();$e(S(s,e),t)},V=(e,t,s={})=>{s.filters||(s.filters=[]);const o=D(),n=[];let a=null;switch(s.order){case"child":n.push(Le(s.order_key));break;case"key":n.push(ke());break;case"value":n.push(orderByValue(s.order_key));break}s.filters.forEach(r=>{switch(r.type){case"first":n.push(Me(r.value));break;case"last":n.push(Ae(r.value));break;case"between":s.order==="key"&&(n.push(Be(r.start)),n.push(De(r.end)));break;case"endBefore":s.order==="key"&&n.push(Ce(r.value));break}}),a=Fe(S(o,e),...n),ne(a,r=>t(r.val()))},rt={namespaced:!0,state:{DB_PATH_BA_CURRENCY_OWN:"/ba-currency-own",listGetListener:!1,listLatestListener:!1,listLatestBeforeMonthListener:!1},mutations:{},actions:{get(){},save({state:e,rootState:t},{key:s,data:o}){le(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}/${s}`,o)},setGetRecordsListen({state:e,rootState:t},{year:s,month:o,callback:n}){const{listGetListener:a}=e;a&&(a.off(),e.listGetListener=!1),e.listLatestListener=V(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,n,{order:"key",filters:[{type:"between",start:`${s}-${o}-00`,end:`${s}-${o}-99`}]})},setGetLatestRecordListen({state:e,rootState:t},s){const{listLatestListener:o}=e;o&&(o.off(),e.listLatestListener=!1),e.listLatestListener=V(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,s,{filters:[{type:"last",value:1}]})},setGetLatestBeforeMonthListener({state:e,rootState:t},{year:s,month:o,callback:n}){const{listLatestBeforeMonthListener:a}=e;a&&(a.off(),e.listLatestBeforeMonthListener=!1),e.listLatestBeforeMonthListener=V(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,n,{order:"key",filters:[{type:"endBefore",value:`${s}-${o}-00`},{type:"last",value:1}]})}}},lt={"ba-currency-own":rt},ct=Ie({state:{DB_PATH_USER:"/users",DB_PATH_BLUE_ARCHIVE_CURRENCY:"/blue-archive-currencies",user:!1,uid:!1},mutations:{setUser(e,t){e.user=t?{...t}:!1},setUID(e,t){e.uid=t||!1}},actions:{findUser({state:e}){return nt(`${e.DB_PATH_USER}/${e.uid}`)},setUserListen({state:e},t){at(`${e.DB_PATH_USER}/${e.uid}`,s=>t(s))},async saveUser({state:e},t){await le(`${e.DB_PATH_USER}/${e.uid}`,t)}},modules:lt}),it={},dt={class:"relative shadow bg-white rounded-sm"},ut={class:"p-3"};function ft(e,t){return i(),u("div",dt,[Y(e.$slots,"cover"),l("div",ut,[Y(e.$slots,"body")])])}const T=re(it,[["render",ft]]),pt={class:"relative"},mt=["src","title"],_t=["placeholder","type","value"],ht={__name:"Base",props:{icon:{},iconTitle:{},modelValue:{},type:{default:"text"},placeholder:{default:""}},emits:["update:modelValue"],setup(e){return(t,s)=>(i(),u("div",pt,[e.icon?(i(),u("img",{key:0,class:"absolute w-8 max-h-5 inset-y-0 m-auto z-10",src:e.icon,title:e.iconTitle},null,8,mt)):P("",!0),l("input",{class:H(["w-full h-7 border-primary border-2 drop-shadow-sm focus:outline-0",{"pl-4":!e.icon,"pl-9":e.icon}]),placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:s[0]||(s[0]=o=>t.$emit("update:modelValue",o.target.value))},null,42,_t)]))}},I=re(ht,[["__scopeId","data-v-6eb494d7"]]),ce={__name:"Base",props:{primary:Boolean,onClick:Function},setup(e){const t=e,s={"border-2":!t.primary,"text-white":t.primary,"bg-primary":t.primary};return(o,n)=>(i(),u("button",{class:H(["rounded w-full h-8 select-none",s]),onClick:n[0]||(n[0]=(...a)=>e.onClick&&e.onClick(...a))},[Y(o.$slots,"default")]))}},yt={class:"w-full py-3 md:px-8 sm:px-6 px-4"},vt={key:0},gt={class:"grid grid-cols-2 gap-4"},bt={class:"col-span-full md:col-span-1"},wt={key:1},xt={__name:"Main",setup(e){const t=R(),s=se(()=>t.state.user),o=$(""),n=()=>{const{user:a}=t.state;a.ign=o,t.dispatch("saveUser",a)};return(a,r)=>{const m=oe("router-view");return i(),u("div",yt,[s.value?(i(),u(E,{key:0},[s.value.ign?s.value.active?(i(),Re(m,{key:2})):(i(),u("div",wt,"Please contact Minnerva to activate your account.")):(i(),u("div",vt,[p(T,null,{body:C(()=>[l("div",gt,[l("label",bt,[O(" Input your IGN or Discord Name: "),p(I,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=f=>o.value=f)},null,8,["modelValue"])]),p(ce,{class:"col-span-full md:col-start-1 md:col-end-2","on-click":n,primary:""},{default:C(()=>[O("Submit")]),_:1})])]),_:1})]))],64)):P("",!0)])}}},te="chart",$t={__name:"LineChart",props:{labels:{type:Array,required:!0},data:{type:Array,required:!0}},setup(e,{expose:t}){J.register(Ye,Oe,Te,Ee,Ge,je);const s=e;let o=null;Pe(s,()=>{n()});const n=()=>{o.data.labels=s.labels,s.data.forEach((r,m)=>{o.data.datasets[m].data=r}),o.update()},a=()=>{o=new J(document.querySelector(`#${te}`),{type:"line",data:{labels:[],datasets:[{data:[],borderColor:"#00D8FB",backgroundColor:"#FFFFFF"},{data:[],borderColor:"#FFE9F2",backgroundColor:"#FFFFFF"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},animation:{},scales:{x:{ticks:{autoSkip:!0,maxTicksLimit:10}},y:{beginAtZero:!0}}}})};return ae(()=>{a()}),t({updateChart:n}),(r,m)=>(i(),u("canvas",{id:te}))}},kt={class:"flex items-center"},Lt=["src","title"],F={__name:"HistorySub",props:{icon:{required:!0},iconTitle:{},own:{required:!0},diff:{}},setup(e){const t=o=>{if(o>0)return"text-success";if(o<0)return"text-danger"},s=o=>`(${o>0?"+":""}${ee(o)})`;return(o,n)=>(i(),u("div",kt,[l("img",{class:"w-8 mr-2",src:e.icon,title:e.iconTitle},null,8,Lt),l("span",null,B(_(ee)(e.own)),1),e.diff&&e.diff!==0?(i(),u("span",{key:0,class:H(["ml-1 text-xs",t(e.diff)])},B(s(e.diff)),3)):P("",!0)]))}},ie="/gacha-tracker-online/assets/pyroxene-gBHgCIjf.webp",de="/gacha-tracker-online/assets/recruitment-ticket-NiO_EDI9.webp",Ct="/gacha-tracker-online/assets/icon-pulls-PmRtrI9p.png",Bt="/gacha-tracker-online/assets/icon-3-stars-unit-G8a83jjO.png",Dt={class:"grid grid-cols-2 gap-3"},At={class:"col-span-1 border-r"},Mt={class:"col-span-1"},Ft={__name:"History",props:{item:{required:!0}},setup(e){const t=$(w()),s=o=>o===t.value.format("YYYY-MM-DD")?["text-primary","font-bold"]:[];return(o,n)=>(i(),u("div",Dt,[l("div",{class:H(["col-span-2",s(e.item.date)])},B(e.item.date),3),l("div",At,[p(F,{icon:_(ie),"icon-title":"Pyroxene",own:e.item.pyroxene,diff:e.item.diff_pyroxene},null,8,["icon","own","diff"]),p(F,{icon:_(de),"icon-title":"Pull Ticket",own:e.item.free_pull,diff:e.item.diff_free_pull},null,8,["icon","own","diff"])]),l("div",Mt,[p(F,{icon:_(Ct),"icon-title":"Total Pull",own:_(X)(e.item)},null,8,["icon","own"]),p(F,{icon:_(Bt),"icon-title":"Spark",own:_(ot)(_(X)(e.item))},null,8,["icon","own"])])]))}},It={class:"flow-root"},Rt={class:"divide-y divide-gray-200 dark:divide-gray-700"},Pt={key:0,class:"py-3 sm:py-4"},St={__name:"History",props:{items:{required:!0}},setup(e){return(t,s)=>(i(),u("div",It,[l("ul",Rt,[!e.items||e.items.length<=0?(i(),u("li",Pt,"No record found.")):(i(!0),u(E,{key:1},Se(e.items,o=>(i(),u("li",{key:o.date,class:"py-3 sm:py-4"},[p(Ft,{item:o},null,8,["item"])]))),128))])]))}},Ht="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/chevron-left?f=classic&s=solid%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20d='M9.4%20233.4c-12.5%2012.5-12.5%2032.8%200%2045.3l192%20192c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L77.3%20256%20246.6%2086.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200l-192%20192z'/%3e%3c/svg%3e",Nt="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/chevron-right?f=classic&s=solid%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20d='M310.6%20233.4c12.5%2012.5%2012.5%2032.8%200%2045.3l-192%20192c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3L242.7%20256%2073.4%2086.6c-12.5-12.5-12.5-32.8%200-45.3s32.8-12.5%2045.3%200l192%20192z'/%3e%3c/svg%3e",Vt="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/calendar?f=classic&s=regular&pc=%252300d8fb%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%2300d8fb'%20d='M152%2024c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V64H64C28.7%2064%200%2092.7%200%20128v16%2048V448c0%2035.3%2028.7%2064%2064%2064H384c35.3%200%2064-28.7%2064-64V192%20144%20128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V64H152V24zM48%20192H400V448c0%208.8-7.2%2016-16%2016H64c-8.8%200-16-7.2-16-16V192z'/%3e%3c/svg%3e",Ut="/gacha-tracker-online/assets/arona-head-5uMSPBb2.png",Yt={class:"grid grid-cols-7 gap-4"},Ot={class:"col-span-full md:col-span-5"},Tt={class:"flex justify-center text-center"},Et=["src"],Gt={class:"mx-4 text-xl md:text-3xl font-bold"},jt=["src"],qt={class:"flex justify-center"},zt={class:"w-full h-72"},Wt=l("div",{class:"mb-3 text-md md:text-xl font-bold"},"Add",-1),Kt={class:"grid grid-cols-4 gap-4"},Jt={class:"col-span-full"},Qt={class:"col-span-2"},Zt={class:"col-span-2"},Xt={class:"col-span-full md:col-start-2 md:col-end-4 mt-4"},es=["src"],ts=l("div",{class:"text-md0 md:text-xl font-bold"},"History",-1),ss=400,os={__name:"Index",setup(e){const t=R(),s=$(w()),o=$([]),n=$([]),a=w().year(),r=w().month()+1,m=w().date(),f=$({date:"",pyroxene:0,free_pull:0}),y=He({day:`${a}-${r}-${m}`,pyroxene:void 0,free_pull:void 0}),A=$({labels:[],data:[]}),ue=()=>{t.dispatch("ba-currency-own/setGetLatestRecordListen",d=>{if(d){const c=Object.keys(d);c.length>0&&(f.value={date:c[0],...d[c[0]]})}})},fe=(d,c)=>{t.dispatch("ba-currency-own/setGetLatestBeforeMonthListener",{year:d,month:c,callback:h=>{const L=[];let v=[],M=0;o.value&&(v=Object.keys(o.value),v.reverse(),M=v.length);for(let x=0;x<M;x++){const g=o.value[v[x]];let b=o.value[v[x+1]];const k={date:v[x],pyroxene:g.pyroxene,free_pull:g.free_pull,diff_pyroxene:null,diff_free_pull:null};!b&&h&&(b=h[Object.keys(h)[0]]),b&&(k.diff_pyroxene=g.pyroxene-b.pyroxene,k.diff_free_pull=g.free_pull-b.free_pull),L.push(k)}n.value=L}})},G=(d,c)=>{t.dispatch("ba-currency-own/setGetRecordsListen",{year:d,month:c,callback:h=>{o.value=h,q(),fe(d,c)}})},j=d=>{s.value=d,G(d.year(),d.month()+1)},pe=()=>{const d=s.value.add(-1,"month").startOf("month");j(d)},me=()=>{const d=s.value.add(1,"month").startOf("month");j(d)},_e=async()=>{const d=Q(y.day),c={pyroxene:y.pyroxene,free_pull:y.free_pull};isNaN(c.pyroxene)&&(c.pyroxene=f.value?f.value.pyroxene:0),isNaN(c.free_pull)&&(c.free_pull=f.value?f.value.free_pull:0),t.dispatch("ba-currency-own/save",{key:d.format("YYYY-MM-DD"),data:c}),y.pyroxene=void 0,y.free_pull=void 0,q()},q=()=>{const d=[],c=[],h=[],L=f.value?Q(f.value.date):!1,v=s.value.startOf("month"),M=s.value.endOf("month"),x=v.diff(M,"day")*-1+1;for(let g=0;g<x;g++){const b=v.add(g,"day"),k=b.format("YYYY-MM-DD"),N=o.value?o.value[k]:!1;let z=null,W=null;if(N&&(z=Z(N.pyroxene+N.free_pull*120)),L){const K=L.diff(b,"day");K<=0&&(W=Z(K*-1*ss+f.value.pyroxene+f.value.free_pull*120))}d.push(k),c.push(z),h.push(W)}A.value.labels=d,A.value.data=[c,h]};return ae(()=>{ue(),G(a,r)}),(d,c)=>(i(),u("div",Yt,[l("div",Ot,[l("div",Tt,[l("img",{src:_(Ht),class:"cursor-pointer select-none",onClick:pe},null,8,Et),l("span",Gt,B(s.value.format("YYYY-MM")),1),l("img",{src:_(Nt),class:"cursor-pointer select-none",onClick:me},null,8,jt)]),l("div",qt,[l("div",zt,[p($t,{labels:A.value.labels,data:A.value.data},null,8,["labels","data"])])])]),p(T,{class:"col-span-full md:col-span-2"},{body:C(()=>[Wt,l("div",Kt,[l("div",Jt,[p(I,{modelValue:y.day,"onUpdate:modelValue":c[0]||(c[0]=h=>y.day=h),icon:_(Vt),"icon-title":"Date",type:"date"},null,8,["modelValue","icon"])]),l("div",Qt,[p(I,{modelValue:y.pyroxene,"onUpdate:modelValue":c[1]||(c[1]=h=>y.pyroxene=h),modelModifiers:{number:!0},placeholder:f.value.pyroxene,icon:_(ie),"icon-title":"Pyroxene",type:"number"},null,8,["modelValue","placeholder","icon"])]),l("div",Zt,[p(I,{modelValue:y.free_pull,"onUpdate:modelValue":c[2]||(c[2]=h=>y.free_pull=h),modelModifiers:{number:!0},placeholder:f.value.free_pull,icon:_(de),"icon-title":"Free Pull",type:"number"},null,8,["modelValue","placeholder","icon"])]),l("div",Xt,[p(ce,{"on-click":_e,primary:""},{default:C(()=>[O(" Save ")]),_:1})])]),l("img",{src:_(Ut),class:"h-32 mt-4 md:mt-0 md:absolute bottom-0 inset-x-0 m-auto"},null,8,es)]),_:1}),p(T,{class:"h-72 col-span-full overflow-auto md:col-span-3"},{body:C(()=>[ts,p(St,{items:n.value},null,8,["items"])]),_:1})]))}},ns=Ne({history:Ve(),routes:[{path:st(""),component:xt,children:[{path:"",component:os}]}]});Ue(tt).use(ct).use(ns).mount("#app");
