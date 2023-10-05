const db = require('../config/connection');
const { User, Recipe, Ingredient } = require('../models');
const cleanDB = require('./cleanDB');

const recipeSeeds = require('./recipeData.json');
const userSeeds = require('./userData.json');
const ingredientsSeeds = require('./ingredientData.json');

db.once('open', async () => {
  try {
    // bulk create each model
    await cleanDB('User', 'users');
    const users = await User.insertMany(userSeeds);

    await cleanDB('Ingredient', 'ingredients');
    const ingredients = await Ingredient.insertMany(ingredientsSeeds);

    await cleanDB('Recipe', 'recipes');
    const recipes = await Recipe.insertMany(recipeSeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});


// for (newClass of classes) {
//   // randomly add each class to a school
//   const tempSchool = schools[Math.floor(Math.random() * schools.length)];
//   tempSchool.classes.push(newClass._id);
//   await tempSchool.save();

//   // randomly add a professor to each class
//   const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
//   newClass.professor = tempProfessor._id;
//   await newClass.save();

//   // reference class on professor model, too
//   tempProfessor.classes.push(newClass._id);
//   await tempProfessor.save();
// }