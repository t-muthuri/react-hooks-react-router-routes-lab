import React from "react";
import { directors } from "../data";

const directorsList = directors.map((director) => {
  return (
    <div key={director.name}>
      <h3>Name:{director.name} </h3>
      <li>Movies:{director.movies}</li>
    </div>
  );
});

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>{directorsList}</div>
    </div>
  );
}

export default Directors;
