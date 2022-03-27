// import { Link } from

export default function Photo({ photo }) {
    return (
        <>
            <img src={`https://res.cloudinary.com/dhs1wrqhp/image/upload/${photo.public_id}`} alt="user photo" /> 
        </>
    )
}