import React, { useState } from "react";
import "./App.css";
import { MoviesList } from "./Pages/MoviesList/MoviesList";
import { Routes, Route } from "react-router";
import { MovieProvider } from "./context/MovieContext";
import Navbar from "./Components/Navbar/Navbar";
import Logo from "./Components/Logo/Logo";
import WatchList from "./Pages/WatchList/WatchList";
import { FavoriteList } from "./Pages/FavoriteList/FavoriteList";
import "./Pages/WatchList/WatchList.css";

export const App = () => {
	const [selectedFavorite, setSelectedFavorite] = useState(null);

	return (
		<>
			<div className="app-container">
				<Navbar />

				<div className="main-content">
					<MovieProvider>
						<Logo />
						<Routes>
							<Route index element={<MoviesList />} />
							<Route path="/favorites" element={<FavoriteList />} />
							<Route path="/watchlist" element={<WatchList />} />
						</Routes>
					</MovieProvider>
				</div>
			</div>
		</>
	);
};
