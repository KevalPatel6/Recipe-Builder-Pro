import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import "./styles/AllRecipe.css";
import React from "react";
import { Link } from "react-router-dom";

import { GET_RECIPES } from "./graphql/queries"; // Replace with your actual query

function AllRecipe() {
  const { loading, error, data } = useQuery(GET_RECIPES);

  if (error) return <p>Error: {error.message}</p>;
  
  const recipes = data.recipes;
  
  if (loading) return <p>Loading...</p>;
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

export default AllRecipe;
