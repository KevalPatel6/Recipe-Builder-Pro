import { useQuery } from '@apollo/client'
import CreatedRecipes from '../components/MyRecipes/CreatedRecipes'
import SavedRecipes from '../components/MyRecipes/SavedRecipes'
import { QUERY_ME } from "../utils/queries"
import '../styles/MyRecipes.css'

const MyRecipes = () => {
    const { loading, data } = useQuery(QUERY_ME)

    console.log(data)

    if (loading) {
        return <div>
            <img src="../assets/spinner.gif" alt="Spinning Loading Symbol" />
        </div>
    }


    return (
        <main id="my-recipe-page">
            <div className="recipe-section">
                <h1 className="title-headers">My Recipes</h1>
                <div className="recipes-container">
                    {/* If there is user recipes*/}
                    {data.me.createdRecipes.length ?
                        <CreatedRecipes recipes={data.me.createdRecipes} />
                        :
                        <div className='message'>
                            <h3>You have not created any recipes!</h3>
                        </div>
                    }
                </div>
            </div>
            <div className="recipe-section">
                <h1 className="title-headers">Saved Recipes</h1>
                <div className="recipes-container">
                    {/* If there is user recipes*/}
                    {data.me.savedRecipes.length ?
                        <SavedRecipes recipes={data.me.savedRecipes} />
                        :
                        <div className='message'>
                            <h3>You have not saved any recipes!</h3>
                        </div>
                    }
                </div>
            </div>
        </main>
    )

}

export default MyRecipes