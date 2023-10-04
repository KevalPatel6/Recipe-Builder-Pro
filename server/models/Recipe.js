const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const recipeSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    description: {
        type: String,
        required: true,
        trim: true,
      },
    ingredients: [
        {
          type: Schema.Types.ObjectId,
          ref: "Ingredient"
        }
    ],
    instructions: {
        type: String,
        required: true,
        trim: true,
      },
    servings: {
        type: String,
        required: true,
        trim: true,
      },
    totalTime: {
        type: String,
        required: true,
        trim: true,
      },
    imageUrl: {
        type: String,
      
        
      },
    group: {
        type: String,
       
        
      },
})

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;