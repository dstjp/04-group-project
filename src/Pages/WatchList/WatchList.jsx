import React from "react";
import { useMovie } from "../../context/MovieContext";
import { Icon } from "../../Components/Icon";
import ratingIcon from "../../assets/MovieCardIcons/movieCardRatingStar.svg";
import collect from "../../assets/watchlistIcons/collect.svg";

function WatchList ()  {
    const { watchList, removeFromWatchList } = useMovie();
    
    return (
        <div>
            <h1>WatchList</h1>
            <div className="watchlist-container">
                {watchList.length === 0 ? (
                    <div className="watchlist-empty">
                        <img src={collect} alt="collect" />
                        <p className="nth-words">save shows and movies to keep track of what you want to watch</p>
                    </div>
                ) : (
                  watchList.map((movie) => (
                    <div key={movie.id}>
                        <div className="watchlist-remove-btn">
                            <button onClick={() => removeFromWatchList(movie.id)}>
                                <Icon url="/icons/remove.svg" alt="remove" />
                            </button>
                        </div>
                        <div className="watchlist-movie-info">
                            <img srcSet={`
                                https://image.tmdb.org/t/p/w185${movie.poster_path} 185w,
                                https://image.tmdb.org/t/p/w342${movie.poster_path} 342w,
                                `} 
                                sizes="(max-width: 767px) 185px, 342px"
                                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                                alt={`${movie.title} poster`} />
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            <p>{movie.actor}</p>
                        </div>
                        <div className="watchlist-rate-btns">
                            <button><Icon url="/icons/info.svg" alt="info" /></button>
                            <button><Icon url={ratingIcon} alt="Rating" /></button>
                        </div>
                    </div>
                ))
            )}
            
          </div>
        </div>
    );
}

export default WatchList;