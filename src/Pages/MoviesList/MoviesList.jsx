import { useMovie } from "../../context/MovieContext";
import { MovieCard } from "../../Components/MovieCard";
import "../MoviesList/MoviesList.css"

export const MoviesList = () => {
  const { movies } = useMovie();

  return (
    <div className="movie-list-container">
      <h3 className="movie-list-header">Top 20</h3>
      {movies && <MovieCard />}
    </div>
  );
};
