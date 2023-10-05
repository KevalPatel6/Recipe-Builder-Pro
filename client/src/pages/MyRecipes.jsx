import UserCreatedRecipes from "../components/MyRecipes/UserCreatedRecipes"
import SavedRecipes from '../components/MyRecipes/SavedRecipes'
import { QUERY_ME } from "../utils/queries"
import { useParams } from "react-router"


const MyRecipes = () => {
    const { profileId } = useParams()
    const { loading, data } = useQuery(QUERY_ME, {
        variables: { _id: profileId }
    })

    if (loading) {
        return <div>
            <img src="../assets/spinner.gif" alt="Spinning Loading Symbol" />
        </div>
    }


    return (
        <main>
            <div>
                <h1 className="title-headers">My Recipes</h1>
            </div>
            <div className="recipes-container">
                {/* If there is user recipes*/}
                {data.me.createRecipes.length ?
                    <UserCreatedRecipes recipes={data.me.createdRecipes}/>
                    :
                    <div>
                        <h3>You have not created any recipes!</h3>
                    </div>
                }
            </div>
            <div>
                <h1 className="title-headers">Saved Recipes</h1>
            </div>
            <div className="recipes-container">
                {/* If there is user recipes*/}
                {data.me.savedRecipes.length ?
                    <SavedRecipes recipes={data.me.savedRecipes}/>
                    :
                    <div>
                        <h3>You have not saved any recipes!</h3>
                    </div>
                }
            </div>

        </main>
    )

}

export default MyRecipes