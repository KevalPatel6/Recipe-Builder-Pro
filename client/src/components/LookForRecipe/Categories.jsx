import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Categories.css'

function Categories() {
    return (
        <div className="categories-page">
            <div className='cat-overlay'>
                <div id="categories-title">
                    <h1>What are you in the mood for ? </h1>
                </div>

                <div id="category-items">
                    <div className="category">
                        <Link to={'/recipes'}>
                            <img className="category-img" src="/icons/savedRecipes.png" alt="" />
                            <h2>Recipes</h2>
                        </Link>
                    </div>

                    <div className="category">
                        <Link to={'/meals'}>
                            <img className="category-img" src="/icons/meals.png" alt="" />
                            <h2>Meals</h2>
                        </Link>
                    </div>

                    <div className="category">
                        <Link to={'/desserts'}>
                            <img className="category-img" src="/icons/desserts.png" alt="" />
                            <h2>Desserts</h2>
                        </Link>
                    </div>
                    <div className="category">
                        <Link to={'/drinks'}>
                            <img className="category-img" src="/icons/drinks.png" alt="" />
                            <h2>Drinks</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;