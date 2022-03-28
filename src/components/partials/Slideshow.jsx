import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Slideshow({ user }) {
  const [imageIndex, setImageIndex] = useState(0);

  // Randomizes the index depending on the amount of photos uploaded by a user
  useEffect(() => {
          setInterval(() => {
          setImageIndex(Math.floor(Math.random()*user.photos.length))
      }, 3000)
  }, [])


  return (
    <>
      <Link to={`/profiles/${user._id}`}>
        <h3>{user.name}</h3>
        <h4>{user.photos.length}</h4>
          {/* <img
            src={`https://res.cloudinary.com/dhs1wrqhp/image/upload/${user.photos[Math.floor(Math.random()*user.photos.length)].public_id}`}
            alt="user photo"
          /> */}
          <img
            src={`https://res.cloudinary.com/dhs1wrqhp/image/upload/${user.photos[imageIndex].public_id}`}
            alt="user photo"
            width={'20%'}
            id="userImg"
            // className="animate__animated animate__fadeIn animate__infinite animate__slower"
          />
      </Link>
    </>
  );
}
