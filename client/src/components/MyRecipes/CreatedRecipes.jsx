import Recipe from '../Choose-Meal/Recipe'

const CreatedRecipes = ({ recipes }) => {


    return (
        <div style={{ 'display': 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {recipes.map(r => {
                return <Recipe key={r.title} recipe={r}></Recipe>
            })}
        </div>
    )
}

export default CreatedRecipes