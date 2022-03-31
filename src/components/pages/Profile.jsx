import Photo from "../partials/Photo";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile({ currentUser }) {
  // PARAMS
  const { id } = useParams();

  // STATE
  const [photos, setPhotos] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [ownerId, setOwnerId] = useState("");
  const [profilePic, setProfilePic] = useState("");

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
        setProfilePic(response.data.profile_url);
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
        `${process.env.REACT_APP_SERVER_URL}/api-v1/users/${photoId}`,
        options
      );
      setShowEdit(false);
      setShowEdit(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteProfile = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const options = {
        headers: {
          Authorization: token,
        },
      };
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/users/${ownerId}`,
        options
      );
    } catch (err) {
      console.log(err);
    }
  };

  const currentUserPic = `https://res.cloudinary.com/dhs1wrqhp/image/upload/w_200,h_200,c_fill/f_auto/${profilePic}.png`;
  // COMPONENTS
  // Lists all photos of a individual user
  const userPhotos = photos.map((photo, idx) => {
    const cloudImage = `https://res.cloudinary.com/dhs1wrqhp/image/upload/w_200,h_200,c_fill/f_auto/${photo.public_id}.png`;

    return (
      <Photo
        key={`photo-${idx}`}
        photo={photo}
        cloudImage={cloudImage}
        handleDelete={handleDelete}
        showEdit={showEdit}
      />
    );
  });
  return (
    <div>
      <h1 className="owner-name">{ownerName}</h1>
      <img src={currentUserPic} className="profile-pic" />
      {currentUser ? (
        ownerId === currentUser.id ? (
          <>
            <Link to={`/uploadprofilepic/${ownerId}`}>Update Your Picture</Link>
            <button onClick={() => onButtonClick()}>
              {showEdit ? "done editing" : "edit"}
            </button>
          </>
        ) : null
      ) : null}
      <div className="polaroid-container">{userPhotos}</div>
      {showEdit ? (
        <button onClick={() => handleDeleteProfile()}>DELETE PROFILE</button>
      ) : (
        <></>
      )}
    </div>
  );
}
