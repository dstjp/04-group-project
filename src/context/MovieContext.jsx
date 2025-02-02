import React, { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [watchList, setwatchList] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [ratings, setRatings] = useState({});
	const [filledStar, setFilledStar] = useState({});

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
		setFavorites((favorites) => {
			if (favorites.find((fav) => fav.id === movie.id)) {
				return favorites;
			}
			return [...favorites, movie];
		});

		setFilledStar((fill) => {
			return {
				...fill,
				[movie.id]: true,
			};
		});
	};

	const removeFromFavorites = (id) => {
		setFavorites((favorites) => favorites.filter((movie) => movie.id !== id));

		setFilledStar((fill) => ({
			...fill,
			[id]: false,
		}));
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

	const updateRating = (movieId, rating) => {
		setRatings((preRatings) => ({
			...preRatings,
			[movieId]: rating !== 0 ? rating : null,
		}));
	};

	return (
		<MovieContext.Provider
			value={{
				movies,
				watchList,
				favorites,
				loading,
				error,
				ratings,
				filledStar,
				addToWatchList,
				removeFromWatchList,
				addToFavorites,
				removeFromFavorites,
				formatRating,
				formatMovieTitle,
				updateRating,
				setFilledStar,
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
