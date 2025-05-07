import React from 'react';

const groups = [
  { label: 'Solo', icon: '🧑' },
  { label: 'Couple', icon: '👫' },
  { label: 'Family', icon: '👨‍👩‍👧‍👦' },
  { label: 'Friends', icon: '👬' },
];

function TravelGroupSelector({ selectedGroup, onSelect }) {
  return (
    <div className="group-selector">
      {groups.map((group) => (
        <button
          key={group.label}
          className={`group-btn${selectedGroup === group.label ? ' selected' : ''}`}
          onClick={() => onSelect(group.label)}
          type="button"
        >
          <span className="group-icon" role="img" aria-label={group.label}>{group.icon}</span>
          {group.label}
        </button>
      ))}
    </div>
  );
}

export default TravelGroupSelector; 