import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <h1 className="logo">
          BookVerse
        </h1>

        <nav className="nav">
          <a href="#">Home</a>
          <a className="active" href="#">Best Sellers</a>
          <a href="#">Categories</a>
          <a href="#">New Arrivals</a>
        </nav>

        <div className="icons">
          <button className="icon-btn">🔍</button>

          <div className="cart">
            <button className="icon-btn">🛒</button>
            <span className="badge">2</span>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;