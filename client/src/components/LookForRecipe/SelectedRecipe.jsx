import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_RECIPE_BY_ID } from "./graphql/queries"; // Define this query

function RecipeDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_RECIPE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const recipe = data.recipe; // Adjust this based on your GraphQL query structure

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>{recipe.description}</p>
      {/* Display other recipe details here */}
    </div>
  );
}

export default RecipeDetail;
