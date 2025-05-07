import React from 'react';
import AccommodationCard from './AccommodationCard';

function AccommodationSection({ onSeeAll }) {
  return (
    <div className="accommodation-section">
      <div className="section-header">
        <span>Accomodation</span>
        <button className="seeall-btn" onClick={onSeeAll}>See all</button>
      </div>
      <div className="accommodation-list">
        <AccommodationCard
          hotelName="Shinagawa Prince Hotel"
          checkIn="26.01.2025, 11:15 am"
          checkOut="28.01.2025, 11:15 am"
          nights={2}
          status="Confirmed"
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        />
        <AccommodationCard
          hotelName="Mercure Tokyo Hotel"
          checkIn="28.01.2025, 6:00 pm"
          checkOut="02.02.2025, 11:15 am"
          nights={2}
          status="Pending"
          image="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
        />
      </div>
    </div>
  );
}

export default AccommodationSection; 