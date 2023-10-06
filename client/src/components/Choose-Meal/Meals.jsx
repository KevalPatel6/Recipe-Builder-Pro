import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE_GROUP } from '../../utils/queries';


import '../../styles/Login.css'

import Auth from '../../utils/auth';

function SeeMeals() {

    return (
        <div>
            <h1>Meals</h1>
            <button>
                <Link to="/meals-page"></Link>
            </button>

        </div>
    )
}



export default SeeMeals;