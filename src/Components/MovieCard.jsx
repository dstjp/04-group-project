import { useMovie } from "../context/MovieContext.jsx";
import ratingIcon from "../assets//MovieCardIcons/movieCardRatingStar.svg";
import favoriteIcon from "../assets//MovieCardIcons/movieCardStar.svg";
import eyeIcon from "../assets/MovieCardIcons/movieCardEye.png"

import { Icon } from "./Icon.jsx";
import addToWatchListBtn from "../assets/watchlistIcons/addtowatchlist.svg"


export const MovieCard = () => {
  const { movies, formatRating, setwatchList } = useMovie();

  const addToWatchList = (movie) => {
    setwatchList((prev) => [...prev, movie]);
  };

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
              sizes="(max-width: 767px) 185px,
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
              <p>{movie.title}</p>
              <Icon onClick={null} type="button" url={eyeIcon}alt="heart icon" />
              <Icon
                onClick={null}
                type="button"
                url={favoriteIcon}
                alt="start icon"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
