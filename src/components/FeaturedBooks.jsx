import React from "react";
import { books } from "../data/books";
import "./FeaturedBooks.css";

const FeaturedBooks = () => {
  return (
    <section className="featured-books-section">
      <div className="featured-books-container">
        {/* Header */}
        <div className="featured-books-header">
          <h3 className="featured-books-title">
            Featured Arrivals
          </h3>
          <p className="featured-books-subtitle">
            Hand-picked selections for our readers
          </p>
        </div>

        {/* Grid */}
        <div className="featured-books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              {/* Image */}
              <div className="book-image-wrapper">
                <img
                  src={book.image}
                  alt={book.title}
                  className="book-image"
                />

                <div className="book-overlay">
                  <button className="book-action-btn">
                    <span className="material-symbols-outlined">
                      shopping_bag
                    </span>
                  </button>

                  <button className="book-action-btn">
                    <span className="material-symbols-outlined">
                      favorite
                    </span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="book-content">
                <p className="book-category">
                  {book.category}
                </p>

                <h4 className="book-title">
                  {book.title}
                </h4>

                <p className="book-author">
                  {book.author}
                </p>

                <div className="book-footer">
                  <div className="book-rating">
                    <span className="material-symbols-outlined star-icon">
                      star
                    </span>
                    <span>{book.rating}</span>
                  </div>

                  <p className="book-price">
                    {book.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;