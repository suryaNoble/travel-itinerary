import React from "react";

function UpcomingTripCard({ onSeeAll }) {
  return (
    <div className="upcoming-trip-card">
      <div
        className="trip-image"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)",
          height: "340px",
        }}
      >
        <div className="trip-title-row">
          <div className="trip-title">TOKYO</div>
          <button
            className="trip-seeall-btn"
            onClick={onSeeAll}
            title="See all"
          >
            ↗
          </button>
        </div>
        <div className="trip-dates">27.01.2025 - 02.02.2025</div>
        <div className="trip-stats">
          <span>🕒 8 Days</span>
          <span>👨‍👩‍👧‍👦 4 (2M, 2F)</span>
          <span>🎯 14 Activities</span>
        </div>
      </div>
    </div>
  );
}

export default UpcomingTripCard;
