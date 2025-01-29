import Ratingscore from "./Ratingscore";
import React, { useState } from "react";

export default function RatingPopUp({ movie, onClose }) {
  const [rating, setRating] = useState(null);

  const handleRating = (value) => {
    setRating(value);
  }

  const handleSubmit = () => {
    console.log(`Rating: ${rating}`);
      onClose();
  }

  const handleRevoke = () => {
    setRating(null);
  }

  return (
    <div className="rating-popup">
      <h2>Rate {movie.title}</h2>
      <div className="rating-popup-content">
        <Ratingscore onRatingChange={handleRating} />
        <button onClick={handleSubmit}>Submit</button>
        {rating && <button onClick={handleRevoke}>Revoke</button>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}