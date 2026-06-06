import "./NavigationDrawer.css";

function NavigationDrawer({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="drawerOverlay"
          onClick={onClose}
        />
      )}

      <aside
        className={`drawer ${open ? "open" : ""}`}
      >
        <div className="drawerContent">
          <h2 className="drawerTitle">
            Collections
          </h2>

          <nav className="drawerNav">
            <a href="#">Fiction</a>
            <a href="#">Non-Fiction</a>
            <a href="#">Mystery</a>
            <a href="#">Business</a>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default NavigationDrawer;