import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../../../utils/queries'
import './nav.css'

function Nav() {
    const { loading, data } = useQuery(QUERY_ME)

    return (
        <div id="recipe-navbar" className="nav-container">
            <nav>
                <ul className="navbar-items">
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to={'/me/myrecipes'}>
                                <li>My Recipes</li>
                            </Link>
                        </>)
                        :
                        (<>
                            <Link to={'/recipes'}>
                                <li>All Recipes</li>
                            </Link>
                        </>
                        )}
                    {/*If logged in, get profile of the user and display that. If not, show the Login button */}
                    {Auth.loggedIn() ? (
                        <>
                            <Link id="username" to={"/me"}>
                                <li>{loading ? `Loading` : data?.me?.username}</li>
                            </Link>
                            <li
                                onClick={() => Auth.logout()}>Logout
                            </li>
                        </>)
                        :
                        (<>
                            <Link to={'/loginAndSignup'}>
                                <li >Login</li>
                            </Link>
                        </>
                        )}
                </ul>
            </nav>
        </div>
    )
}
export default Nav;