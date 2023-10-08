import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_RECIPE } from "../utils/queries";
import "../styles/viewRecipe.css";
import { useState } from "react";
import "../assets/background-Imgs/viewPage.png";
import { devDebug } from "@apollo/client/invariantErrorCodes";
// import {Nav} from 'react-router-dom'

const ViewRecipe = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null)

    const { loading, data } = useQuery(GET_RECIPE, {
        variables: { recipeId: recipeId },
        onCompleted: ({ getRecipe }) => {
            setRecipe(getRecipe)
        }
    });

    if (loading) {
        return (
            <div>
                Loading...
                <img src="../../src/assets/gifs/spinner.gif" alt="Spinning Loading Symbol" />
            </div>
        );
    }

    if (!recipe) {
        return (
            <div>
                No recipe found
            </div>
        );
    }

    // const {title} = recipe;
    const { _id, title, description, ingredients, servings,
        totalTime, instructions, imageUrl, group } = recipe;
    const image = `/recipe-Imgs/${imageUrl}`;

    return (
        <>
            <div className="left-half" style={{ 'background': 'viewPage' }}>

                <img className="viewRecipe-img" src={image} alt={title} />

            </div>
            <div className="right-half" >
                <h1 style={{ 'color': 'white' }}>{title}</h1>
                <h6>Servings {servings}</h6>
                <h5>Prep time:{totalTime}</h5>

                <div style={{ 'color': 'white' }}>
                    {ingredients.map((i) => {
                        debugger
                        const value = i.name
                        debugger
                        return (
                            <li key={i._id}
                                value={value}>
                                {value}
                            </li>
                        );
                    })}
                </div>

                {/* <div>{ingredients}</div> */}
                <div >
                    <h4>Instructions:</h4>
                    <p className="instructions"> {instructions}</p>
                </div>

            </div>
            <div className="clearfix">

            </div>
        </>
    )
}

export default ViewRecipe;
