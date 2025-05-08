import React from "react";

function DurationSelect({ value, onChange, options }) {
  return (
    <div className="select-wrapper">
      <span>📅</span>
      <select className="onboarding-input" value={value} onChange={onChange}>
        <option value="">Select Duration</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DurationSelect;
