
const movieReducer = (state, action) => {
    switch (action.type) {
        case "ADD_WATCHLIST":
            return {
                ...state, WatchList: action.payload
            };
        case "REMOVE_MOVIE":
            return{
                ...state, WatchList: state.WatchList.filter((movie) => movie.id !== action.payload)
            }
        default:
            return state;    
    }
};

export default movieReducer;