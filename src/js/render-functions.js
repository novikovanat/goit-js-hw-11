// function for render pictures
import simpleLightbox from "simplelightbox"

export default function renderGallery(obj)
{
console.log('renderGallary: ', obj)
}


const gallery = document.querySelector('.gallery');

const imageGallary = images
  .map(
    image =>
      `<li class="gallery-item">
<a class="gallery-link" href="${image.original}">
    <img
    class="gallery-image"
    src="${image.preview}"
    alt="${image.description}"
    />
</a>
</li>`
  )
  .join(``);

gallery.insertAdjacentHTML('afterbegin', imageGallary);
import SimpleLightbox from 'simplelightbox';

new SimpleLightbox('.gallery a', {
  overlay: true,
  overlayOpacity: 0.8,
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
  captionClass: 'captions',
});