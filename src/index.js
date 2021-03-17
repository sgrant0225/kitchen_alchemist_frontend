
const itemsURL = "http://localhost:3000/api/v1/items"



document.addEventListener('DOMContentLoaded', () => {
    getItems()

  const createItemForm = document.querySelector("#create-item-form")
  
  createItemForm.addEventListener("submit", (e) => {
   createFormHandler(e)
  })

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

  function createFormHandler(e) {
    e.preventDefault() 
    console.log(e)
  }