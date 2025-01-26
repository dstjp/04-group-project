import "./App.css";
import { MoviesList } from "./Components/MoviesList/MoviesList";
import { Routes, Route } from "react-router";
import { MovieProvider } from "./context/MovieContext";
import Navbar from "./Components/Navbar/Navbar";
import MockFavorites from "./Components/Nav/MockFavorites"
import MockWatchlist from "./Components/Nav/MockWatchlist"

export const App = () => {

  return (
    <>  

    <Navbar />
    

      <MovieProvider>
        <Routes>
          <Route index element={<MoviesList />} />
          <Route path="/favorites" element={<MockFavorites />} />
          <Route path="/watchlist" element={<MockWatchlist />} />
        </Routes>
      </MovieProvider>
    </>
  );
};
