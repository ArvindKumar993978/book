import "./BookCard.css";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-image-wrapper">
        <div className="book-image-container">
          <img
            src={book.image}
            alt={book.title}
            className="book-image"
          />
        </div>

        {book.isNew && (
          <div className="book-badge">
            New
          </div>
        )}
      </div>

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