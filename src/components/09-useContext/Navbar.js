import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        useContext
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
