const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedRecipes: [Recipe]
    createdRecipes: [Recipe]
  }

  type Ingredient {
    _id: ID
    name: String
    group: String
  }

  type Group {
    _id: ID
    name: String
  }

  input InputIngredient {
    name: String!
    group: String!
  }

  input InputRecipe {
    name: String!
    group: String!
  }

  type Recipe {
    _id: ID
    title: String
    description: String
    ingredients: [Ingredient]
    instructions: String
    servings: Int
    totalTime: Int
    imageUrl: String
    group: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    getProfile(username: String!): User
    me: User
    getIngredient(ingredientId: ID!): Ingredient
    getIngredients( name: String, group: String): [Ingredient]
    getRecipe(recipeId: ID!): Recipe

    getAllRecipes: [Recipe]
    getRecipeGroup(group: String!): [Recipe]
    getIngredientGroup(group: String!): [Ingredient]

    getSavedRecipes: User
    getCreatedRecipes(recipeId: ID!): User
    
    
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth 

    addIngredient( ingredientData: InputIngredient): Ingredient
    saveRecipes(recipeId: ID!): User

    removeRecipe(recipeId: ID!): Recipe
    removeIngredient(ingredientId: ID!): Ingredient
    
    addRecipe( 
        title: String,
        description: String,
        ingredients: [ID],
        instructions: String,
        servings: Int,
        totalTime: Int,
        group: String): Recipe
  
    updateRecipe( 
        title: String,
        description: String,
        ingredients: [ID],
        instructions: [String],
        servings: Int,
        totalTime: Int
        group: String): Recipe

    }
`;

module.exports = typeDefs;
