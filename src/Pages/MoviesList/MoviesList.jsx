import { useMovie } from "../../context/MovieContext";
import { MovieCard } from "../../Components/MovieCard";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Loading } from "../../Components/Loading/Loading.jsx";
import "../MoviesList/MoviesList.css";
import rectangleIcon from "../../assets/watchlistIcons/rectangle.svg";

export const MoviesList = () => {
	const { movies, loading, searchQuery } = useMovie();

	return (
		<div className="movie-list-container">
			<SearchBar />

			{!searchQuery && (
				<div className="header-wrapper">
					<img className="icon-header" src={rectangleIcon} alt="header icon" />
					<h3 className="movie-list-header">Top 20</h3>
				</div>
			)}

			{movies && !loading ? <MovieCard /> : <Loading />}
		</div>
	);
};
