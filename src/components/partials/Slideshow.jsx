import { Link } from 'react-router-dom'

export default function Slideshow({ user }) {
    return (
        <>
            <Link to={`/profiles/${user._id}`}>
                <h3>{user.name}</h3>
                <h4>{user.photos.length}</h4>
                <img src={`https://res.cloudinary.com/dhs1wrqhp/image/upload/${user.photos[0].public_id}`} alt="user photo" /> 
            </Link>
        </>
    )
}