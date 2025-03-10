import React from 'react';
import "../style.css"

function Profile() {
  return (
    <header className="header">
      <div className="header-back">
        <span className="back-icon">←</span>
        <span>Back to dashboard</span>
      </div>
      <div className="header-user">
        <div className="notifications">
          <span className="notification-icon"></span>
        </div>
        <div className="user-profile">
          <img src="/api/placeholder/32/32" alt="Dr. Alex Haas" className="user-avatar" />
          <span className="user-name">Dr. Alex Haas</span>
          <span className="dropdown-icon">▼</span>
        </div>
      </div>
    </header>
  );
};

export default Profile;
