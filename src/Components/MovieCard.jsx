import React from "react";
import { useMovie } from "../context/MovieContext.jsx";
import { useDialog } from "../context/DialogContext.jsx";
import ratingIcon from "../assets//MovieCardIcons/movieCardRatingStar.svg";
import favoriteIcon from "../assets//MovieCardIcons/movieCardStar.svg";
import filledFavoriteIcon from "../assets//FavoriteListIcon/filledStar.svg";
import filledEyeIcon from "../../src/assets/MovieCardIcons/movieCardEyeFilled.png";
import eyeIcon from "../assets/MovieCardIcons/movieCardEye.png";
import noPosterFound from "../assets/MovieCardIcons/noPosterFound.png";
import { Icon } from "./Icon/Icon.jsx";
import { MovieDetailsDialog } from "../Pages/MovieDetailsDialog/MovieDetailsDialog.jsx";

export const MovieCard = () => {
	const {
		movies,
		formatRating,
		formatMovieTitle,
		addToWatchList,
		addToFavorites,
		filledStar,
		setFilledStar,
		filledEye,
		setFilledEye,
	} = useMovie();

	const {
		isDialogOpen,
		selectedDialogMovie,
		dialogRef,
		handleOpenDialog,
		handleCloseDialog,
		isInfoButtonClicked,
	} = useDialog();

	return (
		<div className="movie-card-container">
			{movies.map((movie) => (
				<div className="movie-card" key={movie.id}>
					<div className="movie-image-wrapper">
						<img
							src={
								movie.poster_path
									? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
									: noPosterFound
							}
							alt={`${movie.title} poster`}
							className="movie-image"
							onClick={() => handleOpenDialog(movie)}
						/>
					</div>

					<div className="movie-info-wrapper">
						<div className="rating-wrapper">
							<img src={ratingIcon} alt="star icon" />
							<span>{formatRating(movie.vote_average)}</span>
						</div>

						<div className="title-wrapper">
							<p>{formatMovieTitle(movie.title, 14)}</p>
							<div className="title-images">
								<Icon
									onClick={() => addToWatchList(movie)}
									onMouseEnter={() => setFilledEye(true)}
									url={filledEye[movie.id] ? filledEyeIcon : eyeIcon}
									type="button"
									alt="watchlist icon"
									className="watchlist-button"
								/>
								<Icon
									onClick={() => addToFavorites(movie)}
									onMouseEnter={() => setFilledStar(true)}
									type="button"
									url={filledStar[movie.id] ? filledFavoriteIcon : favoriteIcon}
									alt="favorite icon"
									className="favorite-button"
								/>
							</div>
						</div>
					</div>
				</div>
			))}

			{isDialogOpen && selectedDialogMovie && isInfoButtonClicked && (
				<MovieDetailsDialog
					onClose={handleCloseDialog}
					movie={selectedDialogMovie}
					ref={dialogRef}
				/>
			)}
		</div>
	);
};
