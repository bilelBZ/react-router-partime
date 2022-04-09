import React from "react";
import MovieCard from "./MovieCard";
function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
