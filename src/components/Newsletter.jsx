import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-card">
          <span className="material-symbols-outlined newsletter-icon">
            mail
          </span>

          <h3 className="newsletter-title">
            Join Our Literary Community
          </h3>

          <p className="newsletter-description">
            Subscribe for book recommendations, author interviews and more.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />

            <button className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;