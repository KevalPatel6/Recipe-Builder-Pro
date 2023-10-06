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
                <p>Let's whip up something together with what you've got on hand!</p>
            </div>
            <div>
                <Link to="/ingredients"> 
                <button>Start</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;