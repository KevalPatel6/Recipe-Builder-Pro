import React from 'react';
// import '../styles/home'; // Import your CSS file


const Home = () => {
    return (
        <div className="home-container">
            <div id="searchContainer" className="container">

            </div>

            <div id="welcome" style={{ 'color': 'white', 'fontSize': '50px' }}>
                <h1>Welcome</h1>
                <p>Let's whip up something together with what you've got on hand!</p>
                <p>To get started, lets Login</p>
            </div>
        </div>
    )
}

export default Home;