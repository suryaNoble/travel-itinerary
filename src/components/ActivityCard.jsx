import React from 'react';

function ActivityCard({ title, timing, duration, pickup, image }) {
  return (
    <div className="activity-card">
      <img src={image} alt={title} className="activity-img" />
      <div className="activity-info">
        <div className="activity-title">{title}</div>
        <div className="activity-meta">
          <span>Timing: {timing}</span>
          <span>Duration: {duration}</span>
          <span>Pick up: {pickup}</span>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard; 