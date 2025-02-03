import React, { useState } from "react";
import { useMovie } from "../../context/MovieContext";
import "./SearchBar.css";

export const SearchBar = () => {
	const [query, setQuery] = useState("");
	const { fetchMovies } = useMovie();

	const handleSearch = (event) => {
		event.preventDefault();
		fetchMovies(query);
	};

	return (
		<form className="searchbar">
			<input
				type="text"
				placeholder="Search for a movie"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="search-input"
			/>
			<button type="submit" className="search-button"></button>
		</form>
	);
};
