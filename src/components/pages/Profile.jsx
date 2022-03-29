import Photo from "../partials/Photo";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile({ currentUser, setCurrentUser }) {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [ownerId, setOwnerId] = useState("");

  useEffect(() => {
    (async () => {
      try {
        console.log("hello");
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
        setOwnerName(response.data.name);
        setOwnerId(response.data._id);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [showEdit]);

  const onButtonClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDelete = async (photoId) => {
    try {
      const token = localStorage.getItem("jwt");
      const options = {
        headers: {
          Authorization: token,
        },
      };
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/pictures/${photoId}`,
        options
      );
      setShowEdit(false);
      setShowEdit(true)
    } catch (err) {
      console.log(err);
    }
  };

  const userPhotos = photos.map((photo) => {
    const cloudImage = `https://res.cloudinary.com/dhs1wrqhp/image/upload/v1593119998/${photo.public_id}.png`;

    return (
      <div key={photo.public_id}>
        <Link to={`/pictures/${photo._id}`}>
          <img src={cloudImage} key={photo.public_id} />
        </Link>
        {showEdit && (
          <button onClick={() => handleDelete(photo._id)}>delete</button>
        )}
      </div>
    );
  });
  return (
    <div>
      <h1>{ownerName}</h1>
      {currentUser ? (
        ownerId === currentUser.id ? (
          <button onClick={() => onButtonClick()}>
            {showEdit ? "done editing" : "edit"}
          </button>
        ) : null
      ) : null}

      {userPhotos}
    </div>
  );
}
