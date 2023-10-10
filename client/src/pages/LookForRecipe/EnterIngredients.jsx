import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_INGREDIENT_TO_USER } from '../../utils/mutations';
import { QUERY_ALL_RECIPES, QUERY_ME, GET_FILTERED_RECIPES } from '../../utils/queries';

import Auth from '../../utils/auth';
// import './EnterIngredients.css';

function Pantry() {

  const [ingName, setIngName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const [addIngredient] = useMutation(ADD_INGREDIENT_TO_USER);
  
  const { loading, error, data, refetch } = useQuery(GET_FILTERED_RECIPES);
  const recipes = data?.getFilteredRecipes.recipes || [];
  const user = data?.getFilteredRecipes.user || {};
  console.log(recipes)
  // console.log(user)
  // console.log(data?.getFilteredRecipes)
  
  const handleClick = async (event) => {
    event.preventDefault();

    try {
      console.log(ingName)
      const { data } = await addIngredient({
        variables: { name: ingName },
      });
      console.log({ data })
      refetch();
      setIngredients([...ingredients, { name: ingName }]);
      
      setIngName('');
     
    } catch (err) {
      console.error(err);
    }
  };


  const handleGetRecipesClick = async (event) => {
    event.preventDefault();
    try {
      console.log(data.getAllRecipes)
      const filtered = data.getAllRecipes.filter((recipe) => 
        recipe.ingredients.some((ingredient) => user.ingredients.includes(ingredient.name))
      );
      setFilteredRecipes(filtered);
      
    } catch (error) {

    }
  };

 
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
            {ingredients?.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} - {ingredient.group}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Recipes with Specific Ingredients</h2>
      <ul>
        {recipes.length ? (
          recipes.map((recipe) => (
            <li key={recipe._id}>{recipe.title}</li>
          ))
        ) : ("")
        
        
      }
      </ul>
    </div>

  )
}

export default Pantry;
// check to see if user has ingredients. if so add it to the old ingredients.
// if(user?.ingredients.length){
//   setIngredients(user.ingredients)
// }