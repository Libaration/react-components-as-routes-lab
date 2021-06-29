import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <React.Fragment>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div>
            {movie.title}
            <ul>{movie.time}</ul>
            <ul>{movie.metascore}</ul>
            <ul>{movie.genres}</ul>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Movies;
