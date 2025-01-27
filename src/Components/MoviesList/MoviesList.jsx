import { useMovie } from "../../Context/MovieContext";
import heartIcon from "../../assets/heart.svg";
import ratingIcon from "../../assets/yellowstar.svg";
import favoriteIcon from "../../assets/bluestar.svg";
import { Icon } from "../Icon.jsx";

export const MoviesList = () => {
  const { movies } = useMovie();

  const formatRating = (num) => {
    return num? num.toFixed(1) : "n/a"
  };
  return (
    <div className="movie-list-container">
      <h3>Top 20</h3>
      <div className="movie-card-container"></div>
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

              <Icon
                onClick={null}
                type="button"
                url={heartIcon}
                alt="heart icon"
              />
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
