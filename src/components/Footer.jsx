import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">BookVerse</h2>

          <p className="footer-description">
            Elevating the digital reading experience with curated
            collections and modern design.
          </p>

          <div className="footer-social">
            <span className="material-symbols-outlined">share</span>
            <span className="material-symbols-outlined">
              alternate_email
            </span>
            <span className="material-symbols-outlined">camera</span>
          </div>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h5>Quick Links</h5>

          <ul>
            <li>Search Books</li>
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Customer Service</h5>

          <ul>
            <li>Shipping Policy</li>
            <li>Return Center</li>
            <li>FAQ</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Contact</h5>

          <ul className="footer-contact">
            <li>📍 123 Reader St, NY</li>
            <li>📧 hello@bookverse.com</li>
            <li>📞 +1 (234) 567-890</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2024 BookVerse. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;