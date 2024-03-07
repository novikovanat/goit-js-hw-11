//  functions for HTTP requests.
 import renderGallary from "./render-functions";
export default function fetchPhotos(search){
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
  .then((photosObject) => console.log(renderGallary(photosObject)))
  .catch((error) => console.log(error));

}
