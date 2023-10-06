import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE_GROUP } from '../../utils/queries';
import React from 'react';
import { Link } from 'react-router-dom';



import '../../styles/Login.css'

import Auth from '../../utils/auth';

function SeeMeals() {

    return (
        <div>
            <h1>Meals</h1>
            <button>
                <Link to="/meals-page">Hello World</Link>
            </button>

        </div>
    )
}



export default SeeMeals;