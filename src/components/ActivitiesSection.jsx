import React, { useState } from "react";
import ActivityCard from "./ActivityCard";

const days = [
  "MON 27",
  "TUE 28",
  "WED 29",
  "THU 30",
  "FRI 31",
  "SAT 01",
  "SUN 02",
];

const activities = [
  {
    day: 0,
    title: "Senso-ji Temple & Nakamise Shopping Street",
    timing: "8:15 am Morning",
    duration: "3 hours",
    pickup: "From Hotel",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    day: 0,
    title: "Tokyo Sky Tree",
    timing: "1:00 pm Afternoon",
    duration: "3 hours",
    pickup: "From Nakamise Street",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    day: 0,
    title: "Kimono Wearing",
    timing: "Anytime before 8:00pm",
    duration: "2 hours",
    pickup: "From Hotel",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
];

function ActivitiesSection({ onSeeAll }) {
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <div className="activities-section">
      <div className="section-header">
        <span>Activities</span>
        <button className="seeall-btn" onClick={onSeeAll}>
          See all
        </button>
      </div>

      {/* Apply scroll styling only to this wrapper */}
      <div className="day-tabs activities-scroll">
        {days.map((d, i) => (
          <button
            key={d}
            className={`day-tab${selectedDay === i ? " active" : ""}`}
            onClick={() => setSelectedDay(i)}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="activity-list">
        {activities
          .filter((a) => a.day === selectedDay)
          .map((a, idx) => (
            <ActivityCard key={idx} {...a} />
          ))}
      </div>
    </div>
  );
}

export default ActivitiesSection;
