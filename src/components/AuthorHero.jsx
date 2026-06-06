import "./AuthorHero.css";
import FollowButton from "./FollowButton";

function AuthorHero() {
  return (
    <section className="author-hero">
      <div className="author-container">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
          alt="Author"
          className="author-image"
        />

        <div className="author-content">
          <h1 className="author-name">Elena Vance</h1>

          <p className="author-genre">
            Historical Fiction & Literary Noir
          </p>

          <div className="author-stats">
            <div>
              <h3>14</h3>
              <p>Books</p>
            </div>

            <div>
              <h3>32</h3>
              <p>Awards</p>
            </div>

            <div>
              <h3>85K</h3>
              <p>Followers</p>
            </div>
          </div>

          <p className="author-description">
            Elena Vance is the internationally bestselling
            author of twelve novels, known for atmospheric
            prose and meticulously researched historical
            settings.
          </p>

          <div className="follow-btn-wrapper">
            <FollowButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthorHero;