import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import './recipe.css';

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
        <div className="card">
            {showTitle && <h3>{title}</h3>}
            <div className='recipe-block'>
                <img className="recipe-img" src={image} alt={title} />
                {/* <img className='save-icon' src="/public/icons/saved.png" alt="save"></img> */}
                <img className='save-icon' src="/icons/saved.png" alt="save"></img>

            </div>
            <div className="card-body">
                <h6>Servings {servings}</h6>
                <h5>Prep time:{totalTime}</h5>
                <div>{instructions}</div>
            </div>
            <a href="/" target="_blank" className='view-btn'>
                <Button className='view-btn'>View Recipe</Button>
            </a>
        </div>
    );

};

export default Recipe;



