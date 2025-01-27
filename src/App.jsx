import React from "react";
import "./App.css";
/* import { MoviesList } from "./Pages/MoviesList/MoviesList"; */
import { Routes, Route } from "react-router";
import { MovieProvider } from "./context/MovieContext";
import Navbar from "./Components/Navbar/Navbar";
import Logo from "./Components/Logo/Logo"
import WatchList from "./Pages/WatchList/WatchList";
/* import FavoriteList from "./Pages/FavoriteList/FavoriteList"; */
import "./Pages/WatchList/WatchList.css";


export const App = () => {

  return (
    <>  

    <Navbar />
    <Logo />
    

      <MovieProvider>
        <Routes>
          {/* <Route index element={<MoviesList />} /> */}
          {/* <Route path="/favorite" element={<favorite />} /> */}
          {<Route path="/watchlist" element={<WatchList />} />}
        </Routes>
      </MovieProvider>
    </>
  );
};
