import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_INGREDIENT = gql`
mutation AddIngredient($ingredientData: InputIngredient) {
  addIngredient(ingredientData: $ingredientData) {
    _id
    name
    group
  }
}
`;

export const ADD_RECIPE = gql`
mutation AddRecipe($title: String, $description: String, $ingredients: [ID], $instructions: String, $servings: Int, $totalTime: Int, $group: String) {
  addRecipe(title: $title, description: $description, ingredients: $ingredients, instructions: $instructions, servings: $servings, totalTime: $totalTime, group: $group) {
    _id
    title
    description
    instructions
    servings
    totalTime
    imageUrl
    group
    ingredients {
      _id
      name
      group
    }
  }
}
`;

// removes recipe from user, not the database
export const REMOVE_RECIPE = gql`
mutation removeRecipe($recipeId: ID!) {
  removeRecipe(recipeId: $recipeId) {
    _id
    title
    description
    instructions
    servings
    totalTime
    imageUrl
    ingredients {
      _id
      group
      name
    }
  }
}
`;


// removes ingredient from user, not the database
export const REMOVE_INGREDIENT = gql`
mutation RemoveIngredient($ingredientId: ID!) {
  removeIngredient(ingredientId: $ingredientId) {
    _id
    name
    group
  }
}
`;


//saves a recipe to a user via recipeId
export const SAVE_RECIPE = gql`
mutation saveRecipes($recipeId: ID!) {
  saveRecipes(recipeId: $recipeId) {
    _id
    username
    email
    password
  
  }
}
`;

//adds ingredientId to User 
export const ADD_INGREDIENT_TO_USER = gql`
mutation AddIngredientToUser($ingredientId: ID!) {
  addIngredientToUser(ingredientId: $ingredientId) {
    _id
    username
    email
    savedRecipes {
      _id
    }
    createdRecipes {
      _id
    }
  }
}
`;