import React, { useState, useEffect } from "react";
import { useMovie } from "../../context/MovieContext";
import { MovieCard } from "../../Components/MovieCard";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import "../MoviesList/MoviesList.css";

export const MoviesList = () => {
  const { movies, fetchMovies } = useMovie();
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = (query) => {
    fetchMovies(query);
  };

  return (
    <div className="movie-list-container">
      <SearchBar onSearch={handleSearch} />
      <h3 className="movie-list-header">Top Movies</h3>
      <div className="movie-cards">
        {filteredMovies && filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};