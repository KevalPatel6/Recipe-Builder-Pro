
import Recipe from '../Choose-Meal/Recipe'

const SavedRecipes = ({ recipes }) => {

    return (
        <div style={{ 'display': 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {recipes.map(r => {
                    let deleted = false
                    return <Recipe key={r.title} recipe={r}></Recipe>
                })}
            </div>
    )
}

export default SavedRecipes