import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_RECIPE } from "../utils/queries";
import "../styles/viewRecipe.css";

const ViewRecipe = () => {
    const { recipeId } = useParams();


    const { loading, data } = useQuery(GET_RECIPE, {
        variables: { recipeId: recipeId },
        onCompleted: (data) => {
            // Handle the data here if needed
        }
    });

    const recipe = data?.recipe || {};

    if (loading) {
        return (
            <div>
                Loading...
                <img src="../../src/assets/gifs/spinner.gif" alt="Spinning Loading Symbol" />
            </div>
        );
    }


    return (
        <>
            <div className="left-half">
                <h1>Left Half</h1>
                {/* <img className="recipe-img" src={image} alt={title} /> */}

            </div>
            <div className="right-half">
                <h1>Right f</h1>
                {/* <h1>{title}</h1>
                <h3>{ingredients}</h3>
                <p> {instructions}</p> */}

                <h1>Strawberry pastry</h1>
                <ul>
                    <li>
                        ingredients
                    </li>
                </ul>
                <div >
                    <h4>Instructions:</h4>
                    <p className="instructions"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod harum itaque nesciunt at ab, dolor sequi eum quidem totam eveniet impedit. Natus a eligendi eos sequi voluptatem dignissimos esse.</p>
                </div>

            </div>
                     <div className="clearfix">

            </div>
        </>
    )
}

export default ViewRecipe;
