/* index.js */

const itemsURL = "http://localhost:3000/api/v1/recipes"



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
           console.log(i)
          const itemMarkup = 
          // <br> <h1>Kitchen Item: ${i.attributes.item_name} </h1> </br>
          // </br> <p>Benefits: ${i.attributes.benefits} </p> </br>
          `
          <br> <h2>Title: ${i.attributes.title}</h2> </br>
          <br> <p> Ingredients: ${i.attributes.ingredients}</p> </br>
          <br> <h3> Instructions: ${i.attributes.instructions}</h3> </br>
          
          `;
          document.getElementById('root').innerHTML += itemMarkup
       
      })
      })
  }

  //  const itemNameInput = document.querySelector("#input-name").value
    //  const benefitsInput = document.querySelector("#input-benefits").value 

  function createFormHandler(e) {
    e.preventDefault() 
    
    const TitleInput = document.querySelector("#input-title").value
    const ingredientsInput = document.querySelector("#input-ingredients").value
    const instructionsInput = document.querySelector("#input-recipe").value
    postFetch(TitleInput, ingredientsInput, instructionsInput)
   
  }

  function postFetch(title, ingredients, instructions) {
    //console.log(name, benefits, title, ingredients, instrcutions)
    let inputData = {title, ingredients, instructions}
    //debugger
    
     fetch("http://localhost:3000/api/v1/recipes", {
      // POST request
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(inputData)
      }) 
      .then(response => response.json())
      .then(item => { console.log(item);
    //  .then(item => {
    //    console.log(item)
       })
    //  .catch((error) => {
    //    console.error("error", error) 
    //  }
    //    //let newUse = new Use(item)
      
     // )
     

  }

