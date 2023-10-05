import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_INGREDIENT_TO_USER } from '../../utils/queries';

import '../../styles/Login.css'

import Auth from '../../utils/auth';

// const addIngredient = ({userId}) => {}
function Pantry() { 

    const [ingredient, setIngredient] = useState('')

    const [addIngredient] = useMutation(ADD_INGREDIENT_TO_USER);

    const handleClick = async (event) => {
        event.preventDefault();
    
        try {
          const data = await addIngredient({
            variables: { userId, ingredient },
          });
    
          setIngredient('');
        } catch (err) {
          console.error(err);
        }
      };


    return (
        <div className="header-container">
            <div id="searchContainer" class="container">
                <div>
                    <h1>Search for Ingredients</h1>
                    <input type="text" id="ingredientInput" placeholder="Enter ingredient" 
                    value={ingredient} 
                    onChange={(event) => setIngredient(event.target.value)}/> 
                    
                    <button onclick= {handleClick} >Add</button>
                    <button>Choose Type??</button> {/*  link to ChooseType on click */}
                </div>

            </div>

            <div>
                <div id="ingredientList">

                </div>
            </div>
        </div>

    )
}

export default Pantry;