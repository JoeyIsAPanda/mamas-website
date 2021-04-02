import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "./img/hamburger.webp";

export const Navbar = () => {
  const [navbarExtended, toggleNavbar] = useState(false);
  const toggler = () => {
    toggleNavbar((navbarExtended) => !navbarExtended);
  };
  return (
    <nav>
      <div
        className={`elementWrapper ${
          navbarExtended ? "verticalElementWrapper" : ""
        }`}
        id="elementWrapper"
      >
        <NavLink
          activeClassName="selected"
          className="navbarElement"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="navbarElement"
          to="/galerie"
        >
          Galerie
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="navbarElement"
          to="/preisliste"
        >
          Preisliste
        </NavLink>
        <div className="divideElement"></div>
        <NavLink
          activeClassName="selected"
          className="navbarElement"
          to="/impressum"
        >
          Impressum
        </NavLink>
      </div>
      <img
        className="navbarElement hamburgerIcon"
        src={hamburger}
        alt=""
        onClick={toggler}
      />
    </nav>
  );
};