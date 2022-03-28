import Photo from "../partials/Photo";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("jwt");
        // console.log(token);
        const options = {
          headers: {
            Authorization: token,
          },
        };
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api-v1/users/${id}`,
          options
        );
        console.log(response.data);
        setPhotos(response.data.photos);
        setUserName(response.data.name);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const userPhotos = photos.map((photo, idx) => {
    const cloudImage = `https://res.cloudinary.com/dhs1wrqhp/image/upload/v1593119998/${photo.public_id}.png`;

    return (
      <div key={photo.public_id}>
        <Link to={`pictures/${photo.public_id}`}>
          <img src={cloudImage} key={photo.public_id} />;
        </Link>
      </div>
    );
  });
  return (
    <div>
      <h1>T{userName}</h1>
      {userPhotos}
    </div>
  );
}
