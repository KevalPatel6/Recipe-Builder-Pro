import AddIngredients from '../components/CreateNewRecipe/AddIngredients'
import ImageUploader from '../components/CreateNewRecipe/ImageUploader'
import Instructions from '../components/CreateNewRecipe/Instructions'
import { useState } from 'react'
import {useMutation} from 'react-router-dome'

import '../styles/CreateRecipe.css'

function CreateNewRecipe()  {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: '',
        instructions: '',
        servings: '',
        totalTime: '',
        group: ''
    })

    const createRecipe = ()=>{
        const {data} = useMutation(ADD_RECIPE,{
            variables: {...formData                                         }
         })
         
        // Reset the form//
         setFormData({
        title: '',
        description: '',
        ingredients: '',
        instructions: '',
        servings: '',
        totalTime: '',
        group: ''
         })
        
    }



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
                        id="recipeName" value={formData.title}
                        onChange={(event)=>setFormData({...formData, title: event.target.value})}/>
                        
                        <AddIngredients/>

                        {/* Need to add description, servings, totalTime, group */}
                    
                    <div id="instructions-container">
                        
                        <Instructions/>

                    </div>

                    <button id="btn"
                    onClick={()=>createRecipe}>Create Recipe</button>

                </div>
            </div>
        </main>
    )
}

export default CreateNewRecipe