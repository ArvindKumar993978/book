import { useState } from "react";
import "./FollowButton.css";

function FollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <button
      onClick={() => setFollowing(!following)}
      className={`follow-btn ${following ? "following" : "not-following"}`}
    >
      {following ? "Following" : "Follow Author"}
    </button>
  );
}

export default FollowButton;