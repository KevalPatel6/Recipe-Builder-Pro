import '../../pages/CreateNewRecipe/createNewRecipe.css'
import {useQuery} from '@apollo/client'
import { GET_ALL_INGREDIENTS } from "../../utils/queries"
import {useState} from 'react'

const AddIngredients = ({formData, setFormData}) => {
    const {loading, data} = useQuery(GET_ALL_INGREDIENTS)

    const ingredients = data?.getIngredients || []

    const [selected, setSelected] = useState([])
    const [suggestions, setSuggestions] = useState([])

    function changeHandler (event) {
        const value = event.target.value.toLowerCase()
        const filter = ingredients.filter(ingredient=>{
        
            return ingredient?.name?.toLowerCase().includes(value)
        })
        
        if(filter.length===ingredients.length){
            setSuggestions([])
        }
        else if(filter.length>15){
            const filtered = filter.slice(0,15)
            setSuggestions(filtered)
        }
        else{
            setSuggestions(filter)
        }
    }

    function addIngredient(event){
        const ingredientId = event.target.id
        const ingredientName = event.target.textContent
        
        const value = {
            _id: ingredientId,
            name: ingredientName
        }

        const selectedIds = selected.map(ingredient=>{
            return ingredient._id
        })

        setSelected([
            value,
            ...selected
        ]
        )


        setFormData({
            ...formData,
            ingredients: [...selectedIds, ingredientId]
        })
        
    }


    if(loading){
        return <h2>Still Loading Please Wait</h2>
    }




    return(
        <>
        <h2>Add Ingredients:</h2>
                    <form className='addIngredients-form'>
                        <input 
                            title="Type in ingredients to add to this recipe" 
                            autocomplete="on" 
                            size="48" 
                            height="100"
                            maxlength="24" 
                            type="text" 
                            pattern="[A-Za-z\s\-]{2,}" 
                            name="ingredients"
                            placeholder="Search Ingredients and Click on them to add them to your Recipe" className="searchBar"
                            onChange={changeHandler}
                            />
                        {suggestions.map(suggestion=>{
                            return <div 
                            onClick={addIngredient}
                            id = {suggestion._id}
                            >{suggestion.name}</div> 
                        })}

                    </form>
                    {/* <!-- Can replace breaks with margins in css --> */}
                    <br />
                    <br />
                    <br />
                    <div className="container-for-ingredients">
                        {/* <!-- Create a list of ingredients that were selected --> */}
                        ***List of Ingredients goes here***
                        <br/>
                        <br/>
                        {selected.map(ingredient=>{
                            return(
                                <button>{ingredient.name}</button>
                            )
                        })}
                    
                    </div>
                    <br />
                    <br />
        </>
    )
}



export default AddIngredients