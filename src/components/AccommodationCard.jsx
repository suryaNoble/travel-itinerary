import React from 'react';

function AccommodationCard({ hotelName, checkIn, checkOut, nights, status, image }) {
  return (
    <div className="accommodation-card">
      <img src={image} alt={hotelName} className="accommodation-img" />
      <div className="accommodation-info">
        <div className="hotel-name">{hotelName}</div>
        <div className="hotel-dates">Check in: {checkIn}<br />Check out: {checkOut}</div>
        <div className="hotel-meta">
          <span>{nights} Nights</span>
          <span className={`hotel-status ${status.toLowerCase()}`}>{status}</span>
        </div>
      </div>
    </div>
  );
}

export default AccommodationCard; 