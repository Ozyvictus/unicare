import React from 'react';
import logo from '../assets/logo.png';
import '../style.css'
const NoticesSection = () => {
  return (
    <div className="notices-section">
      <div className="notices-overlay"></div>
      <div className="circle-decoration circle-1"></div>
      <div className="circle-decoration circle-2"></div>
      <div className="circle-decoration circle-3"></div>
      
      <div className="notices-content">
        <div className="logo">
          <div className="logo-circle">
            <div className="logo-icon"></div>
          </div>
          <div className="logo-text">UniHealth</div>
        </div>
        
        <h1 className="notices-title">University Healthcare Notices</h1>
        <p className="notices-subtitle">Stay informed about health services, vaccination clinics, and wellness programs across campus.</p>
        
        <div className="notices-list">
          <div className="notice-card">
            <div className="notice-date">March 8, 2025</div>
            <h3 className="notice-title">Spring Vaccination Clinic</h3>
            <p className="notice-content">The university health center will be offering free flu vaccinations for all students and staff from March 15-20. Visit the health center between 9am-4pm, no appointment needed.</p>
          </div>
          
          <div className="notice-card">
            <div className="notice-date">March 5, 2025</div>
            <h3 className="notice-title">Mental Health Awareness Week</h3>
            <p className="notice-content">Join us for a series of workshops, support groups, and resources focused on student mental health and wellness from March 12-19 at the Student Center.</p>
          </div>
          
          <div className="notice-card">
            <div className="notice-date">March 1, 2025</div>
            <h3 className="notice-title">New Telehealth Services Available</h3>
            <p className="notice-content">Students can now access medical and counseling appointments remotely through our new secure telehealth platform. Login to your student portal to schedule.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesSection;
