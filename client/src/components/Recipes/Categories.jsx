function Pantry() {
    return (
        <div className="header-container">
            <div id="searchContainer" class="container">
                <div>
                    <h1>Ingredient List</h1>
                    <input type="text" id="ingredientInput" placeholder="Enter ingredient" />
                    <button onclick="addIngredient()">Add</button>
                </div>

            </div>

            <div>
                <div id="ingredientList">

                </div>
            </div>
        </div>

    )
}

export default Pantry;