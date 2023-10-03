import '../../styles/Login.css'

import Auth from '../../utils/auth';

const Login = () => {
    return (
        <main>
            <div id="login-container">
                <div id='title-container'>
                    <h1>Login</h1>
                    <h1>/</h1>
                    <h1>Signup</h1>
                </div>
                <div id='form-container'>
                    <LoginForm/>
                </div>
            </div>
        </main>
    )
}
export default Login;