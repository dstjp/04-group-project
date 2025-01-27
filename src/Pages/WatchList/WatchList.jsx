import React from "react";
import { useMovie } from "../../context/MovieContext";



function WatchList() {
    const { watchList, removeFromWatchList } = useMovie();
    
    return (
        <div>
            <h1>WatchList</h1>
            <div className="watchlist-container">
                {watchList.length === 0 ? (
                    <p>save shows and movies to keep track of what you want to watch</p>
                ) : (
                  watchList.map((movie) => (
                    <div key={movie.id}>
                        <div className="watchlist-remove-btn">
                            <button onClick={() => removeFromWatchList(movie.id)}>
                          {/*       <DeleteIcon /> */}
                            </button>
                        </div>
                        <div className="watchlist-movie-info">
                            <img src={movie.poster_path} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            <p>{movie.actor}</p>
                        </div>
                        <div className="watchlist-rate-btns">
                            <button>{/* <DetailIcon /> */}</button>
                            <button>{/* <RateStarIcon /> */}</button>
                        </div>
                    </div>
                ))
            )}
            
          </div>
        </div>
    );
}

export default WatchList;