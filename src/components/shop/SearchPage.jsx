import { useState } from "react";
import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";
import FilterSidebar from "../components/FilterSidebar";
import BookCard from "../components/BookCard";
import { books } from "../data/books";
import "./SearchPage.css";

function SearchPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <Header openDrawer={() => setDrawerOpen(true)} />

      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <FilterSidebar
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      />

      <main className="searchContainer">
        <div className="searchHeader">
          <div>
            <p className="searchSubtitle">
              Search Results
            </p>

            <h2 className="searchTitle">
              Curated Selection
            </h2>
          </div>

          <button
            onClick={() => setFilterOpen(true)}
            className="filterBtnMain"
          >
            Filters
          </button>
        </div>

        <div className="bookGrid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </>
  );
}

export default SearchPage;