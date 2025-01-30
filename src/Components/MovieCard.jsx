import React, { useState } from "react";
import { useMovie } from "../context/MovieContext.jsx";
import { useState, useEffect, useRef } from "react";
import ratingIcon from "../assets//MovieCardIcons/movieCardRatingStar.svg";
import favoriteIcon from "../assets//MovieCardIcons/movieCardStar.svg";
import eyeIcon from "../assets/MovieCardIcons/movieCardEye.png";
import { Icon } from "./Icon/Icon.jsx";
import { MovieDetailsDialog } from "../Pages/MovieDetailsDialog/MovieDetailsDialog.jsx";

export const MovieCard = () => {
  const {
    movies,
    formatRating,
    formatMovieTitle,
    addToWatchList,
    addToFavorites,
  } = useMovie();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dialogRef = useRef(null);

  const handleOpenDialog = (movie) => {
    setSelectedMovie(movie);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedMovie(null);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!isDialogOpen && dialogRef.current) {
      dialogRef.current.close();
    }
    console.log("selected movie:", selectedMovie);
    console.log("is dialog open:", isDialogOpen);
    console.log("dialog ref:", dialogRef);
  }, [selectedMovie, isDialogOpen]);

  return (
    <div className="movie-card-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <div className="movie-image-wrapper">
            <img
              srcSet={`
								https://image.tmdb.org/t/p/w185${movie.poster_path} 185w,
								https://image.tmdb.org/t/p/w342${movie.poster_path} 342w,
								`}
              sizes="(max-width: 1023px) 185px,
												342px"
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={`${movie.title} poster`}
              onClick={() => handleOpenDialog(movie)}
            />
          </div>

          <div className="movie-info-wrapper">
            <div className="rating-wrapper">
              <img src={ratingIcon} alt="star icon" />
              <span>{formatRating(movie.vote_average)}</span>
            </div>

            <div className="title-wrapper">
              <p>{formatMovieTitle(movie.title, 15)}</p>
              <div className="title-images">
                <Icon
                  onClick={() => addToWatchList(movie)}
                  type="button"
                  url={eyeIcon}
                  alt="heart icon"
                  className="watchlist-button"
                />
                <Icon
                  onClick={() => addToFavorites(movie)}
                  type="button"
                  url={favoriteIcon}
                  alt="start icon"
                  className="favorite-button"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {isDialogOpen && selectedMovie && (
        <MovieDetailsDialog
          onClose={handleCloseDialog}
          movie={selectedMovie}
          ref={dialogRef}
        />
      )}
    </div>
  );
};
