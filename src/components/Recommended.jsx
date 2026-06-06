import "./Recommended.css";

const books = [
  { title: "Circe", author: "Madeline Miller", price: "$15" },
  { title: "Normal People", author: "Sally Rooney", price: "$12" },
];

function Recommended() {
  return (
    <section className="recommended">

      <h3 className="recommended-title">
        Recommended For You
      </h3>

      <div className="recommended-grid">
        {books.map((b, i) => (
          <div key={i} className="book-card">
            <h4 className="book-title">{b.title}</h4>
            <p className="book-author">{b.author}</p>
            <p className="book-price">{b.price}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Recommended;