// import 'pixabay-api'from'./js/pixabay-api';

const form = document.querySelector('form')

form.addEventListener("input", inputHandler)
form.addEventListener("submit", submitHandler)


let searchPrase;
function inputHandler(){
    searchPrase = event.currentTarget.search.value;  
    console.log("here is serarch in input: ", searchPrase)  
}

function submitHandler(){
    event.preventDefault()
    console.log("here is serarch in submit: ", searchPrase)
    form.reset()
}

