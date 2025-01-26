import React from "react";
import { useMovie } from "../../Context/MovieContext";
import DetailIcon from "./Icons/DetailIcon";
import RateStarIcon from "./Icons/RateStarIcon";
import DeleteIcon from "./Icons/DeleteIcon";



function WatchList() {
    const { watchList } = useMovie();

    return (
        <div>
            <h1>WatchList</h1>
            <div>
                {watchList.map((movie) => (
                    <div key={movie.id}>
                        <div>
                            <button><DeleteIcon /></button>
                        </div>
                        <img src={movie.poster_path} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                        <div>
                            <button><DetailIcon /></button>
                            <button><RateStarIcon /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WatchList;