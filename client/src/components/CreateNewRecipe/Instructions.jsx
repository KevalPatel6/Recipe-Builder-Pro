import '../styles/CreateRecipe.css'


const Instructions = () => {
    return (
        <>

            <h2>Instructions</h2>

            <textarea cols="50" maxlength="4096" name="instructions"
                placeholder="Add instructions to your Recipe" wrap="soft" className="instructions" required>
            </textarea>

        </>
    )
}

export default Instructions