import{i as e,c as t,a as o,b as n,d as r,e as a,w as s,r as i,o as l,f as c,t as u,g as d,u as m,h as p,p as h,j as v,k as g,l as f,F as b,m as _,n as w,q as y,s as k,v as x,x as M,T as S,y as A}from"./vendor.68750d25.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const z=Symbol("designTokens");function j(){const t=function(t,o){const n=e(t,o);if(!n)throw new Error(`Could not resolve ${t.description}`);return n}(z);return{cssVars:t,setCssVariable:function(e,o){t[e]=o,document.documentElement.style.setProperty(e,o)}}}var T={"--color-primary":"#285577","--color-back":"#f5f5f5","--color-fore":"#444","--color-blue":"rgba(59, 130, 246)","--color-pure-black":"#000","--color-dark":"#0A0A0A","--color-white-warm":"#FAFAF9","--color-blue-gray":"rgba(75, 85, 99)","--color-blue-gray-light":"rgba(209, 213, 219)","--color-light-yellow":"#f4eb42","--container-padding":"0 1.5rem"};var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:e=>{var t;e.provide(z,T),t=T,Object.entries(t).forEach((([e,t])=>{document.documentElement.style.setProperty(e,t)}))}}),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{projects:e=>{const{normalize:t}=e;return t(["Projects"])},home:e=>{const{normalize:t}=e;return t(["Home"])},about:e=>{const{normalize:t}=e;return t(["About"])},next:e=>{const{normalize:t}=e;return t(["Next"])},back:e=>{const{normalize:t}=e;return t(["Previous"])}},"not-found":e=>{const{normalize:t}=e;return t(["Not Found"])},"my-full-name":e=>{const{normalize:t}=e;return t(["Andrey Chebotar"])},"my-position":e=>{const{normalize:t}=e;return t(["Frontend Developer"])},"about-me":e=>{const{normalize:t}=e;return t(["The main technology stack I use: JavaScript (Typescript), Vue.js (v2, v3), Vuex. Strong knowledge of JavaScript, Vue.js, component architecture, atomic design, BEM methodology, HTML / CSS responsive layout.  n Ability to work with the Git version control system (conventional commits). Experience in developing backend and REST API for web applications (NodeJS, Express, NestJS, MongoDB, MySQL, Redis)."])},projects:{timetable:{description:e=>{const{normalize:t}=e;return t(["Progressive web-application for viewing the schedule of classes, ringing, substitutions. Developed with React, Node, Express, MongoDB."])}},depools:{description:e=>{const{normalize:t}=e;return t(["Service for tracking all depools, with the ability to view your transactions in them, managing stakes."])}},"1school":{description:e=>{const{normalize:t}=e;return t(["Wordpress site with support for custom slider, posts, site search, widgets."])}},notesApp:{description:e=>{const{normalize:t}=e;return t(["SPA note-taking application developed using AJAX asynchronous rendering techniques in pure JavaScript, PHP, MySQL."])}}}}}),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{button:{projects:e=>{const{normalize:t}=e;return t(["Проекты"])},home:e=>{const{normalize:t}=e;return t(["Главная"])},about:e=>{const{normalize:t}=e;return t(["О себе"])},next:e=>{const{normalize:t}=e;return t(["Далее"])},back:e=>{const{normalize:t}=e;return t(["Назад"])}},"not-found":e=>{const{normalize:t}=e;return t(["Не Найдено"])},"my-full-name":e=>{const{normalize:t}=e;return t(["Андрей Чеботарь"])},"my-position":e=>{const{normalize:t}=e;return t(["Frontend Разработчик"])},"about-me":e=>{const{normalize:t}=e;return t(["Основной стек технологий, который я использую: JavaScript (Typescript), Vue.js (v2, v3), Vuex. \n Уверенное знание JavaScript, Vue.js, компонентной архитектуры, атомарного дизайна, методологии БЭМ, HTML/CSS адаптивной верстки. \n Умение работать с системой контроля версий Git (conventional commits). Есть опыт разработки бекенда и REST API для web-приложений (NodeJS, Express, NestJS, MongoDB, MySQL, Redis)."])},projects:{timetable:{description:e=>{const{normalize:t}=e;return t(["Прогрессивное web-приложение для просмотра расписания занятий, звонов, замен. Разработанное с использованием React, Node, Express, MongoDB."])}},depools:{description:e=>{const{normalize:t}=e;return t(['Сервис для отслеживания всех депулов, с возможностью просмотра своих транзаккций в них, управлением "стейками".'])}},"1school":{description:e=>{const{normalize:t}=e;return t(["Wordpress сайт с поддержкой настраиваемого слайдера, постов, поиска по сайту, виджетов."])}},notesApp:{description:e=>{const{normalize:t}=e;return t(["SPA приложение для заметок, разработанное с применением техники асинхронного рендеринга AJAX на чистом JavaScript, PHP, MySQL."])}}}}});const P=Object.fromEntries(Object.entries({"../../locales/en.yaml":C,"../../locales/ru.yaml":O}).map((([e,t])=>{const o=e.endsWith(".yaml");return[e.slice(14,o?-5:-4),t.default]}))),L=navigator.language?navigator.language.slice(0,2):"en";var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:e=>{const o=t({legacy:!1,locale:L,fallbackLocale:"en",messages:P});e.use(o)}});const N={},I=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/Portfolio/${e}`)in N)return;N[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},B=[{path:"/",name:"home",component:()=>I((()=>import("./PHome.56013138.js")),["assets/PHome.56013138.js","assets/PHome.731c3980.css","assets/vendor.68750d25.js"])},{path:"/projects",name:"projects",component:()=>I((()=>import("./PProjects.15347c99.js")),["assets/PProjects.15347c99.js","assets/PProjects.ec99066b.css","assets/vendor.68750d25.js","assets/AParagraph.79c66337.js","assets/AParagraph.44784b0a.css"])},{path:"/about",name:"about",component:()=>I((()=>import("./PAboutMe.c08db192.js")),["assets/PAboutMe.c08db192.js","assets/AParagraph.79c66337.js","assets/AParagraph.44784b0a.css","assets/vendor.68750d25.js"])},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>I((()=>import("./PNotFound.30f4259e.js")),["assets/PNotFound.30f4259e.js","assets/vendor.68750d25.js"])}];var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:e=>{const t=o({history:n("/Portfolio/"),routes:B});e.use(t)}}),J=r({name:"AHeading",props:{tag:{type:String,required:!0},text:{type:String,required:!0}}});J.render=function(e,t,o,n,r,d){return l(),a(i(e.tag),{class:"a-heading"},{default:s((()=>[c(u(e.text),1)])),_:1})},J.__scopeId="data-v-576e9e89";var V=r({name:"MLogo",components:{AHeading:J}});V.render=function(e,t,o,n,r,s){const i=J;return l(),a(i,{tag:"h4",text:"A.ch",class:"m-logo"})},V.__scopeId="data-v-8569cd1c";var F=r({name:"ALink",props:{to:{type:Object,required:!0},text:{type:String,required:!0},alt:{type:String,required:!0}}});F.render=function(e,t,o,n,r,i){const m=d("router-link");return l(),a(m,{class:"a-link",to:e.to,alt:e.alt,"active-class":"a-link--active"},{default:s((()=>[c(u(e.text),1)])),_:1},8,["to","alt"])},F.__scopeId="data-v-75bea993";var H=r({name:"ONavbar",components:{ALink:F},props:{vertical:{type:Boolean,default:()=>!1}},setup(){const{t:e}=m();return{pages:[{text:p((()=>e("button.home"))),to:{name:"home"}},{text:p((()=>e("button.projects"))),to:{name:"projects"}},{text:p((()=>e("button.about"))),to:{name:"about"}}]}}});h("data-v-e9bacdc0");const q={class:"navbar"};v(),H.render=function(e,t,o,n,r,s){const i=F;return l(),g("div",q,[f("div",{class:w(["nav-links text-sm",{"nav-links--vertical":e.vertical}])},[(l(!0),g(b,null,_(e.pages,(e=>(l(),a(i,{key:e.to.name,text:e.text.value,to:e.to,alt:e.text.value},null,8,["text","to","alt"])))),128))],2)])},H.__scopeId="data-v-e9bacdc0";const W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Y=[f("g",{fill:"currentColor"},[f("path",{d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"}),f("path",{d:"M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l1.29-1.3l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z"})],-1)];var $={name:"eva-close-circle-outline",render:function(e,t){return l(),g("svg",W,Y)}},Q=r({name:"AButton",props:{disabled:{type:Boolean,default:()=>!1}},emits:{click:null},setup:(e,{emit:t})=>({onClick:()=>{e.disabled||t("click")}})});Q.render=function(e,t,o,n,r,a){return l(),g("button",{class:w(["a-button a-button--base",{"a-button--disabled":e.disabled}]),onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t))},[y(e.$slots,"default",{},void 0,!0)],2)},Q.__scopeId="data-v-7cbd1fa4";var G=r({name:"ONavDrawer",emits:{closeMenu:()=>Boolean},setup(e,{emit:t}){function o(){t("closeMenu")}return{closeMenu:o,closeWithDelay:function(){setTimeout(o,0)}}}});h("data-v-0533465c");const X={class:"nav-drawer"},K={class:"nav-drawer__header"};v(),G.render=function(e,t,o,n,r,a){const i=$,c=Q;return l(),g("section",X,[f("div",K,[k(c,{class:"!bg-red-600 !py-2",onClick:e.closeMenu},{default:s((()=>[k(i)])),_:1},8,["onClick"])]),f("div",{class:"nav-drawer__items",onClick:t[0]||(t[0]=(...t)=>e.closeWithDelay&&e.closeWithDelay(...t))},[y(e.$slots,"nav-items",{},void 0,!0)])])},G.__scopeId="data-v-0533465c";const U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Z=[f("g",{fill:"none"},[f("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)];var ee={name:"heroicons-outline-sun",render:function(e,t){return l(),g("svg",U,Z)}};const te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},oe=[f("g",{fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},[f("path",{d:"M7.95 11.95h32"}),f("path",{d:"M7.95 23.95h32"}),f("path",{d:"M7.95 35.95h32"})],-1)];var ne={name:"icon-park-outline-hamburger-button",render:function(e,t){return l(),g("svg",te,oe)}},re=r({name:"OHeader",components:{MLogo:V,AButton:Q,ONavbar:H,ONavDrawer:G},emits:{switchTheme:()=>Boolean},setup(e,{emit:t}){const{availableLocales:o,locale:n}=m(),r=x("");let a=x(!1);return{locale:n,headerClass:r,isNavDrawerOpen:a,toggleNavDrawer:function(){a.value=!a.value},switchTheme:function(){t("switchTheme")},switchLocale:function(){const e=o;n.value=e[(e.indexOf(n.value)+1)%e.length]}}}});h("data-v-715094a6");const ae={class:"flex items-center"};v(),re.render=function(e,t,o,n,r,i){const d=V,m=H,p=G,h=Q,v=ee,b=ne;return l(),g("header",{class:w(["header header--adaptive-glass",e.headerClass])},[k(d),k(m,{class:"<md:hidden"}),e.isNavDrawerOpen?(l(),a(p,{key:0,onCloseMenu:e.toggleNavDrawer},{"nav-items":s((()=>[k(m,{vertical:""})])),_:1},8,["onCloseMenu"])):M("",!0),f("div",ae,[k(h,{class:"header__btn header__btn--lang",onClick:e.switchLocale},{default:s((()=>[c(u(e.locale),1)])),_:1},8,["onClick"]),k(h,{class:"header__btn header__btn--theme",onClick:e.switchTheme},{default:s((()=>[k(v)])),_:1},8,["onClick"]),k(h,{class:"header__btn--menu",onClick:e.toggleNavDrawer},{default:s((()=>[k(b)])),_:1},8,["onClick"])])],2)},re.__scopeId="data-v-715094a6";var se=r({name:"OFooter",setup(){const{t:e}=m();return{t:e,myEmail:"andrey.chebotar.me@gmail.com",currentYear:(new Date).getFullYear()}}});se.render=function(e,t,o,n,r,a){return l(),g("footer",null,[f("span",null,u(e.t("my-full-name"))+" © "+u(e.currentYear),1),f("span",null,u(e.myEmail),1)])},se.__scopeId="data-v-85073888";var ie=r({name:"App",components:{OHeader:re,OFooter:se},setup(){const e=x(!0);return{isDarkTheme:e,switchTheme:function(){e.value=!e.value}}}});const le={class:"\r\n        page-wrapper\r\n        transition-opacity transition-shadow transition-transform\r\n        duration-100\r\n      "},ce={class:"content"};ie.render=function(e,t,o,n,r,c){const u=re,m=d("router-view"),p=se;return l(),g("main",{class:w(["main",{dark:e.isDarkTheme}])},[f("div",le,[k(u,{onSwitchTheme:e.switchTheme},null,8,["onSwitchTheme"]),f("div",ce,[k(m,null,{default:s((({Component:e})=>[k(S,{name:"fade",mode:"out-in"},{default:s((()=>[(l(),a(i(e)))])),_:2},1024)])),_:1})]),k(p)])],2)};const ue=A(ie);Object.values({"./modules/designTokens.ts":E,"./modules/i18n.ts":D,"./modules/router.ts":R}).forEach((e=>e.install(ue))),ue.mount("#app");export{J as _,Q as a,j as u};
