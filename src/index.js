/* index.js */

const recipesURL = "http://localhost:3000/api/v1/recipes"



document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is loaded")
    getRecipes()
    
  const createRecipeForm = document.querySelector("#create-recipe-form")
  createRecipeForm.addEventListener("submit", (e) => {
   createFormHandler(e)

  
  //document.querySelectorAll('.delete-btn')).forEach(deleteButton => deleteButtton.addEventListener('click', deleteRecipe))
  })

})
  
  

  function getRecipes() {
    fetch(recipesURL)
      .then(res => res.json())
      .then(item => {
       //JSON data is a bit nested due serializer
        item.data.forEach(recipe => {
          
          //create a new instance of the Recipe class for every recipe in the database
          let newRecipe = new Recipe(recipe, recipe.attributes)

          document.getElementById('root').innerHTML += newRecipe.renderRecipeCard();

          const deleteEvent = document.querySelectorAll(".delete-button")
          .forEach((button) => button.addEventListener("click", deleteRecipe))

         
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
    
     fetch("http://localhost:3000/api/v1/recipes", {
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
        const recipeData = recipe.data
        let newRecipe = new Recipe(recipeData, recipeData.attributes)
          
        document.getElementById('root').innerHTML += newRecipe.renderRecipeCard();
        
       })
     

  }
  
   function deleteRecipe(e) {
     console.log("In the delete event")
    const id = e.target.dataset.id;
    fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
        method: "DELETE",   
    })
    .then(res => res.json())
    .then( data => {
        e.target.parentElement.remove()
    })
   }
    
   