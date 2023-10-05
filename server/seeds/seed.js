const db = require('../config/connection');
const { Ingredient, User, Recipe } = require('../models');

const ingredient = require('./ingredientData.json');
const recipe = require('./userData.json');
const user = require('./recipeData.json');

db.once('open', async () => {

  // bulk create each model
  const ingredients = await Ingredient.insertMany(ingredientData);
  const recipes = await Recipe.insertMany(recipeData);
  const users = await Professor.insertMany(professorData);

  for (newClass of classes) {
    // randomly add each class to a school
    const tempSchool = schools[Math.floor(Math.random() * schools.length)];
    tempSchool.classes.push(newClass._id);
    await tempSchool.save();

    // randomly add a professor to each class
    const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
    newClass.professor = tempProfessor._id;
    await newClass.save();

    // reference class on professor model, too
    tempProfessor.classes.push(newClass._id);
    await tempProfessor.save();
  }

  console.log('all done!');
  process.exit(0);
});

