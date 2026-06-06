import { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [tab, setTab] = useState("description");

  return (
    <div className="tabs">

      {/* Tab Buttons */}
      <div className="tab-header">

        <button
          className={`tab-btn ${tab === "description" ? "active" : ""}`}
          onClick={() => setTab("description")}
        >
          Description
        </button>

        <button
          className={`tab-btn ${tab === "reviews" ? "active" : ""}`}
          onClick={() => setTab("reviews")}
        >
          Reviews
        </button>

        <button
          className={`tab-btn ${tab === "author" ? "active" : ""}`}
          onClick={() => setTab("author")}
        >
          Author
        </button>

      </div>

      {/* Tab Content */}
      <div className="tab-content">

        {tab === "description" && (
          <p>
            Between life and death there is a library...
          </p>
        )}

        {tab === "reviews" && (
          <p>Customer reviews content...</p>
        )}

        {tab === "author" && (
          <p>Matt Haig is a bestselling author...</p>
        )}

      </div>

    </div>
  );
}

export default Tabs;