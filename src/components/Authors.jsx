import React from "react";
import { authors } from "../data/authors";
import "./Authors.css";

const Authors = () => {
  return (
    <section className="authors-section">
      <div className="authors-container">
        {/* Header */}
        <div className="authors-header">
          <h3 className="authors-title">Meet the Visionaries</h3>
          <p className="authors-subtitle">
            Celebrating the authors who shape our world
          </p>
        </div>

        {/* Grid */}
        <div className="authors-grid">
          {authors.map((author) => (
            <div key={author.id} className="author-card">
              {/* Image */}
              <div className="author-image-wrapper">
                <img
                  src={author.image}
                  alt={author.name}
                  className="author-image"
                />
              </div>

              <h4 className="author-name">{author.name}</h4>

              <p className="author-field">{author.field}</p>

              <p className="author-description">
                {author.description}
              </p>

              <button className="author-btn">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authors;