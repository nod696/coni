import{s as m}from"./api.9cf5806b.js";import{d as f,i as y,r as d,j as v,o as e,c as t,l as _,b as o,F as a,e as r,t as c,u as g,_ as h}from"./index.142300f4.js";const D="/coni/assets/law.93610cbf.gif",k={key:0,class:"loader",src:D,alt:""},b={key:1,class:"info__wrapper"},x={class:"judge"},B={class:"time"},C={class:"category"},j={class:"category__info"},E={class:"number"},F={key:2},w=f({__name:"court-compo",setup(N){const i=y(),u=d(null);let n=d(!1);function p(){n.value=!0,m(i.params.routing,i.params.url).then(l=>{if(l.time)return u.value=l,n.value=!0,u})}return v(p),(l,V)=>(e(),t(a,null,[u.value?_("",!0):(e(),t("img",k)),u.value?(e(),t("div",b,[o("table",null,[o("tr",x,[(e(!0),t(a,null,r(u.value.judge,s=>(e(),t("td",{key:s},c(s),1))),128))]),o("tr",B,[(e(!0),t(a,null,r(u.value.time,s=>(e(),t("td",{key:s},c(s),1))),128))]),o("tr",C,[(e(!0),t(a,null,r(u.value.category,s=>(e(),t("td",{class:"category__cell",key:s},[o("p",j,c(s),1)]))),128))]),o("tr",E,[(e(!0),t(a,null,r(u.value.number,s=>(e(),t("td",{key:s},c(s),1))),128))])])])):_("",!0),g(n)?_("",!0):(e(),t("p",F,"\u041D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0434\u0435\u043B \u043D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E"))],64))}});const M=h(w,[["__scopeId","data-v-c3f685c0"]]);export{M as default};
