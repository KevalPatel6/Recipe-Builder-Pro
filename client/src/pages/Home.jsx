import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div id="searchContainer" className="container">

            </div>

            <div id="welcome" style={{ 'color': 'white', 'fontSize': '50px' }}>
                <h1>Welcome</h1>
                <p>Let's check out What we have available to you now</p>
                <p>If you would like to specify by ingredients that you may have on hand, please login</p>
            </div>
            <div>
                <Link to="/Choose-Meal"> 
                <button>Start</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;