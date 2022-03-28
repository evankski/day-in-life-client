import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Slideshow({ user }) {
  const [imageIndex, setImageIndex] = useState(0);

  // useEffect(() => {
  //         setInterval(() => {
  //         if(imageIndex > user.photos.length) {
  //             setImageIndex(0)
  //         } else {
  //             setImageIndex(imageIndex + 1)
  //         }
  //     }, 3000)
  // })

  // const interval = setInterval(() => {
  //         imageIndex+1
  //         return imageIndex
  //         }, 3000)
  // // interval()

  console.log(imageIndex);

  return (
    <>
      <Link to={`/profiles/${user._id}`}>
        <h3>{user.name}</h3>
        <h4>{user.photos.length}</h4>
          <img
            src={`https://res.cloudinary.com/dhs1wrqhp/image/upload/${user.photos[Math.floor(Math.random()*user.photos.length)].public_id}`}
            alt="user photo"
          />
          {/* <img
            src={`https://res.cloudinary.com/dhs1wrqhp/image/upload/${user.photos[0].public_id}`}
            alt="user photo"
          /> */}
        )
      </Link>
    </>
  );
}
