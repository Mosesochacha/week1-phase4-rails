import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="l">
            Navbar
          </a>
          <NavLink to="/">Restaurant</NavLink>
          <NavLink to="/pizza">Pizza</NavLink>
          <NavLink to="/add">AddPizza</NavLink>
        </div>
      </nav>
    </div>
  );
}
