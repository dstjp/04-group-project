import Ratingscore from "./Ratingscore";
import React, { useState, useEffect } from "react";

export default function RatingPopUp({ movie, onClose, onSubmit }) {
  const [rating, setRating] = useState(movie.userRating || null);

  useEffect(() => {
    setRating(movie.userRating || null);
  }, [movie]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    console.log(`Rating: ${rating} for movie: ${movie.title}`);
    onSubmit(movie.id, rating);
    movie.userRating = rating;
    onClose();
  };

  const handleRevoke = () => {
    setRating(null);
    onSubmit(movie.id, null);
  };

  return (
    <div className="rating-popup">
      <h2>Rate {movie.title}</h2>
      <div className="rating-popup-content">
        <Ratingscore onRatingChange={handleRating} />
        <button aria-label="rate movie button" onClick={handleSubmit}>
          Submit
        </button>
        {rating && (
          <button aria-label="revoke rating button" onClick={handleRevoke}>
            Revoke
          </button>
        )}
        <button aria-label="close rating page button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
