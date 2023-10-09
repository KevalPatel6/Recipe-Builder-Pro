import AddIngredients from '../../components/CreateNewRecipe/AddIngredients'
import ImageUploader from '../../components/CreateNewRecipe/ImageUploader'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_RECIPE } from '../../utils/mutations'

// import createNewRecipeStyles from './CreateRecipeStyles.module.css'

function CreateNewRecipe() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: [],
        instructions: '',
        servings: 0,
        totalTime: 0,
        imageUrl: '',
        group: ''
    })

    const [AddRecipe] = useMutation(ADD_RECIPE)

    const createRecipe = () => {
        //Use mutation
        const {data} = AddRecipe({variables: {...formData}})

        // Reset the form//
        setFormData({
            title: '',
            description: '',
            ingredients: [],
            instructions: '',
            servings: 0,
            totalTime: 0,
            imageUrl: '',
            group: ''
        })

    }

    const handleChange = (event) => {
        let { name, value } = event.target

        if(name==='servings' || name==='totalTime'){
            value = parseInt(value)
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <main>
            <div className="container-for-both-sides" style={{background: 'white'}}>

                {/* Image Upload */}
                <div className="left-side">
                    <ImageUploader image={formData.imageUrl} />
                </div>


                {/* Description */}
                <div className="description-container">
                    <label htmlFor="description">Description:</label>
                    <input
                        title="Enter the Servings this Recipe Makes"
                        className="description"
                        type="text"
                        placeholder="Enter a short description"
                        maxLength='128'
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>


                <div className="right-side">

                    {/*Group */}
                    <div className="group-container">
                        <label htmlFor="group">Type of Recipe:</label>
                        <select
                            onChange={handleChange}
                            name='group'
                            value={formData.group}>
                            <option value='Meal'>Meal</option>
                            <option value='Drink'>Drink</option>
                            <option value='Dessert'>Dessert</option>
                        </select>
                    </div>

                    <br />
                    <br />

                    {/* Time */}
                    <div>
                        <label htmlFor='totalTime'>Total Time:</label>
                        <input
                            className="totalTime"
                            type="number"
                            placeholder="Enter Time in Minutes"
                            maxLength='5'
                            name="totalTime"
                            value={formData.totalTime}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Servings */}
                    <div className="servings-container">
                        <label htmlFor="servings">Number of Servings:</label>
                        <input
                            title="Enter the Servings this Recipe Makes"
                            className="servings"
                            type="number"
                            placeholder="Servings"
                            maxLength='3'
                            name="servings"
                            value={formData.servings}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Recipe Name */}
                    <div className='recipeName-container'>

                        <label htmlFor="recipeName">Recipe Name:</label>
                        <input
                            title="Input a Name for Your Recipe"
                            autoComplete="on"
                            maxLength="64"
                            type="text"
                            pattern="[A-Za-z0-9\s\-]{4,128}"
                            name='title'
                            value={formData.title}
                            placeholder="Enter Recipe Name"
                            required
                            className="recipeName"
                            onChange={handleChange} />
                    </div>

                    <AddIngredients setFormData={setFormData} formData={formData} />

                    <div className="instructions-container">

                        <h2>Instructions</h2>

                        <textarea cols="50" maxLength="4096" name="instructions"
                            placeholder="Add instructions to your Recipe" wrap="soft" className="instructions" required
                            value={formData.instructions}
                            onChange={handleChange}>
                        </textarea>

                    </div>

                    <button className="btn"
                        onClick={createRecipe}>Create Recipe</button>

                </div>
            </div>
        </main>
    )
}

export default CreateNewRecipe