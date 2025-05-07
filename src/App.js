import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { moviesData } from "./Constant/Data";
import MovieDescription from "./Components/MovieDescription/MovieDescription";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [movies, setMovies] = useState(moviesData);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} setMovies={setMovies} />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
