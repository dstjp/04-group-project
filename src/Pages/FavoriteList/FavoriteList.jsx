import { useMovie } from "../../context/MovieContext.jsx";
import AddFavorite from "./AddFavorite";
import "./FavoriteList.css";

export default function FavoriteList() {}

return (
	<div className="favorite-list-container">
		<h1>Favorite List</h1>
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(e) => setMovies(e.target.value)}
				value={movies}
			/>
			<button type="submit">Add</button>
		</form>

		{favorite.map((movies) => (
			<AddFavorite movies={movies} />
		))}
	</div>
);
