import { useMovie } from "../../context/MovieContext";
import { MovieCard } from "../../Components/MovieCard";
import "../MoviesList/MoviesList.css";
import rectangle from "../../assets/watchlistIcons/rectangle.svg";

export const MoviesList = () => {
  const { movies } = useMovie();

  return (
    <div className="movie-list-container">
      <div className="header-wrapper">
        <img className="icon-header" src={rectangle} alt="" />
        <h3 className="movie-list-header">Top 20</h3>
      </div>

      {movies && <MovieCard />}
    </div>
  );
};
