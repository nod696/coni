import{_,a as i,o as a,c as o,b as t,F as r,e as m,f as p,w as l,t as d,p as u,h as g}from"./index.142300f4.js";const h=[{name:"\u0421\u043F\u043E\u0440\u044B \u043F\u043E \u043F\u0440\u0430\u0432\u0430\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0435\u0439",routing:"consumer",img:"./consumer.png"},{name:"\u0420\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u0435 \u0431\u0440\u0430\u043A\u0430",routing:"divorce",img:"./divorce.png"},{name:"\u0412\u043E\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0443\u0449\u0435\u0440\u0431\u0430",routing:"damage",img:"./damage.png"},{name:"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043D\u044B\u0435 \u0441\u043F\u043E\u0440\u044B",routing:"contract",img:"../assets/contract.png"},{name:"\u0425\u043E\u0434\u0430\u0442\u0430\u0439\u0441\u0442\u0432\u0430",routing:"solicitation",img:"./solicitation.png"}];const f={name:"SampleCompo",setup(){return{samples:h}}},v=e=>(u("data-v-f2d4936d"),e=e(),g(),e),k={class:"samples__wrapper"},S=v(()=>t("h2",{class:"samples__title"},"\u041E\u0431\u0440\u0430\u0437\u0446\u044B \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432",-1)),$={class:"samples__list"},x=["src"],C={class:"sample__name"};function w(e,y,I,n,B,F){const c=i("router-link");return a(),o("div",k,[S,t("ul",$,[(a(!0),o(r,null,m(n.samples,s=>(a(),o("li",{class:"samples__item",key:s},[p(c,{class:"samples__link",to:{name:"Sample",params:{routing:`${s.routing}`,name:`${s.name}`}}},{default:l(()=>[t("img",{src:`${s.img}`,alt:"",class:"samples__icon"},null,8,x),t("h3",C,d(s.name),1)]),_:2},1032,["to"])]))),128))])])}const V=_(f,[["render",w],["__scopeId","data-v-f2d4936d"]]);export{V as default};
