import "./App.css";
import { MoviesList } from "./Components/MoviesList/MoviesList";
import { Routes, Route } from "react-router";
import { MovieProvider } from "./Context/MovieContext";

export const App = () => {
  return (
    //Navbar
    <>
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
