import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_INGREDIENT_TO_USER } from '../../utils/mutations';

import '../../styles/Login.css'

import Auth from '../../utils/auth';

// const addIngredient = ({userId}) => {}
function Pantry() { 

    const [ingName, setIngName] = useState('')
    const [ingGroup, setIngGroup] = useState('')


    const [addIngredient] = useMutation(ADD_INGREDIENT_TO_USER);

    const handleClick = async (event) => {
        event.preventDefault();
    
        try {
          console.log(ingName, ingGroup)
          const {data} = await addIngredient({
            variables: { name: ingName, group: ingGroup },
          });
          console.log({data})
    
          setIngName('');
          setIngGroup('');
        } catch (err) {
          console.error(err);
          // console.error(ingredient._id);
          // console.error(_id);
        }
      };


    return (
        <div className="header-container">
            <div id="searchContainer" className="container">
                <div>
                    <h1>Search for Ingredients</h1>
                    <input type="text" id="ingredientInput" placeholder="Enter ingredient" 
                    value={ingName} 
                    onChange={(event) => setIngName(event.target.value)}/> 
                    
                    <input type="text" id="ingredientInput" placeholder="Enter ingredient" 
                    value={ingGroup} 
                    onChange={(event) => setIngGroup(event.target.value)}/> 
                    
                    <button onClick= {handleClick} >Add</button>
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