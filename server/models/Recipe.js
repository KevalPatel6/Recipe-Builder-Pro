const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const recipeSchema = new Schema({

    title: {
        type: String,
        
        unique: true,
        trim: true,
      },
    description: {
        type: String,
        
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
        
      },
    servings: {
        type: String,
      
        trim: true,
      },
    totalTime: {
        type: String,
       
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