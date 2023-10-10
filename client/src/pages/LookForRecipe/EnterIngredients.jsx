import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_INGREDIENT_TO_USER } from '../../utils/mutations';
import { QUERY_ALL_RECIPES, QUERY_ME, GET_FILTERED_RECIPES } from '../../utils/queries';
import _ from 'lodash';

import Auth from '../../utils/auth';
import AllRecipes from '../AllRecipes';
// import './EnterIngredients.css';

function Pantry() {
  //State Variables//
  const [ingName, setIngName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  //Mutations//
  const [addIngredient] = useMutation(ADD_INGREDIENT_TO_USER);
  //Queries//
  const { data: userData } = useQuery(QUERY_ME)
  const { loading, error, data, refetch } = useQuery(QUERY_ALL_RECIPES);

  //Variables used in Matching//
  const userIngredients = userData?.me?.ingredients || []
  const matchedIngredients = [];
  let recipes = data?.getAllRecipes || []  
  let matchedRecipes = []

  //Matches User ingredients with Recipes//
  const handleMatchRecipe = async (event) => {
    event.preventDefault()

    const eachRecipesIngredients = await data?.getAllRecipes.map((recipe) => recipe.ingredients)
   

    findMatchingIngredients(eachRecipesIngredients, userIngredients)
   
    matchedRecipes = await matchedIngredients.map((index)=>recipes[index.arrayIndex])
    console.log(matchedRecipes)

    setFilteredRecipes(_.uniqBy(matchedRecipes,'title'))

  }

  //Matches Ingredients of recipes and User Ingredients//
  async function findMatchingIngredients(eachRecipesIngredients, userIngredients) {
    for (let i = 0; i < eachRecipesIngredients.length; i++) {
      const currentArray = eachRecipesIngredients[i];
      for (let j = 0; j < currentArray.length; j++) {
        const currentObject = currentArray[j].name;

        const isMatch = userIngredients.some((targetObject) =>
          isEqual(currentObject, targetObject.name)
        );
        if (isMatch) {
          matchedIngredients.push({object: currentObject, arrayIndex: i});
        }
      }
    }
    return matchedIngredients;

  }

  //Minor function used in function findMatchingIngredients to see if two objects are equal//
  function isEqual(objA, objB){
    if(objA==objB){
      return true
    }
    else{
      return false
    }
  }

  const handleClick = async (event) => {
    event.preventDefault();

    try {

      const { data } = await addIngredient({
        variables: { name: ingName },
      });

      refetch();
      setIngredients([...userIngredients, { name: ingName }]);

      setIngName('');

    } catch (err) {
      console.error(err);
    }
  };


  useEffect(()=>{
    console.log(filteredRecipes);
    console.log(ingredients)
  },[filteredRecipes], [ingredients])


  return (
    <div className="header-container">
      <div id="searchContainer" className="container">
        <div>
          <h1>Search for Ingredients</h1>
          <input type="text" id="ingredientInput" placeholder="Enter ingredient"
            value={ingName}
            onChange={(event) => setIngName(event.target.value)} />



          <button onClick={handleClick} >Add</button>
          <button onClick={handleMatchRecipe} >Get Recipes</button>

        </div>

      </div>

      <div>
        <div id="ingredientList">
          <h2>Ingredients:</h2>
          <ul>
            {userIngredients?.length ? (
              userIngredients.map((ingredient, index) => (

                <li style={{color: 'red'}} key={index}>
                {ingredient.name} - {ingredient.group}
              </li>
                ))
            ) : ("")
            }
          </ul>
        </div>
      </div>

      <h2>Recipes with Specific Ingredients</h2>
      <ul>
        {filteredRecipes?.length ? (
          filteredRecipes.map((recipe) => (
            <li style={{color: 'red'}} key={recipe._id}>{recipe.title }</li>
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