import fetchPhotos from'./js/pixabay-api';


const form = document.querySelector('form')
const loader = document.querySelector('.loader-css')
// const gallery = document.querySelector('.gallery');

form.addEventListener("input", inputHandler)
form.addEventListener("submit", submitHandler)



let searchPrase;
function inputHandler(){
    searchPrase = event.currentTarget.search.value;  
    // console.log(" in input: ", searchPrase)  
}

function submitHandler(){
    event.preventDefault()

    if (searchPrase.trim() === '')
    {
        console.log("Empty input")}
    else {
    
        fetchPhotos(searchPrase)
        loader.classList.add("loader")
    }
    
    form.reset()
}

