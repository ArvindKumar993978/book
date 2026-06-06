import "./InterviewSection.css";

function InterviewSection() {
  return (
    <section className="interview">
      <div className="interview-container">
        <div className="interview-content">
          <h2 className="interview-title">
            The Craft of the Narrative
          </h2>

          <p className="interview-text">
            Elena discusses her writing process, archives,
            and storytelling techniques.
          </p>

          <blockquote className="interview-quote">
            "The past isn't a dead place; it's a conversation
            we haven't finished yet."
          </blockquote>
        </div>

        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900"
          alt="Interview"
          className="interview-image"
        />
      </div>
    </section>
  );
}

export default InterviewSection;