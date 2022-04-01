import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-item">
        <div className="navbar-brand">MERN</div>
        <div>
          <ul className="navbar-menu">
            <li className="navbar-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/aboutus">About</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
