import React, { useState, useEffect } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useDialog } from "../../context/DialogContext.jsx";
import { Icon } from "../../Components/Icon/Icon.jsx";
import RatingPopUp from "../FavoriteList/Ratingscore/RatingPopUp";
import ratingIcon from "../../assets/MovieCardIcons/movieCardRatingStar.svg";
import eyeIcon from "../../assets/MovieCardIcons/movieCardEye.png";
import rectangle from "../../assets/watchlistIcons/rectangle.svg";
import trash from "../../assets/watchlistIcons/trash.svg";
import collectIcon from "../../assets/watchlistIcons/collect.svg";
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
		<div className="favlist-page">
			<div className="favlist-header">
				<Icon url={rectangle} alt="rectangle" className="favlist-rectangle" />
				<h1 className="favlist-title">Favorite List</h1>
			</div>
			<div className="favlist-container">
				{favorites.length === 0 ? (
					<div className="favlist-empty">
						<img src={collectIcon} alt="collect" />
						<p className="favlist-empty-text">No favorites added yet.</p>
					</div>
				) : (
					favorites.map((movie) => (
						<div key={movie.id} className="favlist-movie-card">
							<div className="favlist-movie-image">
								<div className="favlist-movie-remove-btn">
									<Icon
										onClick={(e) => {
											e.preventDefault();
											removeFromFavorites(movie.id);
										}}
										url={trash}
										type="button"
										alt="remove"
										className="favlist-remove-icon"
									/>
								</div>
								<img
									src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
									alt={`${movie.title} poster`}
								/>
							</div>

							<div className="favlist-movie-info-wrapper">
								<div className="favlist-movie-info watchlist-extra">
									<div className="favlist-rating-wrapper">
										<img src={ratingIcon} alt="star icon" />
										<span
											className="favlist-rate-button"
											onClick={() => handleRatingClick(movie)}
										>
											{ratings[movie.id] !== undefined &&
											ratings[movie.id] !== null
												? `${ratings[movie.id]}.0`
												: "Rate me!"}
										</span>
									</div>
									<p className="favlist-movie-title">
										{formatMovieTitle(movie.title, 20)}
									</p>
								</div>

								<div className="favlist-icons-wrapper">
									<Icon
										onClick={() => addToWatchList(movie)}
										type="button"
										url={eyeIcon}
										alt="eye icon"
										className="favlist-add-to-watchlist-button"
									/>

									<Icon
										type="button"
										url={infoIcon}
										alt="info icon"
										onClick={() => handleOpenDialog(movie)}
										className="favlist-info-button"
									/>
								</div>
							</div>
						</div>
					))
				)}
			</div>

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
