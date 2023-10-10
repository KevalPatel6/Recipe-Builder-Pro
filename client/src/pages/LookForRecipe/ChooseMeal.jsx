import React from 'react';
import Categories from '../../components/LookForRecipe/Categories';
import { Link } from 'react-router-dom'


const ChooseMeal = () => {
    return (
        <div>
            <Categories />
            <Link to="/EnterIngredients"><button className="enterButton">What's in your kitchen?</button></Link>
        </div>
    )
}

export default ChooseMeal;