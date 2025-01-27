import { useMovie } from "../../context/MovieContext";
import { MovieCard } from "../../Components/MovieCard";
import "./FavoriteList.css"

function FavoriteList() {
  const { movies } = useMovie();

  return (
    <div className="movie-list-container">
      <h3 className="favorite-title">Favorite List</h3>
      {movies && <MovieCard />}
    </div>
  );
};

export default FavoriteList;