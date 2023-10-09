import { Link } from 'react-router-dom'


const SavedRecipes = ({ recipes }) => {


    return (
        <div style={{ 'display': 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {recipes.map(r => {
                    return <Recipe key={r.title} recipe={r}></Recipe>
                })}
            </div>
    )
}

export default SavedRecipes