import React, { useState, useEffect } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useDialog } from "../../context/DialogContext.jsx";
import { Icon } from "../../Components/Icon/Icon.jsx";
import RatingPopUp from "../FavoriteList/Ratingscore/RatingPopUp";
import ratingIcon from "../../assets/MovieCardIcons/movieCardRatingStar.svg";
import eyeIcon from "../../assets/MovieCardIcons/movieCardEye.png";
import rectangle from "../../assets/watchlistIcons/rectangle.svg";
import trash from "../../assets/watchlistIcons/trash.svg";
import "./FavoriteList.css";
import infoIcon from "../../assets/watchlistIcons/Info.svg";
import { MovieDetailsDialog } from "../MovieDetailsDialog/MovieDetailsDialog.jsx";

export default function FavoriteList() {
	const {
		favorites,
		removeFromFavorites,
		formatMovieTitle,
		addToWatchList,
		ratings,
		updateRating,
	} = useMovie();

	const [selectedMovie, setSelectedMovie] = useState(null);

	const handleRatingClick = (movie) => {
		setSelectedMovie({
			...movie,
			userRating: ratings[movie.id] !== undefined ? ratings[movie.id] : 0,
		});
	};

	const handleRatingSubmit = (movieId, rating) => {
		updateRating(movieId, rating);

		const updatedFavorites = favorites.map((movie) =>
			movie.id === movieId ? { ...movie, userRating: rating } : movie
		);
		handleClosePopUp();
	};

	const handleClosePopUp = () => {
		setSelectedMovie(null);
	};

	// dialog functions
	const {
		isDialogOpen,
		selectedDialogMovie,
		dialogRef,
		handleOpenDialog,
		handleCloseDialog,
		isInfoButtonClicked,
	} = useDialog();

	useEffect(() => {
		if (isDialogOpen && dialogRef.current) {
			dialogRef.current.showModal();
		} else if (!isDialogOpen && dialogRef.current) {
			dialogRef.current.close();
		}
		console.log("selected dialog movie:", selectedDialogMovie);
		console.log("is dialog open:", isDialogOpen);
		console.log("dialog ref:", dialogRef);
		console.log("is info button clicked:", isInfoButtonClicked);
	}, [selectedDialogMovie, isDialogOpen, dialogRef, isInfoButtonClicked]);

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
										<img
											src={ratingIcon}
											alt="star icon"
											onClick={() => handleRatingClick(movie)}
										/>
										<span>
											{ratings[movie.id] !== undefined &&
											ratings[movie.id] !== null
												? `${ratings[movie.id]}.0`
												: "Rate me!"}
										</span>
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
												url={infoIcon}
												alt="info icon"
												onClick={() => handleOpenDialog(movie)}
												className="fav-info-button"
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
				<RatingPopUp
					movie={selectedMovie}
					onClose={handleClosePopUp}
					onSubmit={handleRatingSubmit}
				/>
			)}

			{isDialogOpen && isInfoButtonClicked && selectedDialogMovie && (
				<MovieDetailsDialog
					onClose={handleCloseDialog}
					movie={selectedDialogMovie}
					ref={dialogRef}
				/>
			)}
		</div>
	);
}
