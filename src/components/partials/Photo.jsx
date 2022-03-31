import { Link } from "react-router-dom";

export default function Photo({ photo, handleDelete, showEdit, cloudImage }) {
  return (
    <div className="polaroid animate__animated animate__fadeIn">
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
}
