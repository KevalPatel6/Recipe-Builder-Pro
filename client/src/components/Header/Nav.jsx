import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

function Nav() {
    return (
        <div className="nav-container" style={{ background: 'black' }}>
            <nav>
                <ul>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link to={'profile/:profileId/myrecipes'}>
                        <li>My Recipes</li>
                    </Link>
                    <Link to>
                        <li to={'/loginAndSignup'}>Login</li>
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
                                    <li to={'/loginAndSignup'}>Login</li>
                                </Link>
                            </>
                            )}
                    </div>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;