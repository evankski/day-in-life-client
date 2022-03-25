import { Link } from 'react-router-dom'

export default function Navbar ({ handleLogout, currentUser }) {
    // if the user is logged in
    const loggedIn = (
        <>
            {/* if the user is logged in */}
            <Link to='/feed'>Feed</Link>
            <Link to='/'>
                <span onClick={handleLogout}>Log Out</span>
            </Link>
        </>
    )
        const philIsCool = ["yeah"]
    // if the user is logged out
    const loggedOut = (
        <>
            {/* if the user is logged out */}
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </>
    )

    return (
        <nav>
            <Link to='/'>A Day in the Life</Link>
            {/* for ease of ues navigating during development */}

            <Link to='/about'>  About.jsx  </Link>
            <Link to='/feed'>  Feed.jsx  </Link>
            <Link to='/profiles/:id'>  Profile.jsx  </Link>
            <Link to='/pictures/:id'>  Picture.jsx  </Link>
            
            {/* for ease of ues navigating during development */}

            {currentUser ? loggedIn : loggedOut}
        </nav>
    )
}