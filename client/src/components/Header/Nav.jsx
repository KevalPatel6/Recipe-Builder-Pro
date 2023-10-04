import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <ul>
                    <Link to={'/'}>
                    <li>Home</li>
                    </Link>
                    <div>
        {/*If logged in, get profile of the user and display that. If not, show the Login button */}
                    {Auth.loggedIn() ? (
                        <>
                         <Link id="username" to="/me">
                    {Auth.getProfile().authenticatedPerson.username}
                       </Link>
                        </>)
                        :
                        (<>
                    <Link to>
                    <li to={'/login-signup'}>Login</li>
                    </Link> 
                        </>)
                    }
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;