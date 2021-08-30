import{a as t,_ as e}from"./index.17ded396.js";import{d as l,o as a,k as o,l as s,v as c,x as r,p as n,j as i,e as p,z as d,n as h,y as f,u as m,h as u,F as v,m as g,s as x,w as M,f as w,t as b,q as _,D as I,r as k}from"./vendor.66bec1f7.js";import{_ as S}from"./AParagraph.3f247cd9.js";var y=l({name:"ASpinner"});const z={class:"flex justify-center items-center"},A=[s("div",{class:"\r\n        loader\r\n        ease-linear\r\n        rounded-full\r\n        border-8 border-t-8 border-gray-200\r\n      "},null,-1)];y.render=function(t,e,l,s,c,r){return a(),o("div",z,A)};var C=l({name:"MCarouselItem",components:{ASpinner:y},props:{carouselItem:{type:Object,required:!0}},emits:{onImgElMounted:t=>t},setup(t,{emit:e}){const l=c();let a=c(!1);return r((()=>{l.value&&e("onImgElMounted",l.value)})),{imageRef:l,isImgLoaded:a}}});n("data-v-6342c726");const L=["data-src"];function F(t){const e=new IntersectionObserver((function(t,e){t.forEach((t=>{t.isIntersecting&&(!function(t){if(!t.dataset.src)throw new Error("You should provide element's data src");t.src=t.dataset.src}(t.target),e.unobserve(t.target))}))}),t||{root:null,rootMargin:"30px",threshold:0});return f((()=>{e.disconnect()})),{observeLazyImg:function(t){e.observe(t)}}}i(),C.render=function(t,e,l,c,r,n){const i=y;return a(),o("div",{class:h(["m-carousel-item",{"m-carousel-item--loading":!t.isImgLoaded}])},[t.isImgLoaded?d("",!0):(a(),p(i,{key:0,class:"m-carousel-item__spinner"})),s("img",{ref:"imageRef",class:"m-carousel-item__img","data-src":t.carouselItem.imgSrc,onLoad:e[0]||(e[0]=e=>t.isImgLoaded=!0)},null,40,L)],2)},C.__scopeId="data-v-6342c726";var B=l({name:"OCarousel",components:{MCarouselItem:C,AButton:t},props:{items:{type:Array,required:!0}},setup(t){const e=c(1),{observeLazyImg:l}=F(),{t:a}=m(),o=u((()=>1===e.value)),s=u((()=>e.value===t.items.length));return{isCurrSlideFirst:o,isCurrSlideLast:s,isSlideActive:function(t){return t===e.value},showPrevSlide:function(){o.value||(e.value-=1)},showNextSlide:function(){s.value||(e.value+=1)},observeLazyImg:l,t:a}}});n("data-v-61f494b9");const j={class:"o-carousel__wrapper"},E={key:0,class:"o-carousel__buttons"};i(),B.render=function(e,l,c,r,n,i){const f=C,m=t;return a(),o("section",{class:h(["o-carousel",{"o-carousel--multi":e.items.length>1}])},[s("div",j,[(a(!0),o(v,null,g(e.items,(t=>(a(),p(f,{key:t.id,"carousel-item":t,class:h(["o-carousel__item",{"o-carousel__item--active":e.isSlideActive(t.id)}]),onOnImgElMounted:e.observeLazyImg},null,8,["carousel-item","class","onOnImgElMounted"])))),128))]),e.items.length>1?(a(),o("div",E,[x(m,{disabled:e.isCurrSlideFirst,class:"o-carousel__button o-carousel__button--left",onClick:e.showPrevSlide},{default:M((()=>[w(b(e.t("button.back")),1)])),_:1},8,["disabled","onClick"]),x(m,{disabled:e.isCurrSlideLast,class:"o-carousel__button o-carousel__button--right",onClick:e.showNextSlide},{default:M((()=>[w(b(e.t("button.next")),1)])),_:1},8,["disabled","onClick"])])):d("",!0)],2)},B.__scopeId="data-v-61f494b9";var H=l({name:"AExternalLink",props:{href:{type:String,required:!0},text:{type:String,required:!0},alt:{type:String,required:!1,default:()=>""}}});n("data-v-2382bb8f");const V=["href","alt"];i(),H.render=function(t,e,l,s,c,r){return a(),o("a",{class:"a-external-link",target:"_blank",rel:"noopener noreferrer",href:t.href,alt:t.alt},b(t.text)+" -> ",9,V)},H.__scopeId="data-v-2382bb8f";var P=l({name:"MChip",components:{AParagraph:S},props:{text:{required:!0,type:String}},computed:{hasPrefix(){return!!this.$slots.prefix}}});n("data-v-9ec369dc");const T={class:"m-chip"},O={key:0,class:"m-chip__prefix"};i(),P.render=function(t,e,l,s,c,r){const n=S;return a(),o("div",T,[t.hasPrefix?(a(),o("div",O,[_(t.$slots,"prefix",{},void 0,!0)])):d("",!0),x(n,{text:t.text,class:"m-chip__text"},null,8,["text"])])},P.__scopeId="data-v-9ec369dc";const G={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256"},R=[s("path",{fill:"#007ACC",d:"M0 128v128h256V0H0z"},null,-1),s("path",{d:"M56.611 128.85l-.081 10.483h33.32v94.68H113.42v-94.68h33.32v-10.28c0-5.69-.122-10.444-.284-10.566c-.122-.162-20.399-.244-44.983-.203l-44.739.122l-.122 10.443z",fill:"#FFF"},null,-1),s("path",{d:"M206.567 118.108c6.501 1.626 11.459 4.51 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.08.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.52c-3.291-4.794-6.745-6.867-12.028-7.232c-7.76-.529-12.759 3.535-12.718 10.32c0 1.992.284 3.17 1.097 4.796c1.707 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.25 6.664 21.415 2.966 31.208c-4.063 10.646-14.14 17.88-28.323 20.277c-4.388.772-14.79.65-19.504-.203c-10.28-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.122-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.13 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.26c2.357-2.153 3.332-4.388 3.332-7.68c0-2.966-.366-4.266-1.91-6.5c-1.99-2.845-6.054-5.243-17.595-10.24c-13.206-5.69-18.895-9.225-24.096-14.833c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.22-12.678-.447-16.335c2.723-12.76 12.353-21.658 26.25-24.3c4.51-.853 14.994-.528 19.424.57z",fill:"#FFF"},null,-1)];var D={name:"logos-typescript-icon",render:function(t,e){return a(),o("svg",G,R)}};const q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256"},Y=[s("path",{d:"M0 0h256v256H0V0z",fill:"#F7DF1E"},null,-1),s("path",{d:"M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996",fill:"#000"},null,-1),s("path",{d:"M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574",fill:"#000"},null,-1)];var J={name:"logos-javascript",render:function(t,e){return a(),o("svg",q,Y)}};const N={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 314"},$=[I('<defs><linearGradient x1="68.188%" y1="17.487%" x2="27.823%" y2="89.755%" id="IconifyId-17b969aefe3-c52d2a-0"><stop stop-color="#41873F" offset="0%"></stop><stop stop-color="#418B3D" offset="32.88%"></stop><stop stop-color="#419637" offset="63.52%"></stop><stop stop-color="#3FA92D" offset="93.19%"></stop><stop stop-color="#3FAE2A" offset="100%"></stop></linearGradient><linearGradient x1="43.277%" y1="55.169%" x2="159.245%" y2="-18.306%" id="IconifyId-17b969aefe3-c52d2a-1"><stop stop-color="#41873F" offset="13.76%"></stop><stop stop-color="#54A044" offset="40.32%"></stop><stop stop-color="#66B848" offset="71.36%"></stop><stop stop-color="#6CC04A" offset="90.81%"></stop></linearGradient><linearGradient x1="-4413.77%" y1="13.43%" x2="5327.93%" y2="13.43%" id="IconifyId-17b969aefe3-c52d2a-2"><stop stop-color="#6CC04A" offset="9.192%"></stop><stop stop-color="#66B848" offset="28.64%"></stop><stop stop-color="#54A044" offset="59.68%"></stop><stop stop-color="#41873F" offset="86.24%"></stop></linearGradient><linearGradient x1="-4.389%" y1="49.997%" x2="101.499%" y2="49.997%" id="IconifyId-17b969aefe3-c52d2a-3"><stop stop-color="#6CC04A" offset="9.192%"></stop><stop stop-color="#66B848" offset="28.64%"></stop><stop stop-color="#54A044" offset="59.68%"></stop><stop stop-color="#41873F" offset="86.24%"></stop></linearGradient><linearGradient x1="-9713.77%" y1="36.21%" x2="27.93%" y2="36.21%" id="IconifyId-17b969aefe3-c52d2a-4"><stop stop-color="#6CC04A" offset="9.192%"></stop><stop stop-color="#66B848" offset="28.64%"></stop><stop stop-color="#54A044" offset="59.68%"></stop><stop stop-color="#41873F" offset="86.24%"></stop></linearGradient><linearGradient x1="-103.861%" y1="50.275%" x2="100.797%" y2="50.275%" id="IconifyId-17b969aefe3-c52d2a-5"><stop stop-color="#6CC04A" offset="9.192%"></stop><stop stop-color="#66B848" offset="28.64%"></stop><stop stop-color="#54A044" offset="59.68%"></stop><stop stop-color="#41873F" offset="86.24%"></stop></linearGradient><linearGradient x1="130.613%" y1="-211.069%" x2="4.393%" y2="201.605%" id="IconifyId-17b969aefe3-c52d2a-6"><stop stop-color="#41873F" offset="0%"></stop><stop stop-color="#418B3D" offset="32.88%"></stop><stop stop-color="#419637" offset="63.52%"></stop><stop stop-color="#3FA92D" offset="93.19%"></stop><stop stop-color="#3FAE2A" offset="100%"></stop></linearGradient><path id="IconifyId-17b969aefe3-c52d2a-7" d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85z"></path></defs><g fill="none"><path d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18c0 .348-.116.694-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95z" fill="#539E43"></path><path d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81c1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643c.925.578 2.08.578 3.005 0c.925-.463 1.503-1.503 1.503-2.543l-.116-75.817z" fill="#333"></path><path d="M345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849c-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417z" fill="#333"></path><path d="M508.648 124.244c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.894 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.086v56.516c0 2.08 1.155 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.045 1.04 5.779 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543c0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.924-.577-1.502-1.502-1.502-2.542v-17.683c0-1.04.578-2.08 1.502-2.543l15.372-8.784a2.821 2.821 0 0 1 3.005 0l15.371 8.784c.925.578 1.503 1.502 1.503 2.543v13.869c0 1.04.578 2.08 1.502 2.542c.925.578 2.08.578 3.005 0l29.125-16.99z" fill="#333"></path><path d="M456.293 121.586a1.05 1.05 0 0 1 1.155 0l9.362 5.432c.347.23.578.577.578 1.04v10.864c0 .462-.231.809-.578 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.155 0l-9.362-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.231-.81.578-1.04l9.362-5.432z" fill="#539E43"></path><g transform="translate(134.068 70.501)"><mask id="IconifyId-17b969aefe3-c52d2a-8" fill="#fff"><use xlink:href="#IconifyId-17b969aefe3-c52d2a-7"></use></mask><use fill="url(#IconifyId-17b969aefe3-c52d2a-0)" xlink:href="#IconifyId-17b969aefe3-c52d2a-7"></use><g mask="url(#IconifyId-17b969aefe3-c52d2a-8)"><path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693z"></path><path d="M56.632 125.053c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z"></path><path d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z" fill="url(#IconifyId-17b969aefe3-c52d2a-1)"></path></g><g mask="url(#IconifyId-17b969aefe3-c52d2a-8)"><path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271z"></path><path d="M3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116z"></path><path fill="url(#IconifyId-17b969aefe3-c52d2a-2)" fill-rule="evenodd" d="M50.391.809l-.693.347h.924l-.231-.347z" transform="translate(0 -9.246)"></path><path d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2z" fill="url(#IconifyId-17b969aefe3-c52d2a-3)" fill-rule="evenodd" transform="translate(0 -9.246)"></path><path fill="url(#IconifyId-17b969aefe3-c52d2a-4)" fill-rule="evenodd" d="M111.3 104.712l-.347-.578v.809l.346-.231z" transform="translate(0 -9.246)"></path><path d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z" fill="url(#IconifyId-17b969aefe3-c52d2a-5)" fill-rule="evenodd" transform="translate(0 -9.246)"></path><path d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z" fill="url(#IconifyId-17b969aefe3-c52d2a-6)" fill-rule="evenodd" transform="translate(0 -9.246)"></path></g></g></g>',2)];var W={name:"logos-nodejs",render:function(t,e){return a(),o("svg",N,$)}};const K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 220"},Q=[I('<path d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075c-15.067 7.856-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988" fill="#912626"></path><path d="M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072c-15.066 7.857-23.436 7.78-35.338 2.09c-11.903-5.686-87.214-36.113-100.78-42.594c-13.566-6.485-13.85-10.948-.524-16.166c13.326-5.22 88.224-34.605 104.055-40.284c15.828-5.677 21.319-5.884 34.789-.948c13.471 4.934 83.819 32.935 97.13 37.81c13.316 4.881 13.827 8.9.166 16.02" fill="#C6302B"></path><path d="M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078c-15.067 7.853-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987" fill="#912626"></path><path d="M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075c-15.066 7.854-23.436 7.777-35.338 2.087c-11.903-5.686-87.214-36.112-100.78-42.594c-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949c13.471 4.934 83.819 32.933 97.13 37.81c13.316 4.88 13.827 8.9.166 16.02" fill="#C6302B"></path><path d="M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078c-15.067 7.854-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986" fill="#912626"></path><path d="M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074c-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497C-3.217 55.015-3.5 50.55 9.825 45.331C23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948c13.471 4.935 83.819 32.934 97.13 37.811c13.316 4.876 13.827 8.897.166 16.017" fill="#C6302B"></path><path d="M159.283 32.757l-22.01 2.285l-4.927 11.856l-7.958-13.23l-25.415-2.284l18.964-6.839l-5.69-10.498l17.755 6.944l16.738-5.48l-4.524 10.855l17.067 6.391" fill="#FFF"></path><path d="M131.032 90.275L89.955 73.238l58.86-9.035l-17.783 26.072" fill="#FFF"></path><path d="M74.082 39.347c17.375 0 31.46 5.46 31.46 12.194c0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194" fill="#FFF"></path><path d="M185.295 35.998l34.836 13.766l-34.806 13.753l-.03-27.52" fill="#621B1C"></path><path d="M146.755 51.243l38.54-15.245l.03 27.519l-3.779 1.478l-34.791-13.752" fill="#9A2928"></path>',11)];var U={name:"logos-redis",render:function(t,e){return a(),o("svg",K,Q)}};const X={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 221"},Z=[s("path",{d:"M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36z",fill:"#41B883"},null,-1),s("path",{d:"M0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0z",fill:"#41B883"},null,-1),s("path",{d:"M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56z",fill:"#35495E"},null,-1)];var tt={name:"logos-vue",render:function(t,e){return a(),o("svg",X,Z)}};const et={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 361"},lt=[I('<path d="M255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11z" fill="#E44D26"></path><path d="M128 337.95l84.417-23.403l19.86-222.49H128V337.95z" fill="#F16529"></path><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704z" fill="#EBEBEB"></path><path d="M90.018 236.542h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471z" fill="#EBEBEB"></path><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0z" fill="#000"></path><path d="M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001z" fill="#000"></path><path d="M130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0z" fill="#000"></path><path d="M193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" fill="#000"></path><path d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937z" fill="#FFF"></path><path d="M127.89 155.854v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86z" fill="#FFF"></path>',10)];var at={name:"logos-html-5",render:function(t,e){return a(),o("svg",et,lt)}};const ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 361"},st=[I('<path d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962z" fill="#264DE4"></path><path d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z" fill="#2965F1"></path><path d="M53.669 188.636l2.862 31.937H128v-31.937H53.669z" fill="#EBEBEB"></path><path d="M47.917 123.995l2.903 31.937H128v-31.937H47.917z" fill="#EBEBEB"></path><path d="M128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58z" fill="#EBEBEB"></path><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0z" fill="#000"></path><path d="M106.901 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0z" fill="#000"></path><path d="M153.319 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0z" fill="#000"></path><path d="M202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576z" fill="#FFF"></path>',9)];var ct={name:"logos-css-3",render:function(t,e){return a(),o("svg",ot,st)}};const rt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228"},nt=[s("path",{d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345c.522 2.107.986 4.173 1.386 6.193zM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94zM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18zM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3zM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86z",fill:"#00D8FF"},null,-1)];var it=l({name:"OTechStack",components:{MChip:P,IconTypeScript:D,IconJavaScript:J,IconNodeJS:W,IconRedis:U,IconVue:tt,IconHTML:at,IconCSS:ct,IconReact:{name:"logos-react",render:function(t,e){return a(),o("svg",rt,nt)}}},props:{techStack:{type:Array,required:!0}},methods:{getIconName:t=>"Icon"+t}});n("data-v-657fa905");const pt={class:"o-techStack"};i(),it.render=function(t,e,l,s,c,r){const n=P;return a(),o("section",pt,[(a(!0),o(v,null,g(t.techStack,((e,l)=>(a(),p(n,{key:l,text:e.name},{prefix:M((()=>[(a(),p(k(t.getIconName(e.name))))])),_:2},1032,["text"])))),128))])},it.__scopeId="data-v-657fa905";var dt=l({name:"TProjects",components:{AHeading:e,AParagraph:S,AExternalLink:H,OTechStack:it,OCarousel:B},props:{projects:{required:!0,type:Array}},setup(){const{t:t}=m();return{t:t}}});n("data-v-e83884ac");const ht={class:"projects"},ft={class:"container"},mt={class:"container"},ut={class:"project__specs"},vt={class:"project__heading"},gt={class:"project__description"},xt={class:"container"};i(),dt.render=function(t,l,c,r,n,i){const h=e,f=B,m=H,u=it,M=S;return a(),o("section",ht,[s("div",ft,[x(h,{text:t.t("button.projects"),tag:"h2"},null,8,["text"])]),(a(!0),o(v,null,g(t.projects,(t=>(a(),o("div",{key:t.name,class:"project"},[x(f,{items:t.images},null,8,["items"]),s("div",mt,[s("div",ut,[s("div",vt,[x(h,{text:t.name,tag:"h4",class:"!p-0 m-0 mr-2"},null,8,["text"]),t.github?(a(),p(m,{key:0,text:"GitHub",href:t.github,class:"text-sm mr-2"},null,8,["href"])):d("",!0),t.demo?(a(),p(m,{key:1,text:"Try Live",href:t.demo,class:"text-sm"},null,8,["href"])):d("",!0)]),x(u,{"tech-stack":t.techStack,class:"project__techstack"},null,8,["tech-stack"])])]),s("div",gt,[s("div",xt,[x(M,{text:t.description.value,class:"mt-2"},null,8,["text"])])])])))),128))])},dt.__scopeId="data-v-e83884ac";var Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/Portfolio/assets/1school-universal.dcbd823e.png"}),wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/Portfolio/assets/depools-main-dark.2609739a.png"}),bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/Portfolio/assets/depools-main-light.21ef0b34.png"}),_t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/Portfolio/assets/depools-stakes-dark.cd88c64d.png"}),It=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/Portfolio/assets/depools-stakes-light.20d99cf8.png"}),kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/Portfolio/assets/notesApp-universal.2cc5384b.png"}),St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/Portfolio/assets/timetable-calls-universal.a6d35fe3.png"}),yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/Portfolio/assets/timetable-main-universal.92f07032.png"});var zt=l({name:"PProjects",components:{TProjects:dt},setup(){const{t:t}=m(),{depools:e,depoolsStakes:l,notesApp:a,schoolApp:o,timetableCalls:s,timetableMain:c}=function(){const t={"/src/assets/1school-universal.png":Mt,"/src/assets/depools-main-dark.png":wt,"/src/assets/depools-main-light.png":bt,"/src/assets/depools-stakes-dark.png":_t,"/src/assets/depools-stakes-light.png":It,"/src/assets/notesApp-universal.png":kt,"/src/assets/timetable-calls-universal.png":St,"/src/assets/timetable-main-universal.png":yt};function e(l,a){switch(a){case"png":return t[`/src/assets/${l}.${a}`].default;default:return e(l,"png")}}return{depools:{light:{png:e("depools-main-light","png")},dark:{png:e("depools-main-dark","png")}},depoolsStakes:{light:{png:e("depools-stakes-light","png")},dark:{png:e("depools-stakes-dark","png")}},notesApp:{universal:e("notesApp-universal","png")},schoolApp:{universal:e("1school-universal","png")},timetableMain:{universal:e("timetable-main-universal","png")},timetableCalls:{universal:e("timetable-calls-universal","png")},logo:{universal:{svg:""}}}}();return{projects:[{images:[{id:1,imgSrc:e.light.png},{id:2,imgSrc:e.dark.png},{id:3,imgSrc:l.light.png},{id:4,imgSrc:l.dark.png}],name:"DePools Staking",description:u((()=>t("projects.depools.description"))),demo:"https://depools.koshelek.ru/",techStack:[{name:"JavaScript"},{name:"Vue"},{name:"NodeJS"},{name:"Redis"},{name:"CSS"}]},{images:[{id:1,imgSrc:c.universal},{id:2,imgSrc:s.universal}],name:"TimetableApp",description:u((()=>t("projects.timetable.description"))),demo:"https://example.com",techStack:[{name:"JavaScript"},{name:"React"},{name:"CSS"},{name:"Express"}]},{images:[{id:1,imgSrc:a.universal}],name:"NotesApp",description:u((()=>t("projects.notesApp.description"))),demo:"https://example.com",techStack:[{name:"JavaScript"},{name:"CSS"}]},{images:[{id:1,imgSrc:o.universal}],name:"1SchoolApp",description:u((()=>t("projects.1school.description"))),demo:"https://1school-wptheme.000webhostapp.com/",github:"https://github.com/AndreyCJ/1school_WpTheme",techStack:[{name:"JavaScript"},{name:"CSS"}]}]}}});zt.render=function(t,e,l,o,s,c){const r=dt;return a(),p(r,{projects:t.projects},null,8,["projects"])};export{zt as default};