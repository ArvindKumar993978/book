import "./BookCard2.css";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={book.image}
        alt={book.title}
        className="book-image"
      />

      <h3 className="book-title">
        {book.title}
      </h3>

      <p className="book-year">
        Published {book.year}
      </p>

      <p className="book-price">
        {book.price}
      </p>
    </div>
  );
}

export default BookCard;