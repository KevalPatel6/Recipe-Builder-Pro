import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIngredients from '../../components/CreateNewRecipe/AddIngredients';
import { GET_ALL_INGREDIENTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import '../../styles/ingredients.css'

function Ingredients() {
    const [allIngredients, setAllIngredients] = useState([]);
    const { loading, data } = useQuery(GET_ALL_INGREDIENTS,
        {
            onCompleted: (data) => {
                setAllIngredients(data.getIngredients)
            }
        })

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: [],
        instructions: '',
        servings: 0,
        totalTime: 0,
        imageUrl: '',
        group: ''
    })

    const selectedIngredientIds = formData?.ingredients;
    const selectedIngredients = selectedIngredientIds?.map(id => {
        return allIngredients.find(a => a._id == id);
    });

    return (
        <div className="header-container" style={{ background: 'white' }}>
            <div id="searchContainer" className="container">
                <AddIngredients setFormData={setFormData} formData={formData} />
            </div>
            <div>
                <div id="ingredientList">
                    {selectedIngredients && selectedIngredients.map(ing => {
                        return <div className='ingredientPill'>{ing.name}</div>
                    })}
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