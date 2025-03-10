import React from 'react';
import "../style.css"

function Profile() {
  return (
    <header className="header">
      <div className="header-back">
        <span className="back-icon">←</span>
        <span>Back to LogIn</span>
      </div>
        <div className="user-profile">
          <img src="https://avatar.iran.liara.run/public/job/doctor/male" alt="Dr. Alex Haas" className="user-avatar" />
          <span className="user-name">Dr. Alex Haas</span>
          <span className="dropdown-icon">▼</span>
        </div>
    </header>
  );
};

export default Profile;
