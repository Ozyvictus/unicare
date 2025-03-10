import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faVideo, faUserMd } from '@fortawesome/free-solid-svg-icons';

function AppointmentSection() {
  return (
    <div className="section">
      <h2 className="section-title">Doctor Appointments</h2>
      <div className="card">
        <div className="card-content">
          <p className="card-text">Schedule appointments with our campus doctors for check-ups, consultations, or specific health concerns.</p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3 className="feature-title">Same-day Appointments</h3>
              <p className="feature-description">Get urgent care with our same-day appointment option</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <h3 className="feature-title">Virtual Consultations</h3>
              <p className="feature-description">Connect with doctors remotely through video calls</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUserMd} />
              </div>
              <h3 className="feature-title">Specialist Referrals</h3>
              <p className="feature-description">Get referrals to specialists when needed</p>
            </div>
          </div>
          
          <button className="btn">Schedule Now</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentSection;
