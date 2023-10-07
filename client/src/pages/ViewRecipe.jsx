import { useQuery } from '@apollo/client';
import { useParams } from "react-router";
import { GET_RECIPE } from "../utils/queries";
import '../styles/viewRecipe.css';

const ViewRecipe = () => {
    const { recipeId } = useParams();

    const { loading, data } = useQuery(GET_RECIPE, {
        // variables: { recipeId: recipeId }
        onCompleted: (data) => {
            // Handle the data here if needed
        }
    });

    if (loading) {
        return (
            <div>
                Loading...
                <img src="../../src/assets/gifs/spinner.gif" alt="Spinning Loading Symbol" />
            </div>
        );
    }

    const recipe = data?.recipe || {};
    const { _id, title, description, ingredients, servings,
        totalTime, instructions, imageUrl, group } = recipe;
    const image = `/recipe-Imgs/${imageUrl}`;

    return (
        <main>
            <div>
                <img className="recipe-img" src={image} alt={title} />
                <h1>hola</h1>
            </div>
        </main>
    )
}

export default ViewRecipe;
