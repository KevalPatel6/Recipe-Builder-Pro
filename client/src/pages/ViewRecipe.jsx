import { useParams } from "react-router";
import { useQuery } from '@apollo/client';

import { GET_RECIPE } from "../utils/queries";
import Recipe from "../components/Choose-Meal/Recipe";


const ViewRecipe = () => {
    const { recipeId } = useParams();
    const { loading, data } = useQuery(GET_RECIPE, {
        variables: { recipeId: recipeId }
    })

    const recipe = data?.recipe || {};

    if (loading) {
        return <div> Loading...
            <img src="../assets/spinner.gif" alt="Spinning Loading Symbol" />
        </div>
    }

    return (
        <main>
            <div>
                <h1 className="View Recipe">Recipe</h1>
            </div>

        </main>
    )

}

export default ViewRecipe;
