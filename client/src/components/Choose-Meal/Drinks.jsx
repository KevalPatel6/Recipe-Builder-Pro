import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE_GROUP } from '../../utils/queries';

// import '../../styles/Login.css'

import Auth from '../../utils/auth';
import React from "react";



function SeeDrinks() {
    // Use the QUERY_RECIPE_GROUP query to fetch recipes with the "Drinks" group
    const { loading, error, data } = useQuery(QUERY_RECIPE_GROUP, {
      variables: { group: "Drinks" }, // Pass the group name as a variable
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const recipes = data.getRecipeGroup; // Adjust this based on your GraphQL query structure
  
    return (
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <Link to={`/recipe/${recipe.id}`} key={index}>
            <div className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
  


export default SeeDrinks;