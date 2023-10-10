import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      recipes
    }
  }
`;

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    email
    password
    ingredients {
      _id
      name
      group
    }
    savedRecipes {
      _id
      title
      description
      instructions
      servings
      totalTime
      imageUrl
      group
    }
    createdRecipes {
      _id
      title
      description
      ingredients {
        _id
        name
        group
      }
      instructions
      servings
      totalTime
      imageUrl
      group
    }
  }
}
`;

export const GET_PROFILE = gql`
query GetProfile($username: String!) {
  getProfile(username: $username) {
    _id
    username
    email
  }
}
`;


export const GET_INGREDIENT = gql`
query GetIngredient($ingredientId: ID!) {
  getIngredient(ingredientId: $ingredientId) {
    _id
    name
    group
  }
}
`;

export const GET_ALL_INGREDIENTS = gql`
query GetIngredients($name: String, $group: String) {
  getIngredients(name: $name, group: $group) {
    _id
    name
    group
  }
}
`;

export const GET_INGREDIENTS_GROUP = gql`
query GetIngredientGroup($group: String!) {
  getIngredientGroup(group: $group) {
    _id
    name
    group
  }
}
`;

export const GET_RECIPE = gql`
query getRecipe($recipeId: ID!) {
  getRecipe(recipeId: $recipeId) {
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
      group
      name
    }
  }
}
`;

export const QUERY_ALL_RECIPES = gql`
query GetAllRecipes {
  getAllRecipes {
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


export const QUERY_RECIPE_GROUP = gql`
query GetRecipeGroup($group: String!) {
  getRecipeGroup(group: $group) {
    _id
    title
    description
    instructions
    servings
    totalTime
    group
    ingredients {
      _id
      name
      group
    }
  }
}
`;

export const GET_SAVED_RECIPE = gql`
query getSavedRecipes {
  getSavedRecipes {
    savedRecipes {
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
}
`;

export const GET_CREATED_RECIPE = gql`
query GetCreatedRecipes($recipeId: ID!) {
  getCreatedRecipes(recipeId: $recipeId) {
    _id
    username
    email
    password
    createdRecipes {
      _id
      title
      description
      instructions
      servings
      totalTime
      imageUrl
      group
    }
  }
}
`;

export const GET_FILTERED_RECIPES = gql`
query getFilteredRecipes {
  getFilteredRecipes {
    user {
      _id
      username
      email
      ingredients {
        _id
        name
        group
      }
    }
    recipes {
      _id
      title
      description
      ingredients {
        _id
        name
        group
      }
      instructions
      servings
      totalTime
      imageUrl
      group
    }
  }
}
`;