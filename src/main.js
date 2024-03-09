import fetchPhotos from'./js/pixabay-api';
import errorSvg from './img/error.svg'
import iziToast from 'izitoast';


const form = document.querySelector('form')
const loader = document.querySelector('.loader-css')



form.addEventListener("submit", submitHandler)


function submitHandler(event){
    event.preventDefault()
    let searchPrase = event.currentTarget.elements.search.value;
    if (searchPrase.trim() === '')
    {(iziToast.error({
        timeout:'5000',
        messageColor:'#ffffff',
        title:'Error',
        titleColor:"#fff",
        titleSize:"16",
        titleLineHeight:'24',
        message: "Empty input",
        iconUrl: errorSvg,
        iconColor:'#fff',
        backgroundColor:'#EF4040',
        progressBarColor:"#B51B1B",
        position:'topRight',
        messageSize:'16',
        messageLineHeight:'24',
        maxWidth:'432px'
    }));
        console.log("Empty input")}
    else {
    
        fetchPhotos(searchPrase)
        loader.classList.add("loader")
    }
    
    form.reset()
}

