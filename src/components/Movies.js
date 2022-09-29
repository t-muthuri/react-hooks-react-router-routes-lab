import React from "react";
import { movies } from "../data";

const moviesList = movies.map((movie) => {
  return (
    <div key={movie.title}>
      <h3>Name:{movie.title} </h3>
      <p>Time:{movie.time}</p>
      <li>Genres:{movie.genres}</li>
    </div>
  );
});

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {moviesList}
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Movies;
