import React from 'react';
import { Link } from 'react-router-dom';
// import '../../styles/Categories.css'


function Categories() {
    return (
        <div className="header-container">
            <div id="searchContainer" class="container">
                <h1>What are you in the mood for ? </h1>

            </div>

            <div id="categoryContainer">
                
                <div>
                    <Link to={'/recipes'}>
                        <img src="" alt="" />
                        <h2>Recipes</h2>
                    </Link>
                </div>
                
                <div>
                    <Link to={'/meals'}>
                        <img src="" alt="" />
                        <h2>Meals</h2>
                    </Link>
                </div>
                
                <div>
                    <Link to={'/desserts'}>
                        <img src="" alt="" />
                        <h2>Desserts</h2>
                    </Link>
                </div>
                <div>
                    <Link to={'/drinks'}>
                        <img src="" alt="" />
                        <h2>Drinks</h2>
                    </Link>  
                </div>
            </div>
        </div>

    )
}

export default Categories;