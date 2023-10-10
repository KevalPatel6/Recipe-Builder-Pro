import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_INGREDIENT_TO_USER } from '../../utils/mutations';

// import '../../styles/Login.css'

import Auth from '../../utils/auth';


function Choosing() { 

    


    return (
        <div className="header-container">
            <div id="searchContainer" className="container">
                <div>
                    <h1>What are you in the mood for?</h1>
                    
                    <Link to="/profile/Meals"><button>Meal</button></Link>
                    <Link to="/profile/Drinks"><button>Drink</button></Link>
                    <Link to="/profile/Desserts"><button>Dessert</button></Link>
                    

                    {/* <button onClick= {handleMealClick} >Meal</button>
                    <button onClick= {handleDrinkClick} >Drink</button>
                    <button onClick= {handleDessertClick} >Dessert</button> */}
                    
                </div>

            </div>
            <div>
                <div id="ingredientList">

                </div>
            </div>
        </div>

    )
}

export default Choosing;