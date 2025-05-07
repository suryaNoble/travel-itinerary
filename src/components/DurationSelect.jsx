import React from 'react';

function DurationSelect({ value, onChange, options }) {
  return (
    <div className="input-group">
      <span className="input-icon" role="img" aria-label="calendar">📅</span>
      <select
        className="onboarding-input"
        value={value}
        onChange={onChange}
      >
        <option value="">Select Duration</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  ); 
}

export default DurationSelect; 