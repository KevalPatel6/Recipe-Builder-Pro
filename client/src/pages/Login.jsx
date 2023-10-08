import {useState} from 'react'
import LoginForm from '../components/LoginAndSignup/LoginForm.jsx'
import SignupForm from '../components/LoginAndSignup/SignupForm.jsx'

const Login = () => {
    const [activeTab, setActiveTab] = useState('Login')

    const toggleClass = (tabName) =>{
        setActiveTab(tabName)
    }
    
    
    return (
        <main>
            <div className='login-container'>
                <div className='title-container'>
                    <h1 
                    className={activeTab === 'Login' ? 'active btn' : 'btn'}
                    onClick={(event)=>toggleClass('Login')}>Login</h1>

                    <h1>/</h1>

                    <h1 
                    className={activeTab === 'Signup' ? 'active btn' : 'btn'} 
                    onClick={(event)=>toggleClass('Signup')}>Signup</h1>
                    
                </div>
                <div className='form-container'>
                    {activeTab === 'Login' ? <LoginForm/> : <SignupForm/>}
                </div>
            </div>
        </main>
    )
}

export default Login;