import React, { useState } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { Icon } from "../../Components/Icon/Icon.jsx";
import RatingPopUp from "../FavoriteList/Ratingscore/RatingPopUp";
import ratingIcon from "../../assets/MovieCardIcons/movieCardRatingStar.svg";
import favoriteIcon from "../../assets/MovieCardIcons/movieCardStar.svg";
import filledFavorite from "../../assets/FavoriteListIcon/filledStar.svg";
import eyeIcon from "../../assets/MovieCardIcons/movieCardEye.png";
import rectangle from "../../assets/watchlistIcons/rectangle.svg";
import trash from "../../assets/watchlistIcons/trash.svg";
import "./FavoriteList.css";

export default function FavoriteList() {
	const {
		favorites,
		removeFromFavorites,
		formatRating,
		formatMovieTitle,
		addToWatchList,
	} = useMovie();

	const [selectedMovie, setSelectedMovie] = useState(null);

	const handleClosePopUp = () => {
		setSelectedMovie(null);
	};

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
							<div className="fav-movie-image-wrapper">
								<div className="fav-movie-image">
									<div className="fav-movie-remove-btn">
										<Icon
											onClick={(e) => {
												e.preventDefault();
												removeFromFavorites(movie.id);
											}}
											url={trash}
											type="button"
											alt="remove"
											className="fav-remove-icon"
										/>
									</div>
									<img
										src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
										alt={`${movie.title} poster`}
									/>
								</div>

								<div className="fav-movie-info-wrapper">
									<div className="fav-rating-wrapper">
										<img src={ratingIcon} alt="star icon" />
										<span>{formatRating(movie.vote_average)}</span>
									</div>

									<div className="fav-title-wrapper">
										<p>{formatMovieTitle(movie.title, 20)}</p>

										<div className="fav-title-images">
											<Icon
												onClick={() => addToWatchList(movie)}
												type="button"
												url={eyeIcon}
												alt="eye icon"
												className="fav-watchlist-button"
											/>
											<Icon
												type="button"
												url={filledFavorite}
												alt="star icon"
												className="fav-favorite-button"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="no-fav-added">
					<p>No favorites added yet.</p>
				</div>
			)}

			{selectedMovie && (
				<RatingPopUp movie={selectedMovie} onClose={handleClosePopUp} />
			)}
		</div>
	);
}
