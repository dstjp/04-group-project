import React from "react";
import { useMovie } from "../../context/MovieContext";
import "./FavoriteList.css";

export const FavoriteList = () => {
	const { favorite } = useMovie();

	return (
		<div className="favorite-list-container">
			{favorite.map((movie) => (
				<ul>
					<li key={movie.id}>{movie.title}</li>
				</ul>
			))}
		</div>
	);
};
