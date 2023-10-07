import React from 'react';
import { Link } from 'react-router-dom';


function Ingredients() {
    return (
        <div className="header-container">
            <div id="searchContainer" className="container">
                <div>
                    <h1>Ingredient List</h1>
                    <input type="text" id="ingredientInput" placeholder="Enter ingredient" />
                    <button onclick="addIngredient()">Add</button>
                </div>

            </div>

            <div>
                <div id="ingredientList">

                </div>
            </div>
            <div>
                <Link to="/Choose-Meal">
                    <button>Choose a Meal</button>
                </Link>
            </div>
        </div>

    )
}

export default Ingredients;