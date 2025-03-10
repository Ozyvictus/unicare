import React from 'react';
import '../style.css';

function NotificationBanner() {
  const notifications = [
    "COVID-19 Booster Shots Available Now",
    "Mental Health Awareness Week: April 5-9",
    "Flu Season Alert: Get Vaccinated Today",
    "24/7 Telehealth Services Available for Students",
    "New Mindfulness Workshops Starting Next Week"
  ];

  return (
    <div className="notification-banner">
      <div className="notification-content">
        {notifications.join(" | ")}
      </div>
    </div>
  );
}

export default NotificationBanner;
