import React from "react";
import { useMovie } from "../../context/MovieContext";
import { Icon } from "../../Components/Icon/Icon";
import ratingIcon from "../../assets/MovieCardIcons/movieCardRatingStar.svg";
import collect from "../../assets/watchlistIcons/collect.svg";
import trash from "../../assets/watchlistIcons/trash.svg";
import Info from "../../assets/watchlistIcons/Info.svg";
import star from "../../assets/watchlistIcons/star.svg";
import rectangle from "../../assets/watchlistIcons/rectangle.svg";
import RatingPopUp from "../FavoriteList/Ratingscore/RatingPopUp";

function WatchList() {
  const { watchList, removeFromWatchList, formatRating } = useMovie();
  const [selectedMovie, setSelectedMovie] = React.useState(null);


  const handleRatingClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopUp = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="watchlist-page">
      <div className="watchlist-header">
        <Icon url={rectangle} alt="rectangle" className="watchlist-rectangle" />
        <h1 className="watchlist-title">WatchList</h1>
      </div>
      <div className="watchlist-container">
        {watchList.length === 0 ? (
          <div className="watchlist-empty">
            <img src={collect} alt="collect" />
            <p className="nth-words">
              save shows and movies to keep track of what you want to watch
            </p>
          </div>
        ) : (
          watchList.map((movie) => (
            <div key={movie.id} className="watchlist-movie">
              <div className="watchlist-movie-img">
                <div className="watchlist-remove-btn">
                  <Icon
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromWatchList(movie.id);
                    }}
                    url={trash}
                    type="button"
                    alt="remove"
                    className="remove-icon"
                  />
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                  alt={`${movie.title} poster`}
                />
              </div>
              <div className="watchlist-movie-text">
                <div className="watchlist-movie-info">
                  <div className="watchlist-rating-wrapper">
                    <h3>{movie.title}</h3>
                    <div className="watchlist-rating">
                      <img
                      src={ratingIcon}
                      alt="star icon"
                      onClick={() => handleRatingClick(movie)}
                      />
                      <p>Rate!</p>
                    </div>
                    <span>{formatRating(movie.vote_average)}</span>
                  </div>
                  <p className="watchlist-overview">Brief: {movie.overview}</p>
                </div>
                <div className="watchlist-rate-btns">
                  <Icon url={Info} alt="info" className="watchlist-info-icon" />
                  <Icon url={star} alt="star" className="watchlist-star-icon" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {selectedMovie && (
        <RatingPopUp movie={selectedMovie} onClose={handleClosePopUp} />
      )}
    </div>
  );
}

export default WatchList;