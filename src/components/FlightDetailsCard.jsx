import React from "react";
import planeImg from "../assets/plane.png";

function FlightDetailsCard({ onSeeAll }) {
  return (
    <div className="flight-details-card">
      <div className="flight-header">
        <span>Flight Details</span>
        <button className="seeall-btn" onClick={onSeeAll}>
          See all
        </button>
      </div>
      <div className="flight-info">
        <div className="flight-route">
          <span className="flight-from">DEL</span>
          <span className="flight-arrow">→</span>
          <span className="flight-to">NRT</span>
        </div>
        <div className="flight-meta">
          <span>Delhi, India</span>
          <span>→</span>
          <span>Tokyo, Japan</span>
        </div>
        <div className="flight-date">26.01.2025, 10:50 am</div>
      </div>

      <img src={planeImg} alt="Plane" className="plane-icon" />
    </div>
  );
}

export default FlightDetailsCard;
