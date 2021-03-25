/* index.js */

const recipesURL = "http://localhost:3000/api/v1/recipes"



document.addEventListener('DOMContentLoaded', () => {
    getRecipes()

  const createRecipeForm = document.querySelector("#create-recipe-form")
  
  createRecipeForm.addEventListener("submit", (e) => {
   createFormHandler(e)
  })

})
  
  

  function getRecipes() {
    fetch(recipesURL)
      .then(res => res.json())
      .then(item => {
       //JSON data is a bit nested due serializer
        item.data.forEach(i => {
          // double check how your data is nested in the console so you can successfully access the attributes of each individual object
          //debugger
          const itemMarkup = 
          `
          <div data-id=${i.attributes.item_id}>
          <br> <h2>Title: ${i.attributes.title}</h2> </br>
          <br> <p> Ingredients: ${i.attributes.ingredients}</p> </br>
          <br> <h3> Instructions: ${i.attributes.instructions}</h3> </br>
          <br> <p> Benefits: ${i.attributes.item.benefits} </p> </br>
          </div>
          `;
          document.getElementById('root').innerHTML += itemMarkup
       
      })
      })
  }

  //  const itemNameInput = document.querySelector("#input-name").value
    //  const benefitsInput = document.querySelector("#input-benefits").value 

  function createFormHandler(e) {
    e.preventDefault() 
    
    const itemId = parseInt(document.querySelector("#item-dropdown").value)
    const titleInput = document.querySelector("#input-title").value
    const ingredientsInput = document.querySelector("#input-ingredients").value
    const instructionsInput = document.querySelector("#input-recipe").value
    
    postFetch(itemId, titleInput, ingredientsInput, instructionsInput)
   
  }

  function postFetch(item_id, title, ingredients, instructions) {
    //console.log(name, benefits, title, ingredients, instrcutions)
    //inputData varabble is outside of my fetch 
    let inputData = {item_id, title, ingredients, instructions}
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
      .then(recipe => { console.log(recipe);
        //render JSON response
        const itemMarkup = 
        `
        <div data-id=${recipe.id}>
        <br> <h2>Title: ${recipe.title}</h2> </br>
        <br> <p> Ingredients: ${recipe.ingredients}</p> </br>
        <br> <h3> Instructions: ${recipe.instructions}</h3> </br>
        
        </div>

        `;
        document.getElementById('root').innerHTML += itemMarkup
       })
     

  }
 
//     function render(recipe) {
//       const itemMarkup = 
//       `
//       <div data-id=${i.id}>
//       <br> <h2>Title: ${i.attributes.title}</h2> </br>
//       <br> <p> Ingredients: ${i.attributes.ingredients}</p> </br>
//       <br> <h3> Instructions: ${i.attributes.instructions}</h3> </br>
//       </div>
//       `;
//       document.getElementById('root').innerHTML += itemMarkup
   
//  }
