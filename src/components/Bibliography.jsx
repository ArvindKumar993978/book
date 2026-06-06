import "./Bibliography.css";
import BookCard from "./BookCard";
import { books } from "../data/books";

function Bibliography() {
  return (
    <section className="bibliography">
      <div className="bibliography-container">
        <h2 className="bibliography-title">
          Bibliography
        </h2>

        <div className="books-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bibliography;