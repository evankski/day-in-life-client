import Photo from "../partials/Photo";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile({ currentUser, setCurrentUser }) {
  // PARAMS
  const { id } = useParams();

  // STATE
  const [photos, setPhotos] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [ownerId, setOwnerId] = useState("");

  // USE-EFFECT
  useEffect(() => {
    (async () => {
      try {
        // console.log("hello");
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
        // console.log(response.data);
        setPhotos(response.data.photos);
        setOwnerName(response.data.name);
        setOwnerId(response.data._id);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [showEdit]);

  // FUNCTION
  // Toggles delete buttons
  const onButtonClick = () => {
    setShowEdit(!showEdit);
  };

  // Deletes pictures corresponding to ID
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
      setShowEdit(true);
    } catch (err) {
      console.log(err);
    }
  };

  // COMPONENTS
  // Lists all photos of a individual user
  const userPhotos = photos.map((photo, idx) => {
    const cloudImage = `https://res.cloudinary.com/dhs1wrqhp/image/upload/w_700,h_700,c_fill/f_auto/${photo.public_id}.png`;

    return (
      <div key={`photo-${idx}`} className="polaroid">
        <Link to={`/pictures/${photo._id}`}>
          <div className="random-class">
            <img
              src={cloudImage}
              key={photo.public_id}
              className="polaroid-image"
            />
          </div>
        </Link>
        {showEdit && (
          <button
            onClick={() => handleDelete(photo._id)}
            className="delete-button"
          >
            delete
          </button>
        )}
      </div>
    );
  });
  return (
    <div>
      <h1 className="owner-name">{ownerName}</h1>
      {currentUser ? (
        ownerId === currentUser.id ? (
          <button onClick={() => onButtonClick()}>
            {showEdit ? "done editing" : "edit"}
          </button>
        ) : null
      ) : null}
      <div className="polaroid-container">{userPhotos}</div>
    </div>
  );
}
