import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../img/hamburger.webp";

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
        {" "}
        <div className="divideElement"></div>
        <NavLink className="navbarElement" activeClassName="selected" to="/">
          <img
            src="https://mamas-website.s3.us-west-000.backblazeb2.com/Logo.jpg"
            alt=""
            height="50px"
          />
          &nbsp; Strerath
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="navbarElement"
          to="/Pferdezucht"
        >
          Pferdezucht
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="navbarElement"
          to="/Reitbetrieb"
        >
          Reitbetrieb
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="navbarElement"
          to="/Hundezucht"
        >
          Hundezucht
        </NavLink>
        <div className="divideElement"></div>
      </div>
      <img className="hamburgerIcon" src={hamburger} alt="" onClick={toggler} />
    </nav>
  );
};
