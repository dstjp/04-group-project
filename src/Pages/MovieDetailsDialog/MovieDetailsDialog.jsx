import "../../Pages/MovieDetailsDialog/MovieDetailsDialog.css";
import { useState, useEffect } from "react";
import { useMovie } from "../../context/MovieContext";
import ratingIcon from "../../assets/MovieCardIcons/movieCardRatingStar.svg";

export const MovieDetailsDialog = ({ movie, onClose, ref }) => {
  const { formatRating } = useMovie();
  // prevent genres from being undefined
  const [genres, setGenres] = useState([]);

  // Fetch the genres
  useEffect(() => {
    // should handle the api key in a better way, maybe in a .env file or via Netlify or Vercel environment variables
    const apiKey = "272e0a4f8aed64cdcbc79856c6259d84";
    const genreUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`;

    fetch(genreUrl)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
        // remove the console.log from production code
        console.log(data.genres);
      })
      .catch((error) => console.error("Error fetching genres:", error));
  }, [movie.id]);

  return (
    <dialog ref={ref} className="dialog">
      <div className="dialog-content">
        <div className="button-wrapper">
          <button onClick={onClose} className="close-dialog-button">
            X
          </button>
        </div>

        <div className="details-container">
          <div className="details-image-wrapper">
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

          <div className="details-wrapper">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <div className="details-rating-wrapper">
              <img src={ratingIcon} alt="rating icon" />
              <span>{formatRating(movie.vote_average)}</span>
            </div>
            <div className="list-wrapper">
              <ul>
                {/* {genres && (
                  // this generates all the genres in one li element, if you want them to be separated you can use the map function to generate a li element for each genre
                  <li>{genres.map((genre) => genre.name).join(", ")}</li>
                )} */}
                {/* setting initial state as emptu array and the check if genres exist can be skipped, this way each genre is a li */}
                {genres.map((genre, index) => (
                  <li key={genre.id}>
                    {genre.name}
                    {index !== genres.length - 1 && `, `}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
