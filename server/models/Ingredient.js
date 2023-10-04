const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const ingredientSchema = new Schema({
    name: {
        type: String,
        
    
        
      },
    group: {
        type: String,
        
       
      },
    

})

const Ingredient = model('Ingredient', ingredientSchema);

module.exports = Ingredient;