import React from 'react';
// import '../styles/home'; // Import your CSS file

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
                <Link to="/Choose-Meal">
                    <button className="startbtn">Start</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;