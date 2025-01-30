import { useMovie } from "../../context/MovieContext.jsx";
import { Icon } from "../../Components/Icon/Icon.jsx";
import ratingIcon from "../../assets/MovieCardIcons/movieCardRatingStar.svg";
import favoriteIcon from "../../assets/MovieCardIcons/movieCardStar.svg";
import eyeIcon from "../../assets/MovieCardIcons/movieCardEye.png";
import rectangle from "../../assets/watchlistIcons/rectangle.svg";
import "./FavoriteList.css";

export default function FavoriteList() {
	const {
		favorites,
		removeFromFavorites,
		formatRating,
		formatMovieTitle,
		addToWatchList,
	} = useMovie();

	return (
		<div className="fav-list-container">
			<div className="fav-list-header">
				<Icon url={rectangle} alt="rectangle" className="fav-rectangle" />
				<h1 className="fav-list-title">Favorite List</h1>
			</div>
			{favorites.length > 0 ? (
				<div className="fav-movie-card-container">
					{favorites.map((movie) => (
						<div key={movie.id} className="fav-movie-card">
							{/* Image Wrapper */}
							<div className="fav-movie-image-wrapper">
								<div className="fav-movie-image">
									<img
										src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
										alt={`${movie.title} poster`}
									/>
								</div>
								{/* Movie Info */}
								<div className="fav-movie-info-wrapper">
									<div className="fav-rating-wrapper">
										<img src={ratingIcon} alt="star icon" />
										<span>{formatRating(movie.vote_average)}</span>
									</div>

									<div className="fav-title-wrapper">
										<p>{formatMovieTitle(movie.title, 20)}</p>

										{/* Title Image */}
										<div className="fav-title-images">
											<Icon
												onClick={() => addToWatchList(movie)}
												type="button"
												url={eyeIcon}
												alt="heart icon"
												className="fav-watchlist-button"
											/>
										</div>
									</div>
								</div>
							</div>

							{/* <button onClick={() => removeFromFavorites(movie.id)}>
								Remove
                </button> */}
						</div>
					))}
				</div>
			) : (
				<p>No favorites added yet.</p>
			)}
		</div>
	);
}
