import{S as d,i as c}from"./assets/vendor-39d661cd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector(".gallery");function h(s){const r=s.map(o=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:a,views:m,comments:p,downloads:g}=o;return`  <li class="gallery-item">
   <a href="${e}">
     <img 
         class="gallery-image"
         src="${i}" alt ="${t}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${a}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Views</p>
       <p class="info-value">${m}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Comments</p>
       <p class="info-value">${p}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Downloads</p>
       <p class="info-value">${g}</p>
     </li>
   </ul>
   </li>
`}).join("");f.innerHTML=r,new d(".gallery a")}function y(){const s='<li><span class="loader-css"></span></li>';f.innerHTML=s}const u="/goit-js-hw-11/assets/error-40fa32d5.svg";function L(s){const r=new URLSearchParams({key:"42747257-6cb1908b03b224c2fc7af7612",q:`"${s}"`,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${r}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{const{total:i,hits:e}=o;i>0?h(e):y()(c.error({timeout:"5000",messageColor:"#ffffff",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"}))}).catch(o=>console.log(o))}const l=document.querySelector("form"),v=document.querySelector(".loader-css");l.addEventListener("input",b);l.addEventListener("submit",S);let n;function b(){n=event.currentTarget.search.value}function S(){event.preventDefault(),n.trim()===""?(c.error({timeout:"5000",messageColor:"#ffffff",title:"Error",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:"Empty input",iconUrl:u,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"}),console.log("Empty input")):(L(n),v.classList.add("loader")),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
