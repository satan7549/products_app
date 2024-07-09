import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Product App
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/products/new" className="navbar-link">
              Add New Product
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
