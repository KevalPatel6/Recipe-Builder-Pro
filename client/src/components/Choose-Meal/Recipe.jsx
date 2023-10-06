
const Recipe = ({
    recipe,
    showTitle = true
}) => {
    if (!recipe) {
        return;
    }

    const { _id, title, description, ingredients, servings,
        totalTime, instructions, imageUrl, group } = recipe;

    return (
        <div style={{ margin: 30 }}>
    
            {showTitle && <h3>{title}</h3>}
            <div className="card mb-3">
            <img src={imageUrl} alt={title} />
                <div>{description}</div>
                <div>{ingredients}</div>
                <div>{servings}</div>
                <div>{totalTime}</div>
                <div>{instructions}</div>
                <div>{group}</div>
            </div>
        </div>

    ); 

};

export default Recipe;
