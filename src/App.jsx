import React from "react";
import "./App.css";
import { MoviesList } from "./Pages/MoviesList/MoviesList";
import { Routes, Route } from "react-router";
import { MovieProvider } from "./context/MovieContext";
import Navbar from "./Components/Navbar/Navbar";
import Logo from "./Components/LogoComponent/Logo"


export const App = () => {

  return (
    <>  

    <Navbar />
    <Logo />
    

      <MovieProvider>
        <Routes>
          <Route index element={<MoviesList />} />
          {/* <Route path="favorite" element={} /> */}
          {/* <Route path="watch" element={} /> */}
        </Routes>
      </MovieProvider>
    </>
  );
};
