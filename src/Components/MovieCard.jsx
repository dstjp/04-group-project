import React from "react";
import { useMovie } from "../context/MovieContext.jsx";
import { useDialog } from "../context/DialogContext.jsx";
import ratingIcon from "../assets//MovieCardIcons/movieCardRatingStar.svg";
import favoriteIcon from "../assets//MovieCardIcons/movieCardStar.svg";
import filledFavoriteIcon from "../assets//FavoriteListIcon/filledStar.svg";
import filledEyeIcon from "../../src/assets/MovieCardIcons/movieCardEyeFilled.png";
import eyeIcon from "../assets/MovieCardIcons/movieCardEye.png";
import noPosterFound from "../assets/MovieCardIcons/noPosterFound.png";
import { Icon } from "./Icon/Icon.jsx";
import { MovieDetailsDialog } from "../Pages/MovieDetailsDialog/MovieDetailsDialog.jsx";

// breaking down the MovieCard component into smaller components this way makes it easier to read and maintain

// component for the movie image
const MovieImage = ({ movie, handleOpenDialog }) => (
  <div className="movie-image-wrapper">
    <img
      src={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
          : noPosterFound
      }
      alt={`${movie.title} poster`}
      className="movie-image"
      onClick={() => handleOpenDialog(movie)}
    />
  </div>
);

// component for the movie info
const MovieInfo = ({
  movie,
  formatRating,
  formatMovieTitle,
  addToWatchList,
  addToFavorites,
  filledStar,
  setFilledStar,
  filledEye,
  setFilledEye,
}) => (
  <div className="movie-info-wrapper">
    <div className="rating-wrapper">
      <img src={ratingIcon} alt="star icon" />
      <span>{formatRating(movie.vote_average)}</span>
    </div>
    <div className="title-wrapper">
      <p>{formatMovieTitle(movie.title, 14)}</p>
      <div className="title-images">
        <Icon
          onClick={() => addToWatchList(movie)}
          onMouseEnter={() => setFilledEye(true)}
          url={filledEye[movie.id] ? filledEyeIcon : eyeIcon}
          type="button"
          alt="watchlist icon"
          className="watchlist-button"
        />
        <Icon
          onClick={() => addToFavorites(movie)}
          onMouseEnter={() => setFilledStar(true)}
          type="button"
          url={filledStar[movie.id] ? filledFavoriteIcon : favoriteIcon}
          alt="favorite icon"
          className="favorite-button"
        />
      </div>
    </div>
  </div>
);

// component for the movie card item
const MovieCardItem = ({
  movie,
  formatRating,
  formatMovieTitle,
  addToWatchList,
  addToFavorites,
  filledStar,
  setFilledStar,
  filledEye,
  setFilledEye,
  handleOpenDialog,
}) => (
  <div className="movie-card" key={movie.id}>
    <MovieImage movie={movie} handleOpenDialog={handleOpenDialog} />
    <MovieInfo
      movie={movie}
      formatRating={formatRating}
      formatMovieTitle={formatMovieTitle}
      addToWatchList={addToWatchList}
      addToFavorites={addToFavorites}
      filledStar={filledStar}
      setFilledStar={setFilledStar}
      filledEye={filledEye}
      setFilledEye={setFilledEye}
    />
  </div>
);

export const MovieCard = () => {
  const {
    movies,
    formatRating,
    formatMovieTitle,
    addToWatchList,
    addToFavorites,
    filledStar,
    setFilledStar,
    filledEye,
    setFilledEye,
  } = useMovie();

  const {
    isDialogOpen,
    selectedDialogMovie,
    dialogRef,
    handleOpenDialog,
    handleCloseDialog,
    isInfoButtonClicked,
  } = useDialog();

  return (
    <div className="movie-card-container">
      {movies.map((movie) => (
        <MovieCardItem
          key={movie.id}
          movie={movie}
          formatRating={formatRating}
          formatMovieTitle={formatMovieTitle}
          addToWatchList={addToWatchList}
          addToFavorites={addToFavorites}
          filledStar={filledStar}
          setFilledStar={setFilledStar}
          filledEye={filledEye}
          setFilledEye={setFilledEye}
          handleOpenDialog={handleOpenDialog}
        />
      ))}

      {isDialogOpen && selectedDialogMovie && isInfoButtonClicked && (
        <MovieDetailsDialog
          onClose={handleCloseDialog}
          movie={selectedDialogMovie}
          ref={dialogRef}
        />
      )}
    </div>
  );
};
