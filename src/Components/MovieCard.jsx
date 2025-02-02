import React from "react";
import { useMovie } from "../context/MovieContext.jsx";
import { useDialog } from "../context/DialogContext.jsx";

import { useEffect } from "react";
import ratingIcon from "../assets//MovieCardIcons/movieCardRatingStar.svg";
import favoriteIcon from "../assets//MovieCardIcons/movieCardStar.svg";
import filledFavorite from "../assets//FavoriteListIcon/filledStar.svg";
import eyeIcon from "../assets/MovieCardIcons/movieCardEye.png";
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
	} = useMovie();

	const {
		isDialogOpen,
		selectedDialogMovie,
		dialogRef,
		handleOpenDialog,
		handleCloseDialog,
		isInfoButtonClicked,
	} = useDialog();

	// Open/close dialog
	useEffect(() => {
		if (isDialogOpen && dialogRef.current) {
			dialogRef.current.showModal();
		} else if (!isDialogOpen && dialogRef.current) {
			dialogRef.current.close();
		}
		console.log("selected movie:", selectedDialogMovie);
		console.log("is dialog open:", isDialogOpen);
		console.log("dialog ref:", dialogRef);
		console.log("is info button clicked:", isInfoButtonClicked);
	}, [isDialogOpen, dialogRef, selectedDialogMovie, isInfoButtonClicked]);

	return (
		<div className="movie-card-container">
			{movies.map((movie) => (
				<div className="movie-card" key={movie.id}>
					<div className="movie-image-wrapper">
						<img
							srcSet={`
								https://image.tmdb.org/t/p/w185${movie.poster_path} 185w,
								https://image.tmdb.org/t/p/w342${movie.poster_path} 342w,
								`}
							sizes="(max-width: 1023px) 185px,
												342px"
							src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
							alt={`${movie.title} poster`}
							onClick={() => handleOpenDialog(movie)}
						/>
					</div>

					<div className="movie-info-wrapper">
						<div className="rating-wrapper">
							<img src={ratingIcon} alt="star icon" />
							<span>{formatRating(movie.vote_average)}</span>
						</div>

						<div className="title-wrapper">
							<p>{formatMovieTitle(movie.title, 15)}</p>
							<div className="title-images">
								<Icon
									onClick={() => addToWatchList(movie)}
									type="button"
									url={eyeIcon}
									alt="watch icon"
									className="watchlist-button"
								/>
								<Icon
									onClick={() => addToFavorites(movie)}
									onMouseEnter={() => setFilledStar(true)}
									onMouseLeave={() => setFilledStar(false)}
									type="button"
									url={filledStar[movie.id] ? filledFavorite : favoriteIcon}
									alt="star icon"
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
