import './recipe.css';

const Recipe = ({
    recipe,
    showTitle = true
}) => {
    if (!recipe) {
        return;
    }

    const { _id, title, description, ingredients, servings,
        totalTime, instructions, imageUrl, group } = recipe;

    const image = `/recipe-Imgs/${imageUrl}`;

    return (
        <div className="card">
            {showTitle && <h3>{title}</h3>}
            <div className='recipe-block'>
                <img className="recipe-img" src={image} alt={title} />
                <img className='save-icon' src="/public/icons/saved.png" alt="save"></img>
            </div>
            <div className="card-body">
                <h6>Servings {servings}</h6>
                <h5>Cook time:{totalTime}</h5>
                <div>{instructions}</div>
            </div>
            <button className='save-btn'>
                save
            </button>
        </div>
    );

};

export default Recipe;



