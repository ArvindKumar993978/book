import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2 className="footer-logo">BookVerse</h2>
          <p className="footer-text">
            Curating meaningful literature for modern readers.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li>Book Clubs</li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Support</h3>
          <ul className="footer-list">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3 className="footer-title">Newsletter</h3>

          <input
            type="email"
            placeholder="Email"
            className="footer-input"
          />

          <button className="footer-button">
            Join
          </button>
        </div>

      </div>

      <p className="footer-bottom">
        © 2024 BookVerse
      </p>

    </footer>
  );
}

export default Footer;