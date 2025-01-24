import { useMovie } from "../../context/MovieContext";


export const MoviesList = () => {
  const {movies} = useMovie();

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
          <span>{movie.vote_average}</span>
          <div>
            <p>{movie.title}</p>
            {/* <img src={heart} alt="heart icon" /> */}
          </div>
        </div>
      </div>
    ))}
  </div>
  )
};
