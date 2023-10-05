import '../styles/CreateRecipe.css'


const AddIngredients = () => {
    return(
        <>
        <h2>Add Ingredients:</h2>
                    <form id="addIngredients-form">
                        <input title="Type in ingredients to add to this recipe" autocomplete="on" size="48" height="100"
                            maxlength="24" type="text" pattern="[A-Za-z\s\-]{2,}" name="ingredients"
                            placeholder="Add and Search Ingredients" id="searchBar" />
                    </form>
                    {/* <!-- Can replace breaks with margins in css --> */}
                    <br />
                    <br />
                    <br />
                    <div id="container-for-ingredients">
                        {/* <!-- Create a list of ingredients that were selected --> */}
                        ***List of Ingredients goes here***
                    </div>
                    <br />
                    <br />
        </>
    )
}



export default AddIngredients