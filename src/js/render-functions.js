// function for render pictures
import simpleLightbox from "simplelightbox"

export default function renderGallery(images){

//     const  {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = object
// console.log("render f: ", webformatURL)
// }

const gallery = document.querySelector('.gallery');
// const  {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = images
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


gallery.insertAdjacentHTML('afterbegin', imageGallary);
}

// new SimpleLightbox('.gallery a', {
//   overlay: true,
//   overlayOpacity: 0.8,
//   captionDelay: 250,
//   captions: true,
//   captionsData: 'alt',
//   captionClass: 'captions',
// });



// const gallery = document.querySelector('.gallery');

// const imageGallary = images
//   .map(
//     image =>
//       `<li class="gallery-item">
// <a class="gallery-link" href="${image.original}">
//     <img
//     class="gallery-image"
//     src="${image.preview}"
//     alt="${image.description}"
//     />
// </a>
// </li>`
//   )
//   .join(``);

// gallery.insertAdjacentHTML('afterbegin', imageGallary);


// new SimpleLightbox('.gallery a', {
//   overlay: true,
//   overlayOpacity: 0.8,
//   captionDelay: 250,
//   captions: true,
//   captionsData: 'alt',
//   captionClass: 'captions',
// });