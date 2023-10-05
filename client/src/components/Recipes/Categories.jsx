function Categories() {
    return (
        <div className="header-container">
            <div id="searchContainer" class="container">
                <h1>What are you in the mood for ? </h1>

            </div>

            <div id="categoryContainer">
                
                <div>
                    <Link to={'/recipes'}>
                        <img src="" alt="" />
                        <p></p>
                    </Link>
                </div>
                
                <div>
                    <Link to={'/meals'}>
                        <img src="" alt="" />
                        <p></p>
                    </Link>
                </div>
                
                <div>
                    <Link to={'/desserts'}>
                        <img src="" alt="" />
                        <p></p>
                    </Link>
                </div>
                <div>
                    <Link to={'/drinks'}>
                        <img src="" alt="" />
                        <p></p>
                    </Link>  
                </div>
            </div>
        </div>

    )
}

export default Categories;