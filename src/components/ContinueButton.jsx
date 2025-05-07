import React from 'react';

function ContinueButton({ onClick, disabled }) {
  return (
    <button className="continue-btn" onClick={onClick} disabled={disabled}>
      Continue
    </button>
  );
}

export default ContinueButton; 