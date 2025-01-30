import React, { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [watchList, setwatchList] = useState([]);
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const apiKey = "272e0a4f8aed64cdcbc79856c6259d84";
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch data");
				}
				return res.json();
			})
			.then((data) => {
				setMovies(data.results);
				console.log(data.results);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	const addToWatchList = (movie) => {
		setwatchList((prev) => {
			if (prev.find((m) => m.id === movie.id)) {
				return prev;
			}
			return [...prev, movie];
		});
	};
	const removeFromWatchList = (id) => {
		setwatchList((prev) => prev.filter((m) => m.id !== id));
	};

	const addToFavorites = (movie) => {
		setFavorites((favorites) => [...favorites, movie]);
	};

	const removeFromFavorites = (id) => {
		setFavorites((favorites) => favorites.filter((movie) => movie.id !== id));
	};

	const formatRating = (num) => {
		return num ? num.toFixed(1) : "n/a";
	};

	const formatMovieTitle = (str, maxLength) => {
		if (str.length > maxLength) {
			return str.slice(0, maxLength) + "...";
		}

		return str;
	};

	return (
		<MovieContext.Provider
			value={{
				movies,
				watchList,
				favorites,
				loading,
				error,
				addToWatchList,
				removeFromWatchList,
				addToFavorites,
				removeFromFavorites,
				formatRating,
				formatMovieTitle,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovie = () => {
	const context = useContext(MovieContext);
	if (!context) {
		throw new Error("useMovie must be used within a MovieProvider");
	}
	return context;
};
