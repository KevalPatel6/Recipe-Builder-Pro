import {useQuery} from '@apollo/client'
import {Navigate, useParams} from 'react-router-dom'
import { QUERY_USER } from '../utils/queries'


const Profile = () => {
    const {profileId} = userParams()
    const {loading, data} = useQuery(QUERY_USER, {
        variables: {_id: profileId}
    })


    if(loading){
        return <div>Loading...</div>
    }

    return (
        <main>
        <div id="profile">
            <img id='profile-pic' src="./assets/Profile-Avatar.png" alt="Generic Profile Image"/>
            <h1 id="username">{data.user.username}</h1>
        </div>
        <div id="recipe-section">
            <div id="create-recipe">
                <img id='profile-pic' src="" alt=""/>
                <h1 class="recipe-header">Create new Recipe</h1>
            </div>
            <div id="saved-recipes">
                <img id='profile-pic' src="" alt=""/>
                <h1 class="recipe-header">Saved Recipes</h1>
            </div>
        </div>
    </main>
    )


}




export default Profile