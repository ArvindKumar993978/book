import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logo & Mobile Menu */}
        <div className="navbar-left">
          <button className="menu-btn">
            <span className="material-symbols-outlined">menu</span>
          </button>

          <h1 className="navbar-logo">BookVerse</h1>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="active-link">
            Home
          </Link>

          <Link to="/Categories">Categories</Link>

          <Link to="/AuthorProfile">Authors</Link>
          <Link to="/BookDetailPage">Best Sellers</Link >
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <button className="icon-btn">
            <span className="material-symbols-outlined">🔍</span>
          </button>

          <button className="icon-btn cart-btn">
            <span className="material-symbols-outlined">
              🛒
            </span>

            <span className="cart-badge">3</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;