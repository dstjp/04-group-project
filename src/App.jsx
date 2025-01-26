import "./App.css";
import { MoviesList } from "./Components/MoviesList/MoviesList";
import { Routes, Route } from "react-router";
import { MovieProvider } from "./context/MovieContext";
import Nav from "./Components/Nav/Nav";

export const App = () => {

  return (
    <>  

    <Nav />

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
