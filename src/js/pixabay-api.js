import {renderGallery, addStartMarkup} from "./render-functions";
import iziToast from "izitoast";
import errorSvg from '../img/error.svg';

//  functions for HTTP requests.

export default function fetchPhotos(search){
const searchParams = new URLSearchParams({
    key :"42747257-6cb1908b03b224c2fc7af7612",
    q: `"${search}"`,
    image_type: "photo",
    orientation:"horizontal",
    safesearch:true
  });


fetch(`https://pixabay.com/api/?${searchParams}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    let photosObject;
    return photosObject = response.json()
  })
  .then((photosObject) => { 
    const {total, hits} = photosObject
  
    if (total>0){
      renderGallery(hits)
    } else
    {
      addStartMarkup();
      (iziToast.error({
        timeout:'5000',
        messageColor:'#ffffff',
        titleColor:"#fff",
        titleSize:"16",
        titleLineHeight:'24',
        message: "Sorry, there are no images matching your search query. Please try again!",
        iconUrl: errorSvg,
        iconColor:'#fff',
        backgroundColor:'#EF4040',
        progressBarColor:"#B51B1B",
        position:'topRight',
        messageSize:'16',
        messageLineHeight:'24',
        maxWidth:'432px'
    }));
      }

    
})
  .catch((error) => console.log(error));

}

