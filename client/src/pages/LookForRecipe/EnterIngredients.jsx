import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_INGREDIENT_TO_USER } from '../../utils/mutations';
import { QUERY_ALL_RECIPES } from '../../utils/queries';

// import '../../styles/Login.css'

import Auth from '../../utils/auth';

// const addIngredient = ({userId}) => {}
function Pantry({user}) {

  const [ingName, setIngName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const [addIngredient] = useMutation(ADD_INGREDIENT_TO_USER);
  const { loading, error, data } = useQuery(QUERY_ALL_RECIPES);

  // const profiles = data?.profiles || [];

  // const { loading, data } = useQuery(QUERY_ALL_RECIPES, {
  //   variables: { recipes }
  // }); //filter??
  // const getAllRecipes = data?.getAllRecipes || [];

  // useEffect(() => {
  //   if (data && data.getAllRecipes) {
  //     // Filter recipes based on the user's ingredient IDs
  //     const filtered = data.getAllRecipes.filter((recipe) =>
  //       recipe.ingredients.some((ingredient) =>
  //         user.ingredients.includes(ingredient.id)
  //       )
  //     );
  //     setFilteredRecipes(filtered);
  //   }
  // }, [data, user]);

  useEffect(() => {
    if (data && data.getAllRecipes) {
      // Populate ingredients for each recipe
      const populatedRecipes = data.getAllRecipes.map((recipe) => ({
        ...recipe,
        ingredients: Recipe.Ingredients.map((ingredient) => {
          
          const matchingIngredient = user.ingredient.find(
            (ingredient) =>
              ingredient.toString() === ingredient.id.toString()
          );
          return matchingIngredient ? matchingIngredient : ingredient;
        }),
      }));
      // Filter recipes based on the user's ingredient IDs
      const filtered = populatedRecipes.filter((recipe) => {
        if (recipe.ingredients) {
          return recipe.ingredients.some((ingredient) =>
          user.ingredients.includes(ingredient.id)
          );
        }
        return false;
      });
      
      setFilteredRecipes(filtered);
    }
    }, [data, user]);
    

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      console.log(ingName)
      const { data } = await addIngredient({
        variables: { name: ingName },
      });
      console.log({ data })

      setIngredients([...ingredients, { name: ingName }]);

      setIngName('');
      // setIngGroup('');
    } catch (err) {
      console.error(err);
    }
  };


  const handleGetRecipesClick = async (event) => {
    event.preventDefault();
    try {
      // take ingredients by their id and cross reference them with recipes in the db
      // display the recipes that include the users ingredients
      // const { data } = await seeRecipes({
      //   variables: {},
      // });
      const filtered = data.getAllRecipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) => user.ingredients.includes(ingredient.id))
    );
    setFilteredRecipes(filtered);
  
     

    } catch (error) {

    }

  }

  return (
    <div className="header-container">
      <div id="searchContainer" className="container">
        <div>
          <h1>Search for Ingredients</h1>
          <input type="text" id="ingredientInput" placeholder="Enter ingredient"
            value={ingName}
            onChange={(event) => setIngName(event.target.value)} />



          <button onClick={handleClick} >Add</button>
          <button onClick={handleGetRecipesClick} >Get Recipes</button>

        </div>

      </div>

      <div>
        <div id="ingredientList">
          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} - {ingredient.group}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Recipes with Specific Ingredients</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>

  )
}

export default Pantry;