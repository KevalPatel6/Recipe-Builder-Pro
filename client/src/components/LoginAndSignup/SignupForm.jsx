import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import "./LoginForm.css";

const SignUpForm = () => {
    const [userFormData, setUserFormData] = useState(
        {
            username: '',
            email: '',
            password: ''
        });

    const [addUser, { error }] = useMutation(ADD_USER);


    //Update the state based on form input//
    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserFormData({
            ...userFormData,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            })

            //Login with created token after the user signs up//
            Auth.login(data.addUser.token)

        } catch (err) {
            console.error(err)
        }
    }


    return (
        <>
            {/* Signup Form */}
            <div id='submit-container'>
                <form class="login-form" onSubmit={handleFormSubmit}>
                    <input
                        className="login-form-input"
                        placeholder="Enter A Username"
                        name="username"
                        type="text"
                        maxLength='24'
                        pattern='[A-Za-z0-9]{3,24}'
                        required
                        value={userFormData.username}
                        onChange={handleChange}
                        title='Your username must be between 3-24 characters and can only contain letters and numbers'
                    />
                    <input
                        className="login-form-input"
                        placeholder="Enter an Email"
                        name="email"
                        type="email"
                        required
                        value={userFormData.email}
                        onChange={handleChange}
                    />
                    <input
                        className="login-form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        required
                        value={userFormData.password}
                        onChange={handleChange}
                    />
                    <button
                        className="btn btn-block btn-info login-submit-btn"
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

export default SignUpForm