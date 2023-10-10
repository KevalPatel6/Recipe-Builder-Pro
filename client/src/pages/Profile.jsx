import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { QUERY_ME } from '../utils/queries'
import '../styles/Profile.css'
import profile from '../assets/background-Imgs/profile-avatar.png';

const Profile = () => {

    const { loading, data } = useQuery(QUERY_ME)


    const [uploadFile, setUploadFile] = useState('')
    // Upload Image Logic//
    function handleImageUpload(event) {
        //Needs to run each time the page loads//
        const selectedFile = event.target.files[0]

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const fileContent = e.target.result
                setUploadFile(fileContent)
            }

            reader.readAsDataURL(selectedFile)
        }
    }

    if (loading) {
        return <div>
            <img src="../assets/spinner.gif" alt="Spinning Loading Symbol" />
        </div>
    }

    return (
        <main id="profile-container">
            <div id="profile">
                <div className="profile-avatar">
                    {/* If Image is clicked it will activate the hidden input that allows users to upload image */}
                    <img id='profile-pic' src={uploadFile || profile} width='130px' alt="Generic Profile Image" onClick={() => { document.getElementById('fileInput').click() }} />
                    {/* This is the file upload input that will be hidden visually but functional */}
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <button onClick={() => { document.getElementById('fileInput').click() }}>Upload Image</button>
                </div>
                <h1 id="username">Hi, {data.me.username}</h1>
            </div>
            <div id="recipe-section">
                <div></div>
                <div className="recipe-action">
                    <img src="/icons/savedRecipes.png" />
                    <Link to={`/me/createnewrecipe`}>
                        <h1 className="recipe-header">Create new Recipe</h1>
                    </Link>
                </div>
                <div className="recipe-action">
                    <img src="/icons/savedRecipes.png" />
                    <Link to={`/me/myrecipes`}>
                        <h1 className="recipe-header">Saved Recipes</h1>
                    </Link>
                </div>
            </div>
        </main>
    )


}




export default Profile