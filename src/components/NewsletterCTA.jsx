import "./NewsletterCTA.css";

function NewsletterCTA() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">

        <h2 className="newsletter-title">
          Hear from Elena
        </h2>

        <p className="newsletter-text">
          Join Elena's monthly journal.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="your@email.com"
            className="newsletter-input"
          />

          <button className="newsletter-button">
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}

export default NewsletterCTA;