import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'
import {useQuery} from '@apollo/client'
import {QUERY_ME} from '../../utils/queries'

function Nav() {
    const {data} = useQuery(QUERY_ME)
    
    return (
        <div className="nav-container" style={{ background: 'black' }}>
            <nav>
                <ul>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    {Auth.loggedIn() ? (
                        <>
                        <Link to={'profile/:profileId/myrecipes'}>
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
                                    <li>{data.me.username}</li>
                                </Link>
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