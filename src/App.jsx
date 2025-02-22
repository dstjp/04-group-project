import React from "react";
import "./App.css";
import { MoviesList } from "./Pages/MoviesList/MoviesList";
import { Routes, Route } from "react-router";
import { MovieProvider } from "./context/MovieContext";
import { DialogProvider } from "./context/DialogContext";
import { NotFound } from "./Pages/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Logo from "./Components/Logo/Logo";
import WatchList from "./Pages/WatchList/WatchList";
import FavoriteList from "./Pages/FavoriteList/FavoriteList";
import "./Pages/WatchList/WatchList.css";
import "./Pages/FavoriteList/Ratingscore/RatingPopUp.css";

export const App = () => {
  return (
    // can remove the fragment and wrap the components in the MovieProvider and also the div
    // NOTE! the styling needs to be adjusted slightly with this approach
    <>
      <div className="app-container">
        <MovieProvider>
          <Navbar />
          <Logo />
          <div className="main-content">
            <DialogProvider>
              <Routes>
                <Route index element={<MoviesList />} />
                <Route path="/favorites" element={<FavoriteList />} />
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </DialogProvider>
          </div>
        </MovieProvider>
      </div>
    </>
  );
};
