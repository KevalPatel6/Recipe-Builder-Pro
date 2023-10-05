import '../styles/CreateRecipe.css'


const ImageUploader = () => {

    return (

        <div id="uploadImage-container">
            <img id="recipeImage" className="upload-image" src="./assets/generic-meal.jpg"
                alt="Plate with a fork and knife" />
            {/* <!-- Container to for 'Add Image' and Icon --> */}
            <div id="add-header-container">
                <h3 className="upload-image">Add image for your Recipe</h3>
                <button className="upload-image" onClick={}>
                    {/* <!-- This is the icon to add an image --> */}
                    <img className="upload-image" id="plus-sign" src="./assets/plus-icon.png" alt="Plus icon"
                        width="20px" />
                </button>
            </div>
        </div>
    )
}

export default ImageUploader