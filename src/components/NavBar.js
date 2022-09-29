import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  textDecoration: "none",
  color: "darkblue",
};

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" style={linkStyles} activeStyle={{ color: "purple" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={linkStyles}
            activeStyle={{ color: "purple" }}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/directors"
            style={linkStyles}
            activeStyle={{ color: "purple" }}
          >
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            style={linkStyles}
            activeStyle={{ color: "purple" }}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
