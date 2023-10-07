import { useQuery } from "@apollo/client"
import { useState } from "react"
import Recipe from "../components/Choose-Meal/Recipe"
import { QUERY_ALL_RECIPES } from "../utils/queries"

const AllRecipes = () => {
    const [recipes, setAllRecipes] = useState([]);

    const { loading, data } = useQuery(QUERY_ALL_RECIPES, {
        onCompleted: () => {
            setAllRecipes(data?.getAllRecipes);
        }
    });

    if (loading) {
        return <div>
            <img src="../assets/spinner.gif" alt="Spinning Loading Symbol" />
        </div>
    }

    return (
        <main>
            <div>
                <h1 className="title-headers">All Recipes</h1>
            </div>
            <div style={{ 'display': 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {recipes.map(r => {
                    return <Recipe recipe={r}></Recipe>
                })}
            </div>
        </main>
    )
}

export default AllRecipes