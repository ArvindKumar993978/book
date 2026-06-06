import "./FilterSidebar.css";

function FilterSidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="filterOverlay"
          onClick={onClose}
        />
      )}

      <aside className={`filterSidebar ${open ? "open" : ""}`}>
        <div className="filterContent">
          <h2 className="filterTitle">
            Advanced Filters
          </h2>

          <div className="filterSection">
            <label className="filterLabel">Category</label>

            <div className="filterButtons">
              <button className="activeFilterBtn">
                Fiction
              </button>

              <button className="filterBtn">
                Mystery
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default FilterSidebar;