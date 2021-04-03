import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
        <Link className="navbarElement" to="/home">
          Strerath
        </Link>
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
          to="/kontakt"
        >
          Kontakt
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="navbarElement"
          to="/impressum"
        >
          Impressum
        </NavLink>
      </div>
      <img className="hamburgerIcon" src={hamburger} alt="" onClick={toggler} />
    </nav>
  );
};
