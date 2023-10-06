import {useQuery} from '@apollo/client'
import {Link, Navigate} from 'react-router-dom'
import { QUERY_ME } from '../utils/queries'

import Auth from '../utils/auth';



const Profile = () => {
    console.log(Auth.getProfile().data)
    const {loading, data} = useQuery(QUERY_ME)

    if(loading){
        return <div>
            <img src="../assets/spinner.gif" alt="Spinning Loading Symbol" />
        </div>
    }

    return (
        <main>
        <div id="profile">
            <img id='profile-pic' src="./assets/Profile-Avatar.png" alt="Generic Profile Image"/>
            <h1 id="username">{data.username}</h1>
        </div>
        <div id="recipe-section">
            <div id="create-recipe">
                <Link to={`/me/createrecipe`}>
                <img id='create' src="" alt=""/>
                <h1 className="recipe-header">Create new Recipe</h1>
                </Link>
            </div>
            <div id="saved-recipes">
                <Link to={`/me/myrecipes`}>
                <img id='save' src="" alt=""/>
                <h1 className="recipe-header">Saved Recipes</h1>
                </Link>
            </div>
        </div>
    </main>
    )


}




export default Profile