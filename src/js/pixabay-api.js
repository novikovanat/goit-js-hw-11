//  functions for HTTP requests.
 import {renderGallery, addStartMarkup} from "./render-functions";
export default function fetchPhotos(search,loader){
const searchParams = new URLSearchParams({
    key :"42747257-6cb1908b03b224c2fc7af7612",
    q: `"${search}"`,
    image_type: "photo",
    orientation:"horizontal",
    safesearch:true
  });


console.log(`"https://pixabay.com/api/?${searchParams}"`)
fetch(`https://pixabay.com/api/?${searchParams}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    let photosObject;
    return photosObject = response.json()
  })
  .then((photosObject) => { console.log(photosObject)
    const {total, hits} = photosObject
  
    if (total>0){
      renderGallery(hits)
    } else
    {
      addStartMarkup()
      console.log("Sorry, there are no images matching your search query. Please try again!")
      }

    
})
  .catch((error) => console.log(error));

}
