import { Link } from 'react-router-dom'
import Recipe from '../Choose-Meal/Recipe'
import { useMutation } from '@apollo/client'
import { REMOVE_RECIPE } from '../../utils/mutations'


const SavedRecipes = ({ recipes }) => {

    const [removeRecipe,{loading, error, data}] = useMutation(REMOVE_RECIPE)


    return (
        <div style={{ 'display': 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {recipes.map(r => {
                    let deleted = false
                    return <Recipe deleted={deleted} key={r.title} recipe={r}></Recipe>
                })}
            </div>
    )
}

export default SavedRecipes