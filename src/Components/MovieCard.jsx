import { useMovie } from "../context/MovieContext.jsx";
import ratingIcon from "../assets//MovieCardIcons/movieCardRatingStar.svg";
import favoriteIcon from "../assets//MovieCardIcons/movieCardStar.svg";
import eyeIcon from "../assets/MovieCardIcons/movieCardEye.png";

import { Icon } from "./Icon/Icon.jsx";

export const MovieCard = () => {
  const { movies, formatRating, formatMovieTitle, addToWatchList } = useMovie();

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
                  onClick={null}
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
    </div>
  );
};
