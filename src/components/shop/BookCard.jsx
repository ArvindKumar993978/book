import { PlusCircle } from "lucide-react";
import "./BookCard.css";

function BookCard({ book }) {
  return (
    <div className="bookCard">
      <div className="bookImageWrapper">
        <img
          src={book.image}
          alt={book.title}
          className="bookImage"
        />

        {book.badge && (
          <span className="bookBadge">
            {book.badge}
          </span>
        )}
      </div>

      <div className="bookContent">
        <p className="bookAuthor">{book.author}</p>

        <h3 className="bookTitle">
          {book.title}
        </h3>

        <div className="bookFooter">
          <span className="bookPrice">
            ${book.price}
          </span>

          <button className="addBtn">
            <PlusCircle className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;