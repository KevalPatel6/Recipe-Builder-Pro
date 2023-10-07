import './recipe.css';
import { useState } from 'react'


const Recipe = ({
    recipe,
    showTitle = true
}) => {
    if (!recipe) {
        return;
    }

    const { _id, title, description, ingredients, servings,
        totalTime, instructions, imageUrl, group } = recipe;

    const image = `/recipe-Imgs/${imageUrl}`;

    return (

        <div className="card" style={{ margin: 30 }}>
            {showTitle && <h3>{title}</h3>}
            <img className="recipeImg" src={image} alt={title} />
            <div className="card mb-3">
                <h6>Servings {servings}</h6>
                <h5>Cook time:{totalTime}</h5>
                <div>{instructions}</div>
                <button> save</button>
                <img src="{}" alt="save"></img>
            </div>
        </div>
    );

};

export default Recipe;



