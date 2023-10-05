const db = require('../config/connection');
const { User, Recipe, Ingredient } = require('../models');
const cleanDB = require('./cleanDB');

const recipeSeeds = require('./recipeData.json');
const userSeeds = require('./userData.json');
const ingredientsSeeds = require('./ingredientData.json');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('Ingredient', 'ingredients');
    await cleanDB('Recipe', 'recipes');

    await User.insertMany(userSeeds);
    await Ingredient.insertMany(ingredientsSeeds);

    // need to go through each recipe to link the correct previously created ingredients to the recipe
    // we can't use ID's because they change each time the seed is run
    for (let i = 0; i < recipeSeeds.length; i++) {
      const recipe = recipeSeeds[i];

      const newRecipe = new Recipe({
        title: recipe.title,
        description: recipe.imageUrl,
        instructions: recipe.instructions,
        servings: recipe.servings,
        totalTime: recipe.totalTime,
        imageUrl: recipe.imageUrl,
        group: recipe.group,
        ingredients: []
      });

      for (let ing = 0; ing < recipe.ingredients.length; ing++) {

        // go through each ingredient in the recipe
        const recipeIngredient = recipe.ingredients[ing];

        // see if there's already an existing ingredient that is saved 
        const existingIngredient = await Ingredient.find({ name: recipeIngredient.name });

        if (existingIngredient?.length) {
          // if there's already an existing ingredient, use the one that's already created
          newRecipe.ingredients.push(existingIngredient[0]);
        } else {

          // otherwise, let's create a new one and add that to the recipe
          const newIngredient = new Ingredient({
            name: recipeIngredient.name,
            group: recipeIngredient.group
          });

          // new ingredient we just saved
          var savedIngredient = await newIngredient.save();

          // adding the newly saved ingredient to the recipe
          newRecipe.ingredients.push(savedIngredient);
        }
      }

      await newRecipe.save();
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});