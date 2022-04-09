import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Service from "./components/Service";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import { Data } from "./pages/Data";

function App() {
  const [movies, setMovies] = useState(Data);
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
