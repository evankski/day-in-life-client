import { Link } from 'react-router-dom'

export default function Photo({ photo }) {
    return (
        <>
            <Link to={`/pictures/${photo._id}`}>
                <img src={`https://res.cloudinary.com/dhs1wrqhp/image/upload/${photo.public_id}`} alt="user photo" /> 
            </Link>
        </>
    )
}