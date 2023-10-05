import '../../styles/Login.css'
import {useState} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import '../../styles/Login.css'

import Auth from '../../utils/auth';

const Login = () => {
    const [activeTab, setActiveTab] = useState('Login')

    const toggleClass = (tabName) =>{
        setActiveTab(tabName)
    }
    
    
    return (
        <main>
            <div id="login-container">
                <div id='title-container'>
                    <h1 
                    className={activeTab === 'Login' ? 'active btn' : 'btn'}
                    onClick={toggleClass('Login')}>Login</h1>
                    <h1>/</h1>
                    <h1 
                    className={activeTab === 'Signup' ? 'active btn' : 'btn'} 
                    onClick={()=>toggleClass('Signup')}>Signup</h1>
                </div>
                <div id='form-container'>
                    {activeTab === 'Login' ? <LoginForm/> : <SignupForm/>}
                </div>
            </div>
        </main>
    )
}

export default Login;