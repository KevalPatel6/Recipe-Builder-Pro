import AddIngredients from '../components/CreateNewRecipe/AddIngredients'
import ImageUploader from '../components/CreateNewRecipe/ImageUploader'
import Instructions from '../components/CreateNewRecipe/Instructions'

import '../styles/CreateRecipe.css'

const CreateNewRecipe = () => {


    return (
        <main>
            <div className="container-for-both-sides">


                <div className="left-side">
                    <ImageUploader/>
                </div>

                <div className="right-side">
                    {/* <!-- Need to add value for the input--> */}
                    <input title="Input a Name for Your Recipe" autocomplete="on" maxlength="64" type="text"
                        pattern="[A-Za-z0-9\s\-]{4,128}" name="recipeName" placeholder="Enter Recipe Name" required
                        id="recipeName" />
                        
                        <AddIngredients/>
                    
                    <div id="instructions-container">
                        
                        <Instructions/>

                    </div>

                    <button id="btn">Create Recipe</button>

                </div>
            </div>
        </main>
    )
}

export default CreateNewRecipe