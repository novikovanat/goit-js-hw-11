import {renderGallery, addStartMarkup} from "./js/render-functions";
import fetchPhotos from "./js/pixabay-api";
import errorSvg from './img/error.svg'
import iziToast from 'izitoast';


const form = document.querySelector('form')
const loader = document.querySelector('.loader-css')



form.addEventListener("submit", submitHandler)


function submitHandler(event){
    event.preventDefault()
    let searchPrase = event.currentTarget.elements.search.value;
    if (searchPrase.trim() === '')
    {
        const note = "Empty input"
        invokeNotification(note)
        }
    else {
    
        fetchPhotos(searchPrase)
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
                } 
                else{
                    const note = "Sorry, there are no images matching your search query. Please try again!"
                    addStartMarkup();
                    invokeNotification(note)
                }
            
            })
            .catch((error) => console.log(error));
        loader.classList.add("loader")
        }  
        
    form.reset()
}



function invokeNotification(message){
    (iziToast.error({
        timeout:'5000',
        messageColor:'#ffffff',
        titleColor:"#fff",
        titleSize:"16",
        titleLineHeight:'24',
        message: message,
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

 