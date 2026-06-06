import "./Header.css";

function Header({ openDrawer }) {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="leftSection">
          <button className="menuBtn" onClick={openDrawer}>
            ☰
          </button>

          <h1 className="logo">BookVerse</h1>
        </div>

        <div className="rightSection">
          <button className="iconBtn">🔍</button>
          <button className="cartBtn">🛒 Cart</button>
        </div>
      </div>
    </header>
  );
}

export default Header;