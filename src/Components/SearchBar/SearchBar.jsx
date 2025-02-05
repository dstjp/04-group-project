import React, { useEffect, useRef } from "react";
import { useMovie } from "../../context/MovieContext";
import "./SearchBar.css";

export const SearchBar = ({ showSearchbar }) => {
	const { searchQuery, setSearchQuery, fetchMovies } = useMovie();
	const previousQuery = useRef(searchQuery);

	useEffect(() => {
		const handleSearch = setTimeout(() => {
			if (searchQuery.trim() && searchQuery !== previousQuery.current) {
				fetchMovies(searchQuery);
				previousQuery.current = searchQuery;
			} else if (searchQuery.trim() === "" && previousQuery.current !== "") {
				fetchMovies();
				previousQuery.current = "";
			}
		}, 500);
		return () => clearTimeout(handleSearch);
	}, [searchQuery, fetchMovies]);

	return (
		<div className={`searchbar-container ${showSearchbar ? "active" : ""}`}>
			<form className="searchbar" onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					placeholder="Search for a movie..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="search-input"
				/>
			</form>
		</div>
	);
};
