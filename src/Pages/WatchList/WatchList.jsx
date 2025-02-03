import React from "react";
import { useEffect } from "react";
import { useMovie } from "../../context/MovieContext";
import { useDialog } from "../../context/DialogContext";
import { Icon } from "../../Components/Icon/Icon";
import ratingIcon from "../../assets/MovieCardIcons/movieCardRatingStar.svg";
import collect from "../../assets/watchlistIcons/collect.svg";
import trash from "../../assets/watchlistIcons/trash.svg";
import Info from "../../assets/watchlistIcons/Info.svg";
import star from "../../assets/watchlistIcons/star.svg";
import filledFavorite from "../../assets/FavoriteListIcon/filledStar.svg";
import favoriteIcon from "../../assets/MovieCardIcons/movieCardStar.svg";
import rectangle from "../../assets/watchlistIcons/rectangle.svg";
import { MovieDetailsDialog } from "../MovieDetailsDialog/MovieDetailsDialog";

function WatchList() {
	const {
		watchList,
		removeFromWatchList,
		formatMovieTitle,
		addToFavorites,
		filledStar,
		setFilledStar,
		formatRating,
	} = useMovie();

	// Dialog functions
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
		<div className="watchlist-page">
			<div className="watchlist-header">
				<Icon url={rectangle} alt="rectangle" className="watchlist-rectangle" />
				<h1 className="watchlist-title">WatchList</h1>
			</div>
			<div className="watchlist-container">
				{watchList.length === 0 ? (
					<div className="watchlist-empty">
						<img src={collect} alt="collect" />
						<p className="watchlist-empty-text">
							Save shows and movies to keep track of what you want to watch.
						</p>
					</div>
				) : (
					watchList.map((movie) => (
						<div key={movie.id} className="watchlist-movie-card">
							<div className="watchlist-movie-image">
								<div className="watchlist-movie-remove-btn">
									<Icon
										onClick={(e) => {
											e.preventDefault();
											removeFromWatchList(movie.id);
										}}
										url={trash}
										type="button"
										alt="remove"
										className="watchlist-remove-icon"
									/>
								</div>
								<img
									src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
									alt={`${movie.title} poster`}
								/>
							</div>
							<div className="watchlist-movie-info-wrapper">
								<div className="watchlist-movie-info watchlist-extra">
									<div className="watchlist-rating-wrapper">
										<div className="watchlist-general-rating watchlist-extra">
											<img
												src={ratingIcon}
												alt="star icon"
												/* onClick={() => handleRatingClick(movie)} */
											/>
											<span>{formatRating(movie.vote_average)}</span>
										</div>
									</div>
									<p className="watchlist-movie-title">
										{formatMovieTitle(movie.title, 20)}
									</p>
								</div>
								<div className="watchlist-icons-wrapper">
									<Icon
										onClick={() => addToFavorites(movie)}
										onMouseEnter={() => setFilledStar(true)}
										type="button"
										url={filledStar[movie.id] ? filledFavorite : favoriteIcon}
										alt="star icon"
										className="watchlist-add-to-favlist-button"
									/>
									<Icon
										url={Info}
										alt="info"
										onClick={() => handleOpenDialog(movie)}
										className="watchlist-info-button"
									/>
								</div>
							</div>
						</div>
					))
				)}
			</div>

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

export default WatchList;
