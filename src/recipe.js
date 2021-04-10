class Recipe {
    
     constructor(recipe, recipeAttributes) {
        
        this.id = recipe.id;
        this.title = recipeAttributes.title;
        this.ingredients = recipeAttributes.ingredients;
        this.instructions = recipeAttributes.instructions;
        Recipe.all.push(this)
        
    }

     renderRecipeCard() {
         return ` 
         <div data-id=${this.id} class="col-md-4">

          <div class="card mb-4 shadow-sm">
            <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.ingredients}</p>
              <h6 class="card-text">${this.instructions}</h6> 
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  
                <button data-id=${this.id} type="button" onClick="window.location.reload();" class="delete-button">Delete</button>
              </div>
               <small class="text-muted"></small>
              </div>
            </div>
          </div>
           
        </div>
      `;
   }
}



  Recipe.all = [];



  //  return `
      //   <div data-id=${this.id}>
      //   <br> <h2>Title: ${this.title}</h2> </br>
      //   <br> <p> Ingredients: ${this.ingredients}</p> </br>
      //   <br> <h3> Instructions: ${this.instructions}</h3> </br>
      //   <button data-id=${this.id} type="button" class="delete-button">Delete</button>
      //   </div>
      //   `;
