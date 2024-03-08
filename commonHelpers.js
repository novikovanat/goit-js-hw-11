import{S as p}from"./assets/vendor-ef88c69a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery");function d(r){const s=r.map(a=>{const{webformatURL:o,largeImageURL:e,tags:t,likes:n,views:u,comments:f,downloads:m}=a;return`  <li class="gallery-item">
   <a href="${e}">
     <img 
         class="gallery-image"
         src="${o}" alt ="${t}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${n}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Views</p>
       <p class="info-value">${u}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Comments</p>
       <p class="info-value">${f}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Downloads</p>
       <p class="info-value">${m}</p>
     </li>
   </ul>
   </li>
`}).join("");c.innerHTML=s,new p(".gallery a")}function g(){const r='<li><span class="loader-css"></span></li>';c.innerHTML=r}function y(r,s){const a=new URLSearchParams({key:"42747257-6cb1908b03b224c2fc7af7612",q:`"${r}"`,image_type:"photo",orientation:"horizontal",safesearch:!0});console.log(`"https://pixabay.com/api/?${a}"`),fetch(`https://pixabay.com/api/?${a}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{console.log(o);const{total:e,hits:t}=o;e>0?d(t):(g(),console.log("Sorry, there are no images matching your search query. Please try again!"))}).catch(o=>console.log(o))}const l=document.querySelector("form"),h=document.querySelector(".loader-css");l.addEventListener("input",L);l.addEventListener("submit",v);let i;function L(){i=event.currentTarget.search.value}function v(){event.preventDefault(),i.trim()===""?console.log("Empty input"):(y(i),h.classList.add("loader")),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
