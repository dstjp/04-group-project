import { useMovie } from "../../context/MovieContext";
import { MovieCard } from "../../Components/MovieCard";

export const MoviesList = () => {
  const { movies } = useMovie();

  return (
    <div className="movie-list-container">
      <h3>Top 20</h3>
      {movies && <MovieCard />}
    </div>
  );
};
