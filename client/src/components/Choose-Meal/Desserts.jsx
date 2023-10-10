import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPE_GROUP } from "../../utils/queries"; // Import your GraphQL query
import { Link } from "react-router-dom";

function SeeDesserts() {
    // Use the QUERY_RECIPE_GROUP query to fetch recipes with the "Desserts" group
    const { loading, error, data } = useQuery(QUERY_RECIPE_GROUP, {
      variables: { group: "Desserts" }, // Pass the group name as a variable
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
  


export default SeeDesserts;