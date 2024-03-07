import fetchPhotos from'./js/pixabay-api';


const form = document.querySelector('form')

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
        
        // console.log("in submit var: ", searchVar)
        fetchPhotos(searchPrase)
    }
    console.log("in submit: ", searchPrase)
    form.reset()
}

