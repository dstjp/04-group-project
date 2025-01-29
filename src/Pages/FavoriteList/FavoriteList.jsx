import { useMovie } from "../../context/MovieContext.jsx";
import "./FavoriteList.css";

export default function FavoriteList() {
	const { favorites, removeFromFavorites } = useMovie();

	return (
		<div className="favorite-list-container">
			<h3 className="favorite-list-header">Favorite List</h3>
			{favorites.length > 0 ? (
				<ul>
					{favorites.map((movie) => (
						<li key={movie.id} className="favorite-item">
							<h3>{movie.title}</h3>
							<p>{movie.overview}</p>
							{/* <button onClick={() => removeFromFavorites(movie.id)}>
								Remove
							</button> */}
						</li>
					))}
				</ul>
			) : (
				<p>No favorites added yet.</p>
			)}
		</div>
	);
}
