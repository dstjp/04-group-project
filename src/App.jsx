import "./App.css";
import { MoviesList } from "./Components/MoviesList/MoviesList";
import { Routes, Route } from "react-router";
import { MovieProvider } from "./context/MovieContext";
import Navbar from "./Components/Navbar/Navbar";


export const App = () => {

  return (
    <>  

    <Navbar />
    

      <MovieProvider>
        <Routes>
          <Route index element={<MoviesList />} />
          {/* <Route path="/favorites" element={} /> */}
          {/* <Route path="/watchlist" element={} /> */}
        </Routes>
      </MovieProvider>
    </>
  );
};
