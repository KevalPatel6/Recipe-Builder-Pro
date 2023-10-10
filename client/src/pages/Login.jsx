import { useState } from 'react'
import LoginForm from '../components/LoginAndSignup/LoginForm.jsx'
import SignupForm from '../components/LoginAndSignup/SignupForm.jsx'
import '../styles/login.css';

const Login = () => {
    const [activeTab, setActiveTab] = useState('Login')

    const toggleClass = (tabName) => {
        setActiveTab(tabName)
    }


    return (
        <main class="bkgrd">
            <div className='login-container'>
                <div className='title-container'>
                    <button
                        className={activeTab === 'Login' ? 'active btn' : 'btn'}
                        onClick={() => toggleClass('Login')}>Login</button>

                    <button id='signupbtn'
                        className={activeTab === 'Signup' ? 'active btn' : 'btn'}
                        onClick={() => toggleClass('Signup')}>Signup</button>

                </div>
                <div className='form-container'>
                    {activeTab === 'Login' ? <LoginForm /> : <SignupForm />}
                </div>
            </div>
        </main>
    )
}

export default Login;