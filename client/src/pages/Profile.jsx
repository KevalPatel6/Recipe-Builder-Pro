import {useQuery} from '@apollo/client'
import { useState } from "react"
import {Navigate, useParams} from 'react-router-dom'
import { QUERY_USER } from '../utils/queries'


const Profile = () => {
    const {profileId} = useParams()
    const {loading, data} = useQuery(QUERY_USER, {
        variables: {_id: profileId}
    })

    if(loading){
        return <div>
            <img src="../assets/spinner.gif" alt="Spinning Loading Symbol" />
        </div>
    }

    return (
        <main>
        <div id="profile">
            <img id='profile-pic' src="./assets/Profile-Avatar.png" alt="Generic Profile Image"/>
            <h1 id="username">{data.user.username}</h1>
        </div>
        <div id="recipe-section">
            <div id="create-recipe">
                <Link to={`/profile/${profileId}/createrecipe`}>
                <img id='create' src="" alt=""/>
                <h1 className="recipe-header">Create new Recipe</h1>
                </Link>
            </div>
            <div id="saved-recipes">
                <Link to={`/profile/${profileId}/myrecipes`}>
                <img id='save' src="" alt=""/>
                <h1 className="recipe-header">Saved Recipes</h1>
                </Link>
            </div>
        </div>
    </main>
    )


}




export default Profile