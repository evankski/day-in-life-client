import { Link } from 'react-router-dom'

export default function Navbar ({ handleLogout, currentUser }) {
    // if the user is logged in
    const loggedIn = (
        <>
            {/* if the user is logged in */}
            <Link to='/feed' className='nav-link'>Feed</Link>
            <Link to='/' className='nav-link'>
                <span onClick={handleLogout}>Log Out</span>
            </Link>
        </>
    )
    // if the user is logged out
    const loggedOut = (
        <>
            {/* if the user is logged out */}
            <Link to='/register' className='nav-link'>Sign Up</Link>
            <Link to='/login' className='nav-link'>Log In</Link>
        </>
    )

    return (
        <nav>
            <Link to='/' className='nav-link'>A Day in the Life</Link>
            {/* for ease of ues navigating during development */}

            <Link to='/about' className='nav-link'>  About  </Link>
            <Link to='/feed' className='nav-link'>  Feed  </Link>
            <Link to='/profiles/:id' className='nav-link'>  Profile  </Link>
            <Link to='/pictures/:id' className='nav-link'>  Picture  </Link>
            
            {/* for ease of ues navigating during development */}

            {currentUser ? loggedIn : loggedOut}
        </nav>
    )
}