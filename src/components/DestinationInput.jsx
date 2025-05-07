import React from 'react';

function DestinationInput({ value, onChange }) {
  return (
    <div className="input-group">
      <span className="input-icon" role="img" aria-label="location">📍</span>
      <input
        type="text"
        placeholder="Enter Destination"
        value={value}
        onChange={onChange}
        className="onboarding-input"
      />
    </div>
  );
}

export default DestinationInput; 