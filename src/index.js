document.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:3000/api/v1/items")
    .then(response => response.json())
    .then(json => console.log(json));
    //console.log("The DOM is loaded")
});