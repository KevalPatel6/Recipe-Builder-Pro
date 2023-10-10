import { useState } from 'react'
import {useMutation} from '@apollo/client'
import { SAVE_RECIPE, REMOVE_RECIPE} from "../../utils/mutations";
import { QUERY_ME } from '../../utils/queries';
import { Form, Button, Alert } from 'react-bootstrap';
import './recipe.css';

const Recipe = ({
    recipe,
    showTitle = true,
    saved,
}) => {
    if (!recipe) {
        return;
    }
    const { _id, title, description, ingredients, servings,
        totalTime, instructions, imageUrl, group } = recipe;

    const image = `/recipe-Imgs/${imageUrl}`;
    const recipeUrl = `/recipe/${_id}`;

    const [isSaved, setIsSaved] = useState(saved)

    const [saveRecipes, {error, data}] = useMutation(SAVE_RECIPE,
        {
            refetchQueries: [QUERY_ME]
        })

    const [removeRecipe,{data: removeRecipeData}] = useMutation(REMOVE_RECIPE,
        {
            refetchQueries: [QUERY_ME]
        })

    function saveRecipe(event) {
        let saveRecipeId = event.target.getAttribute('data-id')
        saveRecipes({
            variables: {
                recipeId: saveRecipeId
            }
        })
      
        setIsSaved(true)
    }

    function deleteRecipe(event){
        let removedRecipeId = event.target.getAttribute('data-id')
        removeRecipe({
            variables: {
                recipeId: removedRecipeId
            }
        })

        setIsSaved(false)
    }

    return (
        <div className="card">
            {showTitle && <h3>{title}</h3>}
            <div className='recipe-block'>
                <img className="recipe-img" src={image} alt={title}/>
               {/* If it is saved then show the filled save icon, if not the nthe grey save icon */}
                {isSaved ?
                <img className='save-icon' src="/icons/saved.png" alt="save" onClick={deleteRecipe} data-id={_id}></img>
                : <img className='save-icon' src="/icons/save.png" alt="save" onClick={saveRecipe} data-id={_id}></img>
            }

            </div>
            <div className="card-body">
                <h6>Servings {servings}</h6>
                <h5>Prep time:{totalTime}</h5>
                <div>{instructions}</div>
            </div>
            <a href={recipeUrl} target="_blank" className='view-btn'>
                <Button className='view-btn'>View Recipe</Button>
            </a>
            <div className='view-btn'>
                <Button className='view-btn' onClick={removeRecipe} >Unsave Recipe</Button>
            </div>
        </div>
    );
};

export default Recipe;



