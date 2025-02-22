import { useMovie } from "../../context/MovieContext";
import { MovieCard } from "../../Components/MovieCard";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Loading } from "../../Components/Loading/Loading.jsx";
import "../MoviesList/MoviesList.css";
import headerTitleIcon from "../../assets/watchlistIcons/rectangle.svg";

export const MoviesList = () => {
  // refactor makes it the import movies redundant
  const { loading, searchQuery } = useMovie();

  return (
    <div className="movie-list-container">
      <SearchBar />

      {!searchQuery && (
        <div className="header-wrapper">
          <img
            className="icon-header"
            src={headerTitleIcon}
            alt="header icon"
          />
          <h3 className="movie-list-header">Top 20</h3>
        </div>
      )}

      {/* the movies condiition is redudant in this case, cause you have an animation that ends with a black screen, if there had been anything after the animation you would have wanted it to stay true on that component but as it works right now its enough to check for loading  */}
      {loading ? <Loading /> : <MovieCard />}
    </div>
  );
};
