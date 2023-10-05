


const SavedRecipes = ({recipes}) => {


    return (
        <>
    {/*Need to map over the users saved recipes */}
        <div className="recipe-card">
            {/* <!-- Recipe Image --> */}
            <div id="image-container">
                <img className="recipe-image" src="./assets/generic-meal.jpg" alt="Recipe Image" />
                <button className="save-icon btn">
                    <svg className='save-icon' fill="#000000" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z" /></svg>
                </button>
            </div>
            {/* <!-- Recipe Content --> */}
            <div className="recipe-content">
                {/* <!-- Recipe Title --> */}
                <h2 className="recipe-title">Title of Recipe</h2>

                {/* <!-- Recipe Description --> */}
                <p className="recipe-description">A mouthwatering and easy-to-make recipe that you'll love.</p>

                {/* <!-- Link to Recipe --> */}
                <a className="recipe-link" href="">View More</a>
            </div>
        </div>
        </>
    )
}

export default SavedRecipes