import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const floatingBookRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

      if (floatingBookRef.current) {
        floatingBookRef.current.style.transform = `
          translate(${moveX}px, ${moveY}px)
          translateY(-50%)
          rotate(12deg)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-background">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQuhQfkc9xMJb0RJKyl-DUaVevRfR1H1yXfqwmQyEyipspFZV37Z2fN0wahttCBmvslZWXSLJIxQ8cbhqS2KwxCfhLm41I5xmo0ZYZ2NSye-IcJR-u7Lu-gw2ppGe0BTHog6o3OnHtGKuC7RgC-FXwrPU-_UBN8zEJhomG73cGNsCBnrfQY7IQ8aOrV0op99yiBKkuYPqz-udV6ZRRuSEhHj39bNVORYwarSuM-AJJ3aO83jd_ZQtK9VOYFi_f_C4VlpOpzzCmOUYn"
          alt="Library"
          className="hero-bg-image"
        />

        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            CURATED SELECTION
          </span>

          <h2 className="hero-title">
            <br />
            <span className="hero-highlight">
              Favorite Book
            </span>
          </h2>

          <p className="hero-description">
            Explore thousands of books from world-renowned authors.
            From timeless classics to modern masterpieces, your next
            journey starts here.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Shop Now
            </button>

            <button className="btn-secondary">
              Browse Categories
            </button>
          </div>
        </div>
      </div>

      {/* Floating Book */}
      <div
        ref={floatingBookRef}
        className="floating-book"
      >
        <div className="glass-card">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR4n3H78srdmmD9Y1dQ8s6bdfEbrjZ5-z14mK935SOnhTZ3qfcUwoU6-U_KewmTt92cHUJ-7GhDW1nqn1D2vF73fnU1HOUpYLg0eiHhRNEXhPKSVeglT-Bt6BFqMu77AYrGITv6VYZy1QEbOJvEvXVXmz2vsuIeybtGj1zn7DgYINjE0VU8BnavOkcJNS8hZdWMyehdrOzqHFBFCjEKG9dMtIZrn1gjOwOcUXrmcTfo0gVcmn5REg0UvgXp-rtVy3W8cSxSAOb6kgq"
            alt="Featured Book"
            className="floating-book-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;