import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <ul>
                    <Link to={'/'}>
                    <li>Home</li>
                    </Link>
                    <Link to>
                    <li to={'/loginAndSignup'}>Login</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;