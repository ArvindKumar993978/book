import "./BookInfo.css";

function BookInfo() {
  return (
    <div className="book-info">

      <h2 className="book-title">
        The Midnight Library
      </h2>

      <p className="book-author">
        Matt Haig
      </p>

      <p className="book-price">
        $18.99
      </p>

      <div className="book-actions">
        <button className="btn primary">
          Add To Cart
        </button>

        <button className="btn secondary">
          Buy Now
        </button>
      </div>

    </div>
  );
}

export default BookInfo;