
const itemsURL = "http://localhost:3000/api/v1/items"

// document.addEventListener("DOMContentLoaded", function(){
//     fetch("http://localhost:3000/api/v1/items")
//     .then(response => response.json())
//     .then(data => renderItems(data));

//     const renderItems = function (data) {console.log(data)}
     
//     // data.forEach(item => {
//     //     console.log(item)
//     // })
// });


document.addEventListener('DOMContentLoaded', () => {
    getItems()
  })
  
  
  function getItems() {
    fetch(itemsURL)
      .then(res => res.json())
      .then(item => {
       //JSON data is a bit nested due serializer
        item.data.forEach(i => {
          // double check how your data is nested in the console so you can successfully access the attributes of each individual object
          const itemMarkup = 
          `
          <h2>${i.attributes.name}</h2>
          <p>${i.attributes.benefits}</p>
          <button data-id=${i.id}>Recipes</button>
          `;
          document.getElementById('root').innerHTML += itemMarkup
          //debugger
        })
      })
  }