import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE_GROUP } from '../../utils/queries';


// import '../../styles/Login.css'

import Auth from '../../utils/auth';

function SeeDesserts() {

    return (
        <div>
            <h1>Desserts</h1>
            <button>
                <Link to="/desserts-page"></Link>
            </button>

        </div>
    )
}



export default SeeDesserts;