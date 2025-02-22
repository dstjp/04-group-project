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
  const [filledEye, setFilledEye] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // handle api key in a better way, maybe in a .env file or via Netlify or Vercel environment variables
  const apiKey = "272e0a4f8aed64cdcbc79856c6259d84";
  const baseUrl = "https://api.themoviedb.org/3";

  const fetchMovies = async (query = "") => {
    setLoading(true);
    setSearchQuery(query);
    let url = query
      ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
      : `${baseUrl}/movie/popular?api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setMovies(data.results);
        // remove the console.log from production code
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // create new function to update the list for reusability
  const updateList = (setList, movie, isAdd) => {
    setList((prev) => {
      const exists = prev.find((m) => m.id === movie.id);
      if (isAdd) {
        return exists ? prev : [...prev, movie];
      } else {
        return prev.filter((m) => m.id !== movie.id);
      }
    });
  };

  // create new function to update the filled state for reusability
  const updateFilled = (setFilled, id, value) => {
    setFilled((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // update to use the new function for readability
  const addToWatchList = (movie) => {
    updateList(setwatchList, movie, true);
    updateFilled(setFilledEye, movie.id, true);
  };

  // update to use the new function for readability
  const removeFromWatchList = (id) => {
    updateList(setwatchList, { id }, false);
    updateFilled(setFilledEye, id, false);
  };

  // update to use the new function for readability
  const addToFavorites = (movie) => {
    updateList(setFavorites, movie, true);
    updateFilled(setFilledStar, movie.id, true);
  };

  // update to use the new function for readability
  const removeFromFavorites = (id) => {
    updateList(setFavorites, { id }, false);
    updateFilled(setFilledStar, id, false);
  };

  const formatRating = (num) => {
    return num ? num.toFixed(1) : "n/a";
  };

  const formatMovieTitle = (str, maxLength) => {
    // update to use ternary for readability
    return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
  };

  const updateRating = (movieId, rating) => {
    setRatings((preRatings) => ({
      ...preRatings,
      // can be simplified to, if rating is null it will return null
      [movieId]: rating || null,
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
        filledEye,
        filledStar,
        searchQuery,
        addToWatchList,
        removeFromWatchList,
        addToFavorites,
        removeFromFavorites,
        formatRating,
        formatMovieTitle,
        updateRating,
        setFilledStar,
        setFilledEye,
        fetchMovies,
        setSearchQuery,
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
