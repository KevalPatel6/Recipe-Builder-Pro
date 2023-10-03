import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import '../../styles/Login.css'

import Auth from '../../utils/auth';

const LoginForm = () => {
    //FormState is the values the user is inputing into the Login Form//
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    
    const [login, { error, data }] = useMutation(LOGIN_USER);

    //Update the state based on form input//
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState }
            })

            Auth.login(data.login.token)

        } catch (err) {
            console.error(err)
        }

        setFormState({
            email: '',
            password: ''
        })

    }

    return (
        <main>
            <div id="login-container">
                <div id='title-container'>
                <h1>Login</h1>
                <h1>/</h1>
                <Link to='/signup'>
                    <h1>Signup</h1>
                    </Link>
                </div>
                <div id='form-container'>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-block btn-info"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </main>
    )
}
export default LoginForm;