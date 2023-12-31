import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div></div>
            <h1>Welcome</h1>

            {/* <div id="searchContainer" className="container">
            </div> */}

            <div className='welcome-container'>
                <div id="welcome" >
                    <p>Let's check out What we have available to you now</p>
                    <p>If you would like to specify by ingredients that you may have on hand, please login</p>
                </div>
                <Link to="/EnterIngredients" className="enterButton"><button >What's in your kitchen?</button></Link>
                {/* <Link to="/Choose-Meal"></Link> */}
            </div>
        </div>
    )
}

export default Home;