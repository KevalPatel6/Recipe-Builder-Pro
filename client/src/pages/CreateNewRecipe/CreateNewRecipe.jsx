import AddIngredients from '../components/CreateNewRecipe/AddIngredients'
import ImageUploader from '../components/CreateNewRecipe/ImageUploader'
import Instructions from '../components/CreateNewRecipe/Instructions'
import { useState } from 'react'
import {useMutation} from 'react-router-dome'

import createNewRecipeStyles from './CreatedRecipeStyles.module.css'

function CreateNewRecipe()  {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: [],
        instructions: '',
        servings: '',
        totalTime: '',
        imageUrl: '',
        group: ''
    })

    const createRecipe = ()=>{
        const {data} = useMutation(ADD_RECIPE,{
            variables: {...formData}
         })
         
        // Reset the form//
         setFormData({
        title: '',
        description: '',
        ingredients: [],
        instructions: '',
        servings: '',
        totalTime: '',
        imageUrl: '',
        group: ''
         })
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        
        setFormData(
            ...formData,
            [name: value]
        )
    }

    return (
        <main>
            <div className="container-for-both-sides">


                <div className="left-side">
                    <ImageUploader image={formData.imageUrl}/>
                </div>

                <div className="right-side">
                    {/* <!-- Need to add value for the input--> */}
                    <input title="Input a Name for Your Recipe" autocomplete="on" maxlength="64" type="text"
                        pattern="[A-Za-z0-9\s\-]{4,128}" name={} placeholder="Enter Recipe Name" required
                        className="recipeName" value={formData.title}
                        onChange={handleChange}/>
                        
                        <AddIngredients ingredients = {formData.ingredients}/>

                        {/* Need to add description, servings, totalTime, group */}
                    
                    <div className="instructions-container">
                        
                        <Instructions instructions = {formData.instructions}/>

                    </div>

                    <button className="btn"
                    onClick={()=>createRecipe}>Create Recipe</button>

                </div>
            </div>
        </main>
    )
}

export default CreateNewRecipe