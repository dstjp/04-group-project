import Ratingscore from "./Ratingscore";
import React, { useState, useEffect } from "react";

export default function RatingPopUp( { movie, onClose, onSubmit } ) {
  const [rating, setRating] = useState(movie.userRating || null);

  useEffect(() => {
    setRating(movie.userRating || null);
  }, [movie]);

  const handleRating = (value) => {
    setRating(value);
  }

  const handleSubmit = () => {
    console.log(`Rating: ${rating} for movie: ${movie.title}`);
    onSubmit(movie.id, rating);
    movie.userRating = rating;
    onClose();
  }

  const handleRevoke = () => {
    setRating(null);
    onSubmit(movie.id, null);
    /* movie.userRating = 0; */
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