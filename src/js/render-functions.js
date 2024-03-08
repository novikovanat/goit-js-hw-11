// function for render pictures
import SimpleLightbox from "simplelightbox"
export { renderGallery, addStartMarkup };
const gallery = document.querySelector('.gallery');

function renderGallery(images){

const imageGallary = images
.map(
    image =>
    { 
        const  {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = image;
   
   return (`  <li class="gallery-item">
   <a href="${largeImageURL}">
     <img 
         class="gallery-image"
         src="${webformatURL}" alt ="${tags}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${likes}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Views</p>
       <p class="info-value">${views}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Comments</p>
       <p class="info-value">${comments}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Downloads</p>
       <p class="info-value">${downloads}</p>
     </li>
   </ul>
   </li>
`)
})
  .join(``);


gallery.innerHTML= imageGallary;

new SimpleLightbox('.gallery a');
}

function addStartMarkup(){

    const startMarkup = `<li><span class="loader-css"></span></li>`;
    gallery.innerHTML= startMarkup;
}