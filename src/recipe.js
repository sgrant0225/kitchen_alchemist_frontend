class Recipe {
    
     constructor(recipe, recipeAttributes) {
        
        //let {id, name, benefits, title, ingredients, instructions} = recipe
        this.id = recipe.id;
        this.title = recipeAttributes.title;
        this.ingredients = recipeAttributes.ingredients;
        this.instructions = recipeAttributes.instructions;
        Recipe.all.push(this)
    }

     renderRecipeCard() {
         
       return `
        <div data-id=${this.id}>
        <br> <h2>Title: ${this.title}</h2> </br>
        <br> <p> Ingredients: ${this.ingredients}</p> </br>
        <br> <h3> Instructions: ${this.instructions}</h3> </br>
        <button data-id=${this.id} type="button" class="delete-button">Delete</button>
        </div>
        `;
        }
}


  Recipe.all = [];


