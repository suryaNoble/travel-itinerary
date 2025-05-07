import React from "react";
import "../styles/dashboard.css";

function BottomNavBar() {
  return (
    <div className="bottom-nav-wrapper">
      <nav className="bottom-nav">
        <button className="nav-btn active" title="Home">
          🏠
        </button>
        <button className="nav-btn" title="Add">
          ➕
        </button>
        <button className="nav-btn" title="Favorites">
          ❤️
        </button>
        <button className="nav-btn" title="Profile">
          👤
        </button>
      </nav>
    </div>
  );
}

export default BottomNavBar;
