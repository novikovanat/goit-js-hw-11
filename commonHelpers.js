import{s as u,i as m}from"./assets/vendor-0662ac31.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p=document.querySelector(".gallery");function g(o){return o.map(function({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:a,comments:c,downloads:f}){return`  <li class="gallery-item">
   <a href="${i}">
     <img 
         class="gallery-image"
         src="${t}" alt ="${e}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${r}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Views</p>
       <p class="info-value">${a}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Comments</p>
       <p class="info-value">${c}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Downloads</p>
       <p class="info-value">${f}</p>
     </li>
   </ul>
   </li>
`}).join("")}function d(){const o='<li><span class="loader-css"></span></li>';p.innerHTML=o}const y="/goit-js-hw-11/assets/error-40fa32d5.svg";function h(o){const s=new URLSearchParams({key:"42747257-6cb1908b03b224c2fc7af7612",q:`"${o}"`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`)}const l=document.querySelector("form"),L=document.querySelector(".loader-css"),b=document.querySelector(".gallery"),v=new u(".gallery a");l.addEventListener("submit",S);function S(o){o.preventDefault();let s=o.currentTarget.elements.search.value;s.trim()===""?n("Empty input"):(h(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(({total:t,hits:i})=>{if(t>0){let e=g(i);b.innerHTML=e,v.refresh()}else{const e="Sorry, there are no images matching your search query. Please try again!";d(),n(e)}}).catch(t=>console.log(t)),L.classList.add("loader")),l.reset()}function n(o){m.error({timeout:"5000",messageColor:"#ffffff",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:o,iconUrl:y,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"})}
//# sourceMappingURL=commonHelpers.js.map
