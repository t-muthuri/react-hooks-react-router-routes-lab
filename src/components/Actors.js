import React from "react";
import { actors } from "../data";

const actorsList = actors.map((actor) => {
  return (
    <div key={actor.name}>
      <h3>Name:{actor.name} </h3>
      <li>Movies:{actor.movies}</li>
    </div>
  );
});

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>{actorsList}</div>
    </div>
  );
}

export default Actors;
