import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE_GROUP } from '../../utils/queries';

// import '../../styles/Login.css'

import Auth from '../../utils/auth';

function SeeDrinks() {

    return (
        <div>
            <h1>Drinks</h1>
            <button>
                <Link to="/drinks-page"></Link>
            </button>

        </div>
    )
}



export default SeeDrinks;