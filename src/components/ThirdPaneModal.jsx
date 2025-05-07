import React from 'react';

function ThirdPaneModal({ open, content, onClose }) {
  if (!open) return null;
  return (
    <div className="third-pane-modal-overlay" onClick={onClose}>
      <div className="third-pane-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="third-pane-content">
          <h3>More Details: {content}</h3>
          <p>This is the third pane/modal for {content} details.</p>
        </div>
      </div>
    </div>
  );
}

export default ThirdPaneModal; 