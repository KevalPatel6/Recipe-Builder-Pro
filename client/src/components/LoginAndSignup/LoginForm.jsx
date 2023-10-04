import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import '../../styles/Login.css'

import Auth from '../../utils/auth';

const LoginForm = () => {
    //FormState is the values the user is inputing into the Login Form//
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    //Handling changes to the form//
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    //Checking credentials and logging in//
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState }
            })

            //Login with the token associated with the email/password combo
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
        <>
            {/* Login Form */}
            <div id='form-container'>
                <form
                    onSubmit={handleFormSubmit}
                    autoComplete='on'>
                    <input
                        className="form-input"
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        required
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
                 {/* If an error occurs, show the error message */}
                 {error &&
                    <div id='error-message'>
                        {error.message}
                    </div>
                }
            </div>
        </>
    )
}
export default LoginForm;