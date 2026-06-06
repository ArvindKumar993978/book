import React from "react";
import { categories } from "../data/categories";
import "./Categories.css";

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Header */}
        <div className="categories-header">
          <div>
            <h3 className="categories-title">Browse by Genre</h3>
            <div className="categories-line"></div>
          </div>

          <a href="#" className="view-all-link">
            View All
            <span className="material-symbols-outlined arrow-icon">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-icon">
                <span className="material-symbols-outlined icon">
                  {cat.icon}
                </span>
              </div>

              <h4 className="category-title">{cat.title}</h4>

              <p className="category-books">{cat.books}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;