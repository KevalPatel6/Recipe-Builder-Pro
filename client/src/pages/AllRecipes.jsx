import { useQuery } from "@apollo/client"
import { useState } from "react"
import Recipe from "../components/Choose-Meal/Recipe"
import { QUERY_ALL_RECIPES } from "../utils/queries"
import { QUERY_ME } from "../utils/queries"
<<<<<<< HEAD
import '../styles/AllRecipes.css'

=======
import '../styles/AllRecipes.css';
>>>>>>> 6f1fd7add6af43154596b4b31a1142a6265f6e22

const AllRecipes = () => {
    const [recipes, setAllRecipes] = useState([]);

    const { loading, data } = useQuery(QUERY_ALL_RECIPES, {
        onCompleted: () => {
            setAllRecipes(data?.getAllRecipes);
        }
    });

    const {data: myData} = useQuery(QUERY_ME)
    const savedRecipes = myData?.me?.savedRecipes
    
    if (loading) {
        return <div>
            <img src="../../src/assets/gifs/spinner.gif" alt="Spinning Loading Symbol" />
        </div>
    }
    return (
        <main className="allRecipe-container">
            <h1 className="title-headers" style={{ 'color': 'white' }}>All Recipes</h1>
            <div style={{ 'display': 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {recipes.map(r => {
                    let saved = false
                    for (let i = 0; i < savedRecipes.length; i++) {
                        if(savedRecipes[i]._id===r._id){
                            saved = true
                        }
                    }
                    return <Recipe saved={saved} key={r.title} recipe={r}></Recipe>
                })}
            </div>
        </main>
    )
}

export default AllRecipes